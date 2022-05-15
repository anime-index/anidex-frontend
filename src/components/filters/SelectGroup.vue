<script setup>
defineProps({
    groupId: String,
    groupName: String,
    selections: Array,
    hasTitle: {
        type: Boolean,
        default: true
    },
    inLine: {
        type: Boolean,
        default: false
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
        <h6 v-if="hasTitle" id="groupTitle">{{groupName}}</h6>
        <div v-for="item in selections" class="form-check" :class="{'form-check-inline': inLine}" :key="item.id">
            <input class="form-check-input" type="checkbox" :value="item.id" :id="item.id" @input="$emit('callback', item.id)" :checked="item.selected">
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