import { a as _export_sfc, g as getRouting, r as routeDictionary, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, toDisplayString, renderList, createTextVNode, createCommentVNode, unref, createSlots, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './left-arrow-c624f267.mjs';
import ipkg from 'view-ui-plus';
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
import 'axios';
import 'crypto-js';
import 'pinia-plugin-persistedstate';
import 'vant';
import 'defu';
import 'qrcode.vue';
import '../../nitro/config.mjs';
import 'scule';

const _sfc_main$1 = {
  name: "cmsTable",
  // 新增
  setup(props) {
    let btnTxt_ = props.btnTxt || "\u786E\u5B9A";
    return {
      btnTxt_
    };
  },
  data() {
    return {
      tableHeight: "500",
      isShow: true
    };
  },
  props: {
    maxHeight: {
      type: String,
      default: "500"
    },
    TableHeight: {
      type: String,
      default: ""
    },
    Tabloading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    showPage: {
      type: Boolean,
      default: true
    },
    page: Object,
    btnTxt: {
      type: String
    },
    // 弹出层等 固定高度
    fixHeight: Number,
    // 同一个页面多个分页 自己传
    total: Number,
    totalPages: Number
  },
  computed: {},
  watch: {
    // 兼容表格数据，变化后回到顶部
    tableData(v) {
      if (v) {
        this.$nextTick(() => {
          let els = document.getElementsByClassName("ivu-table-body") || [];
          els[els.length - 1].scroll(0, 0);
        });
      }
    }
  },
  mounted() {
    if (!this.fixHeight) {
      this.tableHeightFn();
    } else {
      this.tableHeight = this.fixHeight;
    }
  },
  methods: {
    // 切换到第几页
    onPageChange(v) {
      this.page.pageNo = v;
      this.$emit("page", this.page);
      this.$emit("init");
    },
    // 输入分页跳转 确定
    confirmMethod() {
      let t_value = this.$refs.page.$el.lastElementChild.lastElementChild.childNodes[1].value;
      if (t_value === "") {
        this.$Message.info(this.$t("cmsPage.pageNoMsg"));
        return false;
      }
      let temp_totalPages = Math.ceil(this.total / 20);
      if (t_value > temp_totalPages) {
        t_value = temp_totalPages;
        this.$refs.page.$el.lastElementChild.lastElementChild.childNodes[1].value = t_value;
      }
      if (t_value <= 0 || /[^\d]/.test(t_value)) {
        this.$refs.page.$el.lastElementChild.lastElementChild.childNodes[1].value = 1;
        t_value = 1;
      }
      this.page.pageNo = Number(t_value);
      this.$emit("page", this.page);
      this.$emit("init");
    },
    // 表格原有api- 例如：多选
    emitSelectionChange(msg) {
      this.$emit("selection-change", msg);
    },
    // 
    emitSelection(selectArr, selectItemJson) {
      this.$emit("selection-radio-change", selectArr, selectItemJson);
    },
    cancelEmitSelection(selectArr, selectItemJson) {
      selectArr = [selectItemJson];
      this.$emit("selection-radio-change", selectArr, selectItemJson);
    },
    onRowClick(record, index2) {
      this.$emit("on-row-click", record, index2);
    },
    tableHeightFn() {
      this.$nextTick(() => {
        let obj = document.querySelector(".comp-table");
        let parent = obj && obj.offsetParent;
        let top = 0;
        while (parent) {
          top += obj.offsetTop;
          obj = parent;
          parent = obj.offsetParent;
        }
      });
    },
    //清空选中
    clearCurrentRow() {
      this.$refs.cTable.clearSelection();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_1$1;
  const _component_Table = resolveComponent("Table");
  const _component_Page = resolveComponent("Page");
  const _component_Button = resolveComponent("Button");
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="comp-table" data-v-ab2811df${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Table, {
          stripe: "",
          columns: $props.columns,
          data: $props.tableData ? $props.tableData : [],
          loading: $props.Tabloading,
          onOnSelectionChange: $options.emitSelectionChange,
          onOnSelect: $options.emitSelection,
          onOnSelectCancel: $options.cancelEmitSelection,
          onOnRowClick: $options.onRowClick,
          "max-height": $props.maxHeight,
          ref: "cTable"
        }, createSlots({ _: 2 }, [
          renderList($props.columns, (item, i) => {
            return {
              name: item.slot,
              fn: withCtx(({ row, index: index2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, item.slot, {
                    row,
                    index: index2
                  }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, _ctx.item.slot, {
                      row,
                      index: index2
                    }, void 0, true)
                  ];
                }
              })
            };
          })
        ]), _parent2, _scopeId));
        if (!_ctx.$isEmpty($props.page)) {
          _push2(`<div class="page-content" data-v-ab2811df${_scopeId}>`);
          if ($props.showPage) {
            _push2(`<!--[-->`);
            _push2(ssrRenderComponent(_component_Page, {
              class: "page-view",
              total: $props.tableData.length === 0 ? 0 : $props.total,
              modelValue: $props.page.pageNo,
              "show-elevator": "",
              "page-size": $props.page.pageSize ? $props.page.pageSize : 20,
              ref: "page",
              onOnChange: $options.onPageChange
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              ghost: "",
              style: { "font-size": "13px" },
              onClick: $options.confirmMethod
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate($setup.btnTxt_)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString($setup.btnTxt_), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "comp-table" }, [
            createVNode(_component_Table, {
              stripe: "",
              columns: $props.columns,
              data: $props.tableData ? $props.tableData : [],
              loading: $props.Tabloading,
              onOnSelectionChange: $options.emitSelectionChange,
              onOnSelect: $options.emitSelection,
              onOnSelectCancel: $options.cancelEmitSelection,
              onOnRowClick: $options.onRowClick,
              "max-height": $props.maxHeight,
              ref: "cTable"
            }, createSlots({ _: 2 }, [
              renderList($props.columns, (item, i) => {
                return {
                  name: item.slot,
                  fn: withCtx(({ row, index: index2 }) => [
                    renderSlot(_ctx.$slots, item.slot, {
                      row,
                      index: index2
                    }, void 0, true)
                  ])
                };
              })
            ]), 1032, ["columns", "data", "loading", "onOnSelectionChange", "onOnSelect", "onOnSelectCancel", "onOnRowClick", "max-height"]),
            !_ctx.$isEmpty($props.page) ? (openBlock(), createBlock("div", {
              key: 0,
              class: "page-content"
            }, [
              $props.showPage ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_component_Page, {
                  class: "page-view",
                  total: $props.tableData.length === 0 ? 0 : $props.total,
                  modelValue: $props.page.pageNo,
                  "show-elevator": "",
                  "page-size": $props.page.pageSize ? $props.page.pageSize : 20,
                  ref: "page",
                  onOnChange: $options.onPageChange
                }, null, 8, ["total", "modelValue", "page-size", "onOnChange"]),
                createVNode(_component_Button, {
                  type: "primary",
                  ghost: "",
                  style: { "font-size": "13px" },
                  onClick: $options.confirmMethod
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.btnTxt_), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ], 64)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ab2811df"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAitJREFUWEftlTFrFEEUx/9vWY4U+QBbpkxhI6S00CKQFAHTJd1Z3O6wjelVXDGtGJtlZ7jiIIKlAQsDFjZXBtJYpEwhRz6AhSzLGx2ZhXAkt3s3m3jFTLnz3rzf/d6bOcKSL1pyPnhA1w55g96gqwHXfD+D3qCrgdvyhRAPzF5RFD9m1fgvMzgYDPaI6JiIQEQPZ0HeO2CSJM+11kfWWhUEwfIACiFeMPOhhfsNYF8pdbIULY7j+PVfkKyGI6JdKeVp04zfS4uTJHmrtX45L5yJv3PAOI7fAziwcL8AbCulxk3m6v1GwLbPwXTBLMvCyWRyDGDP7l0R0Y6U8qwtXKNBA8fM5+Y5APBMSvmxzeH9fn+l1+t9AvDUxv8EsKmUumiTfz1mpsEaEED479cQHUgpP8wqYuE+A9iycZdBEDwpiuJyXrhGgyYgjmNjwdhYsQUypdSbm4p1DdcK0AQlSbKltTZWboVM03S1qqqvAB5Z+Atm3hwOh6a9C6/GS1KfPA1JRIdSyldmP03TqKqqLwA2bPxZGIY7eZ5fLUxmE1sDmnghxGNmNiCrNv+Imd8FQfANwLr9Ng7DcDvPc/OkOK+5AG27N7TWBjKy1c1fVt3607Isd0ejkfnWyZob0F4cY8vM29o1is7hWl+Sm1QIIdaY+buFPCnLcr9Lc3XNhQzWyeZyMPN6FEXjLMuqTno6dYgT4F0ATZ/pAV0te4PeoKsB13w/g96gqwHX/D9DpMEpq8mOeAAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAArFJREFUWEftlrFrE1EYwL/v0iQdOjiaxKGDg4Ojg2MLCi1YsOBgwEIgvJczKga0qJPn1AodFDXcexfwwKGCBQUHCw52cOgf4ODg0ME0jg4Gkly5py+8gzOU8O4uapHLdJe8975fft/3vvcQjvgHjzgfpIBJM5QaTA0mNZB0flqDf82gZVlT7XZ7LpvN7jabzR9xAjcajWPdbveM53kfXdft6ayhnWJCyCNEvAkAXwzDOG/b9p5OgGCMaZqzvu+/B4CTAPCMc35dZ742IKX0KQBcU4vuGYYxrwup4D4AwKycj4gbjLHViQJWKpXpXC73GgAWokCOwgHA9mAwWJ54iiVUVMikcEPbOprDYyRkPp9/JYS4MM7kIXBvBoNBWddcEDMyoJwod3Sn09kUQlwKIAFgkXP+Wb5TSk8BgNwQJ1TNbRUKhbJlWQdRhcQCDCD39/ef/9rVV1TQbwAwr57lhjiunl8Wi8WVOHCxUjxqINR+5E9Bf5yRL0KIx47jNKJaC4+PbTC8CCFkHRHvhL8TQjx0HOduEriJGJSL1Gq1BSHEWwCYUjUna22JMbb9zwEVnOyP0yMwPURcTgqZKMWEkMuI+CIwBwD3FORayGSZMbYV12RsQNM0b/m+v6ECHyDiDcaYLd8JISYiPgnAhRCrjuMEYyOxxgKklN6X7VBF6vm+v9JqtX6zRCm9CACbodRbnPMHkeiiniSqQa8JIW4HcOPq7JD6XOecB2WgxaptUJ3D0og0M+x5hmEs2ba9My4SIeQcIspNNOyNABDpyNMGpJTK+qqpIF8Nw1i0bfuTjoZqtXo6k8m8C46+P30fTHJhHd4JEdFmjF3V+XPaBtUtZq7f7++6rvtdZ/HRMfV6fcbzvLOlUmlH92zWBowDNIk5KWBSi6nB1GBSA0nnpzX43xv8CWBOGjiyC826AAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAv1JREFUWEftmD9oE1Ecx7+/6xEkdKjg0BSHCBV0FBQHFSwItqBgcXKLxHsJwSEgxYKCJyi04NDFkHuXIZuDioOD2SyoKKiTS8EOGUpxs4MJJXfcsy/cQZD7l+YSWkzW93u/93nf38vvzxEO+I8OOB/GgING6HArWC6Xp1qt1jIR3QSQBaDGVKTBOV+IaRtqFqhgoVA4K4R4A+D4Pg7a7XQ6R+v1+q7f3lwudySbzdq6rttRvn0BS6XStG3bXz04IcQ6EX0CEOlQHug4TqNWq33xO7xQKMwLIV4A2Emn02fW1tZ2wiB9ATVNWyGi+3IjES0ZhvEs6qZx1hljFwG8AzAp7RVFOVGtVpt9AzLGfgKYJaKGYRiJvCXG2CkAMipduL27P+ac61EX81WQMSbcjU855w+jnESt5/P52YmJiQ8ApvuB60bQz3kPYKxbhgEWi8Ws4zjv3SwAIcSqaZrLUZfy1ocK+C8cgOec87tx4YaqoJsJPnvKEdGrTCZzK05q6b3AUBRkjB0DIN+c/GPIX2NmZuZ6v3BDUbBUKk3ati1TiUwpXbhOp7Pol7Slyu12eycooScOKCtEKpV6C+BKFJymadeISNpucM5PB73LxELswsnSOO8e9lFV1YVKpfInIFPIHPhIrnHOA0tuIoA+cBuqqp4LgpNQjLHRAOq6rm5vb78EcMNValNV1UuVSuVXWDoZGSBjzARwx4VpKooyF1VfR6ag7Bfb7fbvfuFGBigPkp2Poijnieh2HOW8sI8sxP2UrV7bMeB+lftvQmy5E1wiDWtAJXkC4MF+K4nX8q8bhjE3aDj99mua1iCiqwA2Oecn+6rFvUOTEGLJNM1EhiYPolgs3nMcp+szqsP2rcW5XG4qlUr98MZOOTwJIb7HHTtDFFeJ6MLeGHvZtdlya3ZgWRzW4B7nVWwR0aJhGN/CjEO/zciG0rKssvvpYzbOqRE2cvBvCiFeW5a1Uq/XQ4f2wIY1AZDEXBzur1uJyTCAo7GCA4jX3TpWcFAF/wLKEIU4RDyUPAAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAR5JREFUWEftlrEJwlAQhv8HFgo6x7mAE1gqiLvYuIGFw6TQTidwgdwcBrQQogHTiMkd/gghXGq/8PHl3fMSOv6kjvshBNkvFAWjIFuA5V1nUFWnAPYA5gAeAE4AtiKSewQY3hR8v/zyEhx/yBQAZpYky5uCeZ5nKaVVQ6mjiCzbKrK8Kaiq1y/1aqe7iIzaBFneI3gDMGyQKERkYghSvEfwAGDRIJGJyNoQpHiPYDXB3R2Sqk41iWVZ7lJK1TUzAHAGsLEmuC7L8GZBzz33z9+EIFs3CkZBtgDL9+MMMvtcfdH/uk+aBdl9juVNQXafY3lTkN3nWN4jSO1zqkrxHkFqn1NVivcIxj7YdpmbBdl/ApYPwSjIFmD5OIO9L/gEEJrAKQ3UVOcAAAAASUVORK5CYII=";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAOlJREFUWEftljEKwkAQRX/AZq0tLfQOClp6pT3IXkk7EQ+hhYWF/TZCJMkWgazg8FeJ8FOFMLPz8mYypMLIr2rkfBAg2yEZlEHWAJuvGZRB1gCbX24GQzwC2HRA9Ql+mu45xJKAFwCLhHOFd0sOrcsWIGtRBn9vMMQzgFmm8BzAJD1/ArhlYh7wbm2Btrc4xNpSYBDrnammKbgt9geA+96+6wv6pMV3eLe1dMBu8N3pIWpRW8wPY2WQ89d83aOfwWaBr9J7HuDdjn3nsn8zJWgyZ5RbMwL8kgH2WLVYBlkDbL5mUAZZA2z+CzBaQymN8ho3AAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const { Modal } = ipkg;
    const { proxy } = getCurrentInstance();
    const selectId = ref("");
    const loading = ref(false);
    const tableData = ref([]);
    const tableData2 = ref([]);
    const pageType = ref(1);
    const oldData = ref("");
    const newData = ref("");
    const selectParams = ref({});
    const selectIndex = ref("");
    const columns = ref([
      { title: "\u4E00\u7EA7\u83DC\u5355\u540D\u79F0", key: "name", slot: "name" },
      { title: "\u4E8C\u7EA7\u83DC\u5355\u540D\u79F0", key: "viewResDtoList", slot: "viewResDtoList" },
      { title: "\u72B6\u6001", key: "dataStatus", slot: "dataStatus" },
      { title: "\u64CD\u4F5C", slot: "action" }
    ]);
    const columns2 = ref([
      { title: "\u4E8C\u7EA7\u83DC\u5355\u540D\u79F0", key: "name", slot: "name" },
      { title: "\u94FE\u63A5\u9875\u9762", key: "link", slot: "link" },
      { title: "\u72B6\u6001", key: "dataStatus", slot: "dataStatus" },
      { title: "\u64CD\u4F5C", slot: "action" }
    ]);
    const data = ref([]);
    const data2 = ref([]);
    const data3 = ref([]);
    const firstParams = ref({
      viewCode: "",
      viewType: "",
      businessType: "",
      name: ""
    });
    const init = () => {
      loading.value = true;
      data3.value = [];
      proxy.$api.queryAreaAndChunkView({
        viewCode: "",
        viewType: "SITE"
      }).then((res) => {
        loading.value = false;
        tableData.value = res.data;
      }).catch(() => {
        loading.value = false;
      });
      proxy.$api.queryTrainRobotInfoList({
        deptCodeList: [],
        name: "",
        queryTrainTeamRobotFlag: true,
        trainTeamRobotType: "TEAM_TRAIN_ROBOT",
        type: "CHAT"
      }).then((res) => {
        data3.value.push({
          value: "robot1",
          label: "\u4F01\u4E1A\u673A\u5668\u4EBA"
        });
        data3.value[0].children = [];
        res.data.forEach((item) => {
          data3.value[0].children.push({
            value: item.code,
            label: item.name
          });
        });
        proxy.$api.queryExclusiveRobotList({
          tagCode: ""
        }).then((res2) => {
          data3.value.push({
            value: "robot2",
            label: "\u7CFB\u7EDF\u673A\u5668\u4EBA"
          });
          data3.value[1].children = [];
          res2.data.forEach((item) => {
            data3.value[1].children.push({
              value: item.code,
              label: item.name
            });
          });
        });
      });
      data.value = [];
      data2.value = [];
      routeDictionary.forEach((item) => {
        if (item.parentType && item.parentType.length > 0) {
          if (item.parentType.indexOf("FUNCTION_RECOMMEND") != -1) {
            data.value.push(item);
          }
          if (item.parentType.indexOf("ROBOT_MENU") != -1) {
            data2.value.push(item);
          }
        }
      });
    };
    const changeInput = (type, index2) => {
      if (type == 1) {
        tableData.value[index2].name = newData.value;
        setFirstView(index2);
      }
      if (type == 2) {
        tableData.value[index2].name = oldData.value;
      }
      selectId.value = "";
    };
    const setFirstView = (index2) => {
      let data4 = {
        viewCode: tableData.value[index2].viewCode,
        viewType: tableData.value[index2].viewType,
        businessType: tableData.value[index2].businessType,
        name: tableData.value[index2].name,
        dataStatus: tableData.value[index2].dataStatus
      };
      loading.value = true;
      proxy.$api.editFirstView(data4).then(() => {
        loading.value = false;
        proxy.$Message.success("\u5DF2\u66F4\u6539");
        routing.setTopNavList(proxy);
        init();
      }).catch(() => {
        loading.value = false;
      });
    };
    const chooseData = (e) => {
      selectId.value = e.viewCode;
      newData.value = e.name;
      oldData.value = e.name;
    };
    const tableInput = (e) => {
      newData.value = e.target.value;
    };
    const toSecond = (reocrd) => {
      loading.value = true;
      selectParams.value = reocrd;
      firstParams.value.viewCode = reocrd.viewCode;
      firstParams.value.viewType = reocrd.viewType;
      firstParams.value.businessType = reocrd.businessType;
      firstParams.value.name = reocrd.name;
      tableData2.value = [];
      proxy.$api.queryAreaAndChunkView({
        viewCode: reocrd.viewCode,
        viewType: reocrd.viewType
      }).then((res) => {
        loading.value = false;
        if (firstParams.value.businessType == "ENTERPRISE_AI_HELPER") {
          if (res.data && res.data.length > 0 && res.data[0].attributeResDtoList && res.data[0].attributeResDtoList.length > 0) {
            res.data[0].attributeResDtoList.forEach((item) => {
              tableData2.value.push({
                dataStatus: item.dataStatus,
                name: item.name,
                robotCode: item.value
              });
            });
          } else {
            tableData2.value = [];
          }
        } else {
          if (res.data && res.data.length > 0 && res.data[0].viewResDtoList && res.data[0].viewResDtoList.length > 0) {
            tableData2.value = res.data[0].viewResDtoList;
          } else {
            tableData2.value = [];
          }
        }
        pageType.value = 2;
      }).catch(() => {
        loading.value = false;
      });
    };
    const onDragDrop = (index1, index2) => {
      swapElements(tableData2.value, index1, index2);
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
    const toDelete = (i) => {
      Modal.confirm({
        title: "\u5220\u9664",
        okText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88",
        content: "\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u4E8C\u7EA7\u83DC\u5355\uFF1F",
        onOk: () => {
          tableData2.value.splice(i, 1);
        }
      });
    };
    const setSecondView = proxy.$debounce(() => {
      if (tableData2.value.length == 0) {
        proxy.$Message.error("\u8BF7\u6DFB\u52A0\u83DC\u5355");
        return;
      }
      loading.value = true;
      let configSubViewReqList = [];
      let flag = false;
      tableData2.value.forEach((item, i) => {
        if (item.businessType) {
          configSubViewReqList.push(item);
        }
        if (firstParams.value.businessType == "ENTERPRISE_AI_HELPER" && item.name) {
          configSubViewReqList.push(item);
        }
        if (proxy.$isEmpty(item.name)) {
          flag = true;
        }
        if (i == Number(tableData2.value.length - 1)) {
          if (flag) {
            proxy.$Message.error("\u8BF7\u586B\u5199\u5B8C\u6574");
            loading.value = false;
          } else {
            proxy.$api.configSecondView({
              viewCode: firstParams.value.viewCode,
              viewType: firstParams.value.viewType,
              businessType: firstParams.value.businessType,
              configSubViewReqList
            }).then(() => {
              loading.value = false;
              proxy.$Message.success("\u5DF2\u66F4\u6539");
              toSecond(selectParams.value);
              routing.setTopNavList(proxy);
            }).catch(() => {
              loading.value = false;
            });
          }
        }
      });
    }, 300);
    const onChange = (e1, e2) => {
      if (firstParams.value.businessType == "FUNCTION_RECOMMEND" || firstParams.value.businessType == "ROBOT_MENU") {
        if (e2.length == 1) {
          tableData2.value[selectIndex.value].name = e2[0].label;
          tableData2.value[selectIndex.value].businessType = e2[0].businessType;
        }
      }
      if (firstParams.value.businessType == "ENTERPRISE_AI_HELPER") {
        if (e2.length == 2) {
          console.log(e2);
          tableData2.value[selectIndex.value].name = e2[1].label;
          tableData2.value[selectIndex.value].robotCode = e2[1].value;
        }
      }
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cTable = __nuxt_component_0;
      const _component_Input = resolveComponent("Input");
      const _component_Switch = resolveComponent("Switch");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Table = resolveComponent("Table");
      const _component_Cascader = resolveComponent("Cascader");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navigation" }, _attrs))} data-v-589d274e>`);
      if (pageType.value == 1) {
        _push(`<!--[--><div class="navigation-title" data-v-589d274e>\u5BFC\u822A\u8BBE\u7F6E</div><div class="navigation-table" data-v-589d274e>`);
        _push(ssrRenderComponent(_component_cTable, {
          Tabloading: loading.value,
          TableHeight: "500",
          columns: columns.value,
          tableData: tableData.value,
          onInit: init
        }, {
          name: withCtx(({ row, index: index2 }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="first-content" data-v-589d274e${_scopeId}>`);
              if (selectId.value == row.viewCode) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_Input, {
                  "model-value": tableData.value[index2].name,
                  onOnChange: ($event) => tableInput($event)
                }, null, _parent2, _scopeId));
                _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-589d274e${_scopeId}><img${ssrRenderAttr("src", _imports_1)} data-v-589d274e${_scopeId}><!--]-->`);
              } else {
                _push2(`<!--[--><div data-v-589d274e${_scopeId}>${ssrInterpolate(row.name)}</div><img class="edit"${ssrRenderAttr("src", _imports_2)} data-v-589d274e${_scopeId}><!--]-->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "first-content" }, [
                  selectId.value == row.viewCode ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(_component_Input, {
                      "model-value": tableData.value[index2].name,
                      onOnChange: ($event) => tableInput($event)
                    }, null, 8, ["model-value", "onOnChange"]),
                    createVNode("img", {
                      onClick: ($event) => changeInput(1, index2),
                      src: _imports_0
                    }, null, 8, ["onClick"]),
                    createVNode("img", {
                      onClick: ($event) => changeInput(2, index2),
                      src: _imports_1
                    }, null, 8, ["onClick"])
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", null, toDisplayString(row.name), 1),
                    createVNode("img", {
                      class: "edit",
                      onClick: ($event) => chooseData(row),
                      src: _imports_2
                    }, null, 8, ["onClick"])
                  ], 64))
                ])
              ];
            }
          }),
          viewResDtoList: withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (row.viewResDtoList && row.viewResDtoList.length > 0) {
                _push2(`<div data-v-589d274e${_scopeId}><!--[-->`);
                ssrRenderList(row.viewResDtoList, (item, i) => {
                  _push2(`<!--[--><div class="itemName" data-v-589d274e${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                  if (i != row.viewResDtoList.length - 1) {
                    _push2(`<!--[-->\uFF0C<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                });
                _push2(`<!--]--></div>`);
              } else if (row.attributeResDtoList && row.attributeResDtoList.length > 0) {
                _push2(`<div data-v-589d274e${_scopeId}><!--[-->`);
                ssrRenderList(row.attributeResDtoList, (item, i) => {
                  _push2(`<!--[--><div class="itemName" data-v-589d274e${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                  if (i != row.attributeResDtoList.length - 1) {
                    _push2(`<!--[-->\uFF0C<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div data-v-589d274e${_scopeId}>--</div>`);
              }
            } else {
              return [
                row.viewResDtoList && row.viewResDtoList.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(row.viewResDtoList, (item, i) => {
                    return openBlock(), createBlock(Fragment, null, [
                      createVNode("div", { class: "itemName" }, toDisplayString(item.name), 1),
                      i != row.viewResDtoList.length - 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode("\uFF0C")
                      ], 64)) : createCommentVNode("", true)
                    ], 64);
                  }), 256))
                ])) : row.attributeResDtoList && row.attributeResDtoList.length > 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(row.attributeResDtoList, (item, i) => {
                    return openBlock(), createBlock(Fragment, null, [
                      createVNode("div", { class: "itemName" }, toDisplayString(item.name), 1),
                      i != row.attributeResDtoList.length - 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode("\uFF0C")
                      ], 64)) : createCommentVNode("", true)
                    ], 64);
                  }), 256))
                ])) : (openBlock(), createBlock("div", { key: 2 }, "--"))
              ];
            }
          }),
          dataStatus: withCtx(({ row, index: index2 }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (row.businessType == "BIG_MODEL_SELECT" || row.businessType == "ABOUT_US") {
                _push2(`<!--[--> -- <!--]-->`);
              } else {
                _push2(ssrRenderComponent(_component_Switch, {
                  modelValue: tableData.value[index2].dataStatus,
                  "onUpdate:modelValue": ($event) => tableData.value[index2].dataStatus = $event,
                  onOnChange: ($event) => setFirstView(index2),
                  "true-value": "NORMAL",
                  "false-value": "DISABLE"
                }, null, _parent2, _scopeId));
              }
            } else {
              return [
                row.businessType == "BIG_MODEL_SELECT" || row.businessType == "ABOUT_US" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" -- ")
                ], 64)) : (openBlock(), createBlock(_component_Switch, {
                  key: 1,
                  modelValue: tableData.value[index2].dataStatus,
                  "onUpdate:modelValue": ($event) => tableData.value[index2].dataStatus = $event,
                  onOnChange: ($event) => setFirstView(index2),
                  "true-value": "NORMAL",
                  "false-value": "DISABLE"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"]))
              ];
            }
          }),
          action: withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (row.businessType != "BIG_MODEL_SELECT" && row.businessType != "LAB_MENU" && row.businessType != "ABOUT_US") {
                _push2(`<span data-v-589d274e${_scopeId}>\u914D\u7F6E\u4E8C\u7EA7\u83DC\u5355</span>`);
              } else {
                _push2(`<!--[--> -- <!--]-->`);
              }
            } else {
              return [
                row.businessType != "BIG_MODEL_SELECT" && row.businessType != "LAB_MENU" && row.businessType != "ABOUT_US" ? (openBlock(), createBlock("span", {
                  key: 0,
                  onClick: ($event) => toSecond(row)
                }, "\u914D\u7F6E\u4E8C\u7EA7\u83DC\u5355", 8, ["onClick"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" -- ")
                ], 64))
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
        _push(`<!--[--><div class="navigation-title" data-v-589d274e><img${ssrRenderAttr("src", _imports_0$1)} data-v-589d274e><div data-v-589d274e>\u4E8C\u7EA7\u83DC\u5355\u8BBE\u7F6E</div></div><div class="navigation-name" data-v-589d274e><div class="title" data-v-589d274e>${ssrInterpolate(firstParams.value.name)}</div><div class="sub" data-v-589d274e>\u53EF\u8FDB\u884C\u62D6\u62FD\u8C03\u6574\u83DC\u5355\u987A\u5E8F</div></div><div class="navigation-table" data-v-589d274e>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Table, {
                columns: columns2.value,
                Tabloading: loading.value,
                data: tableData2.value,
                draggable: true,
                onOnDragDrop: onDragDrop
              }, {
                name: withCtx(({ row, index: index2 }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="second-name" data-v-589d274e${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} data-v-589d274e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Input, {
                      modelValue: tableData2.value[index2].name,
                      "onUpdate:modelValue": ($event) => tableData2.value[index2].name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "second-name" }, [
                        createVNode("img", { src: _imports_4 }),
                        createVNode(_component_Input, {
                          modelValue: tableData2.value[index2].name,
                          "onUpdate:modelValue": ($event) => tableData2.value[index2].name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                link: withCtx(({ row, index: index2 }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Cascader, {
                      data: firstParams.value.businessType == "FUNCTION_RECOMMEND" ? data.value : firstParams.value.businessType == "ROBOT_MENU" ? data2.value : data3.value,
                      transfer: "",
                      onOnChange: onChange
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="link-btn" data-v-589d274e${_scopeId3}>`);
                          if (tableData2.value[index2] && tableData2.value[index2].businessType || tableData2.value[index2].robotCode) {
                            _push4(`<!--[-->`);
                            if (firstParams.value.businessType == "ENTERPRISE_AI_HELPER") {
                              _push4(`<!--[-->`);
                              ssrRenderList(data3.value, (item) => {
                                _push4(`<!--[--><!--[-->`);
                                ssrRenderList(item.children, (iten) => {
                                  _push4(`<!--[-->`);
                                  if (iten.value == tableData2.value[index2].robotCode) {
                                    _push4(`<div class="text-hide" data-v-589d274e${_scopeId3}>${ssrInterpolate(iten.label)}</div>`);
                                  } else {
                                    _push4(`<!---->`);
                                  }
                                  _push4(`<!--]-->`);
                                });
                                _push4(`<!--]--><!--]-->`);
                              });
                              _push4(`<!--]-->`);
                            } else {
                              _push4(`<!--[-->`);
                              ssrRenderList(unref(routeDictionary), (item) => {
                                _push4(`<!--[-->`);
                                if (item.businessType == tableData2.value[index2].businessType) {
                                  _push4(`<div class="text-hide" data-v-589d274e${_scopeId3}>${ssrInterpolate(item.name)}</div>`);
                                } else {
                                  _push4(`<!---->`);
                                }
                                _push4(`<!--]-->`);
                              });
                              _push4(`<!--]-->`);
                            }
                            _push4(`<!--]-->`);
                          } else {
                            _push4(`<!--[--><img${ssrRenderAttr("src", _imports_5)} data-v-589d274e${_scopeId3}><div data-v-589d274e${_scopeId3}>\u6DFB\u52A0\u94FE\u63A5</div><!--]-->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "link-btn",
                              onClick: ($event) => selectIndex.value = index2
                            }, [
                              tableData2.value[index2] && tableData2.value[index2].businessType || tableData2.value[index2].robotCode ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                firstParams.value.businessType == "ENTERPRISE_AI_HELPER" ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(data3.value, (item) => {
                                  return openBlock(), createBlock(Fragment, null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (iten) => {
                                      return openBlock(), createBlock(Fragment, null, [
                                        iten.value == tableData2.value[index2].robotCode ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-hide"
                                        }, toDisplayString(iten.label), 1)) : createCommentVNode("", true)
                                      ], 64);
                                    }), 256))
                                  ], 64);
                                }), 256)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(routeDictionary), (item) => {
                                  return openBlock(), createBlock(Fragment, null, [
                                    item.businessType == tableData2.value[index2].businessType ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-hide"
                                    }, toDisplayString(item.name), 1)) : createCommentVNode("", true)
                                  ], 64);
                                }), 256))
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode("img", { src: _imports_5 }),
                                createVNode("div", null, "\u6DFB\u52A0\u94FE\u63A5")
                              ], 64))
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Cascader, {
                        data: firstParams.value.businessType == "FUNCTION_RECOMMEND" ? data.value : firstParams.value.businessType == "ROBOT_MENU" ? data2.value : data3.value,
                        transfer: "",
                        onOnChange: onChange
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "link-btn",
                            onClick: ($event) => selectIndex.value = index2
                          }, [
                            tableData2.value[index2] && tableData2.value[index2].businessType || tableData2.value[index2].robotCode ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              firstParams.value.businessType == "ENTERPRISE_AI_HELPER" ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(data3.value, (item) => {
                                return openBlock(), createBlock(Fragment, null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (iten) => {
                                    return openBlock(), createBlock(Fragment, null, [
                                      iten.value == tableData2.value[index2].robotCode ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-hide"
                                      }, toDisplayString(iten.label), 1)) : createCommentVNode("", true)
                                    ], 64);
                                  }), 256))
                                ], 64);
                              }), 256)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(routeDictionary), (item) => {
                                return openBlock(), createBlock(Fragment, null, [
                                  item.businessType == tableData2.value[index2].businessType ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-hide"
                                  }, toDisplayString(item.name), 1)) : createCommentVNode("", true)
                                ], 64);
                              }), 256))
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createVNode("img", { src: _imports_5 }),
                              createVNode("div", null, "\u6DFB\u52A0\u94FE\u63A5")
                            ], 64))
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["data"])
                    ];
                  }
                }),
                dataStatus: withCtx(({ row, index: index2 }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Switch, {
                      modelValue: tableData2.value[index2].dataStatus,
                      "onUpdate:modelValue": ($event) => tableData2.value[index2].dataStatus = $event,
                      "true-value": "NORMAL",
                      "false-value": "DISABLE"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Switch, {
                        modelValue: tableData2.value[index2].dataStatus,
                        "onUpdate:modelValue": ($event) => tableData2.value[index2].dataStatus = $event,
                        "true-value": "NORMAL",
                        "false-value": "DISABLE"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                action: withCtx(({ row, index: index2 }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-589d274e${_scopeId2}>\u5220\u9664</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        onClick: ($event) => toDelete(index2)
                      }, "\u5220\u9664", 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Table, {
                  columns: columns2.value,
                  Tabloading: loading.value,
                  data: tableData2.value,
                  draggable: true,
                  onOnDragDrop: onDragDrop
                }, {
                  name: withCtx(({ row, index: index2 }) => [
                    createVNode("div", { class: "second-name" }, [
                      createVNode("img", { src: _imports_4 }),
                      createVNode(_component_Input, {
                        modelValue: tableData2.value[index2].name,
                        "onUpdate:modelValue": ($event) => tableData2.value[index2].name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  link: withCtx(({ row, index: index2 }) => [
                    createVNode(_component_Cascader, {
                      data: firstParams.value.businessType == "FUNCTION_RECOMMEND" ? data.value : firstParams.value.businessType == "ROBOT_MENU" ? data2.value : data3.value,
                      transfer: "",
                      onOnChange: onChange
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "link-btn",
                          onClick: ($event) => selectIndex.value = index2
                        }, [
                          tableData2.value[index2] && tableData2.value[index2].businessType || tableData2.value[index2].robotCode ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            firstParams.value.businessType == "ENTERPRISE_AI_HELPER" ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(data3.value, (item) => {
                              return openBlock(), createBlock(Fragment, null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (iten) => {
                                  return openBlock(), createBlock(Fragment, null, [
                                    iten.value == tableData2.value[index2].robotCode ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-hide"
                                    }, toDisplayString(iten.label), 1)) : createCommentVNode("", true)
                                  ], 64);
                                }), 256))
                              ], 64);
                            }), 256)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(routeDictionary), (item) => {
                              return openBlock(), createBlock(Fragment, null, [
                                item.businessType == tableData2.value[index2].businessType ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-hide"
                                }, toDisplayString(item.name), 1)) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("img", { src: _imports_5 }),
                            createVNode("div", null, "\u6DFB\u52A0\u94FE\u63A5")
                          ], 64))
                        ], 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["data"])
                  ]),
                  dataStatus: withCtx(({ row, index: index2 }) => [
                    createVNode(_component_Switch, {
                      modelValue: tableData2.value[index2].dataStatus,
                      "onUpdate:modelValue": ($event) => tableData2.value[index2].dataStatus = $event,
                      "true-value": "NORMAL",
                      "false-value": "DISABLE"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  action: withCtx(({ row, index: index2 }) => [
                    createVNode("span", {
                      onClick: ($event) => toDelete(index2)
                    }, "\u5220\u9664", 8, ["onClick"])
                  ]),
                  _: 1
                }, 8, ["columns", "Tabloading", "data"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="add" data-v-589d274e><img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_5)} data-v-589d274e><div style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-589d274e>\u6DFB\u52A0\u83DC\u5355</div></div><div class="btn-list" data-v-589d274e>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          type: "primary",
          onClick: unref(setSecondView),
          loading: loading.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u4FDD\u5B58`);
            } else {
              return [
                createTextVNode("\u4FDD\u5B58")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          class: "btn",
          onClick: ($event) => pageType.value = 1
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u53D6\u6D88`);
            } else {
              return [
                createTextVNode("\u53D6\u6D88")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/enterprise/build/navigation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-589d274e"]]);

export { index as default };
//# sourceMappingURL=index-bb39a5b0.mjs.map
