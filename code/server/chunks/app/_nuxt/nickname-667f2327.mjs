import { a as _export_sfc, g as getRouting, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "nickname",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { expose: __expose, emit: emits }) {
    const modalShow = ref(false);
    const params = ref({});
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const routing = getRouting();
    const showFn = (data) => {
      params.value = JSON.parse(JSON.stringify(data));
      modalShow.value = true;
    };
    __expose({
      showFn
    });
    const toSubmit = () => {
      if (proxy.$isEmpty(params.value.nickName)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u6635\u79F0");
        return;
      }
      loading.value = true;
      params.value.oldPassword = "";
      params.value.password = "";
      let data = {
        avatar: params.value.avatar,
        code: params.value.code,
        email: params.value.email,
        nickName: params.value.nickName,
        phone: params.value.phone
      };
      proxy.$api.editLoginAccount(data).then(() => {
        loading.value = false;
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        modalShow.value = false;
        routing.getUserPoints(proxy);
        emits("init");
      }).catch(() => {
        loading.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-51d611a8${_scopeId}>\u7F16\u8F91\u6635\u79F0</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u7F16\u8F91\u6635\u79F0")
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
                onClick: toSubmit,
                type: "primary",
                loading: loading.value
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: params.value.nickName,
              "onUpdate:modelValue": ($event) => params.value.nickName = $event,
              placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Input, {
                modelValue: params.value.nickName,
                "onUpdate:modelValue": ($event) => params.value.nickName = $event,
                placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manage/modal/nickname.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Nickname = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51d611a8"]]);

export { Nickname as default };
//# sourceMappingURL=nickname-667f2327.mjs.map
