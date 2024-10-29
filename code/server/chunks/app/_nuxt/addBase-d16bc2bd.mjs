import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, withModifiers, createCommentVNode, Fragment, renderList, withKeys } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { useRouter } from 'vue-router';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnJJREFUSEutVj2LE1EUPXdmGCz8ASksVhB0UbGysFNsFAWzncKKBvIxQypBOyVZLG1swnxsIIorWkbcwmJFBMHC0gVXWHBBwRSWKZY4eVdvmAmTZF422d3XzXv3nnPnnjf3DGHKajabJ5RSeaXUFSI6CSAHwALQAbDJzB+Zec113R0dDGUdeJ63YJpmjZmXY8BpdchZWyl1L4togsD3/WUi8gAc3Qt17HyXiArlcvl1en+EYHV1taaUqs8JPBJuGEa9VCqtJJtDgjAMbzLzq4OAJ7nMfNtxnDV5HhBIzw3D+AbgyGEQAOgqpc6KJgMC3/fbRHTjkMATmOeVSuUuxdX/0IEz8xsiOgdgYSxmG8B3ANc0uZFpmovk+/5DInqcFSTgjuPkG41GzrKsDwBOxXGfoii6Wq1Wu0EQrOtIiOiBEGwQ0WVNFTu2bV8oFAqdFMmfBLzVauV6vd4XAMc0Bb6nIAh+x1+orktbtm1fSkhEQKk8Bk+/VVb+LyHgGcQdkkjsjOASGgnB3xnGwbDnkpWhibZGIfip6+G4oFK57I1pkgifRdLZS+StKIrOj/UcaU0sy/qccYUTsg0Kw/A+Mz+Zdk0zej7UJAzDt8x8XZP/iGTm9/t9GRMy5ycWEa0z85nxKolom5k3AeR1Aiiljg9GRRAEzwDcmeE2zRPSrlQqS+lh93UfHqAj3FVKLQ6HXTzwxGhezFOiLpaIbiXGM2I4nufVDcOoHYREKbXiuu7QtCYsMzae1j68ocvMbmI0SZFa0yeipzN6RATgpVjtTKafbo94xf/rKH8WFwGcJiL5kgWww8ziBe8sy2oXi0Xxhsz1Dw81OYUXiSuyAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "addBase",
  __ssrInlineRender: true,
  props: {
    limit: { default: 99999 },
    systemShow: { type: Boolean, default: true }
  },
  emits: ["init"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const loading = ref(false);
    const checkAllGroup = ref([]);
    const list = ref([]);
    const knowList = ref([]);
    const name = ref("");
    const forbiddenList = ref([]);
    const active = ref("0");
    const typeList = ref([]);
    const list1 = ref([]);
    const list2 = ref([]);
    const list3 = ref([]);
    const classList = ref([]);
    const selectName = ref("");
    const isShow = ref(false);
    const isLately = ref(false);
    const params = ref({
      categoryCode: "",
      total: 0,
      pageSize: 1e3,
      pageNo: 1,
      name: ""
    });
    const toSubmit = () => {
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      arr1 = list1.value.filter(
        (item) => checkAllGroup.value.includes(item.code)
      );
      arr2 = list2.value.filter(
        (item) => checkAllGroup.value.includes(item.code)
      );
      arr3 = list3.value.filter(
        (item) => checkAllGroup.value.includes(item.code)
      );
      knowList.value = arr1.concat(arr2).concat(arr3);
      if (knowList.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      let list4 = [];
      let lists = [];
      knowList.value.forEach((item, i) => {
        if (checkAllGroup.value.indexOf(item.code) != -1) {
          if (lists.indexOf(item.code) == -1) {
            lists.push(item.code);
            list4.push(item);
          }
        }
        if (i == Number(knowList.value.length - 1)) {
          if (list4.length > props.limit) {
            proxy.$Message.error("\u6700\u591A\u9009\u62E9" + props.limit + "\u4E2A\u77E5\u8BC6\u5E93");
            return;
          }
          modalShow.value = false;
          emit("init", list4);
        }
      });
    };
    const clearInput = () => {
      name.value = "";
      toSearch();
    };
    const init = () => {
      let data = {
        dataType: "ALL",
        robotCode: router.currentRoute.value.query.code,
        name: name.value
      };
      loading.value = true;
      proxy.$api.queryCateKnowledgeList(data).then((res) => {
        loading.value = false;
        list.value = [];
        list1.value = [];
        classList.value = res.data;
        res.data.forEach((item, i) => {
          item.knowledgeListResVOList.forEach((iten, j) => {
            list.value.push({
              ...iten,
              cateName: item.cateName
            });
            list1.value.push({
              ...iten,
              cateName: item.cateName
            });
          });
        });
      });
    };
    const onChange = (e) => {
      knowList.value = list.value.filter((item) => e.includes(item.code));
    };
    const showFn = (record) => {
      forbiddenList.value = [];
      knowList.value = [];
      checkAllGroup.value = [];
      if (record && record.length > 0) {
        record.forEach((item) => {
          forbiddenList.value.push(item.code);
        });
      }
      modalShow.value = true;
      proxy.$api.getKnowledgeCategoryList().then((res) => {
        typeList.value = res.data;
      });
      isLately.value = false;
      proxy.$api.queryCateKnowledgeRecentList().then((res) => {
        list3.value = res.data;
        if (res.data && res.data.length > 0) {
          isLately.value = true;
          onClick("-1", res.data);
        } else {
          isLately.value = false;
          onClick("0");
        }
        isShow.value = false;
        setTimeout(() => {
          isShow.value = true;
        }, 100);
      }).catch(() => {
        isLately.value = false;
        onClick("0");
        isShow.value = false;
        setTimeout(() => {
          isShow.value = true;
        }, 100);
      });
    };
    const onClick = (e, arr) => {
      active.value = e;
      name.value = "";
      if (e == -1) {
        if (arr && arr.length > 0) {
          list.value = arr;
        } else {
          proxy.$api.queryCateKnowledgeRecentList().then((res) => {
            list.value = res.data;
            list3.value = res.data;
          });
        }
      }
      if (e == 0) {
        init();
      }
      if (e == 1) {
        params.value.pageNo = 1;
        params.value.name = "";
        getSysKnowList();
      }
    };
    const getSysKnowList = () => {
      list.value = [];
      loading.value = true;
      params.value.name = name.value;
      proxy.$api.getAssetKnowledgeList(params.value).then((res) => {
        list.value = res.data;
        list2.value = res.data;
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const toSearch = () => {
      params.value.pageNo = 1;
      if (active.value == "0") {
        init();
      }
      if (active.value == "1") {
        getSysKnowList();
      }
      if (active.value == "-1") {
        loading.value = true;
        params.value.name = name.value;
        proxy.$api.queryCateKnowledgeRecentList(params.value).then((res) => {
          loading.value = false;
          list.value = res.data;
          list3.value = res.data;
        }).catch(() => {
          loading.value = false;
        });
      }
    };
    const chooseType = (record) => {
      params.value.categoryCode = record.code ? record.code : "";
      params.value.pageNo = 1;
      getSysKnowList();
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_Tabs = resolveComponent("Tabs");
      const _component_TabPane = resolveComponent("TabPane");
      const _component_CheckboxGroup = resolveComponent("CheckboxGroup");
      const _component_Checkbox = resolveComponent("Checkbox");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-8c2825ee${_scopeId}>\u9009\u62E9\u4F01\u4E1A\u77E5\u8BC6\u5E93</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u9009\u62E9\u4F01\u4E1A\u77E5\u8BC6\u5E93")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bottom" data-v-8c2825ee${_scopeId}><div class="bottom-name" data-v-8c2825ee${_scopeId}>\u5DF2\u9009\u62E9${ssrInterpolate(checkAllGroup.value.length)}\u4E2A\u77E5\u8BC6\u5E93</div>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: toSubmit,
              type: "primary",
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bottom" }, [
                createVNode("div", { class: "bottom-name" }, "\u5DF2\u9009\u62E9" + toDisplayString(checkAllGroup.value.length) + "\u4E2A\u77E5\u8BC6\u5E93", 1),
                createVNode(_component_Button, {
                  onClick: toSubmit,
                  type: "primary",
                  loading: loading.value
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E\u5B9A")
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(_component_Button, {
                  onClick: ($event) => modalShow.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="search" data-v-8c2825ee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              class: "search-input",
              modelValue: name.value,
              "onUpdate:modelValue": ($event) => name.value = $event,
              onKeydown: toSearch,
              placeholder: "\u8BF7\u8F93\u5165\u77E5\u8BC6\u5E93\u540D\u79F0"
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (name.value) {
                    _push3(`<img class="search-input-close"${ssrRenderAttr("src", _imports_0)} data-v-8c2825ee${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    name.value ? (openBlock(), createBlock("img", {
                      key: 0,
                      onClick: withModifiers(clearInput, ["stop"]),
                      class: "search-input-close",
                      src: _imports_0
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              loading: loading.value,
              onClick: toSearch
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
            _push2(`</div>`);
            if (isShow.value) {
              _push2(ssrRenderComponent(_component_Tabs, {
                onOnClick: onClick,
                "model-value": active.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (isLately.value) {
                      _push3(ssrRenderComponent(_component_TabPane, {
                        label: "\u6700\u8FD1",
                        name: "-1"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_TabPane, {
                      label: "\u4F01\u4E1A\u77E5\u8BC6\u5E93",
                      name: "0"
                    }, null, _parent3, _scopeId2));
                    if (_ctx.systemShow) {
                      _push3(ssrRenderComponent(_component_TabPane, {
                        label: "\u7CFB\u7EDF\u77E5\u8BC6\u5E93",
                        name: "1"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      isLately.value ? (openBlock(), createBlock(_component_TabPane, {
                        key: 0,
                        label: "\u6700\u8FD1",
                        name: "-1"
                      })) : createCommentVNode("", true),
                      createVNode(_component_TabPane, {
                        label: "\u4F01\u4E1A\u77E5\u8BC6\u5E93",
                        name: "0"
                      }),
                      _ctx.systemShow ? (openBlock(), createBlock(_component_TabPane, {
                        key: 1,
                        label: "\u7CFB\u7EDF\u77E5\u8BC6\u5E93",
                        name: "1"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (active.value == "1") {
              _push2(`<div class="bank-btn" data-v-8c2825ee${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                class: "bank-btn-item",
                onClick: ($event) => chooseType(""),
                type: params.value.categoryCode == "" ? "primary" : "default"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u5168\u90E8`);
                  } else {
                    return [
                      createTextVNode("\u5168\u90E8")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(typeList.value, (item, i) => {
                _push2(ssrRenderComponent(_component_Button, {
                  class: "bank-btn-item",
                  onClick: ($event) => chooseType(item),
                  type: item.code == params.value.categoryCode ? "primary" : "default",
                  key: i
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (active.value == "0") {
              _push2(`<div class="bank-btn" data-v-8c2825ee${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                class: "bank-btn-item",
                type: selectName.value == "" ? "primary" : "default",
                onClick: ($event) => selectName.value = ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u5168\u90E8`);
                  } else {
                    return [
                      createTextVNode("\u5168\u90E8")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(classList.value, (item, i) => {
                _push2(ssrRenderComponent(_component_Button, {
                  class: "bank-btn-item",
                  type: selectName.value == item.cateName ? "primary" : "default",
                  onClick: ($event) => selectName.value = item.cateName,
                  key: i
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
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="baseList" data-v-8c2825ee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CheckboxGroup, {
              modelValue: checkAllGroup.value,
              "onUpdate:modelValue": ($event) => checkAllGroup.value = $event,
              onOnChange: ($event) => onChange($event)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (active.value == "-1") {
                    _push3(`<!--[-->`);
                    ssrRenderList(list.value, (item, index) => {
                      _push3(ssrRenderComponent(_component_Checkbox, {
                        disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                        label: item.code
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="baseList-item" data-v-8c2825ee${_scopeId3}><div class="baseList-item-content" style="${ssrRenderStyle({ "width": "100%", "overflow": "hidden" })}" data-v-8c2825ee${_scopeId3}><div class="img" data-v-8c2825ee${_scopeId3}>`);
                            if (item.avatar) {
                              _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="" data-v-8c2825ee${_scopeId3}>`);
                            } else {
                              _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-8c2825ee${_scopeId3}>`);
                            }
                            _push4(`</div><div class="name" style="${ssrRenderStyle({ "width": "100%" })}" data-v-8c2825ee${_scopeId3}><div data-v-8c2825ee${_scopeId3}>${ssrInterpolate(item.name)}</div><div class="sub" data-v-8c2825ee${_scopeId3}>${ssrInterpolate(item.permissionUser)}</div></div></div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "baseList-item" }, [
                                createVNode("div", {
                                  class: "baseList-item-content",
                                  style: { "width": "100%", "overflow": "hidden" }
                                }, [
                                  createVNode("div", { class: "img" }, [
                                    item.avatar ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: item.avatar,
                                      alt: ""
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                      key: 1,
                                      src: _imports_1,
                                      alt: ""
                                    }))
                                  ]),
                                  createVNode("div", {
                                    class: "name",
                                    style: { "width": "100%" }
                                  }, [
                                    createVNode("div", null, toDisplayString(item.name), 1),
                                    createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                                  ])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (active.value == "0") {
                    _push3(`<!--[-->`);
                    ssrRenderList(list.value, (item, index) => {
                      _push3(`<!--[-->`);
                      if (selectName.value == "" || selectName.value == item.cateName) {
                        _push3(ssrRenderComponent(_component_Checkbox, {
                          disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                          label: item.code
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="baseList-item" data-v-8c2825ee${_scopeId3}><div class="baseList-item-content" style="${ssrRenderStyle({ "width": "100%", "overflow": "hidden" })}" data-v-8c2825ee${_scopeId3}><div class="img" data-v-8c2825ee${_scopeId3}>`);
                              if (item.avatar) {
                                _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="" data-v-8c2825ee${_scopeId3}>`);
                              } else {
                                _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-8c2825ee${_scopeId3}>`);
                              }
                              _push4(`</div><div class="name" style="${ssrRenderStyle({ "width": "100%" })}" data-v-8c2825ee${_scopeId3}><div data-v-8c2825ee${_scopeId3}>${ssrInterpolate(item.name)}</div><div class="sub" data-v-8c2825ee${_scopeId3}>${ssrInterpolate(item.permissionUser)}</div></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "baseList-item" }, [
                                  createVNode("div", {
                                    class: "baseList-item-content",
                                    style: { "width": "100%", "overflow": "hidden" }
                                  }, [
                                    createVNode("div", { class: "img" }, [
                                      item.avatar ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: item.avatar,
                                        alt: ""
                                      }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                        key: 1,
                                        src: _imports_1,
                                        alt: ""
                                      }))
                                    ]),
                                    createVNode("div", {
                                      class: "name",
                                      style: { "width": "100%" }
                                    }, [
                                      createVNode("div", null, toDisplayString(item.name), 1),
                                      createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (active.value == "1") {
                    _push3(`<!--[-->`);
                    ssrRenderList(list.value, (item, index) => {
                      _push3(ssrRenderComponent(_component_Checkbox, {
                        key: index,
                        disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                        label: item.code
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="baseList-item" data-v-8c2825ee${_scopeId3}><div class="baseList-item-content" style="${ssrRenderStyle({ "width": "100%", "overflow": "hidden" })}" data-v-8c2825ee${_scopeId3}><div class="img" data-v-8c2825ee${_scopeId3}>`);
                            if (item.avatar) {
                              _push4(`<img${ssrRenderAttr("src", item.avatar)} alt="" data-v-8c2825ee${_scopeId3}>`);
                            } else {
                              _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-8c2825ee${_scopeId3}>`);
                            }
                            _push4(`</div><div class="name" style="${ssrRenderStyle({ "width": "100%" })}" data-v-8c2825ee${_scopeId3}><div data-v-8c2825ee${_scopeId3}>${ssrInterpolate(item.name)}</div><div class="sub" data-v-8c2825ee${_scopeId3}>${ssrInterpolate(item.permissionUser)}</div></div></div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "baseList-item" }, [
                                createVNode("div", {
                                  class: "baseList-item-content",
                                  style: { "width": "100%", "overflow": "hidden" }
                                }, [
                                  createVNode("div", { class: "img" }, [
                                    item.avatar ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: item.avatar,
                                      alt: ""
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                      key: 1,
                                      src: _imports_1,
                                      alt: ""
                                    }))
                                  ]),
                                  createVNode("div", {
                                    class: "name",
                                    style: { "width": "100%" }
                                  }, [
                                    createVNode("div", null, toDisplayString(item.name), 1),
                                    createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                                  ])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    active.value == "-1" ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(list.value, (item, index) => {
                      return openBlock(), createBlock(_component_Checkbox, {
                        disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                        label: item.code
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "baseList-item" }, [
                            createVNode("div", {
                              class: "baseList-item-content",
                              style: { "width": "100%", "overflow": "hidden" }
                            }, [
                              createVNode("div", { class: "img" }, [
                                item.avatar ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: item.avatar,
                                  alt: ""
                                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_1,
                                  alt: ""
                                }))
                              ]),
                              createVNode("div", {
                                class: "name",
                                style: { "width": "100%" }
                              }, [
                                createVNode("div", null, toDisplayString(item.name), 1),
                                createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["disabled", "label"]);
                    }), 256)) : createCommentVNode("", true),
                    active.value == "0" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(list.value, (item, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        selectName.value == "" || selectName.value == item.cateName ? (openBlock(), createBlock(_component_Checkbox, {
                          key: 0,
                          disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                          label: item.code
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "baseList-item" }, [
                              createVNode("div", {
                                class: "baseList-item-content",
                                style: { "width": "100%", "overflow": "hidden" }
                              }, [
                                createVNode("div", { class: "img" }, [
                                  item.avatar ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: item.avatar,
                                    alt: ""
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                    key: 1,
                                    src: _imports_1,
                                    alt: ""
                                  }))
                                ]),
                                createVNode("div", {
                                  class: "name",
                                  style: { "width": "100%" }
                                }, [
                                  createVNode("div", null, toDisplayString(item.name), 1),
                                  createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled", "label"])) : createCommentVNode("", true)
                      ], 64);
                    }), 256)) : createCommentVNode("", true),
                    active.value == "1" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(list.value, (item, index) => {
                      return openBlock(), createBlock(_component_Checkbox, {
                        key: index,
                        disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                        label: item.code
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "baseList-item" }, [
                            createVNode("div", {
                              class: "baseList-item-content",
                              style: { "width": "100%", "overflow": "hidden" }
                            }, [
                              createVNode("div", { class: "img" }, [
                                item.avatar ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: item.avatar,
                                  alt: ""
                                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_1,
                                  alt: ""
                                }))
                              ]),
                              createVNode("div", {
                                class: "name",
                                style: { "width": "100%" }
                              }, [
                                createVNode("div", null, toDisplayString(item.name), 1),
                                createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["disabled", "label"]);
                    }), 128)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "search" }, [
                createVNode(_component_Input, {
                  class: "search-input",
                  modelValue: name.value,
                  "onUpdate:modelValue": ($event) => name.value = $event,
                  onKeydown: withKeys(toSearch, ["enter"]),
                  placeholder: "\u8BF7\u8F93\u5165\u77E5\u8BC6\u5E93\u540D\u79F0"
                }, {
                  suffix: withCtx(() => [
                    name.value ? (openBlock(), createBlock("img", {
                      key: 0,
                      onClick: withModifiers(clearInput, ["stop"]),
                      class: "search-input-close",
                      src: _imports_0
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                createVNode(_component_Button, {
                  type: "primary",
                  loading: loading.value,
                  onClick: toSearch
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u67E5\u8BE2")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              isShow.value ? (openBlock(), createBlock(_component_Tabs, {
                key: 0,
                onOnClick: onClick,
                "model-value": active.value
              }, {
                default: withCtx(() => [
                  isLately.value ? (openBlock(), createBlock(_component_TabPane, {
                    key: 0,
                    label: "\u6700\u8FD1",
                    name: "-1"
                  })) : createCommentVNode("", true),
                  createVNode(_component_TabPane, {
                    label: "\u4F01\u4E1A\u77E5\u8BC6\u5E93",
                    name: "0"
                  }),
                  _ctx.systemShow ? (openBlock(), createBlock(_component_TabPane, {
                    key: 1,
                    label: "\u7CFB\u7EDF\u77E5\u8BC6\u5E93",
                    name: "1"
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["model-value"])) : createCommentVNode("", true),
              active.value == "1" ? (openBlock(), createBlock("div", {
                key: 1,
                class: "bank-btn"
              }, [
                createVNode(_component_Button, {
                  class: "bank-btn-item",
                  onClick: ($event) => chooseType(""),
                  type: params.value.categoryCode == "" ? "primary" : "default"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u5168\u90E8")
                  ]),
                  _: 1
                }, 8, ["onClick", "type"]),
                (openBlock(true), createBlock(Fragment, null, renderList(typeList.value, (item, i) => {
                  return openBlock(), createBlock(_component_Button, {
                    class: "bank-btn-item",
                    onClick: ($event) => chooseType(item),
                    type: item.code == params.value.categoryCode ? "primary" : "default",
                    key: i
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick", "type"]);
                }), 128))
              ])) : createCommentVNode("", true),
              active.value == "0" ? (openBlock(), createBlock("div", {
                key: 2,
                class: "bank-btn"
              }, [
                createVNode(_component_Button, {
                  class: "bank-btn-item",
                  type: selectName.value == "" ? "primary" : "default",
                  onClick: ($event) => selectName.value = ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u5168\u90E8")
                  ]),
                  _: 1
                }, 8, ["type", "onClick"]),
                (openBlock(true), createBlock(Fragment, null, renderList(classList.value, (item, i) => {
                  return openBlock(), createBlock(_component_Button, {
                    class: "bank-btn-item",
                    type: selectName.value == item.cateName ? "primary" : "default",
                    onClick: ($event) => selectName.value = item.cateName,
                    key: i
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.cateName), 1)
                    ]),
                    _: 2
                  }, 1032, ["type", "onClick"]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "baseList" }, [
                createVNode(_component_CheckboxGroup, {
                  modelValue: checkAllGroup.value,
                  "onUpdate:modelValue": ($event) => checkAllGroup.value = $event,
                  onOnChange: ($event) => onChange($event)
                }, {
                  default: withCtx(() => [
                    active.value == "-1" ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(list.value, (item, index) => {
                      return openBlock(), createBlock(_component_Checkbox, {
                        disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                        label: item.code
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "baseList-item" }, [
                            createVNode("div", {
                              class: "baseList-item-content",
                              style: { "width": "100%", "overflow": "hidden" }
                            }, [
                              createVNode("div", { class: "img" }, [
                                item.avatar ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: item.avatar,
                                  alt: ""
                                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_1,
                                  alt: ""
                                }))
                              ]),
                              createVNode("div", {
                                class: "name",
                                style: { "width": "100%" }
                              }, [
                                createVNode("div", null, toDisplayString(item.name), 1),
                                createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["disabled", "label"]);
                    }), 256)) : createCommentVNode("", true),
                    active.value == "0" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(list.value, (item, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        selectName.value == "" || selectName.value == item.cateName ? (openBlock(), createBlock(_component_Checkbox, {
                          key: 0,
                          disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                          label: item.code
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "baseList-item" }, [
                              createVNode("div", {
                                class: "baseList-item-content",
                                style: { "width": "100%", "overflow": "hidden" }
                              }, [
                                createVNode("div", { class: "img" }, [
                                  item.avatar ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: item.avatar,
                                    alt: ""
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                    key: 1,
                                    src: _imports_1,
                                    alt: ""
                                  }))
                                ]),
                                createVNode("div", {
                                  class: "name",
                                  style: { "width": "100%" }
                                }, [
                                  createVNode("div", null, toDisplayString(item.name), 1),
                                  createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled", "label"])) : createCommentVNode("", true)
                      ], 64);
                    }), 256)) : createCommentVNode("", true),
                    active.value == "1" ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(list.value, (item, index) => {
                      return openBlock(), createBlock(_component_Checkbox, {
                        key: index,
                        disabled: forbiddenList.value.indexOf(item.code) != -1 ? true : false,
                        label: item.code
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "baseList-item" }, [
                            createVNode("div", {
                              class: "baseList-item-content",
                              style: { "width": "100%", "overflow": "hidden" }
                            }, [
                              createVNode("div", { class: "img" }, [
                                item.avatar ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: item.avatar,
                                  alt: ""
                                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_1,
                                  alt: ""
                                }))
                              ]),
                              createVNode("div", {
                                class: "name",
                                style: { "width": "100%" }
                              }, [
                                createVNode("div", null, toDisplayString(item.name), 1),
                                createVNode("div", { class: "sub" }, toDisplayString(item.permissionUser), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["disabled", "label"]);
                    }), 128)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/addBase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8c2825ee"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=addBase-d16bc2bd.mjs.map
