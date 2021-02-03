import { FRAME } from '@/app/frame/store'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    frame: FRAME
  }
})
