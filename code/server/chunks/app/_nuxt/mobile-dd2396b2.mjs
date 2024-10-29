import { a as _export_sfc, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "mobile",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_van_back_top = resolveComponent("van-back-top");
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile" }, _attrs))} data-v-1d2b050e>`);
      _push(ssrRenderComponent(_component_van_back_top, { style: { "z-index": "3000" } }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/mobile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d2b050e"]]);

export { mobile as default };
//# sourceMappingURL=mobile-dd2396b2.mjs.map
