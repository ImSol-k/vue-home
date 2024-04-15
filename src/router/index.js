import { createRouter, createWebHistory } from 'vue-router'
import View from '../views/main_ss/View.vue'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
