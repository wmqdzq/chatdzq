import { a as _export_sfc, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, resolveComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, createCommentVNode, renderSlot } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './close-5dffb58a.mjs';

const _imports_2 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sPrompt",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    icoShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    }
  },
  emits: ["ok", "cancel"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const modal = ref(false);
    const loading = ref(false);
    const showFn = () => {
      loading.value = false;
      modal.value = false;
      setTimeout(() => {
        modal.value = true;
      }, 1);
    };
    const toAction = (type) => {
      if (type == 1) {
        emits("cancel");
        modal.value = false;
      }
      if (type == 2) {
        emits("ok");
        modal.value = false;
      }
    };
    __expose({
      showFn
    });
    watch(() => props.loading, (oldValve, newValue) => {
      if (!oldValve && newValue) {
        emits("ok");
        modal.value = false;
      }
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Modal = resolveComponent("Modal");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modal.value,
              "onUpdate:modelValue": ($event) => modal.value = $event,
              transfer: "",
              "mask-closable": false,
              "class-name": "mPrompt",
              "footer-hide": true,
              closable: false,
              width: "400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.header) {
                    _push3(`<div class="header" data-v-26002861${_scopeId2}><div data-v-26002861${_scopeId2}>${ssrInterpolate(props.title)}</div><img${ssrRenderAttr("src", _imports_0)} data-v-26002861${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (props.icoShow) {
                    _push3(`<div class="mPrompt-content" data-v-26002861${_scopeId2}><div class="content-title" data-v-26002861${_scopeId2}><img class="logo"${ssrRenderAttr("src", _imports_2)} data-v-26002861${_scopeId2}><div class="name" data-v-26002861${_scopeId2}>${ssrInterpolate(props.content)}</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!props.content) {
                    _push3(`<div class="mPrompt-slot" data-v-26002861${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (props.footer) {
                    _push3(`<div class="content-bottom" data-v-26002861${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Button, {
                      class: "cancal-btn",
                      onClick: ($event) => toAction(1)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(props.cancelText || _ctx.$t("i.poptip.cancelText"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(props.cancelText || _ctx.$t("i.poptip.cancelText")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, {
                      type: "primary",
                      class: "confirm-btn",
                      onClick: ($event) => toAction(2),
                      loading: loading.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(props.okText || _ctx.$t("i.poptip.okText"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(props.okText || _ctx.$t("i.poptip.okText")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    props.header ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "header"
                    }, [
                      createVNode("div", null, toDisplayString(props.title), 1),
                      createVNode("img", {
                        src: _imports_0,
                        onClick: ($event) => toAction(1)
                      }, null, 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    props.icoShow ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mPrompt-content"
                    }, [
                      createVNode("div", { class: "content-title" }, [
                        createVNode("img", {
                          class: "logo",
                          src: _imports_2
                        }),
                        createVNode("div", { class: "name" }, toDisplayString(props.content), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    !props.content ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "mPrompt-slot"
                    }, [
                      renderSlot(_ctx.$slots, "content", {}, void 0, true)
                    ])) : createCommentVNode("", true),
                    props.footer ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "content-bottom"
                    }, [
                      createVNode(_component_Button, {
                        class: "cancal-btn",
                        onClick: ($event) => toAction(1)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.cancelText || _ctx.$t("i.poptip.cancelText")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_Button, {
                        type: "primary",
                        class: "confirm-btn",
                        onClick: ($event) => toAction(2),
                        loading: loading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.okText || _ctx.$t("i.poptip.okText")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick", "loading"])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                modelValue: modal.value,
                "onUpdate:modelValue": ($event) => modal.value = $event,
                transfer: "",
                "mask-closable": false,
                "class-name": "mPrompt",
                "footer-hide": true,
                closable: false,
                width: "400"
              }, {
                default: withCtx(() => [
                  props.header ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "header"
                  }, [
                    createVNode("div", null, toDisplayString(props.title), 1),
                    createVNode("img", {
                      src: _imports_0,
                      onClick: ($event) => toAction(1)
                    }, null, 8, ["onClick"])
                  ])) : createCommentVNode("", true),
                  props.icoShow ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mPrompt-content"
                  }, [
                    createVNode("div", { class: "content-title" }, [
                      createVNode("img", {
                        class: "logo",
                        src: _imports_2
                      }),
                      createVNode("div", { class: "name" }, toDisplayString(props.content), 1)
                    ])
                  ])) : createCommentVNode("", true),
                  !props.content ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "mPrompt-slot"
                  }, [
                    renderSlot(_ctx.$slots, "content", {}, void 0, true)
                  ])) : createCommentVNode("", true),
                  props.footer ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "content-bottom"
                  }, [
                    createVNode(_component_Button, {
                      class: "cancal-btn",
                      onClick: ($event) => toAction(1)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.cancelText || _ctx.$t("i.poptip.cancelText")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      type: "primary",
                      class: "confirm-btn",
                      onClick: ($event) => toAction(2),
                      loading: loading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.okText || _ctx.$t("i.poptip.okText")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sPrompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26002861"]]);

export { __nuxt_component_1 as _, _imports_2 as a };
//# sourceMappingURL=sPrompt-baa4194f.mjs.map
