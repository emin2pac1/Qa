<template>
    <GuestLayout>
        <v-container fluid class=" px-lg-16 px-0 fill-height mb-16">
            <v-row class="justify-center">
                <v-col cols="12" md="8" class="d-flex  justify-center">
                    <v-card flat class=" py-8 px-6 rounded-xl" width="100%">
                        <v-row no-gutters>
                            <v-col>
                                <v-row no-gutters justify="center">
                                    <template v-if="! recovery">
                                        Please confirm access to your account by entering the authentication code
                                        provided by your authenticator application.
                                    </template>
                                    <template v-else>
                                        Please confirm access to your account by entering one of your emergency recovery
                                        codes.
                                    </template>
                                </v-row>
                                <v-row no-gutters justify="center">
                                    <v-btn color="primary" text @click.prevent="toggleRecovery">
                                        <template v-if="! recovery">
                                            Use a recovery code
                                        </template>

                                        <template v-else>
                                            Use an authentication code
                                        </template>
                                    </v-btn>
                                </v-row>
                                <v-form>
                                    <v-row>
                                        <v-text-field
                                            class="pt-5"
                                            :placeholder="'Code'"
                                            outlined
                                            v-model="form.code"
                                            v-if="! recovery"
                                            autofocus
                                            ref="code" id="code"
                                            autocomplete="one-time-code"
                                            :error-messages="form.errors.code"
                                        ></v-text-field>


                                        <v-text-field
                                            class="pt-5"
                                            v-else
                                            outlined
                                            :placeholder="'Recovery Code'"
                                            v-model="form.recovery_code"
                                            autofocus
                                            ref="recovery_code" id="recovery_code"
                                            autocomplete="one-time-code"
                                            :error-messages="form.errors.recovery_code"
                                        ></v-text-field>
                                    </v-row>
                                    <v-row class=" d-sm-flex ">
                                        <v-spacer v-if="$vuetify.breakpoint.smAndUp"></v-spacer>
                                        <v-col cols="12" md="4">
                                            <v-card-actions
                                                class="justify-md-right d-sm-flex justify-center justify-md-end"
                                            >
                                                <v-btn
                                                    class="rounded-pill py-6 px-15 text-capitalize"
                                                    elevation="12"
                                                    @click="submit"
                                                    :disabled="form.processing"
                                                    type="submit"
                                                    color="primary"
                                                    :loading="form.processing"
                                                >
                                                    Login
                                                </v-btn>
                                            </v-card-actions>
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
import GuestLayout from "@/Layouts/GuestLayout";

export default {
    name: "ForgotPassword",
    metaInfo: {title: 'Forgot Password'},
    components: { GuestLayout},

    props: {
        status: String,
    },
    data() {
        return {
            recovery: false,
            form: this.$inertia.form({
                code: '',
                recovery_code: '',
            })
        };
    },
    methods: {
        submit() {
            this.form.post(this.route('two-factor.login'))
        },
        toggleRecovery() {
            this.recovery = !this.recovery;

            this.$nextTick(() => {
                if (this.recovery) {
                    this.$refs.recovery_code.focus()
                    this.form.code = '';
                } else {
                    this.$refs.code.focus()
                    this.form.recovery_code = ''
                }
            })
        },
    },
}
</script>

<style scoped>

</style>
