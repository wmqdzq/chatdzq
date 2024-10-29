import { a as _export_sfc, d as __nuxt_component_0, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, toRefs, ref, reactive, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, unref, openBlock, createBlock, Fragment, createCommentVNode, toDisplayString, renderList, watch } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { c as contentCom } from './content-977f7524.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "modify",
  __ssrInlineRender: true,
  props: {
    code: String,
    knowledgeCode: String,
    tagCode: String
  },
  emits: ["init"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const { code, knowledgeCode, tagCode } = toRefs(props);
    const modalShow = ref(false);
    const loading = ref(true);
    let form = reactive({});
    const showFn = (v) => {
      modalShow.value = true;
      loading.value = false;
      form = JSON.parse(JSON.stringify(v));
      form.request2 = JSON.parse(JSON.stringify(form.request));
      form.content2 = JSON.parse(JSON.stringify(form.content));
    };
    const onSubmit = () => {
      let data = {
        request: "",
        content: "",
        code: form.code,
        knowledgeCode: knowledgeCode.value,
        robotCode: code.value,
        tagType: form.type,
        tagCode: tagCode.value
      };
      if (form.type == "QA") {
        if (proxy.$isEmpty(form.request)) {
          proxy.$Message.error("\u8BF7\u8F93\u5165\u95EE\u9898");
          return;
        }
        if (proxy.$isEmpty(form.content)) {
          proxy.$Message.error("\u8BF7\u8F93\u5165\u7B54\u6848");
          return;
        }
        data.request = form.request;
      } else {
        if (proxy.$isEmpty(form.content)) {
          proxy.$Message.error("\u8BF7\u8F93\u5165\u6587\u672C\u6570\u636E");
          return;
        }
        data.request = form.content;
      }
      data.content = form.content;
      loading.value = true;
      proxy.$api.space_editKnowledgeBase(data).then(() => {
        modalShow.value = false;
        loading.value = false;
        proxy.$Message.success("\u53D8\u66F4\u6570\u636E\u6210\u529F");
        emit("init");
      }).catch(() => {
        loading.value = false;
      });
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="confirmTitle" data-v-3f579886${_scopeId}>\u66F4\u65B0\u6570\u636E</div>`);
          } else {
            return [
              createVNode("div", { class: "confirmTitle" }, "\u66F4\u65B0\u6570\u636E")
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
              onClick: onSubmit,
              loading: loading.value
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
                onClick: withModifiers(($event) => modalShow.value = false, ["stop"])
              }, {
                default: withCtx(() => [
                  createTextVNode("\u53D6\u6D88")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_Button, {
                type: "primary",
                onClick: withModifiers(onSubmit, ["stop"]),
                loading: loading.value
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["onClick", "loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="confirm-list" data-v-3f579886${_scopeId}><div class="confirm-list-item" data-v-3f579886${_scopeId}><div data-v-3f579886${_scopeId}>\u8F85\u52A9\u6570\u636E(\u53EA\u8BFB)</div>`);
            if (unref(form).type == "QA") {
              _push2(`<!--[--><div class="mb-5" data-v-3f579886${_scopeId}>\u95EE\u9898</div>`);
              _push2(ssrRenderComponent(_component_Input, {
                placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                readonly: true,
                maxlength: "25",
                modelValue: unref(form).request2,
                "onUpdate:modelValue": ($event) => unref(form).request2 = $event
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-10 mb-5" data-v-3f579886${_scopeId}>\u7B54\u6848</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Input, {
                    type: "textarea",
                    rows: 16,
                    readonly: true,
                    modelValue: unref(form).content2,
                    "onUpdate:modelValue": ($event) => unref(form).content2 = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Input, {
                      type: "textarea",
                      rows: 16,
                      readonly: true,
                      modelValue: unref(form).content2,
                      "onUpdate:modelValue": ($event) => unref(form).content2 = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="confirm-list-item" data-v-3f579886${_scopeId}><div data-v-3f579886${_scopeId}>\u76F8\u5173\u6570\u636E\u5185\u5BB9(\u4FEE\u6539)</div>`);
            if (unref(form).type == "QA") {
              _push2(`<!--[--><div class="mb-5" data-v-3f579886${_scopeId}>\u95EE\u9898</div>`);
              _push2(ssrRenderComponent(_component_Input, {
                placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                maxlength: "20",
                modelValue: unref(form).request,
                "onUpdate:modelValue": ($event) => unref(form).request = $event
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-10 mb-5" data-v-3f579886${_scopeId}>\u7B54\u6848</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Input, {
                    type: "textarea",
                    rows: 16,
                    modelValue: unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Input, {
                      type: "textarea",
                      rows: 16,
                      modelValue: unref(form).content,
                      "onUpdate:modelValue": ($event) => unref(form).content = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "confirm-list" }, [
                createVNode("div", { class: "confirm-list-item" }, [
                  createVNode("div", null, "\u8F85\u52A9\u6570\u636E(\u53EA\u8BFB)"),
                  unref(form).type == "QA" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "mb-5" }, "\u95EE\u9898"),
                    createVNode(_component_Input, {
                      placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                      readonly: true,
                      maxlength: "25",
                      modelValue: unref(form).request2,
                      "onUpdate:modelValue": ($event) => unref(form).request2 = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "mt-10 mb-5" }, "\u7B54\u6848")
                  ], 64)) : createCommentVNode("", true),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        type: "textarea",
                        rows: 16,
                        readonly: true,
                        modelValue: unref(form).content2,
                        "onUpdate:modelValue": ($event) => unref(form).content2 = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "confirm-list-item" }, [
                  createVNode("div", null, "\u76F8\u5173\u6570\u636E\u5185\u5BB9(\u4FEE\u6539)"),
                  unref(form).type == "QA" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "mb-5" }, "\u95EE\u9898"),
                    createVNode(_component_Input, {
                      placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                      maxlength: "20",
                      modelValue: unref(form).request,
                      "onUpdate:modelValue": ($event) => unref(form).request = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "mt-10 mb-5" }, "\u7B54\u6848")
                  ], 64)) : createCommentVNode("", true),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        type: "textarea",
                        rows: 16,
                        modelValue: unref(form).content,
                        "onUpdate:modelValue": ($event) => unref(form).content = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cChat/modify.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const modifyCom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3f579886"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "quote",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const isShow = ref(false);
    const { proxy } = getCurrentInstance();
    const bankList = ref([]);
    const modifyRef = ref();
    const params = ref({
      robotCode: "",
      aiRecordCode: ""
    });
    const init = () => {
      proxy.$api.queryKnowledgeBaseList({
        robotCode: params.value.robotCode,
        aiRecordCode: params.value.aiRecordCode
      }).then((res) => {
        isShow.value = true;
        bankList.value = res.data;
      });
    };
    const showFn = (data) => {
      isShow.value = true;
      params.value.robotCode = data.robotCode;
      params.value.aiRecordCode = data.aiRecordCode;
      init();
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Button = resolveComponent("Button");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_cModal, {
        class: "chatDataModal",
        modalWidth: 788,
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        mask: true,
        "mask-closable": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalTitle" data-v-d29a04a3${_scopeId}>\u5F15\u7528\u77E5\u8BC6\u5E93(${ssrInterpolate(bankList.value.length)}\u6761)</div>`);
          } else {
            return [
              createVNode("div", { class: "modalTitle" }, "\u5F15\u7528\u77E5\u8BC6\u5E93(" + toDisplayString(bankList.value.length) + "\u6761)", 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => isShow.value = false
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
          } else {
            return [
              createVNode(_component_Button, {
                onClick: ($event) => isShow.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u5173\u95ED")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-notice" data-v-d29a04a3${_scopeId}><div data-v-d29a04a3${_scopeId}>\u6CE8\u610F\uFF1A\u4FEE\u6539\u77E5\u8BC6\u5E93\u5185\u5BB9\u6210\u529F\u540E\uFF0C\u6B64\u5904\u4E0D\u4F1A\u663E\u793A\u3002\u70B9\u51FB\u7F16\u8F91\u540E\u624D\u663E\u793A\u6700\u65B0\u7684\u5185\u5BB9</div></div><div class="modal-content" data-v-d29a04a3${_scopeId}><!--[-->`);
            ssrRenderList(bankList.value, (item) => {
              _push2(`<div class="modal-content-item" data-v-d29a04a3${_scopeId}><div class="modal-content-item-degree" data-v-d29a04a3${_scopeId}><div data-v-d29a04a3${_scopeId}>\u5339\u914D\u5EA6:${ssrInterpolate(item.score)}</div><div data-v-d29a04a3${_scopeId}>`);
              if (item.type != "STRUCTURE_DATA") {
                _push2(`<span data-v-d29a04a3${_scopeId}>${ssrInterpolate(item.knowledgeName)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.knowledgeName && item.fileName) {
                _push2(`<!--[-->`);
                if (item.type != "STRUCTURE_DATA") {
                  _push2(`<span data-v-d29a04a3${_scopeId}>-</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`${ssrInterpolate(item.fileName)}</div><a class="pointer" style="${ssrRenderStyle({ visibility: item.type != "STRUCTURE_DATA" ? "" : "hidden" })}" data-v-d29a04a3${_scopeId}>\u7F16\u8F91</a></div><div class="modal-content-item-title" data-v-d29a04a3${_scopeId}>${ssrInterpolate(item.titleName)}</div><div class="modal-content-item-content" data-v-d29a04a3${_scopeId}>`);
              _push2(ssrRenderComponent(contentCom, {
                content: item.content
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "modal-notice" }, [
                createVNode("div", null, "\u6CE8\u610F\uFF1A\u4FEE\u6539\u77E5\u8BC6\u5E93\u5185\u5BB9\u6210\u529F\u540E\uFF0C\u6B64\u5904\u4E0D\u4F1A\u663E\u793A\u3002\u70B9\u51FB\u7F16\u8F91\u540E\u624D\u663E\u793A\u6700\u65B0\u7684\u5185\u5BB9")
              ]),
              createVNode("div", { class: "modal-content" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(bankList.value, (item) => {
                  return openBlock(), createBlock("div", { class: "modal-content-item" }, [
                    createVNode("div", { class: "modal-content-item-degree" }, [
                      createVNode("div", null, "\u5339\u914D\u5EA6:" + toDisplayString(item.score), 1),
                      createVNode("div", null, [
                        item.type != "STRUCTURE_DATA" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(item.knowledgeName), 1)) : createCommentVNode("", true),
                        item.knowledgeName && item.fileName ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          item.type != "STRUCTURE_DATA" ? (openBlock(), createBlock("span", { key: 0 }, "-")) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true),
                        createTextVNode(toDisplayString(item.fileName), 1)
                      ]),
                      createVNode("a", {
                        class: "pointer",
                        onClick: ($event) => _ctx.$refs.modifyRef.showFn(item),
                        style: { visibility: item.type != "STRUCTURE_DATA" ? "" : "hidden" }
                      }, "\u7F16\u8F91", 12, ["onClick"])
                    ]),
                    createVNode("div", { class: "modal-content-item-title" }, toDisplayString(item.titleName), 1),
                    createVNode("div", { class: "modal-content-item-content" }, [
                      createVNode(contentCom, {
                        content: item.content
                      }, null, 8, ["content"])
                    ])
                  ]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(modifyCom, {
        ref_key: "modifyRef",
        ref: modifyRef,
        code: params.value.robotCode,
        onInit: init
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cChat/quote.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Quote = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d29a04a3"]]);
const _sfc_main = {
  __name: "barrage",
  __ssrInlineRender: true,
  props: {
    list: Array
  },
  emits: ["init"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { list } = toRefs(props);
    const splitPrompts = ref([[], [], []]);
    const splitListIntoThree = (list2) => {
      const groupSize = Math.ceil(list2.length / 3);
      splitPrompts.value = [
        list2.slice(0, groupSize),
        list2.slice(groupSize, 2 * groupSize),
        list2.slice(2 * groupSize)
      ];
    };
    watch(() => list.value, (newVal) => {
      splitListIntoThree(newVal);
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll-container" }, _attrs))} data-v-00a926b4><!--[-->`);
      ssrRenderList(3, (n) => {
        _push(`<div class="scroll-wrapper" data-v-00a926b4><!--[-->`);
        ssrRenderList(splitPrompts.value[n - 1], (prompt, index) => {
          _push(`<div class="itemBox" data-v-00a926b4>${ssrInterpolate(prompt.promptContent)}</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cChat/barrage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barrageCom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00a926b4"]]);

export { Quote as Q, barrageCom as b };
//# sourceMappingURL=barrage-e0763a91.mjs.map
