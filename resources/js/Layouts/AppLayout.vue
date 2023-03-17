<template>
    <LayoutWrapper>

        <slot name="navigation">
            <app-side-nav :key="currentRoute+'nav'" v-if="$vuetify.breakpoint.smAndDown "/>
            <app-top-bar :key="currentRoute" :isSideNav="isSideNav"/>
        </slot>
        <v-main class="pb-16">
         <v-container>
             <slot/>
         </v-container>
        </v-main>
        <slot name="footer">
            <app-footer/>
        </slot>
    </LayoutWrapper>
</template>

<script>
import LayoutWrapper from "@/Layouts/LayoutWrapper";
import AppSideNav from "../Navigation/AppSideNav";
import AppTopBar from "../Navigation/AppTopBar";
import AppFooter from "../Navigation/AppFooter";


export default {
    name: "AppLayout",
    components: {AppFooter, AppTopBar, AppSideNav, LayoutWrapper},
    props: {isSideNav: {type: Boolean, default: true, required: false}},
    computed: {
        currentRoute() {
            return location.pathname.substr(1)
        },
    }
}
</script>

<style scoped>

</style>
