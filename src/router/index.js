import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/main_ss/View.vue'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: MainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
