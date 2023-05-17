import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Politicas.vue')
    }
  },
  {
    path: '/contacto',
    name: 'contacto',

    component: function () {
      return import('../views/Contacto.vue')
    }
  },
  {
    path: '/acerca',
    name: 'acerca',

    component: function () {
      return import('../views/Acerca.vue')
    }
  },
  {
    path: '/Tabla_proyectos',
    name: 'Tabla_proyectos',

    component: function () {
      return import( '../views/Tabla_Proyectos.vue')
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
