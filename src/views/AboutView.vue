<script setup>
import TestComponentVue from '../components/TestComponent.vue';
import TestComponent from '../components/TestComponent.vue';
</script>

<template>
  <div class="about">
    <TestComponent></TestComponent>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
