<script setup>
defineProps({
    flexRadioId: String,
    flexRadioLabelText: String,
    selections: Array
})
</script>

<template>
    <div>
        <label class="form-check-label" :for="flexRadioId">{{flexRadioLabelText}}</label>
        <div :id="flexRadioId">
            <div v-for="selection in selections" :key="selections.indexOf(selection)" class="form-check">
                <input class="form-check-input shadow-none" type="radio" :name="flexRadioId" :id="selection.selectionId">
                <label class="form-check-label" :for="selections.selectionId">{{selection.selectionLabel}}</label>
            </div>
        </div>
    </div>
</template>