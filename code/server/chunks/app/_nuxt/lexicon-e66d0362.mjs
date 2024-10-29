import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './close-e8808509.mjs';
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
import 'vue-router';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0RJREFUWEftlktSU0EUhv/uS8IrkPCStwRKA8ykSiPMYAWyA2UFyApIViA7EFegroA4UnAQZgpSEBHkZZEQICGP7tYTblMJuYGbVAom9uhW3X585+/T/zkM9zzYPZ+P/wBlKRAOb3myrrpZpdQklPKCwWteYQxgqwA+CME+Tox2R+xerS2Az9/2vIah3gJqUm/sMDg4YzA4w0VGQCqVf+aiEDxoB+RWgJX1/VlABAB4Gpw1aKp3wFPvBOeFSzNCIpHK4uj0AvQNICYlC46P9CzcpMaNAF9/7M0rJQMUaUdzHVoba20pGz1L4fD0IqcKYzzw7HF3sNTCkgBm5AskdV9rI+ochq3D9SRS4eefs5waUrK5UkpYAlzeuQxzxjxDD5pAEJUMyg2CkErFhOBjVjlhCbC8trPIGHvZ6a63LXspQLqO/XgSAAv5fT1T1+cVAZjRb1HUjzqbKwm8aA2pkEhn4ThPt4yNDcbyJxQBfPm+85pz9qbH0wB3g7MqAMfnKRycJKGUDD4f7qcXdTWKAFbWfy/Re6foK73769RCKqzvn1hegwXAbtTgzOPrclcler3JxkGcXkTE7+sdvEWBXUWGM9DuqirA5uEpUlkBv6+3IGgrBVStw8BQR1NVAXQi2gGgF+Ct1gvQUaztneT8wO/rbbGVhMNd7iK/r1SSTFZi4zCOf8kd8vv6Cryg6AqW134FGOPz1TAhDRxLpLEXS0BKNTc+0ldQnIoAwltbnkzGGa1mIpovAELwwet2bGnF2guqoYI2IQCLfl/vzK1WTBN0MSI/eNjmKrsSXlXErMTm0Wn5xYg20JZMbjjQ5oKjpryKSJVw5/g8V46tLFhD3tiQ6ISktqu9yX5DQrIfxS8bEnNEhOBTtstx/j2ZSsxTS0ZqEEijs6ZIESkVosk0zpKZXOWjlgwKsbzG1RLi1p5Q5wTnIkA9goajNo26JIqSio3ZB5q/VUgIY0YawuMAWyJ488eq4zw9lV+SbQHoQ83u+AUgpwH25GpjhQiYiiilPjkT2YX8A5bXtqcZM97nFeCCxqQsgEqdUCe0Xp9vSHcCQAfrhKZvrvirp8Pd7+j7zgAuIbanpWSxidH+kK1nWKnk5az7C9RgizAV/c8cAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA0CAYAAADBjcvWAAAAAXNSR0IArs4c6QAAA3lJREFUaEPdWr1u4kAQHmNDMAVSRGGJipqWijwDrfMeadNgmrR5j7jkHaCiJDXScTksHcopOtmn405zmrkda+JAwU+RXSTLZrzenW9nd2Z29/MAABDR8zwP5U4y+RmZ/g9SloT0bF5SBeW7fXIqTs2pu25qX5usU6WdUl+pZ5/e/FHlxzKjpJckCb/W98qzKLpXSSmr6zAFy++kR/dW8LEjpHNYzUOd9A4YIZ9MJgSGev/PgYasEIt1aCiSVbzlcumlaVpDxN9WIDigJFmG5xcA1OI4ZlD0jIi/rAamnAdZr9br9YLVauUj4k9XgJGl/G63G7y8vNQR8YcrwHwACACgDgANRPxuPTDjMgkUgbuiCxEz64ElSVJLkoRAsbUAoImI35wA9vT0FGy323qWZQQsRMSv1gMjb2jmFw3HpgG2th4YDcXpdOqv1+tGlmVXYRiGeZ7bD4ycRr/f95+fn2mOkfOgoWg3MJN5UHAuXT0AtKwHZrJuHoqLxYIs5t4cWywWjXa7ffX29kYW+2K185ClirGYALN/jhmriLuvG4u5B4y8YhiGrTzP7R6KymJ+FEWNoijcmGMamMkT3YhjBhgHaJMrOpV5lM7DmcxDAnSSJJJ5XGQozmYzSNMUwjCE0WgENzc3PDiOlZ8aS3mXSq3HaMlC19kp1f39PWy3W9ar1WrB4+MjPx8rPwtYHMd+mqa8NdBut5u73e5sd393dwd5nrNenU4HHh4e+PlY+VnAaD3W7/eDS2b38/kcptMpFEUBt7e3MBwOWcdj5ScD09l9FEW0gr7IHDtVoUt9V84xyRVdzDzIKzq1NUBW0wtNZ4ais8AkjpVD0aXNHCdTKi+O45o5PqKFJgVo+7ff1ClmYOLYRVKqS8WjU+uRo1o+QnJxPebeFrekVIPBgPYV3dqlqhwjubFhqpJgOR8jYHQ+Zv0xEvM6nDz4U7licH193Xh9fXXiqFZyRZ19uHG4buaZxDLe1HGJDsEEFgrUURQFm83GGQILc6mMEyFmTnFqOvMZvtPsN5lrbDnrSWLUuxWyI7v/8Xj89zP0/Kk6fOArGiZcScY0/MV39RviJMlkM6gkapqCB8mZRMzUl1RcJXzqBivfUPPEZGWbHAKu+YrvCmk6qrJoWdkhmi2j/U8T1ExQbn8fDVbkimpblhXlq20pOi+3I5RdDfIfE1Nrk/6fwzAAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lexicon",
  __ssrInlineRender: true,
  emits: ["close", "getTageName"],
  setup(__props, { expose: __expose, emit: emits }) {
    const { proxy } = getCurrentInstance();
    const params = ref({
      lang: "cn",
      code: "",
      tagType: "",
      tagCode: "",
      keyWord: ""
    });
    const classList = ref([]);
    const btnList = ref([]);
    const list = ref([]);
    const loading1 = ref(false);
    const loading2 = ref(false);
    const selectName = ref("");
    const tagType = ref("");
    const selectList = ref([]);
    const showFn = (record, name) => {
      params.value = {
        lang: "cn",
        code: "",
        tagType: "",
        tagCode: "",
        keyWord: ""
      };
      classList.value = [];
      btnList.value = [];
      list.value = [];
      selectName.value = name;
      selectList.value = [];
      tagType.value = record;
      init();
    };
    const init = () => {
      let data = {
        type: tagType.value
      };
      loading1.value = true;
      proxy.$api.queryWordLibTagTemplateList(data).then((res) => {
        classList.value = res.data;
        loading1.value = false;
        if (res.data && res.data.length > 0) {
          params.value.code = res.data[0].code;
          if (res.data[0].subTagList && res.data[0].subTagList.length > 0) {
            params.value.tagCode = res.data[0].subTagList[0].code;
            btnList.value = res.data[0].subTagList;
            params.value.tagType = tagType.value;
            getTagList();
          }
        }
      }).catch(() => {
        loading1.value = false;
      });
    };
    const toChoose = (record) => {
      params.value.keyWord = "";
      params.value.tagCode = record;
      params.value.tagType = tagType.value;
      getTagList();
    };
    const getTagList = () => {
      loading2.value = true;
      proxy.$api.queryWordLibTagList(params.value).then((res) => {
        list.value = res.data;
        loading2.value = false;
      }).catch(() => {
        loading2.value = false;
      });
    };
    const tabsChange = (e) => {
      params.value.keyWord = "";
      btnList.value = [];
      list.value = [];
      classList.value.forEach((item) => {
        if (item.code == e) {
          btnList.value = item.subTagList;
          if (item.subTagList && item.subTagList.length > 0) {
            params.value.tagCode = item.subTagList[0].code;
            getTagList();
          }
        }
      });
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Switch = resolveComponent("Switch");
      const _component_Spin = resolveComponent("Spin");
      const _component_van_tabs = resolveComponent("van-tabs");
      const _component_van_tab = resolveComponent("van-tab");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modalPromptMain" }, _attrs))} data-v-538c018a><div class="prompt" data-v-538c018a><div class="prompt-top" data-v-538c018a><div class="prompt-top-name" data-v-538c018a>\u521B\u610F\u8BCD\u5E93</div><div class="prompt-top-content" data-v-538c018a>`);
      _push(ssrRenderComponent(_component_Switch, {
        size: "large",
        onClick: () => {
        },
        modelValue: params.value.lang,
        "onUpdate:modelValue": ($event) => params.value.lang = $event,
        "true-value": "cn",
        "false-value": "en"
      }, {
        open: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-538c018a${_scopeId}>\u4E2D\u6587</span>`);
          } else {
            return [
              createVNode("span", null, "\u4E2D\u6587")
            ];
          }
        }),
        close: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-538c018a${_scopeId}>EN</span>`);
          } else {
            return [
              createVNode("span", null, "EN")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="content-input" data-v-538c018a><img${ssrRenderAttr("src", _imports_0)} data-v-538c018a><input placeholder="\u8BF7\u8F93\u5165\u8BED\u79D1\u5173\u952E\u8BCD"${ssrRenderAttr("value", params.value.keyWord)} data-v-538c018a></div><img class="closeModal"${ssrRenderAttr("src", _imports_0$1)} data-v-538c018a></div></div><div class="prompt-tabs" data-v-538c018a>`);
      _push(ssrRenderComponent(_component_Spin, {
        fix: "",
        show: loading1.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u52A0\u8F7D\u4E2D...`);
          } else {
            return [
              createTextVNode("\u52A0\u8F7D\u4E2D...")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_van_tabs, {
        style: { "width": "550px" },
        active: params.value.code,
        "onUpdate:active": ($event) => params.value.code = $event,
        onChange: tabsChange,
        "line-height": 4,
        "line-width": 16,
        "title-active-color": "#1A1A1A",
        shrink: true,
        "title-inactive-color": "#879299"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(classList.value, (item) => {
              _push2(ssrRenderComponent(_component_van_tab, {
                title: item.name,
                name: item.code
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(classList.value, (item) => {
                return openBlock(), createBlock(_component_van_tab, {
                  title: item.name,
                  name: item.code
                }, null, 8, ["title", "name"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="more" data-v-538c018a><img${ssrRenderAttr("src", _imports_2)} data-v-538c018a></div></div><div class="prompt-class" data-v-538c018a><!--[-->`);
      ssrRenderList(btnList.value, (item) => {
        _push(ssrRenderComponent(_component_Button, {
          size: "small",
          class: ["class-item", item.code == params.value.tagCode ? "" : "default"],
          onClick: ($event) => toChoose(item.code),
          type: item.code == params.value.tagCode ? "primary" : "default"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="prompt-item-list" data-v-538c018a>`);
      _push(ssrRenderComponent(_component_Spin, {
        fix: "",
        show: loading2.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u52A0\u8F7D\u4E2D...`);
          } else {
            return [
              createTextVNode("\u52A0\u8F7D\u4E2D...")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(list.value, (item) => {
        _push(`<!--[-->`);
        if (item.tagName) {
          _push(`<div class="${ssrRenderClass([selectList.value.indexOf(item.code) != -1 ? "active" : "", "list-item"])}" data-v-538c018a>`);
          if (params.value.lang == "cn") {
            _push(`<div class="cn" data-v-538c018a>${ssrInterpolate(item.tagName)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (params.value.lang == "en") {
            _push(`<div class="en" data-v-538c018a>${ssrInterpolate(item.tagValue)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/modal/lexicon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lexicon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-538c018a"]]);

export { lexicon as default };
//# sourceMappingURL=lexicon-e66d0362.mjs.map
