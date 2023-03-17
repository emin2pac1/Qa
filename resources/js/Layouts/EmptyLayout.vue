<template>
    <LayoutWrapper>

        <v-main>
            <slot></slot>
        </v-main>
    </LayoutWrapper>
</template>

<script>



    import LayoutWrapper from "./LayoutWrapper";

    export default {
        name:'EmptyLayout',
        components: {
            LayoutWrapper,
        },

        data() {
            return {
            }
        },
        watch: {

        },
        mounted() {

        },

        methods: {

        },
        computed: {
        }
    }
</script>
