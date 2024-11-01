import { a as _export_sfc, g as getRouting, m as __nuxt_component_1$2 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './navLeft-e5366511.mjs';
import { H as Header } from './index-2dcc6393.mjs';
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
import './avatar-8802d9a1.mjs';
import './firmModal-85ac1a5f.mjs';
import './accountModel-962e2c16.mjs';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';
import './phone-61ab024f.mjs';
import './pwd-8f00960a.mjs';
import './nickname-667f2327.mjs';

const applyPng = "data:image/png;base64,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";
const dataPng = "data:image/png;base64,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";
const distributionPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAAXNSR0IArs4c6QAAB49JREFUWEftmNtvHHcVx7/n95uZ3XXseN04jQu52K2dEFmBXITSKhLZOFKhVEFtoj5UIaRbxAMPiBf+gBZekZARF1EkNkElQgKJFBCqqJQ1gseKuiAkLr2kbaJQx8RrO9lZ787MQef8ZtdrSseJsy9BjDye229mPr/vuc4S7oGF7gFG/B+yV1b631SyWFkoopEvqkr5fK1Wplq3Yvsr4Wg+L9eAfK1RmykPrbm+EXXvWMn7vh+esxZnrQH7hPPvfbFQ7n7xoZ+GVUM46hHIWjz/h1OF5zYC1n1PNuS3wpJFPOpbC9/GsAbwrRVAhfAMZvKIzxsLBBYwxsIa/qpHtN/TsXwxQPKSXLfyDACJacxcfGzo8p2AZ0J63w6rnkFJXuiJcgakoKTHbpV9K/uc7pOO1UlY2TJ5RDKGZZxP5tyFR3PP9gwy/53GJWu4FBgiSwxfYFJAgVUYI4oSC6Tv1E0nwPBMCixjBBJMRFS58Gihd5AD32tUDSUl3xqniKglLyaGZ2WrKqpqfgeuS2VRPT2vFjAAESrnj/cQsviDxiUPfOwDphVIVUm2AtqexCqU+qSB+nFbfQUmVF6Y6iHk8Ath1SMqWYVh+M58bd9L1U2Vc4rKdTF5238lA6xawAABofLdUg8hR34YVq1BySlC7KvJZb8LuBNATl3xW+e/BEsCK/ekkzOAEchP9RBy+48alzziY6JQ26dWA0PPdcCd2akrqkG+JXZWWM0E1uDc9JEeQo5WwqqlTgpK/U9BXreIpi0A37ewiGElvVhgR783OL6ZDmwO6Gy/5CoAS60E79cZN5osE6t885EeQo6fa1QlBTmFnKlFVd9yzTOY7ZiRgKE88PSEh/Gi2R9GKDZiRrKaDJkZWGoyvbec/OJLk7mTPcuTe15sXLJIjmnAONBOYHSnnW2biL/ycZ8YjFYCJOxW9wcSQJAeEoOw1ODXmuydfHKMbqvyZFacyRc1cI5qhKaJ3FpwIHU5DR4B/PKk6LwGDgkLMqVwALOMkMBxtAshLv+rZg+WD6xtUP6bwpmQn7ggKQilTnnrRCnVLOJpzzP8jcP+cyuinqxSm91bOGGQCCgrmEEkh0wEkgjXcddvcvXUuD+1nukzIaWjscSlTn7UKBWTm5pv4unTE/7o2JA524rdS8WsTB1AVvUETkndVwARYHTLaMXgq0vR1Jm9hZks0EzIwz/T6D7ari5idjG3y5fEX9vvk8KRA0z9UM2ZpOZVIUEYGyAM+IS/LSYs9xit48BcHdWTY9lqZkIeEUjtgqSBkDLXTubgXf2GTu+xqMepgmJqlhRDGCm4x841GGEEFAPgk1slYQGv30hQazKLyQ2BFkLm+QXvvizfzIQ8+vOwam07T67pdC4/PGIvHx6hUjMRSA0G7SkPDlsUHA/CGLhyK0G/DzQTQmCAfyzGiFnchhS03gJfrSeHyruD2Q8zeSbk8YuSJ6XB1V6RNA25vvGdz+/2Zgs+nnCBQoiZMdJnsG9IPG51efdWgtkb6hQaPDkCBdawmNsYoNFivrIQTZX3fbhfZkJ++pdh1WJtdKedDe/bQnTofovIBYX64/Z+y5NF8bTV5Y2lBH9dTDSiPYKoR1aaYFWSKWwhubbMU1/Y6/9uQ0o+/isX3U5BeUladQzxQ5uJHn7AY4FkMGkKIqA04mGT514nif2N5QRvLbMWAgIroORKqfvSXtZbzPMhHzy9UXOf+HVY9ax+z0hvuNp1E7DJBz67y0Mrnb5Ed4td97Njk1H/+/tywrv6DD7aR9RngT/XEiytuOASSEug+Xry9hNjwYMbTkGnfhNWjVSctEeUTihw3znaOz6yzdJgwbh8CGhAxACitA5aPcuYGvEwGBD+tBBjrq5NhrZ1ccK4cpMrZ3YHmZ8TmT751MtScbgk6qz5ZEi77sEccGCrp2Ukdc00b7uaLTGfgFgmNpwnvB8ycnqvmJyxuEJvzdft8fLe7BqeCfn0b9Oy2PlMSPOlRLp+5xgeKYBGB61WEhVQ6MTZ2gcS+Zq8XQcVWGfmegvJXEjlZ/Z4P84ytcsdGcszr4QlGEzkrRkKcrTduFQnHTckNqynCRk7+8zOLXl+TILLtRUaHBpSUhdFUensJXBkfBghuX4r+np5b+H59QDXhZx+kyfiFh5qxQj+82Ecg2C1Zqt+W6h1opijE4HlbdKRp+VZI1lMK2pIRVps0PKtZnLm2cncS7cDmAn5k3f4wWYTO60HjiKnXCQm84A4AlmBS1ONXveAVhRvQ8RHAg+fscCEdOoCF8VMMdMfVyL+feKZV/yCnT27g67eNeTLczweN9HfeZDkGt8pJy7XyT0+YH1w3Pqg6yw34gdkagP53LVuoNjgxuc+Qu/eNeSrr7KffAxbchEKSdpsNVdA8oOZ/GLWaABBDqzn8lpx2Kw40KaUvhxYxrSvyTi55lusHBjGP4m0gbqtZd1f1f7CHNh55O4fhlkGzM0lUP9mMBaBwUHIRv9JuVsC0C8TGnTn2tuBQSTXriPGVjQniZq3RdY1aF3I7gemSbt9D80AVAJ4ZgZUKoHlGDOA7KdNuQaV68o3vtwR5MZfc3d33hOQ/wZnc+xHJInMmQAAAABJRU5ErkJggg==";
const flowPng = "data:image/png;base64,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";
const memberPng = "data:image/png;base64,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";
const orderPng = "data:image/png;base64,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";
const payPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAAXNSR0IArs4c6QAABkZJREFUWEftmE1oXFUUx//n3peZfHXSpM1HC0obo7aJ1inJItQK0y5EKBosakCF2lZL0KJddFFEVKjiwoWCiKCbihvBTVWQ4iIzShUrQumi1Y1GSysRWmri5KMz770r5557Z14/QpqZbAp58PLufe/Om989H/9zJoTb4KDbgBErkMvlpRVLrlhyuSywXO9ZMCbNi/1Z6Pg0FMGeBAOtqDKv3pfn/tS8lgw0kb0qks9oGCgFKH4Hj/VOeqFQuJWNLAx55L4cQOPyBYqsWGn+EvAXMTSDeQhj79t1vN5uStYxHBFBU/IKqGAvPf3tp/VBHh3KgZAXKA9jx+70wP4Zz/lZco3doN+QQNvNUAzCfnrsxLH6IN8bzkHRuLVCBSxhRXGrgAXOSnZdBf7aMPAekHcZaOylHV/VacmPhjeA9BsIgqolKi50FvPu5yv79/rnpIDAW9JasBoqpI/Rti++q8+SY5s2APFzlRgEDAIb9Alr+bG1HieGxK4fBzDiX5CFlc8aBDZ+j9PYyTP1QuZA8fhNM9rHXTJ7vRslmyWhJFlcHFYg5bmJ99FLP9YZkwc3ceKMO8lIxlc1o9lqgRbr7ToCmEhcbmIAERCHcuX7JpRrzGsiYFVPAc1tfyKKgKj0JfWPHl/IqgtL0CGGVHnRSKd7MvZZLLrJ+tmxHnjibUJxEuA45DVMa+EEzMShtFz23vU44QT1j/YuHfIw66RhnXTZrYxoZcKdPuvb1xk8/hZh5h8HCCCOxZJsVQsWG5iIYCyhYPJmTExAOEEDz9QAeSSbg4lEzCugTj6un6/uIYwcRQWSAaNy1ZJMFoVM5PkMYKQi8dapNEEDe2qE1EbczQnA/vMSImXS6R0R2tYBu14HZi9JzFkLVl1txwzKVmNLWr+7SCNlEM0X6IF9O5fu7teyOSiuODdUmBsFO9MNPPIqMMOQAmhjMGgCGtsMps4zPKG9F5iZBEpFcbWP3ehqnrLP1wD5JpfF2Lvba9y18uKlKNNN2HG4YkkLyNbr6APWDQG/nwCiqwb3jBAunjK4dI4BxR0sR9HVAmUP1ABpa7fJu9rLXY3vYFwt98JOwKpOYPvLwNxlSRTv7rAMrB8C1tzLkMD0BeD894DWxqoAu4m9zpbcOlYD5DsMSeLuSG208dLoosZfKRiBVu+jZS0wPAbMXUnEYww0rwWauoCeLYBOAxdPAfNXgOnzUnmsXCmgPFOgwYM1QL47LJa01cOWM1dB3NiWPpYjBbSsAQb3CSRiY+OP3d3WC6y5G2jqlKzmxJqaAC6f4+yhCmRYzNPgKzVAchcEZ0nfE1YbW+kN/by5A9jyLFCaZi1kjSSb5ek2oLEd6M4CQRq48BNQLgKzk4AOuK7zJg3KxQINHqoFcnsOOq5KkFSbZJftOmwCmjoIm0cZ0ok2x2VE6BwAurJAOgOE81z+gKk/gAsnk5Ds7nxtkB8wJCeObxKSPx2SnRBDrgb6dgOl/6wcSr02LOjsemDzkyKKv35uoAKCbkhA6jogP96WhdGnr2n7pamtWtC7O50hbHwUKM1K7DEYX22mR/xTgd1tUCoSlIY9NfepLnGi2TxtrcHdtsB+kstZC3D/xyf/SesWBEF3nErfBU19BLRSKnMHOh+6H+GcWJDrNJc9CxoZG6O2QjEYh40DVSxFmsCJUyukL1Pm6wPNYeeqB4PQDMUoD7hSYYy0HFANzS3U2Dti487XZ4H1S6vVRaSHLSqAKjAI5wqUrUGCKoA/f9gTq+k9UGi397hVZEnyV6FMKWT2Ii6trnQ+LEW2ZttmDiCeczNhLRlbUM5wBjXhcdp6aPeSa3cF8rfPngJFLHQSau7gsIpjIqUQx5EhmXMDoWwb5vcB4lZMs9K4LpKbFQ4FIAyjMw0D+08uBOfvL/oPK/PXN/0Igj77Ae6itUYU8RfzkDuYmKCV4Xsain8FysEbcmP7zK6Ve4n5L3Tnw3/XDWkTaPKHLrS0d2G+nAJHYoq45TIoA2Uiagg4Ool47g8eNtgPu2fugbs/A12epI6hqcUAJV6WcJizZ1Po6kpPp+YbMpkMUJx1tmoFUEy8iYhnrTbVW4HWOMLUvwZt6RLQPUdEHNG3fCwJ8mZvNUbi62YHcee9DEfdkMvAsOgrViAXNdEtLvgfvT10RzpSRI0AAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "aiapp",
  __ssrInlineRender: true,
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const routing = getRouting();
    const router = useRouter();
    const occupyHeight = ref(0);
    const selectId = ref("");
    const selectType = ref("app");
    const selectUrl = ref("");
    const list = ref([
      { name: "", type: "slot", slot: "appList" }
    ]);
    const leftNav = ref([]);
    const appList = ref([
      { id: 1, name: "\u5E94\u7528", src: applyPng, limit: "33132", url: "/app/create", type: "app", children: [
        { name: "\u680F\u76EE\u7BA1\u7406", url: "/app/apply/column", children: [
          "/app/apply/column",
          "/app/apply/column/detail",
          "/app/apply/preview"
        ] },
        { name: "\u5BFC\u822A\u7BA1\u7406", url: "/app/apply/navigation", children: [
          "/app/apply/navigation"
        ] },
        { name: "\u53D1\u5E03", url: "/app/apply/publish", children: [
          "/app/apply/publish",
          "/app/apply/publish/mpm/manage"
        ] },
        { name: "\u5E94\u7528\u4FE1\u606F", url: "/app/apply/information", children: [
          "/app/apply/information"
        ] }
      ] },
      { id: 2, name: "\u4F1A\u5458", src: memberPng, limit: "33133", type: "member", children: [
        { name: "\u5168\u90E8\u7528\u6237", url: "/app/member/allUser", children: [
          "/app/member/allUser",
          "/app/member/allUser/detail"
        ] },
        { name: "\u4F1A\u5458\u6743\u76CA", url: "/app/member/equitys", limit: "33141", children: [
          "/app/member/equitys"
        ] },
        { name: "\u79EF\u5206\u6743\u76CA", url: "/app/member/points", children: [
          "/app/member/points"
        ] },
        { name: "\u7528\u6237\u53CD\u9988", url: "/app/member/feedback", children: [
          "/app/member/feedback"
        ] },
        { name: "\u4F1A\u5458\u8BBE\u7F6E", url: "/app/member/settings", children: [
          "/app/member/settings"
        ] }
      ] },
      { id: 3, name: "\u8BA2\u5355", src: orderPng, type: "order", limit: "33134", url: "/app/order/allOrder", children: [
        { name: "\u5168\u90E8\u8BA2\u5355", url: "/app/order/allOrder", children: [
          "/app/order/allOrder"
        ] }
      ] },
      { id: 4, name: "\u6570\u636E", src: dataPng, type: "data", limit: "33135", url: "/app/data", children: [] },
      { id: 5, name: "\u5206\u9500", src: distributionPng, type: "distribution", limit: "33136", children: [
        { name: "\u5206\u9500\u7528\u6237", url: "/app/distribution/user", children: [
          "/app/distribution/user"
        ] },
        { name: "\u63A8\u5E7F\u8BA2\u5355", url: "/app/distribution/promotion", children: [
          "/app/distribution/promotion"
        ] },
        { name: "\u63D0\u73B0\u7BA1\u7406", url: "/app/distribution/withdraw", children: [
          "/app/distribution/withdraw"
        ] },
        { name: "\u5206\u9500\u8BBE\u7F6E", url: "/app/distribution/edit", children: [
          "/app/distribution/edit"
        ] }
      ] },
      { id: 6, name: "\u652F\u4ED8", src: payPng, url: "/app/pay/edit", limit: "33137", type: "pay", children: [] },
      { id: 7, name: "\u6D41\u91CF\u4E3B", src: flowPng, url: "/app/flow", limit: "33138", type: "flow", children: [] }
    ]);
    const changeUrl = () => {
      const urlName = router.currentRoute.value.path.split("/");
      selectUrl.value = router.currentRoute.value.path;
      leftNav.value = [];
      appList.value.forEach((item) => {
        if (urlName[1] && urlName[1] == item.type) {
          leftNav.value = item.children;
          selectType.value = item.type;
        }
        if (urlName[2] && urlName[2] == item.type) {
          leftNav.value = item.children;
          selectType.value = item.type;
        }
      });
    };
    const chooseLeft = (type) => {
      selectType.value = type;
      appList.value.forEach((item) => {
        if (item.type == selectType.value) {
          if (item.url) {
            router.push(item.url);
          } else {
            if (item.children.length > 0) {
              router.push(item.children[0].url);
            } else {
              if (item.url) {
                router.push(item.url);
              } else {
                router.push("/" + item.type);
              }
            }
          }
        }
      });
    };
    const getHeight = () => {
      var _a;
      occupyHeight.value = Number((_a = document.getElementById("main-header")) == null ? void 0 : _a.offsetHeight);
    };
    const onAppInfo = () => {
      proxy.$api1.app_appList().then((res) => {
        res.resultObj.datas.forEach((item) => {
          if (item.id == router.currentRoute.value.query.id) {
            routing.setAppInfo(item);
          }
        });
      });
    };
    watch(() => router.currentRoute.value.path, () => {
      changeUrl();
      onAppInfo();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mains" }, _attrs))} data-v-abe0fbca>`);
      _push(ssrRenderComponent(Header, { onInit: getHeight }, null, _parent));
      _push(`<div class="main-content" style="${ssrRenderStyle({ "height": "calc(100vh - " + occupyHeight.value + "px )" })}" data-v-abe0fbca>`);
      _push(ssrRenderComponent(__nuxt_component_0, {
        list: list.value,
        selectId: selectId.value,
        "onUpdate:selectId": ($event) => selectId.value = $event
      }, {
        appList: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(appList.value, (item, i) => {
              _push2(`<div class="${ssrRenderClass([selectType.value == item.type ? "active" : "", "mainContentLeftChildrenItem"])}" data-v-abe0fbca${_scopeId}><img${ssrRenderAttr("src", item.src)} data-v-abe0fbca${_scopeId}><div class="name" data-v-abe0fbca${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(appList.value, (item, i) => {
                return openBlock(), createBlock("div", {
                  class: ["mainContentLeftChildrenItem", selectType.value == item.type ? "active" : ""],
                  onClick: ($event) => chooseLeft(item.type),
                  key: i
                }, [
                  createVNode("img", {
                    src: item.src
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "name" }, toDisplayString(item.name), 1)
                ], 10, ["onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-content-right" data-v-abe0fbca><div class="page-content" data-v-abe0fbca>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/aiapp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aiapp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abe0fbca"]]);

export { aiapp as default };
//# sourceMappingURL=aiapp-73df14a3.mjs.map
