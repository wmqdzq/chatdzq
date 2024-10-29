import { useSSRContext, defineComponent, toRefs, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "electricCom",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    },
    type: {
      //类型
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { data, type } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tooltip = resolveComponent("Tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bubbleTransferClassName" }, _attrs))} data-v-6df69d6b>`);
      _push(ssrRenderComponent(_component_Tooltip, {
        transfer: true,
        placement: "top"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="electric" data-v-6df69d6b${_scopeId}><div data-v-6df69d6b${_scopeId}>\u7535\u91CF</div>`);
            if (!_ctx.$isEmpty(unref(data)[unref(type)]) && unref(data)[unref(type)][0].electricity) {
              _push2(`<div style="${ssrRenderStyle({ "margin-left": "4px", "margin-right": "2px" })}" data-v-6df69d6b${_scopeId}>-${ssrInterpolate(unref(data)[unref(type)][0].electricity)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!_ctx.$isEmpty(unref(data)[unref(type)]) && unref(data)[unref(type)][0].originalEnergy) {
              _push2(`<div class="original" data-v-6df69d6b${_scopeId}>(${ssrInterpolate(unref(data)[unref(type)][0].originalEnergy)})</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "electric" }, [
                createVNode("div", null, "\u7535\u91CF"),
                !_ctx.$isEmpty(unref(data)[unref(type)]) && unref(data)[unref(type)][0].electricity ? (openBlock(), createBlock("div", {
                  key: 0,
                  style: { "margin-left": "4px", "margin-right": "2px" }
                }, "-" + toDisplayString(unref(data)[unref(type)][0].electricity), 1)) : createCommentVNode("", true),
                !_ctx.$isEmpty(unref(data)[unref(type)]) && unref(data)[unref(type)][0].originalEnergy ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "original"
                }, "(" + toDisplayString(unref(data)[unref(type)][0].originalEnergy) + ")", 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/electricCom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6df69d6b"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=electricCom-ab2941d1.mjs.map
