import { a as _export_sfc, g as getRouting, b as useCookie, _ as __nuxt_component_1$1, d as __nuxt_component_0$1, h as __nuxt_component_2 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './sPrompt-baa4194f.mjs';
import { _ as __nuxt_component_2$1 } from './cCreate-a5f9051b.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './avatar-8802d9a1.mjs';
import { useRouter } from 'vue-router';
import { s as service } from './index-3a8d75d8.mjs';
import AccountModel from './accountModel-09657c44.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABP5JREFUWEftll9MW3UUx7+/tvS2tGJZofTebtBtiDp4dW8meyK+STY3k/F3REgMIaV04Jhxg4mEyJBiN7LEoG1ANKhPxsTHPSxZYsRHI4ITV9rCKIyttN1te+81P9ICFwq97GUx8SQ39+H+zvl+fuec37k/ghds5AXr43+A/1QGVIDikkkARCX9pSQDxG63vxyLxcrUanWBkqCSJK0lEgn/2tpaBACF2ddyAZCSkpLjarV6gGGYd7VarRJ98DxPnzsajeZjv98fOgjiIABisVhOqNXqb4qLi9+orq5GVVWVIoD79+/j3r17WF1d/SmVSrWGw+F9IfYDyIhPWSyW0729vaipqVEknlk0OTmJwcFBCvFjMpl8f3V1NZAtQDYAwnHcUUmSvjabzW/29fXh7NmzO3xFQIgBkiCPRzSAOl/Wp16vdxMiEol8l0gkOsLhcHA3xB4AlmXLCCGjRUVFb7tcLjQ0NGz7SCIQ+wOI/AIkH8tjaS1AwWlAXy6DuHnzJsbHx/HkyZPJZDL5wW4IGQDHcccAfF5YWFjT1dWFxsbGHSISEP0dmHcAAm3uLKa1ASeHAP0JGcTQ0NAmxNOnTydVKlVPIBBYzHhvAdhstqOiKA6YTKb61tZWdHR0yMXjfwIPegA+aym319IM2PsA/UkZRH9/PyYmJmg5JlQq1dUMxBYAx3Feg8HQ2NLSArp7mT17APx1Obd4xkn/CnB8ANCVysJcv34dU1NTiEaj46FQ6D36cQuAZdm1ysrKQp/PB47j5AD+IWDl+0OdApQ0ALY2mU8gEMDFixcxNzf3dygUonXaBrBarZ8SQlrq6upMTqcTLMtuO8fngIUbAC2DEtNXAPZrAM1E2hYXF0Ebcnp6ep0QMhIMBm/IACgMy7LDhJBLTU1Npra2NnkmYrPAw08A+j7I8l8FSj8E6Dttfr8fw8PDm+IAvgqFQq7MdNx9DNUsy9JMtDY1NRk7OzthNpu35egR/KcfoBnJZvmvAaU9AH2njaY9vfPHkiRR8W4AW0Nkzxw4c+aMZnZ21kMIqXW5XC/RoyiDiPwGLI7sLUf+KeBYN2B4XSY+NjYGr9dLh8aXFRUVV+7evZvayZ51FJeXlzOxWOwzlUpV73Q6s0DMAIujQDxdDkMlcPQyYDi1R9zn8z0WBGHcZrNdnZmZSe5O3L4/I7vdruN5fiQvL++Sw+FgmpubYTKZtv0jvwKhLwCiBrg2gEKkLRwOw+12051HBEG4YzQaP5qfn+ezVe3A3/GRI0cKGIYZ02q173R3dzP0CMkg4vMAyQN0ZTJxepTdbncklUr5dDpd18LCwrP9+jbXfQA2m80siuKITqe74HK5mNraWjnEjsh05/QHdOvWrQjP815JknqWl5ejBx2anADU2Wq1FhNC3Hq9/rzT6cyrq6vbA7G+vr457z0eT4Ln+XFBELpXVlY2co0NRQA0iNlstjEMM6zX6885HA5NfX39FgQVp3N+dHSUj8fj34qi2LW0tLSSS3z3IMq5nuO4UkmSBg0Gw/n29nYNbUxBEEBr7vF4UhsbG5OiKF559OjRcs5g6QWKM5AJSO8LAAaMRuOFzs5ODb3/3b59m4pPJ5PJy+nrl1J9xddsWUCr1WonhPQXFBS8JQiCGI1Gf5Yk6drS0tKCYuXnzUBGgN6WCSHnCCECIeSHYDD48LDih+6B5xHI5XPoHsgV8LDf/wUrgfwweaQfbAAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA/xJREFUWEfFV1FsU1UY/v5zL2U41jqRdlsga5mGTKNPBoO+GIhRooBEMsOI2QMYohJJjBIlIZmGBwkPogZxMcQRHDMjKSQmJMaIcQ+EF4NgAqGWdmO4MagMNsF1tPfHe86983Zsved2JPbltDfn/N93vv873z0l/M8fqgSfAQLrr6QyswMT4J+fM/P5gXjRoJpSCiHn5wQQcr+rR/nh8cxDLZmb01EORIAZ9M+PS7cz6BO7GNmrZQVyBynMlKJjPC/U/MAzZ/6cNYFbvc31fKt4kQRVlaC6ZFwEhxQIliB8ULXi/J6ZGhZIgdHjS/cIwnuymLPSHuSupRquEmyLRQLIjIxXP9Gw+tfbsybAxx8J/82UBmhhicYOEeFxmtOagsX8es0Lqe/K2VVbgZvfP7qNgL22/yUAiBj2PtUwqYirDNHJ6hcvPOt3VrQI8A+x6tF8+CzAS1RB8hiwFIJsdsS3rQKvjKxJn7ovBEaT8bWWMI85zmc7B9SWZSIoSkIpofxAB8Ivpzb7gXusNPPU7DfxqkiYThCJ5QoIymGqD5KAbL98BptcjmE8/eCaC9n7QuBGsmmFZfFPEshrfWV6Rw0HyibF2BF5Jb2bCNasCdipdz3X3w1gvZLfY5kphBwy4AJegsFjxDxQ+2q2349EWRMOH048aRo445zzkpBTZvOUn+yIek5AMnJ27gZqPzdR8THMdcc7AbQpy7sye3Dlc2VJ52B6fqBghsz68OpUriICV3vidbjDfxBovnenqg3/ud/d7qQRbZNKj3LvkDXv+cdbKlTg2reNrczogmCW0TNF4nsUcV9KSv7fmIobF7RcOlexB4YOJpYZVOxkoFHFunPqiE2ATDcTSp0p8+B3wzTaatenT/uBl80BW8drhxpXgXkdE0LumRKEpwj02GT+uvZQYwqmeCP6WrZXB1wriKYWunJwcRKgdWoxgQTLYAJRhgz+MNp6qUcXPDCBwcMND4u8kQYh7GSg68F+i8VHdW19neWuX9MR03oZuQsHDyzaSAKHvKYE8dV/O/9xXdvAl0HBgyvw9aIkCFJ+2+rMGDENfBatvryLWlAMIr0nVvSWXdkfixaMOSkCR2TwEN8AqGPistmeaO8b16ty7yztFgx2NLRaoC7nApYHWfsE086GLYMzXrd0SGkTGNhXn4Sw3c8FEuiea955e+Gm3JgOSEVR7F2U2RuNmXOM8wDXkKAjwMT7i9/8a9prdlBCWgr0fRFrJVAXEXoKoO1Ltg75vmZ1iWgRyH4eO0pATVEU32ramkvpFteZ50vAll8AX7Gg3Yl3hn0vmTqg3jm+BPo+XdDMTNHEu7lfghbXme9L4GJHbaRpy8i0fyx1APzm3AWkAj4wLbcLnQAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmtJREFUWEftlsFrE0EUxr+3sxXZ1tDVS0DwH/Co6KWgf4LgMRexrW4coqaxFxFciicD7aFNwxZC8CpqgxYPigdRb/4RgqkEchGMNNnM7pMpKURN2k2yNJe8837z/eab92aWMOaiMftjAjBJILYESqXSKd3Q8/PzDQActbljASgUCjOmaa5oU6XUUyll7VgBisXiVcMw3gMwmXk7CII7USFiSSCfz08nEol3AC4DEAAqvu/LTCbz46gkYgHQJqurq6cty3pLRBc7EC/DMLyXTqd3D4OIDUCbbG5u2kKIna4kXjUajfu5XO57P4i+ABsbG2eEEPudPWDZhmG8AXBW65j5eRAED6SUPSF6Aqytrc1alrXEzJcGNN//nIimAcwdaJn5xd7e3mI2m/3573o9AQqFwpxpmh8BGMMA9NCESqkrUsrPUQH0XFeI6EQcAMzsK6WuSSn1JfVXxdqEw8D2BSiXyyfb7fY5Zh75GIQQqlqtfnNdV0VOoFgsXieilGEYU8PsrFvDzL9931/PZDJfIgN4nvcVwIVRzbsmYctxnNuDADwEsAxgtiPymfkTEbWHgQrDcCudTm9HBtA90Gw2nxDRTSKyAfwCsKSU2mHmgSBs2w5TqZS+A/57pg+dAg3RarVWiGgBgM3MtSAIZL1ef92roYZJ5sgx9DzPYmYXwEIniSozZ2u1WiUOiCMB9K40BIDHABZ1EgA0xA3HcT4Ms+tuTSQALdB/PUKIRwBu6SSYed1xnLvHBqCNXNedSSaTy0R0npmfOY6jX72RKnICBy6e500ppZL1en3Xdd1wJHf9co66wKj6CcDYE/gDaYDvIWz4IeMAAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0tJREFUWEftl19ojXEYx7/P7/2zs80sq4mhTNiuFuVCcjN3hJPkSJz5M3KDnKOhDK/G8ndz4UbSYZP0Uhx3bqylEHFDKZGxTPm7P23n3/t7H73Hn86ynfd9SUs5t8/z/T6f93l6nl+HMMY/GuP6+HcBmJlCV68Kp4PmqlU2EfHvdNN3B4yODrXsbaIonZEVoPTEbFHW3+ua0vN5SuGQUVtr+QHxBXCi7VYxkF6kEh8GUJNbiEH3wWiW+HK7oa5u0CuEZ4Bj5+MlmkaHiBDJZ04Cx3o/9TcbO9b1e4HwBGCaptKdKjwowPu9mIJwpO/F4wOGYdhu+Z4ATsauVSuq/szNLCeetpLJ6oYtoVduGk8ALZfiTcTU6GaWG7cZp3fVLc87LiffG8DF+D0SNN8PAIBHkfDyeW4aTwCt7TdfApjhZjYsztwVqQtWumk8AbS0xR8T0Vw3s+FxfhIJB4et6kh6TwCn2uLnBdEmPwAk6MzOtcu2u2k8AtxYIkhcAVDiZvg9PsiqWBxds/SOW74rgGF0qIZRa7W23zwHYAMA1cXUAvhyJBxc/0Ob93DlCx41zdKCVMFCKaynhb3yU7qk4BoTLSSgeBTdEIBOvT8ZypQHymQCNZbFnXvqgwOj1cnbgdZL8U0AnbVtbhOa3oRkspcVcZwI1QAqASr7ZkwfAPsNiF5adu82VSsvZyvTSMAGtrk+uj540TeAYZp6aSrwFMAs571j0AVb2hdEUeqhbRUWK5ZcbZOY4xgrTA8sFdeFmhjklD6XoGwmsDMuAqOrL5CsMkKhtK8tOB4zJ2lq4F2OiMHosaVsJE3tIZkZkFL0ZQF0msAQxZD2ZBLYB9DMnCPHGMpMiWxdmev103bUEbTGrk+Hqox0y5nB/QR6zYxsnAizGVxBoHEOzy9fasnKyMYVXb46kAfAbbN+jf8H+Dc7cLZ9MopKe/wPfCRFpiIS9rkFRiwWGK+UPSeiaX8Cwczd+JiqikZDCV9b4CS3tMcbCNm9Lv1NiAEGN0XDwRO+L6EjcN4CPaHvFkIsYtBUBrs9RNk6ArAZ3A0WnalAonlvKJQ9WL474Aic/wIaJRdIYCZYaF46IQBJkC9SGbqb7yHKHjEvhn8zZ8wBvgKof0owSmC7AAAAAABJRU5ErkJggg==";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAApVJREFUWEftljFoE1EYx//fu6RkqJhBwaEIgu4OFRUsEnAR7aXBwVqbpsHBigi5WCyCYBfBpTkoiIqFtGkEqUqbKOJQqYNgB4duOnTo2MEhJRmCuXtPXkyljZfeuzPapbck8L7v//3e9973vyPs8kO7XB97AK4dyOQK/UTsEoCjisdV4iTu3h7Ul1XiWwJks0uhjWD5pRC4qCK0NYYI+dSgHlfJawlg5oovQLisItIUUyKOeCqhv1XJdQSYyBdPMYHPDYEKOE9uHN6/MB6JWCqiXmIcAcyZ4kMwjEkhIcSN9FD0iRdRL7HOALOFaYASdQCIY+l4dNWLqJdYVwAE7CPGldiaquhk/l2XJWp9lhV4dSd5Yd0tr+0AmVzhIxGdBWENNTtiJHeG/xcAU0R0Te6cgHXB7PPG1dhKq060HaDuH4HyMwEM1osSKrB5zEj0LTpB+AKQRUpaeUQwHiKwqqOwwJgADv1ioCoHj6Xj0ffNsb4AzFxxGISs2wXbtk6ohGv7DiaTkW3AvgCkUWkCSwIIeYD4YsT1E23pgBR5NDfX+cMOHpD/WU10yl8epErdOywWYKCsAM40Cq52WFrPTYex9NUBt12b+WIWAsONS7jjOLYdYGK2MM5A91WKN0b1z/2YW6zYqxOaucIyiE7WPcCyT/93IzKfzx8H1/oDGk3fGuj95nZcLY6gKN9+12WyzdEzmtA/uQn5XXcG2DrnRIvhWmdv8/z6Lag2htn5MAW0r5tOBqIVwfkHkrbq8giiKmc0NTrQ+90ttuUllAvmzMI5YuyNR7PZrPnUiOsjfwUgkzO5QjcRPQbQrSL2O0bggTGk31PJcf0slyKT+dddtuhQ+iwnLqyUh0urBKCyE78xewC73oGfI0seMH5NeHMAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "workbenchNav",
  __ssrInlineRender: true,
  props: {
    borderStyle: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: []
    },
    isGray: {
      type: Boolean,
      default: false
    },
    isLimit: {
      //权限检查
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const cCreateRef = ref();
    const serviceRef = ref();
    const isShow = ref(true);
    const topUpRef = ref();
    ref();
    const routing = getRouting();
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    ref([]);
    const visible = ref(false);
    const modalShow = ref(false);
    const tenantName = ref("");
    const loading = ref(false);
    const isShowMenu = ref(false);
    ref(false);
    const info = ref({
      name: ""
    });
    const sPromptRef = ref();
    const firmParams = ref({});
    ref("");
    const versionsVisible = ref(false);
    const chooseIndex = ref(0);
    const equityList = ref([
      { name: "\u7535\u91CF\u793C\u5305", isSelect: true },
      { name: "\u673A\u5668\u4EBA", isSelect: true },
      { name: "\u77E5\u8BC6\u5E93\u6570", isSelect: true },
      { name: "\u77E5\u8BC6\u5E93\u5BB9\u91CF", isSelect: true },
      { name: "\u6570\u636E\u96C6\u5BB9\u91CF", isSelect: true },
      { name: "\u5E2D\u4F4D\u6570", isSelect: false }
    ]);
    const industryList = ref([]);
    const industryCode = ref([]);
    const openNames = ref([]);
    const onSelect = (record) => {
      if (proxy.$isLogin()) {
        if (props.isLimit && !firmParams.value.isPaidTeamFlag) {
          sPromptRef.value.showFn();
          return;
        }
        if (record.url) {
          router.push(record.url);
        }
      } else {
        tipsClick();
      }
    };
    const tipsClick = () => {
      if (!proxy.$isLogin()) {
        proxy.$Message.error("\u8BF7\u5148\u767B\u5F55\uFF01");
        router.push("/login");
      }
    };
    const toCreate = (item) => {
      if (item.robotType == "ROLE") {
        router.push("/ai/chat?code=" + item.robotCode);
        return;
      }
      if (item.robotType == "QUESTION_BANK") {
        cCreateRef.value.showFn(item.robotCode);
        return;
      }
      if (item.robotType == "CHAT" || item.robotType == "AI_ASSISTANT") {
        router.push("/ai/enterprise/train/talk?robotCode=" + item.robotCode);
        return;
      }
      router.push(proxy.$getTypeRoute(item.robotType));
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
    const toSubmit = () => {
      if (proxy.$isEmpty(tenantName.value)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u56E2\u961F/\u4F01\u4E1A\u540D\u79F0");
        return;
      }
      loading.value = true;
      let data = {
        loginCode: useCookie("authtoken").value.loginCode,
        tenantName: tenantName.value,
        industryCode: industryCode.value && industryCode.value.length > 0 ? industryCode.value[industryCode.value.length - 1] : ""
      };
      proxy.$api.teamAddTenant(data).then((res) => {
        proxy.$Message.success("\u5DF2\u521B\u5EFA");
        loading.value = false;
        modalShow.value = false;
        useCookie("authtoken").value = JSON.stringify(res.data);
        routing.getUserPoints(proxy);
      }).catch(() => {
        loading.value = false;
      });
    };
    const checkRoute = (url) => {
      let flag = false;
      if (router.currentRoute.value.href == url) {
        flag = true;
      }
      return flag;
    };
    routing.setTopNavList(proxy);
    watch(() => routing.firmParams, (iten) => {
      firmParams.value = JSON.parse(JSON.stringify(iten));
      equityList.value.forEach((item) => {
        item.isSelect = routing.firmParams.isPaidTeamFlag ? routing.firmParams.isPaidTeamFlag : false;
      });
    }, { immediate: true, deep: true });
    watch(() => versionsVisible.value, () => {
      if (versionsVisible.value) {
        chooseIndex.value = 0;
        isShow.value = false;
        setTimeout(() => {
          isShow.value = true;
        }, 100);
      }
    }, { immediate: true });
    watch(() => props.list, () => {
      openNames.value = [];
      props.list.forEach((item, i) => {
        openNames.value.push(item.name);
        if (i == Number(props.list.length - 1)) {
          isShowMenu.value = false;
          setTimeout(() => {
            isShowMenu.value = true;
          }, 10);
        }
      });
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Menu = resolveComponent("Menu");
      const _component_Submenu = resolveComponent("Submenu");
      const _component_MenuItem = resolveComponent("MenuItem");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Poptip = resolveComponent("Poptip");
      const _component_cModal = __nuxt_component_0$1;
      const _component_Input = resolveComponent("Input");
      const _component_Cascader = resolveComponent("Cascader");
      const _component_Button = resolveComponent("Button");
      const _component_topUp = __nuxt_component_2;
      const _component_sPrompt = __nuxt_component_1;
      const _component_cCreate = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["workbench-nav", unref(routing).isShowHis ? "nav-show" : "", props.isGray ? "isGray" : "workbench-nav"],
        style: __props.borderStyle
      }, _attrs))} data-v-51c8d4d6><div class="nav-logo" data-v-51c8d4d6><div class="isGray-header" data-v-51c8d4d6><img class="logo"${ssrRenderAttr("src", unref(routing).configuration.logo)} data-v-51c8d4d6><div class="header-right" data-v-51c8d4d6><div class="right-name" data-v-51c8d4d6>`);
      _push(ssrRenderComponent(_component_Tooltip, {
        content: unref(routing).configuration.companyShortName
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-hide" style="${ssrRenderStyle({ "width": "126px" })}" data-v-51c8d4d6${_scopeId}>${ssrInterpolate(unref(routing).configuration.companyShortName)}</div>`);
          } else {
            return [
              createVNode("div", {
                class: "text-hide",
                style: { "width": "126px" }
              }, toDisplayString(unref(routing).configuration.companyShortName), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="nav-content" data-v-51c8d4d6><div style="${ssrRenderStyle({ "padding": "0 16px" })}" data-v-51c8d4d6>`);
      if (isShowMenu.value) {
        _push(ssrRenderComponent(_component_Menu, {
          width: "auto",
          "open-names": openNames.value,
          class: "menuClass"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(props.list, (item) => {
                _push2(`<!--[-->`);
                if (item.children && item.children.length > 0) {
                  _push2(ssrRenderComponent(_component_Submenu, {
                    name: item.name
                  }, {
                    title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="${ssrRenderClass([checkRoute(item.url) ? "nav-active" : "", "nav-content-title"])}" data-v-51c8d4d6${_scopeId2}>`);
                        if (item.img) {
                          _push3(`<img${ssrRenderAttr("src", item.img)} data-v-51c8d4d6${_scopeId2}>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div data-v-51c8d4d6${_scopeId2}>${ssrInterpolate(item.title)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: ["nav-content-title", checkRoute(item.url) ? "nav-active" : ""],
                            onClick: ($event) => onSelect(item)
                          }, [
                            item.img ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: item.img
                            }, null, 8, ["src"])) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(item.title), 1)
                          ], 10, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<!--[-->`);
                        ssrRenderList(item.children, (iten) => {
                          _push3(`<!--[-->`);
                          if (iten.url == "/ai/enterprise/robot") {
                            _push3(`<!--[-->`);
                            if (!unref(routing).currentTean.personFlag) {
                              _push3(ssrRenderComponent(_component_MenuItem, {
                                onClick: ($event) => onSelect(iten),
                                name: iten.name
                              }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(`<div class="${ssrRenderClass([checkRoute(iten.url) ? "nav-active" : "", "nav-title"])}" data-v-51c8d4d6${_scopeId3}>`);
                                    if (iten.imgActive || iten.img) {
                                      _push4(`<img${ssrRenderAttr("src", checkRoute(iten.url) ? iten.imgActive : iten.img)} data-v-51c8d4d6${_scopeId3}>`);
                                    } else {
                                      _push4(`<!---->`);
                                    }
                                    _push4(`<div data-v-51c8d4d6${_scopeId3}>${ssrInterpolate(iten.title)}</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        class: ["nav-title", checkRoute(iten.url) ? "nav-active" : ""]
                                      }, [
                                        iten.imgActive || iten.img ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: checkRoute(iten.url) ? iten.imgActive : iten.img
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode("div", null, toDisplayString(iten.title), 1)
                                      ], 2)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            } else {
                              _push3(`<!---->`);
                            }
                            _push3(`<!--]-->`);
                          } else {
                            _push3(`<!--[-->`);
                            if (iten.type && iten.type == "sourceDisplay") {
                              _push3(`<!--[-->`);
                              if (iten.children && iten.children.length > 0) {
                                _push3(ssrRenderComponent(_component_Submenu, {
                                  name: iten.name
                                }, {
                                  title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                    if (_push4) {
                                      _push4(`<div class="nav-content-title" data-v-51c8d4d6${_scopeId3}><div style="${ssrRenderStyle({ "padding-left": "28px" })}" data-v-51c8d4d6${_scopeId3}>${ssrInterpolate(iten.title)}</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "nav-content-title" }, [
                                          createVNode("div", { style: { "padding-left": "28px" } }, toDisplayString(iten.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                    if (_push4) {
                                      _push4(`<!--[-->`);
                                      ssrRenderList(iten.children, (it) => {
                                        _push4(ssrRenderComponent(_component_MenuItem, {
                                          name: iten.name,
                                          onClick: ($event) => toCreate(it)
                                        }, {
                                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                            if (_push5) {
                                              _push5(`<div class="nav-title" data-v-51c8d4d6${_scopeId4}><div style="${ssrRenderStyle({ "padding-left": "5px" })}" data-v-51c8d4d6${_scopeId4}>${ssrInterpolate(it.title)}</div></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "nav-title" }, [
                                                  createVNode("div", { style: { "padding-left": "5px" } }, toDisplayString(it.title), 1)
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(iten.children, (it) => {
                                          return openBlock(), createBlock(_component_MenuItem, {
                                            name: iten.name,
                                            onClick: ($event) => toCreate(it)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "nav-title" }, [
                                                createVNode("div", { style: { "padding-left": "5px" } }, toDisplayString(it.title), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["name", "onClick"]);
                                        }), 256))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent3, _scopeId2));
                              } else {
                                _push3(`<!---->`);
                              }
                              _push3(`<!--]-->`);
                            } else {
                              _push3(ssrRenderComponent(_component_MenuItem, {
                                onClick: ($event) => onSelect(iten),
                                name: iten.name
                              }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(`<div class="${ssrRenderClass([checkRoute(iten.url) ? "nav-active" : "", "nav-title"])}" data-v-51c8d4d6${_scopeId3}>`);
                                    if (iten.imgActive || iten.img) {
                                      _push4(`<img${ssrRenderAttr("src", checkRoute(iten.url) ? iten.imgActive : iten.img)} data-v-51c8d4d6${_scopeId3}>`);
                                    } else {
                                      _push4(`<!---->`);
                                    }
                                    _push4(`<div data-v-51c8d4d6${_scopeId3}>${ssrInterpolate(iten.title)}</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        class: ["nav-title", checkRoute(iten.url) ? "nav-active" : ""]
                                      }, [
                                        iten.imgActive || iten.img ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: checkRoute(iten.url) ? iten.imgActive : iten.img
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode("div", null, toDisplayString(iten.title), 1)
                                      ], 2)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            }
                            _push3(`<!--]-->`);
                          }
                          _push3(`<!--]-->`);
                        });
                        _push3(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (iten) => {
                            return openBlock(), createBlock(Fragment, null, [
                              iten.url == "/ai/enterprise/robot" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                !unref(routing).currentTean.personFlag ? (openBlock(), createBlock(_component_MenuItem, {
                                  key: 0,
                                  onClick: ($event) => onSelect(iten),
                                  name: iten.name
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: ["nav-title", checkRoute(iten.url) ? "nav-active" : ""]
                                    }, [
                                      iten.imgActive || iten.img ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: checkRoute(iten.url) ? iten.imgActive : iten.img
                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                      createVNode("div", null, toDisplayString(iten.title), 1)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick", "name"])) : createCommentVNode("", true)
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                iten.type && iten.type == "sourceDisplay" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  iten.children && iten.children.length > 0 ? (openBlock(), createBlock(_component_Submenu, {
                                    key: 0,
                                    name: iten.name
                                  }, {
                                    title: withCtx(() => [
                                      createVNode("div", { class: "nav-content-title" }, [
                                        createVNode("div", { style: { "padding-left": "28px" } }, toDisplayString(iten.title), 1)
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(iten.children, (it) => {
                                        return openBlock(), createBlock(_component_MenuItem, {
                                          name: iten.name,
                                          onClick: ($event) => toCreate(it)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "nav-title" }, [
                                              createVNode("div", { style: { "padding-left": "5px" } }, toDisplayString(it.title), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["name", "onClick"]);
                                      }), 256))
                                    ]),
                                    _: 2
                                  }, 1032, ["name"])) : createCommentVNode("", true)
                                ], 64)) : (openBlock(), createBlock(_component_MenuItem, {
                                  key: 1,
                                  onClick: ($event) => onSelect(iten),
                                  name: iten.name
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: ["nav-title", checkRoute(iten.url) ? "nav-active" : ""]
                                    }, [
                                      iten.imgActive || iten.img ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: checkRoute(iten.url) ? iten.imgActive : iten.img
                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                      createVNode("div", null, toDisplayString(iten.title), 1)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick", "name"]))
                              ], 64))
                            ], 64);
                          }), 256))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!--[-->`);
                  if (item.url == "/ai/enterprise/employee") {
                    _push2(`<!--[-->`);
                    if (!unref(routing).currentTean.personFlag) {
                      _push2(ssrRenderComponent(_component_Submenu, {
                        name: item.name,
                        class: "oneSub"
                      }, {
                        title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div class="${ssrRenderClass([unref(router).currentRoute.value.path == item.url ? "nav-active" : "", "nav-content-title"])}" data-v-51c8d4d6${_scopeId2}>`);
                            if (item.img) {
                              _push3(`<img${ssrRenderAttr("src", item.img)} data-v-51c8d4d6${_scopeId2}>`);
                            } else {
                              _push3(`<!---->`);
                            }
                            _push3(`<div data-v-51c8d4d6${_scopeId2}>${ssrInterpolate(item.title)}</div></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: ["nav-content-title", unref(router).currentRoute.value.path == item.url ? "nav-active" : ""],
                                onClick: ($event) => onSelect(item)
                              }, [
                                item.img ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: item.img
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode("div", null, toDisplayString(item.title), 1)
                              ], 10, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!--[-->`);
                    if (item.type == "recommend") {
                      _push2(`<!--[-->`);
                      if (item.children && item.children.length > 0) {
                        _push2(ssrRenderComponent(_component_Submenu, {
                          name: item.name,
                          class: "oneSub"
                        }, {
                          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                            if (_push3) {
                              _push3(`<div class="${ssrRenderClass([unref(router).currentRoute.value.path == item.url ? "nav-active" : "", "nav-content-title"])}" data-v-51c8d4d6${_scopeId2}>`);
                              if (item.img) {
                                _push3(`<img${ssrRenderAttr("src", item.img)} data-v-51c8d4d6${_scopeId2}>`);
                              } else {
                                _push3(`<!---->`);
                              }
                              _push3(`<div data-v-51c8d4d6${_scopeId2}>${ssrInterpolate(item.title)}</div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: ["nav-content-title", unref(router).currentRoute.value.path == item.url ? "nav-active" : ""],
                                  onClick: ($event) => onSelect(item)
                                }, [
                                  item.img ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: item.img
                                  }, null, 8, ["src"])) : createCommentVNode("", true),
                                  createVNode("div", null, toDisplayString(item.title), 1)
                                ], 10, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`<!--]-->`);
                    } else {
                      _push2(ssrRenderComponent(_component_Submenu, {
                        name: item.name,
                        class: "oneSub"
                      }, {
                        title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div class="${ssrRenderClass([unref(router).currentRoute.value.path == item.url ? "nav-active" : "", "nav-content-title"])}" data-v-51c8d4d6${_scopeId2}>`);
                            if (item.img) {
                              _push3(`<img${ssrRenderAttr("src", item.img)} data-v-51c8d4d6${_scopeId2}>`);
                            } else {
                              _push3(`<!---->`);
                            }
                            _push3(`<div data-v-51c8d4d6${_scopeId2}>${ssrInterpolate(item.title)}</div></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: ["nav-content-title", unref(router).currentRoute.value.path == item.url ? "nav-active" : ""],
                                onClick: ($event) => onSelect(item)
                              }, [
                                item.img ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: item.img
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode("div", null, toDisplayString(item.title), 1)
                              ], 10, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    }
                    _push2(`<!--]-->`);
                  }
                  _push2(`<!--]-->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(props.list, (item) => {
                  return openBlock(), createBlock(Fragment, null, [
                    item.children && item.children.length > 0 ? (openBlock(), createBlock(_component_Submenu, {
                      key: 0,
                      name: item.name
                    }, {
                      title: withCtx(() => [
                        createVNode("div", {
                          class: ["nav-content-title", checkRoute(item.url) ? "nav-active" : ""],
                          onClick: ($event) => onSelect(item)
                        }, [
                          item.img ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: item.img
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("div", null, toDisplayString(item.title), 1)
                        ], 10, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (iten) => {
                          return openBlock(), createBlock(Fragment, null, [
                            iten.url == "/ai/enterprise/robot" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              !unref(routing).currentTean.personFlag ? (openBlock(), createBlock(_component_MenuItem, {
                                key: 0,
                                onClick: ($event) => onSelect(iten),
                                name: iten.name
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["nav-title", checkRoute(iten.url) ? "nav-active" : ""]
                                  }, [
                                    iten.imgActive || iten.img ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: checkRoute(iten.url) ? iten.imgActive : iten.img
                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                    createVNode("div", null, toDisplayString(iten.title), 1)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["onClick", "name"])) : createCommentVNode("", true)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              iten.type && iten.type == "sourceDisplay" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                iten.children && iten.children.length > 0 ? (openBlock(), createBlock(_component_Submenu, {
                                  key: 0,
                                  name: iten.name
                                }, {
                                  title: withCtx(() => [
                                    createVNode("div", { class: "nav-content-title" }, [
                                      createVNode("div", { style: { "padding-left": "28px" } }, toDisplayString(iten.title), 1)
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(iten.children, (it) => {
                                      return openBlock(), createBlock(_component_MenuItem, {
                                        name: iten.name,
                                        onClick: ($event) => toCreate(it)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "nav-title" }, [
                                            createVNode("div", { style: { "padding-left": "5px" } }, toDisplayString(it.title), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["name", "onClick"]);
                                    }), 256))
                                  ]),
                                  _: 2
                                }, 1032, ["name"])) : createCommentVNode("", true)
                              ], 64)) : (openBlock(), createBlock(_component_MenuItem, {
                                key: 1,
                                onClick: ($event) => onSelect(iten),
                                name: iten.name
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["nav-title", checkRoute(iten.url) ? "nav-active" : ""]
                                  }, [
                                    iten.imgActive || iten.img ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: checkRoute(iten.url) ? iten.imgActive : iten.img
                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                    createVNode("div", null, toDisplayString(iten.title), 1)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["onClick", "name"]))
                            ], 64))
                          ], 64);
                        }), 256))
                      ]),
                      _: 2
                    }, 1032, ["name"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      item.url == "/ai/enterprise/employee" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        !unref(routing).currentTean.personFlag ? (openBlock(), createBlock(_component_Submenu, {
                          key: 0,
                          name: item.name,
                          class: "oneSub"
                        }, {
                          title: withCtx(() => [
                            createVNode("div", {
                              class: ["nav-content-title", unref(router).currentRoute.value.path == item.url ? "nav-active" : ""],
                              onClick: ($event) => onSelect(item)
                            }, [
                              item.img ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: item.img
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(item.title), 1)
                            ], 10, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["name"])) : createCommentVNode("", true)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        item.type == "recommend" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          item.children && item.children.length > 0 ? (openBlock(), createBlock(_component_Submenu, {
                            key: 0,
                            name: item.name,
                            class: "oneSub"
                          }, {
                            title: withCtx(() => [
                              createVNode("div", {
                                class: ["nav-content-title", unref(router).currentRoute.value.path == item.url ? "nav-active" : ""],
                                onClick: ($event) => onSelect(item)
                              }, [
                                item.img ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: item.img
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode("div", null, toDisplayString(item.title), 1)
                              ], 10, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["name"])) : createCommentVNode("", true)
                        ], 64)) : (openBlock(), createBlock(_component_Submenu, {
                          key: 1,
                          name: item.name,
                          class: "oneSub"
                        }, {
                          title: withCtx(() => [
                            createVNode("div", {
                              class: ["nav-content-title", unref(router).currentRoute.value.path == item.url ? "nav-active" : ""],
                              onClick: ($event) => onSelect(item)
                            }, [
                              item.img ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: item.img
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(item.title), 1)
                            ], 10, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["name"]))
                      ], 64))
                    ], 64))
                  ], 64);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="nav-bottom" data-v-51c8d4d6><div class="bottom-division" data-v-51c8d4d6></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Poptip, {
              disabled: _ctx.$isLogin() ? false : true,
              "transfer-class-name": "versions",
              trigger: "hover",
              modelValue: versionsVisible.value,
              "onUpdate:modelValue": ($event) => versionsVisible.value = $event,
              transfer: "",
              placement: "left-end"
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bottom-versions" data-v-51c8d4d6${_scopeId2}><div class="versions-left" data-v-51c8d4d6${_scopeId2}><img class="gem"${ssrRenderAttr("src", _imports_0)} data-v-51c8d4d6${_scopeId2}><div class="versions-name text-hide" data-v-51c8d4d6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Tooltip, {
                          transfer: "",
                          content: info.value.name ? info.value.name : "\u514D\u8D39\u7248"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-hide" style="${ssrRenderStyle({ "width": "90px", "display": "inline-block", "padding-top": "8px" })}" data-v-51c8d4d6${_scopeId4}>${ssrInterpolate(info.value.name ? info.value.name : "\u514D\u8D39\u7248")}</span>`);
                            } else {
                              return [
                                createVNode("span", {
                                  class: "text-hide",
                                  onClick: tipsClick,
                                  style: { "width": "90px", "display": "inline-block", "padding-top": "8px" }
                                }, toDisplayString(info.value.name ? info.value.name : "\u514D\u8D39\u7248"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Tooltip, {
                            transfer: "",
                            content: info.value.name ? info.value.name : "\u514D\u8D39\u7248"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "text-hide",
                                onClick: tipsClick,
                                style: { "width": "90px", "display": "inline-block", "padding-top": "8px" }
                              }, toDisplayString(info.value.name ? info.value.name : "\u514D\u8D39\u7248"), 1)
                            ]),
                            _: 1
                          }, 8, ["content"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="versions-right" data-v-51c8d4d6${_scopeId2}><img class="electric"${ssrRenderAttr("src", _imports_1)} data-v-51c8d4d6${_scopeId2}><div class="electric-num text-hide" data-v-51c8d4d6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Tooltip, {
                          transfer: "",
                          content: unref(routing).electric
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-hide" style="${ssrRenderStyle({ "max-width": "57px", "display": "inline-block", "padding-top": "8px" })}" data-v-51c8d4d6${_scopeId4}>${ssrInterpolate(unref(routing).electric)}</span>`);
                            } else {
                              return [
                                createVNode("span", {
                                  class: "text-hide",
                                  style: { "max-width": "57px", "display": "inline-block", "padding-top": "8px" }
                                }, toDisplayString(unref(routing).electric), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Tooltip, {
                            transfer: "",
                            content: unref(routing).electric
                          }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "text-hide",
                                style: { "max-width": "57px", "display": "inline-block", "padding-top": "8px" }
                              }, toDisplayString(unref(routing).electric), 1)
                            ]),
                            _: 1
                          }, 8, ["content"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bottom-versions" }, [
                      createVNode("div", { class: "versions-left" }, [
                        createVNode("img", {
                          class: "gem",
                          src: _imports_0
                        }),
                        createVNode("div", { class: "versions-name text-hide" }, [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_Tooltip, {
                                transfer: "",
                                content: info.value.name ? info.value.name : "\u514D\u8D39\u7248"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "text-hide",
                                    onClick: tipsClick,
                                    style: { "width": "90px", "display": "inline-block", "padding-top": "8px" }
                                  }, toDisplayString(info.value.name ? info.value.name : "\u514D\u8D39\u7248"), 1)
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "versions-right" }, [
                        createVNode("img", {
                          class: "electric",
                          src: _imports_1
                        }),
                        createVNode("div", { class: "electric-num text-hide" }, [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_Tooltip, {
                                transfer: "",
                                content: unref(routing).electric
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "text-hide",
                                    style: { "max-width": "57px", "display": "inline-block", "padding-top": "8px" }
                                  }, toDisplayString(unref(routing).electric), 1)
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Poptip, {
                disabled: _ctx.$isLogin() ? false : true,
                "transfer-class-name": "versions",
                trigger: "hover",
                modelValue: versionsVisible.value,
                "onUpdate:modelValue": ($event) => versionsVisible.value = $event,
                transfer: "",
                placement: "left-end"
              }, {
                content: withCtx(() => []),
                default: withCtx(() => [
                  createVNode("div", { class: "bottom-versions" }, [
                    createVNode("div", { class: "versions-left" }, [
                      createVNode("img", {
                        class: "gem",
                        src: _imports_0
                      }),
                      createVNode("div", { class: "versions-name text-hide" }, [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Tooltip, {
                              transfer: "",
                              content: info.value.name ? info.value.name : "\u514D\u8D39\u7248"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "text-hide",
                                  onClick: tipsClick,
                                  style: { "width": "90px", "display": "inline-block", "padding-top": "8px" }
                                }, toDisplayString(info.value.name ? info.value.name : "\u514D\u8D39\u7248"), 1)
                              ]),
                              _: 1
                            }, 8, ["content"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "versions-right" }, [
                      createVNode("img", {
                        class: "electric",
                        src: _imports_1
                      }),
                      createVNode("div", { class: "electric-num text-hide" }, [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Tooltip, {
                              transfer: "",
                              content: unref(routing).electric
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "text-hide",
                                  style: { "max-width": "57px", "display": "inline-block", "padding-top": "8px" }
                                }, toDisplayString(unref(routing).electric), 1)
                              ]),
                              _: 1
                            }, 8, ["content"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Poptip, {
              "transfer-class-name": "popClass",
              disabled: _ctx.$isLogin() ? false : true,
              trigger: "hover",
              modelValue: visible.value,
              "onUpdate:modelValue": ($event) => visible.value = $event,
              transfer: "",
              placement: "left-end"
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="popClass-content" data-v-51c8d4d6${_scopeId2}><div class="team-bottom" data-v-51c8d4d6${_scopeId2}><div class="bottom-item" data-v-51c8d4d6${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} data-v-51c8d4d6${_scopeId2}><div data-v-51c8d4d6${_scopeId2}>\u8D26\u53F7\u4FE1\u606F</div></div><div class="bottom-item" data-v-51c8d4d6${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} data-v-51c8d4d6${_scopeId2}><div data-v-51c8d4d6${_scopeId2}>\u9000\u51FA\u767B\u5F55</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "popClass-content" }, [
                      createVNode("div", { class: "team-bottom" }, [
                        createVNode("div", {
                          class: "bottom-item",
                          onClick: toAccount
                        }, [
                          createVNode("img", { src: _imports_4 }),
                          createVNode("div", null, "\u8D26\u53F7\u4FE1\u606F")
                        ]),
                        createVNode("div", {
                          class: "bottom-item",
                          onClick: onLogOut
                        }, [
                          createVNode("img", { src: _imports_5 }),
                          createVNode("div", null, "\u9000\u51FA\u767B\u5F55")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bottom-user" data-v-51c8d4d6${_scopeId2}><div class="logo" data-v-51c8d4d6${_scopeId2}>`);
                  if (!unref(routing).userLogo) {
                    _push3(`<img class="pic"${ssrRenderAttr("src", _imports_1$1)} data-v-51c8d4d6${_scopeId2}>`);
                  } else {
                    _push3(`<img class="pic"${ssrRenderAttr("src", unref(routing).userLogo)} data-v-51c8d4d6${_scopeId2}>`);
                  }
                  _push3(`</div><div class="name" data-v-51c8d4d6${_scopeId2}><div class="name-title text-hide" data-v-51c8d4d6${_scopeId2}>${ssrInterpolate(_ctx.$isLogin() ? unref(routing).nickName : "\u672A\u767B\u5F55")}</div></div>`);
                  if (_ctx.$isLogin()) {
                    _push3(`<div class="swicth" data-v-51c8d4d6${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} data-v-51c8d4d6${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bottom-user",
                      onClick: tipsClick
                    }, [
                      createVNode("div", { class: "logo" }, [
                        !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                          key: 0,
                          class: "pic",
                          src: _imports_1$1
                        })) : (openBlock(), createBlock("img", {
                          key: 1,
                          class: "pic",
                          src: unref(routing).userLogo
                        }, null, 8, ["src"]))
                      ]),
                      createVNode("div", { class: "name" }, [
                        createVNode("div", { class: "name-title text-hide" }, toDisplayString(_ctx.$isLogin() ? unref(routing).nickName : "\u672A\u767B\u5F55"), 1)
                      ]),
                      _ctx.$isLogin() ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "swicth"
                      }, [
                        createVNode("img", { src: _imports_3 })
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Poptip, {
                "transfer-class-name": "popClass",
                disabled: _ctx.$isLogin() ? false : true,
                trigger: "hover",
                modelValue: visible.value,
                "onUpdate:modelValue": ($event) => visible.value = $event,
                transfer: "",
                placement: "left-end"
              }, {
                content: withCtx(() => [
                  createVNode("div", { class: "popClass-content" }, [
                    createVNode("div", { class: "team-bottom" }, [
                      createVNode("div", {
                        class: "bottom-item",
                        onClick: toAccount
                      }, [
                        createVNode("img", { src: _imports_4 }),
                        createVNode("div", null, "\u8D26\u53F7\u4FE1\u606F")
                      ]),
                      createVNode("div", {
                        class: "bottom-item",
                        onClick: onLogOut
                      }, [
                        createVNode("img", { src: _imports_5 }),
                        createVNode("div", null, "\u9000\u51FA\u767B\u5F55")
                      ])
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bottom-user",
                    onClick: tipsClick
                  }, [
                    createVNode("div", { class: "logo" }, [
                      !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "pic",
                        src: _imports_1$1
                      })) : (openBlock(), createBlock("img", {
                        key: 1,
                        class: "pic",
                        src: unref(routing).userLogo
                      }, null, 8, ["src"]))
                    ]),
                    createVNode("div", { class: "name" }, [
                      createVNode("div", { class: "name-title text-hide" }, toDisplayString(_ctx.$isLogin() ? unref(routing).nickName : "\u672A\u767B\u5F55"), 1)
                    ]),
                    _ctx.$isLogin() ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "swicth"
                    }, [
                      createVNode("img", { src: _imports_3 })
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-51c8d4d6${_scopeId}>\u521B\u5EFA\u56E2\u961F/\u4F01\u4E1A</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u521B\u5EFA\u56E2\u961F/\u4F01\u4E1A")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => modalShow.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              loading: loading.value,
              onClick: toSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u5B9A`);
                } else {
                  return [
                    createTextVNode("\u786E\u5B9A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                onClick: ($event) => modalShow.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode("\u53D6\u6D88")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_Button, {
                type: "primary",
                loading: loading.value,
                onClick: toSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-51c8d4d6${_scopeId}>\u4F01\u4E1A\u540D\u79F0</div>`);
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: tenantName.value,
              "onUpdate:modelValue": ($event) => tenantName.value = $event,
              placeholder: "\u7ED9\u60A8\u7684\u56E2\u961F/\u4F01\u4E1A\u53D6\u4E2A\u540D\u79F0"
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "margin-top": "10px" })}" data-v-51c8d4d6${_scopeId}>\u6240\u5C5E\u884C\u4E1A</div>`);
            _push2(ssrRenderComponent(_component_Cascader, {
              data: industryList.value,
              transfer: true,
              modelValue: industryCode.value,
              "onUpdate:modelValue": ($event) => industryCode.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, "\u4F01\u4E1A\u540D\u79F0"),
              createVNode(_component_Input, {
                modelValue: tenantName.value,
                "onUpdate:modelValue": ($event) => tenantName.value = $event,
                placeholder: "\u7ED9\u60A8\u7684\u56E2\u961F/\u4F01\u4E1A\u53D6\u4E2A\u540D\u79F0"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { style: { "margin-top": "10px" } }, "\u6240\u5C5E\u884C\u4E1A"),
              createVNode(_component_Cascader, {
                data: industryList.value,
                transfer: true,
                modelValue: industryCode.value,
                "onUpdate:modelValue": ($event) => industryCode.value = $event
              }, null, 8, ["data", "modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_topUp, {
        ref_key: "topUpRef",
        ref: topUpRef
      }, null, _parent));
      _push(ssrRenderComponent(service, {
        ref_key: "serviceRef",
        ref: serviceRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_sPrompt, {
        ref_key: "sPromptRef",
        ref: sPromptRef,
        icoShow: true,
        content: "\u8BF7\u786E\u8BA4\u8D2D\u4E70\u5F00\u901A\u4F01\u4E1A\u56E2\u961F\u670D\u52A1",
        onOk: ($event) => unref(router).push("/member")
      }, null, _parent));
      _push(ssrRenderComponent(_component_cCreate, {
        ref_key: "cCreateRef",
        ref: cCreateRef
      }, null, _parent));
      _push(ssrRenderComponent(AccountModel, {
        ref_key: "accountRed",
        ref: accountRed
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/workbenchNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51c8d4d6"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=workbenchNav-0b9ac1f2.mjs.map
