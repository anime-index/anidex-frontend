<script setup>
import FiltersCanvas from '../components/FiltersCanvas.vue'
import axios from 'axios'
import Result from '../components/Result.vue';
</script>

<script>
export default {
  name: "Search",
  data(){
    return {
			page: 0,
			last_page: 0,
      myjson: [],
      status: 'loading',

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
      axios
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
      axios
      .get(url)
      .then(response => {
        this.myjson = response.data.lst
        this.page = response.data.page
        this.last_page = response.data.last_page
        this.status = 'normal'
        })
    }
  }
}
</script>

<template>
    <div id="search" class="min-vh-100">
      <div class="sticky-top">
          <a class="btn btn-filters shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters-canvas" aria-controlls="offcanvas-filters">
            <i class="bi bi-filter-left" id="filters-icon"></i>
            <label for="filters-icon" style="margin-left:8px">Filters</label>
          </a>
        </div>
      <FiltersCanvas :canvas-head="'Filters'" @query-search="_resultQuery" @callback="mycallback"/>
      <Result :data-json="myjson" :page="page" :last-page="last_page" :status="status" :type="'anime'" @last-callback="select_page" :order="false"/>

    </div>
</template>

<style>

h1 {
  font-family: 'Esteban';
  text-align: center;
  color: white;
  margin-top: 32px;
}

#search {
  color: white;
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: 'Montserrat';
}

#search .parent-grid { margin-top: 50px; }

.mymargin {
  margin-top: 36px;
}

.search-text-box {
  background-color: #000021;
  color: #fff;
}

.search-text-box:focus {
  background-color: #000021;
  color: #fff;
}

.search-text-box::selection {
    background: #3a2c5a;
}

.btn-filters {
    color: white;
    font-size: large;
}

.btn-filters:hover {
    background: #3a2c5a;
    color: white
}
.anime-card {
  color: white;
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgb(22 22 26 / 18%);
  border: none;
  margin-bottom: 2.5em;
}
</style>

