
<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { onUpdated } from '@vue/runtime-core';
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
        Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
        .forEach(popoverNode => new Popover(popoverNode, {html: true, content: function() {
            console.log(this.getAttribute('data-img'))
            return '<div class="media"><img class="img-fluid" src="' + this.getAttribute('data-img') + '"></div>'}
            }))
    }
}
</script>


<template>
     <tr ref="tr" data-bs-container="body" data-bs-trigger="hover" data-bs-toggle="popover" data-bs-placement="left" :title="title" :data-img="imageurl">
      <th scope="row">{{position}}</th>
      <td>{{title}}</td>
      <td>{{score}}</td>
      <td>{{type}}</td>
    </tr>
</template>