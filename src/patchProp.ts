import type { RendererOptions } from "@vue/runtime-core";
import { DOMElement } from ".";
import { DOMNode } from "./dom";

export const patchProp: RendererOptions<DOMNode, DOMElement>["patchProp"] = (
  el,
  key,
  prevValue,
  nextValue,
  isSVG = false,
  prevChildren,
  parentComponent,
  parentSuspense,
  unmountChildren,
) => {
  console.log(
    "patchProp",
    el,
    key,
    prevValue,
    nextValue,
    isSVG,
    prevChildren,
    parentComponent,
    parentSuspense,
    unmountChildren,
  );
  if (key === "style") {
    setStyle(el, nextValue);
  }
  setAttribute(el, key, nextValue);
};

function setStyle(el: DOMElement, nextValue: any) {
  throw new Error("Function not implemented.");
}

function setAttribute(el: DOMElement, key: string, nextValue: any) {
  throw new Error("Function not implemented.");
}
