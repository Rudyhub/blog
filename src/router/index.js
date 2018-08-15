import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/pages/about'

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
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
