import { _ as __nuxt_component_0 } from './workbenchNav-0b9ac1f2.mjs';
import { a as _export_sfc, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './cDenied-1ff40e26.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { w as workbenchImg, r as recommendImg, e as employeeImg } from './employee-a21d8a27.mjs';
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
  __name: "workbench",
  __ssrInlineRender: true,
  setup(__props) {
    getCurrentInstance();
    const routing = getRouting();
    const router = useRouter();
    const routeList = ref([
      {
        title: "\u5DE5\u4F5C\u53F0",
        url: "",
        name: "2",
        img: workbenchImg,
        type: "workbench",
        children: []
      },
      {
        title: "\u63A8\u8350AI\u5E94\u7528",
        url: "",
        name: "1",
        img: recommendImg,
        type: "recommend",
        children: []
      },
      {
        title: "AI\u6570\u5B57\u5458\u5DE5",
        url: "/ai/employee",
        name: "3",
        img: employeeImg,
        type: "employee"
      }
    ]);
    watch(() => routing.firmParams, (iten) => {
      if (iten.isPaidTeamFlag === false)
        ;
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_workbenchNav = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1$2;
      const _component_cDenied = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "workbench" }, _attrs))} data-v-8182bbae><div class="workbench-nav" style="${ssrRenderStyle({ "z-index": unref(router).currentRoute.value.path == "/ai/ppt" ? "300" : "302" })}" data-v-8182bbae>`);
      _push(ssrRenderComponent(_component_workbenchNav, { list: routeList.value }, null, _parent));
      _push(`</div><div class="workbench-content" data-v-8182bbae>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_cDenied, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/workbench.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const workbench = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8182bbae"]]);

export { workbench as default };
//# sourceMappingURL=workbench-4d478df7.mjs.map
