<template>
    <div class="px-1 mt-2 dashboardCard">
        <v-card min-width="300" :color="color">
            <v-card-text>
                <v-layout>

                    <v-flex v-if="icon" shrink class="px-3">
                        <v-icon :color="text_color">
                            {{ icon }}
                        </v-icon>
                    </v-flex>
                    <v-flex class="k--text-color-white d-flex flex-column align-center">
                        <h2>{{ title }}</h2>
                        <h1 class="mt-2 ">{{ counter | to_ks }}</h1>
                    </v-flex>

                </v-layout>
            </v-card-text>

        </v-card>
    </div>

</template>

<script>
export default {
    name: "KDashboardCard",
    props: {
        icon: {type: String, default: null, required: false},
        title: {type: String, default: null, required: false},
        counter: {type: Number, default: null, required: false},
        color: {type: String, default: 'primary', required: false},
        text_color: {type: String, default: 'white', required: false},
    }
}
</script>

<style scoped>
.dashboardCard {
    cursor: pointer;
}
</style>
