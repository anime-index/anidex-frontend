<script setup>
import ListTabs from '@/components/lists/ListTabs.vue';
</script>

<template>
    <div>
        <h1>My Lists</h1>
            <div class="container">
            <ListTabs/>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background-color: #130230;
        padding: 0%;
        margin-top: 32px;
        margin-bottom: 32px;
        font-family: "Montserrat";
    }

    h1 {
        font-family: 'Esteban';
        text-align: center;
        color: white;
        margin-top: 32px;
    }
</style>