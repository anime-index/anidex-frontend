<script setup>
defineProps({
    selectId: String,
    labelText: String,
    selections: Array
})
</script>

<template>
    <div>
        <label :for="selectId" class="form-label">{{labelText}}</label>
        <select class="form-select" :aria-label="selectId">
            <option selected>-</option>
            <option v-for="selection in selections" :key="selections.indexOf(selection)" :value="selection">{{selection}}</option>
        </select>
    </div>
</template>

<style scoped>

label::selection {
    background: #3a2c5a;
}
.form-select {
    background-color: #000021;
    color: #fff
}

.form-select::selection {
    background: #3a2c5a;
}
</style>