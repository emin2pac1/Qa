<template>
    <v-row no-gutters class="mx-3 align-center">
        <v-spacer/>
        <small> items per page </small>

        <div style="width: 50px;" class="mx-3">
            <v-combobox @change="onItemsPerPageChange" dense hide-details :items="[5,10,15,25]"
                        v-model="itemsPerPageMutable">

                <template v-slot:label="{item}">
                    <small>{{ item }}</small>
                </template>
                <template v-slot:selection="{item}">
                    <small>{{ item }}</small>
                </template>
            </v-combobox>
        </div>

        <small>{{ pageMeta.from }} - {{ pageMeta.to }} {{ isSimplePaginate ? '' : 'of' }}
            {{
                isSimplePaginate ? '' :  pageMeta.total
            }}</small>

        <v-btn class="text-capitalize" icon large
               :disabled="pageMeta.current_page===1" @click="gotoFirstPage">

            <v-icon>

                first_page
            </v-icon>
        </v-btn>
        <v-btn class="text-capitalize" icon large
               :disabled="pageMeta.current_page===1" @click="gotoPrevious">
            <v-icon>
                chevron_left
            </v-icon>
        </v-btn>

        <v-btn class="text-capitalize" icon large
               :disabled="pageMeta.current_page===pageMeta.last_page" @click="gotoNext">


            <v-icon>
                chevron_right
            </v-icon>
        </v-btn>
        <v-btn class="text-capitalize" icon large
               v-if="!isSimplePaginate"
               :disabled="pageMeta.current_page===pageMeta.last_page" @click="gotoLastPage">

            <v-icon>

                last_page
            </v-icon>
        </v-btn>
    </v-row>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue'

export default {
    name: "KDataTableFooter",
    components: {Link},
    methods: {
        onItemsPerPageChange() {
            this.$emit('onItemsPerPageChange', this.itemsPerPageMutable)
        },
        gotoFirstPage() {
            let params = {}
            Object.keys(this.route().params).forEach(key => {
                if (key !== 'page') {
                    params[key] = this.route().params[key];
                }
            });

            this.$inertia.get(route(this.route().current(), {...params}),
            );
        }, gotoLastPage() {
            this.$inertia.get(route(this.route().current(), {...this.route().params, page: this.pageMeta.last_page}),
            );
        },
        gotoPrevious() {

            let params = {}
            Object.keys(this.route().params).forEach(key => {
                if (!(key === 'page' && (this.route().params.page - 1) === 1)) {
                    if (key === 'page') {
                        params[key] = --this.route().params[key];
                    }else{

                    params[key] = this.route().params[key];
                    }
                }
            });


            this.$inertia.get(route(this.route().current(), {
                ...params
            }),);
        },
        gotoNext() {
            this.$inertia.get(route(this.route().current(), {
                ...this.route().params,
                page: this.route().params.page ? ++this.route().params.page : 2
            }),);
        }
    },
    data() {
        return {
            itemsPerPageMutable: this.itemsPerPage
        }
    },
    props: {
        pageMeta: {type: Object, default: null, required: true},
        itemsPerPage: {type: Number, required: true},
    },
    computed: {
        isSimplePaginate() {
            return !this.pageMeta.total
        }
    }
}
</script>

<style scoped>

</style>
