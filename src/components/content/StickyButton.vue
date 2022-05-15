<script setup>
defineProps({
    title: String
})
</script>

<template>
    <div class="mysticky">
		<a class="btn btn-filters shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters-canvas"
			aria-controlls="offcanvas-filters">
			<i class="bi bi-filter-left" id="filters-icon"></i>
			<label for="filters-icon" style="margin-left:8px">{{title}}</label>
		</a>
	</div>
</template>

<style scoped>
.mysticky {
	position: sticky;
	top: 20px;
    z-index: 2;
}
.btn-filters {
    color: white;
    font-size: large;
}

.btn-filters:hover {
    background: #3a2c5a;
    color: white
}
</style>