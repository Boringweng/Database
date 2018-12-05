import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/Homepage'
// import  from '@/components/'
import FrameB from '@/components/FrameB'
import FrameI from '@/components/FrameI'
import RegB  from '@/components/registeredB'
import RegI from '@/components/registeredI'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ENTER',
      component: Homepage
    },
    {
      path: '/RegB',
      name: 'RegB',
      component: RegB
    },
    {
      path: '/RegI',
      name: 'RegI',
      component: RegI
    },
    {
      path: '/Frameb',
      name: 'FrameB',
      component: FrameB
    },
    {
      path: '/FrameI',
      name: 'FrameI',
      component: FrameI
    },
  ]
})
