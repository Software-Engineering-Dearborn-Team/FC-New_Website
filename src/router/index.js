import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path:'/login',
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
  {
    path:'/signUp',
    name: 'signUp',
    component: () => import('../views/signUpView.vue')
  },

  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: () => import('../views/UserProfile.vue')
  },

  {
    path: '/RegisterView',
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
