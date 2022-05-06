import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopAnimeView from '../views/TopAnimeView.vue'
import ListView from '../views/ListView.vue'
import SearchViewVue from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
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
      name: 'listanime',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/search',
      name: 'searchanime',
      component: SearchViewVue
    }
  ]
})

export default router
