<template>
    <AppLayout>
        <k-page-header show-query-params :get-department-name="getDepartmentName" title="Issues"
                       :breadcrumb_items="breadcrumbs"/>

        <v-data-table
            :items="issues.data"
            :headers="headers"
            :options.sync="options"
            :items-per-page="itemsPerPage"
            hide-default-footer
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-text-field
                        @focus="$event.target.select()"
                        prepend-inner-icon="search"
                        v-model="search"
                        clearable
                        @keyup.enter="searchData"
                        @click:clear="searchDataClear"
                        hide-details
                        placeholder="Type and hit enter to search"
                        class="mr-3"
                        solo
                        dense
                        append-icon="filter_list"
                        autofocus>
                        <template v-slot:append>
                            <v-btn icon @click="filter_drawer=true">
                                <v-icon>filter_list</v-icon>
                            </v-btn>
                        </template>
                    </v-text-field>

                    <v-btn color="accent" class="text-capitalize"
                           @click="$inertia.visit(route('admin:issues.create'))">
                        <v-icon>add</v-icon>

                        <template v-if="$vuetify.breakpoint.smAndUp">
                            Create
                        </template>
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-for="header in headers.filter((header) => header.hasOwnProperty('formatter'))"
                      v-slot:[`item.${header.value}`]="{ header, value }">
                {{ header.formatter(value) }}
            </template>
            <template v-slot:footer>
                <k-data-table-footer :items-per-page="itemsPerPage" :page-meta="issues.meta"
                                     @onItemsPerPageChange="changeItemsPerPage"/>

            </template>
            <template v-slot:item.department="{item}">
                {{ item.department.name }}

            </template>
            <template v-slot:item.status="{item}">
                {{ item.status|snakeToSentence }}

            </template>

            <template v-slot:item.title="{item}">
                <span class="k-cursor--pointer" @click="$inertia.visit(route('admin:issues.edit',item.id))">
                    {{ item.title }}
                </span>

            </template>

            <template v-slot:item.priority="{item}">
                <v-icon class="mr-2" :color="priority_icons[item.priority].color">
                    {{ priority_icons[item.priority].icon }}
                </v-icon>
                {{ item.priority |snakeToTitle }}

            </template>
            <template v-slot:item.actions="{item}">


                <v-btn icon color="primary" @click="$inertia.visit(route('admin:issues.edit',item.id))">
                    <v-icon>edit</v-icon>
                </v-btn>

                <v-btn icon color="error" @click="openDuplicateToDepartmentDialog(item)">
                    <v-icon>sync</v-icon>
                </v-btn>
                <k-confirmed-action :executor="deleteItem.bind(null,item.id)"
                                    v-slot="scope">
                    <v-btn icon color="error" @click.native="scope.confirm">
                        <v-icon>delete</v-icon>
                    </v-btn>
                </k-confirmed-action>


            </template>
        </v-data-table>

        <v-navigation-drawer right app temporary v-model="filter_drawer">
            <v-list dense>
                <v-list-item>
                    <v-list-item-title>Filter Data</v-list-item-title>
                </v-list-item>
                <v-divider/>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <label for="status">Status</label>
                            <v-select id="status"
                                      dense outlined
                                      :items="statuses"
                                      item-value="id"
                                      @change="onChangeStatus"
                                      placeholder="Select Status"
                                      clearable
                                      v-model="filters.status"
                                      hide-details
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
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <label for="priority">Priority</label>
                            <v-select id="priority"
                                      dense outlined
                                      :items="priorities"
                                      item-value="id"
                                      placeholder="Select Priority"
                                      v-model="filters.priority"
                                      clearable
                                      hide-details
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
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <label for="status">Department</label>
                            <v-autocomplete
                                id="department"
                                outlined
                                dense
                                hide-details
                                v-model="filters.department"
                                :items="departments.data"
                                clearable
                                item-text="name"
                                item-value="id">

                            </v-autocomplete>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <label for="reportedby">Reported By</label>
                            <v-select
                                id="reportedby"
                                outlined
                                dense
                                hide-details
                                clearable
                                v-model="filters.reportedBy"
                                :items="reportedBy"
                            />
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item v-if="!filters.status">
                    <v-list-item-content>
                        <v-list-item-title>

                            <v-switch
                                dense
                                hide-details
                                label="Show Completed"
                                v-model="filters.show_completed"
                            />
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>

                            <v-switch
                                dense
                                hide-details
                                label="Only Overdue"
                                v-model="filters.only_overdue"
                            />
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-divider/>
                <v-list-item>
                    <v-list-item-content>

                        <v-btn
                            class="text-capitalize"
                            color="primary"
                            @click="reloadPage"
                        >
                            Filter
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>

                        <!--                clear filters-->
                        <v-btn
                            class="text-capitalize"
                            color="secondary"
                            outlined
                            @click="clearFilters"
                        >
                            Clear
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>

        <v-dialog v-model="duplicateToDepartmentDialog" persistent
                  :width="$vuetify.breakpoint.smAndDown ? '100%' : '50%'">
            <v-card :disabled="duplicateToDepartmentForm.processing">
                <v-card-title>
                    <span class="headline">Duplicate To Department</span>
                    <v-spacer></v-spacer>
                    <v-btn icon color="error" @click.native="closeDuplicateToDepartmentDialog">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <label for="department">Department</label>
                    <v-autocomplete
                        id="department"
                        outlined
                        multiple
                        dense
                        v-model="duplicateToDepartmentForm.department"
                        :error-messages="duplicateToDepartmentForm.errors.department"
                        :items="duplicatableDepartments"
                        item-text="name"
                        item-value="id"/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <k-confirmed-action :executor="duplicateToDepartment"
                                        v-slot="scope">
                        <v-btn color="primary" class="text-capitalize" @click.native="scope.confirm"
                               :loading="duplicateToDepartmentForm.processing">
                            Duplicate
                        </v-btn>
                    </k-confirmed-action>
                </v-card-actions>

            </v-card>
        </v-dialog>
        <k-snack-bar ref="snackbar"/>
    </AppLayout>
</template>

<script>
import AppLayout from "../../../Layouts/AppLayout";
import KPageHeader from "../../../Karajkom/KPageHeader";
import _ from "lodash";
import KDataTableFooter from "../../../Karajkom/KDataTableFooter";
import KConfirmedAction from "../../../Karajkom/KConfirmedAction";
import KSnackBar from "../../../Karajkom/KSnackBar";

export default {
    name: "Index",
    metaInfo() {
        return {title: 'Issues'};
    },
    components: {KSnackBar, KConfirmedAction, KDataTableFooter, KPageHeader, AppLayout},
    data() {
        return {
            breadcrumbs: [
                {
                    disabled: false,
                    text: 'dashboard',
                    href: route('admin:dashboard'),
                },
                {
                    text: 'Issues',
                    disabled: true,
                    href: route('admin:issues'),
                }

            ],
            options: {
                sortBy: [this.route().params.sortBy ? this.route().params.sortBy : null],
                sortDesc: [this.route().params.sortDesc ? !!+this.route().params.sortDesc : null],

            },
            firstPaint: true,
            search: this.route().params.term ? this.route().params.term : '',
            filter_drawer: false,
            filters: {
                status: this.route().params.status ? this.route().params.status : null,
                priority: this.route().params.priority ? this.route().params.priority : null,
                reportedBy: this.route().params.reportedBy ? this.route().params.reportedBy : null,
                department: this.route().params.department ? this.route().params.department : null,
                show_completed: this.route().params.show_completed ? !!parseInt(this.route().params.show_completed) : null,
                only_overdue: (this.route().params.only_overdue) ? !!parseInt(this.route().params.only_overdue) : null,
            },
            reportedBy: ['ME', 'OTHERS'],
            headers: [
                // {
                //     text: 'ID',
                //     align: 'start',
                //     value: 'id',
                // },
                {
                    text: 'Title',
                    align: 'start',
                    value: 'title',
                },
                {
                    text: 'Priority',
                    align: 'start',
                    value: 'priority',
                    formatter: (x) => (x ? this.$options.filters.snakeToTitle(x) : null),
                },
                {
                    text: 'Status',
                    align: 'start',
                    value: 'status',
                },
                {
                    text: 'Department',
                    align: 'start',
                    value: 'department',
                },
                {
                    text: 'Milestone',
                    align: 'start',
                    value: 'milestone',
                }, {
                    text: 'Time Left',
                    align: 'start',
                    value: 'time_left',
                },
                {
                    text: 'Updated At',
                    align: 'start',
                    value: 'updated_at',
                    formatter: (x) => (x ? this.$options.filters.date_time(x) : null),
                },

                {
                    text: 'Created At',
                    align: 'start',
                    value: 'created_at',
                    formatter: (x) => (x ? this.$options.filters.date_time(x) : null),
                },
                {
                    text: '',
                    value: 'actions',
                    sortable: false,
                },
            ],
            itemsPerPage: parseInt(this.route().params.itemsPerPage) ? parseInt(this.route().params.itemsPerPage) : 10,
            duplicateToDepartmentDialog: false,
            duplicateToDepartmentForm: this.$inertia.form({
                id: null,
                department: [],
                current_department: null,
            })

        }
    },
    props: {
        issues: Object,
        priority_icons: Object,
        statuses: Array,
        priorities: Array,
        departments: Object,

    },
    watch: {
        options: {
            handler() {
                // if (this.options.sortBy.length > 0) {
                if (!this.firstPaint) {
                    this.reloadPage();
                }
                this.firstPaint = false;
                // }
            },
            deep: true,
        },
    },

    methods: {
        searchData: _.throttle(function () {
            this.$inertia.get(route(this.route().current(), {
                    ...this.queryParams(),
                    page: 1, ...this.getSortParameters()
                }),
            );
        }, 200),

        queryParams() {
            let params = {}
            if (this.search && this.search.length > 0) params.term = this.search
            if (this.itemsPerPage !== 10) params.itemsPerPage = this.itemsPerPage

            if (this.route().params.page && this.route().params.page !== 1 && this.issues.meta.current_page !== 1) params.page = this.issues.meta.current_page

            Object.keys(this.filters).forEach(key => {
                if (this.filters[key] !== null) {
                    if ((key === 'show_completed' || key === 'only_overdue') && this.filters[key] !== true) return;


                    params[key] = this.filters[key]
                }
            })

            return params;
        },
        getSortParameters() {
            let params = {}
            if (this.options.sortBy && this.options.sortBy.length > 0) params.sortBy = this.options.sortBy[0]
            if (this.options.sortDesc && this.options.sortDesc.length > 0) params.sortDesc = this.options.sortDesc[0]
            return params;
        },
        changeItemsPerPage(perPage) {
            this.itemsPerPage = perPage;
            this.reloadPage();

        },

        searchDataClear() {
            this.search = '';
            this.reloadPage();
        },
        reloadPage() {
            this.$inertia.get(route(this.route().current(), {...this.queryParams(), ...this.getSortParameters()}));
        },
        clearFilters() {
            this.filter_drawer = false;
            //    set all values to null
            this.search = null;
            Object.keys(this.filters).forEach(key => {
                this.filters[key] = null;
            })
            this.reloadPage();

        },
        getDepartmentName(id) {
            return this.departments.data.find(x => x.id === id).name;
        },
        onChangeStatus() {
            if (this.filters.status) {
                this.filters.show_completed = null;
            }
        },
        deleteItem(id) {
            this.$inertia.delete(route('admin:issues.destroy', id))
        },
        openDuplicateToDepartmentDialog(item) {
            this.clearDepartmentForm();
            this.duplicateToDepartmentForm.id = item.id;
            this.duplicateToDepartmentForm.current_department = item.department.id;
            this.duplicateToDepartmentDialog = true;


        },
        closeDuplicateToDepartmentDialog() {
            this.duplicateToDepartmentDialog = false;
            this.clearDepartmentForm();
        },
        clearDepartmentForm() {
            this.duplicateToDepartmentForm.reset();
            this.duplicateToDepartmentForm.clearErrors();
        },
        duplicateToDepartment() {
            this.duplicateToDepartmentForm.post(route('admin:issues.duplicate', this.duplicateToDepartmentForm.id), {
                onSuccess: () => {
                    this.closeDuplicateToDepartmentDialog();
                    this.$refs.snackbar.open('Issue duplicated successfully', 'success');
                }
            })
        }
    },
    computed: {
        duplicatableDepartments() {
            return this.departments.data.filter(x => x.id !== this.duplicateToDepartmentForm.current_department);
        }
    },
}
</script>

<style scoped>

</style>
