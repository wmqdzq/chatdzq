import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withDirectives, vModelText } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "pwd",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const modalShow = ref(false);
    const { proxy } = getCurrentInstance();
    const params = ref({});
    const loading = ref(false);
    const pwdParams = ref({
      pw1: "",
      pw2: "",
      pw3: ""
    });
    const showFn = (data) => {
      params.value = JSON.parse(JSON.stringify(data));
      pwdParams.value = {
        pw1: "",
        pw2: "",
        pw3: ""
      };
      modalShow.value = true;
    };
    const toSubmit = () => {
      if (proxy.$isEmpty(pwdParams.value.pw2)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u5BC6\u7801");
        return;
      }
      if (proxy.$isEmpty(pwdParams.value.pw3)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u5BC6\u7801");
        return;
      }
      if (pwdParams.value.pw2 != pwdParams.value.pw3) {
        proxy.$Message.error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4");
        return;
      }
      params.value.oldPassword = pwdParams.value.pw1;
      params.value.password = pwdParams.value.pw2;
      proxy.$api.editLoginAccount(params.value).then(() => {
        loading.value = false;
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        modalShow.value = false;
        emits("init");
      }).catch(() => {
        loading.value = false;
      });
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
        "mask-closable": false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-4e98bd30${_scopeId}>\u8BBE\u7F6E\u767B\u5F55\u5BC6\u7801</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u8BBE\u7F6E\u767B\u5F55\u5BC6\u7801")
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
              onClick: toSubmit,
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
                type: "primary",
                onClick: toSubmit,
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
            _push2(`<div class="item" data-v-4e98bd30${_scopeId}><div class="item-input" data-v-4e98bd30${_scopeId}><input${ssrRenderAttr("value", pwdParams.value.pw2)} type="password" placeholder="\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801" data-v-4e98bd30${_scopeId}></div></div><div class="item" data-v-4e98bd30${_scopeId}><div class="item-input" data-v-4e98bd30${_scopeId}><input${ssrRenderAttr("value", pwdParams.value.pw3)} type="password" maxlength="20" placeholder="\u8BF7\u8F93\u51656~20\u4F4D\u5BC6\u7801" data-v-4e98bd30${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "item" }, [
                createVNode("div", { class: "item-input" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => pwdParams.value.pw2 = $event,
                    type: "password",
                    placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, pwdParams.value.pw2]
                  ])
                ])
              ]),
              createVNode("div", { class: "item" }, [
                createVNode("div", { class: "item-input" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => pwdParams.value.pw3 = $event,
                    type: "password",
                    maxlength: "20",
                    placeholder: "\u8BF7\u8F93\u51656~20\u4F4D\u5BC6\u7801"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, pwdParams.value.pw3]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manage/modal/pwd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pwd = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e98bd30"]]);

export { pwd as default };
//# sourceMappingURL=pwd-50980682.mjs.map
