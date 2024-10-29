import { g as getRouting, b as useCookie } from '../server.mjs';
import { defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { r as recordCom } from './recordNew-bd12a5c8.mjs';
import { _ as _imports_1 } from './robot-20021510.mjs';
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
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './previewImg-8e12aab7.mjs';
import './cCreate-a5f9051b.mjs';
import './addBase-d16bc2bd.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './edit1-d50fac04.mjs';
import './copy-d1ce3f41.mjs';
import './switch-59f92d8c.mjs';
import './content-977f7524.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './avatar-8802d9a1.mjs';
import './barrage-e0763a91.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const recordComRef = ref();
    const chatList = ref([]);
    const init = () => {
      var _a;
      proxy.$api.queryShareAiRecordDetail({
        code: (_a = router.currentRoute.value.params) == null ? void 0 : _a.code
      }).then((res) => {
        chatList.value = res.data;
      });
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sharePagesCom" }, _attrs))}><div class="logo"><img${ssrRenderAttr("src", unref(routing).configuration.homeLogo)}></div><div class="dialogue">`);
      _push(ssrRenderComponent(recordCom, {
        ref_key: "recordComRef",
        ref: recordComRef,
        robotLogo: unref(_imports_1),
        operation: false,
        chatList: chatList.value,
        onScrollTop: _ctx.onScrollTop,
        onScrollBottom: _ctx.onScrollBottom
      }, null, _parent));
      if (!("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("authtoken").value) {
        _push(`<div class="share-mask">`);
        _push(ssrRenderComponent(_component_Button, {
          size: "large",
          type: "primary",
          onClick: ($event) => unref(router).push("/login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8BF7\u767B\u5F55\u67E5\u770B\u5168\u90E8`);
            } else {
              return [
                createTextVNode("\u8BF7\u767B\u5F55\u67E5\u770B\u5168\u90E8")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/chatInfo/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_code_-afa87dad.mjs.map
