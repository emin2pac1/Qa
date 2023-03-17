<template>
    <v-app>
        <slot/>
        <k-snack-bar ref="snackbar"/>
    </v-app>
</template>

<script>
import KSnackBar from "../Karajkom/KSnackBar";

export default {
    name: "LayoutWrapper",
    components: {KSnackBar},
    data() {
        return {}
    },
    mounted() {
        window.addEventListener('online', this.checkNetwork)
        window.addEventListener('offline', this.checkNetwork)
    },
    watch: {},
    computed: {},
    methods: {

        checkNetwork() {

            if (window.navigator.onLine) {
                this.$refs.snackbar.open('You are online now', 'success')
            } else {
                this.$refs.snackbar.open('seems like you are offline, Please check your connection', 'error', null, null, -1)
            }

        }
    }
}
</script>

<style scoped>

</style>
