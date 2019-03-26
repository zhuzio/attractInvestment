import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import attract from '@/components/attract/attract'
import our from '@/components/our/our'
import policyEncourage from '@/components/index/policyEncourage'
import city from '@/components/index/city'
import aboutProgram from '@/components/index/aboutProgram'
import courseSystem from '@/components/index/courseSystem'

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
      path: '/attract', // 招商扶持
      name: 'attract',
      component: attract
    },
    {
      path: '/our', // 关于我们
      name: 'our',
      component: our
    },
    {
      path: '/policyEncourage', // 政策鼓励
      name: 'policyEncourage',
      component: policyEncourage
    },
    {
      path: '/city', // 一线形势
      name: 'city',
      component: city
    },
    {
      path: '/courseSystem', // 课程体系
      name: 'courseSystem',
      component: courseSystem
    },
    {
      path: '/aboutProgram', // 关于编程
      name: 'aboutProgram',
      component: aboutProgram
    }
  ]
})
