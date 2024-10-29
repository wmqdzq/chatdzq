import { a as _export_sfc, _ as __nuxt_component_1$1, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './close-e8808509.mjs';
import { _ as _imports_0$1 } from './confirm-4cbfa28f.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PC",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const isShowOverlay = ref(false);
    const btnLoading = ref(false);
    const router = useRouter();
    const modalShow = ref(false);
    const title = ref("");
    const pageType = ref("");
    const params = ref({});
    const chunkedArray = ref([]);
    const selectIndex = ref(0);
    const toSubmit = (type) => {
      if (type == 1) {
        modalShow.value = true;
        let flag = false;
        params.value.interviewQuestionAnswerList.forEach((item, i) => {
          if (proxy.$isEmpty(item.answer)) {
            flag = true;
          }
          if (i == params.value.interviewQuestionAnswerList.length - 1) {
            if (flag) {
              title.value = "\u60A8\u6709\u672A\u586B\u5199\u7684\u9898\u76EE\uFF0C\u662F\u5426\u786E\u8BA4\u63D0\u4EA4?";
            } else {
              title.value = "\u662F\u5426\u786E\u8BA4\u63D0\u4EA4?";
            }
          }
        });
      }
      if (type == 2) {
        modalShow.value = false;
        params.value.interviewQuestionAnswerList.forEach((item, i) => {
          if (proxy.$isEmpty(item.answer))
            ;
          if (i == Number(params.value.interviewQuestionAnswerList.length - 1)) {
            let data = {
              resumeCode: params.value.code,
              interviewQuestionsAnswerReqList: params.value.interviewQuestionAnswerList
            };
            btnLoading.value = true;
            proxy.$api.sumbitExamAnswer(data).then(() => {
              isShowOverlay.value = true;
              btnLoading.value = false;
            }).catch(() => {
              btnLoading.value = false;
            });
          }
        });
      }
    };
    const toNext = () => {
      selectIndex.value = Number(selectIndex.value) + 1;
    };
    const toPre = () => {
      selectIndex.value = Number(selectIndex.value) - 1;
    };
    const chunkArray = (arr, chunkSize) => {
      let results = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        results.push(arr.slice(i, i + chunkSize));
      }
      return results;
    };
    watch(() => props.data, () => {
      if (router.currentRoute.value && router.currentRoute.value.query && router.currentRoute.value.query.type) {
        pageType.value = router.currentRoute.value.query.type;
      }
      if (props.data && props.data.code) {
        if (props.data.dataStatus != "NOT_WRITTEN_TEST") {
          isShowOverlay.value = true;
        }
        params.value = JSON.parse(JSON.stringify(props.data));
        chunkedArray.value = chunkArray(params.value.interviewQuestionAnswerList, 5);
        let index = 0;
        chunkedArray.value.forEach((item, i) => {
          item.forEach((iten, j) => {
            iten.index = index;
            index++;
          });
        });
      }
    }, { immediate: true });
    watch(() => params.value, () => {
      if (params.value && params.value.code)
        ;
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_cModal = __nuxt_component_0;
      if (params.value && params.value.code) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "PC" }, _attrs))} data-v-9d74f4c4>`);
        if (chunkedArray.value.length > 0) {
          _push(`<div class="PC-top" data-v-9d74f4c4><div class="PC-top-name" data-v-9d74f4c4>${ssrInterpolate(params.value.positionName)}\u7B14\u8BD5-${ssrInterpolate(params.value.name)}</div><div class="PC-top-title" data-v-9d74f4c4>\u5F53\u524D${ssrInterpolate(chunkedArray.value[selectIndex.value][0].index + 1)}-${ssrInterpolate(chunkedArray.value[selectIndex.value][chunkedArray.value[selectIndex.value].length - 1].index + 1)}\u9898,\u603B\u5171${ssrInterpolate(params.value.interviewQuestionAnswerList.length)}\u9898</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="PC-content" data-v-9d74f4c4><div class="PC-content-list" data-v-9d74f4c4><!--[-->`);
        ssrRenderList(chunkedArray.value[selectIndex.value], (item, i) => {
          _push(`<div class="list-item" data-v-9d74f4c4><div class="title" data-v-9d74f4c4><div class="name" data-v-9d74f4c4>\u9898\u76EE${ssrInterpolate(Number(item.index) + 1)}\uFF1A</div><div data-v-9d74f4c4>${ssrInterpolate(item.question)}</div></div><div class="content" data-v-9d74f4c4>`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Input, {
                  type: "textarea",
                  modelValue: params.value.interviewQuestionAnswerList[item.index].answer,
                  "onUpdate:modelValue": ($event) => params.value.interviewQuestionAnswerList[item.index].answer = $event,
                  placeholder: "\u8BF7\u7B54\u9898",
                  rows: "6"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Input, {
                    type: "textarea",
                    modelValue: params.value.interviewQuestionAnswerList[item.index].answer,
                    "onUpdate:modelValue": ($event) => params.value.interviewQuestionAnswerList[item.index].answer = $event,
                    placeholder: "\u8BF7\u7B54\u9898",
                    rows: "6"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="PC-content-submit" data-v-9d74f4c4>`);
        if (chunkedArray.value) {
          _push(`<!--[-->`);
          if (chunkedArray.value[selectIndex.value - 1]) {
            _push(ssrRenderComponent(_component_Button, {
              class: "btn",
              type: "primary",
              onClick: toPre
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`\u4E0A\u4E00\u9875`);
                } else {
                  return [
                    createTextVNode("\u4E0A\u4E00\u9875")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div style="${ssrRenderStyle({ "width": "24px" })}" data-v-9d74f4c4></div>`);
          if (chunkedArray.value[selectIndex.value + 1]) {
            _push(ssrRenderComponent(_component_Button, {
              class: "btn",
              type: "primary",
              onClick: toNext
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`\u4E0B\u4E00\u9875`);
                } else {
                  return [
                    createTextVNode("\u4E0B\u4E00\u9875")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$isEmpty(pageType.value)) {
          _push(`<!--[--><div style="${ssrRenderStyle({ "width": "24px" })}" data-v-9d74f4c4></div>`);
          _push(ssrRenderComponent(_component_Button, {
            type: "primary",
            class: "btn",
            onClick: ($event) => toSubmit(1),
            disabled: params.value.dataStatus != "NOT_WRITTEN_TEST" ? true : false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u63D0\u4EA4`);
              } else {
                return [
                  createTextVNode("\u63D0\u4EA4")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (isShowOverlay.value) {
          _push(`<div class="overlay" data-v-9d74f4c4><div class="message" data-v-9d74f4c4><img class="close"${ssrRenderAttr("src", _imports_0)} data-v-9d74f4c4><div class="content" data-v-9d74f4c4><div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-9d74f4c4><img class="content-logo"${ssrRenderAttr("src", _imports_0$1)} data-v-9d74f4c4><div data-v-9d74f4c4>\u5DF2\u63D0\u4EA4\uFF0C\u8BF7\u9759\u5019\u7B14\u8BD5\u7ED3\u679C\u901A\u77E5</div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_cModal, {
          modelValue: modalShow.value,
          "onUpdate:modelValue": ($event) => modalShow.value = $event,
          title: "\u63D0\u793A",
          "mask-closable": false
        }, {
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
                loading: btnLoading.value,
                onClick: ($event) => toSubmit(2)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u63D0\u4EA4`);
                  } else {
                    return [
                      createTextVNode("\u63D0\u4EA4")
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
                  loading: btnLoading.value,
                  onClick: ($event) => toSubmit(2)
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u63D0\u4EA4")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-9d74f4c4${_scopeId}><div data-v-9d74f4c4${_scopeId}>${ssrInterpolate(title.value)}</div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", null, toDisplayString(title.value), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/answer/components/PC.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PC = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d74f4c4"]]);

export { PC as default };
//# sourceMappingURL=PC-987433f8.mjs.map
