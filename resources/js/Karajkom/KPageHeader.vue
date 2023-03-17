<template>
    <v-toolbar flat color="#eee" class="mb-3 mt-2">
        <v-toolbar-title>
            <h5 class="font-weight-black text-capitalize">{{ title }}</h5>
        </v-toolbar-title>
        <v-spacer v-if=" showQueryParams"/>
        <v-layout v-if=" showQueryParams" wrap justify-center>
            <v-chip class="text-capitalize ml-1" close :color="param.color"
                    @click:close="removeParam(param.key)" small
                    v-for="(param,index) in routeParamsComputed" :key="index">{{ param.value |snakeToTitle }}
            </v-chip>
            <v-chip v-if="routeParamsComputed.length>0" class="text-capitalize ml-1" color="secondary" close
                    @click="removeAllParams" @click:close="removeAllParams" small>
                Remove All
            </v-chip>
        </v-layout>
        <v-spacer v-if="$vuetify.breakpoint.smAndUp"/>
        <v-breadcrumbs :items="breadcrumb_items" v-if="$vuetify.breakpoint.smAndUp">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item
                    link
                    class="font-weight-bold ed-font-color--accent text-capitalize"
                    :class="{'k-cursor--pointer':!item.disabled}"
                    @click="$inertia.visit(item.href)"
                    :disabled="item.disabled"
                >
                    {{ item.text }}
                </v-breadcrumbs-item>

            </template>
        </v-breadcrumbs>
        <v-btn icon @click="reload">
            <v-icon>
                refresh
            </v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
import {Inertia} from "@inertiajs/inertia";

export default {
    name: "KPageHeader",
    data() {
        return {
            items: []
        }
    },
    props: {
        title: {type: String, default: null, required: false},
        breadcrumb_items: {type: Array, default: () => [], required: false},
        showQueryParams: {type: Boolean, default: false, required: false},
        getDepartmentName: Function,
    },
    computed: {
        routeParamsComputed() {
            //    get keys list of this.route().params to array
            let keys = Object.keys(this.route().params);
            let routeParams = [];
            keys.forEach(key => {
                // skip is key is itemsPerPage or page
                if (key === 'itemsPerPage' || key === 'page') {
                    return;
                }

                if (key === 'sortBy') {
                    routeParams.push({
                        key: key,
                        value: 'sortBy : ' + this.route().params[key],
                        color: 'success'

                    });
                } else if (key === 'sortDesc') {
                    if ((!!+this.route().params[key])) {
                        routeParams.push({
                            key: key,
                            value: key,
                            color: 'warning'
                        });
                    }
                }
                //deleted
                else if (key === 'deleted') {
                    routeParams.push({
                        key: key,
                        value: key,
                        color: 'error'
                    });
                } else if (key === 'term') {
                    routeParams.push({
                        key: key,
                        value: 'Search : ' + this.route().params[key],
                        color: 'success'

                    });
                } else if (key === 'department') {
                    routeParams.push({
                        key: key,
                        value: 'Department - ' + this.getDepartmentName(this.route().params[key]),
                        color: 'accent'

                    });
                } else if (key === 'status') {
                    routeParams.push({
                        key: key,
                        value: 'Status - ' + this.route().params[key],
                        color: 'accent'

                    });
                } else if (key === 'priority') {
                    routeParams.push({
                        key: key,
                        value: 'Priority - ' + this.route().params[key],
                        color: 'accent'

                    });
                } else if (key === 'reportedBy') {
                    routeParams.push({
                        key: key,
                        value: 'reportedBy - ' + this.route().params[key],
                        color: 'success'

                    });
                } else {

                    routeParams.push({
                        key: key,
                        value: key,
                        color: 'accent'
                    });
                }
            });
            return routeParams;
        }
    },
    methods: {
        removeParam(param) {

            //remove key from this.route().params object
            let params = {}
            Object.keys(this.route().params).forEach(key => {
                if (key !== param) {
                    if (param === 'sortBy' && key === 'sortDesc') {
                        return;
                    }
                    params[key] = this.route().params[key];
                }
            });


            this.$inertia.get(route(this.route().current(), {...params}));

        },
        removeAllParams() {
            this.$inertia.get(route(this.route().current(), {}));
        },
        reload() {
            Inertia.reload();
        }
    }
}
</script>

<style scoped>

>>> .v-breadcrumbs__item {
    color: var(--v-primary-base) !important;
}

>>> .v-breadcrumbs__item--disabled {
    color: rgba(0, 0, 0, .38) !important;

}
</style>
