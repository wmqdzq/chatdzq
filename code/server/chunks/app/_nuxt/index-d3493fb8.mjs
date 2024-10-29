import { a as _export_sfc, f as useI18n, g as getRouting, _ as __nuxt_component_1$1$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './sPrompt-baa4194f.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, computed, onUnmounted, watch, resolveComponent, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './icon12-7adf6b47.mjs';
import { _ as _imports_1 } from './icon13-dd60f48f.mjs';
import { _ as _imports_8 } from './hot-a3749366.mjs';
import { _ as _imports_1$1 } from './robot-20021510.mjs';
import { _ as _imports_4 } from './edit1-d50fac04.mjs';
import { _ as _imports_5 } from './del1-dbdd8b76.mjs';
import { useRouter } from 'vue-router';
import { r as recordCom, _ as _sfc_main$1 } from './recordNew-bd12a5c8.mjs';
import { i as inputCom } from './templateNew-2bc535c4.mjs';
import ipkg from 'view-ui-plus';
import { _ as __nuxt_component_1$1, c as cPrompt } from './index-be66f623.mjs';
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
import './close-5dffb58a.mjs';
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
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
import './icon10-8a0daf5c.mjs';
import './hot-bc2e3ef0.mjs';
import './icon14-9b74ca74.mjs';
import './delete-79bda725.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const dropdownVisible = ref(false);
    const cPromptRef = ref();
    ref();
    const recordComRef = ref();
    const { Modal, Poptip } = ipkg;
    const routing = getRouting();
    const { proxy } = getCurrentInstance();
    ref(null);
    const robotCode = ref("");
    const consumeEnergy = ref(null);
    const robotType = ref("");
    const robotInfo = ref("");
    const modelName = ref("");
    const modelCode = ref("");
    const chatList = ref([]);
    const groupIndex = ref(null);
    const groupId = ref("");
    const groupList = ref([]);
    ref([]);
    ref(9);
    ref(null);
    ref(120);
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
    const sPromptRef = ref(null);
    const init = async () => {
      getQueryAiModelList();
      onCommList();
    };
    const onChangeContent = (e) => {
      if (e.length == 0) {
        dropdownVisible.value = false;
      } else {
        onChangeComm(e);
      }
    };
    const commList = ref([]);
    const commListData = ref([]);
    const onCommList = () => {
      let data = {
        "tagTemplateCode": ""
      };
      proxy.$api.queryKeyWordCommonPhrases(data).then((res) => {
        commList.value = res.data;
      });
    };
    const onChangeComm = proxy.$debounce((e) => {
      commListData.value = [];
      commList.value.forEach((item, index2) => {
        if (item.keyWord.indexOf(e) != -1) {
          let itemData = JSON.parse(JSON.stringify(item));
          if (itemData.keyWord) {
            let str = JSON.parse(JSON.stringify(itemData.keyWord)).replace(new RegExp(e, "g"), `<span class="blue">${e}</span>`);
            itemData.keyWord = str;
          }
          commListData.value.push(itemData);
        }
      });
      if (commListData.value.length > 0) {
        dropdownVisible.value = true;
      } else {
        dropdownVisible.value = false;
      }
    }, 300);
    const onCommItem = (item) => {
      content.value = item.content;
      dropdownVisible.value = false;
    };
    const getQueryAiModelList = () => {
      let data = {
        "type": "ALMIGHTY_CHAT_ROBOT",
        "channel": "OPENAI"
      };
      proxy.$api.space_robotQueryAiModelList(data).then((res) => {
        modelList.value = res.data;
        onRobotInfo();
      });
    };
    const onRobotInfo = () => {
      if (router.currentRoute.value.path == "/robot/chat") {
        let data2 = {
          "type": "MULTIPLE_MODELS_CHAT"
        };
        proxy.$api.getMultiModelRobotInfo(data2).then((res) => {
          robotInfo.value = res.data;
          robotType.value = res.data.type;
          robotCode.value = res.data.code;
          consumeEnergy.value = res.data.consumeEnergy;
          modelList.value.filter(
            (item) => item.single = res.data.multiModelInfoResVOS.some((iten) => iten.code === item.code)
          );
          if (modelList.value.length == res.data.multiModelInfoResVOS.length) {
            singleAll.value = true;
          }
          if (!proxy.$isEmpty(res.data.robotPromptText)) {
            robotPromptList.value = res.data.robotPromptText.split("@");
          }
          if (!proxy.$isEmpty(res.data.welcomeContent)) {
            welcomeContent.value = res.data.welcomeContent;
            chatList.value = [];
            chatList.value.push({
              content: res.data.welcomeContent,
              type: "SYSTEM",
              chatType: "CHAT",
              robotPromptList: robotPromptList.value || []
            });
          }
          getData();
        });
        return;
      }
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
        modelList.value.forEach((item) => {
          if (item.code == robotInfo.value.llmCode) {
            modelName.value = item.name;
          }
        });
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
    const chooseAfflatus = () => {
      promptState.value = true;
      setTimeout(() => {
        cPromptRef.value.showFn();
      }, 50);
    };
    const onAddComm = (type, item) => {
      dropdownVisible.value = false;
      promptState.value = true;
      setTimeout(() => {
        let items = null;
        if (type == "edit") {
          items = JSON.parse(JSON.stringify(item));
          items.keyWord = items.keyWord.replace(/<\/?span.*?>/g, "");
        }
        cPromptRef.value.onAddComm(type, items);
      }, 50);
    };
    const delCode = ref("");
    const onDelComm = (item) => {
      delCode.value = item.code;
      sPromptRef.value.showFn();
    };
    const onDeleteComm = () => {
      let data = {
        code: delCode.value
      };
      proxy.$api.delCommonPhrases(data).then(() => {
        proxy.$Message.success(t("aiChat.message.\u5220\u9664\u6210\u529F"));
        delCode.value = "";
        onCommList();
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
    const onSearchState = () => {
      if (searchState.value) {
        robotInfo.value.llmCode = "170";
      } else {
        robotInfo.value.llmCode = modelList.value[0].code;
      }
    };
    const onDrawState = () => {
      if (drawState.value) {
        robotInfo.value.llmCode = "126";
      } else {
        robotInfo.value.llmCode = modelList.value[0].code;
      }
    };
    const getData = () => {
      if (proxy.$isLogin()) {
        pageNo.value = 1;
        groupList.value = [];
        onInitGroup();
        onGroupList();
      }
    };
    const onPromptContent = (item) => {
      content.value = item.promptContent;
      promptState.value = false;
      onSubmit();
    };
    ref("");
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
      if (router.currentRoute.value.path == "/ai/chat" || router.currentRoute.value.path == "/robot/chat") {
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
      }
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
    const onSwitchGroup = (id, index2) => {
      routing.abortReadingStream();
      searchPage.value.pageNo = 1;
      groupId.value = id;
      groupIndex.value = index2;
      chatList.value = [];
      searchPage.value.loadMore = true;
      onGroupLogList();
    };
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
        proxy.$Message.success(t("aiChat.message.\u4FEE\u6539\u6210\u529F"));
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
    const onSubmit = () => {
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
      uploadList.value.imgList = [];
      uploadList.value.fileList = [];
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
        onGroupList();
      },
      { deep: true }
    );
    watch(() => router.currentRoute.value, () => {
      if (router.currentRoute.value.path == "/ai/chat" || router.currentRoute.value.path == "/robot/chat") {
        loadMore.value = true;
        init();
      }
      routing.setTopNavList(proxy);
    }, { deep: true });
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
      const _component_ClientOnly = __nuxt_component_1$1$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Button = resolveComponent("Button");
      const _component_Icon = resolveComponent("Icon");
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_Slider = resolveComponent("Slider");
      const _component_Switch = resolveComponent("Switch");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_sPrompt = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-main" }, _attrs))} data-v-9e9ff9db><div class="layout-main-right" data-v-9e9ff9db><div class="layout-main-right-content chatArea" data-v-9e9ff9db><div class="chatAreaNav clearfix" data-v-9e9ff9db>`);
      if (!groupListState.value) {
        _push(`<div class="chatOperation" data-v-9e9ff9db>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, {
                content: _ctx.$t("aiChat.\u521B\u5EFA\u65B0\u5BF9\u8BDD"),
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-9e9ff9db${_scopeId2}>`);
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
                content: _ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"),
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-9e9ff9db${_scopeId2}>`);
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
                  content: _ctx.$t("aiChat.\u521B\u5EFA\u65B0\u5BF9\u8BDD"),
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
                }, 8, ["content"]),
                createVNode(_component_Tooltip, {
                  content: _ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"),
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
                }, 8, ["content"])
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
        _push(`<div class="chatGroupList" data-v-9e9ff9db>`);
        _push(ssrRenderComponent(__nuxt_component_1$1, {
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
      _push(`</div><div class="chatContainer" data-v-9e9ff9db>`);
      if (unref(proxy).$isEmpty(unref(router).currentRoute.value.query.code) && robotType.value !== "MULTIPLE_MODELS_CHAT") {
        _push(ssrRenderComponent(unref(Poptip), {
          modelValue: configVisible.value,
          "onUpdate:modelValue": ($event) => configVisible.value = $event,
          class: "modelSelectPoptip",
          placement: "bottom",
          width: "476"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="modelConfigArea" data-v-9e9ff9db${_scopeId}><h2 data-v-9e9ff9db${_scopeId}>${ssrInterpolate(_ctx.$t("aiChat.\u6A21\u578B\u8BBE\u7F6E"))}</h2>`);
              _push2(ssrRenderComponent(_component_Form, { "label-position": "top" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_FormItem, { class: "modelList" }, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="title" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.\u6A21\u578B"))}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u6A21\u578B")), 1)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ClientOnly, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Select, {
                                  size: "large",
                                  modelValue: robotInfo.value.llmCode,
                                  "onUpdate:modelValue": ($event) => robotInfo.value.llmCode = $event,
                                  placeholder: _ctx.$t("i.select.placeholder"),
                                  onClick: _ctx.onModelKey
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(modelList.value, (item, index2) => {
                                        _push6(ssrRenderComponent(_component_Option, {
                                          value: item.code,
                                          key: index2
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-9e9ff9db${_scopeId6}>`);
                                              if (item.hotFlag) {
                                                _push7(`<img${ssrRenderAttr("src", _imports_8)} style="${ssrRenderStyle({ "height": "13px", "margin-right": "4px" })}" data-v-9e9ff9db${_scopeId6}>`);
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                              _push7(`<span class="${ssrRenderClass(item.hotFlag ? "hotColor" : "")}" data-v-9e9ff9db${_scopeId6}>${ssrInterpolate(item.name)}</span><span class="gray" data-v-9e9ff9db${_scopeId6}>(-${ssrInterpolate(item.consumeEnergy)} ${ssrInterpolate(_ctx.$t("aiChat.\u7535\u91CF"))})</span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                                  item.hotFlag ? (openBlock(), createBlock("img", {
                                                    key: 0,
                                                    src: _imports_8,
                                                    style: { "height": "13px", "margin-right": "4px" }
                                                  })) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: item.hotFlag ? "hotColor" : ""
                                                  }, toDisplayString(item.name), 3),
                                                  createVNode("span", { class: "gray" }, "(-" + toDisplayString(item.consumeEnergy) + " " + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")) + ")", 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(modelList.value, (item, index2) => {
                                          return openBlock(), createBlock(_component_Option, {
                                            value: item.code,
                                            key: index2
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                                item.hotFlag ? (openBlock(), createBlock("img", {
                                                  key: 0,
                                                  src: _imports_8,
                                                  style: { "height": "13px", "margin-right": "4px" }
                                                })) : createCommentVNode("", true),
                                                createVNode("span", {
                                                  class: item.hotFlag ? "hotColor" : ""
                                                }, toDisplayString(item.name), 3),
                                                createVNode("span", { class: "gray" }, "(-" + toDisplayString(item.consumeEnergy) + " " + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")) + ")", 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Select, {
                                    size: "large",
                                    modelValue: robotInfo.value.llmCode,
                                    "onUpdate:modelValue": ($event) => robotInfo.value.llmCode = $event,
                                    placeholder: _ctx.$t("i.select.placeholder"),
                                    onClick: _ctx.onModelKey
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(modelList.value, (item, index2) => {
                                        return openBlock(), createBlock(_component_Option, {
                                          value: item.code,
                                          key: index2
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                              item.hotFlag ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: _imports_8,
                                                style: { "height": "13px", "margin-right": "4px" }
                                              })) : createCommentVNode("", true),
                                              createVNode("span", {
                                                class: item.hotFlag ? "hotColor" : ""
                                              }, toDisplayString(item.name), 3),
                                              createVNode("span", { class: "gray" }, "(-" + toDisplayString(item.consumeEnergy) + " " + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")) + ")", 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_Select, {
                                  size: "large",
                                  modelValue: robotInfo.value.llmCode,
                                  "onUpdate:modelValue": ($event) => robotInfo.value.llmCode = $event,
                                  placeholder: _ctx.$t("i.select.placeholder"),
                                  onClick: _ctx.onModelKey
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(modelList.value, (item, index2) => {
                                      return openBlock(), createBlock(_component_Option, {
                                        value: item.code,
                                        key: index2
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                            item.hotFlag ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: _imports_8,
                                              style: { "height": "13px", "margin-right": "4px" }
                                            })) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: item.hotFlag ? "hotColor" : ""
                                            }, toDisplayString(item.name), 3),
                                            createVNode("span", { class: "gray" }, "(-" + toDisplayString(item.consumeEnergy) + " " + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")) + ")", 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onClick"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_FormItem, { class: "slider" }, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="title" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.\u751F\u6210\u591A\u6837\u6027"))}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u751F\u6210\u591A\u6837\u6027")), 1)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="slider" data-v-9e9ff9db${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Slider, {
                            min: 0,
                            max: 1,
                            "show-tip": "never",
                            step: 0.2,
                            modelValue: robotInfo.value.hitRate,
                            "onUpdate:modelValue": ($event) => robotInfo.value.hitRate = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="name clearfix" data-v-9e9ff9db${_scopeId3}><div class="fl" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.\u7CBE\u51C6"))}</div><div class="fr" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.\u591A\u6837\u6027"))}</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "slider" }, [
                              createVNode(_component_Slider, {
                                min: 0,
                                max: 1,
                                "show-tip": "never",
                                step: 0.2,
                                modelValue: robotInfo.value.hitRate,
                                "onUpdate:modelValue": ($event) => robotInfo.value.hitRate = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "name clearfix" }, [
                              createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.\u7CBE\u51C6")), 1),
                              createVNode("div", { class: "fr" }, toDisplayString(_ctx.$t("aiChat.\u591A\u6837\u6027")), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_FormItem, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="title" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.\u6280\u80FD"))}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u6280\u80FD")), 1)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="clearfix" data-v-9e9ff9db${_scopeId3}><div class="fl" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.AI\u8054\u7F51\u641C\u7D22"))}</div>`);
                          _push4(ssrRenderComponent(_component_Switch, {
                            class: "fr",
                            modelValue: searchState.value,
                            "onUpdate:modelValue": ($event) => searchState.value = $event,
                            onOnChange: onSearchState
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="clearfix" data-v-9e9ff9db${_scopeId3}><div class="fl" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.AI\u7ED8\u753B"))}</div>`);
                          _push4(ssrRenderComponent(_component_Switch, {
                            class: "fr",
                            modelValue: drawState.value,
                            "onUpdate:modelValue": ($event) => drawState.value = $event,
                            onOnChange: onDrawState
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "clearfix" }, [
                              createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.AI\u8054\u7F51\u641C\u7D22")), 1),
                              createVNode(_component_Switch, {
                                class: "fr",
                                modelValue: searchState.value,
                                "onUpdate:modelValue": ($event) => searchState.value = $event,
                                onOnChange: onSearchState
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "clearfix" }, [
                              createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.AI\u7ED8\u753B")), 1),
                              createVNode(_component_Switch, {
                                class: "fr",
                                modelValue: drawState.value,
                                "onUpdate:modelValue": ($event) => drawState.value = $event,
                                onOnChange: onDrawState
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_FormItem, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="title" style="${ssrRenderStyle({ "position": "relative" })}" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.\u667A\u80FD\u8054\u60F3"))} <div class="electric-tag" data-v-9e9ff9db${_scopeId3}>-3${ssrInterpolate(_ctx.$t("aiChat.\u7535\u91CF"))}</div></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "title",
                              style: { "position": "relative" }
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("aiChat.\u667A\u80FD\u8054\u60F3")) + " ", 1),
                              createVNode("div", { class: "electric-tag" }, "-3" + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")), 1)
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="clearfix" data-v-9e9ff9db${_scopeId3}><div class="fl" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.InputSuggestions3"))}</div>`);
                          _push4(ssrRenderComponent(_component_Switch, {
                            class: "fr",
                            modelValue: robotInfo.value.intelligentContactFlag,
                            "onUpdate:modelValue": ($event) => robotInfo.value.intelligentContactFlag = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "clearfix" }, [
                              createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.InputSuggestions3")), 1),
                              createVNode(_component_Switch, {
                                class: "fr",
                                modelValue: robotInfo.value.intelligentContactFlag,
                                "onUpdate:modelValue": ($event) => robotInfo.value.intelligentContactFlag = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_FormItem, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="title" style="${ssrRenderStyle({ "position": "relative" })}" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.\u667A\u80FD\u4F53\u63A8\u8350"))} <div class="electric-tag" data-v-9e9ff9db${_scopeId3}>-3${ssrInterpolate(_ctx.$t("aiChat.\u7535\u91CF"))}</div></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "title",
                              style: { "position": "relative" }
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("aiChat.\u667A\u80FD\u4F53\u63A8\u8350")) + " ", 1),
                              createVNode("div", { class: "electric-tag" }, "-3" + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")), 1)
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="clearfix" data-v-9e9ff9db${_scopeId3}><div class="fl" data-v-9e9ff9db${_scopeId3}>${ssrInterpolate(_ctx.$t("aiChat.InputSuggestions"))}</div>`);
                          _push4(ssrRenderComponent(_component_Switch, {
                            class: "fr",
                            modelValue: robotInfo.value.intelligentAgentRecommendationFlag,
                            "onUpdate:modelValue": ($event) => robotInfo.value.intelligentAgentRecommendationFlag = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "clearfix" }, [
                              createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.InputSuggestions")), 1),
                              createVNode(_component_Switch, {
                                class: "fr",
                                modelValue: robotInfo.value.intelligentAgentRecommendationFlag,
                                "onUpdate:modelValue": ($event) => robotInfo.value.intelligentAgentRecommendationFlag = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_FormItem, { class: "modelList" }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u6A21\u578B")), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_Select, {
                                size: "large",
                                modelValue: robotInfo.value.llmCode,
                                "onUpdate:modelValue": ($event) => robotInfo.value.llmCode = $event,
                                placeholder: _ctx.$t("i.select.placeholder"),
                                onClick: _ctx.onModelKey
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(modelList.value, (item, index2) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      value: item.code,
                                      key: index2
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                          item.hotFlag ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: _imports_8,
                                            style: { "height": "13px", "margin-right": "4px" }
                                          })) : createCommentVNode("", true),
                                          createVNode("span", {
                                            class: item.hotFlag ? "hotColor" : ""
                                          }, toDisplayString(item.name), 3),
                                          createVNode("span", { class: "gray" }, "(-" + toDisplayString(item.consumeEnergy) + " " + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")) + ")", 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, { class: "slider" }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u751F\u6210\u591A\u6837\u6027")), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "slider" }, [
                            createVNode(_component_Slider, {
                              min: 0,
                              max: 1,
                              "show-tip": "never",
                              step: 0.2,
                              modelValue: robotInfo.value.hitRate,
                              "onUpdate:modelValue": ($event) => robotInfo.value.hitRate = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "name clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.\u7CBE\u51C6")), 1),
                            createVNode("div", { class: "fr" }, toDisplayString(_ctx.$t("aiChat.\u591A\u6837\u6027")), 1)
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, null, {
                        label: withCtx(() => [
                          createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u6280\u80FD")), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.AI\u8054\u7F51\u641C\u7D22")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: searchState.value,
                              "onUpdate:modelValue": ($event) => searchState.value = $event,
                              onOnChange: onSearchState
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.AI\u7ED8\u753B")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: drawState.value,
                              "onUpdate:modelValue": ($event) => drawState.value = $event,
                              onOnChange: onDrawState
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, null, {
                        label: withCtx(() => [
                          createVNode("div", {
                            class: "title",
                            style: { "position": "relative" }
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("aiChat.\u667A\u80FD\u8054\u60F3")) + " ", 1),
                            createVNode("div", { class: "electric-tag" }, "-3" + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.InputSuggestions3")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: robotInfo.value.intelligentContactFlag,
                              "onUpdate:modelValue": ($event) => robotInfo.value.intelligentContactFlag = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, null, {
                        label: withCtx(() => [
                          createVNode("div", {
                            class: "title",
                            style: { "position": "relative" }
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("aiChat.\u667A\u80FD\u4F53\u63A8\u8350")) + " ", 1),
                            createVNode("div", { class: "electric-tag" }, "-3" + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.InputSuggestions")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: robotInfo.value.intelligentAgentRecommendationFlag,
                              "onUpdate:modelValue": ($event) => robotInfo.value.intelligentAgentRecommendationFlag = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: "save",
                size: "large",
                type: "primary",
                onClick: onSaveConfig
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("aiChat.\u4FDD\u5B58\u8BBE\u7F6E"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("aiChat.\u4FDD\u5B58\u8BBE\u7F6E")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "modelConfigArea" }, [
                  createVNode("h2", null, toDisplayString(_ctx.$t("aiChat.\u6A21\u578B\u8BBE\u7F6E")), 1),
                  createVNode(_component_Form, { "label-position": "top" }, {
                    default: withCtx(() => [
                      createVNode(_component_FormItem, { class: "modelList" }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u6A21\u578B")), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_Select, {
                                size: "large",
                                modelValue: robotInfo.value.llmCode,
                                "onUpdate:modelValue": ($event) => robotInfo.value.llmCode = $event,
                                placeholder: _ctx.$t("i.select.placeholder"),
                                onClick: _ctx.onModelKey
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(modelList.value, (item, index2) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      value: item.code,
                                      key: index2
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                          item.hotFlag ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: _imports_8,
                                            style: { "height": "13px", "margin-right": "4px" }
                                          })) : createCommentVNode("", true),
                                          createVNode("span", {
                                            class: item.hotFlag ? "hotColor" : ""
                                          }, toDisplayString(item.name), 3),
                                          createVNode("span", { class: "gray" }, "(-" + toDisplayString(item.consumeEnergy) + " " + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")) + ")", 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, { class: "slider" }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u751F\u6210\u591A\u6837\u6027")), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "slider" }, [
                            createVNode(_component_Slider, {
                              min: 0,
                              max: 1,
                              "show-tip": "never",
                              step: 0.2,
                              modelValue: robotInfo.value.hitRate,
                              "onUpdate:modelValue": ($event) => robotInfo.value.hitRate = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "name clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.\u7CBE\u51C6")), 1),
                            createVNode("div", { class: "fr" }, toDisplayString(_ctx.$t("aiChat.\u591A\u6837\u6027")), 1)
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, null, {
                        label: withCtx(() => [
                          createVNode("div", { class: "title" }, toDisplayString(_ctx.$t("aiChat.\u6280\u80FD")), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.AI\u8054\u7F51\u641C\u7D22")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: searchState.value,
                              "onUpdate:modelValue": ($event) => searchState.value = $event,
                              onOnChange: onSearchState
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.AI\u7ED8\u753B")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: drawState.value,
                              "onUpdate:modelValue": ($event) => drawState.value = $event,
                              onOnChange: onDrawState
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, null, {
                        label: withCtx(() => [
                          createVNode("div", {
                            class: "title",
                            style: { "position": "relative" }
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("aiChat.\u667A\u80FD\u8054\u60F3")) + " ", 1),
                            createVNode("div", { class: "electric-tag" }, "-3" + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.InputSuggestions3")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: robotInfo.value.intelligentContactFlag,
                              "onUpdate:modelValue": ($event) => robotInfo.value.intelligentContactFlag = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, null, {
                        label: withCtx(() => [
                          createVNode("div", {
                            class: "title",
                            style: { "position": "relative" }
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("aiChat.\u667A\u80FD\u4F53\u63A8\u8350")) + " ", 1),
                            createVNode("div", { class: "electric-tag" }, "-3" + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")), 1)
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "clearfix" }, [
                            createVNode("div", { class: "fl" }, toDisplayString(_ctx.$t("aiChat.InputSuggestions")), 1),
                            createVNode(_component_Switch, {
                              class: "fr",
                              modelValue: robotInfo.value.intelligentAgentRecommendationFlag,
                              "onUpdate:modelValue": ($event) => robotInfo.value.intelligentAgentRecommendationFlag = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Button, {
                    class: "save",
                    size: "large",
                    type: "primary",
                    onClick: onSaveConfig
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("aiChat.\u4FDD\u5B58\u8BBE\u7F6E")), 1)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, { class: "modelName" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(modelName.value)} `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      class: "fr arrow",
                      type: "ios-arrow-down"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(toDisplayString(modelName.value) + " ", 1),
                      createVNode(_component_Icon, {
                        class: "fr arrow",
                        type: "ios-arrow-down"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, { class: "modelName" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(modelName.value) + " ", 1),
                    createVNode(_component_Icon, {
                      class: "fr arrow",
                      type: "ios-arrow-down"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (robotType.value == "MULTIPLE_MODELS_CHAT") {
        _push(ssrRenderComponent(unref(Poptip), {
          modelValue: configVisible.value,
          "onUpdate:modelValue": ($event) => configVisible.value = $event,
          class: "multipleModelSelectPoptip clearfix",
          placement: "bottom-end",
          width: "241"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="multipleModelList" data-v-9e9ff9db${_scopeId}><div class="list" data-v-9e9ff9db${_scopeId}><!--[-->`);
              ssrRenderList(modelList.value, (item, index2) => {
                _push2(`<div class="clearfix item" data-v-9e9ff9db${_scopeId}><div class="name fl" style="${ssrRenderStyle({ "align-items": "center" })}" data-v-9e9ff9db${_scopeId}>`);
                if (item.hotFlag) {
                  _push2(`<img${ssrRenderAttr("src", _imports_8)} style="${ssrRenderStyle({ "height": "13px", "margin-right": "4px" })}" data-v-9e9ff9db${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="${ssrRenderClass(item.hotFlag ? "hotColor" : "")}" data-v-9e9ff9db${_scopeId}>${ssrInterpolate(item.name)}</span><span data-v-9e9ff9db${_scopeId}>(-${ssrInterpolate(item.consumeEnergy)}${ssrInterpolate(_ctx.$t("aiChat.\u7535\u91CF"))})</span></div></div>`);
              });
              _push2(`<!--]--></div><div class="i-230 mt-10" data-v-9e9ff9db${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Checkbox, {
                class: "fl",
                modelValue: singleAll.value,
                "onUpdate:modelValue": ($event) => singleAll.value = $event,
                onClick: ($event) => onAllChange()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("aiChat.checkBox.\u5168\u9009"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("aiChat.checkBox.\u5168\u9009")), 1)
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
                    _push3(`${ssrInterpolate(_ctx.$t("aiChat.checkBox.\u786E\u5B9A"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("aiChat.checkBox.\u786E\u5B9A")), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(modelList.value, (item, index2) => {
                      return openBlock(), createBlock("div", { class: "clearfix item" }, [
                        createVNode("div", {
                          class: "name fl",
                          style: { "align-items": "center" }
                        }, [
                          item.hotFlag ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _imports_8,
                            style: { "height": "13px", "margin-right": "4px" }
                          })) : createCommentVNode("", true),
                          createVNode("span", {
                            class: item.hotFlag ? "hotColor" : ""
                          }, toDisplayString(item.name), 3),
                          createVNode("span", null, "(-" + toDisplayString(item.consumeEnergy) + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")) + ")", 1)
                        ])
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
                        createTextVNode(toDisplayString(_ctx.$t("aiChat.checkBox.\u5168\u9009")), 1)
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
                        createTextVNode(toDisplayString(_ctx.$t("aiChat.checkBox.\u786E\u5B9A")), 1)
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
              _push2(`<div class="selectModelList clearfix" data-v-9e9ff9db${_scopeId}>`);
              if (robotInfo.value.multiModelInfoResVOS) {
                _push2(`<!--[-->`);
                ssrRenderList(robotInfo.value.multiModelInfoResVOS, (item, index2) => {
                  _push2(`<div class="item" data-v-9e9ff9db${_scopeId}>${ssrInterpolate(item.name)} </div>`);
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
                  robotInfo.value.multiModelInfoResVOS ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(robotInfo.value.multiModelInfoResVOS, (item, index2) => {
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
      _push(`<div class="${ssrRenderClass([[robotType.value == "MULTIPLE_MODELS_CHAT" ? "multipleModelChat" : "", shareState.value ? "shareChat" : ""], "dialogue"])}" data-v-9e9ff9db>`);
      _push(ssrRenderComponent(recordCom, {
        ref_key: "recordComRef",
        ref: recordComRef,
        isLoading: isLoading.value,
        "onUpdate:isLoading": ($event) => isLoading.value = $event,
        robotLogo: robotInfo.value.robotLogo || unref(_imports_1$1),
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
      }, {
        recordTop: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$isEmpty(chatList.value) && robotType.value !== "MULTIPLE_MODELS_CHAT") {
              _push2(`<div class="welcomeContentAreaCom" data-v-9e9ff9db${_scopeId}>`);
              if (!_ctx.$isEmpty(robotInfo.value.robotLogo)) {
                _push2(`<img class="logo"${ssrRenderAttr("src", robotInfo.value.robotLogo)} alt="" data-v-9e9ff9db${_scopeId}>`);
              } else {
                _push2(`<img class="logo"${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-9e9ff9db${_scopeId}>`);
              }
              _push2(`<h1 data-v-9e9ff9db${_scopeId}>${ssrInterpolate(robotInfo.value.robotRemark)}</h1><p data-v-9e9ff9db${_scopeId}>${ssrInterpolate(robotInfo.value.welcomeContent)}</p><div class="promptList" data-v-9e9ff9db${_scopeId}><!--[-->`);
              ssrRenderList(promptListData.value, (item, index2) => {
                _push2(`<div class="area" data-v-9e9ff9db${_scopeId}><div class="itemTitle" data-v-9e9ff9db${_scopeId}><img${ssrRenderAttr("src", item.cateLogo)} alt="" data-v-9e9ff9db${_scopeId}> ${ssrInterpolate(item.cateName)}</div><!--[-->`);
                ssrRenderList(item.promptList, (data, index22) => {
                  _push2(`<div class="${ssrRenderClass([item.type == "DOCUMENT_INTERPRETATION" ? "icon" : "", "item text-hide"])}" data-v-9e9ff9db${_scopeId}>`);
                  if (item.type == "DOCUMENT_INTERPRETATION") {
                    _push2(`<img class="filePic"${ssrRenderAttr("src", _ctx.$loadFileImages(data.name))} alt="" data-v-9e9ff9db${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(` ${ssrInterpolate(data.promptName)}</div>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.$isEmpty(chatList.value) && robotType.value !== "MULTIPLE_MODELS_CHAT" ? (openBlock(), createBlock("div", {
                key: 0,
                class: "welcomeContentAreaCom"
              }, [
                !_ctx.$isEmpty(robotInfo.value.robotLogo) ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "logo",
                  src: robotInfo.value.robotLogo,
                  alt: ""
                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  class: "logo",
                  src: _imports_1$1,
                  alt: ""
                })),
                createVNode("h1", null, toDisplayString(robotInfo.value.robotRemark), 1),
                createVNode("p", null, toDisplayString(robotInfo.value.welcomeContent), 1),
                createVNode("div", { class: "promptList" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(promptListData.value, (item, index2) => {
                    return openBlock(), createBlock("div", {
                      class: "area",
                      key: index2
                    }, [
                      createVNode("div", { class: "itemTitle" }, [
                        createVNode("img", {
                          src: item.cateLogo,
                          alt: ""
                        }, null, 8, ["src"]),
                        createTextVNode(" " + toDisplayString(item.cateName), 1)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(item.promptList, (data, index22) => {
                        return openBlock(), createBlock("div", {
                          class: ["item text-hide", item.type == "DOCUMENT_INTERPRETATION" ? "icon" : ""],
                          key: index22,
                          onClick: ($event) => getContent(data.promptContent, item.type, data)
                        }, [
                          item.type == "DOCUMENT_INTERPRETATION" ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "filePic",
                            src: _ctx.$loadFileImages(data.name),
                            alt: ""
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(data.promptName), 1)
                        ], 10, ["onClick"]);
                      }), 128))
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!shareState.value) {
        _push(`<div class="input-area" data-v-9e9ff9db>`);
        _push(ssrRenderComponent(_component_Tooltip, {
          content: _ctx.$t("aiChat.\u521B\u5EFA\u65B0\u5BF9\u8BDD"),
          class: "input-icon input-addChat iconCom",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon" data-v-9e9ff9db${_scopeId}>`);
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
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Dropdown, {
                trigger: "custom",
                transferent: "top",
                visible: dropdownVisible.value,
                onOnClickoutside: ($event) => dropdownVisible.value = false
              }, {
                list: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="commonArea" data-v-9e9ff9db${_scopeId2}><div class="commonArea-top" data-v-9e9ff9db${_scopeId2}><div data-v-9e9ff9db${_scopeId2}>\u5E38\u7528\u8BED</div><div class="topAdd" data-v-9e9ff9db${_scopeId2}>+ \u6DFB\u52A0\u5E38\u7528\u8BED</div></div><div class="commonList" data-v-9e9ff9db${_scopeId2}><!--[-->`);
                    ssrRenderList(commListData.value, (item, index2) => {
                      _push3(`<div class="item" data-v-9e9ff9db${_scopeId2}><div class="title text-hide-1" data-v-9e9ff9db${_scopeId2}>${item.keyWord}</div><div class="desc text-hide-1" data-v-9e9ff9db${_scopeId2}>${ssrInterpolate(item.content)}</div><div class="oper" data-v-9e9ff9db${_scopeId2}><div class="icon" data-v-9e9ff9db${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-9e9ff9db${_scopeId2}></div><div class="icon" data-v-9e9ff9db${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-9e9ff9db${_scopeId2}></div></div></div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "commonArea" }, [
                        createVNode("div", { class: "commonArea-top" }, [
                          createVNode("div", null, "\u5E38\u7528\u8BED"),
                          createVNode("div", {
                            class: "topAdd",
                            onClick: ($event) => onAddComm("add")
                          }, "+ \u6DFB\u52A0\u5E38\u7528\u8BED", 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "commonList" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(commListData.value, (item, index2) => {
                            return openBlock(), createBlock("div", {
                              class: "item",
                              key: index2,
                              onClick: ($event) => onCommItem(item)
                            }, [
                              createVNode("div", {
                                class: "title text-hide-1",
                                innerHTML: item.keyWord
                              }, null, 8, ["innerHTML"]),
                              createVNode("div", { class: "desc text-hide-1" }, toDisplayString(item.content), 1),
                              createVNode("div", { class: "oper" }, [
                                createVNode("div", {
                                  class: "icon",
                                  onClick: withModifiers(($event) => onAddComm("edit", item), ["stop"])
                                }, [
                                  createVNode("img", {
                                    src: _imports_4,
                                    alt: ""
                                  })
                                ], 8, ["onClick"]),
                                createVNode("div", {
                                  class: "icon",
                                  onClick: withModifiers(($event) => onDelComm(item), ["stop"])
                                }, [
                                  createVNode("img", {
                                    src: _imports_5,
                                    alt: ""
                                  })
                                ], 8, ["onClick"])
                              ])
                            ], 8, ["onClick"]);
                          }), 128))
                        ])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(inputCom, {
                      content: content.value,
                      "onUpdate:content": ($event) => content.value = $event,
                      format: format.value,
                      uploadLists: uploadList.value,
                      "onUpdate:uploadLists": ($event) => uploadList.value = $event,
                      robotCode: robotInfo.value.code,
                      consumeEnergy: consumeEnergy.value,
                      onSubmit,
                      onChange: onChangeContent,
                      isUoload: true
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(inputCom, {
                        content: content.value,
                        "onUpdate:content": ($event) => content.value = $event,
                        format: format.value,
                        uploadLists: uploadList.value,
                        "onUpdate:uploadLists": ($event) => uploadList.value = $event,
                        robotCode: robotInfo.value.code,
                        consumeEnergy: consumeEnergy.value,
                        onSubmit,
                        onChange: onChangeContent,
                        isUoload: true
                      }, null, 8, ["content", "onUpdate:content", "format", "uploadLists", "onUpdate:uploadLists", "robotCode", "consumeEnergy"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Dropdown, {
                  trigger: "custom",
                  transferent: "top",
                  visible: dropdownVisible.value,
                  onOnClickoutside: ($event) => dropdownVisible.value = false
                }, {
                  list: withCtx(() => [
                    createVNode("div", { class: "commonArea" }, [
                      createVNode("div", { class: "commonArea-top" }, [
                        createVNode("div", null, "\u5E38\u7528\u8BED"),
                        createVNode("div", {
                          class: "topAdd",
                          onClick: ($event) => onAddComm("add")
                        }, "+ \u6DFB\u52A0\u5E38\u7528\u8BED", 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "commonList" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(commListData.value, (item, index2) => {
                          return openBlock(), createBlock("div", {
                            class: "item",
                            key: index2,
                            onClick: ($event) => onCommItem(item)
                          }, [
                            createVNode("div", {
                              class: "title text-hide-1",
                              innerHTML: item.keyWord
                            }, null, 8, ["innerHTML"]),
                            createVNode("div", { class: "desc text-hide-1" }, toDisplayString(item.content), 1),
                            createVNode("div", { class: "oper" }, [
                              createVNode("div", {
                                class: "icon",
                                onClick: withModifiers(($event) => onAddComm("edit", item), ["stop"])
                              }, [
                                createVNode("img", {
                                  src: _imports_4,
                                  alt: ""
                                })
                              ], 8, ["onClick"]),
                              createVNode("div", {
                                class: "icon",
                                onClick: withModifiers(($event) => onDelComm(item), ["stop"])
                              }, [
                                createVNode("img", {
                                  src: _imports_5,
                                  alt: ""
                                })
                              ], 8, ["onClick"])
                            ])
                          ], 8, ["onClick"]);
                        }), 128))
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(inputCom, {
                      content: content.value,
                      "onUpdate:content": ($event) => content.value = $event,
                      format: format.value,
                      uploadLists: uploadList.value,
                      "onUpdate:uploadLists": ($event) => uploadList.value = $event,
                      robotCode: robotInfo.value.code,
                      consumeEnergy: consumeEnergy.value,
                      onSubmit,
                      onChange: onChangeContent,
                      isUoload: true
                    }, null, 8, ["content", "onUpdate:content", "format", "uploadLists", "onUpdate:uploadLists", "robotCode", "consumeEnergy"])
                  ]),
                  _: 1
                }, 8, ["visible", "onOnClickoutside"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Tooltip, {
          content: _ctx.$t("aiChat.\u627E\u627E\u7075\u611F"),
          class: "input-icon iconCom input-prompt",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon" data-v-9e9ff9db${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { type: "ios-bulb-outline" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "icon",
                  onClick: chooseAfflatus
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
      _push(`</div>`);
      if (promptState.value) {
        _push(`<div style="${ssrRenderStyle({ "width": "480px" })}" data-v-9e9ff9db></div>`);
      } else {
        _push(`<!---->`);
      }
      if (promptState.value) {
        _push(ssrRenderComponent(cPrompt, {
          ref_key: "cPromptRef",
          ref: cPromptRef,
          state: promptState.value,
          "onUpdate:state": ($event) => promptState.value = $event,
          onPrompt: onPromptContent
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        ref_key: "recordImgRef",
        ref: recordImgRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_sPrompt, {
        ref_key: "sPromptRef",
        ref: sPromptRef,
        icoShow: true,
        content: _ctx.$t("aiChat.\u662F\u5426\u5220\u9664\u8BE5\u5E38\u7528\u8BED") + "?",
        onOk: ($event) => onDeleteComm()
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e9ff9db"]]);

export { index as default };
//# sourceMappingURL=index-d3493fb8.mjs.map
