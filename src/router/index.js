import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import rmedia from '@/components/rmedia'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/rmedia',
      name: 'rmedia',
      component: rmedia
    }
  ]
})
