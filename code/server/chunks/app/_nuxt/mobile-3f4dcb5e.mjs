import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_2 } from './bottom-arrow-07ec677f.mjs';
import { useRouter } from 'vue-router';
import { a as _export_sfc } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mobile",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const pageType = ref("");
    getCurrentInstance();
    const router = useRouter();
    const params = ref({});
    const showPicker = ref(false);
    const selectIndex = ref(0);
    const customFieldName = ref({
      value: "index"
    });
    const onConfirm = (e) => {
      if (e && e.selectedOptions && e.selectedOptions[0]) {
        selectIndex.value = e.selectedOptions[0].index;
      }
      showPicker.value = false;
    };
    watch(() => props.data, () => {
      if (router.currentRoute.value && router.currentRoute.value.query && router.currentRoute.value.query.type) {
        pageType.value = router.currentRoute.value.query.type;
      }
      if (props.data && props.data.code) {
        params.value = JSON.parse(JSON.stringify(props.data));
        params.value.interviewQuestionAnswerList.forEach((item, i) => {
          item.index = i;
        });
      }
    }, { immediate: true });
    watch(() => params.value, () => {
      if (params.value && params.value.code)
        ;
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_van_popup = resolveComponent("van-popup");
      const _component_van_picker = resolveComponent("van-picker");
      if (params.value && params.value.code) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile" }, _attrs))} data-v-e29296e5><div class="mobile-title" data-v-e29296e5>${ssrInterpolate(params.value.positionName)}\u7B14\u8BD5-${ssrInterpolate(params.value.name)}</div><div class="mobile-name" data-v-e29296e5><div data-v-e29296e5>\u5F53\u524D</div><div class="select" data-v-e29296e5>\u7B2C${ssrInterpolate(selectIndex.value + 1)}\u9898<img${ssrRenderAttr("src", _imports_2)} data-v-e29296e5></div><div data-v-e29296e5>\u603B\u5171${ssrInterpolate(params.value.interviewQuestionAnswerList.length)}\u9898</div></div><div class="mobile-answer" data-v-e29296e5><div class="answer-title" data-v-e29296e5><div class="title" data-v-e29296e5>\u9898\u76EE${ssrInterpolate(selectIndex.value + 1)}\uFF1A</div><div data-v-e29296e5>${ssrInterpolate(params.value.interviewQuestionAnswerList[selectIndex.value].question)}</div></div><div class="answer-content" data-v-e29296e5><textarea class="input" placeholder="\u8BF7\u7B54\u9898" data-v-e29296e5>${ssrInterpolate(params.value.interviewQuestionAnswerList[selectIndex.value].answer)}</textarea></div></div><div class="mobile-bottom" data-v-e29296e5>`);
        if (params.value && params.value.interviewQuestionAnswerList) {
          _push(`<!--[-->`);
          if (params.value.interviewQuestionAnswerList[selectIndex.value - 1]) {
            _push(`<div class="mobile-btn" data-v-e29296e5>\u4E0A\u4E00\u9898</div>`);
          } else {
            _push(`<!---->`);
          }
          if (params.value.interviewQuestionAnswerList[selectIndex.value + 1]) {
            _push(`<div class="mobile-btn active" data-v-e29296e5>\u4E0B\u4E00\u9898</div>`);
          } else {
            _push(`<!---->`);
          }
          if (!params.value.interviewQuestionAnswerList[selectIndex.value + 1]) {
            _push(`<div class="mobile-btn active" data-v-e29296e5>\u63D0\u4EA4</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_van_popup, {
          show: showPicker.value,
          "onUpdate:show": ($event) => showPicker.value = $event,
          round: "",
          position: "bottom"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_van_picker, {
                title: "\u9009\u62E9\u9898\u76EE",
                "columns-field-names": customFieldName.value,
                columns: params.value.interviewQuestionAnswerList,
                "confirm-button-text": "\u786E\u5B9A",
                onCancel: ($event) => showPicker.value = false,
                onConfirm
              }, {
                option: withCtx((item, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="picker-item" data-v-e29296e5${_scopeId2}><div data-v-e29296e5${_scopeId2}>\u7B2C${ssrInterpolate(item.index + 1)}\u9898</div>`);
                    if (_ctx.$isEmpty(item.answer)) {
                      _push3(`<div class="notFilled" data-v-e29296e5${_scopeId2}>\u672A\u586B\u5199</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "picker-item" }, [
                        createVNode("div", null, "\u7B2C" + toDisplayString(item.index + 1) + "\u9898", 1),
                        _ctx.$isEmpty(item.answer) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "notFilled"
                        }, "\u672A\u586B\u5199")) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_van_picker, {
                  title: "\u9009\u62E9\u9898\u76EE",
                  "columns-field-names": customFieldName.value,
                  columns: params.value.interviewQuestionAnswerList,
                  "confirm-button-text": "\u786E\u5B9A",
                  onCancel: ($event) => showPicker.value = false,
                  onConfirm
                }, {
                  option: withCtx((item) => [
                    createVNode("div", { class: "picker-item" }, [
                      createVNode("div", null, "\u7B2C" + toDisplayString(item.index + 1) + "\u9898", 1),
                      _ctx.$isEmpty(item.answer) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "notFilled"
                      }, "\u672A\u586B\u5199")) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }, 8, ["columns-field-names", "columns", "onCancel"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/share/answer/components/mobile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e29296e5"]]);

export { mobile as default };
//# sourceMappingURL=mobile-3f4dcb5e.mjs.map
