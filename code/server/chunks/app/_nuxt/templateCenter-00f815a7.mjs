import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, _ as __nuxt_component_1$1$1 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './ossUploaderNew-b29e011c.mjs';
import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { _ as __nuxt_component_1 } from './cEdit-6413cc22.mjs';
import { _ as __nuxt_component_1$1 } from './sPrompt-baa4194f.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { c as curriculumPng } from './curriculum-88d76de0.mjs';
import { _ as _imports_2 } from './unit-93a23101.mjs';
import { n as noDataCom } from './index-e1fc7e3e.mjs';
import { l as lodingData } from './loding-9ec1fb58.mjs';
import { c as contentCom } from './content-977f7524.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
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
import './upload-5a19747f.mjs';
import '@aws-sdk/client-s3';
import './copy-d1ce3f41.mjs';
import './close-5dffb58a.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABVxJREFUWEfVV21sk1UUfs7t26lQ5gDd+IoSo04Y/jECSiD+8SMOEgnqfogmJpPeta9ZZLKwGDVV0RgWNc5t7S0TIeIP5g8lihpCjP4wQ8mihkACKiEMs82ZzG3dGLbvPeY078jo2nUQI/EmTdrce8597nnOec4p4Sovusr34/8LIBaLqePHj2cfUFVVxbFYzF5JNPNGwBgT7O3t9XKckjHGcRzn2vHx8dnMvMhxnJBc6nneMIC+VCo1WlZWNq61zgDgmQCaAqCjo2NeOp1+UCl1au7cuT/X1NR4nZ2dJT09PRWhUGgdEdUy81oAJbkXMPMhZt43Njb2TSgU6tNap4uBmALAGPM6gBcA/MXMDziOc9pa+zAzvw2g3H+ZvFA+coH4CAAIAnD8338QUV0qlfq2oaFhcLpo5AOgAchlswCcAXAUwONExMw8KqFm5t+I6BcAJ6y1QaXUUmZeBuA2IloI4DofyP5MJtPouu65QiAK5cB7AGp9RxLFDDOfY+aPlFKvFAptc3Pz7Dlz5uwE8BAR3exHpGtsbOzRrVu39uajo2AZGmP2AHiCmYmIjgj34XD4VDFOZT+ZTN5ure0gonsFBDN3Dg0NPbN9+/aRXPuCAGKxWMmCBQs+I6JrMpnMBtd1U7nGe/funT86Omqj0ajwfMlqa2sLOY5zCMA9Ph1RrXUil4pphUicEFEw3wUtLS2lJSUlrxLR6ODg4M6mpqahXBDGmDuY+Ws/L/oBrNBa/zn53BUrYSKRqCaig+KMiKrD4fCX+egxxrgAWv29bVrrt/4VAO3t7RsDgcAn4kwptXHLli0H8gHwqewnojIAXVrrNf8pALksHo/vV0rVAPh7eHh4XmNjo5Rzdl1CQSwWcyoqKlbLRn9///exWEzEJu+aaQR8APVKqXflu7V2dSQS+SEvgHg8vlQpddI/WBmJRESIigIgok3hcDhLR741GSwzr6+rq/siLwBjzHoAn/ubNVrrjws5bW1trQ4Gg9kkZOYdnue1ua7bl+98IpF4jIgmfG3QWmftplCQTCZXMvNEeBq01u8UAtDW1rbMcRx5daU0RADN1lqTL2rGmGcBiLoik8mscl1X5H0qgNbW1vnBYLDHl+B9WuunCgGQ/Ekmk5ustU1EdLfQy8zvW2vfjEajpyfbGWM+BPAkgHHP8xZN1pUpOpBIJER2JRF7Pc+ryidCOc7lrLxupbBBRB8EAoHnamtrs7K7e/fuG9Pp9E8AFllrj0YikVWT7fN1w3oA2Yxl5khdXZ3I57QrmUyuYeY3mHkdgJTneStc15VISglerAAAU2idAmDXrl1LrLVdAJZIO/az9kQxEIlEYjkRvcTM/X19fdukhH0p/pSIKplZfK2NRCK/TxsB2TTGNDHza0QknWy/53kvuq77azEQxphZ3d3d6WQyKR/piC8T0WZmlnb+fCQSacn1UWgeuJ6Z9xLRI5LhzLyHiPb09vYemU6cxLkvZmuVUk/7iRdg5gMjIyObJytg3iqYjK69vb0yEAi0MPP9RCQNp0uAMPMpa+2x3OSUClJKLVdK3UpEUQB3MbPYHfY8rz4ajWYFbkYRmDhkjLlT5kNmls5XCuA8Ef0I4LC19gwRXZA5TcY3Zr6FiO4jIrEpZWaZlL8ioh1a62OF6CvajuPx+GKllJYMJyIptdm+s/PMPEZEUv+lMrj4lTMOQEr5OxmOtNZnp8udogDEuLOzMzAwMLDacZxqZhblWwzgBiK6CIaIZFgVKT6ZyWQOep7XXV9ff6FY4s4IwIQTSbDy8vKbAEi4FyqlhBZZKWttj7X27MDAwOnL+Zd0WQCKveZK9q86gH8AWXaRP4R89UUAAAAASUVORK5CYII=";
const _imports_3 = "" + buildAssetsURL("nodata.dd917943.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "templateCenter",
  __ssrInlineRender: true,
  emits: ["insertion"],
  setup(__props, { emit: emits }) {
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const robotTypeList = ref([]);
    const robotList = ref([]);
    const sPromptRef = ref();
    const pageLoading = ref(false);
    const selectParentCode = ref("");
    const allRobotList = ref([]);
    const selectRobot = ref({});
    const isShow = ref(true);
    const pageType = ref(1);
    const consumeEnergy = ref("");
    const robotCode = ref("");
    ref("");
    const columnListData = ref([]);
    const isShowExample = ref(true);
    const dataList = ref([]);
    const content = ref("");
    const isEdit = ref(false);
    const btnLoading = ref(false);
    const groupId = ref("");
    const loadMore = ref(true);
    const hisList = ref([]);
    const divLoading = ref(false);
    const typeList = ref([
      { name: "\u6A21\u677F\u5199\u4F5C", value: "QUESTION_BANK" },
      { name: "\u9AD8\u7EA7\u5199\u4F5C", value: "HIGH_LEVEL_WRITTING" },
      { name: "AI\u7075\u611F", value: "AI_INSPIRATION" },
      { name: "\u4E00\u952E\u7EED\u5199", value: "ONE_CLICK_CONTINUATION" },
      { name: "\u5168\u6587\u6DA6\u8272", value: "FULL_TEXT_POLISHING" },
      { name: "\u603B\u7ED3\u6458\u8981", value: "FULL_TEXT_SUMMARY" },
      { name: "\u5168\u6587\u7FFB\u8BD1", value: "FULL_TEXT_TRANSLATION" },
      { name: "\u5168\u6587\u6269\u5199", value: "FULL_TEXT_EXPANSION" },
      { name: "\u5E2E\u4F60\u5199", value: "AI_ASSISTED_WRITING" },
      { name: "AI\u914D\u56FE", value: "AI_MAPPING" }
    ]);
    const hisParams = ref({
      type: "",
      ronotCode: "",
      robotType: "QUESTION_BANK",
      pageSize: 20,
      pageNo: 1
    });
    const constparams = ref({
      keyword: "",
      type: "QUESTION_BANK_ROBOT_CATEGORY"
    });
    const delParams = ref({
      groupId: "",
      code: ""
    });
    const init = () => {
      let data = {
        keyword: "",
        type: "QUESTION_BANK_ROBOT_CATEGORY"
      };
      loading.value = true;
      pageLoading.value = true;
      dataList.value = [];
      getQuerySystemRobotAiRecordPageList();
      proxy.$api.queryCategoryRobotList(data).then((res) => {
        robotTypeList.value = res.data;
        loading.value = false;
        robotList.value = [];
        allRobotList.value = [];
        res.data.forEach((item) => {
          if (item.robotList && item.robotList.length > 0) {
            item.robotList.forEach((iten) => {
              iten.parentCode = item.id;
              robotList.value.push(iten);
              allRobotList.value.push(iten);
            });
          }
        });
        pageLoading.value = false;
      }).catch(() => {
        loading.value = false;
        pageLoading.value = false;
      });
    };
    const getQuerySystemRobotAiRecordPageList = () => {
      if (loadMore.value) {
        divLoading.value = true;
        proxy.$api.querySystemRobotAiRecordPageList(hisParams.value).then((res) => {
          divLoading.value = false;
          if (hisParams.value.pageNo == 1) {
            hisList.value = res.data;
          } else {
            hisList.value = hisList.value.concat(res.data);
          }
          if (res.data.length == 0) {
            loadMore.value = false;
          }
        }).catch(() => {
          divLoading.value = false;
        });
      }
    };
    const toEdit = (record) => {
      pageType.value = 5;
      content.value = record.content;
      isEdit.value = false;
    };
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        hisParams.value.pageNo = hisParams.value.pageNo + 1;
        getQuerySystemRobotAiRecordPageList();
      }
    }, 300);
    const toDelete = (record) => {
      if (record) {
        delParams.value.groupId = record.groupId;
        delParams.value.code = record.code;
        sPromptRef.value.showFn();
      } else {
        divLoading.value = true;
        proxy.$api.airecordDelAiRecord(delParams.value).then(() => {
          divLoading.value = false;
          hisParams.value.pageNo = 1;
          proxy.$Message.success("\u5DF2\u5220\u9664");
          loadMore.value = true;
          getQuerySystemRobotAiRecordPageList();
        }).catch(() => {
          divLoading.value = false;
        });
      }
    };
    const toSearch = () => {
      let data = {
        keyword: constparams.value.keyword,
        type: "QUESTION_BANK_ROBOT_CATEGORY"
      };
      pageLoading.value = true;
      robotList.value = [];
      proxy.$api.queryCategoryRobotList(data).then((res) => {
        res.data.forEach((item) => {
          if (item.robotList && item.robotList.length > 0) {
            item.robotList.forEach((iten) => {
              iten.parentCode = item.id;
              robotList.value.push(iten);
            });
          }
        });
        pageLoading.value = false;
      }).catch(() => {
        pageLoading.value = false;
      });
    };
    const selectChange = () => {
      robotList.value = [];
      if (proxy.$isEmpty(selectParentCode.value)) {
        robotList.value = allRobotList.value;
        chatShow();
      } else {
        allRobotList.value.forEach((item, i) => {
          if (item.parentCode == selectParentCode.value) {
            robotList.value.push(item);
          }
          if (i == Number(allRobotList.value.length - 1)) {
            chatShow();
          }
        });
      }
    };
    const chatShow = () => {
      isShow.value = false;
      setTimeout(() => {
        isShow.value = true;
      }, 1);
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
    const uploadSuccessBg = (index, e) => {
      columnListData.value[index].value = e[0].code;
    };
    const toSubmit = () => {
      if (loading.value) {
        return;
      }
      let form = {}, flag = false;
      columnListData.value.forEach((item) => {
        form[item.itemParam] = item.value ? item.value : "";
        if (item.hadRequired && proxy.$isEmpty(item.value) && !flag && item.formType != "EXAMINATION_COMPONENT") {
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
      });
      if (flag)
        return;
      loading.value = true;
      let datas = {
        type: selectRobot.value.type,
        robotCode: selectRobot.value.code
      };
      proxy.$api.ai_bulidChatGroupId(datas).then((json) => {
        groupId.value = json.data;
        let data = {
          content: form,
          groupId: groupId.value,
          robotCode: robotCode.value,
          requestContent: form,
          sseStream: true
        };
        btnLoading.value = true;
        proxy.$setAiChat(proxy, data, "", (item) => {
          if (item && item.content) {
            pageType.value = 3;
            loading.value = false;
            content.value = content.value + "" + item.content;
          }
          if (item.type == "[ONCOMPLETED]") {
            btnLoading.value = false;
          }
        });
      });
    };
    const toBack = () => {
      pageType.value = Number(pageType.value) - 1;
      content.value = "";
      isEdit.value = false;
    };
    const toInsertion = () => {
      emits("insertion", content.value);
    };
    const toCollect = proxy.$debounce((e) => {
      let data = {
        aiRecordEvaluateType: e.hadCollect ? "BAD_REVIEW" : "GOOD_REVIEW",
        aiRecordCode: e.code,
        groupId: e.groupId
      };
      divLoading.value = true;
      proxy.$api.aiRecordLike(data).then(() => {
        divLoading.value = false;
        e.hadCollect = !e.hadCollect;
        proxy.$Message.success(data.aiRecordEvaluateType == "BAD_REVIEW" ? "\u53D6\u6D88\u6536\u85CF" : "\u5DF2\u6536\u85CF");
      }).catch(() => {
        divLoading.value = false;
      });
    }, 300);
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      const _component_Icon = resolveComponent("Icon");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Button = resolveComponent("Button");
      const _component_ClientOnly = __nuxt_component_1$1$1;
      const _component_DatePicker = resolveComponent("DatePicker");
      const _component_RadioGroup = resolveComponent("RadioGroup");
      const _component_Radio = resolveComponent("Radio");
      const _component_ossUploaderNew = __nuxt_component_0$1;
      const _component_InputNumber = resolveComponent("InputNumber");
      const _component_svga = __nuxt_component_0;
      const _component_cEdit = __nuxt_component_1;
      const _component_sPrompt = __nuxt_component_1$1;
      const _directive_load = resolveDirective("load");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "template" }, _attrs))} data-v-8f5ff3f3>`);
      if (pageType.value == 1) {
        _push(`<!--[--><div class="template-top" data-v-8f5ff3f3><div class="top-title" data-v-8f5ff3f3><div data-v-8f5ff3f3>\u5199\u4F5C\u6A21\u7248</div><div class="title-time" data-v-8f5ff3f3><img${ssrRenderAttr("src", _imports_0)} data-v-8f5ff3f3><div data-v-8f5ff3f3>\u521B\u4F5C\u5386\u53F2</div></div></div><div class="top-input" data-v-8f5ff3f3>`);
        _push(ssrRenderComponent(_component_Input, {
          placeholder: "\u641C\u7D22\u6A21\u677F",
          class: "input",
          onOnEnter: toSearch,
          modelValue: constparams.value.keyword,
          "onUpdate:modelValue": ($event) => constparams.value.keyword = $event
        }, {
          prefix: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                type: "ios-search",
                class: "pointer",
                onClick: toSearch
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  type: "ios-search",
                  class: "pointer",
                  onClick: toSearch
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Select, {
          class: "select",
          clearable: "",
          loading: loading.value,
          modelValue: selectParentCode.value,
          "onUpdate:modelValue": ($event) => selectParentCode.value = $event,
          onOnClear: selectChange,
          onOnChange: selectChange
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(robotTypeList.value, (item) => {
                _push2(ssrRenderComponent(_component_Option, {
                  value: item.id,
                  key: item.id
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
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(robotTypeList.value, (item) => {
                  return openBlock(), createBlock(_component_Option, {
                    value: item.id,
                    key: item.id
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
        }, _parent));
        _push(`</div><div class="top-name" data-v-8f5ff3f3>\u70ED\u95E8\u63A8\u8350</div></div><div${ssrRenderAttrs(mergeProps({ class: "template-content" }, ssrGetDirectiveProps(_ctx, _directive_load, pageLoading.value)))} data-v-8f5ff3f3><div class="robot-list" data-v-8f5ff3f3>`);
        if (robotList.value.length > 0) {
          _push(`<!--[-->`);
          if (isShow.value) {
            _push(`<!--[-->`);
            ssrRenderList(robotList.value, (item, i) => {
              _push(`<div class="content-robot" data-v-8f5ff3f3><div class="robot-img" data-v-8f5ff3f3><img${ssrRenderAttr("src", item.robotLogo)} data-v-8f5ff3f3></div><div class="robot-name text-hide" data-v-8f5ff3f3>${ssrInterpolate(item.name)}</div><div class="robot-desc" data-v-8f5ff3f3>`);
              _push(ssrRenderComponent(_component_Tooltip, {
                content: item.robotRemark,
                "max-width": "200"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="text-hide-2" tyle="max-width:206px" data-v-8f5ff3f3${_scopeId}>${ssrInterpolate(item.robotRemark)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "text-hide-2",
                        tyle: "max-width:206px"
                      }, toDisplayString(item.robotRemark), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div></div>`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<div class="noData" data-v-8f5ff3f3>`);
          _push(ssrRenderComponent(noDataCom, null, null, _parent));
          _push(`</div>`);
        }
        _push(`</div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == 2 || pageType.value == 3) {
        _push(`<!--[-->`);
        if (selectRobot.value.code) {
          _push(`<div class="template-detail" data-v-8f5ff3f3>`);
          if (pageType.value != 5) {
            _push(`<div class="detail-top" data-v-8f5ff3f3>`);
            _push(ssrRenderComponent(_component_Button, {
              icon: "ios-arrow-back",
              onClick: toBack
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
            _push(`<div class="robot-detail" data-v-8f5ff3f3><div class="robot-img" data-v-8f5ff3f3><img${ssrRenderAttr("src", selectRobot.value.robotLogo)} data-v-8f5ff3f3></div><div class="robot-name" data-v-8f5ff3f3><div class="name text-hide" data-v-8f5ff3f3>${ssrInterpolate(selectRobot.value.name)}</div><div class="robotRemark text-hide-2" data-v-8f5ff3f3>${ssrInterpolate(selectRobot.value.robotRemark)}</div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="detail-list" data-v-8f5ff3f3>`);
          if (pageType.value == 2) {
            _push(`<!--[--><div class="list-content" data-v-8f5ff3f3>`);
            if (!loading.value) {
              _push(`<!--[-->`);
              ssrRenderList(columnListData.value, (item, i) => {
                _push(`<div class="form-item" data-v-8f5ff3f3><div class="form-item-title" data-v-8f5ff3f3><div class="name" data-v-8f5ff3f3>${ssrInterpolate(item.itemName)}</div>`);
                if (item.hadRequired) {
                  _push(`<div class="require" data-v-8f5ff3f3>*</div>`);
                } else {
                  _push(`<!---->`);
                }
                if (i == 0) {
                  _push(`<!--[-->`);
                  if (isShowExample.value) {
                    _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "flex-end", "flex": "1" })}" data-v-8f5ff3f3><div class="example" data-v-8f5ff3f3>\u4E0D\u77E5\u9053\u5199\u4EC0\u4E48?</div><div class="href" data-v-8f5ff3f3>\u8BD5\u8BD5\u793A\u4F8B</div></div>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!---->`);
                }
                if (item.formType == "EXAMINATION_COMPONENT") {
                  _push(`<div class="addType" data-v-8f5ff3f3>`);
                  _push(ssrRenderComponent(_component_Icon, {
                    class: "addBtn",
                    type: "ios-add-circle-outline",
                    size: "24",
                    onClick: ($event) => changeDataList("add")
                  }, null, _parent));
                  _push(`<div class="name" data-v-8f5ff3f3>\u6DFB\u52A0\u9898\u76EE\u7C7B\u578B</div></div>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
                if (item.formType == "TEXT") {
                  _push(ssrRenderComponent(_component_Input, {
                    modelValue: item.value,
                    "onUpdate:modelValue": ($event) => item.value = $event,
                    placeholder: item.attrItemJson
                  }, null, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(ssrRenderComponent(_component_ClientOnly, null, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      if (item.formType == "TEXTAREA") {
                        _push2(ssrRenderComponent(_component_Input, {
                          modelValue: item.value,
                          "onUpdate:modelValue": ($event) => item.value = $event,
                          type: "textarea",
                          placeholder: item.attrItemJson,
                          rows: 3
                        }, null, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
                      }
                    } else {
                      return [
                        item.formType == "TEXTAREA" ? (openBlock(), createBlock(_component_Input, {
                          key: 0,
                          modelValue: item.value,
                          "onUpdate:modelValue": ($event) => item.value = $event,
                          type: "textarea",
                          placeholder: item.attrItemJson,
                          rows: 3
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                if (item.formType == "SELECT" || item.formType == "TABS") {
                  _push(ssrRenderComponent(_component_Select, {
                    transfer: true,
                    modelValue: item.value,
                    "onUpdate:modelValue": ($event) => item.value = $event,
                    style: { "max-width": "50%" }
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`<!--[-->`);
                        ssrRenderList(item.attrItemJson.split(";"), (dataText, idx) => {
                          _push2(ssrRenderComponent(_component_Option, {
                            value: dataText,
                            key: idx
                          }, {
                            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                              if (_push3) {
                                _push3(`${ssrInterpolate(dataText)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(dataText), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent2, _scopeId));
                        });
                        _push2(`<!--]-->`);
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
                  }, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(ssrRenderComponent(_component_ClientOnly, null, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      if (item.formType == "DATE") {
                        _push2(ssrRenderComponent(_component_DatePicker, {
                          type: "date",
                          modelValue: item.value,
                          "onUpdate:modelValue": ($event) => item.value = $event,
                          placeholder: item.attrItemJson
                        }, null, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
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
                }, _parent));
                _push(ssrRenderComponent(_component_ClientOnly, null, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      if (item.formType == "RADIO") {
                        _push2(ssrRenderComponent(_component_RadioGroup, {
                          modelValue: item.value,
                          "onUpdate:modelValue": ($event) => item.value = $event
                        }, {
                          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                            if (_push3) {
                              _push3(`<!--[-->`);
                              ssrRenderList(item.attrItemJson.split(";"), (dataText, idx) => {
                                _push3(ssrRenderComponent(_component_Radio, {
                                  value: dataText,
                                  label: dataText
                                }, null, _parent3, _scopeId2));
                              });
                              _push3(`<!--]-->`);
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
                        }, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
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
                }, _parent));
                _push(ssrRenderComponent(_component_ClientOnly, null, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      if (item.formType == "UPLOAD_FILE") {
                        _push2(`<div class="content-upload" data-v-8f5ff3f3${_scopeId}><div class="upload" data-v-8f5ff3f3${_scopeId}>`);
                        _push2(ssrRenderComponent(_component_ossUploaderNew, {
                          id: "cImage-upload",
                          format: ["pdf", "doc", "docx"],
                          modeType: "freedom",
                          onUploadSuccess: ($event) => uploadSuccessBg(i, $event)
                        }, {
                          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                            if (_push3) {
                              _push3(`<div class="upload-area" data-v-8f5ff3f3${_scopeId2}>`);
                              if (item.value) {
                                _push3(`<div class="area-file" data-v-8f5ff3f3${_scopeId2}><img${ssrRenderAttr("src", curriculumPng)} data-v-8f5ff3f3${_scopeId2}></div>`);
                              } else {
                                _push3(`<!--[-->`);
                                _push3(ssrRenderComponent(_component_Icon, {
                                  type: "ios-cloud-upload",
                                  size: "40"
                                }, null, _parent3, _scopeId2));
                                _push3(`<div data-v-8f5ff3f3${_scopeId2}>\u8BF7\u4E0A\u4F20\u6587\u4EF6\uFF0C\u652F\u6301 PDF\u3001Word \u683C\u5F0F</div><!--]-->`);
                              }
                              _push3(`</div>`);
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
                        }, _parent2, _scopeId));
                        _push2(`</div></div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      if (item.formType == "EXAMINATION_COMPONENT") {
                        _push2(`<div class="dataList" data-v-8f5ff3f3${_scopeId}><!--[-->`);
                        ssrRenderList(dataList.value, (item2, i2) => {
                          _push2(`<div class="dataList-item" data-v-8f5ff3f3${_scopeId}>`);
                          _push2(ssrRenderComponent(_component_Select, {
                            class: "select",
                            modelValue: dataList.value[i2].type,
                            "onUpdate:modelValue": ($event) => dataList.value[i2].type = $event
                          }, {
                            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                              if (_push3) {
                                _push3(ssrRenderComponent(_component_Option, { value: "radio" }, {
                                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                    if (_push4) {
                                      _push4(`\u5355\u9009\u9898`);
                                    } else {
                                      return [
                                        createTextVNode("\u5355\u9009\u9898")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent3, _scopeId2));
                                _push3(ssrRenderComponent(_component_Option, { value: "checkbox" }, {
                                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                    if (_push4) {
                                      _push4(`\u591A\u9009\u9898`);
                                    } else {
                                      return [
                                        createTextVNode("\u591A\u9009\u9898")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent3, _scopeId2));
                              } else {
                                return [
                                  createVNode(_component_Option, { value: "radio" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u5355\u9009\u9898")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Option, { value: "checkbox" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u591A\u9009\u9898")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent2, _scopeId));
                          _push2(`<div class="input" data-v-8f5ff3f3${_scopeId}><div class="input-title" data-v-8f5ff3f3${_scopeId}>\u9898\u6570</div>`);
                          _push2(ssrRenderComponent(_component_InputNumber, {
                            min: 1,
                            modelValue: dataList.value[i2].num,
                            "onUpdate:modelValue": ($event) => dataList.value[i2].num = $event
                          }, null, _parent2, _scopeId));
                          _push2(`</div><div class="input" data-v-8f5ff3f3${_scopeId}><div class="input-title" data-v-8f5ff3f3${_scopeId}>\u603B\u5206\u503C</div>`);
                          _push2(ssrRenderComponent(_component_InputNumber, {
                            min: 1,
                            modelValue: dataList.value[i2].score,
                            "onUpdate:modelValue": ($event) => dataList.value[i2].score = $event
                          }, null, _parent2, _scopeId));
                          _push2(`</div><div class="reduce" data-v-8f5ff3f3${_scopeId}>`);
                          _push2(ssrRenderComponent(_component_Icon, {
                            type: "ios-remove-circle-outline",
                            size: "25",
                            onClick: ($event) => changeDataList("reduce", i2)
                          }, null, _parent2, _scopeId));
                          _push2(`</div></div>`);
                        });
                        _push2(`<!--]--></div>`);
                      } else {
                        _push2(`<!---->`);
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
                                  createVNode(_component_Option, { value: "radio" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u5355\u9009\u9898")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Option, { value: "checkbox" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u591A\u9009\u9898")
                                    ]),
                                    _: 1
                                  })
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
                }, _parent));
                _push(`</div>`);
              });
              _push(`<!--]-->`);
            } else {
              _push(`<div class="loading-data" data-v-8f5ff3f3>`);
              _push(ssrRenderComponent(_component_svga, {
                svgaImg: unref(lodingData),
                canvasName: "loading",
                width: 120
              }, null, _parent));
              _push(`</div>`);
            }
            _push(`</div><div class="list-bottom" data-v-8f5ff3f3><div class="bottom-top" data-v-8f5ff3f3><img${ssrRenderAttr("src", _imports_2)} data-v-8f5ff3f3><div class="title1" data-v-8f5ff3f3>\u5171\u6D88\u8017</div><div class="title2" data-v-8f5ff3f3>${ssrInterpolate(consumeEnergy.value)}</div><div class="title3" data-v-8f5ff3f3>\u7535\u91CF</div></div>`);
            _push(ssrRenderComponent(_component_Button, {
              type: "primary",
              class: "bottom-btn",
              loading: loading.value,
              onClick: toSubmit
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`\u7ACB\u5373\u751F\u6210`);
                } else {
                  return [
                    createTextVNode("\u7ACB\u5373\u751F\u6210")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (pageType.value == 3) {
            _push(`<!--[--><div class="content-detail" data-v-8f5ff3f3>`);
            if (!isEdit.value) {
              _push(`<div style="${ssrRenderStyle({ "padding": "20px 16px" })}" data-v-8f5ff3f3>`);
              _push(ssrRenderComponent(contentCom, { content: content.value }, null, _parent));
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            if (isEdit.value) {
              _push(`<div style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}" data-v-8f5ff3f3>`);
              _push(ssrRenderComponent(_component_cEdit, {
                content: content.value,
                "onUpdate:content": ($event) => content.value = $event
              }, null, _parent));
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="content-bottom" data-v-8f5ff3f3><div data-v-8f5ff3f3>\u5B57\u6570\uFF1A${ssrInterpolate(content.value.length)}</div><div class="bottom-btn" data-v-8f5ff3f3>`);
            _push(ssrRenderComponent(_component_Button, {
              class: "btn",
              loading: btnLoading.value,
              onClick: ($event) => _ctx.$CopyTex(content.value)
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
              onClick: toInsertion
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
              onClick: ($event) => isEdit.value = true
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
            _push(`</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == 4) {
        _push(`<div class="his-detail" data-v-8f5ff3f3><div class="detail-top" data-v-8f5ff3f3>`);
        _push(ssrRenderComponent(_component_Button, {
          icon: "ios-arrow-back",
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
        _push(`<div class="type-list" data-v-8f5ff3f3><!--[-->`);
        ssrRenderList(typeList.value, (item) => {
          _push(`<div class="${ssrRenderClass([item.value == hisParams.value.robotType ? "item-active" : "", "type-item"])}" data-v-8f5ff3f3>${ssrInterpolate(item.name)}</div>`);
        });
        _push(`<!--]--></div></div><div${ssrRenderAttrs(mergeProps({ class: "detail-content" }, ssrGetDirectiveProps(_ctx, _directive_load, divLoading.value)))} data-v-8f5ff3f3>`);
        if (!divLoading.value && hisList.value.length == 0) {
          _push(`<div class="nodata" data-v-8f5ff3f3><div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-8f5ff3f3><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "100px" })}" data-v-8f5ff3f3><div data-v-8f5ff3f3>\u6682\u65E0\u6570\u636E</div></div></div>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList(hisList.value, (item) => {
            _push(`<div class="content-item" data-v-8f5ff3f3><div class="item-title" data-v-8f5ff3f3>${ssrInterpolate(item.robotName)}</div><div class="item-content"${ssrRenderAttr("title", item.content)} data-v-8f5ff3f3>${ssrInterpolate(item.content)}</div><div class="item-bottom" data-v-8f5ff3f3><div data-v-8f5ff3f3>${ssrInterpolate(item.gmtCreate)}</div><div class="item-bottom-action" data-v-8f5ff3f3>`);
            _push(ssrRenderComponent(_component_Icon, {
              type: "md-trash",
              onClick: ($event) => toDelete(item),
              class: "action pointer",
              title: "\u5220\u9664",
              size: "20"
            }, null, _parent));
            _push(ssrRenderComponent(_component_Icon, {
              type: "md-star",
              class: "action pointer",
              color: item.hadCollect ? "#f8ac39" : "#cccccc",
              onClick: ($event) => unref(toCollect)(item),
              title: item.hadCollect ? "\u53D6\u6D88\u6536\u85CF" : "\u6536\u85CF",
              size: "20"
            }, null, _parent));
            if (item.content) {
              _push(ssrRenderComponent(_component_Icon, {
                type: "md-create",
                class: "action pointer",
                onClick: ($event) => toEdit(item),
                title: "\u7F16\u8F91",
                size: "20"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div>`);
          });
          _push(`<!--]-->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == 5) {
        _push(`<div class="template-detail" data-v-8f5ff3f3><div style="${ssrRenderStyle({ "padding": "16px" })}" data-v-8f5ff3f3>`);
        _push(ssrRenderComponent(_component_Button, {
          icon: "ios-arrow-back",
          onClick: toBack
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
        _push(`</div><div class="detail-list" style="${ssrRenderStyle({ "height": "calc(100% - 60px)" })}" data-v-8f5ff3f3><div class="content-detail" data-v-8f5ff3f3>`);
        if (!isEdit.value) {
          _push(`<div style="${ssrRenderStyle({ "padding": "20px 16px" })}" data-v-8f5ff3f3>`);
          _push(ssrRenderComponent(contentCom, { content: content.value }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (isEdit.value) {
          _push(`<div style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}" data-v-8f5ff3f3>`);
          _push(ssrRenderComponent(_component_cEdit, {
            content: content.value,
            "onUpdate:content": ($event) => content.value = $event
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="content-bottom" data-v-8f5ff3f3><div data-v-8f5ff3f3>\u5B57\u6570\uFF1A${ssrInterpolate(content.value.length)}</div><div class="bottom-btn" data-v-8f5ff3f3>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          loading: btnLoading.value,
          onClick: ($event) => _ctx.$CopyTex(content.value)
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
          onClick: toInsertion
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
          onClick: ($event) => isEdit.value = true
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
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_sPrompt, {
        ref_key: "sPromptRef",
        ref: sPromptRef,
        title: "\u5220\u9664",
        onOk: ($event) => toDelete("")
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-8f5ff3f3${_scopeId}>\u662F\u5426\u786E\u8BA4\u5220\u9664?</div>`);
          } else {
            return [
              createVNode("div", null, "\u662F\u5426\u786E\u8BA4\u5220\u9664?")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/creative/components/templateCenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const templateCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f5ff3f3"]]);

export { templateCenter as default };
//# sourceMappingURL=templateCenter-00f815a7.mjs.map
