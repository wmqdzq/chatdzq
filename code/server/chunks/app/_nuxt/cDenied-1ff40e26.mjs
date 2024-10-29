import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, g as getRouting, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("noPermission.90cea08e.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "noPermission" }, _attrs))} data-v-5423fbad><div class="noPermission-content" data-v-5423fbad><img${ssrRenderAttr("src", _imports_0)} data-v-5423fbad><div class="name" data-v-5423fbad>\u60A8\u6682\u65E0\u5F00\u901A\u8BE5\u9875\u9762\u6743\u9650\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u5F00\u901A</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/noPermission.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5423fbad"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cDenied",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const toClose = () => {
      routing.setIsDeniedFalse();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_noPermission = __nuxt_component_1;
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        "model-value": unref(routing).isDenied,
        "mask-closable": false,
        transfer: true,
        onOnCancel: toClose
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-5ccbf605${_scopeId}>\u6682\u65E0\u6743\u9650</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u6682\u65E0\u6743\u9650")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: toClose
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u5B9A`);
                } else {
                  return [
                    createTextVNode("\u786E\u5B9A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "primary",
                onClick: toClose
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_noPermission, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_noPermission)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cDenied.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ccbf605"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=cDenied-1ff40e26.mjs.map
