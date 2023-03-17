<template>
    <GuestLayout>
        <v-container fluid class=" px-lg-16 px-0 fill-height mb-16">
            <v-row class="justify-center">
                <v-col cols="12" md="8" class="d-flex  justify-center">
                    <v-card class=" py-8 rounded-xl" width="100%">
                        <v-row no-gutters>
                            <v-col>
                                <v-row no-gutters justify="center">
                                    <span class="title">Reset your password</span>
                                </v-row>
                                <v-row no-gutters justify="center">
                                    <span class="subtitle-1">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
</span>
                                </v-row>

                                <v-row no-gutters justify="center">
                                    <v-col cols="8">


                                        <v-text-field
                                            label="Password"
                                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="showPassword ? 'text' : 'password'"
                                            :error-messages="form.errors.password"
                                            @click:append="showPassword = !showPassword"
                                            v-model="form.password"
                                            autocomplete="off"
                                        ></v-text-field>
                                        <v-text-field
                                            label="Confirm Password"
                                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="showPassword ? 'text' : 'password'"
                                            :error-messages="form.errors.password_confirmation"
                                            @click:append="showPassword = !showPassword"
                                            v-model="form.password_confirmation"
                                            autocomplete="off"
                                        ></v-text-field>


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
                                                Reset Password
                                            </v-btn>


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

export default {
    name: "ResetPassword",
    metaInfo: { title: 'Reset Password' },
    components: {GuestLayout},
    props: {
        email: String,
        token: String,
    },
    data() {
        return {
            showPassword: false,
            form: this.$inertia.form({
                token: this.token,
                email: this.email,
                password: '',
                password_confirmation: '',
            })
        }
    },
    methods: {
        submit() {
            this.form.post(this.route('password.update'), {
                onFinish: () => this.form.reset('password', 'password_confirmation'),
            })
        }
    }
}
</script>

<style scoped>

</style>
