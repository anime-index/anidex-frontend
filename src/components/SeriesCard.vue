<script setup>
import {format_number} from "../useful/functions.js"
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
    date: String
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
                <div class="col">
                    <div class="card-body mybody">
                        <RouterLink :to="'/series/' + series_id"><h5 class="card-title">{{title}}</h5></RouterLink>
                        <p class="card-text">{{score.toPrecision(3)}} | {{format_number(popularity)}} members |
                            {{seasons}} season{{"s".repeat(seasons>1)}} | {{episodes}} episode{{"s".repeat(episodes>1)}}
                            | {{date}}</p>
                        <p class="card-text overfl">{{synopsis}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.mybadge {
    z-index: 1;
}

.mybadge::selection {
    background: #3a2c5a;
}

.mycard {
    min-width: 360px;
    background-color: #130230;
}
.myfixed {
    flex: 0 0 185px;
}
.myimg {
    transition: transform 0.5s;
    width: 185px;
    height: 265px;
}
.myimg::selection {
    background: #3a2c5a;
}
.myimg:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
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
.card-title::selection {
    background: #3a2c5a;
}

.card-text {
    font-family: 'Montserrat-light';
}

.card-text::selection {
    background: #3a2c5a;
}


span.position-absolute.top-0.start-0.translate-middle.badge.rounded-circle.bg-success.mybadge {
  font-size: 18px;
}
</style>
