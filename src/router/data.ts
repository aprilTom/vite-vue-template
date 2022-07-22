import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/page/Home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/Login/index.vue'),
    meta: {
      title: '登陆',
    },
  },
  {
    path: '/:path(.*)+',
    name: 'notFound',
    redirect: {
      name: 'home',
    },
  },
]

export default routes
