import { a as _export_sfc, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './close-e8808509.mjs';
import { n as nodata } from './nodata-3988aadd.mjs';
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
import '../../paths.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA59JREFUWEftl19IU1Ecx79nMzUsW0SKZDaLHvpn+lI0vLUeIgqzRhCVhc4VM4T+EVkPlpVEQsYgosyWk7KMoBlaEYSFA5sv+YfKp1IzMPWhFS11eu+Jo17b9G7r5pYVO4/33nPu535+v3Pu70fwlw/yl/MhBDjZCP37BrXaHLUgDB6mFAsAqCZrRJxPCJpdrmkmu/1au681fRpcu9aQSSlMEVEKVXRsGCJmKALFh48t/cNrEYKsujpzubeFvQIyczw/2DZ3UTh2FMUhIipwcAzma/cQHp7tRu97F3hekVJfX9okBekVkOMMlujYsEwGx+wFYww4BdzI7MSAU7DYbGa9LMDU1H2NizXTk9NPxQaDbWzNp8W9ePPsW7vNZk6UBchx2W3LNsxUbzw69/8AbKhpxeq0JRM+5rWtDTEJsxGzQPoA+CMGK8/X4t75WmQXbcaWXM0YZEN1Ky7sqsCqtCU4WZkhGYmgA7a1dOGo5gpiElQoeXvMA8K49CJ6PjhQ8ubY1BnM32QGC+O5JwYs537mee3tV7ic8wDrM1JwsGS71zwOqsGejs8wLiuWtMesMruX6nORmBQ3NYBsY1zYWYHEFXE4MZpjbDM4v/Rjz7zCYSgWXjamZJNUX6nHzbzHHnas3wohmnW/MT4FxHtBDbG4e91BQoCijV/5k7BzrqHmrUeI2Y5lOWg+/sjjOjsfpTZLUEMciH9gCHCyFllN+N7+vamuzpwis5rRWyKiwjIN5fMRGeBiVQT50j2E+3ldrHiVXw9qNPuTlUqhkVXU6fmxmBXgorXfKQzD9b5zYXCQT7TbLZK9ic+ehOOyswBSxr44Pily5I+wMBxa4xzJyHa29OFlhcNv1Fkl/fXTEAacvANQHrHZSi3eJvltO7XaLLUgKA8LAlYSguT4pEgVawPchwg20ghRB6VEsr9wm+NQKNDhcvEmb+bEZ/0CuoNwnOF5fFKkVgQcB9ZOCCnw1aH5VSvxwG8BrslQDYdy1NgEMGtZmQro9yihdfoDPvvf3w7xOINWANtGrtExMOutUi0UdBshWAdA7aPBZwnaRCmaIZAq3d79L/xZlWWQ5SPPK08TghdiKKvulFgBMgrt73We9ymlZ3QZxgJfs2QBSi1krbhuIgSH5KGBAnBQ0LO63UZTUAHZ4ta7V9UQoCVEsRUgKoCqAcJC7TZoO0AcoLSRKEmz0DetXKfX+z2TJm1QpjnZj4cAZSsbNyFk8L83+AO3AP04NAUg5wAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAYAAADAHFVeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUXSURBVHgBvVY9bxxVFL3va+bNfsQTRZRImwaQKGIQFBRI60gU0JAABV1M/kDsPwA2LUWcDkHhpKBCilIhEEIOHV/SroDeKRESsJjY2Z15H5z73mxIkAmmYayn2Xnz7j3nnnPfGxP9j5c4bnIyvlDXc706NG7UN0RW0VR8fmv6qEQ/PDUen9LqnNXidFXIqZG9afXVrTv/CLY3Xq/t3F0ZBL9xRrd1XweyJVGhIr9GYFwTnz6cYDJ6adWTu1oZGg81Ub+U1OuXVPQsSWt2SFXb4tb1Ga+VDwCNpIt7hXdbg9DUGjSE0SQ1MvBQaoSH/fjKG+8sY/affPmKlHJiZBwXMZDBKJQgYwsAMctygwztxQvrNa/X90v0tGtav1rNG1ImkhCahFYkSiwx4BQCkfdEzm9FyNze9fTTUdhQzhETswIqgFxZWRRjiaoKYIbjVkm0u4C4mGTce3F9XYa42zu6RytNQ5UVZCtNVV+THZakmKXAUg/Ae3MKv/xB/rChnxeSDudzMmJBQyAOTlVU1kMSwwFRrwc1ENO2eSyO1lJlItKrCsxRGX4jYRC4w6c0Omu1ycGeHw8JhaSCNSZgE5VQoKhKKFGgIgy+88WKLBaIi5eyZyKOJSRCdZ2mSBqRlYEhU5KPg3heKsyDDFjgFxkQYJ/KXpl9MgDRKpNksg2qglq4j7NnUdTSwyckjCo3aGRg5zuf2gxiVAcoieE0A+G5QBXKmAyiZAZpAdCC6HyRx6IZZRkDmoFaDObaSScyYGRmMJ4k6+dShQJgESC8Iww6tSgkybSmq4hJuiYDog8IvnJ1HVh5B+EjCSMEDGQTKTCuZK3BqpPExexnYFIFMUX2UQFISMgH0tRirunUWGDMubpk9DTL6M2XsGfE7gv2KgHBFQAFxXdOohIQsuKdSVUqdk5jT/FcAurIcdcy4AJA99ocp3UGE626HqO4FBgMcqYqQicjqoiOHWIQ1XUYhxmogKoUqmJijnKnLpsqgfm8Nu0acSOBORoCdTELkuoQERza3IyQMwjuO5n9DDJ7ksCKpLZkAl5kgsyQG6sJyV7yenkg7pvpx7dT669Nt2bBq2uOLJqvQA+w/gZsNUANBYeEPFimVv5VGYAEngXW0QLvF8g8Z7BujcBWIOw9KrYfOhsbrXd8NPseC1y0UMOkgIBkoYGUSJAGGiBiPrJvvAZtElue5zWZXBQgK2wCIlHsi+8/uvEQGFfnpLzcYiHOBGhcIGGZq2syIDmZB3djREIJ1vAzzwE4ciU4E6FQhMwRxNGl55cY98H4euHHrdutstsNAttQdtVBVpbS56rIq+wFmQzIVeSzpJPN3gfEN2BbTN+/s8x/7Mfzm6ff2z0VW3wXcCjLgFQ4mtANSsb0Ox9nIt+D644ymdMJ3vCSnJA7drq1+WBefRzYodGb5Mw5GdQzCm1lAYS+TFsh4Lfo/iID8m4DocjdmIAUHdnhZOXrzc2/55XHga1NN2eHOp6fmf7k91ihwSAlDA+QKbLp7AcVWbblHN571aPZ4LHJr1V9/ri8x8q4vPZWr9YDsjfr4NZWfEs9nCaad51YsuTwkLZeg9P+YFjvzaN77eztt2b/GWx5fffsB1eH3m+cDp768EmzlEJ2wRGylfGgP7j2+Bdvbj4qz4nA+Pr2uQ+3Bo7ePhOC6PPnBSc/l3i3b3876Nl3z372+s6/5TgxGF+T53dXraebKyRHJf6/aKtielCpy098cnF6kvg/Ad/yTNQrR8awAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA21JREFUWEftV91SUlEUXnvjQUAJdCrTsNEZR/JOZhzMO3mDfIJ8g/QJwifInqB6gnwDvWlKusC7kpqBEiX7URBBfs7eu1lbjm4Oh3OANG9aV3D2Omt9+1u/h8ANC7lh//AfgC0DyXRuQtf1CQyTECQfnQ7t2IUskcrOEiKCneqjXguAZDId1Ac9TwXny0BAOlckDwAbjNG1hZnRDD5/9zE34SL6ClD6BACkc0UylNL43NTo63bAmwC8TWVnNSBvAFoct7zPOVmllAoAFrdwbNbPMEZjBmj18AKAvImLJw1jlBAI+tzQr7nARQjUOYej0yrUGbe8jM/dB36vBhql8rxc06FYqav6eQARM4fxAkAitZ82bj480A93/B6gtDVFjk+r8KNYAS6EdIRA7wW8EPC5LYH9KlbgZ7FinGW0Ui0SiUxiKKVID4lUdhmAvMTft/0e6dxOylUdvv4+lSrjwwMw6NFs9Q8LZ3BUqkodIfjafHgcw6YCOL+95qIwNXLL1phxWK0zYFyAr7/PUR/1vhyeGKxlotP3Jy8AYOkAEIw9IPUjAa+jwV4UVBY0RicjjSoiHz7vLQpBN9FoaHgA/A509uIc38mXa5DLl+XrjPHYwsz4lsyBfwVAzZsmAGoIkH4Mw3UIJiGGoYWBZDodrNfdx3iApTQW9F2Hfzg4LkPhrCZta6XakFGKjTI82AQQiy5KYOruLcv6/1tUu7lCowrEVnQ6FGsqw/efsiuUkuf4sJM+0C0YNQGpoMtz4cvZIBlohAF7QfCqWajrXDYt2cIFZLSyRSdEECoLAa8bxoauJhfU2JtvL8tQpTOR2seGNIvPrqIimuaAgEw0fNkBm3LA+GOeiFgR7YaMUx4UyjU4aDQe7EOM0YjtODYMbu9+e0yIC3cCKb2AMDkHIdjSfPjBhhVoy5VMzYduK8M0foFzsfroYWi9HWNtd0IzCExMHNNa3/nCYRbOBXw/OQO8vSFOzluS0Gy0EQ7cE+Suh+Ma+wRuSqqUqrocNMq2lGeMLxkDxy5fHL8LZGJSvqkuqLh+IRAUpBzXL0V2GKNLVgnXcQ5YKW7v7sUJoc9sbpMXgr9Qtx2nSnEMgdkAskEpixNCcAVX5ZW6qnfi2NBxDIGVMeNbQBDIu8v6urpkduO8awa6Nd6Jfk8MdGK4U50/VaaTMDodshsAAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA05JREFUWEftVltSE1EQ7b5D3pAHosjDEqsw6pdQpSktf5Id4AqAHbADZAXgCowrUFdg/LAQpSr4hUHKBIiCgpIHhCSTudfqSW5ezEwCfPBD/8ykcm/36dOnuwfhkg0vOT5cAbhioGsG4vGkX/U4poWAMIKYAISxmoAzALgGXPsKDKOh4OjaWYTdEcDHjfSEDdgigAh35xhjiGLp8d2Rd92cNwVAGVd6HfNCiLluHBmciWoaW3j6YChldd8QwPL67pii8PcAdZp1H257D/S5bPrTrjBgDKGoaqBWOORLKmQL5fZYKQDx3KospwB8+b4TFoK9AQC/9OZz2+F6nxNsCrMkQ9W4DmI/X2w5xwSbeXRv6LXR5RYAq5u705zzqDxIAYf9bnA7es5UBQKydXAE9JRmBqIOYDWxPcVRoczrdN/q9+g0n8c0LuB39gSyJ42yGIHQvVeVjlRznXainDI3M84F5IoqaEKA12EDW495aQ7yxeaSZABEpFkT2C64TsH/HZf0zJqNwNI9M/t1WGhmIqVpLCK7A1cS6SgiTkuV3x7oNXVEat/8kzv1v8IQxm94LctFmiiUK7W7GAsFhyP0Az9v/BT0QoKj4FZKN8peohnyu8FvwQJpIrmfl8LMhIIjAQngkGqvA7jWa1lPKwCDPhf0exyW7G39rXdGA8BZSkBZbOxlDYOMD3pN2SPR/mhkT/ejoeDIrM5APJn0q2V7XC4Xn8sOwwHzDjg8KsFeriFChgg3fS5TEVJwypwmpm4CUrZCeXJy8k5GB2DUhgN9Tn3ymRkNmHxRBQruddpMxWcUXOONDqgDoJfl9fSMouArGTTgceiZndeoY5pqTm4yKojIs7Z13TLmPn1LzzGGizKo06bAaMBjKUwjgCTW/VwRuNAbzDR4CwPy5Epi5wUim5e/qceJDauSyLPHpQrQ5Gv0e7Xm7bQ3gzYc9CuJ7SlEhcpR34jUprSGaeLRKqbxSzSXNQ7FigZHJ2pr4KriYpqmzFp9E5humtqIpuU0cQ4dZDgXC0/ujy51uttx1eniZDjf9A1o5TMjBH9pL1SWZJtdGIB0sLy+E2YMZxDxYe1LqVoeASlAiGma+OAsqm+7DSz9dmSgUwYX/f8KwKUz8B+dAoMwA8bJ0gAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "prompt",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { expose: __expose, emit: emits }) {
    const modalShow = ref(false);
    const { proxy } = getCurrentInstance();
    const itemList = ref([]);
    const newItemList = ref([]);
    const loading = ref(false);
    const params = ref({
      tagCode: "",
      pageNo: 1,
      pageSize: 10,
      total: 0
    });
    const typeList = ref([]);
    const showFn = (record) => {
      modalShow.value = true;
      params.value = {
        tagCode: "",
        pageNo: 1,
        pageSize: 10,
        total: 0
      };
      if (record) {
        typeList.value = [{ code: record.code, cateName: record.name }];
        params.value.tagCode = record.code;
        getDetail();
      } else {
        loading.value = true;
        proxy.$api.queryDrawTemplateList().then((res) => {
          typeList.value = res.data;
          getDetail();
        }).catch(() => {
          loading.value = false;
        });
      }
    };
    const getDetail = () => {
      let data = {
        tagCode: params.value.tagCode,
        pageNo: params.value.pageNo,
        pageSize: params.value.pageSize,
        type: "DESIGNER_CATEGORY"
      };
      loading.value = true;
      newItemList.value = [];
      proxy.$api.queryRecommendDrawRecordPageList(data).then((res) => {
        itemList.value = res.data;
        params.value.total = res.totalCount;
        itemList.value.forEach((item, i) => {
          item.params = JSON.parse(item.result);
          if (i == Number(itemList.value.length - 1)) {
            sortList(itemList.value, 3);
          }
        });
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const sortList = (list, num) => {
      let arr = [];
      for (var i = 0; i < num; i++) {
        arr.push([]);
        if (i == num - 1) {
          list.forEach((item, i2) => {
            let index = i2 % num;
            arr[index].push(item);
            if (i2 == Number(list.length - 1)) {
              newItemList.value = arr;
            }
          });
        }
      }
    };
    const toChoose = (record) => {
      params.value.tagCode = record ? record.code : "";
      params.value.pageNo = 1;
      itemList.value = [];
      getDetail();
    };
    const toCollect = proxy.$debounce((record) => {
      if (record.collectFlag) {
        let data = {
          relationCode: record.relationCode
        };
        proxy.$api.delCollectRecommendDrawRecord(data).then(() => {
          record.collectFlag = !record.collectFlag;
          record.collectNum = Number(record.collectNum) - 1;
          if (params.value.tagCode == "collect") {
            myCollect();
          }
          proxy.$Message.success("\u53D6\u6D88\u6536\u85CF");
        });
      } else {
        let data = {
          aiRecordCode: record.aiRecordCode
        };
        proxy.$api.collectRecommendDrawRecord(data).then((res) => {
          record.collectFlag = !record.collectFlag;
          record.relationCode = res.data;
          record.collectNum = Number(record.collectNum) + 1;
          proxy.$Message.success("\u5DF2\u6536\u85CF");
        });
      }
    }, 300);
    const myCollect = () => {
      params.value.tagCode = "collect";
      params.value.pageNo = 1;
      toMyCollect();
    };
    const toMyCollect = () => {
      loading.value = true;
      newItemList.value = [];
      proxy.$api.queryCollectRecommendDrawPageList(params.value).then((res) => {
        itemList.value = res.data;
        params.value.total = res.totalCount;
        loading.value = false;
        sortList(itemList.value, 3);
      }).catch(() => {
        loading.value = false;
      });
    };
    const chooseOne = (record) => {
      emits("close", record);
      modalShow.value = false;
      proxy.$api.addDrawMatrixPointActionRecord({ eventPartyId: record.aiRecordCode });
    };
    const onChange = (e) => {
      params.value.pageNo = e;
      if (params.value.tagCode == "collect") {
        toMyCollect();
      } else {
        getDetail();
      }
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0$1;
      const _component_Button = resolveComponent("Button");
      const _component_Spin = resolveComponent("Spin");
      const _component_svga = __nuxt_component_0;
      const _component_Page = resolveComponent("Page");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "class-name": "promptMain",
        modalSlot: "headers",
        closable: false,
        "footer-hide": true,
        "mask-closable": false,
        modalWidth: 878
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="promptMain-top" data-v-e4f3ecfa${_scopeId}><div class="promptMain-top-left" data-v-e4f3ecfa${_scopeId}><img${ssrRenderAttr("src", _imports_0)} data-v-e4f3ecfa${_scopeId}><div data-v-e4f3ecfa${_scopeId}>Prompt\u6A21\u7248</div></div><img class="toClose"${ssrRenderAttr("src", _imports_0$1)} data-v-e4f3ecfa${_scopeId}></div><div class="promptMain-tab" data-v-e4f3ecfa${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: ["btn", !params.value.tagCode ? "btn1" : "btn2"],
              onClick: ($event) => toChoose(""),
              type: !params.value.tagCode ? "primary" : "default"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u5168\u90E8`);
                } else {
                  return [
                    createTextVNode("\u5168\u90E8")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(typeList.value, (item, i) => {
              _push2(ssrRenderComponent(_component_Button, {
                class: ["btn", params.value.tagCode == item.code ? "btn1" : "btn2"],
                onClick: ($event) => toChoose(item),
                key: i,
                type: params.value.tagCode == item.code ? "primary" : "default"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.cateName)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.cateName), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_Button, {
              class: ["btn", params.value.tagCode == "collect" ? "btn1" : "btn2"],
              type: params.value.tagCode == "collect" ? "primary" : "default",
              onClick: myCollect
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6211\u7684\u6536\u85CF`);
                } else {
                  return [
                    createTextVNode("\u6211\u7684\u6536\u85CF")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="promptMain-content" data-v-e4f3ecfa${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: loading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u52A0\u8F7D\u4E2D...`);
                } else {
                  return [
                    createTextVNode("\u52A0\u8F7D\u4E2D...")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!loading.value && newItemList.value.length == 0) {
              _push2(`<div style="${ssrRenderStyle({ "width": "100%", "text-align": "center" })}" data-v-e4f3ecfa${_scopeId}>`);
              _push2(ssrRenderComponent(_component_svga, {
                svgaImg: unref(nodata),
                canvasName: "prompt",
                width: 200
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(newItemList.value, (item, i) => {
              _push2(`<div class="content-item-list" data-v-e4f3ecfa${_scopeId}><!--[-->`);
              ssrRenderList(item, (iten, j) => {
                _push2(`<div class="content-item" data-v-e4f3ecfa${_scopeId}><div class="img" data-v-e4f3ecfa${_scopeId}><img${ssrRenderAttr("src", iten.content)} data-v-e4f3ecfa${_scopeId}>`);
                if (iten.params) {
                  _push2(`<div class="keyWord text-hide-2" data-v-e4f3ecfa${_scopeId}>${ssrInterpolate(iten.params.content)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="bottom" data-v-e4f3ecfa${_scopeId}><div class="bottom-left" data-v-e4f3ecfa${_scopeId}><div class="bottom-left-item pointer" data-v-e4f3ecfa${_scopeId}>`);
                if (iten.collectFlag) {
                  _push2(`<img${ssrRenderAttr("src", _imports_2)} data-v-e4f3ecfa${_scopeId}>`);
                } else {
                  _push2(`<img${ssrRenderAttr("src", _imports_3)} data-v-e4f3ecfa${_scopeId}>`);
                }
                _push2(`<div data-v-e4f3ecfa${_scopeId}>${ssrInterpolate(iten.collectNum ? iten.collectNum : 0)}</div></div><div class="bottom-left-item" data-v-e4f3ecfa${_scopeId}><img${ssrRenderAttr("src", _imports_4)} data-v-e4f3ecfa${_scopeId}><div data-v-e4f3ecfa${_scopeId}>${ssrInterpolate(iten.browseNum ? iten.browseNum : 0)}</div></div></div><div class="btn" data-v-e4f3ecfa${_scopeId}>\u753B\u540C\u6B3E</div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div><div style="${ssrRenderStyle({ "height": "32px" })}" data-v-e4f3ecfa${_scopeId}></div><div class="paging" data-v-e4f3ecfa${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Page, {
              modelValue: params.value.pageNo,
              "onUpdate:modelValue": ($event) => params.value.pageNo = $event,
              total: params.value.total,
              "page-size": params.value.pageSize,
              onOnChange: onChange,
              "show-elevator": ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "promptMain-top" }, [
                createVNode("div", { class: "promptMain-top-left" }, [
                  createVNode("img", { src: _imports_0 }),
                  createVNode("div", null, "Prompt\u6A21\u7248")
                ]),
                createVNode("img", {
                  class: "toClose",
                  onClick: ($event) => modalShow.value = false,
                  src: _imports_0$1
                }, null, 8, ["onClick"])
              ]),
              createVNode("div", { class: "promptMain-tab" }, [
                createVNode(_component_Button, {
                  class: ["btn", !params.value.tagCode ? "btn1" : "btn2"],
                  onClick: ($event) => toChoose(""),
                  type: !params.value.tagCode ? "primary" : "default"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u5168\u90E8")
                  ]),
                  _: 1
                }, 8, ["onClick", "class", "type"]),
                (openBlock(true), createBlock(Fragment, null, renderList(typeList.value, (item, i) => {
                  return openBlock(), createBlock(_component_Button, {
                    class: ["btn", params.value.tagCode == item.code ? "btn1" : "btn2"],
                    onClick: ($event) => toChoose(item),
                    key: i,
                    type: params.value.tagCode == item.code ? "primary" : "default"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.cateName), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick", "class", "type"]);
                }), 128)),
                createVNode(_component_Button, {
                  class: ["btn", params.value.tagCode == "collect" ? "btn1" : "btn2"],
                  type: params.value.tagCode == "collect" ? "primary" : "default",
                  onClick: myCollect
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u6211\u7684\u6536\u85CF")
                  ]),
                  _: 1
                }, 8, ["class", "type"])
              ]),
              createVNode("div", { class: "promptMain-content" }, [
                createVNode(_component_Spin, {
                  fix: "",
                  show: loading.value
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u52A0\u8F7D\u4E2D...")
                  ]),
                  _: 1
                }, 8, ["show"]),
                !loading.value && newItemList.value.length == 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  style: { "width": "100%", "text-align": "center" }
                }, [
                  createVNode(_component_svga, {
                    svgaImg: unref(nodata),
                    canvasName: "prompt",
                    width: 200
                  }, null, 8, ["svgaImg"])
                ])) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(newItemList.value, (item, i) => {
                  return openBlock(), createBlock("div", {
                    class: "content-item-list",
                    key: i
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item, (iten, j) => {
                      return openBlock(), createBlock("div", {
                        class: "content-item",
                        key: j
                      }, [
                        createVNode("div", {
                          class: "img",
                          onClick: ($event) => chooseOne(iten)
                        }, [
                          createVNode("img", {
                            src: iten.content
                          }, null, 8, ["src"]),
                          iten.params ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "keyWord text-hide-2"
                          }, toDisplayString(iten.params.content), 1)) : createCommentVNode("", true)
                        ], 8, ["onClick"]),
                        createVNode("div", { class: "bottom" }, [
                          createVNode("div", { class: "bottom-left" }, [
                            createVNode("div", { class: "bottom-left-item pointer" }, [
                              iten.collectFlag ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_2,
                                onClick: ($event) => unref(toCollect)(iten)
                              }, null, 8, ["onClick"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_3,
                                onClick: ($event) => unref(toCollect)(iten)
                              }, null, 8, ["onClick"])),
                              createVNode("div", null, toDisplayString(iten.collectNum ? iten.collectNum : 0), 1)
                            ]),
                            createVNode("div", { class: "bottom-left-item" }, [
                              createVNode("img", { src: _imports_4 }),
                              createVNode("div", null, toDisplayString(iten.browseNum ? iten.browseNum : 0), 1)
                            ])
                          ]),
                          createVNode("div", {
                            class: "btn",
                            onClick: ($event) => chooseOne(iten)
                          }, "\u753B\u540C\u6B3E", 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ]);
                }), 128))
              ]),
              createVNode("div", { style: { "height": "32px" } }),
              createVNode("div", { class: "paging" }, [
                createVNode(_component_Page, {
                  modelValue: params.value.pageNo,
                  "onUpdate:modelValue": ($event) => params.value.pageNo = $event,
                  total: params.value.total,
                  "page-size": params.value.pageSize,
                  onOnChange: onChange,
                  "show-elevator": ""
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total", "page-size"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/modal/prompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prompt = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4f3ecfa"]]);

export { prompt as default };
//# sourceMappingURL=prompt-28939876.mjs.map
