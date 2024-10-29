import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, reactive, watch } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
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
import '../../nitro/config.mjs';
import 'scule';

const _sfc_main$1 = {
  __name: "cPdf",
  __ssrInlineRender: true,
  props: {
    pdfUrl: {
      type: String,
      default: "",
      required: true
    },
    containerWidth: {
      type: Number,
      default: 400,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isShow = ref(false);
    const pdfParams = reactive({
      currentPageNumber: 1,
      pdfScale: 1,
      pdfPageTotal: 0
      // 总页数
    });
    let pdfDoc = null;
    const loadFile = async () => {
      let pdfjs = await import('pdfjs-dist/build/pdf.js');
      let pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry.js');
      pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
      pdfjs.getDocument(props.pdfUrl).promise.then(async (doc) => {
        pdfDoc = doc;
        pdfParams.pdfPageTotal = doc.numPages;
        for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
          await getPdfPage(pageNum);
        }
      });
    };
    const getPdfPage = (number) => {
      return new Promise((resolve, reject) => {
        pdfDoc.getPage(number).then((page) => {
          const canvas = document.getElementById(`pdf-render${number}`);
          const context = canvas.getContext("2d");
          const dpr = window.devicePixelRatio || 1;
          const bsr = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
          const ratio = dpr / bsr;
          const viewport = page.getViewport({
            scale: pdfParams.pdfScale
          });
          const canvasWidth = Math.floor(viewport.width * ratio);
          const canvasHeight = Math.floor(viewport.height * ratio);
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          canvas.style.width = Math.floor(props.containerWidth) + "px";
          canvas.style.height = Math.floor(viewport.height * props.containerWidth / viewport.width) + "px";
          let renderContext = {
            canvasContext: context,
            viewport,
            // 这里transform的六个参数，使用的是transform中的Matrix(矩阵)
            // transform: [1, 0, 0, -1, 0, viewport.height]
            transform: [ratio, 0, 0, ratio, 0, 0]
          };
          page.render(renderContext).promise.then(() => {
            resolve();
          }).catch((error) => {
            reject(error);
          });
        }).catch((error) => {
          reject(error);
        });
      });
    };
    watch(() => props.pdfUrl, (item) => {
      if (props.pdfUrl) {
        isShow.value = true;
        setTimeout(() => {
          loadFile();
        }, 500);
      } else {
        isShow.value = false;
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (isShow.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pdf-preview-box" }, _attrs))} data-v-f0d489da><!--[-->`);
        ssrRenderList(pdfParams.pdfPageTotal, (i) => {
          _push(`<canvas class="pdf-viewer" style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("id", "pdf-render" + i)} data-v-f0d489da></canvas>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cPdf.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f0d489da"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vitaePreview",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const pdfUrl = ref("");
    const modalShow = ref(false);
    const showFn = (url) => {
      modalShow.value = true;
      pdfUrl.value = url;
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_cPdf = __nuxt_component_1;
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        title: "\u7B80\u5386\u9884\u89C8",
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        modalWidth: 788
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-e5fcbed7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_cPdf, {
              pdfUrl: pdfUrl.value,
              containerWidth: 750
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(_component_cPdf, {
                  pdfUrl: pdfUrl.value,
                  containerWidth: 750
                }, null, 8, ["pdfUrl"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/modal/vitaePreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vitaePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5fcbed7"]]);

export { vitaePreview as default };
//# sourceMappingURL=vitaePreview-b79bfe8e.mjs.map
