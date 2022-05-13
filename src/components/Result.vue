<script setup>
import PageNavigation from "./PageNavigation.vue";
import CardGrid from "./CardGrid.vue";
defineProps({
    dataJson: Object,
    page: Number,
    lastPage: Number,
    status: String,
    type: String,
    order: Boolean
})
</script>

<script>
export default {
    emits: ['lastCallback'],
    methods: {
        select_page(page) {
            this.$emit('lastCallback', page)
        }
    }
}
</script>

<template>
    <PageNavigation @callback="select_page" :page="page" :last-page="lastPage" style="margin-top:16px;"/>
    <CardGrid :data-json="dataJson" :page="page" :status="status" :type="type" :order="order"/>
    <PageNavigation @callback="select_page" :page="page" :last-page="lastPage"/>
</template>
