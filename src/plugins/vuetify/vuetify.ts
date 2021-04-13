import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        dark: process.env.VUE_APP_THEME_DARK,
        themes: {
            light: {
                primary: '#3949AB',
                secondary: '#E8EAF6',
                accent: '#F06292',
                error: '#FFCDD2',
                info: '#E1F5FE',
                success: '#C8E6C9',
                warning: '#FFECB3'
            },
            dark: {
                primary: '#313131',
                secondary: '#616161',
                accent: '#01579B',
                error: '#E53935',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FF9800'
            }
        }
    }
});
