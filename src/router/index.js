import { createRouter, createWebHistory } from 'vue-router'
//메인
import MainView from '@/views/main_ss/MainView.vue'
import ProductInfoView from '@/views/product_sr/ProductInfoView.vue'
//매니저
import productInsertView from '../views/product_sr/productInsertView.vue'
import productListView from '../views/product_sr/productListView.vue'

const routes = [
  {
    path : '/',
    name : '/',
    component : MainView
  },
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
