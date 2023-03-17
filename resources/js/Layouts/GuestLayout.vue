<template>
    <LayoutWrapper>
        <slot name="navigation">
            <app-top-bar :key="currentRoute" />
<!--            <guest-side-nav :key="currentRoute" />-->
        </slot>
        <v-main>
          <v-container>
              <slot/>
          </v-container>
        </v-main>
        <slot name="footer" >
            <app-footer/>
        </slot>
    </LayoutWrapper>
</template>

<script>
import LayoutWrapper from "@/Layouts/LayoutWrapper";
import GuestSideNav from "../Navigation/GuestSideNav";
import AppTopBar from "../Navigation/AppTopBar";
import AppFooter from "../Navigation/AppFooter";

export default {
    name: "GuestLayout",
    components: {AppFooter, AppTopBar, GuestSideNav, LayoutWrapper},
    props: {

    },
    computed: {
        currentRoute() {
            return location.pathname.substr(1)
        },
    }
}
</script>

<style scoped>

</style>
