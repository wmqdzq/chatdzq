import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chooseImg",
  __ssrInlineRender: true,
  props: {
    limit: {
      type: Number,
      default: -1
    }
  },
  emits: "choose",
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const modalShow = ref(false);
    const groundList = ref([]);
    const imgList = ref([]);
    const leftLoading = ref(false);
    const rightLoading = ref(false);
    ref([]);
    const selectIds = ref([]);
    const paramsGroup = ref({
      total: 0,
      pageNo: 1,
      pageSize: 10,
      permissionStatus: "",
      permissionUser: "",
      type: "IMAGE"
    });
    const paramsImg = ref({
      datasetCode: "",
      fileName: "",
      pageNo: 1,
      pageSize: 9,
      total: 0,
      titleName: ""
    });
    const toSubmit = () => {
      if (selectIds.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      if (selectIds.value.length > Number(props.limit)) {
        proxy.$Message.error("\u6700\u591A\u53EA\u80FD\u9009\u62E9" + Number(props.limit) + "\u5F20");
        return;
      }
      imgList.value.forEach((item, i) => {
        if (selectIds.value[0] == item.code) {
          emits("choose", item.docUrl);
          modalShow.value = false;
        }
      });
    };
    const getImgList = () => {
      imgList.value = [];
      rightLoading.value = true;
      selectIds.value = [];
      proxy.$api.getDatasetDetailPageList(paramsImg.value).then((res) => {
        imgList.value = res.data;
        paramsImg.value.total = res.totalCount;
        rightLoading.value = false;
        imgList.vaklue.forEach((item) => {
          item._ckeck = false;
        });
      }).catch(() => {
        rightLoading.value = false;
      });
    };
    const getGroup = (type) => {
      leftLoading.value = true;
      rightLoading.value = true;
      proxy.$api.getDatasetPageList(paramsGroup.value).then((res) => {
        groundList.value = res.data;
        paramsGroup.value.total = res.totalCount;
        paramsImg.value.pageNo = 1;
        paramsImg.value.fileName = "";
        paramsImg.value.titleName = "";
        leftLoading.value = false;
        if (type == 1) {
          if (groundList.value.length > 0) {
            paramsImg.value.titleName = groundList.value[0].name;
            paramsImg.value.datasetCode = groundList.value[0].code;
            getImgList();
          }
        }
        if (groundList.value.length == 0) {
          rightLoading.value = false;
        }
      }).catch(() => {
        leftLoading.value = false;
      });
    };
    const chooseGround = (record) => {
      paramsImg.value.datasetCode = record.code;
      paramsImg.value.titleName = record.name;
      paramsImg.value.fileName = "";
      paramsImg.value.pageNo = 1;
      getImgList();
    };
    const toSearch = () => {
      paramsImg.value.pageNo = 1;
      getImgList();
    };
    const showFn = () => {
      if (!proxy.$isPerm("33154"))
        return;
      modalShow.value = true;
      getGroup(1);
    };
    const onPageChange = (e) => {
      paramsImg.value.pageNo = e;
      getImgList();
    };
    const chooseOne = (record) => {
      let index = selectIds.value.indexOf(record.code);
      if (index != -1) {
        selectIds.value.splice(index, 1);
      } else {
        selectIds.value.push(record.code);
      }
    };
    const chooseItem = (record) => {
      record._ckeck = !record._ckeck;
      let index = selectIds.value.indexOf(record.code);
      if (index != -1) {
        selectIds.value.splice(index, 1);
      } else {
        selectIds.value.push(record.code);
      }
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Spin = resolveComponent("Spin");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_Page = resolveComponent("Page");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        modalWidth: 788,
        "mask-closable": false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalTitle" data-v-b8360d74${_scopeId}>\u9009\u62E9\u56FE\u7247</div>`);
          } else {
            return [
              createVNode("div", { class: "modalTitle" }, "\u9009\u62E9\u56FE\u7247")
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
              onClick: toSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4`);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4")
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
                onClick: toSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u8BA4")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-b8360d74${_scopeId}><div class="content-left" data-v-b8360d74${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: leftLoading.value
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
            _push2(`<!--[-->`);
            ssrRenderList(groundList.value, (item) => {
              _push2(`<div class="${ssrRenderClass([paramsImg.value.datasetCode == item.code ? "active" : "", "left-item text-hide"])}" data-v-b8360d74${_scopeId}>${ssrInterpolate(item.name)}</div>`);
            });
            _push2(`<!--]--></div><div class="content-right" data-v-b8360d74${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: rightLoading.value
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
            _push2(`<div class="content-right-top" data-v-b8360d74${_scopeId}><div class="top-title" data-v-b8360d74${_scopeId}>${ssrInterpolate(paramsImg.value.titleName)}(${ssrInterpolate(paramsImg.value.total)})</div><div class="top-action" data-v-b8360d74${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              placeholder: "\u56FE\u7247\u540D\u79F0",
              modelValue: paramsImg.value.fileName,
              "onUpdate:modelValue": ($event) => paramsImg.value.fileName = $event,
              search: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              class: "btn",
              onClick: toSearch,
              loading: rightLoading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u641C\u7D22`);
                } else {
                  return [
                    createTextVNode("\u641C\u7D22")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="content-list" data-v-b8360d74${_scopeId}><!--[-->`);
            ssrRenderList(imgList.value, (item, i) => {
              _push2(`<div class="list-item" data-v-b8360d74${_scopeId}><div class="checkbox" data-v-b8360d74${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Checkbox, {
                modelValue: imgList.value[i]._ckeck,
                "onUpdate:modelValue": ($event) => imgList.value[i]._ckeck = $event,
                onOnChange: ($event) => chooseOne(item)
              }, null, _parent2, _scopeId));
              _push2(`</div><img class="img"${ssrRenderAttr("src", item.docUrl)} data-v-b8360d74${_scopeId}><div class="name text-hide"${ssrRenderAttr("title", item.docName)} data-v-b8360d74${_scopeId}>${ssrInterpolate(item.docName)}</div></div>`);
            });
            _push2(`<!--]--></div><div class="content-bottom" data-v-b8360d74${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Page, {
              total: paramsImg.value.total,
              "page-size": paramsImg.value.pageSize,
              "show-elevator": "",
              onOnChange: onPageChange
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "content-left" }, [
                  createVNode(_component_Spin, {
                    fix: "",
                    show: leftLoading.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u52A0\u8F7D\u4E2D...")
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(groundList.value, (item) => {
                    return openBlock(), createBlock("div", {
                      class: ["left-item text-hide", paramsImg.value.datasetCode == item.code ? "active" : ""],
                      onClick: ($event) => chooseGround(item)
                    }, toDisplayString(item.name), 11, ["onClick"]);
                  }), 256))
                ]),
                createVNode("div", { class: "content-right" }, [
                  createVNode(_component_Spin, {
                    fix: "",
                    show: rightLoading.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u52A0\u8F7D\u4E2D...")
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  createVNode("div", { class: "content-right-top" }, [
                    createVNode("div", { class: "top-title" }, toDisplayString(paramsImg.value.titleName) + "(" + toDisplayString(paramsImg.value.total) + ")", 1),
                    createVNode("div", { class: "top-action" }, [
                      createVNode(_component_Input, {
                        placeholder: "\u56FE\u7247\u540D\u79F0",
                        modelValue: paramsImg.value.fileName,
                        "onUpdate:modelValue": ($event) => paramsImg.value.fileName = $event,
                        search: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Button, {
                        type: "primary",
                        class: "btn",
                        onClick: toSearch,
                        loading: rightLoading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u641C\u7D22")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ]),
                  createVNode("div", { class: "content-list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(imgList.value, (item, i) => {
                      return openBlock(), createBlock("div", {
                        class: "list-item",
                        key: i
                      }, [
                        createVNode("div", { class: "checkbox" }, [
                          createVNode(_component_Checkbox, {
                            modelValue: imgList.value[i]._ckeck,
                            "onUpdate:modelValue": ($event) => imgList.value[i]._ckeck = $event,
                            onOnChange: ($event) => chooseOne(item)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                        ]),
                        createVNode("img", {
                          class: "img",
                          onClick: withModifiers(($event) => chooseItem(item), ["stop"]),
                          src: item.docUrl
                        }, null, 8, ["onClick", "src"]),
                        createVNode("div", {
                          class: "name text-hide",
                          title: item.docName
                        }, toDisplayString(item.docName), 9, ["title"])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "content-bottom" }, [
                    createVNode(_component_Page, {
                      total: paramsImg.value.total,
                      "page-size": paramsImg.value.pageSize,
                      "show-elevator": "",
                      onOnChange: onPageChange
                    }, null, 8, ["total", "page-size"])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chooseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b8360d74"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEvUlEQVRoQ+2aX07cRhjAv/GYRUJC3RYkBEJiWyTeUDFr85qUE6Q9QBPlAql6gJL0AqEnSHKBNr1ASZ6Q2LE2fQGJF6hAIJDQwgsI2PVXfcheLd6xPTO2NyuUefXMfPP7/s6Mh8EDb+yB80FpgM1ms9put5csy6oh4hJj7KteZQZB8B9jrIWI/3qe96EsRRcKSFCdTucpADwBgCUAqGos/APn/C0AfHQcZ19jXGrXQgAbjcZjxtiLECz32hhjby3LelUEaC5Astjt7e26ZVlktcJbEaDGgEIIsthLTTfUVgIi7tm2TdZ8pz0YwCzJ+L7/GhF/MRFoOoYx9rper/+qO17LgmES2QgTiK6sIvo3OeerjuOcq06mDDgEcBGTFqQyoBDir6KypKr2U/ptuK67qjKPEqDv+2uISAllaJpqTGYChjWO4m7YGiLiatYuKBPQ9/09RKwNGx2tJywhy2lJJxVwGF0zrmhEfOV5XmL4JAJubm7WKpXKxrBarwe0xTn/LsmKiYC+7z9DxDfD6Jo6VkwD1I49zjnMz89DpVKBi4sLODg4UNLP7OwsVKtVuLq6gv39feh0Okrjeq3ouu43skFSQNPMOT09DTMzM105Z2dndwtOa3NzczA5OdntcnR0BMfHx7qAiRk1CfAlY2xNVwpZYmpq6t6wNMg4HA08OTmBw8NDXdGUUaXJRgoohKC691hXCrnmwsICjI6OZkLK4K6vr2F3dxdubm50RVN/6e4mCbBlegxSgSwBjgBbsjjsA6TyMDIysmeiwmhMGiQi3os5GpPTcpFYDMvFvaDvAzRNMHGFJEHG+xUEF25s+rdupQGSxCzIAuHuADnnPzqO83evEvsAiy7wBLm4uNjn8VTrtre3TROKLIKQMfa8Xq/TzVy39QEKIejKj85+hTRZQokmVqmTGotQs2BRMUgLS4MrAVJa7EvJoklwFHPUVOqkhuW6WTQIguWVlZVPqS4a3r1QHTRuaXWOJlXdDGguAF3XteJjpIU+zyFXpYirbAY04ah703XdZSVAIcQ6ANDFrlabmJiAWu3+4T+pFCRB0gnk9PRUSy51Zoy9qdfrz5UATRNNfLOdVedkkIabbWkGvQOXqSqMQ9qu6fwdgrGxsbv4onNhFlwktxey3W7Dzs6OSW2U7kMTAemDqZvSgilLXl5eah1cx8fHtcdESkpyz1RAUzfVDp78A6Sb7C582vxCiH8A4If8ayhvhjTrpVqQPoZHp6ZuLJaH0zdzqvUyAalDo9Ewur4YBGTWnagSYJhwhtFVpYVdqQ7GO4WuSpDfDsIyWTLCK3v6T5j5WCHz30QkbGtri56EEOTXWQso+TvdZNP/iEw4ZReNQf75GS3ZCoJgNX5iSFOosgWjST6Xu+q4ZS+wNmBUPjjna+HzEaM5NN14g3P+k86/eaVCn7WI8P7mtxJdlp56/e55Hp1ujFpu7ZPL2rb9jDH2MwDQWSn3nABwjoh/2La9bmK13C4qUyWdQIIgeIKIBBpd++vC0qO895zzd3nBCnHRJJ8JE9ESIj5ijH0fWra3hp4zxshKdH9Crw4/WZb1viioUixoFCADGKTrQgNYUrEivgAWq8/Bz/bFgoPXebESH7wF/wcUomRXU+Fo0gAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAAAXNSR0IArs4c6QAAAwFJREFUWEftVtFRGzEQ3dU1AB1AB2fJBUAHUAG4gtABdgWQCjAVhFQQ/n26XAe4g7gA5M08jeSRZd35mHwwmWF/PJYl7fPbfU/L9MnBn5yfvgD8fwxMp9MLEbkRkQtmPgs91BHRmoherLXPH+mr0QyExE9EFJP25Vk75y67rgOgozEKgDHmhoiW6W0ismbmVyI6CaDqLNvtGDaOAjDGXBHRj+TyF6XUYrVagfZd1HV9VlXVnIgA1gczXzZNA5C9MQggXPor0s7Mi6ZpkKQ3ptPpXETuw4aNc+6867pN34FBAFrre2b2Ccckj0mMMY9E9A3fRWTRtm0v6EEAxpg3/HvUu23b86MdFTbUdX1SVRXOoj821trTDzNQ13VdVdXvcHBprZ2NBYB9WutHZvYshDIUVVFkAP9AKQX67wKNs7Zt91SAdUgTn6VG01rfMjNkO1iGAwDGGKBGzUBf7Oarpml+pgyk/SEi87ZtF9nvOwBhHbKd5WD3AKSXBuQbZn621nomYuT7wt49EKEPwABknMaeP+wA5HpH17+/vz/mEiolj7eXmCj4A6Q5iU6ZAvAdj8uUUrPVanVQ86HkQyBCv6T+8GqtvcS6BxB8HoaDKHZ8IflLQi/czjdkqRxx3RiDHH6fc+4U7HoAWus5M3v36rNPY8yf2JhgyDmHvbHLvUTj9zRB1jt3zPwQQHpleQCTyWSplPIebq0tShMWu91ub6qqwjuwzGTmL8MaEUG+60hxCiD1luiQBwAiNVnnHnwtATh2Ji31HoDUtca8YKFsqdEUjSoHlIJmZu8to5tw6DIRGQUgvi2hR/BKrnf11lq/JSPW0WHioyXIVLRT2g5AJkX4N5rue99bPhZA4V3ZbLfbQyMqmAWWMEjEgdOPXM65a1BXqifcVEQeoIIwpOJMPqpdW2vhIT4OJJdIqTh8pgMGpIlL4pSUyjnvGcwU8I/Bxygegn8rpTB2Y/yumflERPAwdc65Wd/EG3z/KT+Dcd0591wq59Gh9Ji2//X3LwCfzsBf+XP3MdMPL/cAAAAASUVORK5CYII=";

export { _imports_0 as _, _imports_1 as a, __nuxt_component_1 as b };
//# sourceMappingURL=upload-5a19747f.mjs.map
