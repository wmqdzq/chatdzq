import { b as buildAssetsURL } from '../../paths.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_4 } from './edit1-d50fac04.mjs';
import { _ as _imports_5 } from './del1-dbdd8b76.mjs';
import { _ as _imports_6, a as _imports_7, b as _imports_8 } from './del-96ef2702.mjs';
import Draggable from 'vuedraggable';
import { a as _export_sfc, g as getRouting } from '../server.mjs';
import { useRouter } from 'vue-router';
import { a as aiSearchImg, h as hrImg, p as pptImg, n as networkingImg } from './ppt-40078db8.mjs';
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

const _imports_0 = "" + buildAssetsURL("banner.b06833c7.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hr",
  __ssrInlineRender: true,
  setup(__props) {
    getRouting();
    useRouter();
    getCurrentInstance();
    ref(false);
    const list = ref([{
      title: "\u6700\u8FD1\u5E38\u7528",
      list: [{
        type: "url",
        url: "/ai/search",
        logo: aiSearchImg,
        name: "AI\u641C\u7D22",
        desc: "\u8054\u7F51\u83B7\u53D6\u4E13\u4E1A\u56DE\u7B54\u5E76\u603B\u7ED3"
      }, {
        type: "url",
        url: "/ai/hr",
        logo: hrImg,
        name: "\u667A\u80FDHR",
        desc: "\u7528AI\u5224\u65AD\u5339\u914D\u5EA6\u5E76\u8003\u8BC4\u6C42\u804C\u8005"
      }, {
        type: "url",
        url: "/ai/ppt",
        logo: pptImg,
        name: "\u667A\u80FDPPT",
        desc: "\u53EA\u8981\u8F93\u5165\u9700\u6C42\uFF0C\u5C31\u80FD\u4E00\u952E\u751F\u6210\u597D\u770B\u7684PPT"
      }]
    }, {
      title: "\u9762\u8BD5\u62DB\u8058",
      list: [{
        type: "url",
        url: "/ai/hr",
        logo: hrImg,
        name: "\u667A\u80FDHR",
        desc: "\u7528AI\u5224\u65AD\u5339\u914D\u5EA6\u5E76\u8003\u8BC4\u6C42\u804C\u8005"
      }]
    }, {
      title: "\u901A\u7528\u5DE5\u5177",
      list: [{
        type: "url",
        url: "/robot/creative/info?code=1725523129159405570",
        logo: "https://chat-ai-prod-cdn.dzqnet.com/global/photo/article/SC2023071811095887340034.jpg",
        name: "\u65E5/\u5468/\u6708\u62A5\u751F\u6210\u5668",
        desc: "\u4E00\u952E\u751F\u6210\u65E5\u62A5\u3001\u6708\u62A5\u3001\u5468\u62A5"
      }, {
        type: "url",
        url: "/ai/ppt",
        logo: pptImg,
        name: "\u667A\u80FDPPT",
        desc: "\u53EA\u8981\u8F93\u5165\u9700\u6C42\uFF0C\u5C31\u80FD\u4E00\u952E\u751F\u6210\u597D\u770B\u7684PPT"
      }, {
        type: "url",
        url: "/robot/creative/info?code=1772192768899436545",
        logo: networkingImg,
        name: "\u5DE5\u4F5C\u6C47\u62A5",
        desc: "\u603B\u7ED3\u4E2A\u4EBA\u6216\u56E2\u961F\u5DE5\u4F5C\u6210\u679C"
      }]
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aiArea" }, _attrs))} data-v-2462e0e4><div class="banner" data-v-2462e0e4><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-2462e0e4><div class="oper" data-v-2462e0e4><div class="item" data-v-2462e0e4>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "icon",
        type: "ios-images"
      }, null, _parent));
      _push(` \u4FEE\u6539\u56FE\u7247 </div><div class="item" data-v-2462e0e4>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "icon",
        type: "md-eye"
      }, null, _parent));
      _push(` \u9690\u85CF\u663E\u793A </div></div></div><div class="list-area" data-v-2462e0e4>`);
      _push(ssrRenderComponent(unref(Draggable), {
        modelValue: list.value,
        "onUpdate:modelValue": ($event) => list.value = $event,
        "item-key": "id"
      }, {
        item: withCtx(({ element }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="list clearfix" data-v-2462e0e4${_scopeId}><div class="title clearfix" data-v-2462e0e4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "icon",
              type: "md-menu"
            }, null, _parent2, _scopeId));
            _push2(`<h2 data-v-2462e0e4${_scopeId}>${ssrInterpolate(element.title)}</h2><div class="item" data-v-2462e0e4${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-2462e0e4${_scopeId}></div><div class="item" data-v-2462e0e4${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-2462e0e4${_scopeId}></div></div><div class="add clearfix" data-v-2462e0e4${_scopeId}><div class="item" data-v-2462e0e4${_scopeId}><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-2462e0e4${_scopeId}><h3 data-v-2462e0e4${_scopeId}>\u81EA\u5B9A\u4E49\u6DFB\u52A0</h3><p data-v-2462e0e4${_scopeId}>\u652F\u6301\u667A\u80FD\u4F53\uFF0C\u5DE5\u5177\u5E94\u7528\u7B49</p></div><div class="item purple" data-v-2462e0e4${_scopeId}><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-2462e0e4${_scopeId}><h3 data-v-2462e0e4${_scopeId}>\u667A\u80FD\u5339\u914D</h3><p data-v-2462e0e4${_scopeId}>\u6839\u636E\u667A\u80FD\uFF0C\u884C\u4E1A\u81EA\u52A8\u5339\u914D</p></div></div>`);
            if (!_ctx.$isEmpty(element.list)) {
              _push2(`<ul class="robot-list" data-v-2462e0e4${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Draggable), {
                modelValue: element.list,
                "onUpdate:modelValue": ($event) => element.list = $event,
                draggable: ".robot",
                group: "robot"
              }, {
                item: withCtx(({ element: subElement, index }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="robot" data-v-2462e0e4${_scopeId2}><img class="del"${ssrRenderAttr("src", _imports_8)} alt="" data-v-2462e0e4${_scopeId2}><img class="robot-logo"${ssrRenderAttr("src", subElement.logo)} alt="" data-v-2462e0e4${_scopeId2}><h3${ssrRenderAttr("title", subElement.name)} data-v-2462e0e4${_scopeId2}>${ssrInterpolate(subElement.name)}</h3><p${ssrRenderAttr("title", subElement.desc)} data-v-2462e0e4${_scopeId2}>${ssrInterpolate(subElement.desc)}</p></li>`);
                  } else {
                    return [
                      createVNode("li", { class: "robot" }, [
                        createVNode("img", {
                          class: "del",
                          onClick: ($event) => element.list.splice(index, 1),
                          src: _imports_8,
                          alt: ""
                        }, null, 8, ["onClick"]),
                        createVNode("img", {
                          class: "robot-logo",
                          src: subElement.logo,
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("h3", {
                          title: subElement.name
                        }, toDisplayString(subElement.name), 9, ["title"]),
                        createVNode("p", {
                          title: subElement.desc
                        }, toDisplayString(subElement.desc), 9, ["title"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</ul>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "list clearfix" }, [
                createVNode("div", { class: "title clearfix" }, [
                  createVNode(_component_Icon, {
                    class: "icon",
                    type: "md-menu"
                  }),
                  createVNode("h2", null, toDisplayString(element.title), 1),
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _imports_4,
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _imports_5,
                      alt: ""
                    })
                  ])
                ]),
                createVNode("div", { class: "add clearfix" }, [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _imports_6,
                      alt: ""
                    }),
                    createVNode("h3", null, "\u81EA\u5B9A\u4E49\u6DFB\u52A0"),
                    createVNode("p", null, "\u652F\u6301\u667A\u80FD\u4F53\uFF0C\u5DE5\u5177\u5E94\u7528\u7B49")
                  ]),
                  createVNode("div", { class: "item purple" }, [
                    createVNode("img", {
                      src: _imports_7,
                      alt: ""
                    }),
                    createVNode("h3", null, "\u667A\u80FD\u5339\u914D"),
                    createVNode("p", null, "\u6839\u636E\u667A\u80FD\uFF0C\u884C\u4E1A\u81EA\u52A8\u5339\u914D")
                  ])
                ]),
                !_ctx.$isEmpty(element.list) ? (openBlock(), createBlock("ul", {
                  key: 0,
                  class: "robot-list"
                }, [
                  createVNode(unref(Draggable), {
                    modelValue: element.list,
                    "onUpdate:modelValue": ($event) => element.list = $event,
                    draggable: ".robot",
                    group: "robot"
                  }, {
                    item: withCtx(({ element: subElement, index }) => [
                      createVNode("li", { class: "robot" }, [
                        createVNode("img", {
                          class: "del",
                          onClick: ($event) => element.list.splice(index, 1),
                          src: _imports_8,
                          alt: ""
                        }, null, 8, ["onClick"]),
                        createVNode("img", {
                          class: "robot-logo",
                          src: subElement.logo,
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("h3", {
                          title: subElement.name
                        }, toDisplayString(subElement.name), 9, ["title"]),
                        createVNode("p", {
                          title: subElement.desc
                        }, toDisplayString(subElement.desc), 9, ["title"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/app/hr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hr = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2462e0e4"]]);

export { hr as default };
//# sourceMappingURL=hr-08961b89.mjs.map
