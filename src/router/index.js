import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import about from '@/pages/about'
import works from '@/pages/works'
import blog from '@/pages/blog'
import album from '@/pages/album'
import worksDetail from '@/pages/worksDetail'
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
      path: '/works/:workName/:progIndex?',
      name: 'works-detail',
      component: worksDetail,
      props: true
    }
  ]
})
