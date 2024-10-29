import { _ as __nuxt_component_0 } from './workbenchNav-0b9ac1f2.mjs';
import { a as _export_sfc, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './cDenied-1ff40e26.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { h as homePng, a as addressBookPng, t as trainPng, w as workbenchPng, b as applyPng, d as digitalPng, c as assetsPng, s as settingsPng } from './settings-806b801d.mjs';
import './sPrompt-baa4194f.mjs';
import './close-5dffb58a.mjs';
import './cCreate-a5f9051b.mjs';
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import 'vant';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import '@aws-sdk/client-s3';
import './addBase-d16bc2bd.mjs';
import './robot-20021510.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './avatar-8802d9a1.mjs';
import './index-3a8d75d8.mjs';
import './accountModel-09657c44.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "backstage",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const { proxy } = getCurrentInstance();
    const thirdList = ref([]);
    const active = ref("");
    const routeList = ref([
      { title: "\u9996\u9875", name: "1", img: homePng, url: "/ai/enterprise/home" },
      { title: "\u901A\u8BAF\u5F55", name: "2", img: addressBookPng, children: [
        { title: "\u6210\u5458\u7BA1\u7406", name: "2-1", url: "/ai/enterprise/staff" },
        { title: "\u90E8\u95E8\u7BA1\u7406", name: "2-2", url: "/ai/enterprise/staff/section" },
        { title: "\u7528\u6237\u7EC4\u7BA1\u7406", name: "2-3", url: "/ai/enterprise/staff/role" },
        { title: "\u5BA1\u6279\u7BA1\u7406", name: "2-4", url: "/ai/enterprise/staff/approval", num: routing.approvalNum }
      ] },
      { title: "\u8BAD\u7EC3\u4E2D\u5FC3", name: "3", img: trainPng, children: [
        { title: "\u667A\u80FD\u4F53(\u65E7\u7248)", name: "3-1-1", url: "/ai/enterprise/train/original" },
        { title: "\u667A\u80FD\u4F53", name: "3-1", url: "/ai/enterprise/train" },
        { title: "\u77E5\u8BC6\u5E93(\u65E7\u7248)", name: "3-2", url: "/ai/enterprise/bank" },
        { title: "\u77E5\u8BC6\u5E93", name: "3-3", url: "/ai/enterprise/knowledge" },
        { title: "\u6280\u80FD", name: "3-4", url: "/ai/enterprise/skill" }
      ] },
      { title: "\u5DE5\u4F5C\u53F0", type: "workbench", name: "6", img: workbenchPng, children: [
        { title: "\u5DE5\u4F5C\u53F0\u914D\u7F6E", name: "6-1", url: "/ai/enterprise/build/workbench", children: [
          { title: "\u5DE5\u4F5C\u53F0", name: "6-1-1", url: "/ai/enterprise/build/workbench" },
          { title: "\u63A8\u8350AI\u5E94\u7528", name: "6-1-2", url: "/ai/enterprise/build/workbench/app" }
        ] },
        { title: "\u4F01\u4E1A\u5EFA\u7AD9", name: "6-2", url: "/ai/enterprise/build/config", children: [
          { title: "\u5BA3\u4F20\u9875\u6A21\u677F", name: "6-2-1", url: "/ai/enterprise/build/template" },
          { title: "\u5BA3\u4F20\u9875\u5BFC\u822A", name: "6-2-2", url: "/ai/enterprise/build/navigation" }
        ] }
      ] },
      { title: "AI\u5E94\u7528", name: "4", img: applyPng, children: [
        { title: "\u667A\u80FD\u5BA2\u670D", name: "4-1", url: "/ai/enterprise/service" },
        { title: "\u5BA2\u6237\u7BA1\u7406", name: "4-2", url: "/ai/enterprise/client" }
      ] },
      { title: "AI\u6570\u5B57\u5458\u5DE5", name: "5", img: digitalPng, url: "/ai/enterprise/employee" },
      { title: "\u6570\u636E\u8D44\u4EA7", name: "7", img: assetsPng, children: [
        // {title:'数据保障',name:'7-1'},
        { title: "\u5E94\u7528\u6570\u636E", name: "7-2", url: "/ai/enterprise/date" },
        { title: "\u6570\u636E\u6D1E\u5BDF", name: "7-3", url: "/ai/enterprise/total" },
        { title: "\u6570\u636E\u96C6", name: "7-4", url: "/ai/enterprise/assemble" }
      ] },
      { title: "\u4F01\u4E1A\u8BBE\u7F6E", name: "8", img: settingsPng, children: [
        { title: "\u4F01\u4E1A\u4FE1\u606F", name: "8-1", url: "/ai/enterprise/account" },
        // {title:'权限管理',name:'8-2'},
        { title: "\u8BA2\u5355\u7BA1\u7406", name: "8-3", url: "/ai/enterprise/account/order", children: [
          { title: "\u7535\u91CF\u8BB0\u5F55", name: "8-3-1", url: "/ai/enterprise/account/electric" },
          { title: "\u8BA2\u5355\u8BB0\u5F55", name: "8-3-2", url: "/ai/enterprise/account/order" }
        ] },
        { title: "\u56DE\u6536\u7AD9", name: "8-4", url: "/ai/enterprise/recycle/data", children: [
          { title: "\u5E94\u7528\u6570\u636E", name: "8-4-1", url: "/ai/enterprise/recycle/data" },
          { title: "\u77E5\u8BC6\u5E93", name: "8-4-2", url: "/ai/enterprise/recycle/knowledge" },
          { title: "\u667A\u80FD\u4F53", name: "8-4-3", url: "/ai/enterprise/recycle/robot" }
        ] }
      ] }
    ]);
    const router = useRouter();
    const selectRoute = () => {
      thirdList.value = [];
      routeList.value.forEach((item) => {
        if (item.children) {
          item.children.forEach((iten) => {
            if (iten.children) {
              iten.children.forEach((it, index) => {
                if (it.url && it.url == router.currentRoute.value.path) {
                  thirdList.value = iten.children;
                  active.value = index;
                }
              });
            }
          });
        }
      });
      routing.setApprovalNum(proxy);
    };
    watch(() => router.currentRoute.value.path, () => {
      selectRoute();
      routing.setPermList(proxy);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_workbenchNav = __nuxt_component_0;
      const _component_Button = resolveComponent("Button");
      const _component_NuxtPage = __nuxt_component_1$2;
      const _component_cDenied = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "workbench" }, _attrs))} data-v-8b695c33><div class="workbench-nav" data-v-8b695c33>`);
      _push(ssrRenderComponent(_component_workbenchNav, {
        list: routeList.value,
        isGray: true,
        isLimit: true
      }, null, _parent));
      _push(`</div><div class="workbench-content" data-v-8b695c33>`);
      if (thirdList.value.length > 0) {
        _push(`<div class="page-top" data-v-8b695c33><!--[-->`);
        ssrRenderList(thirdList.value, (item, index) => {
          _push(ssrRenderComponent(_component_Button, {
            class: "page-btn",
            onClick: ($event) => unref(router).push(item.url),
            type: active.value == index ? "primary" : "text"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([thirdList.value.length > 0 ? "page1" : "page2", "page-content"])}" data-v-8b695c33>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_cDenied, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/backstage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backstage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b695c33"]]);

export { backstage as default };
//# sourceMappingURL=backstage-1e1b0588.mjs.map
