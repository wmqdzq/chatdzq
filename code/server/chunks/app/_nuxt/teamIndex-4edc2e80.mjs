import { a as _export_sfc, b as useCookie, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './cDenied-1ff40e26.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, onUnmounted, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, Fragment, toDisplayString, createCommentVNode, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './avatar-8802d9a1.mjs';
import { c as cList, _ as _imports_7, f as firmModal } from './firmModal-85ac1a5f.mjs';
import { _ as _imports_8 } from './hot-a3749366.mjs';
import { _ as _imports_0$1 } from './footer-logo-0e992e13.mjs';
import { useRouter } from 'vue-router';
import { _ as _imports_1$2 } from './robot-20021510.mjs';
import { r as recordCom } from './recordNew-2087e423.mjs';
import { i as inputCom } from './template-e578487a.mjs';
import AccountModel from './accountModel-962e2c16.mjs';
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
import '../../paths.mjs';
import './ossUploaderNew-da7960a9.mjs';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '@aws-sdk/client-s3';
import './previewImg-8e12aab7.mjs';
import './cCreate-9b81dba0.mjs';
import './addBase-d16bc2bd.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import './edit1-d50fac04.mjs';
import './copy-d1ce3f41.mjs';
import './switch-59f92d8c.mjs';
import './content-977f7524.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './barrage-e0763a91.mjs';
import './ossUploader-2d65ed0f.mjs';
import './createLoading-9278cbec.mjs';
import './close3-d080d282.mjs';
import './phone-61ab024f.mjs';
import './pwd-8f00960a.mjs';
import './nickname-667f2327.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIbSURBVHgB7ZjRTcMwEIYviHfKBIQNygZlAzZImaBigpYJWiYgnaBignSDsoG7QdngOCsuvRo7thObCsmfdIrkXOz/znbOCUAmk8lkMpl/BCKWZCsygX4sHf2NyGZk78oqOQakgDoekx0wkI7+Kkt/guzJR1MBnqisNGSlavpS5uKtKIqVob+KLrXj2Qd69hNiQAPWLEM7OfXQEzWTesZnygRrbyAWWscl9MSwDAXvD9s9xu/3TpQ+8E/2oSdKnLCJZ3475jOGGAyd1gDx+gxcPgCD+INNGLVveJAQi74BYPue50sCO8QvNb8KYjEggEYTNbX4zTW/BcSkTwDYVlanqOTi1SBBAfiKMvjVkIKQAALEV5pfvMJlGMxrEIP4lcVvovkNqu5OfALA9ijA2Vj8OqtxElwB4O/zjTGj6FnQouMRwEITNUi8b1BXkIY1HYPPjtpoPo4/kt9ef5h853QR6LGpUwVwhpoNuR9K1mwUrzh+zEzAwZ8EAG3m+fHh2fGh4v02uoY0VJT1OziJ4eJfSHwNkUgVQEk2NbS/mj4vhxBzCW0d96X4BUQm2gyQuC0tm3tosz9SdkN2Sybo/houCX93Q2J4rYBYsE4PmPDMooqdd7JC9sCHukrxTYryz+rFka3rmdAfW/KPBM++fJf7/NzyoYTT3pHsobvYhaMObPwskwrrR3+MIOQarRMFIrD9cVxCJpPJZDIefAOOXsItZzU8FAAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB7ZjPTxNBFMe/szQxdomB2E08oF2JCdCLGmriBat4MJzkh2ev6gWQq8b4H2DxrlL6D3ARj4WrIfRUakzoFsvF9tDE7kYT3XHemtamhbLb2dDV8Ena2bczL3l5783bmcfQwtCV0duw+TQHu88AHScCzzKwrG3/Sh4Yn7Ots6xZuDg8siyMW0QPEQa9/WZ/X6oaRrXp3R+GLo/sgLFrCAKc79T4j8m6oQr9kQcDYyDB2PV+duZNQ7ygj+ohBQUEDw4bkyUjn1FCCu9pDnaAsT48pAcKdwIBhXM+TaMwUtERWNgA/YeEvQOQRNejCIfDbe9zuV34QQiSJG5N4MnjR4fOra6lsbHxAbIokEAV3nswN3vk/NzsjFijQhZXniRjoiKkrcTHx6FpmvO8ubWFcrnSmCPj+1VVjDP4uL3dplv+Wka5UoEb2NDwKO+0gHLt9cqyLx5ppmaaWFhYgmmZnZbx0l5ekQq3HBxh9ayrlcd6ktC0CLSIhqmpe7gRj8MoFpFKpeGFVt2iGE3LOk7N8aSrnKRco18iMeHIlmkht+utvNR1TRFmr7q+hJs2lhaJHCnLIl0naWOtiI1Fp775+aci07gjc5FELjaGK6Q9qaphZ+c7ZSp6qU32gx7ubvecGukXp0b6xT9hpHSdpC/Re3FmtKy/X6FWWRZpI4nUWrqjLMv/G+6w+KrEYmOedOgU1S1dGalHo3jx/BlOCk/hbr4edMt+8Qu84urQ20xszFuYm6ETUbG470WlfuhlVS93b7/KihdEuG0DAUX0JQ0aKSc3EVBsIEOj8tNmrxBMOLORooe+WrVSPTd4flA49yaCA90+3h0U8kkSnBJU2vu0KK4mGQQDTu1oU/TN6y8adbJUyN8R80n0FtGSxKrol989tLFfh9rTfQwvGfhVyT666/orDDPA+Dqz2Tq1n1vnfwO1eP8gSH2SDgAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADeSURBVHgB7dhhDcIwEAXgKwqGg0pBAg5AAg6YFRwgAQdI2BQQFOy4Jg2EwLJrU0oveV/y/jXrvR9r1hEBAAAA2MDM2xCySAbf88uRrJGhe35nq4QM3EmuKPFvKNEKlEjcyEsGruegnW2lXLeReKpnp12oLXCWjFTHXXIigDqcdqGcDEnrnxs4x/RD2pc4COfzTTKlhPMMkk4zVEqBcBFRPbQAH/dblFJg7mjjheQYJRcqjT8vJeEzYB3fDxtQohUo0YqZErWO2zK+lOjJmlhiilF/zzeFLf86BAAAgAwPT5g4MiE3HmUAAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7diBTcMwEAXQb8QATADZgI4QsQBsACOwQboCExQmACZIxQCkTNAwAZ2A41sEyaAmxM0ZI/We9OVUSuxcmyZ2AGOMMcbk47AjESnZnDIzTPPK3DrnWvwFnvgRcy/6Fr5vpMZBGkmniS3iMGZndl7h+yXzwDximpK57LZ939fMHCmwgHXwbc2hxPcV9PuGFNjxLBhkDWX+xIP+R98YDjBeeG220LfqGWtQTAH/khWQmxWQmxXwhffuWsarRWneo1JA9+ApIw7x+xZQoPULtEzNyJZss+T0eQUFUZO5PjyZDZszZGB/4tysgNysgNz2qoBNsO2Xl1BW9Iyl58e61S/EnS9kKCP7rXZdb8c+iW+Yqtv27QnzNHSA/F7FOXMRfL5DKvL5Vu5Z0mmQWlfEgnkXXf51ZfQUe8rL3YLNFXOMaWP4WekLJ4RLGGOMMfvmAxb6Vmn6UWbCAAAAAElFTkSuQmCC";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKuSURBVHgB7ZjrcdswDMfhXr+XIygTNJ2g2sDewN6g3kAawRskncDuBHInSDOB1AmcDVDyBN1BMCDrYam5C393ONPSnyT4EPgAiEQikchHZgV3BBGd/9l6e1utVj8NzS78ePvtNRW8B7xTqbcC2+wVXSY0IU8K/wtfeaI4zsm8PZIu69AdgwaWxFe49XZRnLngbax8e1gCX9FOceDgzVFvv6BNQZpgz8r7+RuB9ZA3lN4eQW/kkd6XlN4ouoTeN5xgbrA9ApMrFB2yHZL3E4yjYukvMB3H0m8wgLEN2LF0BdP5y9LfYE78EP8QH93a0IUPeuMtJwtpZ2jTWT9kqiBEFhn+XsBupBYqS2+ZkacQ2gvVmcJUDOeDM4mifcLbPCn5ZDTq7KQhzidKz4Qp4RRtJrQF1uvDQXFO22o4KltqHYwF2/Oz6NA5UXGuaHLREa6jvIJp15auTxTii9Rrhy71llC68jvNXAro2Zn+Bue/gw2PTA+WqE8D+sZo3tBfHTreCV0hswLdhxZj14F3Q58G8F5fox3W/rD0V7Dh89kKwym0p9eg1VkWtsFrStkQ+oh5qM2UsjJRhpOOox5K1zAWcsxiI7R7paFNGC3Euxxud1RDAlPA+lSV43U8vwqFqO/xJc8iT6KUe6A6U7gnSmXagqQtRo1jmn7HNCXOfbzE9lQ5GZohm7nR54HPMA4ecdTzgF+0QuQ4kd1i8fMAjwoVTGf0eWDwxRbNz5I92mmXWDRdQpRK6FEYtTONjNQG3ZE9epjt0gvriIRdHx0OOA+gfouRwpxge1fZkOHtCyyudfQrG5rDEhiNkISebeJ5Kd5pI7TMxRZrhHWKChwV/dHQFqjcLS0G1guRnMeJonOK44PivuTe1+uhF0NECdHmbGhSqHerr5YmEolEIpG+/AOGHU9rXoyWFAAAAABJRU5ErkJggg==";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFhSURBVHgB7diLTcMwEAbgP4gBMoJHYCO6ASPgTkCZgDIBYoKyAWzQbkA3OM7qoVrpy8/Eke6TrFSV6vi3Hcc1oJRSSqkZIiLDZcVlS5e9oEXcsAcuvxQAld0jkut5vnxw6eWrvZRzXtEaDrD2OvibS485Gcx5g7nxex8NuEO6PRqQEyALj+CCyyPG5k2hDRJJ4/89I8NkI+CxuSGilBgBqccO3nnjhCgVQOoaP0TJAFJfVojorURAgxZ8MYiz837jAqHruiVquDYCg9UlV9AS28IqlKXoFOJhdxs999EgzhOOu1tnyXW9o4ZrUyixvrfB1LGoqWSA0RsvNy0SYJLGy42zA9DpamWRqIVVyD2wFomKv8hCeKsVVVttLin1DJSSM4UMGpASYCfXnho4kUgJ8ClX1/gNTXwy0SGSNNidSPi9/4Pzf/K/qu0qc9DhaHFLAdAqOhzurm8EWUEppZSq6A9YyFwd6ZY3OwAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "teamIndex",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const recordComRef = ref();
    const { proxy } = getCurrentInstance();
    const authtoken = useCookie("authtoken");
    const routing = getRouting();
    const router = useRouter();
    const chatList = ref([]);
    const content = ref("");
    const robotCode = ref("");
    const consumeEnergy = ref(null);
    ref([]);
    ref("");
    ref("DZQ3.5");
    const robotType = ref("");
    const robotInfo = ref({});
    ref([]);
    const groupId = ref("");
    ref("");
    const groupList = ref([]);
    const groupIndex = ref(null);
    ref(null);
    const isNewChat = ref(true);
    ref(false);
    const tameVisible = ref(false);
    const menberShow = ref(false);
    const isShowTopUp = ref(false);
    ref([{
      name: "AI\u89D2\u8272",
      url: "/robot/role"
    }, {
      name: "AI\u521B\u4F5C",
      url: "/robot/creative"
    }, {
      name: "AI\u4F5C\u753B",
      url: "/robot/draw/list"
    }, {
      name: "AI\u6D77\u62A5",
      url: "/robot/placard/list"
    }, {
      name: "\u6587\u4EF6\u89E3\u8BFB",
      url: "/robot/brain/networking"
    }, {
      name: "\u601D\u7EF4\u5BFC\u56FE\u5206\u6790",
      url: "/robot/tool/thinking"
    }, {
      name: "\u56FE\u7247\u8BC6\u522B\u5206\u6790",
      url: "/robot/tool/identify"
    }, {
      name: "\u8054\u7F51\u67E5\u8BE2",
      url: "/robot/brain/agency"
    }]);
    ref([{
      name: "\u5BF9\u8BDD",
      url: "https://www.chatdzq.com/share/MTczMzEyOTEwOTU4NTgxNzYwMnwxNzAyMDQ1MTU0MzY1"
    }, {
      name: "\u667A\u80FD\u5BA2\u670D",
      url: "/enterprise/aics?type=CUSTOMER_SERVICE"
    }, {
      name: "\u667A\u6167\u5E02\u573A",
      url: "/enterprise/aics?type=SALES"
    }, {
      name: "\u667A\u80FDHR",
      url: "/enterprise/aics?type=HR"
    }]);
    ref([{
      name: "\u6211\u8BAD\u7EC3\u7684",
      url: "/robot/train"
    }, {
      name: "AI\u5BF9\u8BDD",
      url: "/robot/chat"
    }, {
      name: "AI\u89D2\u8272",
      url: "/robot/role"
    }]);
    const groupPageNo = ref(1);
    const modelKeyName = ref("other");
    const list = ref([]);
    const loadMore = ref(true);
    const searchPage = ref({
      loadMore: true,
      pageNo: 1,
      pageSize: 20
    });
    if (router.currentRoute.value && router.currentRoute.value.query && router.currentRoute.value.query.secretKey) {
      useCookie("secretKey").value = router.currentRoute.value.query.secretKey;
    }
    const init = () => {
      onOneapiModelList();
    };
    const onScrollTop = () => {
      isLoading.value = false;
      searchPage.value.pageNo = searchPage.value.pageNo + 1;
      onGroupLogList();
    };
    const onScrollBottom = () => {
      isLoading.value = false;
    };
    const getContent = () => {
    };
    const onOneapiModelList = () => {
      proxy.$api.space_robotQueryAiModelList().then((res) => {
        list.value = res.data;
        onMultipleRobotInfo();
      });
    };
    const onMultiModel = () => {
      modelKeyName.value = "other";
      modelVisible.value = true;
      singleAll.value = false;
      if (!proxy.$isEmpty(list.value)) {
        list.value.filter(
          (item) => item.single = robotInfo.value.multiModelInfoResVOS.some((iten) => iten.code === item.code)
        );
        if (list.value.length == robotInfo.value.multiModelInfoResVOS.length) {
          singleAll.value = true;
        }
      }
    };
    const modelVisible = ref(false);
    const singleAll = ref(true);
    const onAllChange = () => {
      singleAll.value = singleAll.value;
      list.value.forEach((item) => {
        item.single = singleAll.value;
      });
    };
    const onMultipleRobotInfo = () => {
      let data = {
        "type": "MULTIPLE_MODELS_CHAT"
      };
      proxy.$api.getMultiModelRobotInfo(data).then((res) => {
        robotInfo.value = res.data;
        robotType.value = res.data.type;
        robotCode.value = res.data.code;
        consumeEnergy.value = res.data.consumeEnergy;
        list.value.filter(
          (item) => item.single = res.data.multiModelInfoResVOS.some((iten) => iten.code === item.code)
        );
        if (list.value.length == res.data.multiModelInfoResVOS.length) {
          singleAll.value = true;
        }
        loadMore.value = true;
        groupPageNo.value = 1;
        onGroupList();
        onInitGroup();
      });
    };
    const onEditMultiModel = () => {
      let data = {
        code: robotInfo.value.code,
        llmCodeList: []
      };
      list.value.forEach((item) => {
        if (item.single) {
          data.llmCodeList.push(item.code);
        }
      });
      proxy.$api.editMultiModelRobotLlmModel(data).then((res) => {
        modelVisible.value = false;
        onMultipleRobotInfo();
      });
    };
    const onInitGroup = () => {
      routing.resetStream();
      let data = {
        type: robotType.value,
        robotCode: robotCode.value
      };
      proxy.$api.ai_bulidChatGroupId(data).then((res) => {
        groupId.value = res.data;
        chatList.value = [];
        groupIndex.value = null;
        isNewChat.value = true;
      });
    };
    const onGroupList = () => {
      if (proxy.$isLogin()) {
        let data = {
          robotCode: robotCode.value,
          type: robotType.value,
          pageNo: groupPageNo.value,
          pageSize: 20
        };
        if (loadMore.value) {
          proxy.$api.queryAiRecordGroupPageList(data).then((res) => {
            if (res.data && res.data.length == 0) {
              loadMore.value = false;
              return;
            }
            let arr = categorizedRecordsArray(res.data);
            if (groupPageNo.value > 1) {
              groupList.value = groupList.value.concat(arr);
            } else {
              groupList.value = arr;
            }
          });
        }
      }
    };
    const categorizedRecordsArray = (list2) => {
      return list2.reduce((accumulator, record) => {
        let category = accumulator.find((c) => c.group === record.gmtCreate);
        if (category) {
          category.records.push(record);
        } else {
          accumulator.push({
            group: record.gmtCreate,
            records: [record]
          });
        }
        return accumulator;
      }, []);
    };
    const onGroupLogList = () => {
      let data = {
        robotCode: robotCode.value,
        groupId: groupId.value,
        pageNo: searchPage.value.pageNo,
        pageSize: searchPage.value.pageSize
      };
      if (searchPage.value.loadMore) {
        proxy.$api.queryNewAiRecordPageList(data).then((res) => {
          if (res.data && res.data.length == 0) {
            searchPage.value.loadMore = false;
            return;
          }
          let arr = [];
          arr.unshift(...res.data.reverse());
          if (searchPage.value.pageNo > 1) {
            chatList.value = arr.concat(chatList.value);
            recordComRef.value.toMediate();
          } else {
            chatList.value = arr;
            setTimeout(() => {
              recordComRef.value.rollBottom();
            }, 300);
          }
        });
      }
    };
    const rollBottom = async () => {
    };
    const onSubmit = (form) => {
      if (!proxy.$isLogin()) {
        proxy.$Message.error("\u8BF7\u5148\u767B\u5F55\uFF01");
        return;
      }
      let data = {
        content: content.value,
        groupId: groupId.value,
        robotCode: robotCode.value
      };
      if (proxy.$isEmpty(content.value)) {
        proxy.$Message.error("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u95EE\u9898\u5462\uFF01");
        return;
      }
      routing.resetStream();
      chatList.value.push({
        content: content.value,
        type: "USER",
        chatType: "CHAT"
      });
      content.value = "";
      rollBottom();
      proxy.$setAiChat(proxy, data, "", (item) => {
        if (item.type == "[ONCOMPLETED]") {
          groupPageNo.value = 1;
          loadMore.value = true;
          searchPage.value.loadMore = true;
          searchPage.value.pageNo = 1;
          onGroupList();
        }
        if (item && item.content) {
          proxy.$processChatData(chatList.value, item, robotInfo.value.type == "MULTIPLE_MODELS_CHAT" ? true : false);
        }
      });
    };
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        groupPageNo.value = groupPageNo.value + 1;
        onGroupList();
      }
    }, 300);
    const toStaff = () => {
      proxy.$versionCheck();
      if (!proxy.$isFirm()) {
        return;
      }
      router.push(routing.defJumpUrl);
    };
    const onLogOut = () => {
      proxy.$versionCheck();
      routing.setFullPath("/");
      router.push("/login");
    };
    const accountRed = ref();
    const toAccount = () => {
      proxy.$versionCheck();
      accountRed.value.showFn();
    };
    const toSwitch = () => {
      proxy.$versionCheck();
    };
    const checkLimit = () => {
      let flag = false;
      isShowTopUp.value = false;
      routing.permList.forEach((item, i) => {
        if (item.tempCode == "33151") {
          flag = true;
        }
        if (item.tempCode == "33152") {
          isShowTopUp.value = true;
        }
        if (i == Number(routing.permList.length - 1)) {
          menberShow.value = flag;
        }
      });
    };
    watch(() => routing.permList, () => {
      if (routing.firmParams && routing.firmParams.isPaidTeamFlag && routing.permList.length > 0) {
        checkLimit();
      }
    }, { deep: true, immediate: true });
    watch(
      () => routing.getChatMsg,
      (item) => {
        if (item && item.content) {
          proxy.$processChatData(chatList.value, item, true);
        }
      },
      { deep: true }
    );
    onUnmounted(() => {
      routing.setIsDeniedFalse();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_DropdownMenu = resolveComponent("DropdownMenu");
      const _component_DropdownItem = resolveComponent("DropdownItem");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_Button = resolveComponent("Button");
      const _component_cDenied = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark" }, _attrs))} data-v-f06f7149><div class="home-gpt" data-v-f06f7149><div class="nav" data-v-f06f7149><div class="new clearfix" data-v-f06f7149><div class="area" data-v-f06f7149><img class="logo"${ssrRenderAttr("src", unref(routing).configuration.logo)} alt="" data-v-f06f7149> New chat <img class="icon"${ssrRenderAttr("src", _imports_0)} alt="" data-v-f06f7149></div></div><ul class="groupList" data-v-f06f7149><!--[-->`);
      ssrRenderList(groupList.value, (item, index) => {
        _push(`<li data-v-f06f7149><div class="time" data-v-f06f7149>${ssrInterpolate(item.group)}</div><!--[-->`);
        ssrRenderList(item.records, (data, idx) => {
          _push(`<div class="${ssrRenderClass([groupId.value == data.groupId ? "active" : "", "area"])}" data-v-f06f7149><p class="text-hide" data-v-f06f7149>${ssrInterpolate(data.request)} <span data-v-f06f7149></span></p><div class="operate-poptip" data-v-f06f7149><img${ssrRenderAttr("src", _imports_1)} data-v-f06f7149></div></div>`);
        });
        _push(`<!--]--></li>`);
      });
      _push(`<!--]--></ul>`);
      if (!_ctx.$isEmpty(unref(authtoken))) {
        _push(`<div class="user clearfix" data-v-f06f7149>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Dropdown, {
                trigger: "click",
                placement: "top",
                "transfer-class-name": "dark-dropdown"
              }, {
                list: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ul class="info-list" data-v-f06f7149${_scopeId2}><li data-v-f06f7149${_scopeId2}><img class="icon"${ssrRenderAttr("src", _imports_4)} alt="" data-v-f06f7149${_scopeId2}> \u4F01\u4E1A/\u56E2\u961F\u7BA1\u7406 </li><li data-v-f06f7149${_scopeId2}><img class="icon"${ssrRenderAttr("src", _imports_5)} alt="" data-v-f06f7149${_scopeId2}> \u8D26\u53F7\u7BA1\u7406 </li><li class="logOut" data-v-f06f7149${_scopeId2}><img class="icon"${ssrRenderAttr("src", _imports_6)} alt="" data-v-f06f7149${_scopeId2}> \u9000\u51FA\u767B\u5F55 </li></ul>`);
                  } else {
                    return [
                      createVNode("ul", { class: "info-list" }, [
                        createVNode("li", { onClick: toStaff }, [
                          createVNode("img", {
                            class: "icon",
                            src: _imports_4,
                            alt: ""
                          }),
                          createTextVNode(" \u4F01\u4E1A/\u56E2\u961F\u7BA1\u7406 ")
                        ]),
                        createVNode("li", { onClick: toAccount }, [
                          createVNode("img", {
                            class: "icon",
                            src: _imports_5,
                            alt: ""
                          }),
                          createTextVNode(" \u8D26\u53F7\u7BA1\u7406 ")
                        ]),
                        createVNode("li", {
                          class: "logOut",
                          onClick: onLogOut
                        }, [
                          createVNode("img", {
                            class: "icon",
                            src: _imports_6,
                            alt: ""
                          }),
                          createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                        ])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="info clearfix" data-v-f06f7149${_scopeId2}>`);
                    if (unref(routing).currentTean.personFlag) {
                      _push3(`<!--[-->`);
                      if (!unref(routing).userLogo) {
                        _push3(`<img class="pic"${ssrRenderAttr("src", _imports_1$1)} data-v-f06f7149${_scopeId2}>`);
                      } else {
                        _push3(`<img class="pic"${ssrRenderAttr("src", unref(routing).userLogo)} data-v-f06f7149${_scopeId2}>`);
                      }
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<img class="pic"${ssrRenderAttr("src", unref(routing).currentTean.headPortrait)} data-v-f06f7149${_scopeId2}>`);
                    }
                    _push3(`<div class="fl" data-v-f06f7149${_scopeId2}><p data-v-f06f7149${_scopeId2}>${ssrInterpolate(unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName || "You")}</p><p class="team" data-v-f06f7149${_scopeId2}><span data-v-f06f7149${_scopeId2}>${ssrInterpolate(unref(routing).clientType == "TEAM" ? "\u56E2\u961F" : "\u4E2A\u4EBA")}</span></p></div>`);
                    _push3(ssrRenderComponent(_component_Poptip, {
                      class: "poptip fr",
                      "transfer-class-name": "poptip-dark",
                      modelValue: tameVisible.value,
                      "onUpdate:modelValue": ($event) => tameVisible.value = $event,
                      placement: "top",
                      trigger: "click",
                      transfer: true
                    }, {
                      content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(cList, {
                            onInit: init,
                            visible: tameVisible.value,
                            onClose: ($event) => tameVisible.value = false
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(cList, {
                              onInit: init,
                              visible: tameVisible.value,
                              onClose: ($event) => tameVisible.value = false
                            }, null, 8, ["visible", "onClose"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="qh" data-v-f06f7149${_scopeId3}><img class="icon"${ssrRenderAttr("src", _imports_3)} alt="" data-v-f06f7149${_scopeId3}><span data-v-f06f7149${_scopeId3}>\u5207\u6362</span></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "qh",
                              onClick: withModifiers(($event) => tameVisible.value = true, ["stop"])
                            }, [
                              createVNode("img", {
                                class: "icon",
                                src: _imports_3,
                                alt: ""
                              }),
                              createVNode("span", { onClick: toSwitch }, "\u5207\u6362")
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "info clearfix" }, [
                        unref(routing).currentTean.personFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "pic",
                            src: _imports_1$1
                          })) : (openBlock(), createBlock("img", {
                            key: 1,
                            class: "pic",
                            src: unref(routing).userLogo
                          }, null, 8, ["src"]))
                        ], 64)) : (openBlock(), createBlock("img", {
                          key: 1,
                          class: "pic",
                          src: unref(routing).currentTean.headPortrait
                        }, null, 8, ["src"])),
                        createVNode("div", { class: "fl" }, [
                          createVNode("p", null, toDisplayString(unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName || "You"), 1),
                          createVNode("p", { class: "team" }, [
                            createVNode("span", null, toDisplayString(unref(routing).clientType == "TEAM" ? "\u56E2\u961F" : "\u4E2A\u4EBA"), 1)
                          ])
                        ]),
                        createVNode(_component_Poptip, {
                          class: "poptip fr",
                          "transfer-class-name": "poptip-dark",
                          modelValue: tameVisible.value,
                          "onUpdate:modelValue": ($event) => tameVisible.value = $event,
                          placement: "top",
                          trigger: "click",
                          transfer: true
                        }, {
                          content: withCtx(() => [
                            createVNode(cList, {
                              onInit: init,
                              visible: tameVisible.value,
                              onClose: ($event) => tameVisible.value = false
                            }, null, 8, ["visible", "onClose"])
                          ]),
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "qh",
                              onClick: withModifiers(($event) => tameVisible.value = true, ["stop"])
                            }, [
                              createVNode("img", {
                                class: "icon",
                                src: _imports_3,
                                alt: ""
                              }),
                              createVNode("span", { onClick: toSwitch }, "\u5207\u6362")
                            ], 8, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Dropdown, {
                  trigger: "click",
                  placement: "top",
                  "transfer-class-name": "dark-dropdown"
                }, {
                  list: withCtx(() => [
                    createVNode("ul", { class: "info-list" }, [
                      createVNode("li", { onClick: toStaff }, [
                        createVNode("img", {
                          class: "icon",
                          src: _imports_4,
                          alt: ""
                        }),
                        createTextVNode(" \u4F01\u4E1A/\u56E2\u961F\u7BA1\u7406 ")
                      ]),
                      createVNode("li", { onClick: toAccount }, [
                        createVNode("img", {
                          class: "icon",
                          src: _imports_5,
                          alt: ""
                        }),
                        createTextVNode(" \u8D26\u53F7\u7BA1\u7406 ")
                      ]),
                      createVNode("li", {
                        class: "logOut",
                        onClick: onLogOut
                      }, [
                        createVNode("img", {
                          class: "icon",
                          src: _imports_6,
                          alt: ""
                        }),
                        createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "info clearfix" }, [
                      unref(routing).currentTean.personFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                          key: 0,
                          class: "pic",
                          src: _imports_1$1
                        })) : (openBlock(), createBlock("img", {
                          key: 1,
                          class: "pic",
                          src: unref(routing).userLogo
                        }, null, 8, ["src"]))
                      ], 64)) : (openBlock(), createBlock("img", {
                        key: 1,
                        class: "pic",
                        src: unref(routing).currentTean.headPortrait
                      }, null, 8, ["src"])),
                      createVNode("div", { class: "fl" }, [
                        createVNode("p", null, toDisplayString(unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName || "You"), 1),
                        createVNode("p", { class: "team" }, [
                          createVNode("span", null, toDisplayString(unref(routing).clientType == "TEAM" ? "\u56E2\u961F" : "\u4E2A\u4EBA"), 1)
                        ])
                      ]),
                      createVNode(_component_Poptip, {
                        class: "poptip fr",
                        "transfer-class-name": "poptip-dark",
                        modelValue: tameVisible.value,
                        "onUpdate:modelValue": ($event) => tameVisible.value = $event,
                        placement: "top",
                        trigger: "click",
                        transfer: true
                      }, {
                        content: withCtx(() => [
                          createVNode(cList, {
                            onInit: init,
                            visible: tameVisible.value,
                            onClose: ($event) => tameVisible.value = false
                          }, null, 8, ["visible", "onClose"])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "qh",
                            onClick: withModifiers(($event) => tameVisible.value = true, ["stop"])
                          }, [
                            createVNode("img", {
                              class: "icon",
                              src: _imports_3,
                              alt: ""
                            }),
                            createVNode("span", { onClick: toSwitch }, "\u5207\u6362")
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="user clearfix" data-v-f06f7149><div class="info" data-v-f06f7149><img class="pic"${ssrRenderAttr("src", unref(_imports_1$1))} alt="" data-v-f06f7149> \u7ACB\u5373\u767B\u5F55 </div></div>`);
      }
      _push(`</div><div class="content" style="${ssrRenderStyle({ "padding-top": "10px" })}" data-v-f06f7149><div class="indexModel" data-v-f06f7149>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Dropdown, {
              trigger: "custom",
              visible: modelVisible.value,
              transfer: true,
              "transfer-class-name": "dark-dropdown"
            }, {
              list: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenu, { class: "modelList" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(list.value, (item, index) => {
                          _push4(ssrRenderComponent(_component_DropdownItem, { class: "clearfix mb-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="i-200" data-v-f06f7149${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Checkbox, {
                                  class: "fl",
                                  modelValue: item.single,
                                  "onUpdate:modelValue": ($event) => item.single = $event
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (item.hotFlag) {
                                        _push6(`<img${ssrRenderAttr("src", _imports_8)} style="${ssrRenderStyle({ "height": "13px", "margin-right": "4px" })}" data-v-f06f7149${_scopeId5}>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<span class="${ssrRenderClass(item.hotFlag ? "hotColor" : "")}" data-v-f06f7149${_scopeId5}>${ssrInterpolate(item.name)}</span>`);
                                    } else {
                                      return [
                                        item.hotFlag ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: _imports_8,
                                          style: { "height": "13px", "margin-right": "4px" }
                                        })) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: item.hotFlag ? "hotColor" : ""
                                        }, toDisplayString(item.name), 3)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="fr" style="${ssrRenderStyle({ "color": "#fff" })}" data-v-f06f7149${_scopeId4}>-${ssrInterpolate(item.consumeEnergy)}\u7535\u91CF</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "i-200" }, [
                                    createVNode(_component_Checkbox, {
                                      class: "fl",
                                      modelValue: item.single,
                                      "onUpdate:modelValue": ($event) => item.single = $event
                                    }, {
                                      default: withCtx(() => [
                                        item.hotFlag ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: _imports_8,
                                          style: { "height": "13px", "margin-right": "4px" }
                                        })) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: item.hotFlag ? "hotColor" : ""
                                        }, toDisplayString(item.name), 3)
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", {
                                      class: "fr",
                                      style: { "color": "#fff" }
                                    }, "-" + toDisplayString(item.consumeEnergy) + "\u7535\u91CF", 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, index) => {
                            return openBlock(), createBlock(_component_DropdownItem, { class: "clearfix mb-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "i-200" }, [
                                  createVNode(_component_Checkbox, {
                                    class: "fl",
                                    modelValue: item.single,
                                    "onUpdate:modelValue": ($event) => item.single = $event
                                  }, {
                                    default: withCtx(() => [
                                      item.hotFlag ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: _imports_8,
                                        style: { "height": "13px", "margin-right": "4px" }
                                      })) : createCommentVNode("", true),
                                      createVNode("span", {
                                        class: item.hotFlag ? "hotColor" : ""
                                      }, toDisplayString(item.name), 3)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", {
                                    class: "fr",
                                    style: { "color": "#fff" }
                                  }, "-" + toDisplayString(item.consumeEnergy) + "\u7535\u91CF", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="i-200 mt-10" data-v-f06f7149${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Checkbox, {
                    class: "fl ml-18",
                    modelValue: singleAll.value,
                    "onUpdate:modelValue": ($event) => singleAll.value = $event,
                    onOnChange: ($event) => onAllChange(),
                    style: { "color": "#fff" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5168\u9009 `);
                      } else {
                        return [
                          createTextVNode(" \u5168\u9009 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "fr",
                    type: "primary",
                    size: "small",
                    onClick: onEditMultiModel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u5B9A`);
                      } else {
                        return [
                          createTextVNode("\u786E\u5B9A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_DropdownMenu, { class: "modelList" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, index) => {
                          return openBlock(), createBlock(_component_DropdownItem, { class: "clearfix mb-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "i-200" }, [
                                createVNode(_component_Checkbox, {
                                  class: "fl",
                                  modelValue: item.single,
                                  "onUpdate:modelValue": ($event) => item.single = $event
                                }, {
                                  default: withCtx(() => [
                                    item.hotFlag ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: _imports_8,
                                      style: { "height": "13px", "margin-right": "4px" }
                                    })) : createCommentVNode("", true),
                                    createVNode("span", {
                                      class: item.hotFlag ? "hotColor" : ""
                                    }, toDisplayString(item.name), 3)
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", {
                                  class: "fr",
                                  style: { "color": "#fff" }
                                }, "-" + toDisplayString(item.consumeEnergy) + "\u7535\u91CF", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "i-200 mt-10" }, [
                      createVNode(_component_Checkbox, {
                        class: "fl ml-18",
                        modelValue: singleAll.value,
                        "onUpdate:modelValue": ($event) => singleAll.value = $event,
                        onOnChange: ($event) => onAllChange(),
                        style: { "color": "#fff" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5168\u9009 ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"]),
                      createVNode(_component_Button, {
                        class: "fr",
                        type: "primary",
                        size: "small",
                        onClick: onEditMultiModel
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u786E\u5B9A")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a class="${ssrRenderClass(modelKeyName.value == "other" ? "active" : "")}" style="${ssrRenderStyle({ "margin-left": "20px" })}" data-v-f06f7149${_scopeId2}> \u5927\u6A21\u578B\u9009\u62E9 <img class="drop-down"${ssrRenderAttr("src", _imports_7)} alt="" data-v-f06f7149${_scopeId2}></a>`);
                } else {
                  return [
                    createVNode("a", {
                      class: modelKeyName.value == "other" ? "active" : "",
                      onClick: onMultiModel,
                      style: { "margin-left": "20px" }
                    }, [
                      createTextVNode(" \u5927\u6A21\u578B\u9009\u62E9 "),
                      createVNode("img", {
                        class: "drop-down",
                        src: _imports_7,
                        alt: ""
                      })
                    ], 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Dropdown, {
                trigger: "custom",
                visible: modelVisible.value,
                transfer: true,
                "transfer-class-name": "dark-dropdown"
              }, {
                list: withCtx(() => [
                  createVNode(_component_DropdownMenu, { class: "modelList" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, index) => {
                        return openBlock(), createBlock(_component_DropdownItem, { class: "clearfix mb-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "i-200" }, [
                              createVNode(_component_Checkbox, {
                                class: "fl",
                                modelValue: item.single,
                                "onUpdate:modelValue": ($event) => item.single = $event
                              }, {
                                default: withCtx(() => [
                                  item.hotFlag ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: _imports_8,
                                    style: { "height": "13px", "margin-right": "4px" }
                                  })) : createCommentVNode("", true),
                                  createVNode("span", {
                                    class: item.hotFlag ? "hotColor" : ""
                                  }, toDisplayString(item.name), 3)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", {
                                class: "fr",
                                style: { "color": "#fff" }
                              }, "-" + toDisplayString(item.consumeEnergy) + "\u7535\u91CF", 1)
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "i-200 mt-10" }, [
                    createVNode(_component_Checkbox, {
                      class: "fl ml-18",
                      modelValue: singleAll.value,
                      "onUpdate:modelValue": ($event) => singleAll.value = $event,
                      onOnChange: ($event) => onAllChange(),
                      style: { "color": "#fff" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5168\u9009 ")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"]),
                    createVNode(_component_Button, {
                      class: "fr",
                      type: "primary",
                      size: "small",
                      onClick: onEditMultiModel
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u5B9A")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("a", {
                    class: modelKeyName.value == "other" ? "active" : "",
                    onClick: onMultiModel,
                    style: { "margin-left": "20px" }
                  }, [
                    createTextVNode(" \u5927\u6A21\u578B\u9009\u62E9 "),
                    createVNode("img", {
                      class: "drop-down",
                      src: _imports_7,
                      alt: ""
                    })
                  ], 2)
                ]),
                _: 1
              }, 8, ["visible"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (_ctx.$isEmpty(chatList.value)) {
        _push(`<div class="newChat" data-v-f06f7149><div class="help" data-v-f06f7149><img class="logo"${ssrRenderAttr("src", unref(routing).configuration.logo)} alt="" style="${ssrRenderStyle({ "border-radius": "100px" })}" data-v-f06f7149><p class="s20" data-v-f06f7149>\u6211\u4ECA\u5929\u80FD\u5E2E\u4F60\u505A\u4EC0\u4E48?</p><p data-v-f06f7149>How can I help you today?</p></div></div>`);
      } else {
        _push(`<div class="list" data-v-f06f7149><div class="multiModel-record-list" data-v-f06f7149>`);
        _push(ssrRenderComponent(recordCom, {
          ref_key: "recordComRef",
          ref: recordComRef,
          isLoading: isLoading.value,
          "onUpdate:isLoading": ($event) => isLoading.value = $event,
          robotLogo: robotInfo.value.robotLogo || unref(_imports_1$2),
          chatList: chatList.value,
          robotPromptList: [],
          jubao: true,
          onScrollTop,
          onScrollBottom,
          onGetContent: getContent,
          isShowName: true,
          functionHideList: ["answer", "share", "edit"]
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`<div class="inputArea" data-v-f06f7149><div class="inputAreaContent" data-v-f06f7149>`);
      _push(ssrRenderComponent(inputCom, {
        content: content.value,
        "onUpdate:content": ($event) => content.value = $event,
        consumeEnergy: consumeEnergy.value,
        onSubmit
      }, null, _parent));
      _push(`</div></div></div><div class="copyright" style="${ssrRenderStyle({ "padding": "12px" })}" data-v-f06f7149><div class="main bottom" data-v-f06f7149><img${ssrRenderAttr("src", _imports_0$1)} data-v-f06f7149> ${ssrInterpolate(unref(routing).configuration.copyRight)} \u7248\u6743\u6240\u6709\u7ECF\u8425\u8BB8\u53EF\u8BC1\uFF1A <span class="item-html4" data-v-f06f7149>${unref(routing).configuration.recordNumber}</span></div></div>`);
      _push(ssrRenderComponent(firmModal, null, null, _parent));
      if (modelVisible.value) {
        _push(`<div class="mask" data-v-f06f7149></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_cDenied, null, null, _parent));
      _push(ssrRenderComponent(AccountModel, {
        ref_key: "accountRed",
        ref: accountRed
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teamIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teamIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f06f7149"]]);

export { teamIndex as default };
//# sourceMappingURL=teamIndex-4edc2e80.mjs.map
