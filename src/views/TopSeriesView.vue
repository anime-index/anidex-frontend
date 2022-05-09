<script setup>
import SeriesCard from '../components/SeriesCard.vue'
import Navigation from '../components/Navigation.vue'
import axios from 'axios'
import SeriesPlaceholder from '../components/SeriesPlaceholder.vue'
//import { Popover } from 'bootstrap/dist/js/bootstrap.min.js'
</script>

<script>
export default {
	data() {
		return {
			page: 0,
			last_page: 0,
			place_holder: true,
			myjson: []
		}
	},
	methods: {
		select_page(page) {
			axios
				.get('http://127.0.0.1:8000/top/series?page=' + page)
				.then(response => {
					this.place_holder = false
					this.myjson = response.data.lst
					this.page = response.data.page
					this.last_page = response.data.last_page
				})
            window.scrollTo(0, 0)
		}
	},
	mounted() {
		this.select_page(0)
        /*var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        console.log(popoverTriggerList)
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new Popover(popoverTriggerEl, {html: true, delay: {hide: 5000}, continer: 'body'})
        })*/
	}
}
</script>

<template>

	<!--p>
		<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
			What is a Series?
		</button>
	</p>
	<div class="collapse" id="collapseExample">
		<div class="card card-body">
			A Series correspond to the entire Anime Series. It has multiple seasons associated to it in cronological order.
			If you want to see Anime seasons separated, check instead <RouterLink class="dropdown-item" to="/top/anime">Top of Animes</RouterLink>
		</div>
	</div-->

	<Navigation @callback="select_page" :page="page" :last_page="last_page"/>

	<div class="parent">
		
        <Transition name="fade" class="mine">
			<div v-if="place_holder">
			<span data-bs-toggle="popover" data-bs-trigger="hover focus"
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
						<SeriesCard v-for="item in myjson" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
						:score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"
						:position="item.position"/>
					</div>
				</div>
			</div>
        </Transition>
	</div>

	<Navigation @callback="select_page" :page="page" :last_page="last_page"/>
</template>

<style>
.parent {
    display: grid;
    grid-template-columns: 1fr;
}
.mine {
    grid-row-start: 1;
    grid-column-start: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.popover {
    left: -300px !important;
}
</style>