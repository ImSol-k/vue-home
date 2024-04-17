import { createRouter, createWebHistory } from 'vue-router'
//메인
//승수
import MainView from '../views/main_ss/MainView.vue'
import CategoryView from '../views/main_ss/CategoryView.vue'
//소리
import ProductInfoView from '../views/product_sr/ProductInfoView.vue'
import ProductCartView from '../views/product_sr/ProductCartView.vue'
import PaymentEnd from '../views/product_sr/PaymentEnd.vue'
//지원
import MyPageView from '../views/user_jo/MyPageView.vue'
import LoginView from '../views/user_jo/LoginView.vue'
import PayView from '../views/user_jo/PayView.vue'

//매니저
//예슬
import ProductInsertView from '../views/manager_ys/ProductInsertView.vue'
import ProductListView from '../views/manager_ys/ProductListView.vue'
import BedListView from '../views/manager_ys/BedListView.vue'
//재현
import ManagerChart from '../views/manager_jh/ManagerChart.vue'
import ManagerState from '../views/manager_jh/ManagerState.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/product/:no',
    name: 'product',
    component: ProductInfoView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ProductCartView
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPageView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/pay',
    name: 'pay',
    component: PayView
  },
  {
    path: '/payend',
    name: 'payend',
    component: PaymentEnd
  },
  {
    path: '/manager/productinsert',
    name: '/manager/productinsert',
    component: ProductInsertView
  },
  {
    path: '/manager/productlist',
    name: '/manager/productlist',
    component: ProductListView
  },
  {
    path: '/manager/bedlist',
    name: '/manager/bedlist',
    component: BedListView
  },
  {
    path: '/manager/chart',
    name: '/manager/chart',
    component: ManagerChart
  },
  {
    path: '/manager/state',
    name: '/manager/state',
    component: ManagerState
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
