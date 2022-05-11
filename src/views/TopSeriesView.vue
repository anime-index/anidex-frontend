<script setup>
import SeriesCard from '../components/SeriesCard.vue'
import Navigation from '../components/Navigation.vue'
import axios from 'axios'
import SeriesPlaceholder from '../components/SeriesPlaceholder.vue'
import { Popover } from 'bootstrap/dist/js/bootstrap.min.js'
import FiltersCanvas from '../components/FiltersCanvas.vue'
</script>

<script>
export default {
	data() {
		return {
			page: 0,
			last_page: 0,
			place_holder: true,
			myjson: [],
			failed: false
		}
	},
	methods: {
		select_page(page) {
			axios
				.get(this.backendUrl + 'top/series/' + page)
				.then(response => {
					this.failed = false
					this.place_holder = false
					this.myjson = response.data.lst
					this.page = response.data.page
					this.last_page = response.data.last_page
				})
				.catch(() => {
					this.failed = true
					console.log('Reloading with page' + page)
					setTimeout(this.select_page.bind(null, page), 1000)
				})
            window.scrollTo(0, 0)
		},
		timeou() {
			console.log('Was the timeout???')
		}
	},
	mounted() {
		this.select_page(0)
	}
}
</script>

<template>

	<div v-if="failed" class="mytext">
		<h5>Yikes! The backend is down</h5>
		<p>If you want to run it locally check: <a href='https://github.com/anime-index/anidex-backend'>Anidex Backend</a></p>
		<p>This page will keep reloading till it goes back up!</p>
	</div>

	<div v-else>

	<div>
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
		<div id="topseries">
			<div class="sticky-top">
				<a class="btn btn-filters shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters-canvas" aria-controlls="offcanvas-filters">
				<i class="bi bi-filter-left" id="filters-icon"></i>
				<label for="filters-icon" style="margin-left:8px">Filters</label>
				</a>
			</div>
		</div>
	</div>

	<FiltersCanvas :canvas-head="'Filters'" @query-search="_resultQuery"/>

	<Navigation @callback="select_page" :page="page" :last_page="last_page" style="margin-top:16px;"/>

	<div class="parent">
		
        <Transition name="fade" class="mine">
			<div v-if="place_holder">
				<span id="backend-popover" data-bs-toggle="popover" data-bs-trigger="hover focus"
				data-bs-title="Ups! The backend is down"
				data-bs-content="Please go to <a href='https://github.com/anime-index/anidex-backend'>Anidex Backend">
					<div class="container">
						<div class="row gy-3">
							<SeriesPlaceholder v-for="i in 30" :key="i"/>
						</div>
					</div>
				</span>
			</div>
        </Transition>

        <Transition name="fade" class="mine">
			<div v-if="!place_holder" :key="page">
				<div class="container">
					<div class="row gy-3">
						<SeriesCard class="series-card" v-for="item in myjson" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
						:score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
						:position="item.position"/>
					</div>
				</div>
			</div>
        </Transition>
	</div>

	<Navigation @callback="select_page" :page="page" :last_page="last_page"/>

	</div>
</template>

<style>
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

.series-card {
	color: white;
}
.popover {
    left: -300px !important;
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