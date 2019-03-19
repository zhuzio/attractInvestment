import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import attract from '@/components/attract/attract'
import our from '@/components/our/our'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      meta: { requiresAuth: true },
      component: index
    },
    {
      path: '/attract', // 登录
      name: 'attract',
      component: attract
    },
    {
      path: '/our', // 登录
      name: 'our',
      component: our
    },
  ]
})
