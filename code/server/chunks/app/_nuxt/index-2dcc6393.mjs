import { a as _export_sfc, g as getRouting, f as useI18n, b as useCookie, _ as __nuxt_component_1$1, r as routeDictionary, i as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock, Fragment, createCommentVNode, toDisplayString, watch, mergeProps, createTextVNode, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { c as cList, _ as _imports_7, f as firmModal } from './firmModal-85ac1a5f.mjs';
import { _ as _imports_1$1 } from './avatar-8802d9a1.mjs';
import { useRouter } from 'vue-router';
import AccountModel from './accountModel-962e2c16.mjs';

const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAVBJREFUWEfd1dF1gjAUBuD/wjmecvriCDiCG+gG7QTVCSQT2A3iCLqJG9QNygi8WPpS0wPUAgL1EpLoKc9J7mdy/yvhxh/duD7+EUCmIUi9AZRA+c8QowPnds3dgDxuQd5LUTRDeHMOwiDgMwIpWf5qHsIcIKss01cQ1n0QZgEaCPOAngg7gB4IewAmogSUOR5z8qu/pp6OCqCaY/3jmTu3iIJlPjF+N8jLHDOP0llG/gKr0a4OKN5sBnyFOmfy9/gxRLA/r7fbhAzVnQGkGgPHJwZ8wBJKAO8AEcTNHtik7wAs90Buj6EephCUXMwBZAA3n8Iku4V6D9T+0y061GkH8bhoPkEexcZAiqEwP7+ZaVZ7ChwiumPoCPH3HHCAuD6ILCOuAzobs8jx0KbkAdoQPzl2B8gRHxsQrVDJsVvA0Got+/lPYKF4+yS0VKjr2G8CEI0hWWoy3wAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbRJREFUaEPtWM1RwkAUfo9wYOIl3rixJWgHUIG0YAVqBWAFYgWWIFQgHWAJxPHAzT1IZg8bnhNEHBjMW0JCyPj2lsnbl+8vO8lDqPjCiuMHIVC2g+KAOHCgAv8kQg2l6h49EcAFAgQHisZvJxjaBd6BmU65Yt6BhlKeR5OjAN9Eq22MlxwJloDnt54RocspUdD9sZ2HnbTeLIH6WYvWDZAeAWrDgsCu2i66QHizutB2Hp7nSCDu2M/3cZEE6g3VBo9efp5h52GqyHs6IARY88SBbYk2X2KJkERoWwE5hdhM7Fkgp1DWUygIgsD3/eQTQDGih1EUDbTWelddaQ40m80eIvZdEkNE97PZbGdtmQT6iNirLAGlVGCMuQWAFhchY8zpRchFeZea0iLkAs6lRghkPUZd1HWpEQfEAZecpNRIhCRCJxihD1jPQ2kA8WJ0IMb07V7tCgCTT5LlymMulAyZ2oWC/qs50chGb6ljTfaXEr4n05NfF45DhQB0nMdwdwk3IVGDB0AqfMibAEeAVxvjNTeZTqDxDhxH8MxPEQKZpctpoziQk5CZ24gDmaXLaWPlHfgC6qpxQFeCBCAAAAAASUVORK5CYII=";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAn1JREFUaEPtWM1Z4zAQ1eSU5GRukk+UwHYAFUAHCxVkUwFJBYQKlq1goQLogC2B2+iGjz559pt8Mp+sGCsmtuV8yMdEP/Pek2beCMSRf3Dk8YsIILSCUYGowIEMfI8jJKU8BYDfAHBGRMmBpO0z/ZGIllrrN99grwIc/GQyeR0ocDvejIh++EB4ASil/gohrnxM9PT/CyJeNK29DwCyFrgnoseegt0uCwBM1sLskSHiSWcAiOhCa/3SJwAp5TkAPJd7IGIjya0UiAD2kG40CpjsdcsxF0Wx9mWTEltwAEmSJPP5fEFEK4fwDRHd+4AEBaCUWgDAqqFmvDEwrfWfz05TEABmUz4u53ZgAMDFKBNCnDoBM5Cbuow2OAAp5TXbDJdRIlrneb6ZTqcJAPyycrs9dImIG/uHwQEopThnfzBPRFwnmN2Kj+FLLYRYAcDPMmAeq7WuVNqgAJh1rbV7eSviKKWY8W2lHSMAZv6hKd3bRy4CYO/kK45KqQ8zV2cl7DtgMktUYFAz52ShDSIum1RN0/S2rNKjuwPGzz/UeZ+yLXVT7hjSKBepuxrWt94nz/NsNptxleZxlY+Irl1bMXgd4IjMplyNdywDACSuNzLFjmvGTnMUBIBlhdlWMNsukLJdZG+0du1DUCvhHgtz1ne8T+mNsixjc/fpF1QBh8mt92HHIIQ4nobGVxh9/49GAV+go2povhps3bzOFUjT9N1Kg5zbn7oM2F0LAC7tmtHFu1ClYekz+Jq1nxCx8VnT60ZDPe5yP10UxeGPu6bS8vM624XeH3lN4P/q2tI69b0KDHxkWm8XAbSmrOMJUYGOCW29XFSgNWUdTzh6Bf4DbVFkT3tT148AAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEtUlEQVRoQ+2ZX6hlUxzHP/uceRg1ipp79tlF0UzxQI2iZjIPIwpFUTQUuTJl3vCETDE1hQfhjRpFHoYoisKTUYRSCEWNjKiz73FdtyjnYc5d+k5r1Zpt77XXOmff0dX91e3cO2f9+X1/v+/6/ZuMDS7ZBtefTQD/tQc3PfB/9cB5wEWAPiXLQGk/O8XcFYWk6PXALcBe4IIGLX8FPgbeB14HJvOimReAFH8AeNCzdqxOq8DLwFPAUuym6rp5ANwDPNei+F/2wm0BBUWvQ8CLs4CYBYCUedXSxb/zFPCu/fkC+MGjyFZgB7AbuA3YB+jffHkbuDOVVqkAcqvgld7N4rE88UzCIx0CDwMHK0C+Am5IoVQKAFnsU2CXp/xnwL3A97O4H9hpvSnPOJH3rgEc/YJHpwB4q0KbN4G7U11eo40Mc6xytuh0a4xRYgHcD7zgHagLbgfE+y5kiwWh9+FkEXil7fAYAOLrN8B2e5hoIxfPHcMryskTH9qHrq8UZi+2n404YgA8a+O8DpHSlwMn2iwz4/eXAl96D/sJ4HDorDYAssrIi/WKNg+lKjcYDHb0+/0D0+n06Hg8/rFl/5PAI3ZNqxfaAChZKVs666u+Sc6aRVHIqruMMWWWZbtHo9HPARCi7C+A3oXkDlt21G5pA6DooAMkSlI3p1pf64fD4TtZlt2k340xJyaTyVWrq6uybpP4Ee81m+BmAiBLuMLsAPBS3SmDweDqfr+/aIxxVjtjWZZlsqoS1Gkxxhwvy/LGQCC4Dzhql6sAvLAJacgDijq/eRv1eL+tO6goip9s+ZzioIOj0aip/lGyFO2cnN8UjUIALrPh0x1yTpPFfIrEIDDGnDLG7F1aWvq8Yb2Cx9/ed1cAKjP+JSEAKrgUlyVK6+cGlNua5/nOtbW1WgpV902n0+WVlRVRIyR/Aq6KVd45vp4AtiwsLMhjUXK2AFR5GKLQsSzLXLSKATGZTqfXjcfjTyIpJON8l+oBdVt/eJsE6Ou6Q1ycj9HcrTHGLJZl2VTrVN/fQlOp3pYHosJonufX9no95QnXpCwbY/R3k5wsy/Lp9Q6jutxPZMESN8/z/b1eT0nntBhj9pVl+VGKV7y173l5Y65Eth9wSql0VkL6vUmpoigeA45YACGKhHDpDuUV581gWd1GIb0DHebmO5ogPBq8fThU/bS9LMvnZ+wX/OpX5UYRKt3bAEjXxwGVtRKV03rMatjXQ9T4K9s767dWvzEAql44Ww2Nxi2KRsHqNwaALO2X1fpb/bBGIF22lG9U+mJNLFpnRbEApHS1qZ9pjlPDO9FFcya/H+68qde9qktUG/kzIdHpLqCty2p6L5fYhskfq6ho2xPbc6d4QEooxClG+7MhPWxNLFJmnDrHzVT9CZ1mQmqaNMmOklQAOrRujuMilCpGvQ95Rl5xkwvtkbXlPXVm+qlWrqKN5kxRAy2HbhYAbq9mRUpabtxSZ7GY4a5ivabbrTOgugvmAeAopRmnsqVLdlGutx2W4rwSXqg/Dp43LwB3uCiiskN9b8x/cIguH8yjeBcUCllGtNJDdfSShU92oXD10q48EEubztdtAujcpIkHbnog0WCdL9/wHvgHKjowQNAkjyEAAAAASUVORK5CYII=";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAidJREFUaEPtWMtxwjAQ1cJwgJNzk3yJS0g6gApCCaSCJBVAKkhSQYYKAhWEDkgJuYA0wyEc4cJmlrEZwwRLNv7IE/loS/L7rFarBVbzB2qOnzkCVTvoHHAOXKjA/wghznkAAO8AcIOI3oWimUyfIOKTUupbN1jrAIFvNBrzkoDH8a4R8VZHQktACPHBGOvrlCjo+0xK2Uta24QAxhZ4Q8RJQWD3ywIAifUQ/mMtpbzKjQAi9pRSsyIJcM67APAZ/UNKmShyKgccAQPrnAOnIgkhDps4bQh5nue1Wq1gtVp9GYi/H2KNA/HzAwBGy+Xy2YSETQQGdHpHoE1JWEMgCAJvu93OGWNBGhLWEAjjmWooyunGJKwikIVE6QQo03Q6HTr6DyqfblZEpG/d+Ptze6J0ApzzIYExyTB/EBsopcbx91UQGAHAsLYEKNtsNptHxtj1ORIAQJego5IcEcdKqcHpnNId0ClPe6TdblMmuonGngNv1UlMYNKCt46AEIIOMiPlI3esCSHf9/uISNfR/ZMUNpVmoXN7IF7MmYK3LoSIRLPZ9BaLRf3KaV12SnDO3YmPxLnkRpbFBWuyUBbwhWxi3/d/Ym3FV0ScZgVnMg8A7hhjVJrsnzz6QlQGHJXCJkByGjOVUia2NbWNraqauwCw3u12lzd3w7ikq+FLGU3eEDidG/e6zjRh0zqQUygUtowjUJi0hgs7BwyFKmyYc6AwaQ0Xrr0Dvw0x5kD7vys9AAAAAElFTkSuQmCC";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    const router = useRouter();
    const routing = getRouting();
    const { proxy } = getCurrentInstance();
    const pageType = ref("");
    const toClose = () => {
      visible.value = false;
    };
    const init = () => {
    };
    const toStaff = () => {
      proxy.$versionCheck();
      if (!proxy.$isFirm()) {
        return;
      }
      router.push(routing.defJumpUrl);
    };
    const accountRed = ref();
    const showAccount = () => {
      accountRed.value.showFn();
    };
    const onLogOut = () => {
      proxy.$versionCheck();
      useCookie("secretKey").value = null;
      routing.setFullPath("/");
      router.push("/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Poptip = resolveComponent("Poptip");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="user-area" data-v-bb32d527${_scopeId}><div class="user-area-info" data-v-bb32d527${_scopeId}>`);
            if (unref(routing).teanList.length > 0) {
              _push2(`<!--[-->`);
              if (unref(routing).currentTean) {
                _push2(`<!--[-->`);
                if (unref(routing).currentTean.personFlag) {
                  _push2(`<!--[-->`);
                  if (!unref(routing).userLogo) {
                    _push2(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-bb32d527${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", unref(routing).userLogo)} data-v-bb32d527${_scopeId}>`);
                  }
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<img${ssrRenderAttr("src", unref(routing).currentTean.headPortrait)} data-v-bb32d527${_scopeId}>`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              if (!unref(routing).userLogo) {
                _push2(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-bb32d527${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", unref(routing).userLogo)} data-v-bb32d527${_scopeId}>`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`<div class="user-area-info-name" data-v-bb32d527${_scopeId}>`);
            if (unref(routing).currentTean) {
              _push2(`<div class="user-area-info-name1" data-v-bb32d527${_scopeId}>${ssrInterpolate(unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="user-area-info-name2" data-v-bb32d527${_scopeId}>`);
            if (unref(routing).clientType == "TEAM") {
              _push2(`<div class="tag1" data-v-bb32d527${_scopeId}>\u56E2\u961F</div>`);
            } else {
              _push2(`<div class="tag2" data-v-bb32d527${_scopeId}>\u4E2A\u4EBA</div>`);
            }
            _push2(ssrRenderComponent(_component_Poptip, {
              modelValue: visible.value,
              "onUpdate:modelValue": ($event) => visible.value = $event,
              placement: "left",
              trigger: "click",
              transfer: true
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(cList, {
                    onInit: init,
                    visible: visible.value,
                    onClose: toClose
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(cList, {
                      onInit: init,
                      visible: visible.value,
                      onClose: toClose
                    }, null, 8, ["visible"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="staff-top-switch" data-v-bb32d527${_scopeId2}><a data-v-bb32d527${_scopeId2}>\u5207\u6362</a><img${ssrRenderAttr("src", _imports_1)} data-v-bb32d527${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "staff-top-switch",
                      onClick: ($event) => unref(proxy).$versionCheck()
                    }, [
                      createVNode("a", null, "\u5207\u6362"),
                      createVNode("img", { src: _imports_1 })
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><ul class="user-area-item" data-v-bb32d527${_scopeId}><li class="dl aic" data-v-bb32d527${_scopeId}><img class="i-24"${ssrRenderAttr("src", _imports_2)} data-v-bb32d527${_scopeId}><div class="ml-8" data-v-bb32d527${_scopeId}>\u4F01\u4E1A/\u56E2\u961F\u7BA1\u7406</div></li></ul><ul class="user-area-item" data-v-bb32d527${_scopeId}><li class="dl aic" data-v-bb32d527${_scopeId}><img class="i-24"${ssrRenderAttr("src", _imports_3)} data-v-bb32d527${_scopeId}><div class="ml-8" data-v-bb32d527${_scopeId}>\u8D26\u53F7\u7BA1\u7406</div></li></ul>`);
            if (pageType.value != "www.chatdzq.com") {
              _push2(`<a href="http://www.chatdzq.com" target="_blank" data-v-bb32d527${_scopeId}><ul class="user-area-item" data-v-bb32d527${_scopeId}><li class="dl aic" data-v-bb32d527${_scopeId}><img class="i-24"${ssrRenderAttr("src", _imports_4)} data-v-bb32d527${_scopeId}><div class="ml-8" data-v-bb32d527${_scopeId}>\u5207\u6362\u4E3A\u51FA\u6D77\u7248</div></li></ul></a>`);
            } else {
              _push2(`<!---->`);
            }
            if (pageType.value != "cn.chatdzq.com") {
              _push2(`<a href="https://cn.chatdzq.com" target="_blank" data-v-bb32d527${_scopeId}><ul class="user-area-item" data-v-bb32d527${_scopeId}><li class="dl aic" data-v-bb32d527${_scopeId}><img class="i-24"${ssrRenderAttr("src", _imports_4)} data-v-bb32d527${_scopeId}><div class="ml-8" data-v-bb32d527${_scopeId}>\u5207\u6362\u4E3A\u56FD\u5185\u7248</div></li></ul></a>`);
            } else {
              _push2(`<!---->`);
            }
            if (pageType.value != "global.chatdzq.com") {
              _push2(`<a href="https://global.chatdzq.com" target="_blank" data-v-bb32d527${_scopeId}><ul class="user-area-item" data-v-bb32d527${_scopeId}><li class="dl aic" data-v-bb32d527${_scopeId}><img class="i-24"${ssrRenderAttr("src", _imports_4)} data-v-bb32d527${_scopeId}><div class="ml-8" data-v-bb32d527${_scopeId}>\u5207\u6362\u4E3A\u56FD\u9645\u7248</div></li></ul></a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="division" data-v-bb32d527${_scopeId}></div><a href="javascript:void(0)" data-v-bb32d527${_scopeId}><ul class="user-area-item" data-v-bb32d527${_scopeId}><li class="dl aic" data-v-bb32d527${_scopeId}><img class="i-24"${ssrRenderAttr("src", _imports_5)} data-v-bb32d527${_scopeId}><div class="ml-8" data-v-bb32d527${_scopeId}>\u9000\u51FA\u767B\u5F55</div></li></ul></a></div>`);
            _push2(ssrRenderComponent(AccountModel, {
              ref_key: "accountRed",
              ref: accountRed
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "user-area" }, [
                createVNode("div", { class: "user-area-info" }, [
                  unref(routing).teanList.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    unref(routing).currentTean ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      unref(routing).currentTean.personFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: _imports_1$1
                        })) : (openBlock(), createBlock("img", {
                          key: 1,
                          src: unref(routing).userLogo
                        }, null, 8, ["src"]))
                      ], 64)) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: unref(routing).currentTean.headPortrait
                      }, null, 8, ["src"]))
                    ], 64)) : createCommentVNode("", true)
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _imports_1$1
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: unref(routing).userLogo
                    }, null, 8, ["src"]))
                  ], 64)),
                  createVNode("div", { class: "user-area-info-name" }, [
                    unref(routing).currentTean ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "user-area-info-name1"
                    }, toDisplayString(unref(routing).currentTean.personFlag ? unref(routing).nickName : unref(routing).currentTean.tenantName), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "user-area-info-name2" }, [
                      unref(routing).clientType == "TEAM" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "tag1"
                      }, "\u56E2\u961F")) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "tag2"
                      }, "\u4E2A\u4EBA")),
                      createVNode(_component_Poptip, {
                        modelValue: visible.value,
                        "onUpdate:modelValue": ($event) => visible.value = $event,
                        placement: "left",
                        trigger: "click",
                        transfer: true
                      }, {
                        content: withCtx(() => [
                          createVNode(cList, {
                            onInit: init,
                            visible: visible.value,
                            onClose: toClose
                          }, null, 8, ["visible"])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "staff-top-switch",
                            onClick: ($event) => unref(proxy).$versionCheck()
                          }, [
                            createVNode("a", null, "\u5207\u6362"),
                            createVNode("img", { src: _imports_1 })
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                createVNode("ul", {
                  class: "user-area-item",
                  onClick: toStaff
                }, [
                  createVNode("li", { class: "dl aic" }, [
                    createVNode("img", {
                      class: "i-24",
                      src: _imports_2
                    }),
                    createVNode("div", { class: "ml-8" }, "\u4F01\u4E1A/\u56E2\u961F\u7BA1\u7406")
                  ])
                ]),
                createVNode("ul", {
                  class: "user-area-item",
                  onClick: showAccount
                }, [
                  createVNode("li", { class: "dl aic" }, [
                    createVNode("img", {
                      class: "i-24",
                      src: _imports_3
                    }),
                    createVNode("div", { class: "ml-8" }, "\u8D26\u53F7\u7BA1\u7406")
                  ])
                ]),
                pageType.value != "www.chatdzq.com" ? (openBlock(), createBlock("a", {
                  key: 0,
                  href: "http://www.chatdzq.com",
                  target: "_blank"
                }, [
                  createVNode("ul", { class: "user-area-item" }, [
                    createVNode("li", { class: "dl aic" }, [
                      createVNode("img", {
                        class: "i-24",
                        src: _imports_4
                      }),
                      createVNode("div", { class: "ml-8" }, "\u5207\u6362\u4E3A\u51FA\u6D77\u7248")
                    ])
                  ])
                ])) : createCommentVNode("", true),
                pageType.value != "cn.chatdzq.com" ? (openBlock(), createBlock("a", {
                  key: 1,
                  href: "https://cn.chatdzq.com",
                  target: "_blank"
                }, [
                  createVNode("ul", { class: "user-area-item" }, [
                    createVNode("li", { class: "dl aic" }, [
                      createVNode("img", {
                        class: "i-24",
                        src: _imports_4
                      }),
                      createVNode("div", { class: "ml-8" }, "\u5207\u6362\u4E3A\u56FD\u5185\u7248")
                    ])
                  ])
                ])) : createCommentVNode("", true),
                pageType.value != "global.chatdzq.com" ? (openBlock(), createBlock("a", {
                  key: 2,
                  href: "https://global.chatdzq.com",
                  target: "_blank"
                }, [
                  createVNode("ul", { class: "user-area-item" }, [
                    createVNode("li", { class: "dl aic" }, [
                      createVNode("img", {
                        class: "i-24",
                        src: _imports_4
                      }),
                      createVNode("div", { class: "ml-8" }, "\u5207\u6362\u4E3A\u56FD\u9645\u7248")
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "division" }),
                createVNode("a", {
                  href: "javascript:void(0)",
                  onClick: onLogOut
                }, [
                  createVNode("ul", { class: "user-area-item" }, [
                    createVNode("li", { class: "dl aic" }, [
                      createVNode("img", {
                        class: "i-24",
                        src: _imports_5
                      }),
                      createVNode("div", { class: "ml-8" }, "\u9000\u51FA\u767B\u5F55")
                    ])
                  ])
                ])
              ]),
              createVNode(AccountModel, {
                ref_key: "accountRed",
                ref: accountRed
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cUser/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const cUser = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bb32d527"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { emit: emits }) {
    const { t, locale } = useI18n();
    const { proxy } = getCurrentInstance();
    const authtoken = useCookie("authtoken");
    const routing = getRouting();
    const router = useRouter();
    const selectRoutePath = ref("/app/create");
    const robotId = ref("");
    const orgId = ref("");
    ref(true);
    const menberShow = ref(false);
    const robotCode = ref(router.currentRoute.value.query.robotCode);
    if (router.currentRoute.value && router.currentRoute.value.query && router.currentRoute.value.query.secretKey) {
      useCookie("secretKey").value = router.currentRoute.value.query.secretKey;
    }
    const isAdShow = ref(null);
    ref([]);
    ref(false);
    if (proxy.$isLogin()) {
      routing.getUserPoints2(proxy);
      routing.getChatLogo(proxy);
    }
    const selectChildren = ref([]);
    const otherSelectChildren = ref([]);
    const pageList = ref([
      { title: t("heder.\u667A\u80FD\u4F53"), en: "Agent", url: "/robot/chat/role", isSelect: false, isShow: true, children: [
        { title: t("heder.\u521B\u5EFA\u673A\u5668\u4EBA"), url: "/robot/chat/role", name: "creative", isShow: true },
        { title: t("heder.\u77E5\u8BC6\u5E93\u8BAD\u7EC3"), url: "/knowledge/base", name: "draw", isShow: true },
        { title: t("heder.\u5BF9\u8BDD\u4E0E\u8C03\u8BD5"), url: "/knowledge/debug", name: "chat", isShow: true },
        { title: t("heder.\u53D1\u5E03\u4E0E\u8F93\u51FA"), url: "/knowledge/publish", name: "chat", isShow: true },
        { title: t("heder.\u673A\u5668\u4EBA\u8BBE\u7F6E"), url: "/knowledge/edit", name: "chat", isShow: false },
        { title: t("heder.\u5BF9\u8BDD\u8BB0\u5F55"), url: "/knowledge/record", name: "chat", isShow: false }
      ] },
      { title: t("heder.\u673A\u5668\u4EBA"), en: "Robot", url: "/robot/chat", isSelect: false, isShow: true, children: [
        { title: t("heder.AI\u5BF9\u8BDD"), url: "/robot/chat", name: "chat", isShow: true },
        { title: t("heder.AI\u753B\u753B"), url: "/robot/draw/list", name: "draw", isShow: true },
        { title: t("heder.AI\u5DE5\u5177"), url: "/robot/tool/thinking", name: "tool", isShow: true },
        { title: t("heder.\u8D85\u7EA7AI"), url: "/robot/brain/agency", name: "brain", isShow: true },
        { title: t("heder.\u89D2\u8272\u804A\u5929"), url: "/robot/chat/list", name: "list", isShow: false },
        { title: t("home.\u63D0\u793A\u8BCD"), url: "/robot/chat/prompt", name: "prompt", isShow: false },
        { title: t("heder.\u673A\u5668\u4EBA"), url: "/robot/chat/knowledge", name: "", isShow: false },
        { title: t("heder.\u521B\u4F5C"), url: "/robot/creative/info", name: "", isShow: false },
        { title: t("heder.\u6211\u7684\u6536\u85CF"), url: "/robot/chat/favorite", name: "", isShow: false },
        { title: t("heder.\u5BF9\u8BDD\u8BB0\u5F55"), url: "/robot/chat/record", name: "", isShow: false }
      ] },
      // {title:t('heder.AI应用'),en:'Applications',url:'/app/create',isSelect:false,isShow:true,children:[
      // 	{title:t('heder.创建应用'),url:'/app/create',name:'creative',isShow:true},
      // 	{title:t('heder.栏目管理'),url:'/app/apply/column',name:'column',isShow:true},
      // 	{title:t('heder.导航管理'),url:'/app/apply/navigation',name:'navigation',isShow:true},
      // 	{title:t('heder.应用发布'),url:'/app/apply/publish',name:'publish',isShow:true},
      // 	{title:t('heder.应用信息'),url:'/app/apply/information',name:'information',isShow:true},
      // ]},
      { title: t("heder.\u4F1A\u5458"), url: "/app/member/allUser", isSelect: false, isShow: false, children: [
        { title: t("heder.\u5168\u90E8\u7528\u6237"), url: "/app/member/allUser", name: "allUser", isShow: true },
        { title: t("heder.\u4F1A\u5458\u6743\u76CA"), url: "/app/member/equitys", name: "equitys", isShow: true },
        { title: t("heder.\u79EF\u5206\u6743\u76CA"), url: "/app/member/points", name: "points", isShow: true },
        { title: t("heder.\u7528\u6237\u53CD\u9988"), url: "/app/member/feedback", name: "feedback", isShow: true },
        { title: t("heder.\u4F1A\u5458\u8BBE\u7F6E"), url: "/app/member/settings", name: "settings", isShow: true }
      ] },
      { title: t("heder.\u8BA2\u5355"), url: "/app/order/allOrder", isSelect: false, isShow: false, children: [
        { title: t("heder.\u521B\u5EFA\u5E94\u7528"), url: "/app/create", name: "creative", isShow: true },
        { title: t("heder.\u5168\u90E8\u8BA2\u5355"), url: "/app/order/allOrder", name: "allOrder", isShow: true }
      ] },
      { title: t("heder.\u6570\u636E"), url: "/app/data", isSelect: false, isShow: false, children: [
        { title: t("heder.\u521B\u5EFA\u5E94\u7528"), url: "/app/create", name: "creative", isShow: true },
        { title: t("heder.\u5168\u90E8\u6570\u636E"), url: "/app/data", name: "data", isShow: true }
      ] },
      { title: t("heder.\u5206\u9500"), url: "/app/distribution/user", isSelect: false, isShow: false, children: [
        { title: t("heder.\u521B\u5EFA\u5E94\u7528"), url: "/app/create", name: "creative", isShow: true },
        { title: t("heder.\u5206\u9500\u63A8\u5E7F"), url: "/app/distribution/user", name: "user", isShow: true }
      ] },
      { title: t("heder.\u652F\u4ED8"), url: "/app/pay/edit", isSelect: false, isShow: false, children: [
        { title: t("heder.\u521B\u5EFA\u5E94\u7528"), url: "/app/create", name: "creative", isShow: true },
        { title: t("heder.\u652F\u4ED8\u914D\u7F6E"), url: "/app/pay/edit", name: "edit", isShow: true }
      ] },
      { title: t("heder.\u6D41\u91CF\u4E3B"), url: "/app/flow", isSelect: false, isShow: false, children: [
        { title: t("heder.\u521B\u5EFA\u5E94\u7528"), url: "/app/create", name: "creative", isShow: true },
        { title: t("heder.\u5E7F\u544A\u914D\u7F6E"), url: "/app/flow", name: "flow", isShow: true }
      ] },
      { title: t("heder.\u5B9E\u9A8C\u5BA4"), en: "Laboratory", url: "/laboratory", isSelect: false, isShow: true },
      { title: t("heder.\u89E3\u51B3\u65B9\u6848"), en: "Solutions", url: "/solution", isSelect: false, isShow: true }
      // {title:'关于我们',url:'/about',isSelect:false}
    ]);
    const navJump = (record) => {
      if (record.partyType == "ENTERPRISE_AI_HELPER") {
        if (record.trainTeamRobotType == "TEAM_TRAIN_ROBOT") {
          router.push("/enterprise/train/chat?robotCode=" + record.value);
        } else {
          router.push("/enterprise/train/chat?robotCode=" + record.value + "&type=exclusive");
        }
      } else if (record.partyType == "AI_WORK_STAND")
        ;
      else {
        routeDictionary.forEach((item) => {
          if (item.businessType == record.businessType) {
            router.push(item.url);
          }
        });
      }
    };
    const onRouter = (e) => {
      if (e.name.split("/")[1] == "knowledge") {
        let code;
        if (router.currentRoute.value.query.robotCode) {
          code = router.currentRoute.value.query.robotCode;
        } else {
          if (!proxy.$isEmpty(routing.robotInfo)) {
            code = routing.robotInfo.robotCode;
          } else {
            proxy.$Message.error(t("heder.\u8BF7\u9009\u62E9\u60A8\u8981\u7BA1\u7406\u7684\u673A\u5668\u4EBA"));
            return;
          }
        }
        if (proxy.$isEmpty(code)) {
          proxy.$Message.error(t("heder.\u8BF7\u9009\u62E9\u60A8\u8981\u7BA1\u7406\u7684\u673A\u5668\u4EBA"));
          return;
        }
        router.push(e.name + "?robotCode=" + code);
      } else {
        if (e.name.indexOf("/app/apply") != -1) {
          if (robotId.value) {
            router.push(e.name + "?id=" + robotId.value + "&orgId=" + orgId.value);
          } else {
            proxy.$api1.app_appList().then((res) => {
              if (res.resultObj.datas && res.resultObj.datas.length > 0) {
                router.push(e.name + "?id=" + res.resultObj.datas[0].id + "&orgId=" + res.resultObj.datas[0].orgId);
              }
            });
          }
        } else {
          router.push(e.name);
        }
      }
    };
    const onLogin = () => {
      router.push("/login");
    };
    const getUrlName = () => {
      robotId.value = router.currentRoute.value.query.id;
      orgId.value = router.currentRoute.value.query.orgId;
      routing.setRoutingPath(router.currentRoute.value);
      selectChildren.value = [];
      pageList.value.forEach((item) => {
        item.isSelect = false;
        if (item.url == router.currentRoute.value.path) {
          item.isSelect = true;
          otherSelectChildren.value = item.children;
          setTimeout(() => {
            selectRoutePath.value = router.currentRoute.value.path;
          }, 100);
        }
        if (router.currentRoute.value.path == "/robot/chat/creative") {
          if (item.url == "/robot/chat") {
            item.isSelect = true;
          }
        }
        if (router.currentRoute.value.path.indexOf("/robot/draw") != -1 || router.currentRoute.value.path.indexOf("/robot/placard") != -1) {
          setTimeout(() => {
            otherSelectChildren.value = pageList.value[1].children;
            selectRoutePath.value = "/robot/draw/list";
          }, 100);
        }
        if (router.currentRoute.value.path.indexOf("/robot/tool") != -1) {
          setTimeout(() => {
            otherSelectChildren.value = pageList.value[1].children;
            selectRoutePath.value = "/robot/tool/thinking";
          }, 100);
        }
        if (router.currentRoute.value.path.indexOf("/robot/creative") != -1) {
          setTimeout(() => {
            otherSelectChildren.value = pageList.value[1].children;
            selectRoutePath.value = "/robot/creative";
          }, 100);
        }
        if (router.currentRoute.value.path.indexOf("/robot/chat") != -1) {
          setTimeout(() => {
            otherSelectChildren.value = pageList.value[1].children;
            selectRoutePath.value = "/robot/chat";
          }, 100);
        }
        if (router.currentRoute.value.path.indexOf("/robot/chat/role") != -1) {
          setTimeout(() => {
            otherSelectChildren.value = pageList.value[1].children;
            selectRoutePath.value = "/robot/chat/role";
          }, 100);
        }
        if (router.currentRoute.value.path.indexOf("/robot/brain") != -1) {
          setTimeout(() => {
            otherSelectChildren.value = pageList.value[1].children;
            selectRoutePath.value = "/robot/brain/agency";
          }, 100);
        }
        if (item.children) {
          item.children.forEach((iten) => {
            if (iten.url != "/app/create" && iten.url == router.currentRoute.value.path) {
              item.isSelect = true;
              if (router.currentRoute.value.path == "/robot/chat/role") {
                if (item.url == router.currentRoute.value.path) {
                  item.isSelect = true;
                } else {
                  item.isSelect = false;
                }
              }
              otherSelectChildren.value = item.children;
              setTimeout(() => {
                selectRoutePath.value = router.currentRoute.value.path;
                if (iten.path) {
                  selectRoutePath.value = iten.path;
                }
              }, 100);
            }
          });
        }
      });
    };
    const checkLimit = () => {
      let flag = false;
      routing.permList.forEach((item, i) => {
        if (item.tempCode == "33151") {
          flag = true;
        }
        if (i == Number(routing.permList.length - 1)) {
          menberShow.value = flag;
        }
      });
    };
    watch(() => router.currentRoute.value.query, () => {
      getUrlName();
    }, { deep: true });
    watch(() => router.currentRoute.value.query.robotCode, (code) => {
      robotCode.value = code;
    }, { deep: true });
    watch(() => routing.robotInfo, (item) => {
      if (!proxy.$isEmpty(item)) {
        robotCode.value = item.code;
      }
    }, { deep: true, immediate: true });
    watch(() => routing.permList, () => {
      if (routing.firmParams && routing.firmParams.isPaidTeamFlag && routing.permList.length > 0) {
        checkLimit();
      }
      if (routing.firmParams && !routing.firmParams.isPaidTeamFlag) {
        menberShow.value = true;
      }
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_DropdownMenu = resolveComponent("DropdownMenu");
      const _component_DropdownItem = resolveComponent("DropdownItem");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Button = resolveComponent("Button");
      const _component_Icon = resolveComponent("Icon");
      const _component_van_tabs = resolveComponent("van-tabs");
      const _component_van_tab = resolveComponent("van-tab");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "main-header" }, _attrs))} data-v-faf5d15e><div class="watermark" data-v-faf5d15e></div><div class="headerArea" data-v-faf5d15e><div class="header-top" style="${ssrRenderStyle({ "width": "100%" })}" data-v-faf5d15e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-left",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header-logo" data-v-faf5d15e${_scopeId}><img class="header-logo1"${ssrRenderAttr("src", unref(routing).configuration.homeLogo)} data-v-faf5d15e${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "header-logo" }, [
                createVNode("img", {
                  class: "header-logo1",
                  src: unref(routing).configuration.homeLogo
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isAdShow.value !== null) {
        _push(`<div class="menu-list" data-v-faf5d15e>`);
        if (isAdShow.value) {
          _push(`<ul class="menu-list-menu" data-v-faf5d15e><!--[-->`);
          ssrRenderList(pageList.value, (item, i) => {
            _push(`<!--[-->`);
            if (item.isShow) {
              _push(`<!--[-->`);
              if (item.url == "/app") {
                _push(`<li class="menu-list-menu-item cursor en-header-title" data-v-faf5d15e><div class="${ssrRenderClass([item.isSelect ? "active" : "", "menu-list-menu-item-content"])}" data-v-faf5d15e>${ssrInterpolate(item.title)} `);
                if (unref(locale) == "zh") {
                  _push(`<p data-v-faf5d15e>${ssrInterpolate(item.en)}</p>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
                if (item.isSelect && item.url != "/") {
                  _push(`<div class="menu-list-menu-item-tag" data-v-faf5d15e></div>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</li>`);
              } else {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  to: item.children ? item.children[0].url : item.url
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<li class="menu-list-menu-item en-header-title" data-v-faf5d15e${_scopeId}><div class="${ssrRenderClass([item.isSelect ? "active" : "", "menu-list-menu-item-content"])}" data-v-faf5d15e${_scopeId}>${ssrInterpolate(item.title)} `);
                      if (unref(locale) == "zh") {
                        _push2(`<p data-v-faf5d15e${_scopeId}>${ssrInterpolate(item.en)}</p>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div>`);
                      if (item.isSelect && item.url != "/") {
                        _push2(`<div class="menu-list-menu-item-tag" data-v-faf5d15e${_scopeId}></div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</li>`);
                    } else {
                      return [
                        createVNode("li", { class: "menu-list-menu-item en-header-title" }, [
                          createVNode("div", {
                            class: ["menu-list-menu-item-content", item.isSelect ? "active" : ""]
                          }, [
                            createTextVNode(toDisplayString(item.title) + " ", 1),
                            unref(locale) == "zh" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.en), 1)) : createCommentVNode("", true)
                          ], 2),
                          item.isSelect && item.url != "/" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "menu-list-menu-item-tag"
                          })) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              }
              _push(`<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><li class="menu-list-menu-item en-header-title" data-v-faf5d15e>`);
          _push(ssrRenderComponent(_component_Poptip, {
            trigger: "hover",
            padding: "8px 0px"
          }, {
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="menu-list-menu-item-content popContent" data-v-faf5d15e${_scopeId2}>${ssrInterpolate(_ctx.$t("heder.\u5173\u4E8E\u6211\u4EEC"))}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "menu-list-menu-item-content popContent" }, toDisplayString(_ctx.$t("heder.\u5173\u4E8E\u6211\u4EEC")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, { to: "/news" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="menu-list-menu-item-content popContent" data-v-faf5d15e${_scopeId2}>${ssrInterpolate(_ctx.$t("heder.\u65B0\u95FB\u8D44\u8BAF"))}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "menu-list-menu-item-content popContent" }, toDisplayString(_ctx.$t("heder.\u65B0\u95FB\u8D44\u8BAF")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtLink, { to: "/about" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "menu-list-menu-item-content popContent" }, toDisplayString(_ctx.$t("heder.\u5173\u4E8E\u6211\u4EEC")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, { to: "/news" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "menu-list-menu-item-content popContent" }, toDisplayString(_ctx.$t("heder.\u65B0\u95FB\u8D44\u8BAF")), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: "/about",
                  class: "cursor"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("heder.\u5173\u4E8E\u6211\u4EEC"))} `);
                      if (unref(locale) == "zh") {
                        _push3(`<p data-v-faf5d15e${_scopeId2}>About us</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("heder.\u5173\u4E8E\u6211\u4EEC")) + " ", 1),
                        unref(locale) == "zh" ? (openBlock(), createBlock("p", { key: 0 }, "About us")) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtLink, {
                    to: "/about",
                    class: "cursor"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("heder.\u5173\u4E8E\u6211\u4EEC")) + " ", 1),
                      unref(locale) == "zh" ? (openBlock(), createBlock("p", { key: 0 }, "About us")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li></ul>`);
        } else {
          _push(`<div class="${ssrRenderClass([unref(router).currentRoute._value.path == "/" ? "model" : "", "teamHead"])}" data-v-faf5d15e>`);
          if (unref(routing).topNavList && unref(routing).topNavList.length > 0) {
            _push(`<!--[-->`);
            ssrRenderList(unref(routing).topNavList, (item) => {
              _push(`<!--[-->`);
              if (item.viewResDtoList && item.viewResDtoList.length > 0) {
                _push(ssrRenderComponent(_component_Dropdown, {
                  trigger: "click",
                  placement: "bottom",
                  "transfer-class-name": "dark-dropdown"
                }, {
                  list: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_DropdownMenu, { class: "list" }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<!--[-->`);
                            ssrRenderList(item.viewResDtoList, (iten, index) => {
                              _push3(ssrRenderComponent(_component_DropdownItem, {
                                key: index,
                                onClick: ($event) => navJump(iten)
                              }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(`${ssrInterpolate(iten.name)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(iten.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.viewResDtoList, (iten, index) => {
                                return openBlock(), createBlock(_component_DropdownItem, {
                                  key: index,
                                  onClick: ($event) => navJump(iten)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(iten.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      return [
                        createVNode(_component_DropdownMenu, { class: "list" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.viewResDtoList, (iten, index) => {
                              return openBlock(), createBlock(_component_DropdownItem, {
                                key: index,
                                onClick: ($event) => navJump(iten)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(iten.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<p class="pointer" data-v-faf5d15e${_scopeId}>${ssrInterpolate(item.name)} <img class="drop-down"${ssrRenderAttr("src", _imports_7)} alt="" data-v-faf5d15e${_scopeId}></p>`);
                    } else {
                      return [
                        createVNode("p", { class: "pointer" }, [
                          createTextVNode(toDisplayString(item.name) + " ", 1),
                          createVNode("img", {
                            class: "drop-down",
                            src: _imports_7,
                            alt: ""
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else if (item.attributeResDtoList && item.attributeResDtoList.length > 0) {
                _push(ssrRenderComponent(_component_Dropdown, {
                  trigger: "click",
                  placement: "bottom",
                  "transfer-class-name": "dark-dropdown"
                }, {
                  list: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_DropdownMenu, { class: "list" }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<!--[-->`);
                            ssrRenderList(item.attributeResDtoList, (iten, index) => {
                              _push3(ssrRenderComponent(_component_DropdownItem, {
                                key: index,
                                onClick: ($event) => navJump(iten)
                              }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(`${ssrInterpolate(iten.name)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(iten.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.attributeResDtoList, (iten, index) => {
                                return openBlock(), createBlock(_component_DropdownItem, {
                                  key: index,
                                  onClick: ($event) => navJump(iten)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(iten.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      return [
                        createVNode(_component_DropdownMenu, { class: "list" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.attributeResDtoList, (iten, index) => {
                              return openBlock(), createBlock(_component_DropdownItem, {
                                key: index,
                                onClick: ($event) => navJump(iten)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(iten.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<p class="pointer" data-v-faf5d15e${_scopeId}>${ssrInterpolate(item.name)} <img class="drop-down"${ssrRenderAttr("src", _imports_7)} alt="" data-v-faf5d15e${_scopeId}></p>`);
                    } else {
                      return [
                        createVNode("p", { class: "pointer" }, [
                          createTextVNode(toDisplayString(item.name) + " ", 1),
                          createVNode("img", {
                            class: "drop-down",
                            src: _imports_7,
                            alt: ""
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!--[-->`);
                if (item.businessType == "BIG_MODEL_SELECT") {
                  _push(`<!--[-->`);
                  if (unref(router).currentRoute._value.path != "/") {
                    _push(`<a data-v-faf5d15e>${ssrInterpolate(item.name)}</a>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!--[-->`);
                  if (item.businessType == "ENTERPRISE_AI_HELPER" || item.businessType == "AI_WORK_STAND") {
                    _push(`<!--[-->`);
                    if (item.attributeResDtoList && item.attributeResDtoList.length > 0) {
                      _push(`<a data-v-faf5d15e>${ssrInterpolate(item.name)}</a>`);
                    } else {
                      _push(`<!---->`);
                    }
                    _push(`<!--]-->`);
                  } else {
                    _push(`<a data-v-faf5d15e>${ssrInterpolate(item.name)}</a>`);
                  }
                  _push(`<!--]-->`);
                }
                _push(`<!--]-->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.$isEmpty(unref(authtoken))) {
        _push(`<div class="header-right" data-v-faf5d15e><div class="individual cursor" data-v-faf5d15e>\u4E2A\u4EBA\u5DE5\u4F5C\u53F0</div>`);
        if (unref(routing).clientType == "TEAM") {
          _push(`<!--[-->`);
          if (menberShow.value) {
            _push(`<div class="header-right-serve cursor en-header-title" data-v-faf5d15e>${ssrInterpolate(_ctx.$t("heder.\u5F00\u901A\u670D\u52A1"))} `);
            if (unref(locale) == "zh") {
              _push(`<!--[--><br data-v-faf5d15e> Activate Services <!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="header-right-point" data-v-faf5d15e><div class="header-right-point-logo" data-v-faf5d15e></div><div data-v-faf5d15e>${ssrInterpolate(unref(routing).electric)}</div></div><!--]-->`);
        } else {
          _push(`<!--[--><div class="header-right-serve cursor en-header-title" data-v-faf5d15e>${ssrInterpolate(_ctx.$t("heder.\u5F00\u901A\u670D\u52A1"))} `);
          if (unref(locale) == "zh") {
            _push(`<!--[--><br data-v-faf5d15e> Activate Services <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/equity" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="header-right-point" data-v-faf5d15e${_scopeId}><div class="header-right-point-logo" data-v-faf5d15e${_scopeId}></div><div data-v-faf5d15e${_scopeId}>${ssrInterpolate(unref(routing).electric)}</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "header-right-point" }, [
                    createVNode("div", { class: "header-right-point-logo" }),
                    createVNode("div", null, toDisplayString(unref(routing).electric), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        }
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Dropdown, {
                trigger: "click",
                transfer: true
              }, {
                list: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(cUser, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(cUser)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="header-right-user" data-v-faf5d15e${_scopeId2}>`);
                    if (unref(routing).teanList.length > 0) {
                      _push3(`<!--[-->`);
                      if (unref(routing).currentTean) {
                        _push3(`<!--[-->`);
                        if (unref(routing).currentTean.personFlag) {
                          _push3(`<!--[-->`);
                          if (!unref(routing).userLogo) {
                            _push3(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-faf5d15e${_scopeId2}>`);
                          } else {
                            _push3(`<img${ssrRenderAttr("src", unref(routing).userLogo)} data-v-faf5d15e${_scopeId2}>`);
                          }
                          _push3(`<!--]-->`);
                        } else {
                          _push3(`<img${ssrRenderAttr("src", unref(routing).currentTean.headPortrait)} data-v-faf5d15e${_scopeId2}>`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!--[-->`);
                      if (!unref(routing).userLogo) {
                        _push3(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-faf5d15e${_scopeId2}>`);
                      } else {
                        _push3(`<img${ssrRenderAttr("src", unref(routing).userLogo)} data-v-faf5d15e${_scopeId2}>`);
                      }
                      _push3(`<!--]-->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "header-right-user" }, [
                        unref(routing).teanList.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          unref(routing).currentTean ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            unref(routing).currentTean.personFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_1$1
                              })) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: unref(routing).userLogo
                              }, null, 8, ["src"]))
                            ], 64)) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: unref(routing).currentTean.headPortrait
                            }, null, 8, ["src"]))
                          ], 64)) : createCommentVNode("", true)
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _imports_1$1
                          })) : (openBlock(), createBlock("img", {
                            key: 1,
                            src: unref(routing).userLogo
                          }, null, 8, ["src"]))
                        ], 64))
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
                  transfer: true
                }, {
                  list: withCtx(() => [
                    createVNode(cUser)
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "header-right-user" }, [
                      unref(routing).teanList.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        unref(routing).currentTean ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          unref(routing).currentTean.personFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: _imports_1$1
                            })) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: unref(routing).userLogo
                            }, null, 8, ["src"]))
                          ], 64)) : (openBlock(), createBlock("img", {
                            key: 1,
                            src: unref(routing).currentTean.headPortrait
                          }, null, 8, ["src"]))
                        ], 64)) : createCommentVNode("", true)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        !unref(routing).userLogo ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: _imports_1$1
                        })) : (openBlock(), createBlock("img", {
                          key: 1,
                          src: unref(routing).userLogo
                        }, null, 8, ["src"]))
                      ], 64))
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
        _push(`<div class="header-right" data-v-faf5d15e>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "ml-10 signUp",
          type: "primary",
          onClick: onLogin
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("heder.\u6CE8\u518C\u767B\u5F55"))} `);
              if (unref(locale) == "zh") {
                _push2(`<!--[--><br data-v-faf5d15e${_scopeId}>Sign Up &amp; Log In <!--]-->`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("heder.\u6CE8\u518C\u767B\u5F55")) + " ", 1),
                unref(locale) == "zh" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("br"),
                  createTextVNode("Sign Up & Log In ")
                ], 64)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
      if (isAdShow.value && otherSelectChildren.value && otherSelectChildren.value.length > 0) {
        _push(`<div class="headerNavArea" data-v-faf5d15e><div class="icon" data-v-faf5d15e>`);
        _push(ssrRenderComponent(_component_Icon, { type: "md-desktop" }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("heder.\u5DE5\u4F5C\u53F0"))}</div>`);
        _push(ssrRenderComponent(_component_van_tabs, {
          color: "#0090F7",
          "title-active-color": "#0090F7",
          style: { "width": "500px" },
          active: selectRoutePath.value,
          onClickTab: onRouter,
          "line-width": "24px"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(otherSelectChildren.value, (item, i) => {
                _push2(`<!--[-->`);
                if (item.isShow) {
                  _push2(ssrRenderComponent(_component_van_tab, {
                    title: item.title,
                    name: item.url
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(otherSelectChildren.value, (item, i) => {
                  return openBlock(), createBlock(Fragment, { key: i }, [
                    item.isShow ? (openBlock(), createBlock(_component_van_tab, {
                      key: 0,
                      title: item.title,
                      name: item.url
                    }, null, 8, ["title", "name"])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(firmModal, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-faf5d15e"]]);

export { Header as H };
//# sourceMappingURL=index-2dcc6393.mjs.map
