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
      path: '/about',
      name: 'about',
   
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tienda',
      name: 'tienda',
    
      component: () => import('../views/tienda.vue')
    },
    {
      path: '/elpepe',
      name: 'elpepe',
    
      component: () => import('../views/elepe.vue')
    },  {
      path: '/xd',
      name: 'xd',
 
      component: () => import('../views/xd.vue')
    }
  ]
})

export default router
