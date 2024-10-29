import { a as _export_sfc, g as getRouting, b as useCookie, i as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, withDirectives, vModelText, openBlock, createBlock, toDisplayString, Fragment, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { l as loginbg } from './loginbg-e1c78617.mjs';
import ImageCode from './imageCode-2cad61fa.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
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
import '../../paths.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forget",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const params = ref({
      captchaCode: "",
      step: 1,
      phone: "",
      code: "",
      time: 90,
      pw1: "",
      pw2: ""
    });
    const routing = getRouting();
    const loading = ref(false);
    const { proxy } = getCurrentInstance();
    const timerId = ref(null);
    const formValidate = ref();
    const loginBanner = ref(loginbg);
    useCookie("authtoken").value = null;
    const imgCode = ref();
    const getCodeImg = () => {
      if (params.value.phone.length == 11) {
        imgCode.value.getCodeImg(params.value.phone, "RESETTING_PASSWORD");
      }
    };
    const nextStep = (type) => {
      if (type == 2) {
        if (proxy.$isEmpty(params.value.phone))
          return proxy.$Message.error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7");
        if (proxy.$isEmpty(imgCode.value.captchaCode))
          return proxy.$Message.error("\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801");
        clearInterval(timerId.value);
        formValidate.value.validate((valid) => {
          if (valid) {
            loading.value = true;
            proxy.$api.tenant_sendRegisterCode({
              captchaCode: imgCode.value.captchaCode,
              account: params.value.phone,
              sendCodeType: "RESETTING_PASSWORD"
            }).then(() => {
              loading.value = false;
              params.value.step = type;
              params.value.time = Number(params.value.time) - 1;
              timerId.value = setInterval(() => {
                params.value.time = Number(params.value.time) - 1;
                if (params.value.time == 0) {
                  params.value.time = 90;
                  clearInterval(timerId.value);
                }
              }, 1e3);
            }).catch(() => {
              loading.value = false;
            });
          }
        });
      }
      if (type == 4) {
        if (proxy.$isEmpty(params.value.pw1) || proxy.$isEmpty(params.value.pw2)) {
          proxy.$Message.error("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
          return;
        }
        if (params.value.pw1 != params.value.pw2) {
          proxy.$Message.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");
          return;
        }
        const data = {
          password: params.value.pw1,
          registerCode: params.value.code,
          accountNumber: params.value.phone
        };
        proxy.$api.resettingPassword(data).then(() => {
          proxy.$Message.success("\u5BC6\u7801\u5DF2\u91CD\u7F6E,\u8BF7\u91CD\u65B0\u767B\u5F55");
          router.push("/login");
        });
      }
    };
    const codeInput = () => {
      if (params.value.code.length >= 6) {
        let data = {
          accountNumber: params.value.phone,
          registerCode: params.value.code
        };
        proxy.$api.checkResettingPasswordCode(data).then(() => {
          params.value.step = 3;
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "login",
        style: "background-image: url(" + loginBanner.value + ");"
      }, _attrs))} data-v-8e46ee08><div class="login-main" data-v-8e46ee08>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo" data-v-8e46ee08${_scopeId}><img class="login-main-img"${ssrRenderAttr("src", unref(routing).configuration.loginLogo)} data-v-8e46ee08${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "logo" }, [
                createVNode("img", {
                  class: "login-main-img",
                  src: unref(routing).configuration.loginLogo
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="login-area" data-v-8e46ee08>`);
      if (params.value.step == 1) {
        _push(`<!--[--><div class="title-name" data-v-8e46ee08>\u627E\u56DE\u5BC6\u7801</div><div class="title-sub" data-v-8e46ee08>\u901A\u8FC7\u624B\u673A\u53F7\u9A8C\u8BC1</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (params.value.step == 2) {
        _push(`<!--[--><div class="title-name" data-v-8e46ee08>\u8F93\u5165\u9A8C\u8BC1\u7801</div><div class="title-sub" data-v-8e46ee08>\u9A8C\u8BC1\u7801\u53D1\u9001\u81F3${ssrInterpolate(params.value.phone)}</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (params.value.step == 3) {
        _push(`<div class="title-name" data-v-8e46ee08>\u8BBE\u7F6E\u65B0\u5BC6\u7801</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form" data-v-8e46ee08>`);
      _push(ssrRenderComponent(_component_Form, {
        ref_key: "formValidate",
        ref: formValidate,
        model: params.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (params.value.step == 1) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_FormItem, {
                prop: "phone",
                rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7", trigger: "blur" }]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Input, {
                      size: "large",
                      modelValue: params.value.phone,
                      "onUpdate:modelValue": ($event) => params.value.phone = $event,
                      placeholder: "\u624B\u673A\u53F7",
                      onOnChange: getCodeImg
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        size: "large",
                        modelValue: params.value.phone,
                        "onUpdate:modelValue": ($event) => params.value.phone = $event,
                        placeholder: "\u624B\u673A\u53F7",
                        onOnChange: getCodeImg
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(ImageCode, {
                      ref_key: "imgCode",
                      ref: imgCode
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, {
                      onClick: ($event) => nextStep(2),
                      class: "btn",
                      type: "primary",
                      size: "large",
                      loading: loading.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u4E0B\u4E00\u6B65`);
                        } else {
                          return [
                            createTextVNode("\u4E0B\u4E00\u6B65")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ImageCode, {
                        ref_key: "imgCode",
                        ref: imgCode
                      }, null, 512),
                      createVNode(_component_Button, {
                        onClick: ($event) => nextStep(2),
                        class: "btn",
                        type: "primary",
                        size: "large",
                        loading: loading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u4E0B\u4E00\u6B65")
                        ]),
                        _: 1
                      }, 8, ["onClick", "loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (params.value.step == 2) {
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="codeInput" data-v-8e46ee08${_scopeId2}><input placeholder="\u9A8C\u8BC1\u7801"${ssrRenderAttr("value", params.value.code)} data-v-8e46ee08${_scopeId2}>`);
                    if (params.value.time == 90) {
                      _push3(`<a data-v-8e46ee08${_scopeId2}>\u91CD\u65B0\u53D1\u9001</a>`);
                    } else {
                      _push3(`<div class="time" data-v-8e46ee08${_scopeId2}>${ssrInterpolate(params.value.time)}\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6</div>`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "codeInput" }, [
                        withDirectives(createVNode("input", {
                          placeholder: "\u9A8C\u8BC1\u7801",
                          "onUpdate:modelValue": ($event) => params.value.code = $event,
                          onInput: codeInput
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, params.value.code]
                        ]),
                        params.value.time == 90 ? (openBlock(), createBlock("a", {
                          key: 0,
                          onClick: ($event) => nextStep(2)
                        }, "\u91CD\u65B0\u53D1\u9001", 8, ["onClick"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "time"
                        }, toDisplayString(params.value.time) + "\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6", 1))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (params.value.step == 3) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Input, {
                      size: "large",
                      type: "password",
                      modelValue: params.value.pw1,
                      "onUpdate:modelValue": ($event) => params.value.pw1 = $event,
                      placeholder: "\u8BBE\u7F6E\u65B0\u5BC6\u7801"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        size: "large",
                        type: "password",
                        modelValue: params.value.pw1,
                        "onUpdate:modelValue": ($event) => params.value.pw1 = $event,
                        placeholder: "\u8BBE\u7F6E\u65B0\u5BC6\u7801"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Input, {
                      size: "large",
                      type: "password",
                      modelValue: params.value.pw2,
                      "onUpdate:modelValue": ($event) => params.value.pw2 = $event,
                      placeholder: "\u91CD\u590D\u5BC6\u7801"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        size: "large",
                        type: "password",
                        modelValue: params.value.pw2,
                        "onUpdate:modelValue": ($event) => params.value.pw2 = $event,
                        placeholder: "\u91CD\u590D\u5BC6\u7801"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      onClick: ($event) => nextStep(4),
                      class: "btn",
                      type: "primary",
                      size: "large"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u5B8C\u6210`);
                        } else {
                          return [
                            createTextVNode("\u5B8C\u6210")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Button, {
                        onClick: ($event) => nextStep(4),
                        class: "btn",
                        type: "primary",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5B8C\u6210")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              params.value.step == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_component_FormItem, {
                  prop: "phone",
                  rules: [{ required: true, message: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7", trigger: "blur" }]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      size: "large",
                      modelValue: params.value.phone,
                      "onUpdate:modelValue": ($event) => params.value.phone = $event,
                      placeholder: "\u624B\u673A\u53F7",
                      onOnChange: getCodeImg
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(ImageCode, {
                      ref_key: "imgCode",
                      ref: imgCode
                    }, null, 512),
                    createVNode(_component_Button, {
                      onClick: ($event) => nextStep(2),
                      class: "btn",
                      type: "primary",
                      size: "large",
                      loading: loading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4E0B\u4E00\u6B65")
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ]),
                  _: 1
                })
              ], 64)) : createCommentVNode("", true),
              params.value.step == 2 ? (openBlock(), createBlock(_component_FormItem, { key: 1 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "codeInput" }, [
                    withDirectives(createVNode("input", {
                      placeholder: "\u9A8C\u8BC1\u7801",
                      "onUpdate:modelValue": ($event) => params.value.code = $event,
                      onInput: codeInput
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, params.value.code]
                    ]),
                    params.value.time == 90 ? (openBlock(), createBlock("a", {
                      key: 0,
                      onClick: ($event) => nextStep(2)
                    }, "\u91CD\u65B0\u53D1\u9001", 8, ["onClick"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "time"
                    }, toDisplayString(params.value.time) + "\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6", 1))
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              params.value.step == 3 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      size: "large",
                      type: "password",
                      modelValue: params.value.pw1,
                      "onUpdate:modelValue": ($event) => params.value.pw1 = $event,
                      placeholder: "\u8BBE\u7F6E\u65B0\u5BC6\u7801"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      size: "large",
                      type: "password",
                      modelValue: params.value.pw2,
                      "onUpdate:modelValue": ($event) => params.value.pw2 = $event,
                      placeholder: "\u91CD\u590D\u5BC6\u7801"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Button, {
                      onClick: ($event) => nextStep(4),
                      class: "btn",
                      type: "primary",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u5B8C\u6210")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="name" data-v-8e46ee08><div data-v-8e46ee08></div><div data-v-8e46ee08>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-8e46ee08${_scopeId}>\u8FD4\u56DE\u767B\u5F55</div>`);
          } else {
            return [
              createVNode("div", null, "\u8FD4\u56DE\u767B\u5F55")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/forget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forget = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e46ee08"]]);

export { forget as default };
//# sourceMappingURL=forget-4569115b.mjs.map
