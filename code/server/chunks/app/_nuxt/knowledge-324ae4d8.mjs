import { _ as __nuxt_component_0 } from './navLeft-e5366511.mjs';
import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1, d as __nuxt_component_0$1, i as __nuxt_component_0$2, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, toRefs, resolveComponent, mergeProps, unref, withCtx, createVNode, getCurrentInstance, ref, watch, createTextVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { useRouter } from 'vue-router';
import { H as Header } from './index-2dcc6393.mjs';
import { _ as __nuxt_component_1 } from './ossUploader-2d65ed0f.mjs';
import './avatar-8802d9a1.mjs';
import './firmModal-85ac1a5f.mjs';
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
import './accountModel-962e2c16.mjs';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './phone-61ab024f.mjs';
import './pwd-8f00960a.mjs';
import './nickname-667f2327.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "cImage"
  },
  __name: "index",
  __ssrInlineRender: true,
  props: {
    width: {},
    url: {},
    type: {},
    code: {},
    disabled: { type: Boolean }
  },
  emits: ["update:url"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { width, disabled, url } = toRefs(props);
    const uploadSuccess = (e) => {
      emits("update:url", e[0].url);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Image = resolveComponent("Image");
      const _component_Icon = resolveComponent("Icon");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_ossUploader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "cImage",
        style: { width: unref(width) ? unref(width) + "px" : "96px", height: unref(width) ? unref(width) + "px" : "96px" }
      }, _attrs))} data-v-21507567>`);
      if (unref(url)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_Image, {
          preview: true,
          "preview-list": [unref(url)],
          style: { width: unref(width) ? unref(width) + "px" : "96px", height: unref(width) ? unref(width) + "px" : "96px" },
          class: "cImage-img",
          src: unref(url),
          fit: "cover"
        }, null, _parent));
        if (!unref(disabled)) {
          _push(`<div class="deleteImg" data-v-21507567>`);
          _push(ssrRenderComponent(_component_Icon, {
            size: "20",
            type: "md-remove-circle"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ossUploader, {
                id: "cImage-upload",
                onUploadSuccess: uploadSuccess,
                type: _ctx.type,
                code: _ctx.code
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ossUploader, {
                  id: "cImage-upload",
                  onUploadSuccess: uploadSuccess,
                  type: _ctx.type,
                  code: _ctx.code
                }, null, 8, ["type", "code"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cImage/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const cImage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-21507567"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "addRobot",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { expose: __expose, emit }) {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const routing = getRouting();
    const modalShow = ref(false);
    const loading = ref(true);
    ref({});
    const params = ref(source());
    function source() {
      return {
        name: "",
        type: "CHAT",
        robotLogo: "",
        desc: ""
      };
    }
    const showFn = () => {
      params.value = source();
      loading.value = false;
      modalShow.value = true;
      routing.setLeftRobotLoading(false);
    };
    const onCancel = () => {
      routing.setLeftRobotLoading(false);
    };
    const toConfirm = () => {
      if (proxy.$isEmpty(params.value.name)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u540D\u79F0");
        return;
      }
      loading.value = true;
      proxy.$api.space_robotAdd({
        name: params.value.name,
        templateCode: "123",
        robotLogo: params.value.robotLogo,
        robotRemark: params.value.robotRemark
      }).then((res) => {
        loading.value = false;
        modalShow.value = false;
        proxy.$Message.success("\u521B\u5EFA\u6210\u529F");
        routing.setLeftRobotLoading(true);
        emit("init", res.data);
        router.push("/knowledge/base?robotCode=" + res.data);
      }).catch(() => {
        loading.value = false;
      });
    };
    watch(() => modalShow.value, (state) => {
      if (!state) {
        routing.setRobotState(state);
      }
    });
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0$1;
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        onOnCancel: onCancel
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-809ea37d${_scopeId}>\u521B\u5EFA\u673A\u5668\u4EBA</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u521B\u5EFA\u673A\u5668\u4EBA")
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
              onClick: toConfirm
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u521B\u5EFA`);
                } else {
                  return [
                    createTextVNode("\u521B\u5EFA")
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
                onClick: toConfirm
              }, {
                default: withCtx(() => [
                  createTextVNode("\u521B\u5EFA")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Form, {
              model: params.value,
              "label-position": "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u673A\u5668\u4EBA\u540D\u79F0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u540D\u79F0",
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u540D\u79F0",
                            modelValue: params.value.name,
                            "onUpdate:modelValue": ($event) => params.value.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u56FE\u6807\u8BBE\u7F6E" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(cImage, {
                          url: params.value.robotLogo,
                          "onUpdate:url": ($event) => params.value.robotLogo = $event,
                          type: "robotImportheadPortrait"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(cImage, {
                            url: params.value.robotLogo,
                            "onUpdate:url": ($event) => params.value.robotLogo = $event,
                            type: "robotImportheadPortrait"
                          }, null, 8, ["url", "onUpdate:url"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormItem, { label: "\u7B80\u4ECB" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, {
                                type: "textarea",
                                placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u7B80\u4ECB",
                                modelValue: params.value.robotRemark,
                                "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                                rows: 6
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, {
                                  type: "textarea",
                                  placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u7B80\u4ECB",
                                  modelValue: params.value.robotRemark,
                                  "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                                  rows: 6
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, {
                                type: "textarea",
                                placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u7B80\u4ECB",
                                modelValue: params.value.robotRemark,
                                "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                                rows: 6
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormItem, { label: "\u673A\u5668\u4EBA\u540D\u79F0" }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u540D\u79F0",
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u56FE\u6807\u8BBE\u7F6E" }, {
                      default: withCtx(() => [
                        createVNode(cImage, {
                          url: params.value.robotLogo,
                          "onUpdate:url": ($event) => params.value.robotLogo = $event,
                          type: "robotImportheadPortrait"
                        }, null, 8, ["url", "onUpdate:url"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u7B80\u4ECB" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              type: "textarea",
                              placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u7B80\u4ECB",
                              modelValue: params.value.robotRemark,
                              "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                              rows: 6
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Form, {
                model: params.value,
                "label-position": "top"
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormItem, { label: "\u673A\u5668\u4EBA\u540D\u79F0" }, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u540D\u79F0",
                        modelValue: params.value.name,
                        "onUpdate:modelValue": ($event) => params.value.name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormItem, { label: "\u56FE\u6807\u8BBE\u7F6E" }, {
                    default: withCtx(() => [
                      createVNode(cImage, {
                        url: params.value.robotLogo,
                        "onUpdate:url": ($event) => params.value.robotLogo = $event,
                        type: "robotImportheadPortrait"
                      }, null, 8, ["url", "onUpdate:url"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormItem, { label: "\u7B80\u4ECB" }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_Input, {
                            type: "textarea",
                            placeholder: "\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u7B80\u4ECB",
                            modelValue: params.value.robotRemark,
                            "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                            rows: 6
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/addRobot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const addRobot = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-809ea37d"]]);
const enterprise = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "knowledge",
  __ssrInlineRender: true,
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const routing = getRouting();
    const occupyHeight = ref(0);
    const selectId = ref("1-1");
    const addRobotRef = ref(null);
    const robotList = ref([]);
    const onInfo = (item) => {
      selectId.value = item.code;
      routing.setRobotInfo(item);
    };
    const list = ref([
      { id: "1-1", name: "\u673A\u5668\u4EBA\u8BAD\u7EC3", img: enterprise, type: "slot", slot: "robotList", url: "" }
      // {id:'1-2',name:'企业知识库',img:robotTrain,type:'route',url:'/knowledge/enterprise/bank'},
      // {id:'1-3',name:'企业管理',img:enterpriseManger,type:'route',url:'/enterprise/staff'},
    ]);
    const init = () => {
      if (proxy.$isLogin()) {
        let data = {
          type: "CHAT"
        };
        proxy.$api.space_robotQuery(data).then((res) => {
          robotList.value = res.data;
          routing.setRobotInfo(robotList.value[0]);
        });
      }
    };
    init();
    const onAdd = () => {
      addRobotRef.value.showFn();
    };
    const getInit = (code) => {
      router.replace({
        path: router.currentRoute.value.path,
        query: {
          robotCode: code
        }
      });
      selectId.value = code;
      init();
    };
    const getHeight = () => {
      var _a;
      occupyHeight.value = Number((_a = document.getElementById("main-header")) == null ? void 0 : _a.offsetHeight);
    };
    watch(() => router.currentRoute.value.path, (path) => {
      if (path == "/knowledge") {
        selectId.value = "1-1";
      }
      if (path == "/knowledge/enterprise/bank") {
        selectId.value = "1-2";
      }
      if (router.currentRoute.value && router.currentRoute.value.query && router.currentRoute.value.query.robotCode) {
        selectId.value = router.currentRoute.value.query.robotCode;
      }
      if (proxy.$isLogin()) {
        let data = {
          type: "CHAT"
        };
        proxy.$api.space_robotQuery(data).then((res) => {
          robotList.value = res.data;
        });
      }
    }, { immediate: true });
    watch(() => routing.robotModalState, (state) => {
      if (state) {
        onAdd();
      } else {
        init();
      }
    }, { deep: true });
    watch(() => routing.leftRobotLoading, (state) => {
      if (state) {
        init();
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navLeft = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Button = resolveComponent("Button");
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mains" }, _attrs))} data-v-9576c225>`);
      _push(ssrRenderComponent(Header, { onInit: getHeight }, null, _parent));
      _push(`<div class="main-content" style="${ssrRenderStyle({ "height": "calc(100vh - " + occupyHeight.value + "px )" })}" data-v-9576c225>`);
      if (list.value.length > 0) {
        _push(ssrRenderComponent(_component_navLeft, {
          list: list.value,
          selectId: selectId.value,
          "onUpdate:selectId": ($event) => selectId.value = $event
        }, {
          robotList: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(robotList.value, (item, i) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  class: ["mainContentLeftChildrenItem", selectId.value == item.code ? "active" : ""],
                  key: i,
                  onClick: ($event) => onInfo(item),
                  to: "/knowledge/base?robotCode=" + item.code
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (!_ctx.$isEmpty(item.robotLogo)) {
                        _push3(`<img${ssrRenderAttr("src", item.robotLogo)} data-v-9576c225${_scopeId2}>`);
                      } else {
                        _push3(`<img${ssrRenderAttr("src", _imports_1)} data-v-9576c225${_scopeId2}>`);
                      }
                      _push3(`<div class="name" data-v-9576c225${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                    } else {
                      return [
                        !_ctx.$isEmpty(item.robotLogo) ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: item.robotLogo
                        }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                          key: 1,
                          src: _imports_1
                        })),
                        createVNode("div", { class: "name" }, toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="addRobotButArea" data-v-9576c225${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                type: "primary",
                ghost: "",
                onClick: onAdd
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u521B\u5EFA\u673A\u5668\u4EBA`);
                  } else {
                    return [
                      createTextVNode("\u521B\u5EFA\u673A\u5668\u4EBA")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (item, i) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    class: ["mainContentLeftChildrenItem", selectId.value == item.code ? "active" : ""],
                    key: i,
                    onClick: ($event) => onInfo(item),
                    to: "/knowledge/base?robotCode=" + item.code
                  }, {
                    default: withCtx(() => [
                      !_ctx.$isEmpty(item.robotLogo) ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: item.robotLogo
                      }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: _imports_1
                      })),
                      createVNode("div", { class: "name" }, toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick", "to"]);
                }), 128)),
                createVNode("div", { class: "addRobotButArea" }, [
                  createVNode(_component_Button, {
                    type: "primary",
                    ghost: "",
                    onClick: onAdd
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u521B\u5EFA\u673A\u5668\u4EBA")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="main-content-right" data-v-9576c225>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(addRobot, {
        ref_key: "addRobotRef",
        ref: addRobotRef,
        onInit: getInit
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/knowledge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const knowledge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9576c225"]]);

export { knowledge as default };
//# sourceMappingURL=knowledge-324ae4d8.mjs.map
