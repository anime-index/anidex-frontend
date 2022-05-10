<script setup>
defineProps({
    page: Number,
    last_page: Number
})
</script>

<template>
    <li :key="page" v-if="page>=1 && page<=last_page-1" class="page-item">
        <button class="page-link shadow-none" @click="$emit('callback', page)">{{page+1}}</button>
    </li>
</template>

<style scoped>
.page-link {
    background-color: #000021;
    color: #8c76bd;
    font-family: 'Montserrat';
}

.page-link:hover {
    background-color: #8c76bd;
    color: white;
}

.page-link::selection {
    background: #3a2c5a;
}
</style>