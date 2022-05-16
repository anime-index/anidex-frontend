<script setup>
import StickyButton from '@/components/content/StickyButton.vue'
import SortItem from '../components/filters/SortItem.vue'
import TypeFilter from '../components/filters/TypeFilter.vue'
import GenreFilter from '../components/filters/GenreFilter.vue'
import Result from '@/components/content/Result.vue'
</script>

<script>
export default {
	data() {
		return {
			sortBy: {
				mal_score: 1,
				mal_members: 1,
				aired_start: 0,
				episodes: 0
			},
			genres: new Set(),
			types: new Set(),
			order: true
		}
	},
	methods: {
		select_page(page) {
			let url = this.backendUrl + 'top/anime?'
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
			//Types
			if (this.types.size > 0) {
				params.push('types=' + Array.from(this.types).join(','))
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
		typeToggle(type) {
			if (this.types.has(type))
				this.types.delete(type)
			else
				this.types.add(type)
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

	<h1>Top Anime</h1>

	<StickyButton title="Custom Sort" :start-enabled="false"/>

	<div class="offcanvas offcanvas-start mycanva" data-bs-scroll="true" tabindex="-1" id="filters-canvas" aria-labelledby="offcanvas-filters">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvas-filters">Custom Sort</h5>
            <button type="button" class="btn-close text-reset shadow-none btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="container">

                <h5 style="margin-top: 16px;">Sort By</h5>

				<SortItem id="mal_score" 	label="Score" 				:start="1" @sort="sortCallback"/>
				<SortItem id="mal_members"	label="Popularity"			:start="1" @sort="sortCallback"/>
				<SortItem id="aired_start"	label="Start Date"			:start="0" @sort="sortCallback"/>
				<SortItem id="episodes"		label="Number of Episodes"	:start="0" @sort="sortCallback"/>

				<h5 style="margin-top: 24px; margin-bottom: 18px;">Filters</h5>

				<TypeFilter @type="typeToggle"/>

				<br>

				<GenreFilter @genre="genreToggle"/>
            </div>  
        </div>
    </div>

	<Result ref="myresult" :type="'anime'" @last-callback="select_page" :order="order"/>

</template>

<style scoped>
@import "@/assets/result_view.css";
</style>
