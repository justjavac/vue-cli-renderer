import type { RendererOptions } from "@vue/runtime-core";
import Yoga from "yoga-layout-prebuilt";
import {
  appendChildNode,
  createNode,
  createTextNode,
  insertBeforeNode,
  removeChildNode,
  setAttribute,
  setStyle,
  setTextNodeValue,
} from "./dom";
import type {
  DOMElement,
  DOMNode,
  DOMNodeAttribute,
  ElementNames,
  TextNode,
} from "./dom";
import { OutputTransformer } from "./render-node-to-output";
import { Styles } from "./styles";

export const nodeOps: Omit<RendererOptions<DOMNode, DOMElement>, "patchProp"> =
  {
    insert(el, parent, anchor) {
      console.log("insert", el.nodeName, parent.nodeName, anchor);

      if (parent.nodeName === "ink-text" && el.nodeName === "ink-box") {
        throw new Error(`<View> can't be nested inside <Text> component`);
      }

      if (anchor != null) {
        insertBeforeNode(parent, el, anchor);
      } else {
        appendChildNode(parent, el as DOMElement);
      }
    },

    remove(el) {
      console.log("remove", el.nodeName);
      if (el.parentNode != null) {
        removeChildNode(el.parentNode, el);
      }
      cleanupYogaNode(el.yogaNode);
    },

    createElement(type, isSVG, isCustomizedBuiltIn, vnodeProps) {
      console.log(
        "createElement",
        type,
        isSVG,
        isCustomizedBuiltIn,
        vnodeProps,
      );

      const node = createNode(type as ElementNames);

      if (vnodeProps == null) return node;

      for (const [key, value] of Object.entries(vnodeProps)) {
        if (key === "children") {
          continue;
        } else if (key === "style") {
          setStyle(node, value as Styles);
        } else if (key === "internal_transform") {
          node.internal_transform = value as OutputTransformer;
        } else if (key === "internal_static") {
          node.internal_static = true;
        } else {
          setAttribute(node, key, value as DOMNodeAttribute);
        }
      }

      return node;
    },

    createText(text) {
      console.log("createText", text);
      return createTextNode(text);
    },

    createComment(text) {
      console.log("createComment", text);
      return createTextNode("");
    },

    setText(node, text): void {
      console.log("setText", node, text);
      setTextNodeValue(node as TextNode, text);
    },

    setElementText(node, text): void {
      console.log("setElementText", node, text);
      this.setElementText(node, text);
    },

    parentNode(node) {
      console.log("parentNode", node);
      return node.parentNode;
    },

    nextSibling(node) {
      console.log("nextSibling", node);
      const parent = node.parentNode;
      if (!parent) {
        return null;
      }
      const i = parent.childNodes.indexOf(node);
      return parent.childNodes[i + 1] || null;
    },

    insertStaticContent(content, parent, anchor, isSVG, start, end): any {
      console.warn("insertStaticContent");
    },
  };

function cleanupYogaNode(node?: Yoga.YogaNode): void {
  node?.unsetMeasureFunc();
  node?.freeRecursive();
}
