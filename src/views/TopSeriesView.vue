<script setup>
import SeriesCard from '../components/SeriesCard.vue'
import Navigation from '../components/Navigation.vue'
import axios from 'axios'
import SeriesPlaceholder from '../components/SeriesPlaceholder.vue'
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
	}
}
</script>

<template>
	<Navigation @callback="select_page" :page="page" :last_page="last_page" style="margin-top:16px;"/>

	<div class="parent">
		
        <Transition name="fade" class="mine">
			<div v-if="place_holder">
				<div class="container">
					<div class="row gy-3">
						<SeriesPlaceholder v-for="i in 30" :key="i"/>
					</div>
				</div>
			</div>
        </Transition>

        <Transition name="fade" class="mine">
			<div v-if="!place_holder">
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
</template>

<style>
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
</style>