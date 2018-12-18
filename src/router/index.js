import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/home'
import REGISTER from '@/components/register'
import WORKER from '@/components/workerpage'
import Add from '@/components/ResumeAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ENTER',
      component: Homepage
    },
    {
      path: '/home',
      name: 'ENTER',
      component: Homepage
    },
    {
      path: '/register',
      name: 'REGISTER',
      component: REGISTER
    },
    {
      path: '/ResumeAdd',
      name: 'RESUMEADD',
      component: Add
    },
    {
      path: '/workerpage',
      name: 'WORKER',
      component: WORKER
    }
  ]
})
