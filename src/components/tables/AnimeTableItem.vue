<script setup>
import { Popover } from 'bootstrap/dist/js/bootstrap.min.js'
import { onUpdated } from '@vue/runtime-core'
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
    },
    mounted() {
        Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
        .forEach(popoverNode => new Popover(popoverNode, {html: true, content: function() {
            return '<div class="media"><img class="img-fluid" src="' + this.getAttribute('data-img') + '"></div>'}
            }))
    }
}
</script>


<template>
     <tr class="list-row" data-bs-container="body" data-bs-trigger="hover" data-bs-toggle="popover" data-bs-placement="left" :title="title" :data-img="imageurl">
      <th scope="row">{{position}}</th>
      <td v-for="column in columns" :key="columns.indexOf(column)">{{getColumnData(column)}}</td>
    </tr>
</template>

<style scoped>
.list-row {
    background-color: #3a2c5a;
    color: #FFFFFF;
    border: #FFFFFF;
}

.list-row:hover {
    background-color: #2d1d50;
    color: #FFFFFF;
    border: #FFFFFF;
}

th::selection {
    background: rgb(101, 82, 146);
}

td::selection {
    background: rgb(101, 82, 146);
}
</style>