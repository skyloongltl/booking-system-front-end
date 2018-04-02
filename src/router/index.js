import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Home from '@/components/student/Home'
import Information from '@/components/student/PersonalInformation'
import SelectedExperiment from '@/components/student/SelectedExperiment'
import Announcement from '@/components/Announcement'
import THome from '@/components/teacher/Home'
import TInformation from '@/components/teacher/PersonalInformation'
import TSelectedExperiment from '@/components/teacher/SelectedExperiment'
import AdminHome from '@/components/admin/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/selected',
      name: 'SelectedExperiment',
      component: SelectedExperiment
    },
    {
      path: '/announcement/:type',
      name: 'Announcement',
      component: Announcement
    },
    {
      path: '/t_home',
      name: 'THome',
      component: THome
    },
    {
      path: '/t_information',
      name: 'TInformation',
      component: TInformation
    },
    {
      path: '/t_selected',
      name: 'TSelectedExperiment',
      component: TSelectedExperiment
    },
    {
      path: '/admin/home',
      name: 'AdminHome',
      component: AdminHome
    }
  ]
})
