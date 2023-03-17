<template>
    <GuestLayout>
        <v-container fluid class=" px-lg-16 px-0 fill-height mb-16">
            <v-row class="justify-center">
                <v-col cols="12" md="8" class="d-flex  justify-center">
                    <v-card class=" py-8 px-6 rounded-xl" width="100%">
                        <v-row no-gutters>
                            <v-col>
                                <v-row no-gutters justify="center">
                                    <span class="title">Reset your password</span>
                                </v-row>
                                <v-row no-gutters justify="center">
                                    <span class="subtitle-1">
                                        Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</span>
                                </v-row>

                                <v-row no-gutters justify="center">
                                    <v-col cols="8">
                                        <v-text-field
                                            label="Email"
                                            v-model="form.email"
                                            autocomplete="on"
                                            :error-messages="form.errors.email"
                                            type="text"
                                        ></v-text-field>
                                        <div v-if="status" class="mb-4">
                                            {{ status }}
                                        </div>


                                        <div class="d-flex justify-center">
                                            <v-btn
                                                class="rounded-pill py-6 px-15 text-capitalize"
                                                elevation="12"
                                                width="80%"
                                                @click="submit"
                                                :disabled="form.processing"
                                                type="submit"
                                                color="primary"
                                                :loading="form.processing"
                                            >
                                                Send password reset link
                                            </v-btn>


                                        </div>
                                        <div class="d-flex justify-center mt-3">
                                            <k-nav-link :url="route('login')">
                                                Back to login
                                            </k-nav-link>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>


    </GuestLayout>
</template>

<script>
import GuestLayout from "@/Layouts/GuestLayout";
import KNavLink from "../../Karajkom/KNavLink";

export default {
    name: "ForgotPassword",
    metaInfo: { title: 'Forgot Password' },
    components: {KNavLink,  GuestLayout},

    props: {
        status: String,
    },
    data() {
        return {
            form: this.$inertia.form({
                email: "",
            }),
        };
    },
    methods: {
        submit() {
            this.form.post(this.route("password.email"));
        },
    },
}
</script>

<style scoped>

</style>
