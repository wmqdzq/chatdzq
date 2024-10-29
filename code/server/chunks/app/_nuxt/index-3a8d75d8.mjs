import { a as _export_sfc, g as getRouting, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfBJREFUaEPtmM9NwzAUxp+VS465RHKUS0YoG8AGbEBGYAQ6ASMgNoAJ6AawQXurpR7g2iqVkVGCUEjivD8WinCvad77fu97frajYOE/tXD9EAH+2sHoQHSAWYHYQswCsl+PDrBLyAzwfx3I83yVJMmHMWbHLCJkWZalaboCgB02HsmBoiheAcAlBGttbYx5pEJorSul1AsAVA7AWnuFgUADaK0v24TfmqkQPfFf8ay1a2PM3dyCoAGqqsqOx+N7PwEWYkg8xVE0gEuita6VUg9UiAnxqOq7/CQADoSkeBYABUJaPBsAAxFCvAjAHIhQ4sUAPBBrpdRNO+d/jl70gh0areRFPBRsbDoNTCsR8aIOdCJ9ENiNyrehiTrQJSuK4hYA7geSP+/3+2ufKMxzcYCxBduJwu7YPhhRAJ/4EBBiABPinwDgV9tIOSEC4Jvz3LPTVBuxAXzifdOJ6wQLYK74kBBkAKz4UBAkAKr4EBBogPZG5u7E7g5LPttMLGx3J9745n/3HA0wcicmnW2GILBHDTSAc+B0Om2ttZmrAjZhv7J9iKZpLg6Hw1swB9qjs2ufGgC2nE8qnciyLFfn89ltdhtM+wQ5jc6tnNT/0C0klVgqTgSQqiQ1TnSAWjmp96IDUpWkxokOUCsn9d7iHfgEaK9eQOWmQa4AAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const routing = getRouting();
    const modalShow = ref(false);
    const showFn = () => {
      modalShow.value = true;
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "class-name": "serviceMain",
        closable: false,
        "footer-hide": true,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="service" data-v-dbecd924${_scopeId}><div class="service-top" data-v-dbecd924${_scopeId}><div class="service-close" data-v-dbecd924${_scopeId}><img${ssrRenderAttr("src", _imports_0)} data-v-dbecd924${_scopeId}></div></div><div class="service-content" data-v-dbecd924${_scopeId}><img${ssrRenderAttr("src", unref(routing).configuration.customerServiceQrPic)} data-v-dbecd924${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "service" }, [
                createVNode("div", { class: "service-top" }, [
                  createVNode("div", {
                    class: "service-close",
                    onClick: ($event) => modalShow.value = false
                  }, [
                    createVNode("img", { src: _imports_0 })
                  ], 8, ["onClick"])
                ]),
                createVNode("div", { class: "service-content" }, [
                  createVNode("img", {
                    src: unref(routing).configuration.customerServiceQrPic
                  }, null, 8, ["src"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cService/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const service = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dbecd924"]]);

export { service as s };
//# sourceMappingURL=index-3a8d75d8.mjs.map
