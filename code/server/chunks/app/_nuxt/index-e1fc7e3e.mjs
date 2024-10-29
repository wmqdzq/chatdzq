import { b as buildAssetsURL } from '../../paths.mjs';
import { useSSRContext, defineComponent, toRefs, getCurrentInstance, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as _export_sfc, g as getRouting } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("noData.b3b8e57c.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "noData"
  },
  __name: "index",
  __ssrInlineRender: true,
  props: {
    msg: {
      type: String,
      default: "\u6682\u65E0\u6570\u636E"
    }
  },
  emits: ["init"],
  setup(__props, { emit: emits }) {
    const props = __props;
    getRouting();
    const { msg } = toRefs(props);
    getCurrentInstance();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "noDataCom" }, _attrs))} data-v-db2fa7e6><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-db2fa7e6><p data-v-db2fa7e6>${ssrInterpolate(unref(msg))}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/noDataCom/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const noDataCom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db2fa7e6"]]);

export { noDataCom as n };
//# sourceMappingURL=index-e1fc7e3e.mjs.map
