<script setup>
import StickyButton from '@/components/content/StickyButton.vue'
import FiltersCanvas from '@/components/content/FiltersCanvas.vue'
import Result from '@/components/content/Result.vue'
</script>

<script>
export default {
	data() {
		return {
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
			this.$refs.myresult.get_data(url)
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

	<h1>Top Anime</h1>

	<StickyButton :title="'Custom Sort'"/>

	<FiltersCanvas @callback="mycallback" :canvas-head="'Custom Sort'" :hide-search="true"/>

	<Result ref="myresult" :type="'anime'" @last-callback="select_page" :order="true"/>

</template>

<style scoped>
h1 {
  font-family: 'Esteban';
  text-align: center;
  color: white;
  margin-top: 32px;
}
</style>
