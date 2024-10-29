import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './electricCom-ab2941d1.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, toRefs, watch, resolveComponent, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { _ as _imports_1$1 } from './hot-bc2e3ef0.mjs';
import { useRouter } from 'vue-router';
import { _ as _sfc_main$1 } from './createLoading-9278cbec.mjs';
import { n as noDataCom } from './index-e1fc7e3e.mjs';
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
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';

const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFiklEQVRoQ+2Za2wUVRTH/+fO7Ozsbm3V4ovwaFUEK62YLY+KMZUvQqlEKLsaIcYHiYkaTYx8wUSqCVETJZpoDB8IEZToVsBailWBVKRdC1SCYmOAxFpEBUUpa/cxu3OPmSUxpe6yM3Q2StL7df/3nP/vnvuau4RLvNEl7h9jAP91BccqMFaBUY5A0aZQczPE6sn12m8BqFfhlEHhPmOUXnN2LxoAt86+JpVWljFktWDaoVUaH1Ftb9ptiKIAcFvQn0yoTSTExqxh5j4GPeULRXddCgAUj9TNFAKfArh8mOFd3tgvjfRwf9JNCNcrwJE6X1LIJoLYNNwoEQ4zyWf0JT2f/28BGKCh92fVKKqyhYAbRhplYKceH7qXHvxmyC0IVyvwc1vQX55Sl/CI0R9m9jCAZ/WlUWt6udJcBUhtvX06S/4YQGUedyaA7d5y7/10V6cra8E1AN5QrycCiUYhRMuFhpaAr4WUT3vCPXvdKIErANbcj31YN9XDchORqC1gzARk25l4Yvm1LqyFiwZgBqEFAqjTEmZmnNDEArBYZ2dUCfgWkC9ogjsxyTyL7b0mVoOJwHb6n7e7FerADIGWKjWW8ZVqXl8pmWaAIDUIUk3T9ArhGS9JLiTQ8kKxRvw+wMBmYt4jQYMqpzOQaoZ1TmqQMRjyLJBIoK8vQ82Q+WLnrYBl3Ng2Z6oAl5sZpYwF30HAHDBuBeEKh2btyQkZME6CsU8C3QL4XrJ5muA5ofd1/ZQLJCeANafjrXOvUwzZAUK1vezFUrF1CVzvTanP0bK9f47MkhsgElJS6sA8SPFZsWw5isvoEIRV2tLoQXsAzRBD02ZVq6rSCmCyo2Tui5NEaGETL+rh6DFbAJaIDwQ9yX71PgHxPANT3PdVOCIBcQnuIZZr9dC+7bl6XHAbtSCMfm0hg18B6KbCKd1TEDDEhC8VgVc9i/NfwwueA99FqrQKLmlQhPIyCFPds5g/UtY8eA8r5mv64v27CfnPh4IA2ekUqdIMUdLAUF4CMK3IEDGAO1kx3/At3l/wA8gWQBZix41eI3blAhbKGhCqigPBgwx0MPHr/qaer+zksA1gBfthQ70+3p+azwJFgMiab5eS1wbCPb12zFsaRwDZSmyo1w1/chErtB5Aid1EBXRsTRtT8kon5i8KIAuxZfYEg6mdQTUuAWQY2Kg3RVc4vdA5roBlOBEJTiLh6QDoZpcATAa/q8uJj1K4xfrosd0cA1jXaOODOdNYpUMAPLYzFRIyb/Vy+hEK9w4Wkg7/3TlAJKQkxPFaAbK1S9g1Q6AdkvC4r6n7R7t9LmoNWKdzql+bB6DDSSIb2i5F0kpPuDtqQ/uPxHEFft1YE7jM73tIgXjTSaLCWj4imNZooei51zybzTHA2c3BcarH85YgCtvIYS1I6z7vK6Ql4IxkvO0LRVcV0o5qDSQicyeRYn4Bpop8iQhIMnCEgUNEOA3J14OoGoQKWN/SuZtk4D1dDq5w8pLtqALZHWjLzCqGau1AykgfREgx4ygzRwXQof2V3I3AlFjSPD6RVG4A0XwQZoBpQs5DlHmrkU4/VvpA7+92q+AMIBJS0uJ4rfz3DmRNlRME3mMCbWlJO8vC0T+GmziwLuiZXqZUQhWNAN3NQJCA8vOMMtpZ0BNOdiLHAPAMzEiZohuABmYJopMMdBLLvV5htFPTwQtug9alMJ0YdwsD9zDoTpK4jc89ElhPKq1S4kl/OHqiOBWw7k6ts69OpWk1iCoJiDGjy6uJbbSoa8BuUktnvWKnBdcwo5GBGhBJSPmJt+T0O9RwLGU3lqMKWEGzfx1NqS6L64FKhTmmL+05ajdZLt2pSFVJmVo60TCAEiM+4PTl2jHAaMwWo+8YQDFG1UnMsQo4Ga1iaP8GTD8XT5X2LnEAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "searchRobot",
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
    const routing = getRouting();
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const isLoading = ref(false);
    const keyword = ref("");
    const { list } = toRefs(props);
    const robotList = ref([]);
    const consumeEnergy = ref("");
    const showFn = (record) => {
      modalShow.value = true;
      routing.abortReadingStream();
      keyword.value = "";
      calcElectricity();
      onSearch();
    };
    const electricity = ref({});
    const calcElectricity = () => {
      let data = {
        typeList: ["INTELLIGENT_MATCHING"]
      };
      proxy.$api.calcElectricity(data).then((res) => {
        consumeEnergy.value = res.data[0].electricity;
        electricity.value = proxy.$filterTypeGrouped(res.data);
      });
    };
    const onSearch = () => {
      let data = {
        content: keyword.value ? keyword.value : "\u6587\u6848",
        groupId: "",
        sceneType: "INTELLIGENT_MATCHING",
        type: "INTELLIGENT_MATCHING"
      };
      robotList.value = [];
      isLoading.value = true;
      routing.setAiChat(proxy, data);
    };
    const onAllAdd = () => {
      robotList.value.forEach((item) => {
        item.check = true;
        onUpdateList(item);
      });
    };
    const onCheck = (item) => {
      item.check = !item.check;
      onUpdateList(item);
    };
    const onUpdateList = (item) => {
      if (item.check) {
        if (!list.value.some((obj) => obj.robotCode === item.robotCode)) {
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
    watch(
      () => routing.getChatMsg,
      (item) => {
        if (item && item.content && item.type == "INTELLIGENT_MATCHING") {
          robotList.value = JSON.parse(item.content);
        }
        if (item.type != "MODEL_WAIT") {
          isLoading.value = false;
        }
      },
      { deep: true }
    );
    watch(() => robotList.value, (data) => {
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
      const _component_Input = resolveComponent("Input");
      const _component_electricCom = __nuxt_component_1;
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              class: "IntelligentMatchingModal",
              modelValue: modalShow.value,
              "onUpdate:modelValue": ($event) => modalShow.value = $event,
              title: "\u667A\u80FD\u5339\u914D",
              "mask-closable": false,
              "footer-hide": "",
              width: 1012
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="IntelligentMatching" data-v-71efbf75${_scopeId2}><div class="search" data-v-71efbf75${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: keyword.value,
                    "onUpdate:modelValue": ($event) => keyword.value = $event,
                    size: "large",
                    placeholder: "\u8F93\u5165\u60A8\u60F3\u5339\u914D\u7684\u5173\u952E\u8BCD\uFF0C\u53EF\u4EE5\u662F\u884C\u4E1A\u6216\u667A\u80FD\uFF0C\u5982\uFF1AUI\u8BBE\u8BA1\uFF0C\u4EBA\u4E8B"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="but" data-v-71efbf75${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_electricCom, {
                    type: "INTELLIGENT_MATCHING",
                    data: electricity.value
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-71efbf75${_scopeId3}>\u5F00\u59CB\u5339\u914D</span>`);
                      } else {
                        return [
                          createVNode("span", { onClick: onSearch }, "\u5F00\u59CB\u5339\u914D")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="listArea clearfix" data-v-71efbf75${_scopeId2}>`);
                  if (!_ctx.$isEmpty(robotList.value)) {
                    _push3(`<!--[--><div class="title clearfix" data-v-71efbf75${_scopeId2}><span class="fl" data-v-71efbf75${_scopeId2}>\u4E3A\u60A8\u627E\u5230\u4EE5\u4E0B\u5185\u5BB9</span>`);
                    _push3(ssrRenderComponent(_component_Button, {
                      class: "fr",
                      type: "primary",
                      onClick: onAllAdd
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u4E00\u952E\u6DFB\u52A0`);
                        } else {
                          return [
                            createTextVNode("\u4E00\u952E\u6DFB\u52A0")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="robotListCom clearfix" data-v-71efbf75${_scopeId2}><!--[-->`);
                    ssrRenderList(robotList.value, (item, index) => {
                      _push3(`<div class="item" data-v-71efbf75${_scopeId2}>`);
                      if (item.robotLogo) {
                        _push3(`<img class="logo"${ssrRenderAttr("src", item.robotLogo)} alt="" data-v-71efbf75${_scopeId2}>`);
                      } else {
                        _push3(`<img class="logo"${ssrRenderAttr("src", _imports_1)} alt="" data-v-71efbf75${_scopeId2}>`);
                      }
                      _push3(`<h2 data-v-71efbf75${_scopeId2}>${ssrInterpolate(item.robotName)}</h2><p class="text-hide-2" data-v-71efbf75${_scopeId2}>${ssrInterpolate(item.robotDescribe)}</p><div class="data" data-v-71efbf75${_scopeId2}>`);
                      if (!_ctx.$isEmpty(item.clickCount) && item.clickCount != 0) {
                        _push3(`<div class="fl" data-v-71efbf75${_scopeId2}><img class="icon"${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-71efbf75${_scopeId2}> ${ssrInterpolate(item.clickCount)}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (!_ctx.$isEmpty(item.collectCount) && item.collectCount != 0) {
                        _push3(`<div class="fl" data-v-71efbf75${_scopeId2}><img class="icon w22"${ssrRenderAttr("src", _imports_2)} alt="" data-v-71efbf75${_scopeId2}> ${ssrInterpolate(item.collectCount)}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (!_ctx.$isEmpty(item.companyName)) {
                        _push3(`<div class="fl" data-v-71efbf75${_scopeId2}><span class="gray" data-v-71efbf75${_scopeId2}>@</span>${ssrInterpolate(item.companyName)}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="btn" data-v-71efbf75${_scopeId2}>`);
                      if (!item.check) {
                        _push3(`<span class="blue" data-v-71efbf75${_scopeId2}>\u6DFB\u52A0</span>`);
                      } else {
                        _push3(`<!--[--><span class="gray" data-v-71efbf75${_scopeId2}>\u5DF2\u6DFB\u52A0</span><span class="red" data-v-71efbf75${_scopeId2}>\u79FB\u9664</span><!--]-->`);
                      }
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]--></div><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (isLoading.value) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1), { position: "center" }, null, _parent3, _scopeId2));
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
                    createVNode("div", { class: "IntelligentMatching" }, [
                      createVNode("div", { class: "search" }, [
                        createVNode(_component_Input, {
                          modelValue: keyword.value,
                          "onUpdate:modelValue": ($event) => keyword.value = $event,
                          size: "large",
                          placeholder: "\u8F93\u5165\u60A8\u60F3\u5339\u914D\u7684\u5173\u952E\u8BCD\uFF0C\u53EF\u4EE5\u662F\u884C\u4E1A\u6216\u667A\u80FD\uFF0C\u5982\uFF1AUI\u8BBE\u8BA1\uFF0C\u4EBA\u4E8B"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "but" }, [
                          createVNode(_component_electricCom, {
                            type: "INTELLIGENT_MATCHING",
                            data: electricity.value
                          }, {
                            content: withCtx(() => [
                              createVNode("span", { onClick: onSearch }, "\u5F00\u59CB\u5339\u914D")
                            ]),
                            _: 1
                          }, 8, ["data"])
                        ])
                      ]),
                      createVNode("div", { class: "listArea clearfix" }, [
                        !_ctx.$isEmpty(robotList.value) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", { class: "title clearfix" }, [
                            createVNode("span", { class: "fl" }, "\u4E3A\u60A8\u627E\u5230\u4EE5\u4E0B\u5185\u5BB9"),
                            createVNode(_component_Button, {
                              class: "fr",
                              type: "primary",
                              onClick: onAllAdd
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u4E00\u952E\u6DFB\u52A0")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "robotListCom clearfix" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (item, index) => {
                              return openBlock(), createBlock("div", {
                                class: "item",
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
                                  src: _imports_1,
                                  alt: ""
                                })),
                                createVNode("h2", null, toDisplayString(item.robotName), 1),
                                createVNode("p", { class: "text-hide-2" }, toDisplayString(item.robotDescribe), 1),
                                createVNode("div", { class: "data" }, [
                                  !_ctx.$isEmpty(item.clickCount) && item.clickCount != 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "fl"
                                  }, [
                                    createVNode("img", {
                                      class: "icon",
                                      src: _imports_1$1,
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
                                      src: _imports_2,
                                      alt: ""
                                    }),
                                    createTextVNode(" " + toDisplayString(item.collectCount), 1)
                                  ])) : createCommentVNode("", true),
                                  !_ctx.$isEmpty(item.companyName) ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "fl"
                                  }, [
                                    createVNode("span", { class: "gray" }, "@"),
                                    createTextVNode(toDisplayString(item.companyName), 1)
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
                              ]);
                            }), 128))
                          ])
                        ], 64)) : createCommentVNode("", true),
                        isLoading.value ? (openBlock(), createBlock(unref(_sfc_main$1), {
                          key: 1,
                          position: "center"
                        })) : createCommentVNode("", true),
                        _ctx.$isEmpty(robotList.value) && !isLoading.value ? (openBlock(), createBlock(unref(noDataCom), { key: 2 })) : createCommentVNode("", true)
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
                class: "IntelligentMatchingModal",
                modelValue: modalShow.value,
                "onUpdate:modelValue": ($event) => modalShow.value = $event,
                title: "\u667A\u80FD\u5339\u914D",
                "mask-closable": false,
                "footer-hide": "",
                width: 1012
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "IntelligentMatching" }, [
                    createVNode("div", { class: "search" }, [
                      createVNode(_component_Input, {
                        modelValue: keyword.value,
                        "onUpdate:modelValue": ($event) => keyword.value = $event,
                        size: "large",
                        placeholder: "\u8F93\u5165\u60A8\u60F3\u5339\u914D\u7684\u5173\u952E\u8BCD\uFF0C\u53EF\u4EE5\u662F\u884C\u4E1A\u6216\u667A\u80FD\uFF0C\u5982\uFF1AUI\u8BBE\u8BA1\uFF0C\u4EBA\u4E8B"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "but" }, [
                        createVNode(_component_electricCom, {
                          type: "INTELLIGENT_MATCHING",
                          data: electricity.value
                        }, {
                          content: withCtx(() => [
                            createVNode("span", { onClick: onSearch }, "\u5F00\u59CB\u5339\u914D")
                          ]),
                          _: 1
                        }, 8, ["data"])
                      ])
                    ]),
                    createVNode("div", { class: "listArea clearfix" }, [
                      !_ctx.$isEmpty(robotList.value) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "title clearfix" }, [
                          createVNode("span", { class: "fl" }, "\u4E3A\u60A8\u627E\u5230\u4EE5\u4E0B\u5185\u5BB9"),
                          createVNode(_component_Button, {
                            class: "fr",
                            type: "primary",
                            onClick: onAllAdd
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u4E00\u952E\u6DFB\u52A0")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "robotListCom clearfix" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (item, index) => {
                            return openBlock(), createBlock("div", {
                              class: "item",
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
                                src: _imports_1,
                                alt: ""
                              })),
                              createVNode("h2", null, toDisplayString(item.robotName), 1),
                              createVNode("p", { class: "text-hide-2" }, toDisplayString(item.robotDescribe), 1),
                              createVNode("div", { class: "data" }, [
                                !_ctx.$isEmpty(item.clickCount) && item.clickCount != 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "fl"
                                }, [
                                  createVNode("img", {
                                    class: "icon",
                                    src: _imports_1$1,
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
                                    src: _imports_2,
                                    alt: ""
                                  }),
                                  createTextVNode(" " + toDisplayString(item.collectCount), 1)
                                ])) : createCommentVNode("", true),
                                !_ctx.$isEmpty(item.companyName) ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "fl"
                                }, [
                                  createVNode("span", { class: "gray" }, "@"),
                                  createTextVNode(toDisplayString(item.companyName), 1)
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
                            ]);
                          }), 128))
                        ])
                      ], 64)) : createCommentVNode("", true),
                      isLoading.value ? (openBlock(), createBlock(unref(_sfc_main$1), {
                        key: 1,
                        position: "center"
                      })) : createCommentVNode("", true),
                      _ctx.$isEmpty(robotList.value) && !isLoading.value ? (openBlock(), createBlock(unref(noDataCom), { key: 2 })) : createCommentVNode("", true)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/workbench/modal/searchRobot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchRobotCom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71efbf75"]]);
const searchRobot = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: searchRobotCom
});

export { _imports_2 as _, searchRobot as a, searchRobotCom as s };
//# sourceMappingURL=searchRobot-b628c2cd.mjs.map
