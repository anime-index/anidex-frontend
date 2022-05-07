<script setup>
import { Popover } from 'bootstrap/dist/js/bootstrap.min.js'
import { onUpdated } from '@vue/runtime-core';
defineProps({
    position: Number,
    columns: Array,
    title: String,
    imageurl: String,
    score: Number,
    type: String
})

</script>

<script>
export default {
    methods: {
        getColumnData(column) {
            switch (column) {
                case "Title":
                    return this.title
                    break
                case "Score":
                    return this.score
                    break
                case "Type":
                    return this.type
                default:
                    return this.title
                    break
            }
        } 
    }
}
</script>


<template>
     <tr>
      <th scope="row">{{position}}</th>
      <td v-for="column in columns" :key="columns.indexOf(column)">{{getColumnData(column)}}</td>
      <td><button class="btn btn-transparent" @click="$emit('removeEntry', this.position)"><i class="bi bi-x-circle" ></i></button></td>
    </tr>
</template>