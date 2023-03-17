import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#212529',
                secondary: '#69696b',
                accent: '#535b62',
                error: '#65737e',
                success: '#484848',
            },
        },
        options: {
            customProperties: true,
        },
    }
}

export default new Vuetify(opts)
