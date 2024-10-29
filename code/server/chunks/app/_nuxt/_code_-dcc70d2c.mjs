import { useSSRContext, defineComponent, ref, getCurrentInstance, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import mobile from './mobile-3f4dcb5e.mjs';
import PC from './PC-987433f8.mjs';
import verify from './verify-2d661fe4.mjs';
import { useRouter } from 'vue-router';
import { a as _export_sfc } from '../server.mjs';
import './bottom-arrow-07ec677f.mjs';
import './close-e8808509.mjs';
import './confirm-4cbfa28f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
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
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    const pageType = ref("");
    getCurrentInstance();
    useRouter();
    const answerParams = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "answer" }, _attrs))} data-v-4e4c3dea>`);
      if (answerParams.value && answerParams.value.code) {
        _push(`<!--[-->`);
        if (answerParams.value.dataStatus == "NOT_WRITTEN_TEST") {
          _push(`<!--[-->`);
          if (pageType.value == "H5") {
            _push(ssrRenderComponent(mobile, { data: answerParams.value }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (pageType.value == "PC") {
            _push(ssrRenderComponent(PC, { data: answerParams.value }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(ssrRenderComponent(verify, null, null, _parent));
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/answer/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _code_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e4c3dea"]]);

export { _code_ as default };
//# sourceMappingURL=_code_-dcc70d2c.mjs.map
