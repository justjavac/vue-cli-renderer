import { defineComponent, h } from "@vue/runtime-core";

function createComponent(tag: string) {
  return defineComponent({
    inheritAttrs: false,
    name: tag,
    render() {
      console.log("render", tag);
      return h(tag, this.$attrs, this.$slots?.default?.() || []);
    },
  });
}

export const Text = createComponent("Text");
export const View = createComponent("View");
export const Root = createComponent("Root");
