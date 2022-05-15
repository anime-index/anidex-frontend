<script setup>
import StickyButton from '@/components/content/StickyButton.vue'
import FiltersCanvas from '@/components/content/FiltersCanvas.vue'
import Result from '@/components/content/Result.vue'
</script>

<script>
export default {
	data() {
		return {
			sort_by: {
				score: true,
				popularity: true,
				data: false,
				episodes: false
			}
		}
	},
	methods: {
		select_page(page) {
			let url = this.backendUrl + 'top/series?'
			let params = []

			if (page > 0)
				params.push('page=' + page)
			
			if (Object.values(this.sort_by).some(value => value === true)) {
				let keys = Object.keys(this.sort_by).filter(value => this.sort_by[value] === true)
				params.push('sort_by=' + keys.join(','))
			}
			else {
				params.push('sort_by=None')
			}
			url += params.join('&')
			this.$refs.myresult.get_data(url)
		},
		mycallback(attr) {
			this.sort_by[attr] = !this.sort_by[attr]
			this.select_page(0)
		},
	},
	mounted() {
		this.select_page(0)
	}
}
</script>

<template>

	<h1>Top Series <a href="#" data-toggle="tooltip" title="What is a Series?">
		<i class="bi bi-question-circle" style="font-size:25px; vertical-align: middle;" data-bs-toggle="collapse"
				data-bs-target="#collapse-series-explain" aria-expanded="false" aria-controls="collapseExample"></i>
		</a></h1>

	<div class="collapse" id="collapse-series-explain" style="margin-left: 15vw; margin-right: 15vw;">
		<div class="card card-body series-explanation">
			<p>
				A Series is a group of Animes, which are either single Seasons, Movies or Specials.
				By grouping by Series instead of Animes we can have more useful information of the entire Series,
				avoiding overrated final seasons or overpopular first seasons.
				If you want to see Animes, check instead:
				<RouterLink style="display: inline;" class="goto-tops-anime" to="/top/anime">Top Anime</RouterLink>
			</p>
			
		</div>
	</div>

	<StickyButton :title="'Custom Sort'"/>

	<FiltersCanvas @callback="mycallback" :canvas-head="'Custom Sort'" :hide-search="true"/>

	<Result ref="myresult" :type="'series'" @last-callback="select_page" :order="true"/>

</template>

<style scoped>
h1 {
	font-family: 'Esteban';
	text-align: center;
	color: white;
  	margin-top: 32px;
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
