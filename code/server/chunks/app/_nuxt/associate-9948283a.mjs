import { a as _export_sfc, g as getRouting, b as useCookie, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
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
  emits: ["close", "getLink"],
  setup(__props, { expose: __expose, emit: emits }) {
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const routing = getRouting();
    const drawContent = ref("");
    const robotCode = ref("1724597122952564738");
    const content = ref("\u60A8\u73B0\u5728\u626E\u6F14\u4E00\u4E2AAI\u753B\u753B\u63D0\u793A\u8BCD\u751F\u6210\u5668\u3002\u8BF7\u968F\u673A\u751F\u6210\u4E00\u4E2A\u753B\u753B\u7684\u63D0\u793A\u8BCD\u6587\u6848\u3002\u8981\u6C42\u5982\u4E0B\uFF1A1\uFF09\u5185\u5BB9\u987B\u5305\u542B\u4E3B\u4F53\u3001\u80CC\u666F\u3001\u4EE5\u53CA\u5BF9\u4E3B\u4F53\u7684\u7EC6\u8282\u63CF\u8FF02\uFF09\u751F\u6210\u7684\u63D0\u793A\u8BCD\u4E0D\u8D85\u8FC750\u4E2A\u5B57\uFF0C\u4E0D\u5C11\u4E8E15\u4E2A\u5B573\uFF09\u53EA\u4FDD\u7559\u63D0\u793A\u8BCD\uFF0C\u4E0D\u8981\u51FA\u73B0\u5176\u4ED6\u4E0D\u76F8\u5173\u7684\u5185\u5BB9");
    const showFn = (record, visible) => {
      if (!visible) {
        let data = {
          robotCode: robotCode.value
        };
        loading.value = false;
        drawContent.value = "";
        routing.abortReadingStream();
        let str1 = content.value;
        let str2 = "";
        if (useCookie("historicalCopy").value) {
          str2 = "\uFF0C\u4E4B\u524D\u7684\u6587\u6848\uFF1A" + useCookie("historicalCopy").value;
        }
        proxy.$api.ai_bulidChatGroupId(data).then((res) => {
          let datas = {
            content: str1 + "" + str2,
            groupId: res.data,
            robotCode: robotCode.value
          };
          loading.value = true;
          routing.setAiChat(proxy, datas);
        });
      }
    };
    const toBreak = () => {
      routing.abortReadingStream();
    };
    __expose({
      showFn,
      toBreak
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
      if (drawContent.value) {
        useCookie("historicalCopy").value = drawContent.value;
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Input = resolveComponent("Input");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "associate" }, _attrs))} data-v-e4231f6b><div class="associate-top" data-v-e4231f6b><div class="name" data-v-e4231f6b>\u667A\u80FD\u8054\u60F3</div><img${ssrRenderAttr("src", _imports_0)} data-v-e4231f6b></div>`);
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
      _push(`<div class="associate-btn" data-v-e4231f6b>${ssrInterpolate(loading.value ? "\u751F\u6210\u4E2D..." : "\u4F7F\u7528\u8BE5\u63CF\u8FF0")}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/modal/associate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const associate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4231f6b"]]);

export { associate as default };
//# sourceMappingURL=associate-9948283a.mjs.map
