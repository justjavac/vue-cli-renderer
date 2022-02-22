<script setup lang="ts">
import { Text, View } from '.';

defineProps({
  count: Number
})
</script>

<template>
  <View>
    <Text>{{ count }}</Text>
  </View>
</template>
