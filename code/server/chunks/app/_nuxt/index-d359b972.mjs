import { _ as __nuxt_component_1 } from './sPrompt-baa4194f.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { a as _export_sfc, f as useI18n } from '../server.mjs';
import './close-5dffb58a.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const router = useRouter();
    const sPromptRef = ref();
    const btnLoading = ref(false);
    const tableLoading = ref(false);
    const { proxy } = getCurrentInstance();
    const sourceDisplayListFlag = ref(false);
    const partnerFlag = ref(false);
    const columns = ref([
      { title: t("aiEnterprise.workbench.\u5DE5\u4F5C\u53F0\u9875\u9762"), key: "name" },
      { title: t("aiEnterprise.workbench.\u53EF\u89C1\u8303\u56F4"), key: "visibleRangeList", slot: "visibleRangeList" },
      { title: t("public.\u64CD\u4F5C"), slot: "action" }
    ]);
    const selectIndex = ref("");
    const data = ref([]);
    const init = () => {
      tableLoading.value = true;
      proxy.$api.queryWorkbenchList().then((res) => {
        data.value = res.data ? res.data : [];
        tableLoading.value = false;
      }).catch(() => {
        tableLoading.value = false;
      });
      proxy.$api.getUserAccountInfo().then((res) => {
        sourceDisplayListFlag.value = res.data.sourceDisplayListFlag;
        partnerFlag.value = res.data.partnerFlag;
      });
    };
    const addPage = (record) => {
      if (record) {
        router.push("/ai/enterprise/build/workbench/deploy?code=" + record.code + "&bizType=" + record.bizType);
      } else {
        if (data.value.length >= 20) {
          proxy.$Message.error(t("aiEnterprise.workbench.\u6700\u591A\u53EF\u6DFB\u52A020\u4E2A\u9875\u9762"));
          return;
        }
        router.push("/ai/enterprise/build/workbench/deploy?bizType=WORKBENCH");
      }
    };
    const toDelete = (index2) => {
      selectIndex.value = index2;
      sPromptRef.value.showFn();
    };
    const toDeleteConfirm = () => {
      tableLoading.value = true;
      proxy.$api.deleteSecondView({
        viewCode: data.value[selectIndex.value].code
      }).then(() => {
        tableLoading.value = false;
        proxy.$Message.success(t("publicMsg.\u5DF2\u5220\u9664"));
        init();
      }).catch(() => {
        tableLoading.value = false;
      });
    };
    const changeSwitch = () => {
      let data2 = {
        configId: "SOURCE_DISPLAY_LIST",
        configType: "SOURCE_DISPLAY_LIST",
        domainCode: "fusion",
        dataStatus: sourceDisplayListFlag.value ? "NORMAL" : "DISABLE"
      };
      tableLoading.value = true;
      proxy.$api.updateSystemConfig(data2).then(() => {
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        tableLoading.value = false;
        init();
      }).catch(() => {
        tableLoading.value = false;
      });
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      const _component_Switch = resolveComponent("Switch");
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Icon = resolveComponent("Icon");
      const _component_sPrompt = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "workbench" }, _attrs))} data-v-8f6aecb5>`);
      _push(ssrRenderComponent(_component_Table, {
        columns: columns.value,
        data: data.value,
        loading: tableLoading.value,
        "max-height": "500",
        border: data.value.length > 0 ? true : false
      }, {
        visibleRangeList: withCtx(({ row, index: index2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (row.permissionList && row.permissionList.length > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(row.permissionList, (item) => {
                _push2(`<!--[-->`);
                if (item.type == "user") {
                  _push2(`<div class="tag2" data-v-8f6aecb5${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.type == "dept") {
                  _push2(`<div class="tag3" data-v-8f6aecb5${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(row.visibleRangeList, (item) => {
                _push2(`<div class="tag1" data-v-8f6aecb5${_scopeId}>${ssrInterpolate(item)}</div>`);
              });
              _push2(`<!--]-->`);
            }
          } else {
            return [
              row.permissionList && row.permissionList.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(row.permissionList, (item) => {
                return openBlock(), createBlock(Fragment, null, [
                  item.type == "user" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "tag2"
                  }, toDisplayString(item.name), 1)) : createCommentVNode("", true),
                  item.type == "dept" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "tag3"
                  }, toDisplayString(item.name), 1)) : createCommentVNode("", true)
                ], 64);
              }), 256)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(row.visibleRangeList, (item) => {
                return openBlock(), createBlock("div", { class: "tag1" }, toDisplayString(item), 1);
              }), 256))
            ];
          }
        }),
        action: withCtx(({ row, index: index2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (row.editFlag) {
              _push2(`<span data-v-8f6aecb5${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u914D\u7F6E"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (row.delFlag) {
              _push2(`<span class="deleteSpan" data-v-8f6aecb5${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u5220\u9664"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              row.editFlag ? (openBlock(), createBlock("span", {
                key: 0,
                onClick: ($event) => addPage(row)
              }, toDisplayString(_ctx.$t("public.\u914D\u7F6E")), 9, ["onClick"])) : createCommentVNode("", true),
              row.delFlag ? (openBlock(), createBlock("span", {
                key: 1,
                class: "deleteSpan",
                onClick: ($event) => toDelete(index2)
              }, toDisplayString(_ctx.$t("public.\u5220\u9664")), 9, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="table-bottom" data-v-8f6aecb5><div class="add" data-v-8f6aecb5>+ ${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u521B\u5EFA\u9875\u9762"))}</div><div class="name" data-v-8f6aecb5>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u6700\u591A\u53EF\u6DFB\u52A020\u4E2A\u9875\u9762"))}</div>`);
      if (partnerFlag.value) {
        _push(`<div class="action-switch" data-v-8f6aecb5>`);
        _push(ssrRenderComponent(_component_Switch, {
          onOnChange: changeSwitch,
          modelValue: sourceDisplayListFlag.value,
          "onUpdate:modelValue": ($event) => sourceDisplayListFlag.value = $event
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u5355\u5DE5\u4F5C\u53F0\u6A21\u5F0F"))} `);
        _push(ssrRenderComponent(_component_Tooltip, {
          content: _ctx.$t("aiEnterprise.workbench.\u9ED8\u8BA4\u53D6\u7B2C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u53EF\u5220\u9664\u7684\u5DE5\u4F5C\u53F0"),
          "max-width": "200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                type: "ios-help-circle-outline",
                class: "pointer"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  type: "ios-help-circle-outline",
                  class: "pointer"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_sPrompt, {
        ref_key: "sPromptRef",
        ref: sPromptRef,
        title: _ctx.$t("public.\u5220\u9664"),
        loading: btnLoading.value,
        onOk: toDeleteConfirm
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-8f6aecb5${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u662F\u5426\u786E\u8BA4\u5220\u9664"))}?</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u662F\u5426\u786E\u8BA4\u5220\u9664")) + "?", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/workbench/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f6aecb5"]]);

export { index as default };
//# sourceMappingURL=index-d359b972.mjs.map
