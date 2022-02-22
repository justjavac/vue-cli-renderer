<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Counter from './components/Counter.vue';

const count = ref(0)

onMounted(() => {
  setTimeout(() => count.value = 1, 1_000);
});
</script>

<template>
    <Counter :count="count" />
</template>
