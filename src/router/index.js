import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/components/Enterpage'
// import REGISTER from '@/components/reg_worker'
import WORKER from '@/components/workerpage'
import Add from '@/components/ResumeAdd'
// import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ENTER',
      component: Enter
    },
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: demo
    // },
    // {
    //   path: '/reg_worker',
    //   name: 'REGISTER',
    //   component: REGISTER
    // },
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
