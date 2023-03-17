<template>
    <AppLayout>
        <k-page-header title="Create Issue" :breadcrumb_items="breadcrumbs"/>
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

                            <v-icon class="mr-2" :color="priority_icons[data.item].color">{{priority_icons[data.item].icon}}</v-icon>  {{ data.item |snakeToSentence }}
                        </template>
                        <template v-slot:item="data">
                            <template v-if="typeof data.item !== 'object'">
                              <v-icon class="mr-2" :color="priority_icons[data.item].color">{{priority_icons[data.item].icon}}</v-icon>  {{ data.item |snakeToSentence }}
                            </template>
                        </template>
                    </v-select>

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
                        @click.native.prevent="createIssue"
                        :loading="form.processing"
                        class="text-capitalize"
                    >
                        Create
                    </v-btn>
                </v-card-actions>

            </form>
        </v-card>
        <k-snack-bar ref="snackbar"/>
    </AppLayout>
</template>

<script>
import AppLayout from "../../../Layouts/AppLayout";
import KPageHeader from "../../../Karajkom/KPageHeader";
import KSnackBar from "../../../Karajkom/KSnackBar";

export default {
    name: "Create",
    metaInfo() {
        return {title: 'Create Issue'}
    },
    components: {KSnackBar, KPageHeader, AppLayout},
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
                    text: 'Create',
                    disabled: true,
                    href: route('admin:issues.create'),
                }

            ],
            form: this.$inertia.form({
                title: null,
                department: null,
                priority: null,
                description: null,
                attachments: [],
                delete_files_after_complete: true,
            }),
        }
    },
    props: {
        departments: Object,
        priorities: Array,
        priority_icons: Object,
    },
    methods: {
        resetForm() {
            this.form.reset();
            this.form.clearErrors();
        },
        createIssue() {
            this.form.post(route('admin:issues.store'), {
                onSuccess: () => {
                    this.$refs.snackbar.open(
                        'Issue created successfully',
                        'success'
                    )
                    this.resetForm();
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

        }
    }
}
</script>

<style scoped>

</style>
