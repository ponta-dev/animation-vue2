import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import log from 'loglevel'
import './plugins/loglevel/logger'
import vuetify from './plugins/vuetify/vuetify'
import './common/error/window'
import {configErrorHandler} from './common/error/vue-config'

Vue.config.productionTip = false
Vue.config.errorHandler = configErrorHandler

log.info("start application")
log.debug("** application env **")
log.debug(process.env)
log.debug("** *************** **")

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
