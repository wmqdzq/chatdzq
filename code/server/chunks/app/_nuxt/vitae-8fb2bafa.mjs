import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
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
  __name: "vitae",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { expose: __expose, emit: emits }) {
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const params = ref({});
    const loading = ref(false);
    const toSubmit = () => {
      if (proxy.$isEmpty(params.value.name)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u7B80\u5386\u59D3\u540D");
        return;
      }
      let data = {
        code: params.value.code,
        name: params.value.name,
        email: params.value.email,
        phone: params.value.phone
      };
      loading.value = true;
      proxy.$api.editResume(data).then(() => {
        loading.value = false;
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        modalShow.value = false;
        emits("init");
      }).catch(() => {
        loading.value = false;
      });
    };
    const showFn = (record) => {
      modalShow.value = true;
      params.value = JSON.parse(JSON.stringify(record));
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top" data-v-b900efd4${_scopeId}>\u7F16\u8F91\u7B80\u5386\u4FE1\u606F</div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, "\u7F16\u8F91\u7B80\u5386\u4FE1\u606F")
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
              loading: loading.value,
              onClick: toSubmit
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
                loading: loading.value,
                onClick: toSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-b900efd4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Form, { "label-width": 100 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, {
                    label: "\u7B80\u5386\u59D3\u540D",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          placeholder: "\u7B80\u5386\u59D3\u540D",
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            placeholder: "\u7B80\u5386\u59D3\u540D",
                            modelValue: params.value.name,
                            "onUpdate:modelValue": ($event) => params.value.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          placeholder: "\u8054\u7CFB\u65B9\u5F0F",
                          modelValue: params.value.phone,
                          "onUpdate:modelValue": ($event) => params.value.phone = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            placeholder: "\u8054\u7CFB\u65B9\u5F0F",
                            modelValue: params.value.phone,
                            "onUpdate:modelValue": ($event) => params.value.phone = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u90AE\u7BB1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          placeholder: "\u90AE\u7BB1",
                          modelValue: params.value.email,
                          "onUpdate:modelValue": ($event) => params.value.email = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            placeholder: "\u90AE\u7BB1",
                            modelValue: params.value.email,
                            "onUpdate:modelValue": ($event) => params.value.email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormItem, {
                      label: "\u7B80\u5386\u59D3\u540D",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u7B80\u5386\u59D3\u540D",
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u8054\u7CFB\u65B9\u5F0F",
                          modelValue: params.value.phone,
                          "onUpdate:modelValue": ($event) => params.value.phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u90AE\u7BB1" }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u90AE\u7BB1",
                          modelValue: params.value.email,
                          "onUpdate:modelValue": ($event) => params.value.email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(_component_Form, { "label-width": 100 }, {
                  default: withCtx(() => [
                    createVNode(_component_FormItem, {
                      label: "\u7B80\u5386\u59D3\u540D",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u7B80\u5386\u59D3\u540D",
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u8054\u7CFB\u65B9\u5F0F" }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u8054\u7CFB\u65B9\u5F0F",
                          modelValue: params.value.phone,
                          "onUpdate:modelValue": ($event) => params.value.phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u90AE\u7BB1" }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u90AE\u7BB1",
                          modelValue: params.value.email,
                          "onUpdate:modelValue": ($event) => params.value.email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/modal/vitae.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vitae = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b900efd4"]]);

export { vitae as default };
//# sourceMappingURL=vitae-8fb2bafa.mjs.map
