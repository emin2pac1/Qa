<template>
    <GuestLayout>
        <v-container fluid class=" px-lg-16 px-0 fill-height mb-16">
            <v-row class="justify-center">
                <v-col cols="12" md="8" class="d-flex  justify-center">
                    <v-card class=" py-8 px-6 rounded-xl" width="100%">
                        <v-row no-gutters>
                            <v-col>
                                <v-row no-gutters justify="center">
                                    <span class="title">Verify your email</span>
                                </v-row>
                                <v-row no-gutters justify="center">
                                    <span class="subtitle-1">
Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.                                    </span>
                                </v-row>

                                <v-row no-gutters justify="center">
                                    <v-col cols="8">

                                        <div v-if="verificationLinkSent" class="mb-4 ed--text-color-success">
                                            A new verification link has been sent to the email address you provided
                                            during registration.
                                        </div>


                                        <div class="d-flex justify-center mt-3">
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
                                                Resend Verification Email
                                            </v-btn>


                                        </div>
                                        <div class="d-flex justify-center">
                                            <k-nav-link :url="route('logout')" method="post">
                                                Logout
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
import GuestLayout from "../../Layouts/GuestLayout";
import KNavLink from "../../Karajkom/KNavLink";

export default {
    name: "VerifyEmail",
    metaInfo: {title: 'Verify Email'},
    components: {KNavLink, GuestLayout},
    props: {
        status: String
    }, data() {
        return {
            form: this.$inertia.form()
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('verification.send'))
        },
    },

    computed: {
        verificationLinkSent() {
            return this.status === 'verification-link-sent';
        }
    }
}
</script>

<style scoped>

</style>
