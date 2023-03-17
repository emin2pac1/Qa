<template>
    <v-app-bar app flat color="primary" height="80" >
        <v-container :fluid="$vuetify.breakpoint.smAndDown" class="">


            <div class="d-flex align-center">
                <template v-if="$vuetify.breakpoint.smAndDown">

                    <v-app-bar-nav-icon color="white" @click="toggleNavBar"></v-app-bar-nav-icon>
                    <v-spacer></v-spacer>
                </template>


                <k-nav-link :url="route('welcome')" label="KarajkomQA" class="mx-2 k--text-color-white">
                    <span class="navbar-brand">KarajkomQA</span>
                </k-nav-link>

                <v-spacer></v-spacer>

                <template v-for="(item, index)  in $page.props.dashboard_menu" v-if="$vuetify.breakpoint.mdAndUp">

                    <k-nav-link route-name="item.href" :route-parent="item.parent" :url="route(item.href)" :label="item.title" class="mx-2"/>

                </template>
                    <a  :href="route('help')"  v-if="$page.props.user && $vuetify.breakpoint.mdAndUp" class="nav-link-exact-inactive text-decoration-none font-weight-bold">Help</a>
                <v-menu
                    bottom
                    dark
                    left
                    v-if="$page.props.user"
                    offset-y
                    origin="top right"
                    transition="scale-transition"
                >
                    <template v-slot:activator="{ attrs, on }">
                        <v-btn
                            min-width="0"
                            plain
                            :ripple="false"
                            v-bind="attrs"
                            v-on="on"
                        >

                            <v-avatar>
                                <v-img :src="$page.props.user.profile_photo_url"></v-img>
                            </v-avatar>
                            <!--                        {{ $page.props.user.name }}-->
                        </v-btn>
                    </template>

                    <v-card>
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-avatar>

                                    <v-img :src="$page.props.user.profile_photo_url"></v-img>

                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>{{ $page.props.user.email }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{$page.props.user.role}}
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle v-if="$page.props.user.department">
                                        {{$page.props.user.department}} Department
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                        <v-divider/>

                        <v-list dense>
                            <k-nav-link :url="route('user:profile.show')">
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon color="secondary">account_circle
                                        </v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-title>Profile</v-list-item-title>
                                </v-list-item>

                            </k-nav-link>

                            <k-nav-link :url="route('dashboard')">
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon color="secondary">dashboard
                                        </v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-title>Dashboard</v-list-item-title>
                                </v-list-item>
                            </k-nav-link>

                            <v-list-item @click="signOut">
                                <v-list-item-icon>
                                    <v-icon color="secondary">power_settings_new
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </div>
        </v-container>


    </v-app-bar>
</template>

<script>


import KNavLink from "../Karajkom/KNavLink";

export default {
    name: "AppTopBar",
    components: {KNavLink},
    methods: {
        signOut() {
            this.$inertia.post(route('logout'));
        },
        toggleNavBar() {
            this.$root.$emit('toggleNav')
        }
    },
    props: {
        isSideNav: {type: Boolean, default: true, required: false}
    }
}
</script>

<style scoped>
.navbar-brand {
    color: white !important;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    white-space: nowrap;
}
>>> .v-toolbar__content{
    padding-right: 0!important;
    padding-left: 0!important;
}

</style>
