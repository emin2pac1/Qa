<template>
    <Link class="text-decoration-none " :href="url" :method="method" tag="span" style="cursor: pointer"
          :class="classes">
        <slot>
            <h4>{{ label }}</h4>
        </slot>
    </Link>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue'

export default {
    name: "KNavLink",
    components: {Link},
    props: {
        url: {
            type: String,
            default: null,
            required: true
        },

        active: {
            type: Boolean,
            default: false,
            required: false
        },
        label: {
            type: String,
            default: 'Link',
            required: false
        },
        routeName: {
            type: String,
            default: 'Link',
            required: false
        }, routeParent: {
            type: String,
            default: 'Link',
            required: false
        },
        method: {type: String, default: 'get', required: false},
    },
    computed: {
        classes() {
            return (route().current(this.routeName) || route().current(this.routeParent))
                ? 'nav-link-exact-active' : 'nav-link-exact-inactive'

        }
    }
}
</script>

<style scoped>

</style>
