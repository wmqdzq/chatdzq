import { _ as __nuxt_component_0 } from './ossUploaderNew-da7960a9.mjs';
import { _ as __nuxt_component_1 } from './cEdit-edfd661e.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
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
import './copy-d1ce3f41.mjs';
import './content-977f7524.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import 'ofetch';
import 'hookable';
import 'unctx';
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
import 'defu';
import 'qrcode.vue';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA7tJREFUWEfNmN1rHGUUh58zO7vZZJPY3WytaRSxgqDFL6KCFmmuFCxeeCMIIgUFrwSR/gEF/wDB61IoCELuCopeacVCREQqaMSv+tFkay1xN8luPnfnyJlx0+xmdme2yWzywt7s+3Ge+Z1z3nNmhA5DVaXTXBL/i4iGndsCYVCXLpF66gEeBiYR7k0CZseZyp/q8XXuV2aZorEddgtQpzW1+iyTqrwLPNcXsDYjIsyo8tbQZa7Iy9KwaR9welpTL57kFa/BeSC9H3BbNpUVx+XN7Bd8aJA+4GJJn3fh030FazcuvJAbl0+k/LseygxwBfoUb3FVEEobaxyX6py+LQ7vxd3Xz3XqcUZWruvnqkz103APti5LtaQLAoUeNnVfqqAeaAP0/5tNBCQF4jTTMp41hWWplZrHxNvUbZW3CZtVWF+AtQWoLwMOpAYhdxQyBciM9GZnbwAV6quwdBVq18IBTL2BAhx+ch8AN2uw8G2gXmi5MrgxKD4euLqXsWsFza03v4GNSme4bBHGHguBsxiNqPi7Blz+Ayo/9q5cfQ3s4aJicleAXgP+/hIaqyGAAtnDUAxRzuAWf4LNZThyAizLO41dAZpbb8yEH+1k4OjUTrf6cD/Dynywb3wK3MGEAKvXoPx9+OGpLBSfaHWhZfriL7fgbGdxEgbvTAiwW/yZyfQIFB4NIMPgbE3hEchNJARY/QvKP3S/NNKjkH8IanPBr30kquB6Gf75qpdbrW2tA+Mnwc0mpKC3AfOfAaFvE9Hg6Tvgrme6r7vtLPbqsHK9c5JE4Vnpy1v8jScAqHWolaA8e/vqDR6BMSt9e11JmnCV2VvtVJRa2+dNuUw+KH2pTPTOnlzsu7UE3eDsgrYS1h6XBuYOQ3oYDj0YD87wYwP6cPNB3e3UQfp9391BCbOGdQtSIDUAQxMwkI92a4vicRpWg6vNB/XTNxwy3CEYORYA2rBQsM7aV8EBcXsDa5qIVDAOnCk3en8AFxX00VHXuqIroKlVnYtWbvg+GL5n7+EiY3BjKagUcdy618rFcvH6Ivz7HdRrOx2zPeaSgotU0LLVrpWl31oh+wUXCehnYxtkP+GagHatut2yyyCttK3fDN7OksjWDvY9y+KSdd5R6W+Q1r1YpUgy5to4bhjgR8CpKMB9mr9o32ZeFbgQfKQ4UKOuwutSqWg+s8rHqjx9oPCUGXV5ye/GanN6Cof3gWMHBPJqQ3lndEIu+oBnz6pz5g1ec1KcVuVEVFYn+BCewIzncS43wQciUv8PC2iubeKLpoYAAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const routing = getRouting();
    const loading = ref(false);
    ref(false);
    ref("");
    ref([]);
    ref();
    const pageType = ref(1);
    const bg1 = ref("");
    const bg2 = ref("");
    const bg3 = ref("");
    const bg4 = ref("");
    const bg5 = ref("");
    const bg6 = ref("");
    const bg7 = ref("");
    const bg8 = ref("");
    const bg9 = ref("");
    const bg10 = ref("");
    const bg11 = ref("");
    const params = ref({
      name: "",
      logo: "",
      navbarLogo: "",
      customerServiceQrPic: "",
      wechatQrPic: "",
      companyContactInformation: "",
      websiteNoticeTitle: "",
      websiteNoticeContent: ""
    });
    const degreeParams = ref({
      web: 0,
      edit: 0
    });
    const imgList = ref([
      {
        title: "AI\u62A0\u56FE",
        name: "\u80CC\u666F\u53C2\u8003\u56FE",
        type: "AI_CUTOUT_IMG",
        max: 8,
        list: [
          { type: "AI_CUTOUT_IMG", code: "", channelUrl: "" }
        ],
        img: bg5,
        desc: "\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A1024*1024"
      },
      {
        title: "AI\u6362\u80CC\u666F",
        name: "\u5546\u54C1\u53C2\u8003\u56FE",
        type: "AI_BACKGROUND_GOODS",
        //AI换背景商品参考图
        max: 8,
        list: [
          { type: "AI_BACKGROUND_GOODS", code: "", channelUrl: "" }
        ],
        img: bg6,
        desc: "\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A1024*1024"
      },
      {
        title: "",
        name: "\u80CC\u666F\u53C2\u8003\u56FE",
        type: "AI_BACKGROUND_IMG",
        //AI换背景图
        max: 8,
        list: [
          { type: "AI_BACKGROUND_IMG", code: "", channelUrl: "" }
        ],
        img: bg7,
        desc: "\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A1024*1024"
      },
      {
        title: "AI\u6A21\u7279",
        name: "\u670D\u88C5\u53C2\u8003\u56FE",
        type: "AI_PERSON_CLOTHES",
        max: 8,
        list: [
          { type: "AI_PERSON_CLOTHES", code: "", channelUrl: "" }
        ],
        img: bg8,
        desc: "\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A1024*1024"
      },
      {
        title: "",
        name: "\u6A21\u7279\u53C2\u8003\u56FE",
        type: "AI_PERSON_MODEL",
        max: 8,
        list: [
          { type: "AI_PERSON_MODEL", code: "", channelUrl: "" }
        ],
        img: bg9,
        desc: "\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A1024*1024"
      },
      {
        title: "",
        name: "\u80CC\u666F\u53C2\u8003\u56FE",
        type: "AI_PERSON_BACKGROUND",
        max: 8,
        list: [
          { type: "AI_PERSON_BACKGROUND", code: "", channelUrl: "" }
        ],
        img: bg10,
        desc: "\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A1024*1024"
      }
    ]);
    ref(null);
    const toSubmit = (type) => {
      if (type == "web") {
        if (proxy.$isEmpty(params.value.name)) {
          proxy.$Message.error("\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0");
          return;
        }
        loading.value = true;
        proxy.$api.saveSiteSetup(params.value).then(() => {
          loading.value = false;
          proxy.$Message.success("\u4FDD\u5B58\u6210\u529F");
          routing.setTopNavList(proxy);
        }).catch(() => {
          loading.value = false;
        });
      }
      if (type == "edit") {
        loading.value = true;
        let arr = [];
        imgList.value.forEach((item, i) => {
          if (item.list && item.list.length > 0) {
            item.list.forEach((iten, j) => {
              if (iten.code) {
                arr.push({
                  type: iten.type,
                  code: iten.code
                });
              }
              if (i == Number(imgList.value.length - 1) && j == Number(item.list.length - 1)) {
                let data = {
                  addTagInfoTeamReqVOList: arr
                };
                proxy.$api.saveReferenceImage(data).then(() => {
                  loading.value = false;
                  proxy.$Message.success("\u4FDD\u5B58\u6210\u529F");
                }).catch(() => {
                  loading.value = false;
                });
              }
            });
          }
        });
      }
    };
    const getImg = (e, index2, type) => {
      imgList.value.forEach((item) => {
        if (item.type == type) {
          item.list[index2].code = e[0].code;
          item.list[index2].channelUrl = e[0].url;
          if (item.list.length < item.max) {
            item.list.push({
              type,
              code: "",
              channelUrl: ""
            });
          }
        }
      });
    };
    const toRemoveImg = (index2, type) => {
      imgList.value.forEach((item) => {
        if (item.type == type && item.list.length > 1) {
          item.list.splice(index2, 1);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Spin = resolveComponent("Spin");
      const _component_Input = resolveComponent("Input");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_ossUploaderNew = __nuxt_component_0;
      const _component_cEdit = __nuxt_component_1;
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account" }, _attrs))} data-v-8bf03101>`);
      _push(ssrRenderComponent(_component_Spin, {
        fix: "",
        show: loading.value
      }, null, _parent));
      _push(`<div class="account-top" data-v-8bf03101><div class="${ssrRenderClass([pageType.value == 1 ? "active" : "", "account-top-item"])}" data-v-8bf03101><div class="item-title" data-v-8bf03101><img${ssrRenderAttr("src", _imports_0)} data-v-8bf03101><div data-v-8bf03101>\u7F51\u7AD9\u914D\u7F6E</div></div></div><div class="${ssrRenderClass([pageType.value == 2 ? "active" : "", "account-top-item"])}" data-v-8bf03101><div class="item-title" data-v-8bf03101><img${ssrRenderAttr("src", _imports_1)} data-v-8bf03101><div data-v-8bf03101>\u5E94\u7528\u914D\u7F6E</div></div><div class="item-bar" data-v-8bf03101><div class="bar-interior" style="${ssrRenderStyle({ width: degreeParams.value.edit + "%" })}" data-v-8bf03101></div></div><div class="item-bottom" data-v-8bf03101>\u914D\u7F6E\u5B8C\u6210\u5EA6${ssrInterpolate(degreeParams.value.edit)}%</div></div></div><div class="account-division" data-v-8bf03101></div><div class="account-form" data-v-8bf03101>`);
      if (pageType.value == 1) {
        _push(`<!--[--><div class="account-form-item" data-v-8bf03101><div class="form-item-name" data-v-8bf03101>\u7F51\u7AD9\u540D\u79F0</div>`);
        _push(ssrRenderComponent(_component_Input, {
          modelValue: params.value.name,
          "onUpdate:modelValue": ($event) => params.value.name = $event,
          placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0"
        }, null, _parent));
        _push(`</div><div class="account-form-item" data-v-8bf03101><div class="form-item-name" data-v-8bf03101> \u7F51\u7AD9logo `);
        _push(ssrRenderComponent(_component_Poptip, {
          trigger: "hover",
          placement: "right-start"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img width="350"${ssrRenderAttr("src", bg1.value)} alt="" data-v-8bf03101${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  width: "350",
                  src: bg1.value,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="blue" data-v-8bf03101${_scopeId}>\u7528\u5728\u54EA\u91CC</span>`);
            } else {
              return [
                createVNode("span", { class: "blue" }, "\u7528\u5728\u54EA\u91CC")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ossUploaderNew, {
          url: params.value.logo,
          "onUpdate:url": ($event) => params.value.logo = $event
        }, null, _parent));
        _push(`<p data-v-8bf03101>\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A72\xD772</p></div><div class="account-form-item" data-v-8bf03101><div class="form-item-name" data-v-8bf03101> \u7F51\u7AD9logo-\u5BFC\u822A `);
        _push(ssrRenderComponent(_component_Poptip, {
          trigger: "hover",
          placement: "right-start"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img width="350"${ssrRenderAttr("src", bg2.value)} alt="" data-v-8bf03101${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  width: "350",
                  src: bg2.value,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="blue" data-v-8bf03101${_scopeId}>\u7528\u5728\u54EA\u91CC</span>`);
            } else {
              return [
                createVNode("span", { class: "blue" }, "\u7528\u5728\u54EA\u91CC")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ossUploaderNew, {
          url: params.value.navbarLogo,
          "onUpdate:url": ($event) => params.value.navbarLogo = $event
        }, null, _parent));
        _push(`<p data-v-8bf03101>\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A235\xD760</p></div><div class="account-form-item" data-v-8bf03101><div class="form-item-name" data-v-8bf03101> \u5BA2\u670D\u4E8C\u7EF4\u7801 `);
        _push(ssrRenderComponent(_component_Poptip, {
          trigger: "hover",
          placement: "right-start"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img width="350"${ssrRenderAttr("src", bg3.value)} alt="" data-v-8bf03101${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  width: "350",
                  src: bg3.value,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="blue" data-v-8bf03101${_scopeId}>\u7528\u5728\u54EA\u91CC</span>`);
            } else {
              return [
                createVNode("span", { class: "blue" }, "\u7528\u5728\u54EA\u91CC")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ossUploaderNew, {
          url: params.value.customerServiceQrPic,
          "onUpdate:url": ($event) => params.value.customerServiceQrPic = $event
        }, null, _parent));
        _push(`<p data-v-8bf03101>\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u6BD4\u4F8B\uFF1A2:3</p></div><div class="account-form-item" data-v-8bf03101><div class="form-item-name" data-v-8bf03101> \u516C\u4F17\u53F7\u4E8C\u7EF4\u7801 `);
        _push(ssrRenderComponent(_component_Poptip, {
          trigger: "hover",
          placement: "right-start"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img width="350"${ssrRenderAttr("src", bg4.value)} alt="" data-v-8bf03101${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  width: "350",
                  src: bg4.value,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="blue" data-v-8bf03101${_scopeId}>\u7528\u5728\u54EA\u91CC</span>`);
            } else {
              return [
                createVNode("span", { class: "blue" }, "\u7528\u5728\u54EA\u91CC")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ossUploaderNew, {
          url: params.value.wechatQrPic,
          "onUpdate:url": ($event) => params.value.wechatQrPic = $event
        }, null, _parent));
        _push(`<p data-v-8bf03101>\u652F\u6301PNG\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u6BD4\u4F8B1:1</p></div><div class="account-form-item" data-v-8bf03101><div class="form-item-name" data-v-8bf03101>\u516C\u53F8\u8054\u7CFB\u65B9\u5F0F</div>`);
        _push(ssrRenderComponent(_component_Input, {
          modelValue: params.value.companyContactInformation,
          "onUpdate:modelValue": ($event) => params.value.companyContactInformation = $event,
          type: "textarea",
          rows: 3,
          placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0"
        }, null, _parent));
        _push(`</div><div class="account-form-item" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-8bf03101><div class="form-item-name" data-v-8bf03101> \u7F51\u7AD9\u516C\u544A `);
        _push(ssrRenderComponent(_component_Poptip, {
          trigger: "hover",
          placement: "right-start"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img width="350"${ssrRenderAttr("src", bg11.value)} alt="" data-v-8bf03101${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  width: "350",
                  src: bg11.value,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="blue" data-v-8bf03101${_scopeId}>\u7528\u5728\u54EA\u91CC</span>`);
            } else {
              return [
                createVNode("span", { class: "blue" }, "\u7528\u5728\u54EA\u91CC")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="form-item-content" data-v-8bf03101><div class="content-name" data-v-8bf03101>\u6807\u9898</div>`);
        _push(ssrRenderComponent(_component_Input, {
          style: { "max-width": "400px" },
          modelValue: params.value.websiteNoticeTitle,
          "onUpdate:modelValue": ($event) => params.value.websiteNoticeTitle = $event,
          placeholder: "\u8BF7\u8F93\u5165\u6807\u9898"
        }, null, _parent));
        _push(`</div><div class="form-item-content" style="${ssrRenderStyle({ "align-items": "flex-start" })}" data-v-8bf03101><div class="content-name" data-v-8bf03101>\u5185\u5BB9</div><div class="content-area" data-v-8bf03101>`);
        _push(ssrRenderComponent(_component_cEdit, {
          content: params.value.websiteNoticeContent,
          "onUpdate:content": ($event) => params.value.websiteNoticeContent = $event
        }, null, _parent));
        _push(`</div></div></div><div class="account-form-item" data-v-8bf03101>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "primary",
          onClick: ($event) => toSubmit("web"),
          loading: loading.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u786E\u8BA4`);
            } else {
              return [
                createTextVNode("\u786E\u8BA4")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (pageType.value == 2) {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(imgList.value, (item, i) => {
          _push(`<div class="account-form-item edit" data-v-8bf03101><div class="form-item-name" data-v-8bf03101><div data-v-8bf03101>`);
          if (item.title) {
            _push(`<div data-v-8bf03101>${ssrInterpolate(item.title)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div data-v-8bf03101>${ssrInterpolate(item.name)}</div></div>`);
          _push(ssrRenderComponent(_component_Poptip, {
            trigger: "hover",
            placement: "right-start"
          }, {
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img width="350"${ssrRenderAttr("src", item.img)} alt="" data-v-8bf03101${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    width: "350",
                    src: item.img,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="blue" data-v-8bf03101${_scopeId}>\u7528\u5728\u54EA\u91CC</span>`);
              } else {
                return [
                  createVNode("span", { class: "blue" }, "\u7528\u5728\u54EA\u91CC")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="img-list" data-v-8bf03101><!--[-->`);
          ssrRenderList(imgList.value[i].list, (iten, j) => {
            _push(`<div class="list-upload" data-v-8bf03101>`);
            _push(ssrRenderComponent(_component_ossUploaderNew, {
              url: imgList.value[i].list[j].channelUrl,
              "onUpdate:url": ($event) => imgList.value[i].list[j].channelUrl = $event,
              onToRemove: ($event) => toRemoveImg(j, iten.type),
              onUploadSuccess: ($event) => getImg($event, j, iten.type)
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div><p data-v-8bf03101>${ssrInterpolate(item.desc)}</p></div>`);
        });
        _push(`<!--]--><div class="account-form-item" data-v-8bf03101>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "primary",
          onClick: ($event) => toSubmit("edit"),
          loading: loading.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u786E\u8BA4`);
            } else {
              return [
                createTextVNode("\u786E\u8BA4")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/config/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bf03101"]]);

export { index as default };
//# sourceMappingURL=index-76bbb1af.mjs.map
