<template>
    <profile-form-layout>
        <template v-slot:title>
            Browser Sessions
        </template>
        <template v-slot:description>
            Manage and logout your active sessions on other browsers and devices.
        </template>
        <template v-slot:content>
            <p>
                If necessary, you may logout of all of your other browser sessions across all of your devices. Some of
                your recent sessions are listed below; however, this list may not be exhaustive. If you feel your
                account has been compromised, you should also update your password.
            </p>

            <div class="mt-5 space-y-6" v-if="sessions.length > 0">
                <div class="flex items-center" v-for="(session, i) in sessions" :key="i">
                    <div style="width: 50px;height: 50px">
                        <desktop-svg v-if="session.agent.is_desktop"/>
                        <mobile-svg v-else/>

                    </div>
                    <div class="ml-3">
                        <div class="text-sm text-gray-600">
                            {{ session.agent.platform }} - {{ session.agent.browser }}
                        </div>

                        <div>
                            <div class="text-xs text-gray-500">
                                {{ session.ip_address }},

                                <span class="ed--text-color-success font-weight-bold"
                                      v-if="session.is_current_device">This device</span>
                                <span v-else>Last active {{ session.last_active }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center mt-5">
                <v-btn color="error" class="text-capitalize" v-if="showLogoutOtherDevicesButton"
                       @click.native="confirmLogout">
                    Logout Other Browser Sessions
                </v-btn>

                <action-message :on="form.recentlySuccessful">
                    Done.
                </action-message>

            </div>
            <v-dialog v-model="confirmingLogout" width="60%" @close="closeModal">

                <v-card>
                    <v-card-title> Logout Other Browser Sessions</v-card-title>
                    <v-card-text>Please enter your password to confirm you would like to logout of your other browser
                        sessions across all of your devices.

                        <div class="mt-4">
                            <v-text-field type="password"
                                          outlined
                                          placeholder="Password"
                                          ref="password"
                                          @click:append="showPassword = !showPassword"
                                          :type="showPassword ? 'text' : 'password'"
                                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                          v-model="form.password"
                                          :error-messages="form.errors.password"
                                          @keyup.enter.native="logoutOtherBrowserSessions"/>
                        </div>

                        <v-row no-gutters>
                            <v-spacer/>
                            <v-btn color="error" class="ml-2 text-capitalize" @click.native="logoutOtherBrowserSessions"
                                   :loading="form.processing " :disabled="form.processing">
                                Logout Other Browser Sessions
                            </v-btn>
                        </v-row>
                    </v-card-text>

                </v-card>


            </v-dialog>
        </template>

    </profile-form-layout>
</template>

<script>
import ProfileFormLayout from "./ProfileFormLayout";
import DesktopSvg from "../../Assets/DesktopSvg";
import MobileSvg from "../../Assets/MobileSvg";
import ActionMessage from "./ActionMessage";

export default {
    name: "LogoutOtherBrowserSessionsForm",
    components: {ActionMessage,  MobileSvg, DesktopSvg, ProfileFormLayout},
    props: ['sessions'],
    data() {
        return {
            confirmingLogout: false,

            form: this.$inertia.form({
                password: '',
            }),
            showPassword: false
        }
    },
    methods: {
        logoutOtherBrowserSessions() {
            this.form.delete(route('other-browser-sessions.destroy'), {
                preserveScroll: true,
                onSuccess: () => this.closeModal(),
                onError: () => this.$refs.password.focus(),
                onFinish: () => this.form.reset(),
            })
        },
        closeModal() {
            this.confirmingLogout = false

            this.form.reset()
        },
        confirmLogout() {
            this.confirmingLogout = true

            // setTimeout(() => this.$refs.password, 250)
        },
    },
    computed: {
        showLogoutOtherDevicesButton() {
            //    check how many items have is_current_device = false
            return this.sessions.filter(session => session.is_current_device === false).length > 0
        }
    }
}
</script>

<style scoped>

</style>
