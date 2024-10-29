import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "editType",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { expose: __expose, emit }) {
    const { proxy } = getCurrentInstance();
    const params = ref({});
    const loading = ref(false);
    const modalShow = ref(false);
    const showFn = (record) => {
      if (record) {
        params.value = JSON.parse(JSON.stringify(record));
        params.value.seq = "";
        params.value.upFlag = false;
      } else {
        params.value = {
          categoryCode: "",
          name: "",
          upFlag: false,
          seq: ""
        };
      }
      modalShow.value = true;
    };
    const toSubmit = () => {
      if (proxy.$isEmpty(params.value.name)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u5206\u7EC4\u540D\u79F0");
        return;
      }
      if (params.value.name.length > 24) {
        proxy.$Message.error("\u5206\u7EC4\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC724\u4E2A\u5B57\u7B26");
        return;
      }
      loading.value = true;
      proxy.$api.saveOrUpdateCategory(params.value).then(() => {
        loading.value = false;
        proxy.$Message.success(params.value.categoryCode ? "\u5DF2\u66F4\u6539" : "\u5DF2\u65B0\u589E");
        modalShow.value = false;
        emit("init");
      }).catch(() => {
        loading.value = false;
      });
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        "footer-hide": true
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modelTitle" data-v-1065282d${_scopeId}>${ssrInterpolate(params.value.categoryCode ? "\u7F16\u8F91" : "\u6DFB\u52A0")}\u5206\u7EC4</div>`);
          } else {
            return [
              createVNode("div", { class: "modelTitle" }, toDisplayString(params.value.categoryCode ? "\u7F16\u8F91" : "\u6DFB\u52A0") + "\u5206\u7EC4", 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-1065282d${_scopeId}><div class="classItem" data-v-1065282d${_scopeId}><div class="classItem-name" data-v-1065282d${_scopeId}>\u5206\u7EC4\u540D\u79F0</div>`);
            _push2(ssrRenderComponent(_component_Input, {
              class: "classItem-input",
              modelValue: params.value.name,
              "onUpdate:modelValue": ($event) => params.value.name = $event,
              placeholder: "\u8BF7\u8F93\u5165\u5206\u7EC4\u540D\u79F0"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="classItem" data-v-1065282d${_scopeId}><div class="classItem-name" data-v-1065282d${_scopeId}></div><div class="classItem-btn" data-v-1065282d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              loading: loading.value,
              onClick: toSubmit
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
              class: "cancle",
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
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "classItem" }, [
                  createVNode("div", { class: "classItem-name" }, "\u5206\u7EC4\u540D\u79F0"),
                  createVNode(_component_Input, {
                    class: "classItem-input",
                    modelValue: params.value.name,
                    "onUpdate:modelValue": ($event) => params.value.name = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u5206\u7EC4\u540D\u79F0"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "classItem" }, [
                  createVNode("div", { class: "classItem-name" }),
                  createVNode("div", { class: "classItem-btn" }, [
                    createVNode(_component_Button, {
                      type: "primary",
                      loading: loading.value,
                      onClick: toSubmit
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u5B9A")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(_component_Button, {
                      class: "cancle",
                      onClick: ($event) => modalShow.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u53D6\u6D88")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/modal/robot/editType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editType = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1065282d"]]);

export { editType as default };
//# sourceMappingURL=editType-20485b1e.mjs.map
