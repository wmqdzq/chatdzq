import { _ as __nuxt_component_1 } from './electricCom-ab2941d1.mjs';
import { _ as __nuxt_component_1$1 } from './cEdit-6413cc22.mjs';
import { _ as __nuxt_component_1$2 } from './addBase-d16bc2bd.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, resolveDirective, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, withDirectives, openBlock, createBlock, Fragment, renderList, vModelText } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import uploadModal from './upload-3800cded.mjs';
import { c as contentCom } from './content-977f7524.mjs';
import { a as _export_sfc } from '../server.mjs';
import './copy-d1ce3f41.mjs';
import './robot-20021510.mjs';
import 'vue-router';
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import 'vant';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import '@aws-sdk/client-s3';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
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
import 'defu';
import 'qrcode.vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "highLevelWriting",
  __ssrInlineRender: true,
  props: {
    electricity: {
      type: Object,
      default: {}
    }
  },
  emits: ["submit"],
  setup(__props, { expose: __expose, emit }) {
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const content = ref("");
    ref("HIGH_LEVEL_WRITTING");
    const addBaseRef = ref();
    const articleTypeName = ref("");
    const languageTypeName = ref("");
    const divLoading = ref(false);
    const visible = ref(false);
    const selectType = ref("");
    const languageTypeList = ref([]);
    const knowledgeList = ref([]);
    const knowledgeList2 = ref([]);
    const uploadModalRef = ref();
    const continueContent = ref("");
    const btnLoading = ref(false);
    const isEditState = ref(false);
    const pageType = ref(1);
    const sceneData = ref({
      articleType: "",
      //文案类型
      languageType: "",
      //语言风格
      wordCount: "",
      //字数
      searchFlag: false,
      //搜完再写
      resourceCodeList: [],
      //参考素材
      websiteList: [],
      //网站地址
      knowledgeCodeList: []
      //知识库素材
    });
    const typeList = ref([]);
    const getArticleType = proxy.$debounce((e) => {
      visible.value = true;
      divLoading.value = true;
      selectType.value = e;
      proxy.$api.queryTagTemplateList({
        type: e
      }).then((res) => {
        divLoading.value = false;
        typeList.value = res.data;
      }).catch(() => {
        divLoading.value = false;
      });
    }, 300);
    const chooseOne = (record) => {
      visible.value = false;
      articleTypeName.value = record.cateName;
      sceneData.value.articleType = record.cateName;
    };
    const chooseLanguage = (record) => {
      languageTypeName.value = record.cateName;
      sceneData.value.languageType = record.cateName;
    };
    const onKnowList = (list) => {
      if (Number(Number(knowledgeList.value.length) + Number(knowledgeList2.value.length) + Number(list.length)) >= 5) {
        proxy.$Message.error("\u53C2\u8003\u7D20\u6750\u6570\u91CF\u6700\u5927\u4E3A5");
        return;
      }
      list.forEach((item) => {
        knowledgeList.value.push(item);
      });
    };
    const getUploadModal = (e) => {
      if (Number(Number(knowledgeList.value.length) + Number(knowledgeList2.value.length) + Number(e.length)) >= 5) {
        proxy.$Message.error("\u53C2\u8003\u7D20\u6750\u6570\u91CF\u6700\u5927\u4E3A5");
        return;
      }
      knowledgeList2.value = knowledgeList2.value.concat(e);
    };
    const toSubmit = proxy.$debounce(() => {
      if (proxy.$isEmpty(content.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u63CF\u8FF0");
        return;
      }
      if (Number(sceneData.value.wordCount) > 1e4) {
        proxy.$Message.error("\u5B57\u6570\u9650\u5236\u5E94\u5C0F\u4E8E10000");
        return;
      }
      sceneData.value.knowledgeCodeList = [];
      sceneData.value.resourceCodeList = [];
      sceneData.value.websiteList = [];
      loading.value = true;
      if (knowledgeList.value.length == 0 && knowledgeList2.value.length == 0) {
        lastSubmit();
      }
      if (knowledgeList.value.length > 0 && knowledgeList2.value.length > 0) {
        knowledgeList.value.forEach((item, i) => {
          sceneData.value.knowledgeCodeList.push(item.code);
          if (i == Number(knowledgeList.value.length - 1)) {
            knowledgeList2.value.forEach((iten, j) => {
              if (iten.type == "websiteList") {
                sceneData.value.websiteList.push(iten.name);
              }
              if (iten.type == "resourceCodeList") {
                sceneData.value.resourceCodeList.push(iten.code);
              }
              if (j == Number(knowledgeList2.value.length - 1)) {
                lastSubmit();
              }
            });
          }
        });
      }
      if (knowledgeList.value.length > 0 && knowledgeList2.value.length == 0) {
        knowledgeList.value.forEach((item, i) => {
          sceneData.value.knowledgeCodeList.push(item.code);
          if (i == Number(knowledgeList.value.length - 1)) {
            lastSubmit();
          }
        });
      }
      if (knowledgeList.value.length == 0 && knowledgeList2.value.length > 0) {
        knowledgeList2.value.forEach((iten, j) => {
          if (iten.type == "websiteList") {
            sceneData.value.websiteList.push(iten.name);
          }
          if (iten.type == "resourceCodeList") {
            sceneData.value.resourceCodeList.push(iten.code);
          }
          if (j == Number(knowledgeList2.value.length - 1)) {
            lastSubmit();
          }
        });
      }
    }, 300);
    const lastSubmit = () => {
      let data = {
        content: content.value,
        sceneType: "HIGH_LEVEL_WRITTING",
        sceneData: JSON.stringify(sceneData.value)
      };
      continueContent.value = "";
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item && item.content) {
          btnLoading.value = true;
          loading.value = false;
          pageType.value = 2;
          continueContent.value = continueContent.value + "" + item.content;
        }
        if (item.type == "[ONCOMPLETED]") {
          btnLoading.value = false;
        }
      });
    };
    const insertContinue = proxy.$debounce(() => {
      emit("submit", continueContent.value);
    }, 300);
    const setOutContent = (e) => {
      content.value = JSON.parse(JSON.stringify(e));
    };
    __expose({
      setOutContent
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_Icon = resolveComponent("Icon");
      const _component_Tabs = resolveComponent("Tabs");
      const _component_TabPane = resolveComponent("TabPane");
      const _component_Button = resolveComponent("Button");
      const _component_DropdownMenu = resolveComponent("DropdownMenu");
      const _component_DropdownItem = resolveComponent("DropdownItem");
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_electricCom = __nuxt_component_1;
      const _component_cEdit = __nuxt_component_1$1;
      const _component_addBase = __nuxt_component_1$2;
      const _directive_load = resolveDirective("load");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "highLevelWriting" }, _attrs))} data-v-6cf73bae>`);
      if (pageType.value == 1) {
        _push(`<!--[--><div class="highLevelWriting-content" data-v-6cf73bae><div class="content-title" data-v-6cf73bae>\u9AD8\u7EA7\u5199\u4F5C</div><div class="content-main" data-v-6cf73bae><div class="content-form" data-v-6cf73bae><div class="form-item" data-v-6cf73bae>`);
        _push(ssrRenderComponent(_component_Input, {
          class: "item-textarea",
          modelValue: content.value,
          "onUpdate:modelValue": ($event) => content.value = $event,
          maxlength: 6e3,
          "show-word-limit": true,
          type: "textarea",
          rows: 6,
          placeholder: "\u8BF7\u63CF\u8FF0\u4F60\u7684\u89D2\u8272\u3001\u521B\u4F5C\u80CC\u666F\u3001\u521B\u4F5C\u76EE\u7684\uFF0C\u8BA9\u6211\u66F4\u597D\u7684\u4E3A\u4F60\u751F\u6210\u6587\u7AE0"
        }, null, _parent));
        _push(`</div><div class="form-item" data-v-6cf73bae>`);
        _push(ssrRenderComponent(_component_Dropdown, {
          trigger: "click",
          visible: visible.value
        }, {
          list: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="form-item-dropdown" data-v-6cf73bae${_scopeId}><div class="dropdown-top" data-v-6cf73bae${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Tabs, {
                modelValue: selectType.value,
                "onUpdate:modelValue": ($event) => selectType.value = $event,
                onOnClick: ($event) => unref(getArticleType)($event)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TabPane, {
                      name: "SHORT_LONG_ARTICLE",
                      label: "\u77ED\u957F\u6587"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TabPane, {
                      name: "PICTURE_ARTICLE",
                      label: "\u56FE\u6587\u7C7B"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TabPane, {
                      name: "GENERAL_OFFICE",
                      label: "\u901A\u7528\u529E\u516C"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TabPane, {
                        name: "SHORT_LONG_ARTICLE",
                        label: "\u77ED\u957F\u6587"
                      }),
                      createVNode(_component_TabPane, {
                        name: "PICTURE_ARTICLE",
                        label: "\u56FE\u6587\u7C7B"
                      }),
                      createVNode(_component_TabPane, {
                        name: "GENERAL_OFFICE",
                        label: "\u901A\u7528\u529E\u516C"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div${ssrRenderAttrs(mergeProps({ class: "dropdown-content" }, ssrGetDirectiveProps(_ctx, _directive_load, divLoading.value)))} data-v-6cf73bae${_scopeId}><!--[-->`);
              ssrRenderList(typeList.value, (item) => {
                _push2(ssrRenderComponent(_component_Button, {
                  class: "content-btn",
                  onClick: ($event) => chooseOne(item)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.cateName)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.cateName), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              return [
                createVNode("div", { class: "form-item-dropdown" }, [
                  createVNode("div", { class: "dropdown-top" }, [
                    createVNode(_component_Tabs, {
                      modelValue: selectType.value,
                      "onUpdate:modelValue": ($event) => selectType.value = $event,
                      onOnClick: ($event) => unref(getArticleType)($event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TabPane, {
                          name: "SHORT_LONG_ARTICLE",
                          label: "\u77ED\u957F\u6587"
                        }),
                        createVNode(_component_TabPane, {
                          name: "PICTURE_ARTICLE",
                          label: "\u56FE\u6587\u7C7B"
                        }),
                        createVNode(_component_TabPane, {
                          name: "GENERAL_OFFICE",
                          label: "\u901A\u7528\u529E\u516C"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onOnClick"])
                  ]),
                  withDirectives((openBlock(), createBlock("div", { class: "dropdown-content" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(typeList.value, (item) => {
                      return openBlock(), createBlock(_component_Button, {
                        class: "content-btn",
                        onClick: ($event) => chooseOne(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.cateName), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 256))
                  ])), [
                    [_directive_load, divLoading.value]
                  ])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="item-input" data-v-6cf73bae${_scopeId}><div class="input-title" data-v-6cf73bae${_scopeId}>\u6587\u6848\u7C7B\u578B</div><input placeholder="\u6587\u6848\u7C7B\u578B"${ssrRenderAttr("value", articleTypeName.value)} readonly data-v-6cf73bae${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { type: "ios-arrow-down" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "item-input",
                  onClick: ($event) => unref(getArticleType)("SHORT_LONG_ARTICLE")
                }, [
                  createVNode("div", { class: "input-title" }, "\u6587\u6848\u7C7B\u578B"),
                  withDirectives(createVNode("input", {
                    placeholder: "\u6587\u6848\u7C7B\u578B",
                    "onUpdate:modelValue": ($event) => articleTypeName.value = $event,
                    readonly: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, articleTypeName.value]
                  ]),
                  createVNode(_component_Icon, { type: "ios-arrow-down" })
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="form-item" data-v-6cf73bae><div class="item-title pointer" data-v-6cf73bae><div data-v-6cf73bae>\u9AD8\u7EA7\u8BBE\u7F6E</div>`);
        _push(ssrRenderComponent(_component_Icon, { type: "ios-arrow-down" }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_Dropdown, {
          trigger: "click",
          "transfer-class-name": "dropdown-transfer-class-name"
        }, {
          list: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DropdownMenu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(languageTypeList.value, (item) => {
                      _push3(ssrRenderComponent(_component_DropdownItem, {
                        onClick: ($event) => chooseLanguage(item)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(languageTypeList.value, (item) => {
                        return openBlock(), createBlock(_component_DropdownItem, {
                          onClick: ($event) => chooseLanguage(item)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.cateName), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 256))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DropdownMenu, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(languageTypeList.value, (item) => {
                      return openBlock(), createBlock(_component_DropdownItem, {
                        onClick: ($event) => chooseLanguage(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.cateName), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 256))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="item-input" data-v-6cf73bae${_scopeId}><div class="input-title" data-v-6cf73bae${_scopeId}>\u8BED\u8A00\u98CE\u683C</div><input placeholder="\u8BED\u8A00\u98CE\u683C"${ssrRenderAttr("value", languageTypeName.value)} readonly data-v-6cf73bae${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { type: "ios-arrow-down" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item-input" }, [
                  createVNode("div", { class: "input-title" }, "\u8BED\u8A00\u98CE\u683C"),
                  withDirectives(createVNode("input", {
                    placeholder: "\u8BED\u8A00\u98CE\u683C",
                    "onUpdate:modelValue": ($event) => languageTypeName.value = $event,
                    readonly: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, languageTypeName.value]
                  ]),
                  createVNode(_component_Icon, { type: "ios-arrow-down" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="item-input" data-v-6cf73bae><div class="input-title" data-v-6cf73bae>\u5B57\u6570\u9650\u5236</div><input placeholder="\u8BF7\u8F93\u5165\u671F\u671B\u5B57\u6570" type="number"${ssrRenderAttr("min", 1)}${ssrRenderAttr("max", 1e4)}${ssrRenderAttr("value", sceneData.value.wordCount)} data-v-6cf73bae></div></div><div class="form-item" data-v-6cf73bae><div class="item-title" data-v-6cf73bae><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-6cf73bae><div data-v-6cf73bae>\u53C2\u8003\u7D20\u6750</div>`);
        _push(ssrRenderComponent(_component_Tooltip, {
          "max-width": "200",
          content: "\u4F7F\u7528\u4F60\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u8FDB\u884C\u5F15\u7528\u751F\u6210\uFF0C\u751F\u6210\u6709\u7406\u6709\u636E\u7684\u6587\u7AE0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                type: "md-information-circle",
                color: "#cccccc",
                size: "16",
                class: "pointer"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  type: "md-information-circle",
                  color: "#cccccc",
                  size: "16",
                  class: "pointer"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        if (knowledgeList.value.length > 0 || knowledgeList2.value.length > 0) {
          _push(`<div class="item-file" data-v-6cf73bae><!--[-->`);
          ssrRenderList(knowledgeList.value, (item, i) => {
            _push(`<div class="file-item" data-v-6cf73bae><div class="file-item-name text-hide-1"${ssrRenderAttr("title", item.name)} data-v-6cf73bae>${ssrInterpolate(item.name)}</div><div class="file-item-ico" data-v-6cf73bae>`);
            _push(ssrRenderComponent(_component_Icon, {
              type: "ios-trash",
              size: "20",
              class: "pointer",
              color: "#999999",
              onClick: ($event) => knowledgeList.value.splice(i, 1)
            }, null, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--><!--[-->`);
          ssrRenderList(knowledgeList2.value, (item, i) => {
            _push(`<div class="file-item" data-v-6cf73bae><div class="file-item-name text-hide-1"${ssrRenderAttr("title", item.name)} data-v-6cf73bae>${ssrInterpolate(item.name)}</div><div class="file-item-ico" data-v-6cf73bae>`);
            _push(ssrRenderComponent(_component_Icon, {
              type: "ios-trash",
              size: "20",
              class: "pointer",
              color: "#999999",
              onClick: ($event) => knowledgeList2.value.splice(i, 1)
            }, null, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="file-choose" data-v-6cf73bae><div class="choose-item pointer" data-v-6cf73bae>`);
        _push(ssrRenderComponent(_component_Icon, {
          type: "md-book",
          size: "20"
        }, null, _parent));
        _push(`<div data-v-6cf73bae>\u4ECE\u77E5\u8BC6\u5E93\u9009\u62E9</div></div><div class="file-division" data-v-6cf73bae></div><div class="choose-item pointer" data-v-6cf73bae>`);
        _push(ssrRenderComponent(_component_Icon, {
          type: "md-add",
          size: "20"
        }, null, _parent));
        _push(`<div data-v-6cf73bae>\u4E0A\u4F20\u6587\u4EF6\u548C\u6DFB\u52A0\u7F51\u9875</div></div></div></div></div></div></div><div class="highLevelWriting-bottom" data-v-6cf73bae><div class="bottom-title" data-v-6cf73bae></div>`);
        _push(ssrRenderComponent(_component_electricCom, {
          type: "HIGH_LEVEL_WRITTING",
          data: __props.electricity
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "primary",
                style: { "flex": "1" },
                class: "bottom-btn",
                loading: loading.value,
                onClick: unref(toSubmit)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u7ACB\u5373\u751F\u6210`);
                  } else {
                    return [
                      createTextVNode("\u7ACB\u5373\u751F\u6210")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  type: "primary",
                  style: { "flex": "1" },
                  class: "bottom-btn",
                  loading: loading.value,
                  onClick: unref(toSubmit)
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u7ACB\u5373\u751F\u6210")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == 2) {
        _push(`<div class="continue" data-v-6cf73bae><div class="continue-title" data-v-6cf73bae>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => pageType.value = 1
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8FD4\u56DE`);
            } else {
              return [
                createTextVNode("\u8FD4\u56DE")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="continue-content" data-v-6cf73bae><div style="${ssrRenderStyle({ "padding": "0 16px", "height": "100%" })}" data-v-6cf73bae>`);
        if (isEditState.value) {
          _push(ssrRenderComponent(_component_cEdit, {
            content: continueContent.value,
            "onUpdate:content": ($event) => continueContent.value = $event
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(contentCom, { content: continueContent.value }, null, _parent));
        }
        _push(`</div></div><div class="continue-bottom" data-v-6cf73bae><div class="bottom-left" data-v-6cf73bae>\u5B57\u6570\uFF1A${ssrInterpolate(continueContent.value.length)}</div><div class="bottom-right" data-v-6cf73bae>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          loading: btnLoading.value,
          onClick: ($event) => _ctx.$CopyTex(continueContent.value)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u590D\u5236`);
            } else {
              return [
                createTextVNode("\u590D\u5236")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          loading: btnLoading.value,
          onClick: unref(insertContinue)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u63D2\u5165\u6B63\u6587`);
            } else {
              return [
                createTextVNode("\u63D2\u5165\u6B63\u6587")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          loading: btnLoading.value,
          onClick: ($event) => isEditState.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u7F16\u8F91`);
            } else {
              return [
                createTextVNode("\u7F16\u8F91")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(uploadModal, {
        ref_key: "uploadModalRef",
        ref: uploadModalRef,
        onSubmit: getUploadModal
      }, null, _parent));
      _push(ssrRenderComponent(_component_addBase, {
        ref_key: "addBaseRef",
        ref: addBaseRef,
        onInit: onKnowList,
        limit: 5
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/creative/components/highLevelWriting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const highLevelWriting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6cf73bae"]]);

export { highLevelWriting as default };
//# sourceMappingURL=highLevelWriting-bb7a7b5c.mjs.map
