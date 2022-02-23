# Render Vue Components in Cli (WIP)

A custum Vue3 renderer to provided the same component-based UI building
experience that Vue3 offers in the browser, but for command-line apps. It uses
[Yoga](https://github.com/facebook/yoga) to build Flexbox layouts in the
terminal, so most CSS-like props are available in vue-custom-renderer as well.
The project is based on [ink](https://github.com/vadimdemedes/ink).

## Usage

Counter.vue:

```vue
<script setup>
const { ref, onMounted } = require("vue")

const count = ref(0)
onMounted(() => {
  setTimeout(() => count.value = 1, 1_000);
});
</script>

<template>
  <Text>{{ count }} tests passed.</Text>
</template>
```

index.js:

```js
const { createApp } = require("./vuerender");
const Counter = require("./Counter.vue");

createApp(Counter).mount(process.stdout);
```

<img src="assets/demo.svg" width="600">
