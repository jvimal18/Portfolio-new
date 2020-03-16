import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppHome from '@/components/AppPage/Home'
import blogHome from '@/apps/blog/blogHome'
import blogView from '@/apps/blog/components/blogView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/apps',
    component: () => import('../views/AppPage.vue'),
    children: [
      {
        name: 'Apps',
        path: '',
        component: AppHome
      },
      {
      path: 'typinggame',
      name: 'TypeIT',
      component: () => import('../apps/TypingGame/typingGame.vue')
      },
      {
        path: 'flames',
        name: 'Flames',
        component: () => import('@/apps/Flames/flames.vue')
      },
      {
        path: 'tax2021',
        name: 'Tax Calculator 20-21',
        component: () => import('@/apps/TaxCalculator20-21/TaxCalcHome.vue')
      },

    ]
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import('../views/Credits.vue')
  },
  {
    path: '/blog',
    component: () => import('../views/Blog.vue'),
    children: [
      {
        path: '',
        name: 'Blog',
        component: blogHome
      }, 
      {
        path: '/blog/:id',
        component: blogView
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
