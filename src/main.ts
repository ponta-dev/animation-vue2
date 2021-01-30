import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './common/store'
import log from 'loglevel'
import './plugins/loglevel/logger'
import vuetify from './plugins/vuetify/vuetify'

Vue.config.productionTip = false
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
