<script setup>
defineProps({
    page: Number,
    lastPage: Number,
})
</script>

<template>
	<nav>
		<ul class="pagination justify-content-center">
			
			<li class="page-item" :key="page" :class="{ disabled: page===0 }"><button class="page-link shadow-none" @click="$emit('callback', page-1)">Previous</button></li>
			<li v-if="page >= 1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', 0)">1</button></li>
			<li v-if="page >= 4" class="page-item disabled"><button class="page-link shadow-none">...</button></li>

			<li :key="page-2" v-if="page-2>=1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', page-2)">{{page-1}}</button></li>
			<li :key="page-1" v-if="page-1>=1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', page-1)">{{page}}</button></li>

			<li :key="page" class="page-item active"><button class="page-link">{{page+1}}</button></li>

			<li :key="page+1" v-if="page+1<=lastPage-1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', page+1)">{{page+2}}</button></li>
			<li :key="page+2" v-if="page+2<=lastPage-1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', page+2)">{{page+3}}</button></li>

			<li v-if="page <= lastPage-4" class="page-item disabled"><button class="page-link shadow-none">...</button></li>
			<li v-if="page <= lastPage-1" class="page-item"><button class="page-link shadow-none" @click="$emit('callback', lastPage)">{{lastPage+1}}</button></li>
			<li class="page-item" :key="page" :class="{ disabled: page===lastPage }"><button class="page-link shadow-none" @click="$emit('callback', page+1)">Next</button></li>
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