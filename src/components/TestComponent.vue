<template>
  <div class="container p-5">
    <button type="button" class="btn btn-secondary me-2" data-bs-container="body" data-bs-trigger="hover" data-bs-toggle="popover" data-bs-placement="left" title="Title" data-bs-content="Popover">
      Popover
    </button>
  </div>
</template>
<script>
//importing bootstrap 5 Modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
export default {
  mounted() {
      Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode))
}
}
</script>