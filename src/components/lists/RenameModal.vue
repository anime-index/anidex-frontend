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
            newName: "",
            inputError: false
        }
    },
    methods: {
        createList() {
            if (this.newName === "") {
                this.inputError = true
            } else {
                this.$emit('renameAction', this.newName)
            }
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
                    <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group allign-middle">
                        <input v-model="newName" type="text" class="form-control text-box shadow-none" :aria-label="modalId+'Input'" aria-describedby="rename-modal"
                        @input="inputError = false" @keyup.enter="createList" :placeholder="placeholder">
                    </div>
                    <p class="input-error" v-if="inputError">You have to write a name for your list!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-transparent shadow-none" data-bs-dismiss="modal" id="dismiss">Cancel</button>
                    <button type="button" class="btn btn-primary shadow-none" @click="createList">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-header {
    background-color: #130230;
    color: #FFFFFF
}

.modal-body {
    background-color: #000021;
}

.text-box {
    background-color: #000021;
    color: #fff;
}
.modal-footer {
    background-color: #130230;
}

.btn-transparent {
    color: #fff;
}

.btn-transparent:hover {
    color: #fff;
    background-color: #3a2c5a;
}

.btn-primary {
    background-color: #69b549;
    border: #69b549;
}

.btn-primary:hover {
    background-color: #368519;
    border: #368519;
}

.input-error {
    margin-top: 4px;
    margin-bottom: 4px;
    color: #CF6679;
}


</style>