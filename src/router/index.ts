import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tokens',
      name: 'Tokens',
    
      component: () => import('../components/Tokens.vue')
    },
    {
      path: '/transactions',
      name: 'Txn',
    
      component: () => import('../components/Transactions.vue')
    }
  ]
})

export default router
