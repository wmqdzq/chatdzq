import { a as _export_sfc, f as useI18n, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './sPrompt-baa4194f.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, resolveDirective, mergeProps, withCtx, withDirectives, openBlock, createBlock, createVNode, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode, withKeys, vModelText, createTextVNode, toRefs, unref } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_4 } from './icon10-8a0daf5c.mjs';
import { _ as _imports_1$1 } from './hot-bc2e3ef0.mjs';
import { _ as _imports_4$1 } from './edit1-d50fac04.mjs';
import { _ as _imports_5$1 } from './del1-dbdd8b76.mjs';
import { _ as _imports_1$2 } from './icon14-9b74ca74.mjs';
import { _ as _imports_2 } from './delete-79bda725.mjs';
import { useRouter } from 'vue-router';

const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABJ9JREFUWEftmG1MU1cYx//3tqWlvAQnxW2iYFDciMuA3kIVFiHORRK7l2jm/IDTRdElS9wMsozJHJtLtkwyF5b4gewLoGaTiRAWWLJptzDKIL2p2gAyAnUro9pWihQo9LYdpwrhrW/QbmTjJP3Qc87znN953s45l8Iyb9Qy58MK4FI9tGLBkFowJyeHPzw8fBjArqUuNFOeoiib0+lsYFm22pdery5mGKacoum31j8rxdiEGBznS51/45xtGEM6NVwu1zssy57zJuURMCUlJVIsFhufO1Bgzco/HKthKVhH/APwZ9bt2hLcu9nYo1arNy0KUC6XJ9rt9r49H51F8rbtCDZg/2+X0NtUZlGr1atWAP1x6dw5IbNgv6YJ9rEHATPFbsxApCRxWi4kgKYBIxqKM+CwjwcMuHnnMaTu/SC0gCSLCZyTCxxQEB49a1MhsWAwy8z/E3DIMo7unyo8upjmC7Ep9xD4wgifMRoSC5rv3se1z1/2mCQUj48dJ69CFC35dwD/0zH44J4OwogY94+0kLh4sRZsqS5B27dnwA8TQVFci4T0XaEDnHmSkJOBnBDemrFPg0snZChKWwuN0YrmkXDkl9/CSL8W+pZK/bUrFeuCdlmYe5JEP74ReaW/eNTvdHBuuLXWHqj2MTCN2fF0ZSuSXngTuUfLiZzu3IvUhqABzj1JSFnhCYSz9BOovzqaodf+jDtsEwZut6J9vwxMXJR7Xhn7B4padEiS5iFu8zbTr1Xv7QSg8QTp8cK6mPug7X4/qgvlsJr0iA0XIPvJGOxLjsNryWum1+ecLnx1Q4+6XhNaDUOwcU4ypgRAQOfd2YMKqK4tQ3tVEVSvMtiyOgJ82vuj0eZworrLgCM/dhHIrZNvn9a5lgwqoP6WEjXv5+LTrCS8yyT4LNZkgqL+Bhr6zDYAJFlMfgNmZmbGcxz3Z6BXflJS2JpPULv7GezeEOsVskTVizNtOuJWBYCmhSZ7tOCjJ6dxy/N5MXknTkGrFfr9aKr7WAGjphGdB+SIj5ydRFMQDX0mKOpvkr8nAZwNOEmIgFQqPQbgPD9MCIoXBpfroZr47INYl/X6tE6X04E7189jsLcNaUcqQWrfheNp+D5dggxJJHhCAWgeDxRNu2UcdjvKu8043WW2Tib2w/T20Hx++pDJZKkOhyMbAJ/ooCjqdEJOQcz67QVulfZRC7q+K4alt40TRklKM443NvzwZT7TqayuaJFJkCjiLbj0RcMYCn8fImPhAEgMLth8As6VkkqlfQk5BYkEcMTQjY5vCjFhNVtA0/vbVc1TcbQXwGWtPA6PCWjoxhy4eHcUEgGNPXHh7r4m8zje6Bgk6snVZ15yTK27GMDONamKp1YlbUV3XSkxqZYvWv2KSlnfM2MzbsDixChcHxyHamiCDFkAiIQ0JXpJIoKQplA1MEr6nwBgCJoFGYZ52+VyfUEU8sLENeL4HYeUlz8ksTSziQDUPvqm0zxZQr4GQL7DkLQ+COAoCeVJ9342WZxPLSkGFxJOT0+Xk36WZecV1gVAPcUX2YTH2Fu0i73tNhRjAcdgKCCC7uJ/EnLZW/BvmBCoR6J7m9sAAAAASUVORK5CYII=";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAApRJREFUWEftVjGojWEYfp4yGAwGg8FgUCiKsgihSIpyYyCUDcUgbq4Y3EHILUwoxY1BuYNyB8VwDXIXpSyKwaAYFINiuPX6ntP76z3f+c/5zzn/zRncbzvn/b73e77nfd7n/YkBLw74fswB+D8YMLNJAFMkx3LN/RMGzGwKwOZ0+UWSoxFEEwAzW1jSFTMkf/bbLWa2AMAzABs8xw0AwyRn9PsvADN7CmBXm4t+AHgF4CGAJyR/dwJkZqsAnACwA8DSkr2TJHfnAL4DKGMgP/8ewHGSorVpOYPXARypYGycZGNPZGAjgG0lBwVKLxKF8z0uBg6TnCj2m5le+jyxtCzkeAvgjTOxxP+/lOi/UOzpWoRmtlgiAnDUD6uGO0m+MDMBe53Ks8ZjuvhUwVIQ4TmSV9qKsBuhmZmou+d7PwFY6cDO+n8S3FDUiZlJO6r7o1lpw6Rs9fNpT3YfwH4vz2cB6qVrui5BRO5iewegqGsRPlD2yk7M9gVACc3sEIAHIbmcbms3ZaylgaB6Ce9LaF11hWrd06rDwAiAy+E2+cPqwuG6RdEXADNT7T8EXyjuk8W2DJxZ10Bm28MAznspNDPWkvyYiVbtJwuv14ZuOLeC1U6TXF/iDdsjiGBEIySv9ixCn2h7/KUrPIF6flPydJmRuuIxgH0ek1XfBnBT8QBA4VGSctTGirNA/ry3pF6LUjLZ8LwQ06WyYQmvsZydu0kbB7Mc3wBoJBdzROE7JI/lAH6ViCrHI/8fB3CGpEZ0y3J/uOag2+lPehjKAWh+FxTmB0X3dJqKEwn516oWcza2+PfF8jQH1gW/UGlOtnyQVCWtEw8aaKp/EwN1Lqg66237cmAfpZ0A9uWEVS/uJT4HYOAM/AF309Yh7+/DgAAAAABJRU5ErkJggg==";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["update:state", "prompt"],
  setup(__props, { expose: __expose, emit: emits }) {
    const { proxy } = getCurrentInstance();
    const promptState = ref(false);
    const cateShowIndex = ref(9);
    ref(null);
    const cateHeight = ref(120);
    const listData = ref([]);
    const commListData = ref([]);
    const promptCode = ref("");
    const pageType = ref(1);
    const loading = ref(false);
    const btnLoading = ref(false);
    const robotCode = ref("1724597122952564738");
    const commonContent = ref("");
    const isAdd = ref(false);
    const addContent = ref("");
    const selectParams = ref({});
    const sPromptRef = ref();
    const keyWord = ref("");
    const pageLoading = ref(false);
    const consumeEnergy = ref(0);
    const contentList = ref();
    const randomText = ref("");
    const templateType = ref("");
    const commType = ref("add");
    const editCode = ref("");
    const onAddComm = (type, item) => {
      editCode.value = "";
      selectParams.value = {};
      keyWord.value = "";
      commonContent.value = "";
      commType.value = type;
      if (type == "edit") {
        editCode.value = item.code;
        selectParams.value.cateName = item.commonPhrasesCategory;
        selectParams.value.type = item.commonPhrasesCategoryType;
        selectParams.value.code = item.commonPhrasesCategoryCode;
        keyWord.value = item.keyWord;
        commonContent.value = item.content;
      }
      promptState.value = true;
      pageType.value = 3;
      getCommon();
    };
    const showFn = () => {
      promptState.value = true;
      keyWord.value = "";
      commonContent.value = "";
      chooseType(1);
      calcElectricity();
    };
    const calcElectricity = () => {
      let data = {
        typeList: ["SYSTEM_QA_CHAT"]
      };
      proxy.$api.calcElectricity(data).then((res) => {
        consumeEnergy.value = res.data[0].electricity;
      });
    };
    const onPromptList = () => {
      let data = {
        type: "PROMPT_ROBOT_CATEGORY",
        name: ""
      };
      pageLoading.value = true;
      proxy.$api.queryTagTemplateListFusion(data).then((res) => {
        listData.value = res.data;
        pageLoading.value = false;
      }).catch(() => {
        pageLoading.value = false;
      });
    };
    const hotListData = ref([]);
    const onCommList = (code) => {
      let data = {
        tagTemplateCode: code
      };
      pageLoading.value = true;
      proxy.$api.queryKeyWordCommonPhrases(data).then((res) => {
        commListData.value = [];
        res.data.forEach((item, i) => {
          commListData.value.push({
            code: item.code,
            promptName: item.keyWord,
            promptContent: item.content,
            commonPhrasesCategory: item.commonPhrasesCategory,
            commonPhrasesCategoryType: item.commonPhrasesCategoryType,
            commonPhrasesCategoryCode: item.commonPhrasesCategoryCode,
            useCount: item.useCount
          });
        });
        pageLoading.value = false;
      }).catch(() => {
        pageLoading.value = false;
      });
    };
    const onClose = () => {
      promptState.value = false;
      emits("update:state", promptState.value);
    };
    const chooseType = (record) => {
      templateType.value = "";
      pageType.value = record;
      promptCode.value = "";
      if (pageType.value == 1) {
        onPromptList();
      }
      if (pageType.value == 2) {
        getCommon();
      }
    };
    const toAdds = async () => {
      isAdd.value = true;
    };
    const getCommon = () => {
      pageLoading.value = true;
      proxy.$api.queryCommonPhrasesCategory().then((res) => {
        listData.value = [];
        res.data.forEach((item, i) => {
          listData.value.push({
            cateName: item.name,
            code: item.code,
            promptList: item.commonPhrasesResVOS,
            hotUseFlag: item.hotUseFlag
          });
        });
        onCommList();
        pageLoading.value = false;
      }).catch(() => {
        pageLoading.value = false;
      });
    };
    const toRandom = () => {
      let data = {
        robotCode: robotCode.value
      };
      btnLoading.value = true;
      loading.value = true;
      commonContent.value = "";
      proxy.$api.ai_bulidChatGroupId(data).then((res) => {
        let data2 = {
          content: randomText.value,
          groupId: res.data,
          robotCode: robotCode.value
        };
        proxy.$setAiChat(proxy, data2, "", (item) => {
          if (item && item.content) {
            loading.value = false;
            commonContent.value = commonContent.value + "" + item.content;
          }
          if (item.type == "[ONCOMPLETED]") {
            btnLoading.value = false;
          }
        });
      });
    };
    const delType = ref("prompt");
    const delMsg = ref("");
    const toDelete = (record, type) => {
      if (record) {
        delType.value = type;
        delMsg.value = type == "prompt" ? "\u662F\u5426\u5220\u9664\u8BE5\u5E38\u7528\u8BED?" : "\u662F\u5426\u5220\u9664\u8BE5\u5206\u7C7B?";
        selectParams.value = JSON.parse(JSON.stringify(record));
        sPromptRef.value.showFn();
      } else {
        let data = {
          code: selectParams.value.code
        };
        let apiName = "delCommonPhrasesCategory";
        if (delType.value == "prompt") {
          apiName = "delCommonPhrases";
        }
        proxy.$api[apiName](data).then(() => {
          proxy.$Message.success("\u5220\u9664\u6210\u529F");
          selectParams.value = {};
          getCommon();
        }).catch(() => {
          btnLoading.value = false;
        });
      }
    };
    const toAddContent = () => {
      if (proxy.$isEmpty(addContent.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165");
        return;
      }
      proxy.$api.addCommonPhrasesCategory({
        name: addContent.value
      }).then(() => {
        proxy.$Message.success("\u5DF2\u65B0\u589E");
        addContent.value = "";
        getCommon();
      });
    };
    const toAddCommon = () => {
      if (proxy.$isEmpty(keyWord.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u5173\u952E\u8BCD");
        return;
      }
      if (proxy.$isEmpty(commonContent.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u5E38\u7528\u5185\u5BB9");
        return;
      }
      let data = {
        keyWord: keyWord.value,
        content: commonContent.value,
        tagType: selectParams.value.type,
        tagCode: selectParams.value.code
      };
      btnLoading.value = true;
      let apiName = "addCommonPhrases";
      if (commType.value == "edit") {
        data.code = editCode.value;
        apiName = "editCommonPhrases";
      }
      proxy.$api[apiName](data).then(() => {
        proxy.$Message.success("\u5DF2\u4FDD\u5B58");
        promptState.value = false;
        btnLoading.value = false;
        emits("update:state", promptState.value);
      }).catch(() => {
        btnLoading.value = false;
      });
    };
    const toCancel = () => {
      promptState.value = false;
      emits("update:state", promptState.value);
    };
    __expose({
      showFn,
      onClose,
      onAddComm
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_Button = resolveComponent("Button");
      const _component_sPrompt = __nuxt_component_1$2;
      const _directive_load = resolveDirective("load");
      _push(`<!--[-->`);
      if (promptState.value) {
        _push(`<div class="promptContainer" data-v-e1dfe395>`);
        if (pageType.value == 1 || pageType.value == 2) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "area-container" }, ssrGetDirectiveProps(_ctx, _directive_load, pageLoading.value)))} data-v-e1dfe395><div class="del" data-v-e1dfe395>`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "font20",
            type: "md-close"
          }, null, _parent));
          _push(`</div><div class="container-top" data-v-e1dfe395><h2 data-v-e1dfe395><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-e1dfe395><span class="${ssrRenderClass([pageType.value == 1 ? "name-active" : "", "top-name"])}" data-v-e1dfe395>\u7075\u611F\u5927\u5168</span></h2><h2 data-v-e1dfe395><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-e1dfe395><span class="${ssrRenderClass([pageType.value == 2 ? "name-active" : "", "top-name"])}" data-v-e1dfe395>\u5E38\u7528\u8BED</span></h2></div><div class="cate" data-v-e1dfe395><ul class="clearfix" data-v-e1dfe395><li class="${ssrRenderClass(promptCode.value == "" ? "active" : "")}" data-v-e1dfe395> \u5168\u90E8 </li><!--[-->`);
          ssrRenderList(listData.value, (item, index) => {
            _push(`<!--[-->`);
            if (index < cateShowIndex.value) {
              _push(`<li class="${ssrRenderClass(promptCode.value == item.code ? "active" : "")}" data-v-e1dfe395>${ssrInterpolate(item.cateName)}</li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><li class="more" data-v-e1dfe395>${ssrInterpolate(cateShowIndex.value == 9 ? "\u66F4\u591A" : "\u6536\u8D77")}</li></ul>`);
          if (pageType.value == 2) {
            _push(`<div class="cate-add" data-v-e1dfe395><span class="pointer" data-v-e1dfe395>+ \u6DFB\u52A0\u5E38\u7528\u8BED</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (pageType.value == 1) {
            _push(`<!--[-->`);
            if (templateType.value !== "HOT_NEWS_CATEGORY") {
              _push(`<div class="list" style="${ssrRenderStyle("height: calc(100% - " + cateHeight.value + "px);")}" data-v-e1dfe395>`);
              if (listData.value.length > 0) {
                _push(`<ul data-v-e1dfe395><!--[-->`);
                ssrRenderList(listData.value, (item, index) => {
                  _push(`<!--[-->`);
                  if (item.promptList.length > 0 && item.type !== "HOT_NEWS_CATEGORY") {
                    _push(`<!--[-->`);
                    if (promptCode.value == "" ? pageType.value == 1 ? true : !item.hotUseFlag : promptCode.value == item.code) {
                      _push(`<!--[-->`);
                      ssrRenderList(item.promptList, (data, idx) => {
                        _push(`<li data-v-e1dfe395><h3 data-v-e1dfe395>${ssrInterpolate(data.promptName)}</h3><p class="text-hide-4" data-v-e1dfe395>${ssrInterpolate(data.promptContent)}</p>`);
                        if (!_ctx.$isEmpty(data.useCount) && data.templateType !== "HOT_NEWS_CATEGORY") {
                          _push(`<div class="hot" data-v-e1dfe395><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-e1dfe395> ${ssrInterpolate(data.useCount)}</div>`);
                        } else {
                          _push(`<!---->`);
                        }
                        _push(`</li>`);
                      });
                      _push(`<!--]-->`);
                    } else {
                      _push(`<!---->`);
                    }
                    _push(`<!--]-->`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                });
                _push(`<!--]--></ul>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<div class="list" style="${ssrRenderStyle("height: calc(100% - " + cateHeight.value + "px);")}" data-v-e1dfe395>`);
              if (hotListData.value.length > 0) {
                _push(`<!--[-->`);
                ssrRenderList(hotListData.value, (item, index) => {
                  _push(`<!--[--><h1 data-v-e1dfe395>${ssrInterpolate(item.sourceName)}</h1><ul data-v-e1dfe395>`);
                  if (item.promptList.length > 0) {
                    _push(`<!--[-->`);
                    ssrRenderList(item.promptList, (data, idx) => {
                      _push(`<li data-v-e1dfe395><h3 data-v-e1dfe395>${ssrInterpolate(data.promptName)}</h3><p class="text-hide-4" data-v-e1dfe395>${ssrInterpolate(data.promptContent)}</p></li>`);
                    });
                    _push(`<!--]-->`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</ul><!--]-->`);
                });
                _push(`<!--]-->`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<div class="list" style="${ssrRenderStyle("height: calc(100% - " + cateHeight.value + "px);")}" data-v-e1dfe395>`);
            if (commListData.value.length > 0) {
              _push(`<ul data-v-e1dfe395><!--[-->`);
              ssrRenderList(commListData.value, (item, index) => {
                _push(`<li data-v-e1dfe395><h3 data-v-e1dfe395>${ssrInterpolate(item.promptName)}</h3><p class="text-hide-4" data-v-e1dfe395>${ssrInterpolate(item.promptContent)}</p>`);
                if (!_ctx.$isEmpty(item.useCount)) {
                  _push(`<div class="hot" data-v-e1dfe395><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-e1dfe395> ${ssrInterpolate(item.useCount)}</div>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<div class="oper" data-v-e1dfe395><div class="icon" data-v-e1dfe395><img${ssrRenderAttr("src", _imports_4$1)} alt="" data-v-e1dfe395></div><div class="icon" data-v-e1dfe395><img${ssrRenderAttr("src", _imports_5$1)} alt="" data-v-e1dfe395></div></div></li>`);
              });
              _push(`<!--]--></ul>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (pageType.value == 3) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "area-container" }, ssrGetDirectiveProps(_ctx, _directive_load, pageLoading.value)))} data-v-e1dfe395><div class="del" data-v-e1dfe395>`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "font20",
            type: "md-close"
          }, null, _parent));
          _push(`</div><div class="container-top" data-v-e1dfe395><h2 style="${ssrRenderStyle({ "margin-bottom": "20px" })}" data-v-e1dfe395><div class="top-name name-active" data-v-e1dfe395>\u6DFB\u52A0\u5E38\u7528\u8BED</div></h2></div><div class="container-main" data-v-e1dfe395><div class="container-input mb-16" data-v-e1dfe395><div class="input" data-v-e1dfe395><textarea${ssrRenderAttr("maxlength", 3e3)} placeholder="\u8F93\u5165\u5E38\u7528\u5185\u5BB9\uFF0C\u4F8B\u5982\u8BF7\u5E2E\u6211\u9488\u5BF9\u8FD9\u4E2A\u5408\u540C\u8FDB\u884C\u5BA1\u6279\uFF0C\u91CD\u70B9\u5173\u6CE8\u6761\u6B3E\u548C\u6761   \u4EF6\u3001\u5408\u540C\u7684\u76EE\u7684\u548C\u53CC\u65B9\u6743\u76CA\u3001\u6CD5\u5F8B\u548C\u5408\u89C4\u8981\u6C42\u3001\u4EF7\u683C\u548C\u4ED8   \u6B3E\u6761\u4EF6\u8FD9\u51E0\u4E2A\u65B9\u9762\u3002" class="input-area" data-v-e1dfe395>${ssrInterpolate(commonContent.value)}</textarea></div><div class="bottom" data-v-e1dfe395>`);
          _push(ssrRenderComponent(_component_Tooltip, {
            content: "\u7535\u91CF(-" + consumeEnergy.value + ")",
            placement: "top"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${ssrRenderAttrs(mergeProps({ class: "bottom-btn" }, ssrGetDirectiveProps(_ctx, _directive_load, btnLoading.value)))} data-v-e1dfe395${_scopeId}><img${ssrRenderAttr("src", _imports_5)} data-v-e1dfe395${_scopeId}><div data-v-e1dfe395${_scopeId}>\u968F\u673A\u751F\u6210</div></div>`);
              } else {
                return [
                  withDirectives((openBlock(), createBlock("div", {
                    class: "bottom-btn",
                    onClick: toRandom
                  }, [
                    createVNode("img", { src: _imports_5 }),
                    createVNode("div", null, "\u968F\u673A\u751F\u6210")
                  ])), [
                    [_directive_load, btnLoading.value]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="bottom-num" data-v-e1dfe395><div data-v-e1dfe395>${ssrInterpolate(commonContent.value.length)}/3000 |</div><img${ssrRenderAttr("src", _imports_5$1)} data-v-e1dfe395></div></div></div><div class="container-action" data-v-e1dfe395><div class="container-form" data-v-e1dfe395><div class="form-title" data-v-e1dfe395>\u5173\u952E\u8BCD</div><div class="form-content" data-v-e1dfe395><input${ssrRenderAttr("value", keyWord.value)} placeholder="\u5728\u5BF9\u8BDD\u6846\u8F93\u5165\u5173\u952E\u8BCD\u5FEB\u901F\u8C03\u7528\u8FD9\u4E2A\u5E38\u7528\u8BED" data-v-e1dfe395></div></div><div class="container-form" data-v-e1dfe395><div class="form-title" data-v-e1dfe395>\u5206\u7C7B</div>`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Dropdown, {
                  trigger: "click",
                  transfer: ""
                }, {
                  list: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="dropdown-content" data-v-e1dfe395${_scopeId2}><div class="content-list" data-v-e1dfe395${_scopeId2}><!--[-->`);
                      ssrRenderList(listData.value, (item, index) => {
                        _push3(`<!--[-->`);
                        if (index != 0) {
                          _push3(`<div class="list-item" data-v-e1dfe395${_scopeId2}><div data-v-e1dfe395${_scopeId2}>${ssrInterpolate(item.cateName)}</div>`);
                          _push3(ssrRenderComponent(_component_Icon, {
                            type: "md-close-circle",
                            onClick: ($event) => toDelete(item, "cate"),
                            color: "#CCCCCC",
                            size: "16",
                            class: "pointer"
                          }, null, _parent3, _scopeId2));
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      });
                      _push3(`<!--]-->`);
                      if (isAdd.value == true) {
                        _push3(`<div class="list-input" data-v-e1dfe395${_scopeId2}><input placeholder="\u65B0\u589E\u5185\u5BB9"${ssrRenderAttr("value", addContent.value)} data-v-e1dfe395${_scopeId2}>`);
                        if (addContent.value) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            type: "md-close-circle",
                            onClick: ($event) => addContent.value = "",
                            color: "#CCCCCC",
                            size: "16",
                            class: "pointer"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="content-add" data-v-e1dfe395${_scopeId2}> + \u65B0\u589E </div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "dropdown-content" }, [
                          createVNode("div", {
                            class: "content-list",
                            ref_key: "contentList",
                            ref: contentList
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(listData.value, (item, index) => {
                              return openBlock(), createBlock(Fragment, null, [
                                index != 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "list-item",
                                  onClick: ($event) => selectParams.value = item
                                }, [
                                  createVNode("div", null, toDisplayString(item.cateName), 1),
                                  createVNode(_component_Icon, {
                                    type: "md-close-circle",
                                    onClick: withModifiers(($event) => toDelete(item, "cate"), ["stop"]),
                                    color: "#CCCCCC",
                                    size: "16",
                                    class: "pointer"
                                  }, null, 8, ["onClick"])
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ], 64);
                            }), 256)),
                            isAdd.value == true ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "list-input"
                            }, [
                              withDirectives(createVNode("input", {
                                placeholder: "\u65B0\u589E\u5185\u5BB9",
                                onKeyup: withKeys(toAddContent, ["enter"]),
                                "onUpdate:modelValue": ($event) => addContent.value = $event
                              }, null, 40, ["onKeyup", "onUpdate:modelValue"]), [
                                [vModelText, addContent.value]
                              ]),
                              addContent.value ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                type: "md-close-circle",
                                onClick: ($event) => addContent.value = "",
                                color: "#CCCCCC",
                                size: "16",
                                class: "pointer"
                              }, null, 8, ["onClick"])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ], 512),
                          createVNode("div", {
                            class: "content-add",
                            onClick: toAdds
                          }, " + \u65B0\u589E ")
                        ])
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="form-content" data-v-e1dfe395${_scopeId2}><div class="content-ico" data-v-e1dfe395${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        type: "ios-arrow-down",
                        size: "20"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><input${ssrRenderAttr("value", selectParams.value.cateName)} placeholder="\u9ED8\u8BA4\u5206\u7C7B" style="${ssrRenderStyle({ "width": "calc(100% - 20px)" })}" readonly data-v-e1dfe395${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "form-content",
                          onClick: ($event) => (isAdd.value = false, addContent.value = "")
                        }, [
                          createVNode("div", { class: "content-ico" }, [
                            createVNode(_component_Icon, {
                              type: "ios-arrow-down",
                              size: "20"
                            })
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => selectParams.value.cateName = $event,
                            placeholder: "\u9ED8\u8BA4\u5206\u7C7B",
                            style: { "width": "calc(100% - 20px)" },
                            readonly: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, selectParams.value.cateName]
                          ])
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Dropdown, {
                    trigger: "click",
                    transfer: ""
                  }, {
                    list: withCtx(() => [
                      createVNode("div", { class: "dropdown-content" }, [
                        createVNode("div", {
                          class: "content-list",
                          ref_key: "contentList",
                          ref: contentList
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(listData.value, (item, index) => {
                            return openBlock(), createBlock(Fragment, null, [
                              index != 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "list-item",
                                onClick: ($event) => selectParams.value = item
                              }, [
                                createVNode("div", null, toDisplayString(item.cateName), 1),
                                createVNode(_component_Icon, {
                                  type: "md-close-circle",
                                  onClick: withModifiers(($event) => toDelete(item, "cate"), ["stop"]),
                                  color: "#CCCCCC",
                                  size: "16",
                                  class: "pointer"
                                }, null, 8, ["onClick"])
                              ], 8, ["onClick"])) : createCommentVNode("", true)
                            ], 64);
                          }), 256)),
                          isAdd.value == true ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "list-input"
                          }, [
                            withDirectives(createVNode("input", {
                              placeholder: "\u65B0\u589E\u5185\u5BB9",
                              onKeyup: withKeys(toAddContent, ["enter"]),
                              "onUpdate:modelValue": ($event) => addContent.value = $event
                            }, null, 40, ["onKeyup", "onUpdate:modelValue"]), [
                              [vModelText, addContent.value]
                            ]),
                            addContent.value ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              type: "md-close-circle",
                              onClick: ($event) => addContent.value = "",
                              color: "#CCCCCC",
                              size: "16",
                              class: "pointer"
                            }, null, 8, ["onClick"])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ], 512),
                        createVNode("div", {
                          class: "content-add",
                          onClick: toAdds
                        }, " + \u65B0\u589E ")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "form-content",
                        onClick: ($event) => (isAdd.value = false, addContent.value = "")
                      }, [
                        createVNode("div", { class: "content-ico" }, [
                          createVNode(_component_Icon, {
                            type: "ios-arrow-down",
                            size: "20"
                          })
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => selectParams.value.cateName = $event,
                          placeholder: "\u9ED8\u8BA4\u5206\u7C7B",
                          style: { "width": "calc(100% - 20px)" },
                          readonly: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, selectParams.value.cateName]
                        ])
                      ], 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="container-actions" data-v-e1dfe395>`);
          _push(ssrRenderComponent(_component_Button, {
            class: "btn",
            onClick: toCancel
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
          _push(ssrRenderComponent(_component_Button, {
            type: "primary",
            class: "btn",
            onClick: toAddCommon,
            loading: btnLoading.value
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
          _push(`</div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_sPrompt, {
        ref_key: "sPromptRef",
        ref: sPromptRef,
        icoShow: true,
        content: delMsg.value,
        onOk: ($event) => toDelete("")
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cPrompt/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const cPrompt = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1dfe395"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    state: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    },
    addMsg: {
      type: String,
      default: ""
    },
    delMsg: {
      type: String,
      default: ""
    }
  },
  emits: ["scrollBottom", "switchGroup", "update:state", "add"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useI18n();
    const { state, list, addMsg, delMsg } = toRefs(props);
    const groupIndex = ref(0);
    useRouter();
    const { proxy } = getCurrentInstance();
    getRouting();
    const onAdd = () => {
      emits("add");
    };
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        emits("scrollBottom");
      }
    }, 300);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chatGroupListCom" }, _attrs))} data-v-f1db3ce3><div class="area" data-v-f1db3ce3><h2 data-v-f1db3ce3>${ssrInterpolate(_ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"))} <img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-f1db3ce3></h2><div class="add" data-v-f1db3ce3>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "primary",
        size: "large",
        onClick: onAdd
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+ ${ssrInterpolate(unref(addMsg) || _ctx.$t("aiChat.\u521B\u5EFA\u65B0\u5BF9\u8BDD"))}`);
          } else {
            return [
              createTextVNode("+ " + toDisplayString(unref(addMsg) || _ctx.$t("aiChat.\u521B\u5EFA\u65B0\u5BF9\u8BDD")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="info-left-list" data-v-f1db3ce3><!--[-->`);
      ssrRenderList(unref(list), (item, i) => {
        _push(`<div class="${ssrRenderClass([groupIndex.value == i ? "active" : "", "list-item pointer"])}" data-v-f1db3ce3><div class="content" data-v-f1db3ce3><div class="content-title text-hide" data-v-f1db3ce3>${ssrInterpolate(item.request)}</div><div class="content-name" data-v-f1db3ce3>${ssrInterpolate(item.gmtCreate)}</div></div><img class="deleteIco"${ssrRenderAttr("src", _imports_2)} data-v-f1db3ce3></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cGroup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1db3ce3"]]);

export { __nuxt_component_1 as _, cPrompt as c };
//# sourceMappingURL=index-be66f623.mjs.map
