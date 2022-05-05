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
            .get('http://127.0.0.1:8000/series/' + this.id)
            .then(response => (this.mydata = response.data)) //response => (this.info = response)
  }
}
</script>

<template>
    <h1>Title: {{mydata.title}}</h1>
    <p>Popularity: {{mydata.popularity}}</p>
    <p>Score: {{mydata.score}}</p>

</template>

<style>

</style>