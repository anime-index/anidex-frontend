<script setup>
defineProps({
    rangeId: String,
    labelText: String,
    minValue: Number,
    maxValue: Number,
    rangeStep: Number
})
</script>


<template>
    <div>
        <label :for="rangeId" class="form-label">{{labelText}}</label>
        <input type="range" class="form-range" :min="minValue" :max="maxValue" :step="rangeStep" :id="rangeId">
    </div>
</template>