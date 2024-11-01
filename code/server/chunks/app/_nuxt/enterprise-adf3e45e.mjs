import { _ as __nuxt_component_0 } from './navLeft-e5366511.mjs';
import { a as _export_sfc, g as getRouting, u as useRouter, i as __nuxt_component_0$2, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, mergeProps, withCtx, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { H as Header } from './index-2dcc6393.mjs';
import './avatar-8802d9a1.mjs';
import './firmModal-85ac1a5f.mjs';
import 'vue-router';
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

const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "enterprise",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const occupyHeight = ref(0);
    const routers = useRouter();
    const { proxy } = getCurrentInstance();
    const list = ref([
      { name: "", type: "slot", slot: "enterprise" }
    ]);
    watch(() => routers.currentRoute.value.path, () => {
      proxy.$isFirm();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navLeft = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mains" }, _attrs))} data-v-14d87238>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<div class="main-content" style="${ssrRenderStyle({ "height": "calc(100vh - " + occupyHeight.value + "px )" })}" data-v-14d87238>`);
      if (list.value.length > 0) {
        _push(ssrRenderComponent(_component_navLeft, { list: list.value }, {
          enterprise: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="enterprise-name" data-v-14d87238${_scopeId}>\u4F01\u4E1A/\u56E2\u961F\u7BA1\u7406</div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: ["mainContentLeftChildrenItem", unref(routing).path == "/enterprise/staff" ? "active" : ""],
                to: "/enterprise/staff"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_0)} data-v-14d87238${_scopeId2}><div class="name" data-v-14d87238${_scopeId2}>\u4EBA\u5458\u7BA1\u7406</div>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_0 }),
                      createVNode("div", { class: "name" }, "\u4EBA\u5458\u7BA1\u7406")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: ["mainContentLeftChildrenItem", unref(routing).path == "/enterprise/role" ? "active" : ""],
                to: "/enterprise/role"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_1)} data-v-14d87238${_scopeId2}><div class="name" data-v-14d87238${_scopeId2}>\u89D2\u8272\u7BA1\u7406</div>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_1 }),
                      createVNode("div", { class: "name" }, "\u89D2\u8272\u7BA1\u7406")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: ["mainContentLeftChildrenItem", unref(routing).path == "/enterprise/approval" ? "active" : ""],
                to: "/enterprise/approval"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_2)} data-v-14d87238${_scopeId2}><div class="name" data-v-14d87238${_scopeId2}>\u5F85\u5BA1\u6279</div>`);
                  } else {
                    return [
                      createVNode("img", { src: _imports_2 }),
                      createVNode("div", { class: "name" }, "\u5F85\u5BA1\u6279")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "enterprise-name" }, "\u4F01\u4E1A/\u56E2\u961F\u7BA1\u7406"),
                createVNode(_component_NuxtLink, {
                  class: ["mainContentLeftChildrenItem", unref(routing).path == "/enterprise/staff" ? "active" : ""],
                  to: "/enterprise/staff"
                }, {
                  default: withCtx(() => [
                    createVNode("img", { src: _imports_0 }),
                    createVNode("div", { class: "name" }, "\u4EBA\u5458\u7BA1\u7406")
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_NuxtLink, {
                  class: ["mainContentLeftChildrenItem", unref(routing).path == "/enterprise/role" ? "active" : ""],
                  to: "/enterprise/role"
                }, {
                  default: withCtx(() => [
                    createVNode("img", { src: _imports_1 }),
                    createVNode("div", { class: "name" }, "\u89D2\u8272\u7BA1\u7406")
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_NuxtLink, {
                  class: ["mainContentLeftChildrenItem", unref(routing).path == "/enterprise/approval" ? "active" : ""],
                  to: "/enterprise/approval"
                }, {
                  default: withCtx(() => [
                    createVNode("img", { src: _imports_2 }),
                    createVNode("div", { class: "name" }, "\u5F85\u5BA1\u6279")
                  ]),
                  _: 1
                }, 8, ["class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="main-content-right" data-v-14d87238>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/enterprise.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const enterprise = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14d87238"]]);

export { enterprise as default };
//# sourceMappingURL=enterprise-adf3e45e.mjs.map
