import { a as _export_sfc, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { H as Header } from './index-87254bea.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "noleft",
  __ssrInlineRender: true,
  setup(__props) {
    const occupyHeight = ref(68);
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const routing = getRouting();
    const handleUrl = () => {
      const name = router.currentRoute.value.path.split("/")[2];
      if (name == "creative") {
        onCateRobotList("QUESTION_BANK_ROBOT_CATEGORY");
      }
    };
    const onCateRobotList = async (cate) => {
      try {
        const data = {
          keyword: "",
          type: cate
        };
        const res = await proxy.$api.queryCategoryRobotList(data);
        routing.setRobotList(res.data);
      } catch (error) {
        console.error("\u8BF7\u6C42\u5931\u8D25\uFF1A", error);
      }
    };
    const getHeight = () => {
      var _a;
      occupyHeight.value = Number((_a = document.getElementById("main-header")) == null ? void 0 : _a.offsetHeight);
    };
    watch(() => router.currentRoute.value.path, () => {
      handleUrl();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "noleft" }, _attrs))} data-v-607c4f50>`);
      _push(ssrRenderComponent(Header, {
        id: "main-header",
        onInit: getHeight
      }, null, _parent));
      _push(`<div class="noleft-content" style="${ssrRenderStyle({ height: "calc(100vh - " + occupyHeight.value + "px )" })}" data-v-607c4f50>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/noleft.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const noleft = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-607c4f50"]]);

export { noleft as default };
//# sourceMappingURL=noleft-15fc951d.mjs.map
