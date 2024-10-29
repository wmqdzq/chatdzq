import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "userAgreement",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "userAgreement" }, _attrs))} data-v-60098886><div data-v-60098886>\u7528\u6237\u534F\u8BAE</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/userAgreement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const userAgreement = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60098886"]]);

export { userAgreement as default };
//# sourceMappingURL=userAgreement-7a76d3fc.mjs.map
