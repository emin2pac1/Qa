<template>
    <v-navigation-drawer app  v-model="drawer" dark color="primary"
    >


        <v-list-item class="px-2">

            <v-list-item-title>
                <KNavLink :url="route('welcome')">
                    <h3 class="text-center white--text"> Karajkom QA</h3>
                </KNavLink>
            </v-list-item-title>


        </v-list-item>


        <v-divider></v-divider>

        <v-list

            dense

            nav
        >
            <v-list-item-group
                color="primary"
            >

                <template v-for="(item, index)  in $page.props.dashboard_menu">

                    <template v-if="item.type && item.type === 'SEPARATOR'">
                        <!--                    <v-divider class="my-1"/>-->

                        <v-list-item v-if="item.title" dense>
                            <v-divider v-if="mini"/>
                            <v-list-item-subtitle class="text-capitalize " v-if="!mini">{{
                                    item.title
                                }}
                            </v-list-item-subtitle>
                        </v-list-item>

                    </template>

                    <template v-else>

                        <template v-if="!hasChildren(item)">
                            <v-tooltip right color="secondary">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-list-item dense link @click="$inertia.visit(route(item.href))"
                                                 :value="route(item.href)"
                                                 color="accent"
                                                 v-on="mini?on:null"
                                                 :class="{'v-item--active v-list-item--active white--text':( route().current(item.href)||route().current(item.parent))}"
                                    >
                                        <v-list-item-icon class="mr-2">
                                            <v-icon>{{ item.icon }}</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content
                                        >
                                            <v-list-item-title class="text-capitalize">{{
                                                    item.title
                                                }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                                <span>{{ item.title }}</span>
                            </v-tooltip>
                        </template>

                        <template v-else>
                            <v-tooltip right color="secondary">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-list-group
                                        v-on="mini?on:null"
                                        no-action
                                        :value="route().current(item.parent)"
                                        color="primary"
                                    >
                                        <template v-slot:activator>
                                            <v-list-item-icon class="mr-2">
                                                <v-icon>{{ item.icon }}</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-capitalize">{{
                                                        item.title
                                                    }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        <template v-for="child  in item.children">
                                            <v-list-item class="pl-6" dense link @click="$inertia.visit(route(child.href))"
                                                         :class="{'v-item--active v-list-item--active': ( route().current(child.href) ||childIsParent(child.parent))}"
                                            >
                                                <v-list-item-icon class="mr-2">
                                                    <v-icon>{{ child.icon }}</v-icon>
                                                </v-list-item-icon>

                                                <v-list-item-content
                                                >
                                                    <v-list-item-title class="text-capitalize">{{
                                                            child.title
                                                        }}
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </template>
                                    </v-list-group>
                                </template>
                                <span>{{ item.title }}</span>
                            </v-tooltip>
                        </template>
                    </template>


                </template>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import KNavLink from "../Karajkom/KNavLink";

export default {
    name: "AppSideNav",
    components: {KNavLink},
    data() {
        return {
            drawer: null,
            mini: null,
        }
    },
    mounted() {
        this.$root.$on('toggleNav', (data) => {
            if (data) {
                this.drawer = data;
            } else {
                this.drawer = !this.drawer;

            }
        });
        this.$root.$on('toggleNavMini', (data) => {
            if (data) {
                this.mini = data;
            } else {
                this.mini = !this.mini;

            }
        });
    },
    methods: {
        hasChildren(item) {
            return item.children && item.children instanceof Array
        },
        childIsParent(item) {
            return route().current(item)
        }
    }
}
</script>

<style scoped>

</style>
