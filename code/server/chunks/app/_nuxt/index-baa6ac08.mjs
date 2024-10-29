import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_4, a as _imports_5 } from './delete-888252d9.mjs';
import choosePosition from './choosePosition-ea85243e.mjs';
import positions from './positions-f3ee7fa8.mjs';
import uploadVitae from './uploadVitae-579dce57.mjs';
import { useRouter } from 'vue-router';
import ipkg from 'view-ui-plus';
import vitae from './vitae-8fb2bafa.mjs';
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
import 'axios';
import 'crypto-js';
import 'pinia-plugin-persistedstate';
import 'vant';
import 'defu';
import 'qrcode.vue';
import './electric-f4a0b755.mjs';
import './associate-75692ed7.mjs';
import './close-e8808509.mjs';
import './ossUploader-2d65ed0f.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import './curriculum-88d76de0.mjs';

const _imports_0 = "" + buildAssetsURL("hr.92b466b8.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { Modal } = ipkg;
    const { proxy } = getCurrentInstance();
    useRouter();
    const vitaeRef = ref();
    const choosePositionRef = ref();
    const positionsRef = ref();
    const uploadVitaeRef = ref();
    const vitaeList = ref([]);
    const postList = ref([]);
    const stateList = ref([
      { name: "\u672A\u901A\u8FC7\u521D\u7B5B", value: "NO_FILTERED" },
      { name: "\u672A\u7B14\u8BD5", value: "NOT_WRITTEN_TEST" },
      { name: "\u5F85\u67E5\u770B", value: "TO_BE_VIEWED" },
      { name: "\u5DF2\u67E5\u770B", value: "VIEWED" }
    ]);
    const choosePos = (e) => {
      uploadVitaeRef.value.showFn(e);
    };
    const init = () => {
      getPostList();
      getVitaeList();
    };
    const getPostList = () => {
      proxy.$api.queryPositionList().then((res) => {
        postList.value = res.data;
      });
    };
    const getVitaeList = () => {
      proxy.$api.queryResumePageList({
        pageSize: 3
      }).then((res) => {
        vitaeList.value = res.data;
      });
    };
    const deletePost = (record) => {
      if (record) {
        Modal.confirm({
          okText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88",
          content: Number(record.totalCount) > 0 ? "\u8BE5\u804C\u4F4D\u4E0B\u6709\u7B80\u5386\uFF0C\u5220\u9664\u804C\u4F4D\u4E5F\u4F1A\u540C\u65F6\u5220\u9664\u7B80\u5386\uFF0C\u786E\u8BA4\u5220\u9664\u5417?" : "\u662F\u5426\u5220\u9664\u8BE5\u804C\u4F4D?",
          onOk: () => {
            proxy.$api.deletePosition({
              code: record.code
            }).then(() => {
              proxy.$Message.success("\u5DF2\u5220\u9664");
              init();
            });
          }
        });
      }
    };
    const deleteVitae = (record) => {
      if (record) {
        Modal.confirm({
          okText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88",
          content: "\u662F\u5426\u5220\u9664\u8BE5\u7B80\u5386?",
          onOk: () => {
            let data = {
              code: record.code
            };
            proxy.$api.deleteResume(data).then(() => {
              proxy.$Message.success("\u5DF2\u5220\u9664");
              getVitaeList();
            });
          }
        });
      }
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hr" }, _attrs))} data-v-d87eed4c><div class="hr-top" data-v-d87eed4c><img${ssrRenderAttr("src", _imports_0)} data-v-d87eed4c></div><div class="hr-content" data-v-d87eed4c>`);
      if (postList.value.length > 0 && vitaeList.value.length > 0) {
        _push(`<div class="hr-content-title" data-v-d87eed4c>\u6700\u65B0\u7B80\u5386</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hr-content-list" data-v-d87eed4c>`);
      if (postList.value.length > 0) {
        _push(`<div class="upload" data-v-d87eed4c></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(vitaeList.value, (item) => {
        _push(`<div class="content-item" data-v-d87eed4c><div class="item-title" data-v-d87eed4c><div class="name" data-v-d87eed4c>${ssrInterpolate(item.name)}</div><div class="result" data-v-d87eed4c>`);
        if (item.dataStatus == "NO_FILTERED") {
          _push(`<div class="grayPoint" data-v-d87eed4c></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.dataStatus == "VIEWED") {
          _push(`<div class="greenPoint" data-v-d87eed4c></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.dataStatus == "NOT_WRITTEN_TEST") {
          _push(`<div class="redPoint" data-v-d87eed4c></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.dataStatus == "TO_BE_VIEWED") {
          _push(`<div class="brownPoint" data-v-d87eed4c></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-d87eed4c><!--[-->`);
        ssrRenderList(stateList.value, (iten) => {
          _push(`<!--[-->`);
          if (iten.value == item.dataStatus) {
            _push(`<!--[-->${ssrInterpolate(iten.name)}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div></div><div class="item-content" data-v-d87eed4c><div class="content-left" data-v-d87eed4c><div class="degree" data-v-d87eed4c>\u5339\u914D\u5EA6 ${ssrInterpolate(item.matchDegree)}%</div>`);
        if (!_ctx.$isEmpty(item.point)) {
          _push(`<div class="mark" data-v-d87eed4c>\u8BC4\u5206 ${ssrInterpolate(item.point)}\u5206</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="content-right" data-v-d87eed4c>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, { content: "\u7F16\u8F91" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="action-ico" data-v-d87eed4c${_scopeId2}><img class="ico"${ssrRenderAttr("src", _imports_4)} data-v-d87eed4c${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "action-ico" }, [
                        createVNode("img", {
                          class: "ico",
                          onClick: withModifiers(($event) => vitaeRef.value.showFn(item), ["stop"]),
                          src: _imports_4
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Tooltip, { content: "\u5220\u9664" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="action-ico" data-v-d87eed4c${_scopeId2}><img class="ico"${ssrRenderAttr("src", _imports_5)} data-v-d87eed4c${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "action-ico" }, [
                        createVNode("img", {
                          class: "ico",
                          onClick: withModifiers(($event) => deleteVitae(item), ["stop"]),
                          src: _imports_5
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Tooltip, { content: "\u7F16\u8F91" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "action-ico" }, [
                      createVNode("img", {
                        class: "ico",
                        onClick: withModifiers(($event) => vitaeRef.value.showFn(item), ["stop"]),
                        src: _imports_4
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_Tooltip, { content: "\u5220\u9664" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "action-ico" }, [
                      createVNode("img", {
                        class: "ico",
                        onClick: withModifiers(($event) => deleteVitae(item), ["stop"]),
                        src: _imports_5
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div><div class="item-bottom" data-v-d87eed4c>`);
        if (!_ctx.$isEmpty(item.gmtCreate)) {
          _push(`<div class="bottom-item" data-v-d87eed4c>${ssrInterpolate(item.gmtCreate)}\u4E0A\u4F20</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!_ctx.$isEmpty(item.gmtWrittenExam)) {
          _push(`<div class="bottom-item" data-v-d87eed4c>${ssrInterpolate(item.gmtWrittenExam)}\u7B14\u8BD5</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="hr-content-title" data-v-d87eed4c>\u6211\u7684\u804C\u4F4D</div><div class="hr-content-positions" data-v-d87eed4c><div class="positions" data-v-d87eed4c></div><!--[-->`);
      ssrRenderList(postList.value, (item) => {
        _push(`<div class="positions-item" data-v-d87eed4c>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="item-delete" data-v-d87eed4c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Tooltip, { content: "\u5220\u9664" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="action-ico" data-v-d87eed4c${_scopeId2}><img class="ico"${ssrRenderAttr("src", _imports_5)} data-v-d87eed4c${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "action-ico" }, [
                        createVNode("img", {
                          class: "ico",
                          onClick: withModifiers(($event) => deletePost(item), ["stop"]),
                          src: _imports_5
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item-delete" }, [
                  createVNode(_component_Tooltip, { content: "\u5220\u9664" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "action-ico" }, [
                        createVNode("img", {
                          class: "ico",
                          onClick: withModifiers(($event) => deletePost(item), ["stop"]),
                          src: _imports_5
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="item-title" data-v-d87eed4c>${ssrInterpolate(item.name)}</div><div class="item-content" data-v-d87eed4c><div class="content-num" data-v-d87eed4c><div class="num" data-v-d87eed4c>${ssrInterpolate(item.hadExamCount)}</div><div data-v-d87eed4c>\u5DF2\u7B14\u8BD5</div></div><div class="content-num" data-v-d87eed4c><div class="num" data-v-d87eed4c>${ssrInterpolate(item.unExamCount)}</div><div data-v-d87eed4c>\u672A\u7B14\u8BD5</div></div><div class="content-num" data-v-d87eed4c><div class="num" data-v-d87eed4c>${ssrInterpolate(item.unPassCount)}</div><div data-v-d87eed4c>\u672A\u901A\u8FC7</div></div></div><div class="item-bottom" data-v-d87eed4c><div class="bottom-left" data-v-d87eed4c> + \u4E0A\u4F20\u7B80\u5386 </div><div class="bottom-right" data-v-d87eed4c> \u5171${ssrInterpolate(item.totalCount)}\u4EFD\u7B80\u5386 </div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(choosePosition, {
        ref_key: "choosePositionRef",
        ref: choosePositionRef,
        onChoose: choosePos
      }, null, _parent));
      _push(ssrRenderComponent(positions, {
        ref_key: "positionsRef",
        ref: positionsRef,
        onInit: getPostList
      }, null, _parent));
      _push(ssrRenderComponent(uploadVitae, {
        ref_key: "uploadVitaeRef",
        ref: uploadVitaeRef,
        onInit: init
      }, null, _parent));
      _push(ssrRenderComponent(vitae, {
        ref_key: "vitaeRef",
        ref: vitaeRef,
        onInit: init
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/hr/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d87eed4c"]]);

export { index as default };
//# sourceMappingURL=index-baa6ac08.mjs.map
