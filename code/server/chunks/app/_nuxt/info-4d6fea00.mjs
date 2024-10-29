import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, computed, onUnmounted, watch, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './icon12-7adf6b47.mjs';
import { _ as _imports_1 } from './icon13-dd60f48f.mjs';
import { _ as _imports_1$1 } from './icon14-9b74ca74.mjs';
import { _ as _imports_2 } from './delete-79bda725.mjs';
import { _ as _imports_4 } from './icon10-8a0daf5c.mjs';
import { _ as _imports_1$3 } from './hot-bc2e3ef0.mjs';
import { useRouter } from 'vue-router';
import { _ as _imports_1$2 } from './robot-20021510.mjs';
import { r as recordCom, _ as _sfc_main$1 } from './recordNew-bd12a5c8.mjs';
import { i as inputCom } from './templateNew-2bc535c4.mjs';
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
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './previewImg-8e12aab7.mjs';
import './cCreate-a5f9051b.mjs';
import './addBase-d16bc2bd.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './edit1-d50fac04.mjs';
import './copy-d1ce3f41.mjs';
import './switch-59f92d8c.mjs';
import './content-977f7524.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './avatar-8802d9a1.mjs';
import './barrage-e0763a91.mjs';
import './close3-d080d282.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "info",
  __ssrInlineRender: true,
  setup(__props) {
    const recordComRef = ref();
    const routing = getRouting();
    const { proxy } = getCurrentInstance();
    ref(null);
    const robotCode = ref("");
    const consumeEnergy = ref(null);
    const robotType = ref("");
    const robotInfo = ref("");
    ref("");
    const modelCode = ref("");
    const chatList = ref([]);
    const groupIndex = ref(null);
    const groupId = ref("");
    const groupList = ref([]);
    const listData = ref([]);
    const cateShowIndex = ref(9);
    ref(null);
    const cateHeight = ref(120);
    ref([]);
    const robotPromptList = ref([]);
    const modelList = ref([]);
    const content = ref("");
    ref("");
    const isLoading = ref(false);
    const promptState = ref(false);
    const router = useRouter();
    const loadMore = ref(true);
    const pageNo = ref(1);
    ref(true);
    ref(false);
    const singleAll = ref(false);
    const welcomeContent = ref("");
    const groupListState = ref(false);
    const shareState = ref(false);
    const recordImgRef = ref(null);
    const searchPage = ref({
      loadMore: true,
      pageNo: 1,
      pageSize: 20
    });
    const configVisible = ref(false);
    const searchState = ref(false);
    const drawState = ref(false);
    const uploadList = ref({});
    const format = ref([]);
    const onRobotInfo = () => {
      let data = {
        "type": "ALMIGHTY_CHAT_ROBOT"
      };
      if (!proxy.$isEmpty(router.currentRoute.value.query.code)) {
        robotCode.value = router.currentRoute.value.query.code;
        data = {
          code: robotCode.value
        };
      }
      proxy.$api.space_robotGetRobotInfo(data).then((res) => {
        consumeEnergy.value = res.data.consumeEnergy;
        robotType.value = res.data.type;
        robotCode.value = res.data.code;
        robotInfo.value = res.data;
        modelCode.value = res.data.llmCode;
        chatList.value = [];
        if (!proxy.$isEmpty(router.currentRoute.value.query.code)) {
          if (!proxy.$isEmpty(res.data.robotPromptText)) {
            robotPromptList.value = res.data.robotPromptText.split("@");
          }
          if (!proxy.$isEmpty(res.data.welcomeContent)) {
            welcomeContent.value = res.data.welcomeContent;
            chatList.value.push({
              content: res.data.welcomeContent,
              type: "SYSTEM",
              chatType: "CHAT",
              robotPromptList: robotPromptList.value || []
            });
          }
        }
        if (res.data.llmCode == "20240517001") {
          format.value = ["txt", "doc", "docx", "pptx", "pdf", "xls", "xlsx", "jpg", "jpeg", "png"];
        } else {
          format.value = ["txt", "doc", "docx", "pptx", "pdf", "xls", "xlsx"];
        }
        if (!proxy.$isEmpty(llmType.value)) {
          onSubmit();
          return;
        }
        getData();
      });
    };
    const onAllChange = () => {
      singleAll.value = !singleAll.value;
      modelList.value.forEach((item) => {
        item.single = singleAll.value;
      });
    };
    const onEditMultiModel = () => {
      let data = {
        code: robotInfo.value.code,
        llmCodeList: []
      };
      modelList.value.forEach((item) => {
        if (item.single) {
          data.llmCodeList.push(item.code);
        }
      });
      proxy.$api.editMultiModelRobotLlmModel(data).then((res) => {
        configVisible.value = false;
        onRobotInfo();
      });
    };
    const getData = () => {
      if (proxy.$isLogin()) {
        pageNo.value = 1;
        groupList.value = [];
        onInitGroup();
        onGroupList();
      }
    };
    const promptCode = ref("");
    const promptListData = ref([]);
    const onRobotPromptList = () => {
      let data = {
        typeList: ["DOCUMENT_INTERPRETATION", "HOT_CONSULTATION", "COPYWRITING_CREATION"],
        loadTagInfoFlag: true
      };
      proxy.$api.queryTagTemplateList(data).then((res) => {
        promptListData.value = res.data;
      });
    };
    const toGetHis = () => {
      groupListState.value = true;
      onGroupList();
    };
    const onInitGroup = () => {
      routing.abortReadingStream();
      let data = {
        type: robotType.value,
        robotCode: robotCode.value
      };
      proxy.$api.ai_bulidChatGroupId(data).then((res) => {
        groupId.value = res.data;
        groupIndex.value = null;
        if (proxy.$isEmpty(router.currentRoute.value.query.code)) {
          chatList.value = [];
          onRobotPromptList();
        } else {
          if (chatList.value.length > 1) {
            chatList.value = [];
            chatList.value.push({
              content: welcomeContent.value,
              type: "SYSTEM",
              chatType: "CHAT",
              robotPromptList: robotPromptList.value || []
            });
          }
        }
      });
    };
    const onGroupList = () => {
      if (proxy.$isLogin()) {
        let robotData = {
          robotCode: robotCode.value,
          type: robotType.value,
          pageNo: pageNo.value,
          pageSize: 20
        };
        if (loadMore.value && !proxy.$isEmpty(robotCode.value)) {
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
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        pageNo.value = pageNo.value + 1;
        onGroupList();
      }
    }, 300);
    const onGroupLogList = () => {
      let data = {
        robotCode: robotCode.value,
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
    const onSaveConfig = () => {
      proxy.$api.space_robotModify({
        code: robotCode.value,
        type: robotType.value,
        name: robotInfo.value.name,
        llmCode: robotInfo.value.llmCode,
        hitRate: robotInfo.value.hitRate,
        intelligentContactFlag: robotInfo.value.intelligentContactFlag,
        intelligentAgentRecommendationFlag: robotInfo.value.intelligentAgentRecommendationFlag
      }).then(() => {
        configVisible.value = false;
        onRobotInfo();
        proxy.$Message.success("\u4FEE\u6539\u6210\u529F");
      });
    };
    const onScrollTop = () => {
      isLoading.value = false;
      searchPage.value.pageNo = searchPage.value.pageNo + 1;
      onGroupLogList();
    };
    const onScrollBottom = () => {
      isLoading.value = false;
    };
    const llmType = ref("");
    const getContent = (msg, type, record) => {
      var _a;
      if (proxy.$isEmpty(msg)) {
        return;
      }
      if (type == "DOCUMENT_INTERPRETATION") {
        uploadList.value.fileList = [{
          name: record.name,
          code: record.resourceCode,
          size: (_a = record == null ? void 0 : record.size) != null ? _a : 1
        }];
        content.value = record.promptContent;
        onSubmit();
        return;
      }
      if (type == "HOT_CONSULTATION") {
        robotInfo.value.llmCode = "170";
        content.value = record.promptContent;
        llmType.value = type;
        onSaveConfig();
        return;
      }
      content.value = msg;
      onSubmit();
    };
    const lastAiRecordCode = ref("");
    const onAnswer = (item) => {
      lastAiRecordCode.value = item.recordCode;
      content.value = item.request;
      onSubmit();
    };
    const onEditSubmitChat = (item) => {
      uploadList.value.imgList = item.imgList;
      uploadList.value.fileList = item.fileList;
      content.value = item.content;
      onSubmit();
    };
    const onSubmit = (form) => {
      routing.abortReadingStream();
      let data = {
        content: content.value,
        groupId: groupId.value,
        robotCode: robotCode.value,
        attachmentFileCodeList: [],
        type: robotType.value,
        lastAiRecordCode: lastAiRecordCode.value
        //重新回答的code
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
      llmType.value = "";
      content.value = "";
      lastAiRecordCode.value = "";
      routing.setAiChat(proxy, data);
    };
    computed(() => routing.getChatMsg);
    onUnmounted(() => {
      routing.setIsShowHis(false);
    });
    watch(
      () => routing.getChatMsg,
      (item) => {
        if (item && item.content) {
          console.log(item);
          proxy.$processChatData(chatList.value, item, robotType.value == "MULTIPLE_MODELS_CHAT" ? true : false);
        }
      },
      { deep: true }
    );
    watch(
      () => routing.electric,
      (item) => {
        pageNo.value = 1;
        loadMore.value = true;
        groupIndex.value = 0;
        if (robotType.value) {
          onGroupList();
        }
      },
      { deep: true }
    );
    watch(() => groupListState.value, () => {
      routing.setIsShowHis(groupListState.value);
    }, { immediate: true });
    watch(() => robotInfo.value.llmCode, (item) => {
      if (item == "170") {
        searchState.value = true;
        drawState.value = false;
      } else if (item == "126") {
        drawState.value = true;
        searchState.value = false;
      } else {
        searchState.value = false;
        drawState.value = false;
      }
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Button = resolveComponent("Button");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Icon = resolveComponent("Icon");
      const _component_Checkbox = resolveComponent("Checkbox");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-main" }, _attrs))} data-v-b49700e0><div class="layout-main-right" data-v-b49700e0><div class="layout-main-right-content chatArea" data-v-b49700e0><div class="chatAreaNav clearfix" data-v-b49700e0>`);
      if (!groupListState.value) {
        _push(`<div class="chatOperation" data-v-b49700e0>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, {
                content: "\u521B\u5EFA\u65B0\u5BF9\u8BDD",
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b49700e0${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        onClick: getData,
                        src: _imports_0,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Tooltip, {
                content: "\u5386\u53F2\u8BB0\u5F55",
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b49700e0${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        onClick: toGetHis,
                        src: _imports_1,
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
                  content: "\u521B\u5EFA\u65B0\u5BF9\u8BDD",
                  placement: "right"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      onClick: getData,
                      src: _imports_0,
                      alt: ""
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tooltip, {
                  content: "\u5386\u53F2\u8BB0\u5F55",
                  placement: "right"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      onClick: toGetHis,
                      src: _imports_1,
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
        _push(`<div class="chatGroupList" data-v-b49700e0><div class="area" data-v-b49700e0><h2 data-v-b49700e0> \u5386\u53F2\u8BB0\u5F55 <img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-b49700e0></h2><div class="add" data-v-b49700e0>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "large",
          onClick: getData
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`+ \u521B\u5EFA\u65B0\u5BF9\u8BDD`);
            } else {
              return [
                createTextVNode("+ \u521B\u5EFA\u65B0\u5BF9\u8BDD")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="info-left-list" data-v-b49700e0><!--[-->`);
        ssrRenderList(groupList.value, (item, i) => {
          _push(`<div class="${ssrRenderClass([groupIndex.value == i ? "active" : "", "list-item pointer"])}" data-v-b49700e0><div class="content" data-v-b49700e0><div class="content-title text-hide" data-v-b49700e0>${ssrInterpolate(item.request)}</div><div class="content-name" data-v-b49700e0>${ssrInterpolate(item.gmtCreate)}</div></div><img class="deleteIco"${ssrRenderAttr("src", _imports_2)} data-v-b49700e0></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="chatContainer" data-v-b49700e0>`);
      if (robotType.value == "MULTIPLE_MODELS_CHAT") {
        _push(ssrRenderComponent(_component_Poptip, {
          modelValue: configVisible.value,
          "onUpdate:modelValue": ($event) => configVisible.value = $event,
          class: "multipleModelSelectPoptip clearfix",
          placement: "bottom-end",
          width: "241"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="multipleModelList" data-v-b49700e0${_scopeId}><div class="list" data-v-b49700e0${_scopeId}><!--[-->`);
              ssrRenderList(modelList.value, (item, index) => {
                _push2(`<div class="clearfix item" data-v-b49700e0${_scopeId}><div class="name fl" data-v-b49700e0${_scopeId}>${ssrInterpolate(item.name)} <span data-v-b49700e0${_scopeId}>(-${ssrInterpolate(item.consumeEnergy)}\u7535\u91CF)</span></div>`);
                _push2(ssrRenderComponent(_component_Checkbox, {
                  class: "check fr",
                  modelValue: item.single,
                  "onUpdate:modelValue": ($event) => item.single = $event
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate("")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(""))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div><div class="i-230 mt-10" data-v-b49700e0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Checkbox, {
                class: "fl",
                modelValue: singleAll.value,
                "onUpdate:modelValue": ($event) => singleAll.value = $event,
                onClick: ($event) => onAllChange()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u5168\u9009`);
                  } else {
                    return [
                      createTextVNode("\u5168\u9009")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: "fr mr-8",
                type: "primary",
                size: "small",
                onClick: onEditMultiModel
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
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "multipleModelList" }, [
                  createVNode("div", { class: "list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(modelList.value, (item, index) => {
                      return openBlock(), createBlock("div", { class: "clearfix item" }, [
                        createVNode("div", { class: "name fl" }, [
                          createTextVNode(toDisplayString(item.name) + " ", 1),
                          createVNode("span", null, "(-" + toDisplayString(item.consumeEnergy) + "\u7535\u91CF)", 1)
                        ]),
                        createVNode(_component_Checkbox, {
                          class: "check fr",
                          modelValue: item.single,
                          "onUpdate:modelValue": ($event) => item.single = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(""))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]);
                    }), 256))
                  ]),
                  createVNode("div", { class: "i-230 mt-10" }, [
                    createVNode(_component_Checkbox, {
                      class: "fl",
                      modelValue: singleAll.value,
                      "onUpdate:modelValue": ($event) => singleAll.value = $event,
                      onClick: ($event) => onAllChange()
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u5168\u9009")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                    createVNode(_component_Button, {
                      class: "fr mr-8",
                      type: "primary",
                      size: "small",
                      onClick: onEditMultiModel
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u5B9A")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="selectModelList clearfix" data-v-b49700e0${_scopeId}>`);
              if (robotInfo.value.multiModelInfoResVOS) {
                _push2(`<!--[-->`);
                ssrRenderList(robotInfo.value.multiModelInfoResVOS, (item, index) => {
                  _push2(`<div class="item" data-v-b49700e0${_scopeId}>${ssrInterpolate(item.name)} </div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (!configVisible.value) {
                _push2(ssrRenderComponent(_component_Icon, {
                  class: "arrow",
                  type: "ios-arrow-down"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  class: "arrow",
                  type: "ios-arrow-up"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "selectModelList clearfix" }, [
                  robotInfo.value.multiModelInfoResVOS ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(robotInfo.value.multiModelInfoResVOS, (item, index) => {
                    return openBlock(), createBlock("div", { class: "item" }, toDisplayString(item.name) + " ", 1);
                  }), 256)) : createCommentVNode("", true),
                  !configVisible.value ? (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    class: "arrow",
                    type: "ios-arrow-down"
                  })) : (openBlock(), createBlock(_component_Icon, {
                    key: 2,
                    class: "arrow",
                    type: "ios-arrow-up"
                  }))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[robotType.value == "MULTIPLE_MODELS_CHAT" ? "multipleModelChat" : "", shareState.value ? "shareChat" : ""], "dialogue"])}" data-v-b49700e0>`);
      _push(ssrRenderComponent(recordCom, {
        ref_key: "recordComRef",
        ref: recordComRef,
        isLoading: isLoading.value,
        "onUpdate:isLoading": ($event) => isLoading.value = $event,
        robotLogo: robotInfo.value.robotLogo || unref(_imports_1$2),
        chatList: chatList.value,
        robotPromptList: robotPromptList.value,
        onScrollTop,
        onScrollBottom,
        onGetContent: getContent,
        groupId: groupId.value,
        shareState: shareState.value,
        "onUpdate:shareState": ($event) => shareState.value = $event,
        onAnswer,
        onSubmit: onEditSubmitChat
      }, null, _parent));
      _push(`</div>`);
      if (!shareState.value) {
        _push(`<div class="input-area" data-v-b49700e0>`);
        _push(ssrRenderComponent(_component_Tooltip, {
          content: "\u521B\u5EFA\u65B0\u5BF9\u8BDD",
          class: "input-icon input-addChat iconCom",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon" data-v-b49700e0${_scopeId}>`);
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
          format: format.value,
          uploadLists: uploadList.value,
          "onUpdate:uploadLists": ($event) => uploadList.value = $event,
          robotCode: robotInfo.value.code,
          consumeEnergy: consumeEnergy.value,
          onSubmit,
          isUoload: true,
          robotInfo: robotInfo.value
        }, null, _parent));
        _push(ssrRenderComponent(_component_Tooltip, {
          content: "\u627E\u627E\u7075\u611F",
          class: "input-icon iconCom input-prompt",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon" data-v-b49700e0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { type: "ios-bulb-outline" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "icon",
                  onClick: ($event) => promptState.value = true
                }, [
                  createVNode(_component_Icon, { type: "ios-bulb-outline" })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (promptState.value) {
        _push(`<div style="${ssrRenderStyle({ "width": "480px" })}" data-v-b49700e0></div>`);
      } else {
        _push(`<!---->`);
      }
      if (promptState.value) {
        _push(`<div class="promptContainer" data-v-b49700e0><div class="area-container" data-v-b49700e0><div class="del" data-v-b49700e0>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "font20",
          type: "md-close"
        }, null, _parent));
        _push(`</div><h2 data-v-b49700e0><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-b49700e0> \u7075\u611F\u5927\u5168 </h2><div class="cate" data-v-b49700e0><ul class="clearfix" data-v-b49700e0><li class="${ssrRenderClass(promptCode.value == "" ? "active" : "")}" data-v-b49700e0> \u5168\u90E8 </li><!--[-->`);
        ssrRenderList(listData.value, (item, index) => {
          _push(`<!--[-->`);
          if (index < cateShowIndex.value) {
            _push(`<li class="${ssrRenderClass(promptCode.value == item.code ? "active" : "")}" data-v-b49700e0>${ssrInterpolate(item.cateName)}</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--><li class="more" data-v-b49700e0>${ssrInterpolate(cateShowIndex.value == 9 ? "\u66F4\u591A" : "\u6536\u8D77")}</li></ul></div><div class="list" style="${ssrRenderStyle("height: calc(100% - " + cateHeight.value + "px);")}" data-v-b49700e0>`);
        if (listData.value.length > 0) {
          _push(`<ul data-v-b49700e0><!--[-->`);
          ssrRenderList(listData.value, (item, index) => {
            _push(`<!--[-->`);
            if (promptCode.value == "" ? true : promptCode.value == item.code) {
              _push(`<!--[-->`);
              ssrRenderList(item.promptList, (data, idx) => {
                _push(`<li data-v-b49700e0><h3 data-v-b49700e0>${ssrInterpolate(data.promptName)}</h3><p class="text-hide-4" data-v-b49700e0>${ssrInterpolate(data.promptContent)}</p>`);
                if (!_ctx.$isEmpty(data.useCount)) {
                  _push(`<div class="hot" data-v-b49700e0><img${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-b49700e0> ${ssrInterpolate(data.useCount)}</div>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</li>`);
              });
              _push(`<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        ref_key: "recordImgRef",
        ref: recordImgRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/employee/info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const info = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b49700e0"]]);

export { info as default };
//# sourceMappingURL=info-4d6fea00.mjs.map
