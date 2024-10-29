import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './add1-1153134a.mjs';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { _ as _imports_2 } from './delete-79bda725.mjs';
import { H as Header } from './index-87254bea.mjs';
import { useRouter } from 'vue-router';
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

const nav1Img = "" + buildAssetsURL("nav1.400c7f16.png");
const nav2Img = "data:image/png;base64,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";
const nav3Img = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "robot",
  __ssrInlineRender: true,
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const routing = getRouting();
    const occupyHeight = ref(0);
    const navKey = ref("CHAT");
    const robotNav = ref([
      {
        key: "CHAT",
        value: "\u5BF9\u8BDD",
        icon: "nav1",
        url: "/robot/chat",
        img: nav1Img
      },
      {
        key: "CREATIVE",
        value: "\u521B\u4F5C",
        icon: "nav2",
        url: "/robot/chat/creative",
        img: nav2Img
      },
      {
        key: "AGENT",
        value: "\u667A\u80FD\u4F53",
        icon: "nav3",
        url: "/robot/chat/role",
        img: nav3Img
      }
    ]);
    const robotList = ref([]);
    const robotList2 = ref([]);
    const onAgentRobotList = () => {
      let data = {
        type: "ROLE"
      };
      proxy.$api.space_robotQuery({
        type: "CHAT"
      }).then((res) => {
        robotList.value = res.data;
      });
      proxy.$api.queryCollectRobotList(data).then((res) => {
        robotList2.value = res.data;
      });
    };
    proxy.$debounce((record, type) => {
      if (type == 1) {
        proxy.$confirmItem(["\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?", "\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528"], "space_robotDel", {
          code: record.code
        }, onAgentRobotList);
      }
      if (type == 2) {
        proxy.$confirmItem(["\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?", "\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528"], "deleteCategoryRobot", {
          relationCode: record.collectRelationCode,
          categoryType: "STAR_ROBOT_CATEGORY"
        }, toBack);
      }
    }, 300);
    const toBack = () => {
      router.push("/robot/chat/role");
      onAgentRobotList();
    };
    watch(() => router.currentRoute.value, (data) => {
      const matchedItem = robotNav.value.find((item) => data.path === item.url);
      if (matchedItem) {
        navKey.value = matchedItem.key;
        if (navKey.value == "CHAT" && !proxy.$isEmpty(data.query)) {
          navKey.value = data.query.code;
        }
      }
    }, { deep: true, immediate: true });
    watch(() => router.currentRoute.value.path, () => {
      routing.abortReadingStream();
      if (router.currentRoute.value.path == "/robot/chat/role") {
        if (router.currentRoute.value.query && router.currentRoute.value.query.code) {
          proxy.$api.collectRobot({
            robotCode: router.currentRoute.value.query.code,
            categoryType: "STAR_ROBOT_CATEGORY"
          }).then(() => {
            onAgentRobotList();
          });
        }
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mains" }, _attrs))} data-v-19b58c97>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<div class="main-content" style="${ssrRenderStyle({ "height": "calc(100vh - " + occupyHeight.value + "px )" })}" data-v-19b58c97><div class="chatNavList" data-v-19b58c97><ul data-v-19b58c97><!--[-->`);
      ssrRenderList(robotNav.value, (item, index) => {
        _push(`<li class="${ssrRenderClass([item.key == navKey.value ? "active" : "", "text-hide"])}" data-v-19b58c97><img class="img"${ssrRenderAttr("src", item.img)} alt="" data-v-19b58c97> ${ssrInterpolate(item.value)}</li>`);
      });
      _push(`<!--]--><li class="text-hide add" data-v-19b58c97><img class="img"${ssrRenderAttr("src", _imports_0)} alt="" data-v-19b58c97> \u521B\u5EFA\u667A\u80FD\u4F53 </li><!--[-->`);
      ssrRenderList(robotList.value, (item, index) => {
        _push(`<li class="${ssrRenderClass([item.code == navKey.value ? "active" : "", "text-hide"])}" data-v-19b58c97>`);
        if (item.robotLogo) {
          _push(`<img class="img"${ssrRenderAttr("src", item.robotLogo)} alt="" data-v-19b58c97>`);
        } else {
          _push(`<img class="img"${ssrRenderAttr("src", _imports_1)} alt="" data-v-19b58c97>`);
        }
        _push(` ${ssrInterpolate(item.name)} <img class="deleteIco"${ssrRenderAttr("src", _imports_2)} data-v-19b58c97></li>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(robotList2.value, (item, index) => {
        _push(`<li class="${ssrRenderClass([item.code == navKey.value ? "active" : "", "text-hide"])}" data-v-19b58c97>`);
        if (item.robotLogo) {
          _push(`<img class="img"${ssrRenderAttr("src", item.robotLogo)} alt="" data-v-19b58c97>`);
        } else {
          _push(`<img class="img"${ssrRenderAttr("src", _imports_1)} alt="" data-v-19b58c97>`);
        }
        _push(` ${ssrInterpolate(item.name)} <img class="deleteIco"${ssrRenderAttr("src", _imports_2)} data-v-19b58c97></li>`);
      });
      _push(`<!--]--></ul></div><div class="main-content-right" data-v-19b58c97>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/robot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19b58c97"]]);

export { robot as default };
//# sourceMappingURL=robot-a2a356c4.mjs.map
