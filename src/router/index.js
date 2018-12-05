import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/Homepage'
// import  from '@/components/'
import FrameB from '@/components/FrameB'
import FrameE from '@/components/FrameE'
import RegB  from '@/components/registeredB'
import RegE from '@/components/registeredE'
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
      path: '/RegE',
      name: 'RegE',
      component: RegE
    },
    {
      path: '/FrameB',
      name: 'FrameB',
      component: FrameB
    },
    {
      path: '/FrameE',
      name: 'FrameE',
      component: FrameE
    },
  ]
})
