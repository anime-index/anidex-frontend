<script setup>
defineProps({
    flexRadioId: String,
    flexRadioLabelText: String,
    selections: Array,
    inputDisabled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div>
        <label class="form-check-label" :for="flexRadioId">{{flexRadioLabelText}}</label>
        <div :id="flexRadioId">
            <div v-for="selection in selections" :key="selections.indexOf(selection)" class="form-check">
                <input class="form-check-input shadow-none" type="radio" :name="flexRadioId" :id="selection.selectionId" :disabled="inputDisabled">
                <label class="form-check-label" :for="selections.selectionId">{{selection.selectionLabel}}</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
label::selection {
    background: #3a2c5a;
}
</style>