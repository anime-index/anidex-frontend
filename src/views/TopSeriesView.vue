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
			myjson: [],
			status: 'loading',

			sort_score: true,
			sort_popularity: true,
			sort_date: false,
			sort_episodes: false
		}
	},
	methods: {
		select_page(page) {
			var url = this.backendUrl + 'top/series?page=' + page;
			if (this.sort_score || this.sort_popularity || this.sort_date || this.sort_episodes) {
				let props = []
				if (this.sort_score) {
					props.push('score')
				}
				if (this.sort_popularity) {
					props.push('popularity')
				}
				if (this.sort_date) {
					props.push('date')
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
      <!--div class="sticky-top">
          <a class="btn btn-filters shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters-canvas" aria-controlls="offcanvas-filters">
            <i class="bi bi-filter-left" id="filters-icon"></i>
            <label for="filters-icon" style="margin-left:8px">Custom Sort</label>
          </a>
        </div-->

	<div v-if="status==='failed'" class="mytext min-vh-100">
		<h5>Yikes! The backend is down</h5>
		<p>If you want to run it locally check: <a href='https://github.com/anime-index/anidex-backend'>Anidex Backend</a></p>
		<p>This page will keep reloading till it goes back up!</p>
	</div>

	<div v-else>

	<div>
		<h1>Top Series</h1>
		<p style="margin-bottom: 0;">
			<button class="btn btn-series-explain shadow-none" type="button" data-bs-toggle="collapse" 
			data-bs-target="#collapse-series-explain" aria-expanded="false" aria-controls="collapseExample">
				What is a Series?
			</button>
		</p>
		<div class="collapse" id="collapse-series-explain">
			<div class="card card-body series-explanation">
				A Series correspond to the entire Anime Series. It has multiple seasons associated to it in cronological order.
				If you want to see Anime seasons separated, check instead <RouterLink class="dropdown-item goto-tops-anime" to="/top/anime">Top Anime</RouterLink>
			</div>
		</div>

	</div>

	<FiltersCanvas @callback="mycallback" :canvas-head="'Custom Sort'" :hide-search="true"/>

	<Result :data-json="myjson" :page="page" :last-page="last_page" :status="status" :type="'series'" @last-callback="select_page" :order="true"/>

	</div>
	</div>
</template>

<style>

h1 {
  font-family: 'Esteban';
  text-align: center;
  color: white;
  margin-top: 32px;
}

#topseries {
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

.series-card {
	color: white;
}

.btn-series-explain {
    color: #FFFFFF;
	margin-left: 16px;
	margin-top: 16px;
	font-family: 'Montserrat';
}

.btn-series-explain:hover {
    background: #3a2c5a;
	color: #FFFFFF;
}

.series-explanation {
	background-color: #000021;
	color: white;
	font-family: 'Montserrat';
	padding-left: 32px;
}

.series-explanation::selection {
	background: #3a2c5a;
	color: white;
}

.goto-tops-anime {
	color: rgb(196, 194, 194);
}

.goto-tops-anime:hover {
	background-color: #3a2c5a;
	color: rgb(196, 194, 194);
}
</style>