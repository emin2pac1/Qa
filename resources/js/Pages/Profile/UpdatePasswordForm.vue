<template>
    <profile-form-layout>
        <template v-slot:title>
            Update Password
        </template>
        <template v-slot:description>
            Ensure your account is using a long, random password to stay secure.
        </template>
        <template v-slot:content>


            <!--            current password-->

            <label for="current_password">Current Password</label>
            <v-text-field
                v-model="form.current_password"
                dense
                outlined
                autocomplete="off"
                ref="current_password"
                id="current_password"
                :error-messages="form.errors['current_password']"
                :append-icon="showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showCurrentPassword = !showCurrentPassword"
                :append-icon-cb="showCurrentPassword"
                :type="showCurrentPassword ? 'text' : 'password'"/>

            <!--            new password-->
            <label for="new_password">New Password</label>
            <v-text-field
                v-model="form.password"
                dense
                outlined
                autocomplete="off"
                id="new_password"
                ref="password"
                :error-messages="form.errors['password']"
                :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showNewPassword = !showNewPassword"
                :append-icon-cb="showNewPassword"
                loading
                :type="showNewPassword ? 'text' : 'password'">

                <template v-slot:progress>
                    <v-progress-linear
                        :value="passwordStrength"
                        :color="passwordStrengthColor"
                        absolute
                        height="7"
                    ></v-progress-linear>
                </template>

            </v-text-field>

            <template v-if="form.password && form.password.length>0">
                <v-expand-transition>
                    <ul>
                        <li v-for="(password_attribute,index) in passwordStrengthAttributed" :key="index"
                            :class="[password_attribute.value?'ed--text-color-success':'ed--text-color-error']">
                            {{ password_attribute.key | snakeToSentence }}
                            <v-icon small :color="password_attribute.value ? 'success' : 'error'">
                                {{ password_attribute.value ? 'check_circle' : 'cancel' }}
                            </v-icon>
                        </li>
                    </ul>
                </v-expand-transition>
            </template>

            <label for="new_password_confirmation">Confirm New Password</label>
            <v-text-field
                v-model="form.password_confirmation"
                dense
                outlined
                autocomplete="off"
                id="new_password_confirmation"
                :error-messages="form.errors['password_confirmation']"
                :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showNewPassword = !showNewPassword"
                :type="showNewPassword ? 'text' : 'password'"/>
            <action-message :on="form.recentlySuccessful">
                Done.
            </action-message>
        </template>

        <template v-slot:actions>
            <v-spacer/>
            <v-btn color="accent" class="text-capitalize" :loading="form.processing" @click="submit"
                   :disabled="!form.isDirty || form.processing">save
            </v-btn>
        </template>
    </profile-form-layout>
</template>

<script>
import ProfileFormLayout from "./ProfileFormLayout";
import ActionMessage from "./ActionMessage";

export default {
    name: "UpdatePasswordForm",
    components: {ActionMessage, ProfileFormLayout},
    data() {
        return {
            form: this.$inertia.form({
                current_password: null,
                password: null,
                password_confirmation: null,
            }),
            showCurrentPassword: false,
            showNewPassword: false,
        }
    },
    watch: {},
    methods: {
        submit() {

            this.form.post(route('user-password.update'), {
                errorBag: 'updatePassword',
                preserveScroll: true,
                onSuccess: () => this.form.reset(),
                onError: () => {
                    if (this.form.errors.password) {
                        this.form.reset('password', 'password_confirmation')
                        this.$refs.password.focus()
                    }

                    if (this.form.errors.current_password) {
                        this.form.reset('current_password')
                        this.$refs.current_password.focus()
                    }
                }
            })
        },

    },
    computed: {
        passwordStrengthColor() {
            return ['error', 'warning', 'success'][Math.floor(this.passwordStrength / 50)]
        },
        passwordStrengthAttributed() {
            let attributes = {
                contains_uppercase: false,
                contains_numbers: false,
                contains_special_characters: false,
                contains_lowercase: false,
                password_length_at_least_8_characters_long: false,

            }
            // check this.form.password and set attributes values
            if (this.form.password) {
                attributes.contains_uppercase = /[A-Z]/.test(this.form.password)
                attributes.contains_numbers = /[0-9]/.test(this.form.password)
                attributes.contains_special_characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.form.password)
                attributes.contains_lowercase = /[a-z]/.test(this.form.password)
                attributes.password_length_at_least_8_characters_long = this.form.password.length >= 8
            }
            //    convert attributes to array
            return Object.keys(attributes).map(key => {
                return {
                    key,
                    value: attributes[key]
                }
            })


        },
        passwordStrength() {
            let password = this.form.password;
            let score = 0;

            if (!password) {
                return score;
            }

            if (password.length >= 8) {
                score++;
            }
            if (password.match(/[a-z]/)) {
                score++;
            }
            if (password.match(/[A-Z]/)) {
                score++;
            }
            if (password.match(/[0-9]/)) {
                score++;
            }
            if (password.match(/[^a-zA-Z\d]/)) {
                score++;
            }


            // get password strength percentage
            return Math.min(100, Math.round(score * 20));

        }
    }
}
</script>

<style scoped>

</style>
