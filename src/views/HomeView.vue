<script setup>
import axios from 'axios'
import AnimeCard from '../components/AnimeCard.vue'
import SeriesCard from '../components/SeriesCard.vue'
</script>

<script>
export default {
  name: "Home",
  data(){
    return {
      searchQuery: null,
      top_a_json: [],
      top_s_json: []
    };
  },
  mounted () {

    axios
        .get(this.backendUrl + 'top/anime')
        .then(response => (this.top_a_json = response.data.lst))
    axios
        .get(this.backendUrl + 'top/series')
        .then(response => (this.top_s_json = response.data.lst))
  },
  computed: {
    resultQuery(){
      if (this.searchQuery) {
        return this.top_a_json.filter(item => {
          return this.searchQuery
              .toLowerCase()
              .split(" ")
              .every(v => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.top_a_json;
      }
    }
  }

};
</script>

<template>
<div class="container min-vh-100">
  <div style="margin-top: 32px;">
    <RouterLink to="/top/anime" class="carousel-title">TOP ANIME</RouterLink>
  </div>

  <div class="row d-block top-anime-row">
      <div  v-for="item in this.top_a_json.slice(0, 10)" class="d-inline-block w-50" :key="item.mal_id">
          <AnimeCard :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
                :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                :position="top_a_json.indexOf(item)+1" :genres="item.genres" style="white-space: normal; margin-top: 16px; margin-bottom: 16px; margin-left: 8px; color: white;"/>
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
      <div  v-for="item in this.top_s_json.slice(0, 10)" class="d-inline-block w-50" :key="item.series_id">
          <SeriesCard class="serie-card" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
                    :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
                    :position="item.position" style="white-space: normal; margin-top: 16px; margin-bottom: 16px; margin-left: 8px;"/>
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
.anime-card{
  color: white;
  margin: 0 .5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
}

.serie-card{
  color: white;
  margin: 0 .5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
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

