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


            <template v-slot:item.priority="{item}">
                <v-icon class="mr-2" :color="priority_icons[item.priority].color">
                    {{ priority_icons[item.priority].icon }}
                </v-icon>
                {{ item.priority |snakeToTitle }}

            </template>

            <template v-slot:item.actions="{item}">


                <v-btn icon color="primary" @click="$inertia.visit(route('dev:issues.edit',item.id))">
                    <v-icon>edit</v-icon>
                </v-btn>


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
                                      placeholder="Select Status"
                                      v-model="filters.status"
                                      clearable
                                      @change="onChangeStatus"
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
                                      clearable
                                      placeholder="Select Priority"
                                      v-model="filters.priority"
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
                                :items="departments_computed"
                                item-text="name"
                                clearable
                                item-value="id">

                            </v-autocomplete>
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
    </AppLayout>
</template>

<script>
import AppLayout from "../../../Layouts/AppLayout";
import KPageHeader from "../../../Karajkom/KPageHeader";
import _ from "lodash";
import KDataTableFooter from "../../../Karajkom/KDataTableFooter";

export default {
    name: "Index",
    metaInfo() {
        return {title: 'Issues'};
    },
    components: {KDataTableFooter, KPageHeader, AppLayout},
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
                    disabled: true,
                    href: route('dev:issues'),
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
                department: this.route().params.department ? this.route().params.department : null,
                reportedBy: this.route().params.reportedBy ? this.route().params.reportedBy : null,
                show_completed: this.route().params.show_completed ? !!parseInt(this.route().params.show_completed) : null,

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
                    formatter: (x) => (x ? this.$options.filters.snakeToSentence(x) : null),
                },
                {
                    text: 'Department',
                    align: 'start',
                    value: 'department',
                    formatter: (x) => (x ? this.$options.filters.snakeToTitle(x) : null),
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
                    width: '5%',
                    sortable: false,
                },
            ],
            itemsPerPage: parseInt(this.route().params.itemsPerPage) ? parseInt(this.route().params.itemsPerPage) : 10,

        }
    },
    props: {
        issues: Object,
        departments: Object,
        statuses: Array,
        priorities: Array,

        priority_icons: Object
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

                if (key === 'show_completed' && this.filters[key] !== true) return;


                if (this.filters[key] !== null) params[key] = this.filters[key]
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
        }
    },
    computed: {
        departments_computed() {
            let data = this.departments.data
            //    push object to beginning of data
            data.unshift({id: 'All', name: 'All Departments'})
            return data;


        }
    }
}
</script>

<style scoped>

</style>
