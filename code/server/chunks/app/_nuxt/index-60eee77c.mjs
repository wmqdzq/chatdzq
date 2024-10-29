import { a as _export_sfc, d as __nuxt_component_0, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
    const modalShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_cModal = __nuxt_component_0;
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "domain" }, _attrs))} data-v-4e0184e3><div class="domain-title" data-v-4e0184e3>\u57DF\u540D\u914D\u7F6E</div><div class="domain-name" data-v-4e0184e3><div data-v-4e0184e3>\u5E73\u53F0\u4E8C\u7EA7\u57DF\u540D\u5730\u5740\uFF1Ahttps://www.chatdzq.com/enterprise/home</div></div><div class="domain-content" data-v-4e0184e3>`);
      _push(ssrRenderComponent(_component_Form, { "label-width": 100 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { label: "\u72EC\u7ACB\u57DF\u540D:" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content" data-v-4e0184e3${_scopeId2}><div data-v-4e0184e3${_scopeId2}>\u672A\u914D\u7F6E</div><div class="edit" data-v-4e0184e3${_scopeId2}>\u914D\u7F6E</div></div><div class="sub" data-v-4e0184e3${_scopeId2}>\u60A8\u53EF\u8FDB\u884C\u5355\u72EC\u914D\u7F6E\u60A8\u7AD9\u70B9\u7684\u57DF\u540D</div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", null, "\u672A\u914D\u7F6E"),
                      createVNode("div", {
                        class: "edit",
                        onClick: ($event) => modalShow.value = true
                      }, "\u914D\u7F6E", 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "sub" }, "\u60A8\u53EF\u8FDB\u884C\u5355\u72EC\u914D\u7F6E\u60A8\u7AD9\u70B9\u7684\u57DF\u540D")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { label: "\u72EC\u7ACB\u57DF\u540D:" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", null, "\u672A\u914D\u7F6E"),
                    createVNode("div", {
                      class: "edit",
                      onClick: ($event) => modalShow.value = true
                    }, "\u914D\u7F6E", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "sub" }, "\u60A8\u53EF\u8FDB\u884C\u5355\u72EC\u914D\u7F6E\u60A8\u7AD9\u70B9\u7684\u57DF\u540D")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-4e0184e3${_scopeId}>\u72EC\u7ACB\u57DF\u540D\u914D\u7F6E</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u72EC\u7ACB\u57DF\u540D\u914D\u7F6E")
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
            _push2(ssrRenderComponent(_component_Button, { type: "primary" }, {
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
              createVNode(_component_Button, { type: "primary" }, {
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
            _push2(ssrRenderComponent(_component_Form, { "label-width": 100 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u57DF\u540D\u5730\u5740" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          style: { "width": "320px" },
                          placeholder: "\u8BF7\u8F93\u5165\u60A8\u8981\u914D\u7F6E\u7684\u57DF\u540D"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="sub" data-v-4e0184e3${_scopeId3}>\u57DF\u540D\u5730\u5740\u4F8B\u5982\uFF1Awww.chatdzq.com</div>`);
                      } else {
                        return [
                          createVNode(_component_Input, {
                            style: { "width": "320px" },
                            placeholder: "\u8BF7\u8F93\u5165\u60A8\u8981\u914D\u7F6E\u7684\u57DF\u540D"
                          }),
                          createVNode("div", { class: "sub" }, "\u57DF\u540D\u5730\u5740\u4F8B\u5982\uFF1Awww.chatdzq.com")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u5907\u6848\u4FE1\u606F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, {
                                style: { "width": "511px" },
                                type: "textarea",
                                rows: 8
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, {
                                  style: { "width": "511px" },
                                  type: "textarea",
                                  rows: 8
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, {
                                style: { "width": "511px" },
                                type: "textarea",
                                rows: 8
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormItem, { label: "\u57DF\u540D\u5730\u5740" }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          style: { "width": "320px" },
                          placeholder: "\u8BF7\u8F93\u5165\u60A8\u8981\u914D\u7F6E\u7684\u57DF\u540D"
                        }),
                        createVNode("div", { class: "sub" }, "\u57DF\u540D\u5730\u5740\u4F8B\u5982\uFF1Awww.chatdzq.com")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u5907\u6848\u4FE1\u606F" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              style: { "width": "511px" },
                              type: "textarea",
                              rows: 8
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Form, { "label-width": 100 }, {
                default: withCtx(() => [
                  createVNode(_component_FormItem, { label: "\u57DF\u540D\u5730\u5740" }, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        style: { "width": "320px" },
                        placeholder: "\u8BF7\u8F93\u5165\u60A8\u8981\u914D\u7F6E\u7684\u57DF\u540D"
                      }),
                      createVNode("div", { class: "sub" }, "\u57DF\u540D\u5730\u5740\u4F8B\u5982\uFF1Awww.chatdzq.com")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormItem, { label: "\u5907\u6848\u4FE1\u606F" }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_Input, {
                            style: { "width": "511px" },
                            type: "textarea",
                            rows: 8
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/domain/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e0184e3"]]);

export { index as default };
//# sourceMappingURL=index-60eee77c.mjs.map
