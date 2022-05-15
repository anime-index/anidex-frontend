<script setup>
import FiltersCanvas from '../components/FiltersCanvas.vue'
import Result from '../components/Result.vue'
import StickyButton from '../components/StickyButton.vue';
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

	<StickyButton :title="'Custom Sort'"/>

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

	<Result ref="myresult" :type="'series'" @last-callback="select_page" :order="true"/>

</template>

<style scoped>
h1 {
	font-family: 'Esteban';
	text-align: center;
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
