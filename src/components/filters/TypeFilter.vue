<script>
export default {
    emits: ['type'],
    data() {
        return {
            types: ['TV', 'Movie', 'Special']
        }
    }
}
</script>

<template>
    <h6>Types</h6>
        <div>
            <div v-for="item in types" class="form-check form-check-inline" :key="item.id">
                <input :id="item" class="form-check-input" type="checkbox" :value="item" @input="$emit('type', item)">
                <label class="form-check-label" :for="item">{{item}}</label>
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