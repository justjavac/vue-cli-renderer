import { createRenderer } from "@vue/runtime-core";
import type {
  ComponentPublicInstance,
  CreateAppFunction,
  RootRenderFunction,
} from "@vue/runtime-core";
import { nodeOps } from "./nodeOps";
import { patchProp } from "./patchProp";
import { createNode, DOMElement, DOMNode } from "./dom";

export const createApp: CreateAppFunction<DOMElement> = (
  rootComponent,
  rootProps,
) => {
  const { createApp } = createRenderer<DOMNode, DOMElement>({
    patchProp,
    ...nodeOps,
  });

  const app = createApp(rootComponent, rootProps);

  const _mount = app.mount;
  app.mount = function mount(): ComponentPublicInstance {
    console.log("app mount");
    return _mount(createNode("ink-root"), false, false);
  };

  return app;
};

export const render: RootRenderFunction<DOMElement> = (...args) => {
  console.log("root render", ...args);
  const { render } = createRenderer<DOMNode, DOMElement>({
    patchProp,
    ...nodeOps,
  });

  return render(...args);
};

export * from "@vue/runtime-core";
