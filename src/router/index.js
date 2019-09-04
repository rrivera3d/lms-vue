import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Applications from '@/components/Applications'
import Application from '@/components/Application'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/applications/:id',
      name: 'application',
      component: Application
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
