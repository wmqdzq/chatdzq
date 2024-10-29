import { b as buildAssetsURL } from '../../paths.mjs';
import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { H as Header } from './index-87254bea.mjs';
import { n as nodata } from './nodata-3988aadd.mjs';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import './firmModal-85ac1a5f.mjs';
import './avatar-8802d9a1.mjs';
import './accountModel-09657c44.mjs';
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import 'vant';
import './loding-9ec1fb58.mjs';
import '@aws-sdk/client-s3';
import './phone-61ab024f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
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
import 'defu';
import 'qrcode.vue';
import './pwd-50980682.mjs';
import './nickname-667f2327.mjs';

const _imports_0 = "" + buildAssetsURL("guide.1b4e5bd2.png");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7ZaxDYMwEEXv4jRIFJRAxQhZIRtkBDJZkgmiTJBskIyQBkSZgt45I9Hfme/OT0IGdPCfZPtkokwmo6QSmqY5EZidtrAoircM97ZtLwRELbDive+REmoBCT7K8EVLsKW4ruuOmZ9y2y0fM1/HcTzTBkwCKSTMAmiJKAGkRLQASsLRBuZ5/pVl+ZDg0KAquQ7yzPL+pf2HuQ+ggU6B9IfbNE09GYAtwpjwaAFUeJQAMtwsgA43CaQID6i3YYpwk8AKMjyw1xaG84BzrhqG4UOZTAbIH5vPd0uoPd5cAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    getRouting();
    const shareType = ref("image");
    const isWeiChat = ref(false);
    const occupyHeader = ref(0);
    useRouter();
    getCurrentInstance();
    const pageType = ref("PC");
    const imgUrl = ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svga = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "qrCode" }, _attrs))} data-v-76ca363b>`);
      if (isWeiChat.value) {
        _push(`<div class="shadow" data-v-76ca363b><img${ssrRenderAttr("src", _imports_0)} data-v-76ca363b></div>`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == "PC") {
        _push(`<!--[--><div class="qrCode-header" data-v-76ca363b>`);
        _push(ssrRenderComponent(Header, null, null, _parent));
        _push(`</div><div class="qrCode-content" style="${ssrRenderStyle({ height: "calc(100vh - " + occupyHeader.value + "px )" })}" data-v-76ca363b><div class="qrCode-content-action" data-v-76ca363b>`);
        if (imgUrl.value) {
          _push(`<!--[-->`);
          if (shareType.value == "image") {
            _push(`<img class="shareImg"${ssrRenderAttr("src", imgUrl.value)} data-v-76ca363b>`);
          } else {
            _push(`<!---->`);
          }
          if (shareType.value == "music") {
            _push(`<video controls crossorigin="anonymous" class="shareImg" data-v-76ca363b><source${ssrRenderAttr("src", imgUrl.value)} type="video/mp4" data-v-76ca363b></video>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="action" data-v-76ca363b><div class="action-item" data-v-76ca363b><img${ssrRenderAttr("src", _imports_1)} data-v-76ca363b><div data-v-76ca363b>\u4FDD\u5B58</div></div></div><!--]-->`);
        } else {
          _push(ssrRenderComponent(_component_svga, {
            svgaImg: unref(nodata),
            canvasName: "loading",
            width: 220
          }, null, _parent));
        }
        _push(`</div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == "H5") {
        _push(`<div class="qrCode-h5" data-v-76ca363b><div class="qrCode-h5-top" data-v-76ca363b><img${ssrRenderAttr("src", _imports_2)} data-v-76ca363b></div><div class="qrCode-h5-content" data-v-76ca363b>`);
        if (imgUrl.value) {
          _push(`<!--[--><div class="content-img" data-v-76ca363b>`);
          if (shareType.value == "image") {
            _push(`<img${ssrRenderAttr("src", imgUrl.value)} data-v-76ca363b>`);
          } else {
            _push(`<!---->`);
          }
          if (shareType.value == "music") {
            _push(`<video controls crossorigin="anonymous" data-v-76ca363b><source${ssrRenderAttr("src", imgUrl.value)} type="video/mp4" data-v-76ca363b></video>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="content-action" data-v-76ca363b><div class="action" data-v-76ca363b><img${ssrRenderAttr("src", _imports_3)} data-v-76ca363b><div data-v-76ca363b>\u4FDD\u5B58</div></div></div><!--]-->`);
        } else {
          _push(`<div class="nodata" data-v-76ca363b>`);
          _push(ssrRenderComponent(_component_svga, {
            svgaImg: unref(nodata),
            canvasName: "loading",
            width: 220
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/qr/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _code_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76ca363b"]]);

export { _code_ as default };
//# sourceMappingURL=_code_-8c64e253.mjs.map
