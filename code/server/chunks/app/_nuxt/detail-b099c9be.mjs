import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1$1 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { _ as __nuxt_component_1 } from './electricCom-ab2941d1.mjs';
import { useSSRContext, defineComponent, ref, onUnmounted, watch, getCurrentInstance, resolveComponent, resolveDirective, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, toDisplayString, renderList, mergeProps, createCommentVNode, withDirectives, withModifiers } from 'vue';
import { Transformer } from 'markmap-lib';
import { _ as __nuxt_component_1$1 } from './sPrompt-baa4194f.mjs';
import { _ as __nuxt_component_5 } from './trainModal-a824befd.mjs';
import { _ as __nuxt_component_1$2 } from './previewImg-8e12aab7.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './icon14-9b74ca74.mjs';
import { _ as _imports_0 } from './icon12-7adf6b47.mjs';
import { _ as _imports_0$1 } from './clock-f02ce9ea.mjs';
import { g as glistenImg } from './glisten-f900c8fb.mjs';
import { a as _imports_8 } from './cEdit-edfd661e.mjs';
import { _ as _imports_9, a as _imports_10, b as _imports_11 } from './copy-d1ce3f41.mjs';
import { useRouter } from 'vue-router';
import { l as lodingData } from './loding-9ec1fb58.mjs';
import { c as contentCom } from './content-977f7524.mjs';
import { r as recordCom } from './recordNew-2087e423.mjs';
import { i as inputCom } from './templateNew-d7bee022.mjs';
import templateCenter from './templateCenter-0bfc5d5e.mjs';
import highLevelWriting from './highLevelWriting-80d529fb.mjs';
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
import './close-5dffb58a.mjs';
import './addBase-d16bc2bd.mjs';
import './robot-20021510.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import '@aws-sdk/client-s3';
import './cCreate-9b81dba0.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './edit1-d50fac04.mjs';
import './switch-59f92d8c.mjs';
import './avatar-8802d9a1.mjs';
import './barrage-e0763a91.mjs';
import './close3-d080d282.mjs';
import './index-e1fc7e3e.mjs';
import './upload-94260edb.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "cMarkmap",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  emits: ["getImg"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const markMap = ref("");
    const transformer = new Transformer();
    const { root, features } = transformer.transform(markMap.value);
    let mm;
    let mm2;
    const update = () => {
      const { root: root2, features: features2 } = transformer.transform(markMap.value);
      mm.setData(root2);
      mm.fit();
      mm2.setData(root2);
      mm2.fit();
    };
    transformer.getUsedAssets(features);
    onUnmounted(() => {
      mm.destroy();
      mm2.destroy();
    });
    const updateView = (e) => {
      markMap.value = JSON.parse(JSON.stringify(e));
      update();
    };
    const previewImg = () => {
    };
    watch(() => props.content, (newVal, oldVal) => {
      markMap.value = props.content;
      setTimeout(() => {
        update();
      }, 500);
    }, { immediate: true });
    __expose({
      update,
      updateView,
      previewImg
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="cMarkmap" id="cMarkmap" data-v-2afa776a><svg id="markmap" width="100%" height="100%" class="w-screen h-screen leading-none markmap mm-dwm9rn-1" data-v-2afa776a></svg></div><div class="maxBrain" data-v-2afa776a><div class="markmap-content" id="searchCanvas" data-v-2afa776a><svg id="markmap2" width="1000px" height="1000px" class="w-screen h-screen leading-none markmap mm-dwm9rn-1" data-v-2afa776a></svg></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cMarkmap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2afa776a"]]);
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC9JREFUWEftmF1oXEUUgOfMXUMeKlhQUPAhQhPsm2CLCehDQKnFFhEFKxpwIdwzmyhaEESoWLBCX0TFbnbmJrCIBX1QCJhgQSFCEQP2wQfBkhXcB8GAgoX2YdnsznHPcm+4vW525u5toIgX8pC9Z8757pkz52dA3OYP3OZ84r8LuLGxUWo2mwd8dmBiYuLG7Oxsx0c2K5Pbg/V6/a6dnZ0PiOiUEGLc02gLAFaJ6FVE/MtzTV8sFyB7rdFoXCai6TxGElkA2JycnHwsjzdzAWqtnwSAr0eBS0GeDMNwzVdHXsDzAPBmrHwbAOa63a4ztqSUnwoh7o/XvYeIZ/YF0BjzhRDiWVZORGtKqZM+hrTWqwDwdCy7iojP+KwbGIO1Wm1CCMF//3oynvjSWnvBxxAAKAB4PpZtWmvLg9ZZa39fXFz8Nf3upi3WWr8EAHUhRMnH8H7IAMALYRh+vhuzaSNa64sA8OJ+GM6h8yIizg0EjKLocSL6Kkd+y2HXS7RlrT1eqVS+GwjIP1ar1QNSyrtjgRNSyo8TYWvtA15mHEJSykYqjE5ba1d5yfj4+Ha5XG7tGYNZvdm8NzY2drBcLl8rAmmM4Y//M9FBRMeVUpf20jk0Dy4tLU0HQfBDsrjT6UxmT1leWM4SUsrfUoBHlVJXRgJcWVk51O12eTv6DxENVeYDm/1oDptKpdIcCZAbg3a7/bfvdvgADiiX9wxrIJylzhizkwR0Nkf5AA2Ia861XPr46SDiHcP0+AByQCenmtslr+qxl1FjzCtCiCQzbCPifUUBfxFCPBjH4NtKqXOjeC5ZY4w52wvnd+L/ryLi4UKAvZjZ7LVYj8SAHymlXi8IyDuwGOv7Xin1aFHANQB4KlZyUxkaBTRTTtcR8URRwHR9dip0QWutLwHAsVjuE0R8uSjghwDwGivhlj0MwxkXxLD36ZARQryPiG8UBTwDAO8OCup6vc5Dk2twaqXraxRFDSI65HvofNLMbloAgGthGB5k5Tl6Ry7+nJ5WeJ0xZjdtEVFFKaULeTCKolNE9FmiBBH7H2WM4fr5sOd2X0HEozwVbm1tceLvPz6J3+nBuEf8JgXSL021Wu2slDLJZy7O84j4VrVavbdUKv2RAnwiDMNvC3lQa32kl2Z+TCk5jIhX420+QkRDbxeCIOCw+InlR2k+nB7MtkfdbndmYWFh0+WyQe/zdjL9MHAZ4pPabrevpzrgXHNtWr/WOj1Xt6ampu503TI4AeMDwTcBSTXhQf0CAKz7DO28PggCnhKPERGXyWRi9JqPvQCXl5enrbWXb+E4ypdJM0lsFjokyWKt9XNxH+dKzK6oaRHRnFKKbymcj5cHEy1RFD1ERHyvwrXU624wRXCjNzKsl0qlc/Pz8z87yZJc6SuYleNxIM/aUafBXB7MA3SrZP8HLOrJfwBpPrw4JH/DzQAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAURJREFUaEPtmD0KwkAQhd8Gj6CnSmGhRQ4g+TlRsp2lhRaeS48gjEQURIirzM8SmLSbDO97b7LZTMDMrzBz/XCA3Al6Ap4A0wFvIaaB7Mc9gRhjCWA/WklEu7Ztz2xb/yjATiDGeAGwfALciqKo6ro+/aGBdasoQA4INsAwDGsAxxDC4mUlEZklwQYYRfd9vwkhHHJAiADkhBADyAUhCpADQhzAGkIFwBJCDcAKQhXAAkId4BsEgC337GQCMAUB4No0zYpzGHKAX9ybOmrMooWmxBNR1XUd+9it2kLa4sf01QAsxKsBWIlXAbAULw5gLV4UIId4MYBc4kUApn7qpfb51IeSvY2+z4VeYxUr8SIJfA62LMVLAZRE9BgtApjfaDHVo9rr7HdAW2CqvgOkHNJe9wS0HU7V9wRSDmmvewLaDqfq3wFwIxNAShbbcgAAAABJRU5ErkJggg==";
const _imports_6 = "" + buildAssetsURL("xuxie.f5494812.png");
const _imports_7 = "" + buildAssetsURL("bg.e13d298c.png");
const templateImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXlJREFUWEftmLFKxEAQhr9spaBg4SNYWCq5VJaWJ6hPoA9hIygWWlj4EPoGJ5hOS6vcoKWFj2AheOBVuxrYyHEmkU02cOqmDJmZb//Z2c1MxIw/0YzzEQDbZigo2KmCcRyvAhfAJjDXNtiU/Qi4BQ5F5KnKd2WKLVz2CbjgGWzaXQ6aVEHWAQ6A7Y7hCvepiGyVxaoDfJtQ71gpdeMTVmudA53mPqMoGg+Hw3lXQFMYKKXWsyx79AmYJMma1vqh8CkipWLVKRgA/4+CwDXw6nMPAstA38se9AxW6q5VkfwGwBR4mQLdAFbsu2fg3nEhS5MXQSsFy87BOI4vgT0LdSUi+y6AnZ+DAdCmo/FNEhQMCv5Q0qGKQ5GEIum6SHq93rsxpuiFvzVNWusTYMdypEqpI5e72BjTN8acWZuRiCy6Nk15F/f1Q+kSvMG3AxHZdQXMpwqz27jnq7HThXM7+vA9YRgDd8BBo9FHgzR1YhLGb21lDQr+eQU/ACmSVThtJ4e8AAAAAElFTkSuQmCC";
const writingImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAuJJREFUWEftmEFrE0EUx9+bJNBDhH4MDz3ovt2D4CFFhUqRUrBg8QsoKB70JtIKFTx4EPQbKCgotIeCXoSAHhKykxW85NBDDj0UPCZgDsk+O2VGJtvN7ibZhiLZ22be2/nN/817My8I5/zBc84Hc8BpIzRXMKqg53nXwzB8AwCLAHBfSrmXpPJMFXQcZ0UIscvMCxqqj4ibvu9/HgU5M8AYOMOUCJkISEQXAeAVAFwDALPq2MUiYo+ZX0gpd6IGMXA9AOgff7ucpuRIQA3XsD6SJSH7UsqSbei67m0AeGeFVS1kHRG7APDFhgSAZSnlD9s/CVBt3rUsVJbNnpRy3bwrOGb+AABF/dsJXLPZ/KreHcfZRsQtY4+ID33ff5sVsGOt7pkQYj8Jlpn75XK5Va1WVeggDS5uXAhxpdFo/MwKyMZQCHE56pgES0SP9N41ynWZecMoR0T3AECVmlhlzxRQw722JlF77abZW2nj0YUn7cGxFSSix1o5M89UcOojuQE6jrOFiNuWAkdhGN4KgsDXCXFqHAA2oll7JgrGwemS0UqAUyXlZDzpmVpB13Xv6FJi5jnKCy6XEBORKj+rmq7NzDeazebBCOXaOmFSlftXG0fJS0SpSVKpVBY6nc5vUy/DMNwMguDjKLhSqbRcq9UUZOZnqhAT0dXjc/q7ma1QKHjMvDgYDNYQ8YFF0bbhiGgXEVdGnd251UHHcXYQ8WmKHENwrusuMfMv7XPq7M41i4noPQDcTQAcglN2nuddCsMwMD5SysQb1VQh1ufppwhgDxFbzOwXi8Xn9Xr90B6fKaBRZDAYLAkhDguFwkEUKKruzAEzp6M2nAOOq9g8xEqBcS+sSSrntgdd1/1jNTqpV/6soWfmVWY2nV9XSnlh0tuMfQnIOv+4dkNNVpxz3m3nOIDqtu2l3QmzNO4vdeNumuxxIOJsVdP+DQCepMEp55n99THpquaAkypn/OYK/vcK/gUiueA4BsuugwAAAABJRU5ErkJggg==";
const inspirationImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABRJJREFUWEflmFFoHFUUhs+5u8FAdkMFCxEaSKFCGwyud2ZJRIsrKlisD0WLFQQtJKigqLRi++CDoChYsaIPKRYUVIxgUVDQhzysWGjC3jsuNKR9KBhpwDwULMmSFJKZY85yb5iMO7szsz4EPE87u3PP/eacM/85dxF2uOEO54P/B2C5XB4gov1EtIszgog3iWhOa32j2wxljqCUch8ijgPAkwCwLwbkGgBcEEKcrdVqS1lgUwOWSqVduVzuPQBguHySTRHxFgBMFgqF09VqlT8ntlSAruveTUTfx0SMN+aUbmzCDABAbwuKBSHEkVqtVk9KmBjQcZwHAOBnACiEnN8EgHNCiKm+vr65arXKcFCpVPKrq6sl3/efAoDnDLBd1gCAQ1rri0kgEwGWSqWhXC73OwA0XwI2IjoXBMGper3OkLE2PDxc6O3tPYOIL4QfjIjKnudxjba1joCVSqW30WhcIqKS8bRBRBOe533RyXn493K5/GwQBJ+H6namWCwetFGP89URUEr5GiJ+FHLwhtb6TBo4e6/rui8T0Sf2GhFfUUp92s5XW0CO3srKyh+hGvpBa30kC5xd4zjOjwBw2FwvFYvFwXZRbAvouu4xIvrGpnZT00a01le7ATT6ecWmGhGfUUpNZUqxlHIKEZ/mxYj4i1LqUDdwoSj+BACPm5ftW8/zjmUCdF33OhHtMYsntNbnQ5uw7LBg/1ksFsejAmzKg+uNO87bSqlqaC2L/GfmwReVUoOpAU3H+DtU0CNKqTl7LaWsIuKDZpOjSqnvwptEyuOi1vqg/b1cLpeCIGDZatra2lpxfn6e9fFfFluDY2NjQ+vr6/yCWNsdbv5Syjoi3mPSdBwAWHhPIuJtQoiPfd8vISLLCpdHXSl1r3UUfXgiuitOE2MBTVu7bJ36vn97WJTDgADAkd0f6c0sws0hohMgAByIe/liAXmECoLgLwuYz+cHZ2dnF0Mp3opgXP2EymNbBEdHR/dsbGxcj/Md9hcLyP200WisEFGz6QshHq3VatMdADlq3Kt5WNiyaASllI8hIvd1tobWuhj3kG110HEcrqv7zeIPtdYnrSPHcbakAgCuEdG7/f39X3Gal5eXX0TENy0oEV3wPI8Hh6Y5jsOd6IS53PYCRUE7AZ4yUsJ1tFgoFPZa1ec0+b4/HgTBAoNFu4Hp4fz7QE9Pz6Qtjxbd6S2t9TuZIthC9Tv2zk71GO3tvu/vrdfrC5kATTp4auGZjo3PGonGpFYb8tiWz+ev2LoGgI69Pck0w52A5cZOyFeFEA+lPWMYVfgtNI3f6unpOTAzMxMbPX7IjoB8U3RMAoBUo7vjOKyRPMWED1cvaa0nO5VEIkCT6rMA8Kp1aA9Cvu9/nc/nm6N+K+OxXwhxIpRWvm2bIrSDTAxoIN/fbJ0sH91YYrjEKQ7TSCmfR8QPAOCOlJT8gr2e9qiQKoIWiAve9/0vEfGRJJBENB0EwdFOB6xWvjIBmnRzV+FI8gnvV8/zKpFITyPiw+a701prLo/UlhnQpLo5TvE0o7UeCe/uOA6P9fz28gMcT5ta66sbwMOIyNLBdkNrvTsCyJNQc2ggoic8z+Pendq6ARxDxEtmR5aZrVHMfDdkaYjoPs/zZlLTJRXqVo5D8yLDtf0TSQhxZ9rO03WK2YGUcjLyl0arZzmvtZ7IEj1ekznFdkMpJad624AaSu1S1tT+JxHMGpU067qOYJrNsty74wH/AS8KKUeSasHZAAAAAElFTkSuQmCC";
const continueImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABgFJREFUWEftWF1oHFUUPufOFhp2J0SwEKFCCy3U0uLu3lkawYctKLRQUVGxQsUGCyq02KJFoYItFrSoWFFBUbHBFlIstNCIfQi4QqEpO3eyYEDBgAH3IWDB0IlQyM4cc5Y7y+RmJjubgPShB/Zhd+4995vz853vLsJdbniX44N7ANeaoTVFsFqt5m7fvu0AwDZEHETE9UR0h4ialmVN5fP5qVqt1loLyFUBdBynCgAvE9E+ABhYAcAcAFwhoq88z5tYDdCeAJbL5SFEfB8AGGBPRkTjlmUdr9frjV42ZgKoU3kCEd8BgFzCAdNENIOI/xJRHhG3AMAmcx0icvpPKqXOZAXZFWC1Wl3v+/4PAMDpjBun7FtOoVLqlnlgpVIZDMPwKQB4ZXFNMf588QXOFwqF4Sz12RWglPJqHBwiNoMgOD45OTmaNQqlUmm/EOITABiM7TmnlBru5mNFgFJKTul7MSfXhRDP1ev12W6OzedDQ0ObWq3WZSLqRJOIjnmed3YlX6kAK5VKkYhuENF67eC6bduP12q1O72Ci9ZXq9WC7/s3AGAH/6ZrsqSU+j3NZypAKeXPsW6dzeVylZs3bzaTHJXL5S1CiGIYhgXLspr5fH6iVqvNJ63lSC4sLExG9ISI11zX3dsTQE0n/KZtC8PwhaSaq1Qqe8IwfBcAhowm4Ch/iYhnkspBSnkIAL6O9iDiTtd1p5JAJkZQSnkOAF7SGxpKqZK52XGcE0R0uku6Z4Ig2N1oNGbi65i2fN//DQCYjtg+VUod7QXgP7EUHHFd9/P45nK5fBARvzMccuPw5GD+i+qWlzDIUqPR4Gcdk1K+CQAf6lpsuq77YCaAjuPsIKJfo8VBEGyOR2D79u2Fvr6+PyLKYNpBxOF6vT7Oe4rF4oBlWScB4PVYCk+5rsu/xQFuAwCOYtvMczp7E1L3LBExMbPNKqUeWCF6XGuJXSilZPqIQM7Ztr3BJGYppQ8ABfZPRHs9z7tm4llWg47jHCaiz/TCCaXUI8abd+qTiC56nrc/KTW7du3a2Gq1/oqeCSFK5hyWUnKm2pRDRC96nnc+C8CjRMSsz5t+8TxviTCQUl4BgCd17SxLnfEyHapCxN2u69aMbDQQ8WF91rDnefzyS6znCDqOM0pEz2uAX7iuezjuUdfoq4g4UygUxubm5gaFEIeEEKMmlUgpuQa5FjkY2QBKKXnAX9aHziml7jOi0uk+7lpd3J0OdRznJBExN7K19aAQ4kLURIavPyPVkxThdhDMkPJUQETu0rYR0VbP86aj78VicZNlWfy8Lbt4Eugubs/nFAridc1FXxcWZ/GVSLzqemeqmbFtu5Q0RtOImot7owZ1XCn1kfHm/P2N6Dc9U8cQ8WKr1WJh+neKboy28OwdCYJgdGBgYHal+Z4GME4R07ZtPxSnCC1gryLiHiMD00qpreVy+RIiPqOf8Z2EP3Hyjm+bQESO7GiSrkwDuIREEfGY67pLZBEL2fn5+beJ6K344VxLLBoQkXVkuw7XrVtXWlhYeEyPz0fNstKlcicMw489z2OJ17FUNWNEgZVJJUkWSSnv58uTEMJhaSaEuJTP58d93+c0ty9UcY7TNf69KTA0oltKqQ1ZAXKzMJFGqUkc/EnR0M3CaoblPtuPSql9usF+iqjFLA8tYMcyAeRFpizibkPEJ9KkUdyxIdlaQRBszeVySxS1Xl8jojP9/f3jSXeULHeSDwCA66xtumNP2bZ9tpu6llIyHUWSiqdIfCqNCCHOdruGdgXIoBzHOU1EJ4yUMO+NLD4es22bFfSyfxAM0o5vH1FKHUwrj8wpNlJ2ABFZBSfRBYPj6wA3EzcG33+PAMB0nPQjf0nCIQ1spghGm/Vdl0maOS6N16LlU0qpnY7j1ImI/7+JbJlCWimSPQGMHHE3sgBARFY1bblkGo+1xRF5wJBvvOxppRQroky2KoBxz8yD0b9bTNBCiPkwDJv9/f0u16VW2NHom7Vte3O35lpVDWZ63ZRFUkouC1bXrymlvunF15oj2Mthq1l7D+Bqova/1+BaQP4H/D7HR6X0dNUAAAAASUVORK5CYII=";
const polishImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABS9JREFUWEftWGGIVFUU/s6dEXZx3uKPIgMFFwpCgnbffcOuIDSigoFQC0IIRQoJRUpFSvVDShASKjI0IhIS2uiHhkb+MBIaSGhk3r2MFCq0PxYKEhJadjZWcOadPMOd5fWYN/NmdgN/eGDZ4b17z/3ud84957uPcI8b3eP4cB/gciPUN4NjY2Nr8vn8a8w85Hne0XK5vLBcEN3m9w1Qa30ewNPO6axSaqpardb+L5CDAPwTwNo2ICK6zcwHjDGnsoIMgqAE4CUAl8MwPLmiDPq+HxKRTjoloulCobCvXC7f7rRgqVTKz8/PP0dErwIYi23wSBiG76aBHITBeIhvxtkEcAPAlDFG/rcslrMvANjQAcgpY8y+lQR4HICwgCiKdudyuc3M/Eo85FEUyYIVAAeJ6FkAa9IAMPNT1tqLKwnwIID3ncNDxpgPtNbPAPgiAaQBIJ9YuEJEXzHzR+7dLc/z1qelhcztO8RBEOxi5jMymZk/sdbul9+Tk5Mb7ty58yWAzQlQDWb+Vil1MgzDsu/7e4hINgMikmcHVvqQTBLRz87p98aYHe0FSqXSUL1ePwrgDQBzzDwN4GNr7Ux7TBAEl5h5q9vgJmutpEKq9c2g1voBAH85jzPGmEeT3sfHxwNmnqnVanPxdxMTE+sajcbv7tmsMWa0G7iBQiyTgiBYlE4iNTAMw+Fei7Tfa63fAvCeY++ItTa1vCwduqzO2+Pu1sGdSqkzAlCe5fP59VeuXPkjix+t9S8AHpexzWZztFarzfaalznEUs9yuZycvj0xp3PNZnM8y0ISdqVU1c2tGGM29QKXOcTCGhF9CmBdzOmFfD7/clb2giDYz8wn3PwbzWZzUzJHOwHuymAKawvSe621p7MwEDvh+Xq9fg7ATvfssud527vVwK4MFovFbVEUSb2Ks1Zh5ufjZaNPkEPz8/PniKhVmojoYqFQmOq7UCfCIb5EABz2PO94uVyWDjGwuVr5Q6ygX/A8T0B29NsxxL7v14joiRgKEaXhXSFwlZlruVyutnr16l8HBetq6U8AHnNrnDbG7M2cg1rrYwDe7EGT7FhUi1FKTVer1Uv90Opa448xhXPMGPN20kfqIfF9fwcRbXN1S/SfdJCORkRhGIbF5Eut9YtEJEqnEUXRPy7v6lIGndB9CICI15Yx8+vWWlFLS5a5DsqOG41GEEXRGBGJ4JyIgRY2HzbG3Gp7LhaLa6Mout5NaiU3xMxXrbVLYrbrKc4Srvj9hJn3xkuP1npJN2bx5Rj8xlq7ayAGOy0iIQTwedJ5EATSzqrtdgjgEIAZIhqKoqjVIgEUpFMSkfwVoiiaHRkZmU4evMwhdiH7WrRCu1An1Mmc53kPygKJm995Y8xUVhYzH5L4wI0bNxaGh4eldk26RF86FFrr3wA8Is+VUtuZWQSqnE6xhlKquJxraU8GpbAuLCycY+YlYXo3NEeNMYcFQSLXPiSirczcSnRm/sxaK9fLga0rwBRwZz3P293OFSckvnPMyh25nWO3lVKj1WpVbn4DWypAucfW63W5e8iFqGXMfHFkZOQ/vdOF/+8OF6TDxhiR/8uyboX6BBG1LkRp4NrvfN8vE9GTMSQ3Pc8b7aVUsiBP68XvEFFcjlcWFxe3X7t2reOHog7iYl8/n0K6Ae0IUGst7UjqlNgNpdSWbrnkPmvsV0pJ878UhuHZLOxkGZMGUISl5N7sqlWrtlQqlZ53hyyLDTImNQelGxQKhZmVyKNBgLXn9KyDy3G+EnPvA1wui/8CffpFR+4rycYAAAAASUVORK5CYII=";
const abstractImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAk9JREFUWEftmLGLE0EUxr+3SWHILlgonKBgcYWd3k6WpLAIiFicona2whU2dhYKioUWJ9h5f4KFheCBJ1hE2FLYfRvLgJaCzXUeJLDLjJmwgXPJbjZmN4Rzp55589vvzXz75hHWfNCa86ECXDZDlYKlKiiEuATgNYBrAE4tu1li/RGAHoAnzDxIi52a4hjOGwOaBYMlw2lQJw0yC3AfwO2S4abhPzHzzVl7ZQH+PqbeM8MwDoqElVJqoBc6JhGNfN9vLAqopgsMw9jyPO9bkYCO41yRUvanMZl5plhZClaA/5+Ctm13iGjHMIx3nuf1bNveJKKnAE7nPJ8/xn66y8yHpZxBIcQvABv61kVRdK5Wq30cm+3VnHCTaUS05/v+w7IAvwPYBDAaDodnG43GewA3FgEE8IqZH5cC2Ol0LoZheE8p5QZB8NVxnA0p5Q6AMzkhf1qWtee67qgUwJwQuaZVgLlkypi0MgW73a4uw5KlWOS6rq5SUkcpgLZtP4997y0z3xdCPADwBkA9SUJEn03TvOW6bjSLshTAVqs1VEpN1KrX6xfCMDwgostpMkkpnX6/768MUAjxAcAdpVQvCILrQgj9F5mUTDPGwLKsLW0pKwPUG2nvazabh9PUtdvt81LKv3xQKRWZpjlIS28cpyq3lnKaUi7JUkSJxScf8LilACj80aSU2lZKvYyFPWJma1aGst4k+hW3XWRaM2LtM/PdRQF1V2F9H+76a+Luwm7c+ii6w6AN/AuAR//U+lhRauduU7Xf5ko0Z0Kl4IlX8A+s2J84EHkeKQAAAABJRU5ErkJggg==";
const translateImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA39JREFUWEftmE1oE1EQgOdlt5CUplREaMFCvUlPcX+gB4U9KPYgqOBFFKyooOihRTwIgt5EUCyo2ENBwR68iAqKFQvm4CGBfc8cpHqoWGgPhXoo1FCh2R2d8DakMT8v2TSN0Lkkuzsz75t57+2bWQZtLqzN+WAbMOwMKWcwkUgM6Lo+QgP6vj8thEiFHVzFXhnQsiwHET+SU8bYmOu64yoDhNX5PwENwxhhjN0siT4KAL3y3k8A+FXyfIZzfoHumaa5FwDe1cheDgBmPM+7k8lk5ivpls2gZVmjiHi/zul5zTk/Rja2bSd83/+saL+EiAeEEHPl9FUA3wPAbwDY+Tfi/dLJFwD4Lv8flb+NApL5W875kYYAOzo69qRSqflKm8Q0TSwFTCQSPZqmOTUySMFelTq5eDweSyaTNO0bpGYGGwFUmdqhoaGB9fX1H4Gu53k7MpnMSt2AjLFFRKTIKm2SgdIMthRQZbCtBqx7k6gEFWqKDcMYikQiwzRQLpcbp7VRaZMYhjEqgeaEEG9U4EgnFGC5QZp91G0Dhi0Wmp5B27Z7Pc/Lr0vGWIpz/k11vZXTazpgGJhNA6SqBgDyRSoAfBJC3GgW6ODgYFc0Gj0R+Ovu7p5SPuoCI8uybiFiUHYVioFGIR3HiWazWSrF8pLNZudmZ2dLy7baZ/FmAco680kRwTXO+d1qAVetqJudQdM0pwHgcADEGHNd17XbApDWXGdn5zIiUtFREF3X+9Pp9GIlyJZl0DCM04yxZxKEyqoe+o+IY0KIig1YywBN05wCgFMS8DoA3Jbv1BnXdQ9taQZp966uri4DQBcArKytrfXHYrEFmUWqNfs459SI/SMtyaBhGMOMsaDLS0cikYu+7z8IehxEPCuEeNoI4BVEJEck9L56xBijBqqqIOIS53wiUDJNkwY/U8WovqYpcESfOzRN+yrL/VpcheeMsYzruvvohuM4upze/KaoIDnP83Yp9yTFTuTL9XE9kMWAtm0f9H3/g/RJ/c29wD9jjLq63XKznHRd93lpAEqfPqgRR8TziJh3piDznPN8pW1Z1kNEvCxtJjjnl4qmfhIAztE1Ir4QQhTO5kIQCoOFUrEsa6EosOOc81dFgPQl4qW8XonH433JZHLDGlfKYKOE1MDruh70LIX+pmiNb3iuadpk6amyqYCNBlZstw0YNottn8E/PQRER7wRmkMAAAAASUVORK5CYII=";
const replaceImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqJJREFUWEftmD+IE0EUxr+XbHEQizvQQlBQULhyLy8BC4U0h4WFlnbe4YG2wtlZCCoIWthZWKidVgo2FicELCRk35gqCB5oIVyhxRVecoXJk1l2ZVmyyR6bjTmS7fbf7G+++d43M0uY8oOmnA9zwKwjNFcwNwWZWeONFwqFlWaz2QrviYg/Agc5r1arbr/f/xxvO2wrfj1xiA874AvbUxFZCxRMfT4RBbP4anYAbU/jSpVKpS/1en0/i4K1Wm1hb29vOd6GLb5B7R7eHIxU8cuwGAb1kJnfEdEJe09VX4vIw/hzlUrlPoBL9nqn07nQbrd/R4rrWlBwA8VKEzOJgOVy+QwRfY0AfReR03FAZrZV7oP0er2lVqu1mxkwjc+Y+Q6Ae0TUUlXfs2GYR99PAkzzjUweZOZPAM4BuA3gOoBlVX1gjLHg/45cAEd50HXdU8Vi8Zul6Pf7VSLaIKIbAFoispIGMAqeZaob6EFm3gTwCMCuiCwx8xUAb4JiOWuM2Q4h/4sHmfkjgPO2co0xV13XXSwWiz8BOHbIReTxKMDcPMjMRwHsWBhVXTfG+HNx6Eki8jzPq+YKOMyDzLwB4FkAsE1Efq6pqs1DCw/HcU42Go0f8TgZW8yMAHwP4OKwIVLVW8aYJ7kBJn3ces1xnB1VXSCiV9aDsWefA1gkoi3P81aHAebiwXK5vEZEFsKG8mqz2dyKRcpbAJcB/AFwXER+TTQHmTkE2O92u8fCeTVSEDcBPA086RdQLjGT5EEbL0R0RFVtIK/Hh8kGuOM4YR5+EJHNSqVyN1B1fIuFNP6YxDOJc/HUL1iH7eqyKDc7e5IR++LU28xIDvrb1IkoeJA/CQGg/5fCLqlmBzBLIYzz3UxL/nGCJLU1B8yq8lzBrAr+BZnqQkegqZpxAAAAAElFTkSuQmCC";
const illustrationImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA1FJREFUWEftmDFoE1EYx7/vrkMLTengkKFCBQcpBdO7C81mFsGhhRbq4FBooYKDQos6OEgRF4eKgoKDFC0KCgoVdOhQMIKD5e49Mgh2KDiYoUOH0hQqNfc++5WcpNckl+buJEPeEsK9977f/d/7f997h9DiDVucD9qAYVeorWBsCqbT6ZRS6joRnQ0bpN54RNzQNO2pbdv5av2qLrFpmmMA8A4AOuKE8+ZGxN8AMOk4znt/vGOA6XQ6SUQ/iajzf8BVxNh2XfdMPp/frox7DNAwjClEfFHuxG92j4j4N47Wi4g3AaCbJyeiaSnly7qAlmXNEtGj8oAvUspsHGTenIZh5BDxAv9HxDnHcR5HApjNZjv29vaSa2trhTAvEAugZVlZInoDAElEzOu6PtosaCyApmn+AIBzFcotCiFmmlEyLsA/lSkIER3HcdInAeQtUiwWZw+8Me+ZJLI9aJrmZwCoNM+CEOJ2o4BDQ0OWpmlPACBzxBBRmSSTyfTv7+8vIOJ5AFhNJBJzuVwuMBUNDAx0d3V1sWKs3LEiEJmCjSpV2c8wjBFEfAYAfb7xJQ82NKBhGJcA4JSu66u2bW82Ajo8PNxXKpU4r074lrOglLoDADOh82B5aTitjJQTagERR2sVeO7DJtjZ2bmGiPcBoLcCjhVbcl33Fpe10C5WSk3puv4RAAZ9iu1qmjZu2/aqX0nLsgaJ6LnfBACwXi5n3yKpJIhYICLezMlqy8mnEKXUuJRypaxaZ7FYZMX8Jjis6YlEYiGXy7GC/1ooBatALQHAVwDgze65sKRp2rTrutuIyKmj37fXVpRSN6SUG9VeMipAfuu7QogHHITNcpBilgGg3pFsi4jmpJSv65kpCsBdIroipfzkWxqG5EPt4VHJ1xY9EwQ5PSzgJiJedBzne7VAXBF0XV8mIi+3rQPAVSEEb4OGWihAIgo8D/IJXCk1RkS7PT09b/0mCKKMHTAIIOh5GzBIoaDnJ1bQd2liBz88SLxHblpBQRt9joidiDjv3SCJaNKflo7d6lKpVK+u679qpI9GYzfTj6vNaSHE1pFEX20my7ImiOhVQCJuBqLWGC4El4UQH/wdan48aulPH1FKE3au9ue3toJhFQg7vuX34F9PfjVHKc7ZQAAAAABJRU5ErkJggg==";
const forYouImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqRJREFUWEftmLFrE3EUx9+7XIJDEjJ06ODQwUG3eL87Erf7AwQtKA4uHVwERcVBQYuKhSIItoPQQXBQoaNuihVua8P9fpcbBDsIOnRwcOjgEMLlnvzKJVzLXZrk7pqKlynD773fh+/v5b33DcIx/+Ax54McMOkL/dsKapp2CgDOI+JcUiVi4ndUVV1vtVo7cfljFdR1/RIAvCGiExnB7aVFxA4R3RRCvIq6JxLQMIw6EW1mDRcC8hRFMWzbdg9CRgIyxp4DwN3g8CIRrZdKJS9tJbvd7jVEfBDkXRVC3B4V8D0AXJCHK5VK0bKs1OH6IIwxCr5/EEJcHBtQCJHpLz0HTFqXR6agaZply7L+hIFN01QPq98jAWSMLQPAQq/XO+e67k8JyRiTBf/C9/3L7XabxymdOSBj7D4ALCPiE875Ywmi67pJRJ+JaKNarc5bltWZCqBhGLNE9IOItoUQZ0Ot4xsAzCqKcsa27V/D6jRTBTVNW0DE1wCwhYifZEMnohoibiKi6/v+qqIonHP+dSoKapq2FJoEkmE+AJTQ/Vl7h3O+MhVAxpi8+Fbo8hxwTwzG2GAWDxt1mqY1AeB0X8Fisbjh+/4MEQ1mqu/7Hx3H2ZrKEyedIoEY+bKQSMhM+2AisiD4/wWUY65QKCQyVJ7nXSWiJSkmIr7knN9ItFE3Go2Tnuc9AgDZRmbSeOIgx9imaV8frNfrNVVVpaG5l4HTk37n+li2M9yopWdFxKcAUAspJne+LwCwb0GdQNHfcsFwHOd7XGyc7RwoeCBwFxEXy+Xy2mGb8gSwkSGjAnYQ8ZnneSuu6+6mdfkoeSIBdV2Xe90VAJD18U5V1YfD/j8Z5aJJz0QCNpvNucD1vxVCbE+aPI24TE15DpiGAklz5E+cVMG/sbahOH66S0kAAAAASUVORK5CYII=";
const expandImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAa9JREFUWEftl69LBEEUxz93ySCsQTiWK9qsgsE/wahgUERQ0GYUzmhUzCaDikFBQaPRqMlqtBxrMFxYuIMLek9nYZGbH7uzwoaZcgfvzZvP+755szMNaj4aNecjAPpWKCgYFGy321u+Kpjmd7vdC5PdugfjOP76T8AkSYwMlQEOh0PSNP3JpdlsEkWRU15VAL66rNTv96d6vd6MAhy0Wq03l3lJksx7ldhlEeWzDNyr/+/AbIG5WldriQssEgALiDXWNSgYFCyjQOjiMqrl5wQFg4IFFAgHdQGx6vmpW1RYz5pMxH6gbJ/AjsZvAZgEnlwUcT1m9oATYB14cAls8JG9ej2yHwLHtlg2QMn0DFhTgVYqAswuto/ANvChAzUBzqkbsvxmQwINbFlb7JL0dM5Hbt8CObbkOsAl4FbtFU8ep+mS9CZw99dbByhZngOrTuH9nU6B/XHVse3BrDkmFMMR8OLJI93eUTHknboL3JTZg9kcORak3PKkrLJJ5Fkq8YzPU5uCGaSU/Gr0lLysqIs3VGP8vvQNwxUwD2oN6tDFzjGKAtoSrtweAH0lrb2C30vwZCkQmr1bAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const isPreviewLoading = ref(false);
    const previewImgRef = ref();
    const cMarkmapState = ref(true);
    const cMarkmapRef = ref();
    const exportLoading = ref(false);
    const modal = ref(false);
    const modal2 = ref(false);
    const modal3 = ref(false);
    const chatList = ref([]);
    const btnLoading = ref(false);
    const trainModalRef = ref();
    const pageLoading = ref(false);
    const divRef = ref();
    let aiEditor = null;
    const assistedContent = ref("");
    const selectedText = ref("");
    const hisParams = ref({
      type: "CHAT",
      robotCode: "",
      robotType: "",
      pageSize: 20,
      pageNo: 1
    });
    const highLevelWritingRef = ref();
    const selectItem = ref({});
    const newsParams = ref({
      type: 1,
      newsType: 1
    });
    const continueContent = ref("");
    const drawParams = ref({
      content: "",
      negativePrompt: "",
      sampler: "1747197260320448513",
      steps: 50,
      scale: 10,
      seed: -1,
      size: "1024*768",
      num: 1
    });
    const languageStr = ref("\u82F1\u8BED");
    const modifcationType = ref(1);
    const toneList = ref([
      { name: "\u6B63\u5F0F" },
      { name: "\u975E\u6B63\u5F0F" },
      { name: "\u5E7D\u9ED8" },
      { name: "\u8BBD\u523A" },
      { name: "\u4E25\u8083" },
      { name: "\u70ED\u60C5" },
      { name: "\u51B7\u9759" },
      { name: "\u53CB\u597D" },
      { name: "\u547D\u4EE4" },
      { name: "\u54C0\u60BC" },
      { name: "\u9F13\u52B1" },
      { name: "\u597D\u5947" },
      { name: "\u6000\u7591" },
      { name: "\u6743\u5A01" },
      { name: "\u4EB2\u5207" }
    ]);
    const languageList = ref([]);
    const tongStr = ref();
    const divLoading = ref(false);
    const drawImgList = ref([]);
    const selectNewsIndex = ref(0);
    const newsList = ref([]);
    const newsPageType = ref(1);
    const selectType = ref("");
    const modalType = ref("");
    const contentComContent = ref("");
    const popVisible = ref(false);
    const actionList = ref([]);
    ref([
      { name: "\u6A21\u7248\u4E2D\u5FC3", logo: templateImg, type: "TEMPLATE_WRITTING", state: true, isShow: false },
      { name: "\u9AD8\u7EA7\u5199\u4F5C", logo: writingImg, type: "HIGH_LEVEL_WRITTING", state: true, isShow: false },
      { name: "AI\u7075\u611F", logo: inspirationImg, type: "AI_INSPIRATION", state: true, isShow: false },
      { name: "\u4E00\u952E\u7EED\u5199", logo: continueImg, type: "ONE_CLICK_CONTINUATION", state: true, isShow: false },
      { name: "\u5168\u6587\u6DA6\u8272", logo: polishImg, type: "FULL_TEXT_POLISHING", state: true, isShow: false },
      { name: "\u603B\u7ED3\u6458\u8981", logo: abstractImg, type: "FULL_TEXT_SUMMARY", state: true, isShow: false },
      { name: "\u5168\u6587\u7FFB\u8BD1", logo: translateImg, type: "FULL_TEXT_TRANSLATION", state: true, isShow: false },
      { name: "\u5168\u6587\u6269\u5199", logo: expandImg, type: "FULL_TEXT_EXPANSION", state: true, isShow: false },
      { name: "\u8BED\u6C14\u4FEE\u6539", logo: forYouImg, type: "TONE_MODIFCATION", state: true, isShow: false },
      { name: "\u5E2E\u4F60\u5199", logo: replaceImg, type: "AI_ASSISTED_WRITING", state: true, isShow: false },
      { name: "AI\u914D\u56FE", logo: illustrationImg, type: "AI_MAPPING", state: true, isShow: false }
    ]);
    ref({
      articleType: "",
      languageType: "",
      wordCount: "",
      searchFlag: false,
      resourceCodeList: [],
      corpusCodeList: []
    });
    const routing = getRouting();
    const content = ref("");
    const selectCode = ref("");
    const selectGroupId = ref("");
    const groupId = ref("");
    const loading = ref(false);
    const sPromptRef = ref();
    const isShow = ref(true);
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const hisList = ref([]);
    const loadMore = ref(true);
    const isEditState = ref(true);
    const isEditState2 = ref(false);
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    const robotDate = ref({});
    const modalHeaderList = ref([]);
    const modalContent = ref("");
    const modalContentLoading = ref(false);
    const sceneDataStr = ref("");
    const pageState = ref(true);
    const selectText = ref("");
    const electricity = ref({});
    const continuedWriting = ref("");
    const outputPattern = ref("");
    const getHis = (e) => {
      if (loadMore.value) {
        if (proxy.$isEmpty(router.currentRoute.value.query.robotCode)) {
          hisParams.value.robotCode = "";
          hisParams.value.robotType = "";
          hisParams.value.type = "";
        }
        proxy.$api.queryAiDocumentRecordPageList(hisParams.value).then((res) => {
          loading.value = false;
          if (res.data && res.data.length == 0) {
            loadMore.value = false;
            return;
          }
          res.data;
          if (hisParams.value.pageNo > 1) {
            hisList.value = hisList.value.concat(res.data);
          } else {
            hisList.value = res.data;
            if (e == "add") {
              selectItem.value = res.data[0];
              selectCode.value = res.data[0].code;
            }
          }
        }).catch(() => {
          loading.value = false;
        });
      }
    };
    const scrollEventFn = proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        hisParams.value.pageNo = hisParams.value.pageNo + 1;
        getHis();
      }
    }, 300);
    const toJump = (url) => {
    };
    const toDelete = (record) => {
      if (record) {
        selectCode.value = record.code;
        selectGroupId.value = record.groupId;
        sPromptRef.value.showFn();
      } else {
        let data = {
          groupId: selectGroupId.value,
          code: selectCode.value
        };
        loading.value = true;
        proxy.$api.deleteDocumentRecord(data).then(() => {
          loadMore.value = true;
          hisParams.value.pageNo = 1;
          proxy.$Message.success("\u5DF2\u5220\u9664");
          getHis();
        }).catch(() => {
          loading.value = false;
        });
      }
    };
    const toCreate = () => {
      aiEditor.setContent("");
      selectCode.value = "";
      if (!proxy.$isEmpty(content.value)) {
        aiEditor.setContent("");
        content.value = "";
        isShow.value = true;
      } else {
        selectCode.value = "";
        selectGroupId.value = "";
        content.value = "";
        isShow.value = true;
      }
      selectItem.value = {};
    };
    const toDraw = () => {
      if (proxy.$isEmpty(drawParams.value.content)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u521B\u610F");
        return;
      }
      let data = {
        content: JSON.stringify(drawParams.value),
        groupId: groupId.value,
        robotCode: robotDate.value.code,
        chatType: "DRAW"
      };
      btnLoading.value = true;
      proxy.$setAiChat(proxy, data, "DrawBatch", (item) => {
        if (item && item.content) {
          drawImgList.value.push(item);
          btnLoading.value = false;
        }
      });
    };
    const createAction = (e) => {
      if (e.type == "insertion") {
        let str1 = aiEditor.getMarkdown();
        let str2 = str1 + "" + e.record.content;
        aiEditor.setContent(str2);
      }
      if (e.type == "switch") {
        aiEditor.setContent(e.record.content);
      }
    };
    const chooseItem = (record) => {
      if (pageLoading.value) {
        return;
      }
      routing.abortReadingStream();
      routing.resetStream();
      cMarkmapState.value = false;
      isEditState.value = true;
      setTimeout(() => {
        cMarkmapState.value = true;
        setTimeout(() => {
          selectCode.value = record.code;
          selectGroupId.value = record.groupId;
          content.value = record.content;
          selectType.value = "";
          selectItem.value = record;
          pageLoading.value = false;
          aiEditor.setContent(content.value);
        }, 100);
      }, 500);
    };
    const toInsertion = proxy.$debounce((record) => {
      let str1 = aiEditor.getMarkdown();
      let str2 = str1 + "![](" + record.content + ")";
      aiEditor.setContent(str2);
    });
    const saveContent = proxy.$debounce(() => {
      let content2 = aiEditor.getMarkdown();
      if (proxy.$isEmpty(content2)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165");
        return;
      }
      let data = {};
      loading.value = true;
      let apiUrl = "";
      if (selectCode.value) {
        apiUrl = "editDocumentRecord";
        data = {
          code: selectItem.value.code,
          content: content2,
          request: selectItem.value.request ? JSON.parse(selectItem.value.request).content : ""
        };
      } else {
        apiUrl = "saveDocumentRecord";
        data = {
          robotCode: router.currentRoute.value.query.robotCode,
          content: content2,
          request: selectItem.value.request ? JSON.parse(selectItem.value.request).content : ""
        };
      }
      proxy.$api[apiUrl](data).then(() => {
        loading.value = false;
        proxy.$Message.success("\u5DF2\u4FDD\u5B58");
        loadMore.value = true;
        hisParams.value.pageNo = 1;
        getHis();
      }).catch(() => {
        loading.value = false;
      });
    }, 300);
    const createLanguage = proxy.$debounce(() => {
      if (proxy.$isEmpty(languageStr.value)) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      let str = aiEditor.getText();
      if (proxy.$isEmpty(str)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165");
        return;
      }
      continueContent.value = "";
      let language = languageStr.value;
      let data = {
        content: aiEditor.getMarkdown(),
        sceneType: selectType.value,
        sceneData: JSON.stringify({ language })
      };
      divLoading.value = true;
      btnLoading.value = true;
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item && item.content) {
          divLoading.value = false;
          continueContent.value = continueContent.value + "" + item.content;
          modifcationType.value = 2;
          btnLoading.value = false;
        }
        if (item.type == "[ONCOMPLETED]") {
          btnLoading.value = false;
          divLoading.value = false;
        }
      });
    }, 300);
    const toConfirmTong = () => {
      if (tongStr.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      let tone = tongStr.value.join(",");
      sceneDataStr.value = JSON.stringify({ tone });
      modal2.value = false;
      toAction4(modalType.value);
    };
    const toConfirmLanguage = proxy.$debounce(() => {
      if (proxy.$isEmpty(languageStr.value)) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      sceneDataStr.value = JSON.stringify({ language: languageStr.value });
      modal3.value = false;
      toAction4(modalType.value);
    }, 300);
    const getContent = (msg, type, record) => {
      assistedContent.value = msg;
    };
    const onSubmit = () => {
      routing.abortReadingStream();
      routing.resetStream();
      let data = {
        content: assistedContent.value,
        sceneType: selectType.value
      };
      chatList.value.push({
        content: assistedContent.value,
        type: "USER",
        chatType: "CHAT"
      });
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item && item.content) {
          proxy.$processChatData(chatList.value, item, true);
        }
        if (item.type == "[ONCOMPLETED]")
          ;
      });
    };
    const createTone = proxy.$debounce(() => {
      if (tongStr.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      let tone = tongStr.value.join(",");
      let data = {
        content: aiEditor.getMarkdown(),
        sceneType: selectType.value,
        sceneData: JSON.stringify({ tone })
      };
      divLoading.value = true;
      btnLoading.value = true;
      continueContent.value = "";
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item && item.content) {
          divLoading.value = false;
          continueContent.value = continueContent.value + "" + item.content;
          modifcationType.value = 2;
          btnLoading.value = false;
        }
        if (item.type == "[ONCOMPLETED]") {
          btnLoading.value = false;
          divLoading.value = false;
        }
      });
    }, 300);
    const toNewsCreate = proxy.$debounce((record, type) => {
      let data = {
        content: "",
        sceneType: ""
      };
      if (type == 1) {
        selectNewsIndex.value = 0;
        newsPageType.value = 2;
        data.content = record.newsDigest;
        data.sceneType = "AI_INSPIRATION_KEY_EXTRACTION";
        contentComContent.value = "";
      }
      if (type == 2) {
        selectNewsIndex.value = 0;
        newsPageType.value = 2;
        data.content = record.newsDigest;
        data.sceneType = "AI_INSPIRATION_GENERATE_TOPIC";
        contentComContent.value = "";
      }
      if (type == 3) {
        data.content = contentComContent.value;
        selectNewsIndex.value = 0;
        newsPageType.value = 1;
        data.sceneType = "AI_INSPIRATION_GENERATE_TOPIC_ARTICLE";
      }
      divLoading.value = true;
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item && item.content) {
          if (type == 3) {
            let str1 = "";
            if (proxy.$isEmpty(aiEditor.getText())) {
              str1 = item.content;
            } else {
              str1 = aiEditor.getMarkdown();
            }
            let str2 = str1 + "" + item.content;
            aiEditor.setContent(str2);
          } else {
            contentComContent.value = contentComContent.value + "" + item.content;
          }
          divLoading.value = false;
        }
        if (item.type == "[ONCOMPLETED]")
          ;
      });
    }, 300);
    const toTrain = () => {
      let content2 = aiEditor.getText();
      if (!content2) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      trainModalRef.value.showFn({
        content: aiEditor.getMarkdown()
      });
    };
    const toAction = proxy.$debounce((record) => {
      if (!record.state) {
        return;
      }
      newsPageType.value = 1;
      modifcationType.value = 1;
      continueContent.value = "";
      selectType.value = record.type;
      if (selectType.value == "AI_INSPIRATION") {
        chooseNews(newsParams.value.newsType);
      }
      if (selectType.value == "AI_MAPPING") {
        let data = {
          code: "1747243596583862274"
        };
        proxy.$api.space_robotGetRobotInfo(data).then((res) => {
          robotDate.value = res.data;
          let data2 = {
            type: robotDate.value.type,
            robotCode: robotDate.value.code
          };
          proxy.$api.ai_bulidChatGroupId(data2).then((json) => {
            groupId.value = json.data;
          });
        });
      }
      if (selectType.value == "FULL_TEXT_TRANSLATION") {
        proxy.$api.queryTagTemplateList({
          type: "LANGUAGE_TYPE"
        }).then((res) => {
          languageList.value = res.data;
        });
      }
      if (selectType.value == "ONE_CLICK_CONTINUATION" || selectType.value == "FULL_TEXT_POLISHING" || selectType.value == "FULL_TEXT_SUMMARY" || selectType.value == "FULL_TEXT_EXPANSION") {
        continueContent.value = "";
        isEditState2.value = false;
      }
      if (selectType.value == "AI_ASSISTED_WRITING") {
        chatList.value = [
          {
            content: "\u60A8\u597D\uFF01\u6211\u662F\u60A8\u7684\u5199\u4F5C\u52A9\u624B\u3002\n\u5F88\u9AD8\u5174\u4E3A\u60A8\u670D\u52A1\uFF01\u6211\u5C06\u534F\u52A9\u60A8\u8FDB\u884C\u5FEB\u901F\u521B\u4F5C\uFF0C\u6709\u4EC0\u4E48\u60F3\u8981\u95EE\u6211\u7684\u5417",
            type: "SYSTEM",
            chatType: "CHAT",
            robotPromptList: [
              "\u8BF7\u5E2E\u6211\u519910\u4E2A\u53A6\u95E8\u65C5\u6E38\u5BA3\u4F20\u6807\u8BED",
              "\u8BF7\u5E2E\u6211\u519910\u6761\u515A\u7EAA\u5B66\u4E60\u76F8\u5173\u7684\u91D1\u53E5\u7D20\u6750",
              "\u8BF7\u5E2E\u6211\u62DF6\u4E2A\u515A\u7EAA\u5B66\u4E60\u76F8\u5173\u6807\u9898\uFF0C\u8981\u6C42\u5BF9\u4ED7\u5DE5\u6574"
            ]
          }
        ];
      }
      if (record.type == "template") {
        router.push("/ai/creative");
      }
      if (record.type == "HIGH_LEVEL_WRITTING") {
        if (!proxy.$isEmpty(selectText.value)) {
          setTimeout(() => {
            highLevelWritingRef.value.setOutContent(selectText.value);
            selectText.value = "";
          }, 100);
        }
      }
    }, 300);
    const toDownload = proxy.$debounce((type) => {
      if (proxy.$isEmpty(aiEditor.getText())) {
        proxy.$Message.error("\u8BF7\u8F93\u5165");
        return;
      }
      let data = {
        content: aiEditor.getMarkdown(),
        exportFileType: type,
        channelType: ""
      };
      btnLoading.value = true;
      exportLoading.value = true;
      proxy.$api.convertContentToPdf(data).then((res) => {
        getBlob(res.data.url).then((blob) => {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "\u4E0B\u8F7D" + (type == "PDF" ? ".pdf" : ".doc");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          btnLoading.value = false;
          exportLoading.value = false;
        });
      }).catch(() => {
        btnLoading.value = false;
      });
    }, 300);
    const getBlob = (url) => {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(xhr.response);
          }
        };
        xhr.send();
      });
    };
    const toAction3 = proxy.$debounce(() => {
      let data = {
        content: aiEditor.getMarkdown(),
        sceneType: selectType.value
      };
      if (proxy.$isEmpty(data.content)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165");
        return;
      }
      continueContent.value = "";
      divLoading.value = true;
      btnLoading.value = true;
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item && item.content) {
          divLoading.value = false;
          continueContent.value = continueContent.value + "" + item.content;
        }
        if (item.type == "[ONCOMPLETED]") {
          btnLoading.value = false;
        }
      }).catch(() => {
        btnLoading.value = false;
      });
    }, 300);
    const toAction4 = proxy.$debounce((type) => {
      modal.value = true;
      modalType.value = type;
      isEditState2.value = false;
      modalContent.value = "";
      routing.resetStream();
      setTimeout(() => {
        let data = {
          content: aiEditor.getSelectedText(),
          sceneType: type,
          sceneData: sceneDataStr.value
        };
        modalContentLoading.value = true;
        btnLoading.value = true;
        modalContent.value = "";
        proxy.$setAiChat(proxy, data, "", (item) => {
          if (item && item.content) {
            modalContent.value = modalContent.value + "" + item.content;
            modalContentLoading.value = false;
          }
          if (item.type == "[ONCOMPLETED]") {
            btnLoading.value = false;
          }
        });
      }, 1e3);
    }, 300);
    const templateCenterToInsertion = proxy.$debounce((e) => {
      let str1 = aiEditor.getMarkdown();
      let str2 = str1 + "\n" + e;
      aiEditor.setContent(str2);
    }, 300);
    const chooseNews = proxy.$debounce((type) => {
      newsParams.value.newsType = type;
      selectNewsIndex.value = 0;
      divLoading.value = true;
      proxy.$api.queryNewsList(newsParams.value).then((res) => {
        newsList.value = res.data;
        divLoading.value = false;
      }).catch(() => {
        divLoading.value = false;
      });
    }, 300);
    const toAction2 = proxy.$debounce((type) => {
      selectedText.value = aiEditor.getSelectedText();
      modalType.value = type;
      if (type == "CHNAGE_TONE") {
        modal2.value = true;
        tongStr.value = ["\u6B63\u5F0F"];
        return;
      }
      if (type == "TRANSLATE") {
        proxy.$api.queryTagTemplateList({
          type: "LANGUAGE_TYPE"
        }).then((res) => {
          languageList.value = res.data;
        });
        modal3.value = true;
        return;
      }
      if (type == "HIGH_LEVEL_WRITTING") {
        toAction({
          state: true,
          type: "HIGH_LEVEL_WRITTING"
        });
        return;
      }
      modal.value = true;
      isEditState2.value = false;
      routing.resetStream();
      setTimeout(() => {
        let data = {
          content: aiEditor.getSelectedText(),
          sceneType: type
        };
        modalContentLoading.value = true;
        btnLoading.value = true;
        modalContent.value = "";
        proxy.$setAiChat(proxy, data, "", (item) => {
          if (item && item.content) {
            modalContent.value = modalContent.value + "" + item.content;
            modalContentLoading.value = false;
          }
          if (item.type == "[ONCOMPLETED]") {
            btnLoading.value = false;
          }
        });
      }, 1e3);
    });
    const modelAction = proxy.$debounce((type) => {
      if (btnLoading.value) {
        proxy.$Message.error("\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E");
        return;
      }
      if (proxy.$isEmpty(modalContent.value)) {
        proxy.$Message.error("\u8BF7\u751F\u6210");
        return;
      }
      if (type == "insertion") {
        let str1 = aiEditor.getSelectedText();
        let str2 = str1 + "\n" + modalContent.value;
        aiEditor.focus().insert(str2);
      }
      if (type == "switch") {
        aiEditor.focus().insert(modalContent.value);
      }
      if (type == "copy") {
        proxy.$CopyTex(modalContent.value);
      }
      modalContent.value = "";
      modal.value = false;
    }, 300);
    const insertContinue = proxy.$debounce(() => {
      let str1 = aiEditor.getMarkdown();
      let str2 = str1 + "\n" + continueContent.value;
      aiEditor.setContent(str2);
    }, 300);
    const highLevelWritingSubmit = (e) => {
      let str1 = aiEditor.getMarkdown();
      let str2 = str1 + "\n" + e;
      aiEditor.setContent(str2);
    };
    const getImg = (e) => {
      previewImgRef.value.showFn(e);
      isPreviewLoading.value = false;
    };
    onUnmounted(() => {
      cMarkmapState.value = false;
    });
    watch(() => content.value, () => {
      let contentData = JSON.parse(JSON.stringify(content.value));
      const trailingPattern = /[.\s-]+$/;
      if (trailingPattern.test(contentData)) {
        contentData = contentData.replace(trailingPattern, "") + " ";
      }
    }, { deep: true });
    watch(() => routing.isoncompleted, (newValue, oldValue) => {
      if (newValue && !oldValue) {
        localStorage.removeItem("createHis");
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1$1;
      const _component_Button = resolveComponent("Button");
      const _component_Spin = resolveComponent("Spin");
      const _component_svga = __nuxt_component_0;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_electricCom = __nuxt_component_1;
      const _component_Input = resolveComponent("Input");
      const _component_Icon = resolveComponent("Icon");
      const _component_cMarkmap = __nuxt_component_3;
      const _component_sPrompt = __nuxt_component_1$1;
      const _component_trainModal = __nuxt_component_5;
      const _component_Modal = resolveComponent("Modal");
      const _component_previewImg = __nuxt_component_1$2;
      const _directive_load = resolveDirective("load");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="create-detail" data-v-5d9e7782${_scopeId}>`);
            if (isShow.value) {
              _push2(`<div class="detail-left" data-v-5d9e7782${_scopeId}><div class="left-top" data-v-5d9e7782${_scopeId}><div class="top-title" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>\u5386\u53F2\u8BB0\u5F55</div><img${ssrRenderAttr("src", _imports_1$1)} data-v-5d9e7782${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Button, {
                type: "primary",
                class: "top-btn",
                onClick: toCreate
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u65B0\u5EFA\u6587\u6863`);
                  } else {
                    return [
                      createTextVNode("\u65B0\u5EFA\u6587\u6863")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="left-content" data-v-5d9e7782${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Spin, {
                fix: "",
                show: loading.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-5d9e7782${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_svga, {
                      svgaImg: unref(lodingData),
                      canvasName: "loading1",
                      width: 100
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode(_component_svga, {
                          svgaImg: unref(lodingData),
                          canvasName: "loading1",
                          width: 100
                        }, null, 8, ["svgaImg"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(hisList.value, (item) => {
                _push2(`<div class="content-item" data-v-5d9e7782${_scopeId}><div class="${ssrRenderClass([selectCode.value == item.code ? "active" : "", "items"])}" data-v-5d9e7782${_scopeId}>`);
                if (item.content) {
                  _push2(`<div class="items-title text-hide" data-v-5d9e7782${_scopeId}>${ssrInterpolate(item.content)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="items-sub" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>${ssrInterpolate(item.gmtCreate)}</div><img class="sub-delete"${ssrRenderAttr("src", _imports_1)} data-v-5d9e7782${_scopeId}></div></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!isShow.value) {
              _push2(`<div class="left-tag" data-v-5d9e7782${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ClientOnly, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Tooltip, {
                      content: "\u521B\u5EFA\u65B0\u6587\u6863",
                      placement: "right"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="chatOperation-tag" data-v-5d9e7782${_scopeId3}><img style="${ssrRenderStyle({ "cursor": "pointer", "width": "32px", "height": "32px" })}"${ssrRenderAttr("src", _imports_0)} data-v-5d9e7782${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "chatOperation-tag",
                              onClick: toCreate
                            }, [
                              createVNode("img", {
                                style: { "cursor": "pointer", "width": "32px", "height": "32px" },
                                src: _imports_0
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Tooltip, {
                      content: "\u5386\u53F2\u8BB0\u5F55",
                      placement: "right"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="chatOperation-tag" data-v-5d9e7782${_scopeId3}><img style="${ssrRenderStyle({ "cursor": "pointer", "width": "19px", "height": "19px" })}"${ssrRenderAttr("src", _imports_0$1)} data-v-5d9e7782${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "chatOperation-tag",
                              onClick: ($event) => isShow.value = !isShow.value
                            }, [
                              createVNode("img", {
                                style: { "cursor": "pointer", "width": "19px", "height": "19px" },
                                src: _imports_0$1
                              })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Tooltip, {
                        content: "\u521B\u5EFA\u65B0\u6587\u6863",
                        placement: "right"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "chatOperation-tag",
                            onClick: toCreate
                          }, [
                            createVNode("img", {
                              style: { "cursor": "pointer", "width": "32px", "height": "32px" },
                              src: _imports_0
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tooltip, {
                        content: "\u5386\u53F2\u8BB0\u5F55",
                        placement: "right"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "chatOperation-tag",
                            onClick: ($event) => isShow.value = !isShow.value
                          }, [
                            createVNode("img", {
                              style: { "cursor": "pointer", "width": "19px", "height": "19px" },
                              src: _imports_0$1
                            })
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([isShow.value ? "isShow" : "", "detail-right"])}" data-v-5d9e7782${_scopeId}>`);
            if (pageState.value) {
              _push2(`<!--[--><div class="right-top" data-v-5d9e7782${_scopeId}><div class="top-btn" data-v-5d9e7782${_scopeId}>`);
              if (unref(routing).clientType == "TEAM") {
                _push2(ssrRenderComponent(_component_Button, {
                  class: "btn",
                  type: "primary",
                  disabled: !isEditState.value,
                  onClick: toTrain
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u8BAD\u7EC3`);
                    } else {
                      return [
                        createTextVNode("\u8BAD\u7EC3")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_Poptip, {
                placement: "bottom",
                modelValue: popVisible.value,
                "onUpdate:modelValue": ($event) => popVisible.value = $event,
                transfer: false,
                "popper-class": "popperClass2"
              }, {
                content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (exportLoading.value) {
                      _push3(`<div class="popperClass2-item" data-v-5d9e7782${_scopeId2}><div class="spinnerCom fl mr-10" data-v-5d9e7782${_scopeId2}></div> \u4E0B\u8F7D\u4E2D... </div>`);
                    } else {
                      _push3(`<!--[--><div class="popperClass2-item" data-v-5d9e7782${_scopeId2}>\u4E0B\u8F7Dword </div><div class="popperClass2-item" data-v-5d9e7782${_scopeId2}> \u4E0B\u8F7DPDF </div><!--]-->`);
                    }
                  } else {
                    return [
                      exportLoading.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "popperClass2-item"
                      }, [
                        createVNode("div", { class: "spinnerCom fl mr-10" }),
                        createTextVNode(" \u4E0B\u8F7D\u4E2D... ")
                      ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("div", {
                          class: "popperClass2-item",
                          onClick: ($event) => unref(toDownload)("DOCX")
                        }, "\u4E0B\u8F7Dword ", 8, ["onClick"]),
                        createVNode("div", {
                          class: "popperClass2-item",
                          onClick: ($event) => unref(toDownload)("PDF")
                        }, " \u4E0B\u8F7DPDF ", 8, ["onClick"])
                      ], 64))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      disabled: !isEditState.value,
                      loading: btnLoading.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u4E0B\u8F7D`);
                        } else {
                          return [
                            createTextVNode("\u4E0B\u8F7D")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Button, {
                        class: "btn",
                        disabled: !isEditState.value,
                        loading: btnLoading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u4E0B\u8F7D")
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                type: "primary",
                class: "btn",
                onClick: unref(saveContent),
                disabled: !isEditState.value,
                loading: loading.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u4FDD\u5B58`);
                  } else {
                    return [
                      createTextVNode("\u4FDD\u5B58")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="right-content" data-v-5d9e7782${_scopeId}><div class="${ssrRenderClass([selectType.value ? "content2" : "", "content"])}" data-v-5d9e7782${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Spin, {
                fix: "",
                show: pageLoading.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-5d9e7782${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_svga, {
                      svgaImg: unref(lodingData),
                      canvasName: "loading2",
                      width: 100
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode(_component_svga, {
                          svgaImg: unref(lodingData),
                          canvasName: "loading2",
                          width: 100
                        }, null, 8, ["svgaImg"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div id="markdown-content" class="divRef" style="${ssrRenderStyle({ "height": "100%" })}" data-v-5d9e7782${_scopeId}></div></div>`);
              if (selectType.value) {
                _push2(`<div class="content-edit" data-v-5d9e7782${_scopeId}><div class="packup" data-v-5d9e7782${_scopeId}><img${ssrRenderAttr("src", _imports_4)} data-v-5d9e7782${_scopeId}></div>`);
                if (selectType.value == "FULL_TEXT_TRANSLATION") {
                  _push2(`<div class="modifcation" data-v-5d9e7782${_scopeId}>`);
                  if (modifcationType.value == 1) {
                    _push2(`<!--[--><div class="modifcation-content" data-v-5d9e7782${_scopeId}><div class="modifcation-content-title" data-v-5d9e7782${_scopeId}>\u5168\u6587\u7FFB\u8BD1</div><div class="modifcation-content-item" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>\u9009\u62E9\u7FFB\u8BD1\u8BED\u8A00<span class="require" data-v-5d9e7782${_scopeId}>*</span></div>`);
                    _push2(ssrRenderComponent(_component_Select, {
                      class: "content-item-select",
                      "transfer-class-name": "modifcation-content-item-select",
                      modelValue: languageStr.value,
                      "onUpdate:modelValue": ($event) => languageStr.value = $event,
                      transfer: ""
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<!--[-->`);
                          ssrRenderList(languageList.value, (item) => {
                            _push3(ssrRenderComponent(_component_Option, {
                              value: item.cateName,
                              key: item.cateName
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(item.cateName)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.cateName), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          });
                          _push3(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(languageList.value, (item) => {
                              return openBlock(), createBlock(_component_Option, {
                                value: item.cateName,
                                key: item.cateName
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.cateName), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div><div class="modifcation-action" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_electricCom, {
                      type: "CONTINUED_WRITING",
                      data: electricity.value
                    }, {
                      content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Button, {
                            type: "primary",
                            class: "modifcation-action-btn",
                            onClick: unref(createLanguage),
                            loading: btnLoading.value
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`\u7ACB\u5373\u7FFB\u8BD1`);
                              } else {
                                return [
                                  createTextVNode("\u7ACB\u5373\u7FFB\u8BD1")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Button, {
                              type: "primary",
                              class: "modifcation-action-btn",
                              onClick: unref(createLanguage),
                              loading: btnLoading.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u7ACB\u5373\u7FFB\u8BD1")
                              ]),
                              _: 1
                            }, 8, ["onClick", "loading"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div><!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (modifcationType.value == 2) {
                    _push2(`<div class="continue" data-v-5d9e7782${_scopeId}><div class="continue-title" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Button, {
                      loading: divLoading.value,
                      onClick: ($event) => modifcationType.value = 1
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u8FD4\u56DE`);
                        } else {
                          return [
                            createTextVNode("\u8FD4\u56DE")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div><div class="continue-content" data-v-5d9e7782${_scopeId}><div style="${ssrRenderStyle({ "padding": "0 16px", "height": "100%" })}" data-v-5d9e7782${_scopeId}>`);
                    if (isEditState2.value) {
                      _push2(ssrRenderComponent(_component_Input, {
                        type: "textarea",
                        modelValue: continueContent.value,
                        "onUpdate:modelValue": ($event) => continueContent.value = $event,
                        class: "textarea"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(ssrRenderComponent(contentCom, { content: continueContent.value }, null, _parent2, _scopeId));
                    }
                    _push2(`</div></div><div class="continue-bottom" data-v-5d9e7782${_scopeId}><div class="bottom-left" data-v-5d9e7782${_scopeId}>\u5B57\u6570\uFF1A${ssrInterpolate(continueContent.value.length)}</div><div class="bottom-right" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: ($event) => _ctx.$CopyTex(continueContent.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u590D\u5236`);
                        } else {
                          return [
                            createTextVNode("\u590D\u5236")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: unref(insertContinue)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u63D2\u5165\u6B63\u6587`);
                        } else {
                          return [
                            createTextVNode("\u63D2\u5165\u6B63\u6587")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: ($event) => isEditState2.value = true
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u7F16\u8F91`);
                        } else {
                          return [
                            createTextVNode("\u7F16\u8F91")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (selectType.value == "TONE_MODIFCATION") {
                  _push2(`<div class="modifcation" data-v-5d9e7782${_scopeId}>`);
                  if (modifcationType.value == 1) {
                    _push2(`<!--[--><div class="modifcation-content" data-v-5d9e7782${_scopeId}><div class="modifcation-content-title" data-v-5d9e7782${_scopeId}>\u8BED\u6C14\u4FEE\u6539</div><div class="modifcation-content-item" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>\u9009\u62E9\u8BED\u6C14<span class="require" data-v-5d9e7782${_scopeId}>*</span></div>`);
                    _push2(ssrRenderComponent(_component_Select, {
                      class: "content-item-select",
                      multiple: "",
                      modelValue: tongStr.value,
                      "onUpdate:modelValue": ($event) => tongStr.value = $event
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<!--[-->`);
                          ssrRenderList(toneList.value, (item) => {
                            _push3(ssrRenderComponent(_component_Option, {
                              value: item.name,
                              key: item.name
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          });
                          _push3(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(toneList.value, (item) => {
                              return openBlock(), createBlock(_component_Option, {
                                value: item.name,
                                key: item.name
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div><div class="modifcation-action" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_electricCom, {
                      type: "CONTINUED_WRITING",
                      data: electricity.value
                    }, {
                      content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Button, {
                            type: "primary",
                            class: "modifcation-action-btn",
                            onClick: unref(createTone),
                            loading: btnLoading.value
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`\u7ACB\u5373\u4FEE\u6539`);
                              } else {
                                return [
                                  createTextVNode("\u7ACB\u5373\u4FEE\u6539")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Button, {
                              type: "primary",
                              class: "modifcation-action-btn",
                              onClick: unref(createTone),
                              loading: btnLoading.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u7ACB\u5373\u4FEE\u6539")
                              ]),
                              _: 1
                            }, 8, ["onClick", "loading"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div><!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (modifcationType.value == 2) {
                    _push2(`<div class="continue" data-v-5d9e7782${_scopeId}><div class="continue-title" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Button, {
                      loading: divLoading.value,
                      onClick: ($event) => modifcationType.value = 1
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u8FD4\u56DE`);
                        } else {
                          return [
                            createTextVNode("\u8FD4\u56DE")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div><div class="continue-content" data-v-5d9e7782${_scopeId}><div style="${ssrRenderStyle({ "padding": "0 16px", "height": "100%" })}" data-v-5d9e7782${_scopeId}>`);
                    if (isEditState2.value) {
                      _push2(ssrRenderComponent(_component_Input, {
                        type: "textarea",
                        modelValue: continueContent.value,
                        "onUpdate:modelValue": ($event) => continueContent.value = $event,
                        class: "textarea"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(ssrRenderComponent(contentCom, { content: continueContent.value }, null, _parent2, _scopeId));
                    }
                    _push2(`</div></div><div class="continue-bottom" data-v-5d9e7782${_scopeId}><div class="bottom-left" data-v-5d9e7782${_scopeId}>\u5B57\u6570\uFF1A${ssrInterpolate(continueContent.value.length)}</div><div class="bottom-right" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: ($event) => _ctx.$CopyTex(continueContent.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u590D\u5236`);
                        } else {
                          return [
                            createTextVNode("\u590D\u5236")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: unref(insertContinue)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u63D2\u5165\u6B63\u6587`);
                        } else {
                          return [
                            createTextVNode("\u63D2\u5165\u6B63\u6587")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: ($event) => isEditState2.value = true
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u7F16\u8F91`);
                        } else {
                          return [
                            createTextVNode("\u7F16\u8F91")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (selectType.value == "AI_INSPIRATION") {
                  _push2(`<div class="inspiration" data-v-5d9e7782${_scopeId}>`);
                  if (newsPageType.value == 1) {
                    _push2(`<!--[--><div class="inspiration-title" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>AI\u7075\u611F</div><div class="title-tab" data-v-5d9e7782${_scopeId}><div class="${ssrRenderClass([newsParams.value.newsType == 1 ? "tab-active" : "", "tab-item"])}" data-v-5d9e7782${_scopeId}>\u7F51\u9875\u70ED\u699C</div><div class="${ssrRenderClass([newsParams.value.newsType == 2 ? "tab-active" : "", "tab-item"])}" data-v-5d9e7782${_scopeId}>\u5FAE\u4FE1\u70ED\u699C</div><div class="${ssrRenderClass([newsParams.value.newsType == 5 ? "tab-active" : "", "tab-item"])}" data-v-5d9e7782${_scopeId}>\u5934\u6761\u70ED\u699C</div><div class="${ssrRenderClass([newsParams.value.newsType == 6 ? "tab-active" : "", "tab-item"])}" data-v-5d9e7782${_scopeId}>\u6296\u97F3\u70ED\u699C</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "inspiration-news" }, ssrGetDirectiveProps(_ctx, _directive_load, divLoading.value)))} data-v-5d9e7782${_scopeId}><!--[-->`);
                    ssrRenderList(newsList.value, (item, i) => {
                      _push2(`<div class="${ssrRenderClass([selectNewsIndex.value == i ? "news-active" : "", "news-item"])}" data-v-5d9e7782${_scopeId}><div class="news-item-title" data-v-5d9e7782${_scopeId}><div class="news-tag" data-v-5d9e7782${_scopeId}>${ssrInterpolate(i + 1)}</div><div class="news-title" data-v-5d9e7782${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_Tooltip, {
                        content: item.newsTitle,
                        "max-width": "200"
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div class="text-hide" style="${ssrRenderStyle({ "max-width": "400px" })}" data-v-5d9e7782${_scopeId2}>${ssrInterpolate(item.newsTitle)}</div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "text-hide",
                                style: { "max-width": "400px" }
                              }, toDisplayString(item.newsTitle), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                      _push2(`</div></div><div class="news-item-content" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>${ssrInterpolate(item.newsDigest)}</div>`);
                      if (selectNewsIndex.value == i && item.newsUrl) {
                        _push2(`<div class="item-content-bottom" data-v-5d9e7782${_scopeId}><div class="btn-detail" data-v-5d9e7782${_scopeId}>\u67E5\u770B\u8BE6\u60C5</div>`);
                        _push2(ssrRenderComponent(_component_electricCom, {
                          type: "CONTINUED_WRITING",
                          data: electricity.value
                        }, {
                          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                            if (_push3) {
                              _push3(`<div class="btn-extract" data-v-5d9e7782${_scopeId2}><img${ssrRenderAttr("src", glistenImg)} data-v-5d9e7782${_scopeId2}><div data-v-5d9e7782${_scopeId2}>AI\u8981\u70B9\u63D0\u70BC</div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "btn-extract",
                                  onClick: ($event) => unref(toNewsCreate)(item, 1)
                                }, [
                                  createVNode("img", { src: glistenImg }),
                                  createVNode("div", null, "AI\u8981\u70B9\u63D0\u70BC")
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent2, _scopeId));
                        _push2(ssrRenderComponent(_component_electricCom, {
                          type: "CONTINUED_WRITING",
                          data: electricity.value
                        }, {
                          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                            if (_push3) {
                              _push3(`<div class="btn-unite" data-v-5d9e7782${_scopeId2}>\u7ED3\u5408\u8BE5\u70ED\u70B9\uFF0C\u751F\u6210\u8BDD\u9898</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "btn-unite",
                                  onClick: ($event) => unref(toNewsCreate)(item, 2)
                                }, "\u7ED3\u5408\u8BE5\u70ED\u70B9\uFF0C\u751F\u6210\u8BDD\u9898", 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent2, _scopeId));
                        _push2(`</div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div></div>`);
                    });
                    _push2(`<!--]--></div><!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (newsPageType.value == 2) {
                    _push2(`<!--[--><div class="inspiration-title" style="${ssrRenderStyle({ "padding-bottom": "0", "height": "111px" })}" data-v-5d9e7782${_scopeId}><div class="news-back" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Icon, {
                      type: "ios-arrow-back",
                      size: "20",
                      style: { "margin-right": "3px" }
                    }, null, _parent2, _scopeId));
                    _push2(`<div data-v-5d9e7782${_scopeId}>\u8FD4\u56DE</div></div><div class="news-sub" data-v-5d9e7782${_scopeId}>\u5DF2\u4E3A\u60A8\u751F\u6210\u4EE5\u4E0B\u8BDD\u9898</div></div><div${ssrRenderAttrs(mergeProps({
                      class: "inspiration-news",
                      style: { "height": "calc(100% - 111px)" }
                    }, ssrGetDirectiveProps(_ctx, _directive_load, divLoading.value)))} data-v-5d9e7782${_scopeId}><div style="${ssrRenderStyle({ "margin-top": "0" })}" class="${ssrRenderClass([selectNewsIndex.value == 0 ? "news-active" : "", "news-item"])}" data-v-5d9e7782${_scopeId}><div class="news-item-content" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(contentCom, { content: contentComContent.value }, null, _parent2, _scopeId));
                    _push2(`</div><div class="item-content-bottom" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_electricCom, {
                      type: "CONTINUED_WRITING",
                      data: electricity.value
                    }, {
                      content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="btn-create" data-v-5d9e7782${_scopeId2}>\u5199\u6210\u6587\u7AE0</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "btn-create",
                              onClick: ($event) => unref(toNewsCreate)("", 3)
                            }, "\u5199\u6210\u6587\u7AE0", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div></div></div><!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (selectType.value == "AI_MAPPING") {
                  _push2(`<div class="mapping" data-v-5d9e7782${_scopeId}><div class="mapping-top" data-v-5d9e7782${_scopeId}><div class="mapping-top-tab" data-v-5d9e7782${_scopeId}><div class="tab-btn btn-active" data-v-5d9e7782${_scopeId}>\u667A\u80FD\u914D\u56FE</div></div><div class="mapping-top-input" data-v-5d9e7782${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Input, {
                    type: "textarea",
                    modelValue: drawParams.value.content,
                    "onUpdate:modelValue": ($event) => drawParams.value.content = $event,
                    rows: 6,
                    class: "textarea",
                    placeholder: "\u8F93\u5165\u4E00\u6BB5\u8BDD\u6216\u77ED\u8BED\uFF0C\u8BCD\u6C47\uFF0C\u63CF\u8FF0\u60A8\u7684\u521B\u610F"
                  }, null, _parent2, _scopeId));
                  _push2(`</div><div class="mapping-top-action" data-v-5d9e7782${_scopeId}></div><div class="toMapping" data-v-5d9e7782${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Tooltip, {
                    transfer: true,
                    placement: "top"
                  }, {
                    content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="electric" data-v-5d9e7782${_scopeId2}><div data-v-5d9e7782${_scopeId2}>\u7535\u91CF</div><div style="${ssrRenderStyle({ "margin-left": "4px", "margin-right": "2px" })}" data-v-5d9e7782${_scopeId2}>-${ssrInterpolate(robotDate.value.consumeEnergy)}</div>`);
                        if (robotDate.value.originalEnergy) {
                          _push3(`<div class="original" data-v-5d9e7782${_scopeId2}>(${ssrInterpolate(robotDate.value.originalEnergy)})</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "electric" }, [
                            createVNode("div", null, "\u7535\u91CF"),
                            createVNode("div", { style: { "margin-left": "4px", "margin-right": "2px" } }, "-" + toDisplayString(robotDate.value.consumeEnergy), 1),
                            robotDate.value.originalEnergy ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "original"
                            }, "(" + toDisplayString(robotDate.value.originalEnergy) + ")", 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div${ssrRenderAttrs(mergeProps({ class: "mapping-btn" }, ssrGetDirectiveProps(_ctx, _directive_load, btnLoading.value)))} data-v-5d9e7782${_scopeId2}>\u5F00\u59CB\u914D\u56FE</div>`);
                      } else {
                        return [
                          withDirectives((openBlock(), createBlock("div", {
                            class: "mapping-btn",
                            onClick: toDraw
                          }, [
                            createTextVNode("\u5F00\u59CB\u914D\u56FE")
                          ])), [
                            [_directive_load, btnLoading.value]
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div><div class="mapping-sub" data-v-5d9e7782${_scopeId}>\u4EE5\u4E0B\u4E3A\u914D\u56FE\u7ED3\u679C</div></div><div class="mapping-bottom" data-v-5d9e7782${_scopeId}><div class="mapping-bottom-list" data-v-5d9e7782${_scopeId}><!--[-->`);
                  ssrRenderList(drawImgList.value, (item) => {
                    _push2(`<div class="mapping-item" data-v-5d9e7782${_scopeId}><img${ssrRenderAttr("src", item.content)} class="mapping-item-img" data-v-5d9e7782${_scopeId}><div class="mapping-item-shadow" data-v-5d9e7782${_scopeId}><div class="insertion-btn" data-v-5d9e7782${_scopeId}>\u63D2\u5165\u6B63\u6587</div></div></div>`);
                  });
                  _push2(`<!--]--></div></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (selectType.value == "ONE_CLICK_CONTINUATION" || selectType.value == "FULL_TEXT_POLISHING" || selectType.value == "FULL_TEXT_SUMMARY" || selectType.value == "FULL_TEXT_EXPANSION") {
                  _push2(`<div${ssrRenderAttrs(mergeProps({ class: "continue" }, ssrGetDirectiveProps(_ctx, _directive_load, divLoading.value)))} data-v-5d9e7782${_scopeId}>`);
                  if (_ctx.$isEmpty(continueContent.value)) {
                    _push2(`<div class="stimulate" data-v-5d9e7782${_scopeId}><div class="stimulate-name" data-v-5d9e7782${_scopeId}>`);
                    if (selectType.value == "ONE_CLICK_CONTINUATION") {
                      _push2(`<!--[--> \u4E00\u952E\u7EED\u5199 <!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (selectType.value == "FULL_TEXT_POLISHING") {
                      _push2(`<!--[--> \u5168\u6587\u6DA6\u8272 <!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (selectType.value == "FULL_TEXT_SUMMARY") {
                      _push2(`<!--[--> \u603B\u7ED3\u6458\u8981 <!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div><div class="stimulate-content" data-v-5d9e7782${_scopeId}><img class="stimulate-content-bg"${ssrRenderAttr("src", _imports_6)} data-v-5d9e7782${_scopeId}><div class="stimulate-content-con" data-v-5d9e7782${_scopeId}><div class="stimulate-btn" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_electricCom, {
                      type: "CONTINUED_WRITING",
                      data: electricity.value
                    }, {
                      content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div data-v-5d9e7782${_scopeId2}>`);
                          if (selectType.value == "ONE_CLICK_CONTINUATION") {
                            _push3(`<!--[--> \u4E00\u952E\u7EED\u5199 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (selectType.value == "FULL_TEXT_POLISHING") {
                            _push3(`<!--[--> \u5168\u6587\u6DA6\u8272 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (selectType.value == "FULL_TEXT_SUMMARY") {
                            _push3(`<!--[--> \u603B\u7ED3\u6458\u8981 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (selectType.value == "FULL_TEXT_EXPANSION") {
                            _push3(`<!--[--> \u5168\u6587\u6269\u5199 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              selectType.value == "ONE_CLICK_CONTINUATION" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" \u4E00\u952E\u7EED\u5199 ")
                              ], 64)) : createCommentVNode("", true),
                              selectType.value == "FULL_TEXT_POLISHING" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" \u5168\u6587\u6DA6\u8272 ")
                              ], 64)) : createCommentVNode("", true),
                              selectType.value == "FULL_TEXT_SUMMARY" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                createTextVNode(" \u603B\u7ED3\u6458\u8981 ")
                              ], 64)) : createCommentVNode("", true),
                              selectType.value == "FULL_TEXT_EXPANSION" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                createTextVNode(" \u5168\u6587\u6269\u5199 ")
                              ], 64)) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div><div class="stimulate-sub" data-v-5d9e7782${_scopeId}>\u70B9\u51FB\u6B64\u6309\u94AE\u8FDB\u884C `);
                    if (selectType.value == "ONE_CLICK_CONTINUATION") {
                      _push2(`<!--[--> \u4E00\u952E\u7EED\u5199 <!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (selectType.value == "FULL_TEXT_POLISHING") {
                      _push2(`<!--[--> \u5168\u6587\u6DA6\u8272 <!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (selectType.value == "FULL_TEXT_SUMMARY") {
                      _push2(`<!--[--> \u603B\u7ED3\u6458\u8981 <!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (selectType.value == "FULL_TEXT_EXPANSION") {
                      _push2(`<!--[--> \u5168\u6587\u6269\u5199 <!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div><img class="img-bg"${ssrRenderAttr("src", _imports_7)} data-v-5d9e7782${_scopeId}></div></div></div>`);
                  } else {
                    _push2(`<!--[--><div class="continue-title" data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>\u4EE5\u4E0B\u662F\u5185\u5BB9</div>`);
                    _push2(ssrRenderComponent(_component_Button, {
                      onClick: unref(toAction3),
                      loading: divLoading.value
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          if (selectType.value == "ONE_CLICK_CONTINUATION") {
                            _push3(`<!--[--> \u91CD\u65B0\u7EED\u5199 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (selectType.value == "FULL_TEXT_POLISHING") {
                            _push3(`<!--[--> \u91CD\u65B0\u6DA6\u8272 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (selectType.value == "FULL_TEXT_SUMMARY") {
                            _push3(`<!--[--> \u91CD\u65B0\u603B\u7ED3 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (selectType.value == "FULL_TEXT_EXPANSION") {
                            _push3(`<!--[--> \u5168\u6587\u6269\u5199 <!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                        } else {
                          return [
                            selectType.value == "ONE_CLICK_CONTINUATION" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" \u91CD\u65B0\u7EED\u5199 ")
                            ], 64)) : createCommentVNode("", true),
                            selectType.value == "FULL_TEXT_POLISHING" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(" \u91CD\u65B0\u6DA6\u8272 ")
                            ], 64)) : createCommentVNode("", true),
                            selectType.value == "FULL_TEXT_SUMMARY" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              createTextVNode(" \u91CD\u65B0\u603B\u7ED3 ")
                            ], 64)) : createCommentVNode("", true),
                            selectType.value == "FULL_TEXT_EXPANSION" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                              createTextVNode(" \u5168\u6587\u6269\u5199 ")
                            ], 64)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div><div class="continue-content" data-v-5d9e7782${_scopeId}><div style="${ssrRenderStyle({ "padding": "0 16px", "height": "100%" })}" data-v-5d9e7782${_scopeId}>`);
                    if (isEditState2.value) {
                      _push2(ssrRenderComponent(_component_Input, {
                        type: "textarea",
                        modelValue: continueContent.value,
                        "onUpdate:modelValue": ($event) => continueContent.value = $event,
                        class: "textarea"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(ssrRenderComponent(contentCom, { content: continueContent.value }, null, _parent2, _scopeId));
                    }
                    _push2(`</div></div><div class="continue-bottom" data-v-5d9e7782${_scopeId}><div class="bottom-left" data-v-5d9e7782${_scopeId}>\u5B57\u6570\uFF1A${ssrInterpolate(continueContent.value.length)}</div><div class="bottom-right" data-v-5d9e7782${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: ($event) => _ctx.$CopyTex(continueContent.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u590D\u5236`);
                        } else {
                          return [
                            createTextVNode("\u590D\u5236")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: unref(insertContinue)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u63D2\u5165\u6B63\u6587`);
                        } else {
                          return [
                            createTextVNode("\u63D2\u5165\u6B63\u6587")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_Button, {
                      class: "btn",
                      loading: btnLoading.value,
                      onClick: ($event) => isEditState2.value = true
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`\u7F16\u8F91`);
                        } else {
                          return [
                            createTextVNode("\u7F16\u8F91")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div><!--]-->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (selectType.value == "AI_ASSISTED_WRITING") {
                  _push2(`<div class="assisted" data-v-5d9e7782${_scopeId}><div class="assisted-title" data-v-5d9e7782${_scopeId}>\u5E2E\u4F60\u5199</div><div class="assisted-content" data-v-5d9e7782${_scopeId}>`);
                  _push2(ssrRenderComponent(recordCom, {
                    ref: "recordComRef",
                    operation: false,
                    isCreate: true,
                    onCreateAction: createAction,
                    chatList: chatList.value,
                    onGetContent: getContent
                  }, null, _parent2, _scopeId));
                  _push2(`</div><div class="assisted-input" data-v-5d9e7782${_scopeId}>`);
                  _push2(ssrRenderComponent(inputCom, {
                    isUoload: false,
                    consumeEnergy: continuedWriting.value,
                    content: assistedContent.value,
                    "onUpdate:content": ($event) => assistedContent.value = $event,
                    onSubmit
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (selectType.value == "TEMPLATE_WRITTING") {
                  _push2(ssrRenderComponent(templateCenter, { onInsertion: unref(templateCenterToInsertion) }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (selectType.value == "HIGH_LEVEL_WRITTING") {
                  _push2(ssrRenderComponent(highLevelWriting, {
                    ref_key: "highLevelWritingRef",
                    ref: highLevelWritingRef,
                    onSubmit: highLevelWritingSubmit,
                    electricity: electricity.value
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="content-right" data-v-5d9e7782${_scopeId}><div class="right-list" data-v-5d9e7782${_scopeId}><!--[-->`);
              ssrRenderList(actionList.value, (item) => {
                _push2(`<!--[-->`);
                if (item.isShow) {
                  _push2(`<div class="${ssrRenderClass([selectType.value == item.type ? "active" : "", "list-item"])}" data-v-5d9e7782${_scopeId}><img${ssrRenderAttr("src", item.logo)} data-v-5d9e7782${_scopeId}><div data-v-5d9e7782${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div><div class="${ssrRenderClass([outputPattern.value == "MIND_MAPPING" && content.value ? "" : "markmapFixed", "markmap"])}" data-v-5d9e7782${_scopeId}><div class="markmap-action" data-v-5d9e7782${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                type: "primary",
                onClick: ($event) => (cMarkmapRef.value.previewImg(), isPreviewLoading.value = true),
                loading: isPreviewLoading.value,
                disabled: !isEditState.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u9884\u89C8\u601D\u7EF4\u5BFC\u56FE`);
                  } else {
                    return [
                      createTextVNode("\u9884\u89C8\u601D\u7EF4\u5BFC\u56FE")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="markmap-content" data-v-5d9e7782${_scopeId}>`);
              if (cMarkmapState.value) {
                _push2(ssrRenderComponent(_component_cMarkmap, {
                  ref_key: "cMarkmapRef",
                  ref: cMarkmapRef,
                  content: content.value,
                  onGetImg: getImg
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><!--]-->`);
            } else {
              _push2(`<div class="incompatible" data-v-5d9e7782${_scopeId}><div class="incompatible-top" data-v-5d9e7782${_scopeId}>\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u66F4\u65B0\u7248\u672C</div><div class="incompatible-content" data-v-5d9e7782${_scopeId}>${ssrInterpolate(content.value)}</div></div>`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_sPrompt, {
              ref_key: "sPromptRef",
              ref: sPromptRef,
              icoShow: true,
              content: "\u662F\u5426\u5220\u9664\u8BE5\u8BB0\u5F55\uFF1F",
              onOk: ($event) => toDelete("")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_trainModal, {
              ref_key: "trainModalRef",
              ref: trainModalRef
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modal.value,
              "onUpdate:modelValue": ($event) => modal.value = $event,
              width: "504",
              mask: false,
              closable: false,
              "z-index": "3000"
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="modalHeader" data-v-5d9e7782${_scopeId2}><!--[-->`);
                  ssrRenderList(modalHeaderList.value, (item) => {
                    _push3(`<!--[-->`);
                    if (item.type == modalType.value) {
                      _push3(`<div class="modalHeader-item" data-v-5d9e7782${_scopeId2}><img${ssrRenderAttr("src", item.img)} class="item-img" data-v-5d9e7782${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]--><div class="modalHeader-item" data-v-5d9e7782${_scopeId2}><img${ssrRenderAttr("src", _imports_8)} class="pointer refresh" data-v-5d9e7782${_scopeId2}><div class="pointer" data-v-5d9e7782${_scopeId2}>\u91CD\u65B0\u751F\u6210</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "modalHeader" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(modalHeaderList.value, (item) => {
                        return openBlock(), createBlock(Fragment, null, [
                          item.type == modalType.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "modalHeader-item"
                          }, [
                            createVNode("img", {
                              src: item.img,
                              class: "item-img"
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true)
                        ], 64);
                      }), 256)),
                      createVNode("div", { class: "modalHeader-item" }, [
                        createVNode("img", {
                          src: _imports_8,
                          class: "pointer refresh"
                        }),
                        createVNode("div", {
                          class: "pointer",
                          onClick: ($event) => unref(toAction2)(modalType.value)
                        }, "\u91CD\u65B0\u751F\u6210", 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="modalFooter" data-v-5d9e7782${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "modalFooter-btn",
                    loading: btnLoading.value,
                    onClick: ($event) => unref(modelAction)("insertion")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_9)} data-v-5d9e7782${_scopeId3}><div data-v-5d9e7782${_scopeId3}>\u63D2\u5165</div>`);
                      } else {
                        return [
                          createVNode("img", { src: _imports_9 }),
                          createVNode("div", null, "\u63D2\u5165")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "modalFooter-btn",
                    loading: btnLoading.value,
                    onClick: ($event) => unref(modelAction)("switch")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_10)} data-v-5d9e7782${_scopeId3}><div data-v-5d9e7782${_scopeId3}>\u66FF\u6362</div>`);
                      } else {
                        return [
                          createVNode("img", { src: _imports_10 }),
                          createVNode("div", null, "\u66FF\u6362")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "modalFooter-btn",
                    loading: btnLoading.value,
                    onClick: ($event) => unref(modelAction)("copy")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_11)} data-v-5d9e7782${_scopeId3}><div data-v-5d9e7782${_scopeId3}>\u590D\u5236</div>`);
                      } else {
                        return [
                          createVNode("img", { src: _imports_11 }),
                          createVNode("div", null, "\u590D\u5236")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => modal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u5173\u95ED`);
                      } else {
                        return [
                          createTextVNode("\u5173\u95ED")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "modalFooter" }, [
                      createVNode(_component_Button, {
                        class: "modalFooter-btn",
                        loading: btnLoading.value,
                        onClick: ($event) => unref(modelAction)("insertion")
                      }, {
                        default: withCtx(() => [
                          createVNode("img", { src: _imports_9 }),
                          createVNode("div", null, "\u63D2\u5165")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(_component_Button, {
                        class: "modalFooter-btn",
                        loading: btnLoading.value,
                        onClick: ($event) => unref(modelAction)("switch")
                      }, {
                        default: withCtx(() => [
                          createVNode("img", { src: _imports_10 }),
                          createVNode("div", null, "\u66FF\u6362")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(_component_Button, {
                        class: "modalFooter-btn",
                        loading: btnLoading.value,
                        onClick: ($event) => unref(modelAction)("copy")
                      }, {
                        default: withCtx(() => [
                          createVNode("img", { src: _imports_11 }),
                          createVNode("div", null, "\u590D\u5236")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(_component_Button, {
                        onClick: ($event) => modal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5173\u95ED")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(mergeProps({ class: "modal-content" }, ssrGetDirectiveProps(_ctx, _directive_load, modalContentLoading.value)))} data-v-5d9e7782${_scopeId2}>`);
                  _push3(ssrRenderComponent(contentCom, { content: modalContent.value }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    withDirectives((openBlock(), createBlock("div", { class: "modal-content" }, [
                      createVNode(contentCom, { content: modalContent.value }, null, 8, ["content"])
                    ])), [
                      [_directive_load, modalContentLoading.value]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modal2.value,
              "onUpdate:modelValue": ($event) => modal2.value = $event,
              mask: false,
              title: "\u4FEE\u6539\u8BED\u6C14",
              "z-index": "3000"
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    onClick: toConfirmTong
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u8BA4`);
                      } else {
                        return [
                          createTextVNode("\u786E\u8BA4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      type: "primary",
                      onClick: toConfirmTong
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Select, {
                    class: "content-item-select",
                    multiple: "",
                    modelValue: tongStr.value,
                    "onUpdate:modelValue": ($event) => tongStr.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(toneList.value, (item) => {
                          _push4(ssrRenderComponent(_component_Option, {
                            value: item.name,
                            key: item.name
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(toneList.value, (item) => {
                            return openBlock(), createBlock(_component_Option, {
                              value: item.name,
                              key: item.name
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Select, {
                      class: "content-item-select",
                      multiple: "",
                      modelValue: tongStr.value,
                      "onUpdate:modelValue": ($event) => tongStr.value = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(toneList.value, (item) => {
                          return openBlock(), createBlock(_component_Option, {
                            value: item.name,
                            key: item.name
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modal3.value,
              "onUpdate:modelValue": ($event) => modal3.value = $event,
              mask: false,
              title: "\u7FFB\u8BD1"
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    onClick: unref(toConfirmLanguage)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u8BA4`);
                      } else {
                        return [
                          createTextVNode("\u786E\u8BA4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      type: "primary",
                      onClick: unref(toConfirmLanguage)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Select, {
                    class: "content-item-select",
                    modelValue: languageStr.value,
                    "onUpdate:modelValue": ($event) => languageStr.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(languageList.value, (item) => {
                          _push4(ssrRenderComponent(_component_Option, {
                            value: item.cateName,
                            key: item.cateName
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.cateName)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.cateName), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(languageList.value, (item) => {
                            return openBlock(), createBlock(_component_Option, {
                              value: item.cateName,
                              key: item.cateName
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.cateName), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Select, {
                      class: "content-item-select",
                      modelValue: languageStr.value,
                      "onUpdate:modelValue": ($event) => languageStr.value = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(languageList.value, (item) => {
                          return openBlock(), createBlock(_component_Option, {
                            value: item.cateName,
                            key: item.cateName
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.cateName), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_previewImg, {
              ref_key: "previewImgRef",
              ref: previewImgRef
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "create-detail" }, [
                isShow.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "detail-left"
                }, [
                  createVNode("div", { class: "left-top" }, [
                    createVNode("div", { class: "top-title" }, [
                      createVNode("div", null, "\u5386\u53F2\u8BB0\u5F55"),
                      createVNode("img", {
                        src: _imports_1$1,
                        onClick: ($event) => isShow.value = !isShow.value
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode(_component_Button, {
                      type: "primary",
                      class: "top-btn",
                      onClick: toCreate
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u65B0\u5EFA\u6587\u6863")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", {
                    class: "left-content",
                    onScroll: unref(scrollEventFn)
                  }, [
                    createVNode(_component_Spin, {
                      fix: "",
                      show: loading.value
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_svga, {
                            svgaImg: unref(lodingData),
                            canvasName: "loading1",
                            width: 100
                          }, null, 8, ["svgaImg"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["show"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(hisList.value, (item) => {
                      return openBlock(), createBlock("div", { class: "content-item" }, [
                        createVNode("div", {
                          class: ["items", selectCode.value == item.code ? "active" : ""],
                          onClick: ($event) => chooseItem(item)
                        }, [
                          item.content ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "items-title text-hide"
                          }, toDisplayString(item.content), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "items-sub" }, [
                            createVNode("div", null, toDisplayString(item.gmtCreate), 1),
                            createVNode("img", {
                              class: "sub-delete",
                              onClick: withModifiers(($event) => toDelete(item), ["stop"]),
                              src: _imports_1
                            }, null, 8, ["onClick"])
                          ])
                        ], 10, ["onClick"])
                      ]);
                    }), 256))
                  ], 40, ["onScroll"])
                ])) : createCommentVNode("", true),
                !isShow.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "left-tag"
                }, [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_Tooltip, {
                        content: "\u521B\u5EFA\u65B0\u6587\u6863",
                        placement: "right"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "chatOperation-tag",
                            onClick: toCreate
                          }, [
                            createVNode("img", {
                              style: { "cursor": "pointer", "width": "32px", "height": "32px" },
                              src: _imports_0
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Tooltip, {
                        content: "\u5386\u53F2\u8BB0\u5F55",
                        placement: "right"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "chatOperation-tag",
                            onClick: ($event) => isShow.value = !isShow.value
                          }, [
                            createVNode("img", {
                              style: { "cursor": "pointer", "width": "19px", "height": "19px" },
                              src: _imports_0$1
                            })
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode("div", {
                  class: ["detail-right", isShow.value ? "isShow" : ""]
                }, [
                  pageState.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "right-top" }, [
                      createVNode("div", { class: "top-btn" }, [
                        unref(routing).clientType == "TEAM" ? (openBlock(), createBlock(_component_Button, {
                          key: 0,
                          class: "btn",
                          type: "primary",
                          disabled: !isEditState.value,
                          onClick: toTrain
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u8BAD\u7EC3")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : createCommentVNode("", true),
                        createVNode(_component_Poptip, {
                          placement: "bottom",
                          modelValue: popVisible.value,
                          "onUpdate:modelValue": ($event) => popVisible.value = $event,
                          transfer: false,
                          "popper-class": "popperClass2"
                        }, {
                          content: withCtx(() => [
                            exportLoading.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "popperClass2-item"
                            }, [
                              createVNode("div", { class: "spinnerCom fl mr-10" }),
                              createTextVNode(" \u4E0B\u8F7D\u4E2D... ")
                            ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createVNode("div", {
                                class: "popperClass2-item",
                                onClick: ($event) => unref(toDownload)("DOCX")
                              }, "\u4E0B\u8F7Dword ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "popperClass2-item",
                                onClick: ($event) => unref(toDownload)("PDF")
                              }, " \u4E0B\u8F7DPDF ", 8, ["onClick"])
                            ], 64))
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              class: "btn",
                              disabled: !isEditState.value,
                              loading: btnLoading.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u4E0B\u8F7D")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_Button, {
                          type: "primary",
                          class: "btn",
                          onClick: unref(saveContent),
                          disabled: !isEditState.value,
                          loading: loading.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u4FDD\u5B58")
                          ]),
                          _: 1
                        }, 8, ["onClick", "disabled", "loading"])
                      ])
                    ]),
                    createVNode("div", { class: "right-content" }, [
                      createVNode("div", {
                        class: ["content", selectType.value ? "content2" : ""]
                      }, [
                        createVNode(_component_Spin, {
                          fix: "",
                          show: pageLoading.value
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(_component_svga, {
                                svgaImg: unref(lodingData),
                                canvasName: "loading2",
                                width: 100
                              }, null, 8, ["svgaImg"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["show"]),
                        createVNode("div", {
                          ref_key: "divRef",
                          ref: divRef,
                          id: "markdown-content",
                          class: "divRef",
                          style: { "height": "100%" }
                        }, null, 512)
                      ], 2),
                      selectType.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "content-edit"
                      }, [
                        createVNode("div", {
                          class: "packup",
                          onClick: ($event) => selectType.value = ""
                        }, [
                          createVNode("img", { src: _imports_4 })
                        ], 8, ["onClick"]),
                        selectType.value == "FULL_TEXT_TRANSLATION" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "modifcation"
                        }, [
                          modifcationType.value == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", { class: "modifcation-content" }, [
                              createVNode("div", { class: "modifcation-content-title" }, "\u5168\u6587\u7FFB\u8BD1"),
                              createVNode("div", { class: "modifcation-content-item" }, [
                                createVNode("div", null, [
                                  createTextVNode("\u9009\u62E9\u7FFB\u8BD1\u8BED\u8A00"),
                                  createVNode("span", { class: "require" }, "*")
                                ]),
                                createVNode(_component_Select, {
                                  class: "content-item-select",
                                  "transfer-class-name": "modifcation-content-item-select",
                                  modelValue: languageStr.value,
                                  "onUpdate:modelValue": ($event) => languageStr.value = $event,
                                  transfer: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(languageList.value, (item) => {
                                      return openBlock(), createBlock(_component_Option, {
                                        value: item.cateName,
                                        key: item.cateName
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.cateName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "modifcation-action" }, [
                              createVNode(_component_electricCom, {
                                type: "CONTINUED_WRITING",
                                data: electricity.value
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_Button, {
                                    type: "primary",
                                    class: "modifcation-action-btn",
                                    onClick: unref(createLanguage),
                                    loading: btnLoading.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u7ACB\u5373\u7FFB\u8BD1")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "loading"])
                                ]),
                                _: 1
                              }, 8, ["data"])
                            ])
                          ], 64)) : createCommentVNode("", true),
                          modifcationType.value == 2 ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "continue"
                          }, [
                            createVNode("div", { class: "continue-title" }, [
                              createVNode(_component_Button, {
                                loading: divLoading.value,
                                onClick: ($event) => modifcationType.value = 1
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u8FD4\u56DE")
                                ]),
                                _: 1
                              }, 8, ["loading", "onClick"])
                            ]),
                            createVNode("div", { class: "continue-content" }, [
                              createVNode("div", { style: { "padding": "0 16px", "height": "100%" } }, [
                                isEditState2.value ? (openBlock(), createBlock(_component_Input, {
                                  key: 0,
                                  type: "textarea",
                                  modelValue: continueContent.value,
                                  "onUpdate:modelValue": ($event) => continueContent.value = $event,
                                  class: "textarea"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(contentCom, {
                                  key: 1,
                                  content: continueContent.value
                                }, null, 8, ["content"]))
                              ])
                            ]),
                            createVNode("div", { class: "continue-bottom" }, [
                              createVNode("div", { class: "bottom-left" }, "\u5B57\u6570\uFF1A" + toDisplayString(continueContent.value.length), 1),
                              createVNode("div", { class: "bottom-right" }, [
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: ($event) => _ctx.$CopyTex(continueContent.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u590D\u5236")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"]),
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: unref(insertContinue)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u63D2\u5165\u6B63\u6587")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"]),
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: ($event) => isEditState2.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u7F16\u8F91")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"])
                              ])
                            ])
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        selectType.value == "TONE_MODIFCATION" ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "modifcation"
                        }, [
                          modifcationType.value == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", { class: "modifcation-content" }, [
                              createVNode("div", { class: "modifcation-content-title" }, "\u8BED\u6C14\u4FEE\u6539"),
                              createVNode("div", { class: "modifcation-content-item" }, [
                                createVNode("div", null, [
                                  createTextVNode("\u9009\u62E9\u8BED\u6C14"),
                                  createVNode("span", { class: "require" }, "*")
                                ]),
                                createVNode(_component_Select, {
                                  class: "content-item-select",
                                  multiple: "",
                                  modelValue: tongStr.value,
                                  "onUpdate:modelValue": ($event) => tongStr.value = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(toneList.value, (item) => {
                                      return openBlock(), createBlock(_component_Option, {
                                        value: item.name,
                                        key: item.name
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "modifcation-action" }, [
                              createVNode(_component_electricCom, {
                                type: "CONTINUED_WRITING",
                                data: electricity.value
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_Button, {
                                    type: "primary",
                                    class: "modifcation-action-btn",
                                    onClick: unref(createTone),
                                    loading: btnLoading.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u7ACB\u5373\u4FEE\u6539")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "loading"])
                                ]),
                                _: 1
                              }, 8, ["data"])
                            ])
                          ], 64)) : createCommentVNode("", true),
                          modifcationType.value == 2 ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "continue"
                          }, [
                            createVNode("div", { class: "continue-title" }, [
                              createVNode(_component_Button, {
                                loading: divLoading.value,
                                onClick: ($event) => modifcationType.value = 1
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u8FD4\u56DE")
                                ]),
                                _: 1
                              }, 8, ["loading", "onClick"])
                            ]),
                            createVNode("div", { class: "continue-content" }, [
                              createVNode("div", { style: { "padding": "0 16px", "height": "100%" } }, [
                                isEditState2.value ? (openBlock(), createBlock(_component_Input, {
                                  key: 0,
                                  type: "textarea",
                                  modelValue: continueContent.value,
                                  "onUpdate:modelValue": ($event) => continueContent.value = $event,
                                  class: "textarea"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(contentCom, {
                                  key: 1,
                                  content: continueContent.value
                                }, null, 8, ["content"]))
                              ])
                            ]),
                            createVNode("div", { class: "continue-bottom" }, [
                              createVNode("div", { class: "bottom-left" }, "\u5B57\u6570\uFF1A" + toDisplayString(continueContent.value.length), 1),
                              createVNode("div", { class: "bottom-right" }, [
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: ($event) => _ctx.$CopyTex(continueContent.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u590D\u5236")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"]),
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: unref(insertContinue)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u63D2\u5165\u6B63\u6587")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"]),
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: ($event) => isEditState2.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u7F16\u8F91")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"])
                              ])
                            ])
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        selectType.value == "AI_INSPIRATION" ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "inspiration"
                        }, [
                          newsPageType.value == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", { class: "inspiration-title" }, [
                              createVNode("div", null, "AI\u7075\u611F"),
                              createVNode("div", { class: "title-tab" }, [
                                createVNode("div", {
                                  class: ["tab-item", newsParams.value.newsType == 1 ? "tab-active" : ""],
                                  onClick: ($event) => unref(chooseNews)(1)
                                }, "\u7F51\u9875\u70ED\u699C", 10, ["onClick"]),
                                createVNode("div", {
                                  class: ["tab-item", newsParams.value.newsType == 2 ? "tab-active" : ""],
                                  onClick: ($event) => unref(chooseNews)(2)
                                }, "\u5FAE\u4FE1\u70ED\u699C", 10, ["onClick"]),
                                createVNode("div", {
                                  class: ["tab-item", newsParams.value.newsType == 5 ? "tab-active" : ""],
                                  onClick: ($event) => unref(chooseNews)(5)
                                }, "\u5934\u6761\u70ED\u699C", 10, ["onClick"]),
                                createVNode("div", {
                                  class: ["tab-item", newsParams.value.newsType == 6 ? "tab-active" : ""],
                                  onClick: ($event) => unref(chooseNews)(6)
                                }, "\u6296\u97F3\u70ED\u699C", 10, ["onClick"])
                              ])
                            ]),
                            withDirectives((openBlock(), createBlock("div", { class: "inspiration-news" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(newsList.value, (item, i) => {
                                return openBlock(), createBlock("div", {
                                  class: ["news-item", selectNewsIndex.value == i ? "news-active" : ""]
                                }, [
                                  createVNode("div", {
                                    class: "news-item-title",
                                    onClick: ($event) => selectNewsIndex.value = i
                                  }, [
                                    createVNode("div", { class: "news-tag" }, toDisplayString(i + 1), 1),
                                    createVNode("div", { class: "news-title" }, [
                                      createVNode(_component_Tooltip, {
                                        content: item.newsTitle,
                                        "max-width": "200"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text-hide",
                                            style: { "max-width": "400px" }
                                          }, toDisplayString(item.newsTitle), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["content"])
                                    ])
                                  ], 8, ["onClick"]),
                                  createVNode("div", { class: "news-item-content" }, [
                                    createVNode("div", {
                                      onClick: ($event) => selectNewsIndex.value = i
                                    }, toDisplayString(item.newsDigest), 9, ["onClick"]),
                                    selectNewsIndex.value == i && item.newsUrl ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "item-content-bottom"
                                    }, [
                                      createVNode("div", {
                                        class: "btn-detail",
                                        onClick: ($event) => toJump(item.newsUrl)
                                      }, "\u67E5\u770B\u8BE6\u60C5", 8, ["onClick"]),
                                      createVNode(_component_electricCom, {
                                        type: "CONTINUED_WRITING",
                                        data: electricity.value
                                      }, {
                                        content: withCtx(() => [
                                          createVNode("div", {
                                            class: "btn-extract",
                                            onClick: ($event) => unref(toNewsCreate)(item, 1)
                                          }, [
                                            createVNode("img", { src: glistenImg }),
                                            createVNode("div", null, "AI\u8981\u70B9\u63D0\u70BC")
                                          ], 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1032, ["data"]),
                                      createVNode(_component_electricCom, {
                                        type: "CONTINUED_WRITING",
                                        data: electricity.value
                                      }, {
                                        content: withCtx(() => [
                                          createVNode("div", {
                                            class: "btn-unite",
                                            onClick: ($event) => unref(toNewsCreate)(item, 2)
                                          }, "\u7ED3\u5408\u8BE5\u70ED\u70B9\uFF0C\u751F\u6210\u8BDD\u9898", 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1032, ["data"])
                                    ])) : createCommentVNode("", true)
                                  ])
                                ], 2);
                              }), 256))
                            ])), [
                              [_directive_load, divLoading.value]
                            ])
                          ], 64)) : createCommentVNode("", true),
                          newsPageType.value == 2 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("div", {
                              class: "inspiration-title",
                              style: { "padding-bottom": "0", "height": "111px" }
                            }, [
                              createVNode("div", {
                                class: "news-back",
                                onClick: ($event) => newsPageType.value = 1
                              }, [
                                createVNode(_component_Icon, {
                                  type: "ios-arrow-back",
                                  size: "20",
                                  style: { "margin-right": "3px" }
                                }),
                                createVNode("div", null, "\u8FD4\u56DE")
                              ], 8, ["onClick"]),
                              createVNode("div", { class: "news-sub" }, "\u5DF2\u4E3A\u60A8\u751F\u6210\u4EE5\u4E0B\u8BDD\u9898")
                            ]),
                            withDirectives((openBlock(), createBlock("div", {
                              class: "inspiration-news",
                              style: { "height": "calc(100% - 111px)" }
                            }, [
                              createVNode("div", {
                                class: ["news-item", selectNewsIndex.value == 0 ? "news-active" : ""],
                                style: { "margin-top": "0" }
                              }, [
                                createVNode("div", {
                                  class: "news-item-content",
                                  onClick: ($event) => selectNewsIndex.value = 0
                                }, [
                                  createVNode("div", null, [
                                    createVNode(contentCom, { content: contentComContent.value }, null, 8, ["content"])
                                  ]),
                                  createVNode("div", { class: "item-content-bottom" }, [
                                    createVNode(_component_electricCom, {
                                      type: "CONTINUED_WRITING",
                                      data: electricity.value
                                    }, {
                                      content: withCtx(() => [
                                        createVNode("div", {
                                          class: "btn-create",
                                          onClick: ($event) => unref(toNewsCreate)("", 3)
                                        }, "\u5199\u6210\u6587\u7AE0", 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }, 8, ["data"])
                                  ])
                                ], 8, ["onClick"])
                              ], 2)
                            ])), [
                              [_directive_load, divLoading.value]
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        selectType.value == "AI_MAPPING" ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "mapping"
                        }, [
                          createVNode("div", { class: "mapping-top" }, [
                            createVNode("div", { class: "mapping-top-tab" }, [
                              createVNode("div", { class: "tab-btn btn-active" }, "\u667A\u80FD\u914D\u56FE")
                            ]),
                            createVNode("div", { class: "mapping-top-input" }, [
                              createVNode(_component_Input, {
                                type: "textarea",
                                modelValue: drawParams.value.content,
                                "onUpdate:modelValue": ($event) => drawParams.value.content = $event,
                                rows: 6,
                                class: "textarea",
                                placeholder: "\u8F93\u5165\u4E00\u6BB5\u8BDD\u6216\u77ED\u8BED\uFF0C\u8BCD\u6C47\uFF0C\u63CF\u8FF0\u60A8\u7684\u521B\u610F"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mapping-top-action" }),
                            createVNode("div", { class: "toMapping" }, [
                              createVNode(_component_Tooltip, {
                                transfer: true,
                                placement: "top"
                              }, {
                                content: withCtx(() => [
                                  createVNode("div", { class: "electric" }, [
                                    createVNode("div", null, "\u7535\u91CF"),
                                    createVNode("div", { style: { "margin-left": "4px", "margin-right": "2px" } }, "-" + toDisplayString(robotDate.value.consumeEnergy), 1),
                                    robotDate.value.originalEnergy ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "original"
                                    }, "(" + toDisplayString(robotDate.value.originalEnergy) + ")", 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock("div", {
                                    class: "mapping-btn",
                                    onClick: toDraw
                                  }, [
                                    createTextVNode("\u5F00\u59CB\u914D\u56FE")
                                  ])), [
                                    [_directive_load, btnLoading.value]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "mapping-sub" }, "\u4EE5\u4E0B\u4E3A\u914D\u56FE\u7ED3\u679C")
                          ]),
                          createVNode("div", { class: "mapping-bottom" }, [
                            createVNode("div", { class: "mapping-bottom-list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(drawImgList.value, (item) => {
                                return openBlock(), createBlock("div", { class: "mapping-item" }, [
                                  createVNode("img", {
                                    src: item.content,
                                    class: "mapping-item-img"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "mapping-item-shadow" }, [
                                    createVNode("div", {
                                      class: "insertion-btn",
                                      onClick: ($event) => unref(toInsertion)(item)
                                    }, "\u63D2\u5165\u6B63\u6587", 8, ["onClick"])
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        selectType.value == "ONE_CLICK_CONTINUATION" || selectType.value == "FULL_TEXT_POLISHING" || selectType.value == "FULL_TEXT_SUMMARY" || selectType.value == "FULL_TEXT_EXPANSION" ? withDirectives((openBlock(), createBlock("div", {
                          key: 4,
                          class: "continue"
                        }, [
                          _ctx.$isEmpty(continueContent.value) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "stimulate"
                          }, [
                            createVNode("div", { class: "stimulate-name" }, [
                              selectType.value == "ONE_CLICK_CONTINUATION" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" \u4E00\u952E\u7EED\u5199 ")
                              ], 64)) : createCommentVNode("", true),
                              selectType.value == "FULL_TEXT_POLISHING" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" \u5168\u6587\u6DA6\u8272 ")
                              ], 64)) : createCommentVNode("", true),
                              selectType.value == "FULL_TEXT_SUMMARY" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                createTextVNode(" \u603B\u7ED3\u6458\u8981 ")
                              ], 64)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "stimulate-content" }, [
                              createVNode("img", {
                                class: "stimulate-content-bg",
                                src: _imports_6
                              }),
                              createVNode("div", { class: "stimulate-content-con" }, [
                                createVNode("div", {
                                  class: "stimulate-btn",
                                  onClick: unref(toAction3)
                                }, [
                                  createVNode(_component_electricCom, {
                                    type: "CONTINUED_WRITING",
                                    data: electricity.value
                                  }, {
                                    content: withCtx(() => [
                                      createVNode("div", null, [
                                        selectType.value == "ONE_CLICK_CONTINUATION" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createTextVNode(" \u4E00\u952E\u7EED\u5199 ")
                                        ], 64)) : createCommentVNode("", true),
                                        selectType.value == "FULL_TEXT_POLISHING" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(" \u5168\u6587\u6DA6\u8272 ")
                                        ], 64)) : createCommentVNode("", true),
                                        selectType.value == "FULL_TEXT_SUMMARY" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                          createTextVNode(" \u603B\u7ED3\u6458\u8981 ")
                                        ], 64)) : createCommentVNode("", true),
                                        selectType.value == "FULL_TEXT_EXPANSION" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                          createTextVNode(" \u5168\u6587\u6269\u5199 ")
                                        ], 64)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["data"])
                                ], 8, ["onClick"]),
                                createVNode("div", { class: "stimulate-sub" }, [
                                  createTextVNode("\u70B9\u51FB\u6B64\u6309\u94AE\u8FDB\u884C "),
                                  selectType.value == "ONE_CLICK_CONTINUATION" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" \u4E00\u952E\u7EED\u5199 ")
                                  ], 64)) : createCommentVNode("", true),
                                  selectType.value == "FULL_TEXT_POLISHING" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" \u5168\u6587\u6DA6\u8272 ")
                                  ], 64)) : createCommentVNode("", true),
                                  selectType.value == "FULL_TEXT_SUMMARY" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                    createTextVNode(" \u603B\u7ED3\u6458\u8981 ")
                                  ], 64)) : createCommentVNode("", true),
                                  selectType.value == "FULL_TEXT_EXPANSION" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                    createTextVNode(" \u5168\u6587\u6269\u5199 ")
                                  ], 64)) : createCommentVNode("", true)
                                ]),
                                createVNode("img", {
                                  class: "img-bg",
                                  src: _imports_7
                                })
                              ])
                            ])
                          ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("div", { class: "continue-title" }, [
                              createVNode("div", null, "\u4EE5\u4E0B\u662F\u5185\u5BB9"),
                              createVNode(_component_Button, {
                                onClick: unref(toAction3),
                                loading: divLoading.value
                              }, {
                                default: withCtx(() => [
                                  selectType.value == "ONE_CLICK_CONTINUATION" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" \u91CD\u65B0\u7EED\u5199 ")
                                  ], 64)) : createCommentVNode("", true),
                                  selectType.value == "FULL_TEXT_POLISHING" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" \u91CD\u65B0\u6DA6\u8272 ")
                                  ], 64)) : createCommentVNode("", true),
                                  selectType.value == "FULL_TEXT_SUMMARY" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                    createTextVNode(" \u91CD\u65B0\u603B\u7ED3 ")
                                  ], 64)) : createCommentVNode("", true),
                                  selectType.value == "FULL_TEXT_EXPANSION" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                    createTextVNode(" \u5168\u6587\u6269\u5199 ")
                                  ], 64)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick", "loading"])
                            ]),
                            createVNode("div", { class: "continue-content" }, [
                              createVNode("div", { style: { "padding": "0 16px", "height": "100%" } }, [
                                isEditState2.value ? (openBlock(), createBlock(_component_Input, {
                                  key: 0,
                                  type: "textarea",
                                  modelValue: continueContent.value,
                                  "onUpdate:modelValue": ($event) => continueContent.value = $event,
                                  class: "textarea"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(contentCom, {
                                  key: 1,
                                  content: continueContent.value
                                }, null, 8, ["content"]))
                              ])
                            ]),
                            createVNode("div", { class: "continue-bottom" }, [
                              createVNode("div", { class: "bottom-left" }, "\u5B57\u6570\uFF1A" + toDisplayString(continueContent.value.length), 1),
                              createVNode("div", { class: "bottom-right" }, [
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: ($event) => _ctx.$CopyTex(continueContent.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u590D\u5236")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"]),
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: unref(insertContinue)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u63D2\u5165\u6B63\u6587")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"]),
                                createVNode(_component_Button, {
                                  class: "btn",
                                  loading: btnLoading.value,
                                  onClick: ($event) => isEditState2.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u7F16\u8F91")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"])
                              ])
                            ])
                          ], 64))
                        ])), [
                          [_directive_load, divLoading.value]
                        ]) : createCommentVNode("", true),
                        selectType.value == "AI_ASSISTED_WRITING" ? (openBlock(), createBlock("div", {
                          key: 5,
                          class: "assisted"
                        }, [
                          createVNode("div", { class: "assisted-title" }, "\u5E2E\u4F60\u5199"),
                          createVNode("div", { class: "assisted-content" }, [
                            createVNode(recordCom, {
                              ref: "recordComRef",
                              operation: false,
                              isCreate: true,
                              onCreateAction: createAction,
                              chatList: chatList.value,
                              onGetContent: getContent
                            }, null, 8, ["chatList"])
                          ]),
                          createVNode("div", { class: "assisted-input" }, [
                            createVNode(inputCom, {
                              isUoload: false,
                              consumeEnergy: continuedWriting.value,
                              content: assistedContent.value,
                              "onUpdate:content": ($event) => assistedContent.value = $event,
                              onSubmit
                            }, null, 8, ["consumeEnergy", "content", "onUpdate:content"])
                          ])
                        ])) : createCommentVNode("", true),
                        selectType.value == "TEMPLATE_WRITTING" ? (openBlock(), createBlock(templateCenter, {
                          key: 6,
                          onInsertion: unref(templateCenterToInsertion)
                        }, null, 8, ["onInsertion"])) : createCommentVNode("", true),
                        selectType.value == "HIGH_LEVEL_WRITTING" ? (openBlock(), createBlock(highLevelWriting, {
                          key: 7,
                          ref_key: "highLevelWritingRef",
                          ref: highLevelWritingRef,
                          onSubmit: highLevelWritingSubmit,
                          electricity: electricity.value
                        }, null, 8, ["electricity"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "content-right" }, [
                        createVNode("div", { class: "right-list" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(actionList.value, (item) => {
                            return openBlock(), createBlock(Fragment, null, [
                              item.isShow ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ["list-item", selectType.value == item.type ? "active" : ""],
                                onClick: ($event) => unref(toAction)(item)
                              }, [
                                createVNode("img", {
                                  src: item.logo
                                }, null, 8, ["src"]),
                                createVNode("div", null, toDisplayString(item.name), 1)
                              ], 10, ["onClick"])) : createCommentVNode("", true)
                            ], 64);
                          }), 256))
                        ])
                      ]),
                      createVNode("div", {
                        class: ["markmap", outputPattern.value == "MIND_MAPPING" && content.value ? "" : "markmapFixed"]
                      }, [
                        createVNode("div", { class: "markmap-action" }, [
                          createVNode(_component_Button, {
                            type: "primary",
                            onClick: ($event) => (cMarkmapRef.value.previewImg(), isPreviewLoading.value = true),
                            loading: isPreviewLoading.value,
                            disabled: !isEditState.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u9884\u89C8\u601D\u7EF4\u5BFC\u56FE")
                            ]),
                            _: 1
                          }, 8, ["onClick", "loading", "disabled"])
                        ]),
                        createVNode("div", { class: "markmap-content" }, [
                          cMarkmapState.value ? (openBlock(), createBlock(_component_cMarkmap, {
                            key: 0,
                            ref_key: "cMarkmapRef",
                            ref: cMarkmapRef,
                            content: content.value,
                            onGetImg: getImg
                          }, null, 8, ["content"])) : createCommentVNode("", true)
                        ])
                      ], 2)
                    ])
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "incompatible"
                  }, [
                    createVNode("div", { class: "incompatible-top" }, "\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u66F4\u65B0\u7248\u672C"),
                    createVNode("div", { class: "incompatible-content" }, toDisplayString(content.value), 1)
                  ]))
                ], 2),
                createVNode(_component_sPrompt, {
                  ref_key: "sPromptRef",
                  ref: sPromptRef,
                  icoShow: true,
                  content: "\u662F\u5426\u5220\u9664\u8BE5\u8BB0\u5F55\uFF1F",
                  onOk: ($event) => toDelete("")
                }, null, 8, ["onOk"]),
                createVNode(_component_trainModal, {
                  ref_key: "trainModalRef",
                  ref: trainModalRef
                }, null, 512),
                createVNode(_component_Modal, {
                  modelValue: modal.value,
                  "onUpdate:modelValue": ($event) => modal.value = $event,
                  width: "504",
                  mask: false,
                  closable: false,
                  "z-index": "3000"
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "modalHeader" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(modalHeaderList.value, (item) => {
                        return openBlock(), createBlock(Fragment, null, [
                          item.type == modalType.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "modalHeader-item"
                          }, [
                            createVNode("img", {
                              src: item.img,
                              class: "item-img"
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true)
                        ], 64);
                      }), 256)),
                      createVNode("div", { class: "modalHeader-item" }, [
                        createVNode("img", {
                          src: _imports_8,
                          class: "pointer refresh"
                        }),
                        createVNode("div", {
                          class: "pointer",
                          onClick: ($event) => unref(toAction2)(modalType.value)
                        }, "\u91CD\u65B0\u751F\u6210", 8, ["onClick"])
                      ])
                    ])
                  ]),
                  footer: withCtx(() => [
                    createVNode("div", { class: "modalFooter" }, [
                      createVNode(_component_Button, {
                        class: "modalFooter-btn",
                        loading: btnLoading.value,
                        onClick: ($event) => unref(modelAction)("insertion")
                      }, {
                        default: withCtx(() => [
                          createVNode("img", { src: _imports_9 }),
                          createVNode("div", null, "\u63D2\u5165")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(_component_Button, {
                        class: "modalFooter-btn",
                        loading: btnLoading.value,
                        onClick: ($event) => unref(modelAction)("switch")
                      }, {
                        default: withCtx(() => [
                          createVNode("img", { src: _imports_10 }),
                          createVNode("div", null, "\u66FF\u6362")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(_component_Button, {
                        class: "modalFooter-btn",
                        loading: btnLoading.value,
                        onClick: ($event) => unref(modelAction)("copy")
                      }, {
                        default: withCtx(() => [
                          createVNode("img", { src: _imports_11 }),
                          createVNode("div", null, "\u590D\u5236")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(_component_Button, {
                        onClick: ($event) => modal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5173\u95ED")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("div", { class: "modal-content" }, [
                      createVNode(contentCom, { content: modalContent.value }, null, 8, ["content"])
                    ])), [
                      [_directive_load, modalContentLoading.value]
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_Modal, {
                  modelValue: modal2.value,
                  "onUpdate:modelValue": ($event) => modal2.value = $event,
                  mask: false,
                  title: "\u4FEE\u6539\u8BED\u6C14",
                  "z-index": "3000"
                }, {
                  footer: withCtx(() => [
                    createVNode(_component_Button, {
                      type: "primary",
                      onClick: toConfirmTong
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4")
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_Select, {
                      class: "content-item-select",
                      multiple: "",
                      modelValue: tongStr.value,
                      "onUpdate:modelValue": ($event) => tongStr.value = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(toneList.value, (item) => {
                          return openBlock(), createBlock(_component_Option, {
                            value: item.name,
                            key: item.name
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_Modal, {
                  modelValue: modal3.value,
                  "onUpdate:modelValue": ($event) => modal3.value = $event,
                  mask: false,
                  title: "\u7FFB\u8BD1"
                }, {
                  footer: withCtx(() => [
                    createVNode(_component_Button, {
                      type: "primary",
                      onClick: unref(toConfirmLanguage)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u8BA4")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_Select, {
                      class: "content-item-select",
                      modelValue: languageStr.value,
                      "onUpdate:modelValue": ($event) => languageStr.value = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(languageList.value, (item) => {
                          return openBlock(), createBlock(_component_Option, {
                            value: item.cateName,
                            key: item.cateName
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.cateName), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode(_component_previewImg, {
                ref_key: "previewImgRef",
                ref: previewImgRef
              }, null, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/creative/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d9e7782"]]);

export { detail as default };
//# sourceMappingURL=detail-b099c9be.mjs.map
