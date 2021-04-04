import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#303F9F',
                secondary: '#E8EAF6',
                accent: '#D81B60',
                error: '#F8BBD0',
                info: '#E1F5FE',
                success: '#C8E6C9',
                warning: '#FFECB3'
            },
            dark: {
            }
        }
    }
});
