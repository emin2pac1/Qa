<template>
    <v-dialog
        v-model="dialog"
        :max-width="options.width"
        :style="{ zIndex: options.zIndex }"
        @keydown.esc="cancel"
        :persistent="options.persistent"
        @keydown.enter="agree"
    >
        <v-card>
            <v-toolbar dark :color="color" dense flat>
                <v-toolbar-title class="text-body-2 font-weight-bold">
                    <v-icon>{{ icon }}</v-icon>
                    {{ title }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text
                v-show="!!message"
                class="pa-4 black--text"
                v-html="message"
            ></v-card-text>
            <v-card-actions class="pt-3">
                <v-spacer></v-spacer>
                <v-btn
                    color="grey"
                    text
                    @click.native="cancel"
                >
                   cancel

                </v-btn
                >
                <v-btn
                    :color="color"
                    outlined
                    @click.native="agree"
                >
                   ok
                </v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script>
const Types = {
    Error: "error",
    Warning: "warning",
    Success: "success"
}
export {Types}

export default {
    name: "KConfirmDialog",
    data() {
        return {
            dialog: false,
            resolve: null,
            reject: null,
            message: null,
            dialogType: Types.Success,
            title: null,
            options: {
                width: 400,
                zIndex: 200,
                persistent: false

            },
            icon: null,
            color: null,

        };
    },

    methods: {
        open(title, message, type = Types.Success, options) {
            this.dialog = true;
            this.title = title;
            this.message = message;
            this.dialogType = type;

            this.setDialogType();

            this.options = Object.assign(this.options, options);
            return new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        },
        agree() {
            this.resolve(true);
            this.dialog = false;
        },
        cancel() {
            this.resolve(false);
            this.dialog = false;
        },
        setDialogType() {
            switch (this.dialogType) {
                case Types.Success:
                    this.icon = 'check_circle'
                    this.color = 'success'
                    break;
                case Types.Warning:
                    this.icon = 'warning'
                    this.color = 'warning'
                    break;
                case Types.Error:
                    this.icon = 'delete'
                    this.color = 'error'
                    break;
                default:
                    this.icon = 'check_circle'
                    this.color = 'success'
            }
        }
    },

};
</script>
