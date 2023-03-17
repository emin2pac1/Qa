<template>
    <div class="wrapper">
        <k-confirm-dialog ref="confirm"/>


        <slot :confirm="startConfirming"/>

    </div>
</template>

<script>
import KConfirmDialog, {Types} from "./KConfirmDialog";

export default {
    name: "KConfirmedAction",
    components: {KConfirmDialog},
    props: {
        executor: {
            type: Function,
            default: () => {

            },
            required: false
        },
    },
    methods: {
        async startConfirming() {
            if (await this.$refs.confirm.open(
                'Confirm action',
                'Are you sure you want to perform this action?',
                Types.Error
            )) {
                this.executor();
            }
        }
    }
}
</script>


<style scoped>
.wrapper {
    display: inline;
}
</style>

