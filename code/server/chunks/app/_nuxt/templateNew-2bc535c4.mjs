import { a as _export_sfc, u as useRouter, g as getRouting, b as useCookie, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './ossUploaderNew-b29e011c.mjs';
import { _ as __nuxt_component_1 } from './previewImg-8e12aab7.mjs';
import { useSSRContext, defineComponent, ref, toRefs, getCurrentInstance, nextTick, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './close3-d080d282.mjs';
import { a as _imports_2$1 } from './recordNew-bd12a5c8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "cInput"
  },
  __name: "templateNew",
  __ssrInlineRender: true,
  props: {
    content: {},
    consumeEnergy: {},
    placeholder: { default: "\u8BF7\u8F93\u5165\u60A8\u8981\u95EE\u7684\u95EE\u9898\uFF0C\u901A\u8FC7Ctrl+\u56DE\u8F66\u6362\u884C" },
    robotCode: {},
    robotType: {},
    isUoload: { type: Boolean },
    isInternet: { type: Boolean },
    format: {},
    isAgreement: { type: Boolean, default: true },
    isPaus: { type: Boolean, default: true },
    isLoginCheck: { type: Boolean, default: true },
    isAppoint: { type: Boolean, default: false },
    userCodeList: {},
    userList: {},
    robotInfo: { default: {} },
    uploadLists: {}
  },
  emits: ["update:content", "update:isAgent", "submit", "upload", "update:userCodeList", "update:uploadLists", "change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const previewImgRef = ref();
    const router = useRouter();
    const routing = getRouting();
    const isShowAppoint = ref(false);
    const popLoading = ref(false);
    const robotList = ref([]);
    const selctRobotList = ref([]);
    const { consumeEnergy, placeholder, robotCode, isLoginCheck, uploadLists } = toRefs(props);
    ref();
    const { proxy } = getCurrentInstance();
    const text = ref(null);
    const isAgent = ref(true);
    const loading = ref(false);
    proxy.$debounce(() => {
      if (isLoginCheck.value && !useCookie("authtoken").value) {
        router.push("/login");
        return;
      }
      if (routing.isLoad) {
        proxy.$Message.error("\u8BF7\u7B49\u673A\u5668\u4EBA\u56DE\u590D\u540E\u518D\u53D1\u9001\u54E6~");
        return;
      }
      let str = JSON.parse(JSON.stringify(text.value));
      str = str ? str.replace(/[\r\n]/g, "").trim() : "";
      if (!str) {
        proxy.$Message.error("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u95EE\u9898\u5462\uFF01");
        text.value = null;
      } else {
        if (str.length > 6e3) {
          proxy.$Message.error("\u60A8\u8F93\u5165\u7684\u95EE\u9898\u8FC7\u957F\uFF01");
          return;
        }
        emits("update:content", str);
        nextTick(() => {
          emits("submit");
          loading.value = true;
          setTimeout(() => {
            text.value = null;
          }, 50);
        });
      }
    }, 300);
    const onChange = () => {
      emits("update:content", text.value);
      emits("change", text.value);
    };
    const handleKeyDown = proxy.$debounce((event) => {
      if (isLoginCheck.value && !useCookie("authtoken").value) {
        router.push("/login");
        return;
      }
      if (event.ctrlKey && event.keyCode === 13) {
        let str = JSON.parse(JSON.stringify(text.value));
        str = str ? str.replace(/[\r\n]/g, "").trim() : "";
        if (!str) {
          proxy.$Message.error("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u95EE\u9898\u5462\uFF01");
          text.value = null;
          loading.value = false;
        } else {
          text.value = text.value + "\n";
        }
      }
      if (!event.ctrlKey && event.keyCode === 13) {
        let str = JSON.parse(JSON.stringify(text.value));
        str = str ? str.replace(/[\r\n]/g, "").trim() : "";
        if (!str) {
          proxy.$Message.error("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u95EE\u9898\u5462\uFF01");
          loading.value = false;
          setTimeout(() => {
            text.value = null;
          }, 50);
        } else {
          if (routing.isLoad) {
            proxy.$Message.error("\u8BF7\u7B49\u673A\u5668\u4EBA\u56DE\u590D\u540E\u518D\u53D1\u9001\u54E6~");
            return;
          }
          text.value = text.value.replace(/\n$/, "");
          emits("update:content", str);
          nextTick(() => {
            emits("submit");
            loading.value = true;
            setTimeout(() => {
              text.value = null;
            }, 50);
          });
        }
      }
    }, 300);
    let uploadList = ref({
      imgList: [],
      fileList: []
    });
    const uploadSuccess = (e) => {
      e.forEach((item) => {
        const extension = item.name.split(".").pop().toLowerCase();
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
        if (imageExtensions.includes(extension)) {
          uploadList.value.imgList.push(item);
        } else {
          uploadList.value.fileList.push(item);
        }
      });
    };
    const getStaffList = () => {
      popLoading.value = true;
      robotList.value = [];
      proxy.$api.queryDigitalRobotInfoList().then((res) => {
        robotList.value = res.data;
        popLoading.value = false;
      }).catch(() => {
        popLoading.value = false;
      });
    };
    const chooseItem = (record) => {
      if (selctRobotList.value.length === 0) {
        selctRobotList.value.push(record);
      } else {
        const isUserCodeExists = selctRobotList.value.some((item) => item.userCode === record.userCode);
        if (!isUserCodeExists) {
          selctRobotList.value.push(record);
        }
      }
      isShowAppoint.value = false;
    };
    watch(() => props.content, () => {
      text.value = props.content;
      if (!props.content || props.content == "") {
        loading.value = false;
      }
    }, { deep: true, immediate: true });
    watch(() => props.consumeEnergy, () => {
      if (props.consumeEnergy == 0) {
        loading.value = true;
      } else {
        loading.value = false;
      }
    }, { deep: true, immediate: true });
    watch(() => isShowAppoint.value, () => {
      if (props.isAppoint && isShowAppoint.value) {
        getStaffList();
      }
    });
    watch(() => selctRobotList.value, () => {
      emits("update:userCodeList", []);
      let arr = [];
      selctRobotList.value.forEach((item, i) => {
        arr.push(item.userCode);
        if (i == Number(selctRobotList.value.length - 1)) {
          emits("update:userCodeList", arr);
        }
      });
    }, { deep: true });
    watch(() => props.userList, (list) => {
      selctRobotList.value = list;
    }, { deep: true });
    watch(() => props.robotInfo, () => {
      console.log(props.robotInfo);
      console.log(props.robotInfo);
    }, { deep: true });
    watch(() => uploadList.value, (data) => {
      emits("update:uploadLists", data);
    }, { deep: true });
    watch(() => uploadLists.value, (data) => {
      uploadList.value = data;
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Spin = resolveComponent("Spin");
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Input = resolveComponent("Input");
      const _component_ossUploaderNew = __nuxt_component_0;
      const _component_Image = resolveComponent("Image");
      const _component_previewImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inputContainer" }, _attrs))} data-v-cb57057e><div class="input-paus" data-v-cb57057e>`);
      if (unref(routing).isLoad && props.isPaus) {
        _push(`<div class="input-top" data-v-cb57057e><img class="img"${ssrRenderAttr("src", _imports_0)} data-v-cb57057e><div data-v-cb57057e>\u505C\u6B62\u751F\u6210</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.robotInfo && _ctx.robotInfo.type && _ctx.robotInfo.type == "AI_ASSISTANT") {
        _push(`<div class="appoint" data-v-cb57057e>`);
        _push(ssrRenderComponent(_component_Poptip, {
          placement: "top",
          transfer: true,
          "popper-class": "popperClassTemplate",
          modelValue: isShowAppoint.value,
          "onUpdate:modelValue": ($event) => isShowAppoint.value = $event
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="appoint-content" data-v-cb57057e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Spin, {
                fix: "",
                show: popLoading.value
              }, null, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(robotList.value, (item) => {
                _push2(`<div class="content-item" data-v-cb57057e${_scopeId}>${ssrInterpolate(item.userName)}</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "appoint-content" }, [
                  createVNode(_component_Spin, {
                    fix: "",
                    show: popLoading.value
                  }, null, 8, ["show"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (item) => {
                    return openBlock(), createBlock("div", {
                      class: "content-item",
                      onClick: ($event) => chooseItem(item)
                    }, toDisplayString(item.userName), 9, ["onClick"]);
                  }), 256))
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="appoint-btn" data-v-cb57057e${_scopeId}>@ \u5458\u5DE5\u540D</div>`);
            } else {
              return [
                createVNode("div", { class: "appoint-btn" }, "@ \u5458\u5DE5\u540D")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="appoint-list" data-v-cb57057e><!--[-->`);
        ssrRenderList(selctRobotList.value, (item, i) => {
          _push(`<div class="list-tag" data-v-cb57057e><div data-v-cb57057e>${ssrInterpolate(item.userName)}</div><img class="tag-close"${ssrRenderAttr("src", _imports_1)} data-v-cb57057e></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([_ctx.isUoload ? "uploadArea" : "", "area"])}" data-v-cb57057e>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Input, {
              type: "textarea",
              border: false,
              autosize: { minRows: 1, maxRows: 4 },
              rows: 1,
              modelValue: text.value,
              "onUpdate:modelValue": ($event) => text.value = $event,
              onOnChange: onChange,
              onKeydown: unref(handleKeyDown),
              placeholder: unref(placeholder) ? unref(placeholder) : "\u8BF7\u8F93\u5165\u60A8\u8981\u95EE\u7684\u95EE\u9898"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Input, {
                type: "textarea",
                border: false,
                autosize: { minRows: 1, maxRows: 4 },
                rows: 1,
                modelValue: text.value,
                "onUpdate:modelValue": ($event) => text.value = $event,
                onOnChange: onChange,
                onKeydown: unref(handleKeyDown),
                placeholder: unref(placeholder) ? unref(placeholder) : "\u8BF7\u8F93\u5165\u60A8\u8981\u95EE\u7684\u95EE\u9898"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="icon pointer" data-v-cb57057e><div class="submit" data-v-cb57057e><div class="logo" data-v-cb57057e></div>`);
      if (unref(consumeEnergy)) {
        _push(`<div data-v-cb57057e>-${ssrInterpolate(unref(consumeEnergy))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="triangleRight" data-v-cb57057e></div></div></div>`);
      if (_ctx.isUoload) {
        _push(`<div class="icon upload" data-v-cb57057e>`);
        _push(ssrRenderComponent(_component_ossUploaderNew, {
          format: _ctx.format,
          modeType: "icon",
          multiple: true,
          code: unref(robotCode),
          type: _ctx.robotType,
          onUploadSuccess: uploadSuccess
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.isInternet) {
        _push(`<div class="icon internet" data-v-cb57057e><span class="${ssrRenderClass(isAgent.value ? "active" : "")}" data-v-cb57057e></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!_ctx.$isEmpty(unref(uploadList).imgList) || !_ctx.$isEmpty(unref(uploadList).fileList)) {
        _push(`<div class="fileListArea" data-v-cb57057e>`);
        if (!_ctx.$isEmpty(unref(uploadList).imgList)) {
          _push(`<div class="userImgListCom clearfix" data-v-cb57057e><!--[-->`);
          ssrRenderList(unref(uploadList).imgList, (item) => {
            _push(`<div class="userImgItem" data-v-cb57057e><img class="del"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-cb57057e>`);
            _push(ssrRenderComponent(_component_Image, {
              class: "userPic",
              onClick: ($event) => previewImgRef.value.showFn(item.url),
              src: item.url,
              fit: "cover"
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!_ctx.$isEmpty(unref(uploadList).fileList)) {
          _push(`<div class="userFileListCom clearfix" data-v-cb57057e><!--[-->`);
          ssrRenderList(unref(uploadList).fileList, (item, index) => {
            _push(`<div class="userFileItem" data-v-cb57057e><img class="del"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-cb57057e><img class="filePic"${ssrRenderAttr("src", _ctx.$loadFileImages(item.name))} alt="" data-v-cb57057e><h3 data-v-cb57057e>${ssrInterpolate(item.name.split(".")[0])}</h3><p data-v-cb57057e>${ssrInterpolate(item.name.split(".")[1].toUpperCase())}\uFF0C${ssrInterpolate(item.size)}KB</p></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.isAgreement) {
        _push(`<p class="agreement" data-v-cb57057e> \u8BF7\u9075\u5B88<a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} data-v-cb57057e>\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B</a>\uFF0CAi\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA\uFF0C\u5176\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u7684\u89C2\u70B9\u548C\u6001\u5EA6\u3002 </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_previewImg, {
        ref_key: "previewImgRef",
        ref: previewImgRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cInput/templateNew.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inputCom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb57057e"]]);

export { inputCom as i };
//# sourceMappingURL=templateNew-2bc535c4.mjs.map
