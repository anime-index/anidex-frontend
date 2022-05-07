<script setup>
defineProps({
    page: Number,
    last_page: Number
})
</script>

<template>
    <li :key="page" v-if="page>=1 && page<=last_page-1" class="page-item">
        <button class="page-link" @click="$emit('callback', page)">{{page+1}}</button>
    </li>
</template>