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
    position: Number,
    order: Boolean,
    genres: Object
})
</script>

<template>
    <div class="col">
        <div class="card mycard">
            <span v-if="order" class="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-success mybadge">#{{position}}</span>
            <div class="row">
                <div class="col myfixed">
                    <img :src="image_url" class="myimg">
                </div>
                <div class="col mysmall">
                    <div class="card-body mybody">
                        <a :href="'https://myanimelist.net/anime/' + anime_id"><h5 class="card-title tit">{{title}}</h5></a>
                        <p class="card-text">{{score.toPrecision(3)}} | {{format_number(popularity)}} members | 
                            {{type}} | {{episodes}} episode{{"s".repeat(episodes>1)}}</p>
                        <p class="card-text overfl">{{synopsis}}</p>
                        <p v-if="genres.length>=1" class="badge badge-primary">{{genres[0]["name"]}}</p>
                        <p v-if="genres.length>=2" class="badge badge-primary">{{genres[1]["name"]}}</p>
                        <p v-if="genres.length>=3" class="badge badge-primary">{{genres[2]["name"]}}</p>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.mycard {
    min-width: 360px;
    background-color: #130230;
}

.myfixed {
    flex: 0 0 185px;
}

.myimg {
    width: 185px;
    height: 265px;
}

.myimg::selection {
    background: #3a2c5a;
}

.mybody {
    padding: 8px 8px;
}

.card-title::selection {
    background: #3a2c5a;    
}

.card-text {
    font-family: 'Montserrat-light';
}

.card-text::selection {
    background: #3a2c5a;
}

.tit {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.overfl {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
</style>