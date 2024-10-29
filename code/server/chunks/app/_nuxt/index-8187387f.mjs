import { a as _export_sfc, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, toRefs, watch, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, renderSlot, createCommentVNode, reactive, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './hot-bc2e3ef0.mjs';
import { _ as _imports_5 } from './notData-440511db.mjs';
import { useRouter } from 'vue-router';
import { _ as _imports_1 } from './robot-20021510.mjs';
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
import '../../paths.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "searchArea",
  __ssrInlineRender: true,
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  emits: ["toSearch", "selectChange", "getHeight"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const componentsSearchArea = ref();
    const { proxy } = getCurrentInstance();
    const { list } = toRefs(props);
    const data = ref([]);
    const bizList = ref([]);
    data.value = JSON.parse(JSON.stringify(list.value));
    const onLoadData = (item, callback) => {
      let data2 = {
        code: item.value
      };
      proxy.$api.teamGetBizUserList(data2).then((res) => {
        if (res.data.length > 0) {
          res.data.forEach((item2, i) => {
            item2.title = item2.name;
            item2.value = item2.code;
            if (item2.haveSubDeptFlag) {
              item2.loading = false;
              item2.selected = false;
              item2.checked = false;
              item2.children = [];
            }
            if (i == Number(res.data.length - 1)) {
              callback(res.data);
            }
          });
        } else {
          callback([]);
        }
      }).catch(() => {
        callback([]);
      });
    };
    const onBizList = () => {
      let data2 = {
        code: "",
        name: ""
      };
      proxy.$api.teamGetBizUserList(data2).then((res) => {
        bizList.value = [{
          title: res.data[0].name,
          value: res.data[0].code,
          loading: false,
          selected: false,
          checked: false,
          children: []
        }];
      });
    };
    const handelData = () => {
      const object = {};
      data.value.forEach((item, i) => {
        if (item.type == "daterange") {
          if (item.value && item.value[0] && item.value[1]) {
            object[item.fields] = [changeTime(item.value[0]), changeTime(item.value[1])];
          }
        } else {
          object[item.fields] = item.value;
        }
        if (i == Number(data.value.length - 1)) {
          emits("toSearch", object);
        }
      });
    };
    const init = () => {
      onBizList();
    };
    const changeTime = (time) => {
      const date = new Date(time);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    const selectChange = (record, e) => {
      emits("selectChange", record, e);
    };
    const toResets = () => {
      data.value.forEach((item, i) => {
        let type = typeof item.value;
        if (type == "object") {
          item.value = [];
        } else {
          item.value = "";
        }
        if (i == Number(data.value.length - 1)) {
          handelData();
        }
      });
    };
    const handleResize = () => {
      if (data.value.length > 0 && componentsSearchArea.value && componentsSearchArea.value.offsetHeight) {
        emits("getHeight", componentsSearchArea.value.offsetHeight);
      } else {
        emits("getHeight", 72);
      }
    };
    init();
    watch(() => props.list, () => {
      props.list.forEach((item, i) => {
        data.value[i] = {};
        data.value[i] = JSON.parse(JSON.stringify(props.list[i]));
        if (i == Number(props.list.length - 1)) {
          handleResize();
        }
      });
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_TreeSelect = resolveComponent("TreeSelect");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_Input = resolveComponent("Input");
      const _component_DatePicker = resolveComponent("DatePicker");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(data) && unref(data).length > 0) {
              _push2(`<div class="searchArea" data-v-75832f76${_scopeId}><div class="searchArea-form" data-v-75832f76${_scopeId}><!--[-->`);
              ssrRenderList(unref(data), (item, i) => {
                _push2(`<div class="form-item" data-v-75832f76${_scopeId}><div class="form-item-name" data-v-75832f76${_scopeId}><div data-v-75832f76${_scopeId}>${ssrInterpolate(item.title)}</div>`);
                if (item.slot) {
                  ssrRenderSlot(_ctx.$slots, item.slot, {}, null, _push2, _parent2, _scopeId);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="form-item-content" data-v-75832f76${_scopeId}>`);
                if (item.type == "range") {
                  _push2(ssrRenderComponent(_component_TreeSelect, {
                    modelValue: unref(data)[i].value,
                    "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                    placeholder: item.placeholder,
                    class: "input",
                    multiple: "",
                    "show-checkbox": "",
                    "load-data": onLoadData,
                    data: unref(bizList)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.type == "select") {
                  _push2(ssrRenderComponent(_component_Select, {
                    multiple: item.multiple,
                    filterable: "",
                    "allow-create": "",
                    onOnChange: ($event) => selectChange(item, $event),
                    clearable: true,
                    transfer: true,
                    "transfer-class-name": "transferClassName",
                    modelValue: unref(data)[i].value,
                    "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                    placeholder: item.placeholder
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<!--[-->`);
                        ssrRenderList(item.children, (iten) => {
                          _push3(ssrRenderComponent(_component_Option, {
                            value: iten.value
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`${ssrInterpolate(iten.label)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(iten.label), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (iten) => {
                            return openBlock(), createBlock(_component_Option, {
                              value: iten.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(iten.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.type == "input") {
                  _push2(ssrRenderComponent(_component_Input, {
                    class: "input",
                    modelValue: unref(data)[i].value,
                    "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                    placeholder: item.placeholder
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.type == "daterange") {
                  _push2(ssrRenderComponent(_component_DatePicker, {
                    class: "daterange",
                    type: "daterange",
                    modelValue: unref(data)[i].value,
                    "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                    placement: "bottom-end",
                    placeholder: item.placeholder
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--><div class="form-btn" data-v-75832f76${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                class: "btn",
                onClick: toResets
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u91CD\u7F6E`);
                  } else {
                    return [
                      createTextVNode("\u91CD\u7F6E")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: "btn",
                type: "primary",
                onClick: handelData
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u67E5\u8BE2`);
                  } else {
                    return [
                      createTextVNode("\u67E5\u8BE2")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(data) && unref(data).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "searchArea",
                ref_key: "componentsSearchArea",
                ref: componentsSearchArea
              }, [
                createVNode("div", { class: "searchArea-form" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item, i) => {
                    return openBlock(), createBlock("div", { class: "form-item" }, [
                      createVNode("div", { class: "form-item-name" }, [
                        createVNode("div", null, toDisplayString(item.title), 1),
                        item.slot ? renderSlot(_ctx.$slots, item.slot, { key: 0 }, void 0, true) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "form-item-content" }, [
                        item.type == "range" ? (openBlock(), createBlock(_component_TreeSelect, {
                          key: 0,
                          modelValue: unref(data)[i].value,
                          "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                          placeholder: item.placeholder,
                          class: "input",
                          multiple: "",
                          "show-checkbox": "",
                          "load-data": onLoadData,
                          data: unref(bizList)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "data"])) : createCommentVNode("", true),
                        item.type == "select" ? (openBlock(), createBlock(_component_Select, {
                          key: 1,
                          multiple: item.multiple,
                          filterable: "",
                          "allow-create": "",
                          onOnChange: ($event) => selectChange(item, $event),
                          clearable: true,
                          transfer: true,
                          "transfer-class-name": "transferClassName",
                          modelValue: unref(data)[i].value,
                          "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                          placeholder: item.placeholder
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (iten) => {
                              return openBlock(), createBlock(_component_Option, {
                                value: iten.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(iten.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 2
                        }, 1032, ["multiple", "onOnChange", "modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true),
                        item.type == "input" ? (openBlock(), createBlock(_component_Input, {
                          key: 2,
                          class: "input",
                          modelValue: unref(data)[i].value,
                          "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                          placeholder: item.placeholder
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true),
                        item.type == "daterange" ? (openBlock(), createBlock(_component_DatePicker, {
                          key: 3,
                          class: "daterange",
                          type: "daterange",
                          modelValue: unref(data)[i].value,
                          "onUpdate:modelValue": ($event) => unref(data)[i].value = $event,
                          placement: "bottom-end",
                          placeholder: item.placeholder
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 256)),
                  createVNode("div", { class: "form-btn" }, [
                    createVNode(_component_Button, {
                      class: "btn",
                      onClick: toResets
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u91CD\u7F6E")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      class: "btn",
                      type: "primary",
                      onClick: handelData
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u67E5\u8BE2")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 512)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/searchArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-75832f76"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAQdJREFUOE+lksFRAkEQRd8v7pYhYJmAm4FksEagRICZaAZCBJKBGIGcuCJnL1w9UO1+nN0aVoRFf9XW1lRPv+7p/uKfUjs/Iq6BEeD/eYqvq/MMmEqa5DkNICL6wFNKPNTXOzCQ5D9bQEp+AQzpogZSA8bAbZfM7M5M0kCp+vLE5Pr6hQEl8JwD1p/B/CN2mP0z4a+loQF3aXhNbLzYMFlsdu6Oih7lZa8NKA24At7++ISiHqI34L2fou8hZmt0F7VxjoFsrMJeaBupixfsgRtJ88ZIebk0VFvZs8llK79WXT5Kcgdb/dhLHYiIe+AhnV1xuu9dvwLSbOyPVVXRsL06CDg2Sce/AGCFVwRNUzExAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchHeight = ref(0);
    const loading = ref(false);
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const pageType = ref({});
    const loadMore = ref(true);
    const searchParams = ref({});
    const pageList = ref([
      { title: "", id: 1, tagType: "TRAIN_ROBOT_CATEGORY", total: 0, sceneCode: "CHAT" },
      {
        title: "\u5E73\u53F0\u63A8\u8350",
        id: 2,
        tagType: "PLATFORM_RECOMMEND_ROBOT_CATEGORY",
        total: 0,
        sceneCode: "PLATFORM_RECOMMEND_AGENT_SCENE"
      },
      {
        title: "\u6211\u7684\u6536\u85CF",
        id: 3,
        tagType: "collect",
        total: 0,
        sceneCode: "CHAT"
      }
    ]);
    const searchList = ref([
      // {title: '可见范围', type: 'range', slot: 'partyIdList', fields: 'deptCodeList', value: [], placeholder: '请选择'},
      // {
      //     title: '智能体分类',
      //     type: 'select',
      //     slot: 'categoryCode',
      //     fields: 'robotCategoryTagTemplateCode',
      //     value: '',
      //     placeholder: '请选择'
      // },
      // {
      //     title: '技能标签',
      //     type: 'select',
      //     multiple: true,
      //     fields: 'robotAbilityTagTemplateCode',
      //     value: [],
      //     placeholder: '请选择'
      // },
      { title: "\u67E5\u627E", type: "input", fields: "complexKeyword", value: "", placeholder: "\u8BF7\u8F93\u5165" }
    ]);
    const changeType = (item) => {
      pageType.value = item;
      loadMore.value = true;
      getSkillTagList();
      getRobotCategoryList();
      if (pageType.value.id == 1) {
        getTeamListDate();
      }
      if (pageType.value.id == 2) {
        data.systemParams.pageNo = 1;
        getSysListData();
      }
      if (pageType.value.id == 3) {
        getQueryCollectRobotList("");
      }
    };
    const getQueryCollectRobotList = (type) => {
      proxy.$api.queryCollectRobotList({
        sceneCode: "CHAT"
      }).then((res) => {
        pageList.value[2].total = res.data.length;
        if (!type) {
          data.list = res.data;
        }
      });
    };
    const toSearchArea = (obj) => {
      let params = {
        deptCodeList: obj.deptCodeList,
        //可见范围
        robotCategoryTagTemplateCode: obj.robotCategoryTagTemplateCode,
        //智能体分类
        robotAbilityTagTemplateCodeList: obj.robotAbilityTagTemplateCode,
        //技能标签
        complexKeyword: obj.complexKeyword
        //查找知识库，名称、描述、标签
      };
      searchParams.value = JSON.parse(JSON.stringify(params));
      loadMore.value = true;
      data.systemParams.pageNo = 1;
      if (pageType.value.id == 1) {
        getTeamListDate(params);
      } else if (pageType.value.id == 2) {
        getSysListData(params);
      }
    };
    const data = reactive({
      list: [],
      teamList: [],
      sysDataList: [],
      sysTotal: 0,
      systemParams: {
        pageNo: 1,
        pageSize: 12
      }
    });
    proxy.$debounce((record) => {
      let apiUrl = record.collectRelationCode ? "deleteCategoryRobot" : "collectRobot";
      let data2 = {
        relationCode: record.collectRelationCode,
        robotCode: record.code
      };
      proxy.$api[apiUrl](data2).then((res) => {
        if (proxy.$isEmpty(record.collectRelationCode)) {
          record.collectRelationCode = res.data;
          proxy.$Message.success("\u6210\u529F\u6536\u85CF");
        } else {
          record.collectRelationCode = "";
          proxy.$Message.success("\u53D6\u6D88\u6536\u85CF");
        }
        getQueryCollectRobotList("one");
      });
    }, 300);
    const getSysListData = proxy.$debounce((params) => {
      let param = {
        needQueryTeamCreatorFlag: false,
        //true为管理后台调用，false为前端智能体调用
        ...data.systemParams,
        ...params
      };
      loading.value = true;
      console.log(param);
      console.log(data.systemParams);
      console.log(params);
      if (loadMore.value) {
        proxy.$api.queryRobotPageList(param).then((res) => {
          if (params === "one") {
            pageList.value[1].total = data.sysTotal = res.totalCount;
            return;
          }
          if (data.systemParams.pageNo == 1) {
            data.sysDataList = res.data;
          } else {
            data.sysDataList = data.sysDataList.concat(res.data);
          }
          if (res.data.length == 0) {
            loadMore.value = false;
          }
          data.sysTotal = res.totalCount;
          loading.value = false;
          data.sysDataList.forEach((item) => {
            item.btnShow = false;
          });
          data.list = data.sysDataList;
        }).catch(() => {
          loading.value = false;
        });
      }
    }, 300);
    const getTeamListDate = (params) => {
      let param = {
        type: "CHAT",
        queryTrainTeamRobotFlag: true,
        needQueryTeamCreatorFlag: false,
        //true为管理后台调用，false为前端智能体调用
        ...params
      };
      loading.value = true;
      proxy.$api.queryFrontTrainRobotInfoList(param).then((res) => {
        data.teamList = res.data;
        pageList.value[0].total = res.data.length;
        loading.value = false;
        data.teamList.forEach((item) => {
          item.btnShow = false;
        });
        data.list = data.teamList;
        if (!res.data || res.data.length == 0) {
          changeType(pageList.value[1]);
        }
      }).catch(() => {
        loading.value = false;
      });
    };
    const skillTagList = ref([]);
    const getSkillTagList = () => {
      let params = {
        tagType: "BILITY_TAG",
        needQueryTeamCreatorFlag: false,
        sceneCode: pageType.value.sceneCode
      };
      proxy.$api.queryRobotCategoryList(params).then((res) => {
        skillTagList.value = res.data;
        searchList.value.forEach((item) => {
          if (item.fields == "robotAbilityTagTemplateCode") {
            item.children = [];
            res.data.forEach((iten) => {
              item.children.push({
                label: `${iten.categoryName}(${iten.categoryRobotCount})`,
                value: iten.code
              });
            });
          }
        });
      });
    };
    const robotCategoryList = ref([]);
    const getRobotCategoryList = () => {
      let params = {
        tagType: pageType.value.tagType,
        needQueryTeamCreatorFlag: false,
        sceneCode: pageType.value.sceneCode
      };
      proxy.$api.queryRobotCategoryList(params).then((res) => {
        robotCategoryList.value = res.data;
        searchList.value.forEach((item) => {
          if (item.fields == "robotCategoryTagTemplateCode") {
            item.children = [];
            res.data.forEach((iten) => {
              item.children.push({
                label: `${iten.categoryName}(${iten.categoryRobotCount})`,
                value: iten.code
              });
            });
          }
        });
      });
    };
    ref("");
    const getHeight = (e) => {
      searchHeight.value = e + 114;
    };
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (pageType.value.id === 2) {
        if (distanceToBottom < 10) {
          data.systemParams.pageNo = data.systemParams.pageNo + 1;
          getSysListData(searchParams.value);
        }
      }
    }, 300);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_searchArea = __nuxt_component_0;
      const _component_Icon = resolveComponent("Icon");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "agents-page" }, _attrs))} data-v-dfef76cb><div class="agents-head" data-v-dfef76cb><!--[-->`);
      ssrRenderList(pageList.value, (item) => {
        _push(`<!--[-->`);
        if (item.total && Number(item.total) > 0) {
          _push(`<div class="${ssrRenderClass([pageType.value.id === item.id ? "item-active" : "", "agent-menu-item pointer"])}" data-v-dfef76cb>${ssrInterpolate(item.title)}<span data-v-dfef76cb>(${ssrInterpolate(item.total)})</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="search-wrap" data-v-dfef76cb>`);
      if (pageType.value.id != 3) {
        _push(ssrRenderComponent(_component_searchArea, {
          list: searchList.value,
          onToSearch: toSearchArea,
          onGetHeight: getHeight
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="agents-content" style="${ssrRenderStyle({ height: "calc(100% - " + searchHeight.value + "px)" })}" data-v-dfef76cb>`);
      if (data.list.length > 0) {
        _push(`<!--[--><div class="agents-content-inside" data-v-dfef76cb><!--[-->`);
        ssrRenderList(data.list, (item, index2) => {
          _push(`<div class="agent-list-item" data-v-dfef76cb><div class="flex" data-v-dfef76cb><img class="agents-img" alt=""${ssrRenderAttr("src", item.robotLogo || unref(_imports_1))} data-v-dfef76cb><div class="flex-column" data-v-dfef76cb><span class="agents-tle text-hide" data-v-dfef76cb>${ssrInterpolate(item.name)}</span><div class="agents-desc text-hide"${ssrRenderAttr("title", item.robotRemark)} data-v-dfef76cb>${ssrInterpolate(item.robotRemark)}</div><div class="agents-label flex text-hide" style="${ssrRenderStyle({ "width": "280px" })}" data-v-dfef76cb><!--[-->`);
          ssrRenderList(item.labelList, (iten, j) => {
            _push(`<div class="blue-label" data-v-dfef76cb>${ssrInterpolate(iten)}</div>`);
          });
          _push(`<!--]--></div><div class="flex agents-list-bottom" data-v-dfef76cb><div class="flex align-center" data-v-dfef76cb><img${ssrRenderAttr("src", _imports_0)} data-v-dfef76cb>${ssrInterpolate(item.creator)}</div><div class="flex align-center" data-v-dfef76cb><img${ssrRenderAttr("src", _imports_1$1)} data-v-dfef76cb>${ssrInterpolate(item.usePeopleNum)}</div></div></div></div>`);
          if (item.btnShow) {
            _push(`<div class="flex operate-btn-wrap" data-v-dfef76cb><div class="collect-btn flex flex-c-c" data-v-dfef76cb>`);
            if (!item.collectRelationCode) {
              _push(ssrRenderComponent(_component_Icon, {
                type: "ios-star-outline",
                size: "20",
                class: "pointer"
              }, null, _parent));
            } else {
              _push(ssrRenderComponent(_component_Icon, {
                type: "md-star",
                size: "20",
                color: "#f8ac3a",
                class: "pointer"
              }, null, _parent));
            }
            _push(`${ssrInterpolate(item.collectRelationCode ? "\u5DF2\u6536\u85CF" : "\u6536\u85CF")}</div>`);
            _push(ssrRenderComponent(_component_Button, {
              class: "get-btn",
              type: "primary",
              onClick: ($event) => unref(router).push("/ai/enterprise/train/talk?robotCode=" + item.code)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img class="btn-icon"${ssrRenderAttr("src", _imports_2)} alt="" style="${ssrRenderStyle({ "vertical-align": "middle" })}" data-v-dfef76cb${_scopeId}>\u5BF9\u8BDD `);
                } else {
                  return [
                    createVNode("img", {
                      class: "btn-icon",
                      src: _imports_2,
                      alt: "",
                      style: { "vertical-align": "middle" }
                    }),
                    createTextVNode("\u5BF9\u8BDD ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
        if (pageType.value.id === 2 && loadMore.value) {
          _push(`<div class="loadMore" data-v-dfef76cb><div class="di" data-v-dfef76cb></div><div class="name" data-v-dfef76cb>\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A</div><div class="di" data-v-dfef76cb></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div class="noData" data-v-dfef76cb><div class="tac" data-v-dfef76cb><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-dfef76cb><p class="mb-28" data-v-dfef76cb>\u6682\u65E0\u6570\u636E</p></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/agent/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfef76cb"]]);

export { index as default };
//# sourceMappingURL=index-8187387f.mjs.map
