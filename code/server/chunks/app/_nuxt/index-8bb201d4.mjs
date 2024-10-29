import { a as _export_sfc, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { H as Header } from './index-87254bea.mjs';
import { F as Footer } from './index-db8f7f5c.mjs';
import { useRouter } from 'vue-router';
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
import './firmModal-85ac1a5f.mjs';
import './avatar-8802d9a1.mjs';
import './accountModel-09657c44.mjs';
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './phone-61ab024f.mjs';
import './pwd-50980682.mjs';
import './nickname-667f2327.mjs';
import './footer-logo-0e992e13.mjs';
import './index-3a8d75d8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    getCurrentInstance();
    const routers = useRouter();
    ref(0);
    const occupyHeader = ref(0);
    const homePageRef = ref(null);
    const isAdShow = ref(false);
    const routing = getRouting();
    watch(() => routers.currentRoute.value.path, (newValue) => {
      homePageRef.value.scrollTop = 0;
    });
    watch(
      () => routing.firmParams,
      (newValue) => {
        if (newValue.isPaidTeamFlag) {
          isAdShow.value = false;
        } else {
          isAdShow.value = true;
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homePage" }, _attrs))} data-v-d81231ba>`);
      _push(ssrRenderComponent(Header, { id: "main-header" }, null, _parent));
      _push(`<div class="homePage-content" style="${ssrRenderStyle({ height: "calc(100vh - " + occupyHeader.value + "px )" })}" data-v-d81231ba><div class="main-page" style="${ssrRenderStyle({ "min-height": "calc(100vh - " + occupyHeader.value + "px )" })}" data-v-d81231ba>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
      if (isAdShow.value) {
        _push(ssrRenderComponent(Footer, { id: "main-footer" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d81231ba"]]);

export { index as default };
//# sourceMappingURL=index-8bb201d4.mjs.map
