import Vue from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue'
import {InertiaProgress} from '@inertiajs/progress'
import {vuetify} from './plugins'

require('./Filters');




Vue.mixin({methods: {route}});
InertiaProgress.init()
createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({el, App, props,plugin }) {
        Vue.use(plugin);
        new Vue({
            vuetify,
            metaInfo: {
                titleTemplate: title => (title ? `${title} - KarajkomQA` : 'KarajkomQA'),
            },
            render: h => h(App, props),
        }).$mount(el)
    },
})
