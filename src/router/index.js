import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/pedidos",
    name: "PedidosPage",
    component: () => import('../views/PedidosPage.vue'),
  }, 
  {
    path: "/",
    name: "HomePage",
    component: () => import('../views/HomePage.vue') 
  }
]

const router = createRouter({ 
  history: createWebHistory(),
  routes
})

export default router;