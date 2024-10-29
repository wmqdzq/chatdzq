import { a as _export_sfc, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "previewImg",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const modalShow = ref(false);
    const imgUrl = ref("");
    ref();
    const showFn = (url) => {
      imgUrl.value = url;
      modalShow.value = true;
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_ImagePreview = resolveComponent("ImagePreview");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-648f8727${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ImagePreview, {
              modelValue: modalShow.value,
              "onUpdate:modelValue": ($event) => modalShow.value = $event,
              "preview-list": [imgUrl.value]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_ImagePreview, {
                  modelValue: modalShow.value,
                  "onUpdate:modelValue": ($event) => modalShow.value = $event,
                  "preview-list": [imgUrl.value]
                }, null, 8, ["modelValue", "onUpdate:modelValue", "preview-list"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/previewImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-648f8727"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=previewImg-8e12aab7.mjs.map
