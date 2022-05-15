<script setup>
import StickyButton from '@/components/content/StickyButton.vue'
import FiltersCanvas from '@/components/content/FiltersCanvas.vue'
import Result from '@/components/content/Result.vue'
</script>

<script>
export default {
  name: "Search",
  data(){
    return {
      title: '',
      tv: false,
      movie: false,
      special: false
    }
  },
  mounted () {
    this.select_page(0)
  },
  methods: {
    _resultQuery(search) {
      this.title = search
      this.select_page(0)
    },
    mycallback(attr) {
      if (attr === 'tv')
				this.tv = !this.tv
			if (attr === 'movie')
				this.movie = !this.movie
			if (attr === 'special')
				this.special = !this.special
			this.select_page(0)
      console.log('hahaha ' + attr)
    },
    select_page(page) {
      let url = this.backendUrl + 'anime/search?'
      let params = []
      if (this.title !== '')
        params.push('title=' + this.title)
      if (page !== 0) {
        params.push('page=' + page)
      }
      if (this.tv || this.movie || this.special) {
        let types = []
        if (this.tv) types.push('TV')
        if (this.movie) types.push('Movie')
        if (this.special) types.push('Special')
        params.push('type=' + types.join(','))
      }
      url += params.join('&')
      this.$refs.myresult.get_data(url)
    }
  }
}
</script>

<template>

  <h1>Search Anime</h1>

  <StickyButton :title="'Filters'"/>

  <FiltersCanvas :canvas-head="'Filters'" @query-search="_resultQuery" @callback="mycallback"/>

  <Result ref="myresult" :type="'anime'" @last-callback="select_page" :order="false"/>

</template>

<style scoped>
h1 {
  font-family: 'Esteban';
  text-align: center;
  color: white;
  margin-top: 32px;
}

h1::selection {
  background: #3a2c5a;
}
</style>

