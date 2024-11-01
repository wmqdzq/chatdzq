import { a as _export_sfc, g as getRouting, b as useCookie, d as __nuxt_component_0, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './ossUploaderNew-da7960a9.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, unref, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import phone from './phone-61ab024f.mjs';
import pwd from './pwd-8f00960a.mjs';
import Nickname from './nickname-667f2327.mjs';
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
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import '@aws-sdk/client-s3';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAANBJREFUWEftV0sKwjAUnIcgZldvoCfTG5iewN7AeAM9mb2BWRkQIYVK81kIzaO2m9f1m8xnMUMJC3+0MD/4Aq7vA/zHAGRBqwan9Z1jhi/AuAeA3ZeULPRmO7cAnxFqxTLDAvXExokASUASkAQmTiB2e8Wp1AJMm25HbMKs2wueY53G7UgEvJ4A/dv9ILeFVvt+xoKBizuCcI4Lx7I2AuQtPNWo1S0XMAKancgYSQKSgCQgCZhsO0K3lxYq/78gbIev0m6fT0Ap0497fgITCegAgglnIfhWOEkAAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAALVJREFUOE+9030NwjAUBPA7B0gAB0gAB5sCtKAEHCABcDAHzAE4OHikS5rx+rGkocn+3K/3ri3RYLGBgf8hkraWmOTgJS8mCcAl/Nx7UBaJgD4ghv1ASSQGpt0ldQBOADYkX9NoLpIA1gCun2qOJM9xNynkCWAfJUgC38K9tiU9AjJKygI5xGLbugM4eCPUjGP3wj5LMc47mKdPjWNJdpknYX3dak5nlUGG4hEvfZTFa18DNkHe/9tMEmsG3DwAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accountModel",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const router = useRouter();
    const routing = getRouting();
    const params = ref({
      code: "",
      nickName: "",
      phone: "",
      email: "",
      avatar: ""
    });
    const nicknameRef = ref();
    const phoneRef = ref();
    const pwdRef = ref();
    const toEdit = (type) => {
      switch (type) {
        case "nicknameRef":
          nicknameRef.value.showFn(params.value);
          break;
        case "phoneRef":
          phoneRef.value.showFn(params.value);
          break;
        case "pwdRef":
          console.log(params.value);
          pwdRef.value.showFn(params.value);
          break;
      }
    };
    const changeImg = () => {
      var _a;
      const input = (_a = document.getElementById("cImage-upload")) == null ? void 0 : _a.getElementsByClassName("upload-input")[0];
      input.click();
    };
    const init = () => {
      if (proxy.$isEmpty(params.value.code)) {
        toLogOut();
        return;
      }
      let data = {
        code: params.value.code
      };
      proxy.$api.getLoginAccount(data).then((res) => {
        params.value = res.data;
        modalShow.value = true;
        routing.getUserPoints(proxy);
      });
    };
    const uploadSuccess = (e) => {
      params.value.avatar = e[0].url;
      let data = {
        avatar: params.value.avatar,
        code: params.value.code,
        email: params.value.email,
        nickName: params.value.nickName,
        phone: params.value.phone
      };
      proxy.$api.editLoginAccount(data).then(() => {
        proxy.$Message.success("\u5934\u50CF\u5DF2\u66F4\u6539");
        routing.getUserPoints(proxy);
        routing.getChatLogo(proxy);
        init();
      });
    };
    const toLogOut = () => {
      useCookie("secretKey").value = null;
      router.push("/login");
    };
    const showFn = () => {
      if (useCookie("authtoken").value) {
        params.value.code = useCookie("authtoken").value.loginCode;
        init();
      } else {
        toLogOut();
      }
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_ossUploaderNew = __nuxt_component_0$1;
      const _component_Button = resolveComponent("Button");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "mask-closable": false,
        "class-name": "account-container",
        modalWidth: 400
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-4abfcba6${_scopeId}>\u8D26\u6237\u4FE1\u606F</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "\u8D26\u6237\u4FE1\u606F")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: toLogOut
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u9000\u51FA\u767B\u5F55`);
                } else {
                  return [
                    createTextVNode("\u9000\u51FA\u767B\u5F55")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "primary",
                onClick: toLogOut
              }, {
                default: withCtx(() => [
                  createTextVNode("\u9000\u51FA\u767B\u5F55")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-content" data-v-4abfcba6${_scopeId}><div class="logo-item flex-jc" data-v-4abfcba6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ossUploaderNew, {
                    id: "cImage-upload",
                    modeType: "freedom",
                    onUploadSuccess: uploadSuccess
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="logo flex flex-c-c" data-v-4abfcba6${_scopeId3}>`);
                        if (!params.value.avatar) {
                          _push4(`<img class="add"${ssrRenderAttr("src", _imports_0)} alt="" data-v-4abfcba6${_scopeId3}>`);
                        } else {
                          _push4(`<img${ssrRenderAttr("src", params.value.avatar)} alt="" data-v-4abfcba6${_scopeId3}>`);
                        }
                        _push4(`<img class="edit"${ssrRenderAttr("src", _imports_1)} alt="" data-v-4abfcba6${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            onClick: changeImg,
                            class: "logo flex flex-c-c"
                          }, [
                            !params.value.avatar ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "add",
                              src: _imports_0,
                              alt: ""
                            })) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: params.value.avatar,
                              alt: ""
                            }, null, 8, ["src"])),
                            createVNode("img", {
                              class: "edit",
                              src: _imports_1,
                              alt: ""
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ossUploaderNew, {
                      id: "cImage-upload",
                      modeType: "freedom",
                      onUploadSuccess: uploadSuccess
                    }, {
                      content: withCtx(() => [
                        createVNode("div", {
                          onClick: changeImg,
                          class: "logo flex flex-c-c"
                        }, [
                          !params.value.avatar ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "add",
                            src: _imports_0,
                            alt: ""
                          })) : (openBlock(), createBlock("img", {
                            key: 1,
                            src: params.value.avatar,
                            alt: ""
                          }, null, 8, ["src"])),
                          createVNode("img", {
                            class: "edit",
                            src: _imports_1,
                            alt: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="user-item" data-v-4abfcba6${_scopeId}><div class="name" data-v-4abfcba6${_scopeId}>\u6635\u79F0</div><div class="input" data-v-4abfcba6${_scopeId}><div data-v-4abfcba6${_scopeId}>${ssrInterpolate(unref(proxy).$isEmpty(params.value.nickName) ? "\u6682\u672A\u8BBE\u7F6E" : params.value.nickName)}</div><div class="btn" data-v-4abfcba6${_scopeId}>\u7F16\u8F91</div></div></div><div class="user-item" data-v-4abfcba6${_scopeId}><div class="name" data-v-4abfcba6${_scopeId}>\u5DF2\u7ED1\u5B9A\u624B\u673A\u53F7</div><div class="input" data-v-4abfcba6${_scopeId}><div data-v-4abfcba6${_scopeId}>${ssrInterpolate(unref(proxy).$isEmpty(params.value.phone) ? "\u6682\u672A\u8BBE\u7F6E" : params.value.phone)}</div></div></div><div class="user-item" data-v-4abfcba6${_scopeId}><div class="name" data-v-4abfcba6${_scopeId}>\u767B\u5F55\u5BC6\u7801</div><div class="input" data-v-4abfcba6${_scopeId}><div data-v-4abfcba6${_scopeId}>******</div><div class="btn" data-v-4abfcba6${_scopeId}>\u8BBE\u7F6E</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "account-content" }, [
                createVNode("div", { class: "logo-item flex-jc" }, [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_ossUploaderNew, {
                        id: "cImage-upload",
                        modeType: "freedom",
                        onUploadSuccess: uploadSuccess
                      }, {
                        content: withCtx(() => [
                          createVNode("div", {
                            onClick: changeImg,
                            class: "logo flex flex-c-c"
                          }, [
                            !params.value.avatar ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "add",
                              src: _imports_0,
                              alt: ""
                            })) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: params.value.avatar,
                              alt: ""
                            }, null, 8, ["src"])),
                            createVNode("img", {
                              class: "edit",
                              src: _imports_1,
                              alt: ""
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "user-item" }, [
                  createVNode("div", { class: "name" }, "\u6635\u79F0"),
                  createVNode("div", { class: "input" }, [
                    createVNode("div", null, toDisplayString(unref(proxy).$isEmpty(params.value.nickName) ? "\u6682\u672A\u8BBE\u7F6E" : params.value.nickName), 1),
                    createVNode("div", {
                      class: "btn",
                      onClick: ($event) => toEdit("nicknameRef")
                    }, "\u7F16\u8F91", 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "user-item" }, [
                  createVNode("div", { class: "name" }, "\u5DF2\u7ED1\u5B9A\u624B\u673A\u53F7"),
                  createVNode("div", { class: "input" }, [
                    createVNode("div", null, toDisplayString(unref(proxy).$isEmpty(params.value.phone) ? "\u6682\u672A\u8BBE\u7F6E" : params.value.phone), 1)
                  ])
                ]),
                createVNode("div", { class: "user-item" }, [
                  createVNode("div", { class: "name" }, "\u767B\u5F55\u5BC6\u7801"),
                  createVNode("div", { class: "input" }, [
                    createVNode("div", null, "******"),
                    createVNode("div", {
                      class: "btn",
                      onClick: ($event) => toEdit("pwdRef")
                    }, "\u8BBE\u7F6E", 8, ["onClick"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Nickname, {
        ref_key: "nicknameRef",
        ref: nicknameRef,
        onInit: init
      }, null, _parent));
      _push(ssrRenderComponent(phone, {
        ref_key: "phoneRef",
        ref: phoneRef
      }, null, _parent));
      _push(ssrRenderComponent(pwd, {
        ref_key: "pwdRef",
        ref: pwdRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/manage/modal/accountModel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccountModel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4abfcba6"]]);

export { AccountModel as default };
//# sourceMappingURL=accountModel-962e2c16.mjs.map
