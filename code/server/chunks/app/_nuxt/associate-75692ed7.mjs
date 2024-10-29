import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, onUnmounted, watch, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './close-e8808509.mjs';
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
  __name: "associate",
  __ssrInlineRender: true,
  emits: ["close", "getContent"],
  setup(__props, { expose: __expose, emit: emits }) {
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const routing = getRouting();
    const drawContent = ref("");
    const robotCode = ref("");
    const groupId = ref("");
    const showFn = (code, type, str) => {
      robotCode.value = code;
      drawContent.value = "";
      loading.value = true;
      toBreak();
      proxy.$api.ai_bulidChatGroupId({
        robotCode: robotCode.value
      }).then((json) => {
        let str1 = "\u60A8\u73B0\u5728\u8981\u62DB\u8058\u7684\u5C97\u4F4D\u540D\u662F" + str + "\uFF0C\u60A8\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u62DB\u8058\u8981\u6C42\u4E66\u5199\u4E13\u5BB6\uFF0C\u80FD\u591F\u5B8C\u6574\u6E05\u6670\u7684\u63CF\u8FF0\u5C97\u4F4D\u804C\u8D23\u548C\u5E38\u89C1\u4EFB\u804C\u8981\u6C42\uFF0C\u8BF7\u6839\u636E\u8FD9\u4E2A\u5C97\u4F4D\u751F\u6210\u5C97\u4F4D\u5BF9\u5E94\u7684\u5C97\u4F4D\u804C\u8D23\u548C\u4EFB\u804C\u8981\u6C42\uFF0C\u4E24\u90E8\u5206\u90FD\u8981\u5206\u70B9\u63CF\u8FF0\u3002";
        let str2 = "";
        groupId.value = json.data;
        let data = {
          content: str1 + "" + str2,
          groupId: groupId.value,
          robotCode: code
        };
        routing.setAiChat(proxy, data);
      });
    };
    const toBreak = () => {
      routing.abortReadingStream();
    };
    __expose({
      showFn,
      toBreak
    });
    onUnmounted(() => {
      routing.abortReadingStream();
    });
    watch(() => routing.getChatMsg, (item) => {
      if (item.type == "ERROR")
        ;
      if (item && item.content) {
        drawContent.value = drawContent.value + "" + item.content;
      }
    }, { deep: true });
    watch(() => routing.electric, () => {
      loading.value = false;
      if (drawContent.value)
        ;
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Input = resolveComponent("Input");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "associate" }, _attrs))} data-v-cf7d21fe><div class="associate-top" data-v-cf7d21fe><div class="name" data-v-cf7d21fe>AI\u5E2E\u6211\u751F\u6210\u8981\u6C42</div><img${ssrRenderAttr("src", _imports_0)} data-v-cf7d21fe></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Input, {
              type: "textarea",
              readonly: "",
              modelValue: drawContent.value,
              "onUpdate:modelValue": ($event) => drawContent.value = $event,
              rows: 6,
              style: { "margin": "6px 0" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Input, {
                type: "textarea",
                readonly: "",
                modelValue: drawContent.value,
                "onUpdate:modelValue": ($event) => drawContent.value = $event,
                rows: 6,
                style: { "margin": "6px 0" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="associate-btn" data-v-cf7d21fe>${ssrInterpolate(loading.value ? "\u751F\u6210\u4E2D..." : "\u4F7F\u7528\u8BE5\u8981\u6C42")}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/modal/associate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const associate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf7d21fe"]]);

export { associate as default };
//# sourceMappingURL=associate-75692ed7.mjs.map
