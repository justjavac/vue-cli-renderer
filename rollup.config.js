import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/cli.ts",
    output: {
      format: "esm",
      file: "dist/cli.mjs",
    },
    external: ["vue"],
    plugins: [commonjs(), typescript(), vue()],
  },
  {
    input: "src/vrender.ts",
    output: {
      format: "cjs",
      file: "dist/render.js",
    },
    plugins: [commonjs(), typescript()],
  },
];
