import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClienteViewVue from '@/views/ClienteView.vue'
import ProovedorView from '../views/ProovedorView.vue'
import ProovedorAltaView from '../views/ProovedorAltaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/clientes/altas',
      name: 'clientes',
      component: ClienteViewVue
    },
    {
      path: '/proovedor',
      name: 'proovedores',
      component: ProovedorView
    },
    {
      path: '/proovedores/altas',
      name: 'proovedoresAltas',
      component: ProovedorAltaView
    },
  ]
})

export default router
