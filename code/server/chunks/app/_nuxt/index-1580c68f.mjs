import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_1, c as cPrompt } from './index-be66f623.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { _ as _imports_1$1 } from './hot-bc2e3ef0.mjs';
import { _ as _imports_1$2 } from './icon13-dd60f48f.mjs';
import { useRouter } from 'vue-router';
import { r as recordCom } from './recordNew-bd12a5c8.mjs';
import { i as inputCom } from './templateNew-2bc535c4.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
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
import './sPrompt-baa4194f.mjs';
import './close-5dffb58a.mjs';
import './icon10-8a0daf5c.mjs';
import './edit1-d50fac04.mjs';
import './del1-dbdd8b76.mjs';
import './icon14-9b74ca74.mjs';
import './delete-79bda725.mjs';
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '@aws-sdk/client-s3';
import './previewImg-8e12aab7.mjs';
import './cCreate-a5f9051b.mjs';
import './addBase-d16bc2bd.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './copy-d1ce3f41.mjs';
import './switch-59f92d8c.mjs';
import './content-977f7524.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './avatar-8802d9a1.mjs';
import './barrage-e0763a91.mjs';
import './close3-d080d282.mjs';

const _imports_0 = "" + buildAssetsURL("nodata.1d5b0aa9.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "noData" }, _attrs))} data-v-e1e98c78><img${ssrRenderAttr("src", _imports_0)} data-v-e1e98c78></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/noData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const noDataCom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e1e98c78"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const routing = getRouting();
    const { proxy } = getCurrentInstance();
    const robotList = ref([]);
    const robotInfo = ref({});
    const groupId = ref("");
    const groupIndex = ref(null);
    const cPromptRef = ref(null);
    const pageNo = ref(1);
    const groupListState = ref(false);
    const groupList = ref([]);
    const loadMore = ref(true);
    const chatList = ref([]);
    const recordComRef = ref(null);
    const content = ref("");
    const uploadList = ref({});
    const lastAiRecordCode = ref("");
    const searchPage = ref({
      loadMore: true,
      pageNo: 1,
      pageSize: 20
    });
    const promptState = ref(false);
    const init = () => {
      onRobotList();
      onRobotInfo();
    };
    const getData = () => {
      if (proxy.$isLogin()) {
        routing.resetStream();
        routing.abortReadingStream();
        chatList.value = [];
        pageNo.value = 1;
        groupList.value = [];
        onInitGroup();
        onGroupList();
      }
    };
    const onRobotList = () => {
      let data = {
        type: "CHAT"
      };
      proxy.$api.queryRecommendDigitalEmployeesRobotList(data).then((res) => {
        robotList.value = res.data;
      });
    };
    const onRobotInfo = () => {
      let data = {
        type: "AI_ASSISTANT"
      };
      proxy.$api.space_robotGetRobotInfo(data).then((res) => {
        robotInfo.value = res.data;
      });
    };
    const onPrompt = () => {
      promptState.value = true;
      cPromptRef.value.showFn();
    };
    const getContent = (msg) => {
    };
    const onPromptContent = (item) => {
      content.value = item.promptContent;
      onSubmit();
    };
    const onAnswer = (item) => {
      lastAiRecordCode.value = item.recordCode;
      content.value = item.request;
      onSubmit();
    };
    const appointRobotCode = ref("");
    const userList = ref([]);
    const userCodeList = ref([]);
    const onEmployee = ({ item, data, request }) => {
      if (item.intentionalAnalysisType == "ROBOT") {
        appointRobotCode.value = data.code;
        userCodeList.value = [];
      } else {
        appointRobotCode.value = "";
        userList.value = [data];
        userCodeList.value = [data.userCode];
      }
      content.value = request;
      onSubmit();
    };
    const onSubmit = (form) => {
      routing.resetStream();
      routing.abortReadingStream();
      let data = {
        content: content.value,
        groupId: groupId.value,
        robotCode: robotInfo.value.code,
        attachmentFileCodeList: [],
        type: robotInfo.value.type,
        lastAiRecordCode: lastAiRecordCode.value,
        //重新回答的code
        userCodeList: userCodeList.value,
        appointRobotCode: appointRobotCode.value
      };
      if (proxy.$isEmpty(lastAiRecordCode.value)) {
        chatList.value.push({
          content: content.value,
          type: "USER",
          chatType: "CHAT",
          imgList: !proxy.$isEmpty(uploadList.value.imgList) ? uploadList.value.imgList : [],
          fileList: !proxy.$isEmpty(uploadList.value.fileList) ? uploadList.value.fileList : []
        });
      }
      if (!proxy.$isEmpty(uploadList.value.imgList)) {
        uploadList.value.imgList.forEach((item) => {
          data.attachmentFileCodeList.push(item.code);
        });
      }
      if (!proxy.$isEmpty(uploadList.value.fileList)) {
        uploadList.value.fileList.forEach((item) => {
          data.attachmentFileCodeList.push(item.code);
        });
      }
      uploadList.value = {
        imgList: [],
        fileList: []
      };
      content.value = "";
      lastAiRecordCode.value = "";
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item && item.content) {
          proxy.$processChatData(chatList.value, item, true);
        }
      });
    };
    const toGetHis = () => {
      groupListState.value = true;
      onGroupList();
    };
    const onGroupList = () => {
      if (proxy.$isLogin()) {
        let robotData = {
          robotCode: robotInfo.value.code,
          type: robotInfo.value.type,
          pageNo: pageNo.value,
          pageSize: 20
        };
        if (loadMore.value && !proxy.$isEmpty(robotInfo.value.code)) {
          proxy.$api.queryAiRecordGroupPageList(robotData).then((res) => {
            let arr = res.data;
            if (pageNo.value > 1) {
              groupList.value = groupList.value.concat(arr);
            } else {
              groupList.value = arr;
            }
            if (res.data && res.data.length == 0) {
              loadMore.value = false;
              return;
            }
          });
        }
      }
    };
    const onScrollGroupBottom = () => {
      pageNo.value = pageNo.value + 1;
      onGroupList();
    };
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        pageNo.value = pageNo.value + 1;
        onGroupList();
      }
    }, 300);
    const onScrollTop = () => {
      isLoading.value = false;
      searchPage.value.pageNo = searchPage.value.pageNo + 1;
      onGroupLogList();
    };
    const onScrollBottom = () => {
      isLoading.value = false;
    };
    const isLoading = ref(false);
    const onSwitchGroup = (id, index2) => {
      routing.resetStream();
      routing.abortReadingStream();
      groupListState.value = false;
      searchPage.value.pageNo = 1;
      groupId.value = id;
      groupIndex.value = index2;
      chatList.value = [];
      searchPage.value.loadMore = true;
      onGroupLogList();
    };
    const onGroupLogList = () => {
      let data = {
        robotCode: robotInfo.value.code,
        groupId: groupId.value,
        pageNo: searchPage.value.pageNo,
        pageSize: searchPage.value.pageSize
      };
      if (searchPage.value.loadMore) {
        proxy.$api.queryNewAiRecordPageList(data).then((res) => {
          if (res.data && res.data.length == 0) {
            searchPage.value.loadMore = false;
            return;
          }
          let arr = [];
          res.data.forEach((item) => {
            if (!proxy.$isEmpty(item.attachmentList)) {
              item.imgList = item.imgList || [];
              item.fileList = item.fileList || [];
              const imageExtensions = ["JPG", "JPEG", "PNG", "GIF", "BMP", "WEBP"];
              item.attachmentList.forEach((data2) => {
                var _a;
                const attachment = {
                  url: data2.sourceUrl,
                  code: data2.code
                };
                console.log(imageExtensions.includes(data2.format));
                if (imageExtensions.includes(data2.format)) {
                  item.imgList.push(attachment);
                } else {
                  item.fileList.push({
                    name: data2.fileName,
                    url: data2.sourceUrl,
                    size: (_a = data2.fileSize) != null ? _a : 1
                  });
                }
              });
            }
          });
          arr.unshift(...res.data.reverse());
          if (searchPage.value.pageNo > 1) {
            chatList.value = arr.concat(chatList.value);
            recordComRef.value.toMediate();
          } else {
            chatList.value = arr;
          }
        });
      }
    };
    const onInitGroup = () => {
      let data = {
        type: robotInfo.value.type,
        robotCode: robotInfo.value.code
      };
      proxy.$api.ai_bulidChatGroupId(data).then((res) => {
        groupId.value = res.data;
        groupIndex.value = null;
      });
    };
    init();
    watch(
      () => routing.electric,
      (item) => {
        pageNo.value = 1;
        loadMore.value = true;
        groupIndex.value = 0;
        onGroupList();
      },
      { deep: true }
    );
    watch(
      () => userCodeList.value,
      (item) => {
        appointRobotCode.value = "";
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_cGroup = __nuxt_component_1;
      const _component_Icon = resolveComponent("Icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "employeePages" }, _attrs))} data-v-c72b650d><div class="employee-list" data-v-c72b650d><div class="title" data-v-c72b650d>\u63A8\u8350\u6570\u5B57\u5458\u5DE5</div>`);
      if (!_ctx.$isEmpty(robotList.value)) {
        _push(`<div class="robotListCom clearfix" data-v-c72b650d><!--[-->`);
        ssrRenderList(robotList.value, (item, index2) => {
          _push(`<div class="${ssrRenderClass([_ctx.btnType == 2 ? "item1" : _ctx.btnType == 3 ? "item2" : "", "item"])}" data-v-c72b650d>`);
          if (item.robotLogo) {
            _push(`<img class="logo"${ssrRenderAttr("src", item.robotLogo)} alt="" data-v-c72b650d>`);
          } else {
            _push(`<img class="logo"${ssrRenderAttr("src", _imports_1)} alt="" data-v-c72b650d>`);
          }
          _push(`<h2 class="text-hide-1" style="${ssrRenderStyle({ "margin-bottom": "0px", "line-height": "20px" })}" data-v-c72b650d>`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Tooltip, {
                  content: item.name,
                  "max-width": "200"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-hide-1" style="${ssrRenderStyle({ "max-width": "264px" })}" data-v-c72b650d${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "text-hide-1",
                          style: { "max-width": "264px" }
                        }, toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Tooltip, {
                    content: item.name,
                    "max-width": "200"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "text-hide-1",
                        style: { "max-width": "264px" }
                      }, toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["content"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h2>`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Tooltip, {
                  content: item.robotRemark,
                  "max-width": "200"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p class="text-hide-1 h23" style="${ssrRenderStyle({ "max-width": "264px" })}" data-v-c72b650d${_scopeId2}>${ssrInterpolate(item.robotRemark)}</p>`);
                    } else {
                      return [
                        createVNode("p", {
                          class: "text-hide-1 h23",
                          style: { "max-width": "264px" }
                        }, toDisplayString(item.robotRemark), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Tooltip, {
                    content: item.robotRemark,
                    "max-width": "200"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        class: "text-hide-1 h23",
                        style: { "max-width": "264px" }
                      }, toDisplayString(item.robotRemark), 1)
                    ]),
                    _: 2
                  }, 1032, ["content"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="ability text-hide-1" data-v-c72b650d><!--[-->`);
          ssrRenderList(item.labelList, (iten, i) => {
            _push(`<div class="ability-tag" data-v-c72b650d>${ssrInterpolate(iten)}</div>`);
          });
          _push(`<!--]--></div><div class="data" data-v-c72b650d>`);
          if (!_ctx.$isEmpty(item.creator)) {
            _push(`<div class="fl" style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-c72b650d>`);
            _push(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Tooltip, {
                    content: item.creator,
                    "max-width": "200"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-c72b650d${_scopeId2}><span class="gray" data-v-c72b650d${_scopeId2}>@</span><span class="companyName text-hide" style="${ssrRenderStyle({ "max-width": "130px" })}" data-v-c72b650d${_scopeId2}>${ssrInterpolate(item.creator)}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                            createVNode("span", { class: "gray" }, "@"),
                            createVNode("span", {
                              class: "companyName text-hide",
                              style: { "max-width": "130px" }
                            }, toDisplayString(item.creator), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Tooltip, {
                      content: item.creator,
                      "max-width": "200"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                          createVNode("span", { class: "gray" }, "@"),
                          createVNode("span", {
                            class: "companyName text-hide",
                            style: { "max-width": "130px" }
                          }, toDisplayString(item.creator), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["content"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="fl" data-v-c72b650d><img class="icon"${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-c72b650d> ${ssrInterpolate(item.hotUseCount)}</div></div><div class="btn" data-v-c72b650d><span class="blue" data-v-c72b650d>\u5BF9\u8BDD</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(noDataCom, { class: "mt-140" }, null, _parent));
      }
      _push(`</div><div class="employee-chat" data-v-c72b650d>`);
      if (!groupListState.value) {
        _push(`<div class="chatOperation" data-v-c72b650d>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, {
                content: "\u5386\u53F2\u8BB0\u5F55",
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-c72b650d${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        onClick: toGetHis,
                        src: _imports_1$2,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Tooltip, {
                  content: "\u5386\u53F2\u8BB0\u5F55",
                  placement: "right"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      onClick: toGetHis,
                      src: _imports_1$2,
                      alt: ""
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
      } else {
        _push(`<!---->`);
      }
      if (groupListState.value) {
        _push(`<div class="chatGroupList" data-v-c72b650d>`);
        _push(ssrRenderComponent(_component_cGroup, {
          state: groupListState.value,
          "onUpdate:state": ($event) => groupListState.value = $event,
          list: groupList.value,
          onAdd: getData,
          onSwitchGroup,
          onScrollBottom: onScrollGroupBottom
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="employee-chat-area" data-v-c72b650d><div class="employee-chat-name" data-v-c72b650d>${ssrInterpolate(robotInfo.value.name)}</div><div class="employee-chat-content" data-v-c72b650d>`);
      _push(ssrRenderComponent(recordCom, {
        ref_key: "recordComRef",
        ref: recordComRef,
        isLoading: isLoading.value,
        "onUpdate:isLoading": ($event) => isLoading.value = $event,
        robotLogo: robotInfo.value.robotLogo || unref(_imports_1),
        chatList: chatList.value,
        onScrollTop,
        onScrollBottom,
        userCodeList: userCodeList.value,
        "onUpdate:userCodeList": ($event) => userCodeList.value = $event,
        onEmployee,
        onGetContent: getContent,
        groupId: groupId.value,
        shareState: _ctx.shareState,
        "onUpdate:shareState": ($event) => _ctx.shareState = $event,
        onAnswer,
        onSubmit: _ctx.onEditSubmitChat
      }, null, _parent));
      if (!_ctx.shareState) {
        _push(`<div class="input-area" data-v-c72b650d>`);
        _push(ssrRenderComponent(_component_Tooltip, {
          content: "\u521B\u5EFA\u65B0\u5BF9\u8BDD",
          class: "input-icon input-addChat iconCom",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon" data-v-c72b650d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                type: "md-add",
                color: "#0090F7"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "icon",
                  onClick: getData
                }, [
                  createVNode(_component_Icon, {
                    type: "md-add",
                    color: "#0090F7"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(inputCom, {
          content: content.value,
          "onUpdate:content": ($event) => content.value = $event,
          format: _ctx.format,
          uploadLists: uploadList.value,
          "onUpdate:uploadLists": ($event) => uploadList.value = $event,
          robotCode: robotInfo.value.code,
          consumeEnergy: robotInfo.value.consumeEnergy,
          onSubmit,
          isUoload: true,
          isAppoint: true,
          robotInfo: robotInfo.value,
          userList: userList.value,
          "onUpdate:userList": ($event) => userList.value = $event,
          userCodeList: userCodeList.value,
          "onUpdate:userCodeList": ($event) => userCodeList.value = $event
        }, null, _parent));
        _push(ssrRenderComponent(_component_Tooltip, {
          content: "\u627E\u627E\u7075\u611F",
          class: "input-icon iconCom input-prompt",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon" data-v-c72b650d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { type: "ios-bulb-outline" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "icon",
                  onClick: onPrompt
                }, [
                  createVNode(_component_Icon, { type: "ios-bulb-outline" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(cPrompt, {
        ref_key: "cPromptRef",
        ref: cPromptRef,
        onPrompt: onPromptContent
      }, null, _parent));
      _push(`</div>`);
      if (groupListState.value || promptState.value) {
        _push(`<div class="mask" data-v-c72b650d></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/employee/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c72b650d"]]);

export { index as default };
//# sourceMappingURL=index-1580c68f.mjs.map
