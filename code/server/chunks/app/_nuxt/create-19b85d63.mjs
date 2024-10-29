import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './left-arrow-c624f267.mjs';
import { _ as _imports_2, a as _imports_1, b as _imports_3 } from './mail-5a0183a5.mjs';
import { _ as _imports_4 } from './list-c1c2c0c1.mjs';
import { _ as _imports_2$1 } from './electric-f4a0b755.mjs';
import { useRouter } from 'vue-router';
import vitae from './vitae-8fb2bafa.mjs';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
import QrcodeVue from 'qrcode.vue';
import vitaePreview from './vitaePreview-b79bfe8e.mjs';
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
import '../../nitro/config.mjs';
import 'scule';

const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAANFJREFUWEftlr0JAkEQRt8HCtqDgSUYGGggBlZgBxZgYBl2YQt2YCiCgSUY2IMXCCvKBXLcHOyysCCz6Swz3775W1H4qHB8XIATSCIQQpgCZ6BXF3EFLCRdY4s6VcAGODSCrSUdXYAT+B8CdauNjBctgV3Dtgcuxv27pFubzWzDEMITGMQiNe6/JPVjBYRMwb9uJLU+totAcQE5U1BJGsamYAKMjTSsgG1EET6sPeG7wAk4gVQCM+D0M6o/X7K5Ne+7JmqSgKwjOqezFF9OwAm8AVkFaCEAglxMAAAAAElFTkSuQmCC";
const _imports_7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIZJREFUWEftlTsKhUAQBLsCQe9g4BFe4P1PYOARDLyDBg9GMPbDwsAa9MbLdG01zKLKh8r5MoAN2IAN2MB3DUTEKKlP+isWYL6adWsgIjZJbRLAH2hKASIp/BwDXD72yUB1gMwKdqArreAnaUiqYQWmIoCk4Ncx390Dr+hJF2zABmzABmzgAGJrHCH8NIw+AAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    getRouting();
    const posParams = ref({
      name: "",
      description: ""
    });
    const vitaePreviewRef = ref();
    const url = ref();
    const { proxy } = getCurrentInstance();
    const vitaeRef = ref();
    const params = ref({});
    const router = useRouter();
    const list = ref([]);
    const leftList = ref([]);
    const rightList = ref([]);
    const num = ref(0);
    const electricityVal = ref(null);
    const btnLoading = ref(false);
    const loading = ref(false);
    const questionCount = ref(10);
    const init = () => {
      let data = {
        code: router.currentRoute.value.query.code
      };
      proxy.$api.getResumeInfo(data).then((res) => {
        params.value = res.data;
        if (res.data.dataStatus != "NOT_WRITTEN_TEST") {
          router.push("/ai/hr/analyze?code=" + router.currentRoute.value.query.code);
          return;
        }
        if (res.data && res.data.interviewQuestionAnswerList && res.data.interviewQuestionAnswerList.length > 0) {
          list.value = res.data.interviewQuestionAnswerList;
          num.value = res.data.interviewQuestionAnswerList.length;
          leftList.value = [];
          rightList.value = res.data.interviewQuestionAnswerList;
        }
        proxy.$api.getPosition({
          code: res.data.partyRelationId
        }).then((json) => {
          posParams.value.name = json.data.name;
          posParams.value.description = json.data.description;
        });
      });
      proxy.$api.queryElectricity({
        type: "HR_GENERATE_QUESTION"
      }).then((res) => {
        if (res.data && res.data.electricityVal) {
          electricityVal.value = res.data.electricityVal;
        }
      });
    };
    const toPreView = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "create" }, _attrs))} data-v-2d13a023><div class="create-left" data-v-2d13a023><div class="left-top" data-v-2d13a023><img${ssrRenderAttr("src", _imports_0)} data-v-2d13a023><div class="name" data-v-2d13a023>\u7B80\u5386</div></div><div class="left-content" data-v-2d13a023><div class="content-top" data-v-2d13a023><div class="top-name" data-v-2d13a023><div data-v-2d13a023>${ssrInterpolate(posParams.value.name)}</div></div><div class="describe" data-v-2d13a023>${ssrInterpolate(posParams.value.description)}</div><div class="vitae" data-v-2d13a023><div class="vitae-left" data-v-2d13a023><div class="vitae-left-name" data-v-2d13a023><img${ssrRenderAttr("src", _imports_2)} data-v-2d13a023><div style="${ssrRenderStyle({ "margin": "0 3px" })}" data-v-2d13a023>${ssrInterpolate(params.value.name)}</div><img class="edit"${ssrRenderAttr("src", _imports_1)} data-v-2d13a023></div><div class="vitae-left-num" data-v-2d13a023><img${ssrRenderAttr("src", _imports_3)} data-v-2d13a023><div data-v-2d13a023>${ssrInterpolate(params.value.email)} ${ssrInterpolate(params.value.phone)}</div></div></div><div class="vitae-right" data-v-2d13a023><div class="right-btn" data-v-2d13a023>\u7B80\u5386\u9884\u89C8</div><div class="right-time" data-v-2d13a023>${ssrInterpolate(params.value.gmtCreate)}\u4E0A\u4F20</div></div></div><div class="degree" data-v-2d13a023><div class="degree-top" data-v-2d13a023><div class="degree-top-left" data-v-2d13a023><img${ssrRenderAttr("src", _imports_4)} data-v-2d13a023><div data-v-2d13a023>\u7B80\u5386\u5339\u914D\u5EA6</div></div><div class="degree-top-right" data-v-2d13a023>${ssrInterpolate(params.value.matchDegree)}%</div></div><div class="degree-content" data-v-2d13a023><div data-v-2d13a023>${ssrInterpolate(params.value.matchDescription)}</div></div></div></div></div></div><div class="create-right" data-v-2d13a023><div class="right-top" data-v-2d13a023><div style="${ssrRenderStyle({ "text-align": "center", "width": "80px", "display": "flex", "flex-wrap": "wrap", "justify-content": "center" })}" data-v-2d13a023><div data-v-2d13a023>\u7B80\u5386\u5217\u8868</div><div class="line" data-v-2d13a023></div></div></div><div class="right-content" data-v-2d13a023><div class="content-top" data-v-2d13a023><div data-v-2d13a023>\u9898\u76EE\u6570\u91CF</div><div class="content-top-input" data-v-2d13a023>`);
      _push(ssrRenderComponent(_component_Input, {
        type: "number",
        modelValue: questionCount.value,
        "onUpdate:modelValue": ($event) => questionCount.value = $event,
        min: 1,
        max: 20,
        class: "input"
      }, null, _parent));
      _push(`<div class="btn" data-v-2d13a023>${ssrInterpolate(btnLoading.value ? "\u751F\u6210\u4E2D..." : "\u518D\u6B21\u751F\u6210")} `);
      if (electricityVal.value) {
        _push(`<div class="tag" data-v-2d13a023><img${ssrRenderAttr("src", _imports_2$1)} data-v-2d13a023><div data-v-2d13a023>${ssrInterpolate(electricityVal.value)}\u7535\u91CF</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="content-list" data-v-2d13a023><div class="list-item" style="${ssrRenderStyle({ "margin-right": "12px" })}" data-v-2d13a023><div class="title" data-v-2d13a023>\u5DF2\u751F\u6210\u9898\u76EE</div><div class="item-content" data-v-2d13a023><!--[-->`);
      ssrRenderList(rightList.value, (item, i) => {
        _push(`<div class="item" data-v-2d13a023><div style="${ssrRenderStyle({ "width": "60px" })}" data-v-2d13a023>\u9898\u76EE${ssrInterpolate(i + 1)}\uFF1A</div><div class="content" data-v-2d13a023>${ssrInterpolate(item.question)}</div><div class="action" data-v-2d13a023><div class="addPoint" data-v-2d13a023><img${ssrRenderAttr("src", _imports_6)} data-v-2d13a023></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="list-item" data-v-2d13a023><div class="title" data-v-2d13a023>\u5DF2\u9009\u62E9${ssrInterpolate(leftList.value.length)}\u9898</div><div class="item-content" data-v-2d13a023><!--[-->`);
      ssrRenderList(leftList.value, (item, i) => {
        _push(`<div class="item" data-v-2d13a023><div style="${ssrRenderStyle({ "width": "60px" })}" data-v-2d13a023>\u9898\u76EE${ssrInterpolate(i + 1)}\uFF1A</div><div class="content" data-v-2d13a023>${ssrInterpolate(item.question)}</div><div class="action" data-v-2d13a023><div class="redPoint" data-v-2d13a023><img${ssrRenderAttr("src", _imports_7)} data-v-2d13a023></div></div></div>`);
      });
      _push(`<!--]--></div><div class="confirm" data-v-2d13a023>${ssrInterpolate(loading.value ? "\u786E\u8BA4\u4E2D..." : "\u786E\u8BA4\u9898\u76EE")}</div></div></div><div class="link" data-v-2d13a023><div class="link-top" data-v-2d13a023>\u7B54\u9898\u94FE\u63A5\uFF08\u4E8C\u7EF4\u7801\uFF09</div><div class="link-action" data-v-2d13a023><div class="input" data-v-2d13a023>${ssrInterpolate(url.value)}</div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "primary",
        class: "btn",
        onClick: ($event) => _ctx.$CopyTex(url.value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u590D\u5236`);
          } else {
            return [
              createTextVNode("\u590D\u5236")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "btn",
        onClick: toPreView
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u9884\u89C8`);
          } else {
            return [
              createTextVNode("\u9884\u89C8")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="qrCode" data-v-2d13a023>`);
      _push(ssrRenderComponent(QrcodeVue, {
        value: url.value,
        size: 146,
        level: "H",
        "render-as": "svg"
      }, null, _parent));
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(vitae, {
        ref_key: "vitaeRef",
        ref: vitaeRef,
        onInit: init
      }, null, _parent));
      _push(ssrRenderComponent(vitaePreview, {
        ref_key: "vitaePreviewRef",
        ref: vitaePreviewRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d13a023"]]);

export { create as default };
//# sourceMappingURL=create-19b85d63.mjs.map
