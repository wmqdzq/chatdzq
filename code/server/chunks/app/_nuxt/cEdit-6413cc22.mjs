import { useSSRContext, defineComponent, ref, getCurrentInstance, onUnmounted, watch, resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, unref, createTextVNode, withDirectives, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_9, a as _imports_10, b as _imports_11 } from './copy-d1ce3f41.mjs';
import { c as contentCom } from './content-977f7524.mjs';
import { a as _export_sfc, g as getRouting } from '../server.mjs';

const _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAzZJREFUWEftlzFrFEEUx997uyQWFilSpDCddhYRBWMpRoigWBjQgKAHubldkg8QQUmCgvoBws3tHVwEwSsiCiomYJEioI2Ywk7BQguLFCksQm53nhm5g2NvLpndvYMDc+XevDe//b+3M/+H0Oc/7HM+OALMWqH/R8Hl5eURIhomojAMw53Z2dnfWdXT8akVrFarQ/V6fUYpNUlEZ5l5KAb0BxE/AcB6vV5/nhY4MaBWamBg4KFS6i4AuJYq7QKADMPwaVLQRIBBENwCgKJBLUtO2GZm3/O8VR1QLBavEtFtZl7xPG/NlMQasFwuLyilFg1JNgHgHTNvEdG/voui6AQRnWbmCUS8FI8hokXXdUt7e3s/AOAYAOi+HTWpawUopfQQsdi6ESLWiOjBzMzM94PkC4JgTL8YIl6Pxa8y81TzGSKeEUJsxXNZAZZKpRUAuNMI3kXEnBCiZltXvU63BzNXG4q1hWYClFKeQ8RXuhRElMvn8xtJ4JprgyCYYOY3JshMgGlgOsU0lHzRVsosJe4moM4lpawh4s1YT6bvwW4DViqVk1EUfetbwMZH85GZx7vyFXdbQZ2vVCrNA8Dj1IA2p3wWcCnlJCK+TwVYrVZHbE75LID6AGfmL6kAbYOzADZE+NkwHNpMjBYKhW2rmyQOyMxXOl3mWSB1mQFAm4Wa7/tvTbmMV10cEADuFQqFJ1lg0sZaAWrjKYS4kHaTLHFWgHoDx3FOHeZcsoB0irUG1PZKCDHdC4iDcloD6iSIOJ3UZmV9oUSAAKC94DUhxIc0G5fL5fEoiuYAYNPzPGmTIymgztkVw6qUuuj7/qG+0hbwJQDciL3xa0RcMtn01nXauYRh+Mhgry7bVMIIaDrllVJzRLTQdtIjbjDzulLqq+M4v/T/SqkRRBzTc0irY2nGKqWWfN83DWBtVe84k5hOeSnlVGN4GrbpH8OaHWbON8dOmxxWQ1NrIj24O44zj4iFTgOQYeOQmZ9FUXS/p4N7HNR1XT2pXd23TecB4HgMTKv1GQDWBgcHK7lcbsdGMSuzkCaRVtZ13SGllLvfr9tJlUp0k6QB7FVM4h7sFciRgr1Stu9L/BdiCqc4bUVXegAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cEdit",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    },
    isAction: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:content"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const idStr = ref("");
    ref("");
    let aiEditor = null;
    const routing = getRouting();
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    const pageState = ref(true);
    const { proxy } = getCurrentInstance();
    const firstLoading = ref(false);
    const times = ref(null);
    const selectedText = ref("");
    const modalType = ref("");
    const modal = ref(false);
    const modal2 = ref(false);
    const modal3 = ref(false);
    const modalHeaderList = ref([]);
    const btnLoading = ref(false);
    const modalContent = ref("");
    const modalContentLoading = ref(false);
    const sceneDataStr = ref("");
    const toneList = ref([
      { name: "\u6B63\u5F0F" },
      { name: "\u975E\u6B63\u5F0F" },
      { name: "\u5E7D\u9ED8" },
      { name: "\u8BBD\u523A" },
      { name: "\u4E25\u8083" },
      { name: "\u70ED\u60C5" },
      { name: "\u51B7\u9759" },
      { name: "\u53CB\u597D" },
      { name: "\u547D\u4EE4" },
      { name: "\u54C0\u60BC" },
      { name: "\u9F13\u52B1" },
      { name: "\u597D\u5947" },
      { name: "\u6000\u7591" },
      { name: "\u6743\u5A01" },
      { name: "\u4EB2\u5207" }
    ]);
    const languageStr = ref("\u82F1\u8BED");
    const tongStr = ref();
    const languageList = ref([]);
    clearInterval(times.value);
    const contentData = ref("");
    const toAction2 = proxy.$debounce((type) => {
      selectedText.value = aiEditor.getSelectedText();
      modalType.value = type;
      if (type == "CHNAGE_TONE") {
        modal2.value = true;
        tongStr.value = ["\u6B63\u5F0F"];
        return;
      }
      if (type == "TRANSLATE") {
        proxy.$api.queryTagTemplateList({
          type: "LANGUAGE_TYPE"
        }).then((res) => {
          languageList.value = res.data;
        });
        modal3.value = true;
        languageStr.value = "\u82F1\u8BED";
        return;
      }
      if (type == "HIGH_LEVEL_WRITTING") {
        toAction({
          state: true,
          type: "HIGH_LEVEL_WRITTING"
        });
        return;
      }
      modal.value = true;
      routing.resetStream();
      setTimeout(() => {
        let data = {
          content: aiEditor.getSelectedText(),
          sceneType: type
        };
        modalContentLoading.value = true;
        btnLoading.value = true;
        modalContent.value = "";
        proxy.$setAiChat(proxy, data, "", (item) => {
          if (item && item.content) {
            modalContent.value = modalContent.value + "" + item.content;
            modalContentLoading.value = false;
          }
          if (item.type == "[ONCOMPLETED]") {
            btnLoading.value = false;
          }
        });
      }, 1e3);
    });
    const modelAction = proxy.$debounce((type) => {
      if (btnLoading.value) {
        proxy.$Message.error("\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E");
        return;
      }
      if (proxy.$isEmpty(modalContent.value)) {
        proxy.$Message.error("\u8BF7\u751F\u6210");
        return;
      }
      if (type == "insertion") {
        let str1 = aiEditor.getSelectedText();
        let str2 = str1 + "\n" + modalContent.value;
        aiEditor.focus().insert(str2);
      }
      if (type == "switch") {
        aiEditor.focus().insert(modalContent.value);
      }
      if (type == "copy") {
        proxy.$CopyTex(modalContent.value);
      }
      modalContent.value = "";
      modal.value = false;
    }, 300);
    const toConfirmTong = () => {
      if (tongStr.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      let tone = tongStr.value.join(",");
      sceneDataStr.value = JSON.stringify({ tone });
      modal2.value = false;
      toAction4(modalType.value);
    };
    const toConfirmLanguage = proxy.$debounce(() => {
      if (proxy.$isEmpty(languageStr.value)) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      sceneDataStr.value = JSON.stringify({ language: languageStr.value });
      modal3.value = false;
      toAction4(modalType.value);
    }, 300);
    const toAction4 = proxy.$debounce((type) => {
      modal.value = true;
      modalType.value = type;
      modalContent.value = "";
      routing.resetStream();
      setTimeout(() => {
        let data = {
          content: aiEditor.getSelectedText(),
          sceneType: type,
          sceneData: sceneDataStr.value
        };
        modalContentLoading.value = true;
        btnLoading.value = true;
        modalContent.value = "";
        proxy.$setAiChat(proxy, data, "", (item) => {
          if (item && item.content) {
            modalContent.value = modalContent.value + "" + item.content;
            modalContentLoading.value = false;
          }
          if (item.type == "[ONCOMPLETED]") {
            btnLoading.value = false;
          }
        });
      }, 1e3);
    }, 300);
    const setContents = () => {
      clearInterval(times.value);
      if (firstLoading.value === false) {
        times.value = setInterval(() => {
        }, 100);
      }
    };
    const clearContentData = () => {
      firstLoading.value = false;
      contentData.value = " ";
    };
    onUnmounted(() => {
      clearInterval(times.value);
    });
    watch(() => props.content, () => {
      firstLoading.value = false;
      if (contentData.value != props.content) {
        setContents();
      }
    }, { deep: true, immediate: true });
    __expose({
      clearContentData
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = resolveComponent("Modal");
      const _component_Button = resolveComponent("Button");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _directive_load = resolveDirective("load");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cEdit" }, _attrs))} data-v-065b265c>`);
      if (pageState.value) {
        _push(`<div${ssrRenderAttr("id", idStr.value)} class="cEdit-content" data-v-065b265c></div>`);
      } else {
        _push(`<div class="incompatible" data-v-065b265c><div class="incompatible-top" data-v-065b265c>\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u66F4\u65B0\u7248\u672C</div><div class="incompatible-content" data-v-065b265c>${ssrInterpolate(props.content)}</div></div>`);
      }
      _push(ssrRenderComponent(_component_Modal, {
        modelValue: modal.value,
        "onUpdate:modelValue": ($event) => modal.value = $event,
        width: "504",
        mask: false,
        closable: false,
        "z-index": "3000"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalHeader" data-v-065b265c${_scopeId}><!--[-->`);
            ssrRenderList(modalHeaderList.value, (item) => {
              _push2(`<!--[-->`);
              if (item.type == modalType.value) {
                _push2(`<div class="modalHeader-item" data-v-065b265c${_scopeId}><img${ssrRenderAttr("src", item.img)} class="item-img" data-v-065b265c${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--><div class="modalHeader-item" data-v-065b265c${_scopeId}><img${ssrRenderAttr("src", _imports_8)} class="pointer refresh" data-v-065b265c${_scopeId}><div class="pointer" data-v-065b265c${_scopeId}>\u91CD\u65B0\u751F\u6210</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "modalHeader" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(modalHeaderList.value, (item) => {
                  return openBlock(), createBlock(Fragment, null, [
                    item.type == modalType.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "modalHeader-item"
                    }, [
                      createVNode("img", {
                        src: item.img,
                        class: "item-img"
                      }, null, 8, ["src"])
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 256)),
                createVNode("div", { class: "modalHeader-item" }, [
                  createVNode("img", {
                    src: _imports_8,
                    class: "pointer refresh"
                  }),
                  createVNode("div", {
                    class: "pointer",
                    onClick: ($event) => unref(toAction2)(modalType.value)
                  }, "\u91CD\u65B0\u751F\u6210", 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalFooter" data-v-065b265c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "modalFooter-btn",
              loading: btnLoading.value,
              onClick: ($event) => unref(modelAction)("insertion")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_9)} data-v-065b265c${_scopeId2}><div data-v-065b265c${_scopeId2}>\u63D2\u5165</div>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_9 }),
                    createVNode("div", null, "\u63D2\u5165")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: "modalFooter-btn",
              loading: btnLoading.value,
              onClick: ($event) => unref(modelAction)("switch")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_10)} data-v-065b265c${_scopeId2}><div data-v-065b265c${_scopeId2}>\u66FF\u6362</div>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_10 }),
                    createVNode("div", null, "\u66FF\u6362")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: "modalFooter-btn",
              loading: btnLoading.value,
              onClick: ($event) => unref(modelAction)("copy")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_11)} data-v-065b265c${_scopeId2}><div data-v-065b265c${_scopeId2}>\u590D\u5236</div>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_11 }),
                    createVNode("div", null, "\u590D\u5236")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => modal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5173\u95ED`);
                } else {
                  return [
                    createTextVNode("\u5173\u95ED")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "modalFooter" }, [
                createVNode(_component_Button, {
                  class: "modalFooter-btn",
                  loading: btnLoading.value,
                  onClick: ($event) => unref(modelAction)("insertion")
                }, {
                  default: withCtx(() => [
                    createVNode("img", { src: _imports_9 }),
                    createVNode("div", null, "\u63D2\u5165")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"]),
                createVNode(_component_Button, {
                  class: "modalFooter-btn",
                  loading: btnLoading.value,
                  onClick: ($event) => unref(modelAction)("switch")
                }, {
                  default: withCtx(() => [
                    createVNode("img", { src: _imports_10 }),
                    createVNode("div", null, "\u66FF\u6362")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"]),
                createVNode(_component_Button, {
                  class: "modalFooter-btn",
                  loading: btnLoading.value,
                  onClick: ($event) => unref(modelAction)("copy")
                }, {
                  default: withCtx(() => [
                    createVNode("img", { src: _imports_11 }),
                    createVNode("div", null, "\u590D\u5236")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"]),
                createVNode(_component_Button, {
                  onClick: ($event) => modal.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u5173\u95ED")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "modal-content" }, ssrGetDirectiveProps(_ctx, _directive_load, modalContentLoading.value)))} data-v-065b265c${_scopeId}>`);
            _push2(ssrRenderComponent(contentCom, { content: modalContent.value }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "modal-content" }, [
                createVNode(contentCom, { content: modalContent.value }, null, 8, ["content"])
              ])), [
                [_directive_load, modalContentLoading.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Modal, {
        modelValue: modal2.value,
        "onUpdate:modelValue": ($event) => modal2.value = $event,
        mask: false,
        title: "\u4FEE\u6539\u8BED\u6C14",
        "z-index": "3000"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: toConfirmTong
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4`);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "primary",
                onClick: toConfirmTong
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u8BA4")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Select, {
              class: "content-item-select",
              multiple: "",
              modelValue: tongStr.value,
              "onUpdate:modelValue": ($event) => tongStr.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(toneList.value, (item) => {
                    _push3(ssrRenderComponent(_component_Option, {
                      value: item.name,
                      key: item.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(toneList.value, (item) => {
                      return openBlock(), createBlock(_component_Option, {
                        value: item.name,
                        key: item.name
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Select, {
                class: "content-item-select",
                multiple: "",
                modelValue: tongStr.value,
                "onUpdate:modelValue": ($event) => tongStr.value = $event
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(toneList.value, (item) => {
                    return openBlock(), createBlock(_component_Option, {
                      value: item.name,
                      key: item.name
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Modal, {
        modelValue: modal3.value,
        "onUpdate:modelValue": ($event) => modal3.value = $event,
        mask: false,
        title: "\u7FFB\u8BD1"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: unref(toConfirmLanguage)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4`);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "primary",
                onClick: unref(toConfirmLanguage)
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u8BA4")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Select, {
              class: "content-item-select",
              modelValue: languageStr.value,
              "onUpdate:modelValue": ($event) => languageStr.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(languageList.value, (item) => {
                    _push3(ssrRenderComponent(_component_Option, {
                      value: item.cateName,
                      key: item.cateName
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.cateName)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.cateName), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(languageList.value, (item) => {
                      return openBlock(), createBlock(_component_Option, {
                        value: item.cateName,
                        key: item.cateName
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.cateName), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Select, {
                class: "content-item-select",
                modelValue: languageStr.value,
                "onUpdate:modelValue": ($event) => languageStr.value = $event
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(languageList.value, (item) => {
                    return openBlock(), createBlock(_component_Option, {
                      value: item.cateName,
                      key: item.cateName
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.cateName), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-065b265c"]]);

export { __nuxt_component_1 as _, _imports_8 as a };
//# sourceMappingURL=cEdit-6413cc22.mjs.map
