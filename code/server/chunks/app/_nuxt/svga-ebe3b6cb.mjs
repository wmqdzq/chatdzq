import { useSSRContext, defineComponent, ref, computed, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svga",
  __ssrInlineRender: true,
  props: {
    svgaImg: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    canvasName: {
      type: String,
      default: "canvas"
    }
  },
  setup(__props) {
    const props = __props;
    ref();
    const w = computed(() => props.width + "px");
    const h = computed(() => props.height + "px");
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--dacfdcde": unref(w),
        "--dacfdcfc": unref(h)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs, _cssVars))} data-v-1701976a><canvas${ssrRenderAttr("id", unref(props).canvasName)} class="canvas" data-v-1701976a></canvas></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svga.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1701976a"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=svga-ebe3b6cb.mjs.map
