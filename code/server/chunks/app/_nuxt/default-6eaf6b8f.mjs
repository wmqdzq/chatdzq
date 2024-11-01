import { a as _export_sfc, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { H as Header } from './index-2dcc6393.mjs';
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
import './firmModal-85ac1a5f.mjs';
import './avatar-8802d9a1.mjs';
import './accountModel-962e2c16.mjs';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './phone-61ab024f.mjs';
import './pwd-8f00960a.mjs';
import './nickname-667f2327.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const occupyHeight = ref(0);
    const init = () => {
      setTimeout(() => {
        var _a;
        occupyHeight.value = Number((_a = document.getElementById("main-header")) == null ? void 0 : _a.offsetHeight);
      }, 1e3);
    };
    watch(
      () => routing.firmParams,
      (newValue) => {
        init();
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mains" }, _attrs))} data-v-5e13395d>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<div class="main-content" style="${ssrRenderStyle({ "height": "calc(100vh - " + occupyHeight.value + "px )" })}" data-v-5e13395d><div class="main-content-right" data-v-5e13395d>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e13395d"]]);

export { _default as default };
//# sourceMappingURL=default-6eaf6b8f.mjs.map
