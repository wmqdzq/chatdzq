import { a as _export_sfc, f as useI18n, g as getRouting, _ as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, onUnmounted, watch, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './clock-f02ce9ea.mjs';
import { _ as _imports_1 } from './icon14-9b74ca74.mjs';
import { _ as _imports_2 } from './delete-79bda725.mjs';
import { _ as _imports_5, b as _imports_6, a as _imports_7 } from './search-f6a02dc8.mjs';
import { _ as _imports_12 } from './switch-59f92d8c.mjs';
import { useRouter } from 'vue-router';
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

const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAACYdJREFUaEPtmHtwVOUZxp9z2cvZ7CV7yWUTyJIYEgwiN6NUREHsIILDZQwWpXZ6GR2r7VCRKMUOmarQcTrOIGInig1UGQtOsS3qgNwCiDECIeSyCbknu5vds/f7nnN2zzmd0HGmVjqQS0FnOLP/nfne7/m973ve5/uWwPf8Ib7n+nET4EZX8GYFblZgnBm42ULjTOC3lldV7afyZ3tMDJVto9SaXEIm06lwuPdC/dBQfX1N5r8XfCcqcKKuTm1Ppucg27qWyitbFOLp4nBCYAiSIhilAn6Hc7DlbPNrJ3fn1QJrxP+EuKEAtbW1Co1GUZmlz3me1uiXCKA0jpiM1qgOKVKHQrMOZrWMjha7fL6pdU/7gLsap7f5vgsAxN66ulI9z280egM/ItmALpJtxFDJLYgraHC0AUlDKSwFVpB8HGdON+NsU8f7rJOtTp7e6r6hAHV1deocb+Ah0uH4Q09re2mjJBGDbjcWZjJ4aPFi9Dy4FMZJVmTpNVCazBgOK/DegcZMw9n2d/zu5ItorIneMICdO3fmWwnqacrnf/6ivUvTodWh5WIzHAN9qJRFbLjzLqgfWwv9XZXQMzRkSkT9pRDqDnaH2tq6Xo9/1r4N+PDGfAO7du2y5eTkbTYEQj9r272b+jSvAPb2drDDDgiJKO63WrFl1WoYVjyMnNkzoVbQcHuGsfdIEz6oH2p3OH0vC2de33dDptCOHTuKc3Pza4zm3B93HjlCnPz4YzQIIgKsC+lUHEpJwmMGA15ZvQrpDc+Byc9BNBZGe2cHjtZ/hYa24U9aXNIm4fzu1usO8KtNW3PKb5nydK41rybE+gnVmZNw1x/DVp8f8WQMeknEGpUaG6bdCubJnwIrlyMWj8DhcMHecQltrfa00+mpZYe4F1taPktcV4BXTKbJBWuf2Gx5tvrJ7uYWwu9lQXbaseDUYVBBFgGfDxUygcKSEkSeeQrSymWIJ+PweFj0DzrQ2dmFvr7+Bq83sKVx0aJjqKmRrguADJAf5WbPcBsLd/QufmSBueqX6O/uBedsRpZChFZIodA9gHwpg4KKcpjunQ8m34JoJASvzwfXMIv+/gF0dnbHnI7hna40/3tnQ0PqSq4/LiOrAcgHc7Ny9CJ5d4jj+kNpIqOg6cmMSvFwWJIevVh2hynxwp/Qx0bgiyYgC3HYKC/mlOaiMN+MghwTzAYNCFFAOByAzx8Ay/ovt09PTy+GHK5PXWxoY8+FRvv/OrKMGUAGiIH8fJuCRl1BSlgo8jyEdBq8JMFJEjiqNWL/zGXIW/YTeKMpiAQJNaOBhRFxu9aPH1QUwmrJBiVnEA6FEAiG4AuEMDzsxuCgA4MDjk63x7u1bfnSvVdqna+Bxgzgs1mshES9xXDCSk08AUkQwAHwEQTOUQp8arKh6e61IKbOBkgaTJYGJoMehbkmTLdEUKk9B5OuAO4A4AukEAxF4GF9cLpcGBh0hj1ub62Xi7/MtrR868Mdt5ENFhmMSlrxklKSnjMlk5A4HoIoIyICfRKB07QG71png1pQBUXuZGg0DCxGA4ryzbDlGaFTSmBirSjMnIY/XghvMI1AMAiPmx1pG8Hj8e+LJsIb+9va2Kuddkddgf4pU9R5+cIKWit9EE0JhDmdgJjikUwB7hRg5wick7JxoOSHyFq0ChqtHjlGPWwjPW/RIcc7AMXZz3Eqx4ZY3AuLNABGqcbwcABuDyt6vcGDoWBkw1B3a9/VxI+8HxXAyHRJrJg0XTWJPEkqk0akBBCpOISEhFAM6I0BbSEKx/li9M9eg0l33QeTQQerWQeDEtB0nsfUA3XwUhrsnbsEIT4NPuQBE+sFleEywVDkk0givNHZ0dF9LeJHDRD5+SSTwiBuZ27FOpFPghJkyIkEuJiYjkTQ1BWn3j4RsM35SrnwGeOc+1FUPg16FQkx6gd3/jimHfsYpNqInRX3ISaRSHIcUokU0lFPWB0f2G8yZ21rrq8fuFbxowKQF4LmlmTfo56LY6BkUo5nQKQVQDwjZ+KcfV+DZc1udvb8ZDz+RzK3VL907ZOg5DT8vXZ4j/8Tt/scuG3RElR3RRCnVEhnRHAcDy6ZHOQSie3pIP822G877dVgrrmFfO9adIxefpa5Uy6TeNGViUkEDSqLTElyyiteuOeFgpa0SnGKM03RiZEwZs6dD2M6iUj9IdzmdWGBdTI250/HEFSQSAo0l4I16uuoiPhq3vd1fggQ8tXETriRjQSUq0DFVummCsWGzV/6yx5b/1YBackEEe6yo8gfRFEyhUq1Cry5AK9pCpDHJTEr5seSVCB+ezr2nihK66cDwljEj6qFrrSBrxo6dbntCfWSOZvpbLM1ydH4oimJw4dM6D96BPrOdiyqUMrTKrTYdUAkyjM8ZskCboEEBvgiIuKZMqB5rOLHBSDXgA4Xaxdoyy1H6ZmPkIAZkIJgXRG8s/kEuj/qQWU2Ka8w4mwXTe/RdvFvmgFCC0AJgJJwmJTxuB4IXFcAuRaKYRolTAS56iLNPmbePCvM8wCiHDF/B46+/SW+rD2J8mKFuHSF8os9B8kN6lbigZWpyKtqGYQCAD0yjwkcioh4fDIQvL4AVaACpZhKZ6FGe4/uUWrWPEBRDgmV6Gt0Ys+6LZixWJdZVm04seUX1KYsX3rL0pB3eUmUI0aE0yPmQ1w2oM8gYp0O+Ma/DKOFueYp9HVguQpK9jblUvNc1d+pubNAaC0AVYrAsBX/2PQOCqfz8uLfVJxjdx1Zl27JzDd2SH+Wu2TIMYD8d+ZHxCdlGfvSEtabgW9c0v/vANG1sMgmcqfmYWYNNW0GCEspBDkLfV+5EO5ul+94iOwJneN/7cs4jxfXYznVjb8JLYA40iji5V9YBvawEl6aDsRHK3jcF5rkK0yhmIXjTKWxjCoqhiSKSPEqeL0+TLb57Y6/eFeX/A6XZBlk5ik8IHuJw4kmGZIHIES4SBnbfRLemArw4xU/6ik0cgeIVaNMmU03ooA2UHoJkqgUeXuSJYuZU9GOxFsF23B6JPD+/aBWnaEfIPzSoXSTJAtDsKc4/DZPxEECGJNpjdvILpvWvfQ8pU35uRQhZAqZoUAjvyGkwMWMDdTM9bj09SaO/WCMXdRq9SD5ZvyC+Fdfu/Tq1BScE5H1Md8H2iugJIsxg54EZUQFl4oAP2M7rnhm734DKm1YWYohMid/F3dyIrM+ZoCJzt5ExBv1GJ2ITScyxk2AiczmWGLdrMBYsjaRa25WYCKzOZZY3/sK/Au23lptwyOZ+gAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAQxJREFUWEftlDEOgkAQRWc2G/AIll7EwsLExsIj0JAQLuElCHQcwUIT7fYeVJQeQSAQswSMMcDubGMzdGR2+C9vZkH484N/zgcGYANsgA3MGkiSZC2lVIgo27bdR1FUUn5aaZpuhBB33d80zTaO4+dU/yxAlmUHRLwPTWXXdTtbiCFcAcBG9yPiMQzDGwlAKSWLorgCwIEC8RsOAA/P805BELxIAPpwnueruq4vthDU8N6Oaa62EC7hVgA2JlzDrQGWIHRNCPFZONPMf40bR/DdMDWOod5vOzWcZGAEmYAYS4vbPrdrJAMLEE7hTga+IaqqOut33/fPc/fcdMucDJg+SqkzABtgA2yADbwB27CYIaPzKQIAAAAASUVORK5CYII=";
const _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABAZJREFUWEftmF9oW1Ucxz+/k9AmaZpU2MPACiv0YQWFFSZMcJ3BvYgOKjo72UtFB8LmlmBEwZcKe1CcS6qIDB3zYQ+N7sFBhMEmaakPgxW2F7FgYQN9qFhZW7oktb336E2aLn/uzZ+bDId4Hu/9nd/vc7/n/H6/c67wkA95yPn4H7DdFfqPKzihvYRzJxBZIuq/6FatzNFsv8cwEoYp5yLfBK+V+2lPwUQ2ikhiy+F+ov4fnSAzo3f7PN1q3DBJR74NL5TsZl9ZO6iVvoCm35DNgcjUI3c6B5jM/Qr0Fx3qT4gG4o6A43f7PDnvDWAQWNDonxTqUY3ea80RZG5/Kvhk9Xz3CiZzTwOz2w6FeU75h+otc2ZsZZ8HZc3xVttpmDyQ6o12EDD7Ici7FQ49aoi3uufrQc6MrZwW1Pu1gPrcgVTozQ4C5m4Duyocav0OscCZuioeXhn0KPWLjc2C8XtwKDItm+3vwcRfexDjpk2QOaL+mn1Ubpd5dXWHx5Q/7D9CkiOpYKwDgLnTCDXLVMwVBoj5KzKxPGAha0VfLXu2vLUng4VnwuGRqd5LpfetJ8kF7WM1fxvNTlsVtPkBsZ4Jp2WeGVs9I8jbGq6bmLFIKnzdsrUSSMELAksjqXDSPWBl7bPhkGWU+QQnA7/ZQc4cWZ0G0uZib7J6v9nZt6bg2Xt78ahZNL56iQAyTbj7OV6TfH27xm+bB5xcfxzMq45LW1Mf5Aqh7hfbhWwMWOi32XHEkwBd3MjNjzm0cYxY8FbzUyotnQE/X9vJpncU9Ck0u90GQMiDpGHzPKGe6VYVrQRM5HaBfhklL6GxemRNS3INWqwhy6C/Q5uX6Qpc47isNfInWEptqDioZ/+ZvKfRhI69t5Q1+QG4RMz/tZNfIZn7Cni9Y4HdONLGsNM+FRrWNTcRW5hTVHLIqfsU96BV35Q6uKWkdV578ENkHm1+j/ZeJNblmOW1Wfxpdh8GRxA5CuzoKGkR6jLaO1UPqjymc5kp9Nz1ZzD1CYTn3YNamWueb6SUc5I0EzlxbxSlvmi6i5R8ilxBzGNOfbmZ0I07ScmLVSOFTM0h1SmK1pOs+ONMVB5Am4FqbontPJ3ND6K4AbqvfiBJE/UdahXGzr55Be8r+QbCl47BhUW8xjDHg4v/DqB1eOjL/7x1faxlaOJe0gp46wpa3hPZOCIf1wSyiu7GxmPEQ0utQNSzdQlYSBjrVlc1Orf3tguB6y9N5qy/BIW/AveHeYhoT9q1T5uJ7hS0W2YrOUK+gVbPe40+pg3A6mXWHxENvNcoYKvv3QNakZL5m9tnSKWf4mSgcIXs5GgPcDub5RZR33AnwdpPkpKHz9Z382fXQrstzenj2lPwQUhW5fNvoco/OHdKsXUAAAAASUVORK5CYII=";
const _imports_9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAzhJREFUWEftWE2ITmEYPacsLCwsLBSKsjBFmaIoSrERU4RSNgploZiMKBvKgpCxkhCLWVjMgqKUkSkWypTZyJQpioUyCwsLC3XcU++t+925f9/33pkkT3199d33Pu95z/M853nej/jLjX85PvwHGBuhf5tBSQsAnEg+MyRHemVL0nIANwDcJjmW9RPFoKRTwbF9biX5ugykpMUADgN4QnI6XSdpB4D7AAxyFcnPbQL8Ehzb53WSQzUA3wJYDcAA3wNYlgDeEN6ZILkx/37PDEraAuBVxuEUyb6qMEvaFN5xauTtJklHpMNiAF4GcDbnr4/kVA3ISwDOF6xx/h1vE+AnACtzDs+QvFYD0CH+WLDGYfcBf0fnoKT1AN4VbFKYR9l1kpYA+F5yiGGSg20ALAuTfc+qxBxAV+3zzG8/ADgnF4XfDpAcTZ93nYOSFgJweJeWsHCR5IWKanYKnAbwBsAgSX8jFNDuoKnDMQCz2leEw4ysI/m16KGkcWshAIezI9+K1nfFoCRrlqXFLFaZQewk+atmXe3jxgAlrQ25Uxba/GbPAOyNBVkLMPRbtyj3yjSRa08eFkwAOEZysukLjXVQkpnaA+AkgDW9bgDAYXbO3QMw3i2jHQxKsvDuB7Av9MiilhSBFS6gRwAeAxhLevfPOmcMTLnJb09etgDPl5nZFwBGST4o29QA7wI4Ml+oSvbpL8tTA6zTtbnGbibdgzvmwA6hDvrmFmQm3cznwzz1PE32G6mq8lkyE1rOwWTiOATAjb1NMygXyMOm0lOqg6Hnbgt3jl0RKF25lphKpkqLpMnGkqyHtyoGhDI37iYW6sK+3GTv2k6SOgka+bJgSC3b5yaAoSYDQRXQxgDtRJILyBcf39CqzDe3gSYM1a3pCmAAeTS5jd2pcPwtKQTrmr+jrReAbn8fKuSo9l7SDequAQYW3RqvFmxk0V1BcqYbEK3lYK5gPPbnrbXcSx33xGBg0cWS/iuQ+hsg6dGqNYsBmA+zi8I3uugxP3u6GICeHbNhvpKAO9cadcFRzwBDmH15T2fIzekVsk2QsQDTME+S7G8TWHSRZCra95Xp2JZWdrgoBueCsbzPP28DBDhusUX9AAAAAElFTkSuQmCC";
const _imports_10 = "data:image/png;base64,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";
const _imports_11 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    ref(null);
    const groupListState = ref(false);
    const routing = getRouting();
    const content = ref("");
    useRouter();
    const { proxy } = getCurrentInstance();
    const robotInfo = ref();
    const promptList = ref([]);
    ref(1);
    const groupList = ref([]);
    const loadMore = ref(true);
    const pageNo = ref(1);
    const isFocus = ref(false);
    const params = ref({
      content: "",
      searchDepth: "THOROUGH",
      searchScope: "WHOLE_NETWORK",
      learningScope: "",
      outputLanguage: "CN",
      extendedReadingFlag: true
    });
    const searchScope = ref([{
      value: t("aiSearch.\u5168\u7F51"),
      key: "WHOLE_NETWORK"
    }, {
      value: t("aiSearch.\u5B66\u672F"),
      key: "LEARNING"
    }, {
      value: t("aiSearch.\u64AD\u5BA2"),
      key: "XIMALAYA"
    }]);
    const language = ref([{
      value: "\u4E2D\u6587",
      key: "CN"
    }, {
      value: "English",
      key: "EN"
    }]);
    const onInitGroup = () => {
      groupListState.value = false;
    };
    const toGetHis = () => {
      groupListState.value = true;
      onGroupList();
    };
    const onGroupList = () => {
      if (proxy.$isLogin()) {
        let robotData = {
          robotCode: robotInfo.value.code,
          type: robotInfo.value.type,
          pageNo: pageNo.value,
          pageSize: 20
        };
        if (loadMore.value && !proxy.$isEmpty(robotInfo.value.code)) {
          proxy.$api.queryAiRecordGroupPageList(robotData).then((res) => {
            let arr = res.data;
            if (pageNo.value > 1) {
              groupList.value = groupList.value.concat(arr);
            } else {
              groupList.value = arr;
            }
            if (res.data && res.data.length == 0) {
              loadMore.value = false;
              return;
            }
          });
        }
      }
    };
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        pageNo.value = pageNo.value + 1;
        onGroupList();
      }
    }, 300);
    onUnmounted(() => {
      routing.setIsShowHis(false);
    });
    watch(() => groupListState.value, () => {
      routing.setIsShowHis(groupListState.value);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Button = resolveComponent("Button");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Switch = resolveComponent("Switch");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pageContent" }, _attrs))} data-v-8e34341a><div class="chatAreaNav clearfix" data-v-8e34341a>`);
      if (!groupListState.value) {
        _push(`<div class="chatOperation" data-v-8e34341a>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Tooltip, {
                content: _ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"),
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="chatOperation-tag" data-v-8e34341a${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8e34341a${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "chatOperation-tag",
                        onClick: toGetHis
                      }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: ""
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Tooltip, {
                  content: _ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"),
                  placement: "right"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "chatOperation-tag",
                      onClick: toGetHis
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["content"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (groupListState.value) {
        _push(`<div class="chatGroupList" data-v-8e34341a><div class="area" data-v-8e34341a><h2 data-v-8e34341a>${ssrInterpolate(_ctx.$t("public.\u5386\u53F2\u8BB0\u5F55"))} <img style="${ssrRenderStyle({ "cursor": "pointer" })}"${ssrRenderAttr("src", _imports_1)} alt="" data-v-8e34341a></h2><div class="add" data-v-8e34341a>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "primary",
          size: "large",
          onClick: onInitGroup
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`+ ${ssrInterpolate(_ctx.$t("public.\u65B0\u5EFA\u641C\u7D22"))}`);
            } else {
              return [
                createTextVNode("+ " + toDisplayString(_ctx.$t("public.\u65B0\u5EFA\u641C\u7D22")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="info-left-list" data-v-8e34341a><!--[-->`);
        ssrRenderList(groupList.value, (item, i) => {
          _push(`<div class="list-item pointer" data-v-8e34341a><div class="content" data-v-8e34341a><div class="content-title text-hide" data-v-8e34341a>${ssrInterpolate(item.request)}</div><div class="content-name" data-v-8e34341a>${ssrInterpolate(item.gmtCreate)}</div></div><img class="deleteIco"${ssrRenderAttr("src", _imports_2)} data-v-8e34341a></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="search" data-v-8e34341a><div class="search-bottom" data-v-8e34341a><div class="agreement" data-v-8e34341a>${ssrInterpolate(_ctx.$t("aiSearch.\u8BF7\u9075\u5B88"))} <a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} data-v-8e34341a>\u300A${ssrInterpolate(_ctx.$t("aiSearch.\u7528\u6237\u670D\u52A1\u534F\u8BAE"))}\u300B</a>\uFF0C ${ssrInterpolate(_ctx.$t("aiSearch.agreementTip"))}</div></div><div style="${ssrRenderStyle({ "width": "100%", "height": "100%", "overflow-y": "auto" })}" data-v-8e34341a><div class="search-title" data-v-8e34341a>${ssrInterpolate(unref(routing).configuration.companyShortNameEn)} <span class="title-name" data-v-8e34341a>${ssrInterpolate(_ctx.$t("aiSearch.AI\u641C\u7D22"))}</span></div><div class="search-name" data-v-8e34341a><div data-v-8e34341a>${ssrInterpolate(_ctx.$t("aiSearch.AI\u667A\u80FD\u641C\u7D22"))}</div><img class="rocket"${ssrRenderAttr("src", _imports_3)} data-v-8e34341a></div><div class="${ssrRenderClass([isFocus.value || content.value ? "isFocus" : "", "search-input"])}" data-v-8e34341a>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<textarea maxLength="18000" class="input"${ssrRenderAttr("placeholder", _ctx.$t("aiSearch.\u70B9\u51FB\u8F93\u5165\u60F3\u8981\u4E86\u89E3\u7684\u95EE\u9898"))} data-v-8e34341a${_scopeId}>${ssrInterpolate(content.value)}</textarea>`);
          } else {
            return [
              withDirectives(createVNode("textarea", {
                "onUpdate:modelValue": ($event) => content.value = $event,
                maxLength: "18000",
                onFocus: ($event) => isFocus.value = true,
                onBlur: ($event) => isFocus.value = false,
                class: "input",
                placeholder: _ctx.$t("aiSearch.\u70B9\u51FB\u8F93\u5165\u60F3\u8981\u4E86\u89E3\u7684\u95EE\u9898")
              }, null, 40, ["onUpdate:modelValue", "onFocus", "onBlur", "placeholder"]), [
                [vModelText, content.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="search-input-bottom" data-v-8e34341a>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Poptip, {
              placement: "bottom",
              "popper-class": "popperClass"
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="searchArea" data-v-8e34341a${_scopeId2}><div class="searchArea-title" data-v-8e34341a${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u641C\u7D22\u8303\u56F4"))}</div><!--[-->`);
                  ssrRenderList(searchScope.value, (item, index2) => {
                    _push3(`<div class="${ssrRenderClass([params.value.searchScope == item.key ? "active" : "", "searchArea-radius"])}" data-v-8e34341a${_scopeId2}><div class="searchArea-radius-content" data-v-8e34341a${_scopeId2}><div class="radius-left" data-v-8e34341a${_scopeId2}>`);
                    if (item.key == "WHOLE_NETWORK") {
                      _push3(`<div class="greenPoint" data-v-8e34341a${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.key == "LEARNING") {
                      _push3(`<div class="bluePoint" data-v-8e34341a${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.key == "XIMALAYA") {
                      _push3(`<div class="purplePoint" data-v-8e34341a${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div data-v-8e34341a${_scopeId2}>${ssrInterpolate(item.value)}</div></div><img class="confirm"${ssrRenderAttr("src", _imports_5)} data-v-8e34341a${_scopeId2}></div></div>`);
                  });
                  _push3(`<!--]--><div class="searchArea-title" style="${ssrRenderStyle({ "margin-bottom": "8px", "margin-top": "4px" })}" data-v-8e34341a${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u9AD8\u7EA7\u8BBE\u7F6E"))}</div><div class="radius-content2" data-v-8e34341a${_scopeId2}><div data-v-8e34341a${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u5EF6\u4F38\u9605\u8BFB"))}</div>`);
                  _push3(ssrRenderComponent(_component_Switch, {
                    modelValue: params.value.extendedReadingFlag,
                    "onUpdate:modelValue": ($event) => params.value.extendedReadingFlag = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="radius-content2" data-v-8e34341a${_scopeId2}><div data-v-8e34341a${_scopeId2}>${ssrInterpolate(_ctx.$t("aiSearch.\u8F93\u51FA\u8BED\u8A00"))}</div>`);
                  _push3(ssrRenderComponent(_component_Select, {
                    size: "small",
                    class: "select",
                    modelValue: params.value.outputLanguage,
                    "onUpdate:modelValue": ($event) => params.value.outputLanguage = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(language.value, (item, index2) => {
                          _push4(ssrRenderComponent(_component_Option, {
                            key: index2,
                            value: item.key
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(language.value, (item, index2) => {
                            return openBlock(), createBlock(_component_Option, {
                              key: index2,
                              value: item.key
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "searchArea" }, [
                      createVNode("div", { class: "searchArea-title" }, toDisplayString(_ctx.$t("aiSearch.\u641C\u7D22\u8303\u56F4")), 1),
                      (openBlock(true), createBlock(Fragment, null, renderList(searchScope.value, (item, index2) => {
                        return openBlock(), createBlock("div", {
                          class: ["searchArea-radius", params.value.searchScope == item.key ? "active" : ""],
                          key: index2
                        }, [
                          createVNode("div", {
                            class: "searchArea-radius-content",
                            onClick: ($event) => params.value.searchScope = item.key
                          }, [
                            createVNode("div", { class: "radius-left" }, [
                              item.key == "WHOLE_NETWORK" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "greenPoint"
                              })) : createCommentVNode("", true),
                              item.key == "LEARNING" ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "bluePoint"
                              })) : createCommentVNode("", true),
                              item.key == "XIMALAYA" ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "purplePoint"
                              })) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(item.value), 1)
                            ]),
                            createVNode("img", {
                              class: "confirm",
                              src: _imports_5
                            })
                          ], 8, ["onClick"])
                        ], 2);
                      }), 128)),
                      createVNode("div", {
                        class: "searchArea-title",
                        style: { "margin-bottom": "8px", "margin-top": "4px" }
                      }, toDisplayString(_ctx.$t("aiSearch.\u9AD8\u7EA7\u8BBE\u7F6E")), 1),
                      createVNode("div", { class: "radius-content2" }, [
                        createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u5EF6\u4F38\u9605\u8BFB")), 1),
                        createVNode(_component_Switch, {
                          modelValue: params.value.extendedReadingFlag,
                          "onUpdate:modelValue": ($event) => params.value.extendedReadingFlag = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "radius-content2" }, [
                        createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u8F93\u51FA\u8BED\u8A00")), 1),
                        createVNode(_component_Select, {
                          size: "small",
                          class: "select",
                          modelValue: params.value.outputLanguage,
                          "onUpdate:modelValue": ($event) => params.value.outputLanguage = $event
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(language.value, (item, index2) => {
                              return openBlock(), createBlock(_component_Option, {
                                key: index2,
                                value: item.key
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bottom-select" data-v-8e34341a${_scopeId2}>`);
                  if (params.value.searchScope == "WHOLE_NETWORK") {
                    _push3(`<div class="greenPoint" data-v-8e34341a${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (params.value.searchScope == "LEARNING") {
                    _push3(`<div class="bluePoint" data-v-8e34341a${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (params.value.searchScope == "XIMALAYA") {
                    _push3(`<div class="purplePoint" data-v-8e34341a${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div data-v-8e34341a${_scopeId2}>${ssrInterpolate(_ctx.$filterStatus(params.value.searchScope, searchScope.value))}</div><img${ssrRenderAttr("src", _imports_4)} data-v-8e34341a${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bottom-select" }, [
                      params.value.searchScope == "WHOLE_NETWORK" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "greenPoint"
                      })) : createCommentVNode("", true),
                      params.value.searchScope == "LEARNING" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "bluePoint"
                      })) : createCommentVNode("", true),
                      params.value.searchScope == "XIMALAYA" ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "purplePoint"
                      })) : createCommentVNode("", true),
                      createVNode("div", null, toDisplayString(_ctx.$filterStatus(params.value.searchScope, searchScope.value)), 1),
                      createVNode("img", { src: _imports_4 })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Poptip, {
                placement: "bottom",
                "popper-class": "popperClass"
              }, {
                content: withCtx(() => [
                  createVNode("div", { class: "searchArea" }, [
                    createVNode("div", { class: "searchArea-title" }, toDisplayString(_ctx.$t("aiSearch.\u641C\u7D22\u8303\u56F4")), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(searchScope.value, (item, index2) => {
                      return openBlock(), createBlock("div", {
                        class: ["searchArea-radius", params.value.searchScope == item.key ? "active" : ""],
                        key: index2
                      }, [
                        createVNode("div", {
                          class: "searchArea-radius-content",
                          onClick: ($event) => params.value.searchScope = item.key
                        }, [
                          createVNode("div", { class: "radius-left" }, [
                            item.key == "WHOLE_NETWORK" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "greenPoint"
                            })) : createCommentVNode("", true),
                            item.key == "LEARNING" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "bluePoint"
                            })) : createCommentVNode("", true),
                            item.key == "XIMALAYA" ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "purplePoint"
                            })) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(item.value), 1)
                          ]),
                          createVNode("img", {
                            class: "confirm",
                            src: _imports_5
                          })
                        ], 8, ["onClick"])
                      ], 2);
                    }), 128)),
                    createVNode("div", {
                      class: "searchArea-title",
                      style: { "margin-bottom": "8px", "margin-top": "4px" }
                    }, toDisplayString(_ctx.$t("aiSearch.\u9AD8\u7EA7\u8BBE\u7F6E")), 1),
                    createVNode("div", { class: "radius-content2" }, [
                      createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u5EF6\u4F38\u9605\u8BFB")), 1),
                      createVNode(_component_Switch, {
                        modelValue: params.value.extendedReadingFlag,
                        "onUpdate:modelValue": ($event) => params.value.extendedReadingFlag = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "radius-content2" }, [
                      createVNode("div", null, toDisplayString(_ctx.$t("aiSearch.\u8F93\u51FA\u8BED\u8A00")), 1),
                      createVNode(_component_Select, {
                        size: "small",
                        class: "select",
                        modelValue: params.value.outputLanguage,
                        "onUpdate:modelValue": ($event) => params.value.outputLanguage = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(language.value, (item, index2) => {
                            return openBlock(), createBlock(_component_Option, {
                              key: index2,
                              value: item.key
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "bottom-select" }, [
                    params.value.searchScope == "WHOLE_NETWORK" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "greenPoint"
                    })) : createCommentVNode("", true),
                    params.value.searchScope == "LEARNING" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "bluePoint"
                    })) : createCommentVNode("", true),
                    params.value.searchScope == "XIMALAYA" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "purplePoint"
                    })) : createCommentVNode("", true),
                    createVNode("div", null, toDisplayString(_ctx.$filterStatus(params.value.searchScope, searchScope.value)), 1),
                    createVNode("img", { src: _imports_4 })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bottom-submit" data-v-8e34341a>`);
      if (isFocus.value || content.value) {
        _push(`<img${ssrRenderAttr("src", _imports_6)} data-v-8e34341a>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_7)} data-v-8e34341a>`);
      }
      _push(`<div data-v-8e34341a>${ssrInterpolate(_ctx.$t("public.\u641C\u7D22"))}</div></div></div></div><div class="search-switch" data-v-8e34341a><div class="search-switch-list" data-v-8e34341a><div class="${ssrRenderClass([params.value.searchDepth == "CONCISE" ? "active" : "", "btn"])}" data-v-8e34341a>${ssrInterpolate(_ctx.$t("aiSearch.\u7B80\u6D01"))}</div><div class="${ssrRenderClass([params.value.searchDepth == "THOROUGH" ? "active" : "", "btn"])}" data-v-8e34341a>`);
      if (params.value.searchDepth != "THOROUGH") {
        _push(`<img${ssrRenderAttr("src", _imports_8)} data-v-8e34341a>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_9)} data-v-8e34341a>`);
      }
      _push(`<div data-v-8e34341a>${ssrInterpolate(_ctx.$t("aiSearch.\u6DF1\u5EA6\u7814\u7A76"))}</div></div><div class="${ssrRenderClass([params.value.searchDepth == "RESEARCH" ? "active" : "", "btn"])}" data-v-8e34341a>`);
      if (params.value.searchDepth != "RESEARCH") {
        _push(`<img${ssrRenderAttr("src", _imports_10)} data-v-8e34341a>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_11)} data-v-8e34341a>`);
      }
      _push(`<div data-v-8e34341a>${ssrInterpolate(_ctx.$t("aiSearch.\u5B66\u672F\u7814\u7A76"))}</div></div></div></div><div class="search-prompt" data-v-8e34341a><div class="search-prompt-list" data-v-8e34341a><!--[-->`);
      ssrRenderList(promptList.value, (item) => {
        _push(`<div class="prompt-item" data-v-8e34341a>`);
        _push(ssrRenderComponent(_component_Tooltip, {
          content: item,
          "max-width": "300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="name text-hide" data-v-8e34341a${_scopeId}>${ssrInterpolate(item)}</div>`);
            } else {
              return [
                createVNode("div", { class: "name text-hide" }, toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<img${ssrRenderAttr("src", _imports_12)} data-v-8e34341a></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e34341a"]]);

export { index as default };
//# sourceMappingURL=index-ff1c97cb.mjs.map
