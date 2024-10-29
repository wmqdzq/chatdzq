import { a as _export_sfc, g as getRouting, b as useCookie, i as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, toRefs, onUnmounted, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "weixinScan",
  __ssrInlineRender: true,
  props: {
    active: {}
  },
  emits: ["update:active"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const { Modal } = ipkg;
    const resultHint = ref("");
    const routing = getRouting();
    const router = useRouter();
    const isBind = ref(false);
    const { proxy } = getCurrentInstance();
    const weixinUrl = ref("");
    const weixinTime = ref(null);
    const seconds = ref(0);
    const isExpired = ref(false);
    const timerId = ref(null);
    const loading = ref(false);
    const authtoken = useCookie("authtoken");
    const params = ref({
      captchaCode: "",
      phone: "",
      registerCode: "",
      ticket: "",
      time: 90,
      btnloading: false,
      single: false
    });
    toRefs(props);
    clearInterval(timerId.value);
    clearInterval(weixinTime.value);
    const chooseWeixin = () => {
      clearInterval(weixinTime.value);
      isBind.value = false;
      isExpired.value = false;
      weixinUrl.value = "";
      params.value.single = false;
      proxy.$api.getLoginQrcode({
        channelType: "WECHAT"
      }).then((res) => {
        params.value.ticket = res.data.ticket;
        seconds.value = res.data.seconds;
        weixinUrl.value = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + params.value.ticket;
        weixinTime.value = setInterval(() => {
          seconds.value = Number(seconds.value) - 3;
          if (seconds.value <= 0) {
            clearInterval(weixinTime.value);
            isExpired.value = true;
            return;
          }
          proxy.$api.longPollingForScanQrCode({
            ticket: params.value.ticket
          }).then((json) => {
            if (json.data.bindWechatState == "INTI") {
              console.log("\u521D\u59CB");
            }
            if (json.data.bindWechatState == "SCAN_QRCORE") {
              clearInterval(weixinTime.value);
              isBind.value = true;
            }
            if (json.data.bindWechatState == "BIND") {
              authtoken.value = JSON.stringify(json.data);
              clearInterval(weixinTime.value);
              if (useCookie("secretKey").value) {
                let data = {
                  inviteCode: useCookie("secretKey").value,
                  loginCode: json.data.loginCode
                };
                proxy.$api.aggregatedAddTeamUser(data).then((res1) => {
                  if (!proxy.$isEmpty(res1.data.resultHint)) {
                    setTimeout(() => {
                      Modal.confirm({
                        okText: "\u6211\u77E5\u9053\u4E86",
                        cancelText: "",
                        content: res1.data.resultHint
                      });
                    }, 3e3);
                  }
                });
                useCookie("secretKey").value = null;
              }
              toJump();
            }
          });
        }, 3e3);
      });
    };
    const toJump = () => {
      if (routing.fullPath) {
        router.push(routing.fullPath);
      } else {
        router.push("/");
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
    const onSubmit = () => {
      if (proxy.$isEmpty(params.value.phone)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7");
        return;
      }
      if (proxy.$isEmpty(params.value.registerCode)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");
        return;
      }
      if (!params.value.single) {
        proxy.$Message.error("\u8BF7\u540C\u610F\u670D\u52A1\u534F\u8BAE");
        return;
      }
      loading.value = true;
      let data = {
        phone: params.value.phone,
        ticket: params.value.ticket,
        registerCode: params.value.registerCode,
        secretKey: useCookie("secretKey").value ? useCookie("secretKey").value : ""
      };
      proxy.$api.loginBindphone(data).then((res) => {
        loading.value = false;
        resultHint.value = res.data.resultHint;
        authtoken.value = JSON.stringify(res.data);
        useCookie("secretKey").value = null;
        toJump();
      }).catch((res) => {
        loading.value = false;
      });
    };
    __expose({
      chooseWeixin
    });
    onUnmounted(() => {
      clearInterval(weixinTime.value);
    });
    const imgCode = ref();
    const getCodeImg = () => {
      if (params.value.phone.length == 11) {
        imgCode.value.getCodeImg(params.value.phone, "BING_PHONE");
      }
    };
    const sendCode = () => {
      if (proxy.$isEmpty(params.value.phone))
        return proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7");
      if (proxy.$isEmpty(imgCode.value.captchaCode))
        return proxy.$Message.error("\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801");
      params.value.btnloading = true;
      let data = {
        captchaCode: imgCode.value.captchaCode,
        account: params.value.phone,
        sendCodeType: "BING_PHONE"
      };
      proxy.$api.tenant_sendRegisterCode(data).then(() => {
        clearInterval(timerId.value);
        proxy.$Message.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001,\u8BF7\u6CE8\u610F\u67E5\u6536");
        params.value.btnloading = false;
        timerId.value = setInterval(() => {
          params.value.time = Number(params.value.time) - 1;
          if (params.value.time == 0) {
            params.value.time = 90;
            clearInterval(timerId.value);
          }
        }, 1e3);
      }).catch(() => {
        params.value.btnloading = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_Icon = resolveComponent("Icon");
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "weixin" }, _attrs))} data-v-8e008b20>`);
      if (!isBind.value) {
        _push(`<!--[--><div class="weixin-top" data-v-8e008b20><div data-v-8e008b20>\u5FAE\u4FE1\u626B\u7801\u4E00\u952E\u767B\u5F55/\u6CE8\u518C</div><a data-v-8e008b20>\u4F7F\u7528\u624B\u673A\u53F7\u767B\u5F55</a></div><div class="weixin-qrcode" data-v-8e008b20>`);
        _push(ssrRenderComponent(_component_Spin, {
          size: "large",
          fix: "",
          show: weixinUrl.value ? false : true
        }, null, _parent));
        if (weixinUrl.value) {
          _push(`<img${ssrRenderAttr("src", weixinUrl.value)} data-v-8e008b20>`);
        } else {
          _push(`<!---->`);
        }
        if (isExpired.value) {
          _push(`<div class="weixin-expired" data-v-8e008b20><div data-v-8e008b20>`);
          _push(ssrRenderComponent(_component_Icon, {
            type: "md-repeat",
            size: "30"
          }, null, _parent));
          _push(`<div class="name" data-v-8e008b20>\u4E8C\u7EF4\u7801\u5931\u6548\uFF0C\u8BF7\u70B9\u51FB\u91CD\u8BD5</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="weixin-bottom" data-v-8e008b20><div data-v-8e008b20>\u4F7F\u7528\u5FAE\u4FE1\u626B\u7801-\u5173\u6CE8\u516C\u4F17\u53F7\u767B\u5F55/\u6CE8\u518C</div></div><!--]-->`);
      } else {
        _push(`<!--[--><div class="weixin-title" data-v-8e008b20>\u7ED1\u5B9A\u624B\u673A\u53F7</div><div class="form" data-v-8e008b20>`);
        _push(ssrRenderComponent(_component_Form, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Input, {
                      modelValue: params.value.phone,
                      "onUpdate:modelValue": ($event) => params.value.phone = $event,
                      maxlength: 11,
                      size: "large",
                      placeholder: "\u624B\u673A\u53F7",
                      onOnChange: getCodeImg
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Input, {
                        modelValue: params.value.phone,
                        "onUpdate:modelValue": ($event) => params.value.phone = $event,
                        maxlength: 11,
                        size: "large",
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
                    _push3(`<div class="code" data-v-8e008b20${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Input, {
                      size: "large",
                      modelValue: params.value.registerCode,
                      "onUpdate:modelValue": ($event) => params.value.registerCode = $event,
                      placeholder: "\u9A8C\u8BC1\u7801"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, {
                      size: "large",
                      disabled: params.value.time >= 90 ? false : true,
                      loading: params.value.btnloading,
                      onClick: sendCode,
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
                          modelValue: params.value.registerCode,
                          "onUpdate:modelValue": ($event) => params.value.registerCode = $event,
                          placeholder: "\u9A8C\u8BC1\u7801"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_Button, {
                          size: "large",
                          disabled: params.value.time >= 90 ? false : true,
                          loading: params.value.btnloading,
                          onClick: sendCode,
                          class: "btn"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(params.value.time >= 90 ? "\u83B7\u53D6\u9A8C\u8BC1\u7801" : params.value.time + "s\u540E\u91CD\u65B0\u83B7\u53D6"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "loading"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormItem, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      type: "primary",
                      size: "large",
                      onClick: onSubmit,
                      loading: loading.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u767B\u5F55/\u6CE8\u518C`);
                        } else {
                          return [
                            createTextVNode("\u767B\u5F55/\u6CE8\u518C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="agree" data-v-8e008b20${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Checkbox, {
                      modelValue: params.value.single,
                      "onUpdate:modelValue": ($event) => params.value.single = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`<div data-v-8e008b20${_scopeId2}>\u767B\u5F55\u6216\u6CE8\u518C\u5373\u4EE3\u8868\u540C\u610F</div>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(routing).configuration.userServiceLink
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-8e008b20${_scopeId3}>\u7528\u6237\u534F\u8BAE</div>`);
                        } else {
                          return [
                            createVNode("div", null, "\u7528\u6237\u534F\u8BAE")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div data-v-8e008b20${_scopeId2}>\u548C</div>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(routing).configuration.privacyPolicy
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-8e008b20${_scopeId3}>\u9690\u79C1\u653F\u7B56</div>`);
                        } else {
                          return [
                            createVNode("div", null, "\u9690\u79C1\u653F\u7B56")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_component_Button, {
                        class: "btn",
                        type: "primary",
                        size: "large",
                        onClick: onSubmit,
                        loading: loading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u767B\u5F55/\u6CE8\u518C")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode("div", { class: "agree" }, [
                        createVNode(_component_Checkbox, {
                          modelValue: params.value.single,
                          "onUpdate:modelValue": ($event) => params.value.single = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", null, "\u767B\u5F55\u6216\u6CE8\u518C\u5373\u4EE3\u8868\u540C\u610F"),
                        createVNode(_component_NuxtLink, {
                          to: unref(routing).configuration.userServiceLink
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, "\u7528\u6237\u534F\u8BAE")
                          ]),
                          _: 1
                        }, 8, ["to"]),
                        createVNode("div", null, "\u548C"),
                        createVNode(_component_NuxtLink, {
                          to: unref(routing).configuration.privacyPolicy
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, "\u9690\u79C1\u653F\u7B56")
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
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
                      modelValue: params.value.phone,
                      "onUpdate:modelValue": ($event) => params.value.phone = $event,
                      maxlength: 11,
                      size: "large",
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
                    createVNode("div", { class: "code" }, [
                      createVNode(_component_Input, {
                        size: "large",
                        modelValue: params.value.registerCode,
                        "onUpdate:modelValue": ($event) => params.value.registerCode = $event,
                        placeholder: "\u9A8C\u8BC1\u7801"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Button, {
                        size: "large",
                        disabled: params.value.time >= 90 ? false : true,
                        loading: params.value.btnloading,
                        onClick: sendCode,
                        class: "btn"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(params.value.time >= 90 ? "\u83B7\u53D6\u9A8C\u8BC1\u7801" : params.value.time + "s\u540E\u91CD\u65B0\u83B7\u53D6"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_FormItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Button, {
                      class: "btn",
                      type: "primary",
                      size: "large",
                      onClick: onSubmit,
                      loading: loading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u767B\u5F55/\u6CE8\u518C")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode("div", { class: "agree" }, [
                      createVNode(_component_Checkbox, {
                        modelValue: params.value.single,
                        "onUpdate:modelValue": ($event) => params.value.single = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", null, "\u767B\u5F55\u6216\u6CE8\u518C\u5373\u4EE3\u8868\u540C\u610F"),
                      createVNode(_component_NuxtLink, {
                        to: unref(routing).configuration.userServiceLink
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, "\u7528\u6237\u534F\u8BAE")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode("div", null, "\u548C"),
                      createVNode(_component_NuxtLink, {
                        to: unref(routing).configuration.privacyPolicy
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, "\u9690\u79C1\u653F\u7B56")
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/components/weixinScan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const weixinScan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e008b20"]]);

export { weixinScan as default };
//# sourceMappingURL=weixinScan-738fcb21.mjs.map
