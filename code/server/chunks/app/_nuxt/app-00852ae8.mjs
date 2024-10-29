import { _ as __nuxt_component_1 } from './sPrompt-baa4194f.mjs';
import { _ as __nuxt_component_3 } from './addMember2-d1ffd968.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { a as _export_sfc, f as useI18n } from '../server.mjs';
import './close-5dffb58a.mjs';
import '../../paths.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const addMemberRef = ref();
    useRouter();
    const sPromptRef = ref();
    const btnLoading = ref(false);
    const tableLoading = ref(false);
    const { proxy } = getCurrentInstance();
    const columns = ref([
      { title: t("aiEnterprise.workbench.\u5E94\u7528\u540D\u79F0"), key: "cateName", slot: "cateName" },
      { title: t("aiEnterprise.workbench.\u53EF\u89C1\u8303\u56F4"), key: "visibleRangeList", slot: "visibleRangeList" },
      { title: t("aiEnterprise.workbench.\u662F\u5426\u663E\u793A"), key: "dataStatus", slot: "dataStatus" },
      { title: t("public.\u64CD\u4F5C"), slot: "action" }
    ]);
    const selectCode = ref("");
    const originaPermissionList = ref([]);
    const selectIndex = ref("");
    const data = ref([]);
    const data2 = ref([]);
    const init = () => {
      tableLoading.value = true;
      proxy.$api.queryAiApplyList({
        type: "AI_APPLY_CATEGORY"
      }).then((res) => {
        data.value = JSON.parse(JSON.stringify(res.data));
        data2.value = JSON.parse(JSON.stringify(res.data));
        tableLoading.value = false;
      }).catch(() => {
        tableLoading.value = false;
      });
    };
    const toDeleteConfirm = () => {
      tableLoading.value = true;
      proxy.$api.deleteSecondView({
        viewCode: data.value[selectIndex.value].code
      }).then(() => {
        tableLoading.value = false;
        proxy.$Message.success("\u5DF2\u5220\u9664");
        init();
      }).catch(() => {
        tableLoading.value = false;
      });
    };
    const toEdit = (record, index) => {
      originaPermissionList.value = data2.value[index].permissionList;
      selectCode.value = record.code;
      addMemberRef.value.showFn(JSON.parse(JSON.stringify(record.permissionList)), JSON.parse(JSON.stringify(originaPermissionList.value)));
    };
    const changeState = (index) => {
      proxy.$api.editAiApply({
        code: data.value[index].code,
        dataStatus: data.value[index].dataStatus
      }).then(() => {
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        init();
      });
    };
    const getDifferences = (e) => {
      tableLoading.value = true;
      proxy.$api.operateEquityPermission({
        code: selectCode.value,
        permissionList: e
      }).then(() => {
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        tableLoading.value = false;
        init();
      }).catch(() => {
        tableLoading.value = false;
      });
    };
    const onDragDrop = (index1, index2) => {
      let list = swapElements(data.value, index1, index2);
      let datas = {
        type: "AI_APPLY_CATEGORY",
        codeList: []
      };
      tableLoading.value = true;
      list.forEach((item, i) => {
        datas.codeList.push(item.code);
        if (i == Number(list.length - 1)) {
          proxy.$api.sortAiApplyList(datas).then(() => {
            tableLoading.value = false;
            proxy.$Message.success("\u5DF2\u66F4\u6539");
            init();
          }).catch(() => {
            tableLoading.value = false;
          });
        }
      });
    };
    const swapElements = (arr, index1, index2) => {
      if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
      } else {
        console.error("Invalid indices");
      }
      return arr;
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      const _component_Icon = resolveComponent("Icon");
      const _component_Switch = resolveComponent("Switch");
      const _component_sPrompt = __nuxt_component_1;
      const _component_addMember2 = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "workbench" }, _attrs))} data-v-dbc2c81c><div data-v-dbc2c81c>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u53EF\u8FDB\u884C\u62D6\u52A8\u4FEE\u6539\u6392\u5E8F"))}</div>`);
      _push(ssrRenderComponent(_component_Table, {
        draggable: "",
        onOnDragDrop: onDragDrop,
        columns: columns.value,
        data: data.value,
        loading: tableLoading.value,
        "max-height": "500",
        border: data.value.length > 0 ? true : false
      }, {
        cateName: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-dbc2c81c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              type: "md-menu",
              class: "pointer"
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-dbc2c81c${_scopeId}>${ssrInterpolate(row.cateName)}</div></div>`);
          } else {
            return [
              createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                createVNode(_component_Icon, {
                  type: "md-menu",
                  class: "pointer"
                }),
                createVNode("div", null, toDisplayString(row.cateName), 1)
              ])
            ];
          }
        }),
        visibleRangeList: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (row.permissionList && row.permissionList.length > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(row.permissionList, (item) => {
                _push2(`<!--[-->`);
                if (item.type == "user") {
                  _push2(`<div class="tag2" data-v-dbc2c81c${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.type == "dept") {
                  _push2(`<div class="tag3" data-v-dbc2c81c${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(row.visibleRangeList, (item) => {
                _push2(`<div class="tag1" data-v-dbc2c81c${_scopeId}>${ssrInterpolate(item)}</div>`);
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
        dataStatus: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Switch, {
              modelValue: data.value[index].dataStatus,
              "onUpdate:modelValue": ($event) => data.value[index].dataStatus = $event,
              onOnChange: ($event) => changeState(index),
              "true-value": "NORMAL",
              "false-value": "DISABLE"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Switch, {
                modelValue: data.value[index].dataStatus,
                "onUpdate:modelValue": ($event) => data.value[index].dataStatus = $event,
                onOnChange: ($event) => changeState(index),
                "true-value": "NORMAL",
                "false-value": "DISABLE"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
            ];
          }
        }),
        action: withCtx(({ row, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-dbc2c81c${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u914D\u7F6E"))}</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => toEdit(row, index)
              }, toDisplayString(_ctx.$t("public.\u914D\u7F6E")), 9, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_sPrompt, {
        ref_key: "sPromptRef",
        ref: sPromptRef,
        title: "\u5220\u9664",
        loading: btnLoading.value,
        onOk: toDeleteConfirm
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-dbc2c81c${_scopeId}>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u662F\u5426\u786E\u8BA4\u5220\u9664"))}?</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u662F\u5426\u786E\u8BA4\u5220\u9664")) + "?", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_addMember2, {
        ref_key: "addMemberRef",
        ref: addMemberRef,
        userOpen: true,
        onGetDifferences: getDifferences
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/workbench/app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const app = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dbc2c81c"]]);

export { app as default };
//# sourceMappingURL=app-00852ae8.mjs.map
