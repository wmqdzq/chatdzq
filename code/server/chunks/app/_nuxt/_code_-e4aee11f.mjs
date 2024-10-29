import { g as getRouting, b as useCookie } from '../server.mjs';
import { defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { r as recordCom } from './recordNew-bd12a5c8.mjs';
import { _ as _imports_1 } from './robot-20021510.mjs';
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
import './ossUploaderNew-b29e011c.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './previewImg-8e12aab7.mjs';
import './cCreate-a5f9051b.mjs';
import './addBase-d16bc2bd.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './edit1-d50fac04.mjs';
import './copy-d1ce3f41.mjs';
import './switch-59f92d8c.mjs';
import './content-977f7524.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './avatar-8802d9a1.mjs';
import './barrage-e0763a91.mjs';

const _imports_0 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const recordComRef = ref();
    ref([]);
    const modelChatList = ref([]);
    const init = () => {
      var _a;
      let data = {
        type: "MULTI_MODEL_BATTLES",
        groupId: (_a = router.currentRoute.value.params) == null ? void 0 : _a.code
      };
      proxy.$api.queryAiModelPkRecordList(data).then((res) => {
        modelChatList.value = groupByModel(res.data);
        console.log(groupByModel(res.data));
      });
    };
    const groupByModel = (chatList2, num = 4) => {
      const grouped = chatList2.reduce((acc, item) => {
        const { llmCode, model, winnerFlag } = item;
        let foundGroup = acc.find((group) => group.llmCode === llmCode);
        if (!foundGroup) {
          foundGroup = { llmCode, model, list: [] };
          acc.push(foundGroup);
        }
        foundGroup.list.push(item);
        if (winnerFlag) {
          foundGroup.winnerFlag = true;
        }
        return acc;
      }, []);
      return grouped.slice(0, num);
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sharePagesCom" }, _attrs))}><div class="logo"><img${ssrRenderAttr("src", unref(routing).configuration.homeLogo)}></div><div class="modelList"><div class="pkContentList"><div class="obtn"> \u6211\u4E5F\u73A9 </div><!--[-->`);
      ssrRenderList(modelChatList.value, (item, index) => {
        _push(`<!--[-->`);
        if (!_ctx.$isEmpty(item.list)) {
          _push(`<div class="${ssrRenderClass([modelChatList.value.length == 2 ? "random" : "", "area"])}"><div class="title">${ssrInterpolate(item.model)}</div>`);
          _push(ssrRenderComponent(recordCom, {
            ref_for: true,
            ref_key: "recordComRef",
            ref: recordComRef,
            robotLogo: unref(_imports_1),
            operation: false,
            chatList: item.list
          }, null, _parent));
          _push(`<div class="applaud">`);
          if (item.winnerFlag === true) {
            _push(`<div class="btn"><img${ssrRenderAttr("src", _imports_0)} alt=""> ${ssrInterpolate(item.model)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (!("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("authtoken").value) {
        _push(`<div class="share-mask">`);
        _push(ssrRenderComponent(_component_Button, {
          size: "large",
          type: "primary",
          onClick: ($event) => unref(router).push("/login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8BF7\u767B\u5F55\u67E5\u770B\u5168\u90E8`);
            } else {
              return [
                createTextVNode("\u8BF7\u767B\u5F55\u67E5\u770B\u5168\u90E8")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/pk/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_code_-e4aee11f.mjs.map
