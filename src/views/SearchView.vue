<script setup>
import AnimeSearchCard from '../components/AnimeSearchCard.vue';
import axios from 'axios'
</script>

<template>
    <div id="search" class="min-vh-100" style=color:white>
      <div class="container">      
        <div class="row">
            <div class="col-3">
              <input class="form-control me-2" v-model="searchQuery" type="search" placeholder="Search" aria-label="Search">
                <h5>Sort By</h5>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="scoreCheck">
                  <label class="form-check-label" for="scoreCheck">
                    Score
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="popularityCheck" disabled>
                  <label class="form-check-label" for="popularityCheck">
                    Popularity
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="dateCheck" disabled>
                  <label class="form-check-label" for="dateCheck">
                    Date
                  </label>
                </div>
                <h5>Filters</h5>
                <h6>Type</h6>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="tvCheck" value="option1">
                  <label class="form-check-label" for="inlineCheckbox1">TV</label>
                  </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="movieCheck" value="option2">
                  <label class="form-check-label" for="inlineCheckbox2">Movie</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="specialCheck" value="option3">
                  <label class="form-check-label" for="inlineCheckbox3">Special</label>
                </div>
                <h6>Genre</h6>
                <select class="form-select" aria-label="genreSelect">
                  <option selected>-</option>
                  <option value="1">Action</option>
                  <option value="2">Comedy</option>
                  <option value="3">Drama</option>
                </select>
            </div>        
        <div class="col-9">
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
      .get('http://127.0.0.1:8000/top/anime')
      .then(response => (this.myjson = response.data)) //response => (this.info = response);        
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
.mymargin {
  margin-top: 36px;
}
</style>

