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
      path: '/top/anime',
      name: 'topanime',
      component: () => import('../views/TopAnimeView.vue')
    },
    {
      path: '/top/series',
      name: 'topseries',
      component: () => import('../views/TopSeriesView.vue')
    },
    {
      path: '/series/:id',
      name: 'seriesview',
      component: () => import('../views/SeriesView.vue'),
      props:true
    },
  ]
})

export default router
