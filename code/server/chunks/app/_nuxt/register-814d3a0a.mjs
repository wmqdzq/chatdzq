import { a as _export_sfc, b as useCookie, g as getRouting, i as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, onUnmounted, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import weixinScan from './weixinScan-738fcb21.mjs';
import { l as loginbg } from './loginbg-e1c78617.mjs';
import ipkg from 'view-ui-plus';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const { Modal } = ipkg;
    const { proxy } = getCurrentInstance();
    const weixinScanRef = ref();
    const active = ref(0);
    const router = useRouter();
    const authtoken = useCookie("authtoken");
    const params = ref({
      captchaCode: "",
      accountNumber: "",
      registerCode: "",
      password: "",
      secretKey: useCookie("secretKey").value ? useCookie("secretKey").value : ""
    });
    const routing = getRouting();
    const resultHint = ref("");
    const btnLoading = ref(false);
    const single = ref(false);
    const timerCodeMsg = ref("\u83B7\u53D6\u9A8C\u8BC1\u7801");
    const timer = ref(null);
    const loading = ref(false);
    const passwordVerify = ref("");
    useCookie("authtoken").value = null;
    const loginBanner = ref(loginbg);
    const imgCode = ref();
    const getCodeImg = () => {
      if (params.value.accountNumber.length == 11) {
        imgCode.value.getCodeImg(params.value.accountNumber, "REGISTER");
      }
    };
    const onSmsCode = proxy.$debounce(() => {
      if (timerCodeMsg.value !== "\u83B7\u53D6\u9A8C\u8BC1\u7801")
        return;
      clearInterval(timer.value);
      if (proxy.$isEmpty(params.value.accountNumber))
        return proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7");
      if (proxy.$isEmpty(imgCode.value.captchaCode))
        return proxy.$Message.error("\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801");
      btnLoading.value = true;
      let data = {
        captchaCode: imgCode.value.captchaCode,
        account: params.value.accountNumber,
        sendCodeType: "REGISTER"
      };
      proxy.$api.tenant_sendRegisterCode(data).then((res) => {
        btnLoading.value = false;
        onCountDown();
      }).catch(() => {
        btnLoading.value = false;
      });
    }, 500);
    const onCountDown = () => {
      clearInterval(timer.valuer);
      let sec = 90;
      timer.value = setInterval(() => {
        if (sec !== 0) {
          timerCodeMsg.value = sec + "s";
          sec--;
        } else {
          sec = 90;
          timerCodeMsg.value = "\u83B7\u53D6\u9A8C\u8BC1\u7801";
          clearInterval(timer.value);
        }
      }, 1e3);
    };
    const onSubmit = proxy.$debounce(() => {
      if (proxy.$isEmpty(params.value.accountNumber)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7");
        return;
      }
      if (proxy.$isEmpty(params.value.registerCode)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");
        return;
      }
      if (proxy.$isEmpty(params.value.password)) {
        proxy.$Message.error("\u8BF7\u8BBE\u7F6E\u5BC6\u7801");
        return;
      }
      if (passwordVerify.value !== params.value.password) {
        proxy.$Message.error("\u91CD\u590D\u8F93\u5165\u5BC6\u7801\u9519\u8BEF");
        return;
      }
      if (!single.value) {
        proxy.$Message.error("\u8BF7\u9605\u8BFB\u5E76\u540C\u610F\u7528\u6237\u670D\u52A1\u534F\u8BAE\u3001\u9690\u79C1\u653F\u7B56");
        return;
      }
      loading.value = true;
      proxy.$api.tenant_register(params.value).then((res) => {
        loading.value = false;
        resultHint.value = res.data.resultHint;
        authtoken.value = JSON.stringify(res.data);
        router.push("/");
        useCookie("secretKey").value = null;
        if (!proxy.$isEmpty(resultHint.value)) {
          setTimeout(() => {
            Modal.confirm({
              okText: "\u6211\u77E5\u9053\u4E86",
              cancelText: "",
              content: resultHint.value
            });
          }, 3e3);
        }
      }).catch((res) => {
        if (res.resultCode == 10007) {
          useCookie("secretKey").value = null;
        }
        loading.value = false;
      });
    }, 500);
    onUnmounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_Checkbox = resolveComponent("Checkbox");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "login",
        style: "background-image: url(" + loginBanner.value + ");"
      }, _attrs))} data-v-de0c5c98><div class="login-main" data-v-de0c5c98>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo" data-v-de0c5c98${_scopeId}><img class="login-main-img"${ssrRenderAttr("src", unref(routing).configuration.loginLogo)} data-v-de0c5c98${_scopeId}></div>`);
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
      _push(`<div class="login-area" data-v-de0c5c98>`);
      if (active.value != 3) {
        _push(`<!--[--><div class="title-name" data-v-de0c5c98>\u6CE8\u518C\u65B0\u8D26\u53F7</div><div class="form" data-v-de0c5c98>`);
        _push(ssrRenderComponent(_component_Form, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Input, {
                      size: "large",
                      maxlength: 11,
                      modelValue: params.value.accountNumber,
                      "onUpdate:modelValue": ($event) => params.value.accountNumber = $event,
                      onOnChange: getCodeImg,
                      oninput: params.value.accountNumber = params.value.accountNumber.replace(/[^\d]/g, ""),
                      placeholder: "\u624B\u673A\u53F7"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        size: "large",
                        maxlength: 11,
                        modelValue: params.value.accountNumber,
                        "onUpdate:modelValue": ($event) => params.value.accountNumber = $event,
                        onOnChange: getCodeImg,
                        oninput: params.value.accountNumber = params.value.accountNumber.replace(/[^\d]/g, ""),
                        placeholder: "\u624B\u673A\u53F7"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "oninput"])
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
                    _push3(`<div class="code" data-v-de0c5c98${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Input, {
                      size: "large",
                      modelValue: params.value.registerCode,
                      "onUpdate:modelValue": ($event) => params.value.registerCode = $event,
                      placeholder: "\u9A8C\u8BC1\u7801"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, {
                      size: "large",
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: unref(onSmsCode)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(timerCodeMsg.value)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(timerCodeMsg.value), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(ImageCode, {
                        ref_key: "imgCode",
                        ref: imgCode
                      }, null, 512),
                      createVNode("div", { class: "code" }, [
                        createVNode(_component_Input, {
                          size: "large",
                          modelValue: params.value.registerCode,
                          "onUpdate:modelValue": ($event) => params.value.registerCode = $event,
                          placeholder: "\u9A8C\u8BC1\u7801"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_Button, {
                          size: "large",
                          class: "btn",
                          loading: btnLoading.value,
                          onClick: unref(onSmsCode)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(timerCodeMsg.value), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "onClick"])
                      ])
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
                      modelValue: params.value.password,
                      "onUpdate:modelValue": ($event) => params.value.password = $event,
                      placeholder: "\u8BBE\u7F6E\u5BC6\u7801"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        size: "large",
                        type: "password",
                        modelValue: params.value.password,
                        "onUpdate:modelValue": ($event) => params.value.password = $event,
                        placeholder: "\u8BBE\u7F6E\u5BC6\u7801"
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
                      modelValue: passwordVerify.value,
                      "onUpdate:modelValue": ($event) => passwordVerify.value = $event,
                      placeholder: "\u91CD\u590D\u5BC6\u7801"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        size: "large",
                        type: "password",
                        modelValue: passwordVerify.value,
                        "onUpdate:modelValue": ($event) => passwordVerify.value = $event,
                        placeholder: "\u91CD\u590D\u5BC6\u7801"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      size: "large",
                      maxlength: 11,
                      modelValue: params.value.accountNumber,
                      "onUpdate:modelValue": ($event) => params.value.accountNumber = $event,
                      onOnChange: getCodeImg,
                      oninput: params.value.accountNumber = params.value.accountNumber.replace(/[^\d]/g, ""),
                      placeholder: "\u624B\u673A\u53F7"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "oninput"])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(ImageCode, {
                      ref_key: "imgCode",
                      ref: imgCode
                    }, null, 512),
                    createVNode("div", { class: "code" }, [
                      createVNode(_component_Input, {
                        size: "large",
                        modelValue: params.value.registerCode,
                        "onUpdate:modelValue": ($event) => params.value.registerCode = $event,
                        placeholder: "\u9A8C\u8BC1\u7801"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Button, {
                        size: "large",
                        class: "btn",
                        loading: btnLoading.value,
                        onClick: unref(onSmsCode)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(timerCodeMsg.value), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      size: "large",
                      type: "password",
                      modelValue: params.value.password,
                      "onUpdate:modelValue": ($event) => params.value.password = $event,
                      placeholder: "\u8BBE\u7F6E\u5BC6\u7801"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      size: "large",
                      type: "password",
                      modelValue: passwordVerify.value,
                      "onUpdate:modelValue": ($event) => passwordVerify.value = $event,
                      placeholder: "\u91CD\u590D\u5BC6\u7801"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="name" data-v-de0c5c98><div data-v-de0c5c98><span data-v-de0c5c98>\u5DF2\u6709\u8D26\u53F7,</span><span data-v-de0c5c98>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u7ACB\u5373\u767B\u5F55`);
            } else {
              return [
                createTextVNode("\u7ACB\u5373\u767B\u5F55")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span></div></div>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          type: "primary",
          size: "large",
          loading: loading.value,
          onClick: unref(onSubmit)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u6CE8\u518C`);
            } else {
              return [
                createTextVNode("\u6CE8\u518C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="agree" data-v-de0c5c98>`);
        _push(ssrRenderComponent(_component_Checkbox, {
          modelValue: single.value,
          "onUpdate:modelValue": ($event) => single.value = $event
        }, null, _parent));
        _push(`<div data-v-de0c5c98>\u767B\u5F55\u6216\u6CE8\u518C\u5373\u4EE3\u8868\u540C\u610F</div><a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} data-v-de0c5c98>\u7528\u6237\u670D\u52A1\u534F\u8BAE</a><div data-v-de0c5c98>\u548C</div><a${ssrRenderAttr("href", unref(routing).configuration.privacyPolicy)} data-v-de0c5c98>\u9690\u79C1\u653F\u7B56</a></div><!--]-->`);
      } else {
        _push(ssrRenderComponent(weixinScan, {
          ref_key: "weixinScanRef",
          ref: weixinScanRef,
          active: active.value,
          "onUpdate:active": ($event) => active.value = $event
        }, null, _parent));
      }
      _push(`</div><div class="login-bottom" data-v-de0c5c98><div data-v-de0c5c98>\u641C\u7D22\u65E0\u9650\u53EF\u80FD\uFF01</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de0c5c98"]]);

export { register as default };
//# sourceMappingURL=register-814d3a0a.mjs.map
