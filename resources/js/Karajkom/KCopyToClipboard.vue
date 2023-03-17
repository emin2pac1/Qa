<template>

    <div v-clipboard="() => copyData"
         v-clipboard:success="clipboardSuccessHandler"
         v-clipboard:error="clipboardErrorHandler">
        <v-btn color="primary" :ripple="false" plain >

            {{ copy_to_clipboard_text }}
        </v-btn>
    </div>

</template>

<script>
export default {
    name: "KCopyToClipboard",
    props: {
        copyData: {type: String, default: '', required: false}
    },
    methods: {
        clipboardSuccessHandler() {
            this.copy_to_clipboard_text = 'Copied'
            //    set timeout to reset text
            setTimeout(() => {
                this.copy_to_clipboard_text = 'Copy to clipboard'
            }, 2000)

        },
        clipboardErrorHandler() {
            this.copy_to_clipboard_text = 'Error Occurred'
            //    set timeout to reset text
            setTimeout(() => {
                this.copy_to_clipboard_text = 'Copy to clipboard'
            }, 2000)

        }
    },
    data() {
        return {
            copy_to_clipboard_text: 'Copy to clipboard'
        }
    }
}
</script>

<style scoped>

</style>
