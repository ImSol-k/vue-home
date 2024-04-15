import { createRouter, createWebHistory } from 'vue-router'
//메인
import ProductInfoView from '../views/product_sr/ProductInfoView.vue'
//매니저
import productInsertView from '../views/manager_ys/productInsertView.vue'
import productListView from '../views/manager_ys/productListView.vue'

const routes = [
  {
    path: '/main/product',
    name: 'product',
    component: ProductInfoView
  },
  {
    path: '/manager/productinsert',
    name: '/manager/productinsert',
    component: productInsertView
  },
  {
    path: '/manager/productlist',
    name: '/manager/productlist',
    component: productListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
