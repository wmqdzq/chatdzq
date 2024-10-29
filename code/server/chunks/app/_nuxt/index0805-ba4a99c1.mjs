import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_3 } from './like-on-354a841d.mjs';
import { _ as _imports_5 } from './notData-440511db.mjs';
import { useRouter } from 'vue-router';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
import '../../paths.mjs';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoxJREFUWEfVV+1x2kAQfYucBOH8oATcgVxBoAI7FRhXgFQBuIITFQAV4FRgdRB1EDqwZoINyWA2ujskJAQIy5Izvl8a0O0+7b63H4ToiN9t0FkfYAugZvx7+Q8eCGP0zIk0Tcr+8E8fvB6U7+uIRcIAPfOOIOZdkDFSrzIPgfUYMIJqwLw0AbJBtRvtb9UhuIsHAG0AY9jmbTWOd6yKZxdEvdCvJwGwRmNcwvnsvw+Avxbo5WcYjSABABdwzNn7AFi0QPilSRhH4KMAEHMLOJ/BoeJEFadEQDxdAw0vdiS4CVqMALpWanEatkqX/B3LI3WjHmTA5gKQzqk2DZ35sOuX0BekWloAB+B1B85XTditig7RZwbbvEj9mQ8g6RDetjqSD+bvKbKKpQ1iKan9h/lHHK246p6UAvkSS6no8KoiZQ7elPtXAVD5nVug2giMCZyGW5pEc1NwyJO8CLbDqLhvqhm5ANQLNdmg7mJHKhrGVBExqYIiYckHEDeoGRgd1OgKzFEKPDBuY2DuUuioHDwFVJCSFwcpIkb63xJqAEK/fADisQn68gCQpbVPDhxzXCTimTu5KUjKpQzS7SI4GUDmohrbRuEcJacZNVIVOrkAIsZrtmvyJcc2hlRH8REuH8Civan9sgI64fM31YRURZTSPN86Hy574GMq4HvYDScVqVwAqgoudtitiCj7gJcy5i6nAGtw+09BGSoQ0ey2pwklnakKeegUacdp422g7pfShJLq+rgjWSHd7VxKk/D5UZXa/ziWbxYTdjNyKeNr99kQT+PNduQRRELzcjvi1QQ4q2g/WLVAn67i7klGVy+nGc1X9ekJu5uCpgFoEN1wW7mpdj1Xrd2HLuWqoP0DYTqu2sbtVO0AAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA9BJREFUWEfdWG1SGkEQ7VlR8QNhRVFURE2Zv0luEHOB5AY5QuIJoicI3sAreAJzA/2XKjWBiIgf4AoiKu7upN5YuzUQ3NlFUSv9S3Zmel6/7ulum1GL7OZP33Nin0jTPjLic63r3fnNthnx7R5NW51P6jn5Dub8yGaNmNlP34jbX7sDwqdWRpnajbb6bl4/xwkBUIDrszeJ6K1PNV3exrZrDbYEkALg7qHx/dmZazWZUWZxKr7MskVjzrTtbJcp6Uy9bS+xnYPSOmPsc2caunuK23yN7RbKWy8n9poNZkQ5AOTd5eFh2v8/gPWrK7q+aZBt24KacH8fDQ4MkKZpTVRh/eLykm5vTfEd64MDYQr39wei1DeDAFY2zql+dd32grHRGOnRqFgzKhU6O6+6RsgHekMhmpqcEIb5EV8Ay4ZBpTOR2F0JhUICgMMkFnA5Ur/DmsMc2DPNOyYdgUFxXVdiVAKsXNTo6OTUdVNcj1FsJOK6FO4GY9WLWtNlw0ODglG4FXLn8jrBWMeA6ckJwj4v8QR4a5qUPywKhWAnNZWk3t5QW31gGJdDwAwYaieyTjD7Kp36J37lc54AZfYWZlP3gnMUYr9t2aTHRjxZQRzDcEgiPkp67C5224knQCiBsoFwmGank8p4CbLB0Q0Xw9UdAczlC3TTaJAeHaHEWDzI/cq9J6UyGZWqCJ2FdKozgL/282Teml0BWDozRNp6EECHwWhkmCYT40pWgmwoFI+pVq8rw8czBh034LUtzqeD3K/c+3s/L7KDKnw8AcqvDSnGyWnK2xUb5Oyg0qtM1I6lAAdljyGOTlX84S4lQNnaxNioW287BSqXzcnEGEUjEU9VSoA47eQs/J2emfZd6FtvRln8c1AQn/3mVl8AUZ7wolFPVSXvPjqClE1Zhy+AOCA/mKAgZXDQpXoYHQHEodbOJpkYV3Yj6CMLRyduW4Z8irzqV3wz6CiUQeKbV193Ui6TcV4VR5FLUS6DgPP1ittZimA/PD52+zq4PD4ac18kWDs6LTWtB+miO3axfBBxhXoqN6po48GU/G8BXutMcsKz5/Nyd2AXtyqDy+Uu2VkHq3CpqmNWxeKDAcqxWaleiJ/RkWGKDA11zNqjuFhl+WOts73CWZY/2aAyGGxOtM128qUM09iXYEefZjcjWmcY+ZKmYXj54sTUtHkxwNzLlzL8hbHILTvzenZ8WRoB800i/kJGwHyr1uj54I6AwSLm1FbIWnlmJjm37LVLK9Q8RJeD72fRmOuxrBXG2JsHDDYDzRw5UY4se4Mx2lhMjf+Q8fwFwZUsA2huOoIAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index0805",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const selectId = ref("");
    const routing = getRouting();
    const { proxy } = getCurrentInstance();
    const robotName = ref("");
    const listData = ref([]);
    const isInitial = ref(true);
    const loading = ref(false);
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
        listData.value.forEach((item) => {
          item.robotList.forEach((iten) => {
          });
        });
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
          proxy.$Message.success("\u6210\u529F\u6536\u85CF");
        } else {
          proxy.$Message.success("\u53D6\u6D88\u6536\u85CF");
        }
      });
    };
    const toSearch = () => {
      selectId.value = "";
      onRobotList();
    };
    const onRobot = (id, code) => {
      routing.setSelectId(id);
      routing.setRobotCode(code);
      router.push("/robot/creative/info?code=" + code);
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      const _component_Spin = resolveComponent("Spin");
      const _component_Poptip = resolveComponent("Poptip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "create" }, _attrs))} data-v-15648ae8><div class="create-content" data-v-15648ae8><div class="chatTitleCom clearfix" data-v-15648ae8><h1 class="fl" data-v-15648ae8>\u521B\u4F5C\u5DE5\u4F5C\u53F0</h1>`);
      _push(ssrRenderComponent(_component_Input, {
        class: "fr i-230",
        prefix: "ios-search",
        placeholder: "\u641C\u7D22\u680F\u76EE\u540D\u79F0...",
        modelValue: robotName.value,
        "onUpdate:modelValue": ($event) => robotName.value = $event,
        onOnKeypress: toSearch
      }, null, _parent));
      _push(`</div><div class="content-tabs" data-v-15648ae8><div class="navList-tabs" data-v-15648ae8><!--[-->`);
      ssrRenderList(listData.value, (item, i) => {
        _push(`<div class="${ssrRenderClass([item.id == selectId.value ? "active" : "", "tabs-item"])}" data-v-15648ae8>${ssrInterpolate(item.cateName)}</div>`);
      });
      _push(`<!--]--><div class="${ssrRenderClass([selectId.value == "collect" ? "active" : "", "tabs-item"])}" data-v-15648ae8> \u6211\u7684\u6536\u85CF </div></div><div class="record" data-v-15648ae8><img${ssrRenderAttr("src", _imports_0)} data-v-15648ae8><div data-v-15648ae8>\u521B\u4F5C\u8BB0\u5F55</div></div></div><div class="content-list" data-v-15648ae8>`);
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
              _push(ssrRenderComponent(_component_Poptip, {
                placement: "right-start",
                trigger: "hover",
                "popper-class": "popperClass"
              }, {
                content: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="popContent" data-v-15648ae8${_scopeId}>`);
                    if (iten.questionBank && JSON.parse(iten.questionBank)) {
                      _push2(`<!--[-->`);
                      if (JSON.parse(iten.questionBank).columnPageItemList) {
                        _push2(`<!--[--><!--[-->`);
                        ssrRenderList(JSON.parse(iten.questionBank).columnPageItemList, (it) => {
                          _push2(`<!--[--><div class="pop-title" data-v-15648ae8${_scopeId}>${ssrInterpolate(it.itemName)}</div><div class="pop-content" data-v-15648ae8${_scopeId}>${ssrInterpolate(it.example ? it.example : "--")}</div><!--]-->`);
                        });
                        _push2(`<!--]--><div class="pop-title" data-v-15648ae8${_scopeId}>\u521B\u4F5C\u7ED3\u679C</div><div class="pop-content" data-v-15648ae8${_scopeId}>${ssrInterpolate(iten.outputItemExample ? iten.outputItemExample : "--")}</div><!--]-->`);
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
                            createVNode("div", { class: "pop-title" }, "\u521B\u4F5C\u7ED3\u679C"),
                            createVNode("div", { class: "pop-content" }, toDisplayString(iten.outputItemExample ? iten.outputItemExample : "--"), 1)
                          ], 64)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="content-list-item" data-v-15648ae8${_scopeId}>`);
                    if (iten.favoriteFlag) {
                      _push2(`<div class="like" data-v-15648ae8${_scopeId}><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "20px", "height": "20px" })}" data-v-15648ae8${_scopeId}></div>`);
                    } else {
                      _push2(`<div class="like likeOn" data-v-15648ae8${_scopeId}><img${ssrRenderAttr("src", _imports_2)} data-v-15648ae8${_scopeId}></div>`);
                    }
                    _push2(`<div class="item-top" data-v-15648ae8${_scopeId}><div class="item-top-logo" data-v-15648ae8${_scopeId}><img${ssrRenderAttr("src", iten.robotLogo)} data-v-15648ae8${_scopeId}></div><div class="item-top-name" data-v-15648ae8${_scopeId}>${ssrInterpolate(iten.name)}</div></div><div class="item-content text-hide" data-v-15648ae8${_scopeId}>${ssrInterpolate(iten.robotRemark)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "content-list-item",
                        onClick: ($event) => onRobot(item.id, iten.code)
                      }, [
                        iten.favoriteFlag ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "like",
                          onClick: withModifiers(($event) => toLike(iten), ["stop"])
                        }, [
                          createVNode("img", {
                            src: _imports_3,
                            style: { "width": "20px", "height": "20px" }
                          })
                        ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "like likeOn",
                          onClick: withModifiers(($event) => toLike(iten), ["stop"])
                        }, [
                          createVNode("img", { src: _imports_2 })
                        ], 8, ["onClick"])),
                        createVNode("div", { class: "item-top" }, [
                          createVNode("div", { class: "item-top-logo" }, [
                            createVNode("img", {
                              src: iten.robotLogo
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "item-top-name" }, toDisplayString(iten.name), 1)
                        ]),
                        createVNode("div", { class: "item-content text-hide" }, toDisplayString(iten.robotRemark), 1)
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
                    _push2(`<div class="popContent" data-v-15648ae8${_scopeId}>`);
                    if (iten.questionBank && JSON.parse(iten.questionBank)) {
                      _push2(`<!--[-->`);
                      if (JSON.parse(iten.questionBank).columnPageItemList) {
                        _push2(`<!--[--><!--[-->`);
                        ssrRenderList(JSON.parse(iten.questionBank).columnPageItemList, (it) => {
                          _push2(`<!--[--><div class="pop-title" data-v-15648ae8${_scopeId}>${ssrInterpolate(it.itemName)}</div><div class="pop-content" data-v-15648ae8${_scopeId}>${ssrInterpolate(it.example ? it.example : "--")}</div><!--]-->`);
                        });
                        _push2(`<!--]--><div class="pop-title" data-v-15648ae8${_scopeId}>\u521B\u4F5C\u7ED3\u679C</div><div class="pop-content" data-v-15648ae8${_scopeId}>${ssrInterpolate(iten.outputItemExample ? iten.outputItemExample : "--")}</div><!--]-->`);
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
                            createVNode("div", { class: "pop-title" }, "\u521B\u4F5C\u7ED3\u679C"),
                            createVNode("div", { class: "pop-content" }, toDisplayString(iten.outputItemExample ? iten.outputItemExample : "--"), 1)
                          ], 64)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="content-list-item" data-v-15648ae8${_scopeId}>`);
                    if (iten.favoriteFlag) {
                      _push2(`<div class="like" data-v-15648ae8${_scopeId}><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "20px", "height": "20px" })}" data-v-15648ae8${_scopeId}></div>`);
                    } else {
                      _push2(`<div class="like likeOn" data-v-15648ae8${_scopeId}><img${ssrRenderAttr("src", _imports_2)} data-v-15648ae8${_scopeId}></div>`);
                    }
                    _push2(`<div class="item-top" data-v-15648ae8${_scopeId}><div class="item-top-logo" data-v-15648ae8${_scopeId}><img${ssrRenderAttr("src", iten.robotLogo)} data-v-15648ae8${_scopeId}></div><div class="item-top-name" data-v-15648ae8${_scopeId}>${ssrInterpolate(iten.name)}</div></div><div class="item-content text-hide" data-v-15648ae8${_scopeId}>${ssrInterpolate(iten.robotRemark)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "content-list-item",
                        onClick: ($event) => onRobot(item.id, iten.code)
                      }, [
                        iten.favoriteFlag ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "like",
                          onClick: withModifiers(($event) => toLike(iten), ["stop"])
                        }, [
                          createVNode("img", {
                            src: _imports_3,
                            style: { "width": "20px", "height": "20px" }
                          })
                        ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "like likeOn",
                          onClick: withModifiers(($event) => toLike(iten), ["stop"])
                        }, [
                          createVNode("img", { src: _imports_2 })
                        ], 8, ["onClick"])),
                        createVNode("div", { class: "item-top" }, [
                          createVNode("div", { class: "item-top-logo" }, [
                            createVNode("img", {
                              src: iten.robotLogo
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "item-top-name" }, toDisplayString(iten.name), 1)
                        ]),
                        createVNode("div", { class: "item-content text-hide" }, toDisplayString(iten.robotRemark), 1)
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
        _push(`<div class="noData-content" data-v-15648ae8><div class="noData" data-v-15648ae8><img${ssrRenderAttr("src", _imports_5)} data-v-15648ae8></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(4, (item) => {
        _push(`<div class="content-list-item" style="${ssrRenderStyle({ "visibility": "hidden" })}" data-v-15648ae8></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/creative/index0805.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index0805 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15648ae8"]]);

export { index0805 as default };
//# sourceMappingURL=index0805-ba4a99c1.mjs.map
