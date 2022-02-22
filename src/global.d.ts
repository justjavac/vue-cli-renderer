import type { Ref, VNode } from "@vue/runtime-core";
import type { Except } from "type-fest";
import type { DOMElement } from "./dom";
import type { Styles } from "./styles";

type Key = string | number | symbol;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ink-box": Ink.Box;
      "ink-text": Ink.Text;
    }
  }
}

declare namespace Ink {
  interface Box {
    children?: VNode;
    key?: Key;
    ref?: Ref<DOMElement>;
    style?: Except<Styles, "textWrap">;
  }

  interface Text {
    children?: VNode;
    key?: Key;
    style?: Styles;
    internal_transform?: (children: string) => string;
  }
}
