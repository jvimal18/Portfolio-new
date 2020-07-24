import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppHome from '@/components/AppPage/Home'
import blogHome from '@/apps/blog/blogHome'
import blogView from '@/apps/blog/components/blogView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "About" */ '@/views/Home.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "Resume" */ '../views/Resume.vue')
  },
  {
    path: '/apps',
    component: () => import(/* webpackChunkName: "App" */ '../views/AppPage.vue'),
    children: [
      {
        name: 'Apps',
        path: '',
        component: AppHome
      },
      {
      path: 'typinggame',
      name: 'TypeIT',
      component: () => import(/* webpackChunkName: "App-Typing" */ '../apps/TypingGame/typingGame.vue')
      },
      {
        path: 'flames',
        name: 'Flames',
        component: () => import(/* webpackChunkName: "App-Flames" */ '@/apps/Flames/flames.vue')
      },
      {
        path: 'tax2021',
        name: 'Tax Calculator 20-21',
        component: () => import(/* webpackChunkName: "App-TaxCalc20" */ '@/apps/TaxCalculator20-21/TaxCalcHome.vue')
      },
      {
        path: 'tictactoe',
        name: 'TicTacToe',
        component: () => import(/* webpackChunkName: "App-TicTacToe" */ '../apps/TicTacToe/tictactoe.vue')
      },

    ]
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import(/* webpackChunkName: "Credits" */ '../views/Credits.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/AdminLogin.vue')
  },
  {
    path: '/blog',
    component: () => import('../views/Blog.vue'),
    children: [
      {
        path: '',
        name: 'Blogs',
        component: blogHome
      }, 
      {
        name: 'Blog',
        path: '/blog/:category',
        component: blogView,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
