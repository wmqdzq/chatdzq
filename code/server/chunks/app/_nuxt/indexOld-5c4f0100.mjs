import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './add1-1153134a.mjs';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { _ as _imports_4, a as _imports_5 } from './delete-888252d9.mjs';
import { _ as _imports_3 } from './fire-8ac8c80a.mjs';
import { _ as _imports_5$1 } from './notData-440511db.mjs';
import { useRouter } from 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "indexOld",
  __ssrInlineRender: true,
  setup(__props) {
    getRouting();
    const router = useRouter();
    const robotName = ref("");
    const selectId = ref("");
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const loading2 = ref(false);
    const listData = ref([]);
    const robotList = ref([]);
    const isInitial = ref(true);
    const selectCode = ref("");
    const modal = ref(false);
    const init = () => {
      onRobotList();
      onAgentRobotList();
    };
    const toSearch = () => {
      selectId.value = "";
      onRobotList();
    };
    const onAgentRobotList = () => {
      let data = {
        type: "CHAT"
      };
      proxy.$api.space_robotQuery(data).then((res) => {
        robotList.value = res.data;
      });
    };
    const onRobotList = () => {
      let data = {
        keyword: robotName.value,
        type: "ROLE_ROBOT_CATEGORY"
      };
      loading.value = true;
      listData.value = [];
      proxy.$api.queryCategoryRobotList(data).then((res) => {
        listData.value = res.data;
        if (isInitial.value && res.data && res.data.length > 0) {
          selectId.value = res.data[0].id;
        }
        loading.value = false;
        isInitial.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const useNumber = (record) => {
      let num = Number(record);
      if (num < 1e4) {
        return num;
      } else {
        let result = Math.floor(num / 1e3) / 10;
        return result + "W";
      }
    };
    const toEdit = (record) => {
      router.push("/ai/agent/addAgent?code=" + record.code);
    };
    const toDelete = (record) => {
      if (record) {
        selectCode.value = record.code;
        modal.value = true;
      } else {
        loading2.value = true;
        proxy.$api.space_robotDel({
          code: selectCode.value
        }).then(() => {
          proxy.$Message.success("\u5DF2\u5220\u9664");
          loading2.value = false;
          modal.value = false;
          onAgentRobotList();
        }).catch(() => {
          loading2.value = false;
        });
      }
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Modal = resolveComponent("Modal");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "role" }, _attrs))} data-v-3f0b1c16>`);
      _push(ssrRenderComponent(_component_Spin, {
        fix: "",
        show: loading2.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u52A0\u8F7D\u4E2D...`);
          } else {
            return [
              createTextVNode("\u52A0\u8F7D\u4E2D...")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="role-content" data-v-3f0b1c16><div class="chatTitleCom clearfix" data-v-3f0b1c16><h1 class="fl" data-v-3f0b1c16>AI\u667A\u80FD\u4F53</h1>`);
      _push(ssrRenderComponent(_component_Input, {
        class: "fr i-230",
        prefix: "ios-search",
        placeholder: "\u641C\u7D22\u680F\u76EE\u540D\u79F0...",
        modelValue: robotName.value,
        "onUpdate:modelValue": ($event) => robotName.value = $event,
        onOnKeypress: toSearch
      }, null, _parent));
      _push(`</div><div class="role-title" data-v-3f0b1c16>\u6211\u521B\u5EFA\u7684</div><div class="agent-list" data-v-3f0b1c16><ul class="clearfix" data-v-3f0b1c16><li class="add" data-v-3f0b1c16><img${ssrRenderAttr("src", _imports_0)} data-v-3f0b1c16> \u521B\u5EFA\u667A\u80FD\u4F53 </li><!--[-->`);
      ssrRenderList(robotList.value, (item, index) => {
        _push(`<li class="agent-item" data-v-3f0b1c16>`);
        if (item.robotLogo) {
          _push(`<img${ssrRenderAttr("src", item.robotLogo)} alt="" data-v-3f0b1c16>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_1)} data-v-3f0b1c16>`);
        }
        _push(`<h2 class="text-hide" data-v-3f0b1c16>${ssrInterpolate(item.name)}</h2><div class="text-content" data-v-3f0b1c16><p class="text-hide" data-v-3f0b1c16>${ssrInterpolate(item.robotRemark)}</p><div class="action" data-v-3f0b1c16>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, { content: "\u7F16\u8F91" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="action-ico" data-v-3f0b1c16${_scopeId2}><img class="ico"${ssrRenderAttr("src", _imports_4)} data-v-3f0b1c16${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "action-ico",
                        onClick: withModifiers(($event) => toEdit(item), ["stop"])
                      }, [
                        createVNode("img", {
                          class: "ico",
                          src: _imports_4
                        })
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Tooltip, { content: "\u5220\u9664" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="action-ico" data-v-3f0b1c16${_scopeId2}><img class="ico"${ssrRenderAttr("src", _imports_5)} data-v-3f0b1c16${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "action-ico",
                        onClick: withModifiers(($event) => toDelete(item), ["stop"])
                      }, [
                        createVNode("img", {
                          class: "ico",
                          src: _imports_5
                        })
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Tooltip, { content: "\u7F16\u8F91" }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "action-ico",
                      onClick: withModifiers(($event) => toEdit(item), ["stop"])
                    }, [
                      createVNode("img", {
                        class: "ico",
                        src: _imports_4
                      })
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_Tooltip, { content: "\u5220\u9664" }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "action-ico",
                      onClick: withModifiers(($event) => toDelete(item), ["stop"])
                    }, [
                      createVNode("img", {
                        class: "ico",
                        src: _imports_5
                      })
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></li>`);
      });
      _push(`<!--]--></ul></div><div class="role-title" data-v-3f0b1c16>\u66F4\u591A\u667A\u80FD\u4F53</div><div class="content-tabs" data-v-3f0b1c16><div class="navList-tabs" data-v-3f0b1c16><!--[-->`);
      ssrRenderList(listData.value, (item, i) => {
        _push(`<div class="${ssrRenderClass([item.id == selectId.value ? "active" : "", "tabs-item"])}" data-v-3f0b1c16>${ssrInterpolate(item.cateName)}</div>`);
      });
      _push(`<!--]--></div></div><div class="content-list" data-v-3f0b1c16>`);
      _push(ssrRenderComponent(_component_Spin, {
        fix: "",
        show: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u52A0\u8F7D\u4E2D...`);
          } else {
            return [
              createTextVNode("\u52A0\u8F7D\u4E2D...")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(listData.value, (item) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(item.robotList, (iten) => {
          _push(`<!--[-->`);
          if (selectId.value == "collect") {
            _push(`<!--[-->`);
            if (iten.favoriteFlag) {
              _push(`<div class="content-list-item" style="${ssrRenderStyle({ "background": iten.backgroupPic ? "" : "#879299" })}" data-v-3f0b1c16><div class="item-shadow" data-v-3f0b1c16></div>`);
              if (iten.backgroupPic) {
                _push(`<img class="logo"${ssrRenderAttr("src", iten.backgroupPic)} data-v-3f0b1c16>`);
              } else {
                _push(`<img class="logo"${ssrRenderAttr("src", iten.img)} data-v-3f0b1c16>`);
              }
              if (iten.usePeopleNum) {
                _push(`<div class="tag" data-v-3f0b1c16><img${ssrRenderAttr("src", _imports_3)} data-v-3f0b1c16><div data-v-3f0b1c16>${ssrInterpolate(useNumber(iten.usePeopleNum))}\u4EBA\u5728\u4F7F\u7528</div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="item-name" data-v-3f0b1c16><div class="name" data-v-3f0b1c16>${ssrInterpolate(iten.name)}</div><div class="remark" data-v-3f0b1c16>${ssrInterpolate(iten.robotRemark)}</div></div></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!--[-->`);
            if (_ctx.$isEmpty(selectId.value) || item.id == selectId.value) {
              _push(`<div class="content-list-item" style="${ssrRenderStyle({ "background": iten.backgroupPic ? "" : "#879299" })}" data-v-3f0b1c16><div class="item-shadow" data-v-3f0b1c16></div>`);
              if (iten.backgroupPic) {
                _push(`<img class="logo"${ssrRenderAttr("src", iten.backgroupPic)} data-v-3f0b1c16>`);
              } else {
                _push(`<img class="logo"${ssrRenderAttr("src", iten.img)} data-v-3f0b1c16>`);
              }
              if (iten.usePeopleNum) {
                _push(`<div class="tag" data-v-3f0b1c16><img${ssrRenderAttr("src", _imports_3)} data-v-3f0b1c16><div data-v-3f0b1c16>${ssrInterpolate(useNumber(iten.usePeopleNum))}\u4EBA\u5728\u4F7F\u7528</div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="item-name" data-v-3f0b1c16><div class="name" data-v-3f0b1c16>${ssrInterpolate(iten.name)}</div><div class="remark" data-v-3f0b1c16>${ssrInterpolate(iten.robotRemark)}</div></div></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]-->`);
      if (listData.value.length == 0) {
        _push(`<div class="noData-content" data-v-3f0b1c16><div class="noData" data-v-3f0b1c16><img${ssrRenderAttr("src", _imports_5$1)} data-v-3f0b1c16></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modal.value,
              "onUpdate:modelValue": ($event) => modal.value = $event,
              "mask-closable": false
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => modal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u53D6\u6D88`);
                      } else {
                        return [
                          createTextVNode("\u53D6\u6D88")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => toDelete(""),
                    type: "primary",
                    loading: loading2.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u5B9A`);
                      } else {
                        return [
                          createTextVNode("\u786E\u5B9A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      onClick: ($event) => modal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u53D6\u6D88")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      onClick: ($event) => toDelete(""),
                      type: "primary",
                      loading: loading2.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u5B9A")
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-3f0b1c16${_scopeId2}><p data-v-3f0b1c16${_scopeId2}>\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?</p><p data-v-3f0b1c16${_scopeId2}>\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528</p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", null, "\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?"),
                      createVNode("p", null, "\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                modelValue: modal.value,
                "onUpdate:modelValue": ($event) => modal.value = $event,
                "mask-closable": false
              }, {
                footer: withCtx(() => [
                  createVNode(_component_Button, {
                    onClick: ($event) => modal.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    onClick: ($event) => toDelete(""),
                    type: "primary",
                    loading: loading2.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u5B9A")
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
                ]),
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("p", null, "\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?"),
                    createVNode("p", null, "\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/agent/indexOld.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const indexOld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f0b1c16"]]);

export { indexOld as default };
//# sourceMappingURL=indexOld-5c4f0100.mjs.map
