<script setup>
import AnimeTableItem from './AnimeTableItem.vue'
defineProps({
    columns: Array,
    items: Array
})
</script>

<template>
    <div class="table-responsive">
        <table class="table align-middle">
            <thead class="table list-head">
                <tr>
                <th scope="col">#</th>
                <th v-for="column in columns" :key="columns.indexOf(column)" scope="col">{{column}}</th>
                </tr>
            </thead>
            <tbody class="list-body">
                <AnimeTableItem v-for="item in items" :key="item.id" :position="items.indexOf(item)+1" :columns="columns" :title="item.title" :imageurl="item.main_pic"
                :score="item.score" :type="item.type"/>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.list-head {
    background-color: #130230;
    color: #FFFFFF;
    border: #FFFFFF;
}

.list-body {
    border: #FFFFFF;
}

th::selection {
    background: #3a2c5a;
}
</style>