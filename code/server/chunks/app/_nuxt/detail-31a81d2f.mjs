import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, g as getRouting, f as useI18n, d as __nuxt_component_0$1, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './previewImg-8e12aab7.mjs';
import { _ as __nuxt_component_0$2 } from './ossUploaderNew-b29e011c.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, onUnmounted, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, watch, resolveComponent, createTextVNode, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './clock-f02ce9ea.mjs';
import { _ as _imports_1 } from './icon14-9b74ca74.mjs';
import { _ as _imports_2 } from './delete-79bda725.mjs';
import { _ as _imports_2$1 } from './bottom-arrow-07ec677f.mjs';
import { _ as _imports_5, a as _imports_7, b as _imports_6 } from './search-f6a02dc8.mjs';
import { i as icon9, a as icon10, b as icon11, c as icon12, _ as _imports_1$1, d as _imports_3, e as _imports_4, f as _imports_5$1, g as _imports_6$1, h as _imports_7$1, j as _imports_8, k as _imports_9, l as _imports_10$1, m as _imports_11$1 } from './icon12-bcfdd7c9.mjs';
import ipkg from 'view-ui-plus';
import { useRouter } from 'vue-router';
import { c as contentCom } from './content-977f7524.mjs';
import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { l as loadImg } from './loadImg-049a165d.mjs';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import html2canvas from 'html2canvas';
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
import 'axios';
import 'crypto-js';
import 'pinia-plugin-persistedstate';
import 'vant';
import 'defu';
import 'qrcode.vue';
import './upload-5a19747f.mjs';
import './loding-9ec1fb58.mjs';
import '@aws-sdk/client-s3';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';

const _imports_0 = "" + buildAssetsURL("add.6ff9590b.svg");
const _imports_10 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAhlJREFUWEftmLFrFEEUxr9vMWsUBf+EFBYGLBS0sxEVlATkCiE5FCYnd0kr2Fik0sJCMKVu4DLVruWBkQhGsE+hXVJYWlgKHnhJuHkyF01Abndv93Z0kZ1238z85vtm35sZouSNJedDBTiuQ5WCThWcV61zAJ6RuAZgctzJBv2JLoBNMXgU6WAnbcxYiy0cPWxBcCptkFzfia4YXE6DjAWsLzQ7AG/nmnzETiJ4E+lgNik8HrDR+n6knixDsD7ivMlhxCzAx7+CeuFacCIf4EJLDjuKXAz16qciAOuqeQHkx99jhWtBYiZJsLgCHIhYqIJKqck9+q8Bns1mt3z25eQdrVe+ObW43mheh/BdNriDaBHeivTLt04BrYK79FcI2AQ+eiO3fbP7QGvdcwo4OlF8ZAU4p5amjgFTwzTqw3xNK11OFbx3f+l835itpIODEe/qK/3iQ5zJTgHnGouXPBELGNtEUIt00PkngHbS+UbrCo03PA96/S9he3UzaQFOFaz+4iEKZDos2ES97x1/LiLTWdQkuT3xNxL1XbV401A2ssAdxlJu2P3pdA8qpc7se34kwkyljpSdCbNXq0pdLmv/6OTU4rIB/jgqaVyGmEIuTSRnBHgyWCzRDdvB6aSFJ92L10nMFKFa7BhEJ2wHtbyA5b64D+qufV2gPAVonz6KemHoieA9gIdpR7ODXVDyVgGOa1Cl4H+v4E+WC3w4fE+6gQAAAABJRU5ErkJggg==";
const _imports_11 = "" + buildAssetsURL("depth.97bb0f9f.svg");
const _imports_12 = "" + buildAssetsURL("study.29e40816.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["toClose"],
  setup(__props, { expose: __expose, emit: emits }) {
    useRouter();
    getRouting();
    getCurrentInstance();
    const modalShow = ref(false);
    const loading = ref(false);
    const isShow = ref(false);
    const time = ref(null);
    ref();
    ref([1004, 1005, 1006, 1007]);
    const showFn = (title, name) => {
      modalShow.value = true;
      isShow.value = true;
      clearInterval(time.value);
    };
    __expose({
      showFn
    });
    onUnmounted(() => {
      clearInterval(time.value);
      isShow.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0$1;
      const _component_svga = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        title: "\u751F\u6210PPT",
        className: "pptMains",
        fullscreen: true,
        "footer-hide": false,
        "mask-closable": false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pptMains-content" id="content"${_scopeId}>`);
            if (loading.value) {
              _push2(ssrRenderComponent(_component_svga, {
                svgaImg: unref(loadImg),
                width: 200,
                height: 284
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "pptMains-content",
                id: "content"
              }, [
                loading.value ? (openBlock(), createBlock(_component_svga, {
                  key: 0,
                  svgaImg: unref(loadImg),
                  width: 200,
                  height: 284
                }, null, 8, ["svgaImg"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ppt/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const isPageLoading = ref(false);
    const ossUploaderNewRef = ref();
    const isMaxBrainShow = ref(false);
    const previewImgRef = ref();
    const transformer = new Transformer();
    const outlineContent = ref("");
    const pptRef = ref(null);
    const isQuestion = ref(false);
    ref(null);
    ref(false);
    const extendState = ref(false);
    const { Table, Spin } = ipkg;
    const isMinBrainShow = ref(false);
    const content = ref("");
    const { proxy } = getCurrentInstance();
    const routing = getRouting();
    const router = useRouter();
    const groupListState = ref(false);
    const isShow = ref(false);
    const isFocus = ref();
    const rightState = ref(1);
    ref(false);
    const questionContent = ref("");
    const isCreatePPT = ref(true);
    const shareCode = ref("");
    const extendList = ref([]);
    ref(false);
    const actionLoading = ref(false);
    const exportLoading = ref(false);
    transformer.transform(outlineContent.value);
    const popVisible = ref(false);
    const exportType = ref("");
    const list = ref([{
      name: t("aiSearch.\u76F8\u5173\u4E8B\u4EF6"),
      key: "RELATED_EVENTS",
      icon: icon9,
      iconActive: "icon75_1",
      content: "",
      columns: [{
        title: t("aiSearch.\u4E8B\u4EF6\u540D\u79F0"),
        key: "eventTitle"
      }, {
        title: t("aiSearch.\u4E8B\u4EF6\u6982\u8FF0"),
        key: "eventDescribe"
      }],
      status: false
    }, {
      name: t("aiSearch.\u76F8\u5173\u7EC4\u7EC7"),
      key: "ORGANIZE",
      icon: icon10,
      iconActive: "icon76_1",
      content: "",
      columns: [{
        title: t("aiSearch.\u7EC4\u7EC7\u540D\u79F0"),
        key: "organizeName"
      }, {
        title: t("aiSearch.\u6982\u8FF0"),
        key: "organizeDescribe"
      }],
      status: false
    }, {
      name: t("aiSearch.\u76F8\u5173\u4EBA\u7269"),
      key: "CHARACTER",
      icon: icon11,
      iconActive: "icon77_1",
      content: "",
      columns: [{
        title: t("aiSearch.\u4EBA\u7269\u540D\u79F0"),
        key: "characterName"
      }, {
        title: t("aiSearch.\u6982\u8FF0"),
        key: "characterDescribe"
      }],
      status: false
    }, {
      name: t("aiSearch.\u53C2\u8003\u6587\u732E"),
      key: "REFERENCES",
      icon: icon12,
      iconActive: "icon78_1",
      content: ``,
      status: false
    }]);
    const params = ref({
      content: "",
      searchDepth: "CONCISE",
      searchScope: "WHOLE_NETWORK",
      learningScope: "",
      outputLanguage: "CN",
      extendedReadingFlag: true
    });
    const searchScope = ref([{
      value: t("aiSearch.\u5168\u7F51"),
      key: "WHOLE_NETWORK"
    }, {
      value: t("aiSearch.\u5B66\u672F"),
      key: "LEARNING"
    }, {
      value: t("aiSearch.\u64AD\u5BA2"),
      key: "XIMALAYA"
    }]);
    const language = ref([{
      value: "\u4E2D\u6587",
      key: "CN"
    }, {
      value: "English",
      key: "EN"
    }]);
    const loadingMsg = ref(t("aiSearch.\u8D44\u6599\u641C\u7D22\u4E2D") + "...");
    const loadingIdx = ref(0);
    const robotInfo = ref({});
    const groupId = ref("");
    const loadStatus = ref(false);
    let mm2;
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    const handleResize = () => {
      popVisible.value = false;
    };
    const toExportFile = proxy.$debounce((type) => {
      if (exportLoading.value) {
        return;
      }
      exportType.value = type;
      exportLoading.value = true;
      isMaxBrainShow.value = false;
      setTimeout(() => {
        isMaxBrainShow.value = true;
        setTimeout(() => {
          mm2 = Markmap.create("#markmap2");
          setTimeout(() => {
            const { root: root2, features: features2 } = transformer.transform(outlineContent.value);
            mm2.setData(root2);
            mm2.fit();
            setTimeout(() => {
              let canvasID = document.getElementById("searchCanvas");
              html2canvas(canvasID, {
                scale: 4,
                width: canvasID.offsetWidth,
                height: canvasID.offsetHeight,
                useCORS: true
              }).then((canvas) => {
                let dom = document.body.appendChild(canvas);
                dom.style.display = "none";
                document.body.removeChild(dom);
                let blob = dataURLToBlob(dom.toDataURL("image/png"));
                URL.createObjectURL(blob);
                const file = new File([blob], "test", { type: "text/plain", lastModified: Date.now() });
                let event = {
                  target: {
                    files: [file]
                  }
                };
                ossUploaderNewRef.value.uploadFile(event);
              });
            }, 800);
          }, 50);
        }, 100);
      }, 200);
    }, 300);
    const uploadImg = (e) => {
      let data = {
        code: shareCode.value,
        exportType: exportType.value,
        imgCode: e[0].code
      };
      proxy.$api.getAiSearchRecordConvertFile(data).then((res) => {
        getBlob(res.data.url).then((blob) => {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          if (exportType.value == "DOCX") {
            link.download = t("public.\u4E0B\u8F7D") + ".docx";
          } else {
            link.download = t("public.\u4E0B\u8F7D") + ".pdf";
          }
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          exportLoading.value = false;
        });
      }).catch(() => {
        exportLoading.value = false;
      });
    };
    const getBlob = (url) => {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(xhr.response);
          }
        };
        xhr.send();
      });
    };
    proxy.$debounce((type) => {
      actionLoading.value = true;
      let canvasID = document.getElementById("searchCanvas");
      html2canvas(canvasID, {
        scale: 8,
        width: canvasID.offsetWidth,
        height: canvasID.offsetHeight,
        useCORS: true
      }).then((canvas) => {
        let dom = document.body.appendChild(canvas);
        dom.style.display = "none";
        document.body.removeChild(dom);
        let blob = dataURLToBlob(dom.toDataURL("image/png"));
        const objectURL = URL.createObjectURL(blob);
        if (type == 1) {
          previewImgRef.value.showFn(objectURL);
          actionLoading.value = false;
        }
        if (type == 2) {
          const x = new XMLHttpRequest();
          x.open("GET", objectURL, true);
          x.responseType = "blob";
          x.onload = function() {
            const url = window.URL.createObjectURL(x.response);
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.download = "\u8111\u56FE";
            a.click();
            a.remove();
            proxy.$Message.success(t("publicMsg.\u5DF2\u4E0B\u8F7D"));
            actionLoading.value = false;
          };
          x.send();
        }
      });
    }, 300);
    const dataURLToBlob = (dataurl) => {
      var arr = dataurl.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    };
    proxy.$debounce(() => {
      proxy.$CopyTex(outlineContent.value, "PPT\u5927\u7EB2\u5DF2\u590D\u5236");
      pptRef.value.showFn();
    }, 300);
    const onSubmit = () => {
      routing.abortReadingStream();
      let data = {
        content: params.value.content,
        groupId: groupId.value,
        robotCode: robotInfo.value.code,
        type: "AI_SEARCH",
        searchDepth: params.value.searchDepth,
        searchScope: params.value.searchScope,
        learningScope: params.value.learningScope,
        outputLanguage: params.value.outputLanguage,
        extendedReadingFlag: params.value.extendedReadingFlag,
        openChatContext: false
      };
      content.value = "";
      routing.setAiChat(proxy, data);
    };
    proxy.$debounce((type) => {
      params.value.searchDepth = type;
      outlineContent.value = "";
      list.value[0].content = "";
      list.value[1].content = "";
      list.value[2].content = "";
      list.value[3].content = "";
      extendList.value = [];
      rightState.value = 1;
      isMaxBrainShow.value = false;
      onSubmit();
    }, 300);
    const toQuestion = proxy.$debounce(() => {
      if (proxy.$isEmpty(questionContent.value)) {
        proxy.$Message.error(t("publicMsg.\u8BF7\u8F93\u5165"));
        return;
      }
      routing.abortReadingStream();
      outlineContent.value = "";
      list.value[0].content = "";
      list.value[1].content = "";
      list.value[2].content = "";
      list.value[3].content = "";
      extendList.value = [];
      isQuestion.value = false;
      rightState.value = 1;
      isMaxBrainShow.value = false;
      let data = {
        type: robotInfo.value.type,
        robotCode: robotInfo.value.code
      };
      proxy.$api.ai_bulidChatGroupId(data).then((res) => {
        groupId.value = res.data;
        let data2 = {
          content: questionContent.value,
          groupId: groupId.value,
          robotCode: robotInfo.value.code,
          type: "AI_SEARCH",
          searchDepth: params.value.searchDepth,
          searchScope: params.value.searchScope,
          learningScope: params.value.learningScope,
          outputLanguage: params.value.outputLanguage,
          extendedReadingFlag: params.value.extendedReadingFlag,
          openChatContext: true
        };
        content.value = "";
        routing.setAiChat(proxy, data2);
        params.value.content = questionContent.value;
      });
    }, 300);
    const toGetHis = () => {
      groupListState.value = true;
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
    ref([]);
    const groupList = ref([]);
    const loadMore = ref(true);
    const pageNo = ref(1);
    ref({
      loadMore: true,
      pageNo: 1,
      pageSize: 100
    });
    ref(false);
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
    watch(() => groupListState.value, () => {
      routing.setIsShowHis(groupListState.value);
    }, { immediate: true });
    watch(() => routing.isLoad, (newVal) => {
      if (routing.isLoad) {
        isShow.value = false;
      } else {
        isShow.value = true;
      }
    });
    watch(() => routing.electric, () => {
      if (loadStatus.value && routing.isLoad) {
        return;
      }
      if (proxy.$isEmpty(outlineContent.value)) {
        isCreatePPT.value = false;
      }
      isPageLoading.value = false;
    }, { deep: true });
    watch(
      () => routing.getChatMsg,
      (newVal) => {
        isPageLoading.value = true;
        if (newVal.content == "[ONCOMPLETED]") {
          loadStatus.value = false;
          if (proxy.$isEmpty(outlineContent.value)) {
            isCreatePPT.value = false;
          }
          return;
        }
        if (newVal.type == "WAIT" || newVal.type == "MESSAGE" || newVal.type == "URL") {
          loadingMsg.value = newVal.content;
        }
        if (newVal.type == "AI_SEARCH_WAIT") {
          loadingIdx.value++;
          if (loadingIdx.value == 1) {
            loadingMsg.value = "\u603B\u7ED3\u4E2D...";
          }
          if (loadingIdx.value == 2) {
            loadingMsg.value = "\u76F8\u5173\u6570\u636E\u751F\u6210\u4E2D...";
          }
          return;
        }
        if (newVal && newVal.content) {
          if (newVal.type == "CHAT") {
            content.value += newVal.content;
            shareCode.value = newVal.code;
          } else if (newVal.type == "OUTLINE") {
            outlineContent.value += newVal.content;
          } else if (newVal.type == "EXTENDED_READING") {
            extendList.value.push(JSON.parse(newVal.content));
          } else {
            list.value = list.value.map((item) => {
              if (item.key === newVal.type || item.key === "RELATED_EVENTS" && item.key === "ORGANIZE" && item.key === "CHARACTER" && item.key === "REFERENCES" && item.key === "OUTLINE") {
                return {
                  ...item,
                  content: item.key === "OUTLINE" ? item.content += newVal.content : newVal.content
                };
              }
              return item;
            });
          }
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Button = resolveComponent("Button");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Switch = resolveComponent("Switch");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_Input = resolveComponent("Input");
      const _component_previewImg = __nuxt_component_1;
      const _component_ossUploaderNew = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pageContent" }, _attrs))} data-v-d05fa6fd><div class="chatAreaNav clearfix" data-v-d05fa6fd>`);
      if (!groupListState.value) {
        _push(`<div class="chatOperation" data-v-d05fa6fd>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, {
                content: _ctx.$t("aiSearch.\u65B0\u641C\u7D22\u4EFB\u52A1"),
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="chatOperation-tag" data-v-d05fa6fd${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d05fa6fd${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "chatOperation-tag" }, [
                        createVNode("img", {
                          onClick: ($event) => unref(router).go(-1),
                          src: _imports_0,
                          alt: ""
                        }, null, 8, ["onClick"])
                      ])
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
                    _push3(`<div class="chatOperation-tag" data-v-d05fa6fd${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-d05fa6fd${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "chatOperation-tag" }, [
                        createVNode("img", {
                          onClick: toGetHis,
                          src: _imports_0$1,
                          alt: ""
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Tooltip, {
                  content: _ctx.$t("aiSearch.\u65B0\u641C\u7D22\u4EFB\u52A1"),
                  placement: "right"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "chatOperation-tag" }, [
                      createVNode("img", {
                        onClick: ($event) => unref(router).go(-1),
                        src: _imports_0,
                        alt: ""
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["content"]),
                createVNode(_component_Tooltip, {
                  content: _ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"),
                  placement: "right"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "chatOperation-tag" }, [
                      createVNode("img", {
                        onClick: toGetHis,
                        src: _imports_0$1,
                        alt: ""
                      })
                    ])
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
        _push(`<div class="chatGroupList" data-v-d05fa6fd><div class="area" data-v-d05fa6fd><h2 data-v-d05fa6fd>${ssrInterpolate(_ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"))} <img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_1)} alt="" data-v-d05fa6fd></h2><div class="add" data-v-d05fa6fd>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "large",
          onClick: ($event) => unref(router).push("/ai/search")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`+ ${ssrInterpolate(_ctx.$t("public.\u65B0\u5EFA\u641C\u7D22"))}`);
            } else {
              return [
                createTextVNode("+ " + toDisplayString(_ctx.$t("public.\u65B0\u5EFA\u641C\u7D22")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="info-left-list" data-v-d05fa6fd><!--[-->`);
        ssrRenderList(groupList.value, (item, i) => {
          _push(`<div class="${ssrRenderClass([groupId.value == item.groupId ? "active" : "", "list-item pointer"])}" data-v-d05fa6fd><div class="content" data-v-d05fa6fd><div class="content-title text-hide" data-v-d05fa6fd>${ssrInterpolate(item.request)}</div><div class="content-name" data-v-d05fa6fd>${ssrInterpolate(item.gmtCreate)}</div></div><img class="deleteIco"${ssrRenderAttr("src", _imports_2)} data-v-d05fa6fd></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="aiSearchDetail" data-v-d05fa6fd><div class="aiSearchDetail-top" data-v-d05fa6fd>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Poptip, {
              placement: "bottom",
              "popper-class": "popperClass"
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="searchArea" data-v-d05fa6fd${_scopeId2}><div class="searchArea-title" data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u641C\u7D22\u8303\u56F4"))}</div><!--[-->`);
                  ssrRenderList(searchScope.value, (item, index) => {
                    _push3(`<div class="${ssrRenderClass([params.value.searchScope == item.key ? "active" : "", "searchArea-radius"])}" data-v-d05fa6fd${_scopeId2}><div class="searchArea-radius-content" data-v-d05fa6fd${_scopeId2}><div class="radius-left" data-v-d05fa6fd${_scopeId2}>`);
                    if (item.key == "WHOLE_NETWORK") {
                      _push3(`<div class="greenPoint" data-v-d05fa6fd${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.key == "LEARNING") {
                      _push3(`<div class="bluePoint" data-v-d05fa6fd${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.key == "XIMALAYA") {
                      _push3(`<div class="purplePoint" data-v-d05fa6fd${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(item.value)}</div></div><img class="confirm"${ssrRenderAttr("src", _imports_5)} data-v-d05fa6fd${_scopeId2}></div></div>`);
                  });
                  _push3(`<!--]--><div class="searchArea-title" style="${ssrRenderStyle({ "margin-bottom": "8px" })}" data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u9AD8\u7EA7\u8BBE\u7F6E"))}</div><div class="radius-content" data-v-d05fa6fd${_scopeId2}><div data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u5EF6\u4F38\u9605\u8BFB"))}</div>`);
                  _push3(ssrRenderComponent(_component_Switch, {
                    modelValue: params.value.extendedReadingFlag,
                    "onUpdate:modelValue": ($event) => params.value.extendedReadingFlag = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="radius-content" data-v-d05fa6fd${_scopeId2}><div data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u8F93\u51FA\u8BED\u8A00"))}</div>`);
                  _push3(ssrRenderComponent(_component_Select, {
                    size: "small",
                    class: "select",
                    modelValue: params.value.outputLanguage,
                    "onUpdate:modelValue": ($event) => params.value.outputLanguage = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(language.value, (item, index) => {
                          _push4(ssrRenderComponent(_component_Option, {
                            key: index,
                            value: item.key
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(language.value, (item, index) => {
                            return openBlock(), createBlock(_component_Option, {
                              key: index,
                              value: item.key
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "searchArea" }, [
                      createVNode("div", { class: "searchArea-title" }, toDisplayString(_ctx.$t("aiSearch.\u641C\u7D22\u8303\u56F4")), 1),
                      (openBlock(true), createBlock(Fragment, null, renderList(searchScope.value, (item, index) => {
                        return openBlock(), createBlock("div", {
                          class: ["searchArea-radius", params.value.searchScope == item.key ? "active" : ""],
                          key: index
                        }, [
                          createVNode("div", {
                            class: "searchArea-radius-content",
                            onClick: ($event) => params.value.searchScope = item.key
                          }, [
                            createVNode("div", { class: "radius-left" }, [
                              item.key == "WHOLE_NETWORK" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "greenPoint"
                              })) : createCommentVNode("", true),
                              item.key == "LEARNING" ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "bluePoint"
                              })) : createCommentVNode("", true),
                              item.key == "XIMALAYA" ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "purplePoint"
                              })) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(item.value), 1)
                            ]),
                            createVNode("img", {
                              class: "confirm",
                              src: _imports_5
                            })
                          ], 8, ["onClick"])
                        ], 2);
                      }), 128)),
                      createVNode("div", {
                        class: "searchArea-title",
                        style: { "margin-bottom": "8px" }
                      }, toDisplayString(_ctx.$t("aiSearch.\u9AD8\u7EA7\u8BBE\u7F6E")), 1),
                      createVNode("div", { class: "radius-content" }, [
                        createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u5EF6\u4F38\u9605\u8BFB")), 1),
                        createVNode(_component_Switch, {
                          modelValue: params.value.extendedReadingFlag,
                          "onUpdate:modelValue": ($event) => params.value.extendedReadingFlag = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "radius-content" }, [
                        createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u8F93\u51FA\u8BED\u8A00")), 1),
                        createVNode(_component_Select, {
                          size: "small",
                          class: "select",
                          modelValue: params.value.outputLanguage,
                          "onUpdate:modelValue": ($event) => params.value.outputLanguage = $event
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(language.value, (item, index) => {
                              return openBlock(), createBlock(_component_Option, {
                                key: index,
                                value: item.key
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="top-left" data-v-d05fa6fd${_scopeId2}><div data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(_ctx.$filterStatus(params.value.searchScope, searchScope.value))}</div><img${ssrRenderAttr("src", _imports_2$1)} data-v-d05fa6fd${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "top-left" }, [
                      createVNode("div", null, toDisplayString(_ctx.$filterStatus(params.value.searchScope, searchScope.value)), 1),
                      createVNode("img", { src: _imports_2$1 })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Poptip, {
                placement: "bottom",
                "popper-class": "popperClass"
              }, {
                content: withCtx(() => [
                  createVNode("div", { class: "searchArea" }, [
                    createVNode("div", { class: "searchArea-title" }, toDisplayString(_ctx.$t("aiSearch.\u641C\u7D22\u8303\u56F4")), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(searchScope.value, (item, index) => {
                      return openBlock(), createBlock("div", {
                        class: ["searchArea-radius", params.value.searchScope == item.key ? "active" : ""],
                        key: index
                      }, [
                        createVNode("div", {
                          class: "searchArea-radius-content",
                          onClick: ($event) => params.value.searchScope = item.key
                        }, [
                          createVNode("div", { class: "radius-left" }, [
                            item.key == "WHOLE_NETWORK" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "greenPoint"
                            })) : createCommentVNode("", true),
                            item.key == "LEARNING" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "bluePoint"
                            })) : createCommentVNode("", true),
                            item.key == "XIMALAYA" ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "purplePoint"
                            })) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(item.value), 1)
                          ]),
                          createVNode("img", {
                            class: "confirm",
                            src: _imports_5
                          })
                        ], 8, ["onClick"])
                      ], 2);
                    }), 128)),
                    createVNode("div", {
                      class: "searchArea-title",
                      style: { "margin-bottom": "8px" }
                    }, toDisplayString(_ctx.$t("aiSearch.\u9AD8\u7EA7\u8BBE\u7F6E")), 1),
                    createVNode("div", { class: "radius-content" }, [
                      createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u5EF6\u4F38\u9605\u8BFB")), 1),
                      createVNode(_component_Switch, {
                        modelValue: params.value.extendedReadingFlag,
                        "onUpdate:modelValue": ($event) => params.value.extendedReadingFlag = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "radius-content" }, [
                      createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u8F93\u51FA\u8BED\u8A00")), 1),
                      createVNode(_component_Select, {
                        size: "small",
                        class: "select",
                        modelValue: params.value.outputLanguage,
                        "onUpdate:modelValue": ($event) => params.value.outputLanguage = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(language.value, (item, index) => {
                            return openBlock(), createBlock(_component_Option, {
                              key: index,
                              value: item.key
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "top-left" }, [
                    createVNode("div", null, toDisplayString(_ctx.$filterStatus(params.value.searchScope, searchScope.value)), 1),
                    createVNode("img", { src: _imports_2$1 })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="top-left" data-v-d05fa6fd><div class="division" data-v-d05fa6fd></div></div><div class="top-content" data-v-d05fa6fd><input${ssrRenderAttr("value", params.value.content)}${ssrRenderAttr("maxLength", 18e3)} placeholder="\u8BF7\u8F93\u5165" data-v-d05fa6fd></div><div class="${ssrRenderClass([isFocus.value ? "isFocus" : "", "top-search"])}" data-v-d05fa6fd>`);
      if (!isFocus.value) {
        _push(`<img${ssrRenderAttr("src", _imports_7)} data-v-d05fa6fd>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_6)} data-v-d05fa6fd>`);
      }
      _push(`</div></div><div class="aiSearchDetail-content" data-v-d05fa6fd><div class="left" data-v-d05fa6fd><h2 class="left-h2" data-v-d05fa6fd>${ssrInterpolate(params.value.content)}</h2><div class="answer" data-v-d05fa6fd><img${ssrRenderAttr("src", _imports_1$1)} data-v-d05fa6fd><div data-v-d05fa6fd>\u56DE\u7B54</div></div>`);
      if (loadStatus.value && unref(routing).isLoad) {
        _push(`<div class="loading text-hide" data-v-d05fa6fd><div class="spinnerCom fl mr-10" data-v-d05fa6fd></div> ${ssrInterpolate(loadingMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="detailContent" data-v-d05fa6fd>`);
      _push(ssrRenderComponent(contentCom, { content: content.value }, null, _parent));
      _push(`</div><div class="list" data-v-d05fa6fd><ul data-v-d05fa6fd>`);
      if (params.value.extendedReadingFlag && isShow.value && !isPageLoading.value) {
        _push(`<li class="item" data-v-d05fa6fd>`);
        if (extendList.value && extendList.value.length > 0) {
          _push(`<div class="extend" data-v-d05fa6fd><div class="extend-top" data-v-d05fa6fd><div data-v-d05fa6fd>${ssrInterpolate(_ctx.$t("aiSearch.\u5EF6\u4F38\u9605\u8BFB"))}</div><img${ssrRenderAttr("src", _imports_2$1)} data-v-d05fa6fd></div>`);
          if (extendState.value) {
            _push(`<div class="extend-content" data-v-d05fa6fd><!--[-->`);
            ssrRenderList(extendList.value, (data) => {
              _push(`<div class="content-item" data-v-d05fa6fd><div class="snippet text-hide-2"${ssrRenderAttr("title", data.snippet)} data-v-d05fa6fd>${ssrInterpolate(data.snippet)}</div>`);
              if (!_ctx.$isEmpty(data.title) && !_ctx.$isEmpty(data.seeMoreUrl)) {
                _push(`<a target="_blank" class="text-hide"${ssrRenderAttr("href", data.seeMoreUrl)} data-v-d05fa6fd><span data-v-d05fa6fd>${ssrInterpolate(data.title)}</span></a>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.$isEmpty(shareCode.value) && !isPageLoading.value) {
        _push(`<li class="item" data-v-d05fa6fd><div class="inquiry" style="${ssrRenderStyle({ height: isQuestion.value ? "150px" : "auto" })}" data-v-d05fa6fd><div class="inquiry-title" data-v-d05fa6fd><div class="inquiry-title-left" data-v-d05fa6fd><div class="left-action" data-v-d05fa6fd><img${ssrRenderAttr("src", _imports_3)} data-v-d05fa6fd> ${ssrInterpolate(_ctx.$t("public.\u5206\u4EAB"))}</div>`);
        if (params.value.searchDepth != "CONCISE") {
          _push(`<div class="left-action" data-v-d05fa6fd><img${ssrRenderAttr("src", _imports_10)} data-v-d05fa6fd> ${ssrInterpolate(_ctx.$t("aiSearch.\u7B80\u6D01"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (params.value.searchDepth != "THOROUGH") {
          _push(`<div class="left-action" data-v-d05fa6fd><img${ssrRenderAttr("src", _imports_11)} data-v-d05fa6fd> ${ssrInterpolate(_ctx.$t("aiSearch.\u6DF1\u5EA6\u7814\u7A76"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (params.value.searchDepth != "RESEARCH") {
          _push(`<div class="left-action" data-v-d05fa6fd><img${ssrRenderAttr("src", _imports_12)} data-v-d05fa6fd> ${ssrInterpolate(_ctx.$t("aiSearch.\u5B66\u672F\u7814\u7A76"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inquiry-title-right" data-v-d05fa6fd><div style="${ssrRenderStyle({ "padding-bottom": "4px" })}" data-v-d05fa6fd>${ssrInterpolate(_ctx.$t("aiSearch.\u8FFD\u95EE"))}</div>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (isCreatePPT.value) {
                _push2(ssrRenderComponent(_component_Poptip, {
                  placement: "bottom",
                  modelValue: popVisible.value,
                  "onUpdate:modelValue": ($event) => popVisible.value = $event,
                  transfer: false,
                  "popper-class": "popperClass2"
                }, {
                  content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (exportLoading.value) {
                        _push3(`<div class="popperClass2-item" data-v-d05fa6fd${_scopeId2}><div class="spinnerCom fl mr-10" data-v-d05fa6fd${_scopeId2}></div> ${ssrInterpolate(_ctx.$t("aiSearch.\u5BFC\u51FA\u4E2D"))}... </div>`);
                      } else {
                        _push3(`<!--[--><div class="popperClass2-item" data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(_ctx.$t("public.\u5BFC\u51FA"))}word </div><div class="popperClass2-item" data-v-d05fa6fd${_scopeId2}>${ssrInterpolate(_ctx.$t("public.\u5BFC\u51FA"))}PDF </div><!--]-->`);
                      }
                    } else {
                      return [
                        exportLoading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "popperClass2-item"
                        }, [
                          createVNode("div", { class: "spinnerCom fl mr-10" }),
                          createTextVNode(" " + toDisplayString(_ctx.$t("aiSearch.\u5BFC\u51FA\u4E2D")) + "... ", 1)
                        ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("div", {
                            class: "popperClass2-item",
                            onClick: ($event) => unref(toExportFile)("DOCX")
                          }, toDisplayString(_ctx.$t("public.\u5BFC\u51FA")) + "word ", 9, ["onClick"]),
                          createVNode("div", {
                            class: "popperClass2-item",
                            onClick: ($event) => unref(toExportFile)("PDF")
                          }, toDisplayString(_ctx.$t("public.\u5BFC\u51FA")) + "PDF ", 9, ["onClick"])
                        ], 64))
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img style="${ssrRenderStyle({ "margin-left": "8px" })}"${ssrRenderAttr("src", _imports_4)} data-v-d05fa6fd${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          style: { "margin-left": "8px" },
                          src: _imports_4
                        })
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
                isCreatePPT.value ? (openBlock(), createBlock(_component_Poptip, {
                  key: 0,
                  placement: "bottom",
                  modelValue: popVisible.value,
                  "onUpdate:modelValue": ($event) => popVisible.value = $event,
                  transfer: false,
                  "popper-class": "popperClass2"
                }, {
                  content: withCtx(() => [
                    exportLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "popperClass2-item"
                    }, [
                      createVNode("div", { class: "spinnerCom fl mr-10" }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("aiSearch.\u5BFC\u51FA\u4E2D")) + "... ", 1)
                    ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("div", {
                        class: "popperClass2-item",
                        onClick: ($event) => unref(toExportFile)("DOCX")
                      }, toDisplayString(_ctx.$t("public.\u5BFC\u51FA")) + "word ", 9, ["onClick"]),
                      createVNode("div", {
                        class: "popperClass2-item",
                        onClick: ($event) => unref(toExportFile)("PDF")
                      }, toDisplayString(_ctx.$t("public.\u5BFC\u51FA")) + "PDF ", 9, ["onClick"])
                    ], 64))
                  ]),
                  default: withCtx(() => [
                    createVNode("img", {
                      style: { "margin-left": "8px" },
                      src: _imports_4
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="inquiry-input" data-v-d05fa6fd${_scopeId}>`);
              if (isQuestion.value) {
                _push2(ssrRenderComponent(_component_Input, {
                  class: "inquiry-content",
                  modelValue: questionContent.value,
                  "onUpdate:modelValue": ($event) => questionContent.value = $event,
                  type: "textarea",
                  rows: 3,
                  placeholder: "\u7EE7\u7EED\u63D0\u95EE..."
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (isQuestion.value) {
                _push2(`<div class="input-btn" data-v-d05fa6fd${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u641C\u7D22"))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "inquiry-input" }, [
                  isQuestion.value ? (openBlock(), createBlock(_component_Input, {
                    key: 0,
                    class: "inquiry-content",
                    modelValue: questionContent.value,
                    "onUpdate:modelValue": ($event) => questionContent.value = $event,
                    type: "textarea",
                    rows: 3,
                    placeholder: "\u7EE7\u7EED\u63D0\u95EE..."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  isQuestion.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "input-btn",
                    onClick: unref(toQuestion)
                  }, toDisplayString(_ctx.$t("public.\u641C\u7D22")), 9, ["onClick"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(list.value, (item, index) => {
        _push(`<!--[-->`);
        if (!_ctx.$isEmpty(item.content)) {
          _push(`<li class="${ssrRenderClass([item.status ? "active" : "", "item"])}" data-v-d05fa6fd><div class="title" data-v-d05fa6fd><img${ssrRenderAttr("src", item.icon)} alt="" data-v-d05fa6fd> ${ssrInterpolate(item.name)} `);
          if (!_ctx.$isEmpty(item.content)) {
            _push(`<text data-v-d05fa6fd>${ssrInterpolate(JSON.parse(item.content).length)}</text>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="fr" data-v-d05fa6fd>${ssrInterpolate(item.status ? _ctx.$t("public.\u6536\u8D77") : _ctx.$t("public.\u5C55\u5F00"))} <em class="right-arrow" data-v-d05fa6fd></em></div></div>`);
          if (!_ctx.$isEmpty(item.content)) {
            _push(`<div class="content" data-v-d05fa6fd>`);
            if (item.key == "RELATED_EVENTS" || item.key == "ORGANIZE" || item.key == "CHARACTER") {
              _push(ssrRenderComponent(unref(Table), {
                columns: item.columns,
                data: JSON.parse(item.content) || [],
                onClick: () => {
                }
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            if (item.key == "REFERENCES") {
              _push(`<div class="references" data-v-d05fa6fd>`);
              if (!_ctx.$isEmpty(item.content)) {
                _push(`<!--[-->`);
                ssrRenderList(JSON.parse(item.content), (data, idx) => {
                  _push(`<a class="text-hide-2" target="_blank"${ssrRenderAttr("href", data.seeMoreUrl)} data-v-d05fa6fd>${ssrInterpolate(idx + 1)} ${ssrInterpolate(data.title)}</a>`);
                });
                _push(`<!--]-->`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div></div>`);
      if (isCreatePPT.value) {
        _push(`<div class="right" data-v-d05fa6fd><div class="area" data-v-d05fa6fd><div class="title" data-v-d05fa6fd><div class="${ssrRenderClass([rightState.value == 1 ? "title-item-active" : "", "title-item"])}" style="${ssrRenderStyle({ "display": "flex" })}" data-v-d05fa6fd>`);
        if (rightState.value == 1) {
          _push(`<img${ssrRenderAttr("src", _imports_5$1)} data-v-d05fa6fd>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_6$1)} data-v-d05fa6fd>`);
        }
        _push(` ${ssrInterpolate(_ctx.$t("aiSearch.\u5927\u7EB2"))}</div><div class="${ssrRenderClass([rightState.value == 2 ? "title-item-active" : "", "title-item"])}" style="${ssrRenderStyle({ "display": "flex", "margin-left": "24px" })}" data-v-d05fa6fd>`);
        if (rightState.value == 2) {
          _push(`<img${ssrRenderAttr("src", _imports_7$1)} data-v-d05fa6fd>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_8)} data-v-d05fa6fd>`);
        }
        _push(` ${ssrInterpolate(_ctx.$t("aiSearch.\u8111\u56FE"))}</div></div><div class="content" style="${ssrRenderStyle({ "overflow-y": _ctx.$isEmpty(outlineContent.value) ? "hidden" : "auto" })}" data-v-d05fa6fd>`);
        if (_ctx.$isEmpty(outlineContent.value)) {
          _push(`<div style="${ssrRenderStyle({ "width": "calc(100% - 32px)", "margin-left": "16px" })}" data-v-d05fa6fd><div class="spinnerCom fl mr-10" data-v-d05fa6fd></div> ${ssrInterpolate(_ctx.$t("aiSearch.\u5927\u7EB2\u751F\u6210\u4E2D"))}... </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="content-text" data-v-d05fa6fd>`);
        if (rightState.value == 1) {
          _push(ssrRenderComponent(contentCom, { content: outlineContent.value }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (rightState.value == 2) {
          _push(`<!--[--><div class="markmap-content" data-v-d05fa6fd>`);
          if (isMinBrainShow.value) {
            _push(`<svg id="markmap" width="100%" height="100%" class="w-screen h-screen leading-none markmap mm-dwm9rn-1" data-v-d05fa6fd></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="markmap-action" data-v-d05fa6fd>`);
          if (actionLoading.value) {
            _push(`<div class="spinnerCom" data-v-d05fa6fd></div>`);
          } else {
            _push(`<!--[--><img class="action-item"${ssrRenderAttr("src", _imports_9)} data-v-d05fa6fd><img class="action-item"${ssrRenderAttr("src", _imports_10$1)} data-v-d05fa6fd><!--]-->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (!_ctx.$isEmpty(outlineContent.value)) {
          _push(`<div class="createPPT" data-v-d05fa6fd><div data-v-d05fa6fd></div><div class="ppt-content" data-v-d05fa6fd><img${ssrRenderAttr("src", _imports_11$1)} data-v-d05fa6fd><div data-v-d05fa6fd>${ssrInterpolate(_ctx.$t("public.\u751F\u6210"))}PPT</div></div><div data-v-d05fa6fd></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        ref_key: "pptRef",
        ref: pptRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_previewImg, {
        ref_key: "previewImgRef",
        ref: previewImgRef
      }, null, _parent));
      if (isMaxBrainShow.value) {
        _push(`<div class="maxBrain" data-v-d05fa6fd><div class="markmap-content" id="searchCanvas" data-v-d05fa6fd><svg id="markmap2" width="100%" height="100%" class="w-screen h-screen leading-none markmap mm-dwm9rn-1" data-v-d05fa6fd></svg></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ossUploaderNew, {
        ref_key: "ossUploaderNewRef",
        ref: ossUploaderNewRef,
        style: { "display": "none" },
        onUploadSuccess: uploadImg
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/search/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d05fa6fd"]]);

export { detail as default };
//# sourceMappingURL=detail-31a81d2f.mjs.map
