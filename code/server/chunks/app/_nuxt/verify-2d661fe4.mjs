import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './confirm-4cbfa28f.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "verify" }, _attrs))} data-v-62213b7e><div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-62213b7e><img class="content-logo"${ssrRenderAttr("src", _imports_0)} data-v-62213b7e><div style="${ssrRenderStyle({ "color": "rgba(26, 26, 26, 1)", "font-weight": "500" })}" data-v-62213b7e>\u5DF2\u63D0\u4EA4\uFF0C\u8BF7\u9759\u5019\u7B14\u8BD5\u7ED3\u679C\u901A\u77E5</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/answer/components/verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const verify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-62213b7e"]]);

export { verify as default };
//# sourceMappingURL=verify-2d661fe4.mjs.map
