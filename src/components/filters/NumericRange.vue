<script setup>
defineProps({
    rangeId: String,
    labelText: String,
    minValue: Number,
    maxValue: Number,
    rangeStep: Number,
    inputDisabled: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <div>
        <label :for="rangeId" class="form-label">{{labelText}}</label>
        <input type="range" class="form-range" :min="minValue" :max="maxValue" :step="rangeStep" :id="rangeId" :disabled="inputDisabled">
    </div>
</template>

<style scoped>
label::selection {
    background: #3a2c5a;
}
.form-range::-webkit-slider-runnable-track {
    background-color: #9886c2;
}

.form-range::-webkit-slider-thumb {
    background-color: #430e9e;
}


.form-range:disabled::-webkit-slider-runnable-track {
    background-color: #9886c26b;
}

.form-range:disabled:-webkit-slider-thumb {
    background-color: #430e9e5d;
}
</style>