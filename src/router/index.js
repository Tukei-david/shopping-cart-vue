import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/', 
    name: 'HomeView', 
    component: HomeView  
  },{
    path: '/CartView', 
    name: 'CartView', 
    component: CartView  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
