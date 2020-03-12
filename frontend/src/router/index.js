import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    name: 'Apps',
    component: () => import('../views/AppPage.vue')
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import('../views/Credits.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
