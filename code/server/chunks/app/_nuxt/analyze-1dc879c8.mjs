import { b as buildAssetsURL } from '../../paths.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './left-arrow-c624f267.mjs';
import { _ as _imports_2, a as _imports_1, b as _imports_3 } from './mail-5a0183a5.mjs';
import { _ as _imports_4 } from './list-c1c2c0c1.mjs';
import { useRouter } from 'vue-router';
import vitae from './vitae-8fb2bafa.mjs';
import vitaePreview from './vitaePreview-b79bfe8e.mjs';
import { a as _export_sfc } from '../server.mjs';
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

const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABKZJREFUWEftl39oHEUUx9/bvdu9/LAJtic7cy1cYgSRaP2jBRMaiTaSlOo/qTYtKlZoUMFSxIh/2BQkYBNMQahgIMUk9J+CCRUseGBAoVUDVf8xWhIiOai3s8cJRhtK7i7Zp1P24hn3chPvSvNH5s+dmTef+b43771F2OQDNzkfbAGW6qGyKRgOh6sDgcBxCWSa5lA8Hl8qFU7uLxsg5/wzInrag4oJIQ5sGkDLsqKIOG/pzeCsfHObi4jqHMeJlwpZFgU55z1E9H5H5QTEbh2SUFEAeEMI8cGmAGSMXbH05n0dleMwthg5S0RvIuKUbdtNdx0wEonsdF33hlTP0ptg9CbfCwDXAGBZ07S6RCLxaymQJbuYMXbc0puHpXpyfMufCM7MzMwDwE4AeE0IMXRXATnnk+0V4/ulenKcmUVkjMnYOwkAJb/mkhQMh8PWLvPxG+2V44GcShLQsqxWRPxSunl5eXlXKpVy/q+KBQHl4YZhWIUME1E1EZ3pqJzYl1Mvp2Bra2tgdnb2OhE1AMBVIurVdX2hkK1gMBiPx+O+876AnPMjRHQBAFaVkcarNAbbtd2wQ98N27VH4F69ESow/K9zpYLyA2OsAwAuAUBIQb0lRHzZtu2La9f6AjLGfqzSWGMxGL+Dc4ByznN139+x+Njay/rsnRZCPKwKGGsIdrU3hfpBB1NBgH+W5AMW22hZVg8iygtIla8KIVqUAL3SdalGa3j0yYqPoUaToaQ2VAA55zsAYCSvdn9HRM/5lcaCjyQajYbS6XS/jubJJnMAGoKHlQiLAXqxOezlSUDEs4ZhnCrU/RRNM57BkYZgl6Xi8nUAA4wx6c4eLx4d13W7k8nk5fVuXhRQbpbljIhGtuH9bcVcXgiQc36RiLo8mJimad0qZVAJMHdDxtgpHc2+9VzuB5iXuKWpXiFEv0ziKjGzIUAvdUzW6PX7O6u+9rVfALAfEd8GgEkhxFMqYLk1GwZkjI03Gq8e2mOeVgbknA/KFgwAJoQQz94xQPmyM5mMaK8Yr80vb/kH+inIGHsBAC4g4oJt27L0KLlX2t2QgvJFG1jz+dHqaUDQfYU4//t996RSqcX8yWg0WptOp1Py9Wqa9kwikVj35ebv3RAg53y0PtD5UkvoXEEvjd7kck4m3rccx/kqt5BzfpmIDiLimG3bx1TdrAzodSipFvNcbX2w8z/2F9wZmFp6Z/Wn6bZ7EAcNw+iVSTgSiRxzXXcEAH4TQjBVNysDcs7bkPQvjlRPg4HbVgFvkYAf0gMwn/00tgKZXtd1A7qu9xFRmwc55bru0VAotJBzMwAcEELEVFRUBmSMDVl68yu51j5Df8LPmWH4KTu0lHEXex3HGcw/cE0jIH/iuxFRtnEHiehDx3FOlBtwfq95OvqQ0Q2/ZCfg+/R7sASpuZWVlReTyeSU32GMsT0A8In3GyqXyM5aNsFxIURduQGvN4UGHpSq/eHOyfgay2azr699sWsP9ZqO8wDwfG6OiOYcx3mgrIAyBl3X/QgRZap4N5FIjKockFcmZS6UzYLsnk/Ytj2psl85BlWM3Yk1W4Clqrql4JaCpSpQ6v6/AEtTvTir0YhNAAAAAElFTkSuQmCC";
const _imports_6 = "" + buildAssetsURL("hrbg.19c11058.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "analyze",
  __ssrInlineRender: true,
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const params = ref({});
    const vitaeRef = ref();
    const vitaePreviewRef = ref();
    const router = useRouter();
    const posParams = ref({
      name: "",
      description: ""
    });
    const init = () => {
      let data = {
        code: router.currentRoute.value.query.code
      };
      proxy.$api.getResumeInfo(data).then((res) => {
        params.value = res.data;
        proxy.$api.getPosition({
          code: res.data.partyRelationId
        }).then((json) => {
          posParams.value.name = json.data.name;
          posParams.value.description = json.data.description;
        });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "analyze" }, _attrs))} data-v-ec82ac53><div class="analyze-left" data-v-ec82ac53><div class="left-top" data-v-ec82ac53><img${ssrRenderAttr("src", _imports_0)} data-v-ec82ac53><div class="name" data-v-ec82ac53>\u667A\u80FD\u7ED3\u679C\u5206\u6790</div></div><div class="left-content" data-v-ec82ac53><div class="content-top" data-v-ec82ac53><div class="top-name" data-v-ec82ac53><div data-v-ec82ac53>${ssrInterpolate(posParams.value.name)}</div></div><div class="describe" data-v-ec82ac53>${ssrInterpolate(posParams.value.description)}</div><div class="vitae" data-v-ec82ac53><div class="vitae-left" data-v-ec82ac53><div class="vitae-left-name" data-v-ec82ac53><img${ssrRenderAttr("src", _imports_2)} data-v-ec82ac53><div style="${ssrRenderStyle({ "margin": "0 3px" })}" data-v-ec82ac53>${ssrInterpolate(params.value.name)}</div><img class="edit"${ssrRenderAttr("src", _imports_1)} data-v-ec82ac53></div><div class="vitae-left-num" data-v-ec82ac53><img${ssrRenderAttr("src", _imports_3)} data-v-ec82ac53><div data-v-ec82ac53>${ssrInterpolate(params.value.email)} ${ssrInterpolate(params.value.phone)}</div></div></div><div class="vitae-right" data-v-ec82ac53><div class="right-btn" data-v-ec82ac53>\u7B80\u5386\u9884\u89C8</div><div class="right-time" data-v-ec82ac53>${ssrInterpolate(params.value.gmtCreate)}\u4E0A\u4F20</div></div></div><div class="degree" data-v-ec82ac53><div class="degree-top" data-v-ec82ac53><div class="degree-top-left" data-v-ec82ac53><img${ssrRenderAttr("src", _imports_4)} data-v-ec82ac53><div data-v-ec82ac53>\u7B80\u5386\u5339\u914D\u5EA6</div></div><div class="degree-top-right" data-v-ec82ac53>${ssrInterpolate(params.value.matchDegree)}%</div></div><div class="degree-content" data-v-ec82ac53><div data-v-ec82ac53>${ssrInterpolate(params.value.matchDescription)}</div></div></div>`);
      if (params.value.pointDescription) {
        _push(`<div class="degree" data-v-ec82ac53><div class="degree-top" data-v-ec82ac53><div class="degree-top-left" data-v-ec82ac53><img${ssrRenderAttr("src", _imports_5)} data-v-ec82ac53><div style="${ssrRenderStyle({ "color": "rgba(121, 38, 255, 1)" })}" data-v-ec82ac53>\u7B14\u8BD5\u8BC4\u5206</div></div><div class="degree-top-right" style="${ssrRenderStyle({ "color": "rgba(121, 38, 255, 1)" })}" data-v-ec82ac53>${ssrInterpolate(params.value.point)}\u5206</div></div><div class="degree-content" data-v-ec82ac53><div data-v-ec82ac53>${ssrInterpolate(params.value.pointDescription)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="analyze-right" data-v-ec82ac53><div class="right-top" data-v-ec82ac53><div style="${ssrRenderStyle({ "text-align": "center", "width": "80px", "display": "flex", "flex-wrap": "wrap", "justify-content": "center" })}" data-v-ec82ac53><div data-v-ec82ac53>\u7B54\u9898\u6E05\u5355</div><div class="line" data-v-ec82ac53></div></div></div><div class="right-content" data-v-ec82ac53>`);
      if (params.value.interviewQuestionAnswerList) {
        _push(`<!--[-->`);
        ssrRenderList(params.value.interviewQuestionAnswerList, (item, i) => {
          _push(`<div class="right-content-item" data-v-ec82ac53><div class="title" data-v-ec82ac53><div data-v-ec82ac53>\u9898\u76EE${ssrInterpolate(i + 1)}\uFF1A</div><div data-v-ec82ac53>${ssrInterpolate(item.question)}</div></div><div class="content" data-v-ec82ac53><div data-v-ec82ac53>${ssrInterpolate(item.answer)}</div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="noData" data-v-ec82ac53><img${ssrRenderAttr("src", _imports_6)} data-v-ec82ac53></div>`);
      }
      _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/analyze.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const analyze = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ec82ac53"]]);

export { analyze as default };
//# sourceMappingURL=analyze-1dc879c8.mjs.map
