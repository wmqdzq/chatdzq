import { a as _export_sfc, _ as __nuxt_component_1$1 } from '../server.mjs';
import { _ as _imports_0, a as _imports_1, b as __nuxt_component_1$2 } from './upload-5a19747f.mjs';
import { _ as __nuxt_component_0 } from './svga-ebe3b6cb.mjs';
import { getCurrentInstance, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { closeToast } from 'vant';
import { l as lodingData } from './loding-9ec1fb58.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';

const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAspJREFUWEftmDGI01AYx78vvdAbLnCDww0OHW4RbkiTlFZwiOjgoOiBy4G7CIK4e6jo4CZutzkcxzkIJ+jgIBhBsDZ5bQcHhwMLOhw4CG2GO9LmkwfpEdr08pI2uROvU2i+93+//N/3vvfxEE74D084H0wEVFW1JEnSCiLOTfsRhULhV6PRcNLoRAIahnGXiJ4DwNRwHAoR9xHxvG3b7aSQY4C6rp9BxJ9ENJ9ULCZ+V1GUsmVZbhLdMUBN064i4ttA5BkAfE0iOIwlogVE3AyPRcRXjuOsJdGLcvAGAOwEIquMsTdJBIexqqouFgqFPxFj7zDGNkQ18wLcAoDrAMBdTZSPuQAi4mMA+E5E24FzwvmYG6DjOI80TdtAxNvBzhbKx1wBTdOcd133CxGpgZOx+ZgrIIfSNG0ZEVui+ZgLIABYiPgpVIIuAcAFkXzMDNA0zbler/cbABYFSsrEcpYZYLCcVxDxJQAsxUBmD8gd4xCWZfXDMMH/C6OA3W6Xn1jDkyZbQA7huu42EYGiKGujkFHu6boudGJNvcQhuJsByGsRyFwAI+CGZsVCZg54BJwQZKaAEXB8Ywyb2/DzRCczBTQMY5OIbgVWdYjoBSLyDpx3z/eJ6B4AlIL3W4yxYezhfskUUNM0Xt94z7gny/JFz/P42XrYQ8qy3PY87yOvf0S02mw234/u5EwB+WTlcvlysVjcrdfrnajJarVa6eDgYLnVan041jLDJxd1IwwqOmbqOngKmDZ50yxXmjH/xxJXKpUl3/dr3CFJkuq2be/F9YC5bpI4mGMvM6eAaXZXGtfSzBN3ebSOiJ+nhYka7/u+iYgP+TsiutZsNt9FxY0BVqvVs/1+/8es7gYFPm5/MBica7fbHSHA4Oh6AABPBMRnEbLOGHs6SWjiFbBhGCu+7xuzIJig0Zckqe04zrej5vh3L9EzdC6R9F8cUiBHZ9Rw3AAAAABJRU5ErkJggg==";
const _sfc_main = {
  name: "ossUploader",
  props: {
    modeType: {
      type: String,
      default: "img"
    },
    url: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    format: {
      type: Array,
      default() {
        return [];
      }
    },
    limit: {
      //最大上传个数
      type: Number,
      default: -1
    },
    selQty: {
      //已选数量
      type: Number,
      default: 0
    },
    maxSize: {
      //单个文件最大容量MB单位,默认1G 1000MB 1000000kb 1000000000字节
      type: Number,
      default: 1e3
    },
    apiUrl: {
      //创建临时账号接口
      type: String,
      default: "createTemporaryAccount"
    },
    suffix: {
      //后缀
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    inputTitle: {
      type: String,
      default: "\u672A\u9009\u62E9\u4EFB\u4F55\u6587\u4EF6"
    }
  },
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const loading = ref(false);
    const ossInfo = ref(null);
    let client = null;
    let fileList = ref([]);
    const fileInput = ref();
    const chooseImgRef = ref();
    async function fetchAccessKeySecret() {
      try {
        let data = {
          resourceQuantity: fileList.value.length,
          partyRelationshipType: props.type,
          partyRelationship: props.code
        };
        await proxy.$api[props.apiUrl](data).then((res) => {
          ossInfo.value = res.data;
        });
        configureOSSClient();
      } catch (error) {
        console.error("\u83B7\u53D6accessKeySecret\u5931\u8D25\uFF1A", error);
      }
    }
    function configureOSSClient() {
      client = new OSS({
        accessKeyId: ossInfo.value.accessKeyId,
        accessKeySecret: ossInfo.value.accessKeySecret,
        stsToken: ossInfo.value.securityToken,
        bucket: ossInfo.value.bucketName,
        region: ossInfo.value.resourceUpLoadAddress
      });
    }
    function onFileVerification(file) {
      if (props.format.length && !props.format.includes(file.name.split(".").pop().toLocaleLowerCase())) {
        proxy.$Message.error("\u8BF7\u4E0A\u4F20\u6B63\u786E\u683C\u5F0F");
        return false;
      }
      return true;
    }
    function chooseImgs(record) {
      ctx.emit("update:url", record);
    }
    const progress = (p, _checkpoint) => {
      console.log("Object\u7684\u4E0A\u4F20\u8FDB\u5EA6\u3002");
      console.log(p);
      console.log("\u5206\u7247\u4E0A\u4F20\u7684\u65AD\u70B9\u4FE1\u606F");
      console.log(_checkpoint);
      ctx.emit("schedule", p);
    };
    async function uploadFile(event) {
      console.log(event);
      const files = event.target.files;
      if (Number(props.limit) != -1 && Number(files.length) > Number(props.limit)) {
        proxy.$Message.error("\u4E00\u6B21\u6027\u4E0A\u4F20\u4E0D\u8D85\u8FC7" + props.limit + "\u4E2A\u6587\u6863");
        event.target.value = null;
        return;
      }
      if (Number(props.limit) != -1 && Number(files.length) + Number(props.selQty) > Number(props.limit)) {
        proxy.$Message.error("\u4E0A\u4F20\u6587\u4EF6\u5DF2\u8D85\u8FC7\u6700\u5927\u9650\u5236");
        event.target.value = null;
        return;
      }
      let flag = false;
      for (let i = 0; i < files.length; i++) {
        if (files[i].size / 1e3 / 1e3 > props.maxSize) {
          flag = true;
        }
        if (i == files.length - 1) {
          if (flag) {
            proxy.$Message.error("\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC7" + props.maxSize + "MB");
            event.target.value = null;
            return;
          }
          loading.value = true;
          for (let i2 = 0; i2 < files.length; i2++) {
            if (!onFileVerification(files[i2]))
              return;
            fileList.value.push({
              file: files[i2],
              url: ""
            });
          }
          try {
            ctx.emit("loadings");
            await fetchAccessKeySecret();
            const resultData = [];
            for (let i2 = 0; i2 < fileList.value.length; i2++) {
              const result = await client.multipartUpload(ossInfo.value.resourcePathList[i2], fileList.value[i2].file, {
                progress,
                headers: {
                  "Access-Control-Allow-Origin": "*"
                }
              });
              resultData.push({
                url: ossInfo.value.cdnUrl + ossInfo.value.resourcePathList[i2] + props.suffix,
                name: fileList.value[i2].file.name,
                code: ossInfo.value.resourceCodeList.length > 0 ? ossInfo.value.resourceCodeList[i2] : "",
                size: Number(Number(fileList.value[i2].file.size / 1e3).toFixed(0))
              });
              console.log("\u5355\u4E2A\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\uFF1A", result);
            }
            fileList.value = [];
            ctx.emit("uploadSuccess", resultData);
            ctx.emit("update:url", resultData[0].url);
            event.target.value = null;
            loading.value = false;
          } catch (error) {
            closeToast();
            console.error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF1A", error);
            loading.value = false;
            event.target.value = null;
            ctx.emit("uploadError", error);
          }
        }
      }
    }
    const toDelete = () => {
      ctx.emit("update:url", "");
    };
    return {
      loading,
      uploadFile,
      toDelete,
      fileInput,
      chooseImgRef,
      chooseImgs,
      nodata: lodingData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = resolveComponent("Image");
  const _component_Spin = resolveComponent("Spin");
  const _component_ClientOnly = __nuxt_component_1$1;
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_DropdownMenu = resolveComponent("DropdownMenu");
  const _component_DropdownItem = resolveComponent("DropdownItem");
  const _component_chooseImg = __nuxt_component_1$2;
  const _component_van_toast = resolveComponent("van-toast");
  const _component_svga = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { width: $props.modeType == "optional" ? "100%" : "auto" }
  }, _attrs))} data-v-8752c65c>`);
  if ($props.modeType == "img") {
    _push(`<div class="cImage" data-v-8752c65c>`);
    if ($props.url) {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Image, {
        preview: true,
        "preview-list": [$props.url],
        class: "cImage-img",
        src: $props.url,
        fit: "cover"
      }, null, _parent));
      _push(`<div class="deleteImg" data-v-8752c65c><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "20px", "height": "20px" })}" data-v-8752c65c></div><!--]-->`);
    } else {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Spin, {
        fix: "",
        show: $setup.loading
      }, null, _parent));
      _push(`<div class="cImage-img" data-v-8752c65c><img${ssrRenderAttr("src", _imports_1)} data-v-8752c65c><div class="cImage-img-name" data-v-8752c65c>\u4E0A\u4F20${ssrInterpolate($props.text ? "\u7B80\u5386" : "\u56FE\u7247")}</div><div class="cImage-upload" data-v-8752c65c><input class="upload-input" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c></div></div><!--]-->`);
    }
    _push(`</div>`);
  } else if ($props.modeType == "custom") {
    _push(`<div class="upload-area" data-v-8752c65c><div class="upload-btn" data-v-8752c65c><img${ssrRenderAttr("src", _imports_1)} data-v-8752c65c><div data-v-8752c65c>\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20</div></div><input class="upload-input" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c></div>`);
  } else if ($props.modeType == "icon") {
    _push(`<div class="upload-icon" data-v-8752c65c><div class="upload-btn" style="${ssrRenderStyle({ "width": "20px", "height": "20px" })}" data-v-8752c65c><img${ssrRenderAttr("src", _imports_2)} data-v-8752c65c></div><input class="upload-input" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c></div>`);
  } else if ($props.modeType == "file") {
    _push(`<div class="uploadFiles" data-v-8752c65c>`);
    ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
    _push(`<input class="upload-input" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c></div>`);
  } else if ($props.modeType == "freedom") {
    _push(`<div class="freedom" data-v-8752c65c>`);
    ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
    _push(`<input class="upload-input"${ssrRenderAttr("title", $props.inputTitle)} type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c></div>`);
  } else if ($props.modeType == "optional") {
    _push(`<div class="uploadFiles-optional" data-v-8752c65c>`);
    _push(ssrRenderComponent(_component_Spin, {
      fix: "",
      show: $setup.loading
    }, null, _parent));
    if (!$props.url) {
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`<input class="upload-input" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c><!--]-->`);
    } else {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Image, {
        preview: true,
        "preview-list": [$props.url],
        class: "cImage-img",
        src: $props.url,
        fit: "cover"
      }, null, _parent));
      _push(`<div class="deleteImg" data-v-8752c65c><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "20px", "height": "20px" })}" data-v-8752c65c></div><!--]-->`);
    }
    _push(`</div>`);
  } else if ($props.modeType == "DS") {
    _push(`<div class="cImage" data-v-8752c65c>`);
    _push(ssrRenderComponent(_component_Spin, {
      fix: "",
      show: $setup.loading
    }, null, _parent));
    if ($props.url) {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Image, {
        preview: true,
        "preview-list": [$props.url],
        class: "cImage-img",
        src: $props.url,
        fit: "cover"
      }, null, _parent));
      _push(`<div class="deleteImg" data-v-8752c65c><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "20px", "height": "20px" })}" data-v-8752c65c></div><!--]-->`);
    } else {
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Dropdown, {
              transfer: "",
              trigger: "hover"
            }, {
              list: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownItem, {
                          onClick: ($event) => $setup.fileInput.click()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u672C\u5730\u4E0A\u4F20`);
                            } else {
                              return [
                                createTextVNode("\u672C\u5730\u4E0A\u4F20")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DropdownItem, {
                          onClick: ($event) => $setup.chooseImgRef.showFn()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u4ECE\u6570\u636E\u96C6\u9009\u62E9`);
                            } else {
                              return [
                                createTextVNode("\u4ECE\u6570\u636E\u96C6\u9009\u62E9")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DropdownItem, {
                            onClick: withModifiers(($event) => $setup.fileInput.click(), ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u672C\u5730\u4E0A\u4F20")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_DropdownItem, {
                            onClick: withModifiers(($event) => $setup.chooseImgRef.showFn(), ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u4ECE\u6570\u636E\u96C6\u9009\u62E9")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownItem, {
                          onClick: withModifiers(($event) => $setup.fileInput.click(), ["stop"])
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u672C\u5730\u4E0A\u4F20")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_DropdownItem, {
                          onClick: withModifiers(($event) => $setup.chooseImgRef.showFn(), ["stop"])
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u4ECE\u6570\u636E\u96C6\u9009\u62E9")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="upload" data-v-8752c65c${_scopeId2}><div data-v-8752c65c${_scopeId2}>+</div><div data-v-8752c65c${_scopeId2}>\u4E0A\u4F20\u56FE\u7247</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "upload" }, [
                      createVNode("div", null, "+"),
                      createVNode("div", null, "\u4E0A\u4F20\u56FE\u7247")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Dropdown, {
                transfer: "",
                trigger: "hover"
              }, {
                list: withCtx(() => [
                  createVNode(_component_DropdownMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownItem, {
                        onClick: withModifiers(($event) => $setup.fileInput.click(), ["stop"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u672C\u5730\u4E0A\u4F20")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_DropdownItem, {
                        onClick: withModifiers(($event) => $setup.chooseImgRef.showFn(), ["stop"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u4ECE\u6570\u636E\u96C6\u9009\u62E9")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "upload" }, [
                    createVNode("div", null, "+"),
                    createVNode("div", null, "\u4E0A\u4F20\u56FE\u7247")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    }
    _push(`</div>`);
  } else {
    _push(`<div class="uploadFiles" data-v-8752c65c><img${ssrRenderAttr("src", _imports_1)} data-v-8752c65c><p data-v-8752c65c>\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216<span data-v-8752c65c>\u70B9\u51FB\u4E0A\u4F20</span></p><input class="upload-input" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c></div>`);
  }
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<input class="fileInput" type="file"${ssrIncludeBooleanAttr($props.multiple) ? " multiple" : ""} data-v-8752c65c${_scopeId}>`);
      } else {
        return [
          createVNode("input", {
            class: "fileInput",
            ref: "fileInput",
            type: "file",
            multiple: $props.multiple,
            onChange: ($event) => $setup.uploadFile($event)
          }, null, 40, ["multiple", "onChange"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_chooseImg, {
    ref: "chooseImgRef",
    limit: 1,
    onChoose: $setup.chooseImgs
  }, null, _parent));
  _push(ssrRenderComponent(_component_van_toast, {
    show: $setup.loading,
    "onUpdate:show": ($event) => $setup.loading = $event,
    style: { "padding": "0", "background": "transparent" }
  }, {
    message: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svga, {
          svgaImg: $setup.nodata,
          canvasName: "loading",
          width: 120
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_svga, {
            svgaImg: $setup.nodata,
            canvasName: "loading",
            width: 120
          }, null, 8, ["svgaImg"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ossUploader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8752c65c"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ossUploader-2d65ed0f.mjs.map
