import { b as buildAssetsURL } from '../../paths.mjs';
import { _ as __nuxt_component_2 } from './cCreate-9b81dba0.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './search-62fd20c9.mjs';
import { _ as _imports_1$1 } from './hot-bc2e3ef0.mjs';
import { _ as _imports_5$1 } from './notData-440511db.mjs';
import { useRouter } from 'vue-router';
import { a as _export_sfc, f as useI18n, g as getRouting } from '../server.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import 'vant';
import './loding-9ec1fb58.mjs';
import '@aws-sdk/client-s3';
import './addBase-d16bc2bd.mjs';
import './robot-20021510.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
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

const _imports_0 = "" + buildAssetsURL("banner3.2db181dc.png");
const _imports_1 = "" + buildAssetsURL("banner5.35edeef7.png");
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "data:image/png;base64,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";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAU9JREFUWEft1rFug0AMBmB7K5R7g46dWGHsgNQueZaoUzNkzNih3fIuXRkywsqLEAk2V0hJBRdUxWd8yXDMd+bTf4cNwp0/eOc+CEDpCYUEQ4LSBKT7Ve9gmqZJHMefRNQbY3ZlWR65YFVglmVfAPBxQh2MMSsuUhWY5/meiNaj1NhIVWBRFEnbtj8A8OKKVAUOKClSHShFegFKkN6ArkivQBekdyAXOQGOOv8Tt+Nz1xPRIyK+Wfsu+uQEaHV+7jsXWY+I+6qq3s/FJsCZzr/IS5lFvuu63swCT011BwDPzKLs5USUIOKrfcRd162apvn7qbjJRzLc9SiKLkagjRvw3oEcnHcgF+cV6ILzBnTFeQFKcOpAKU4dODOZDnOt5L8mqtpmrMnExqkneJ5MRPTQ9/12PCGuHT2qCV6LuNkRB+ASCUhrhDsYEpQmIN3/C+1e4Sn89hRaAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const cCreateRef = ref();
    const router = useRouter();
    const selectId = ref("");
    getRouting();
    const { proxy } = getCurrentInstance();
    const robotName = ref("");
    const listData = ref([]);
    const isInitial = ref(true);
    const loading = ref(false);
    const sum = ref(0);
    const init = () => {
      onRobotList();
    };
    const onRobotList = () => {
      let data = {
        keyword: robotName.value,
        type: "QUESTION_BANK_ROBOT_CATEGORY"
      };
      loading.value = true;
      proxy.$api.queryCategoryRobotList(data).then((res) => {
        listData.value = res.data;
        if (isInitial.value && res.data && res.data.length > 0) {
          selectId.value = res.data[0].id;
        }
        if (!proxy.$isEmpty(router.currentRoute.value.query.type)) {
          selectId.value = router.currentRoute.value.query.type;
        }
        loading.value = false;
        isInitial.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const toLike = (record) => {
      let data = {
        relationCode: "",
        robotCode: record.code,
        categoryType: "QUESTION_BANK_ROBOT_CATEGORY"
      };
      let apiName = "collectRobot";
      if (record.favoriteFlag) {
        delete data.robotCode;
        data.relationCode = record.collectRelationCode;
        apiName = "deleteCategoryRobot";
      }
      proxy.$api[apiName](data).then((res) => {
        record.favoriteFlag = !record.favoriteFlag;
        if (record.favoriteFlag) {
          record.collectRelationCode = res.data;
          proxy.$Message.success(t("aiCreative.\u6210\u529F\u6536\u85CF"));
        } else {
          proxy.$Message.success(t("aiCreative.\u53D6\u6D88\u6536\u85CF"));
        }
      });
    };
    const toSearch = () => {
      selectId.value = "";
      onRobotList();
    };
    const onRobot = (id, code) => {
      cCreateRef.value.showFn(code);
    };
    init();
    watch(() => listData.value, () => {
      sum.value = 0;
      listData.value.forEach((item) => {
        item.robotList.forEach((iten) => {
          if (iten.favoriteFlag) {
            sum.value = sum.value + 1;
          }
        });
      });
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      const _component_Spin = resolveComponent("Spin");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_cCreate = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "create" }, _attrs))} data-v-de80cd8e><div class="create-content" data-v-de80cd8e><div class="chatTitleCom clearfix" data-v-de80cd8e><h1 class="fl" data-v-de80cd8e>${ssrInterpolate(_ctx.$t("aiCreative.\u63A8\u8350\u5C1D\u8BD5"))}</h1></div><div class="list-recommend" data-v-de80cd8e><div class="recommend-item item1" data-v-de80cd8e><div class="item-name" data-v-de80cd8e>${ssrInterpolate(_ctx.$t("aiCreative.AI\u5199\u4F5C"))}</div><div class="item-sub" data-v-de80cd8e>${ssrInterpolate(_ctx.$t("aiCreative.\u5199\u4F5C\u4ECE\u672A\u5982\u6B64\u9AD8\u6548"))}</div><div class="item-img" data-v-de80cd8e><img${ssrRenderAttr("src", _imports_0)} data-v-de80cd8e></div></div><div class="recommend-item item2" data-v-de80cd8e><div class="item-name" data-v-de80cd8e>${ssrInterpolate(_ctx.$t("aiCreative.\u627E\u7075\u611F"))}</div><div class="item-sub" data-v-de80cd8e>${ssrInterpolate(_ctx.$t("aiCreative.\u5FEB\u901F\u83B7\u53D6\u5199\u4F5C\u7075\u611F"))}</div><div class="item-img" data-v-de80cd8e><img${ssrRenderAttr("src", _imports_1)} data-v-de80cd8e></div></div></div><div class="chatTitleCom clearfix" data-v-de80cd8e><h1 class="fl" data-v-de80cd8e>${ssrInterpolate(_ctx.$t("aiCreative.\u5199\u4F5C\u7075\u611F"))}</h1></div><div class="content-tabs" data-v-de80cd8e><div class="navList-tabs" data-v-de80cd8e><!--[-->`);
      ssrRenderList(listData.value, (item, i) => {
        _push(`<div class="${ssrRenderClass([item.id == selectId.value ? "active" : "", "tabs-item"])}" data-v-de80cd8e>${ssrInterpolate(item.cateName)}(${ssrInterpolate(item.robotList.length)}) </div>`);
      });
      _push(`<!--]--><div class="${ssrRenderClass([selectId.value == "collect" ? "active" : "", "tabs-item"])}" data-v-de80cd8e>${ssrInterpolate(_ctx.$t("aiCreative.\u6211\u7684\u6536\u85CF"))}(${ssrInterpolate(sum.value)}) </div></div>`);
      _push(ssrRenderComponent(_component_Input, {
        class: "fr i-230 tabs-item-input",
        placeholder: _ctx.$t("aiCreative.\u641C\u7D22\u680F\u76EE\u540D\u79F0") + "...",
        modelValue: robotName.value,
        "onUpdate:modelValue": ($event) => robotName.value = $event,
        onOnKeypress: toSearch
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="searchIco"${ssrRenderAttr("src", _imports_0$1)} data-v-de80cd8e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                onClick: toSearch,
                class: "searchIco",
                src: _imports_0$1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="content-list" data-v-de80cd8e>`);
      _push(ssrRenderComponent(_component_Spin, {
        fix: "",
        show: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("i.select.loading"))}...`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("i.select.loading")) + "...", 1)
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
              _push(ssrRenderComponent(_component_Poptip, {
                placement: "right-start",
                trigger: "hover",
                "popper-class": "popperClass"
              }, {
                content: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="popContent" data-v-de80cd8e${_scopeId}>`);
                    if (iten.questionBank && JSON.parse(iten.questionBank)) {
                      _push2(`<!--[-->`);
                      if (JSON.parse(iten.questionBank).columnPageItemList) {
                        _push2(`<!--[--><!--[-->`);
                        ssrRenderList(JSON.parse(iten.questionBank).columnPageItemList, (it) => {
                          _push2(`<!--[--><div class="pop-title" data-v-de80cd8e${_scopeId}>${ssrInterpolate(it.itemName)}</div><div class="pop-content" data-v-de80cd8e${_scopeId}>${ssrInterpolate(it.example ? it.example : "--")}</div><!--]-->`);
                        });
                        _push2(`<!--]--><div class="pop-title" data-v-de80cd8e${_scopeId}>${ssrInterpolate(_ctx.$t("aiCreative.\u521B\u4F5C\u7ED3\u679C"))}</div><div class="pop-content" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.outputItemExample ? iten.outputItemExample : "--")}</div><!--]-->`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`<!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "popContent" }, [
                        iten.questionBank && JSON.parse(iten.questionBank) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          JSON.parse(iten.questionBank).columnPageItemList ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(JSON.parse(iten.questionBank).columnPageItemList, (it) => {
                              return openBlock(), createBlock(Fragment, null, [
                                createVNode("div", { class: "pop-title" }, toDisplayString(it.itemName), 1),
                                createVNode("div", { class: "pop-content" }, toDisplayString(it.example ? it.example : "--"), 1)
                              ], 64);
                            }), 256)),
                            createVNode("div", { class: "pop-title" }, toDisplayString(_ctx.$t("aiCreative.\u521B\u4F5C\u7ED3\u679C")), 1),
                            createVNode("div", { class: "pop-content" }, toDisplayString(iten.outputItemExample ? iten.outputItemExample : "--"), 1)
                          ], 64)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="content-list-item" data-v-de80cd8e${_scopeId}><div class="like" data-v-de80cd8e${_scopeId}><img${ssrRenderAttr("src", iten.robotLogo)} data-v-de80cd8e${_scopeId}></div><div class="item-top" data-v-de80cd8e${_scopeId}><div class="item-top-name" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.name)}</div></div><div class="item-content text-hide-2" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.robotRemark)}</div><div class="item-bottom" data-v-de80cd8e${_scopeId}><div class="item-bottom-left" data-v-de80cd8e${_scopeId}><div class="left-item" data-v-de80cd8e${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} data-v-de80cd8e${_scopeId}><div class="num" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.usePeopleNum)}</div></div><div class="left-item" data-v-de80cd8e${_scopeId}>`);
                    if (!iten.favoriteFlag) {
                      _push2(`<img class="cursor" style="${ssrRenderStyle({ "margin-top": "3px" })}"${ssrRenderAttr("src", _imports_4)} data-v-de80cd8e${_scopeId}>`);
                    } else {
                      _push2(`<img class="cursor" style="${ssrRenderStyle({ "margin-top": "3px" })}"${ssrRenderAttr("src", _imports_5)} data-v-de80cd8e${_scopeId}>`);
                    }
                    _push2(`<div class="num" data-v-de80cd8e${_scopeId}></div></div></div><div class="item-bottom-arrow" data-v-de80cd8e${_scopeId}><img${ssrRenderAttr("src", _imports_6)} data-v-de80cd8e${_scopeId}></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "content-list-item",
                        onClick: ($event) => onRobot(item.id, iten.code)
                      }, [
                        createVNode("div", { class: "like" }, [
                          createVNode("img", {
                            src: iten.robotLogo
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "item-top" }, [
                          createVNode("div", { class: "item-top-name" }, toDisplayString(iten.name), 1)
                        ]),
                        createVNode("div", { class: "item-content text-hide-2" }, toDisplayString(iten.robotRemark), 1),
                        createVNode("div", { class: "item-bottom" }, [
                          createVNode("div", { class: "item-bottom-left" }, [
                            createVNode("div", { class: "left-item" }, [
                              createVNode("img", { src: _imports_1$1 }),
                              createVNode("div", { class: "num" }, toDisplayString(iten.usePeopleNum), 1)
                            ]),
                            createVNode("div", { class: "left-item" }, [
                              !iten.favoriteFlag ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "cursor",
                                onClick: withModifiers(($event) => toLike(iten), ["stop"]),
                                style: { "margin-top": "3px" },
                                src: _imports_4
                              }, null, 8, ["onClick"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                class: "cursor",
                                onClick: withModifiers(($event) => toLike(iten), ["stop"]),
                                style: { "margin-top": "3px" },
                                src: _imports_5
                              }, null, 8, ["onClick"])),
                              createVNode("div", { class: "num" })
                            ])
                          ]),
                          createVNode("div", { class: "item-bottom-arrow" }, [
                            createVNode("img", { src: _imports_6 })
                          ])
                        ])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectId.value != "collect") {
            _push(`<!--[-->`);
            if (_ctx.$isEmpty(selectId.value) || item.id == selectId.value) {
              _push(ssrRenderComponent(_component_Poptip, {
                placement: "right-start",
                trigger: "hover",
                "popper-class": "popperClass"
              }, {
                content: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="popContent" data-v-de80cd8e${_scopeId}>`);
                    if (iten.questionBank && JSON.parse(iten.questionBank)) {
                      _push2(`<!--[-->`);
                      if (JSON.parse(iten.questionBank).columnPageItemList) {
                        _push2(`<!--[--><!--[-->`);
                        ssrRenderList(JSON.parse(iten.questionBank).columnPageItemList, (it) => {
                          _push2(`<!--[--><div class="pop-title" data-v-de80cd8e${_scopeId}>${ssrInterpolate(it.itemName)}</div><div class="pop-content" data-v-de80cd8e${_scopeId}>${ssrInterpolate(it.example ? it.example : "--")}</div><!--]-->`);
                        });
                        _push2(`<!--]--><div class="pop-title" data-v-de80cd8e${_scopeId}>${ssrInterpolate(_ctx.$t("aiCreative.\u521B\u4F5C\u7ED3\u679C"))}</div><div class="pop-content" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.outputItemExample ? iten.outputItemExample : "--")}</div><!--]-->`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`<!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "popContent" }, [
                        iten.questionBank && JSON.parse(iten.questionBank) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          JSON.parse(iten.questionBank).columnPageItemList ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(JSON.parse(iten.questionBank).columnPageItemList, (it) => {
                              return openBlock(), createBlock(Fragment, null, [
                                createVNode("div", { class: "pop-title" }, toDisplayString(it.itemName), 1),
                                createVNode("div", { class: "pop-content" }, toDisplayString(it.example ? it.example : "--"), 1)
                              ], 64);
                            }), 256)),
                            createVNode("div", { class: "pop-title" }, toDisplayString(_ctx.$t("aiCreative.\u521B\u4F5C\u7ED3\u679C")), 1),
                            createVNode("div", { class: "pop-content" }, toDisplayString(iten.outputItemExample ? iten.outputItemExample : "--"), 1)
                          ], 64)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="content-list-item" data-v-de80cd8e${_scopeId}><div class="like" data-v-de80cd8e${_scopeId}><img${ssrRenderAttr("src", iten.robotLogo)} data-v-de80cd8e${_scopeId}></div><div class="item-top" data-v-de80cd8e${_scopeId}><div class="item-top-name" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.name)}</div></div><div class="item-content text-hide-2" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.robotRemark)}</div><div class="item-bottom" data-v-de80cd8e${_scopeId}><div class="item-bottom-left" data-v-de80cd8e${_scopeId}><div class="left-item" data-v-de80cd8e${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} data-v-de80cd8e${_scopeId}><div class="num" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.usePeopleNum)}</div></div><div class="left-item" data-v-de80cd8e${_scopeId}>`);
                    if (!iten.favoriteFlag) {
                      _push2(`<img class="cursor" style="${ssrRenderStyle({ "margin-top": "3px" })}"${ssrRenderAttr("src", _imports_4)} data-v-de80cd8e${_scopeId}>`);
                    } else {
                      _push2(`<img class="cursor" style="${ssrRenderStyle({ "margin-top": "3px" })}"${ssrRenderAttr("src", _imports_5)} data-v-de80cd8e${_scopeId}>`);
                    }
                    _push2(`<div class="num" data-v-de80cd8e${_scopeId}>${ssrInterpolate(iten.collectNum)}</div></div></div><div class="item-bottom-arrow" data-v-de80cd8e${_scopeId}><img${ssrRenderAttr("src", _imports_6)} data-v-de80cd8e${_scopeId}></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "content-list-item",
                        onClick: ($event) => onRobot(item.id, iten.code)
                      }, [
                        createVNode("div", { class: "like" }, [
                          createVNode("img", {
                            src: iten.robotLogo
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "item-top" }, [
                          createVNode("div", { class: "item-top-name" }, toDisplayString(iten.name), 1)
                        ]),
                        createVNode("div", { class: "item-content text-hide-2" }, toDisplayString(iten.robotRemark), 1),
                        createVNode("div", { class: "item-bottom" }, [
                          createVNode("div", { class: "item-bottom-left" }, [
                            createVNode("div", { class: "left-item" }, [
                              createVNode("img", { src: _imports_1$1 }),
                              createVNode("div", { class: "num" }, toDisplayString(iten.usePeopleNum), 1)
                            ]),
                            createVNode("div", { class: "left-item" }, [
                              !iten.favoriteFlag ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "cursor",
                                onClick: withModifiers(($event) => toLike(iten), ["stop"]),
                                style: { "margin-top": "3px" },
                                src: _imports_4
                              }, null, 8, ["onClick"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                class: "cursor",
                                onClick: withModifiers(($event) => toLike(iten), ["stop"]),
                                style: { "margin-top": "3px" },
                                src: _imports_5
                              }, null, 8, ["onClick"])),
                              createVNode("div", { class: "num" }, toDisplayString(iten.collectNum), 1)
                            ])
                          ]),
                          createVNode("div", { class: "item-bottom-arrow" }, [
                            createVNode("img", { src: _imports_6 })
                          ])
                        ])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]-->`);
      if (listData.value.length == 0) {
        _push(`<div class="noData-content" data-v-de80cd8e><div class="noData" data-v-de80cd8e><img${ssrRenderAttr("src", _imports_5$1)} data-v-de80cd8e></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_cCreate, {
        ref_key: "cCreateRef",
        ref: cCreateRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/creative/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de80cd8e"]]);

export { index as default };
//# sourceMappingURL=index-9c81f320.mjs.map
