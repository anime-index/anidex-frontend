<script setup>
import AnimeCard from '../components/AnimeCard.vue'
</script>

<script>
import json from "./anime.json"
export default {
  data() {
    return {
      myjson: json
    }
  }
}
</script>

<template>
    <div class="container">
        <div class="row gy-3">
            <AnimeCard v-for="item in myjson" :key="item.id" :title="item.title" :imageurl="item.main_pic" :score="item.score" :type="item.type"/>
        </div>
    </div>
</template>

<style>
.container {
    grid-auto-rows: 1fr
}
</style>