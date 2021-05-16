import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home2',
      component: () => import('./views/Home2.vue')
    },
    // {
    //   path: '/todos',
    //   component: () => import('./views/Todos.vue')
    // },
    // {path: '/resume',
    //  component: ()=>import('./views/resume.vue')
    //  },
     {
      path: '*',

      meta: {layout: 'empty'},
      component: () => import('./components/PageNotFound.vue')
    },
     
    {
      path: '/detail/:id',
      name: 'detail',
      //meta: {layout: 'main', auth: true},
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/detailR/:id',
      name: 'detailR',
      //meta: {layout: 'main', auth: true},
      component: () => import('./views/DetailR.vue')
    },
    {
      path: '/login',

      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/registration',
    
      meta: {layout: 'empty'},
      component: () => import('./views/Registration.vue')
    },
    {
      path: '/addresume',
      meta: {layout: 'empty'},
      component: () => import('./views/NewResume.vue')
    },
    {
      path: '/addvacancy',
      meta: {layout: 'empty'},
      component: () => import('./views/NewVacancy.vue')
    },
    {
      path: '/resume',

      meta: {layout: 'empty'},
      component: () => import('./views/Resume.vue')
    },
    {
      path: '/vacancies',

      meta: {layout: 'empty'},
      component: () => import('./views/Vacancies.vue')
    }
  ]
})