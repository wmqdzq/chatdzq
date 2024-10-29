import { _ as __nuxt_component_2 } from './cCreate-a5f9051b.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_3 } from './banner-de37f1fc.mjs';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { a as _export_sfc, f as useI18n, g as getRouting } from '../server.mjs';
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
  __name: "often",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    getRouting();
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    ref(false);
    const cCreateRef = ref();
    const info = ref({});
    const usedRobotList = ref([]);
    const onWorkbenchInfo = () => {
      if (!proxy.$isEmpty(router.currentRoute.value.query.code)) {
        let data = {
          code: router.currentRoute.value.query.code,
          bizType: router.currentRoute.value.query.bizType
        };
        proxy.$api.getWorkbenchInfo(data).then((res) => {
          info.value = res.data;
          if (res.data.bizType == "WORKBENCH_PERSONAL") {
            onUsedRobotList();
          }
        });
      }
    };
    const onUsedRobotList = () => {
      proxy.$api.queryCommonlyUsedRobotList().then((res) => {
        usedRobotList.value = res.data;
      });
    };
    watch(() => router.currentRoute.value, (item) => {
      if (item.path == "/ai/app/often") {
        onWorkbenchInfo();
      }
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      const _component_cCreate = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aiArea" }, _attrs))} data-v-26d311e4><div class="aiTitle" data-v-26d311e4><h2 data-v-26d311e4>${ssrInterpolate(info.value.name)}</h2>`);
      if (info.value.editFlag) {
        _push(`<div class="${ssrRenderClass([unref(locale) === "zh" ? "zhConfig" : "", "config"])}" data-v-26d311e4><p data-v-26d311e4>${ssrInterpolate(info.value.bizType == "WORKBENCH_PERSONAL" ? _ctx.$t("aiApp.personalTips") : _ctx.$t("aiApp.manageTips"))}</p><span data-v-26d311e4>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "icon fl",
          type: "md-settings"
        }, null, _parent));
        _push(`${ssrInterpolate(_ctx.$t("aiApp.\u914D\u7F6E"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (info.value.showBackgroundImageFlag) {
        _push(`<div class="banner" data-v-26d311e4>`);
        if (info.value.backgroundImage) {
          _push(`<img class="pic"${ssrRenderAttr("src", info.value.backgroundImage)} alt="" data-v-26d311e4>`);
        } else {
          _push(`<img class="pic"${ssrRenderAttr("src", _imports_3)} alt="" data-v-26d311e4>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="list-area" data-v-26d311e4>`);
      if (info.value.bizType == "WORKBENCH_PERSONAL") {
        _push(`<div class="list clearfix" data-v-26d311e4><h2 data-v-26d311e4>${ssrInterpolate(_ctx.$t("aiApp.\u6700\u8FD1\u5E38\u7528"))}</h2>`);
        if (!_ctx.$isEmpty(usedRobotList.value)) {
          _push(`<ul class="robot-list" data-v-26d311e4><!--[-->`);
          ssrRenderList(usedRobotList.value, (robot, idx) => {
            _push(`<li class="robot" data-v-26d311e4>`);
            if (!_ctx.$isEmpty(robot.robotLogo)) {
              _push(`<img class="robot-logo"${ssrRenderAttr("src", robot.robotLogo)} alt="" data-v-26d311e4>`);
            } else {
              _push(`<img class="robot-logo"${ssrRenderAttr("src", _imports_1)} alt="" data-v-26d311e4>`);
            }
            _push(`<h3${ssrRenderAttr("title", robot.robotName)} data-v-26d311e4>${ssrInterpolate(robot.robotName)}</h3><p${ssrRenderAttr("title", robot.robotDescribe)} data-v-26d311e4>${ssrInterpolate(robot.robotDescribe)}</p></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(info.value.workbenchCategoryList, (item, index) => {
        _push(`<!--[-->`);
        if (item.dataStatus == "NORMAL") {
          _push(`<div class="list clearfix" data-v-26d311e4><h2 data-v-26d311e4>${ssrInterpolate(item.name)}</h2>`);
          if (!_ctx.$isEmpty(item.getWorkbenchChunkList)) {
            _push(`<ul class="robot-list" data-v-26d311e4><!--[-->`);
            ssrRenderList(item.getWorkbenchChunkList, (robot, idx) => {
              _push(`<li class="robot" data-v-26d311e4>`);
              if (!_ctx.$isEmpty(robot.robotLogo)) {
                _push(`<img class="robot-logo"${ssrRenderAttr("src", robot.robotLogo)} alt="" data-v-26d311e4>`);
              } else {
                _push(`<img class="robot-logo"${ssrRenderAttr("src", _imports_1)} alt="" data-v-26d311e4>`);
              }
              _push(`<h3${ssrRenderAttr("title", robot.robotName)} data-v-26d311e4>${ssrInterpolate(robot.robotName)}</h3><p${ssrRenderAttr("title", robot.robotDescribe)} data-v-26d311e4>${ssrInterpolate(robot.robotDescribe)}</p></li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/app/often.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const often = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26d311e4"]]);

export { often as default };
//# sourceMappingURL=often-bc043a59.mjs.map
