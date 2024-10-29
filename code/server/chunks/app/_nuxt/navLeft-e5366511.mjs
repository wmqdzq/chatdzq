import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, toRefs, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1 } from './avatar-8802d9a1.mjs';
import { c as cList } from './firmModal-85ac1a5f.mjs';
import { useRouter } from 'vue-router';

const _imports_0 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABUElEQVRYR93V0XWCMBQG4P/COZ5y+uIIOIIb6AbtBNUJJBPYDeIIuokb1A3KCLxY+lLTA9QCAvUSkugpz0nuZ3L/K+HGH924Pv4RQKYhSL0BlED5zxCjA+d2zd2APG5B3ktRNEN4cw7CIOAzAilZ/moewhwgqyzTVxDWfRBmARoI84CeCDuAHgh7ACaiBJQ5HnPyq7+mno4KoJpj/eOZO7eIgmU+MX43yMscM4/SWUb+AqvRrg4o3mwGfIU6Z/L3+DFEsD+vt9uEDNWdAaQaA8cnBnzAEkoA7wARxM0e2KTvACz3QG6PoR6mEJRczAFkADefwiS7hXoP1P7TLTrUaQfxuGg+QR7FxkCKoTA/v5lpVnsKHCK6Y+gI8fcccIC4PogsI64DOhuzyPHQpuQB2hA/OXYHyBEfGxCtUMmxW8DQai37+U9goXj7JLRUqOvYbwIQjSFZajLfAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "navLeft",
  __ssrInlineRender: true,
  props: {
    list: {},
    selectId: {}
  },
  emits: ["update:selectId"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useRouter();
    const visible = ref(false);
    getCurrentInstance();
    const routing = getRouting();
    const { list, selectId } = toRefs(props);
    const init = () => {
    };
    const toClose = () => {
      visible.value = false;
    };
    watch(() => routing.path, () => {
      list.value.forEach((item) => {
        if (item.url == routing.path) {
          emits("update:selectId", item.id);
        }
      });
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Poptip = resolveComponent("Poptip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-content-left" }, _attrs))} data-v-87be40ea><div class="main-content-left-children" data-v-87be40ea><!--[-->`);
      ssrRenderList(unref(list), (item, i) => {
        _push(`<!--[-->`);
        if (!item.type || item.type == "normal") {
          _push(`<div class="${ssrRenderClass([unref(selectId) == item.id ? "active" : "", "mainContentLeftChildrenItem"])}" data-v-87be40ea><img${ssrRenderAttr("src", item.img)} data-v-87be40ea><div class="name" data-v-87be40ea>${ssrInterpolate(item.name)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.type == "route") {
          _push(`<div class="${ssrRenderClass([unref(selectId) == item.id ? "active" : "", "mainContentLeftChildrenItem"])}" data-v-87be40ea><img${ssrRenderAttr("src", item.img)} data-v-87be40ea><div class="name" data-v-87be40ea>${ssrInterpolate(item.name)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.slot) {
          ssrRenderSlot(_ctx.$slots, item.slot, {}, null, _push, _parent);
        } else {
          _push(`<!---->`);
        }
        if (item.type == "division") {
          _push(`<div class="mainContentLeftChildrenItem" data-v-87be40ea><div class="division" data-v-87be40ea></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="user" data-v-87be40ea><div class="area" data-v-87be40ea><div class="power" data-v-87be40ea><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-87be40ea> \u5269\u4F59\u7535\u91CF ${ssrInterpolate(unref(routing).electric)}</div><div class="info" data-v-87be40ea>`);
      if (unref(routing).teanList.length > 0) {
        _push(`<!--[-->`);
        if (unref(routing).currentTean) {
          _push(`<!--[-->`);
          if (unref(routing).currentTean.personFlag) {
            _push(`<!--[-->`);
            if (!unref(routing).userLogo) {
              _push(`<img class="avatar"${ssrRenderAttr("src", _imports_1)} data-v-87be40ea>`);
            } else {
              _push(`<img class="avatar"${ssrRenderAttr("src", unref(routing).userLogo)} data-v-87be40ea>`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<img class="avatar"${ssrRenderAttr("src", unref(routing).currentTean.headPortrait)} data-v-87be40ea>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(routing).currentTean) {
        _push(`<h2 data-v-87be40ea>`);
        _push(ssrRenderComponent(_component_Tooltip, {
          transfer: true,
          "max-width": 200,
          content: unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="userName text-hide-2" data-v-87be40ea${_scopeId}>${ssrInterpolate(unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName)}</div>`);
            } else {
              return [
                createVNode("div", { class: "userName text-hide-2" }, toDisplayString(unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(routing).clientType == "TEAM") {
        _push(`<div class="tag1" data-v-87be40ea>\u56E2\u961F</div>`);
      } else {
        _push(`<div class="tag2" data-v-87be40ea>\u4E2A\u4EBA</div>`);
      }
      _push(`<div class="switch" data-v-87be40ea>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Poptip, {
              modelValue: visible.value,
              "onUpdate:modelValue": ($event) => visible.value = $event,
              placement: "top",
              trigger: "click",
              transfer: true
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(cList, {
                    onInit: init,
                    onClose: toClose
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(cList, {
                      onInit: init,
                      onClose: toClose
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-87be40ea${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Poptip, {
                modelValue: visible.value,
                "onUpdate:modelValue": ($event) => visible.value = $event,
                placement: "top",
                trigger: "click",
                transfer: true
              }, {
                content: withCtx(() => [
                  createVNode(cList, {
                    onInit: init,
                    onClose: toClose
                  })
                ]),
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    alt: ""
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav/navLeft.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87be40ea"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=navLeft-e5366511.mjs.map
