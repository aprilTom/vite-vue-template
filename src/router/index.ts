import { createRouter, createWebHistory } from 'vue-router'
import routes from './data'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const title = to.meta?.title
  if (title)
    document.title = title as string

  next()
})

export default router
