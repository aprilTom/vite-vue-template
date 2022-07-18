import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/page/Home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('src/page/Login/index.vue'),
  },
]

export default routes
