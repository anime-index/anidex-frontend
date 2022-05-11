import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/top/anime',
      component: () => import('../views/TopAnimeView.vue')
    },
    {
      path: '/top/series',
      component: () => import('../views/TopSeriesView.vue')
    },
    {
      path: '/series/:id',
      component: () => import('../views/SeriesView.vue'),
      props:true
    },
    {
      path: '/list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/search',
      component: () => import('../views/SearchView.vue')
    }
  ]
})

export default router
