<script setup lang="ts">
import { Text, View } from '.';

defineProps({
  count: Number
})
</script>

<template>
  <View>
    <Text style="color: blue;">{{ count }}</Text>
  </View>
</template>
