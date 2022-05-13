<script setup>
import AnimeSearchCard from '../components/AnimeSearchCard.vue';
import FiltersCanvas from '../components/FiltersCanvas.vue'
import axios from 'axios'
</script>

<template>
    <div id="search" class="min-vh-100">
      <h1>Search Anime</h1>
      <div class="sticky-top">
          <a class="btn btn-filters shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters-canvas" aria-controlls="offcanvas-filters">
            <i class="bi bi-filter-left" id="filters-icon"></i>
            <label for="filters-icon" style="margin-left:8px">Filters</label>
          </a>
        </div>
      <FiltersCanvas :canvas-head="'Filters'" @query-search="_resultQuery"/>
      <div class="container">      
        <div class="row">      
          <div class="col">
            <div class="row gy-3">
              <AnimeSearchCard v-for="item in resultQuery" :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
              :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return {
      searchQuery: null,
      myjson: []
    };
  },
  mounted () {
    axios
      .get(this.backendUrl + 'top/anime')
      .then(response => (this.myjson = response.data)) //response => (this.info = response);        
  },
  methods: {
        _resultQuery(_search) {
          this.searchQuery = _search
        }
    },
  computed: {
    resultQuery(){
      if (this.searchQuery) {
        return this.myjson.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else {        
        return this.myjson;
      }
    }
  }
};
</script>

<style>

h1 {
  font-family: 'Esteban';
  text-align: center;
  color: white;
  margin-top: 32px;
}

#search {
  color: white;
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: 'Montserrat';
}

.mymargin {
  margin-top: 36px;
}

.search-text-box {
  background-color: #000021;
  color: #fff;
}

.search-text-box:focus {
  background-color: #000021;
  color: #fff;
}

.search-text-box::selection {
    background: #3a2c5a;
}

.btn-filters {
    color: white;
    font-size: large;
}

.btn-filters:hover {
    background: #3a2c5a;
    color: white
}
</style>

