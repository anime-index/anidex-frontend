<script setup>
import StickyButton from '@/components/content/StickyButton.vue'
import SearchFilter from '../components/filters/SearchFilter.vue'
import TypeFilter from '../components/filters/TypeFilter.vue'
import GenreFilter from '../components/filters/GenreFilter.vue'
import Result from '@/components/content/Result.vue'
</script>

<script>
export default {
	data() {
		return {
			title: '',
			genres: new Set(),
			types: new Set()
		}
	},
	methods: {
		select_page(page) {
			let url = this.backendUrl + 'anime/search?'
			let params = []

			//Title search
			if (this.title !== '')
				params.push('title=' + this.title)
			
			//Page
			if (page !== 0) {
				params.push('page=' + page)
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
		_resultQuery(search) {
			this.title = search
			this.select_page(0)
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
		}
	},
	mounted () {
		this.select_page(0)
	}
}
</script>

<template>

	<h1>Search Anime</h1>

	<StickyButton title="Search" :start-enabled="true"/>

	<div class="offcanvas offcanvas-start mycanva" data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1" id="filters-canvas" aria-labelledby="offcanvas-filters">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvas-filters">Search</h5>
            <button type="button" class="btn-close text-reset shadow-none btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="container">

				<SearchFilter @query-search="_resultQuery"/>

				<h5 style="margin-top: 24px; margin-bottom: 18px;">Filters</h5>

				<TypeFilter @type="typeToggle"/>

				<br>

				<GenreFilter @genre="genreToggle"/>
            </div>  
        </div>
    </div>

	<Result ref="myresult" :type="'anime'" @last-callback="select_page" :order="false"/>

</template>

<style scoped>
@import "@/assets/result_view.css";


</style>

