import Vue from 'vue'

// Register to Global
import Notifications from './Notifications'
import GlobalHeader from './GlobalHeader'
import LocalHeader from './LocalHeader'
import AppBookmarks from './AppBookmarks'
import Page from './Page'

Vue.component('notifications', Notifications)
Vue.component('global-header', GlobalHeader)
Vue.component('local-header', LocalHeader)
Vue.component('app-bookmarks', AppBookmarks)
Vue.component('page', Page)
