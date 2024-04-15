import { createRouter, createWebHistory } from 'vue-router'
import ProductInfoView from '../views/product_sr/ProductInfoView.vue'

const routes = [
  {
    path: '/product',
    name: 'product',
    component: ProductInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
