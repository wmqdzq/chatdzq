import { _ as __nuxt_component_0 } from './workbenchNav-233b0f39.mjs';
import { a as _export_sfc, g as getRouting, u as useRouter, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { m as myImg, i as icon15, a as icon16, b as icon19, c as icon20, d as icon21, e as icon22, _ as _imports_0 } from './icon1-7fba1a45.mjs';
import { useRoute } from 'vue-router';
import { w as workbenchImg, r as recommendImg, e as employeeImg } from './employee-a21d8a27.mjs';
import './sPrompt-baa4194f.mjs';
import './close-5dffb58a.mjs';
import './cCreate-9b81dba0.mjs';
import './ossUploaderNew-da7960a9.mjs';
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
import './accountModel-962e2c16.mjs';
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
import './pwd-8f00960a.mjs';
import './nickname-667f2327.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const route = useRoute();
    useRouter();
    const pageTitle = ref("");
    getCurrentInstance();
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
        children: [
          // {
          // 	title:'AI对话',
          // 	url:'/ai/chat',
          // 	img:icon3,
          // 	imgActive:icon4
          // },
          // {
          // 	title:'AI写作',
          // 	url:'/ai/creative',
          // 	img:icon7,
          // 	imgActive:icon8
          // },
          // {
          // 	title:'AI搜索',
          // 	url:'/ai/search',
          // 	img:icon1,
          // 	imgActive:icon2
          // },
          // {
          // 	title:'AI绘画',
          // 	url:'/ai/draw/list',
          // 	img:icon9,
          // 	imgActive:icon10
          // },
          // {
          // 	title:'智能体',
          // 	url:'/ai/agent',
          // 	img:icon5,
          // 	imgActive:icon6
          // },
          // {
          // 	title:'AI音乐',
          // 	url:'/ai/music',
          // 	img:icon13,
          // 	imgActive:icon14
          // },
          // {
          // 	title:'AI实验室',
          // 	url:'/ai/laboratory',
          // 	img:icon11,
          // 	imgActive:icon12
          // },
        ]
      },
      {
        title: "AI\u6570\u5B57\u5458\u5DE5",
        url: "/ai/employee",
        name: "3",
        img: employeeImg,
        type: "employee"
      },
      {
        title: "\u6211\u7684",
        url: "",
        name: "4",
        img: myImg,
        type: "my",
        children: [
          {
            title: "\u6700\u8FD1\u4F7F\u7528",
            url: "/ai/agency",
            img: icon15,
            imgActive: icon16
          },
          {
            title: "\u6211\u7684\u667A\u80FD\u4F53",
            url: "/ai/robot",
            img: icon19,
            imgActive: icon20
          },
          {
            title: "\u6211\u7684\u6536\u85CF",
            url: "/ai/creative?type=collect",
            img: icon21,
            imgActive: icon22
          }
        ]
      }
    ]);
    const headData = ref(null);
    watch(() => route.meta, () => {
      console.log(route.meta);
    }, { deep: true, immediate: true });
    watch(() => route.meta.title, () => {
      console.log(route.meta);
      pageTitle.value = route.meta.title;
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_workbenchNav = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mains" }, _attrs))} data-v-7d94f574><div class="aiHeadComm" data-v-7d94f574><div class="headComm-nav" data-v-7d94f574><img class="icon"${ssrRenderAttr("src", _imports_0)} alt="" data-v-7d94f574><div class="headComm-nav-menu" data-v-7d94f574>`);
      _push(ssrRenderComponent(_component_workbenchNav, {
        borderStyle: "border-radius:0px 12px 12px 0px",
        list: routeList.value
      }, null, _parent));
      _push(`</div></div><div class="headComm-area" data-v-7d94f574><div class="headComm-logo" data-v-7d94f574><img${ssrRenderAttr("src", unref(routing).configuration.logo)} alt="" data-v-7d94f574><span data-v-7d94f574>${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}</span></div><div class="headComm-title" data-v-7d94f574>${ssrInterpolate(pageTitle.value)}</div><div class="headComm-back" data-v-7d94f574><em class="arrow" data-v-7d94f574></em> \u8FD4\u56DE </div></div>`);
      if (!_ctx.$isEmpty(headData.value)) {
        _push(`<div class="headComm-subTitle" data-v-7d94f574>${ssrInterpolate(headData.value.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="aiMianComm" data-v-7d94f574>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d94f574"]]);

export { detail as default };
//# sourceMappingURL=detail-019d92b8.mjs.map
