import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClienteViewVue from '@/views/ClienteView.vue'
import ProovedorView from '../views/ProovedorView.vue'
import ProovedorAltaView from '../views/ProovedorAltaView.vue'
import MaterialesView from '@/views/MaterialesView.vue'
import MaterialesAltaView from '@/views/MaterialesAltaView.vue'

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
    {
      path: '/materiales',
      name: 'materiales',
      component: MaterialesView
    },
    {
      path: '/materiales/altas',
      name: 'materiales/altas',
      component: MaterialesAltaView
    },
  ]
})

export default router
