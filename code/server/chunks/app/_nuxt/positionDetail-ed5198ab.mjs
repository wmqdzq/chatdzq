import { a as _export_sfc, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './left-arrow-c624f267.mjs';
import { a as _imports_1, _ as _imports_2, b as _imports_3 } from './mail-5a0183a5.mjs';
import { _ as _imports_4, a as _imports_5 } from './delete-888252d9.mjs';
import { useRouter } from 'vue-router';
import positions from './positions-f3ee7fa8.mjs';
import vitae from './vitae-8fb2bafa.mjs';
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
import './electric-f4a0b755.mjs';
import './associate-75692ed7.mjs';
import './close-e8808509.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "positionDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const { Modal } = ipkg;
    const vitaeRef = ref();
    const postList = ref([]);
    const { proxy } = getCurrentInstance();
    const positionsRef = ref();
    const loading = ref(false);
    const btnLoading = ref(false);
    const router = useRouter();
    const params = ref({
      pageNo: 1,
      total: 0,
      pageSize: 10,
      positionCode: "",
      condition: "",
      dataStatus: ""
    });
    const stateList = ref([
      { name: "\u5168\u90E8", value: "" },
      { name: "\u672A\u901A\u8FC7\u521D\u7B5B", value: "NO_FILTERED" },
      { name: "\u672A\u7B14\u8BD5", value: "NOT_WRITTEN_TEST" },
      { name: "\u5F85\u67E5\u770B", value: "TO_BE_VIEWED" },
      { name: "\u5DF2\u67E5\u770B", value: "VIEWED" }
    ]);
    const dataParams = ref({});
    const onChange = () => {
      getPost();
    };
    const init = () => {
      let data = {
        code: router.currentRoute.value.query.code
      };
      proxy.$api.getPosition(data).then((res) => {
        dataParams.value = res.data;
      });
      params.value.positionCode = router.currentRoute.value.query.code;
      getPost();
    };
    const getPost = () => {
      btnLoading.value = true;
      proxy.$api.queryResumePageList(params.value).then((res) => {
        postList.value = res.data;
        btnLoading.value = false;
        params.value.total = res.totalCount;
      }).catch(() => {
        btnLoading.value = false;
      });
    };
    const deletePost = (record) => {
      if (record) {
        Modal.confirm({
          okText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88",
          content: "\u662F\u5426\u5220\u9664\u8BE5\u7B80\u5386?",
          onOk: () => {
            let data = {
              code: record.code
            };
            proxy.$api.deleteResume(data).then(() => {
              proxy.$Message.success("\u5DF2\u5220\u9664");
              init();
            });
          }
        });
      }
    };
    proxy.$debounce(() => {
      if (loading.value) {
        return;
      }
      loading.value = true;
      let data = {
        code: dataParams.value.code,
        name: dataParams.value.name,
        description: dataParams.value.description
      };
      proxy.$api.editPosition(data).then(() => {
        loading.value = false;
        proxy.$Message.success("\u5DF2\u4FDD\u5B58");
        init();
      }).catch(() => {
        loading.value = false;
      });
    }, 300);
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_Button = resolveComponent("Button");
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Page = resolveComponent("Page");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "positionDetail" }, _attrs))} data-v-ea65b8dc><div class="detail-left" data-v-ea65b8dc><div class="left-top" data-v-ea65b8dc><img${ssrRenderAttr("src", _imports_0)} data-v-ea65b8dc><div class="name" data-v-ea65b8dc>\u804C\u4F4D</div></div><div class="left-content" data-v-ea65b8dc><div class="content-top" data-v-ea65b8dc><div class="top-name" data-v-ea65b8dc><div data-v-ea65b8dc>${ssrInterpolate(dataParams.value.name)}</div><img${ssrRenderAttr("src", _imports_1)} data-v-ea65b8dc></div><div class="describe" data-v-ea65b8dc><div data-v-ea65b8dc>${ssrInterpolate(dataParams.value.name)}</div><div data-v-ea65b8dc>${ssrInterpolate(dataParams.value.description)}</div></div></div></div></div><div class="detail-right" data-v-ea65b8dc><div class="right-top" data-v-ea65b8dc><div style="${ssrRenderStyle({ "text-align": "center", "width": "80px", "display": "flex", "flex-wrap": "wrap", "justify-content": "center" })}" data-v-ea65b8dc><div data-v-ea65b8dc>\u7B80\u5386\u5217\u8868</div><div class="line" data-v-ea65b8dc></div></div></div><div class="right-content" data-v-ea65b8dc><div class="content-search" data-v-ea65b8dc>`);
      _push(ssrRenderComponent(_component_Input, {
        prefix: "ios-search",
        modelValue: params.value.condition,
        "onUpdate:modelValue": ($event) => params.value.condition = $event,
        placeholder: "\u8F93\u5165\u59D3\u540D\u6216\u8054\u7CFB\u65B9\u5F0F\u641C\u7D22",
        class: "input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Select, {
              class: "select",
              modelValue: params.value.dataStatus,
              "onUpdate:modelValue": ($event) => params.value.dataStatus = $event,
              clearable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(stateList.value, (item) => {
                    _push3(ssrRenderComponent(_component_Option, {
                      value: item.value,
                      key: item.value
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
                    (openBlock(true), createBlock(Fragment, null, renderList(stateList.value, (item) => {
                      return openBlock(), createBlock(_component_Option, {
                        value: item.value,
                        key: item.value
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
                class: "select",
                modelValue: params.value.dataStatus,
                "onUpdate:modelValue": ($event) => params.value.dataStatus = $event,
                clearable: ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(stateList.value, (item) => {
                    return openBlock(), createBlock(_component_Option, {
                      value: item.value,
                      key: item.value
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
      _push(ssrRenderComponent(_component_Button, {
        type: "primary",
        class: "btn",
        onClick: getPost,
        loading: btnLoading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u641C\u7D22\u7B80\u5386`);
          } else {
            return [
              createTextVNode("\u641C\u7D22\u7B80\u5386")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="content-table" data-v-ea65b8dc><!--[-->`);
      ssrRenderList(postList.value, (item, i) => {
        _push(`<div class="table-item" data-v-ea65b8dc><div class="item-content" data-v-ea65b8dc><div class="item-content-left" data-v-ea65b8dc><div class="item-content-user" data-v-ea65b8dc><div class="user" data-v-ea65b8dc><img${ssrRenderAttr("src", _imports_2)} data-v-ea65b8dc><div data-v-ea65b8dc>${ssrInterpolate(item.name)}</div></div><div class="mail" data-v-ea65b8dc><img${ssrRenderAttr("src", _imports_3)} data-v-ea65b8dc><div class="text-hide" data-v-ea65b8dc>${ssrInterpolate(item.phone)} ${ssrInterpolate(item.email)}</div></div></div><div class="item-content-message" data-v-ea65b8dc><div class="message-item" data-v-ea65b8dc><div class="degree" data-v-ea65b8dc>\u5339\u914D\u5EA6 ${ssrInterpolate(item.matchDegree)}%</div><div class="time" data-v-ea65b8dc>${ssrInterpolate(item.gmtCreate)}\u4E0A\u4F20</div></div>`);
        if (item.point) {
          _push(`<div class="message-item" data-v-ea65b8dc><div class="mark" data-v-ea65b8dc>\u8BC4\u5206 ${ssrInterpolate(item.point)}\u5206</div><div class="time" data-v-ea65b8dc>${ssrInterpolate(item.gmtWrittenExam)}\u7B14\u8BD5</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="item-content-right" data-v-ea65b8dc><div class="right-state" data-v-ea65b8dc>`);
        if (item.dataStatus == "NO_FILTERED") {
          _push(`<div class="grayPoint" data-v-ea65b8dc></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.dataStatus == "VIEWED") {
          _push(`<div class="greenPoint" data-v-ea65b8dc></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.dataStatus == "NOT_WRITTEN_TEST") {
          _push(`<div class="redPoint" data-v-ea65b8dc></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.dataStatus == "TO_BE_VIEWED") {
          _push(`<div class="brownPoint" data-v-ea65b8dc></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div style="${ssrRenderStyle({ "white-space": "nowrap" })}" data-v-ea65b8dc><!--[-->`);
        ssrRenderList(stateList.value, (iten) => {
          _push(`<!--[-->`);
          if (iten.value == item.dataStatus) {
            _push(`<!--[-->${ssrInterpolate(iten.name)}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div><div class="right-action" data-v-ea65b8dc>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, { content: "\u7F16\u8F91" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="action-ico" data-v-ea65b8dc${_scopeId2}><img class="ico"${ssrRenderAttr("src", _imports_4)} data-v-ea65b8dc${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "action-ico" }, [
                        createVNode("img", {
                          class: "ico",
                          onClick: withModifiers(($event) => vitaeRef.value.showFn(item), ["stop"]),
                          src: _imports_4
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Tooltip, { content: "\u5220\u9664" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="action-ico" data-v-ea65b8dc${_scopeId2}><img class="ico"${ssrRenderAttr("src", _imports_5)} data-v-ea65b8dc${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "action-ico" }, [
                        createVNode("img", {
                          class: "ico",
                          onClick: withModifiers(($event) => deletePost(item), ["stop"]),
                          src: _imports_5
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Tooltip, { content: "\u7F16\u8F91" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "action-ico" }, [
                      createVNode("img", {
                        class: "ico",
                        onClick: withModifiers(($event) => vitaeRef.value.showFn(item), ["stop"]),
                        src: _imports_4
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_Tooltip, { content: "\u5220\u9664" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "action-ico" }, [
                      createVNode("img", {
                        class: "ico",
                        onClick: withModifiers(($event) => deletePost(item), ["stop"]),
                        src: _imports_5
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="content-page" data-v-ea65b8dc>`);
      _push(ssrRenderComponent(_component_Page, {
        modelValue: params.value.pageNo,
        "onUpdate:modelValue": ($event) => params.value.pageNo = $event,
        total: params.value.total,
        "page-size": params.value.pageSize,
        onOnChange: onChange,
        "show-elevator": ""
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(positions, {
        ref_key: "positionsRef",
        ref: positionsRef,
        onInit: init
      }, null, _parent));
      _push(ssrRenderComponent(vitae, {
        ref_key: "vitaeRef",
        ref: vitaeRef,
        onInit: init
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/positionDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const positionDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea65b8dc"]]);

export { positionDetail as default };
//# sourceMappingURL=positionDetail-ed5198ab.mjs.map
