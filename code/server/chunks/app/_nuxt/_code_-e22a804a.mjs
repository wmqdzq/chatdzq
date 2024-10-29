import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, g as getRouting, b as useCookie, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './previewImg-8e12aab7.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { i as icon9, a as icon10, b as icon11, c as icon12, _ as _imports_1, d as _imports_3, e as _imports_4, f as _imports_5, g as _imports_6, h as _imports_7, j as _imports_8, k as _imports_9, l as _imports_10, m as _imports_11 } from './icon12-bcfdd7c9.mjs';
import { _ as _imports_2 } from './bottom-arrow-07ec677f.mjs';
import { useRouter } from 'vue-router';
import { c as contentCom } from './content-977f7524.mjs';
import { Transformer } from 'markmap-lib';
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
import 'view-ui-plus';
import 'axios';
import 'crypto-js';
import 'pinia-plugin-persistedstate';
import 'vant';
import 'defu';
import 'qrcode.vue';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWpJREFUaEPtVjtuwzAMfTJ6hPZWHTq0Q8cMgewT2UKHjh2aIUNulR4hsAMFNqAASUWJJAqjzBiTT+9DWnZY+c+tnD9MwF8naAlYAkwHbISYBrLbLQG2hUwAS4BpILvdEmBbyAT4Pwn0ff/cNM3nbNjWe79nmnfVHkJ4AfAR/xzHcdN13YGCT04ghHAE8DiDnqZpem/bdkc5JFczDMOrc+4LwMNc++O9f8r1xee1AmKviIgb5CO2ioAY8XfiElvEHfInAG/UESUnENneO7BmnKSwigRIiZAiX7QD6UJxCHB6by11cQILSA2Rmp7cm6haQOk4aZCvHqHScdIiLyIgl8TlkOtLiv36TQ1kjRAliblmuWFFyYslkFnsVKfI7a2SAEGEOHnxBH4RoUJeTUAETj+PAYh/fi9miS1x7sLRem4CtJyl4loCVKe06iwBLWepuJYA1SmtOktAy1kqriVAdUqrzhLQcpaKu/oEzp9P3DHb+INaAAAAAElFTkSuQmCC";
const _imports_12 = "" + buildAssetsURL("more.a85658d9.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    const isCreatePPT = ref(true);
    const outlineContent = ref("");
    const transformer = new Transformer();
    transformer.transform(outlineContent.value);
    const rightState = ref(1);
    const shareCode = ref("");
    const loadingMsg = ref("\u8D44\u6599\u641C\u7D22\u4E2D...");
    const routing = getRouting();
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const content = ref("");
    ref(false);
    const extendState = ref(false);
    const extendList = ref([]);
    const isQuestion = ref(false);
    const poptipVisible = ref(false);
    const actionLoading = ref(false);
    const previewImgRef = ref();
    const list = ref([{
      name: "\u76F8\u5173\u4E8B\u4EF6",
      key: "RELATED_EVENTS",
      icon: icon9,
      iconActive: "icon75_1",
      content: "",
      columns: [{
        title: "\u4E8B\u4EF6\u540D\u79F0",
        key: "eventTitle"
      }, {
        title: "\u4E8B\u4EF6\u6982\u8FF0",
        key: "eventDescribe"
      }],
      status: false
    }, {
      name: "\u76F8\u5173\u7EC4\u7EC7",
      key: "ORGANIZE",
      icon: icon10,
      iconActive: "icon76_1",
      content: "",
      columns: [{
        title: "\u7EC4\u7EC7\u540D\u79F0",
        key: "organizeName"
      }, {
        title: "\u6982\u8FF0",
        key: "organizeDescribe"
      }],
      status: false
    }, {
      name: "\u76F8\u5173\u4EBA\u7269",
      key: "CHARACTER",
      icon: icon11,
      iconActive: "icon77_1",
      content: "",
      columns: [{
        title: "\u4EBA\u7269\u540D\u79F0",
        key: "characterName"
      }, {
        title: "\u6982\u8FF0",
        key: "characterDescribe"
      }],
      status: false
    }, {
      name: "\u53C2\u8003\u6587\u732E",
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
    const init = () => {
      var _a;
      proxy.$api.getAiSearchRecordDetail({
        code: (_a = router.currentRoute.value.params) == null ? void 0 : _a.code
      }).then((res) => {
        params.value.content = res.data.request;
        content.value = res.data.content;
        if (!proxy.$isEmpty(res.data.extent)) {
          shareCode.value = res.data.aiRecordCode;
          outlineContent.value = JSON.parse(res.data.extent).OUTLINE;
          list.value[0].content = JSON.parse(res.data.extent).EVENT;
          list.value[1].content = JSON.parse(res.data.extent).ORGANIZE;
          list.value[2].content = JSON.parse(res.data.extent).CHARACTER;
          list.value[3].content = JSON.parse(res.data.extent).REFERENCES;
          extendList.value = JSON.parse(res.data.extent).EXTENDED_READING;
        }
        if (proxy.$isEmpty(outlineContent.value)) {
          isCreatePPT.value = false;
        }
      });
    };
    proxy.$debounce((type) => {
      actionLoading.value = true;
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
            proxy.$Message.success("\u5DF2\u4E0B\u8F7D");
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
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Input = resolveComponent("Input");
      const _component_Table = resolveComponent("Table");
      const _component_previewImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search" }, _attrs))} data-v-5a7285fe><div class="search-back" data-v-5a7285fe><img${ssrRenderAttr("src", _imports_0)} data-v-5a7285fe><div data-v-5a7285fe>\u8FD4\u56DE</div></div><div class="search-content" data-v-5a7285fe>`);
      if (!("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("authtoken").value) {
        _push(`<div class="mosaic" data-v-5a7285fe><div class="mosaic-btn" data-v-5a7285fe>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "primary",
          shape: "circle",
          onClick: ($event) => unref(router).push("/login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8BF7\u767B\u5F55\u67E5\u770B\u5168\u90E8`);
            } else {
              return [
                createTextVNode("\u8BF7\u767B\u5F55\u67E5\u770B\u5168\u90E8")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content-left" data-v-5a7285fe><h2 class="left-h2" data-v-5a7285fe>${ssrInterpolate(params.value.content)}</h2><div class="answer" data-v-5a7285fe><img${ssrRenderAttr("src", _imports_1)} data-v-5a7285fe><div data-v-5a7285fe>\u56DE\u7B54</div></div>`);
      if (_ctx.loadStatus && unref(routing).isLoad) {
        _push(`<div class="loading text-hide" data-v-5a7285fe><div class="spinnerCom fl mr-10" data-v-5a7285fe></div> ${ssrInterpolate(loadingMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="detailContent" data-v-5a7285fe>`);
      _push(ssrRenderComponent(contentCom, { content: content.value }, null, _parent));
      _push(`</div><div class="list" data-v-5a7285fe><ul data-v-5a7285fe><li class="item" data-v-5a7285fe><div class="extend" data-v-5a7285fe><div class="extend-top" data-v-5a7285fe><div data-v-5a7285fe>\u5EF6\u4F38\u9605\u8BFB</div><img${ssrRenderAttr("src", _imports_2)} data-v-5a7285fe></div>`);
      if (!_ctx.$isEmpty(list.value[3].content) && extendState.value) {
        _push(`<div class="extend-content" data-v-5a7285fe><!--[-->`);
        ssrRenderList(extendList.value, (data) => {
          _push(`<div class="content-item" data-v-5a7285fe><div class="snippet text-hide-2"${ssrRenderAttr("title", data.snippet)} data-v-5a7285fe>${ssrInterpolate(data.snippet)}</div><a target="_blank" class="text-hide"${ssrRenderAttr("href", data.seeMoreUrl)} data-v-5a7285fe><span data-v-5a7285fe>${ssrInterpolate(data.title)}</span></a></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></li>`);
      if (!_ctx.$isEmpty(shareCode.value)) {
        _push(`<li class="item" style="${ssrRenderStyle({ "display": "none" })}" data-v-5a7285fe><div class="inquiry" style="${ssrRenderStyle({ height: isQuestion.value ? "150px" : "auto" })}" data-v-5a7285fe><div class="inquiry-title" data-v-5a7285fe><div class="inquiry-title-left" data-v-5a7285fe><div class="left-action" data-v-5a7285fe><img${ssrRenderAttr("src", _imports_3)} data-v-5a7285fe> \u5206\u4EAB </div></div><div class="inquiry-title-right" data-v-5a7285fe><div style="${ssrRenderStyle({ "padding-bottom": "4px" })}" data-v-5a7285fe>\u8FFD\u95EE</div>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Poptip, {
                placement: "bottom",
                "popper-class": "popperClass2"
              }, {
                content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="popperClass2-item" data-v-5a7285fe${_scopeId2}>\u5BFC\u51FAWORD</div><div class="popperClass2-item" data-v-5a7285fe${_scopeId2}>\u5BFC\u51FAPDF</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "popperClass2-item" }, "\u5BFC\u51FAWORD"),
                      createVNode("div", { class: "popperClass2-item" }, "\u5BFC\u51FAPDF")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img style="${ssrRenderStyle({ "margin-left": "8px" })}"${ssrRenderAttr("src", _imports_4)} data-v-5a7285fe${_scopeId2}>`);
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
              return [
                createVNode(_component_Poptip, {
                  placement: "bottom",
                  "popper-class": "popperClass2"
                }, {
                  content: withCtx(() => [
                    createVNode("div", { class: "popperClass2-item" }, "\u5BFC\u51FAWORD"),
                    createVNode("div", { class: "popperClass2-item" }, "\u5BFC\u51FAPDF")
                  ]),
                  default: withCtx(() => [
                    createVNode("img", {
                      style: { "margin-left": "8px" },
                      src: _imports_4
                    })
                  ]),
                  _: 1
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
              _push2(`<div class="inquiry-input" data-v-5a7285fe${_scopeId}>`);
              if (isQuestion.value) {
                _push2(ssrRenderComponent(_component_Input, {
                  class: "inquiry-content",
                  modelValue: _ctx.questionContent,
                  "onUpdate:modelValue": ($event) => _ctx.questionContent = $event,
                  type: "textarea",
                  rows: 3,
                  placeholder: "\u7EE7\u7EED\u63D0\u95EE..."
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (isQuestion.value) {
                _push2(`<div class="input-btn" data-v-5a7285fe${_scopeId}>\u641C\u7D22</div>`);
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
                    modelValue: _ctx.questionContent,
                    "onUpdate:modelValue": ($event) => _ctx.questionContent = $event,
                    type: "textarea",
                    rows: 3,
                    placeholder: "\u7EE7\u7EED\u63D0\u95EE..."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  isQuestion.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "input-btn",
                    onClick: _ctx.toQuestion
                  }, "\u641C\u7D22", 8, ["onClick"])) : createCommentVNode("", true)
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
          _push(`<li class="${ssrRenderClass([item.status ? "active" : "", "item"])}" data-v-5a7285fe><div class="title" data-v-5a7285fe><img${ssrRenderAttr("src", item.icon)} alt="" data-v-5a7285fe> ${ssrInterpolate(item.name)} `);
          if (!_ctx.$isEmpty(item.content)) {
            _push(`<text data-v-5a7285fe>${ssrInterpolate(JSON.parse(item.content).length)}</text>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="fr" data-v-5a7285fe>${ssrInterpolate(item.status ? "\u6536\u8D77" : "\u5C55\u5F00")} <em class="right-arrow" data-v-5a7285fe></em></div></div>`);
          if (!_ctx.$isEmpty(item.content)) {
            _push(`<div class="content" data-v-5a7285fe>`);
            if (item.key == "RELATED_EVENTS" || item.key == "ORGANIZE" || item.key == "CHARACTER") {
              _push(ssrRenderComponent(_component_Table, {
                columns: item.columns,
                data: JSON.parse(item.content) || []
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            if (item.key == "REFERENCES") {
              _push(`<div class="references" data-v-5a7285fe>`);
              if (!_ctx.$isEmpty(item.content)) {
                _push(`<!--[-->`);
                ssrRenderList(JSON.parse(item.content), (data, idx) => {
                  _push(`<a class="text-hide-2" target="_blank"${ssrRenderAttr("href", data.seeMoreUrl)} data-v-5a7285fe>${ssrInterpolate(idx + 1)} ${ssrInterpolate(data.title)}</a>`);
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
        _push(`<div class="content-right" data-v-5a7285fe><div class="area" data-v-5a7285fe><div class="title" data-v-5a7285fe><div class="${ssrRenderClass([rightState.value == 1 ? "title-item-active" : "", "title-item"])}" style="${ssrRenderStyle({ "display": "flex" })}" data-v-5a7285fe>`);
        if (rightState.value == 1) {
          _push(`<img${ssrRenderAttr("src", _imports_5)} data-v-5a7285fe>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_6)} data-v-5a7285fe>`);
        }
        _push(` \u5927\u7EB2 </div><div class="${ssrRenderClass([rightState.value == 2 ? "title-item-active" : "", "title-item"])}" style="${ssrRenderStyle({ "display": "flex", "margin-left": "24px" })}" data-v-5a7285fe>`);
        if (rightState.value == 2) {
          _push(`<img${ssrRenderAttr("src", _imports_7)} data-v-5a7285fe>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_8)} data-v-5a7285fe>`);
        }
        _push(` \u8111\u56FE </div></div><div class="content" data-v-5a7285fe>`);
        if (_ctx.$isEmpty(outlineContent.value)) {
          _push(`<div style="${ssrRenderStyle({ "width": "calc(100% - 32px)", "margin-left": "16px" })}" data-v-5a7285fe>`);
          if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("authtoken").value) {
            _push(`<!--[--><div class="spinnerCom fl mr-10" data-v-5a7285fe></div>\u5927\u7EB2\u751F\u6210\u4E2D... <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="content-text" data-v-5a7285fe>`);
        if (rightState.value == 1) {
          _push(ssrRenderComponent(contentCom, { content: outlineContent.value }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (rightState.value == 2) {
          _push(`<!--[--><div class="markmap-content" data-v-5a7285fe><svg id="markmap" width="100%" height="100%" class="w-screen h-screen leading-none markmap mm-dwm9rn-1" data-v-5a7285fe></svg></div><div class="markmap-action" data-v-5a7285fe>`);
          if (actionLoading.value) {
            _push(`<div class="spinnerCom" data-v-5a7285fe></div>`);
          } else {
            _push(`<!--[--><img class="action-item"${ssrRenderAttr("src", _imports_9)} data-v-5a7285fe><img class="action-item"${ssrRenderAttr("src", _imports_10)} data-v-5a7285fe><!--]-->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (!_ctx.$isEmpty(outlineContent.value)) {
          _push(`<div class="createPPT" style="${ssrRenderStyle({ "display": "none" })}" data-v-5a7285fe><div data-v-5a7285fe></div><div class="ppt-content" data-v-5a7285fe><img${ssrRenderAttr("src", _imports_11)} data-v-5a7285fe><div data-v-5a7285fe>\u751F\u6210PPT</div></div>`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Poptip, {
                  modelValue: poptipVisible.value,
                  "onUpdate:modelValue": ($event) => poptipVisible.value = $event,
                  placement: "bottom",
                  "popper-class": "popperClass2"
                }, {
                  content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="popperClass2-item" data-v-5a7285fe${_scopeId2}>\u4E0B\u8F7DPPT</div><div class="popperClass2-item" data-v-5a7285fe${_scopeId2}>\u53BB\u7F16\u8F91PPT</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "popperClass2-item" }, "\u4E0B\u8F7DPPT"),
                        createVNode("div", { class: "popperClass2-item" }, "\u53BB\u7F16\u8F91PPT")
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", _imports_12)} data-v-5a7285fe${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: _imports_12,
                          onClick: withModifiers(($event) => poptipVisible.value = true, ["stop"])
                        }, null, 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Poptip, {
                    modelValue: poptipVisible.value,
                    "onUpdate:modelValue": ($event) => poptipVisible.value = $event,
                    placement: "bottom",
                    "popper-class": "popperClass2"
                  }, {
                    content: withCtx(() => [
                      createVNode("div", { class: "popperClass2-item" }, "\u4E0B\u8F7DPPT"),
                      createVNode("div", { class: "popperClass2-item" }, "\u53BB\u7F16\u8F91PPT")
                    ]),
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_12,
                        onClick: withModifiers(($event) => poptipVisible.value = true, ["stop"])
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_previewImg, {
        ref_key: "previewImgRef",
        ref: previewImgRef
      }, null, _parent));
      _push(`<div class="maxBrain" data-v-5a7285fe><div class="markmap-content" id="searchCanvas" data-v-5a7285fe><svg id="markmap2" width="100%" height="100%" class="w-screen h-screen leading-none markmap mm-dwm9rn-1" data-v-5a7285fe></svg></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/search/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _code_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a7285fe"]]);

export { _code_ as default };
//# sourceMappingURL=_code_-e22a804a.mjs.map
