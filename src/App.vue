<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Counter from './components/Counter.vue';
import { Text, View } from './components';

const count = ref(0)

// onMounted(() => {
//   setTimeout(() => count.value = 1, 1_000);
// });
</script>

<template>
 <View>
    <Text>Hello</Text>
    <Counter :count="count" />
  </View>
</template>
