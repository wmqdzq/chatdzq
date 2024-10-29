import { _ as __nuxt_component_2 } from './cCreate-a5f9051b.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_3 } from './like-on-354a841d.mjs';
import { useRouter } from 'vue-router';
import { a as _export_sfc } from '../server.mjs';
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
import './robot-20021510.mjs';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbNJREFUWEftl81twkAQhWd8iSGKtEcLLk4HlAAdmAoCFSRUkHRAUgF0EFIBTgWhgzgngzjEl+AFWTvRWpjYxkH+2YgcvCfLGs18+9beN4Nw5oVnrg9HAIwx1mw2u0IIphjO4ZwvPM/z4nkTAO12u0NEcyJSXTyq6QRB0F+v14voxQHANE223W7fAMBUvPN0Os/3/etIiQOAYRhdRJzLaCKaAsCrYhCZ/0bmFEJYq9XqRT7HAQaIONkDDJfLpYRQtgzDyMxfA9QK1ArUCtQKqFXgyb8HIRBGlw/pOzx+Ff+NFzz60kcGYWHULLi9CM0mWnu3nUir55z3s9ywvBnFiwM4QNCDUcPJ42TVj6BC8ep2nCwu89kA2umdU/AR/0bKKzD+sgC15zwyH8VQ0IPRlV1NgfEnA9TLtHCJb6S8AhJ/7JuAINu4qI+cwl1jWESVagAKIA4ArVbLIqLwTBFxKoQ42ZRqmuZtNhs7/J/TSmTcA7+pkmjLd7vde8GZwHZdtxcm/4GAUveAzCEHEyGEVCHvbDBzXbdf5MzTsZmjma7rnTwQnPNZetQqCvP/htOiO6ga/w3+Iagw9r7fhwAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAiBJREFUWEftlt9OE0EUxr+ZbaUWmlaRYAtCIVLkzibQ4B08gY9AHwGfAHwCeQPCG8gb9A4tF3KnVsOf0IaAoI1ra5eyM+YMaS0N252VrE2g56bp5syc3/nm253D0OVgXa4PTwDbXw4XhMBCJ2jOkZubepLTbUwbIF8orQPI6mzMGF+dm4q/1srVScoXilmAEYB22LZYfDHjroSWAvlCaQ9AMmhwTA5FwPn1y+q2wO6JCSElAJbLpBKLbsSuAK3dJ2JhRMP3Ou55atbwzaypHB0VrgBQMSllsrUCY3yJuqdnjyIht4YghMT3itXI25FSbLYuMozA3uzT+EbjWRtAibTzPTKpkWbddoAPAJ77SyBzmdRo0xuOHsgXLtWIx8KIuZy7EzB5gTxB0dr1lSN2WtwD6CngpAC952cVC6GggUgoqCxUrp6r33az+mJC83cdxR8VGJwh9TgK69zG7qmpACaGIgqsEb4AULdH5aqqMZOIoWpd4ODsl/o/NjiA/r7AHQOgG/Dr8c//p4AtpPq6BQMcD/v7VGG6fMic7ZeVLx7wck/0AG6HAsPR+02zeTl/yr2pAmo4oUF0fHBAud5LVKwL9cGi1xQSO5npkfR16x0Hknefisucszdeijrlcsmzs9N/50CtgYSS3n8+XGWMr9wEQgj5av7Z6JrTHq5j+dbHo6RhyJdS2g+8gAjB9kO1+tt0eqLcaZ0rgJei/5LbdYA/aaBdMO0AqE4AAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA21JREFUWEftV91SUlEUXnvjQUAJdCrTsNEZR/JOZhzMO3mDfIJ8g/QJwifInqB6gnwDvWlKusC7kpqBEiX7URBBfs7eu1lbjm4Oh3OANG9aV3D2Omt9+1u/h8ANC7lh//AfgC0DyXRuQtf1CQyTECQfnQ7t2IUskcrOEiKCneqjXguAZDId1Ac9TwXny0BAOlckDwAbjNG1hZnRDD5/9zE34SL6ClD6BACkc0UylNL43NTo63bAmwC8TWVnNSBvAFoct7zPOVmllAoAFrdwbNbPMEZjBmj18AKAvImLJw1jlBAI+tzQr7nARQjUOYej0yrUGbe8jM/dB36vBhql8rxc06FYqav6eQARM4fxAkAitZ82bj480A93/B6gtDVFjk+r8KNYAS6EdIRA7wW8EPC5LYH9KlbgZ7FinGW0Ui0SiUxiKKVID4lUdhmAvMTft/0e6dxOylUdvv4+lSrjwwMw6NFs9Q8LZ3BUqkodIfjafHgcw6YCOL+95qIwNXLL1phxWK0zYFyAr7/PUR/1vhyeGKxlotP3Jy8AYOkAEIw9IPUjAa+jwV4UVBY0RicjjSoiHz7vLQpBN9FoaHgA/A509uIc38mXa5DLl+XrjPHYwsz4lsyBfwVAzZsmAGoIkH4Mw3UIJiGGoYWBZDodrNfdx3iApTQW9F2Hfzg4LkPhrCZta6XakFGKjTI82AQQiy5KYOruLcv6/1tUu7lCowrEVnQ6FGsqw/efsiuUkuf4sJM+0C0YNQGpoMtz4cvZIBlohAF7QfCqWajrXDYt2cIFZLSyRSdEECoLAa8bxoauJhfU2JtvL8tQpTOR2seGNIvPrqIimuaAgEw0fNkBm3LA+GOeiFgR7YaMUx4UyjU4aDQe7EOM0YjtODYMbu9+e0yIC3cCKb2AMDkHIdjSfPjBhhVoy5VMzYduK8M0foFzsfroYWi9HWNtd0IzCExMHNNa3/nCYRbOBXw/OQO8vSFOzluS0Gy0EQ7cE+Suh+Ma+wRuSqqUqrocNMq2lGeMLxkDxy5fHL8LZGJSvqkuqLh+IRAUpBzXL0V2GKNLVgnXcQ5YKW7v7sUJoc9sbpMXgr9Qtx2nSnEMgdkAskEpixNCcAVX5ZW6qnfi2NBxDIGVMeNbQBDIu8v6urpkduO8awa6Nd6Jfk8MdGK4U50/VaaTMDodshsAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "record",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { proxy } = getCurrentInstance();
    const pageType = ref(1);
    const params = ref({
      pageNo: 1,
      pageSize: 10,
      type: "CHAT",
      robotType: "QUESTION_BANK",
      total: 0
    });
    const cCreateRef = ref();
    const listData = ref([]);
    const loading = ref(false);
    const init = () => {
      let apiUrl = pageType.value == 1 ? "querySystemRobotAiRecordPageList" : "queryCollectRobotAiRecordPageList";
      loading.value = true;
      proxy.$api[apiUrl](params.value).then((res) => {
        listData.value = res.data;
        params.value.total = res.totalCount;
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const onChange = (e) => {
      params.value.pageNo = e;
      init();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Page = resolveComponent("Page");
      const _component_cCreate = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "record" }, _attrs))} data-v-76c5e451><div class="record-back" data-v-76c5e451><img${ssrRenderAttr("src", _imports_0)} data-v-76c5e451><div data-v-76c5e451>\u8FD4\u56DE\u6A21\u677F\u5E93</div></div><div class="record-content" data-v-76c5e451><div class="record-content-tabs" data-v-76c5e451><div class="${ssrRenderClass([pageType.value == 1 ? "active" : "", "tabs-item"])}" data-v-76c5e451>\u521B\u4F5C\u8BB0\u5F55</div><div class="${ssrRenderClass([pageType.value == 2 ? "active" : "", "tabs-item"])}" data-v-76c5e451>\u6211\u7684\u6536\u85CF</div></div><div class="record-content-list" data-v-76c5e451><!--[-->`);
      ssrRenderList(listData.value, (item, index) => {
        _push(`<div class="list-item" data-v-76c5e451><div class="list-item-name text-hide" data-v-76c5e451>${ssrInterpolate(item.robotName)}</div><div class="list-item-content" data-v-76c5e451>${ssrInterpolate(item.content)}</div><div class="list-item-bottom" data-v-76c5e451><div data-v-76c5e451>${ssrInterpolate(item.gmtCreate)}</div><div class="bottom-action" data-v-76c5e451><div class="action-item" data-v-76c5e451><img${ssrRenderAttr("src", _imports_1)} data-v-76c5e451><div data-v-76c5e451>\u5220\u9664</div></div><div class="action-item" data-v-76c5e451>`);
        if (!item.hadCollect && pageType.value != 2) {
          _push(`<img${ssrRenderAttr("src", _imports_2)} data-v-76c5e451>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_3)} data-v-76c5e451>`);
        }
        _push(`<div data-v-76c5e451>\u6536\u85CF</div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="bottom-page" data-v-76c5e451>`);
      _push(ssrRenderComponent(_component_Page, {
        total: params.value.total,
        "page-size": params.value.pageSize,
        onOnChange: onChange,
        "show-elevator": ""
      }, null, _parent));
      _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/creative/record.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const record = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76c5e451"]]);

export { record as default };
//# sourceMappingURL=record-e0e10ba4.mjs.map
