import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './addBase-d16bc2bd.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "trainModal",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const knowList = ref([]);
    const filePageList = ref([]);
    const loading = ref(false);
    const btnLoading = ref(false);
    const addBaseRef = ref(null);
    const knowName = ref();
    const params = ref({
      request: "",
      knowledgeCode: "",
      name: "",
      tagType: "TEXT",
      type: "KNOWLEDGE_FILE",
      tagCode: "",
      level: "",
      tagName: ""
    });
    const selectType = ref(2);
    const list = ref([]);
    const showFn = (record) => {
      knowName.value = "";
      selectType.value = 2;
      params.value = {
        request: record.content,
        knowledgeCode: "",
        name: record.name,
        tagType: "TEXT",
        type: "KNOWLEDGE_FILE",
        tagCode: "",
        level: record.level
      };
      modalShow.value = true;
      getKnowList();
    };
    const getKnowList = () => {
      let data = {
        dataType: "ALL",
        deptCodeList: [],
        name: "",
        permissionStatus: "",
        robotCode: ""
      };
      loading.value = true;
      proxy.$api.getKnowledgeList(data).then((res) => {
        knowList.value = res.data;
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const onChange = (e) => {
      let data = {
        knowledgeCode: e,
        type: "KNOWLEDGE_FILE",
        tagType: "",
        content: "",
        pageNo: 1,
        pageSize: 9999,
        tagName: ""
      };
      params.value.tagCode = "";
      filePageList.value = [];
      proxy.$api.queryKnowledgeBaseFilePageList(data).then((res) => {
        filePageList.value = res.data;
      });
    };
    const onSubmit = () => {
      if (proxy.$isEmpty(params.value.knowledgeCode)) {
        proxy.$Message.error("\u8BF7\u9009\u62E9\u77E5\u8BC6\u5E93");
        return;
      }
      btnLoading.value = true;
      if (proxy.$isEmpty(params.value.tagCode) && proxy.$isEmpty(params.value.tagName)) {
        list.value = [];
        proxy.$api.segmentContent({
          content: params.value.request
        }).then((res) => {
          res.data.forEach((item, i) => {
            list.value.push({
              knowledgeCode: params.value.knowledgeCode,
              name: params.value.name,
              tagType: params.value.tagType,
              type: params.value.type,
              list: item.contentList,
              request: params.value.request
            });
            if (i == Number(res.data.length - 1)) {
              toSubmit();
            }
          });
        });
      } else {
        let data = {
          code: "",
          content: params.value.request,
          knowledgecode: params.value.knowledgeCode,
          level: params.value.level,
          request: params.value.request,
          robotcode: "",
          tagCode: selectType.value == 1 ? params.value.tagCode : "",
          tagType: "",
          tagName: selectType.value == 2 ? params.value.tagName : "",
          trainFlag: true
        };
        proxy.$api.addKnowledge(data).then(() => {
          btnLoading.value = false;
          proxy.$Message.success("\u6570\u636E\u8BAD\u7EC3\u4E2D");
          modalShow.value = false;
        }).catch(() => {
          btnLoading.value = false;
        });
      }
    };
    const toSubmit = () => {
      let data = [];
      list.value.forEach((item, i) => {
        if (item.list.length > 0) {
          data.push({
            list: item.list,
            name: item.name,
            robotCode: "",
            knowledgeCode: item.knowledgeCode ? item.knowledgeCode : "",
            tagType: item.tagType,
            type: item.type,
            importVectorContentReqVOS: []
          });
          if (i == Number(list.value.length - 1)) {
            data.forEach((iten, j) => {
              iten.list.forEach((it, k) => {
                iten.importVectorContentReqVOS.push({
                  request: it,
                  content: it
                });
                if (j == Number(data.length - 1) && k == Number(iten.list.length - 1)) {
                  data.trainFlag = true;
                  proxy.$api.ai_addKnowledgeBase(data).then(() => {
                    btnLoading.value = false;
                    proxy.$Message.success("\u6570\u636E\u8BAD\u7EC3\u4E2D");
                    modalShow.value = false;
                  }).catch(() => {
                    btnLoading.value = false;
                  });
                }
              });
            });
          }
        }
      });
    };
    const onKnowList = (e) => {
      knowName.value = e[0].name;
      params.value.knowledgeCode = e[0].code;
      onChange(e[0].code);
    };
    const chooseTag = () => {
      selectType.value = 1;
      params.value.tagName = "";
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Spin = resolveComponent("Spin");
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_Input = resolveComponent("Input");
      const _component_Radio = resolveComponent("Radio");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_Button = resolveComponent("Button");
      const _component_addBase = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalTitle" data-v-5dbd7dad${_scopeId}>\u8BAD\u7EC3</div>`);
          } else {
            return [
              createVNode("div", { class: "modalTitle" }, "\u8BAD\u7EC3")
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
              loading: btnLoading.value
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
                onClick: onSubmit,
                loading: btnLoading.value
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-5dbd7dad${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: loading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u52A0\u8F7D\u4E2D...`);
                } else {
                  return [
                    createTextVNode("\u52A0\u8F7D\u4E2D...")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (modalShow.value) {
              _push2(ssrRenderComponent(_component_Form, {
                "label-width": 100,
                model: params.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_FormItem, {
                      label: "\u5BFC\u5165\u77E5\u8BC6\u5E93",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Input, {
                            placeholder: "\u8BF7\u9009\u62E9",
                            modelValue: knowName.value,
                            "onUpdate:modelValue": ($event) => knowName.value = $event,
                            onClick: ($event) => addBaseRef.value.showFn(),
                            readonly: "",
                            style: { "cursor": "pointer" }
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Input, {
                              placeholder: "\u8BF7\u9009\u62E9",
                              modelValue: knowName.value,
                              "onUpdate:modelValue": ($event) => knowName.value = $event,
                              onClick: ($event) => addBaseRef.value.showFn(),
                              readonly: "",
                              style: { "cursor": "pointer" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_FormItem, { label: "\u5BFC\u5165\u6587\u4EF6\u5939" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}" data-v-5dbd7dad${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Radio, {
                            "model-value": selectType.value == 1 ? true : false,
                            onClick: ($event) => selectType.value = 1
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u77E5\u8BC6\u5E93\u6587\u4EF6\u5939`);
                              } else {
                                return [
                                  createTextVNode("\u77E5\u8BC6\u5E93\u6587\u4EF6\u5939")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_Select, {
                            "transfer-class-name": "trainModalSelect",
                            modelValue: params.value.tagCode,
                            "onUpdate:modelValue": ($event) => params.value.tagCode = $event,
                            onOnChange: chooseTag,
                            transfer: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(filePageList.value, (item) => {
                                  _push5(ssrRenderComponent(_component_Option, {
                                    class: "text-hide",
                                    style: { "max-width": "350px" },
                                    title: item.name,
                                    value: item.code,
                                    key: item.code
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.name)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.name), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filePageList.value, (item) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      class: "text-hide",
                                      style: { "max-width": "350px" },
                                      title: item.name,
                                      value: item.code,
                                      key: item.code
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["title", "value"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_Radio, {
                            "model-value": selectType.value == 2 ? true : false,
                            onClick: ($event) => selectType.value = 2,
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u65B0\u5EFA\u6587\u4EF6\u5939`);
                              } else {
                                return [
                                  createTextVNode("\u65B0\u5EFA\u6587\u4EF6\u5939")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_Input, {
                            modelValue: params.value.tagName,
                            "onUpdate:modelValue": ($event) => params.value.tagName = $event,
                            onInput: ($event) => selectType.value = 2,
                            placeholder: "\u5982\u672A\u586B\u5199\u540D\u79F0\u89C4\u5219\u81EA\u52A8\u751F\u6210\u6587\u4EF6\u540D,\u4E5F\u53EF\u8F93\u5165\u540D\u79F0"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { style: { "display": "flex", "flex-direction": "column" } }, [
                              createVNode(_component_Radio, {
                                "model-value": selectType.value == 1 ? true : false,
                                onClick: ($event) => selectType.value = 1
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u77E5\u8BC6\u5E93\u6587\u4EF6\u5939")
                                ]),
                                _: 1
                              }, 8, ["model-value", "onClick"]),
                              createVNode(_component_Select, {
                                "transfer-class-name": "trainModalSelect",
                                modelValue: params.value.tagCode,
                                "onUpdate:modelValue": ($event) => params.value.tagCode = $event,
                                onOnChange: chooseTag,
                                transfer: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filePageList.value, (item) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      class: "text-hide",
                                      style: { "max-width": "350px" },
                                      title: item.name,
                                      value: item.code,
                                      key: item.code
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["title", "value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_Radio, {
                                "model-value": selectType.value == 2 ? true : false,
                                onClick: ($event) => selectType.value = 2,
                                style: { "margin-top": "10px" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u65B0\u5EFA\u6587\u4EF6\u5939")
                                ]),
                                _: 1
                              }, 8, ["model-value", "onClick"]),
                              createVNode(_component_Input, {
                                modelValue: params.value.tagName,
                                "onUpdate:modelValue": ($event) => params.value.tagName = $event,
                                onInput: ($event) => selectType.value = 2,
                                placeholder: "\u5982\u672A\u586B\u5199\u540D\u79F0\u89C4\u5219\u81EA\u52A8\u751F\u6210\u6587\u4EF6\u540D,\u4E5F\u53EF\u8F93\u5165\u540D\u79F0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_FormItem, { label: "\u5904\u7406\u65B9\u5F0F" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-5dbd7dad${_scopeId3}>\u7CFB\u7EDF\u9ED8\u8BA4\u5206\u5272\u548C\u9884\u5904\u7406\u89C4\u5219</div>`);
                        } else {
                          return [
                            createVNode("div", null, "\u7CFB\u7EDF\u9ED8\u8BA4\u5206\u5272\u548C\u9884\u5904\u7406\u89C4\u5219")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_FormItem, {
                        label: "\u5BFC\u5165\u77E5\u8BC6\u5E93",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Input, {
                            placeholder: "\u8BF7\u9009\u62E9",
                            modelValue: knowName.value,
                            "onUpdate:modelValue": ($event) => knowName.value = $event,
                            onClick: ($event) => addBaseRef.value.showFn(),
                            readonly: "",
                            style: { "cursor": "pointer" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, { label: "\u5BFC\u5165\u6587\u4EF6\u5939" }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "display": "flex", "flex-direction": "column" } }, [
                            createVNode(_component_Radio, {
                              "model-value": selectType.value == 1 ? true : false,
                              onClick: ($event) => selectType.value = 1
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u77E5\u8BC6\u5E93\u6587\u4EF6\u5939")
                              ]),
                              _: 1
                            }, 8, ["model-value", "onClick"]),
                            createVNode(_component_Select, {
                              "transfer-class-name": "trainModalSelect",
                              modelValue: params.value.tagCode,
                              "onUpdate:modelValue": ($event) => params.value.tagCode = $event,
                              onOnChange: chooseTag,
                              transfer: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(filePageList.value, (item) => {
                                  return openBlock(), createBlock(_component_Option, {
                                    class: "text-hide",
                                    style: { "max-width": "350px" },
                                    title: item.name,
                                    value: item.code,
                                    key: item.code
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["title", "value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_Radio, {
                              "model-value": selectType.value == 2 ? true : false,
                              onClick: ($event) => selectType.value = 2,
                              style: { "margin-top": "10px" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u65B0\u5EFA\u6587\u4EF6\u5939")
                              ]),
                              _: 1
                            }, 8, ["model-value", "onClick"]),
                            createVNode(_component_Input, {
                              modelValue: params.value.tagName,
                              "onUpdate:modelValue": ($event) => params.value.tagName = $event,
                              onInput: ($event) => selectType.value = 2,
                              placeholder: "\u5982\u672A\u586B\u5199\u540D\u79F0\u89C4\u5219\u81EA\u52A8\u751F\u6210\u6587\u4EF6\u540D,\u4E5F\u53EF\u8F93\u5165\u540D\u79F0"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, { label: "\u5904\u7406\u65B9\u5F0F" }, {
                        default: withCtx(() => [
                          createVNode("div", null, "\u7CFB\u7EDF\u9ED8\u8BA4\u5206\u5272\u548C\u9884\u5904\u7406\u89C4\u5219")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(_component_Spin, {
                  fix: "",
                  show: loading.value
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u52A0\u8F7D\u4E2D...")
                  ]),
                  _: 1
                }, 8, ["show"]),
                modalShow.value ? (openBlock(), createBlock(_component_Form, {
                  key: 0,
                  "label-width": 100,
                  model: params.value
                }, {
                  default: withCtx(() => [
                    createVNode(_component_FormItem, {
                      label: "\u5BFC\u5165\u77E5\u8BC6\u5E93",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u8BF7\u9009\u62E9",
                          modelValue: knowName.value,
                          "onUpdate:modelValue": ($event) => knowName.value = $event,
                          onClick: ($event) => addBaseRef.value.showFn(),
                          readonly: "",
                          style: { "cursor": "pointer" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u5BFC\u5165\u6587\u4EF6\u5939" }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "display": "flex", "flex-direction": "column" } }, [
                          createVNode(_component_Radio, {
                            "model-value": selectType.value == 1 ? true : false,
                            onClick: ($event) => selectType.value = 1
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u77E5\u8BC6\u5E93\u6587\u4EF6\u5939")
                            ]),
                            _: 1
                          }, 8, ["model-value", "onClick"]),
                          createVNode(_component_Select, {
                            "transfer-class-name": "trainModalSelect",
                            modelValue: params.value.tagCode,
                            "onUpdate:modelValue": ($event) => params.value.tagCode = $event,
                            onOnChange: chooseTag,
                            transfer: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(filePageList.value, (item) => {
                                return openBlock(), createBlock(_component_Option, {
                                  class: "text-hide",
                                  style: { "max-width": "350px" },
                                  title: item.name,
                                  value: item.code,
                                  key: item.code
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["title", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_Radio, {
                            "model-value": selectType.value == 2 ? true : false,
                            onClick: ($event) => selectType.value = 2,
                            style: { "margin-top": "10px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u65B0\u5EFA\u6587\u4EF6\u5939")
                            ]),
                            _: 1
                          }, 8, ["model-value", "onClick"]),
                          createVNode(_component_Input, {
                            modelValue: params.value.tagName,
                            "onUpdate:modelValue": ($event) => params.value.tagName = $event,
                            onInput: ($event) => selectType.value = 2,
                            placeholder: "\u5982\u672A\u586B\u5199\u540D\u79F0\u89C4\u5219\u81EA\u52A8\u751F\u6210\u6587\u4EF6\u540D,\u4E5F\u53EF\u8F93\u5165\u540D\u79F0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormItem, { label: "\u5904\u7406\u65B9\u5F0F" }, {
                      default: withCtx(() => [
                        createVNode("div", null, "\u7CFB\u7EDF\u9ED8\u8BA4\u5206\u5272\u548C\u9884\u5904\u7406\u89C4\u5219")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_addBase, {
        ref_key: "addBaseRef",
        ref: addBaseRef,
        onInit: onKnowList,
        limit: 1,
        systemShow: false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/trainModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5dbd7dad"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=trainModal-a824befd.mjs.map
