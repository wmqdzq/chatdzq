import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1, d as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './exclusiveRobot-9d1c2819.mjs';
import { _ as __nuxt_component_2$1 } from './cCreate-9b81dba0.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './robot-20021510.mjs';
import { _ as _imports_5 } from './notData-440511db.mjs';
import editType from './editType-20485b1e.mjs';
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
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './addBase-d16bc2bd.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAAAXNSR0IArs4c6QAABLpJREFUWEflWF1OI0cQ/moM2ONlJcgJYHMBdnOA2M4BgD1AgnlLlB881ibKS/bnLcriySrR5i149wD85ADEucDaJ4A5QYy0YJuAXaG6Z+yxPbansZNolZaQQHRXf/NV1VfVRXgHFr0DGPE/AOk2V8C8Dk6sgToZgJcAWtLe4TPA8sDwbv5XAdERCrZ3G8/djsnd8y1Q4hMAGbNLqQrwCzj2K5NzZiDdtxnw3B6AlYhLhCUPbHmKURJWFbNrEXtPATyNCzYeSFcuu3wM5p2BCyvg9itYdw5RoLNIduRsu5FRzBNv9O9hF2Q/G3nW3zwZpIo7OgC4xwihrJgwjTFlq/MEsCRUgnUKQm6crfEglVH8HnKvhzbyeGRXTGJqaO/3zSzm8WvI7ligo0GKm7hV7RmiGog3jdkb9TU/NVdxxfu9mKUqKJmLcv0YkC23F4MCMJmdFDvG7L48W0Zr4bgHlF04aWfQTjRILTGSxbI8ELIzY3AQgWIUx77HGO3rHB7d7QunaJClpkiElhlq30dhsWbMkskBHaMCVNYpHPte+PgwyDCLksUFOx/7vl6iMSj1IHZ4MBPcxp6f9QwgH9bQYZClRrUbI4RVIzc/v9iAZR1ITQS3t1FcFKmKt7TbT9RmUZSinQsO9oPUTIirAVMW5UzPC+YgFZstcbmUWgbhXkBQP8jdxg6IXP0F1gac5FE8Gvxd04AUE6XzPJAQ/WQwOyimf9R8hddu66Bbuii1HDumAhvTglSSlPxTc4Q97NjbwyC78cg1OOn7RixO624Vi8rlEpeiLN0s72ey1Kj7/WAFjp0dCVI1HBcDzQKANmVg+XWZUYbV/qPfhjQhVm1kMobjkqiOQuq9CCabkv7ySUdw0sMgghvDOmpM97AOdk0MSpFjW6NBTsrs+CDlowNvBb+fwLHfj/w2AVm63PfzghENMq67mytod9Z0YxtaRJluGyYf2hlwN4m03DkamZAx3R2UQ+9G8VeNPTltdiuQzTe6mHAVTvpBhLsvyj0m/mMJYj5EMb0ZoZMhMed23qiszUKC+sQ8sYXiwuthkOGyCIyXoahYmMbdOmmkmKyPL4uqNDXluaCfqqYNRhgkrE2jshq7wVAua26BoBteEeSiSatWXwKn3vhMfBS7gxIWnzfKSFgf67rdc/Wwu3tiLaVJZ/fVdQ7f3BV2/7m1+zYLmjNoegXKD80MEuqVKMvDPHL4wtYt3KzX4PNhgMXRTMp/3IYLJn8YQDWkkjl8RvWZYnzJy2hdHvtvegbxCxTShcE7xrwWJb6S8pLzuyGqYZ4fzoxRxSDth4YOJ6DUB2ZPWsWm6tQlVoLq4+HqehtfL8qUzG9GDLlVUnOeAc3NYDgQ3D0MVGf9Ap7h85QXG6yA+7m1glbniZ/FWj+ghg4Pbz9m6QKtLwHJx2D6qq+bZzoEdV4jZVfwKaIHVr9gCS3pPRMiL+FRoY5B2E8nvQAmD6zC3tQa+p3fOQ+cpZoanLI0tnQG6kh3HfyErUiYyExpO+5MyQxkcJUCy1+GZo+T7Oj4ZVSARDmoyXGjeZLx8Xb0WHD95p38oWKOIH/rHpN8VjtW5aaJreEv/g3f/pvj6LgUzGjfdEzOCMQkM38DLKo0SKqoFbwAAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAL5JREFUWEftltENAyEIhsUJ2lVgoK7QTnDXCdrb4AYCV2k3oNHUF5/OaBNj4ckHEz7g5w/gBggYgMEZRJ7CHJ1AxAUArrEqANiZ+Vars6ZOIOIjA+TEqnoPIaw1IE0QRPRyzp2KhG8ROf8XBCKuALAUVW8ikjRyNJrGEZMQ0VNVL/Htvd+YuUoPSdBHaX/5zyDMMUt9NWnCHDO3cwjbNsfs7Z5N29ELZg4IO+++t4Sdd2kxzKx6+cNcR02PrnwANDJsImnKvjsAAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "robot",
  __ssrInlineRender: true,
  setup(__props) {
    const cCreateRef = ref();
    const routing = getRouting();
    useRouter();
    const { proxy } = getCurrentInstance();
    const classList = ref([]);
    const editTypeRef = ref();
    const systemTypeList = ref([]);
    const selectParams = ref({});
    const modalShow = ref(false);
    const btnLoading = ref(false);
    const loading = ref(false);
    const loading2 = ref(false);
    const tagCode = ref("");
    const exclusiveRobotRef = ref();
    const forbiddenList = ref([]);
    const robotList = ref([]);
    const isManage = ref(false);
    const sum = ref(0);
    const init = () => {
      loading.value = true;
      proxy.$api.getCategoryList().then((res) => {
        classList.value = res.data;
        if (classList.value.length > 0) {
          selectParams.value = classList.value[0];
          if (selectParams.value.description == "system") {
            chooseType2("");
          } else {
            getRobotList(selectParams.value.categoryCode);
          }
        }
        sum.value = 0;
        classList.value.forEach((item, i) => {
          if (item.description != "system") {
            sum.value = sum.value + item.robotNum;
          }
          if (i == Number(classList.value.length - 1)) {
            if (sum.value == 0) {
              exclusiveRobotRef.value.showFn();
            }
          }
        });
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
      proxy.$api.queryExclusiveCategoryList({
        type: "ASSET_ROBOT_CATEGORY"
      }).then((res) => {
        systemTypeList.value = res.data;
      });
    };
    const chooseType = (record) => {
      selectParams.value = record;
      isManage.value = false;
      loading.value = false;
      if (record.description == "system") {
        chooseType2("");
      } else {
        getRobotList(selectParams.value.categoryCode);
      }
    };
    const chooseType2 = (record) => {
      tagCode.value = record;
      robotList.value = [];
      loading2.value = true;
      proxy.$api.queryExclusiveRobotList({
        tagCode: tagCode.value
      }).then((res) => {
        loading2.value = false;
        robotList.value = res.data;
      }).catch(() => {
        loading2.value = false;
      });
    };
    const getRobotList = (tagCode2) => {
      let data = {
        categoryCode: tagCode2
      };
      loading2.value = true;
      proxy.$api.queryExclusiveCategoryRobotList(data).then((res) => {
        robotList.value = res.data;
        loading2.value = false;
      }).catch(() => {
        loading2.value = false;
      });
    };
    const addType = (record) => {
      editTypeRef.value.showFn(record);
    };
    const deleteClass = (record) => {
      if (record) {
        selectParams.value = record;
        modalShow.value = true;
      } else {
        let data = {
          categoryCode: selectParams.value.categoryCode
        };
        btnLoading.value = true;
        proxy.$api.deleteCategoryInfo(data).then(() => {
          btnLoading.value = false;
          proxy.$Message.success("\u5DF2\u5220\u9664");
          modalShow.value = false;
          init();
        }).catch(() => {
          btnLoading.value = false;
        });
      }
    };
    const changeStep = (record, state) => {
      let data = {
        categoryCode: record.categoryCode,
        name: record.name,
        robotNum: record.robotNum,
        seq: record.seq,
        upFlag: state
      };
      proxy.$api.saveOrUpdateCategory(data).then(() => {
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        init();
      }).catch(() => {
      });
    };
    const getAddRobot = (e) => {
      let data = [];
      e.forEach((item, i) => {
        data.push({
          categoryCode: sum.value == 0 ? "" : selectParams.value.categoryCode,
          robotCode: item.robotCode,
          robotCategoryId: item.robotCategoryId
        });
        if (i == Number(e.length - 1)) {
          proxy.$api.addBatchCategoryRobot(data).then(() => {
            proxy.$Message.success("\u5DF2\u6DFB\u52A0");
            chooseType(selectParams.value);
            proxy.$api.getCategoryList().then((res) => {
              classList.value = res.data;
              loading.value = false;
            }).catch(() => {
              loading.value = false;
            });
          }).catch(() => {
          });
        }
      });
    };
    init();
    watch(() => routing.permList, () => {
      if (routing.firmParams && routing.firmParams.isPaidTeamFlag && routing.permList.length > 0) {
        proxy.$isPerm("33175", true);
      }
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_DropdownMenu = resolveComponent("DropdownMenu");
      const _component_DropdownItem = resolveComponent("DropdownItem");
      const _component_cModal = __nuxt_component_0;
      const _component_Button = resolveComponent("Button");
      const _component_exclusiveRobot = __nuxt_component_2;
      const _component_cCreate = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "robot" }, _attrs))} data-v-f8dbdb17><div class="robot-title" data-v-f8dbdb17>\u4E13\u5C5E\u673A\u5668\u4EBA</div><div class="robot-content" data-v-f8dbdb17><div class="robot-content-left" data-v-f8dbdb17><div class="left-title" data-v-f8dbdb17><div data-v-f8dbdb17>\u5206\u7EC4</div><img${ssrRenderAttr("src", _imports_0)} data-v-f8dbdb17></div><div class="left-content" data-v-f8dbdb17>`);
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
      ssrRenderList(classList.value, (item, i) => {
        _push(`<div class="${ssrRenderClass([selectParams.value.categoryCode == item.categoryCode ? "conetnt-item-active" : "", "conetnt-item"])}" data-v-f8dbdb17><div data-v-f8dbdb17><span data-v-f8dbdb17>${ssrInterpolate(item.name)}</span>`);
        if (item.description == "system") {
          _push(`<span class="system-tag" data-v-f8dbdb17>\u7CFB\u7EDF</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Dropdown, { transfer: true }, {
                list: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (item.description != "system") {
                            _push4(ssrRenderComponent(_component_DropdownItem, {
                              onClick: ($event) => addType(item)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u7F16\u8F91`);
                                } else {
                                  return [
                                    createTextVNode("\u7F16\u8F91")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (i != 0) {
                            _push4(ssrRenderComponent(_component_DropdownItem, {
                              onClick: ($event) => changeStep(item, true)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u4E0A\u79FB`);
                                } else {
                                  return [
                                    createTextVNode("\u4E0A\u79FB")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (i != classList.value.length - 1) {
                            _push4(ssrRenderComponent(_component_DropdownItem, {
                              onClick: ($event) => changeStep(item, false)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u4E0B\u79FB`);
                                } else {
                                  return [
                                    createTextVNode("\u4E0B\u79FB")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (item.description != "system") {
                            _push4(ssrRenderComponent(_component_DropdownItem, {
                              onClick: ($event) => deleteClass(item)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u5220\u9664`);
                                } else {
                                  return [
                                    createTextVNode("\u5220\u9664")
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
                            item.description != "system" ? (openBlock(), createBlock(_component_DropdownItem, {
                              key: 0,
                              onClick: ($event) => addType(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u7F16\u8F91")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                            i != 0 ? (openBlock(), createBlock(_component_DropdownItem, {
                              key: 1,
                              onClick: ($event) => changeStep(item, true)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u4E0A\u79FB")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                            i != classList.value.length - 1 ? (openBlock(), createBlock(_component_DropdownItem, {
                              key: 2,
                              onClick: ($event) => changeStep(item, false)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u4E0B\u79FB")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                            item.description != "system" ? (openBlock(), createBlock(_component_DropdownItem, {
                              key: 3,
                              onClick: ($event) => deleteClass(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u5220\u9664")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          item.description != "system" ? (openBlock(), createBlock(_component_DropdownItem, {
                            key: 0,
                            onClick: ($event) => addType(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u7F16\u8F91")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true),
                          i != 0 ? (openBlock(), createBlock(_component_DropdownItem, {
                            key: 1,
                            onClick: ($event) => changeStep(item, true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u4E0A\u79FB")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true),
                          i != classList.value.length - 1 ? (openBlock(), createBlock(_component_DropdownItem, {
                            key: 2,
                            onClick: ($event) => changeStep(item, false)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u4E0B\u79FB")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true),
                          item.description != "system" ? (openBlock(), createBlock(_component_DropdownItem, {
                            key: 3,
                            onClick: ($event) => deleteClass(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u5220\u9664")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="conetnt-item-action"${ssrRenderAttr("src", _imports_1)} data-v-f8dbdb17${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "conetnt-item-action",
                        src: _imports_1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Dropdown, { transfer: true }, {
                  list: withCtx(() => [
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        item.description != "system" ? (openBlock(), createBlock(_component_DropdownItem, {
                          key: 0,
                          onClick: ($event) => addType(item)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u7F16\u8F91")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        i != 0 ? (openBlock(), createBlock(_component_DropdownItem, {
                          key: 1,
                          onClick: ($event) => changeStep(item, true)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u4E0A\u79FB")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        i != classList.value.length - 1 ? (openBlock(), createBlock(_component_DropdownItem, {
                          key: 2,
                          onClick: ($event) => changeStep(item, false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u4E0B\u79FB")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        item.description != "system" ? (openBlock(), createBlock(_component_DropdownItem, {
                          key: 3,
                          onClick: ($event) => deleteClass(item)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5220\u9664")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "conetnt-item-action",
                      src: _imports_1
                    })
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="robot-content-right" data-v-f8dbdb17>`);
      if (selectParams.value.description == "system") {
        _push(`<!--[--><div class="right-title" data-v-f8dbdb17>${ssrInterpolate(selectParams.value.name)}</div><div class="right-type" data-v-f8dbdb17><div class="${ssrRenderClass([!tagCode.value ? "btn-active" : "", "btn"])}" data-v-f8dbdb17>\u5168\u90E8</div><!--[-->`);
        ssrRenderList(systemTypeList.value, (item, i) => {
          _push(`<div class="${ssrRenderClass([tagCode.value == item.code ? "btn-active" : "", "btn"])}" data-v-f8dbdb17>${ssrInterpolate(item.cateName)}</div>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else {
        _push(`<div class="right-title" data-v-f8dbdb17><div data-v-f8dbdb17>\u901A\u7528\u573A\u666F</div><div class="right-title-btn" data-v-f8dbdb17>${ssrInterpolate(isManage.value ? "\u5B8C\u6210" : "\u7BA1\u7406\u673A\u5668\u4EBA")}</div></div>`);
      }
      _push(`<div class="robot-list" data-v-f8dbdb17>`);
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
      if (isManage.value) {
        _push(`<div class="robot-list-item" data-v-f8dbdb17><img class="logo"${ssrRenderAttr("src", _imports_2)} data-v-f8dbdb17><div class="add-name" data-v-f8dbdb17>\u6DFB\u52A0\u673A\u5668\u4EBA</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(robotList.value, (item, i) => {
        _push(`<div class="robot-list-item" data-v-f8dbdb17>`);
        if (isManage.value) {
          _push(`<img class="closed"${ssrRenderAttr("src", _imports_3)} data-v-f8dbdb17>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="logo" data-v-f8dbdb17>`);
        if (item.robotLogo) {
          _push(`<img${ssrRenderAttr("src", item.robotLogo)} data-v-f8dbdb17>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-f8dbdb17>`);
        }
        _push(`</div><div class="content" data-v-f8dbdb17><div class="content-title text-hide-2" data-v-f8dbdb17>${ssrInterpolate(item.name)}</div><div class="content-name text-hide-2" data-v-f8dbdb17>${ssrInterpolate(item.robotRemark)}</div></div></div>`);
      });
      _push(`<!--]-->`);
      if (robotList.value.length == 0 && !loading2.value && !isManage.value) {
        _push(`<div class="content-nodate" data-v-f8dbdb17><div class="content-nodate-inside" data-v-f8dbdb17><img${ssrRenderAttr("src", _imports_5)} data-v-f8dbdb17><div class="name" data-v-f8dbdb17>\u6682\u672A\u6DFB\u52A0\u4E13\u5C5E\u673A\u5668\u4EBA\uFF0C\u8BF7\u53F3\u4E0A\u89D2\u7BA1\u7406\u673A\u5668\u4EBA\u8FDB\u884C\u6DFB\u52A0</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(editType, {
        ref_key: "editTypeRef",
        ref: editTypeRef,
        onInit: init
      }, null, _parent));
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modelTitle" data-v-f8dbdb17${_scopeId}>\u5220\u9664</div>`);
          } else {
            return [
              createVNode("div", { class: "modelTitle" }, "\u5220\u9664")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: ($event) => deleteClass(""),
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
          } else {
            return [
              createVNode(_component_Button, {
                type: "primary",
                onClick: ($event) => deleteClass(""),
                loading: btnLoading.value
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["onClick", "loading"]),
              createVNode(_component_Button, {
                onClick: ($event) => modalShow.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u53D6\u6D88")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-f8dbdb17${_scopeId}><div data-v-f8dbdb17${_scopeId}>\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u5206\u7C7B?</div><div data-v-f8dbdb17${_scopeId}>\u5220\u9664\u8BE5\u5206\u7C7B\u540E,\u8BE5\u5206\u7C7B\u4E0B\u7684\u673A\u5668\u4EBA\u4E5F\u540C\u6B65\u5220\u9664\u3002</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", null, "\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u5206\u7C7B?"),
                createVNode("div", null, "\u5220\u9664\u8BE5\u5206\u7C7B\u540E,\u8BE5\u5206\u7C7B\u4E0B\u7684\u673A\u5668\u4EBA\u4E5F\u540C\u6B65\u5220\u9664\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_exclusiveRobot, {
        ref_key: "exclusiveRobotRef",
        ref: exclusiveRobotRef,
        onInit: getAddRobot,
        forbiddenList: forbiddenList.value
      }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/robot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8dbdb17"]]);

export { robot as default };
//# sourceMappingURL=robot-e1164518.mjs.map
