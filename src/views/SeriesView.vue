<script setup>
import {format_number} from "../useful/functions.js"
</script>

<script>
import axios from 'axios'
export default {
    name: 'seriesview',
    props: ['id'],

    data() {
        return {
            mydata: ""
        }
    },
    mounted () {
        axios
            .get('https://weak-women-poke-79-153-2-171.loca.lt/series/' + this.id)
            .then(response => (this.mydata = response.data)) //response => (this.info = response)
  }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col myfixed">
                <img :src="mydata.image_url" class="myimg">
            </div>
            <div class="col" id="description">
                <h3>{{mydata.title}}</h3>
                <p>{{mydata.mal_score}}</p>
                <p>{{format_number(mydata.popularity)}} members</p>
                <p>{{mydata.episodes}} episodes</p>
                <p>{{mydata.synopsis}}</p>
            </div>
        </div>
    </div>

</template>

<style>
.myfixed {
    flex: 0 0 185px;
}
.myimg {
    width: 185px;
    height: 265px;
}
#description{
  color: white;
}
</style>
