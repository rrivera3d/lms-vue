import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import config from '../config'

Vue.use(Vuex)

const state = {
  bookmarks: [],
  data: {
    applications: {
      results: []
    },
    application: {}
  },
  notification: {
    messages: []
  },
  session: {
    userName: 'local',
    firstName: 'Ryan',
    lastName: 'Rivera',
    company: 'progressa',
    type: 'CSR',
    lang: 'en',
    preferences: {},
    isAuthenticated: false,
    permissions: {}
  },
  uiControls: {
    isLoading: false,
    showMessage: false,
    message: null,
    severity: null
  }
}

const vuexLocal = new VuexPersistence({
  key: config.persistKey,
  storage: window.localStorage,
  modules: config.persistWhitelist
})

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [vuexLocal.plugin]
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
