import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { l as lodingData } from './loding-9ec1fb58.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "createLoading",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "create"
    },
    position: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 35
    },
    height: {
      type: Number,
      default: 35
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svga = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aiLoadingComm" }, _attrs))}>`);
      if (__props.type == "create") {
        _push(ssrRenderComponent(_component_svga, {
          class: __props.position == "center" ? "center" : "",
          svgaImg: unref(lodingData),
          width: props.width,
          height: props.height
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type == "loading") {
        _push(`<div class="spinnerCom" style="${ssrRenderStyle("width:" + __props.width + "px", "height:" + __props.width + "px")}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/createLoading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=createLoading-9278cbec.mjs.map
