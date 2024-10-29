import { a as _export_sfc, g as getRouting, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './previewImg-8e12aab7.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const previewImgRef = ref();
    const modalShow = ref(false);
    const { proxy } = getCurrentInstance();
    const templateList = ref([]);
    const loading = ref(false);
    const params = ref({
      type: ""
    });
    const init = () => {
      loading.value = true;
      proxy.$api.queryTemplateList().then((res) => {
        templateList.value = res.data;
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const toUse = (record) => {
      if (record) {
        params.value.type = record.type;
        modalShow.value = true;
      } else {
        let data = {
          type: params.value.type
        };
        loading.value = true;
        proxy.$api.enableTeamTemplate(data).then(() => {
          loading.value = false;
          proxy.$Message.success("\u5DF2\u66F4\u6539");
          setTimeout(() => {
          }, 500);
          modalShow.value = false;
        }).catch(() => {
          loading.value = false;
        });
      }
    };
    init();
    watch(() => routing.permList, () => {
      if (routing.firmParams && routing.firmParams.isPaidTeamFlag && routing.permList.length > 0) {
        proxy.$isPerm("13217", true);
      }
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_Button = resolveComponent("Button");
      const _component_cModal = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "template" }, _attrs))} data-v-2acc4964>`);
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
      _push(`<div class="template-title" data-v-2acc4964>\u6A21\u677F\u9009\u62E9</div><div class="template-contet" data-v-2acc4964><!--[-->`);
      ssrRenderList(templateList.value, (item) => {
        _push(`<div class="content-item" data-v-2acc4964><div class="item-img" data-v-2acc4964><img${ssrRenderAttr("src", item.thumbnail)} data-v-2acc4964><div class="item-mask" data-v-2acc4964><div class="btn-list" data-v-2acc4964>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          onClick: ($event) => previewImgRef.value.showFn(item.dispalyImage)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u9884\u89C8\u6A21\u677F`);
            } else {
              return [
                createTextVNode("\u9884\u89C8\u6A21\u677F")
              ];
            }
          }),
          _: 2
        }, _parent));
        if (!item.usingFlag) {
          _push(ssrRenderComponent(_component_Button, {
            class: "btn",
            type: "primary",
            onClick: ($event) => toUse(item)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u7ACB\u5373\u4F7F\u7528`);
              } else {
                return [
                  createTextVNode("\u7ACB\u5373\u4F7F\u7528")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (item.usingFlag) {
          _push(`<div class="use" data-v-2acc4964>\u4F7F\u7528\u4E2D</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="item-name" data-v-2acc4964>${ssrInterpolate(item.name)}</div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-2acc4964${_scopeId}>\u63D0\u793A</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u63D0\u793A")
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
              onClick: ($event) => toUse(""),
              loading: loading.value
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
                onClick: ($event) => toUse(""),
                loading: loading.value
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u8BA4")
                ]),
                _: 1
              }, 8, ["onClick", "loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-2acc4964${_scopeId}><div data-v-2acc4964${_scopeId}>\u662F\u5426\u786E\u8BA4\u4F7F\u7528\u8BE5\u6A21\u677F\uFF1F</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", null, "\u662F\u5426\u786E\u8BA4\u4F7F\u7528\u8BE5\u6A21\u677F\uFF1F")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(__nuxt_component_1, {
        ref_key: "previewImgRef",
        ref: previewImgRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/template/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2acc4964"]]);

export { index as default };
//# sourceMappingURL=index-620c7b81.mjs.map
