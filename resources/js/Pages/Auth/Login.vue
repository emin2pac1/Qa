<template>
    <GuestLayout>
        <v-container fluid class=" px-lg-16 px-0 fill-height mb-16">
            <v-row class="justify-center">
                <v-col cols="12" md="8" class="d-flex  justify-center">
                    <v-card class=" py-8 rounded-xl" width="100%">
                        <v-row>
                            <v-col>
                                <v-row no-gutters justify="center">
                                    <span class="title">Login to your profile</span>
                                </v-row>

                                <v-form @submit.prevent="submit">
                                    <v-row no-gutters justify="center">
                                        <v-col cols="8">
                                            <v-text-field
                                                label="Email"
                                                prepend-inner-icon="email"
                                                id="email"
                                                name="email"
                                                v-model="form.email"
                                                autocomplete="email"
                                                :error-messages="form.errors.email"
                                                type="email"
                                            ></v-text-field>

                                            <v-text-field
                                                label="Password"
                                                prepend-inner-icon="lock"
                                                id="password"
                                                name="password"
                                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="showPassword ? 'text' : 'password'"
                                                :error-messages="form.errors.password"
                                                @click:append="showPassword = !showPassword"
                                                v-model="form.password"
                                                autocomplete="current-password"
                                            ></v-text-field>
                                            <v-checkbox
                                                dense
                                                v-model:checked="form.remember"
                                               label="Remember me"
                                            ></v-checkbox>

                                            <div class="d-flex justify-center">
                                                <v-btn
                                                    class="rounded-pill py-6 px-15 text-capitalize"
                                                    elevation="12"
                                                    width="80%"
                                                    :disabled="form.processing"
                                                    type="submit"
                                                    color="primary"
                                                    :loading="form.processing"
                                                >
                                                    Login
                                                </v-btn>


                                            </div>
                                            <div class="d-flex justify-center">
                                                <k-nav-link v-if="canResetPassword" :url="route('password.request')"
                                                             class="text-subtitle-1">
                                                   Forgot your password?
                                                </k-nav-link>

                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>


    </GuestLayout>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue'
import GuestLayout from "@/Layouts/GuestLayout";
import KNavLink from "../../Karajkom/KNavLink";

export default {
    name: "Login",
    metaInfo: {title: 'Login'},
    components: {KNavLink,  GuestLayout, Link},
    props: {
        canResetPassword: Boolean,
        status: String
    },
    data() {
        return {
            showPassword: false,
            signing_in: false,
            forgot_pass_loading: false,
            forgot_pass_dialog: false,
            password_reset_message: null,
            email_sent: false,
            form: this.$inertia.form({
                email: '',
                password: '',
                remember: false
            })
        }
    },
    methods: {
        submit() {
            this.form
                .transform(data => ({
                    ...data,
                    remember: this.form.remember ? 'on' : ''
                }))
                .post(this.route('login'), {
                    onFinish: () => this.form.reset('password'),
                })
        },
    }
}
</script>


<style scoped>

</style>
