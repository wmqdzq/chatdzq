import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, u as useRouter, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { H as Header } from './index-87254bea.mjs';
import { n as networkingImg, p as pptImg, h as hrImg, a as aiSearchImg } from './ppt-40078db8.mjs';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
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
import './firmModal-85ac1a5f.mjs';
import './avatar-8802d9a1.mjs';
import './accountModel-09657c44.mjs';
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '@aws-sdk/client-s3';
import './phone-61ab024f.mjs';
import './pwd-50980682.mjs';
import './nickname-667f2327.mjs';

const musicImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAwFBMVEUAAACAYp+PYK+gWLOeXb2gasyiP52hbM6jSKihbM6jP56gedyiSqmhcdOjQJ+hf+GjSaijX8Cge9+kQaCiaMqic9WjSKehcdOhdtmjWrykPJuhctajW72ias2jY8b///+iZMahdtmhe96kQ6OiaMqjU7SkR6ajTa2kSqqjULCia82icNKic9WiYMGjV7ejWrujXb6kQJ+kPJuibc+lZcSuccbq2e/YueLz6fbOp9qtZbv79/yjf+C7iNDBk9W5eMFc1aNkAAAAH3RSTlMABRAfNlpcZXqEiI6TrrK2vcPK1dXd5uvr7/f6/f7+xKv9XAAABF9JREFUeNqVV+lCskAUxUwNty+zrBQE0QQjQRHZXHr/t/rmzgIzA5TNb86Ze8+cu6AoNafZUgfPr2/u4e3leaC2msqfzn3vZbH4+vpy3cPhE53VynxW729F36kIDXCEJwQrRIDO88PdTfCZtVjQ+2cHIKB409xq6m+pNDozC+NZAhw+3G63u/dO48fcnyzLKgLgEgjR/UCw241+CKKzoHAgcAmBvtIJ3iR439dadeH3LHb/oqxgjvd9r1+ZRuOfiJ+V8JTA87zHRi1eCOCzOgDP+ygzMDxVcCYnUBBoCP9RZuid5QCq8QiOCT76kv4V+LICLAF0Npu2UDnW+WyJT8jjQ5NX0MN42+H80HgSAgABXJ14EAjmkoKYYGOPG6UEmAdnEIAumLiMt+1OnsCMu59XEDw4N49JklyEBCjB5E56AYurYv1TxwHMTfNoGMbpWA7Acbq0gK2zkIBLPYQTmJshEBhJyCsIBI7j0BBUEc+eUKdFSAiMKNPo/XkAzvoBE7xZVUWkQwCA3xICI5ITQARj3APqEtBDlAB6QkpgxHkCNg1gvYY+2RMCcKU2hCyARQSGVA5gvQZDv8oBEAJdIEgxw4VXEPCQQ1NW0JX6KCY4pkBw+uYVXK+Xy2VTacn4GX3CcE6LCBP4MWYIeTwQtJVeZQLYAiFpxITAj7AdMk5BIOgqg+o2hOOf4yLCBJ6HGWKPUxDhl0PlqcaDczYJGIGXJUbMPyHg92NsI96DxSBgVQwEIVggTCUFl/v9RFnUTBKCLwhKFiAEU0XoAm5eBEUf1IAgowSigvv9PlDqJ0mokTaCCcQiygNABLOqBC5xhKx3SuJrVhAIHqR4lMIbFwDtg5fIyM8pDhkB6QY2n8A+mChPXAA6FiA+Gfw5pYRgg71ofPMBBMFYGeSjiHqYeDa+Xr6vacJYfI6ASyAI+ooqtZEUX0ostNtdE0aw2aQJnG9ewSDoKi1xFh8Q4nSmHkRPkBE9/E3JgxgftJWmqOAVyp5NIg310SzhCHL8nhGg8fQiFAFKNGKThMzSlBLYaQQn4wOYQlPs0XWMWAAIIAAtn0SYwLM3NhUx92CAJUBNVfAQpHBl24iGCI6QQgQJMAJOgQAvny+8B1fwfXxkszijzRAE8DM4No8fk8GCBdDJLA4vGBHFaXpNsaGhpZaqmBKQwXL3KhTRNTHEk1yqigjOlE5X1c1nMXqA8Ch4OUq9CgsUEpIQSABzttCGFxQ9nPgaVrYRgp/kO0qHNnJxHRNGodhGCEGxJTVGMArNEt6T2wh/f8BvevevrA/WBFDgCwWFpbtVWsf80jIgJjBtS4smv44VAWxqFezKq+5A3qg17+OHFxiWl+XRbwryBMOqdX0k7pPeH/GIQS1t1DVP2K37b2pptyQg6y8s3aNKCwhF8Nj8+bfvvdpDzALTduOXP8em+l6jIMBv+3d9mHiVo3B8E5zURn8iKIDg4/79337gm+3ucDRZO85yMh5227XK/QeTIvgXDbQWXAAAAABJRU5ErkJggg==";
const agencyImg = "" + buildAssetsURL("agency.8307d4f4.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "brain",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const occupyHeight = ref(0);
    const routing = getRouting();
    const routeList = ref([
      // {
      // 	name:"AI agent",
      // 	url:'/robot/brain/agent',
      // 	img:agentImg,
      // 	isSelect:false,
      // },
      {
        name: "\u8054\u7F51\u67E5\u8BE2",
        url: "/robot/brain/agency",
        img: agencyImg,
        isSelect: false
      },
      {
        name: "\u6587\u4EF6\u89E3\u8BFB",
        url: "/robot/brain/networking",
        img: networkingImg,
        isSelect: false
      },
      {
        name: "\u667A\u80FDPPT",
        url: "/robot/brain/ppt",
        img: pptImg,
        isSelect: false
      },
      // {
      // 	name:'智能海报',
      // 	url:'/robot/brain/placard',
      // 	img:placardImg,
      // 	isSelect:false,
      // },
      {
        name: "AI\u97F3\u4E50",
        url: "/robot/brain/music",
        img: musicImg,
        isSelect: false
      },
      {
        name: "\u667A\u80FDHR",
        url: "/robot/brain/hr",
        img: hrImg,
        isSelect: false
      },
      {
        name: "AI\u641C\u7D22",
        url: "/robot/brain/search",
        img: aiSearchImg,
        isSelect: false
      }
    ]);
    const getHeight = () => {
      var _a;
      occupyHeight.value = Number((_a = document.getElementById("main-header")) == null ? void 0 : _a.offsetHeight);
    };
    const checkRoute = () => {
      let url = router.currentRoute.value.path;
      routeList.value.forEach((item) => {
        item.isSelect = false;
        if (url.indexOf(item.url) != -1) {
          item.isSelect = true;
        }
      });
    };
    watch(() => router.currentRoute.value.path, () => {
      routing.setIsShowHis(false);
      checkRoute();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "brain" }, _attrs))} data-v-f3239cad>`);
      _push(ssrRenderComponent(Header, { onInit: getHeight }, null, _parent));
      _push(`<div class="brain-content" style="${ssrRenderStyle({ "height": "calc(100vh - " + unref(occupyHeight) + "px )" })}" data-v-f3239cad><div class="content-left" data-v-f3239cad><div class="${ssrRenderClass([unref(routing).isShowHis ? "leftShow" : "", "left-content"])}" data-v-f3239cad><!--[-->`);
      ssrRenderList(unref(routeList), (item, i) => {
        _push(`<div class="${ssrRenderClass([item.isSelect ? "active" : "", "content-item"])}" data-v-f3239cad><img${ssrRenderAttr("src", item.img)} data-v-f3239cad><div data-v-f3239cad>${ssrInterpolate(item.name)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="content-right" data-v-f3239cad>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/brain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brain = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3239cad"]]);

export { brain as default };
//# sourceMappingURL=brain-9d2c73cc.mjs.map
