<script setup>
import axios from 'axios'
import AnimeCard from '@/components/cards/AnimeCard.vue'
import SeriesCard from '@/components/cards/SeriesCard.vue'
</script>

<script>
export default {
  data() {
    return {
      top_a_json: [],
      top_s_json: [],
      status: 'normal'
    };
  },
  mounted() {
    this.loadData()

  },
  methods: {
    loadData() {
    axios
        .get(this.backendUrl + 'top/anime')
        .then(response => {
          this.status = 'normal'
          this.top_a_json = response.data.lst})
        .catch(() => {
          this.status = 'failed'
          setTimeout(this.loadData, 1000)
          })
    axios
        .get(this.backendUrl + 'top/series')
        .then(response => (this.top_s_json = response.data.lst))
        .catch(() => 'a')
    }
  }
}
</script>

<template>
<div class="container min-vh-100">

  <template v-if="status === 'failed'">
		<div class="mytext">
			<h5>Yikes! The backend is down</h5>
			<p>If you want to run it locally check: <a href='https://github.com/anime-index/anidex-backend'>Anidex
					Backend</a></p>
			<p>This page will keep reloading till it goes back up!</p>
		</div>
	</template>

  <template v-else>

    <div style="margin-top: 32px;">
      <RouterLink to="/top/anime" class="carousel-title">TOP ANIME</RouterLink>
    </div>

    <div class="row d-block top-anime-row">
        <div v-for="item in top_a_json.slice(0, 10)" class="d-inline-block" style="max-width: 500px;" :key="item.mal_id">
            <AnimeCard :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members" :order="true"
                  :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                  :position="top_a_json.indexOf(item)+1" :genres="item.genres" style="white-space: normal; margin-top: 16px; margin-bottom: 16px; margin-left: 10px; color: white;"/>
        </div>
    </div>

    <!--div id="animeCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <AnimeCard class="anime-card" v-for="item in top_a_json.slice(0,1)" :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
                    :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                    :position="top_a_json.indexOf(item)+1"/>
        </div>
        <div class="carousel-item">
          <AnimeCard class="anime-card" v-for="item in top_a_json.slice(1,2)" :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
                    :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                    :position="top_a_json.indexOf(item)+1"/>
        </div>
        <div class="carousel-item">
          <AnimeCard class="anime-card" v-for="item in top_a_json.slice(2,3)" :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
                    :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                    :position="top_a_json.indexOf(item)+1"/>
        </div>
        <div class="carousel-item">
          <AnimeCard class="anime-card" v-for="item in top_a_json.slice(3,4)" :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
                    :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                    :position="top_a_json.indexOf(item)+1"/>
        </div>
        <div class="carousel-item">
          <AnimeCard class="anime-card" v-for="item in top_a_json.slice(4,5)" :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
                    :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                    :position="top_a_json.indexOf(item)+1"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#animeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#animeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div-->

    <div style="margin-top: 32px;">
      <RouterLink to="/top/series" class="carousel-title">TOP SERIES</RouterLink>
    </div>

    <div class="row d-block top-anime-row">
        <div v-for="item in top_s_json.slice(0, 10)" class="d-inline-block" style="max-width: 500px;" :key="item.series_id">
            <SeriesCard :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
                      :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons"
                      :synopsis="item.synopsis" :position="item.position" :genres="item.genres" :order="true" :date="item.date.slice(0, 4)" 
                      style="white-space: normal; margin-top: 16px; margin-bottom: 16px; margin-left: 10px;"/>
        </div>
    </div>

    <!--div id="seriesCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" v-if="top_s_json.length > 0">
        <div class="carousel-item active">
          <SeriesCard class="serie-card" v-for="item in top_s_json.slice(0,1)" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
                      :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
                      :position="item.position"/>
        </div>
        <div class="carousel-item">
          <SeriesCard class="serie-card" v-for="item in top_s_json.slice(1,2)" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
                      :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
                      :position="item.position"/>
        </div>
        <div class="carousel-item">
          <SeriesCard class="serie-card" v-for="item in top_s_json.slice(2,3)" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
                      :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
                      :position="item.position"/>
        </div>
        <div class="carousel-item">
          <SeriesCard class="serie-card" v-for="item in top_s_json.slice(3,4)" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
                      :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
                      :position="item.position"/>
        </div>
        <div class="carousel-item">
          <SeriesCard class="serie-card" v-for="item in top_s_json.slice(4,5)" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
                      :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
                      :position="item.position"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#seriesCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#seriesCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div-->

  </template>

</div>

</template>


<style scoped>
/*@media (min-width: 768px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    margin-right: 0;
    flex: 0 0 33.333333%;
    display: block;
  }
}*/

.mytext {
	color: white;
	margin: 20px;
}

.carousel-title {
  font-family: 'Montserrat-Bold';
  font-size: x-large
}

.carousel-title::selection {
  background: #3a2c5a;
}

.carousel-inner{
  padding: 1em;
}

.carousel-control-prev, .carousel-control-next{
  background-color: #e1e1e1;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.top-anime-row {
  white-space: nowrap;
  overflow-x: scroll;
}

.top-anime-row::-webkit-scrollbar {
    width: 10px;
}

.top-anime-row::-webkit-scrollbar-track {
    background: #0f023b;
}

.top-anime-row::-webkit-scrollbar-thumb {
    background: #3a2c5a;
}

.top-anime-row::-webkit-scrollbar-thumb:hover {
    background: #2c2047;
}

.top-anime-row::-webkit-scrollbar-corner {
    background: #21005700;
}
</style>

