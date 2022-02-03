import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Sign from "../views/Sign.vue"
import Landing from "../views/Landing.vue"
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign',
    name: "Sign",
    component: Sign
  },
  {
    path: '/',
    name: "Landing",
    component: Landing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
