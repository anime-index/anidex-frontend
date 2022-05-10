<script setup>
import NavigationItem from './NavigationItem.vue';
defineProps({
    page: Number,
    last_page: Number,
})
</script>

<script>
export default {
	methods: {
		mycallback(mypage) {
			this.$emit('callback', mypage)
		}
	}
}
</script>

<template>
	<nav>
		<ul class="pagination justify-content-center">
			
			<li class="page-item" :key="page" :class="{ disabled: page===0 }"><button class="page-link shadow-none" @click="$emit('callback', page-1)">Previous</button></li>
			<li v-if="page >= 1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', 0)">1</button></li>
			<li v-if="page >= 4" class="page-item disabled"><button class="page-link shadow-none">...</button></li>

			<NavigationItem @callback="mycallback" :page="page-2" :last_page="last_page"/>
			<NavigationItem @callback="mycallback" :page="page-1" :last_page="last_page"/>

			<li class="page-item active"><button class="page-link">{{page+1}}</button></li>

			<NavigationItem @callback="mycallback" :page="page+1" :last_page="last_page"/>
			<NavigationItem @callback="mycallback" :page="page+2" :last_page="last_page"/>

			<li v-if="page <= last_page-4" class="page-item disabled"><button class="page-link shadow-none">...</button></li>
			<li v-if="page <= last_page-1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', last_page)">{{last_page+1}}</button></li>
			<li class="page-item" :key="page" :class="{ disabled: page===last_page }"><button class="page-link shadow-none" @click="$emit('callback', page+1)">Next</button></li>
		</ul>
	</nav>
</template>

<style scoped>
.page-link {
	background-color: #000021;
	color: #8c76bd;
    font-family: 'Montserrat';
}

.page-link::selection {
	background: #3a2c5a;
}

.page-item.disabled button{
	background-color: #000021;
	color: #504861;
}

.page-item.active button {
	background-color: #8c76bd;
	border-color: #8c76bd;
}

.page-link:hover {
	background-color: #8c76bd;
	color: white;
}
</style>