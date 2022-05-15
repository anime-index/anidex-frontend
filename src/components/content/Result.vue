<script setup>
import axios from 'axios'
import PageNavigation from "./PageNavigation.vue"
import CardGrid from "@/components/cards/CardGrid.vue"
defineProps({
    type: String,
    order: Boolean
})
</script>

<script>
export default {
    expose: ['get_data'],
    emits: ['lastCallback'],
    data() {
        return {
            dataJson: [],
            page: 0,
            lastPage: 1,
            status: 'loading'
        }
    },
    methods: {
        select_page(page) {
            this.$emit('lastCallback', page)
        },
        get_data(url) {
            axios
				.get(url)
				.then(response => {
					this.status = 'normal'
					this.dataJson = response.data.lst
					this.page = response.data.page
					this.lastPage = response.data.last_page
				})
				.catch(() => {
					this.status = 'failed'
					setTimeout(this.select_page.bind(null, this.page), 1000)
				})
			window.scrollTo(0, 0)
        },
    }
}
</script>

<template>

    <template v-if="status === 'failed'">
		<div class="mytext">
			<h5>Yikes! The backend is down</h5>
			<p>If you want to run it locally check: <a href='https://github.com/anime-index/anidex-backend'>Anidex
					Backend</a></p>
			<p>This page will keep reloading till it goes back up!</p>
		</div>
	</template>

	<template v-else>
        <PageNavigation @callback="select_page" :page="page" :last-page="lastPage" style="margin-top:16px;"/>
        <CardGrid :data-json="dataJson" :page="page" :status="status" :type="type" :order="order"/>
        <PageNavigation @callback="select_page" :page="page" :last-page="lastPage"/>
    </template>
    
</template>

<style scoped>
.mytext {
	color: white;
	margin: 20px;
    min-height: 55vh;
}
</style>
