<script setup>
import PlaceholderCard from './PlaceholderCard.vue'
import SeriesCard from './SeriesCard.vue'
import AnimeCard from './AnimeCard.vue'
defineProps({
	dataJson: Object,
	page: Number,
	status: String,
	type: String,
	order: Boolean,
	dataId: Number
})
</script>

<template>
	<div class="parent-grid">

		<Transition name="fade" class="child-grid">
			<div class="container" :key="status+dataId+page">
				<div class="row myseparation">

					<template v-if="status==='loading'">
						<PlaceholderCard v-for="i in 30" :key="i"/>
					</template>

					<template v-else-if="status==='normal' && type==='series'">
						<SeriesCard v-for="item in dataJson" class="series-card" :key="item.series_id" :series_id="item.series_id"
						:title="item.title" :popularity="item.popularity" :score="item.score" :image_url="item.image_url"
						:episodes="item.episodes" :seasons="item.seasons" :synopsis="item.synopsis" :position="item.position"
						:date="item.date.slice(0, 4)" :genres="item.genres" :order="order"/>
					</template>

					<template v-else-if="status==='normal' && type=='anime'">
						<AnimeCard v-for="item in dataJson" class="anime-card" :key="item.mal_id" :anime_id="item.mal_id"
						:title="item.title" :popularity="item.mal_members" :score="item.mal_score" :image_url="item.image_url"
						:episodes="item.episodes" :type="item.type" :synopsis="item.synopsis" :genres="item.genres" :position="item.position"
						:date="item.start_date" :order="order"/>
					</template>

				</div>
			</div>
		</Transition>
	
	</div>
</template>

<style scoped>
.myseparation {
	--bs-gutter-x: 2rem;
	--bs-gutter-y: 2rem;
}
.parent-grid {
    display: grid;
    grid-template-columns: 1fr;
	margin-bottom: 16px;
	margin-top: 40px;
}
.child-grid {
    grid-row-start: 1;
    grid-column-start: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
