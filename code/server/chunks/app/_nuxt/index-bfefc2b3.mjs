import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'cookie-es';
import 'ohash';
import '@intlify/message-compiler';
import 'view-ui-plus';
import 'axios';
import 'crypto-js';
import 'pinia-plugin-persistedstate';
import 'vant';
import 'defu';
import 'qrcode.vue';
import '../../nitro/config.mjs';
import 'scule';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([
      { id: 1, name: "AI\u641C\u7D22", name2: "\u5168\u90E8\u6210\u5458", name3: "", name4: "" },
      { id: 2, name: "AI\u5BF9\u8BDD", name2: "\u5168\u90E8\u6210\u5458", name3: "", name4: "" }
    ]);
    const columns = ref([
      { title: "\u540D\u79F0", key: "name", slot: "name" },
      { title: "\u53EF\u89C1\u8303\u56F4", key: "name2", slot: "name2" },
      { title: "\u662F\u5426\u663E\u793A", key: "name3", slot: "name3" },
      { title: "\u64CD\u4F5C", key: "name4", slot: "name4" }
    ]);
    const onDragDrop = (index1, index2) => {
      swapElements(data.value, index1, index2);
    };
    const swapElements = (arr, index1, index2) => {
      if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
      } else {
        console.error("Invalid indices");
      }
      return arr;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      const _component_Switch = resolveComponent("Switch");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recommend" }, _attrs))} data-v-37adaebb>`);
      _push(ssrRenderComponent(_component_Table, {
        columns: columns.value,
        data: data.value,
        border: data.value.length > 0 ? true : false,
        draggable: true,
        onOnDragDrop: onDragDrop
      }, {
        name: withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="applyName" data-v-37adaebb${_scopeId}><div data-v-37adaebb${_scopeId}>${ssrInterpolate(row.name)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "applyName" }, [
                createVNode("div", null, toDisplayString(row.name), 1)
              ])
            ];
          }
        }),
        name2: withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tag1" data-v-37adaebb${_scopeId}>${ssrInterpolate(row.name2)}</div>`);
          } else {
            return [
              createVNode("div", { class: "tag1" }, toDisplayString(row.name2), 1)
            ];
          }
        }),
        name3: withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Switch, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Switch)
            ];
          }
        }),
        name4: withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-37adaebb${_scopeId}>\u914D\u7F6E</span>`);
          } else {
            return [
              createVNode("span", null, "\u914D\u7F6E")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/recommend/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37adaebb"]]);

export { index as default };
//# sourceMappingURL=index-bfefc2b3.mjs.map
