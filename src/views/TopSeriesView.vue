<script setup>
import StickyButton from '@/components/content/StickyButton.vue'
import SortItem from '../components/filters/SortItem.vue'
import GenreFilter from '../components/filters/GenreFilter.vue'
import Result from '@/components/content/Result.vue'
</script>

<script>
export default {
	data() {
		return {
			sortBy: {
				score: 1,
				popularity: 1,
				data: 0,
				episodes: 0
			},
			genres: new Set(),
			order: true
		}
	}, //I want to sign my commit
	methods: {
		select_page(page) {
			let url = this.backendUrl + 'top/series?'
			let params = []

			//Page
			if (page > 0) {
				params.push('page=' + page)
			}
			//Sorting
			if (Object.values(this.sortBy).some(value => value > 0)) {
				let keys = []
				for (const [key, value] of Object.entries(this.sortBy)) {
					if (value === 1)
						keys.push(key)
					else if (value === 2)
						keys.push(key + '-r')
				}
				params.push('sort_by=' + keys.join(','))
			}
			else {
				params.push('sort_by=None')
			}
			//Genres
			if (this.genres.size > 0) {
				params.push('genres=' + Array.from(this.genres).join(','))
			}

			url += params.join('&')
			this.$refs.myresult.get_data(url)
		},

		genreToggle(genre) {
			if (this.genres.has(genre))
				this.genres.delete(genre)
			else
				this.genres.add(genre)
			this.select_page(0)
		},
		sortCallback(attr, state) {
			this.sortBy[attr] = state
			this.order = Object.values(this.sortBy).some(value => value > 0)
			this.select_page(0)
		}
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

	<StickyButton title="Custom Sort" :start-enabled="false"/>

	<div class="offcanvas offcanvas-start mycanva" data-bs-scroll="true" tabindex="-1" id="filters-canvas" aria-labelledby="offcanvas-filters">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvas-filters">Custom Sort</h5>
            <button type="button" class="btn-close text-reset shadow-none btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="container">

                <h5 style="margin-top: 16px;">Sort By</h5>

				<SortItem id="score" 		label="Score" 				:start="1" @sort="sortCallback"/>
				<SortItem id="popularity"	label="Popularity"			:start="1" @sort="sortCallback"/>
				<SortItem id="date"			label="Start Date"			:start="0" @sort="sortCallback"/>
				<SortItem id="episodes"		label="Number of Episodes"	:start="0" @sort="sortCallback"/>

				<h5 style="margin-top: 24px; margin-bottom: 12px;">Filters</h5>

				<GenreFilter @genre="genreToggle"/>
            </div>  
        </div>
    </div>

	<Result ref="myresult" :type="'series'" @last-callback="select_page" :order="order"/>

</template>

<style scoped>
@import "@/assets/result_view.css";

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
