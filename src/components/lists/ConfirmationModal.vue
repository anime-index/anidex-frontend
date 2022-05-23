<script setup>
defineProps({
    modalId: String,
    modalLabel: String,
    prevModalId: String,
    warningText: String,
    confirmationText: String,
})
</script>


<template>
    <div class="modal fade" :id="modalId" aria-hidden="true" :aria-labelledby="modalLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="modalLabel">{{warningText}}</h5>
                    <button type="button" class="btn-close" :data-bs-target="'#'+prevModalId" data-bs-toggle="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{confirmationText}}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" :data-bs-target="'#'+prevModalId" data-bs-toggle="modal">No</button>
                    <button class="btn btn-transparent" @click="$emit('confirmed')" data-bs-dismiss="modal">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.modal-header {
    background-color: #130230;
    color: white;
    font-family: "Montserrat-bold";
}
.modal-content {
    background-color: #000021;
    color: white;
}

.modal-footer {
    background-color: #130230;
}

.btn-primary {
    background-color: #69b549;
    border: #69b549;
}

.btn-primary:hover {
    background-color: #368519;
    border: #368519;
}

.btn-transparent {
    color: #fff;
    margin-right: 8px;
}

.btn-transparent:hover {
    color: #fff;
    background-color: #3a2c5a;
}


</style>