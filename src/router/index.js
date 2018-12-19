import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/components/Enterpage'
// import REGISTER from '@/components/reg_worker'
import WORKER from '@/components/workerpage'
import Add from '@/components/ResumeAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ENTER',
      component: Enter
    },
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
