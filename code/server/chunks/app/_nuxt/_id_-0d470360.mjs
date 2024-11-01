import { useSSRContext, defineComponent, getCurrentInstance, ref, mergeProps, toRefs, resolveComponent } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { g as getRouting, a as _export_sfc } from '../server.mjs';
import { i as inputCom } from './template-e578487a.mjs';
import { c as contentCom } from './content-977f7524.mjs';
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
import './ossUploader-2d65ed0f.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import './createLoading-9278cbec.mjs';
import './close3-d080d282.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "shareDialogue",
  __ssrInlineRender: true,
  props: {
    data: {},
    name: {}
  },
  setup(__props) {
    const props = __props;
    getRouting();
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const chatList = ref([]);
    const styleSetup = ref({});
    ref(null);
    const robotPromptList = ref([]);
    ref("");
    const groupId = ref("");
    const content = ref("");
    ref("CHAT");
    const loading = ref(false);
    ref(false);
    const isClose = ref(false);
    const robotInfoCode = ref("");
    toRefs(props);
    const onChat = async () => {
      var _a2;
      var _a;
      if (isClose.value) {
        proxy.$Message.error("\u8BE5\u94FE\u63A5\u5DF2\u88AB\u5173\u95ED\u3002\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002");
        return;
      }
      if (loading.value) {
        return;
      }
      if (proxy.$isEmpty(content.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u95EE\u9898");
        return;
      }
      var source2 = "";
      {
        source2 = headers == null ? void 0 : headers.host;
      }
      const data2 = {
        "sk": (_a2 = (_a = router.currentRoute.value.params) == null ? void 0 : _a.id) != null ? _a2 : "",
        "stream": true,
        "groupId": router.currentRoute.value.query.groupId ? router.currentRoute.value.query.groupId : groupId.value,
        "content": content.value,
        "source": source2
      };
      chatList.value.push({
        content: content.value,
        type: "USER",
        chatType: "CHAT"
      });
      proxy.$setAiChat(proxy, data2, "portal", (item) => {
        if (item && item.content) {
          proxy.$processChatData(chatList.value, item, true);
          rollBottom();
        }
      });
      return;
    };
    const rollBottom = async () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_Image = resolveComponent("Image");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "preview" }, _attrs))} data-v-0090209d><div class="preview-top" data-v-0090209d>${ssrInterpolate(styleSetup.value.name)}</div><div class="preview-content" data-v-0090209d><div class="preview-content-main" data-v-0090209d><!--[-->`);
      ssrRenderList(chatList.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([item.type == "SYSTEM" ? "left" : "right", "content"])}" data-v-0090209d><div class="logo" data-v-0090209d>`);
        if (item.type == "SYSTEM") {
          _push(`<!--[-->`);
          if (styleSetup.value.robotLogo) {
            _push(`<img${ssrRenderAttr("src", styleSetup.value.robotLogo)} data-v-0090209d>`);
          } else {
            _push(`<img${ssrRenderAttr("src", _imports_1)} data-v-0090209d>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<img src="https://hz-oss.chatdzq.com/file/common/static-web/d638965e-dd7b-4fe9-b03b-3f39c3342d1a.png" data-v-0090209d>`);
        }
        _push(`</div><div class="${ssrRenderClass([item.type == "SYSTEM" ? "blue" : "", "name"])}" style="${ssrRenderStyle({ "background-color": item.type == "USER" ? styleSetup.value.dialogueColor : "#fff" })}" data-v-0090209d>`);
        if (_ctx.$isEmpty(item.content)) {
          _push(ssrRenderComponent(_component_Spin, null, null, _parent));
        } else {
          _push(`<!--[-->`);
          if (item.chatType == "CHAT") {
            _push(ssrRenderComponent(contentCom, {
              content: item.content,
              isShowTagView: false
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.chatType == "DRAW") {
            _push(ssrRenderComponent(_component_Image, {
              preview: true,
              "preview-list": [item.content],
              class: "cImage-img",
              src: item.content,
              fit: "cover"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.chatType == "VIDEO") {
            _push(`<video width="658" height="444" controls${ssrRenderAttr("src", item.content)} data-v-0090209d></video>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        if (item.type == "SYSTEM" && index == 0) {
          _push(`<!--[--><h3 data-v-0090209d>\u60A8\u53EF\u4EE5\u544A\u8BC9\u6211\u9700\u8981\u521B\u4F5C\u4EC0\u4E48\u5185\u5BB9\uFF1F\u6BD4\u5982\u4E0B\u9762\uFF1A</h3><!--[-->`);
          ssrRenderList(robotPromptList.value, (item2, idx) => {
            _push(`<div class="tag" data-v-0090209d>${ssrInterpolate(item2)}</div>`);
          });
          _push(`<!--]--><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div id="bottoms" data-v-0090209d></div></div><div class="preview-content-bottom" data-v-0090209d>`);
      _push(ssrRenderComponent(inputCom, {
        content: content.value,
        "onUpdate:content": ($event) => content.value = $event,
        isAgreement: false,
        isPaus: true,
        robotCode: robotInfoCode.value,
        onSubmit: onChat,
        isLoginCheck: false
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shareDialogue.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const shareDialogue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0090209d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    getCurrentInstance();
    useRouter();
    const dataParams = ref({
      code: "",
      type: "",
      name: "",
      llmCode: "",
      promptText: "",
      hitRate: "",
      styleSetup: "",
      typeName: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(shareDialogue, mergeProps({
        data: dataParams.value.styleSetup
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-0d470360.mjs.map
