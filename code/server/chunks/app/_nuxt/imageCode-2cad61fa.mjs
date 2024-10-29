import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';
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
  __name: "imageCode",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { proxy } = getCurrentInstance();
    const captchaCode = ref("");
    const imgUrl = ref(false);
    const phoneNum = ref("");
    const sendCode = ref("");
    const getCodeImg = (phone, sendCodeType) => {
      phoneNum.value = phone;
      sendCode.value = sendCodeType;
      getC();
    };
    const getC = () => {
      let data = {
        account: phoneNum.value,
        sendCodeType: sendCode.value
      };
      proxy.$api.captchaImage(data).then((res) => {
        imgUrl.value = "data:image/png;base64," + res.data;
      }).catch(() => {
      });
    };
    __expose({
      getCodeImg,
      captchaCode
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      if (imgUrl.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "codeImg code" }, _attrs))} data-v-c4f1e2b4>`);
        _push(ssrRenderComponent(_component_Input, {
          size: "large",
          modelValue: captchaCode.value,
          "onUpdate:modelValue": ($event) => captchaCode.value = $event,
          placeholder: "\u56FE\u7247\u9A8C\u8BC1\u7801"
        }, null, _parent));
        _push(`<img class="pointer"${ssrRenderAttr("src", imgUrl.value)} alt="Base64 Image" data-v-c4f1e2b4></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/components/imageCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4f1e2b4"]]);

export { ImageCode as default };
//# sourceMappingURL=imageCode-2cad61fa.mjs.map
