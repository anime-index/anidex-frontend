<script setup>
defineProps({
    title: String,
    placeholder: String,
    modalId: String
})
</script>

<script>
export default {
    data() {
        return {
            newName: ""
        }
    }
}
</script>


<template>
    <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId+'Label'" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="modalId+'Label'">{{title}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input v-model="newName" type="text" class="form-control" :aria-label="modalId+'Input'" aria-describedby="rename-modal"
                        @keyup.enter="$emit('renameAction', newName)" :placeholder="placeholder">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="dismiss">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="$emit('renameAction', newName)">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>