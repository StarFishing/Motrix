import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Index,
    children: [
      {
        path: 'index',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: 'support',
        component: () => import('../views/support/index.vue'),
      },
    ],
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/support/index.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
