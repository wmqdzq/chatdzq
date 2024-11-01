import { _ as __nuxt_component_0 } from './cTopContent-6b788716.mjs';
import { _ as __nuxt_component_1, c as cPrompt } from './index-be66f623.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { r as recordCom } from './recordNew-2087e423.mjs';
import { i as inputCom } from './templateNew-d7bee022.mjs';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
import './workbenchNav-233b0f39.mjs';
import './sPrompt-baa4194f.mjs';
import './close-5dffb58a.mjs';
import './cCreate-9b81dba0.mjs';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import 'vant';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import '@aws-sdk/client-s3';
import './addBase-d16bc2bd.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './avatar-8802d9a1.mjs';
import './index-3a8d75d8.mjs';
import './accountModel-962e2c16.mjs';
import './phone-61ab024f.mjs';
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
import 'defu';
import 'qrcode.vue';
import './pwd-8f00960a.mjs';
import './nickname-667f2327.mjs';
import './employee-a21d8a27.mjs';
import './icon1-7fba1a45.mjs';
import './settings-806b801d.mjs';
import './icon10-8a0daf5c.mjs';
import './hot-bc2e3ef0.mjs';
import './edit1-d50fac04.mjs';
import './del1-dbdd8b76.mjs';
import './icon14-9b74ca74.mjs';
import './delete-79bda725.mjs';
import './previewImg-8e12aab7.mjs';
import './copy-d1ce3f41.mjs';
import './switch-59f92d8c.mjs';
import './content-977f7524.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './barrage-e0763a91.mjs';
import './close3-d080d282.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "talk",
  __ssrInlineRender: true,
  setup(__props) {
    const cPromptRef = ref(null);
    const robotPromptList = ref([]);
    const pageNo = ref(1);
    const routing = getRouting();
    const isLoading = ref(false);
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const robotInfo = ref({});
    const chatList = ref([]);
    const userCodeList = ref([]);
    const groupId = ref("");
    const content = ref("");
    const shareState = ref(false);
    const promptState = ref(false);
    const groupListState = ref(false);
    const groupList = ref([]);
    const groupIndex = ref(null);
    const lastAiRecordCode = ref("");
    const uploadList = ref({});
    const appointRobotCode = ref("");
    const searchPage = ref({
      loadMore: true,
      pageNo: 1,
      pageSize: 20
    });
    const init = () => {
      proxy.$api.space_robotGetRobotInfo({
        code: router.currentRoute.value.query.robotCode
      }).then((res) => {
        robotInfo.value = res.data;
        robotPromptList.value = res.data.robotPromptText ? res.data.robotPromptText.split("@") : [];
        if (!proxy.$isEmpty(res.data.welcomeContent)) {
          chatList.value.push({
            content: res.data.welcomeContent,
            type: "SYSTEM",
            chatType: "CHAT",
            robotPromptList: robotPromptList.value
          });
        }
      });
    };
    const toCollect = proxy.$debounce(() => {
      let apiUrl = robotInfo.value.favoriteFlag ? "deleteCategoryRobot" : "collectRobot";
      let data = {
        relationCode: robotInfo.value.collectRelationCode,
        robotCode: robotInfo.value.code
      };
      proxy.$api[apiUrl](data).then((res) => {
        if (!robotInfo.value.favoriteFlag) {
          robotInfo.value.favoriteFlag = true;
          robotInfo.value.collectRelationCode = res.data;
          proxy.$Message.success("\u6210\u529F\u6536\u85CF");
        } else {
          robotInfo.value.favoriteFlag = false;
          robotInfo.value.collectRelationCode = "";
          proxy.$Message.success("\u53D6\u6D88\u6536\u85CF");
        }
      });
    }, 300);
    const onScrollTop = () => {
    };
    const onScrollBottom = () => {
      isLoading.value = false;
    };
    const getContent = (msg) => {
      content.value = msg;
    };
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
    const onEditSubmitChat = (e) => {
      console.log(e);
    };
    const toDel = (id, code) => {
      proxy.$api.deleteBatchAiRecordGroup({
        codeList: [code]
      }).then(() => {
        proxy.$Message.success("\u5DF2\u5220\u9664");
        groupListState.value = false;
      });
    };
    const onSubmit = (form) => {
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
          proxy.$processChatData(chatList.value, item, robotInfo.value.type == "MULTIPLE_MODELS_CHAT" ? true : false);
        }
      });
    };
    const onAnswer = (item) => {
      console.log(item);
      lastAiRecordCode.value = item.recordCode;
      content.value = item.request;
      onSubmit();
    };
    const onPrompt = () => {
      promptState.value = true;
      cPromptRef.value.showFn();
    };
    const onScrollGroupBottom = () => {
      pageNo.value = pageNo.value + 1;
      onGroupList();
    };
    const onSwitchGroup = (id, index) => {
      routing.abortReadingStream();
      groupListState.value = false;
      searchPage.value.pageNo = 1;
      groupId.value = id;
      groupIndex.value = index;
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
    const getData = () => {
      if (proxy.$isLogin()) {
        routing.abortReadingStream();
        chatList.value = [];
        pageNo.value = 1;
        groupList.value = [];
        content.value = "";
        init();
        onInitGroup();
        onGroupList();
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
        if (searchPage.value.loadMore && !proxy.$isEmpty(robotInfo.value.code)) {
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
    const onPromptContent = (item) => {
      content.value = item.promptContent;
      onSubmit();
    };
    init();
    watch(
      () => userCodeList.value,
      (item) => {
        appointRobotCode.value = "";
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cTopContent = __nuxt_component_0;
      const _component_Icon = resolveComponent("Icon");
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Button = resolveComponent("Button");
      const _component_cGroup = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "talk" }, _attrs))} data-v-a421d503>`);
      _push(ssrRenderComponent(_component_cTopContent, {
        type: "personal",
        title: "\u667A\u80FD\u4F53"
      }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="talk-title" style="${ssrRenderStyle({ "margin-right": "10px" })}" data-v-a421d503${_scopeId}><div data-v-a421d503${_scopeId}>${ssrInterpolate(robotInfo.value.name)}</div><div class="talk-star" data-v-a421d503${_scopeId}>`);
            if (!robotInfo.value.favoriteFlag) {
              _push2(ssrRenderComponent(_component_Icon, {
                type: "ios-star-outline",
                onClick: unref(toCollect),
                size: "22",
                class: "pointer"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Icon, {
                type: "md-star",
                onClick: unref(toCollect),
                size: "22",
                color: "#f8ac3a",
                class: "pointer"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "talk-title",
                style: { "margin-right": "10px" }
              }, [
                createVNode("div", null, toDisplayString(robotInfo.value.name), 1),
                createVNode("div", { class: "talk-star" }, [
                  !robotInfo.value.favoriteFlag ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    type: "ios-star-outline",
                    onClick: unref(toCollect),
                    size: "22",
                    class: "pointer"
                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    type: "md-star",
                    onClick: unref(toCollect),
                    size: "22",
                    color: "#f8ac3a",
                    class: "pointer"
                  }, null, 8, ["onClick"]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="talk-content" data-v-a421d503><div class="content-tag" data-v-a421d503>`);
      _push(ssrRenderComponent(_component_Tooltip, {
        content: "\u65B0\u5EFA\u5BF9\u8BDD",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              shape: "circle",
              class: "talkBtn",
              size: "large",
              icon: "md-add-circle",
              onClick: getData
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                shape: "circle",
                class: "talkBtn",
                size: "large",
                icon: "md-add-circle",
                onClick: getData
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Tooltip, {
        content: "\u5386\u53F2\u8BB0\u5F55",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              shape: "circle",
              class: "talkBtn",
              size: "large",
              icon: "md-time",
              onClick: toGetHis
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                shape: "circle",
                class: "talkBtn",
                size: "large",
                icon: "md-time",
                onClick: toGetHis
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="content-dialog" data-v-a421d503><div class="dialog-content" data-v-a421d503><div class="content" data-v-a421d503>`);
      _push(ssrRenderComponent(recordCom, {
        ref: "recordComRef",
        isLoading: isLoading.value,
        "onUpdate:isLoading": ($event) => isLoading.value = $event,
        robotLogo: robotInfo.value.robotLogo || unref(_imports_1),
        chatList: chatList.value,
        onScrollTop,
        onScrollBottom,
        userCodeList: userCodeList.value,
        "onUpdate:userCodeList": ($event) => userCodeList.value = $event,
        onEmployee,
        functionHideList: ["answer", "edit"],
        onGetContent: getContent,
        groupId: groupId.value,
        shareState: shareState.value,
        "onUpdate:shareState": ($event) => shareState.value = $event,
        onAnswer,
        onSubmit: onEditSubmitChat
      }, null, _parent));
      _push(`</div><div class="input" data-v-a421d503>`);
      if (!shareState.value) {
        _push(`<div class="input-area" data-v-a421d503>`);
        _push(ssrRenderComponent(_component_Tooltip, {
          content: "\u521B\u5EFA\u65B0\u5BF9\u8BDD",
          class: "input-icon input-addChat iconCom",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon" data-v-a421d503${_scopeId}>`);
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
          userList: _ctx.userList,
          "onUpdate:userList": ($event) => _ctx.userList = $event,
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
              _push2(`<div class="icon" data-v-a421d503${_scopeId}>`);
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
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(cPrompt, {
        ref_key: "cPromptRef",
        ref: cPromptRef,
        onPrompt: onPromptContent
      }, null, _parent));
      _push(`</div>`);
      if (groupListState.value) {
        _push(`<div class="chatGroupList" data-v-a421d503>`);
        _push(ssrRenderComponent(_component_cGroup, {
          state: groupListState.value,
          "onUpdate:state": ($event) => groupListState.value = $event,
          list: groupList.value,
          onAdd: getData,
          onSwitchGroup,
          onScrollBottom: onScrollGroupBottom,
          onDel: toDel
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (groupListState.value || promptState.value) {
        _push(`<div class="mask" data-v-a421d503></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/train/talk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const talk = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a421d503"]]);

export { talk as default };
//# sourceMappingURL=talk-4cc358fb.mjs.map
