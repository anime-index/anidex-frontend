<script setup>
import axios from 'axios'
import FiltersCanvas from '../components/FiltersCanvas.vue'
import Result from '../components/Result.vue'
</script>

<script>
export default {
	data() {
		return {
			page: 0,
			last_page: 0,
      status: 'loading',
			myjson: [],
			sort_score: true,
			sort_popularity: true,
			sort_date: false,
			sort_episodes: false
		}
	},
	methods: {
		select_page(page) {
			var url = this.backendUrl + 'top/anime?page=' + page;
			if (this.sort_score || this.sort_popularity || this.sort_date || this.sort_episodes) {
				let props = []
				if (this.sort_score) {
					props.push('mal_score')
				}
				if (this.sort_popularity) {
					props.push('mal_members')
				}
				if (this.sort_date) {
					props.push('aired_start')
				}
				if (this.sort_episodes) {
					props.push('episodes')
				}
				url += '&sort_by=' + props.join(',')
			}
			else {
				url += '&sort_by=None'
			}
			axios
				.get(url)
				.then(response => {
          this.status = 'normal'
					this.myjson = response.data.lst
					this.page = response.data.page
					this.last_page = response.data.last_page
				})
				.catch(() => {
          this.status = 'failed'
					setTimeout(this.select_page.bind(null, page), 1000)
				})
            window.scrollTo(0, 0)
		},
		mycallback(attr) {
			if (attr === 'score')
				this.sort_score = !this.sort_score
			if (attr === 'popularity')
				this.sort_popularity = !this.sort_popularity
			if (attr === 'airdate')
				this.sort_date = !this.sort_date
			if (attr === 'episodes')
				this.sort_episodes = !this.sort_episodes
			this.select_page(0)
		}
	},
	mounted() {
		this.select_page(0)
	}
}
</script>

<template>

    <div id="search" class="min-vh-100">
      <div class="sticky-top">
          <a class="btn btn-filters shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters-canvas" aria-controlls="offcanvas-filters">
            <i class="bi bi-filter-left" id="filters-icon"></i>
            <label for="filters-icon" style="margin-left:8px">Custom Sort</label>
          </a>
        </div>

	<div v-if="status==='failed'" class="mytext min-vh-100">
		<h5>Yikes! The backend is down</h5>
		<p>If you want to run it locally check: <a href='https://github.com/anime-index/anidex-backend'>Anidex Backend</a></p>
		<p>This page will keep reloading till it goes back up!</p>
	</div>

	<div v-else>

	<FiltersCanvas @callback="mycallback" :canvas-head="'Custom Sort'" :hide-search="true"/>

  <Result :data-json="myjson" :page="page" :last-page="last_page" :status="status" :type="'anime'" @last-callback="select_page" :order="true"/>

	</div>
	</div>
</template>

<style>
#topanime {
  color: white;
  margin-top: 32px;
  margin-bottom: 32px;
  font-family: 'Montserrat';
}
.btn-filters {
    color: rgba(255, 255, 255, 0.568)
}

.btn-filters:hover {
    background: #3a2c5a;
    color: white
}

.mytext {
	color: white;
	margin: 20px;
}
.parent {
    display: grid;
    grid-template-columns: 1fr;
	margin-bottom: 16px;
}
.mine {
    grid-row-start: 1;
    grid-column-start: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.anime-card {
	color: white;
}

.btn-anime-explain {
    color: #FFFFFF;
	margin-left: 16px;
	margin-top: 16px;
	font-family: 'Montserrat';
}

.btn-anime-explain:hover {
    background: #3a2c5a;
	color: #FFFFFF;
}

.anime-explanation {
	background-color: #000021;
	color: white;
	font-family: 'Montserrat';
	padding-left: 32px;
}

.anime-explanation::selection {
	background: #3a2c5a;
	color: white;
}
</style>

<style scoped>
.top-anime {
  color: white;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: 'Montserrat';
}

h1 {
  font-family: 'Esteban';
  text-align: center;
  color: white;
  margin-top: 32px;
}
</style>