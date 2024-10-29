import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "role",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const modalShow = ref(false);
    const roleId = ref();
    const showFn = () => {
      modalShow.value = true;
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_RadioGroup = resolveComponent("RadioGroup");
      const _component_Radio = resolveComponent("Radio");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-42d33420${_scopeId}>\u4FEE\u6539\u89D2\u8272</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u4FEE\u6539\u89D2\u8272")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => modalShow.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: ($event) => modalShow.value = false
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
                onClick: ($event) => modalShow.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u53D6\u6D88")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_Button, {
                type: "primary",
                onClick: ($event) => modalShow.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="item" data-v-42d33420${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RadioGroup, {
              modelValue: roleId.value,
              "onUpdate:modelValue": ($event) => roleId.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Radio, {
                    label: "\u8BBF\u95EE\u8005",
                    class: "item-radio"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Radio, {
                    label: "\u7F16\u8F91\u8005",
                    class: "item-radio"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Radio, {
                    label: "\u8D22\u52A1",
                    class: "item-radio"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Radio, {
                    label: "\u7BA1\u7406\u5458",
                    class: "item-radio"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Radio, {
                      label: "\u8BBF\u95EE\u8005",
                      class: "item-radio"
                    }),
                    createVNode(_component_Radio, {
                      label: "\u7F16\u8F91\u8005",
                      class: "item-radio"
                    }),
                    createVNode(_component_Radio, {
                      label: "\u8D22\u52A1",
                      class: "item-radio"
                    }),
                    createVNode(_component_Radio, {
                      label: "\u7BA1\u7406\u5458",
                      class: "item-radio"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="item-content" data-v-42d33420${_scopeId}><div data-v-42d33420${_scopeId}>\u8BBF\u95EE\u8005\uFF0C\u53EA\u80FD\u67E5\u770B\u7F16\u8F91\u6743\u9650</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "item" }, [
                createVNode(_component_RadioGroup, {
                  modelValue: roleId.value,
                  "onUpdate:modelValue": ($event) => roleId.value = $event
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Radio, {
                      label: "\u8BBF\u95EE\u8005",
                      class: "item-radio"
                    }),
                    createVNode(_component_Radio, {
                      label: "\u7F16\u8F91\u8005",
                      class: "item-radio"
                    }),
                    createVNode(_component_Radio, {
                      label: "\u8D22\u52A1",
                      class: "item-radio"
                    }),
                    createVNode(_component_Radio, {
                      label: "\u7BA1\u7406\u5458",
                      class: "item-radio"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "item-content" }, [
                  createVNode("div", null, "\u8BBF\u95EE\u8005\uFF0C\u53EA\u80FD\u67E5\u770B\u7F16\u8F91\u6743\u9650")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manage/modal/role.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const role = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42d33420"]]);

export { role as default };
//# sourceMappingURL=role-e128529d.mjs.map
