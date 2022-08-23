import Vue from 'vue'
import Vuex from 'vuex'

import social from './modules/social'
import navigation from './modules/navigation'
import profile from './modules/profile'
import preload from './modules/preload'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    social,
    navigation,
    profile,
    preload
  }
})
