<template>
    <AppLayout>
        <k-page-header :title="issue.data.title" :breadcrumb_items="breadcrumbs"/>
        <v-card flat :disabled="form.processing">
            <form>
                <v-card-text>
                    <label for="title">Title</label>
                    <v-text-field
                        id="title"
                        outlined
                        v-model="form.title"
                        :error-messages="form.errors.title"
                        dense
                    />
                    <label for="department">Department</label>
                    <v-autocomplete
                        id="department"
                        outlined
                        dense
                        v-model="form.department"
                        :error-messages="form.errors.department"
                        :items="departments.data"
                        item-text="name"
                        item-value="id"/>

                    <label for="priority">Priority</label>
                    <v-select
                        id="priority"
                        outlined
                        :items="priorities"
                        v-model="form.priority"
                        :error-messages="form.errors.priority"
                        dense>
                        <template v-slot:selection="data">

                            <v-icon class="mr-2" :color="priority_icons[data.item].color">
                                {{ priority_icons[data.item].icon }}
                            </v-icon>
                            {{ data.item |snakeToSentence }}
                        </template>
                        <template v-slot:item="data">
                            <template v-if="typeof data.item !== 'object'">
                                <v-icon class="mr-2" :color="priority_icons[data.item].color">
                                    {{ priority_icons[data.item].icon }}
                                </v-icon>
                                {{ data.item |snakeToSentence }}
                            </template>
                        </template>
                    </v-select>
<!--from here -->
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
<!--to here-->
                    <label for="description">Description</label>
                    <v-textarea
                        id="description"
                        outlined
                        v-model="form.description"
                        :error-messages="form.errors.description"
                        dense/>

                    <v-card outlined>
                        <v-card-title>
                            Attachments
                            <v-spacer/>
                            <v-btn
                                fab
                                small
                                color="primary"
                                @click="openAttachmentsDialog"
                                class="elevation-1">
                                <v-icon>add</v-icon>
                            </v-btn>
                            <input
                                ref="attachments"
                                class="d-none"
                                type="file"
                                accept="image/*,video/*"
                                multiple

                                @change="addFilesToAttachments"
                            />

                        </v-card-title>
                        <v-card-text>

                            <v-list dense>
                                <template v-for="(file_item,index) in form.existing_attachments">
                                    <v-list-item>
                                        <v-list-item-action>
                                            <div class="d-flex align-end">
                                                <v-img
                                                    v-if="file_item.type=='image'"
                                                    :src="getDownloadLink(file_item.index)"
                                                    height="100"
                                                    width="200"
                                                    style="cursor: pointer"
                                                    @click="openPreview(file_item.index)"
                                                >
                                                </v-img>
                                                <video controls width="250" v-if="file_item.type=='video'">
                                                    <source :src="route('admin:issues.preview',{
                                                issue:issue.data.id,
                                                attachment:file_item.index
                                            })"
                                                            type="video/webm">
                                                    <source :src="route('admin:issues.preview',{
                                                issue:issue.data.id,
                                                attachment:file_item.index
                                            })"
                                                            type="video/mp4">

                                                    Sorry, your browser doesn't support embedded videos.


                                                </video>
                                                <a v-if="file_item.type=='video'||file_item.type=='image'||file_item.type=='pdf'"
                                                   class="mx-3 text-decoration-none text-button" :href="route('admin:issues.preview',{
                                                issue:issue.data.id,
                                                attachment:file_item.index
                                            })" target="_blank">
                                                    Preview in new tab
                                                </a>

                                                <a class="mx-3 text-decoration-none text-button" :href="route('admin:issues.download',{
                                                issue:issue.data.id,
                                                attachment:file_item.index
                                            })">download</a>

                                                <v-btn color="secondary" class="text-capitalize" outlined small
                                                       @click="deleteFromExisting(file_item)">
                                                    delete
                                                </v-btn>
                                            </div>

                                        </v-list-item-action>
                                    </v-list-item>
                                    <v-divider v-if="form.existing_attachments.length >1"/>
                                </template>
                                <template v-for="(file_item,index) in form.attachments">
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ getFileInfo(file_item).name }}</v-list-item-title>
                                            <v-list-item-subtitle>{{
                                                    getFileInfo(file_item).size |byte_to_readable
                                                }}
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle>{{
                                                    getFileInfo(file_item).type
                                                }}
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn icon color="error" @click="removeFromAttachments(index)">
                                                <v-icon>close</v-icon>
                                            </v-btn>
                                        </v-list-item-action>
                                    </v-list-item>
                                    <v-divider v-if="form.attachments.length >1"/>
                                </template>
                            </v-list>
                            <v-progress-linear
                                v-if="form.progress"
                                v-model="form.progress.percentage"
                                height="25"
                            >
                                <template v-slot:default="{ value }">
                                    <strong>{{ form.progress.percentage }}%</strong>
                                </template>
                            </v-progress-linear>
                        </v-card-text>
                    </v-card>
                    <v-checkbox v-model="form.delete_files_after_complete"
                                label="Delete files after complete"></v-checkbox>
                </v-card-text>

                <v-card-actions>

                    <v-spacer/>
                    <v-btn
                        color="secondary"
                        type="submit"
                        @click.native.prevent="resetForm"
                        outlined
                        class="text-capitalize"
                    >
                        Reset
                    </v-btn>
                    <v-btn
                        color="primary"
                        type="submit"
                        @click.native.prevent="updateIssue"
                        :loading="form.processing"
                        class="text-capitalize"
                    >
                        Update
                    </v-btn>
                </v-card-actions>

            </form>
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
    data() {
        return {
            breadcrumbs: [
                {
                    text: 'dashboard',
                    disabled: false,
                    href: route('admin:dashboard'),
                },
                {
                    text: 'Issues',
                    disabled: false,
                    href: route('admin:issues'),
                },
                {
                    text: 'Edit',
                    disabled: true,
                    href: route('admin:issues.edit', this.issue.data.id),
                }

            ],
            form: this.$inertia.form({
                title: this.issue.data.title,
                status: this.issue.data.status,//this part
                department: this.issue.data.department_id,
                delete_files_after_complete: this.issue.data.delete_files_after_complete,
                priority: this.issue.data.priority,
                description: this.issue.data.description,
                attachments: [],
                deleted_attachments: [],
                existing_attachments: this.getFormattedAttachments(this.issue.data.attachments_formatted),
            }),
            image_previews: [],
            image_index: null,
        }
    },
    props: {
        issue: Object,
        departments: Object,
        priorities: Array,
        statuses: Array,
        priority_icons: Object
    },
    methods: {
        resetForm() {
            this.form.reset();
            this.form.clearErrors();
        },
        updateIssue() {
            this.form.post(route('admin:issues.update', this.issue.data.id), {
                onSuccess: () => {
                    this.$refs.snackbar.open(
                        'Issue Updated successfully',
                        'success'
                    )
                },
            })
        },
        addFilesToAttachments(e) {
            const files = e.target.files
            Array.from(files).forEach(file => this.form.attachments.push(file))
        },
        openAttachmentsDialog() {
            this.$refs.attachments.click();
        },
        getFileInfo(file) {
            return {
                name: file.name,
                size: file.size,
                type: file.type,
                src: URL.createObjectURL(file)
            }
        },
        removeFromAttachments(index) {
            this.form.attachments.splice(index, 1);

        },
        getFormattedAttachments(attachments) {
            return attachments.map(attachment => {
                return {
                    attachment: attachment.attachment,
                    extension: attachment.extension,
                    type: this.getFileType(attachment.extension),
                    index: attachment.index,

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
            return route('admin:issues.download', [this.issue.data.id, index])
        },
        deleteFromExisting(file_item) {
            console.log(file_item)
            this.form.deleted_attachments.push(file_item.attachment)
            let index = this.form.existing_attachments.find(attachment => attachment.attachment == file_item.attachment)
            this.form.existing_attachments.splice(index, 1);
        }
    }
}
</script>

<style scoped>

</style>
