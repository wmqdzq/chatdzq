import { a as _export_sfc, d as __nuxt_component_0, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './ossUploaderNew-da7960a9.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
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
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABlUlEQVR4Xu2YvUpDQRCFvyUiuSGPoCD4AoJCaktLwUawsLAMum/i9aezsLVMmUbQTp9DCx9AkhAMK5gLST3Leln23H7mzp4958zsOAr/XOHnRwCIAYUjIAkUTgCZoCQgCRSOgCRQOAHUBdqTwO1sl0UY40If5864qp7bYGN7ANSTO3DD5tBjfHVUGADTR+C8OfQLvjoUAC0g0KIExABJQB4gE1QXUBvUHLBEQIOQJkGNwkW/BcII3ztu4SkQsRCp5wNYDCH0bYW7PWBnGRu+gDdbHmawUeM33y3x9sdQPfkAt2X5aYKYT3y1bckrACyo/cXUkwE4D6Fry+EOgIZBMRJw39C5/38J2E69iqrX9wE5mqAAiERADJAE1lZi8oAMJ8FIC0AeIA+QB6zW4jJBmWB++wB1gUgEim+D19MHHBfNRugJ3zuNhNQUbl+ImH63FnQz3yf8jAh06bgTLqvX2JSW+PYAsFSbIEYAJAA1q5RiQFbXlaBYMSABqFmlFAOyuq4ExYoBCUDNKqUYkNV1JSi2eAb8AuUUsUGTySQOAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upload",
  __ssrInlineRender: true,
  emits: ["submit"],
  setup(__props, { expose: __expose, emit }) {
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const fileList = ref([]);
    const inputName = ref("");
    const showFn = () => {
      fileList.value = [];
      inputName.value = "";
      modalShow.value = true;
    };
    const uploadSuccess = (e) => {
      if (fileList.value.length > 5) {
        proxy.$Message.error("\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6");
        return;
      }
      fileList.value.push({
        code: e[0].code,
        name: e[0].name,
        url: e[0].url,
        type: "resourceCodeList"
      });
    };
    const toEnter = proxy.$debounce(() => {
      if (proxy.$isEmpty(inputName.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165");
        return;
      }
      if (fileList.value.length >= 5) {
        proxy.$Message.error("\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6");
        return;
      }
      fileList.value.push({
        code: "",
        name: JSON.parse(JSON.stringify(inputName.value)),
        url: "",
        type: "websiteList"
      });
      inputName.value = "";
    }, 300);
    const toSubmit = proxy.$debounce(() => {
      if (fileList.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      emit("submit", fileList.value);
      modalShow.value = false;
    }, 300);
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_ossUploaderNew = __nuxt_component_0$1;
      const _component_Icon = resolveComponent("Icon");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 680
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-8ba300ee${_scopeId}>\u4E0A\u4F20\u6587\u4EF6</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u4E0A\u4F20\u6587\u4EF6")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => modalShow.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: unref(toSubmit)
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
          } else {
            return [
              createVNode(_component_Button, {
                onClick: ($event) => modalShow.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u53D6\u6D88")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_Button, {
                type: "primary",
                onClick: unref(toSubmit)
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="upload-content" data-v-8ba300ee${_scopeId}><div class="content-area" data-v-8ba300ee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ossUploaderNew, {
                    id: "cImage-uploads",
                    selQty: fileList.value.length,
                    limit: 5,
                    format: ["pdf", "txt", "doc", "docx"],
                    maxSize: 20,
                    multiple: true,
                    modeType: "freedom",
                    onUploadSuccess: uploadSuccess
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="aiUploadComm" data-v-8ba300ee${_scopeId3}><div class="icon" data-v-8ba300ee${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8ba300ee${_scopeId3}></div><h3 data-v-8ba300ee${_scopeId3}>\u70B9\u51FB\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20</h3><p data-v-8ba300ee${_scopeId3}>\u652F\u6301PDF\u3001TXT\u3001DOC\u3001DOCX\uFF0C\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC720MB,</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "aiUploadComm" }, [
                            createVNode("div", { class: "icon" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: ""
                              })
                            ]),
                            createVNode("h3", null, "\u70B9\u51FB\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20"),
                            createVNode("p", null, "\u652F\u6301PDF\u3001TXT\u3001DOC\u3001DOCX\uFF0C\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC720MB,")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ossUploaderNew, {
                      id: "cImage-uploads",
                      selQty: fileList.value.length,
                      limit: 5,
                      format: ["pdf", "txt", "doc", "docx"],
                      maxSize: 20,
                      multiple: true,
                      modeType: "freedom",
                      onUploadSuccess: uploadSuccess
                    }, {
                      content: withCtx(() => [
                        createVNode("div", { class: "aiUploadComm" }, [
                          createVNode("div", { class: "icon" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ]),
                          createVNode("h3", null, "\u70B9\u51FB\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20"),
                          createVNode("p", null, "\u652F\u6301PDF\u3001TXT\u3001DOC\u3001DOCX\uFF0C\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC720MB,")
                        ])
                      ]),
                      _: 1
                    }, 8, ["selQty"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="content-list" data-v-8ba300ee${_scopeId}><div class="list-title" data-v-8ba300ee${_scopeId}><div data-v-8ba300ee${_scopeId}>\u6587\u4EF6\u6570\u91CF ${ssrInterpolate(fileList.value.length)}/ <span data-v-8ba300ee${_scopeId}>5</span></div></div><div class="list-item" data-v-8ba300ee${_scopeId}><!--[-->`);
            ssrRenderList(fileList.value, (item, i) => {
              _push2(`<div class="item-one" data-v-8ba300ee${_scopeId}><div class="name text-hide-1"${ssrRenderAttr("title", item.name)} data-v-8ba300ee${_scopeId}>${ssrInterpolate(item.name)}</div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                type: "ios-trash",
                size: "20",
                class: "pointer",
                color: "#999999",
                onClick: ($event) => fileList.value.splice(i, 1)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="content-input" data-v-8ba300ee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              search: "",
              "enter-button": "\u6DFB\u52A0",
              onOnSearch: unref(toEnter),
              modelValue: inputName.value,
              "onUpdate:modelValue": ($event) => inputName.value = $event,
              placeholder: "\u8F93\u5165\u60F3\u8981\u53C2\u8003\u7684\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5934\u6761\u53F7\uFF0C\u767E\u5BB6\u53F7\u7684\u6587\u7AE0\u94FE\u63A5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "upload-content" }, [
                createVNode("div", { class: "content-area" }, [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_ossUploaderNew, {
                        id: "cImage-uploads",
                        selQty: fileList.value.length,
                        limit: 5,
                        format: ["pdf", "txt", "doc", "docx"],
                        maxSize: 20,
                        multiple: true,
                        modeType: "freedom",
                        onUploadSuccess: uploadSuccess
                      }, {
                        content: withCtx(() => [
                          createVNode("div", { class: "aiUploadComm" }, [
                            createVNode("div", { class: "icon" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: ""
                              })
                            ]),
                            createVNode("h3", null, "\u70B9\u51FB\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20"),
                            createVNode("p", null, "\u652F\u6301PDF\u3001TXT\u3001DOC\u3001DOCX\uFF0C\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC720MB,")
                          ])
                        ]),
                        _: 1
                      }, 8, ["selQty"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "content-list" }, [
                  createVNode("div", { class: "list-title" }, [
                    createVNode("div", null, [
                      createTextVNode("\u6587\u4EF6\u6570\u91CF " + toDisplayString(fileList.value.length) + "/ ", 1),
                      createVNode("span", null, "5")
                    ])
                  ]),
                  createVNode("div", { class: "list-item" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(fileList.value, (item, i) => {
                      return openBlock(), createBlock("div", { class: "item-one" }, [
                        createVNode("div", {
                          class: "name text-hide-1",
                          title: item.name
                        }, toDisplayString(item.name), 9, ["title"]),
                        createVNode(_component_Icon, {
                          type: "ios-trash",
                          size: "20",
                          class: "pointer",
                          color: "#999999",
                          onClick: ($event) => fileList.value.splice(i, 1)
                        }, null, 8, ["onClick"])
                      ]);
                    }), 256))
                  ])
                ]),
                createVNode("div", { class: "content-input" }, [
                  createVNode(_component_Input, {
                    search: "",
                    "enter-button": "\u6DFB\u52A0",
                    onOnSearch: unref(toEnter),
                    modelValue: inputName.value,
                    "onUpdate:modelValue": ($event) => inputName.value = $event,
                    placeholder: "\u8F93\u5165\u60F3\u8981\u53C2\u8003\u7684\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5934\u6761\u53F7\uFF0C\u767E\u5BB6\u53F7\u7684\u6587\u7AE0\u94FE\u63A5"
                  }, null, 8, ["onOnSearch", "modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/creative/modal/upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uploadModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ba300ee"]]);

export { uploadModal as default };
//# sourceMappingURL=upload-94260edb.mjs.map
