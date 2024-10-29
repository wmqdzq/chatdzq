import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "choosePosition",
  __ssrInlineRender: true,
  emits: ["choose"],
  setup(__props, { expose: __expose, emit: emits }) {
    const modalShow = ref(false);
    const loading = ref(false);
    const { proxy } = getCurrentInstance();
    const postList = ref([]);
    const selectCode = ref("");
    const showFn = () => {
      modalShow.value = true;
      selectCode.value = "";
      postList.value = [];
      loading.value = true;
      proxy.$api.queryPositionList().then((res) => {
        postList.value = res.data;
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const submit = () => {
      if (proxy.$isEmpty(selectCode.value)) {
        proxy.$Message.error("\u8BF7\u9009\u62E9\u804C\u4F4D");
        return;
      }
      emits("choose", selectCode.value);
      modalShow.value = false;
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top" data-v-e3102160${_scopeId}>\u9009\u62E9\u804C\u4F4D</div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, "\u9009\u62E9\u804C\u4F4D")
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
              onClick: submit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4E0B\u4E00\u6B65`);
                } else {
                  return [
                    createTextVNode("\u4E0B\u4E00\u6B65")
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
                onClick: submit
              }, {
                default: withCtx(() => [
                  createTextVNode("\u4E0B\u4E00\u6B65")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-e3102160${_scopeId}><!--[-->`);
            ssrRenderList(postList.value, (item) => {
              _push2(`<div class="${ssrRenderClass([selectCode.value == item.code ? "active" : "", "content-item"])}" data-v-e3102160${_scopeId}><div class="item-top" data-v-e3102160${_scopeId}><div class="name" data-v-e3102160${_scopeId}>${ssrInterpolate(item.name)}</div><div class="num" data-v-e3102160${_scopeId}>\u5171${ssrInterpolate(item.totalCount)}\u4EFD\u7B80\u5386</div></div><div class="item-content" data-v-e3102160${_scopeId}><div class="text-hide-3" data-v-e3102160${_scopeId}>${ssrInterpolate(item.description)}</div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(postList.value, (item) => {
                  return openBlock(), createBlock("div", {
                    class: ["content-item", selectCode.value == item.code ? "active" : ""],
                    onClick: ($event) => selectCode.value = item.code
                  }, [
                    createVNode("div", { class: "item-top" }, [
                      createVNode("div", { class: "name" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "num" }, "\u5171" + toDisplayString(item.totalCount) + "\u4EFD\u7B80\u5386", 1)
                    ]),
                    createVNode("div", { class: "item-content" }, [
                      createVNode("div", { class: "text-hide-3" }, toDisplayString(item.description), 1)
                    ])
                  ], 10, ["onClick"]);
                }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/modal/choosePosition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const choosePosition = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3102160"]]);

export { choosePosition as default };
//# sourceMappingURL=choosePosition-ea85243e.mjs.map
