<script>
export default {
    mounted() {
        this.$refs.mybox.focus()
    }
}
</script>

<template>
    <input class="form-control me-2 search-text-box shadow-none" type="search" placeholder="Search" aria-label="Search" ref="mybox"
    @input="event => $emit('querySearch', event.target.value)">
</template>

<style scoped>
.search-text-box {
  background-color: #000021;
  color: #fff;
}

.search-text-box:focus {
  background-color: #000021;
  color: #fff;
}

.search-text-box::selection {
    background: #3a2c5a;
}
</style>