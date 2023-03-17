<template>
    <AppLayout>
        <k-page-header :title="issue.data.title" :breadcrumb_items="breadcrumbs"/>

        <v-alert
            v-if="!in_department"
            color="primary"
            dark
            height="60"
            icon="warning"
            dense
        >
            <span class="title">This issue is not in your department.</span>
        </v-alert>
        <v-card flat :disabled="form.processing">
            <v-card-text>
                <v-layout wrap>
                    <v-flex>
                        <v-card flat>
                            <v-card-text>
                                <h2 class="title">Department : {{ issue.data.department.name }}</h2>
                                <h2 class="title text-capitalize">Status : {{ issue.data.status |snakeToSentence }}</h2>
                                <h2 class="title text-capitalize">Priority :
                                    <v-chip outlined color="primary">
                                        <v-icon class="mr-2" :color="priority_icons[issue.data.priority].color">{{priority_icons[issue.data.priority].icon}}</v-icon>   {{ issue.data.priority }}
                                    </v-chip>
                                </h2>
                                <h2 class="title"> Description</h2>
                                <h2 class="subtitle-1"> {{ issue.data.description }}</h2>

                                <v-card outlined>
                                    <v-card-title>
                                        Attachments


                                    </v-card-title>
                                    <v-card-text>

                                        <v-list dense>
                                            <template v-for="(file_item,index) in form.existing_attachments">
                                                <v-list-item>
                                                    <v-list-item-action>
                                                        <div class="d-flex align-end">
                                                            <v-img
                                                                v-if="file_item.type=='image'"
                                                                :src="getDownloadLink(index)"
                                                                height="100"
                                                                width="200"
                                                                style="cursor: pointer"
                                                                @click="openPreview(index)"
                                                            >
                                                            </v-img>
                                                            <video controls width="250"
                                                                   v-else-if="file_item.type=='video'">
                                                                <source :src="route('dev:issues.preview',{
                                                issue:issue.data.id,
                                                attachment:index
                                            })"
                                                                        type="video/webm">
                                                                <source :src="route('dev:issues.preview',{
                                                issue:issue.data.id,
                                                attachment:index
                                            })"
                                                                        type="video/mp4">

                                                                Sorry, your browser doesn't support embedded videos.


                                                            </video>
                                                            <v-btn text plain :ripple="false" v-else>
                                                                {{ file_item.extension }}
                                                            </v-btn>


                                                            <a v-if="file_item.type=='video'||file_item.type=='image'||file_item.type=='pdf'"
                                                               class="mx-3 text-decoration-none text-button" :href="route('dev:issues.preview',{
                                                issue:issue.data.id,
                                                attachment:index
                                            })" target="_blank">
                                                                Preview in new tab
                                                            </a>

                                                            <a class="mx-3 text-decoration-none text-button" :href="route('dev:issues.download',{
                                                issue:issue.data.id,
                                                attachment:index
                                            })">download</a>
                                                        </div>

                                                    </v-list-item-action>
                                                </v-list-item>
                                                <v-divider v-if="form.existing_attachments.length >1"/>
                                            </template>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex>
                        <v-card flat :disabled="!can_edit">
                            <v-card-text>
                                <label for="status">Status</label>
                                <v-select id="status"
                                          dense outlined
                                          :items="statuses"
                                          item-value="id"
                                          :error-messages="form.errors.status"
                                          placeholder="Select Status"
                                          v-model="form.status"
                                          item-text="name">
                                    <template v-slot:selection="data">

                                        {{ data.item |snakeToSentence }}
                                    </template>
                                    <template v-slot:item="data">
                                        <template v-if="typeof data.item !== 'object'">
                                            {{ data.item |snakeToSentence }}
                                        </template>
                                    </template>
                                </v-select>
                                <label for="milestone">Milestone</label>
                                <v-menu
                                    id="milestone"
                                    v-model="milestoneMenu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">

                                        <v-text-field

                                            v-model="form.milestone"
                                            prepend-inner-icon="mdi-calendar"
                                            outlined
                                            readonly
                                            :error-messages="form.errors.milestone"
                                            dense
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.milestone"
                                        @input="milestoneMenu = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary"
                                       :loading="form.processing"
                                       @click="updateIssue"
                                >
                                    Update
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
        <k-snack-bar ref="snackbar"/>
        <CoolLightBox
            :items="image_previews"
            :index="image_index"
            @close="image_index = null"></CoolLightBox>
    </AppLayout>
</template>

<script>
import AppLayout from "../../../Layouts/AppLayout";
import KPageHeader from "../../../Karajkom/KPageHeader";
import KSnackBar from "../../../Karajkom/KSnackBar";
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import CoolLightBox from 'vue-cool-lightbox'

export default {
    name: "Edit",
    metaInfo() {
        return {title: 'Edit Issue'}
    },
    components: {KSnackBar, KPageHeader, AppLayout, CoolLightBox},
    props: {
        issue: Object,
        statuses: Array,
        can_edit: Boolean,
        priority_icons: Object,
        in_department: Boolean,
    },
    data() {
        return {
            breadcrumbs: [
                {
                    text: 'dashboard',
                    disabled: false,
                    href: route('dev:dashboard'),
                },
                {
                    text: 'Issues',
                    disabled: false,
                    href: route('dev:issues'),
                },
                {
                    text: 'Edit',
                    disabled: true,
                    href: route('dev:issues.edit', this.issue.data.id),
                }

            ],
            form: this.$inertia.form({
                status: this.issue.data.status,
                milestone: this.issue.data.milestone,
                existing_attachments: this.getFormattedAttachments(this.issue.data.attachments_formatted),
            }),
            milestoneMenu: null,
            image_previews: [],
            image_index: null,
        }
    },
    methods: {
        updateIssue() {

            this.form.post(route('dev:issues.update', this.issue.data.id), {
                onSuccess: () => {
                    this.$refs.snackbar.open('Issue updated successfully', 'success');
                },
            });
        },
        getFormattedAttachments(attachments) {
            return attachments.map(attachment => {
                return {
                    extension: attachment.extension,
                    type: this.getFileType(attachment.extension),

                }
            })

        },
        getFileType(extension) {
            let image_types = ['jpeg', 'png', 'jpg', 'gif', 'svg'];
            let video_types = ['mp4', 'webm',];
            let pdf = ['pdf'];

            if (image_types.includes(extension)) {
                return 'image';
            } else if (video_types.includes(extension)) {
                return 'video';
            } else if (pdf.includes(extension)) {
                return 'pdf';
            } else {
                return 'file';
            }
        },
        openPreview(index) {
            this.image_index = 0;
            this.image_previews[0] = this.getDownloadLink(index)
        },
        getDownloadLink(index) {
            return route('dev:issues.download', [this.issue.data.id, index])
        }
    }
}
</script>

<style scoped>

</style>
