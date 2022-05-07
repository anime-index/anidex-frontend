<script setup>
import SeriesCard from '../components/SeriesCard.vue'
import Navigation from '../components/Navigation.vue';
import axios from 'axios'
</script>

<script>
export default {
	data() {
		return {
			page: 0,
			last_page: 0,
			myjson: []
		}
	},
	methods: {
		select_page(page) {
			axios
				.get('http://127.0.0.1:8000/top/series?page=' + page)
				.then(response => {
					this.myjson = response.data.lst
					this.page = response.data.page
					this.last_page = response.data.last_page
				})
		}
	},
	mounted() {
		console.log('Starting')
		this.select_page(0)
	}
}
</script>

<template>
    <Navigation @callback="select_page" :page="page" :last_page="last_page"/>
	<div class="container">
		<div class="row gy-3">
				<SeriesCard v-for="item in myjson" :key="item.series_id" :series_id="item.series_id" :title="item.title" :popularity="item.popularity"
				:score="item.score" :image_url="item.image_url" :episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis"/>
		</div>
	</div>
    <Navigation @callback="select_page" :page="page" :last_page="last_page"/>
</template>