// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/'
import router from './router'
import config from './config'
import initSocket from './services/WebSocket'
import messageHandler from './store/websockets'

// Import Main App
import App from './App'

// Register common components to global
import './common/components'

Vue.config.productionTip = false

initSocket(store, messageHandler, config.wsUrl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
