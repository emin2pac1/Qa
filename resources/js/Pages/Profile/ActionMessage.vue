<template>
    <div>
        <v-scroll-y-transition>

            <div v-show="on" class="ed--text-color-secondary">

                <slot/>
            </div>
        </v-scroll-y-transition>
    </div>
</template>

<script>
export default {
    name: "ActionMessage",
    props: ['on'],
}
</script>

<style scoped>

</style>
