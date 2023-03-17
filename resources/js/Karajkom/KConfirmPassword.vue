<template>

    <v-dialog v-model="confirmingPassword" :width="$vuetify.breakpoint.mdAndUp?'50%':'100%'">
        <template v-slot:activator="{ on, attrs }">
        <span @click="startConfirmingPassword">
            <slot/>
        </span>


        </template>
        <v-card>
            <v-card-title>
                {{ title }}
            </v-card-title>

            <v-card-text>
                {{ content }}
                <v-text-field class="mt-1 block w-3/4" placeholder="Password"
                              ref="password"
                              v-model="form.password"
                              autofocus
                              outlined
                              @click:append="showPassword = !showPassword"
                              :type="showPassword ? 'text' : 'password'"
                              :error-messages="form.error"
                              autocomplete="off"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              @keyup.enter.native="confirmPassword"/>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn class="ml-2" color="accent" @click.native="confirmPassword"
                       :disabled="form.processing">
                    {{ button }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: 'KConfirmPassword',
    props: {
        title: {
            default: 'Confirm Password',
        },
        content: {
            default: 'For your security, please confirm your password to continue.',
        },
        button: {
            default: 'Confirm',
        }
    },

    components: {},

    data() {
        return {
            confirmingPassword: false,
            form: {
                password: '',
                error: '',
                processing: false,
            },
            showPassword: false
        }
    },

    methods: {
        startConfirmingPassword() {
            axios.get(route('password.confirmation')).then(response => {
                if (response.data.confirmed) {
                    this.$emit('confirmed');
                } else {
                    this.confirmingPassword = true;

                    setTimeout(() => this.$refs.password.focus(), 250)
                }
            })
        },

        confirmPassword() {
            this.form.processing = true;

            axios.post(route('password.confirm'), {
                password: this.form.password,
            }).then(() => {
                this.form.processing = false;
                this.closeModal()
                this.$nextTick(() => this.$emit('confirmed'));
            }).catch(error => {
                this.form.processing = false;
                this.form.error = error.response.data.errors.password[0];
                this.$refs.password.focus()
            });
        },

        closeModal() {
            this.confirmingPassword = false
            this.form.password = '';
            this.form.error = '';
        },
    }
}
</script>
