<script setup>
import {format_number} from "../useful/functions.js"
defineProps({
    anime_id: Number,
    title: String,
    popularity: Number,
    score: Number,
    image_url: String,
    episodes: Number,
    type: String,
    synopsis: String,
    position: Number
})
</script>

<template>
    <div class="col">
        <div class="card mycard">
            <span class="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-success mybadge">#{{position}}</span>
            <div class="row">
                <div class="col myfixed">
                    <img :src="image_url" class="myimg">
                </div>
                <div class="col mysmall">
                    <div class="card-body mybody">
                        <a :href="'https://myanimelist.net/anime/' + anime_id"><h5 class="card-title">{{title}}</h5></a>
                        <p class="card_text">{{score.toPrecision(3)}} | {{format_number(popularity)}} members | 
                            {{type}} | {{episodes}} episode{{"s".repeat(episodes>1)}}</p>
                        <p class="card_text overfl">{{synopsis}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.mycard {
    min-width: 360px;
}
.myfixed {
    flex: 0 0 185px;
}
.myimg {
    width: 185px;
    height: 265px;
}
.mybody {
    padding: 8px 8px;
}
.overfl {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
</style>