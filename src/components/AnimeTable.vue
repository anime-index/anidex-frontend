<script setup>
import AnimeTableItem from './AnimeTableItem.vue'
defineProps({
    columns: Array,
    items: Array
})
</script>

<template>
    <div class="table-responsive">
        <table class="table align-middle table-hover">
            <thead class="table-dark">
                <tr>
                <th scope="col">#</th>
                <th v-for="column in columns" :key="columns.indexOf(column)" scope="col">{{column}}</th>
                </tr>
            </thead>
            <tbody>
                <AnimeTableItem v-for="item in items" :key="item.id" :position="items.indexOf(item)+1" :columns="columns" :title="item.title" :imageurl="item.main_pic"
                :score="item.score" :type="item.type"/>
            </tbody>
        </table>
    </div>
</template>