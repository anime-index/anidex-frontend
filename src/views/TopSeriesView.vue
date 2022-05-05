<script setup>
import SeriesCard from '../components/SeriesCard.vue'
import axios from 'axios'
</script>

<script>
export default {
  data() {
    return {
      myjson: []
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/top/series')
      .then(response => (this.myjson = response.data)) //response => (this.info = response)
  }
}
</script>

<template>
  <div class="container mymargin">
    <div class="row gy-3">
        <SeriesCard v-for="item in myjson" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
        :score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"/>
    </div>
  </div>
</template>

<style>
.mymargin {
  margin-top: 36px;
}
</style>