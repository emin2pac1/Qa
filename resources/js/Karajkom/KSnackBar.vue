<template>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :color="color"
    >
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                text
                class="text-capitalize"
                v-bind="attrs"
                @click="onClickAction"
            >
                {{ action_text }}
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: "KSnackBar",
    methods: {
        open(text, color, action_text = 'close', action = null, timeout) {
            this.text = text;
            this.color = color;
            this.action = action;
            this.timeout = timeout;
            this.snackbar = true;
            if (action_text) {
                this.action_text = action_text;
            }
        },

        onClickAction() {
            this.snackbar = false

            //check action is not null and is a function
            if (this.action && typeof this.action === 'function') {
                this.action();
            }
        }
    },
    data() {
        return {
            text: null,
            action: null,
            snackbar: false,
            color: 'success',
            action_text: 'close',
            timeout: 3000,
        }
    }
}
</script>

<style scoped>

</style>
