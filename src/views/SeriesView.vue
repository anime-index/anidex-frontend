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
            .get(this.backendUrl + 'series/' + this.id)
            .then(response => (this.mydata = response.data)) //response => (this.info = response)
  }
}
</script>

<template>
    <div class="container min-vh-100" style="margin-top: 32px;">
        <div class="row">
            <div class="col myfixed">
                <img :src="mydata.image_url" onerror="this.onerror=null; this.src='https:\//i.ibb.co/cLyDyWD/anidex-logo.png'" class="myimg">
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

<style scoped>
.myfixed {
    flex: 0 0 185px;
}

#description{
  color: white;
}
</style>
