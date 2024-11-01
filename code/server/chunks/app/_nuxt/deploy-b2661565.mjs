import { b as buildAssetsURL } from '../../paths.mjs';
import { _ as __nuxt_component_0$1 } from './ossUploaderNew-da7960a9.mjs';
import { _ as __nuxt_component_1, a as _imports_2$2 } from './sPrompt-baa4194f.mjs';
import { _ as __nuxt_component_2 } from './exclusiveRobot-9d1c2819.mjs';
import { a as _export_sfc, f as useI18n, g as getRouting, d as __nuxt_component_0, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toRefs, unref, withModifiers, withKeys } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './search-62fd20c9.mjs';
import { _ as _imports_1$2 } from './robot-20021510.mjs';
import { _ as _imports_1$3 } from './hot-bc2e3ef0.mjs';
import { _ as _imports_2$1, s as searchRobotCom } from './searchRobot-b628c2cd.mjs';
import { g as glistenImg } from './glisten-f900c8fb.mjs';
import { _ as _sfc_main$3 } from './createLoading-9278cbec.mjs';
import { n as noDataCom } from './index-e1fc7e3e.mjs';
import { useRouter } from 'vue-router';
import { _ as _imports_3 } from './banner-de37f1fc.mjs';
import { _ as _imports_4 } from './edit1-d50fac04.mjs';
import { _ as _imports_5 } from './del1-dbdd8b76.mjs';
import { _ as _imports_6, a as _imports_7, b as _imports_8 } from './del-96ef2702.mjs';
import Draggable from 'vuedraggable';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import 'vant';
import './loding-9ec1fb58.mjs';
import '@aws-sdk/client-s3';
import './close-5dffb58a.mjs';
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
import './electricCom-ab2941d1.mjs';

const _imports_0$1 = "data:image/png;base64,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";
const _imports_1$1 = "" + buildAssetsURL("departUser.290cde78.png");
const _imports_2 = "data:image/png;base64,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";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "addMember2",
  __ssrInlineRender: true,
  props: {
    userOpen: {
      //用户打开
      type: Boolean,
      default: false
    },
    bizType: {
      //范围类型
      type: String,
      default: ""
    }
    // openCreate:{
    // 	type: Boolean,
    // 	default: false,
    // }
  },
  emits: ["init", "getDifferences", "getWhole"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const loading = ref(false);
    const single = ref(false);
    const isShowWhole = ref(false);
    const list = ref([]);
    const indeterminate = ref(false);
    const listLoading = ref(true);
    const selectList = ref([]);
    const transferList = ref([]);
    const routeList = ref([]);
    const currentList = ref([]);
    const name = ref("");
    const code = ref("");
    const isWhole = ref(false);
    const originalList = ref([]);
    const showFn = (record, original) => {
      proxy.$api.getUserAccountInfo().then((res) => {
        if (res.data.partnerFlag) {
          isShowWhole.value = true;
        } else {
          isShowWhole.value = false;
        }
      });
      if (props.bizType == "WORKBENCH") {
        isWhole.value = false;
      }
      if (props.bizType == "WORKBENCH_ALL_SITE_VIEW") {
        isWhole.value = true;
      }
      routeList.value = [];
      single.value = false;
      indeterminate.value = false;
      currentList.value = [];
      selectList.value = [];
      transferList.value = [];
      originalList.value = [];
      if (record && record.length > 0) {
        selectList.value = JSON.parse(JSON.stringify(record));
        transferList.value = JSON.parse(JSON.stringify(record));
      }
      if (original && original.length > 0) {
        originalList.value = original;
      }
      modalShow.value = true;
      loading.value = true;
      listLoading.value = false;
      let url = props.userOpen ? "teamGetBizUserList" : "teamGetBizList";
      proxy.$api[url]().then((res) => {
        let data = {
          code: res.data[0].code,
          name: ""
        };
        routeList.value.push({
          code: res.data[0].code,
          name: res.data[0].name
        });
        code.value = res.data[0].code;
        proxy.$api[url](data).then((json) => {
          list.value = JSON.parse(JSON.stringify(json.data));
          loading.value = false;
          listLoading.value = true;
          selectList.value.forEach((iten) => {
            list.value.forEach((it) => {
              if (it.code == iten.code) {
                currentList.value.push(iten.code);
              }
            });
          });
          list.value.forEach((item, i) => {
            if (item.type == "user" && !props.userOpen) {
              list.value.splice(i, 1);
            }
          });
          listLoading.value = true;
        });
      });
    };
    const chooseAll = () => {
      currentList.value = [];
      indeterminate.value = false;
      if (single.value) {
        list.value.forEach((item) => {
          currentList.value.push(item.code);
        });
      }
    };
    const compare = (beforeArr, afterArr) => {
      let resObj = {
        add: [],
        del: []
      };
      let cenObj = {};
      for (let i = 0; i < beforeArr.length; i++) {
        cenObj[beforeArr[i]] = beforeArr[i];
      }
      for (let j = 0; j < afterArr.length; j++) {
        if (!cenObj[afterArr[j]]) {
          resObj.add.push(afterArr[j]);
        } else {
          delete cenObj[afterArr[j]];
        }
      }
      for (let k in cenObj) {
        resObj.del.push(k);
      }
      return resObj;
    };
    const handleDate = (record) => {
      if (listLoading.value == true) {
        list.value.forEach((item) => {
          if (record.add.indexOf(item.code) != -1) {
            selectList.value.push(item);
          }
          if (record.del.indexOf(item.code) != -1) {
            selectList.value.forEach((iten, j) => {
              if (iten.code == item.code) {
                selectList.value.splice(j, 1);
              }
            });
          }
        });
      }
    };
    const toDelete = (i, code2) => {
      selectList.value.splice(i, 1);
      if (currentList.value.indexOf(code2) != -1) {
        currentList.value.splice(currentList.value.indexOf(code2), 1);
      }
    };
    const checkLimit = (record) => {
      if (currentList.value.indexOf(record.code) != -1) {
        return true;
      } else {
        return false;
      }
    };
    const toRoute = (record, i) => {
      listLoading.value = false;
      routeList.value.splice(i + 1, routeList.value.length);
      let data = {
        code: record.code,
        name: name.value
      };
      code.value = record.code;
      loading.value = true;
      toGetList(data);
    };
    const toNext = (record) => {
      listLoading.value = false;
      routeList.value.push({
        code: record.code,
        name: record.name
      });
      let data = {
        code: record.code,
        name: name.value
      };
      loading.value = true;
      code.value = record.code;
      toGetList(data);
    };
    const toSearch = () => {
      let data = {
        code: code.value,
        name: name.value
      };
      toGetList(data);
    };
    const toGetList = (data) => {
      single.value = false;
      currentList.value = [];
      let url = props.userOpen ? "teamGetBizUserList" : "teamGetBizList";
      proxy.$api[url](data).then((json) => {
        list.value = JSON.parse(JSON.stringify(json.data));
        loading.value = false;
        listLoading.value = true;
        list.value.forEach((item, i) => {
          selectList.value.forEach((iten) => {
            if (item.code == iten.code) {
              currentList.value.push(item.code);
            }
          });
          if (item.type == "user" && !props.userOpen) {
            list.value.splice(i, 1);
          }
        });
      });
    };
    const toSubmit = () => {
      if (isWhole.value) {
        modalShow.value = false;
        emits("getWhole", "WORKBENCH_ALL_SITE_VIEW");
      } else {
        if (selectList.value.length == 0) {
          proxy.$Message.error("\u8BF7\u9009\u62E9");
          return;
        }
        emits("getWhole", "WORKBENCH");
        let arr1 = [];
        let arr2 = [];
        selectList.value.forEach((item, i) => {
          arr1.push(item.code);
          if (i == Number(selectList.value.length - 1)) {
            if (transferList.value.length == 0) {
              let object1 = compare(arr2, arr1);
              lastSubmit(object1);
            } else {
              transferList.value.forEach((iten, j) => {
                arr2.push(iten.code);
                if (j == Number(transferList.value.length - 1)) {
                  let object2 = compare(arr2, arr1);
                  lastSubmit(object2);
                }
              });
            }
          }
        });
      }
    };
    const onCancel = () => {
      modalShow.value = false;
      routeList.value = [];
      single.value = false;
      indeterminate.value = false;
      currentList.value = [];
      selectList.value = [];
      transferList.value = [];
      originalList.value = [];
    };
    const lastSubmit = (record) => {
      let addList = [];
      let delList = [];
      if (record.add.length == 0 && record.del.length == 0) {
        transfers(selectList.value, addList, delList);
      } else {
        if (record.add.length > 0 && record.del.length == 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                transfers(selectList.value, addList, delList);
              }
            });
          });
        }
        if (record.add.length == 0 && record.del.length > 0) {
          record.del.forEach((item, i) => {
            transferList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = false;
                delList.push(iten);
              }
              if (i == Number(record.del.length - 1) && j == Number(transferList.value.length - 1)) {
                transfers(selectList.value, addList, delList);
              }
            });
          });
        }
        if (record.add.length > 0 && record.del.length > 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                record.del.forEach((itx, m) => {
                  transferList.value.forEach((it, n) => {
                    if (itx == it.code) {
                      it.operate = false;
                      delList.push(it);
                    }
                    if (m == Number(record.del.length - 1) && n == Number(transferList.value.length - 1)) {
                      transfers(selectList.value, addList, delList);
                    }
                  });
                });
              }
            });
          });
        }
      }
    };
    const transfers = (arr1, arr2, arr3) => {
      if (arr2.length == 0 && arr3.length == 0) {
        emits("init", arr1, []);
        modalShow.value = false;
      } else {
        emits("init", arr1, arr2.concat(arr3));
        modalShow.value = false;
      }
      let list1 = [];
      let list2 = [];
      selectList.value.forEach((item, i) => {
        list2.push(item.code);
        if (i == Number(selectList.value.length - 1)) {
          if (originalList.value.length > 0) {
            originalList.value.forEach((iten, j) => {
              list1.push(iten.code);
              if (j == Number(originalList.value.length - 1)) {
                let object = compare(list1, list2);
                differences(object);
              }
            });
          } else {
            let object = compare(list1, list2);
            differences(object);
          }
        }
      });
    };
    const differences = (record) => {
      if (record.add.length == 0 && record.del.length == 0) {
        if (selectList.value == 0) {
          emits("getDifferences", []);
        } else {
          selectList.value.forEach((item, i) => {
            item.operate = true;
            if (i == Number(selectList.value.length - 1)) {
              emits("getDifferences", selectList.value);
            }
          });
        }
      } else {
        let addList = [];
        let delList = [];
        if (record.add.length > 0 && record.del.length == 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                toDifferences(addList, delList);
              }
            });
          });
        }
        if (record.add.length == 0 && record.del.length > 0) {
          record.del.forEach((item, i) => {
            originalList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = false;
                delList.push(iten);
              }
              if (i == Number(record.del.length - 1) && j == Number(originalList.value.length - 1)) {
                toDifferences(addList, delList);
              }
            });
          });
        }
        if (record.add.length > 0 && record.del.length > 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                record.del.forEach((itx, m) => {
                  originalList.value.forEach((it, n) => {
                    if (itx == it.code) {
                      it.operate = false;
                      delList.push(it);
                    }
                    if (m == Number(record.del.length - 1) && n == Number(originalList.value.length - 1)) {
                      toDifferences(addList, delList);
                    }
                  });
                });
              }
            });
          });
        }
      }
    };
    const toDifferences = (addList, delList) => {
      if (selectList.value.length == 0) {
        emits("getDifferences", delList.concat(addList));
      } else {
        selectList.value.forEach((item, i) => {
          item.operate = true;
          if (i == Number(selectList.value.length - 1)) {
            emits("getDifferences", delList.concat(addList));
          }
        });
      }
    };
    const chooseWholeStation = () => {
      if (isWhole.value) {
        currentList.value = [];
        selectList.value = [];
      }
    };
    watch(() => currentList.value, (newList, oldList) => {
      if (list.value.length > 0) {
        if (currentList.value.length == list.value.length) {
          indeterminate.value = false;
          single.value = true;
        } else {
          if (currentList.value.length == 0) {
            indeterminate.value = false;
          } else {
            indeterminate.value = true;
          }
        }
      } else {
        indeterminate.value = false;
      }
      if (currentList.value.length == 0) {
        single.value = false;
      }
      if (listLoading.value) {
        let object = compare(oldList, newList);
        handleDate(object);
      }
    }, { deep: true });
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Spin = resolveComponent("Spin");
      const _component_Input = resolveComponent("Input");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_CheckboxGroup = resolveComponent("CheckboxGroup");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modalWidth: 788,
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        onOnCancel: onCancel,
        "mask-closable": false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalTitle" data-v-398ef798${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u9009\u62E9"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "modalTitle" }, toDisplayString(_ctx.$t("public.\u9009\u62E9")), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              loading: loading.value,
              onClick: toSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("public.\u786E\u5B9A"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("public.\u786E\u5B9A")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, { onClick: onCancel }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("public.\u53D6\u6D88"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("public.\u53D6\u6D88")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "primary",
                loading: loading.value,
                onClick: toSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("public.\u786E\u5B9A")), 1)
                ]),
                _: 1
              }, 8, ["loading"]),
              createVNode(_component_Button, { onClick: onCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("public.\u53D6\u6D88")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-398ef798${_scopeId}><div class="content-left" data-v-398ef798${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: loading.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: name.value,
              "onUpdate:modelValue": ($event) => name.value = $event,
              onOnSearch: toSearch,
              search: true,
              placeholder: _ctx.$t("public.\u641C\u7D22")
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "margin": "10px 0" })}" data-v-398ef798${_scopeId}>`);
            if (isShowWhole.value) {
              _push2(ssrRenderComponent(_component_Checkbox, {
                modelValue: isWhole.value,
                "onUpdate:modelValue": ($event) => isWhole.value = $event,
                onOnChange: chooseWholeStation
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u5168\u7AD9"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("aiEnterprise.workbench.\u5168\u7AD9")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="choose" data-v-398ef798${_scopeId}><div class="choose-top" data-v-398ef798${_scopeId}><!--[-->`);
            ssrRenderList(routeList.value, (item, i) => {
              _push2(`<div class="${ssrRenderClass([i == routeList.value.length - 1 ? "active" : "", "choose-top-item"])}" data-v-398ef798${_scopeId}>${ssrInterpolate(item.name)}`);
              if (i != routeList.value.length - 1) {
                _push2(`<span class="division" data-v-398ef798${_scopeId}>&gt;</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
            if (list.value.length > 0) {
              _push2(ssrRenderComponent(_component_Checkbox, {
                modelValue: single.value,
                "onUpdate:modelValue": ($event) => single.value = $event,
                indeterminate: indeterminate.value,
                onOnChange: chooseAll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="chooseAll" data-v-398ef798${_scopeId2}>${ssrInterpolate(_ctx.$t("public.\u5168\u9009"))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "chooseAll" }, toDisplayString(_ctx.$t("public.\u5168\u9009")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="choose-list" data-v-398ef798${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CheckboxGroup, {
              modelValue: currentList.value,
              "onUpdate:modelValue": ($event) => currentList.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(list.value, (item, i) => {
                    _push3(`<div class="choose-list-item" data-v-398ef798${_scopeId2}><div class="list-item-left" data-v-398ef798${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Checkbox, {
                      label: list.value[i].code
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="item-left-content" data-v-398ef798${_scopeId3}>`);
                          if (item.type == "dept") {
                            _push4(`<img${ssrRenderAttr("src", _imports_0$1)} data-v-398ef798${_scopeId3}>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (item.type == "user") {
                            _push4(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-398ef798${_scopeId3}>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="list-item-name text-hide" data-v-398ef798${_scopeId3}>${ssrInterpolate(item.name)}</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "item-left-content" }, [
                              item.type == "dept" ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_0$1
                              })) : createCommentVNode("", true),
                              item.type == "user" ? (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_1$1
                              })) : createCommentVNode("", true),
                              createVNode("div", { class: "list-item-name text-hide" }, toDisplayString(item.name), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (item.type == "dept") {
                      _push3(`<div class="list-item-right" data-v-398ef798${_scopeId2}>`);
                      if (item.haveSubDeptFlag) {
                        _push3(`<!--[-->`);
                        if (checkLimit(item)) {
                          _push3(`<a class="disable-a" data-v-398ef798${_scopeId2}>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7"))}</a>`);
                        } else {
                          _push3(`<a data-v-398ef798${_scopeId2}>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7"))}</a>`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, i) => {
                      return openBlock(), createBlock("div", { class: "choose-list-item" }, [
                        createVNode("div", { class: "list-item-left" }, [
                          createVNode(_component_Checkbox, {
                            label: list.value[i].code
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "item-left-content" }, [
                                item.type == "dept" ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: _imports_0$1
                                })) : createCommentVNode("", true),
                                item.type == "user" ? (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_1$1
                                })) : createCommentVNode("", true),
                                createVNode("div", { class: "list-item-name text-hide" }, toDisplayString(item.name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["label"])
                        ]),
                        item.type == "dept" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "list-item-right"
                        }, [
                          item.haveSubDeptFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            checkLimit(item) ? (openBlock(), createBlock("a", {
                              key: 0,
                              class: "disable-a"
                            }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 1)) : (openBlock(), createBlock("a", {
                              key: 1,
                              onClick: ($event) => toNext(item)
                            }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 9, ["onClick"]))
                          ], 64)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="content-right" data-v-398ef798${_scopeId}><div class="content-right-name" data-v-398ef798${_scopeId}>${ssrInterpolate(_ctx.$t("publicMsg.\u5DF2\u9009\u62E9"))} (${ssrInterpolate(selectList.value.length)}<span data-v-398ef798${_scopeId}>/9999</span>) </div><div class="content-right-list" data-v-398ef798${_scopeId}><!--[-->`);
            ssrRenderList(selectList.value, (item, i) => {
              _push2(`<div class="right-list-item" data-v-398ef798${_scopeId}>`);
              if (item.type == "dept") {
                _push2(`<img${ssrRenderAttr("src", _imports_0$1)} data-v-398ef798${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.type == "user") {
                _push2(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-398ef798${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-hide" data-v-398ef798${_scopeId}>${ssrInterpolate(item.name)}</div><img class="list-item-close"${ssrRenderAttr("src", _imports_2)} data-v-398ef798${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "content-left" }, [
                  createVNode(_component_Spin, {
                    fix: "",
                    show: loading.value
                  }, null, 8, ["show"]),
                  createVNode(_component_Input, {
                    modelValue: name.value,
                    "onUpdate:modelValue": ($event) => name.value = $event,
                    onOnSearch: toSearch,
                    search: true,
                    placeholder: _ctx.$t("public.\u641C\u7D22")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                  createVNode("div", { style: { "margin": "10px 0" } }, [
                    isShowWhole.value ? (openBlock(), createBlock(_component_Checkbox, {
                      key: 0,
                      modelValue: isWhole.value,
                      "onUpdate:modelValue": ($event) => isWhole.value = $event,
                      onOnChange: chooseWholeStation
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("aiEnterprise.workbench.\u5168\u7AD9")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "choose" }, [
                    createVNode("div", { class: "choose-top" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(routeList.value, (item, i) => {
                        return openBlock(), createBlock("div", {
                          class: ["choose-top-item", i == routeList.value.length - 1 ? "active" : ""],
                          onClick: ($event) => toRoute(item, i),
                          key: i
                        }, [
                          createTextVNode(toDisplayString(item.name), 1),
                          i != routeList.value.length - 1 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "division"
                          }, ">")) : createCommentVNode("", true)
                        ], 10, ["onClick"]);
                      }), 128))
                    ]),
                    list.value.length > 0 ? (openBlock(), createBlock(_component_Checkbox, {
                      key: 0,
                      modelValue: single.value,
                      "onUpdate:modelValue": ($event) => single.value = $event,
                      indeterminate: indeterminate.value,
                      onOnChange: chooseAll
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "chooseAll" }, toDisplayString(_ctx.$t("public.\u5168\u9009")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "indeterminate"])) : createCommentVNode("", true),
                    createVNode("div", { class: "choose-list" }, [
                      createVNode(_component_CheckboxGroup, {
                        modelValue: currentList.value,
                        "onUpdate:modelValue": ($event) => currentList.value = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, i) => {
                            return openBlock(), createBlock("div", { class: "choose-list-item" }, [
                              createVNode("div", { class: "list-item-left" }, [
                                createVNode(_component_Checkbox, {
                                  label: list.value[i].code
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "item-left-content" }, [
                                      item.type == "dept" ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: _imports_0$1
                                      })) : createCommentVNode("", true),
                                      item.type == "user" ? (openBlock(), createBlock("img", {
                                        key: 1,
                                        src: _imports_1$1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", { class: "list-item-name text-hide" }, toDisplayString(item.name), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["label"])
                              ]),
                              item.type == "dept" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "list-item-right"
                              }, [
                                item.haveSubDeptFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  checkLimit(item) ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    class: "disable-a"
                                  }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 1)) : (openBlock(), createBlock("a", {
                                    key: 1,
                                    onClick: ($event) => toNext(item)
                                  }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 9, ["onClick"]))
                                ], 64)) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true)
                            ]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "content-right" }, [
                  createVNode("div", { class: "content-right-name" }, [
                    createTextVNode(toDisplayString(_ctx.$t("publicMsg.\u5DF2\u9009\u62E9")) + " (" + toDisplayString(selectList.value.length), 1),
                    createVNode("span", null, "/9999"),
                    createTextVNode(") ")
                  ]),
                  createVNode("div", { class: "content-right-list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(selectList.value, (item, i) => {
                      return openBlock(), createBlock("div", {
                        class: "right-list-item",
                        key: i
                      }, [
                        item.type == "dept" ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: _imports_0$1
                        })) : createCommentVNode("", true),
                        item.type == "user" ? (openBlock(), createBlock("img", {
                          key: 1,
                          src: _imports_1$1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "text-hide" }, toDisplayString(item.name), 1),
                        createVNode("img", {
                          onClick: ($event) => toDelete(i, item.code),
                          class: "list-item-close",
                          src: _imports_2
                        }, null, 8, ["onClick"])
                      ]);
                    }), 128))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/addMember2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-398ef798"]]);
const upvoteImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAfxJREFUWEft179rE2Ecx/H3N2boUIU8F6GDBQUdRQWHuDk4ODrckxShoKCg0NFNB/0DnBR0cHBwCLkEFLNZqOKgi9ih4KCDg4sld1nc2t5XKxZSa2J47tI8w938fJ973ef5eYLnj3juowBmHaEiwSLBcRNYbzFbhiWF41qiWw15Pm7tqHa5zEFdodyPeYtS23mZwvXA8iQrMhdg0uYGyqNBjCofgjpnpw6MOxyRlM/AzC6M8NWEHJs+sE1TlMYeiA/AuEUoQvTPlKYN1BVm+jGfUI56Cey3eaDK0tA5tl8Jxh1qknIFmAOaxtLsRdwpwe09C2O3dhNYG/YBqnwX4aGxdJ33wV6HC6WUlwOQF8ZyKWmxinAq6wr9XS8smpBnw/oauQ8mER+B0wPFuQMFvlQsJ1yB+ldh7sDt/o0dfi/9X4L7AfxmLPP+Jqi8MXXOewsU4Wkl5Kq3QE25FzS46y2QlEXTcN9mJr5IdItzwQLvvU2wvMHhQ5fp+Qr8YSwHnY+6JGKyQyysmZCT3gJV6QR1wizADaA8qbNY4X5gueUObPNu8E8NyPcsFm6akMfOwLhJTQ7wCpj900muQFHOVOqsOgO3C9dbzJWEa78ul1XdolttsJxELChcdL4PKpuivB61Qe/0nct/sTN0jMICOEZII5sUCRYJZk0ga/1PqbPYKdwyyGwAAAAASUVORK5CYII=";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "robotPage",
  __ssrInlineRender: true,
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  emits: ["update:list"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    useRouter();
    const btnType = ref(1);
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const isLoading = ref(false);
    const { list } = toRefs(props);
    const classKey = ref("");
    const classList = ref([
      { name: "\u5E73\u53F0\u63A8\u8350", img: upvoteImg, key: "REC" },
      { name: "\u6211\u7684\u667A\u80FD\u4F53", img: glistenImg, key: "MY" }
      // {name:"我的收藏",img:starImg},
    ]);
    const subClassList = ref([]);
    ref([
      { id: 1, name: "\u5168\u90E8", num: 5 },
      { id: 2, name: "\u6548\u7387", num: 3 },
      { id: 3, name: "\u6587\u672C\u521B\u4F5C", num: 5 },
      { id: 4, name: "\u529F\u80FD\u5199\u4F5C", num: 7 }
    ]);
    const keyword = ref("");
    const robotList = ref([]);
    ref([]);
    const categoryCode = ref("");
    const categoryType = ref("");
    const labelList = ref([]);
    const labelCode = ref("");
    const showFn = () => {
      modalShow.value = true;
      initData();
      toChaneType(1);
    };
    const initData = () => {
      subClassList.value = [];
      labelList.value = [];
      robotList.value = [];
      categoryCode.value = "";
      categoryType.value = "";
      labelCode.value = "";
      isLoading.value = true;
      keyword.value = "";
    };
    const onKeyDown = proxy.$debounce((event) => {
      if (btnType.value == 1) {
        if (classKey.value == "REC") {
          onAgentCategoryLabelRobot();
        }
        if (classKey.value == "MY") {
          onMyRobotList();
        }
      }
      if (btnType.value == 2) {
        onCreateClick();
      }
      if (btnType.value == 3) {
        onOtherClick();
      }
    }, 500);
    const toChaneType = async (type) => {
      await initData();
      btnType.value = type;
      if (btnType.value == 1) {
        onClassClick("REC");
      }
      if (btnType.value == 2) {
        onCreateClick();
      }
      if (btnType.value == 3) {
        onOtherClick();
      }
    };
    const onClassClick = async (key) => {
      await initData();
      classKey.value = key;
      if (classKey.value == "MY") {
        onMyRobotList();
      }
      if (classKey.value == "REC") {
        onAgentCategory();
      }
    };
    const onSubClassClick = (item) => {
      categoryCode.value = item.code;
      if (btnType.value == 1) {
        if (classKey.value == "REC") {
          categoryType.value = item.type, labelCode.value = "";
          robotList.value = [];
          onAgentCategoryLabel();
          onAgentCategoryLabelRobot();
        }
      }
      if (btnType.value == 2) {
        robotList.value = [];
        robotList.value = item.robotList.map((item2) => {
          return {
            ...item2,
            check: false,
            robotName: item2.name,
            robotCode: item2.code,
            robotDescribe: item2.robotRemark
          };
        });
      }
      if (btnType.value == 3) {
        robotList.value = item.queryTagInfoRobotList.map((item2) => {
          return {
            ...item2,
            check: false,
            robotName: item2.tagName,
            robotCode: item2.robotCode,
            robotDescribe: item2.robotRemark
          };
        });
      }
    };
    const onLabel = (item) => {
      labelCode.value = item.code;
      onAgentCategoryLabelRobot();
    };
    const onMyRobotList = () => {
      isLoading.value = true;
      proxy.$api.space_robotQuery({
        type: "CHAT",
        name: keyword.value
      }).then((res) => {
        robotList.value = res.data.map((item) => {
          return {
            ...item,
            check: false,
            robotName: item.name,
            robotCode: item.code,
            robotDescribe: item.robotRemark
          };
        });
        isLoading.value = false;
      }, (res) => {
        isLoading.value = false;
      });
    };
    const onAgentCategory = () => {
      proxy.$api.queryIntelligentAgentCategory().then((res) => {
        subClassList.value = res.data.map((item) => {
          return {
            ...item,
            code: item.code,
            cateName: item.name
          };
        });
        onAgentCategoryLabelRobot();
      });
    };
    const onAgentCategoryLabel = () => {
      let data = {
        categoryCode: categoryCode.value,
        categoryType: categoryType.value
      };
      proxy.$api.queryIntelligentAgentRobotLabel(data).then((res) => {
        labelList.value = res.data;
      });
    };
    const onAgentCategoryLabelRobot = () => {
      let data = {
        categoryCode: categoryCode.value,
        categoryType: categoryType.value,
        labelCode: labelCode.value,
        name: keyword.value
      };
      robotList.value = [];
      isLoading.value = true;
      proxy.$api.queryIntelligentAgentRobot(data).then((res) => {
        robotList.value = res.data ? res.data : [];
        isLoading.value = false;
      }, (res) => {
        isLoading.value = false;
      });
    };
    const onCreateClick = () => {
      proxy.$api.queryCategoryRobotList({
        keyword: keyword.value,
        type: "QUESTION_BANK_ROBOT_CATEGORY"
      }).then((res) => {
        subClassList.value = res.data.map((item) => {
          return {
            ...item,
            code: item.id
          };
        });
        if (!proxy.$isEmpty(res.data)) {
          onSubClassClick(res.data[0]);
        }
        isLoading.value = false;
      }, (res) => {
        isLoading.value = false;
      });
    };
    const onOtherClick = () => {
      let data = {
        name: keyword.value,
        type: "AI_APPLY_CATEGORY",
        queryRobotFlag: true
      };
      proxy.$api.queryAiApplyListPermission(data).then((res) => {
        subClassList.value = res.data.map((item) => {
          return {
            ...item,
            code: item.code,
            cateName: item.name
          };
        });
        if (!proxy.$isEmpty(res.data)) {
          onSubClassClick(res.data[0]);
        }
        isLoading.value = false;
      }, (res) => {
        isLoading.value = false;
      });
    };
    const onCheck = (item) => {
      console.log(item);
      item.check = !item.check;
      onUpdateList(item);
    };
    const onUpdateList = (item) => {
      if (item.check) {
        if (!list.value.some((obj) => obj.robotCode === item.robotCode)) {
          item.code = "";
          list.value.push(item);
        }
      } else {
        const index = list.value.findIndex((obj) => obj.robotCode === item.robotCode);
        if (index > -1) {
          list.value.splice(index, 1);
        }
      }
      emits("update:list", list.value);
    };
    __expose({
      showFn
    });
    watch(() => robotList.value, (data) => {
      console.log(data);
      data.forEach((robot) => {
        const match = list.value.find((item) => item.robotCode === robot.robotCode);
        if (match) {
          robot.check = true;
        }
      });
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Modal = resolveComponent("Modal");
      const _component_Button = resolveComponent("Button");
      const _component_Input = resolveComponent("Input");
      const _component_Tooltip = resolveComponent("Tooltip");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modalShow.value,
              "onUpdate:modelValue": ($event) => modalShow.value = $event,
              "class-name": "robotPage",
              width: "1012",
              transfer: "",
              "footer-hide": true,
              "mask-closable": false
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="robotPage-header" data-v-8708ba91${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "header-btn",
                    onClick: ($event) => toChaneType(1),
                    type: btnType.value == 1 ? "primary" : "text"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u667A\u80FD\u4F53`);
                      } else {
                        return [
                          createTextVNode("\u667A\u80FD\u4F53")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "header-btn",
                    onClick: ($event) => toChaneType(2),
                    type: btnType.value == 2 ? "primary" : "text"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`AI\u5199\u4F5C`);
                      } else {
                        return [
                          createTextVNode("AI\u5199\u4F5C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "robotPage-header" }, [
                      createVNode(_component_Button, {
                        class: "header-btn",
                        onClick: ($event) => toChaneType(1),
                        type: btnType.value == 1 ? "primary" : "text"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u667A\u80FD\u4F53")
                        ]),
                        _: 1
                      }, 8, ["onClick", "type"]),
                      createVNode(_component_Button, {
                        class: "header-btn",
                        onClick: ($event) => toChaneType(2),
                        type: btnType.value == 2 ? "primary" : "text"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("AI\u5199\u4F5C")
                        ]),
                        _: 1
                      }, 8, ["onClick", "type"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="robotPage-content" data-v-8708ba91${_scopeId2}><div class="content-left" data-v-8708ba91${_scopeId2}><div style="${ssrRenderStyle({ "padding": "12px" })}" data-v-8708ba91${_scopeId2}><div class="left-search" data-v-8708ba91${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: keyword.value,
                    "onUpdate:modelValue": ($event) => keyword.value = $event,
                    onKeyup: unref(onKeyDown),
                    placeholder: "\u641C\u7D22"
                  }, {
                    prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img style="${ssrRenderStyle({ "cursor": "pointer", "width": "20px", "height": "20px" })}"${ssrRenderAttr("src", _imports_0$2)} data-v-8708ba91${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            style: { "cursor": "pointer", "width": "20px", "height": "20px" },
                            onClick: withModifiers(unref(onKeyDown), ["stop"]),
                            src: _imports_0$2
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (btnType.value == 1) {
                    _push3(`<!--[--><div class="left-division" data-v-8708ba91${_scopeId2}></div><div class="left-list" data-v-8708ba91${_scopeId2}><!--[-->`);
                    ssrRenderList(classList.value, (item) => {
                      _push3(`<div class="${ssrRenderClass([classKey.value == item.key ? "active" : "", "list-item"])}" data-v-8708ba91${_scopeId2}><img${ssrRenderAttr("src", item.img)} data-v-8708ba91${_scopeId2}><div data-v-8708ba91${_scopeId2}>${ssrInterpolate(item.name)}</div></div>`);
                    });
                    _push3(`<!--]--></div><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="left-division" data-v-8708ba91${_scopeId2}></div></div><div class="${ssrRenderClass([btnType.value != 1 ? "h" : "", "left-robot"])}" data-v-8708ba91${_scopeId2}><div class="robot-list" data-v-8708ba91${_scopeId2}><!--[-->`);
                  ssrRenderList(subClassList.value, (item, index) => {
                    _push3(`<div class="${ssrRenderClass([categoryCode.value == item.code ? "active" : "", "list-item"])}" data-v-8708ba91${_scopeId2}>${ssrInterpolate(item.cateName)}</div>`);
                  });
                  _push3(`<!--]--></div></div></div><div class="content-right" data-v-8708ba91${_scopeId2}>`);
                  if (classKey.value == "REC" && !_ctx.$isEmpty(labelList.value)) {
                    _push3(`<div class="right-title" data-v-8708ba91${_scopeId2}><div class="${ssrRenderClass([labelCode.value == "" ? "btn-active" : "", "title-btn"])}" data-v-8708ba91${_scopeId2}>\u5168\u90E8</div><!--[-->`);
                    ssrRenderList(labelList.value, (item, index) => {
                      _push3(`<div class="${ssrRenderClass([labelCode.value == item.code ? "btn-active" : "", "title-btn"])}" data-v-8708ba91${_scopeId2}>${ssrInterpolate(item.name)}`);
                      if (item.num) {
                        _push3(`<span data-v-8708ba91${_scopeId2}>(${ssrInterpolate(item.num)})</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!_ctx.$isEmpty(robotList.value)) {
                    _push3(`<div class="robotListCom clearfix" data-v-8708ba91${_scopeId2}><!--[-->`);
                    ssrRenderList(robotList.value, (item, index) => {
                      _push3(`<div class="${ssrRenderClass([btnType.value == 2 ? "item1" : btnType.value == 3 ? "item2" : "", "item"])}" data-v-8708ba91${_scopeId2}>`);
                      if (item.robotLogo) {
                        _push3(`<img class="logo"${ssrRenderAttr("src", item.robotLogo)} alt="" data-v-8708ba91${_scopeId2}>`);
                      } else {
                        _push3(`<img class="logo"${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-8708ba91${_scopeId2}>`);
                      }
                      _push3(`<h2 class="text-hide" style="${ssrRenderStyle({ "margin-bottom": "0px", "line-height": "20px" })}" data-v-8708ba91${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_ClientOnly, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Tooltip, {
                              content: item.robotName,
                              "max-width": "200"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="text-hide" style="${ssrRenderStyle({ "max-width": "264px" })}" data-v-8708ba91${_scopeId4}>${ssrInterpolate(item.robotName)}</div>`);
                                } else {
                                  return [
                                    createVNode("div", {
                                      class: "text-hide",
                                      style: { "max-width": "264px" }
                                    }, toDisplayString(item.robotName), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Tooltip, {
                                content: item.robotName,
                                "max-width": "200"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "text-hide",
                                    style: { "max-width": "264px" }
                                  }, toDisplayString(item.robotName), 1)
                                ]),
                                _: 2
                              }, 1032, ["content"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</h2>`);
                      _push3(ssrRenderComponent(_component_ClientOnly, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Tooltip, {
                              content: item.robotDescribe,
                              "max-width": "200"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<p class="text-hide-2" style="${ssrRenderStyle({ "max-width": "264px" })}" data-v-8708ba91${_scopeId4}>${ssrInterpolate(item.robotDescribe)}</p>`);
                                } else {
                                  return [
                                    createVNode("p", {
                                      class: "text-hide-2",
                                      style: { "max-width": "264px" }
                                    }, toDisplayString(item.robotDescribe), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Tooltip, {
                                content: item.robotDescribe,
                                "max-width": "200"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", {
                                    class: "text-hide-2",
                                    style: { "max-width": "264px" }
                                  }, toDisplayString(item.robotDescribe), 1)
                                ]),
                                _: 2
                              }, 1032, ["content"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="data" data-v-8708ba91${_scopeId2}>`);
                      if (!_ctx.$isEmpty(item.clickCount)) {
                        _push3(`<div class="fl" data-v-8708ba91${_scopeId2}><img class="icon"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-8708ba91${_scopeId2}> ${ssrInterpolate(item.clickCount)}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (!_ctx.$isEmpty(item.collectCount) && item.collectCount != 0) {
                        _push3(`<div class="fl" data-v-8708ba91${_scopeId2}><img class="icon w22"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-8708ba91${_scopeId2}> ${ssrInterpolate(item.collectCount)}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (!_ctx.$isEmpty(item.companyName)) {
                        _push3(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-8708ba91${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Tooltip, {
                                content: item.companyName,
                                "max-width": "200"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-8708ba91${_scopeId4}><span class="gray" data-v-8708ba91${_scopeId4}>@</span><span class="companyName text-hide" style="${ssrRenderStyle({ "max-width": !_ctx.$isEmpty(item.collectCount) && item.collectCount != 0 ? "100px" : "130px" })}" data-v-8708ba91${_scopeId4}>${ssrInterpolate(item.companyName)}</span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                        createVNode("span", { class: "gray" }, "@"),
                                        createVNode("span", {
                                          class: "companyName text-hide",
                                          style: { "max-width": !_ctx.$isEmpty(item.collectCount) && item.collectCount != 0 ? "100px" : "130px" }
                                        }, toDisplayString(item.companyName), 5)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_Tooltip, {
                                  content: item.companyName,
                                  "max-width": "200"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                      createVNode("span", { class: "gray" }, "@"),
                                      createVNode("span", {
                                        class: "companyName text-hide",
                                        style: { "max-width": !_ctx.$isEmpty(item.collectCount) && item.collectCount != 0 ? "100px" : "130px" }
                                      }, toDisplayString(item.companyName), 5)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["content"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="btn" data-v-8708ba91${_scopeId2}>`);
                      if (!item.check) {
                        _push3(`<span class="blue" data-v-8708ba91${_scopeId2}>\u6DFB\u52A0</span>`);
                      } else {
                        _push3(`<!--[--><span class="gray" data-v-8708ba91${_scopeId2}>\u5DF2\u6DFB\u52A0</span><span class="red" data-v-8708ba91${_scopeId2}>\u79FB\u9664</span><!--]-->`);
                      }
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (isLoading.value) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { position: "center" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.$isEmpty(robotList.value) && !isLoading.value) {
                    _push3(ssrRenderComponent(unref(noDataCom), null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "robotPage-content" }, [
                      createVNode("div", { class: "content-left" }, [
                        createVNode("div", { style: { "padding": "12px" } }, [
                          createVNode("div", { class: "left-search" }, [
                            createVNode(_component_Input, {
                              modelValue: keyword.value,
                              "onUpdate:modelValue": ($event) => keyword.value = $event,
                              onKeyup: withKeys(unref(onKeyDown), ["enter"]),
                              placeholder: "\u641C\u7D22"
                            }, {
                              prefix: withCtx(() => [
                                createVNode("img", {
                                  style: { "cursor": "pointer", "width": "20px", "height": "20px" },
                                  onClick: withModifiers(unref(onKeyDown), ["stop"]),
                                  src: _imports_0$2
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                          ]),
                          btnType.value == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", { class: "left-division" }),
                            createVNode("div", { class: "left-list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(classList.value, (item) => {
                                return openBlock(), createBlock("div", {
                                  class: ["list-item", classKey.value == item.key ? "active" : ""],
                                  onClick: ($event) => onClassClick(item.key)
                                }, [
                                  createVNode("img", {
                                    src: item.img
                                  }, null, 8, ["src"]),
                                  createVNode("div", null, toDisplayString(item.name), 1)
                                ], 10, ["onClick"]);
                              }), 256))
                            ])
                          ], 64)) : createCommentVNode("", true),
                          createVNode("div", { class: "left-division" })
                        ]),
                        createVNode("div", {
                          class: ["left-robot", btnType.value != 1 ? "h" : ""]
                        }, [
                          createVNode("div", { class: "robot-list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(subClassList.value, (item, index) => {
                              return openBlock(), createBlock("div", {
                                class: ["list-item", categoryCode.value == item.code ? "active" : ""],
                                key: index,
                                onClick: ($event) => onSubClassClick(item)
                              }, toDisplayString(item.cateName), 11, ["onClick"]);
                            }), 128))
                          ])
                        ], 2)
                      ]),
                      createVNode("div", { class: "content-right" }, [
                        classKey.value == "REC" && !_ctx.$isEmpty(labelList.value) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "right-title"
                        }, [
                          createVNode("div", {
                            class: ["title-btn", labelCode.value == "" ? "btn-active" : ""],
                            onClick: ($event) => onLabel({ code: "" })
                          }, "\u5168\u90E8", 10, ["onClick"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(labelList.value, (item, index) => {
                            return openBlock(), createBlock("div", {
                              class: ["title-btn", labelCode.value == item.code ? "btn-active" : ""],
                              key: index,
                              onClick: ($event) => onLabel(item)
                            }, [
                              createTextVNode(toDisplayString(item.name), 1),
                              item.num ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(item.num) + ")", 1)) : createCommentVNode("", true)
                            ], 10, ["onClick"]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        !_ctx.$isEmpty(robotList.value) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "robotListCom clearfix"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (item, index) => {
                            return openBlock(), createBlock("div", {
                              class: ["item", btnType.value == 2 ? "item1" : btnType.value == 3 ? "item2" : ""],
                              key: index
                            }, [
                              item.robotLogo ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "logo",
                                src: item.robotLogo,
                                alt: ""
                              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                class: "logo",
                                src: _imports_1$2,
                                alt: ""
                              })),
                              createVNode("h2", {
                                class: "text-hide",
                                style: { "margin-bottom": "0px", "line-height": "20px" }
                              }, [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Tooltip, {
                                      content: item.robotName,
                                      "max-width": "200"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "text-hide",
                                          style: { "max-width": "264px" }
                                        }, toDisplayString(item.robotName), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["content"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Tooltip, {
                                    content: item.robotDescribe,
                                    "max-width": "200"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", {
                                        class: "text-hide-2",
                                        style: { "max-width": "264px" }
                                      }, toDisplayString(item.robotDescribe), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["content"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "data" }, [
                                !_ctx.$isEmpty(item.clickCount) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "fl"
                                }, [
                                  createVNode("img", {
                                    class: "icon",
                                    src: _imports_1$3,
                                    alt: ""
                                  }),
                                  createTextVNode(" " + toDisplayString(item.clickCount), 1)
                                ])) : createCommentVNode("", true),
                                !_ctx.$isEmpty(item.collectCount) && item.collectCount != 0 ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "fl"
                                }, [
                                  createVNode("img", {
                                    class: "icon w22",
                                    src: _imports_2$1,
                                    alt: ""
                                  }),
                                  createTextVNode(" " + toDisplayString(item.collectCount), 1)
                                ])) : createCommentVNode("", true),
                                !_ctx.$isEmpty(item.companyName) ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  style: { "display": "flex", "align-items": "center" }
                                }, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Tooltip, {
                                        content: item.companyName,
                                        "max-width": "200"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                            createVNode("span", { class: "gray" }, "@"),
                                            createVNode("span", {
                                              class: "companyName text-hide",
                                              style: { "max-width": !_ctx.$isEmpty(item.collectCount) && item.collectCount != 0 ? "100px" : "130px" }
                                            }, toDisplayString(item.companyName), 5)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["content"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "btn" }, [
                                !item.check ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "blue",
                                  onClick: ($event) => onCheck(item)
                                }, "\u6DFB\u52A0", 8, ["onClick"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createVNode("span", {
                                    class: "gray",
                                    onClick: ($event) => onCheck(item)
                                  }, "\u5DF2\u6DFB\u52A0", 8, ["onClick"]),
                                  createVNode("span", {
                                    class: "red",
                                    onClick: ($event) => onCheck(item)
                                  }, "\u79FB\u9664", 8, ["onClick"])
                                ], 64))
                              ])
                            ], 2);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        isLoading.value ? (openBlock(), createBlock(unref(_sfc_main$3), {
                          key: 2,
                          position: "center"
                        })) : createCommentVNode("", true),
                        _ctx.$isEmpty(robotList.value) && !isLoading.value ? (openBlock(), createBlock(unref(noDataCom), { key: 3 })) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                modelValue: modalShow.value,
                "onUpdate:modelValue": ($event) => modalShow.value = $event,
                "class-name": "robotPage",
                width: "1012",
                transfer: "",
                "footer-hide": true,
                "mask-closable": false
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "robotPage-header" }, [
                    createVNode(_component_Button, {
                      class: "header-btn",
                      onClick: ($event) => toChaneType(1),
                      type: btnType.value == 1 ? "primary" : "text"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u667A\u80FD\u4F53")
                      ]),
                      _: 1
                    }, 8, ["onClick", "type"]),
                    createVNode(_component_Button, {
                      class: "header-btn",
                      onClick: ($event) => toChaneType(2),
                      type: btnType.value == 2 ? "primary" : "text"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("AI\u5199\u4F5C")
                      ]),
                      _: 1
                    }, 8, ["onClick", "type"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "robotPage-content" }, [
                    createVNode("div", { class: "content-left" }, [
                      createVNode("div", { style: { "padding": "12px" } }, [
                        createVNode("div", { class: "left-search" }, [
                          createVNode(_component_Input, {
                            modelValue: keyword.value,
                            "onUpdate:modelValue": ($event) => keyword.value = $event,
                            onKeyup: withKeys(unref(onKeyDown), ["enter"]),
                            placeholder: "\u641C\u7D22"
                          }, {
                            prefix: withCtx(() => [
                              createVNode("img", {
                                style: { "cursor": "pointer", "width": "20px", "height": "20px" },
                                onClick: withModifiers(unref(onKeyDown), ["stop"]),
                                src: _imports_0$2
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                        ]),
                        btnType.value == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", { class: "left-division" }),
                          createVNode("div", { class: "left-list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(classList.value, (item) => {
                              return openBlock(), createBlock("div", {
                                class: ["list-item", classKey.value == item.key ? "active" : ""],
                                onClick: ($event) => onClassClick(item.key)
                              }, [
                                createVNode("img", {
                                  src: item.img
                                }, null, 8, ["src"]),
                                createVNode("div", null, toDisplayString(item.name), 1)
                              ], 10, ["onClick"]);
                            }), 256))
                          ])
                        ], 64)) : createCommentVNode("", true),
                        createVNode("div", { class: "left-division" })
                      ]),
                      createVNode("div", {
                        class: ["left-robot", btnType.value != 1 ? "h" : ""]
                      }, [
                        createVNode("div", { class: "robot-list" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(subClassList.value, (item, index) => {
                            return openBlock(), createBlock("div", {
                              class: ["list-item", categoryCode.value == item.code ? "active" : ""],
                              key: index,
                              onClick: ($event) => onSubClassClick(item)
                            }, toDisplayString(item.cateName), 11, ["onClick"]);
                          }), 128))
                        ])
                      ], 2)
                    ]),
                    createVNode("div", { class: "content-right" }, [
                      classKey.value == "REC" && !_ctx.$isEmpty(labelList.value) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "right-title"
                      }, [
                        createVNode("div", {
                          class: ["title-btn", labelCode.value == "" ? "btn-active" : ""],
                          onClick: ($event) => onLabel({ code: "" })
                        }, "\u5168\u90E8", 10, ["onClick"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(labelList.value, (item, index) => {
                          return openBlock(), createBlock("div", {
                            class: ["title-btn", labelCode.value == item.code ? "btn-active" : ""],
                            key: index,
                            onClick: ($event) => onLabel(item)
                          }, [
                            createTextVNode(toDisplayString(item.name), 1),
                            item.num ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(item.num) + ")", 1)) : createCommentVNode("", true)
                          ], 10, ["onClick"]);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      !_ctx.$isEmpty(robotList.value) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "robotListCom clearfix"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (item, index) => {
                          return openBlock(), createBlock("div", {
                            class: ["item", btnType.value == 2 ? "item1" : btnType.value == 3 ? "item2" : ""],
                            key: index
                          }, [
                            item.robotLogo ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "logo",
                              src: item.robotLogo,
                              alt: ""
                            }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                              key: 1,
                              class: "logo",
                              src: _imports_1$2,
                              alt: ""
                            })),
                            createVNode("h2", {
                              class: "text-hide",
                              style: { "margin-bottom": "0px", "line-height": "20px" }
                            }, [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Tooltip, {
                                    content: item.robotName,
                                    "max-width": "200"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "text-hide",
                                        style: { "max-width": "264px" }
                                      }, toDisplayString(item.robotName), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["content"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_Tooltip, {
                                  content: item.robotDescribe,
                                  "max-width": "200"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", {
                                      class: "text-hide-2",
                                      style: { "max-width": "264px" }
                                    }, toDisplayString(item.robotDescribe), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["content"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "data" }, [
                              !_ctx.$isEmpty(item.clickCount) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "fl"
                              }, [
                                createVNode("img", {
                                  class: "icon",
                                  src: _imports_1$3,
                                  alt: ""
                                }),
                                createTextVNode(" " + toDisplayString(item.clickCount), 1)
                              ])) : createCommentVNode("", true),
                              !_ctx.$isEmpty(item.collectCount) && item.collectCount != 0 ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "fl"
                              }, [
                                createVNode("img", {
                                  class: "icon w22",
                                  src: _imports_2$1,
                                  alt: ""
                                }),
                                createTextVNode(" " + toDisplayString(item.collectCount), 1)
                              ])) : createCommentVNode("", true),
                              !_ctx.$isEmpty(item.companyName) ? (openBlock(), createBlock("div", {
                                key: 2,
                                style: { "display": "flex", "align-items": "center" }
                              }, [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Tooltip, {
                                      content: item.companyName,
                                      "max-width": "200"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                          createVNode("span", { class: "gray" }, "@"),
                                          createVNode("span", {
                                            class: "companyName text-hide",
                                            style: { "max-width": !_ctx.$isEmpty(item.collectCount) && item.collectCount != 0 ? "100px" : "130px" }
                                          }, toDisplayString(item.companyName), 5)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["content"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "btn" }, [
                              !item.check ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "blue",
                                onClick: ($event) => onCheck(item)
                              }, "\u6DFB\u52A0", 8, ["onClick"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode("span", {
                                  class: "gray",
                                  onClick: ($event) => onCheck(item)
                                }, "\u5DF2\u6DFB\u52A0", 8, ["onClick"]),
                                createVNode("span", {
                                  class: "red",
                                  onClick: ($event) => onCheck(item)
                                }, "\u79FB\u9664", 8, ["onClick"])
                              ], 64))
                            ])
                          ], 2);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      isLoading.value ? (openBlock(), createBlock(unref(_sfc_main$3), {
                        key: 2,
                        position: "center"
                      })) : createCommentVNode("", true),
                      _ctx.$isEmpty(robotList.value) && !isLoading.value ? (openBlock(), createBlock(unref(noDataCom), { key: 3 })) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/robotPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8708ba91"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXxJREFUaEPtVjtOxDAUtBOOAEXiK1FQQLHlFpxqiy0poKDgSvkJjrCykVeJZBAm47z3hFa8lNZ4Mh//rLnwz164fqMG/rpBbUAbICagS4gYIHm6NkCOkEigDRADJE/XBsgREgn+TwPOuVvv/TEGZq197Pv+lRjel+lt296FEA5x0Hu/n6bpDeGHG2ia5t0Ycz2TnkIIu3EcX5CfrGGcc/fe+ydjzNWM/RiG4WZt3jlMBBQx3wzEIRYTP4iP3PwG5oqfk5TIJjLiT9baB3SJwg1EtbkfbllOOa6qqnZd18FLs8gAlwku8UV7IN0rlCY4xW82sLUJbvEkA6UmJMSTDaAmpMSzGFgzUdd1vFnTS+p8/JaeNrn7qvgUyhHlUp7xyw3LKp6tgcVUxkTqmS35hZStAcAEu3j2Bn4xISJezEAkTp/HEs9vsSWEvm65cOx7gEsYyqMG0KSkcNqAVLIorzaAJiWF0wakkkV5tQE0KSmcNiCVLMqrDaBJSeE+AQYlBkCUP/B+AAAAAElFTkSuQmCC";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAohJREFUWEftmD9oE3EUxz8vafUu1NKhg4ODg0KHDg3orqBDcXGog1RRcVEUeycWcdahYOFSdOggqDSdnMShgoIFR4V0zOAQ0LFgqSUXaXNPLv8LyZnkklDK3XbHe9/f577v3vF7P+GAX3LA+YgAw1YocrD/Dr5Wgy33PhKbRXQCxQi56B6wgeoqY+Yyt6QQpBdcYsc9SYw1lImQUM3TRbJ4Oo1t5lrptwb0ndsuZPoGVyXyIUePJls52RrQyVuIOLU380uCvILiFhL/CowA62jRDnY3/gzhUilGi0kYGgfvJiKzDdrz2InFZjqtAVPuN+BMWVhXsRPXagKpwm/QMVTfYycuBwI67huEG6UYy6yv5+TTdUjZwDKSnQLuAkNlQLmIbXzuLaB7DuFLSVMoMGeanQJqvQTFJPbIRh3Q/QmcAHKozkPc78wWjeA9BSaBHSzzWC3I2ZlC4pnafaO7DUpBJQ4AzC+APO6os0WWmTPuDgaw1OF/V1CdaQtS+MiQcYV7sjMYwOoqS38m8Y6cCobcze37PKrBfS1xW7b9JygCDOti5OCBdrC8kXiBp6fb4hQ2iWHxIPFrML8ZJz+DyLu24OpBT7DMhcEALm6PMzz8AeV4m5CbeHKVh8aPwQC2SRUYFnVxWBcPv4NLrlub4JTz2OZ6WNP25TuFC4h+qjzbwzKHm+kH7AcLGdCpSlIay7zeU8CUuwJUx4jvWObZzgCd/CNEnjckpdHiW2AzHGh8DOF2A5w/89jYiVRngOVNaQbV/szEVRohy6jRxdjpC5QGd1nrG6QP59Hl4F59w/LRx53KiOh/k+VJr9vLn+BUsqjnH328DHf00S1ED/Oi47ewZkYOHnoH/wFMXlU4BNipYgAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "deploy",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const differencesList = ref();
    const robotPageRef = ref();
    const searchRobotRef = ref(null);
    const addMemberRef = ref();
    const actionType = ref("");
    const router = useRouter();
    getRouting();
    const { proxy } = getCurrentInstance();
    const exclusiveRobotRef = ref(null);
    const sPromptRef = ref();
    const loading = ref(false);
    const tableLoading = ref(false);
    const pageType = ref(1);
    const forbiddenList = ref([]);
    const form = ref({
      name: "",
      backgroundImage: "",
      backgroundCode: "",
      showBackgroundImageFlag: true,
      workbenchCategoryList: [{
        name: t("aiEnterprise.deploy.\u5E38\u7528"),
        seq: 0,
        applyCount: 0,
        dataStatus: "NORMAL",
        getWorkbenchChunkList: []
      }],
      permissionList: [],
      bizType: ""
    });
    ref([]);
    const selectCodeStr = ref("");
    const className = ref("");
    const popLoading = ref(false);
    const consumeEnergy = ref("");
    const columns = ref([
      { title: t("aiEnterprise.deploy.\u5206\u7C7B\u540D\u79F0"), key: "name", slot: "name" },
      { title: t("aiEnterprise.deploy.\u5DF2\u6DFB\u52A0\u5E94\u7528"), key: "applyCount", slot: "num" },
      { title: t("aiEnterprise.deploy.\u662F\u5426\u663E\u793A"), slot: "status" },
      { title: t("aiEnterprise.deploy.\u64CD\u4F5C"), slot: "action" }
    ]);
    const uploadSuccess = (e) => {
      form.value.backgroundImage = e[0].url;
      form.value.backgroundCode = e[0].code;
    };
    const robotIndex = ref(0);
    const toAddRobot = (list, idx, type) => {
      robotIndex.value = idx;
      forbiddenList.value = [];
      list.forEach((item) => {
        forbiddenList.value.push(item.robotCode);
      });
      if (type == "add") {
        robotPageRef.value.showFn();
      } else {
        searchRobotRef.value.showFn(list);
      }
    };
    const getAddRobot = (list) => {
      list.forEach((item) => {
        const chunkList = form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList;
        const exists = chunkList.some(
          (subItem) => subItem.robotCode === item.robotCode
        );
        if (!exists) {
          chunkList.push({
            robotCode: item.robotCode,
            robotLogo: item.robotLogo,
            robotName: item.robotName,
            robotDescribe: item.robotRemark
          });
        }
      });
      form.value.workbenchCategoryList[robotIndex.value].applyCount = form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList.length;
    };
    const onDragDrop = (index1, index2) => {
      swapElements(form.value.workbenchCategoryList, index1, index2);
    };
    const swapElements = (arr, index1, index2) => {
      if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
      } else {
        console.error("Invalid indices");
      }
      return arr;
    };
    const toAction = (type, idx, record) => {
      if (form.value.workbenchCategoryList.length >= 10) {
        proxy.$Message.error("\u6700\u591A\u6DFB\u52A010\u4E2A\u5206\u7C7B");
      }
      actionType.value = type;
      robotIndex.value = idx ? idx : 0;
      className.value = (record == null ? void 0 : record.name) ? record.name : "";
      popLoading.value = false;
      sPromptRef.value.showFn();
    };
    const toConfirm = () => {
      if (actionType.value == "add") {
        form.value.workbenchCategoryList.push({
          name: className.value,
          seq: 0,
          applyCount: 0,
          dataStatus: "NORMAL",
          getWorkbenchChunkList: []
        });
      }
      if (actionType.value == "edit") {
        form.value.workbenchCategoryList[robotIndex.value].name = className.value;
      }
      if (actionType.value == "delete") {
        form.value.workbenchCategoryList.splice(robotIndex.value, 1);
      }
      popLoading.value = true;
    };
    const onSubmit = () => {
      if (proxy.$isEmpty(form.value.name)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u5DE5\u4F5C\u53F0\u540D\u79F0");
        return;
      }
      let apiName = "saveWorkbench";
      if (!proxy.$isEmpty(router.currentRoute.value.query.code)) {
        apiName = "saveWorkbench";
      }
      loading.value = true;
      form.value.workbenchCategoryList.forEach((item, idx) => {
        item.seq = idx;
      });
      form.value.permissionList = differencesList.value;
      if (router.currentRoute.value.query.bizType) {
        form.value.bizType = router.currentRoute.value.query.bizType;
      }
      proxy.$api[apiName](form.value).then((res) => {
        proxy.$Message.success("\u4FDD\u5B58\u6210\u529F");
        loading.value = false;
        if (router.currentRoute.value.query.bizType) {
          router.push("/ai/app/often?code=" + res.data + "&bizType=" + router.currentRoute.value.query.bizType);
        } else {
          router.push("/ai/app/often?code=" + res.data + "&bizType=WORKBENCH");
        }
      }).catch(() => {
        loading.value = false;
      });
    };
    const getMember = (e) => {
      selectCodeStr.value = "";
      e.forEach((item) => {
        form.value.permissionList = JSON.parse(JSON.stringify(e));
        if (selectCodeStr.value) {
          selectCodeStr.value = selectCodeStr.value + "," + item.name;
        } else {
          selectCodeStr.value = item.name;
        }
      });
    };
    const getWhole = (e) => {
      router.replace({
        path: router.currentRoute.value.path,
        query: {
          code: router.currentRoute.value.query.code,
          bizType: e
        }
      });
    };
    const getDifferences = (e) => {
      differencesList.value = JSON.parse(JSON.stringify(e));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _component_Input = resolveComponent("Input");
      const _component_ossUploaderNew = __nuxt_component_0$1;
      const _component_Icon = resolveComponent("Icon");
      const _component_Table = resolveComponent("Table");
      const _component_Switch = resolveComponent("Switch");
      const _component_sPrompt = __nuxt_component_1;
      const _component_exclusiveRobot = __nuxt_component_2;
      const _component_addMember2 = __nuxt_component_3;
      const _component_robotPage = __nuxt_component_4;
      _push(`<!--[--><div class="deploy" data-v-3bfaf5b3><div class="deploy-top" data-v-3bfaf5b3><div class="top-left" data-v-3bfaf5b3>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "backBtn",
        onClick: ($event) => unref(router).go(-1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="btn" data-v-3bfaf5b3${_scopeId}><img${ssrRenderAttr("src", _imports_0)} data-v-3bfaf5b3${_scopeId}><div data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u8FD4\u56DE"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "btn" }, [
                createVNode("img", { src: _imports_0 }),
                createVNode("div", null, toDisplayString(_ctx.$t("public.\u8FD4\u56DE")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="left-name" data-v-3bfaf5b3>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u5DE5\u4F5C\u53F0\u9875\u9762"))}</div></div><div class="top-content" data-v-3bfaf5b3>`);
      _push(ssrRenderComponent(_component_Button, {
        type: pageType.value == 1 ? "primary" : "text",
        class: "btn",
        onClick: ($event) => pageType.value = 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u9875\u9762\u914D\u7F6E"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("aiEnterprise.deploy.\u9875\u9762\u914D\u7F6E")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div style="${ssrRenderStyle({ "width": "8px" })}" data-v-3bfaf5b3></div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: pageType.value == 2 ? "primary" : "text",
        class: "btn",
        onClick: ($event) => pageType.value = 2
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u5206\u7C7B\u914D\u7F6E"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("aiEnterprise.deploy.\u5206\u7C7B\u914D\u7F6E")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="top-right" data-v-3bfaf5b3>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "btn",
        onClick: ($event) => unref(router).go(-1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("public.\u53D6\u6D88"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("public.\u53D6\u6D88")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div style="${ssrRenderStyle({ "width": "12px" })}" data-v-3bfaf5b3></div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "primary",
        class: "btn",
        loading: loading.value,
        ghost: "",
        onClick: onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="right-btn" data-v-3bfaf5b3${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-3bfaf5b3${_scopeId}><div data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u4FDD\u5B58\u5E76\u53D1\u5E03"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "right-btn" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                }),
                createVNode("div", null, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u4FDD\u5B58\u5E76\u53D1\u5E03")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="deploy-content" style="${ssrRenderStyle({ "padding": pageType.value == 1 ? "36px 0" : "36px 169px" })}" data-v-3bfaf5b3>`);
      if (pageType.value == 1) {
        _push(`<!--[--><div class="content-top" data-v-3bfaf5b3><div class="top-item" data-v-3bfaf5b3><div class="name" data-v-3bfaf5b3>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u5DE5\u4F5C\u53F0\u540D\u79F0"))}</div>`);
        _push(ssrRenderComponent(_component_Input, {
          class: "input",
          modelValue: form.value.name,
          "onUpdate:modelValue": ($event) => form.value.name = $event,
          placeholder: _ctx.$t("aiEnterprise.deploy.\u8BF7\u8F93\u5165")
        }, null, _parent));
        _push(`</div></div><div class="aiArea" data-v-3bfaf5b3><div class="aiArea-content" data-v-3bfaf5b3><div class="banner" data-v-3bfaf5b3>`);
        if (!form.value.showBackgroundImageFlag) {
          _push(`<div class="shadow" data-v-3bfaf5b3><div class="shadow-tag" data-v-3bfaf5b3><img${ssrRenderAttr("src", _imports_2$2)} data-v-3bfaf5b3><div data-v-3bfaf5b3>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u4E0D\u663E\u793A\u56FE\u7247"))}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (form.value.backgroundImage) {
          _push(`<img class="pic"${ssrRenderAttr("src", form.value.backgroundImage)} alt="" data-v-3bfaf5b3>`);
        } else {
          _push(`<img class="pic"${ssrRenderAttr("src", _imports_3)} alt="" data-v-3bfaf5b3>`);
        }
        _push(`<div class="oper" data-v-3bfaf5b3>`);
        _push(ssrRenderComponent(_component_ossUploaderNew, {
          class: "fl",
          id: "cImage-upload",
          format: ["jpg", "jpeg", "png"],
          limit: 1,
          maxSize: 10,
          modeType: "freedom",
          onUploadSuccess: uploadSuccess
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="item" data-v-3bfaf5b3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                class: "icon",
                type: "ios-images"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u4FEE\u6539\u56FE\u7247"))}</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_Icon, {
                    class: "icon",
                    type: "ios-images"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("aiEnterprise.deploy.\u4FEE\u6539\u56FE\u7247")), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="item" data-v-3bfaf5b3>`);
        if (form.value.showBackgroundImageFlag) {
          _push(ssrRenderComponent(_component_Icon, {
            class: "icon",
            type: "md-eye"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            class: "icon",
            type: "md-eye-off"
          }, null, _parent));
        }
        _push(` ${ssrInterpolate(form.value.showBackgroundImageFlag ? _ctx.$t("aiEnterprise.deploy.\u9690\u85CF\u56FE\u7247") : _ctx.$t("aiEnterprise.deploy.\u663E\u793A\u56FE\u7247"))}</div></div></div><div class="list-area" data-v-3bfaf5b3>`);
        _push(ssrRenderComponent(unref(Draggable), {
          modelValue: form.value.workbenchCategoryList,
          "onUpdate:modelValue": ($event) => form.value.workbenchCategoryList = $event,
          "item-key": "id"
        }, {
          item: withCtx(({ element, index: idx }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (element.dataStatus == "NORMAL") {
                _push2(`<div class="list clearfix" data-v-3bfaf5b3${_scopeId}><div class="title clearfix" data-v-3bfaf5b3${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  class: "icon",
                  type: "md-menu"
                }, null, _parent2, _scopeId));
                _push2(`<h2 data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(element.name)}</h2><div class="item" data-v-3bfaf5b3${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-3bfaf5b3${_scopeId}></div><div class="item" data-v-3bfaf5b3${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-3bfaf5b3${_scopeId}></div></div><div class="add clearfix" data-v-3bfaf5b3${_scopeId}><div class="item" data-v-3bfaf5b3${_scopeId}><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-3bfaf5b3${_scopeId}><h3 data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u81EA\u5B9A\u4E49\u6DFB\u52A0"))}</h3><p data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u652F\u6301\u667A\u80FD\u4F53"))}</p></div><div class="item purple" data-v-3bfaf5b3${_scopeId}><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-3bfaf5b3${_scopeId}><h3 data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u667A\u80FD\u5339\u914D"))}</h3><p data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u6839\u636E\u667A\u80FD"))}</p><div class="electric-tag" data-v-3bfaf5b3${_scopeId}>-${ssrInterpolate(consumeEnergy.value)}${ssrInterpolate(_ctx.$t("aiChat.\u7535\u91CF"))}</div></div></div><ul class="robot-list" data-v-3bfaf5b3${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Draggable), {
                  modelValue: element.getWorkbenchChunkList,
                  "onUpdate:modelValue": ($event) => element.getWorkbenchChunkList = $event,
                  draggable: ".robot",
                  group: "robot"
                }, {
                  item: withCtx(({ element: subElement, index }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<li class="robot" data-v-3bfaf5b3${_scopeId2}><img class="del"${ssrRenderAttr("src", _imports_8)} alt="" data-v-3bfaf5b3${_scopeId2}>`);
                      if (subElement.robotLogo) {
                        _push3(`<img class="robot-logo"${ssrRenderAttr("src", subElement.robotLogo)} alt="" data-v-3bfaf5b3${_scopeId2}>`);
                      } else {
                        _push3(`<img class="robot-logo"${ssrRenderAttr("src", _imports_1$2)} data-v-3bfaf5b3${_scopeId2}>`);
                      }
                      _push3(`<h3${ssrRenderAttr("title", subElement.robotName)} data-v-3bfaf5b3${_scopeId2}>${ssrInterpolate(subElement.robotName)}</h3><p${ssrRenderAttr("title", subElement.robotDescribe)} data-v-3bfaf5b3${_scopeId2}>${ssrInterpolate(subElement.robotDescribe)}</p></li>`);
                    } else {
                      return [
                        createVNode("li", { class: "robot" }, [
                          createVNode("img", {
                            class: "del",
                            onClick: ($event) => element.getWorkbenchChunkList.splice(index, 1),
                            src: _imports_8,
                            alt: ""
                          }, null, 8, ["onClick"]),
                          subElement.robotLogo ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "robot-logo",
                            src: subElement.robotLogo,
                            alt: ""
                          }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                            key: 1,
                            class: "robot-logo",
                            src: _imports_1$2
                          })),
                          createVNode("h3", {
                            title: subElement.robotName
                          }, toDisplayString(subElement.robotName), 9, ["title"]),
                          createVNode("p", {
                            title: subElement.robotDescribe
                          }, toDisplayString(subElement.robotDescribe), 9, ["title"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</ul></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                element.dataStatus == "NORMAL" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "list clearfix"
                }, [
                  createVNode("div", { class: "title clearfix" }, [
                    createVNode(_component_Icon, {
                      class: "icon",
                      type: "md-menu"
                    }),
                    createVNode("h2", null, toDisplayString(element.name), 1),
                    createVNode("div", {
                      class: "item",
                      onClick: ($event) => toAction("edit", idx, element)
                    }, [
                      createVNode("img", {
                        src: _imports_4,
                        alt: ""
                      })
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "item",
                      onClick: ($event) => toAction("delete", idx, element)
                    }, [
                      createVNode("img", {
                        src: _imports_5,
                        alt: ""
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "add clearfix" }, [
                    createVNode("div", {
                      class: "item",
                      onClick: ($event) => toAddRobot(element.getWorkbenchChunkList, idx, "add")
                    }, [
                      createVNode("img", {
                        src: _imports_6,
                        alt: ""
                      }),
                      createVNode("h3", null, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u81EA\u5B9A\u4E49\u6DFB\u52A0")), 1),
                      createVNode("p", null, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u652F\u6301\u667A\u80FD\u4F53")), 1)
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "item purple",
                      onClick: ($event) => toAddRobot(element.getWorkbenchChunkList, idx, "search")
                    }, [
                      createVNode("img", {
                        src: _imports_7,
                        alt: ""
                      }),
                      createVNode("h3", null, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u667A\u80FD\u5339\u914D")), 1),
                      createVNode("p", null, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u6839\u636E\u667A\u80FD")), 1),
                      createVNode("div", { class: "electric-tag" }, "-" + toDisplayString(consumeEnergy.value) + toDisplayString(_ctx.$t("aiChat.\u7535\u91CF")), 1)
                    ], 8, ["onClick"])
                  ]),
                  createVNode("ul", { class: "robot-list" }, [
                    createVNode(unref(Draggable), {
                      modelValue: element.getWorkbenchChunkList,
                      "onUpdate:modelValue": ($event) => element.getWorkbenchChunkList = $event,
                      draggable: ".robot",
                      group: "robot"
                    }, {
                      item: withCtx(({ element: subElement, index }) => [
                        createVNode("li", { class: "robot" }, [
                          createVNode("img", {
                            class: "del",
                            onClick: ($event) => element.getWorkbenchChunkList.splice(index, 1),
                            src: _imports_8,
                            alt: ""
                          }, null, 8, ["onClick"]),
                          subElement.robotLogo ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "robot-logo",
                            src: subElement.robotLogo,
                            alt: ""
                          }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                            key: 1,
                            class: "robot-logo",
                            src: _imports_1$2
                          })),
                          createVNode("h3", {
                            title: subElement.robotName
                          }, toDisplayString(subElement.robotName), 9, ["title"]),
                          createVNode("p", {
                            title: subElement.robotDescribe
                          }, toDisplayString(subElement.robotDescribe), 9, ["title"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == 2) {
        _push(`<div class="classifyPage" data-v-3bfaf5b3><div class="classifyPage-top" data-v-3bfaf5b3><span data-v-3bfaf5b3>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u6700\u591A\u53EF\u6DFB\u52A0"))}</span><span class="blue" data-v-3bfaf5b3>10</span><span data-v-3bfaf5b3>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u4E2A\u5206\u7C7B\u53EF\u8FDB\u884C"))}</span><span class="blue" data-v-3bfaf5b3>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u62D6\u52A8\u4FEE\u6539"))}</span><span data-v-3bfaf5b3>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u6392\u5E8F"))}</span></div><div class="classifyPage-table" data-v-3bfaf5b3>`);
        _push(ssrRenderComponent(_component_Table, {
          columns: columns.value,
          data: form.value.workbenchCategoryList,
          draggable: "",
          loading: tableLoading.value,
          "max-height": "500",
          border: form.value.workbenchCategoryList.length > 0,
          onOnDragDrop: onDragDrop
        }, {
          name: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="table-name" data-v-3bfaf5b3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                type: "md-menu",
                class: "ico"
              }, null, _parent2, _scopeId));
              _push2(`<div class="name" data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(row.name)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "table-name" }, [
                  createVNode(_component_Icon, {
                    type: "md-menu",
                    class: "ico"
                  }),
                  createVNode("div", { class: "name" }, toDisplayString(row.name), 1)
                ])
              ];
            }
          }),
          num: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="table-num" data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(form.value.workbenchCategoryList[index].getWorkbenchChunkList.length)}</div>`);
            } else {
              return [
                createVNode("div", { class: "table-num" }, toDisplayString(form.value.workbenchCategoryList[index].getWorkbenchChunkList.length), 1)
              ];
            }
          }),
          status: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Switch, {
                "true-value": "NORMAL",
                "false-value": "DISABLE",
                modelValue: form.value.workbenchCategoryList[index].dataStatus,
                "onUpdate:modelValue": ($event) => form.value.workbenchCategoryList[index].dataStatus = $event
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Switch, {
                  "true-value": "NORMAL",
                  "false-value": "DISABLE",
                  modelValue: form.value.workbenchCategoryList[index].dataStatus,
                  "onUpdate:modelValue": ($event) => form.value.workbenchCategoryList[index].dataStatus = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          action: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="table-action" data-v-3bfaf5b3${_scopeId}><div class="action-item" data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u7F16\u8F91\u540D\u79F0"))}</div><div class="action-item delete-ico" data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u5220\u9664"))}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "table-action" }, [
                  createVNode("div", {
                    class: "action-item",
                    onClick: ($event) => toAction("edit", index, row)
                  }, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u7F16\u8F91\u540D\u79F0")), 9, ["onClick"]),
                  createVNode("div", {
                    class: "action-item delete-ico",
                    onClick: ($event) => toAction("delete", index, row)
                  }, toDisplayString(_ctx.$t("public.\u5220\u9664")), 9, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="table-bottom" data-v-3bfaf5b3><div class="add" data-v-3bfaf5b3>+ ${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u521B\u5EFA\u5206\u7C7B"))}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_sPrompt, {
        ref_key: "sPromptRef",
        ref: sPromptRef,
        onOk: toConfirm,
        title: actionType.value == "edit" ? _ctx.$t("public.\u7F16\u8F91") : actionType.value == "add" ? _ctx.$t("public.\u6DFB\u52A0") : actionType.value == "delete" ? _ctx.$t("public.\u5220\u9664") : ""
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (actionType.value == "delete") {
              _push2(`<div class="delete-content" data-v-3bfaf5b3${_scopeId}><div class="name" data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u5206\u7C7B"))}\uFF1F</div><div class="sub" data-v-3bfaf5b3${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.deploy.\u8BE5\u5206\u7C7B\u4E0B\u7684\u5E94\u7528\u4E5F\u4F1A\u540C\u6B65\u8FDB\u884C\u79FB\u9664"))}</div></div>`);
            } else {
              _push2(ssrRenderComponent(_component_Input, {
                modelValue: className.value,
                "onUpdate:modelValue": ($event) => className.value = $event,
                maxlength: 25,
                placeholder: _ctx.$t("aiEnterprise.deploy.\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0")
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              actionType.value == "delete" ? (openBlock(), createBlock("div", {
                key: 0,
                class: "delete-content"
              }, [
                createVNode("div", { class: "name" }, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u5206\u7C7B")) + "\uFF1F", 1),
                createVNode("div", { class: "sub" }, toDisplayString(_ctx.$t("aiEnterprise.deploy.\u8BE5\u5206\u7C7B\u4E0B\u7684\u5E94\u7528\u4E5F\u4F1A\u540C\u6B65\u8FDB\u884C\u79FB\u9664")), 1)
              ])) : (openBlock(), createBlock(_component_Input, {
                key: 1,
                modelValue: className.value,
                "onUpdate:modelValue": ($event) => className.value = $event,
                maxlength: 25,
                placeholder: _ctx.$t("aiEnterprise.deploy.\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0")
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
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
      if (form.value.workbenchCategoryList[robotIndex.value] && form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList) {
        _push(ssrRenderComponent(unref(searchRobotCom), {
          ref_key: "searchRobotRef",
          ref: searchRobotRef,
          list: form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList,
          "onUpdate:list": ($event) => form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList = $event,
          onInit: getAddRobot
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_addMember2, {
        ref_key: "addMemberRef",
        ref: addMemberRef,
        onInit: getMember,
        userOpen: true,
        bizType: unref(router).currentRoute.value.query.bizType,
        onGetWhole: getWhole,
        onGetDifferences: getDifferences
      }, null, _parent));
      if (form.value.workbenchCategoryList[robotIndex.value] && form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList) {
        _push(ssrRenderComponent(_component_robotPage, {
          ref_key: "robotPageRef",
          ref: robotPageRef,
          list: form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList,
          "onUpdate:list": ($event) => form.value.workbenchCategoryList[robotIndex.value].getWorkbenchChunkList = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/workbench/deploy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deploy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3bfaf5b3"]]);

export { deploy as default };
//# sourceMappingURL=deploy-b2661565.mjs.map
