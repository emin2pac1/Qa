<template>
    <profile-form-layout>
        <template v-slot:title> Two Factor Authentication</template>
        <template v-slot:description>Add additional security to your account using two factor authentication.</template>

        <template v-slot:content>
            <h3 class="text-lg font-medium text-gray-900" v-if="twoFactorEnabled">
                You have enabled two factor authentication.
            </h3>

            <h3 v-else>
                You have not enabled two factor authentication.
            </h3>

            <div class="mt-3">
                <p>
                    When two factor authentication is enabled, you will be prompted for a secure, random token during
                    authentication. You may retrieve this token from your phone's Google Authenticator application.
                </p>
            </div>


            <div v-if="twoFactorEnabled">
                <div v-if="qrCode">
                    <div class="mt-4 ">
                        <p class="font-weight-bold">
                            Two factor authentication is now enabled. Scan the following QR code using your phone's
                            authenticator application.
                        </p>
                    </div>

                    <div class="mt-4" v-html="qrCode">
                    </div>
                </div>

                <div v-if="recoveryCodes.length > 0">
                    <div class="mt-4 ">
                        <p class="font-weight-bold">
                            Store these recovery codes in a secure password manager. They can be used to recover access
                            to your account if your two factor authentication device is lost.
                        </p>
                    </div>

                    <div>
                        <div v-for="code in recoveryCodes" :key="code">
                            {{ code }}
                        </div>
                    </div>
                    <k-copy-to-clipboard :copy-data="recoveryCodesForCopy"/>
                </div>

            </div>

            <div class="mt-5">
                <div v-if="! twoFactorEnabled">
                   <v-row no-gutters>
                       <v-spacer/>
                       <k-confirm-password @confirmed="enableTwoFactorAuthentication">
                           <v-btn color="primary" type="button" :loading="enabling" :disabled="enabling">
                               Enable
                           </v-btn>
                       </k-confirm-password>
                   </v-row>
                </div>

                <div v-else>
                   <v-row no-gutters>
                       <v-spacer/>
                       <k-confirm-password @confirmed="regenerateRecoveryCodes">
                           <v-btn color="secondary" class="mr-3" :disabled="isRegenerating" :loading="isRegenerating"
                                  v-if="recoveryCodes.length > 0">
                               Regenerate Recovery Codes
                           </v-btn>
                       </k-confirm-password>

                       <k-confirm-password @confirmed="showRecoveryCodes">
                           <v-btn :loading="isLoadingRecoveryCodes" :disabled="isLoadingRecoveryCodes" color="secondary"
                                  class="mr-3" v-if="recoveryCodes.length === 0">
                               Show Recovery Codes
                           </v-btn>
                       </k-confirm-password>

                       <k-confirm-password @confirmed="disableTwoFactorAuthentication">
                           <v-btn color="error" :loading="disabling" :disabled="disabling">
                               Disable
                           </v-btn>
                       </k-confirm-password>
                   </v-row>
                </div>
            </div>
        </template>


    </profile-form-layout>
</template>

<script>
import ProfileFormLayout from "./ProfileFormLayout";
import KCopyToClipboard from "../../Karajkom/KCopyToClipboard";
import KConfirmPassword from "../../Karajkom/KConfirmPassword";


export default {
    name: "TwoFactorAuthenticationForm",
    components: {KConfirmPassword, KCopyToClipboard,  ProfileFormLayout},
    computed: {
        twoFactorEnabled() {
            return !this.enabling && this.$page.props.user.two_factor_enabled
        },
        recoveryCodesForCopy() {
            //    get recovery codes
            return this.recoveryCodes.join("\n")
        }
    },
    data() {
        return {
            enabling: false,
            disabling: false,

            qrCode: null,
            recoveryCodes: [],
            isRegenerating: false,
            isLoadingRecoveryCodes: false,
            copy_to_clipboard_text: 'Copy to clipboard'
        }
    },
    methods: {

        regenerateRecoveryCodes() {
            this.isRegenerating = true;
            axios.post('/user/two-factor-recovery-codes')
                .then(response => {
                    this.showRecoveryCodes()
                }).finally(() => {
                this.isRegenerating = false;
            })
        },
        showQrCode() {
            return axios.get('/user/two-factor-qr-code')
                .then(response => {
                    this.qrCode = response.data.svg
                })
        },

        showRecoveryCodes() {
            this.isLoadingRecoveryCodes = true;
            return axios.get('/user/two-factor-recovery-codes')
                .then(response => {
                    this.recoveryCodes = response.data
                }).finally(() => {
                    this.isLoadingRecoveryCodes = false;
                })
        },

        disableTwoFactorAuthentication() {
            this.disabling = true

            this.$inertia.delete('/user/two-factor-authentication', {
                preserveScroll: true,
                onSuccess: () => (this.disabling = false),
            })
        },
        enableTwoFactorAuthentication() {

            this.enabling = true

            this.$inertia.post('/user/two-factor-authentication', {}, {
                preserveScroll: true,
                onSuccess: () => Promise.all([
                    this.showQrCode(),
                    this.showRecoveryCodes(),
                ]),
                onFinish: () => (this.enabling = false),
            })
        },

    }
}
</script>

<style scoped>

</style>
