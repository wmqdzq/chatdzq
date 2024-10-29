import { a as _export_sfc, g as getRouting, d as __nuxt_component_0, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './ossUploader-2d65ed0f.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_2 } from './electric-f4a0b755.mjs';
import { useRouter } from 'vue-router';
import { c as curriculumPng } from './curriculum-88d76de0.mjs';
import ipkg from 'view-ui-plus';
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
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB7ZhBTsJAFIYf0IUr0pCQABtaT4CegHgC4gEMegI8gXAB4s61HqBHULwAeAPqgsDSBQvZtP5Pp9gYDdPSKal5X/IyM2WGmX/eTOE9IkEQBEEQBEE4DBXKgXq93qlWq0fr9fqNcqZMhmm1WjeWZc1KpdKc65Qzxjxog1qtdheG4SD2uAtPtiuVyvM7oBwokQEajYYDjz2h6vzRZQ7hZ6vVyifDZH5EIa5bLpdnpMRB6Pbexeou6o/NZrNHhslUYOQ5eMfmNsp72GX0Odf5mWq6MI9fQGSQTAXibtmx5jWOYB+Cth5UdX42io0x+mbNVOBisXjB4l0c0ZPlcnn7Wx+I5mKo+p2avocWZYzOgpXInf2ywPjv4KERgUVHBBYdEVh0RGDR+fcCtf+qIbSJYscQ/zOpKCTx4BgWwAYJxkTRQqjM1x2H9AbbEBsbwsaUEu2InidSVR8edCkBHCdyKMXRhu4YiOO1TRF1cLzIpybVdUoVTWDBUUSgRZqQCMK4sGlPkuyKr0oH5rJIU/B3Q6BD3zkdbc//RNuDnGpAOuIz7YfSQ/scx8gPgiCkBOzyvNo4ztl40dSwB0qJ9h10HMfebDZT+sqlMD4WMYHAV8oQRPltFL0orwPmuH/HlJJEaUN+WWABnrr4RlKOcTAPpx6v9klrpFokhPZRXEBsJ7bTmczJqUWcCr5zIwibkCAIgiAIgiAIgiCk4AMVvcjtoBjFgAAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "uploadVitae",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { expose: __expose, emit: emits }) {
    const routing = getRouting();
    const isShow = ref(false);
    const { Modal } = ipkg;
    const router = useRouter();
    const modalShow = ref(false);
    const loading = ref(false);
    const loadingText = ref("");
    const { proxy } = getCurrentInstance();
    const fileName = ref("");
    const electricityVal = ref("");
    const params = ref({
      resourceCode: "",
      positionCode: ""
    });
    const showFn = (e) => {
      params.value.positionCode = e;
      modalShow.value = true;
      loading.value = false;
      isShow.value = false;
      loadingText.value = "\u4E0A\u4F20\u4E2D...";
      electricityVal.value = "";
      proxy.$api.queryElectricity({
        type: "HR_GENERATE_RESUME"
      }).then((res) => {
        if (res.data && res.data.electricityVal) {
          electricityVal.value = res.data.electricityVal;
        }
      });
    };
    const uploadSuccess = (e) => {
      let fileList = [];
      params.value.resourceCode = e && e[0] ? e[0].code : "";
      fileName.value = e[0].name;
      e.forEach((item) => {
        fileList.push({
          resourceName: item.name,
          resourceCode: item.code,
          resourceSize: item.size
        });
      });
      let data = {
        resourceList: fileList
      };
      proxy.$api.resourceUploadCallback(data).then(() => {
        loading.value = false;
        isShow.value = true;
        loadingText.value = "AI\u5206\u6790\u4E2D...";
      }).catch(() => {
        loading.value = false;
      });
    };
    const toSubmit = () => {
      if (proxy.$isEmpty(params.value.resourceCode)) {
        proxy.$Message.error("\u8BF7\u4E0A\u4F20\u7B80\u5386");
        return;
      }
      loading.value = true;
      proxy.$api.addResume(params.value).then((res) => {
        modalShow.value = false;
        let data = {
          code: res.data.code
        };
        proxy.$api.getResumeInfo(data).then((json) => {
          routing.getUserPoints(proxy);
          if (res.data.dataStatus == "NO_FILTERED") {
            Modal.confirm({
              title: "\u63D0\u793A",
              okText: "\u786E\u5B9A",
              cancelText: "",
              content: json.data.matchDescription
            });
            modalShow.value = false;
            loading.value = false;
            emits("init");
          } else {
            router.push("/robot/brain/hr/create?code=" + res.data.code);
            loading.value = false;
          }
        });
      }).catch(() => {
        loading.value = false;
      });
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Spin = resolveComponent("Spin");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_ossUploader = __nuxt_component_1;
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top" data-v-ea2395b9${_scopeId}>\u4E0A\u4F20\u7B80\u5386</div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, "\u4E0A\u4F20\u7B80\u5386")
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
              loading: loading.value,
              onClick: toSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="submit" data-v-ea2395b9${_scopeId2}><div data-v-ea2395b9${_scopeId2}>\u786E\u5B9A</div><div class="tag" data-v-ea2395b9${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} data-v-ea2395b9${_scopeId2}><div data-v-ea2395b9${_scopeId2}>${ssrInterpolate(electricityVal.value)}\u7535\u91CF</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "submit" }, [
                      createVNode("div", null, "\u786E\u5B9A"),
                      createVNode("div", { class: "tag" }, [
                        createVNode("img", { src: _imports_2 }),
                        createVNode("div", null, toDisplayString(electricityVal.value) + "\u7535\u91CF", 1)
                      ])
                    ])
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
                loading: loading.value,
                onClick: toSubmit
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "submit" }, [
                    createVNode("div", null, "\u786E\u5B9A"),
                    createVNode("div", { class: "tag" }, [
                      createVNode("img", { src: _imports_2 }),
                      createVNode("div", null, toDisplayString(electricityVal.value) + "\u7535\u91CF", 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-ea2395b9${_scopeId}><div class="upload" data-v-ea2395b9${_scopeId}>`);
            if (loadingText.value == "\u4E0A\u4F20\u4E2D...") {
              _push2(ssrRenderComponent(_component_Spin, {
                fix: "",
                show: loading.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u4E0A\u4F20\u4E2D...`);
                  } else {
                    return [
                      createTextVNode("\u4E0A\u4F20\u4E2D...")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Spin, {
                fix: "",
                show: loading.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`AI\u5206\u6790\u4E2D...`);
                  } else {
                    return [
                      createTextVNode("AI\u5206\u6790\u4E2D...")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ossUploader, {
                    id: "cImage-upload",
                    inputTitle: isShow.value ? "" : "\u672A\u9009\u62E9\u4EFB\u4F55\u6587\u4EF6",
                    format: ["pdf"],
                    maxSize: 20,
                    style: { "width": "100%", "height": "100%" },
                    modeType: "freedom",
                    onLoadings: ($event) => loading.value = true,
                    onUploadSuccess: uploadSuccess
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="upload-area" data-v-ea2395b9${_scopeId3}>`);
                        if (isShow.value) {
                          _push4(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-ea2395b9${_scopeId3}><img${ssrRenderAttr("src", unref(curriculumPng))} data-v-ea2395b9${_scopeId3}><div data-v-ea2395b9${_scopeId3}>${ssrInterpolate(fileName.value)}</div></div>`);
                        } else {
                          _push4(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-ea2395b9${_scopeId3}><div class="btn" data-v-ea2395b9${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} data-v-ea2395b9${_scopeId3}><div data-v-ea2395b9${_scopeId3}>\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386</div></div><div data-v-ea2395b9${_scopeId3}>\u70B9\u51FB\u4E0A\u65B9\u201C\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u533A\u57DF</div><div data-v-ea2395b9${_scopeId3}>\u6587\u4EF6\u53EA\u652F\u6301PDF\u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC720M</div></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "upload-area" }, [
                            isShow.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              style: { "text-align": "center" }
                            }, [
                              createVNode("img", { src: unref(curriculumPng) }, null, 8, ["src"]),
                              createVNode("div", null, toDisplayString(fileName.value), 1)
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              style: { "text-align": "center" }
                            }, [
                              createVNode("div", { class: "btn" }, [
                                createVNode("img", { src: _imports_0 }),
                                createVNode("div", null, "\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386")
                              ]),
                              createVNode("div", null, "\u70B9\u51FB\u4E0A\u65B9\u201C\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u533A\u57DF"),
                              createVNode("div", null, "\u6587\u4EF6\u53EA\u652F\u6301PDF\u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC720M")
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ossUploader, {
                      id: "cImage-upload",
                      inputTitle: isShow.value ? "" : "\u672A\u9009\u62E9\u4EFB\u4F55\u6587\u4EF6",
                      format: ["pdf"],
                      maxSize: 20,
                      style: { "width": "100%", "height": "100%" },
                      modeType: "freedom",
                      onLoadings: ($event) => loading.value = true,
                      onUploadSuccess: uploadSuccess
                    }, {
                      content: withCtx(() => [
                        createVNode("div", { class: "upload-area" }, [
                          isShow.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            style: { "text-align": "center" }
                          }, [
                            createVNode("img", { src: unref(curriculumPng) }, null, 8, ["src"]),
                            createVNode("div", null, toDisplayString(fileName.value), 1)
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            style: { "text-align": "center" }
                          }, [
                            createVNode("div", { class: "btn" }, [
                              createVNode("img", { src: _imports_0 }),
                              createVNode("div", null, "\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386")
                            ]),
                            createVNode("div", null, "\u70B9\u51FB\u4E0A\u65B9\u201C\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u533A\u57DF"),
                            createVNode("div", null, "\u6587\u4EF6\u53EA\u652F\u6301PDF\u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC720M")
                          ]))
                        ])
                      ]),
                      _: 1
                    }, 8, ["inputTitle", "onLoadings"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "upload" }, [
                  loadingText.value == "\u4E0A\u4F20\u4E2D..." ? (openBlock(), createBlock(_component_Spin, {
                    key: 0,
                    fix: "",
                    show: loading.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u4E0A\u4F20\u4E2D...")
                    ]),
                    _: 1
                  }, 8, ["show"])) : (openBlock(), createBlock(_component_Spin, {
                    key: 1,
                    fix: "",
                    show: loading.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("AI\u5206\u6790\u4E2D...")
                    ]),
                    _: 1
                  }, 8, ["show"])),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_ossUploader, {
                        id: "cImage-upload",
                        inputTitle: isShow.value ? "" : "\u672A\u9009\u62E9\u4EFB\u4F55\u6587\u4EF6",
                        format: ["pdf"],
                        maxSize: 20,
                        style: { "width": "100%", "height": "100%" },
                        modeType: "freedom",
                        onLoadings: ($event) => loading.value = true,
                        onUploadSuccess: uploadSuccess
                      }, {
                        content: withCtx(() => [
                          createVNode("div", { class: "upload-area" }, [
                            isShow.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              style: { "text-align": "center" }
                            }, [
                              createVNode("img", { src: unref(curriculumPng) }, null, 8, ["src"]),
                              createVNode("div", null, toDisplayString(fileName.value), 1)
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              style: { "text-align": "center" }
                            }, [
                              createVNode("div", { class: "btn" }, [
                                createVNode("img", { src: _imports_0 }),
                                createVNode("div", null, "\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386")
                              ]),
                              createVNode("div", null, "\u70B9\u51FB\u4E0A\u65B9\u201C\u4E0A\u4F20\u9644\u4EF6\u7B80\u5386\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u533A\u57DF"),
                              createVNode("div", null, "\u6587\u4EF6\u53EA\u652F\u6301PDF\u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC720M")
                            ]))
                          ])
                        ]),
                        _: 1
                      }, 8, ["inputTitle", "onLoadings"])
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/modal/uploadVitae.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uploadVitae = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea2395b9"]]);

export { uploadVitae as default };
//# sourceMappingURL=uploadVitae-579dce57.mjs.map
