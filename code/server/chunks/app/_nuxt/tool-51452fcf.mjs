import { _ as __nuxt_component_2 } from './cCreate-a5f9051b.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
import { useRouter } from 'vue-router';
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
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tool",
  __ssrInlineRender: true,
  setup(__props) {
    getRouting();
    useRouter();
    getCurrentInstance();
    ref(false);
    const cCreateRef = ref();
    const list = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cCreate = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aiArea" }, _attrs))} data-v-4204aafd><div class="list-area" data-v-4204aafd><!--[-->`);
      ssrRenderList(list.value, (item, index) => {
        _push(`<div class="list clearfix" data-v-4204aafd><h2 data-v-4204aafd>${ssrInterpolate(item.name)}</h2>`);
        if (!_ctx.$isEmpty(item.queryTagInfoRobotList)) {
          _push(`<ul class="robot-list" data-v-4204aafd><!--[-->`);
          ssrRenderList(item.queryTagInfoRobotList, (robot, idx) => {
            _push(`<li class="robot" data-v-4204aafd>`);
            if (!_ctx.$isEmpty(robot.robotLogo)) {
              _push(`<img class="robot-logo"${ssrRenderAttr("src", robot.robotLogo)} alt="" data-v-4204aafd>`);
            } else {
              _push(`<img class="robot-logo"${ssrRenderAttr("src", _imports_1)} data-v-4204aafd>`);
            }
            _push(`<h3${ssrRenderAttr("title", robot.robotName)} data-v-4204aafd>${ssrInterpolate(robot.robotName)}</h3><p${ssrRenderAttr("title", robot.robotDescribe)} data-v-4204aafd>${ssrInterpolate(robot.robotDescribe)}</p></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_cCreate, {
        ref_key: "cCreateRef",
        ref: cCreateRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/app/tool.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tool = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4204aafd"]]);

export { tool as default };
//# sourceMappingURL=tool-51452fcf.mjs.map
