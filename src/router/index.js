import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import about from '@/pages/about'
import works from '@/pages/works'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      alias: ['/home', '/index'],
      name: 'home',
      component: home
    }, {
      path: '/about',
      name: 'about',
      component: about
    }, {
      path: '/works',
      name: 'works',
      component: works
    }
  ]
})
