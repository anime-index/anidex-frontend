import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
=======
import TopAnimeView from '../views/TopAnimeView.vue'
import ListView from '../views/ListView.vue'
>>>>>>> ac6e04f0ecaca320464132215dd8185450ae5e76

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
<<<<<<< HEAD
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
=======
      path: '/topanime',
      name: 'topanime',
      component: TopAnimeView
    },
    {
      path: '/list',
      name: 'listanime',
      component: ListView
    }
>>>>>>> ac6e04f0ecaca320464132215dd8185450ae5e76
  ]
})

export default router
