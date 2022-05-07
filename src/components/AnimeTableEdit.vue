<script setup>
import AnimeTableItemEdit from './AnimeTableItemEdit.vue'
defineProps({
    columns: Array,
    items: Array
})
</script>

<script>
export default {
    methods: {
        emitRemoveEntry(position) {
            this.$emit('removeEntry', position)
        }
    }
}
</script>


<template>
    <div class="table-responsive">
        <table class="table align-middle">
            <thead class="table list-head">
                <tr>
                <th scope="col">#</th>
                <th v-for="column in columns" :key="columns.indexOf(column)" scope="col">{{column}}</th>
                <th><i class="bi bi-trash"></i></th>
                </tr>
            </thead>
            <tbody class="list-body">
                <AnimeTableItemEdit v-for="item in items" :key="item.id" :position="items.indexOf(item)+1" :columns="columns" :title="item.title" :imageurl="item.main_pic"
                :score="item.score" :type="item.type" @remove-entry="emitRemoveEntry"/>
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
</style>