const Vue = require("vue");
const sfc = require("@vue/compiler-sfc");

const source = `
    <script setup>
        import { ref } from 'vue'
        const count = ref(0)
    </script>

    <template>
        <button type="button" @click="count++">count is: {{ count }}</button>
    </template>
`;

const ast = sfc.parse(source);
const render = Vue.compile(ast.descriptor.template.content);

console.log("-".repeat(50));
console.log(render.toString());
