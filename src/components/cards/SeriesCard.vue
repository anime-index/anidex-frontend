<script setup>
import {format_number} from "@/useful/functions.js"
defineProps({
    series_id: Number,
    title: String,
    popularity: Number,
    score: Number,
    image_url: String,
    episodes: Number,
    seasons: Number,
    synopsis: String,
    position: Number,
    date: String,
    genres: Object,
    order: Boolean
})
</script>

<template>
    <div class="col">
        <div class="card mycard">
            <span v-if="order" class="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-success mybadge">#{{position}}</span>
            <div class="row">
                <div class="col myfixed">
                    <img :src="image_url" onerror="this.onerror=null; this.src='https:\//i.ibb.co/cLyDyWD/anidex-logo.png'" class="myimg">
                </div>
                <div class="col">
                    <div class="card-body mybody">
                        <RouterLink :to="'/series/' + series_id"><h5 class="card-title tit" :title="title">{{title}}</h5></RouterLink>
                        <p class="card-text">{{score.toPrecision(3)}} | {{format_number(popularity)}} members | 
                            {{seasons}} season{{"s".repeat(seasons>1)}} | {{episodes}} episode{{"s".repeat(episodes>1)}} | {{date}}</p>
                        <p class="card-text overfl">{{synopsis}}</p>
                        <div class="align-bottom genres-row">
                            <p v-if="genres.length>=1" class="badge rounded-pill  genre-badge">{{genres[0]}}</p>
                            <p v-if="genres.length>=2" class="badge rounded-pill genre-badge">{{genres[1]}}</p>
                            <p v-if="genres.length>=3" class="badge rounded-pill  genre-badge">{{genres[2]}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/card.css";
</style>
