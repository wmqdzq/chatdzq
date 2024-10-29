import { j as defineStore, a as _export_sfc, g as getRouting, k as useRequestHeaders, b as useCookie, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, reactive, onUnmounted, watch, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './robot-20021510.mjs';
import { useRouter } from 'vue-router';
import { c as contentCom } from './content-977f7524.mjs';
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
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';

const _imports_1 = "data:image/png;base64,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";
var interval;
function gettoken(item, state) {
  let authtoken = state ? useCookie("authtokenWap").value : useCookie("authtoken").value;
  if (authtoken !== void 0) {
    return authtoken[item];
  } else {
    return "0000";
  }
}
const useWebSocketStore = defineStore("webSocket", {
  state: () => ({
    websock: null,
    chatMsg: "",
    reconnectCount: 0,
    maxReconnectCount: 5,
    // 最大重连次数
    initInfo: {
      isWap: false,
      sk: "",
      robotCode: "",
      targetUser: ""
    }
  }),
  getters: {
    getChatMsg: (state) => state.chatMsg
  },
  actions: {
    WEBSOCKET_INIT() {
      var domainString = window.location.hostname;
      var domainArray = domainString.split(".");
      let wssUrl = domainArray[domainArray.length - 2] + "." + domainArray[domainArray.length - 1];
      const wsuri = "wss://wss." + wssUrl + "/space/aiCustomerService";
      this.websock = new WebSocket(wsuri);
      console.log("WebSocket \u8FDE\u63A5\u4E2D...");
      var source = "";
      const headers = useRequestHeaders();
      {
        source = headers == null ? void 0 : headers.host;
      }
      let data = {
        "tntInstId": gettoken("tntInstId", this.initInfo.isWap),
        "requestToken": "",
        "tntBizId": gettoken("tntBizId", this.initInfo.isWap),
        //登录后获取
        "reqParam": {},
        "extendParams": {},
        "assertToken": gettoken("assertToken", this.initInfo.isWap),
        //租户
        "sourceVersion": "1.0.0",
        "operatorId": "",
        //登录后获取
        "userToken": gettoken("userToken", this.initInfo.isWap),
        //消费者
        "systemCurrentTime": (/* @__PURE__ */ new Date()).getTime(),
        //时间戳
        "pageNo": 1,
        "pageSize": 20,
        "currentPageMaxId": 0,
        "source": source,
        "channel": "WEB",
        "msgSource": ""
      };
      this.websock.onopen = () => {
        console.log("\u8FDE\u63A5\u6210\u529F\uFF01");
        data.reqParam = {
          "sk": this.initInfo.sk ? this.initInfo.sk : "",
          "robotCode": this.initInfo.robotCode ? this.initInfo.robotCode : "",
          "targetUser": this.initInfo.targetUser ? this.initInfo.targetUser : "",
          "content": "",
          "type": "INIT"
        };
        console.log(data);
        this.websock.send(JSON.stringify(data));
        interval = setInterval(() => {
          data.reqParam = {
            "sk": this.initInfo.sk ? this.initInfo.sk : "",
            "robotCode": this.initInfo.robotCode ? this.initInfo.robotCode : "",
            "targetUser": this.initInfo.targetUser ? this.initInfo.targetUser : "",
            "content": "",
            "type": "PULSE"
          };
          console.log("\u5FC3\u8DF3");
          this.websock.send(JSON.stringify(data));
        }, 5e3);
        this.reconnectCount = 0;
      };
      this.websock.onmessage = (e) => {
        console.log("ws\u63A5\u6536\uFF01");
        console.log(JSON.parse(e.data));
        this.chatMsg = e;
      };
      this.websock.onerror = (e) => {
        console.log("ws\u9519\u8BEF!");
        console.log(e);
      };
      this.websock.onclose = (e) => {
        console.log("ws\u5173\u95ED\uFF01");
        console.log(e);
        this.chatMsg = e;
        clearInterval(interval);
        this.websock = null;
        if (e.code != 1e3) {
          if (this.reconnectCount < this.maxReconnectCount) {
            setTimeout(() => {
              this.WEBSOCKET_RECONNECT();
            }, 3e3);
          }
        }
      };
    },
    WEBSOCKET_SEND(data) {
      console.log("ws\u53D1\u9001\uFF01");
      console.log(data);
      if (this.websock !== null && this.websock.readyState === WebSocket.OPEN) {
        this.websock.send(data);
      } else {
        console.error("WebSocket is already in CLOSING or CLOSED state.");
      }
    },
    WEBSOCKET_CLOSE() {
      console.log("\u4E3B\u52A8\u5173\u95ED");
      if (this.websock != null) {
        clearInterval(interval);
        this.websock.close();
      }
    },
    WEBSOCKET_RECONNECT() {
      console.log("\u6B63\u5728\u91CD\u8FDE...");
      this.WEBSOCKET_INIT();
      this.reconnectCount++;
    },
    setInitInfo(item) {
      this.initInfo = item;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const webSocketStore = useWebSocketStore();
    getRouting();
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const chatIndex = ref(0);
    const chatList = ref([]);
    const robotInfo = ref({});
    const content = ref("");
    const robotPromptList = ref([]);
    const registerModel = ref(false);
    let form = reactive({});
    onUnmounted(() => {
      webSocketStore.WEBSOCKET_CLOSE();
    });
    const initWebSocket = () => {
      var _a2;
      var _a;
      onChatRecordList();
      webSocketStore.setInitInfo({
        isWap: true,
        sk: (_a2 = (_a = router.currentRoute.value.params) == null ? void 0 : _a.id) != null ? _a2 : "",
        robotCode: webSocketStore.initInfo ? webSocketStore.initInfo.robotCode : "",
        targetUser: webSocketStore.initInfo ? webSocketStore.initInfo.targetUser : ""
      });
      webSocketStore.WEBSOCKET_CLOSE();
      webSocketStore.WEBSOCKET_INIT(true);
    };
    const onUserSubmit = () => {
      if (proxy.$isEmpty(form.userName)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D");
        return;
      }
      if (proxy.$isEmpty(form.accountNumber)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7");
        return;
      }
      proxy.$api.customRegister(form).then((res) => {
        useCookie("authtokenWap").value = JSON.stringify(res.data);
        setTimeout(() => {
          initWebSocket();
        }, 200);
        registerModel.value = false;
      });
    };
    const isLoading = ref(false);
    const searchParams = ref({
      pageNo: 1,
      pageSize: 20,
      sk: ""
    });
    const onChatRecordList = () => {
      var _a2;
      var _a;
      searchParams.value.sk = (_a2 = (_a = router.currentRoute.value.params) == null ? void 0 : _a.id) != null ? _a2 : "";
      proxy.$api.chatRecordListWap(searchParams.value).then((res) => {
        chatList.value.unshift(...res.data.reverse());
        if (res.data.length > 0) {
          isLoading.value = false;
        }
        if (res.data.length < 20) {
          isLoading.value = true;
        }
        if (searchParams.value.pageNo == 1) {
          setTimeout(() => {
            rollBottom();
          }, 200);
        }
        if (chatList.value.length == res.totalCount) {
          if (!proxy.$isEmpty(robotInfo.value.welcomeContent) || !proxy.$isEmpty(robotInfo.value.promptText)) {
            chatList.value.unshift({
              content: robotInfo.value.welcomeContent || "",
              type: "SYSTEM",
              chatType: "CHAT"
            });
          }
        }
      }, (res) => {
        registerModel.value = true;
        useCookie("authtokenWap").value = null;
      });
    };
    ref(null);
    const rollBottom = async () => {
    };
    const gettoken2 = (item) => {
      let authtoken = useCookie("authtokenWap").value;
      if (authtoken !== void 0) {
        return authtoken[item];
      } else {
        return "0000";
      }
    };
    const onChat = () => {
      var _a2;
      var _a;
      const headers = useRequestHeaders();
      if (proxy.$isEmpty(content.value)) {
        proxy.$Message.error("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u95EE\u9898\u5462\uFF01");
        return;
      }
      let str = JSON.parse(JSON.stringify(content.value));
      str = str ? str.replace(/[\r\n]/g, "").trim() : "";
      if (proxy.$isEmpty(str)) {
        proxy.$Message.error("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u95EE\u9898\u5462\uFF01");
        return;
      }
      var source = "";
      {
        source = headers == null ? void 0 : headers.host;
      }
      let data = {
        "tntInstId": gettoken2("tntInstId"),
        "requestToken": "",
        "tntBizId": gettoken2("tntBizId"),
        //登录后获取
        "reqParam": {},
        "extendParams": {},
        "assertToken": gettoken2("assertToken"),
        //租户
        "sourceVersion": "1.0.0",
        "operatorId": "",
        //登录后获取
        "userToken": gettoken2("userToken"),
        //消费者
        "systemCurrentTime": (/* @__PURE__ */ new Date()).getTime(),
        //时间戳
        "pageNo": 1,
        "pageSize": 20,
        "currentPageMaxId": 0,
        "source": source,
        "channel": "WEB",
        "msgSource": ""
      };
      data.reqParam = {
        "sk": (_a2 = (_a = router.currentRoute.value.params) == null ? void 0 : _a.id) != null ? _a2 : "",
        "robotCode": "",
        "targetUser": "",
        "content": content.value,
        "type": "NORMAL"
      };
      setTimeout(() => {
        content.value = "";
      }, 4e3);
      chatList.value.push({
        content: data.reqParam.content,
        type: "USER",
        chatType: "CHAT"
      });
      rollBottom();
      webSocketStore.WEBSOCKET_SEND(JSON.stringify(data));
    };
    watch(() => webSocketStore.getChatMsg, (item) => {
      if (item && item.data) {
        let data = JSON.parse(item.data);
        if (data.type == "WELCOME") {
          chatList.value.push({
            content: data.content,
            type: "SYSTEM",
            chatType: data.type
          });
          return;
        }
        if (data.type == "SYNC") {
          return;
        }
        if (data.startFlag) {
          chatList.value.push({
            content: "",
            type: data.selfFlag ? "USER" : "SYSTEM",
            chatType: "CHAT"
          });
          chatIndex.value = chatList.value.length - 1;
        } else {
          if (data.type == "ACK") {
            content.value = "";
          } else {
            chatList.value[chatIndex.value].content += data.content;
            rollBottom();
          }
        }
      }
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_Image = resolveComponent("Image");
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Modal = resolveComponent("Modal");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "preview" }, _attrs))} data-v-a101d62d><div class="preview-top" data-v-a101d62d>${ssrInterpolate(robotInfo.value.name)}</div><div class="preview-content" data-v-a101d62d><div class="preview-content-main" data-v-a101d62d><!--[-->`);
      ssrRenderList(chatList.value, (item, index) => {
        _push(`<!--[-->`);
        if (item.chatType != "WELCOME") {
          _push(`<div class="${ssrRenderClass([item.type == "SYSTEM" ? "left" : "right", "content"])}" data-v-a101d62d><div class="logo" data-v-a101d62d>`);
          if (item.type == "SYSTEM") {
            _push(`<!--[-->`);
            if (robotInfo.value.robotLogo) {
              _push(`<img${ssrRenderAttr("src", robotInfo.value.robotLogo)} data-v-a101d62d>`);
            } else {
              _push(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-a101d62d>`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<img src="https://hz-oss.chatdzq.com/file/common/static-web/d638965e-dd7b-4fe9-b03b-3f39c3342d1a.png" data-v-a101d62d>`);
          }
          _push(`</div><div class="${ssrRenderClass([item.type == "SYSTEM" ? "blue" : "", "name"])}" style="${ssrRenderStyle({ "background-color": item.type == "USER" ? "#17A382" : "#fff" })}" data-v-a101d62d>`);
          if (_ctx.$isEmpty(item.content)) {
            _push(ssrRenderComponent(_component_Spin, null, null, _parent));
          } else {
            _push(`<!--[-->`);
            if (item.chatType == "CHAT") {
              _push(ssrRenderComponent(contentCom, {
                isShowTagView: false,
                content: item.content
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            if (item.chatType == "DRAW") {
              _push(ssrRenderComponent(_component_Image, {
                preview: true,
                "preview-list": [item.content],
                class: "cImage-img",
                src: item.content,
                fit: "cover"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            if (item.chatType == "VIDEO") {
              _push(`<video width="658" height="444" controls${ssrRenderAttr("src", item.content)} data-v-a101d62d></video>`);
            } else {
              _push(`<!---->`);
            }
            if (index == 0 && robotPromptList.value.length > 0) {
              _push(`<div data-v-a101d62d><h3 data-v-a101d62d>\u60A8\u53EF\u4EE5\u544A\u8BC9\u6211\u9700\u8981\u521B\u4F5C\u4EC0\u4E48\u5185\u5BB9\uFF1F\u6BD4\u5982\u4E0B\u9762\uFF1A</h3><ul data-v-a101d62d><!--[-->`);
              ssrRenderList(robotPromptList.value, (item2, index2) => {
                _push(`<li data-v-a101d62d>${ssrInterpolate(item2)}</li>`);
              });
              _push(`<!--]--></ul></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="preview-content-bottom" data-v-a101d62d>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: content.value,
        "onUpdate:modelValue": ($event) => content.value = $event,
        autosize: { minRows: 2, maxRows: 4 },
        onOnEnter: onChat,
        placeholder: "\u8BF7\u8F93\u5165\u60A8\u60F3\u8981\u54A8\u8BE2\u7684\u95EE\u9898"
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-a101d62d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                onClick: onChat,
                src: _imports_1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              class: "chatRegister",
              modelValue: registerModel.value,
              "onUpdate:modelValue": ($event) => registerModel.value = $event,
              closable: false,
              "mask-closable": false
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 data-v-a101d62d${_scopeId2}>\u8054\u7CFB\u6211\u4EEC</h2>`);
                } else {
                  return [
                    createVNode("h2", null, "\u8054\u7CFB\u6211\u4EEC")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    size: "large",
                    long: "",
                    onClick: onUserSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u8BA4`);
                      } else {
                        return [
                          createTextVNode("\u786E\u8BA4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      type: "primary",
                      size: "large",
                      long: "",
                      onClick: onUserSubmit
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-a101d62d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    size: "large",
                    class: "mb-10",
                    modelValue: unref(form).userName,
                    "onUpdate:modelValue": ($event) => unref(form).userName = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    size: "large",
                    modelValue: unref(form).accountNumber,
                    "onUpdate:modelValue": ($event) => unref(form).accountNumber = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { style: { "text-align": "center" } }, [
                      createVNode(_component_Input, {
                        size: "large",
                        class: "mb-10",
                        modelValue: unref(form).userName,
                        "onUpdate:modelValue": ($event) => unref(form).userName = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Input, {
                        size: "large",
                        modelValue: unref(form).accountNumber,
                        "onUpdate:modelValue": ($event) => unref(form).accountNumber = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                class: "chatRegister",
                modelValue: registerModel.value,
                "onUpdate:modelValue": ($event) => registerModel.value = $event,
                closable: false,
                "mask-closable": false
              }, {
                header: withCtx(() => [
                  createVNode("h2", null, "\u8054\u7CFB\u6211\u4EEC")
                ]),
                footer: withCtx(() => [
                  createVNode(_component_Button, {
                    type: "primary",
                    size: "large",
                    long: "",
                    onClick: onUserSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u8BA4")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode("div", { style: { "text-align": "center" } }, [
                    createVNode(_component_Input, {
                      size: "large",
                      class: "mb-10",
                      modelValue: unref(form).userName,
                      "onUpdate:modelValue": ($event) => unref(form).userName = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_Input, {
                      size: "large",
                      modelValue: unref(form).accountNumber,
                      "onUpdate:modelValue": ($event) => unref(form).accountNumber = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/chat/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a101d62d"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-1c72ad54.mjs.map
