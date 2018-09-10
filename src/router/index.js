import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import about from '@/pages/about'
import works from '@/pages/works'
import blog from '@/pages/blog'
import album from '@/pages/album'
import homework from '@/pages/homework'
import effects from '@/pages/effects'
import landscape from '@/pages/landscape'
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
    }, {
      path: '/blog',
      name: 'blog',
      component: blog
    }, {
      path: '/album',
      name: 'album',
      component: album
    }, {
      path: '/homework',
      alias: ['/villa', '/garden'],
      name: 'homework',
      component: homework
    }, {
      path: '/effects',
      name: 'effects',
      component: effects,
      props: true
    }, {
      path: '/landscape',
      name: 'landscape',
      component: landscape,
      props: true
    }
  ]
})
