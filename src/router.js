import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gen',
      name: 'gen',
      component: () => import('./gen.vue')
    }
  ]
})

export default router
