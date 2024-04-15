import { createRouter, createWebHistory } from 'vue-router'
//메인
//승수
import MainView from '../views/main_ss/MainView.vue'
import CategoryView from '../views/main_ss/CategoryView.vue'
//소리
import ProductInfoView from '../views/product_sr/ProductInfoView.vue'
import ProductCartView from '../views/product_sr/ProductCartView.vue'
//지원
import MyPageView from '../views/user_jo/MyPageView.vue'
import LoginView from '../views/user_jo/LoginView.vue'
import PayView from '../views/user_jo/PayView.vue'

//매니저
//예슬
import productInsertView from '../views/manager_ys/productInsertView.vue'
import productListView from '../views/manager_ys/productListView.vue'
import BedListView from '../views/manager_ys/BedListView.vue'
//재현
import ManagerChart from '../views/manager_jh/ManagerChart.vue'

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
    path: '/product',
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
    path: '/manager/productinsert',
    name: '/manager/productinsert',
    component: productInsertView
  },
  {
    path: '/manager/productlist',
    name: '/manager/productlist',
    component: productListView
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
