import type { RendererOptions } from "@vue/runtime-core";
import { DOMElement } from ".";
import { DOMNode, setAttribute, setStyle } from "./dom";

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
    el.nodeName,
    key,
    prevValue,
    nextValue,
    isSVG,
    prevChildren?.map((x) => x.type),
    parentComponent?.type.name,
    parentSuspense,
    unmountChildren?.name,
  );
  if (key === "style") {
    setStyle(el, nextValue);
  }
  setAttribute(el, key, nextValue);
};
