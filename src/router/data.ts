import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/page/Home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/Login/index.vue'),
  },
]

export default routes
