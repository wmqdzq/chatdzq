import { a as _export_sfc, g as getRouting, u as useRouter, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './workbenchNav-0b9ac1f2.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { w as workbenchImg, r as recommendImg, e as employeeImg } from './employee-a21d8a27.mjs';
import { m as myImg, i as icon15, a as icon16, b as icon19, c as icon20, d as icon21, e as icon22, _ as _imports_0 } from './icon1-7fba1a45.mjs';
import { h as homePng, a as addressBookPng, t as trainPng, w as workbenchPng, b as applyPng, d as digitalPng, c as assetsPng, s as settingsPng } from './settings-806b801d.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useRouter as useRouter$1 } from 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "getWorkbenchNavList",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "personal"
      //personal个人工作台  team团队工作台
    }
  },
  emits: ["getRoute"],
  setup(__props, { emit }) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const routing = getRouting();
    const router = useRouter();
    const personalList = ref([
      { title: "\u5DE5\u4F5C\u53F0", url: "", name: "2", img: workbenchImg, type: "workbench", children: [] },
      { title: "\u63A8\u8350AI\u5E94\u7528", url: "", name: "1", img: recommendImg, type: "recommend", children: [] },
      { title: "AI\u6570\u5B57\u5458\u5DE5", url: "/ai/employee", name: "3", img: employeeImg, type: "employee" },
      { title: "\u6211\u7684", url: "", name: "4", img: myImg, type: "my", children: [
        { title: "\u6700\u8FD1\u4F7F\u7528", url: "/ai/agency", img: icon15, imgActive: icon16 },
        { title: "\u6211\u7684\u667A\u80FD\u4F53", url: "/ai/robot", img: icon19, imgActive: icon20 },
        { title: "\u6211\u7684\u6536\u85CF", url: "/ai/creative?type=collect", img: icon21, imgActive: icon22 }
      ] }
    ]);
    const teamList = ref([
      { title: "\u9996\u9875", name: "1", img: homePng, url: "/ai/enterprise/home" },
      { title: "\u901A\u8BAF\u5F55", name: "2", img: addressBookPng, children: [
        { title: "\u6210\u5458\u7BA1\u7406", name: "2-1", url: "/ai/enterprise/staff" },
        { title: "\u90E8\u95E8\u7BA1\u7406", name: "2-2", url: "/ai/enterprise/staff/section" },
        { title: "\u7528\u6237\u7EC4\u7BA1\u7406", name: "2-3", url: "/ai/enterprise/staff/role" },
        { title: "\u5BA1\u6279\u7BA1\u7406", name: "2-4", url: "/ai/enterprise/staff/approval", num: routing.approvalNum }
      ] },
      { title: "\u8BAD\u7EC3\u4E2D\u5FC3", name: "3", img: trainPng, children: [
        { title: "\u667A\u80FD\u4F53", name: "3-1", url: "/ai/enterprise/train" },
        { title: "\u77E5\u8BC6\u5E93(\u65E7\u7248)", name: "3-2", url: "/ai/enterprise/bank" },
        { title: "\u77E5\u8BC6\u5E93", name: "3-3", url: "/ai/enterprise/knowledge" }
      ] },
      { title: "\u5DE5\u4F5C\u53F0", type: "workbench", name: "6", img: workbenchPng, children: [
        { title: "\u5DE5\u4F5C\u53F0\u914D\u7F6E", name: "6-1", url: "/ai/enterprise/build/workbench", children: [
          { title: "\u5DE5\u4F5C\u53F0", name: "6-1-1", url: "/ai/enterprise/build/workbench" },
          { title: "\u63A8\u8350AI\u5E94\u7528", name: "6-1-2", url: "/ai/enterprise/build/workbench/app" }
        ] },
        { title: "\u4F01\u4E1A\u5EFA\u7AD9", name: "6-2", url: "/ai/enterprise/build/config", children: [
          { title: "\u5BA3\u4F20\u9875\u6A21\u677F", name: "6-2-1", url: "/ai/enterprise/build/template" },
          { title: "\u5BA3\u4F20\u9875\u5BFC\u822A", name: "6-2-2", url: "/ai/enterprise/build/navigation" }
        ] }
      ] },
      { title: "AI\u5E94\u7528", name: "4", img: applyPng, children: [
        { title: "\u667A\u80FD\u5BA2\u670D", name: "4-1", url: "/ai/enterprise/service" },
        { title: "\u5BA2\u6237\u7BA1\u7406", name: "4-2", url: "/ai/enterprise/client" }
      ] },
      { title: "AI\u6570\u5B57\u5458\u5DE5", name: "5", img: digitalPng, url: "/ai/enterprise/employee" },
      { title: "\u6570\u636E\u8D44\u4EA7", name: "7", img: assetsPng, children: [
        // {title:'数据保障',name:'7-1'},
        { title: "\u5E94\u7528\u6570\u636E", name: "7-2", url: "/ai/enterprise/date" },
        { title: "\u6570\u636E\u6D1E\u5BDF", name: "7-3", url: "/ai/enterprise/total" },
        { title: "\u6570\u636E\u96C6", name: "7-4", url: "/ai/enterprise/assemble" }
      ] },
      { title: "\u4F01\u4E1A\u8BBE\u7F6E", name: "8", img: settingsPng, children: [
        { title: "\u4F01\u4E1A\u4FE1\u606F", name: "8-1", url: "/ai/enterprise/account" },
        // {title:'权限管理',name:'8-2'},
        { title: "\u8BA2\u5355\u7BA1\u7406", name: "8-3", url: "/ai/enterprise/account/order", children: [
          { title: "\u7535\u91CF\u8BB0\u5F55", name: "8-3-1", url: "/ai/enterprise/account/electric" },
          { title: "\u8BA2\u5355\u8BB0\u5F55", name: "8-3-2", url: "/ai/enterprise/account/order" }
        ] },
        { title: "\u56DE\u6536\u7AD9", name: "8-4", url: "/ai/enterprise/recycle/data", children: [
          { title: "\u5E94\u7528\u6570\u636E", name: "8-4-1", url: "/ai/enterprise/recycle/data" },
          { title: "\u77E5\u8BC6\u5E93", name: "8-4-2", url: "/ai/enterprise/recycle/knowledge" },
          { title: "\u667A\u80FD\u4F53", name: "8-4-3", url: "/ai/enterprise/recycle/robot" }
        ] }
      ] }
    ]);
    const thirdList = ref([]);
    const active = ref("");
    const onApply = () => {
      let data = {
        type: "AI_APPLY_CATEGORY"
      };
      proxy.$api.queryAiApplyListPermission(data).then((res) => {
        personalList.value.forEach((item, i) => {
          if (item.type == "recommend") {
            personalList.value[i].children = res.data.map((item2) => ({
              title: item2.cateName,
              url: proxy.$getTypeRoute(item2.description),
              img: "",
              imgActive: "",
              name: item2.code
            }));
          }
          if (item.type == "employee" && routing.clientType == "PERSONAL") {
            personalList.value.splice(i, 1);
          }
          if (i == Number(personalList.value.length - 1)) {
            emit("getRoute", personalList.value);
          }
        });
      });
    };
    const init = () => {
      if (props.type == "personal") {
        if (!proxy.$isLogin()) {
          onApply();
        } else {
          proxy.$api.getUserAccountInfo().then((json) => {
            let sourceDisplayListFlag = json.data.sourceDisplayListFlag;
            proxy.$api.queryWorkbenchPermissionList().then((res) => {
              personalList.value.forEach((item, i) => {
                if (item.type == "workbench") {
                  if (sourceDisplayListFlag) {
                    if (res.data.length > 0) {
                      let flag = true;
                      res.data.forEach((itx) => {
                        if (flag && itx.bizType != "WORKBENCH_PERSONAL" && itx.bizType != "WORKBENCH_TEAM") {
                          flag = false;
                          proxy.$api.getWorkbenchInfo({
                            bizType: itx.bizType,
                            code: itx.code
                          }).then((res2) => {
                            if (res2.data && res2.data.workbenchCategoryList.length > 0) {
                              personalList.value[i].children = [];
                              res2.data.workbenchCategoryList.forEach((iten) => {
                                let arr = iten.getWorkbenchChunkList.map((it) => ({
                                  title: it.robotName,
                                  url: "",
                                  img: "",
                                  imgActive: "",
                                  type: "sourceDisplayChildren",
                                  name: it.code,
                                  robotCode: it.robotCode,
                                  robotType: it.robotType
                                }));
                                personalList.value[i].children.push({
                                  title: iten.name,
                                  url: "",
                                  img: "",
                                  imgActive: "",
                                  name: iten.code,
                                  type: "sourceDisplay",
                                  //单工作台模式
                                  children: arr
                                });
                              });
                            }
                          });
                        }
                      });
                    }
                  } else {
                    personalList.value[i].children = res.data.map((item2) => ({
                      title: item2.name,
                      url: "/ai/app/often?code=" + item2.code + "&bizType=" + item2.bizType,
                      img: item2.afterClickingImgUrl,
                      imgActive: item2.beforeClickingImgUrl,
                      name: item2.code
                    }));
                  }
                }
              });
              onApply();
            });
          });
        }
      }
      if (props.type == "team") {
        proxy == null ? void 0 : proxy.$api.getUserAccountInfo().then((res) => {
          if (res.data.partnerFlag) {
            teamList.value.forEach((item, i) => {
              if (item.type == "workbench") {
                item.children[1].url = "/ai/enterprise/build/config";
                item.children[1].children.unshift({ title: "\u5185\u9875\u914D\u7F6E", name: "6-2-3", url: "/ai/enterprise/build/config" });
              }
              if (i == Number(teamList.value.length - 1)) {
                emit("getRoute", teamList.value);
              }
            });
          } else {
            teamList.value.forEach((item, i) => {
              if (item.type == "workbench") {
                item.children[1].url = "/ai/enterprise/build/template";
                item.children[1].children = [
                  { title: "\u5BA3\u4F20\u9875\u6A21\u677F", name: "6-2-1", url: "/ai/enterprise/build/template" },
                  { title: "\u5BA3\u4F20\u9875\u5BFC\u822A", name: "6-2-2", url: "/ai/enterprise/build/navigation" }
                ];
              }
              if (i == Number(teamList.value.length - 1)) {
                emit("getRoute", teamList.value);
              }
            });
          }
          selectRoute();
        });
      }
    };
    const selectRoute = () => {
      thirdList.value = [];
      teamList.value.forEach((item) => {
        if (item.children) {
          item.children.forEach((iten) => {
            if (iten.children) {
              iten.children.forEach((it, index) => {
                if (it.url && it.url == router.currentRoute.value.path) {
                  thirdList.value = iten.children;
                  active.value = index;
                }
              });
            }
          });
        }
      });
      routing.setApprovalNum(proxy);
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/getWorkbenchNavList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cTopContent",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "personal"
      //personal个人工作台  team团队工作台
    },
    title: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: []
    },
    backUrl: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    getCurrentInstance();
    const routeList = ref([]);
    ref([]);
    getRouting();
    const router = useRouter$1();
    const selectRoute = ref("");
    const toBack = () => {
      if (props.backUrl) {
        router.push(props.backUrl);
      } else {
        router.go(-1);
      }
    };
    const getRoute = (e) => {
      routeList.value = e;
    };
    const getSelectRoute = () => {
      selectRoute.value = router.currentRoute.value.fullPath;
    };
    watch(() => router.currentRoute.value.path, () => {
      getSelectRoute();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_workbenchNav = __nuxt_component_0$1;
      const _component_Button = resolveComponent("Button");
      const _component_getWorkbenchNavList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cTopContent" }, _attrs))} data-v-6fee44cc><div class="aiHeadComm" data-v-6fee44cc><div class="aiHeadComm-left" data-v-6fee44cc><div class="headComm-nav" data-v-6fee44cc><img class="icon"${ssrRenderAttr("src", _imports_0)} alt="" data-v-6fee44cc><div class="headComm-nav-menu" data-v-6fee44cc>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_workbenchNav, {
              borderStyle: "border-radius:0px 12px 12px 0px",
              list: routeList.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_workbenchNav, {
                borderStyle: "border-radius:0px 12px 12px 0px",
                list: routeList.value
              }, null, 8, ["list"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="headComm-area" data-v-6fee44cc>`);
      if (props.title) {
        _push(`<div class="headComm-title" data-v-6fee44cc>${ssrInterpolate(props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`<div class="headComm-division" data-v-6fee44cc></div>`);
      ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Button, {
        icon: "ios-arrow-back",
        onClick: toBack
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8FD4\u56DE`);
          } else {
            return [
              createTextVNode("\u8FD4\u56DE")
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "left-content", {}, null, _push, _parent);
      _push(`</div></div><div class="aiHeadComm-center" data-v-6fee44cc>`);
      if (props.list && props.list.length > 0) {
        _push(`<div class="routeList" data-v-6fee44cc><!--[-->`);
        ssrRenderList(props.list, (item) => {
          _push(`<div class="${ssrRenderClass([selectRoute.value == item.url ? "itemActive" : "", "routeList-item"])}" data-v-6fee44cc>${ssrInterpolate(item.name)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "center", {}, null, _push, _parent);
      }
      _push(`</div><div class="aiHeadComm-right" data-v-6fee44cc>`);
      ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_getWorkbenchNavList, {
        onGetRoute: getRoute,
        type: props.type
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cTopContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fee44cc"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=cTopContent-1ce4af82.mjs.map
