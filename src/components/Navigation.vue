<script setup>
defineProps({
    page: Number,
    last_page: Number
})
</script>

<template>
	<nav>
		<ul class="pagination justify-content-center">
			
			<li class="page-item" :class="{ disabled: page===0 }"><button class="page-link" @click="$emit('callback', page-1)">Previous</button></li>
			<li v-if="page >= 1" class="page-item"><button class="page-link" @click="$emit('callback', 0)">1</button></li>
			<li v-if="page >= 4" class="page-item disabled"><button class="page-link">...</button></li>
			
			<li v-if="page-2 >= 1" class="page-item"><button class="page-link" @click="$emit('callback', page-2)">{{page-1}}</button></li>
			<li v-if="page-1 >= 1" class="page-item"><button class="page-link" @click="$emit('callback', page-1)">{{page}}</button></li>
			<li class="page-item active"><button class="page-link">{{page+1}}</button></li>
			<li v-if="page+1 <= last_page-1" class="page-item"><button class="page-link" @click="$emit('callback', page+1)">{{page+2}}</button></li>
			<li v-if="page+2 <= last_page-1" class="page-item"><button class="page-link" @click="$emit('callback', page+2)">{{page+3}}</button></li>


			<li v-if="page <= last_page-4" class="page-item disabled"><button class="page-link">...</button></li>
			<li v-if="page <= last_page-1" class="page-item"><button class="page-link" @click="$emit('callback', last_page)">{{last_page+1}}</button></li>
			<li class="page-item" :class="{ disabled: page===last_page }"><button class="page-link" @click="$emit('callback', page+1)">Next</button></li>
		</ul>
	</nav>
</template>