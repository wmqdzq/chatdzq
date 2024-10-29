globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, g as getRouting, l as _imports_1$2, f as useI18n, d as __nuxt_component_0, i as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './ossUploader-2d65ed0f.mjs';
import { _ as __nuxt_component_2 } from './cCreate-a5f9051b.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, onMounted, onUnmounted, resolveComponent, unref, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_3 } from './fire-8ac8c80a.mjs';
import { useRouter } from 'vue-router';
import { s as service } from './index-3a8d75d8.mjs';
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
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import './ossUploaderNew-b29e011c.mjs';
import '@aws-sdk/client-s3';
import './addBase-d16bc2bd.mjs';
import './robot-20021510.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';

const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKlSURBVHgB7ZpBTxNBFMf/b3ZREyHChYqGWD0QvZg2Ra+Kdz6AXjAc+AB4N9W7Cd8A/QSSePRAezIxNPRKD4oxoYGDrYEmpO3Oc2dxLZUFtjttdyfpL2k62+mk79c3b7bdHUIAW9X2S2GJJQYyYEwibgh1AsrE9B4SxewM7XZ3n+LrQTNjsf3RbaaRXL5zW67O37Y3/Bf+SXgCsDcT8c1fDoN5NXfTWlMHnsR2ldNS8CaSnYH/YSmdZ49mxgpCHTlC5mGWgIIsy3rtNbZrPCmbXIOZeNkQ7WN3BTIZEhlBcNIwF3KL+o6A4RDEDeMlFCOJpBBZYuVzE4sbTXz65iBuIkvcGifsNRj5L+3YZSJLzE11hsYtE1ni6ezZoXHJRJ9O1wkTVyiwb9gyWqtTbpou7B+WjJ5EKtzwQctoScynqKf3D0pGS0KtUOfVxUX0W0b7jD2n8We2XzKkrmyQEOvQQAVTPWLsqYdqN07a1cZJX1jUirfy0MLiPSv0GDCt2+gD6sPVI5cK7t/al6jUGIWfjvsMHLaCxZTwGzcz42OEhdnwk0Rb4rDJblDAzi+JoyY6mXCzUP2bmbBMuMG/uC96ElBoS7wqtlA6CB9oEH7wzx9YXrtXtCUqdURGN3gfLQk119V06pV+Be+jJaGKtRf6HbyPlkTJzUQYBhW8j57EJQU96OB9IktUaufXw7CC94kssRNQD8MO3ieyRGm/IxFX8D6RJdRUijt4n8gS756MISmMrgAmhZFEUjBegiF/C/de6i7Mhd2z1Q9hX7PL6o49DIWFKIjsFNVZ8gcYCBMKj6ep7NWEdVXkDcwGWw4tq4YnobLhoL1gkogEv/U3qnT94DFiewShxi25HLhB5TTqghossUQJ2irEEmVmLtrHYi17l7pmzB8G9EwS2HnxYQAAAABJRU5ErkJggg==";
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAAXNSR0IArs4c6QAAAaxJREFUaEPtmM1Rw0AMRj+FS4ALdEAJDBUwVJAOSAfBHUAFuzRA6CAlUAIlhBI4ENuniFnIcGBw7PWPlMXyWWvr6cm7sgkjuWgknDDQ/2bajJrRRCtgrZuouMq0zagZTbQC1rqJirPNyFrXWrdrBRyfYVIusOVzgDyy47eut2yyXr51ff4K0OUuuTUYNxKwCqAF/zIgAisP6jbPoMmtNKw8aCBUgNUBVYDVA2Um+Hwp1cZ6oMGqIKwuqCCsPqgQ7GGACsD2C+rzFUCzJiNZZMwaPL1CRu+R637C+wN1mxlosmqbSO063j4gO72vjasI6BH0Yw46WrZNpHYds0d2ktXGDQ76NQTkDkSLPcm0LWznebjtg9sWtnpdOFMfyycA8yHm4MMAHRgyFE4fVABSH1QIUhdUEFIX1BfhKBpk4/lrx9N5R4UhdYz60gF8N8QRsu/Mkzfqx/JzzBcvAK531e888TSdXOSNuuLiu3XDl8jUd/kiaQqp847GZNdjrLzRHpOPuZWBxlQrhVgzmoKlmBzNaEy1Uog1oylYisnRjMZUK4VYM5qCpZgcR2P0E1EtsjvMufyFAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAACj0lEQVRoQ+2Xz0sUYRjHP88ouqVmERUYJEEdxYw6FP0BnTv049RfEGZCIV0WRGQRxBSNivUXSgdvgdcKIg8dvHUzt4N06JCru6m7te8TK1izie67s/MKwux1vu/zfPjMd4Yd4RD+5BAyE0Ef1F2LTEem9zEQ1SOqR1SPg+pAZNrW9Fj6BLn6djS/wqPmJdtjNjk3r7zBbBueNw1yCUhh6KUrNomI2kCVy7iBHtq8AXzwLf+K0sfDWDIMcDfQzzauY+QdQp0PPAX00RkbrxbcDfSANlC7cQfxXgC1f8GV5W3wtcQk8bgpV4O9rruBLm7bCxxNUdB+MgPJoODuoIvg8e+NNDfdRXheYhy+YOhnPTERBNwtdBF8VBv5tXUPGAHqfVVZAtPPwvwUc7cLlVTFPfSO8eNNu8GLxiFBOpYkLtYdDwatKgxttYIOIN4FS0sx0Bbg2H/5JdQkWJifsDUeDHpIz6CbY4jcsgQuF3uPmm66GhbLBYvXA0L/OIfG3iDSbrOkbEb1E0gPXUfels0Ghh7Wen7nb+KZGaDRZtHeGclgzBTrm0+Jn1y3mRXM9PbDpR6n15rJ1bbaLMKr6UC1F+Tsv7xkUDNN/mcPT05lrOYENm07fSc3nO/A6CiYa76jGVQrBg7e6Uqgi8CFwkuEKyWGxUyzmn5MvGWjknHuoYfz7ZjCK+CqDywLzJBe7Q4C7BZ6MNeGV0iC+IAlAzpbDbA76NKPgB3JWZRZllc6GbmYq7QS/nzwt8d+W3d/BGQx5jWpbw+qBXZnuvQjIFRgd9Dxz3U0nb9MjdwHs8jHo+PMSUX/5Pa7kW7qUU1hLc5G0BaSQolEpkPRaDEkMm0hKZRIZDoUjRZDItMWkkKJ/AGW19kvKgZJ9AAAAABJRU5ErkJggg==";
const _imports_4 = "" + buildAssetsURL("app_pic1.651e0d07.png");
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAAAXNSR0IArs4c6QAAAJRJREFUSEvF1cENg1AMA1B7EzYoK3WETgAswCyMwARdychSkTgQuODfnP4pT9FPZCJQkjoAPcmlas+nXUnu+QXwAjCRnM6Mx2Ejkj4AZj8rPAL/8BHAUOEx+A6Pwld4HK5wSvICtCx77//BLUaVtG+4Od/2GP/jM9R6FK7QKHyFxuA7NAIfQqLfF6llSDgWO5JrdTUbUTBTydGqJ+IAAAAASUVORK5CYII=";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAABECAYAAAA7iF/fAAAAAXNSR0IArs4c6QAAAtRJREFUeF7t3NFNIzEQgOEstJAq0kOqhxqOJo4SYNHpeEhWihkLOxl7P15jWfY/v2dnEw/Ly5+/66Hwdz4dl9Ln28/Md02kMb/1fDo+ReOxruvy+vb+WRi/u/kWgnYV9ED428ftEQeS8Jt4NBaU8KXHywOeQIQn/K5KJMITnvCXDiR/xLcuGbLPt7uXzNYv6TK8DC/Dy/DRL/4Ohzt/yyXD//IluOo79rgGRiKQkwDhc8bFqjoRIHwnsKbNSYDwOeNiVZ0IEL4TWNPmJED4nHGxqk4ECN8JrGlzEiB8zrhYVScChO8E1rQ5CRA+Z1ysqhMBwncCa9qcBAifMy5W1YmA25IbsMmvQ7s8VjgIkZZBwhPe9eBLB5JnvOwNG63XJ8PL8Lv6NyKEJzzhbzkQqWlbt9Bln08Nr4ZXw6vh49+JafG7YpW+5JLhZfh9Zfh4LjMSgfEJ+KV1/BjaQQUBwlfAMnR8AoQfP4Z2UEGA8BWwDB2fAOHHj6EdVBAgfAUsQ8cnQPjxY2gHFQQIXwHL0PEJEH78GNpBBQHCV8AydHwChB8/hnZwQeDflegSEJfHNnSSd3ilv43oPvxYQrVuyWs9H+EL6TvS8CLDj3UgCU94LX63HIhkvOwlSOv1yfAy/L4aQO7cota6pt3bfEoaJY2SRknzn0CkhFPSKGkeXdJ8lJL2+XR8jv7Q8C18cT4/PEVpGjcFAcJPEUabiBIgfJSUcVMQIPwUYbSJKAHCR0kZNwUBwk8RRpuIEiB8lJRxUxAg/BRhtIkoAcJHSRk3BQHCTxFGm4gSIHyUlHFTECD8FGG8vYkfezyXZa1BMPx8rgdfh1tPa/nwvL69fxYOSPrry25LbqJHeMJXlT2eGF2fGOkzaOuWvNbzyfAy/KPvw9+1RCI84Ql/6UDymlZPa+kNcl2X0V8ylTRjZeTWB1IN/8sDrqTJd4B+qmmb9ni27hnNPt8XxUkjCL8F0JQAAAAASUVORK5CYII=";
const _imports_7 = "" + buildAssetsURL("iso.7a8d35fe.png");
const _imports_8 = "" + buildAssetsURL("iaf.79cfd1b2.png");
const _imports_9 = "" + buildAssetsURL("cnas.85972cbb.png");
const _imports_10 = "" + buildAssetsURL("gaoxin.df26d9d1.png");
const _imports_11 = "" + buildAssetsURL("chuangxin.1f1793d8.png");
const _imports_12 = "" + buildAssetsURL("case_pic1.206309e2.png");
const profilePng = "" + buildAssetsURL("profile.72d0a5b5.png");
const folderPng = "" + buildAssetsURL("folder.b18e9d9c.png");
const settingPng = "" + buildAssetsURL("setting.05e5a5fc.png");
const securityPng = "" + buildAssetsURL("security.f2e13452.png");
const imgOne = "" + buildAssetsURL("01.2d10c181.png");
const imgTwo = "" + buildAssetsURL("02.a25584ac.png");
const imgThree = "" + buildAssetsURL("03.de8ed037.png");
const imgFor = "" + buildAssetsURL("04.9fa90ffd.png");
const pic1 = "" + buildAssetsURL("file_pic1.b1dd4031.png");
const pic2 = "" + buildAssetsURL("file_pic2.b76a6a48.png");
const pic3 = "" + buildAssetsURL("file_pic3.61dcac98.png");
const pic4 = "" + buildAssetsURL("file_pic4.3569c299.png");
const appbanner1 = "" + buildAssetsURL("app_banner1.90120cf0.jpg");
const appbanner2 = "" + buildAssetsURL("app_banner2.5cac629d.jpg");
const appbanner3 = "" + buildAssetsURL("app_banner3.457ad0a3.jpg");
const _imports_0$1 = "" + buildAssetsURL("banner.15672400.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "modalPrompt",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const listData = ref([]);
    const routing = getRouting();
    const router = useRouter();
    const showFn = () => {
      modalShow.value = true;
      init();
    };
    const init = () => {
      let data = {
        type: "PROMPT_ROBOT_CATEGORY",
        name: ""
      };
      proxy.$api.queryTagTemplateList(data).then((res) => {
        listData.value = res.data;
      });
    };
    const onPrompt = (item) => {
      modalShow.value = false;
      routing.setPrompt(item);
      router.push("/robot/brain/networking");
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        size: "large",
        "z-index": 3003,
        "class-name": "modalPromptMain",
        closable: false,
        "footer-hide": true,
        "mask-closable": false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalPrompt-top" data-v-a3031cf8${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} data-v-a3031cf8${_scopeId}><div class="modalPrompt-top-close" data-v-a3031cf8${_scopeId}><img${ssrRenderAttr("src", _imports_1$2)} data-v-a3031cf8${_scopeId}></div><div class="modalPrompt-top-title" data-v-a3031cf8${_scopeId}>\u70ED\u95E8\u63D0\u793A\u8BCD</div></div>`);
          } else {
            return [
              createVNode("div", { class: "modalPrompt-top" }, [
                createVNode("img", { src: _imports_0$1 }),
                createVNode("div", {
                  class: "modalPrompt-top-close",
                  onClick: ($event) => modalShow.value = false
                }, [
                  createVNode("img", { src: _imports_1$2 })
                ], 8, ["onClick"]),
                createVNode("div", { class: "modalPrompt-top-title" }, "\u70ED\u95E8\u63D0\u793A\u8BCD")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalPrompt-content" data-v-a3031cf8${_scopeId}><!--[-->`);
            ssrRenderList(listData.value, (item, index) => {
              _push2(`<!--[--><!--[-->`);
              ssrRenderList(item.promptList, (data, index2) => {
                _push2(`<div class="modalPrompt-content-item" data-v-a3031cf8${_scopeId}><div class="content-item-title" data-v-a3031cf8${_scopeId}>${ssrInterpolate(data.promptName)}</div><div class="content-item-name" data-v-a3031cf8${_scopeId}>${ssrInterpolate(data.promptContent)}</div><div class="content-item-btn" data-v-a3031cf8${_scopeId}><div class="btn" data-v-a3031cf8${_scopeId}>\u4F7F\u7528</div></div></div>`);
              });
              _push2(`<!--]--><!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "modalPrompt-content" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(listData.value, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.promptList, (data, index2) => {
                      return openBlock(), createBlock("div", {
                        class: "modalPrompt-content-item",
                        key: index2
                      }, [
                        createVNode("div", { class: "content-item-title" }, toDisplayString(data.promptName), 1),
                        createVNode("div", { class: "content-item-name" }, toDisplayString(data.promptContent), 1),
                        createVNode("div", { class: "content-item-btn" }, [
                          createVNode("div", {
                            class: "btn",
                            onClick: ($event) => onPrompt(data.promptContent)
                          }, "\u4F7F\u7528", 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ], 64);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modalPrompt.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const modalPrompt = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a3031cf8"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABE5JREFUaEPtWT1TFEEQ7TkMQAww9KLDMjGTDI30H/AXiFZCfgDyIallSK0JuQnyCzRTI8hA1AJUIKI4LeTrqBtrZqdne3tnztnb5eOq2Cpqub292379Xr/umRPQ44fo8fjhBsBVM3jDQG8x8HGvAUIuAsAjABi6hODfgRST8Pjelu9Z4RJKgl+5pMBpvE2QYsQHIhzA590lkDB2CVl3PeIDjNafud4IB/BpV15R8OqxTRit3+1lAACjdWeye4WBYgAWNo8bfVIsSuU2AoagJkH3bPwD81pxSq8hxzQtASlaPWrB2/0T2D9v+1UayoAKvtauJW4jTKAUgA6aAcBrCAjPqmoCAKjbj9oS5ncO/SBCAcTfTpcAYCzJbAAAzYZI7qUAXGz8xwU2Ts7h1d5f910FAEibNQSgzjXMpvmfB8gBqAQUYABZmNz+UxUAEigHwOuBS6eL7ONHos3fFQLAQLEGbNHyGnDURJcgKgSANUDkowuSaB5fa2BGMwUdiKe7QgDUOmkNoHXyonVZa/HeXR7A91MTGQLgDHSyUcZCoIVSmOUBfDs1LuQDQJix/q9s1MjLV9CBZFwAAJNxa6N+BqKpIx1mPH87uIFdYA2QIlbZVQByBUw6rQCIppImpAG4mloAC9UwgNKwfs8KGrXNztELA+AlYwDvw8ZGz9RuJUC0VbYPfDU1QEcJ25E93dhkOwOgWwZKA1BFbB/umIVo1nF84ADmHAyEjBWKge0qGcCxGUcJFaiuBYBo9jBA0ektsZJVwFENAGTAJyMFYK4sAJz2sqiqA2CzjY3M12nNaAESohlTxLNKQqY3SPI53SyIlvR7AkCdddIERNtNN0/B47QqYusMDvexKzC2WFE2OpOwEs8OpkHkurHLilJg0Y+yADawE5PlIl0XUHehYEhdxDODXTSyBFj0swoAPEg7TvMxgrCtGDCFHU8TAHpKVUc6YtkFE3JtWVIADkpK6ItigC0RMwwYbTML1c5kCjuevmO6ttUiCYpLCMElKKJfpQGcyWRkIBrXcxAWWlq0SeFlWchdo/lkZGTu1V8vIdopKyHFgEvnaKmZ94gGHIx0BMOFYr4q2nUw0IZleFJ3bmvmPCJeP2PjNB3YPEtHHbxjRcYZwqA7dGUHgGKbuykAo02+gOeDHGcrIxmynRoySqga2LMMKC2tghTjhbbXNYBM5ujuhInO8pY2IOsyvCawWdkGRveI8904agwUWsflJbRGAXg2rSgLNkBS6FzfrpA8jETD/SUBrLcOQMqhdHOLSKmTXDKO6dmlczt85mp0vySAN2ut9xLgqbVSGzQLymWfLsvMBe0vBinl8vMH/YV+RMnRtbB23KjJvhUQIvkNzG7kFnSaQkLQJtZs19ojE8MD3t/DXAQ6H6NACHHrtZAyyUZm5ukgD/5ttHGxQZQE05QgV2VLjk88LBa8z6UDlHp9bilK9PWJnDv6tYssMKCeZ+AfP7PBQPILAnkAAAAASUVORK5CYII=";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceRef = ref();
    const router = useRouter();
    const handleClick = (event) => {
      if (router.currentRoute._value.path === "/member") {
        event.preventDefault();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-action" }, _attrs))} data-v-780d6e56><div class="homeTitle" data-v-780d6e56><div class="area" data-v-780d6e56><p data-v-780d6e56>Start using the service</p><h2 data-v-780d6e56>\u5F00\u59CB\u4F7F\u7528\u670D\u52A1</h2></div></div><div class="action-area" data-v-780d6e56><div class="home-action-item" data-v-780d6e56><div class="home-action-item-name" data-v-780d6e56><img${ssrRenderAttr("src", _imports_0)} data-v-780d6e56><div class="info" data-v-780d6e56><div data-v-780d6e56>\u552E\u524D\u54A8\u8BE2</div><p data-v-780d6e56>Pre-sales advice</p></div></div><div class="home-action-item-content" data-v-780d6e56>\u4E13\u4E1A\u7684\u552E\u524D\u670D\u52A1\uFF0C\u63D0\u4F9B\u5168\u65B9\u4F4D\u652F\u6301</div></div><div class="home-action-item" data-v-780d6e56>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/member",
        onClick: handleClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="home-action-item-name" data-v-780d6e56${_scopeId}><img${ssrRenderAttr("src", _imports_1)} data-v-780d6e56${_scopeId}><div class="info" data-v-780d6e56${_scopeId}><div data-v-780d6e56${_scopeId}>\u5F00\u901A\u670D\u52A1</div><p data-v-780d6e56${_scopeId}>Subscribe to a service</p></div></div><div class="home-action-item-content" data-v-780d6e56${_scopeId}>\u5FEB\u901F\u521B\u5EFAAI\u5E94\u7528\uFF0C\u7545\u4EAB\u66F4\u591A\u7279\u6743</div>`);
          } else {
            return [
              createVNode("div", { class: "home-action-item-name" }, [
                createVNode("img", { src: _imports_1 }),
                createVNode("div", { class: "info" }, [
                  createVNode("div", null, "\u5F00\u901A\u670D\u52A1"),
                  createVNode("p", null, "Subscribe to a service")
                ])
              ]),
              createVNode("div", { class: "home-action-item-content" }, "\u5FEB\u901F\u521B\u5EFAAI\u5E94\u7528\uFF0C\u7545\u4EAB\u66F4\u591A\u7279\u6743")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(service, {
        ref_key: "serviceRef",
        ref: serviceRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cUsage/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const cUsage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-780d6e56"]]);
const _sfc_main = {
  __name: "userIndex",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const optionList = ref([{ "tagCode": "1", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u667A\u80FD\u5BA2\u670D", "tagValue": "\u7ED3\u5408AI\u6280\u672F\uFF0C\u4E3A\u5BA2\u670D\u884C\u4E1A\u63D0\u4F9B\u9AD8\u6548\u3001\u667A\u80FD\u7684\u670D\u52A1\u65B9\u6848\uFF0C\u964D\u4F4E\u4EBA\u5DE5\u6210\u672C\uFF0C\u63D0\u5347\u5BA2\u6237\u6EE1\u610F\u5EA6\uFF0C\u5E76\u4E3A\u4F01\u4E1A\u5E26\u6765\u66F4\u591A\u6709\u4EF7\u503C\u7684\u5BA2\u6237\u53CD\u9988\u548C\u6570\u636E\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon1.png", "avatarList": null, "type": "" }, { "tagCode": "2", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u8DE8\u5883\u7535\u5546", "tagValue": "\u8FD0\u7528AI\u6280\u672F\uFF0C\u4E3A\u8DE8\u5883\u7535\u5546\u63D0\u4F9B\u6D89\u53CA\u8D27\u5E01\u3001\u7A0E\u52A1\u3001\u7269\u6D41\u548C\u6587\u5316\u7684\u7EFC\u5408\u89E3\u51B3\u65B9\u6848\uFF0C\u7B80\u5316\u64CD\u4F5C\u6D41\u7A0B\uFF0C\u63D0\u9AD8\u5BA2\u6237\u4F53\u9A8C\uFF0C\u5E76\u52A9\u529B\u5546\u5BB6\u638C\u63E1\u5168\u7403\u5E02\u573A\u52A8\u6001\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon2.png", "avatarList": null, "type": "" }, { "tagCode": "3", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u9910\u996E\u670D\u52A1", "tagValue": "\u5229\u7528AI\u6280\u672F\uFF0C\u4E3A\u9910\u996E\u884C\u4E1A\u63D0\u4F9B\u4ECE\u987E\u5BA2\u6D41\u9884\u6D4B\u5230\u8425\u9500\u5206\u6790\u7684\u5168\u65B9\u4F4D\u670D\u52A1\uFF0C\u65E8\u5728\u964D\u4F4E\u6210\u672C\u3001\u63D0\u9AD8\u670D\u52A1\u6548\u7387\uFF0C\u5E76\u589E\u5F3A\u5BA2\u6237\u9ECF\u6027\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon3.png", "avatarList": null, "type": "" }, { "tagCode": "4", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u7F8E\u5BB9\u7F8E\u4E1A", "tagValue": "\u5229\u7528AI\u6280\u672F\uFF0C\u4E3A\u7F8E\u5BB9\u7F8E\u4E1A\u63D0\u4F9B\u4E2A\u6027\u5316\u7684\u76AE\u80A4\u5206\u6790\u3001\u4EA7\u54C1\u63A8\u8350\u548C\u6548\u679C\u9884\u6D4B\uFF0C\u540C\u65F6\u63D0\u4F9B\u6280\u672F\u548C\u4EA7\u54C1\u66F4\u65B0\u901A\u77E5\uFF0C\u589E\u5F3A\u987E\u5BA2\u4FE1\u4EFB\u548C\u6EE1\u610F\u5EA6\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon4.png", "avatarList": null, "type": "" }, { "tagCode": "5", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u667A\u80FD\u8425\u9500\r", "tagValue": "\u5229\u7528AI\u6280\u672F\uFF0C\u667A\u80FD\u8425\u9500\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u7CBE\u51C6\u3001\u9AD8\u6548\u7684\u5E7F\u544A\u6295\u653E\u3001\u5BA2\u6237\u5206\u6790\u548C\u5E02\u573A\u8D8B\u52BF\u9884\u6D4B\uFF0C\u4ECE\u800C\u63D0\u9AD8\u8425\u9500\u56DE\u62A5\u7387\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon5.png", "avatarList": null, "type": "" }, { "tagCode": "6", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u6CD5\u5F8B\u54A8\u8BE2\r", "tagValue": "\u7ED3\u5408AI\u6280\u672F\uFF0C\u4E3A\u6CD5\u5F8B\u54A8\u8BE2\u884C\u4E1A\u63D0\u4F9B\u5FEB\u901F\u6848\u4F8B\u67E5\u8BE2\u3001\u6587\u4E66\u64B0\u5199\u548C\u5F8B\u5E08\u5339\u914D\u7B49\u670D\u52A1\uFF0C\u65E8\u5728\u63D0\u9AD8\u54A8\u8BE2\u6548\u7387\uFF0C\u964D\u4F4E\u8D39\u7528\uFF0C\u5E76\u666E\u53CA\u6CD5\u5F8B\u77E5\u8BC6\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon6.png", "avatarList": null, "type": "" }, { "tagCode": "7", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u6559\u80B2\u57F9\u8BAD", "tagValue": "\u501F\u52A9AI\u6280\u672F\uFF0C\u6559\u80B2\u57F9\u8BAD\u884C\u4E1A\u80FD\u591F\u5B9E\u73B0\u4E2A\u6027\u5316\u6559\u5B66\uFF0C\u52A8\u6001\u8C03\u6574\u6559\u5B66\u5185\u5BB9\uFF0C\u540C\u65F6\u63D0\u4F9B\u6DF1\u5EA6\u7684\u5B66\u4E60\u5206\u6790\u548C\u53CD\u9988\uFF0C\u63D0\u9AD8\u6559\u80B2\u6548\u679C\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon7.png", "avatarList": null, "type": "" }, { "tagCode": "8", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u751F\u6D3B\u670D\u52A1\r", "tagValue": "\u5229\u7528AI\u6280\u672F\uFF0C\u751F\u6D3B\u670D\u52A1\u884C\u4E1A\u80FD\u591F\u63D0\u4F9B\u66F4\u52A0\u4E2A\u6027\u5316\u3001\u9AD8\u6548\u548C\u4FBF\u6377\u7684\u670D\u52A1\uFF0C\u4ECE\u5BB6\u653F\u3001\u7EF4\u4FEE\u5230\u5A5A\u793C\u7B56\u5212\uFF0C\u90FD\u80FD\u5F97\u5230\u6570\u5B57\u5316\u5347\u7EA7\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon8.png", "avatarList": null, "type": "" }, { "tagCode": "9", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u91D1\u878D\u670D\u52A1\r", "tagValue": "\u901A\u8FC7AI\u6280\u672F\uFF0C\u91D1\u878D\u670D\u52A1\u80FD\u591F\u5B9E\u73B0\u66F4\u5FEB\u901F\u7684\u98CE\u9669\u8BC4\u4F30\u3001\u81EA\u52A8\u5316\u6295\u8D44\u5EFA\u8BAE\u548C\u4E2A\u6027\u5316\u7684\u5BA2\u6237\u4F53\u9A8C\uFF0C\u63D0\u9AD8\u91D1\u878D\u5E02\u573A\u7684\u6548\u7387\u548C\u5B89\u5168\u6027\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon9.png", "avatarList": null, "type": "" }, { "tagCode": "10", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u6E38\u620F\u5A31\u4E50", "tagValue": "\u901A\u8FC7AI\u6280\u672F\uFF0C\u6E38\u620F\u5A31\u4E50\u884C\u4E1A\u80FD\u591F\u63D0\u4F9B\u66F4\u52A0\u4E2A\u6027\u5316\u7684\u6E38\u620F\u4F53\u9A8C\u3001\u6539\u8FDB\u6E38\u620F\u5185\u5BB9\u3001\u63D0\u9AD8\u6E38\u620F\u5B89\u5168\u6027\u548C\u5F15\u5165\u66F4\u591A\u4E92\u52A8\u5143\u7D20\u3002\u8FD9\u6709\u52A9\u4E8E\u63D0\u9AD8\u6E38\u620F\u7684\u5438\u5F15\u529B\u3001\u7528\u6237\u53C2\u4E0E\u5EA6\u548C\u76C8\u5229\u80FD\u529B\uFF0C\u540C\u65F6\u52A0\u5F3A\u6E38\u620F\u793E\u4EA4\u4E92\u52A8\u548C\u53CD\u4F5C\u5F0A\u63AA\u65BD\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon10.png", "avatarList": null, "type": "" }, { "tagCode": "11", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u4F20\u611F\u5668", "tagValue": "\u901A\u8FC7AI\u6280\u672F\uFF0C\u4F20\u611F\u5668\u884C\u4E1A\u80FD\u591F\u63D0\u4F9B\u66F4\u9AD8\u6548\u7684\u6570\u636E\u91C7\u96C6\u3001\u5B9E\u65F6\u76D1\u6D4B\u3001\u6545\u969C\u68C0\u6D4B\u548C\u6570\u636E\u5206\u6790\u3002\u8FD9\u6709\u52A9\u4E8E\u89E3\u51B3\u4F20\u611F\u5668\u6570\u636E\u5E9E\u5927\u7684\u95EE\u9898\u3001\u63D0\u9AD8\u4F20\u611F\u5668\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u548C\u5B89\u5168\u6027\uFF0C\u540C\u65F6\u63D0\u4F9B\u66F4\u51C6\u786E\u7684\u73AF\u5883\u4FE1\u606F\u548C\u9884\u6D4B\u6027\u7EF4\u62A4\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon11.png", "avatarList": null, "type": "" }, { "tagCode": "12", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u533B\u7597\u4FDD\u5065", "tagValue": "\u533B\u7597\u5065\u5EB7\u9886\u57DF\u662F\u4E00\u4E2A\u9700\u8981\u9AD8\u6548\u548C\u51C6\u786E\u51B3\u7B56\u7684\u884C\u4E1A\uFF0C\u540C\u65F6\u4E5F\u9700\u8981\u63D0\u4F9B\u60A3\u8005\u5173\u6000\u3002\u4EBA\u5DE5\u667A\u80FD\u6280\u672F\u5728\u533B\u7597\u5065\u5EB7\u4E2D\u626E\u6F14\u7740\u5173\u952E\u7684\u89D2\u8272\uFF0C\u7528\u4E8E\u75BE\u75C5\u8BCA\u65AD\u3001\u60A3\u8005\u7BA1\u7406\u3001\u5065\u5EB7\u76D1\u6D4B\u7B49\u65B9\u9762\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon12.png", "avatarList": null, "type": "" }, { "tagCode": "13", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u65C5\u6E38\u9152\u5E97", "tagValue": "\u7ED3\u5408AI\u6280\u672F\uFF0C\u65C5\u6E38\u9152\u5E97\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u4E2A\u6027\u5316\u7684\u9884\u8BA2\u4F53\u9A8C\u3001\u667A\u80FD\u63A8\u8350\u65C5\u6E38\u8DEF\u7EBF\u548C\u9152\u5E97\u670D\u52A1\uFF0C\u4ECE\u800C\u589E\u5F3A\u5BA2\u6237\u6EE1\u610F\u5EA6\u3002\r", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon13.png", "avatarList": null, "type": "" }, { "tagCode": "14", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u4EBA\u529B\u8D44\u6E90", "tagValue": "\u7ED3\u5408AI\u6280\u672F\uFF0C\u4EBA\u529B\u8D44\u6E90\u884C\u4E1A\u80FD\u591F\u66F4\u52A0\u9AD8\u6548\u5730\u7B5B\u9009\u548C\u5339\u914D\u4EBA\u624D\uFF0C\u540C\u65F6\u63D0\u4F9B\u5458\u5DE5\u57F9\u8BAD\u3001\u8BC4\u4F30\u548C\u7BA1\u7406\u7B49\u5168\u65B9\u4F4D\u670D\u52A1\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon14.png", "avatarList": null, "type": "" }, { "tagCode": "15", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u516C\u6587\u5199\u4F5C", "tagValue": "\u5229\u7528AI\u6280\u672F\uFF0C\u516C\u6587\u5199\u4F5C\u53EF\u4EE5\u5B9E\u73B0\u66F4\u52A0\u89C4\u8303\u3001\u9AD8\u6548\u7684\u6587\u6863\u64B0\u5199\u548C\u6821\u5BF9\uFF0C\u63D0\u9AD8\u516C\u6587\u8D28\u91CF\u548C\u6548\u7387\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon15.png", "avatarList": null, "type": "" }, { "tagCode": "16", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u4F01\u4E1A\u670D\u52A1", "tagValue": "\u501F\u52A9AI\u6280\u672F\uFF0C\u4F01\u4E1A\u670D\u52A1\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u7CBE\u51C6\u7684\u5E02\u573A\u5206\u6790\u3001\u81EA\u52A8\u5316\u5BA2\u6237\u5173\u7CFB\u7BA1\u7406\u548C\u667A\u80FD\u5316\u7684\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u63D0\u9AD8\u4F01\u4E1A\u6548\u7387\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon16.png", "avatarList": null, "type": "" }, { "tagCode": "17", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u521B\u610F\u4EA7\u4E1A\r", "tagValue": "\u7ED3\u5408AI\u6280\u672F\uFF0C\u521B\u610F\u4EA7\u4E1A\u53EF\u4EE5\u5B9E\u73B0\u66F4\u52A0\u9AD8\u6548\u7684\u5185\u5BB9\u521B\u4F5C\u3001\u667A\u80FD\u63A8\u8350\u548C\u81EA\u52A8\u5316\u5206\u6790\uFF0C\u4ECE\u800C\u63D0\u9AD8\u521B\u610F\u6548\u679C\u548C\u4EA7\u503C\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon17.png", "avatarList": null, "type": "" }, { "tagCode": "18", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u56E2\u8D2D\u76F4\u64AD\r", "tagValue": "\u7ED3\u5408AI\u6280\u672F\uFF0C\u5F15\u5165\u667A\u80FD\u5BA2\u670D\u3001\u6570\u5B57\u4EBA\u7B49AI\u6280\u672F\uFF0C\u4E0D\u4EC5\u80FD\u591F\u63D0\u9AD8\u6548\u7387\uFF0C\u66F4\u80FD\u591F\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u52A0\u4E2A\u6027\u5316\u3001\u9AD8\u6548\u7684\u8D2D\u7269\u4F53\u9A8C\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon18.png", "avatarList": null, "type": "" }, { "tagCode": "19", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "Al\u8FD0\u52A8\u5065\u8EAB", "tagValue": "AI\u6280\u672F\u5728\u8FD0\u52A8\u5065\u8EAB\u9886\u57DF\u5B9E\u73B0\u4E86\u667A\u80FD\u5065\u8EAB\u6559\u7EC3\u3001\u4E2A\u6027\u5316\u8BAD\u7EC3\u65B9\u6848\u3001\u8EAB\u4F53\u72B6\u6001\u76D1\u6D4B\u548C\u793E\u4EA4\u4E92\u52A8\u3002\u8FD9\u6709\u52A9\u4E8E\u63D0\u9AD8\u8FD0\u52A8\u6548\u679C\u3001\u7528\u6237\u5065\u5EB7\u548C\u953B\u70BC\u52A8\u529B\uFF0C\u540C\u65F6\u63D0\u4F9B\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon19.png", "avatarList": null, "type": "" }, { "tagCode": "20", "tagType": "INDUSTRY_SOLUTIONS", "tagName": "AI\u793E\u4EA4\u5A92\u4F53", "tagValue": "AI\u6280\u672F\u7684\u5F15\u5165\u4F7F\u793E\u4EA4\u5A92\u4F53\u5E73\u53F0\u80FD\u591F\u63D0\u4F9B\u66F4\u4E3A\u4E2A\u6027\u5316\u7684\u5185\u5BB9\u63A8\u8350\uFF0C\u81EA\u52A8\u8BC6\u522B\u548C\u5904\u7406\u4E0D\u826F\u4FE1\u606F\uFF0C\u540C\u65F6\u901A\u8FC7\u6DF1\u5EA6\u6570\u636E\u5206\u6790\u52A9\u529B\u54C1\u724C\u548C\u5E7F\u544A\u5546\u66F4\u7CBE\u51C6\u5730\u8FDB\u884C\u8425\u9500\u3002", "extend": "https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon20.png", "avatarList": null, "type": "" }]);
    const cCreateRef = ref();
    const { proxy } = getCurrentInstance();
    const serviceRef = ref();
    const modalPromptRef = ref();
    const routing = getRouting();
    const router = useRouter();
    ref([
      // {title:t('home.AI海报'),en:'AI Poster',url:'/robot/draw/list?type=placard',content:t('home.输入需求')},
      // {title:t('home.联网查询'),en:'Online Inquiry',url:'/robot/brain/agency',content:t('home.即时访问')},
      // {title:t('home.智能HR'),en:'Intelligent HR',url:'/robot/brain/hr',content:t('home.自动化简历匹配')},
      // {title:t('home.文件解读'),en:'Document Interpretation',url:'/robot/brain/networking',content:t('home.AI助手')},
    ]);
    ref([
      { title: t("home.\u521B\u5EFA\u673A\u5668\u4EBA"), en: "Create a robot", content: t("home.\u53D6\u540D\u5B57\u4F20\u7167\u7247"), img: profilePng, numberImg: imgOne, pic: pic1 },
      { title: t("home.\u77E5\u8BC6\u5E93\u8BAD\u7EC3"), en: "Vector database training", content: t("home.\u4E0A\u4F20\u6587\u4EF6"), img: folderPng, numberImg: imgTwo, pic: pic2 },
      { title: t("home.\u5BF9\u8BDD\u4E0E\u8C03\u8BD5"), en: "Dialogue and Debugging", content: t("home.\u5339\u914D\u76F8\u4F3C\u5EA6"), img: settingPng, numberImg: imgThree, pic: pic3 },
      { title: t("home.\u53D1\u5E03\u4E0E\u8F93\u51FA"), en: "Release and output", content: t("home.\u8F93\u51FA\u5206\u4EAB"), img: securityPng, numberImg: imgFor, pic: pic4 }
    ]);
    ref({
      "appbanner1": appbanner1,
      "appbanner2": appbanner2,
      "appbanner3": appbanner3
    });
    const siweiList = ref([{
      name: t("home.\u53E3\u7B97\u6279\u6539"),
      img: "https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-01.jpg",
      url: "/robot/tool/compute"
    }, {
      name: t("home.\u76AE\u80A4\u68C0\u6D4B"),
      img: "https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-02.jpg",
      url: "/robot/tool/skin"
    }, {
      name: t("home.\u601D\u7EF4\u5BFC\u56FE"),
      img: "https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-03.jpg",
      url: "/robot/tool/thinking"
    }, {
      name: t("home.\u4F5C\u6587\u6539\u5199"),
      img: "https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-04.jpg",
      url: "/robot/tool/rewrite"
    }]);
    ref(0);
    const banner = ref("");
    const content = ref("");
    const isAgent = ref(true);
    ref([{
      name: t("home.AI\u4F5C\u753B"),
      code: "DRAW"
    }, {
      name: t("home.AI\u6D77\u62A5"),
      code: "POSTER"
    }, {
      name: t("home.AI\u89D2\u8272"),
      code: "ROLE_ROBOT_CATEGORY"
    }, {
      name: t("home.AI\u521B\u4F5C"),
      code: "QUESTION_BANK_ROBOT_CATEGORY"
    }, {
      name: t("home.AI\u5DE5\u5177"),
      code: "TOOL"
    }]);
    const recommendRobotNavLis = ref([]);
    const recommendRobotLis = ref([]);
    const articleList = ref([]);
    const bannerList = ref([]);
    const recommendCode = ref("DRAW");
    const robotCode = ref("");
    const robotType = ref("");
    ref([]);
    onMounted(async () => {
      banner.value = new URL("../assets/image/index/app_banner1.jpg", globalThis._importMeta_.url).href;
      new Swiper(".swiper", {
        loop: true,
        // 循环模式选项
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2e3
          // 设置自动滚动的时间间隔（以毫秒为单位）  
        }
        // 如果需要分页器
        // pagination: {
        // 	el: '.swiper-pagination',
        // },
      });
      onIdentifyList();
      onBanner();
      onNews();
      onSolution();
      onLaboratory();
      onRecommendRobot(recommendCode.value);
      getRobotDetail();
    });
    const laboratoryList = ref([]);
    const onLaboratory = () => {
      proxy.$api.queryLaboratoryTagInfoList().then((res) => {
        laboratoryList.value = res.data;
      });
    };
    const getRobotDetail = () => {
      let data = {
        code: "1732233508995493889"
      };
      if (proxy.$isLogin()) {
        proxy.$api.space_robotGetRobotInfo(data).then((res) => {
          robotCode.value = res.data.code;
          robotType.value = res.data.type;
        });
      }
    };
    let identifyList = ref([]);
    const onIdentifyList = () => {
      proxy.$api.py_gpt4_vision_example().then((res) => {
        identifyList.value = res.data.message;
      });
    };
    const toClickItem = (index) => {
      if (bannerList.value[index].linkUrl && bannerList.value[index].linkUrl.includes("http"))
        ;
      else {
        serviceRef.value.showFn();
      }
    };
    const onFrontRobotList = (item) => {
      console.log(item);
      recommendCode.value = item.showStyleType;
      recommendRobotLis.value = [];
      if (item.showStyleType == "DRAW" || item.showStyleType == "POSTER") {
        recommendRobotLis.value = item.aiRecordResVoList;
        if (item.showStyleType == "DRAW") {
          item.aiRecordResVoList.forEach((iten) => {
            iten.params = iten.result ? JSON.parse(iten.result) : "";
          });
        }
      }
      if (item.showStyleType == "ROLE" || item.showStyleType == "QUESTION_BANK") {
        recommendRobotLis.value = item.frontRobotInfoResVoList;
      }
    };
    const onUpload = (e) => {
      let fileList = [];
      e.forEach((item) => {
        fileList.push({
          resourceName: item.name,
          resourceCode: item.code,
          resourceSize: item.size
        });
      });
      let data = {
        resourceList: fileList
      };
      proxy.$api.resourceUploadCallback(data).then(() => {
        let data2 = {
          isAgent: isAgent.value,
          fileList: e
        };
        routing.setInternetData(data2);
        router.push("/robot/brain/networking");
      });
    };
    const onBanner = () => {
      let data = {
        advertBoardCode: "HOMEPAGE_CAROUSEL"
      };
      proxy.$api1.banner_list_photo(data).then((res) => {
        bannerList.value = res.resultObj;
      });
    };
    const onSolution = () => {
      let data = {
        tagType: "INDUSTRY_SOLUTIONS"
      };
      proxy.$api.queryTagInfoList(data).then((res) => {
        optionList.value = res.data;
      });
    };
    const onNews = () => {
      let data = {
        pageSize: 3,
        articleUseScene: "OFFICE"
      };
      proxy.$api1.home_articleList(data).then((res) => {
        articleList.value = res.resultObj.datas;
      });
    };
    const onRecommendRobot = (code) => {
      recommendRobotNavLis.value = [];
      proxy.$api.queryFrontRobotList().then((res) => {
        recommendRobotNavLis.value = res.data;
        onFrontRobotList(res.data[0]);
        recommendRobotNavLis.value.push({
          showStyleType: "TOOL",
          name: t("home.AI\u5DE5\u5177")
        });
      });
    };
    const useNumber = (record) => {
      let num = Number(record);
      if (num < 1e4) {
        return num;
      } else {
        let result = Math.floor(num / 1e3) / 10;
        return result;
      }
    };
    const timer = ref(null);
    onUnmounted(() => {
      clearInterval(timer.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = resolveComponent("Carousel");
      const _component_CarouselItem = resolveComponent("CarouselItem");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_ossUploader = __nuxt_component_1;
      const _component_cCreate = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-bff0101b>`);
      if (bannerList.value.length > 0) {
        _push(`<div class="home-swiper" data-v-bff0101b>`);
        _push(ssrRenderComponent(_component_Carousel, {
          dots: "none",
          autoplay: "",
          onOnClick: toClickItem,
          "autoplay-speed": 7e3,
          loop: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(bannerList.value, (item, index) => {
                _push2(ssrRenderComponent(_component_CarouselItem, {
                  class: "home-swiper-item itemBanner",
                  style: "background-image: url(" + item.advertBgPhoto + ");"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="banner" data-v-bff0101b${_scopeId2}><img${ssrRenderAttr("src", item.advertPhoto)} data-v-bff0101b${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "banner" }, [
                          createVNode("img", {
                            src: item.advertPhoto
                          }, null, 8, ["src"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(bannerList.value, (item, index) => {
                  return openBlock(), createBlock(_component_CarouselItem, {
                    key: index,
                    class: "home-swiper-item itemBanner",
                    style: "background-image: url(" + item.advertBgPhoto + ");"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "banner" }, [
                        createVNode("img", {
                          src: item.advertPhoto
                        }, null, 8, ["src"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["style"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="home-product" data-v-bff0101b>`);
      if (unref(routing).configuration && unref(routing).configuration.bannerList && unref(routing).configuration.bannerList.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(routing).configuration.bannerList, (item, i) => {
          _push(`<div class="home-product-item" data-v-bff0101b>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.url
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="home-product-item-name" data-v-bff0101b${_scopeId}>${ssrInterpolate(item.name)}</div><p data-v-bff0101b${_scopeId}>${ssrInterpolate(item.nameEnglish)}</p><div class="home-product-item-content" data-v-bff0101b${_scopeId}>${ssrInterpolate(item.function)}</div><div class="home-product-item-tag" data-v-bff0101b${_scopeId}>${ssrInterpolate(item.label)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "home-product-item-name" }, toDisplayString(item.name), 1),
                  createVNode("p", null, toDisplayString(item.nameEnglish), 1),
                  createVNode("div", { class: "home-product-item-content" }, toDisplayString(item.function), 1),
                  createVNode("div", { class: "home-product-item-tag" }, toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="home-chat" data-v-bff0101b><div class="homeMain" data-v-bff0101b><h3 class="title" style="${ssrRenderStyle({ "color": "#1a1a1a" })}" data-v-bff0101b><div data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u6211\u4ECA\u5929\u80FD\u5E2E\u4F60\u505A\u4EC0\u4E48"))}</div>`);
      if (unref(locale) == "zh") {
        _push(`<div data-v-bff0101b>How can I help you today?</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h3><div class="ipt clearfix" data-v-bff0101b><div class="box" data-v-bff0101b><div class="box-content" data-v-bff0101b><div class="prompt" data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u63D0\u793A\u8BCD"))}</div><div class="division" data-v-bff0101b></div><input type="text"${ssrRenderAttr("value", content.value)}${ssrRenderAttr("placeholder", _ctx.$t("home.\u4F60\u53EF\u4EE5\u8FD9\u6837\u95EE\u6211"))} data-v-bff0101b><div class="chatAction" data-v-bff0101b><div class="icon upload" style="${ssrRenderStyle({ "right": "40px" })}" data-v-bff0101b>`);
      _push(ssrRenderComponent(_component_ossUploader, {
        modeType: "icon",
        format: ["txt", "doc", "docx", "pptx", "pdf", "xls", "xlsx"],
        code: robotCode.value,
        type: robotType.value,
        onUploadSuccess: onUpload
      }, null, _parent));
      _push(`</div><div class="icon sending" style="${ssrRenderStyle({ "right": "0px" })}" data-v-bff0101b><img${ssrRenderAttr("src", _imports_0$2)} data-v-bff0101b></div></div></div></div></div><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u8BF7\u9075\u5B88"))}<a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} data-v-bff0101b>\u300A${ssrInterpolate(_ctx.$t("home.\u7528\u6237\u670D\u52A1\u534F\u8BAE"))}\u300B</a>\uFF0C${ssrInterpolate(_ctx.$t("home.Ai\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA"))}</p></div></div><div class="homeRobotArea" data-v-bff0101b><div class="homeTitle" data-v-bff0101b><div class="area" data-v-bff0101b><p data-v-bff0101b>Robot, my AI can do anything. </p><h2 data-v-bff0101b>${ssrInterpolate(unref(t)("home.\u6211\u7684AI\u65E0\u6240\u4E0D\u80FD"))}</h2></div></div><div class="homeTitleDesc mb-25" data-v-bff0101b><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u9B54\u6CD5\u5492\u8BED"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/robot/chat" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.\u7ACB\u5373\u4F53\u9A8C"))} <img${ssrRenderAttr("src", _imports_1$1)} data-v-bff0101b${_scopeId}>`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.\u7ACB\u5373\u4F53\u9A8C")) + " ", 1),
              createVNode("img", { src: _imports_1$1 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="homeMain" data-v-bff0101b><ul class="nav" data-v-bff0101b><!--[-->`);
      ssrRenderList(recommendRobotNavLis.value, (item, index) => {
        _push(`<li class="${ssrRenderClass(recommendCode.value == item.showStyleType ? "active" : "")}" data-v-bff0101b>${ssrInterpolate(item.name)}</li>`);
      });
      _push(`<!--]--></ul><div class="products-list" data-v-bff0101b><div class="more" data-v-bff0101b><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u66F4\u591A"))}<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-bff0101b></p></div>`);
      if (recommendCode.value == "DRAW" || recommendCode.value == "POSTER") {
        _push(`<ul class="clearfix creative" data-v-bff0101b><!--[-->`);
        ssrRenderList(recommendRobotLis.value, (item, index) => {
          _push(`<li data-v-bff0101b><img${ssrRenderAttr("src", item.content || item.cateLogo)} alt="" data-v-bff0101b>`);
          if (recommendCode.value == "DRAW") {
            _push(`<div class="cover" data-v-bff0101b><div class="cover-top" data-v-bff0101b><div class="cover-top-btn" data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u521B\u4F5C\u76F8\u4F3C"))}</div></div>`);
            if (item.params) {
              _push(`<div class="keyWord text-hide-2" data-v-bff0101b>${ssrInterpolate(item.params.content)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (recommendCode.value == "ROLE") {
        _push(`<ul class="clearfix role" data-v-bff0101b><!--[-->`);
        ssrRenderList(recommendRobotLis.value, (item, index) => {
          _push(`<li data-v-bff0101b><img${ssrRenderAttr("src", item.backgroupPic || item.img)} alt="" data-v-bff0101b>`);
          if (item.usePeopleNum) {
            _push(`<div class="tag" data-v-bff0101b><img${ssrRenderAttr("src", _imports_3)} data-v-bff0101b><div data-v-bff0101b>${ssrInterpolate(useNumber(item.usePeopleNum))}${ssrInterpolate(_ctx.$t("home.\u4EBA\u5728\u4F7F\u7528"))}</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="item-name" data-v-bff0101b><div class="name" data-v-bff0101b>${ssrInterpolate(item.name)}</div><div class="remark" data-v-bff0101b>${ssrInterpolate(item.robotRemark)}</div></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (recommendCode.value == "QUESTION_BANK") {
        _push(`<ul class="clearfix creative" data-v-bff0101b><!--[-->`);
        ssrRenderList(recommendRobotLis.value, (item, index) => {
          _push(`<li class="content-list-item" data-v-bff0101b><div class="item-top" data-v-bff0101b><div class="item-top-logo" data-v-bff0101b><img${ssrRenderAttr("src", item.robotLogo)} data-v-bff0101b></div><div class="item-top-name" data-v-bff0101b>${ssrInterpolate(item.name)}</div></div><div class="item-content text-hide" data-v-bff0101b>${ssrInterpolate(item.robotRemark)}</div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (recommendCode.value == "TOOL") {
        _push(`<!--[--><ul class="clearfix identify" data-v-bff0101b><!--[-->`);
        ssrRenderList(unref(identifyList), (item, index) => {
          _push(`<!--[-->`);
          if (index < 4) {
            _push(`<li data-v-bff0101b><img${ssrRenderAttr("src", item.img)} alt="" data-v-bff0101b></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></ul><div class="more" data-v-bff0101b><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u66F4\u591A"))}<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-bff0101b></p></div><ul class="clearfix tool" data-v-bff0101b><!--[-->`);
        ssrRenderList(siweiList.value, (item, index) => {
          _push(`<li data-v-bff0101b><img${ssrRenderAttr("src", item.img)} alt="" data-v-bff0101b></li>`);
        });
        _push(`<!--]--></ul><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (unref(routing).configuration.laboratoryModule) {
        _push(`<div class="homeAppArea" data-v-bff0101b><div class="homeTitle" data-v-bff0101b><div class="area" data-v-bff0101b><p data-v-bff0101b>Lab, open source modeling tools, explore unlimited! </p><h2 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u63A2\u7D22\u65E0\u9650"))}</h2></div></div><div class="homeTitleDesc" data-v-bff0101b><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u521B\u9020\u4EF7\u503C"))}</p><a href="/laboratory" data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u7ACB\u5373\u4F53\u9A8C"))} <img${ssrRenderAttr("src", _imports_1$1)} data-v-bff0101b></a></div><div class="homeMain" data-v-bff0101b><img class="pic1"${ssrRenderAttr("src", _imports_4)} data-v-bff0101b><div class="laboratory-content clearfix" data-v-bff0101b><!--[-->`);
        ssrRenderList(laboratoryList.value, (item, i) => {
          _push(`<!--[-->`);
          if (i < 4) {
            _push(`<div class="laboratory-content-item" data-v-bff0101b><div class="item-name" data-v-bff0101b>${ssrInterpolate(item.tagName)}</div><div class="item-sub" data-v-bff0101b>${ssrInterpolate(item.subTitleKey)}</div><div class="item-division" data-v-bff0101b></div><div class="item-des text-hide-3" data-v-bff0101b>${ssrInterpolate(item.tagValue)}</div><div class="item-bottom" data-v-bff0101b><div data-v-bff0101b>${ssrInterpolate(item.productSourceKey)}</div>`);
            if (item.urlTypeKey == "OUTER_LINK") {
              _push(`<a class="item-bottom-btn"${ssrRenderAttr("href", item.urlLinkKey)} target="_blank" data-v-bff0101b><div class="btn-name" data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u7ACB\u5373\u4F53\u9A8C"))}</div><img class="ico"${ssrRenderAttr("src", _imports_5)} data-v-bff0101b></a>`);
            } else {
              _push(ssrRenderComponent(_component_NuxtLink, {
                class: "item-bottom-btn",
                to: item.urlLinkKey
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="btn-name" data-v-bff0101b${_scopeId}>${ssrInterpolate(_ctx.$t("home.\u7ACB\u5373\u4F53\u9A8C"))}</div><img class="ico"${ssrRenderAttr("src", _imports_5)} data-v-bff0101b${_scopeId}>`);
                  } else {
                    return [
                      createVNode("div", { class: "btn-name" }, toDisplayString(_ctx.$t("home.\u7ACB\u5373\u4F53\u9A8C")), 1),
                      createVNode("img", {
                        class: "ico",
                        src: _imports_5
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<img class="tag"${ssrRenderAttr("src", _imports_6)} data-v-bff0101b></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(routing).configuration.video && unref(routing).configuration.videoModule) {
        _push(`<div class="homeVideoArea" data-v-bff0101b><div class="homeTitle" data-v-bff0101b><div class="area" data-v-bff0101b><p data-v-bff0101b>Video presentation Opportunities Challenges</p><h2 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u89C6\u9891\u6F14\u793A"))}</h2></div></div><div class="homeMain" data-v-bff0101b><div class="videoArea" data-v-bff0101b><video controls${ssrRenderAttr("src", unref(routing).configuration.video)} data-v-bff0101b></video></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(routing).configuration.techDevelopmentModule) {
        _push(`<div class="homeTechnicalArea" data-v-bff0101b><div class="homeTitle" style="${ssrRenderStyle({ "margin-top": "15px" })}" data-v-bff0101b><div class="area" data-v-bff0101b><p data-v-bff0101b>Technology R&amp;D Create value</p><h2 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u6280\u672F\u7814\u53D1"))}</h2></div></div><div class="technicaBox" data-v-bff0101b><div class="homeMain" data-v-bff0101b><div class="technicaArea" data-v-bff0101b><ul class="area1" data-v-bff0101b><li data-v-bff0101b><h3 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u6A21\u5757\u5316\u53EF\u6269\u5C55"))}</h3><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u652F\u6301\u6A21\u5757\u5316\u7684\u67B6\u6784"))}</p></li><li data-v-bff0101b><h3 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u6570\u636E\u9A71\u52A8\u51B3\u7B56"))}</h3><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u7CFB\u7EDF\u4FA7\u91CD\u4E8E\u6570\u636E\u7684\u6536\u96C6"))}</p></li><li data-v-bff0101b><h3 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u591A\u884C\u4E1A\u591A\u573A\u666F"))}</h3><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u7CFB\u7EDF\u652F\u6301\u591A\u79CD\u4E1A\u52A1\u573A\u666F"))}</p></li><li data-v-bff0101b><h3 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u751F\u6001\u7CFB\u7EDF\u652F\u6301"))}</h3><p data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u4E30\u5BCC\u7684\u5F00\u53D1\u8005\u8D44\u6E90\u548C\u5DE5\u5177"))}</p></li></ul></div><div class="aptitude" data-v-bff0101b><img class="aptitude-item"${ssrRenderAttr("src", _imports_7)} data-v-bff0101b><img class="aptitude-item"${ssrRenderAttr("src", _imports_8)} data-v-bff0101b><img class="aptitude-item"${ssrRenderAttr("src", _imports_9)} data-v-bff0101b><img class="aptitude-item"${ssrRenderAttr("src", _imports_10)} data-v-bff0101b><img class="aptitude-item"${ssrRenderAttr("src", _imports_11)} data-v-bff0101b></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(routing).configuration.solutionModule) {
        _push(`<div class="homeCaseArea" data-v-bff0101b><img class="pic1"${ssrRenderAttr("src", _imports_12)} alt="" data-v-bff0101b><div class="homeTitle" data-v-bff0101b><div class="area" data-v-bff0101b><p data-v-bff0101b>Solutions Customized services</p><h2 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u5B9A\u5236\u670D\u52A1"))}</h2></div></div><div class="homeCaseMain" data-v-bff0101b><div class="swiper" data-v-bff0101b><div class="swiper-wrapper" data-v-bff0101b><!--[-->`);
        ssrRenderList(optionList.value, (item, index) => {
          _push(`<div class="swiper-slide" data-v-bff0101b><ul class="clearfix" data-v-bff0101b><li data-v-bff0101b><div class="pic" data-v-bff0101b><img${ssrRenderAttr("src", item.extend)} alt="" data-v-bff0101b></div><div class="info" data-v-bff0101b><h3 data-v-bff0101b>${ssrInterpolate(item.tagName)}</h3><p class="text-hide-2" data-v-bff0101b>${ssrInterpolate(item.tagValue)}</p></div></li></ul></div>`);
        });
        _push(`<!--]--></div><div class="swiper-pagination" data-v-bff0101b></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(routing).configuration.industryInformationModule) {
        _push(`<div class="home-consult" data-v-bff0101b><div class="homeTitle" data-v-bff0101b><div class="area" data-v-bff0101b><p data-v-bff0101b>Industry news The latest news</p><h2 data-v-bff0101b>${ssrInterpolate(_ctx.$t("home.\u6700\u65B0\u52A8\u6001"))}</h2></div></div><div class="news" data-v-bff0101b><div class="news-content" data-v-bff0101b><!--[-->`);
        ssrRenderList(articleList.value, (item, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "news-content-item",
            key: i,
            to: "/news/" + item.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="news-cover" data-v-bff0101b${_scopeId}><img${ssrRenderAttr("src", item.articleCoverUrl)} data-v-bff0101b${_scopeId}></div><div class="news-title" data-v-bff0101b${_scopeId}>${ssrInterpolate(item.articleTitle)}</div><div class="news-name" data-v-bff0101b${_scopeId}>${ssrInterpolate(item.articleDesp)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "news-cover" }, [
                    createVNode("img", {
                      src: item.articleCoverUrl
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "news-title" }, toDisplayString(item.articleTitle), 1),
                  createVNode("div", { class: "news-name" }, toDisplayString(item.articleDesp), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (articleList.value.length % 3 == 2) {
          _push(`<div class="news-content-item" style="${ssrRenderStyle({ "visibility": "hidden" })}" data-v-bff0101b></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(cUsage, null, null, _parent));
      _push(ssrRenderComponent(modalPrompt, {
        ref_key: "modalPromptRef",
        ref: modalPromptRef
      }, null, _parent));
      _push(ssrRenderComponent(service, {
        ref_key: "serviceRef",
        ref: serviceRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_cCreate, {
        ref_key: "cCreateRef",
        ref: cCreateRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/userIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const userIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bff0101b"]]);

export { userIndex as default };
//# sourceMappingURL=userIndex-d5eabae0.mjs.map
