import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import { removeReport, report } from '@/common/js/report'
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
      {
        path: 'feature',
        component: () => import('../views/feature/index.vue'),
      },
    ],
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.fullPath === '/feature') {
    removeReport()
  } else {
    report()
  }
  next()
})
export default router
