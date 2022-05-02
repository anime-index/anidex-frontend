
<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
defineProps({
    position: Number,
    title: String,
    imageurl: String,
    score: Number,
    type: String
})

</script>

<script>
export default {
    mounted() {
        Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
        .forEach(popoverNode => new Popover(popoverNode))
    }
}
</script>


<template>
     <tr data-bs-container="body" data-bs-trigger="hover" data-bs-toggle="popover" data-bs-placement="left" :title="title" data-bs-content="Some Content">
      <th scope="row">{{position}}</th>
      <td>{{title}}</td>
      <td>{{score}}</td>
      <td>{{type}}</td>
    </tr>
</template>