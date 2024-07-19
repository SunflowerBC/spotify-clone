import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import LibraryView from '@/views/LibraryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная страница',
      component: HomeView
    },
    {
      path: '/search',
      name: 'Поиск',
      component: SearchView
    },
    {
      path: '/library',
      name: 'Библиотека песен',
      component: LibraryView
    },
  ]
})

export default router
