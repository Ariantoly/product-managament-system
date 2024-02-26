import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('/src/pages/Home.vue')
const ProductForm = () => import('/src/pages/ProductForm.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/insert',
    name: 'Insert Product',
    component: ProductForm
  },
  {
    path: '/product/edit/:id',
    name: 'Edit Product',
    component: ProductForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router