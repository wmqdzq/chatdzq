import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, onUnmounted, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './close-e8808509.mjs';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
import { l as loadImg } from './loadImg-049a165d.mjs';
import { useRouter } from 'vue-router';
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
import '../../paths.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAxRJREFUWEftmMtrFEEQh7+aNdmdjUEi6k2PHvSgIoIEVARPKqigQf0DRISYneBFRAkEX/jIJoEg+QMMxEMSxIPgQUW9qKCIguBFURCiRk0y+zDbZWYmjwU1mc3syh7SpzlU/+rr6p7qqhaqfEiV87EIGHWHZiOoKtzCiipYlvmHMIiopxUA9muMT2NrkcSasjiIKhIz7/n65B1tOycCwGtuIzG5D9RE1S7PfHExuptW+0EAmHZvghwpj3i5VLSPVPJoANjhDiKyr0i6AGLK5SqcjnrnPzZjqzqEk9z/d0DVl1gyHE64TFZGVyKyISSgOYBTN1gm1+FkOsb3I9ZA5QC9NNVDne9gGJe2Eo9IxQGvZdcSM3sQBLXukEq8DRe6KauKA6bdxyCNvjvhES32tuoC7MwYdCrxC0qLXdqt9B8iOAyywo+a8gXHXlldEUxn2kEOeCcQIwM48XPVBej9xd0T232o5iUPpy/70JAV3+Ku/CZMIRVscaEDZ+mL0HD+bVbpPJjOvgZdFwDqS5zkxioDzPj128xI2aVV65WP4CJgUbmlCygW0osRXIzg3Fmn8n9x1gW1p/JgHicZr6482Jm9jepewKtq7uLYu6sLsCu/FTPRAkxgtJPWumcVBJSrWOZpKAdG88STDzghI3RpsK0nJUePNpDL78Aq1IbTsbYgemrGds6ujsmeAsmHEkZdsLox2V5al33z51z/sRwrcQzMSZDgXM471FtI8u+AabcP5PC8Gv8yUMbBOk+89oZvkssfB3MGmWqiFiKs2ocz3binsydAL00+gtQvRMufI4yhXAy+5TSqSxeshWRQUjiJ3qDiuDK6ipolzSir/a4s9JDNoOtnzWU0+NaihYpXhj0PLelPl89o/DKt8m0Wxnvh+vhzGUbCNzs18V2oOTv5PhbUgX+ON4jVzq/cvZIA19SP0CSFYGOijDa1aMg3/QMygBup7S+5iS9iigboCfmQmSZUZiMp8grMBUbsSHDRIzi90gDyIAbvJgGJDfG9diBK5Kalo0ew+IikM8ELbcr+EOXkFM/9DUXsAkc5tz5cAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const isFull = ref(true);
    getRouting();
    const consumeEnergy = ref("");
    const loading = ref(false);
    const isShow = ref(false);
    getCurrentInstance();
    ref([1001, 1002, 1003]);
    ref();
    ref([1004, 1005, 1006, 1007]);
    const time = ref(null);
    onUnmounted(() => {
      clearInterval(time.value);
      isShow.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svga = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pageContent" }, _attrs))} data-v-90a600c0><div class="tool" data-v-90a600c0><div class="tool-header" data-v-90a600c0><img${ssrRenderAttr("src", _imports_0)} data-v-90a600c0>`);
      if (consumeEnergy.value) {
        _push(`<div data-v-90a600c0>AI\u751F\u6210PPT\u9700\u6D88\u8017${ssrInterpolate(consumeEnergy.value)}\u7535\u91CF\uFF0C\u5728\u5927\u7EB2\u751F\u6210\u9636\u6BB5\u5373\u8FDB\u884C\u6263\u51CF\uFF0C\u540C\u4E3B\u9898\u66F4\u6362\u5927\u7EB2\u4EA6\u6D88\u8017${ssrInterpolate(consumeEnergy.value)}\u7535\u91CF\u3002\u4E3A\u786E\u4FDD\u4F53\u9A8C\uFF0C\u8BF7\u60A8\u8C28\u614E\u89C4\u5212\u7535\u91CF\u4F7F\u7528\u3002</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (isFull.value) {
        _push(`<div class="maskBg" data-v-90a600c0></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([isFull.value ? "full" : "", "tool-content"])}" data-v-90a600c0>`);
      if (isFull.value) {
        _push(`<div class="tool-content-top" data-v-90a600c0><img${ssrRenderAttr("src", _imports_0$1)} data-v-90a600c0></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" id="content" data-v-90a600c0>`);
      if (loading.value) {
        _push(ssrRenderComponent(_component_svga, {
          svgaImg: unref(loadImg),
          width: 200,
          height: 284
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/ppt/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90a600c0"]]);

export { index as default };
//# sourceMappingURL=index-dc2d5968.mjs.map
