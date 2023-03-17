<template>
    <v-row no-gutters class="pa-6">
        <v-col cols="12" md="4">
            <h3>
                <slot name="title"/>
            </h3>
            <slot name="description"/>
        </v-col>
        <v-col>
            <v-card flat>
                <v-card-text>
                    <slot name="content"/>
                </v-card-text>
                <v-card-actions>
                    <slot name="actions"/>
                </v-card-actions>
            </v-card>
        </v-col>

    </v-row>
</template>

<script>
export default {
    name: "ProfileFormLayout"
}
</script>

<style scoped>

</style>
