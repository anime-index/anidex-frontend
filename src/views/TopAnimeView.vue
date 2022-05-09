<script setup>
import AnimeCard from '../components/AnimeCard.vue'
import axios from 'axios'
</script>

<script>
export default {
  data() {
    return {
      myjson: [],
      position: 0
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/top/anime')
      .then(response => (this.myjson = response.data)) //response => (this.info = response)
  }
}
</script>

<template>
    <div class="container top-anime">
        <div class="row">
            <div class="col-3">
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
                  <AnimeCard v-for="item in myjson" :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :popularity="item.mal_members"
                  :score="item.mal_score" :image_url="item.image_url" :episodes="item.episodes" :type="item.type" :synopsis="item.synopsis"
                  :position="myjson.indexOf(item)+1"/>
              </div>
            </div>
    </div>
  </div>
</template>

<style scoped>
.top-anime {
  color: white;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: 'Montserrat';
}
</style>