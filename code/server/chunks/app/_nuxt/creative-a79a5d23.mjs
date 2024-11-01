import { _ as __nuxt_component_0 } from './cTopContent-6b788716.mjs';
import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './svga-ebe3b6cb.mjs';
import { _ as __nuxt_component_5 } from './trainModal-a824befd.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { n as nodata } from './nodata-3988aadd.mjs';
import { useRouter } from 'vue-router';
import { l as lodingData } from './loding-9ec1fb58.mjs';
import './workbenchNav-233b0f39.mjs';
import './sPrompt-baa4194f.mjs';
import './close-5dffb58a.mjs';
import './cCreate-9b81dba0.mjs';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import 'vant';
import '@aws-sdk/client-s3';
import './addBase-d16bc2bd.mjs';
import './robot-20021510.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './avatar-8802d9a1.mjs';
import './index-3a8d75d8.mjs';
import './accountModel-962e2c16.mjs';
import './phone-61ab024f.mjs';
import './pwd-8f00960a.mjs';
import './nickname-667f2327.mjs';
import './employee-a21d8a27.mjs';
import './icon1-7fba1a45.mjs';
import './settings-806b801d.mjs';
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
import 'defu';
import 'qrcode.vue';
import '../../nitro/config.mjs';
import 'scule';
import '../../paths.mjs';

const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAkNJREFUWEfVV21O20AQfWMTKYpbKb1BuAHcwEE4tP/gBG1u0JwAOAHhBLgnKP1VgVuFnoDeoD6CpbIFtbGnWjuA115/kCxKuz+j9cybN/PebAhrPrTm/CgB4KDrgu2BUWAUh+TdXeliKgA4cE4AvDea/DHYlDwxKcZ+AJBWDnv2TMkXYWlI3o3CxCOAS+cdCGfpTYKPBN8MgXFBeJvGYoxpJPx8XD0AzcVlwXC+sP8WAM+6A8ztMxBXq4MpxEbngIZRlGfLCAN80fNhUdbHuqOh2AyAS2crHVDifjZMdM9EBOKsYsnAPB7Tm7vQOAPFojlwePHbFXliWEtK8MIFeCHvtjJsUMFTAKTkSCVYYNoVH6qNqEEuCq1PYKBpbJbygTYMcOBI2l3EyYRe306rgDwLAP7aO0RCR7mkU2x0josSzUx3cZrk0rYFlTuFEMLubBdBGAWQGlZszXIyVZm3eZ92fn1aeRdw4FwDkN7g064Y51j0HxZPSbsIaSQ2zajgc3cA23YhOud0kFmvpu9qrnm8WTSppWegVFy2K37USG5CntAqYakZUAZy1u8j/n1d2fdCm4y0oKCI6mccI0QcD3XU38dYiQFFujr+Gds0Et/r3HA1ABe9I1h0qE2Q0DHt3eTNSHtNDwCQqJWHhfJ1Yp3S3s9zrgbQuCXLLZDDNP8jJznb+fUnIk+80gJo0XetEaVa/vJyH5xISrdq8kdI6FTSy/KhAv4Iyj1QEmss2WmqoMRA2w9M3/v3/huarrAp3toZ+AvboXswPbWcCgAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQYSURBVHgB7Vdda1RHGH7ec86mCfmwFoTWWOhFJWStVWkplNa2tFclpDelhdKWFloRpL+gFLqtLYXeeCeiouKdEfFGDIIXosFLg2782GQ1JiYKEowbE7LZPTPjO+fs2czZPWf3ZEW88YX52Jk58zzzfs0s8IKFkixSitdd2rYZ5HZ4A21IJhvKQKE0RTvuPkarBDzwy/0HQfRL0/V6Vhm/e1eAOXsWV9p+oF1jF6I+sdBMLvbv5J1/hSaiKgBxRRp9m6sUl4LVC0udUgfS6dYIEA2GTgUDBDUEzPkuAZRZJTOeWl5Dit5HawTwRd3pAjBpAJpkNKbgKmcDs0zEVQ/gls+umYAa6dvIG273NyYfUAZ9WlU7gn5lXKtft2PQ4MBD9zjtHp+LwnAaEYCwtmsbwFBHmCEZwxTeVcMtecyLWBFHESONCUj7c+9oJm6gYrM17a8dz+IyUR08Sf9M5uIgYk3A4WdxtWr/qvqNvkB9JDhcLXA7J326RXEYDSTeB85vfYtB0iFws/jbh4kFO96rzo8g9dMIGkgjE3zKG8TnvKjQbOdqmctoiftsnzbrf8pkJFoiINQHno3JMLgy/EG3Equ/tUNq+4+yXRZ0UZMoTA+jicSmVjW8ZQwWbQnFeNTqYFyDd3AZZ1ZPdN+awEY6ix6e6xY5nH7jEGUuuIkIqKH02+iyxiPnzXxvktK2FzW7Ei94ky8kvhIw6gyjtPg97ZmeN7eLdsIO7GT1UqTzCURHhIv6e0HfnUVmc8vRSF8i1bmnFiraB6Q1WHf22puukei1PcygwG2WfCIW7kM6p2qX1mlADX1jM/v+UP6PygNBK2rGdNXF5T4PZFktBV4wL29AiI9pd/ZWUwJYl2vnPV6tqlpEgJpkQuAsXVxm+KO88McE54Kl4gDtyk0iRll1ovb3fYUSjqGs1mOu4ribXwHW2+EvTZPoC6ib2ynhn156k+c4nL+lv/ILiJH4MNzb1wcp/0XB7ebUauPD9o/QY7f7wKb7c98hX+13pL75guEjmF/+jfbNLKOBJHsTDqXbONFM8fLXvdDSSScgojNeJ7djDLwoKyZR/9Gf+d+T7N38QaLlib2JwTZ4ahUVYKH8x6nDoFc51hc9Yi7P/5EUXIuTaFUK7/IDw66mXy3a2fTvG3zyopeiV9hnfqS/8yexBklGgNS2UN7vhK+BcQYveeALnIi+ZvDzWKMkI6DUe9V+N7MoMpvbrk+C2DdKcoD25q+jBUnmA0q947XrGHypAu56YXYTwvmkVXAtTTWgMkzSQa93q03yPf9I+bQVXYZ0v6PMxDSeQZprIMOB5WAWWb7SrnF5WNbow1ClAcrceSbwRAS8B/eZ4mfIl/yn1Yo8geyOQcrE/997LqLdTf28aatKmLxeSlJ5Cjb13G0yxgHLAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAk0SURBVHgBzVo7r11HFV5r9lxffEHGCY9glEQWqSKK2BVCQhFKAQ2SEQU9DS3pEA2G/AECBfwARE86GgiiQ5EgVBEkUiwXKBGOFWMScu+5Z6/MY62Zb2bvfe65TnxOljRnz57XXt+s15yZYepIRL4ZHt8N6UZIV2kTSUicnzJXt9Bljrh/kb5woV2mVzX9nJlvzTYJwC6Hx82QnqdtCEEJPGRDu/7LMpMnYIrb9n35bDuiX4T0QgD6bqlScC+HdI02Uc8svo8zAGM95zpkdAnYBAwvlMV8J+Wu/d9Dei6CdFpwc2twovkISBTYWt+1LL6PMVndGspW+rT8qaZ113bUMhtzrIksv8BboOsh/TRhDtK7Gp5vbgXO8qaS9hF8CkyC1D7lgRKbsTVmqLP3KDFX3xmlCM+mfx75OR9+fkbnBCeqcmm2AVgjValIYruGOLeb+JBYEIDwmJ+FecfEawUZ+zrNS65P75VFU9f4uBEBPkObwNnsCzKvQjJVKaoki+AJbdHyDp6i4KyJgkgAB8mmN3CWoPJBg7Yds62blEEpbkQVlTlgaaZQ9bi1gca+Rkl2NGsvBGo7EiAATrhKoziTQau8Ah2SINOTQ8a5Ws5cpduMwSR+DlxjK6CW6EwM0LiWVL76n9Dbfxzp/r9i6vQPQwDX8S3P2A5tV8suPsH0pW8N9IVvOHJjBJ3ds7OJUk2IIEUlLAqyleCcvcVsAdN7uSy543eE3vj1Ka3uEsb+89No3w0/4EHNax8+yvT0jz196rEA7iDgCirrBpNqm3QypQLsJGfuPo1voCSDzW5eint/41cB3D2YJykfmBCGQGtrMa2xaQ0fspJqCpJBfvUFTxcuMQ0+26WBdAgwq2tV0UYrpNqfqeXYOBQps33/nyO5MMqFz3EBJQviQ7MrQLm10TSRJ0Lrk/A8jonT+6gSjtry1h9Gevx7Q9bOoI8SBknqCSHKJs0XdOrZSiOqnnNswoAUbuMgx/8WuvhlrqB6/TxDX03KKLn1B0Sn/w/P98LzvcptXBjYpI6rIUvrlIoDbJZzislbHsGZehJ4TUNQ4g/lgaOqHFxawNPrI3x4gntUtTzJ4E7vE50cSlJB0jXfqJpz//VsHsWDhnIJ9ay84+f8ZO1I1bhrPr+c3CF6/Tcrev+2zuxDoqMnmR655uiCz/pr9sirPPERSLR9FyXuwXYdFZCG0iOwMpMQGkxyx/8h+sdPVg8VmNH7t4U+eGtNV749BO3gpLLDcbDLYI+8yvaI617qgx2YmcPCZqmVVKauTN787elOwBlFVX3nlZH8ZwK4i5TDgqeyhEseFhf5SU1bH5IApjwobZGewESEn7uvjLRrOrkrGdxhBogxzjy75XOGqFk5sEoQQZVGOiPZ6TDtg6IU3YUc1DnYY3QqxnxSTZCgha1cWcdwpaALDcWz7l5wDbEG88SpqmekEXxFJCk/DT6wQersr5fonshWJcQdG729mUl1Za4Xa7ZJyeLHTvsirom5i7G9aWEfffdlBUPQqDfaYfn7n33a0WPPBjs53M5OV/8VuvNXoXuvPZjus3I/AbbweTdRP4iBzf+4Bfr817YHFynGtS8+67Zu3y9EJnW8UK7UxsF+VsazTXA4Bzij8fgcOg97EZmX3Bf+BG1c7zrriNSAOgPh239ZJ7XbliK4qKJbk/mGMo/c1vW7Bt3QvtkrwY6SB+UzTOXea9Ge1vQwqfWMGp8ZNkQF/nuaTjK+ghrUUaEhn2PGP27ipfcu6PUYmrUoNjLDZcC1R3yLDkQ3XWyTaTaU2VKtrBDQKwntN/7NkXqUZnPYNBVWOdi+/qNHcLpTxVuEqqU4+FHjXU9cfqTZx5kNFcBKG5CE5u1xAy3FwXPHuwWaWskM942/gM7cA3wA2hQHzxXvFmg6upQtD5MqbvZy18lNN/Wn422ipTh47ni3NeXFWjm7mBERAxY/8aAE72jMC7SLONjur+aViZ1bsNpj42QmWizTijPXaDuiOTYOr3DZzU5uEoN9B7IN9DgqumDaHzX8KtJHv54ti83u0lZGbslocoI22HmfVqr7hAjshMzBZabL14cswaGqKjmQIDgeP+OHy+xsY4O7IFtw+LDBfOU7Pu2uOTw/ZPCo1LLtyy5ztzpIe/3xfc97MvF/6cEjIYVDl6OnHPmjvH3oPFUpDmCTkRRL5N9jgaEv/+47W9w5he9eCjvcceN3fZrFWKQ3KEg7BLU+ADJLcGaJU869PwHr0eRIBt3AZT0T1H1Sl0ByezZIrTxKmGTMdDodUfpP70eMBWAAFM8DB93hdqaa1MVJdTiWb70ot54I646epJ3T5WfyDEeVTOmglVwq8zXQF6cDrLvee2KAKe+hzVM/9DuV4hCcyRPf9+rwpB5ZewWnQPEiQgVRnxzO3NI+jsDNiXwWL/WmkXrS4ztCt3+3prt/ewDXuqUtR2BHjzNd/YEP3rNGbQvm7iAcXQ/1MKac0asqF2y5q1SAtlW4rlet0onNaT6bLwekPdPQt/+TfJaDskUzMGRLzXZfyFQ02pyGiMFX20xKN1Dx+gjQl7BghVx1Or0Mkg4aR2uIh6PxZ91uN/a7W4XZGXQNQLwE1PFhDiXZm5+5bNCFBnSjHl8Y/s3bJSRjNtV1B/3l2gdRewTeg5IuGxkZ665d2b0rN5sI1pghHXCNfQ7iHzoVE0DnJmKgvxXS1bKaYZiZxLhKkdROracyJDYxQzcZCNR1k2gSs/ss8Cza4yygc3Em6d1WMI7qYpvmwQV61QdGXwoVP0LxlnW2U8bHaiBx0Z5uNUi2V3GdeqpE0s2j/nNdQa+KmGcFV1RUwwV1wOxSxAy4BJDTFWahl222pXcccIUkOZ50r6SzOzxpZcjPgYN/KY16DZXxnM+7Zw485IY7aXMUv/QVHwb6cwgJL4aOz9tECFEbV5TxJL2RwRZl3u50IJmxw3IExlUC5XuurkzQxgqYoY6BE7RAv4z3t7P65ivNfwoMXS/8wJHwJAxAyDAHYxMhjVvuiFugdTZpEjIalVXH1/SjjdIrV5pLdQQZAv1NjvZo3eDcECWEh/5FLRHwGTRnm6gxE/XjFhhtBvci5dv37842iVecFWi8KHuNehXkFiBhuZwTF09r+zIEWeqnTuVWSC+F9PtocljxIb8LRF2T/+SkAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "creative",
  __ssrInlineRender: true,
  setup(__props) {
    const params = ref({
      total: 0,
      pageSize: 20,
      pageNo: 1
    });
    const trainModalRef = ref();
    const robotInfo = ref({});
    const robotType = ref("");
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const routing = getRouting();
    ref([]);
    const consumeEnergy = ref(null);
    const robotCode = ref(router.currentRoute.value.query.code);
    ref(null);
    ref([]);
    ref(0);
    const content = ref("");
    ref("");
    const activeName1 = ref("1");
    const activeName2 = ref("1");
    ref("");
    const addTime = ref("");
    const btnLoading = ref(false);
    const loading = ref(false);
    ref();
    const reqlogList = ref([]);
    const isShow = ref(true);
    const columnListData = ref([]);
    const toCollect = proxy.$debounce(() => {
      let apiUrl = robotInfo.value.favoriteFlag ? "deleteCategoryRobot" : "collectRobot";
      let data = {
        relationCode: robotInfo.value.collectRelationCode,
        robotCode: robotInfo.value.code
      };
      proxy.$api[apiUrl](data).then((res) => {
        if (!robotInfo.value.favoriteFlag) {
          robotInfo.value.favoriteFlag = true;
          robotInfo.value.collectRelationCode = res.data;
          proxy.$Message.success("\u6210\u529F\u6536\u85CF");
        } else {
          robotInfo.value.favoriteFlag = false;
          robotInfo.value.collectRelationCode = "";
          proxy.$Message.success("\u53D6\u6D88\u6536\u85CF");
        }
      });
    }, 300);
    const onChange = (e) => {
      params.value.pageNo = e;
      let data = {
        robotCode: robotCode.value,
        type: "CHAT",
        robotType: robotType.value,
        pageSize: params.value.pageSize,
        pageNo: params.value.pageNo
      };
      loading.value = true;
      proxy.$api.querySystemRobotAiRecordPageList(data).then((res) => {
        reqlogList.value = res.data;
        params.value.total = res.totalCount;
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const onVanTabs = (e) => {
      params.value.pageNo = 1;
      activeName2.value = e.name;
      if (e.name == "2") {
        let data = {
          robotCode: robotCode.value,
          type: "CHAT",
          robotType: robotType.value,
          pageSize: params.value.pageSize,
          pageNo: params.value.pageNo
        };
        loading.value = true;
        proxy.$api.querySystemRobotAiRecordPageList(data).then((res) => {
          reqlogList.value = res.data;
          loading.value = false;
          params.value.total = res.totalCount;
        }).catch(() => {
          loading.value = false;
        });
      }
    };
    const rollBottom = async () => {
    };
    watch(
      () => routing.getChatMsg,
      (item) => {
        if (item && item.content) {
          content.value += item.content;
          rollBottom();
        }
      },
      { deep: true }
    );
    watch(
      () => routing.electric,
      (item) => {
        btnLoading.value = false;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cTopContent = __nuxt_component_0;
      const _component_Icon = resolveComponent("Icon");
      const _component_van_tabs = resolveComponent("van-tabs");
      const _component_van_tab = resolveComponent("van-tab");
      const _component_Input = resolveComponent("Input");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_DatePicker = resolveComponent("DatePicker");
      const _component_Spin = resolveComponent("Spin");
      const _component_svga = __nuxt_component_0$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Page = resolveComponent("Page");
      const _component_trainModal = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chatCreativeInfo" }, _attrs))} data-v-fd9bf59a>`);
      _push(ssrRenderComponent(_component_cTopContent, {
        type: "personal",
        title: "\u667A\u80FD\u4F53"
      }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="talk-title" style="${ssrRenderStyle({ "margin-right": "10px" })}" data-v-fd9bf59a${_scopeId}><div data-v-fd9bf59a${_scopeId}>${ssrInterpolate(robotInfo.value.name)}</div><div class="talk-star" data-v-fd9bf59a${_scopeId}>`);
            if (!robotInfo.value.favoriteFlag) {
              _push2(ssrRenderComponent(_component_Icon, {
                type: "ios-star-outline",
                onClick: unref(toCollect),
                size: "22",
                class: "pointer"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Icon, {
                type: "md-star",
                onClick: unref(toCollect),
                size: "22",
                color: "#f8ac3a",
                class: "pointer"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "talk-title",
                style: { "margin-right": "10px" }
              }, [
                createVNode("div", null, toDisplayString(robotInfo.value.name), 1),
                createVNode("div", { class: "talk-star" }, [
                  !robotInfo.value.favoriteFlag ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    type: "ios-star-outline",
                    onClick: unref(toCollect),
                    size: "22",
                    class: "pointer"
                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    type: "md-star",
                    onClick: unref(toCollect),
                    size: "22",
                    color: "#f8ac3a",
                    class: "pointer"
                  }, null, 8, ["onClick"]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="info" data-v-fd9bf59a><div class="info-right" data-v-fd9bf59a><div class="info-right-create" data-v-fd9bf59a><div class="tabs" data-v-fd9bf59a>`);
      _push(ssrRenderComponent(_component_van_tabs, {
        active: activeName1.value,
        "onUpdate:active": ($event) => activeName1.value = $event,
        "line-height": 4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_van_tab, {
              title: "\u5F00\u59CB\u521B\u4F5C",
              name: "1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_van_tab, {
                title: "\u5F00\u59CB\u521B\u4F5C",
                name: "1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="create-content" data-v-fd9bf59a><div class="create-content-title" data-v-fd9bf59a><img class="thinking"${ssrRenderAttr("src", _imports_0)} data-v-fd9bf59a><div data-v-fd9bf59a>\u4E0D\u77E5\u9053\u5199\u4EC0\u4E48?</div><img class="repair"${ssrRenderAttr("src", _imports_1)} data-v-fd9bf59a><div class="eg" data-v-fd9bf59a>\u8BD5\u8BD5\u793A\u4F8B</div></div><div class="create-content-form" data-v-fd9bf59a>`);
      if (isShow.value) {
        _push(`<!--[-->`);
        ssrRenderList(columnListData.value, (item, i) => {
          _push(`<div class="form-item" data-v-fd9bf59a><div class="form-item-title" data-v-fd9bf59a>`);
          if (item.hadRequired) {
            _push(`<div class="require" data-v-fd9bf59a>*</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="name" data-v-fd9bf59a>${ssrInterpolate(item.itemName)}</div></div>`);
          if (item.formType == "TEXT") {
            _push(ssrRenderComponent(_component_Input, {
              modelValue: item.value,
              "onUpdate:modelValue": ($event) => item.value = $event,
              placeholder: item.attrItemJson
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.formType == "TEXTAREA") {
                  _push2(ssrRenderComponent(_component_Input, {
                    modelValue: item.value,
                    "onUpdate:modelValue": ($event) => item.value = $event,
                    type: "textarea",
                    placeholder: item.attrItemJson,
                    rows: 6
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  item.formType == "TEXTAREA" ? (openBlock(), createBlock(_component_Input, {
                    key: 0,
                    modelValue: item.value,
                    "onUpdate:modelValue": ($event) => item.value = $event,
                    type: "textarea",
                    placeholder: item.attrItemJson,
                    rows: 6
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (item.formType == "SELECT" || item.formType == "TABS") {
            _push(ssrRenderComponent(_component_Select, {
              transfer: true,
              modelValue: item.value,
              "onUpdate:modelValue": ($event) => item.value = $event
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(item.attrItemJson.split(";"), (dataText, idx) => {
                    _push2(ssrRenderComponent(_component_Option, {
                      value: dataText,
                      key: idx
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(dataText)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(dataText), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.attrItemJson.split(";"), (dataText, idx) => {
                      return openBlock(), createBlock(_component_Option, {
                        value: dataText,
                        key: idx
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(dataText), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.formType == "DATE") {
                  _push2(ssrRenderComponent(_component_DatePicker, {
                    type: "date",
                    modelValue: item.value,
                    "onUpdate:modelValue": ($event) => item.value = $event,
                    placeholder: item.attrItemJson
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  item.formType == "DATE" ? (openBlock(), createBlock(_component_DatePicker, {
                    key: 0,
                    type: "date",
                    modelValue: item.value,
                    "onUpdate:modelValue": ($event) => item.value = $event,
                    placeholder: item.attrItemJson
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle({ "height": "138px" })}" data-v-fd9bf59a></div></div><div class="create-content-submit" data-v-fd9bf59a><div class="submit-title" data-v-fd9bf59a><img${ssrRenderAttr("src", _imports_2)} data-v-fd9bf59a><div data-v-fd9bf59a>\u6D88\u8017${ssrInterpolate(consumeEnergy.value)}\u7535\u91CF</div></div><div class="${ssrRenderClass([btnLoading.value ? "noBtn" : "", "submit-btn"])}" data-v-fd9bf59a>`);
      if (!btnLoading.value) {
        _push(`<div data-v-fd9bf59a>\u7ACB\u5373\u521B\u4F5C</div>`);
      } else {
        _push(ssrRenderComponent(_component_Spin, {
          fix: "",
          show: btnLoading.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-fd9bf59a${_scopeId}> \u521B\u4F5C\u4E2D `);
              _push2(ssrRenderComponent(_component_svga, {
                svgaImg: unref(lodingData),
                canvasName: "loadDatas",
                width: 35
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                  createTextVNode(" \u521B\u4F5C\u4E2D "),
                  createVNode(_component_svga, {
                    svgaImg: unref(lodingData),
                    canvasName: "loadDatas",
                    width: 35
                  }, null, 8, ["svgaImg"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><div class="submit-bottom" data-v-fd9bf59a><span data-v-fd9bf59a>\u8BF7\u9075\u5B88<a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} data-v-fd9bf59a>\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B</a><span data-v-fd9bf59a>\uFF0CAI\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA\uFF0C\u5176\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u7684\u89C2\u70B9\u548C\u6001\u5EA6</span></span></div></div></div></div><div class="info-right-result" data-v-fd9bf59a><div class="result-tabs" data-v-fd9bf59a>`);
      _push(ssrRenderComponent(_component_van_tabs, {
        onClickTab: onVanTabs,
        active: activeName2.value,
        "onUpdate:active": ($event) => activeName2.value = $event,
        "line-height": 4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_van_tab, {
              title: "\u521B\u4F5C\u7ED3\u679C",
              name: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_van_tab, {
              title: "\u521B\u4F5C\u8BB0\u5F55",
              name: "2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_van_tab, {
                title: "\u521B\u4F5C\u7ED3\u679C",
                name: "1"
              }),
              createVNode(_component_van_tab, {
                title: "\u521B\u4F5C\u8BB0\u5F55",
                name: "2"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="result-content" data-v-fd9bf59a>`);
      if (activeName2.value == "1" && !_ctx.$isEmpty(content.value)) {
        _push(`<!--[--><div class="result-content-details" id="result-content-details" data-v-fd9bf59a><pre data-v-fd9bf59a>${ssrInterpolate(content.value)}</pre></div><div class="result-content-bottom" data-v-fd9bf59a><div class="time" data-v-fd9bf59a>${ssrInterpolate(_ctx.$dateFormat(addTime.value, "yyyy-MM-dd hh:mm:ss"))}</div><div class="action" data-v-fd9bf59a>`);
        if (unref(routing).showTagView) {
          _push(`<img style="${ssrRenderStyle({ "width": "auto", "height": "28px" })}"${ssrRenderAttr("src", "https://hz-oss.chatdzq.com/file/chatdzq/js/warn.svg?v=" + Date.now())} data-v-fd9bf59a>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, {
                content: "\u590D\u5236",
                transfer: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_3)} data-v-fd9bf59a${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        onClick: ($event) => _ctx.$CopyTex(content.value),
                        src: _imports_3
                      }, null, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Tooltip, {
                  content: "\u590D\u5236",
                  transfer: ""
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      onClick: ($event) => _ctx.$CopyTex(content.value),
                      src: _imports_3
                    }, null, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (activeName2.value == "1" && _ctx.$isEmpty(content.value)) {
        _push(`<div class="noData-content" data-v-fd9bf59a><div class="noData" data-v-fd9bf59a>`);
        _push(ssrRenderComponent(_component_svga, {
          svgaImg: unref(nodata),
          canvasName: "loading",
          width: 220
        }, null, _parent));
        _push(`<p class="mb-28" data-v-fd9bf59a>\u5728\u4F7F\u7528AI\u6307\u4EE4\u751F\u6210\u56FE\u7247\u524D\uFF0C\u5148\u6839\u636E\u5DE6\u4FA7\u533A\u57DF\u7684\u8868\u5355\u4FE1\u606F\u548C\u53C2\u6570\u8FDB\u884C\u8C03\u6574\u3002<br data-v-fd9bf59a>\u5982\u679C\u5BF9\u8FD9\u4E9B\u53C2\u6570\u542B\u4E49\u4E0D\u6E05\u695A\uFF0C\u60A8\u53EF\u4EE5\u70B9\u51FB\u201C\u5E2E\u52A9\uFF1F\u201D\u6216\u67E5\u770B\u201C\u8BD5\u8BD5\u793A\u4F8B\u201D\u3002</p><p data-v-fd9bf59a>\u7136\u540E\u70B9\u51FB\u201C\u7ACB\u5373\u521B\u4F5C\u201D\u5F00\u59CB\u521B\u4F5C</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeName2.value == "2") {
        _push(`<!--[-->`);
        if (reqlogList.value.length > 0) {
          _push(`<div class="recordList" data-v-fd9bf59a><!--[-->`);
          ssrRenderList(reqlogList.value, (item, index) => {
            _push(`<div class="recordList-item" data-v-fd9bf59a><div class="title text-hide" data-v-fd9bf59a>${ssrInterpolate(item.robotName)}</div><div class="content" data-v-fd9bf59a>${ssrInterpolate(item.content)}</div><div class="time" data-v-fd9bf59a><span data-v-fd9bf59a>${ssrInterpolate(item.gmtCreate)}</span></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="noData-content" data-v-fd9bf59a><div class="noData" data-v-fd9bf59a>`);
          _push(ssrRenderComponent(_component_svga, {
            svgaImg: unref(nodata),
            canvasName: "loadings",
            width: 220
          }, null, _parent));
          _push(`</div></div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (params.value.total != 0 && activeName2.value == "2") {
        _push(`<div class="bottom-page" data-v-fd9bf59a>`);
        _push(ssrRenderComponent(_component_Page, {
          total: params.value.total,
          "page-size": params.value.pageSize,
          onOnChange: onChange,
          "show-elevator": ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_trainModal, {
        ref_key: "trainModalRef",
        ref: trainModalRef
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/chat/creative.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const creative = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd9bf59a"]]);

export { creative as default };
//# sourceMappingURL=creative-a79a5d23.mjs.map
