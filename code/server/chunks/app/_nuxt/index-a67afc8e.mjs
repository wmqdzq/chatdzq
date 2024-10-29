import { a as _export_sfc, b as useCookie, g as getRouting, i as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, nextTick, onUnmounted, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABXCAYAAACAw4LhAAAAAXNSR0IArs4c6QAAA/1JREFUeF7t3N1x1DAQB/CV796hhKQCPHYKCBVACaQDqCChAkIFBCpIGiDhPTLuAErIYx6SE6PhzFx8srQryWdy/t9LJnO7kvyzzh+SbEXrz9HR0akx5qD7f5d/tdYnnPpGbuOV1vrS1466rs+J6IUnZqsM1QWXZXlQFMW1UmrnyFrrf+0IbOA1ER1zdoY0xhjzsWmas0D9v4ho0MdVxpMNmwp5NsB2702BPCvgKZBnB7xr5FkC7xJ5tsC7Qp41cIe8WCy+SC991vEv7bnTl5sRuCWiu5h2GmN+FEVx48tdrVZeA6XUudb682YZrOvPmAZ3OVVVvVNKeRuWC1gp9fr29taLNLQtVVWdKaVOfdtqjDlpmuZC4gHgtRaAiaiua++dHHrwwG8LhwjJQacXi2NwAh4nFcAcpUCMHb9o2/a3KwzAeYBftm3rvP4EcAZgXxE5gcuyLJfLpb1xcX4eHh7aoR0d2kzOZZpSqjXG+G5kLrTWX5/tjUYIKeV7DnCo/OCAe6iAmO9z9uCY+rk5AOZKRcYBOBKOmwZgrlRk3LMF5szxcW+VQ3bruqJmnZVSb4jobagO3/eTnORsg0LIuYA5J1QP0KUx5soHqJT6RESDl4mTAYeQ/wfgnayLSPl5cHKHejKAOXrMGBcygJl43LA+MoC5coK4TWQAC+AkoR1y0zSHkryh2JSriL04yblgfGPJUnQAS8V68Yz1wXZpadSNhl1PERiKpKIoTpbLpXNiwTb1/v7+rj9cOvq0faLpk/TQrHLOulxlPT4+Hg7N3AzVvVfA69U53kXUxhg79R/1mT0wEdkZBe/jCHVdmyhdIgIwgGP7zt88xjEYPTiFGMApeoxcADOQUkKqqnqvlHrlKeOmP23ej63rOnadsz3JfZAuC3hWl2kpO2eqXACPLA9gAI8sMHLx6MEAHllg5OLRgwEsEsjRYVyDQdxyt3K5iaKtnCLYzowsFovvRJQ0/eSaOqrr2vueiG57J114sgv0HMgADuypVGQAM34KKcgAZgDbkFhkADOBY5EBLACOQQawEFiKDOAIYAkygCOBucgATgDmILuA7VSV79GBrkn2lTT9N67sza2yxN13CcdZZSmpa5bAvp4MYEn3ibitBnBGYFdPBnBm4D4ygEcA3kQ2xnwLvUdY0oTZnuRcSN2juNKXz/nAASzpjhGxAI5Ak6QAWKIVEQvgCDRJCoAlWhGxAI5Ak6QAWKIVEQtgIVpZlsdFUdgnSrfsVqvVT/tmvM0iASwHHlxBtPcre4RW0eFD48kAjibdTnQhAzgjMHeoE8fgRPTNnowenIg5lN4hu4Y60YMzoQ8NdQI4E/BQMQAG8MgCIxePHgzgkQVGLv4PVYLVhdF1rb0AAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { Modal } = ipkg;
    const { proxy } = getCurrentInstance();
    const weixinScanRef = ref();
    const router = useRouter();
    const active = ref(0);
    const authtoken = useCookie("authtoken");
    const routing = getRouting();
    const resultHint = ref("");
    const params = ref({
      captchaCode: "",
      accountNumber: "",
      password: "",
      code: "",
      time: 90,
      single: false,
      btnloading: false
    });
    ref(0);
    ref("");
    ref("");
    const errorCode = ref(0);
    const loading = ref(false);
    const verifyRef = ref(null);
    const timerId = ref(null);
    ref(null);
    clearInterval(timerId.value);
    routing.setIsShowMessage(true);
    useCookie("authtoken").value = null;
    const loginBanner = ref(loginbg);
    const imgCode = ref();
    watch(() => active.value, (item) => {
      nextTick(() => {
        if (item === 0 && params.value.accountNumber.length == 11) {
          imgCode.value.getCodeImg(params.value.accountNumber, "LOGIN");
        }
      });
    }, { deep: true, immediate: true });
    watch(() => params.value.accountNumber, (item) => {
      nextTick(() => {
        if (active.value === 0 && item.length === 11) {
          imgCode.value.getCodeImg(params.value.accountNumber, "LOGIN");
        }
      });
    }, { deep: true, immediate: true });
    const sendCode = proxy.$debounce(() => {
      if (proxy.$isEmpty(params.value.accountNumber))
        return proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7");
      if (proxy.$isEmpty(imgCode.value.captchaCode))
        return proxy.$Message.error("\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801");
      params.value.btnloading = true;
      let data = {
        captchaCode: imgCode.value.captchaCode,
        account: params.value.accountNumber,
        sendCodeType: "LOGIN"
      };
      proxy.$api.tenant_sendRegisterCode(data).then(() => {
        clearInterval(timerId.value);
        proxy.$Message.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001,\u8BF7\u6CE8\u610F\u67E5\u6536");
        timerId.value = setInterval(() => {
          params.value.time = Number(params.value.time) - 1;
          params.value.btnloading = false;
          if (params.value.time == 0) {
            params.value.time = 90;
            clearInterval(timerId.value);
          }
        }, 1e3);
      }).catch(() => {
        params.value.btnloading = false;
      });
    }, 500);
    const onSubmit = proxy.$debounce(() => {
      if (proxy.$isEmpty(params.value.accountNumber)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7");
        return;
      }
      if (active == 1 && proxy.$isEmpty(params.value.password)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u5BC6\u7801");
        return;
      }
      if (active == 0 && proxy.$isEmpty(params.value.code)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");
        return;
      }
      if (!params.value.single) {
        proxy.$Message.error("\u8BF7\u540C\u610F\u7528\u6237\u670D\u52A1\u534F\u8BAE");
        return;
      }
      loading.value = true;
      let data = {
        accountNumber: params.value.accountNumber,
        password: active.value == 0 ? "" : params.value.password,
        registerCode: active.value == 0 ? params.value.code : "",
        secretKey: useCookie("secretKey").value ? useCookie("secretKey").value : ""
      };
      proxy.$api.tenant_tenantLogin(data).then((res) => {
        loading.value = false;
        resultHint.value = res.data.resultHint;
        authtoken.value = JSON.stringify(res.data);
        useCookie("secretKey").value = null;
        toJump(res.data);
      }).catch((res) => {
        loading.value = false;
        if (res.code == 1111) {
          errorCode.value = res.code;
          return;
        }
        if (res.code == 1112) {
          verifyRef.value.show();
          return;
        }
        if (res.code == 10007) {
          useCookie("secretKey").value = null;
        }
      });
    }, 500);
    const toJump = (record) => {
      if (record.isTenant) {
        if (routing.fullPath) {
          if (routing.fullPath == "/") {
            if (routing.defJumpUrl.indexOf("/share") != -1) {
              router.go(-1);
            } else {
              router.push("/");
            }
          } else {
            if (routing.defJumpUrl.indexOf("/share") != -1) {
              router.go(-1);
            } else {
              router.push("/");
            }
          }
        } else {
          if (routing.defJumpUrl.indexOf("/share") != -1) {
            router.go(-1);
          } else {
            router.push("/");
          }
        }
      } else {
        if (routing.fullPath) {
          if (routing.fullPath.indexOf("enterprise") != -1 || routing.fullPath.indexOf("/ai") != -1) {
            router.push("/");
          } else {
            if (routing.defJumpUrl.indexOf("/share") != -1) {
              router.go(-1);
            } else {
              router.push("/");
            }
          }
        } else {
          router.push("/");
        }
      }
      if (!proxy.$isEmpty(resultHint.value)) {
        setTimeout(() => {
          Modal.confirm({
            okText: "\u6211\u77E5\u9053\u4E86",
            cancelText: "",
            content: resultHint.value
          });
        }, 3e3);
      }
      routing.setTopNavList(proxy);
    };
    onUnmounted(() => {
      clearInterval(timerId.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_van_tabs = resolveComponent("van-tabs");
      const _component_van_tab = resolveComponent("van-tab");
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_Checkbox = resolveComponent("Checkbox");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "login",
        style: "background-image: url(" + loginBanner.value + ");"
      }, _attrs))} data-v-7b8c5910><div class="login-main" data-v-7b8c5910>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo" data-v-7b8c5910${_scopeId}><img class="login-main-img"${ssrRenderAttr("src", unref(routing).configuration.loginLogo)} data-v-7b8c5910${_scopeId}></div>`);
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
      _push(`<div class="login-area" data-v-7b8c5910>`);
      if (active.value != 3) {
        _push(`<div class="weixin-login" data-v-7b8c5910><div class="weixin-login-top" data-v-7b8c5910><div data-v-7b8c5910>\u626B\u7801\u767B\u5F55\u66F4\u65B9\u4FBF</div></div><img class="scan"${ssrRenderAttr("src", _imports_0)} data-v-7b8c5910></div>`);
      } else {
        _push(`<!---->`);
      }
      if (active.value != 3) {
        _push(`<!--[--><div class="title" data-v-7b8c5910>`);
        _push(ssrRenderComponent(_component_van_tabs, {
          active: active.value,
          "onUpdate:active": ($event) => active.value = $event,
          "title-active-color": "#0090F7",
          "line-height": "4px",
          "line-width": "56px"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_van_tab, { title: "\u77ED\u4FE1\u767B\u5F55" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_van_tab, { title: "\u5BC6\u7801\u767B\u5F55" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_van_tab, { title: "\u77ED\u4FE1\u767B\u5F55" }),
                createVNode(_component_van_tab, { title: "\u5BC6\u7801\u767B\u5F55" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="form" data-v-7b8c5910>`);
        _push(ssrRenderComponent(_component_Form, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Input, {
                      modelValue: params.value.accountNumber,
                      "onUpdate:modelValue": ($event) => params.value.accountNumber = $event,
                      maxlength: 11,
                      oninput: params.value.accountNumber = params.value.accountNumber.replace(/[^\d]/g, ""),
                      size: "large",
                      placeholder: "\u624B\u673A\u53F7"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        modelValue: params.value.accountNumber,
                        "onUpdate:modelValue": ($event) => params.value.accountNumber = $event,
                        maxlength: 11,
                        oninput: params.value.accountNumber = params.value.accountNumber.replace(/[^\d]/g, ""),
                        size: "large",
                        placeholder: "\u624B\u673A\u53F7"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "oninput"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (active.value == 1) {
                _push2(ssrRenderComponent(_component_FormItem, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Input, {
                        size: "large",
                        modelValue: params.value.password,
                        "onUpdate:modelValue": ($event) => params.value.password = $event,
                        type: "password",
                        placeholder: "\u5BC6\u7801"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Input, {
                          size: "large",
                          modelValue: params.value.password,
                          "onUpdate:modelValue": ($event) => params.value.password = $event,
                          type: "password",
                          placeholder: "\u5BC6\u7801"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (active.value == 0) {
                _push2(ssrRenderComponent(_component_FormItem, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(ImageCode, {
                        ref_key: "imgCode",
                        ref: imgCode
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="code" data-v-7b8c5910${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Input, {
                        size: "large",
                        modelValue: params.value.code,
                        "onUpdate:modelValue": ($event) => params.value.code = $event,
                        placeholder: "\u9A8C\u8BC1\u7801"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, {
                        size: "large",
                        disabled: params.value.time < 90,
                        loading: params.value.btnloading,
                        onClick: unref(sendCode),
                        class: "btn"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(params.value.time >= 90 ? "\u83B7\u53D6\u9A8C\u8BC1\u7801" : params.value.time + "s\u540E\u91CD\u65B0\u83B7\u53D6")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(params.value.time >= 90 ? "\u83B7\u53D6\u9A8C\u8BC1\u7801" : params.value.time + "s\u540E\u91CD\u65B0\u83B7\u53D6"), 1)
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
                            modelValue: params.value.code,
                            "onUpdate:modelValue": ($event) => params.value.code = $event,
                            placeholder: "\u9A8C\u8BC1\u7801"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_Button, {
                            size: "large",
                            disabled: params.value.time < 90,
                            loading: params.value.btnloading,
                            onClick: unref(sendCode),
                            class: "btn"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(params.value.time >= 90 ? "\u83B7\u53D6\u9A8C\u8BC1\u7801" : params.value.time + "s\u540E\u91CD\u65B0\u83B7\u53D6"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading", "onClick"])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      modelValue: params.value.accountNumber,
                      "onUpdate:modelValue": ($event) => params.value.accountNumber = $event,
                      maxlength: 11,
                      oninput: params.value.accountNumber = params.value.accountNumber.replace(/[^\d]/g, ""),
                      size: "large",
                      placeholder: "\u624B\u673A\u53F7"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "oninput"])
                  ]),
                  _: 1
                }),
                active.value == 1 ? (openBlock(), createBlock(_component_FormItem, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(_component_Input, {
                      size: "large",
                      modelValue: params.value.password,
                      "onUpdate:modelValue": ($event) => params.value.password = $event,
                      type: "password",
                      placeholder: "\u5BC6\u7801"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                active.value == 0 ? (openBlock(), createBlock(_component_FormItem, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(ImageCode, {
                      ref_key: "imgCode",
                      ref: imgCode
                    }, null, 512),
                    createVNode("div", { class: "code" }, [
                      createVNode(_component_Input, {
                        size: "large",
                        modelValue: params.value.code,
                        "onUpdate:modelValue": ($event) => params.value.code = $event,
                        placeholder: "\u9A8C\u8BC1\u7801"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Button, {
                        size: "large",
                        disabled: params.value.time < 90,
                        loading: params.value.btnloading,
                        onClick: unref(sendCode),
                        class: "btn"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(params.value.time >= 90 ? "\u83B7\u53D6\u9A8C\u8BC1\u7801" : params.value.time + "s\u540E\u91CD\u65B0\u83B7\u53D6"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading", "onClick"])
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="name" data-v-7b8c5910><div data-v-7b8c5910><span data-v-7b8c5910>\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF0C</span><span data-v-7b8c5910>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login/register" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u524D\u5F80\u6CE8\u518C`);
            } else {
              return [
                createTextVNode("\u524D\u5F80\u6CE8\u518C")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span></div><div data-v-7b8c5910>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login/forget" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-7b8c5910${_scopeId}>\u5FD8\u8BB0\u5BC6\u7801?</div>`);
            } else {
              return [
                createVNode("div", null, "\u5FD8\u8BB0\u5BC6\u7801?")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          type: "primary",
          size: "large",
          loading: loading.value,
          onClick: unref(onSubmit)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u767B\u5F55`);
            } else {
              return [
                createTextVNode("\u767B\u5F55")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="agree" data-v-7b8c5910>`);
        _push(ssrRenderComponent(_component_Checkbox, {
          modelValue: params.value.single,
          "onUpdate:modelValue": ($event) => params.value.single = $event
        }, null, _parent));
        _push(`<div data-v-7b8c5910>\u767B\u5F55\u6216\u6CE8\u518C\u5373\u4EE3\u8868\u540C\u610F</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(routing).configuration.userServiceLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-7b8c5910${_scopeId}>\u7528\u6237\u670D\u52A1\u534F\u8BAE</div>`);
            } else {
              return [
                createVNode("div", null, "\u7528\u6237\u670D\u52A1\u534F\u8BAE")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div data-v-7b8c5910>\u548C</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(routing).configuration.privacyPolicy
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-7b8c5910${_scopeId}>\u9690\u79C1\u653F\u7B56</div>`);
            } else {
              return [
                createVNode("div", null, "\u9690\u79C1\u653F\u7B56")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(ssrRenderComponent(weixinScan, {
          ref_key: "weixinScanRef",
          ref: weixinScanRef,
          active: active.value,
          "onUpdate:active": ($event) => active.value = $event
        }, null, _parent));
      }
      _push(`</div><div class="login-bottom" data-v-7b8c5910><div data-v-7b8c5910>\u641C\u7D22\u65E0\u9650\u53EF\u80FD\uFF01</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b8c5910"]]);

export { index as default };
//# sourceMappingURL=index-a67afc8e.mjs.map
