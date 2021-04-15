import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SampleLayout from '@/app/sample/component/SampleLayout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/sample'
  },
  {
    path: '/sample',
    name: 'sample',
    component: SampleLayout
  },
  {
    path: '/test',
    name: 'test'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
