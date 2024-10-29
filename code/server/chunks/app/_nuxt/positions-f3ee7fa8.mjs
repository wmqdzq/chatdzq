import { a as _export_sfc, d as __nuxt_component_0, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, withModifiers, nextTick } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_2 } from './electric-f4a0b755.mjs';
import associate from './associate-75692ed7.mjs';
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
import './close-e8808509.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABRBJREFUWEfFl2FoVWUYx3/PuXfunrulEwyM/DBJIUFogVGSwcRFBg6VlPxglB+ihdnOCcOBiRsqKRr3rhwKftCwULBQyGjRQKMFQQuNBAMHFRT6QWjL7d4z3T1Pve+5u+7u3jvuDOvAvuy+z/P+z/M8///zP8L//Mg93f9+ZgHKChsbDy+ytf7GPeUBZgagU+PMHXsXVc9cbS8VApRDDCW66JTxmQKZGYB09iSw+Z+/QdBuVAJEtoI2gXMCr3bL/QPQHbShegTopybxPFtlxF52XBP8NXYW1dUoW/DdEzMBUV0FUtqAE1xFpR4nXMKbyd+LLjG/S/ATSD2aXYg/d6haEKUAbJ9HW9BYE6rzbSLHeRjVDShd+G5n2eSpjIdICuQcGv4WzYfcROU7Gmr72SJBubhiAN3BalSPAQumeQPT/0/R8DQaH0Fym5HY2mgOKjzCDVRexUucn3riLoBUthnhK5ARNNeDOL2EcoMYi1D9ApE+VM2brQIa84nM1MdBhhDtRTEVa0Z1I8gAwgI0bEFi7aD1wEo8t38yiLsA0tlvEJYR5pbj118uHCqUNmxFiSPOQWCRBSoaR0mAXEZzXQjj4HyG6tv4yUOFHN23lqLxS3aAPXdlJQB3EAZod5cXlSmd+QTkBRuMER9TIX0PEmlmjSa47XTgyGsREC7aCpgWeckNU/L0IfI07a5bHkB3NgtcLgUQXCr0V/VjYnSUsiDbiOh+kBfzyQfx3MXFTMn0I/IYnvtAeQApe+BJNHjQ0siyIdiD0sE0QzTlkg048gHKPDTch18XMSai8XWUATz3mQoVGG1DnSNo2EVDcj/DY2dA10SH9QBesqMqbqeyJxBejs7KeebUbmQo22YpqurjJ9PlARhFGw6uIQY9A7bfws8oj07L/6moUpk0Iu2FWKHP5lJuMiexeKoeFOtAenSNneJIRHrJ5XbhON/PDMDoXsTZiaPLUWe3lWhbxHA9ft25yjpgezW6DnHOFsoX5rpmDiDbibCbMHyCWGxPAQBhK17dNEI0uQWGckoLyBXQpSj78N13qpuBfAsmYiNqLgOGpm/BhOCYQWlwjzI8dgp0XVQ+7cFPvlElgMPRis63cXbteoYCw6TdoNvwkofLD2FBCYOHCtssZcu5E4yW8xK+a96m8mNnKHYStAHlQxoSbXboCjTUH/GST1UCcAvVH/CTzUU3pLPXIum17uc08ZxfYsFS2UYcOWg3ZvSUClE6U4USqn6Ll2wpBjAhxeGX4DwXWTA5Ss34AW7fCWCWh+PsyEvxhFyfx0u0FucZ7QVnFZ5bU6kCFyLuO4/TXnulcCiV2Y7IQcwU22UUM71sygMJbLmtRRMfzZlldbaEtrZCXJ1eCVNBC2LWLuOo8XthHxr/FQmbEDmTX8fG/Rpez5syCMYhGcExrVph1/GssJ+c00gozSA77DpWnp06R6VCJM6x/F6vNGyDqH6O6kfEJU6OTYisneQRysUNEua28VZ97/RCZH6NTKYxFctQjd5UnEfye2EXnru3LLJ0xmzDHXZQVf+I2sV1pGaAP+NfV7Ls1ZtSGfsF0YAwWFJiOntG5jMeM4YDZicWVvJ/5YBXB8BEprKvIBy3szC7trVwyWRbLuHrtNcdrUqw8oeqB2ACurOnUDZFFkx7gHG7+f6TDxMDwJiUhrG9iLbneW/+O46GBxhOdt7/T7OJ2pqPU0MvDUfIJfvZLjdnUvbyQnSvGf5l3N+saT0/bmXjZQAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "positions",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { expose: __expose, emit: emits }) {
    const modalShow = ref(false);
    const loading = ref(false);
    const visible = ref(false);
    const { proxy } = getCurrentInstance();
    const params = ref({
      name: "",
      description: "",
      code: ""
    });
    const associateRef = ref();
    const robotCode = ref("");
    const robotType = ref("SYSTEM_QA_CHAT");
    const consumeEnergy = ref(null);
    ref("");
    const showFn = (record) => {
      modalShow.value = true;
      if (record) {
        params.value.name = record.name;
        params.value.description = record.description;
        params.value.code = record.code;
      } else {
        params.value = {
          name: "",
          description: "",
          code: ""
        };
      }
      let data = {
        type: robotType.value
      };
      proxy.$api.space_robotGetRobotInfo(data).then((res) => {
        consumeEnergy.value = res.data.consumeEnergy;
        robotCode.value = res.data.code;
      });
    };
    const toCreate = async () => {
      visible.value = false;
      if (proxy.$isEmpty(params.value.name)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u804C\u4F4D\u540D\u79F0");
        return;
      }
      visible.value = true;
      await nextTick();
      associateRef.value.showFn(robotCode.value, robotType.value, params.value.name);
    };
    const getContent = (e) => {
      params.value.description = e;
      visible.value = false;
    };
    const toSubmit = () => {
      if (proxy.$isEmpty(params.value.name)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u804C\u4F4D\u540D\u79F0");
        return;
      }
      loading.value = true;
      if (params.value.code) {
        proxy.$api.editPosition(params.value).then(() => {
          proxy.$Message.success("\u66F4\u65B0\u6210\u529F");
          loading.value = false;
          modalShow.value = false;
          emits("init");
        });
      } else {
        proxy.$api.addPosition(params.value).then(() => {
          proxy.$Message.success("\u65B0\u589E\u6210\u529F");
          loading.value = false;
          modalShow.value = false;
          emits("init");
        });
      }
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top" data-v-8a207604${_scopeId}>${ssrInterpolate(unref(proxy).$isEmpty(params.value.code) ? "\u65B0\u589E" : "\u7F16\u8F91")}\u804C\u4F4D</div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, toDisplayString(unref(proxy).$isEmpty(params.value.code) ? "\u65B0\u589E" : "\u7F16\u8F91") + "\u804C\u4F4D", 1)
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
            _push2(`<div class="content" data-v-8a207604${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Form, { "label-width": 100 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, {
                    label: "\u804C\u4F4D\u540D\u79F0",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event,
                          style: { "width": "320px" },
                          placeholder: "\u804C\u4F4D\u540D\u79F0"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            modelValue: params.value.name,
                            "onUpdate:modelValue": ($event) => params.value.name = $event,
                            style: { "width": "320px" },
                            placeholder: "\u804C\u4F4D\u540D\u79F0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u804C\u4F4D\u8981\u6C42" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, {
                                style: { "width": "500px" },
                                modelValue: params.value.description,
                                "onUpdate:modelValue": ($event) => params.value.description = $event,
                                type: "textarea",
                                rows: 6,
                                placeholder: "\u804C\u4F4D\u8981\u6C42"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Poptip, {
                                modelValue: visible.value,
                                "onUpdate:modelValue": ($event) => visible.value = $event,
                                placement: "right-start",
                                trigger: "click",
                                transfer: true
                              }, {
                                content: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(associate, {
                                      ref_key: "associateRef",
                                      ref: associateRef,
                                      onClose: ($event) => visible.value = false,
                                      onGetContent: getContent
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(associate, {
                                        ref_key: "associateRef",
                                        ref: associateRef,
                                        onClose: ($event) => visible.value = false,
                                        onGetContent: getContent
                                      }, null, 8, ["onClose"])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="bottom" data-v-8a207604${_scopeId5}><div class="btn" data-v-8a207604${_scopeId5}><img${ssrRenderAttr("src", _imports_0)} data-v-8a207604${_scopeId5}><div data-v-8a207604${_scopeId5}>AI\u5E2E\u6211\u751F\u6210\u63CF\u8FF0</div></div><div class="tag" data-v-8a207604${_scopeId5}><img${ssrRenderAttr("src", _imports_2)} data-v-8a207604${_scopeId5}><div data-v-8a207604${_scopeId5}>${ssrInterpolate(consumeEnergy.value)}\u7535\u91CF</div></div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        class: "bottom",
                                        onClick: withModifiers(($event) => visible.value = false, ["stop"])
                                      }, [
                                        createVNode("div", {
                                          class: "btn",
                                          onClick: withModifiers(toCreate, ["stop"])
                                        }, [
                                          createVNode("img", { src: _imports_0 }),
                                          createVNode("div", null, "AI\u5E2E\u6211\u751F\u6210\u63CF\u8FF0")
                                        ], 8, ["onClick"]),
                                        createVNode("div", { class: "tag" }, [
                                          createVNode("img", { src: _imports_2 }),
                                          createVNode("div", null, toDisplayString(consumeEnergy.value) + "\u7535\u91CF", 1)
                                        ])
                                      ], 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, {
                                  style: { "width": "500px" },
                                  modelValue: params.value.description,
                                  "onUpdate:modelValue": ($event) => params.value.description = $event,
                                  type: "textarea",
                                  rows: 6,
                                  placeholder: "\u804C\u4F4D\u8981\u6C42"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Poptip, {
                                  modelValue: visible.value,
                                  "onUpdate:modelValue": ($event) => visible.value = $event,
                                  placement: "right-start",
                                  trigger: "click",
                                  transfer: true
                                }, {
                                  content: withCtx(() => [
                                    createVNode(associate, {
                                      ref_key: "associateRef",
                                      ref: associateRef,
                                      onClose: ($event) => visible.value = false,
                                      onGetContent: getContent
                                    }, null, 8, ["onClose"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "bottom",
                                      onClick: withModifiers(($event) => visible.value = false, ["stop"])
                                    }, [
                                      createVNode("div", {
                                        class: "btn",
                                        onClick: withModifiers(toCreate, ["stop"])
                                      }, [
                                        createVNode("img", { src: _imports_0 }),
                                        createVNode("div", null, "AI\u5E2E\u6211\u751F\u6210\u63CF\u8FF0")
                                      ], 8, ["onClick"]),
                                      createVNode("div", { class: "tag" }, [
                                        createVNode("img", { src: _imports_2 }),
                                        createVNode("div", null, toDisplayString(consumeEnergy.value) + "\u7535\u91CF", 1)
                                      ])
                                    ], 8, ["onClick"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                style: { "width": "500px" },
                                modelValue: params.value.description,
                                "onUpdate:modelValue": ($event) => params.value.description = $event,
                                type: "textarea",
                                rows: 6,
                                placeholder: "\u804C\u4F4D\u8981\u6C42"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_Poptip, {
                                modelValue: visible.value,
                                "onUpdate:modelValue": ($event) => visible.value = $event,
                                placement: "right-start",
                                trigger: "click",
                                transfer: true
                              }, {
                                content: withCtx(() => [
                                  createVNode(associate, {
                                    ref_key: "associateRef",
                                    ref: associateRef,
                                    onClose: ($event) => visible.value = false,
                                    onGetContent: getContent
                                  }, null, 8, ["onClose"])
                                ]),
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "bottom",
                                    onClick: withModifiers(($event) => visible.value = false, ["stop"])
                                  }, [
                                    createVNode("div", {
                                      class: "btn",
                                      onClick: withModifiers(toCreate, ["stop"])
                                    }, [
                                      createVNode("img", { src: _imports_0 }),
                                      createVNode("div", null, "AI\u5E2E\u6211\u751F\u6210\u63CF\u8FF0")
                                    ], 8, ["onClick"]),
                                    createVNode("div", { class: "tag" }, [
                                      createVNode("img", { src: _imports_2 }),
                                      createVNode("div", null, toDisplayString(consumeEnergy.value) + "\u7535\u91CF", 1)
                                    ])
                                  ], 8, ["onClick"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_FormItem, {
                      label: "\u804C\u4F4D\u540D\u79F0",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event,
                          style: { "width": "320px" },
                          placeholder: "\u804C\u4F4D\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u804C\u4F4D\u8981\u6C42" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              style: { "width": "500px" },
                              modelValue: params.value.description,
                              "onUpdate:modelValue": ($event) => params.value.description = $event,
                              type: "textarea",
                              rows: 6,
                              placeholder: "\u804C\u4F4D\u8981\u6C42"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_Poptip, {
                              modelValue: visible.value,
                              "onUpdate:modelValue": ($event) => visible.value = $event,
                              placement: "right-start",
                              trigger: "click",
                              transfer: true
                            }, {
                              content: withCtx(() => [
                                createVNode(associate, {
                                  ref_key: "associateRef",
                                  ref: associateRef,
                                  onClose: ($event) => visible.value = false,
                                  onGetContent: getContent
                                }, null, 8, ["onClose"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "bottom",
                                  onClick: withModifiers(($event) => visible.value = false, ["stop"])
                                }, [
                                  createVNode("div", {
                                    class: "btn",
                                    onClick: withModifiers(toCreate, ["stop"])
                                  }, [
                                    createVNode("img", { src: _imports_0 }),
                                    createVNode("div", null, "AI\u5E2E\u6211\u751F\u6210\u63CF\u8FF0")
                                  ], 8, ["onClick"]),
                                  createVNode("div", { class: "tag" }, [
                                    createVNode("img", { src: _imports_2 }),
                                    createVNode("div", null, toDisplayString(consumeEnergy.value) + "\u7535\u91CF", 1)
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(_component_Form, { "label-width": 100 }, {
                  default: withCtx(() => [
                    createVNode(_component_FormItem, {
                      label: "\u804C\u4F4D\u540D\u79F0",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event,
                          style: { "width": "320px" },
                          placeholder: "\u804C\u4F4D\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u804C\u4F4D\u8981\u6C42" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              style: { "width": "500px" },
                              modelValue: params.value.description,
                              "onUpdate:modelValue": ($event) => params.value.description = $event,
                              type: "textarea",
                              rows: 6,
                              placeholder: "\u804C\u4F4D\u8981\u6C42"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_Poptip, {
                              modelValue: visible.value,
                              "onUpdate:modelValue": ($event) => visible.value = $event,
                              placement: "right-start",
                              trigger: "click",
                              transfer: true
                            }, {
                              content: withCtx(() => [
                                createVNode(associate, {
                                  ref_key: "associateRef",
                                  ref: associateRef,
                                  onClose: ($event) => visible.value = false,
                                  onGetContent: getContent
                                }, null, 8, ["onClose"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "bottom",
                                  onClick: withModifiers(($event) => visible.value = false, ["stop"])
                                }, [
                                  createVNode("div", {
                                    class: "btn",
                                    onClick: withModifiers(toCreate, ["stop"])
                                  }, [
                                    createVNode("img", { src: _imports_0 }),
                                    createVNode("div", null, "AI\u5E2E\u6211\u751F\u6210\u63CF\u8FF0")
                                  ], 8, ["onClick"]),
                                  createVNode("div", { class: "tag" }, [
                                    createVNode("img", { src: _imports_2 }),
                                    createVNode("div", null, toDisplayString(consumeEnergy.value) + "\u7535\u91CF", 1)
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/modal/positions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const positions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a207604"]]);

export { positions as default };
//# sourceMappingURL=positions-f3ee7fa8.mjs.map
