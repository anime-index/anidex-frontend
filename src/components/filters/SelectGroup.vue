<script setup>
defineProps({
    groupId: String,
    groupName: String,
    selections: Array,
    hasTitle: {
        type: Boolean,
        default: true
    }
})
</script>

<script>
export default {
    data() {
        return {
            inLineClass: 'form-check-inline'
        }
    }
}
</script>


<template>
    <div>
        <h6 v-if="this.hasTitle" id="groupTitle">{{this.groupName}}</h6>
        <div v-for="item in this.selections" class="form-check" :key="item.id">
            <input class="form-check-input" type="checkbox" :value="item.id" :id="item.id">
            <label class="form-check-label" for="flexCheckDefault">
                {{item.label}}
            </label>
        </div>
    </div>
</template>

<style scoped>

label::selection {
    background: #3a2c5a;
}

h6::selection {
        background: #3a2c5a;
    }
</style>