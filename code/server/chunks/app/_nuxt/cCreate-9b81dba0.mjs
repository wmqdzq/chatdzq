import { a as _export_sfc, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './ossUploaderNew-da7960a9.mjs';
import { _ as __nuxt_component_0$1 } from './svga-ebe3b6cb.mjs';
import { _ as __nuxt_component_1 } from './addBase-d16bc2bd.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, onUnmounted, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './close-5dffb58a.mjs';
import { c as curriculumPng } from './curriculum-88d76de0.mjs';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { _ as _imports_2 } from './unit-93a23101.mjs';
import { l as lodingData } from './loding-9ec1fb58.mjs';
import { useRouter } from 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cCreate",
  __ssrInlineRender: true,
  emits: ["ok", "cancel"],
  setup(__props, { expose: __expose, emit: emits }) {
    const selectItemParam = ref("");
    useRouter();
    const robotCode = ref("");
    const modal = ref(false);
    const consumeEnergy = ref();
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const robotType = ref("");
    const exampleList = ref([]);
    const groupId = ref();
    const isShowExample = ref(true);
    const columnListData = ref([]);
    const infoData = ref();
    const timerId = ref(null);
    const dataList = ref([]);
    const addBaseRef = ref(null);
    const topicTypeList = ref([
      { value: "radio", name: "\u5355\u9009\u9898" },
      { value: "checkbox", name: "\u591A\u9009\u9898" },
      { value: "gap", name: "\u586B\u7A7A\u9898" },
      { value: "judgment", name: "\u5224\u65AD\u9898" },
      { value: "shortAnswer", name: "\u7B80\u7B54\u9898" },
      { value: "calculation", name: "\u8BA1\u7B97\u9898" },
      { value: "essayQuestion", name: "\u8BBA\u8FF0\u9898" },
      { value: "experimental ", name: "\u5B9E\u9A8C\u9898" },
      { value: "essayTitle", name: "\u4F5C\u6587\u9898" },
      { value: "graphQuestion", name: "\u56FE\u8868\u9898" },
      { value: "lineMatching", name: "\u8FDE\u7EBF\u5339\u914D\u9898" },
      { value: "translation", name: "\u7FFB\u8BD1\u9898" },
      { value: "reading", name: "\u9605\u8BFB\u7406\u89E3\u9898" }
    ]);
    const showFn = (code) => {
      clearInterval(timerId.value);
      dataList.value = [];
      modal.value = true;
      loading.value = true;
      infoData.value = {};
      proxy.$api.space_robotGetRobotInfo({
        code
      }).then((res) => {
        infoData.value = res.data;
        consumeEnergy.value = res.data.consumeEnergy;
        robotCode.value = res.data.code;
        robotType.value = res.data.type;
        let questionBank = res.data.questionBank;
        if (!proxy.$isEmpty(JSON.parse(questionBank).example)) {
          exampleList.value = JSON.parse(questionBank).example.split(",");
        }
        isShowExample.value = true;
        columnListData.value = JSON.parse(questionBank).columnPageItemList;
        if (columnListData.value.length == 1) {
          if (proxy.$isEmpty(columnListData.value[0].example)) {
            isShowExample.value = false;
          } else {
            isShowExample.value = true;
          }
        }
        columnListData.value.map((item) => ({ ...item, value: "" }));
        columnListData.value.forEach((item, i) => {
          if (item.formType == "SELECT" || item.formType == "TABS" || item.formType == "RADIO") {
            let str = "";
            let arr = item.attrItemJson.split(";");
            arr.forEach((it, j) => {
              if (j == 0) {
                str = it.split("||")[0];
              } else {
                str = str + ";" + it.split("||")[0];
              }
              if (j == Number(arr.length - 1)) {
                item.attrItemJson = str;
                item.value = item.attrItemJson.split(";")[0];
              }
            });
          }
          if (item.formType == "UPLOAD_FILE") {
            item.value = "";
            isShowExample.value = false;
          }
          if (item.formType == "KNOWLEDGE_COMPONENT") {
            item.value = "";
            item.knowledgeCodeList = [];
          }
          if (item.formType == "UPLOAD_IMAGE") {
            item.value = "";
            item.attachmentFileCodeList = [];
          }
          if (i == Number(columnListData.value.length - 1)) {
            getCreateHis();
          }
        });
        onInitGroup();
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const getCreateHis = () => {
      proxy.$api.getQuestionBankRobotHistory({
        robotCode: robotCode.value
      }).then((res) => {
        if (res.data && res.data.dataMap) {
          columnListData.value.forEach((item) => {
            item.value = res.data.dataMap[item.itemParam];
            if (item.formType == "UPLOAD_FILE") {
              item.value = "";
            }
            if (item.formType == "KNOWLEDGE_COMPONENT") {
              item.value = "";
              if (res.data.dataMap.questionBankRobotKnowledgeCodeList && res.data.dataMap.questionBankRobotKnowledgeCodeList.length > 0) {
                proxy.$api.queryKnowledgeInfoBaseList({
                  codeList: res.data.dataMap.questionBankRobotKnowledgeCodeList
                }).then((json) => {
                  item.knowledgeList = json.data;
                  item.knowledgeCodeList = [];
                  json.data.forEach((iten) => {
                    item.knowledgeCodeList.push(iten.code);
                  });
                });
              }
            }
            if (item.formType == "UPLOAD_IMAGE") {
              item.value = "";
            }
          });
        }
      });
    };
    const onExample = () => {
      columnListData.value.forEach((item) => {
        item.value = item.example;
      });
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
    const onInitGroup = () => {
      let data = {
        type: robotType.value,
        robotCode: robotCode.value
      };
      proxy.$api.ai_bulidChatGroupId(data).then((res) => {
        groupId.value = res.data;
      });
    };
    const toSubmit = () => {
      if (loading.value) {
        return;
      }
      let form = {}, flag = false;
      form.knowledgeCodeList = [];
      form.attachmentFileCodeList = [];
      columnListData.value.forEach((item) => {
        form[item.itemParam] = item.value ? item.value : "";
        if (item.hadRequired && proxy.$isEmpty(item.value) && !flag && item.formType != "EXAMINATION_COMPONENT" && item.formType != "KNOWLEDGE_COMPONENT" && item.formType != "UPLOAD_IMAGE") {
          proxy.$Message.error("\u8BF7" + (item.formType == "SELECT" ? "\u9009\u62E9" : "\u8F93\u5165") + item.itemName);
          flag = true;
        }
        if (item.formType == "EXAMINATION_COMPONENT" && item.hadRequired && dataList.value.length == 0) {
          proxy.$Message.error("\u8BF7\u9009\u62E9" + item.itemName);
          flag = true;
        }
        if (dataList.value.length != 0) {
          columnListData.value.forEach((it) => {
            if (it.formType == "EXAMINATION_COMPONENT") {
              form[it.itemParam] = dataList.value;
            }
          });
        }
        if (item.formType == "DATE") {
          form[item.itemParam] = proxy.$dateFormat(item.value, "yyyy-MM-dd");
        }
        if (item.formType == "KNOWLEDGE_COMPONENT") {
          form[item.itemParam] = item.knowledgeCodeList;
          form.knowledgeCodeList = form.knowledgeCodeList.concat(item.knowledgeCodeList);
          if (item.hadRequired && form.knowledgeCodeList.length == 0) {
            proxy.$Message.error("\u8BF7\u9009\u62E9" + item.itemName);
            flag = true;
          }
        }
        if (item.formType == "UPLOAD_IMAGE") {
          form.attachmentFileCodeList = form.attachmentFileCodeList.concat(item.attachmentFileCodeList);
          if (item.hadRequired && form.attachmentFileCodeList.length == 0) {
            proxy.$Message.error("\u8BF7\u9009\u62E9" + item.itemName);
            flag = true;
          }
        }
      });
      if (flag)
        return;
      let data = {
        content: form,
        groupId: groupId.value,
        robotCode: robotCode.value,
        requestContent: form,
        sseStream: true,
        attachmentFileCodeList: form.attachmentFileCodeList ? form.attachmentFileCodeList : [],
        knowledgeCodeList: form.knowledgeCodeList ? form.knowledgeCodeList : []
      };
      if (data.content && data.content.attachmentFileCodeList) {
        delete data.content.attachmentFileCodeList;
      }
      if (data.content && data.content.knowledgeCodeList) {
        delete data.content.knowledgeCodeList;
      }
      loading.value = true;
    };
    const changeDataList = (type, index) => {
      if (type == "add") {
        dataList.value.push({
          type: "radio",
          num: 1,
          score: 1
        });
      }
      if (type == "reduce") {
        dataList.value.splice(index, 1);
      }
    };
    const chooseKonwLedge = (record) => {
      selectItemParam.value = record.itemParam;
      addBaseRef.value.showFn();
    };
    const getKnowlist = (e) => {
      columnListData.value.forEach((item) => {
        if (item.itemParam == selectItemParam.value) {
          item.knowledgeCodeList = [];
          item.knowledgeList = [];
          e.forEach((iten) => {
            item.knowledgeCodeList.push(iten.code);
            item.knowledgeList.push(iten);
          });
        }
      });
    };
    const toRemoveKnow = (record, i) => {
      columnListData.value.forEach((item) => {
        if (item.itemParam == record.itemParam) {
          item.knowledgeCodeList.splice(i, 1);
          item.knowledgeList.splice(i, 1);
        }
      });
    };
    onUnmounted(() => {
      clearInterval(timerId.value);
    });
    const uploadSuccessBg = (index, e) => {
      columnListData.value[index].value = e[0].code;
    };
    const getUploadImg = (record, e) => {
      columnListData.value.forEach((item) => {
        if (item.itemParam == record.itemParam) {
          item.attachmentFileCodeList = [];
          item.attachmentFileCodeList.push(e[0].code);
        }
      });
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Modal = resolveComponent("Modal");
      const _component_Icon = resolveComponent("Icon");
      const _component_Input = resolveComponent("Input");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_DatePicker = resolveComponent("DatePicker");
      const _component_RadioGroup = resolveComponent("RadioGroup");
      const _component_Radio = resolveComponent("Radio");
      const _component_ossUploaderNew = __nuxt_component_0;
      const _component_InputNumber = resolveComponent("InputNumber");
      const _component_Button = resolveComponent("Button");
      const _component_svga = __nuxt_component_0$1;
      const _component_addBase = __nuxt_component_1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modal.value,
              "onUpdate:modelValue": ($event) => modal.value = $event,
              width: "680",
              "mask-closable": false,
              "class-name": "cCreate",
              closable: false,
              transfer: true
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="header" data-v-00275983${_scopeId2}><div data-v-00275983${_scopeId2}>\u7F16\u8F91</div><img${ssrRenderAttr("src", _imports_0)} data-v-00275983${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "header" }, [
                      createVNode("div", null, "\u7F16\u8F91"),
                      createVNode("img", {
                        src: _imports_0,
                        onClick: ($event) => toAction(1)
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="footer" data-v-00275983${_scopeId2}><div class="footer-title" data-v-00275983${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} data-v-00275983${_scopeId2}><div class="title1" data-v-00275983${_scopeId2}>\u5171\u6D88\u8017</div><div class="title2" data-v-00275983${_scopeId2}>${ssrInterpolate(consumeEnergy.value)}</div><div class="title3" data-v-00275983${_scopeId2}>\u7535\u91CF</div></div><div class="footer-btn" data-v-00275983${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    class: "btn",
                    loading: loading.value,
                    onClick: toSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u7ACB\u5373\u751F\u6210`);
                      } else {
                        return [
                          createTextVNode("\u7ACB\u5373\u751F\u6210")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "footer" }, [
                      createVNode("div", { class: "footer-title" }, [
                        createVNode("img", { src: _imports_2 }),
                        createVNode("div", { class: "title1" }, "\u5171\u6D88\u8017"),
                        createVNode("div", { class: "title2" }, toDisplayString(consumeEnergy.value), 1),
                        createVNode("div", { class: "title3" }, "\u7535\u91CF")
                      ]),
                      createVNode("div", { class: "footer-btn" }, [
                        createVNode(_component_Button, {
                          type: "primary",
                          class: "btn",
                          loading: loading.value,
                          onClick: toSubmit
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u7ACB\u5373\u751F\u6210")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="cCreate-content" data-v-00275983${_scopeId2}>`);
                  if (!loading.value) {
                    _push3(`<!--[-->`);
                    if (infoData.value && infoData.value.code) {
                      _push3(`<!--[--><div class="content-top" data-v-00275983${_scopeId2}><img${ssrRenderAttr("src", infoData.value.robotLogo)} data-v-00275983${_scopeId2}><div class="top-name" data-v-00275983${_scopeId2}><div class="name" data-v-00275983${_scopeId2}>${ssrInterpolate(infoData.value.name)}</div><div class="remark" data-v-00275983${_scopeId2}>${ssrInterpolate(infoData.value.robotRemark)}</div></div></div><div class="content-main" data-v-00275983${_scopeId2}>`);
                      if (isShowExample.value) {
                        _push3(`<div class="form-item" data-v-00275983${_scopeId2}><div class="form-item-title" data-v-00275983${_scopeId2}><div class="example" style="${ssrRenderStyle({ "padding": "0" })}" data-v-00275983${_scopeId2}>\u4E0D\u77E5\u9053\u5199\u4EC0\u4E48?</div><div class="href" data-v-00275983${_scopeId2}>\u8BD5\u8BD5\u793A\u4F8B</div></div></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--[-->`);
                      ssrRenderList(columnListData.value, (item, i) => {
                        _push3(`<div class="form-item" data-v-00275983${_scopeId2}><div class="form-item-title" data-v-00275983${_scopeId2}><div class="name" data-v-00275983${_scopeId2}>${ssrInterpolate(item.itemName)}</div>`);
                        if (item.hadRequired) {
                          _push3(`<div class="require" data-v-00275983${_scopeId2}>*</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (item.formType == "EXAMINATION_COMPONENT") {
                          _push3(`<div class="addType" data-v-00275983${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_Icon, {
                            class: "addBtn",
                            type: "ios-add-circle-outline",
                            size: "24",
                            onClick: ($event) => changeDataList("add")
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="name" data-v-00275983${_scopeId2}>\u6DFB\u52A0\u9898\u76EE\u7C7B\u578B</div></div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                        if (item.formType == "TEXT") {
                          _push3(ssrRenderComponent(_component_Input, {
                            modelValue: item.value,
                            "onUpdate:modelValue": ($event) => item.value = $event,
                            placeholder: item.attrItemJson
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (item.formType == "TEXTAREA") {
                                _push4(ssrRenderComponent(_component_Input, {
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event,
                                  type: "textarea",
                                  placeholder: item.attrItemJson,
                                  rows: 6
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                item.formType == "TEXTAREA" ? (openBlock(), createBlock(_component_Input, {
                                  key: 0,
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event,
                                  type: "textarea",
                                  placeholder: item.attrItemJson,
                                  rows: 6
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        if (item.formType == "SELECT" || item.formType == "TABS") {
                          _push3(ssrRenderComponent(_component_Select, {
                            transfer: true,
                            modelValue: item.value,
                            "onUpdate:modelValue": ($event) => item.value = $event,
                            style: { "max-width": "50%" }
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`<!--[-->`);
                                ssrRenderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                  _push4(ssrRenderComponent(_component_Option, {
                                    value: dataText,
                                    key: idx
                                  }, {
                                    default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`${ssrInterpolate(dataText)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(dataText), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent4, _scopeId3));
                                });
                                _push4(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      value: dataText,
                                      key: idx
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(dataText), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (item.formType == "DATE") {
                                _push4(ssrRenderComponent(_component_DatePicker, {
                                  type: "date",
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event,
                                  placeholder: item.attrItemJson
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                item.formType == "DATE" ? (openBlock(), createBlock(_component_DatePicker, {
                                  key: 0,
                                  type: "date",
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event,
                                  placeholder: item.attrItemJson
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (item.formType == "RADIO") {
                                _push4(ssrRenderComponent(_component_RadioGroup, {
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<!--[-->`);
                                      ssrRenderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                        _push5(ssrRenderComponent(_component_Radio, {
                                          value: dataText,
                                          label: dataText
                                        }, null, _parent5, _scopeId4));
                                      });
                                      _push5(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                          return openBlock(), createBlock(_component_Radio, {
                                            value: dataText,
                                            label: dataText
                                          }, null, 8, ["value", "label"]);
                                        }), 256))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                item.formType == "RADIO" ? (openBlock(), createBlock(_component_RadioGroup, {
                                  key: 0,
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                      return openBlock(), createBlock(_component_Radio, {
                                        value: dataText,
                                        label: dataText
                                      }, null, 8, ["value", "label"]);
                                    }), 256))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (item.formType == "UPLOAD_FILE") {
                                _push4(`<div class="content-upload" data-v-00275983${_scopeId3}><div class="upload" data-v-00275983${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_ossUploaderNew, {
                                  id: "cImage-upload",
                                  format: ["pdf", "doc", "docx"],
                                  modeType: "freedom",
                                  onUploadSuccess: ($event) => uploadSuccessBg(i, $event)
                                }, {
                                  content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<div class="upload-area" data-v-00275983${_scopeId4}>`);
                                      if (item.value) {
                                        _push5(`<div class="area-file" data-v-00275983${_scopeId4}><img${ssrRenderAttr("src", curriculumPng)} data-v-00275983${_scopeId4}></div>`);
                                      } else {
                                        _push5(`<!--[-->`);
                                        _push5(ssrRenderComponent(_component_Icon, {
                                          type: "ios-cloud-upload",
                                          size: "40"
                                        }, null, _parent5, _scopeId4));
                                        _push5(`<div data-v-00275983${_scopeId4}>\u8BF7\u4E0A\u4F20\u6587\u4EF6\uFF0C\u652F\u6301 PDF\u3001Word \u683C\u5F0F</div><!--]-->`);
                                      }
                                      _push5(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "upload-area" }, [
                                          item.value ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "area-file"
                                          }, [
                                            createVNode("img", { src: curriculumPng })
                                          ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            createVNode(_component_Icon, {
                                              type: "ios-cloud-upload",
                                              size: "40"
                                            }),
                                            createVNode("div", null, "\u8BF7\u4E0A\u4F20\u6587\u4EF6\uFF0C\u652F\u6301 PDF\u3001Word \u683C\u5F0F")
                                          ], 64))
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(`</div></div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              if (item.formType == "EXAMINATION_COMPONENT") {
                                _push4(`<div class="dataList" data-v-00275983${_scopeId3}><!--[-->`);
                                ssrRenderList(dataList.value, (item2, i2) => {
                                  _push4(`<div class="dataList-item" data-v-00275983${_scopeId3}>`);
                                  _push4(ssrRenderComponent(_component_Select, {
                                    class: "select",
                                    modelValue: dataList.value[i2].type,
                                    "onUpdate:modelValue": ($event) => dataList.value[i2].type = $event
                                  }, {
                                    default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<!--[-->`);
                                        ssrRenderList(topicTypeList.value, (item3) => {
                                          _push5(ssrRenderComponent(_component_Option, {
                                            value: item3.value
                                          }, {
                                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                              if (_push6) {
                                                _push6(`${ssrInterpolate(item3.name)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(item3.name), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent5, _scopeId4));
                                        });
                                        _push5(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(topicTypeList.value, (item3) => {
                                            return openBlock(), createBlock(_component_Option, {
                                              value: item3.value
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item3.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 256))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent4, _scopeId3));
                                  _push4(`<div class="input" data-v-00275983${_scopeId3}><div class="input-title" data-v-00275983${_scopeId3}>\u9898\u6570</div>`);
                                  _push4(ssrRenderComponent(_component_InputNumber, {
                                    min: 1,
                                    modelValue: dataList.value[i2].num,
                                    "onUpdate:modelValue": ($event) => dataList.value[i2].num = $event
                                  }, null, _parent4, _scopeId3));
                                  _push4(`</div><div class="input" data-v-00275983${_scopeId3}><div class="input-title" data-v-00275983${_scopeId3}>\u603B\u5206\u503C</div>`);
                                  _push4(ssrRenderComponent(_component_InputNumber, {
                                    min: 1,
                                    modelValue: dataList.value[i2].score,
                                    "onUpdate:modelValue": ($event) => dataList.value[i2].score = $event
                                  }, null, _parent4, _scopeId3));
                                  _push4(`</div><div class="reduce" data-v-00275983${_scopeId3}>`);
                                  _push4(ssrRenderComponent(_component_Icon, {
                                    type: "ios-remove-circle-outline",
                                    size: "25",
                                    onClick: ($event) => changeDataList("reduce", i2)
                                  }, null, _parent4, _scopeId3));
                                  _push4(`</div></div>`);
                                });
                                _push4(`<!--]--></div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                item.formType == "UPLOAD_FILE" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "content-upload"
                                }, [
                                  createVNode("div", { class: "upload" }, [
                                    createVNode(_component_ossUploaderNew, {
                                      id: "cImage-upload",
                                      format: ["pdf", "doc", "docx"],
                                      modeType: "freedom",
                                      onUploadSuccess: ($event) => uploadSuccessBg(i, $event)
                                    }, {
                                      content: withCtx(() => [
                                        createVNode("div", { class: "upload-area" }, [
                                          item.value ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "area-file"
                                          }, [
                                            createVNode("img", { src: curriculumPng })
                                          ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            createVNode(_component_Icon, {
                                              type: "ios-cloud-upload",
                                              size: "40"
                                            }),
                                            createVNode("div", null, "\u8BF7\u4E0A\u4F20\u6587\u4EF6\uFF0C\u652F\u6301 PDF\u3001Word \u683C\u5F0F")
                                          ], 64))
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["onUploadSuccess"])
                                  ])
                                ])) : createCommentVNode("", true),
                                item.formType == "EXAMINATION_COMPONENT" ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "dataList"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(dataList.value, (item2, i2) => {
                                    return openBlock(), createBlock("div", {
                                      class: "dataList-item",
                                      key: i2
                                    }, [
                                      createVNode(_component_Select, {
                                        class: "select",
                                        modelValue: dataList.value[i2].type,
                                        "onUpdate:modelValue": ($event) => dataList.value[i2].type = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(topicTypeList.value, (item3) => {
                                            return openBlock(), createBlock(_component_Option, {
                                              value: item3.value
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item3.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 256))
                                        ]),
                                        _: 2
                                      }, 1032, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "input" }, [
                                        createVNode("div", { class: "input-title" }, "\u9898\u6570"),
                                        createVNode(_component_InputNumber, {
                                          min: 1,
                                          modelValue: dataList.value[i2].num,
                                          "onUpdate:modelValue": ($event) => dataList.value[i2].num = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "input" }, [
                                        createVNode("div", { class: "input-title" }, "\u603B\u5206\u503C"),
                                        createVNode(_component_InputNumber, {
                                          min: 1,
                                          modelValue: dataList.value[i2].score,
                                          "onUpdate:modelValue": ($event) => dataList.value[i2].score = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "reduce" }, [
                                        createVNode(_component_Icon, {
                                          type: "ios-remove-circle-outline",
                                          size: "25",
                                          onClick: ($event) => changeDataList("reduce", i2)
                                        }, null, 8, ["onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (item.formType == "KNOWLEDGE_COMPONENT") {
                                _push4(`<!--[-->`);
                                _push4(ssrRenderComponent(_component_Button, {
                                  onClick: ($event) => chooseKonwLedge(item)
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`\u9009\u62E9\u77E5\u8BC6\u5E93`);
                                    } else {
                                      return [
                                        createTextVNode("\u9009\u62E9\u77E5\u8BC6\u5E93")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(`<div class="knowledge-list" data-v-00275983${_scopeId3}><!--[-->`);
                                ssrRenderList(item.knowledgeList, (iten, j) => {
                                  _push4(`<div class="knowledge-item" data-v-00275983${_scopeId3}><div class="item-logo" data-v-00275983${_scopeId3}>`);
                                  if (iten.avatar) {
                                    _push4(`<img${ssrRenderAttr("src", iten.avatar)} data-v-00275983${_scopeId3}>`);
                                  } else {
                                    _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-00275983${_scopeId3}>`);
                                  }
                                  _push4(`</div><div class="item-name text-hide"${ssrRenderAttr("title", iten.name)} data-v-00275983${_scopeId3}>${ssrInterpolate(iten.name)}</div>`);
                                  _push4(ssrRenderComponent(_component_Icon, {
                                    type: "md-close-circle",
                                    size: "15",
                                    onClick: ($event) => toRemoveKnow(item, j),
                                    class: "item-close"
                                  }, null, _parent4, _scopeId3));
                                  _push4(`</div>`);
                                });
                                _push4(`<!--]--></div><!--]-->`);
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                item.formType == "KNOWLEDGE_COMPONENT" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_Button, {
                                    onClick: ($event) => chooseKonwLedge(item)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u9009\u62E9\u77E5\u8BC6\u5E93")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode("div", { class: "knowledge-list" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.knowledgeList, (iten, j) => {
                                      return openBlock(), createBlock("div", { class: "knowledge-item" }, [
                                        createVNode("div", { class: "item-logo" }, [
                                          iten.avatar ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: iten.avatar
                                          }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                            key: 1,
                                            src: _imports_1,
                                            alt: ""
                                          }))
                                        ]),
                                        createVNode("div", {
                                          class: "item-name text-hide",
                                          title: iten.name
                                        }, toDisplayString(iten.name), 9, ["title"]),
                                        createVNode(_component_Icon, {
                                          type: "md-close-circle",
                                          size: "15",
                                          onClick: ($event) => toRemoveKnow(item, j),
                                          class: "item-close"
                                        }, null, 8, ["onClick"])
                                      ]);
                                    }), 256))
                                  ])
                                ], 64)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (item.formType == "UPLOAD_IMAGE") {
                                _push4(ssrRenderComponent(_component_ossUploaderNew, {
                                  url: item.value,
                                  "onUpdate:url": ($event) => item.value = $event,
                                  format: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
                                  limit: 30,
                                  multiple: true,
                                  onUploadSuccess: ($event) => getUploadImg(item, $event)
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                item.formType == "UPLOAD_IMAGE" ? (openBlock(), createBlock(_component_ossUploaderNew, {
                                  key: 0,
                                  url: item.value,
                                  "onUpdate:url": ($event) => item.value = $event,
                                  format: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
                                  limit: 30,
                                  multiple: true,
                                  onUploadSuccess: ($event) => getUploadImg(item, $event)
                                }, null, 8, ["url", "onUpdate:url", "onUploadSuccess"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      });
                      _push3(`<!--]--></div><!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<div class="loading-data" data-v-00275983${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_svga, {
                      svgaImg: unref(lodingData),
                      canvasName: "loading",
                      width: 120
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "cCreate-content" }, [
                      !loading.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        infoData.value && infoData.value.code ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", { class: "content-top" }, [
                            createVNode("img", {
                              src: infoData.value.robotLogo
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "top-name" }, [
                              createVNode("div", { class: "name" }, toDisplayString(infoData.value.name), 1),
                              createVNode("div", { class: "remark" }, toDisplayString(infoData.value.robotRemark), 1)
                            ])
                          ]),
                          createVNode("div", { class: "content-main" }, [
                            isShowExample.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "form-item"
                            }, [
                              createVNode("div", { class: "form-item-title" }, [
                                createVNode("div", {
                                  class: "example",
                                  style: { "padding": "0" }
                                }, "\u4E0D\u77E5\u9053\u5199\u4EC0\u4E48?"),
                                createVNode("div", {
                                  class: "href",
                                  onClick: onExample
                                }, "\u8BD5\u8BD5\u793A\u4F8B")
                              ])
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(columnListData.value, (item, i) => {
                              return openBlock(), createBlock("div", {
                                class: "form-item",
                                key: i
                              }, [
                                createVNode("div", { class: "form-item-title" }, [
                                  createVNode("div", { class: "name" }, toDisplayString(item.itemName), 1),
                                  item.hadRequired ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "require"
                                  }, "*")) : createCommentVNode("", true),
                                  item.formType == "EXAMINATION_COMPONENT" ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "addType"
                                  }, [
                                    createVNode(_component_Icon, {
                                      class: "addBtn",
                                      type: "ios-add-circle-outline",
                                      size: "24",
                                      onClick: ($event) => changeDataList("add")
                                    }, null, 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "name",
                                      onClick: ($event) => changeDataList("add")
                                    }, "\u6DFB\u52A0\u9898\u76EE\u7C7B\u578B", 8, ["onClick"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                item.formType == "TEXT" ? (openBlock(), createBlock(_component_Input, {
                                  key: 0,
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event,
                                  placeholder: item.attrItemJson
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true),
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    item.formType == "TEXTAREA" ? (openBlock(), createBlock(_component_Input, {
                                      key: 0,
                                      modelValue: item.value,
                                      "onUpdate:modelValue": ($event) => item.value = $event,
                                      type: "textarea",
                                      placeholder: item.attrItemJson,
                                      rows: 6
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                item.formType == "SELECT" || item.formType == "TABS" ? (openBlock(), createBlock(_component_Select, {
                                  key: 1,
                                  transfer: true,
                                  modelValue: item.value,
                                  "onUpdate:modelValue": ($event) => item.value = $event,
                                  style: { "max-width": "50%" }
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                      return openBlock(), createBlock(_component_Option, {
                                        value: dataText,
                                        key: idx
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(dataText), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    item.formType == "DATE" ? (openBlock(), createBlock(_component_DatePicker, {
                                      key: 0,
                                      type: "date",
                                      modelValue: item.value,
                                      "onUpdate:modelValue": ($event) => item.value = $event,
                                      placeholder: item.attrItemJson
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    item.formType == "RADIO" ? (openBlock(), createBlock(_component_RadioGroup, {
                                      key: 0,
                                      modelValue: item.value,
                                      "onUpdate:modelValue": ($event) => item.value = $event
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                          return openBlock(), createBlock(_component_Radio, {
                                            value: dataText,
                                            label: dataText
                                          }, null, 8, ["value", "label"]);
                                        }), 256))
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    item.formType == "UPLOAD_FILE" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "content-upload"
                                    }, [
                                      createVNode("div", { class: "upload" }, [
                                        createVNode(_component_ossUploaderNew, {
                                          id: "cImage-upload",
                                          format: ["pdf", "doc", "docx"],
                                          modeType: "freedom",
                                          onUploadSuccess: ($event) => uploadSuccessBg(i, $event)
                                        }, {
                                          content: withCtx(() => [
                                            createVNode("div", { class: "upload-area" }, [
                                              item.value ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "area-file"
                                              }, [
                                                createVNode("img", { src: curriculumPng })
                                              ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                createVNode(_component_Icon, {
                                                  type: "ios-cloud-upload",
                                                  size: "40"
                                                }),
                                                createVNode("div", null, "\u8BF7\u4E0A\u4F20\u6587\u4EF6\uFF0C\u652F\u6301 PDF\u3001Word \u683C\u5F0F")
                                              ], 64))
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["onUploadSuccess"])
                                      ])
                                    ])) : createCommentVNode("", true),
                                    item.formType == "EXAMINATION_COMPONENT" ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "dataList"
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(dataList.value, (item2, i2) => {
                                        return openBlock(), createBlock("div", {
                                          class: "dataList-item",
                                          key: i2
                                        }, [
                                          createVNode(_component_Select, {
                                            class: "select",
                                            modelValue: dataList.value[i2].type,
                                            "onUpdate:modelValue": ($event) => dataList.value[i2].type = $event
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(topicTypeList.value, (item3) => {
                                                return openBlock(), createBlock(_component_Option, {
                                                  value: item3.value
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item3.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 256))
                                            ]),
                                            _: 2
                                          }, 1032, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "input" }, [
                                            createVNode("div", { class: "input-title" }, "\u9898\u6570"),
                                            createVNode(_component_InputNumber, {
                                              min: 1,
                                              modelValue: dataList.value[i2].num,
                                              "onUpdate:modelValue": ($event) => dataList.value[i2].num = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "input" }, [
                                            createVNode("div", { class: "input-title" }, "\u603B\u5206\u503C"),
                                            createVNode(_component_InputNumber, {
                                              min: 1,
                                              modelValue: dataList.value[i2].score,
                                              "onUpdate:modelValue": ($event) => dataList.value[i2].score = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "reduce" }, [
                                            createVNode(_component_Icon, {
                                              type: "ios-remove-circle-outline",
                                              size: "25",
                                              onClick: ($event) => changeDataList("reduce", i2)
                                            }, null, 8, ["onClick"])
                                          ])
                                        ]);
                                      }), 128))
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    item.formType == "KNOWLEDGE_COMPONENT" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(_component_Button, {
                                        onClick: ($event) => chooseKonwLedge(item)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u9009\u62E9\u77E5\u8BC6\u5E93")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode("div", { class: "knowledge-list" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.knowledgeList, (iten, j) => {
                                          return openBlock(), createBlock("div", { class: "knowledge-item" }, [
                                            createVNode("div", { class: "item-logo" }, [
                                              iten.avatar ? (openBlock(), createBlock("img", {
                                                key: 0,
                                                src: iten.avatar
                                              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                                key: 1,
                                                src: _imports_1,
                                                alt: ""
                                              }))
                                            ]),
                                            createVNode("div", {
                                              class: "item-name text-hide",
                                              title: iten.name
                                            }, toDisplayString(iten.name), 9, ["title"]),
                                            createVNode(_component_Icon, {
                                              type: "md-close-circle",
                                              size: "15",
                                              onClick: ($event) => toRemoveKnow(item, j),
                                              class: "item-close"
                                            }, null, 8, ["onClick"])
                                          ]);
                                        }), 256))
                                      ])
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    item.formType == "UPLOAD_IMAGE" ? (openBlock(), createBlock(_component_ossUploaderNew, {
                                      key: 0,
                                      url: item.value,
                                      "onUpdate:url": ($event) => item.value = $event,
                                      format: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
                                      limit: 30,
                                      multiple: true,
                                      onUploadSuccess: ($event) => getUploadImg(item, $event)
                                    }, null, 8, ["url", "onUpdate:url", "onUploadSuccess"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]);
                            }), 128))
                          ])
                        ], 64)) : createCommentVNode("", true)
                      ], 64)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "loading-data"
                      }, [
                        createVNode(_component_svga, {
                          svgaImg: unref(lodingData),
                          canvasName: "loading",
                          width: 120
                        }, null, 8, ["svgaImg"])
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_addBase, {
              ref_key: "addBaseRef",
              ref: addBaseRef,
              onInit: getKnowlist
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                modelValue: modal.value,
                "onUpdate:modelValue": ($event) => modal.value = $event,
                width: "680",
                "mask-closable": false,
                "class-name": "cCreate",
                closable: false,
                transfer: true
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "header" }, [
                    createVNode("div", null, "\u7F16\u8F91"),
                    createVNode("img", {
                      src: _imports_0,
                      onClick: ($event) => toAction(1)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "footer" }, [
                    createVNode("div", { class: "footer-title" }, [
                      createVNode("img", { src: _imports_2 }),
                      createVNode("div", { class: "title1" }, "\u5171\u6D88\u8017"),
                      createVNode("div", { class: "title2" }, toDisplayString(consumeEnergy.value), 1),
                      createVNode("div", { class: "title3" }, "\u7535\u91CF")
                    ]),
                    createVNode("div", { class: "footer-btn" }, [
                      createVNode(_component_Button, {
                        type: "primary",
                        class: "btn",
                        loading: loading.value,
                        onClick: toSubmit
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u7ACB\u5373\u751F\u6210")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "cCreate-content" }, [
                    !loading.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      infoData.value && infoData.value.code ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "content-top" }, [
                          createVNode("img", {
                            src: infoData.value.robotLogo
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "top-name" }, [
                            createVNode("div", { class: "name" }, toDisplayString(infoData.value.name), 1),
                            createVNode("div", { class: "remark" }, toDisplayString(infoData.value.robotRemark), 1)
                          ])
                        ]),
                        createVNode("div", { class: "content-main" }, [
                          isShowExample.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "form-item"
                          }, [
                            createVNode("div", { class: "form-item-title" }, [
                              createVNode("div", {
                                class: "example",
                                style: { "padding": "0" }
                              }, "\u4E0D\u77E5\u9053\u5199\u4EC0\u4E48?"),
                              createVNode("div", {
                                class: "href",
                                onClick: onExample
                              }, "\u8BD5\u8BD5\u793A\u4F8B")
                            ])
                          ])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(columnListData.value, (item, i) => {
                            return openBlock(), createBlock("div", {
                              class: "form-item",
                              key: i
                            }, [
                              createVNode("div", { class: "form-item-title" }, [
                                createVNode("div", { class: "name" }, toDisplayString(item.itemName), 1),
                                item.hadRequired ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "require"
                                }, "*")) : createCommentVNode("", true),
                                item.formType == "EXAMINATION_COMPONENT" ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "addType"
                                }, [
                                  createVNode(_component_Icon, {
                                    class: "addBtn",
                                    type: "ios-add-circle-outline",
                                    size: "24",
                                    onClick: ($event) => changeDataList("add")
                                  }, null, 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "name",
                                    onClick: ($event) => changeDataList("add")
                                  }, "\u6DFB\u52A0\u9898\u76EE\u7C7B\u578B", 8, ["onClick"])
                                ])) : createCommentVNode("", true)
                              ]),
                              item.formType == "TEXT" ? (openBlock(), createBlock(_component_Input, {
                                key: 0,
                                modelValue: item.value,
                                "onUpdate:modelValue": ($event) => item.value = $event,
                                placeholder: item.attrItemJson
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  item.formType == "TEXTAREA" ? (openBlock(), createBlock(_component_Input, {
                                    key: 0,
                                    modelValue: item.value,
                                    "onUpdate:modelValue": ($event) => item.value = $event,
                                    type: "textarea",
                                    placeholder: item.attrItemJson,
                                    rows: 6
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              item.formType == "SELECT" || item.formType == "TABS" ? (openBlock(), createBlock(_component_Select, {
                                key: 1,
                                transfer: true,
                                modelValue: item.value,
                                "onUpdate:modelValue": ($event) => item.value = $event,
                                style: { "max-width": "50%" }
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      value: dataText,
                                      key: idx
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(dataText), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  item.formType == "DATE" ? (openBlock(), createBlock(_component_DatePicker, {
                                    key: 0,
                                    type: "date",
                                    modelValue: item.value,
                                    "onUpdate:modelValue": ($event) => item.value = $event,
                                    placeholder: item.attrItemJson
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  item.formType == "RADIO" ? (openBlock(), createBlock(_component_RadioGroup, {
                                    key: 0,
                                    modelValue: item.value,
                                    "onUpdate:modelValue": ($event) => item.value = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                        return openBlock(), createBlock(_component_Radio, {
                                          value: dataText,
                                          label: dataText
                                        }, null, 8, ["value", "label"]);
                                      }), 256))
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  item.formType == "UPLOAD_FILE" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "content-upload"
                                  }, [
                                    createVNode("div", { class: "upload" }, [
                                      createVNode(_component_ossUploaderNew, {
                                        id: "cImage-upload",
                                        format: ["pdf", "doc", "docx"],
                                        modeType: "freedom",
                                        onUploadSuccess: ($event) => uploadSuccessBg(i, $event)
                                      }, {
                                        content: withCtx(() => [
                                          createVNode("div", { class: "upload-area" }, [
                                            item.value ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "area-file"
                                            }, [
                                              createVNode("img", { src: curriculumPng })
                                            ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                              createVNode(_component_Icon, {
                                                type: "ios-cloud-upload",
                                                size: "40"
                                              }),
                                              createVNode("div", null, "\u8BF7\u4E0A\u4F20\u6587\u4EF6\uFF0C\u652F\u6301 PDF\u3001Word \u683C\u5F0F")
                                            ], 64))
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["onUploadSuccess"])
                                    ])
                                  ])) : createCommentVNode("", true),
                                  item.formType == "EXAMINATION_COMPONENT" ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "dataList"
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(dataList.value, (item2, i2) => {
                                      return openBlock(), createBlock("div", {
                                        class: "dataList-item",
                                        key: i2
                                      }, [
                                        createVNode(_component_Select, {
                                          class: "select",
                                          modelValue: dataList.value[i2].type,
                                          "onUpdate:modelValue": ($event) => dataList.value[i2].type = $event
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(topicTypeList.value, (item3) => {
                                              return openBlock(), createBlock(_component_Option, {
                                                value: item3.value
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item3.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 256))
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "input" }, [
                                          createVNode("div", { class: "input-title" }, "\u9898\u6570"),
                                          createVNode(_component_InputNumber, {
                                            min: 1,
                                            modelValue: dataList.value[i2].num,
                                            "onUpdate:modelValue": ($event) => dataList.value[i2].num = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "input" }, [
                                          createVNode("div", { class: "input-title" }, "\u603B\u5206\u503C"),
                                          createVNode(_component_InputNumber, {
                                            min: 1,
                                            modelValue: dataList.value[i2].score,
                                            "onUpdate:modelValue": ($event) => dataList.value[i2].score = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "reduce" }, [
                                          createVNode(_component_Icon, {
                                            type: "ios-remove-circle-outline",
                                            size: "25",
                                            onClick: ($event) => changeDataList("reduce", i2)
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]);
                                    }), 128))
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  item.formType == "KNOWLEDGE_COMPONENT" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode(_component_Button, {
                                      onClick: ($event) => chooseKonwLedge(item)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u9009\u62E9\u77E5\u8BC6\u5E93")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode("div", { class: "knowledge-list" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.knowledgeList, (iten, j) => {
                                        return openBlock(), createBlock("div", { class: "knowledge-item" }, [
                                          createVNode("div", { class: "item-logo" }, [
                                            iten.avatar ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: iten.avatar
                                            }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                              key: 1,
                                              src: _imports_1,
                                              alt: ""
                                            }))
                                          ]),
                                          createVNode("div", {
                                            class: "item-name text-hide",
                                            title: iten.name
                                          }, toDisplayString(iten.name), 9, ["title"]),
                                          createVNode(_component_Icon, {
                                            type: "md-close-circle",
                                            size: "15",
                                            onClick: ($event) => toRemoveKnow(item, j),
                                            class: "item-close"
                                          }, null, 8, ["onClick"])
                                        ]);
                                      }), 256))
                                    ])
                                  ], 64)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  item.formType == "UPLOAD_IMAGE" ? (openBlock(), createBlock(_component_ossUploaderNew, {
                                    key: 0,
                                    url: item.value,
                                    "onUpdate:url": ($event) => item.value = $event,
                                    format: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
                                    limit: 30,
                                    multiple: true,
                                    onUploadSuccess: ($event) => getUploadImg(item, $event)
                                  }, null, 8, ["url", "onUpdate:url", "onUploadSuccess"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128))
                        ])
                      ], 64)) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "loading-data"
                    }, [
                      createVNode(_component_svga, {
                        svgaImg: unref(lodingData),
                        canvasName: "loading",
                        width: 120
                      }, null, 8, ["svgaImg"])
                    ]))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_addBase, {
                ref_key: "addBaseRef",
                ref: addBaseRef,
                onInit: getKnowlist
              }, null, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cCreate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00275983"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=cCreate-9b81dba0.mjs.map
