import { a as _export_sfc, g as getRouting, b as useCookie, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './close-e8808509.mjs';
import { _ as _imports_2 } from './electric-f4a0b755.mjs';
import lexicon from './lexicon-e66d0362.mjs';
import associate from './associate-9948283a.mjs';
import prompt from './prompt-28939876.mjs';
import { useRouter } from 'vue-router';
import { l as loadImg } from './loadImg-049a165d.mjs';
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
import './nodata-3988aadd.mjs';
import '../../paths.mjs';

const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAABCJJREFUSEu9VV9MW1UY/50+dDRpZws+3HNNdIEVk41EBaY+0IUxJRE0dC/AogbRYOiLbDz4QtjAJfNhZsynEnkYizOjPq2MYYJxbGUPKi0jGcSE0iGJ3nsJAnUldiHkHvcdaKWl/PFl5+3+Od/v/P5832F4Bos9Awz8LxDOeRsAL4BDjLE50zQ/Ngzj970Oum8QVVXPCyG6SipfhOouwPjtWaxoCSGEqDIM4+5uQPsCURTlI8bY1eqW11D9aamsJwTQ6xtGLKKvJJPJwng8Ht8JaEcQRVEqSZZNaZqKyvghX29NRp3k4zVc9AaQTKzdFEIELRZL3DTNyWwJt4GoqkqaXxVCOLNPluew4nAZR3mtGyWVLwECGOmbwEjfg4xfGWP9pml2p8AyQBRFkYYWlSmobilFURmHv3WYxJHPf0aXEb41A21mGS5ul9Ide9edBkgm1jB1b16CxvXVUU3TquhjBgjn/IqLO9o6BuvlRtrUWfUt6trfgOd0SbqYNrOE0I1phIeicKl2+Pw1yFcd6e+zYZ38Euvr66WLi4uT2Uz6D5fzJl9vrdwQi+iSCXlBrLLXsrYKv2+YUiZZUTBoLWmr+LIuIEzTPLWwsBDcxsTmsLZduPOh/Hl8KIpAdwj0bHNYc4dniy+e00dR1/4m9mJSyRgbbTh/XGo98s0ExgamJUhqkd70nmRqvvQW1OKCjQPdiiLwRQjlmx6Fh6Jzuq4XbvOEXnDOR13cXtn+3SmM3ZiSbDoGGzLk8zQeRWzCgO2gVfqRWikg2UZCNBuGcS0niKqq/Qfs1qb2616Eh2YyQMjwy+/f3JBkQqcE4ex1SvzGWtIeo+eDIJ4k1jImQc4Ip9JEsmxlQoUGukOI3I4iz5GHhs6KdL/8MfMXrn3+E2yOA7DZrRSau7qun8gV4TM2h7Un2/ivxj/JMJ3SlEfFHFY5XijKwZ6fUaAeRKv/Hdkrge4QsSmkhtxXhDuC9XBt6QOJKIB/Ek8wePlXRIajIJ/ebimVwLtG+GnH97/w8vPSD2rTVDM2nPPg2HvFG2w2i98f+A2hgSkwxlDd8io8jZvNKoDZiIZe3w9pX7KZyAhTY1U0HJH60qSl09V3evAoYmA6NI+H9+Zl8eONR1DRWII8+389FItoCFwYw4q2+kjX9aKc6VIUpYsxdo4+qsUFbFlPUFo2WDDI/ni91i2LE/jD0XkMXvlFmp1cXZN3DIA5IcTJnAMy5S4NSgDE6hUhxHMWi8XL3fmu5ksnM7x5eonhovd7OvUDIcQkY+xvGvnZl9i+Li3O+RkAPa3+GjnqiRGlirr/x76JdIpyz52sKbzTT1I6Vb0jhDhB05i782WvxCI6SXNW1/Wvd9u7LyZbZOyyWCyfbV5oJE+3pmnB3QByGr/XBvrudDqdu93p2TX+BdpoHzhZh3jSAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAZBJREFUSEvVljFIQlEUhr83JQli0Bq2RbQEReAS1WBNUQROCQVGU2XOgQ65hRZNQUNRW1HRJC1lREIQ5JK0RFKbQygUbq93RCU1H++pSZ3pDefc7/7nv/eep9CCUFrAQA+yAkwB3XVsZF+rCRbrakEChaQrIFYH5AE404PYgXdNwR4wXwegquQnJSPApaZgFHgpfJthbQGb3wv0IKJC2iWtMxMJMxBR4QOkyGxIbSlqKmm3WfjM5swuXswX06f1jM97snbkyeek3zLGQSqcRGKkXzPi6ZghSK/TYRygmaeqEHIfkIyn/gEkGU/xkc0xON5TpbJpSnzObRQFIrdLvwN5jKeI7t7lT92Mf5hKz5qiZMd/LicHq62Nzi47nqCrTE3DENn9Qt8Gi+HJ/MKnkWvWo16sNksJ1BSItKto+P3FEwOucvMbhhi5MH8OIvPkecI71DEbcOmOzkp1Kioh96GhGy+18vqGe50OxczTIu26OU4YeruKG5wDlrUx2m/Ej4ocGVyreg9kHWvql7Tkl+gLTsTJGlTZnCUAAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAActJREFUSEvllktOG0EQhv/uHjuWgWCUIB42kS1FBnaw4aFsfAVOAByBExhOkBzBnCBHcHYosAg7C4MEkRMcwiNjDIMf7SrUimbCYzwycrxI6O101ffXo6tGoMdH9Ng/AgFbhXJSKfoIYMZfiPgUuq4vzc6m7HZCAwHbxeN8SInMYDTsa39xVQcx5+bS8dUnA3b2SxlmmR+PRdEOcFat4bRaQ6slU4vTY0d+EC+CL4flpNY66V5ilu+VFDPxob62ZSJmfLu4Nt9zQtCme1Fr68gFeoDt4vdfAGJ/qej2XDo+ZHx5AFNQQCelFCuWksuJAOV+Ir6eX4GZN4k4R0rY79KJ3XsA1+jzXmk9bFnZtyMvnxRM4dgGM23MT06s3zV81EX/L4CIIeXvgJuaELLkvRR2laLqTRPlioP06CBaxCj+qCA1PIBISHmQrgC200DZdjA9HkOzRTg4ucSbV/3oe2H9IwCj2qlrb2SYlBn1bk1MGF2lqJMH8cwAllJZ05KdHvMuDn5egojXFqYSHwJHxVahlFFK5l8PRBAN/2nDIFjlpoGK0/DdC74bzcwjIWS20wgA2ES88VC97zR1nbrjuxNIpKZ32+3lnv9V3AIDEycoMzmlJAAAAABJRU5ErkJggg==";
const _imports_5 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "picEdit",
  __ssrInlineRender: true,
  emits: ["close", "saveClose"],
  setup(__props, { expose: __expose, emit: emits }) {
    const countStep = ref(0);
    const modalShow = ref(false);
    let iframeUrl = ref("");
    useRouter();
    const routing = getRouting();
    const groupId = ref("");
    const { proxy } = getCurrentInstance();
    const lexiconRef1 = ref();
    const lexiconRef2 = ref();
    ref();
    const isCreate = ref(false);
    const drawNavKey = ref("SD");
    ref();
    ref(false);
    const content = ref("");
    const typeLoading = ref(false);
    ref(false);
    const loading = ref(false);
    const time = ref(null);
    const drawContent = ref("");
    ref([]);
    ref(true);
    ref({});
    const bottomImgList = ref([]);
    ref(false);
    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const visible4 = ref(false);
    const associateRef1 = ref();
    ref();
    const promptRef = ref();
    ref([]);
    const sizeRightList = ref([]);
    ref(false);
    const defaultScale = ref("1:2");
    ref(false);
    const time2 = ref(null);
    const time3 = ref(null);
    const actionType = ref("");
    const imgDetail = ref({
      width: "",
      height: ""
    });
    ref([{
      key: "SD",
      value: "Stable Diffusion"
    }]);
    const paramsHis = ref({
      pageNo: 1,
      pageSize: 10
    });
    const titleList = ref([
      { content: "\u9009\u6A21\u677F" },
      { content: "\u5199\u63CF\u8FF0Al\u751F\u56FE" },
      { content: "\u5143\u7D20\u6DFB\u52A0\u8C03\u6574" },
      { content: "\u6DFB\u52A0\u6587\u6848" },
      { content: "\u6DFB\u52A0\u4E8C\u7EF4\u7801" },
      { content: "\u9884\u89C8\u4E0B\u8F7D" }
    ]);
    ref({
      pageNo: 1,
      pageSize: 10,
      tagCode: "",
      type: "DESIGNER_CATEGORY",
      total: 0
    });
    ref("");
    const nameContent = ref("");
    const robotDate = ref({});
    const typeList = ref([]);
    ref([]);
    const sizeList = ref([]);
    const hisList = ref([]);
    ref("");
    const layer = ref("");
    const SDParams = ref({
      content: "",
      //创意描述
      negativePrompt: "",
      //不出现内容
      sampler: "",
      //采样器
      steps: 50,
      //采样步数
      scale: 10,
      //创意相关性
      seed: -1,
      //种子
      size: "512*1024",
      num: 1
    });
    const answersEnergy = ref("");
    const outsideUrl = ref("");
    const vhtml = ref("");
    const fIframe = ref(null);
    const init = () => {
      if (drawNavKey.value == "SD") {
        let data = {
          code: "1747243596583863333"
        };
        proxy.$api.space_robotGetRobotInfo(data).then((res) => {
          robotDate.value = res.data;
          getGroupId();
        });
      }
      if (drawNavKey.value == "DALL") {
        let data = {
          type: "DRAW"
        };
        proxy.$api.space_robotGetRobotInfo(data).then((res) => {
          robotDate.value = res.data;
        });
        typeLoading.value = true;
        proxy.$api.queryTagTemplateList({
          type: "DALLE3_DRAW_CATEGORY"
        }).then((res) => {
          typeList.value = res.data;
          typeLoading.value = false;
          typeList.value.forEach((item) => {
            let str = JSON.parse(item.cateLogo);
            if (str && str.IMG_KEY) {
              item.img = str.IMG_KEY;
            }
          });
        }).catch(() => {
          typeLoading.value = false;
        });
      }
      getSizeList();
    };
    const getGroupId = () => {
      let data = {
        type: robotDate.value.type,
        robotCode: robotDate.value.code
      };
      proxy.$api.ai_bulidChatGroupId(data).then((json) => {
        groupId.value = json.data;
      });
    };
    const getSizeList = () => {
      let data = {
        type: "SCREEN_SIZE"
      };
      proxy.$api.queryTagTemplateList(data).then((res) => {
        sizeList.value = res.data;
        sizeList.value.forEach((item) => {
          if (item.cateName == defaultScale.value) {
            sizeRightList.value = item.description.split(";");
          }
        });
      });
    };
    const getTageName = (e1, e2) => {
      if (e2 == "sDcontent") {
        if (SDParams.value.content) {
          SDParams.value.content = SDParams.value.content + "," + e1;
        } else {
          SDParams.value.content = e1;
        }
      }
      if (e2 == "negativePrompt") {
        if (SDParams.value.negativePrompt) {
          SDParams.value.negativePrompt = SDParams.value.negativePrompt + "," + e1;
        } else {
          SDParams.value.negativePrompt = e1;
        }
      }
      if (e2 == "content") {
        if (content.value) {
          content.value = content.value + "," + e1;
        } else {
          content.value = e1;
        }
      }
    };
    const getSame = (e) => {
      let str = JSON.parse(e.result);
      if (drawNavKey.value == "SD") {
        SDParams.value = {
          content: str && str.content ? str.content : "",
          negativePrompt: str && str.negativePrompt ? str.negativePrompt : "",
          sampler: str && str.sampler ? str.sampler : "1747197260320448513",
          steps: str && str.steps ? str.steps : 50,
          scale: str && str.scale ? str.scale : 1,
          seed: str && str.seed ? str.seed : 10,
          //创意相关性
          size: "512*1024",
          num: 1
        };
        if (Number(SDParams.value.steps) < 10) {
          SDParams.value.steps = 10;
        }
        if (Number(SDParams.value.seed) < 0) {
          SDParams.value.seed = 10;
        }
        defaultScale.value = "4:3";
        sizeList.value.forEach((item) => {
          let description = item.description.split(";");
          description.forEach((iten) => {
            if (iten == SDParams.value.size) {
              defaultScale.value = item.cateName;
            }
          });
        });
      }
      if (drawNavKey.value == "DALL") {
        content.value = str && str.content ? str.content : "";
      }
    };
    const onChatId = proxy.$debounce(() => {
      if (loading.value) {
        return;
      }
      if (drawNavKey.value == "DALL") {
        toCreateDE3();
      }
      if (drawNavKey.value == "SD") {
        toCreateSD();
      }
    }, 300);
    const toCreateSD = () => {
      if (proxy.$isEmpty(SDParams.value.content)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u521B\u610F\u63CF\u8FF0");
        return;
      }
      if (proxy.$isEmpty(SDParams.value.size)) {
        proxy.$Message.error("\u8BF7\u9009\u62E9\u753B\u9762\u5C3A\u5BF8");
        return;
      }
      if (proxy.$isEmpty(SDParams.value.sampler)) {
        proxy.$Message.error("\u8BF7\u9009\u62E9\u91C7\u6837\u5668");
        return;
      }
      let data = {
        content: JSON.stringify(SDParams.value),
        groupId: groupId.value,
        robotCode: robotDate.value.code,
        chatType: "DRAW"
      };
      bottomImgList.value = [];
      for (var i = 0; i < SDParams.value.num; i++) {
        bottomImgList.value.push({
          content: ""
        });
      }
      isCreate.value = true;
      loading.value = true;
      drawContent.value = "";
      paramsHis.value.pageNo = 1;
      routing.setAiChat(proxy, data, "DrawBatch");
    };
    const toCreateDE3 = () => {
      if (proxy.$isEmpty(content.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u751F\u6210\u5185\u5BB9");
        return;
      }
      clearInterval(time.value);
      proxy.$api.ai_bulidChatGroupId({
        type: robotDate.value.type,
        robotCode: robotDate.value.code
      }).then((json) => {
        let data = {
          content: nameContent.value + content.value,
          groupId: json.data,
          robotCode: robotDate.value.code
        };
        isCreate.value = true;
        loading.value = true;
        drawContent.value = "";
        bottomImgList.value = [];
        paramsHis.value.pageNo = 1;
        routing.setAiChat(proxy, data);
      });
    };
    const getLink = (e, type) => {
      if (type == "sDcontent") {
        SDParams.value.content = e;
        visible1.value = false;
      }
      if (type == "dallContent") {
        content.value = e;
        visible4.value = false;
      }
    };
    const showFn = (record, data, e) => {
      countStep.value = 0;
      actionType.value = data.actionType;
      imgDetail.value.width = data.width;
      imgDetail.value.height = data.height;
      layer.value = "";
      if (e) {
        layer.value = e;
      }
      modalShow.value = true;
      loading.value = false;
      SDParams.value = {
        content: data.prompt ? data.prompt : "\u4E00\u4E2A\u73B0\u4EE3\u3001\u6781\u7B80\u7684\u8BBE\u8BA1\uFF0C\u80CC\u666F\u4E3A\u6DE1\u84DD\u8272\u3002\u8BBE\u8BA1\u7B80\u6D01\u800C\u4F18\u96C5\uFF0C\u5305\u542B\u4E86\u6D45\u7C89\u8272\u548C\u7D2B\u8272\u7684\u67D4\u548C\u6E10\u53D8\uFF0C\u642D\u914D\u6D45\u6E10\u53D8\u7684\u5929\u84DD\u8272\u3002\u8BBE\u8BA1\u4E2D\u6709\u4E00\u4E2A\u5149\u6ED1\u7684\u5F27\u5F62\uFF0C\u7C7B\u4F3C\u4E8E\u62BD\u8C61\u7684\u6CE2\u6D6A\u6216\u5C71\u8109\uFF0C\u8D4B\u4E88\u5176\u6DF1\u5EA6\u4F46\u4E0D\u8FC7\u4E8E\u590D\u6742\u3002\u9002\u7528\u4E8E\u6570\u5B57\u5A92\u4F53\uFF0C\u8425\u9020\u51FA\u5B81\u9759\u548C\u7B80\u7EA6\u7684\u611F\u89C9\u3002\u8BBE\u8BA1\u98CE\u683C\u7B26\u5408\u6781\u7B80\u4E3B\u4E49\u827A\u672F\u5BB6\u7684\u98CE\u683C\u3002",
        negativePrompt: data.prompt ? "" : "\u6B63\u5E38\u8D28\u91CF,\u7070\u5EA6,\u6700\u5DEE\u8D28\u91CF,\u4F4E\u8D28\u91CF,\u6B8B\u7F3A,\u88C1\u526A,\u7CDF\u7CD5\u7684\u6BD4\u4F8B,",
        sampler: "1747197260320448513",
        steps: 50,
        scale: 10,
        seed: -1,
        size: "512*1024",
        num: 1
      };
      init();
      time3.value = setInterval(() => {
        if (fIframe.value && fIframe.value.contentWindow) {
          if (layer.value) {
            let data2 = {
              from: "parent page",
              code: 105,
              name: "\u56FE\u5C42\u4F20\u53C2",
              data: {
                content: layer.value
              }
            };
            setTimeout(() => {
              fIframe.value.contentWindow.postMessage(data2, "*");
            }, 1e3);
          }
          clearInterval(time3.value);
        }
      }, 100);
      window.addEventListener("message", function(event) {
        var _a;
        console.log(event);
        if (event && event.data && JSON.parse(event.data).code == 402) {
          let authtoken = (_a = useCookie("authtoken")) == null ? void 0 : _a.value;
          let data2 = {
            from: "parent page",
            code: 103,
            name: "\u5F00\u59CB\u52A0\u8F7D",
            data: {
              content: JSON.stringify(authtoken)
            }
          };
          fIframe.value.contentWindow.postMessage(data2, "*");
          console.log(fIframe.value.contentWindow);
          setTimeout(() => {
            toSend(record);
          }, 1e3);
        }
        if (event && event.data && JSON.parse(event.data).code == 104) {
          if (actionType.value != "try") {
            let extent = JSON.parse(data.extent);
            data.height = JSON.parse(JSON.parse(event.data).content).page.height;
            data.width = JSON.parse(JSON.parse(event.data).content).page.width;
            extent.size = data.width + "*" + data.height;
            extent.layer = JSON.parse(event.data).content;
            let dataParams = {
              groupId: data.groupId,
              content: JSON.parse(event.data).cover,
              extent: JSON.stringify(extent),
              partyRelationshipId: data.partyRelationshipId,
              partyRelationshipType: data.partyRelationshipType
            };
            saveImg(dataParams);
          }
        }
        if (event && event.data && JSON.parse(event.data).code == 106) {
          loading.value = false;
          modalShow.value = false;
        }
      });
    };
    const saveImg = proxy.$debounce((data) => {
      if (countStep.value > 0) {
        return;
      }
      loading.value = true;
      proxy.$api.editAiRecordGroup(data).then(() => {
        proxy.$Message.success("\u5DF2\u4FDD\u5B58");
        loading.value = false;
        modalShow.value = false;
        countStep.value = countStep.value + 1;
        emits("saveClose");
      }).catch(() => {
        loading.value = false;
      });
    }, 300);
    const toSend = (record) => {
      clearInterval(time2.value);
      if (imgDetail.value.width) {
        let data = {
          from: "parent page",
          code: 100,
          name: "AI\u751F\u6210\u5B8C\u6210\u80CC\u666F\u56FE\u7247",
          data: {
            content: record,
            width: imgDetail.value.width,
            height: imgDetail.value.height
          }
        };
        time2.value = setInterval(() => {
          if (fIframe.value) {
            fIframe.value.contentWindow.postMessage(data, "*");
            clearInterval(time2.value);
          }
        }, 100);
        setTimeout(() => {
          outsideUrl.value = "";
        }, 500);
      } else {
        let data = {
          from: "parent page",
          code: 100,
          name: "AI\u751F\u6210\u5B8C\u6210\u80CC\u666F\u56FE\u7247",
          data: {
            content: record
          }
        };
        time2.value = setInterval(() => {
          console.log(fIframe.value);
          if (fIframe.value) {
            fIframe.value.contentWindow.postMessage(data, "*");
            clearInterval(time2.value);
          }
        }, 100);
        setTimeout(() => {
          outsideUrl.value = "";
        }, 500);
      }
    };
    __expose({
      showFn
    });
    watch(() => routing.getChatMsg, (item) => {
      if (item.type == "ERROR") {
        loading.value = false;
        isCreate.value = false;
        clearInterval(time.value);
      }
      if (modalShow.value && item.type == "DRAW") {
        if (visible1.value) {
          return;
        }
        if (visible4.value) {
          return;
        }
        if (item.type == "ERROR") {
          loading.value = false;
          isCreate.value = false;
          clearInterval(time.value);
        }
        if (item && item.content) {
          proxy.$Message.success("\u5DF2\u751F\u6210");
          if (drawNavKey.value == "SD") {
            bottomImgList.value.push({
              content: item.content
            });
            imgDetail.value.width = "";
            imgDetail.value.height = "";
            loading.value = false;
            toSend(item.content);
          } else {
            drawContent.value = item.content;
            bottomImgList.value = [
              { content: item.content }
            ];
          }
        }
      }
    }, { deep: true });
    watch(() => routing.electric, () => {
      if (visible1.value) {
        return;
      }
      if (visible4.value) {
        return;
      }
      loading.value = false;
      hisList.value = [];
      paramsHis.value.pageNo = 1;
      getGroupId();
    }, { deep: true });
    watch(() => routing.isAccident, () => {
      if (routing.isAccident) {
        loading.value = false;
      }
    }, { deep: true });
    watch(() => modalShow.value, () => {
      if (!modalShow.value) {
        emits("close");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Modal = resolveComponent("Modal");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Spin = resolveComponent("Spin");
      const _component_svga = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              modelValue: modalShow.value,
              "onUpdate:modelValue": ($event) => modalShow.value = $event,
              "class-name": "picEdit",
              "mask-closable": false,
              closable: false,
              width: "100%",
              "footer-hide": true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}" data-v-dc5d655a${_scopeId2}><div class="modal-title" id="picEdit-title" data-v-dc5d655a${_scopeId2}><div class="modal-title-close" data-v-dc5d655a${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} data-v-dc5d655a${_scopeId2}></div><div class="title-list" data-v-dc5d655a${_scopeId2}><!--[-->`);
                  ssrRenderList(titleList.value, (item, i) => {
                    _push3(`<div class="list-item" data-v-dc5d655a${_scopeId2}><div class="tag" data-v-dc5d655a${_scopeId2}>${ssrInterpolate(i + 1)}</div><div class="content" data-v-dc5d655a${_scopeId2}>${ssrInterpolate(item.content)}</div></div>`);
                  });
                  _push3(`<!--]--></div></div><div class="drawPages" data-v-dc5d655a${_scopeId2}><div class="operate" data-v-dc5d655a${_scopeId2}><div class="content" data-v-dc5d655a${_scopeId2}>`);
                  if (drawNavKey.value == "SD") {
                    _push3(`<!--[--><div class="name clearfix" data-v-dc5d655a${_scopeId2}><div class="fl" data-v-dc5d655a${_scopeId2}><span class="red" data-v-dc5d655a${_scopeId2}>*</span><span data-v-dc5d655a${_scopeId2}>\u521B\u610F\u63CF\u8FF0</span></div><div class="fr pointer green" data-v-dc5d655a${_scopeId2}>Prompt\u6A21\u7248</div></div><div class="area mb-20" data-v-dc5d655a${_scopeId2}><div class="textarea" data-v-dc5d655a${_scopeId2}><textarea${ssrRenderAttr("maxLength", 800)} placeholder="\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5C3D\u53EF\u80FD\u7528\u591A\u4E2A\u63D0\u793A\u8BCD\u63CF\u8FF0\u3002\u5982\uFF1A\u7537\u5B69\uFF0C\u91D1\u53D1\uFF08\u6CE8\uFF1A\u9700\u8981\u7528\u9017\u53F7\u9694\u5F00\uFF09" data-v-dc5d655a${_scopeId2}>${ssrInterpolate(SDParams.value.content)}</textarea><div class="textarea-bottom" data-v-dc5d655a${_scopeId2}><div class="textarea-bottom-left" data-v-dc5d655a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Poptip, {
                            placement: "right-start",
                            trigger: "click",
                            transfer: true,
                            modelValue: visible1.value,
                            "onUpdate:modelValue": ($event) => visible1.value = $event,
                            onOnPopperHide: ($event) => associateRef1.value.toBreak()
                          }, {
                            content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(associate, {
                                  ref_key: "associateRef1",
                                  ref: associateRef1,
                                  onClose: ($event) => visible1.value = false,
                                  onGetLink: ($event) => getLink($event, "sDcontent")
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(associate, {
                                    ref_key: "associateRef1",
                                    ref: associateRef1,
                                    onClose: ($event) => visible1.value = false,
                                    onGetLink: ($event) => getLink($event, "sDcontent")
                                  }, null, 8, ["onClose", "onGetLink"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="left-item" data-v-dc5d655a${_scopeId4}><img${ssrRenderAttr("src", _imports_1)} data-v-dc5d655a${_scopeId4}><div data-v-dc5d655a${_scopeId4}>\u667A\u80FD\u8054\u60F3</div><div class="tag" data-v-dc5d655a${_scopeId4}><img${ssrRenderAttr("src", _imports_2)} data-v-dc5d655a${_scopeId4}><div data-v-dc5d655a${_scopeId4}>${ssrInterpolate(answersEnergy.value)}\u7535\u91CF</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "left-item",
                                    onClick: ($event) => associateRef1.value.showFn(SDParams.value.content, visible1.value)
                                  }, [
                                    createVNode("img", { src: _imports_1 }),
                                    createVNode("div", null, "\u667A\u80FD\u8054\u60F3"),
                                    createVNode("div", { class: "tag" }, [
                                      createVNode("img", { src: _imports_2 }),
                                      createVNode("div", null, toDisplayString(answersEnergy.value) + "\u7535\u91CF", 1)
                                    ])
                                  ], 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Poptip, {
                              placement: "right-start",
                              trigger: "click",
                              transfer: true,
                              modelValue: visible1.value,
                              "onUpdate:modelValue": ($event) => visible1.value = $event,
                              onOnPopperHide: ($event) => associateRef1.value.toBreak()
                            }, {
                              content: withCtx(() => [
                                createVNode(associate, {
                                  ref_key: "associateRef1",
                                  ref: associateRef1,
                                  onClose: ($event) => visible1.value = false,
                                  onGetLink: ($event) => getLink($event, "sDcontent")
                                }, null, 8, ["onClose", "onGetLink"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "left-item",
                                  onClick: ($event) => associateRef1.value.showFn(SDParams.value.content, visible1.value)
                                }, [
                                  createVNode("img", { src: _imports_1 }),
                                  createVNode("div", null, "\u667A\u80FD\u8054\u60F3"),
                                  createVNode("div", { class: "tag" }, [
                                    createVNode("img", { src: _imports_2 }),
                                    createVNode("div", null, toDisplayString(answersEnergy.value) + "\u7535\u91CF", 1)
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onOnPopperHide"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Poptip, {
                            placement: "right-start",
                            transfer: true,
                            trigger: "click",
                            modelValue: visible2.value,
                            "onUpdate:modelValue": ($event) => visible2.value = $event
                          }, {
                            content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(lexicon, {
                                  ref_key: "lexiconRef1",
                                  ref: lexiconRef1,
                                  onClose: ($event) => visible2.value = false,
                                  onGetTageName: getTageName
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(lexicon, {
                                    ref_key: "lexiconRef1",
                                    ref: lexiconRef1,
                                    onClose: ($event) => visible2.value = false,
                                    onGetTageName: getTageName
                                  }, null, 8, ["onClose"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="left-item" data-v-dc5d655a${_scopeId4}><img${ssrRenderAttr("src", _imports_3)} data-v-dc5d655a${_scopeId4}><div data-v-dc5d655a${_scopeId4}>\u8BCD\u5E93</div></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "left-item",
                                    onClick: ($event) => lexiconRef1.value.showFn("NEW_WORD_CATEGORY", "sDcontent")
                                  }, [
                                    createVNode("img", { src: _imports_3 }),
                                    createVNode("div", null, "\u8BCD\u5E93")
                                  ], 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Poptip, {
                              placement: "right-start",
                              transfer: true,
                              trigger: "click",
                              modelValue: visible2.value,
                              "onUpdate:modelValue": ($event) => visible2.value = $event
                            }, {
                              content: withCtx(() => [
                                createVNode(lexicon, {
                                  ref_key: "lexiconRef1",
                                  ref: lexiconRef1,
                                  onClose: ($event) => visible2.value = false,
                                  onGetTageName: getTageName
                                }, null, 8, ["onClose"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "left-item",
                                  onClick: ($event) => lexiconRef1.value.showFn("NEW_WORD_CATEGORY", "sDcontent")
                                }, [
                                  createVNode("img", { src: _imports_3 }),
                                  createVNode("div", null, "\u8BCD\u5E93")
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="textarea-bottom-right" data-v-dc5d655a${_scopeId2}><div data-v-dc5d655a${_scopeId2}>${ssrInterpolate(SDParams.value.content.length)}/800</div><div class="division" data-v-dc5d655a${_scopeId2}></div><img${ssrRenderAttr("src", _imports_4)} data-v-dc5d655a${_scopeId2}></div></div></div></div><div class="name clearfix" data-v-dc5d655a${_scopeId2}><div class="fl" data-v-dc5d655a${_scopeId2}><span data-v-dc5d655a${_scopeId2}>\u4E0D\u51FA\u73B0\u5185\u5BB9</span></div></div><div class="area mb-20" data-v-dc5d655a${_scopeId2}><div class="textarea" data-v-dc5d655a${_scopeId2}><textarea${ssrRenderAttr("maxLength", 800)} placeholder="\u8BF7\u8F93\u5165\u4E0D\u5E0C\u671B\u5448\u73B0\u7684\u5185\u5BB9\u63CF\u8FF0" data-v-dc5d655a${_scopeId2}>${ssrInterpolate(SDParams.value.negativePrompt)}</textarea><div class="textarea-bottom" data-v-dc5d655a${_scopeId2}><div class="textarea-bottom-left" data-v-dc5d655a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Poptip, {
                            trigger: "click",
                            transfer: true,
                            modelValue: visible3.value,
                            "onUpdate:modelValue": ($event) => visible3.value = $event
                          }, {
                            content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(lexicon, {
                                  ref_key: "lexiconRef2",
                                  ref: lexiconRef2,
                                  onClose: ($event) => visible3.value = false,
                                  onGetTageName: getTageName
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(lexicon, {
                                    ref_key: "lexiconRef2",
                                    ref: lexiconRef2,
                                    onClose: ($event) => visible3.value = false,
                                    onGetTageName: getTageName
                                  }, null, 8, ["onClose"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="left-item" data-v-dc5d655a${_scopeId4}><img${ssrRenderAttr("src", _imports_3)} data-v-dc5d655a${_scopeId4}><div data-v-dc5d655a${_scopeId4}>\u8BCD\u5E93</div></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "left-item",
                                    onClick: ($event) => lexiconRef2.value.showFn("PASSIVE_WORD_CATEGORY", "negativePrompt")
                                  }, [
                                    createVNode("img", { src: _imports_3 }),
                                    createVNode("div", null, "\u8BCD\u5E93")
                                  ], 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Poptip, {
                              trigger: "click",
                              transfer: true,
                              modelValue: visible3.value,
                              "onUpdate:modelValue": ($event) => visible3.value = $event
                            }, {
                              content: withCtx(() => [
                                createVNode(lexicon, {
                                  ref_key: "lexiconRef2",
                                  ref: lexiconRef2,
                                  onClose: ($event) => visible3.value = false,
                                  onGetTageName: getTageName
                                }, null, 8, ["onClose"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "left-item",
                                  onClick: ($event) => lexiconRef2.value.showFn("PASSIVE_WORD_CATEGORY", "negativePrompt")
                                }, [
                                  createVNode("img", { src: _imports_3 }),
                                  createVNode("div", null, "\u8BCD\u5E93")
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="textarea-bottom-right" data-v-dc5d655a${_scopeId2}><div data-v-dc5d655a${_scopeId2}>${ssrInterpolate(SDParams.value.negativePrompt.length)}/800</div><div class="division" data-v-dc5d655a${_scopeId2}></div><img${ssrRenderAttr("src", _imports_4)} data-v-dc5d655a${_scopeId2}></div></div></div></div><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="submit" data-v-dc5d655a${_scopeId2}><div class="consume" data-v-dc5d655a${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} data-v-dc5d655a${_scopeId2}> \u6D88\u8017 `);
                  if (drawNavKey.value == "SD") {
                    _push3(`<!--[-->${ssrInterpolate(SDParams.value.num * robotDate.value.consumeEnergy)}<!--]-->`);
                  } else {
                    _push3(`<!--[-->${ssrInterpolate(robotDate.value.consumeEnergy)}<!--]-->`);
                  }
                  _push3(` \u7535\u91CF </div><span class="but" data-v-dc5d655a${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Spin, {
                    fix: "",
                    show: loading.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u751F\u6210\u4E2D...`);
                      } else {
                        return [
                          createTextVNode("\u751F\u6210\u4E2D...")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (!loading.value) {
                    _push3(`<div data-v-dc5d655a${_scopeId2}>AI\u751F\u6210\u80CC\u666F\u56FE</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</span><p data-v-dc5d655a${_scopeId2}>\u8BF7\u9075\u5B88<a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} data-v-dc5d655a${_scopeId2}>\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B</a>\uFF0CAI\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA\uFF0C\u5176\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u7684\u89C2\u70B9\u548C\u6001\u5EA6</p></div><div id="vhtml" class="vhtml" data-v-dc5d655a${_scopeId2}>${vhtml.value}</div><div class="drawPages-action" data-v-dc5d655a${_scopeId2}>`);
                  if (loading.value) {
                    _push3(`<div class="loading" data-v-dc5d655a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_svga, {
                      svgaImg: unref(loadImg),
                      ref: "svga",
                      width: 200,
                      height: 284
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(iframeUrl) && modalShow.value) {
                    _push3(`<iframe class="iframeClass" frameborder="no" scrolling="no"${ssrRenderAttr("src", unref(iframeUrl))} data-v-dc5d655a${_scopeId2}></iframe>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(prompt, {
                    ref_key: "promptRef",
                    ref: promptRef,
                    onClose: getSame
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "width": "100%", "height": "100%" } }, [
                      createVNode("div", {
                        class: "modal-title",
                        id: "picEdit-title"
                      }, [
                        createVNode("div", { class: "modal-title-close" }, [
                          createVNode("img", {
                            onClick: ($event) => modalShow.value = false,
                            src: _imports_0
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "title-list" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(titleList.value, (item, i) => {
                            return openBlock(), createBlock("div", {
                              class: "list-item",
                              key: i
                            }, [
                              createVNode("div", { class: "tag" }, toDisplayString(i + 1), 1),
                              createVNode("div", { class: "content" }, toDisplayString(item.content), 1)
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "drawPages" }, [
                        createVNode("div", { class: "operate" }, [
                          createVNode("div", { class: "content" }, [
                            drawNavKey.value == "SD" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode("div", { class: "name clearfix" }, [
                                createVNode("div", { class: "fl" }, [
                                  createVNode("span", { class: "red" }, "*"),
                                  createVNode("span", null, "\u521B\u610F\u63CF\u8FF0")
                                ]),
                                createVNode("div", {
                                  class: "fr pointer green",
                                  onClick: ($event) => promptRef.value.showFn()
                                }, "Prompt\u6A21\u7248", 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "area mb-20" }, [
                                createVNode("div", { class: "textarea" }, [
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => SDParams.value.content = $event,
                                    maxLength: 800,
                                    placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5C3D\u53EF\u80FD\u7528\u591A\u4E2A\u63D0\u793A\u8BCD\u63CF\u8FF0\u3002\u5982\uFF1A\u7537\u5B69\uFF0C\u91D1\u53D1\uFF08\u6CE8\uFF1A\u9700\u8981\u7528\u9017\u53F7\u9694\u5F00\uFF09"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, SDParams.value.content]
                                  ]),
                                  createVNode("div", { class: "textarea-bottom" }, [
                                    createVNode("div", { class: "textarea-bottom-left" }, [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Poptip, {
                                            placement: "right-start",
                                            trigger: "click",
                                            transfer: true,
                                            modelValue: visible1.value,
                                            "onUpdate:modelValue": ($event) => visible1.value = $event,
                                            onOnPopperHide: ($event) => associateRef1.value.toBreak()
                                          }, {
                                            content: withCtx(() => [
                                              createVNode(associate, {
                                                ref_key: "associateRef1",
                                                ref: associateRef1,
                                                onClose: ($event) => visible1.value = false,
                                                onGetLink: ($event) => getLink($event, "sDcontent")
                                              }, null, 8, ["onClose", "onGetLink"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: "left-item",
                                                onClick: ($event) => associateRef1.value.showFn(SDParams.value.content, visible1.value)
                                              }, [
                                                createVNode("img", { src: _imports_1 }),
                                                createVNode("div", null, "\u667A\u80FD\u8054\u60F3"),
                                                createVNode("div", { class: "tag" }, [
                                                  createVNode("img", { src: _imports_2 }),
                                                  createVNode("div", null, toDisplayString(answersEnergy.value) + "\u7535\u91CF", 1)
                                                ])
                                              ], 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "onOnPopperHide"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Poptip, {
                                            placement: "right-start",
                                            transfer: true,
                                            trigger: "click",
                                            modelValue: visible2.value,
                                            "onUpdate:modelValue": ($event) => visible2.value = $event
                                          }, {
                                            content: withCtx(() => [
                                              createVNode(lexicon, {
                                                ref_key: "lexiconRef1",
                                                ref: lexiconRef1,
                                                onClose: ($event) => visible2.value = false,
                                                onGetTageName: getTageName
                                              }, null, 8, ["onClose"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: "left-item",
                                                onClick: ($event) => lexiconRef1.value.showFn("NEW_WORD_CATEGORY", "sDcontent")
                                              }, [
                                                createVNode("img", { src: _imports_3 }),
                                                createVNode("div", null, "\u8BCD\u5E93")
                                              ], 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "textarea-bottom-right" }, [
                                      createVNode("div", null, toDisplayString(SDParams.value.content.length) + "/800", 1),
                                      createVNode("div", { class: "division" }),
                                      createVNode("img", {
                                        onClick: ($event) => SDParams.value.content = "",
                                        src: _imports_4
                                      }, null, 8, ["onClick"])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "name clearfix" }, [
                                createVNode("div", { class: "fl" }, [
                                  createVNode("span", null, "\u4E0D\u51FA\u73B0\u5185\u5BB9")
                                ])
                              ]),
                              createVNode("div", { class: "area mb-20" }, [
                                createVNode("div", { class: "textarea" }, [
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => SDParams.value.negativePrompt = $event,
                                    maxLength: 800,
                                    placeholder: "\u8BF7\u8F93\u5165\u4E0D\u5E0C\u671B\u5448\u73B0\u7684\u5185\u5BB9\u63CF\u8FF0"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, SDParams.value.negativePrompt]
                                  ]),
                                  createVNode("div", { class: "textarea-bottom" }, [
                                    createVNode("div", { class: "textarea-bottom-left" }, [
                                      createVNode(_component_ClientOnly, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Poptip, {
                                            trigger: "click",
                                            transfer: true,
                                            modelValue: visible3.value,
                                            "onUpdate:modelValue": ($event) => visible3.value = $event
                                          }, {
                                            content: withCtx(() => [
                                              createVNode(lexicon, {
                                                ref_key: "lexiconRef2",
                                                ref: lexiconRef2,
                                                onClose: ($event) => visible3.value = false,
                                                onGetTageName: getTageName
                                              }, null, 8, ["onClose"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: "left-item",
                                                onClick: ($event) => lexiconRef2.value.showFn("PASSIVE_WORD_CATEGORY", "negativePrompt")
                                              }, [
                                                createVNode("img", { src: _imports_3 }),
                                                createVNode("div", null, "\u8BCD\u5E93")
                                              ], 8, ["onClick"])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "textarea-bottom-right" }, [
                                      createVNode("div", null, toDisplayString(SDParams.value.negativePrompt.length) + "/800", 1),
                                      createVNode("div", { class: "division" }),
                                      createVNode("img", {
                                        onClick: ($event) => SDParams.value.negativePrompt = "",
                                        src: _imports_4
                                      }, null, 8, ["onClick"])
                                    ])
                                  ])
                                ])
                              ])
                            ], 64)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "submit" }, [
                          createVNode("div", { class: "consume" }, [
                            createVNode("img", { src: _imports_5 }),
                            createTextVNode(" \u6D88\u8017 "),
                            drawNavKey.value == "SD" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(SDParams.value.num * robotDate.value.consumeEnergy), 1)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(robotDate.value.consumeEnergy), 1)
                            ], 64)),
                            createTextVNode(" \u7535\u91CF ")
                          ]),
                          createVNode("span", {
                            class: "but",
                            onClick: unref(onChatId)
                          }, [
                            createVNode(_component_Spin, {
                              fix: "",
                              show: loading.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u751F\u6210\u4E2D...")
                              ]),
                              _: 1
                            }, 8, ["show"]),
                            !loading.value ? (openBlock(), createBlock("div", { key: 0 }, "AI\u751F\u6210\u80CC\u666F\u56FE")) : createCommentVNode("", true)
                          ], 8, ["onClick"]),
                          createVNode("p", null, [
                            createTextVNode("\u8BF7\u9075\u5B88"),
                            createVNode("a", {
                              href: unref(routing).configuration.userServiceLink
                            }, "\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B", 8, ["href"]),
                            createTextVNode("\uFF0CAI\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA\uFF0C\u5176\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u7684\u89C2\u70B9\u548C\u6001\u5EA6")
                          ])
                        ]),
                        createVNode("div", {
                          innerHTML: vhtml.value,
                          id: "vhtml",
                          class: "vhtml"
                        }, null, 8, ["innerHTML"]),
                        createVNode("div", { class: "drawPages-action" }, [
                          loading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "loading"
                          }, [
                            createVNode(_component_svga, {
                              svgaImg: unref(loadImg),
                              ref: "svga",
                              width: 200,
                              height: 284
                            }, null, 8, ["svgaImg"])
                          ])) : createCommentVNode("", true),
                          unref(iframeUrl) && modalShow.value ? (openBlock(), createBlock("iframe", {
                            key: 1,
                            ref_key: "fIframe",
                            ref: fIframe,
                            class: "iframeClass",
                            frameborder: "no",
                            scrolling: "no",
                            src: unref(iframeUrl)
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        createVNode(prompt, {
                          ref_key: "promptRef",
                          ref: promptRef,
                          onClose: getSame
                        }, null, 512)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                modelValue: modalShow.value,
                "onUpdate:modelValue": ($event) => modalShow.value = $event,
                "class-name": "picEdit",
                "mask-closable": false,
                closable: false,
                width: "100%",
                "footer-hide": true
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "width": "100%", "height": "100%" } }, [
                    createVNode("div", {
                      class: "modal-title",
                      id: "picEdit-title"
                    }, [
                      createVNode("div", { class: "modal-title-close" }, [
                        createVNode("img", {
                          onClick: ($event) => modalShow.value = false,
                          src: _imports_0
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "title-list" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(titleList.value, (item, i) => {
                          return openBlock(), createBlock("div", {
                            class: "list-item",
                            key: i
                          }, [
                            createVNode("div", { class: "tag" }, toDisplayString(i + 1), 1),
                            createVNode("div", { class: "content" }, toDisplayString(item.content), 1)
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "drawPages" }, [
                      createVNode("div", { class: "operate" }, [
                        createVNode("div", { class: "content" }, [
                          drawNavKey.value == "SD" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", { class: "name clearfix" }, [
                              createVNode("div", { class: "fl" }, [
                                createVNode("span", { class: "red" }, "*"),
                                createVNode("span", null, "\u521B\u610F\u63CF\u8FF0")
                              ]),
                              createVNode("div", {
                                class: "fr pointer green",
                                onClick: ($event) => promptRef.value.showFn()
                              }, "Prompt\u6A21\u7248", 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "area mb-20" }, [
                              createVNode("div", { class: "textarea" }, [
                                withDirectives(createVNode("textarea", {
                                  "onUpdate:modelValue": ($event) => SDParams.value.content = $event,
                                  maxLength: 800,
                                  placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5C3D\u53EF\u80FD\u7528\u591A\u4E2A\u63D0\u793A\u8BCD\u63CF\u8FF0\u3002\u5982\uFF1A\u7537\u5B69\uFF0C\u91D1\u53D1\uFF08\u6CE8\uFF1A\u9700\u8981\u7528\u9017\u53F7\u9694\u5F00\uFF09"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, SDParams.value.content]
                                ]),
                                createVNode("div", { class: "textarea-bottom" }, [
                                  createVNode("div", { class: "textarea-bottom-left" }, [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Poptip, {
                                          placement: "right-start",
                                          trigger: "click",
                                          transfer: true,
                                          modelValue: visible1.value,
                                          "onUpdate:modelValue": ($event) => visible1.value = $event,
                                          onOnPopperHide: ($event) => associateRef1.value.toBreak()
                                        }, {
                                          content: withCtx(() => [
                                            createVNode(associate, {
                                              ref_key: "associateRef1",
                                              ref: associateRef1,
                                              onClose: ($event) => visible1.value = false,
                                              onGetLink: ($event) => getLink($event, "sDcontent")
                                            }, null, 8, ["onClose", "onGetLink"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: "left-item",
                                              onClick: ($event) => associateRef1.value.showFn(SDParams.value.content, visible1.value)
                                            }, [
                                              createVNode("img", { src: _imports_1 }),
                                              createVNode("div", null, "\u667A\u80FD\u8054\u60F3"),
                                              createVNode("div", { class: "tag" }, [
                                                createVNode("img", { src: _imports_2 }),
                                                createVNode("div", null, toDisplayString(answersEnergy.value) + "\u7535\u91CF", 1)
                                              ])
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "onOnPopperHide"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Poptip, {
                                          placement: "right-start",
                                          transfer: true,
                                          trigger: "click",
                                          modelValue: visible2.value,
                                          "onUpdate:modelValue": ($event) => visible2.value = $event
                                        }, {
                                          content: withCtx(() => [
                                            createVNode(lexicon, {
                                              ref_key: "lexiconRef1",
                                              ref: lexiconRef1,
                                              onClose: ($event) => visible2.value = false,
                                              onGetTageName: getTageName
                                            }, null, 8, ["onClose"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: "left-item",
                                              onClick: ($event) => lexiconRef1.value.showFn("NEW_WORD_CATEGORY", "sDcontent")
                                            }, [
                                              createVNode("img", { src: _imports_3 }),
                                              createVNode("div", null, "\u8BCD\u5E93")
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "textarea-bottom-right" }, [
                                    createVNode("div", null, toDisplayString(SDParams.value.content.length) + "/800", 1),
                                    createVNode("div", { class: "division" }),
                                    createVNode("img", {
                                      onClick: ($event) => SDParams.value.content = "",
                                      src: _imports_4
                                    }, null, 8, ["onClick"])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "name clearfix" }, [
                              createVNode("div", { class: "fl" }, [
                                createVNode("span", null, "\u4E0D\u51FA\u73B0\u5185\u5BB9")
                              ])
                            ]),
                            createVNode("div", { class: "area mb-20" }, [
                              createVNode("div", { class: "textarea" }, [
                                withDirectives(createVNode("textarea", {
                                  "onUpdate:modelValue": ($event) => SDParams.value.negativePrompt = $event,
                                  maxLength: 800,
                                  placeholder: "\u8BF7\u8F93\u5165\u4E0D\u5E0C\u671B\u5448\u73B0\u7684\u5185\u5BB9\u63CF\u8FF0"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, SDParams.value.negativePrompt]
                                ]),
                                createVNode("div", { class: "textarea-bottom" }, [
                                  createVNode("div", { class: "textarea-bottom-left" }, [
                                    createVNode(_component_ClientOnly, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Poptip, {
                                          trigger: "click",
                                          transfer: true,
                                          modelValue: visible3.value,
                                          "onUpdate:modelValue": ($event) => visible3.value = $event
                                        }, {
                                          content: withCtx(() => [
                                            createVNode(lexicon, {
                                              ref_key: "lexiconRef2",
                                              ref: lexiconRef2,
                                              onClose: ($event) => visible3.value = false,
                                              onGetTageName: getTageName
                                            }, null, 8, ["onClose"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: "left-item",
                                              onClick: ($event) => lexiconRef2.value.showFn("PASSIVE_WORD_CATEGORY", "negativePrompt")
                                            }, [
                                              createVNode("img", { src: _imports_3 }),
                                              createVNode("div", null, "\u8BCD\u5E93")
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "textarea-bottom-right" }, [
                                    createVNode("div", null, toDisplayString(SDParams.value.negativePrompt.length) + "/800", 1),
                                    createVNode("div", { class: "division" }),
                                    createVNode("img", {
                                      onClick: ($event) => SDParams.value.negativePrompt = "",
                                      src: _imports_4
                                    }, null, 8, ["onClick"])
                                  ])
                                ])
                              ])
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "submit" }, [
                        createVNode("div", { class: "consume" }, [
                          createVNode("img", { src: _imports_5 }),
                          createTextVNode(" \u6D88\u8017 "),
                          drawNavKey.value == "SD" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(SDParams.value.num * robotDate.value.consumeEnergy), 1)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(robotDate.value.consumeEnergy), 1)
                          ], 64)),
                          createTextVNode(" \u7535\u91CF ")
                        ]),
                        createVNode("span", {
                          class: "but",
                          onClick: unref(onChatId)
                        }, [
                          createVNode(_component_Spin, {
                            fix: "",
                            show: loading.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u751F\u6210\u4E2D...")
                            ]),
                            _: 1
                          }, 8, ["show"]),
                          !loading.value ? (openBlock(), createBlock("div", { key: 0 }, "AI\u751F\u6210\u80CC\u666F\u56FE")) : createCommentVNode("", true)
                        ], 8, ["onClick"]),
                        createVNode("p", null, [
                          createTextVNode("\u8BF7\u9075\u5B88"),
                          createVNode("a", {
                            href: unref(routing).configuration.userServiceLink
                          }, "\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B", 8, ["href"]),
                          createTextVNode("\uFF0CAI\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA\uFF0C\u5176\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u7684\u89C2\u70B9\u548C\u6001\u5EA6")
                        ])
                      ]),
                      createVNode("div", {
                        innerHTML: vhtml.value,
                        id: "vhtml",
                        class: "vhtml"
                      }, null, 8, ["innerHTML"]),
                      createVNode("div", { class: "drawPages-action" }, [
                        loading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "loading"
                        }, [
                          createVNode(_component_svga, {
                            svgaImg: unref(loadImg),
                            ref: "svga",
                            width: 200,
                            height: 284
                          }, null, 8, ["svgaImg"])
                        ])) : createCommentVNode("", true),
                        unref(iframeUrl) && modalShow.value ? (openBlock(), createBlock("iframe", {
                          key: 1,
                          ref_key: "fIframe",
                          ref: fIframe,
                          class: "iframeClass",
                          frameborder: "no",
                          scrolling: "no",
                          src: unref(iframeUrl)
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      createVNode(prompt, {
                        ref_key: "promptRef",
                        ref: promptRef,
                        onClose: getSame
                      }, null, 512)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/modal/picEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const picEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc5d655a"]]);

export { picEdit as default };
//# sourceMappingURL=picEdit-05adee17.mjs.map
