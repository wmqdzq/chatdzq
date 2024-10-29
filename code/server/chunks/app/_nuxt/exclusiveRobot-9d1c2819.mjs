import { a as _export_sfc, g as getRouting, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './robot-20021510.mjs';
import { useRouter } from 'vue-router';

const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABvJJREFUeF7tW79TG0cUfisJSJMEirhyJhA6pwhyZSpEitA5ODPuPAMknRvgL0DkH0A06TyImXQpwE5lN8iVXVly4VTOQOHKFBB3gMRmvs3dzd5q9273tCedZ/xmGDFw2n3ve7/f7jEaMnHOp4lokojCT3BwErBxwhgLfx8KZyzPXTjnEHSZiOaIaEEROmnrDhHh5zERtRhj53nx6R2AQOgaEa0TET59UIuImoyxfR+LyWt4AyAQHEJvBCbum9fQVeo+gfACAOccgtdtBD+/4HTyL9H5JT65AGn6y//ZmPuK0eSEFUuIE16AsNrNpMogoO0lmXrnPafn767p8J8edU45AYAkAgAAYnm2TAs3SzR3I5FFALE4SODMDECS1iHk7qsetd5di59BaPoLRvU7FVr4ukT4XUMIkNuMsUaWfTIBwDnfCXw9tmcoeKPdS9W0K7MQfvVWmbbmK6avwiW2Xdd1BoBzDpNfVTc6fNujzeddOvmQbOKuDKrPhxax8l1ZtxQyxZrLHk4A6ISH1rdfdAlaHyZtVCu0NV/WBU0nEKwB0Jk9tH3vyaUIbqMgWMPR/XFdbGgwxjZteLICgHO+FaS5aE0Iv/jnZe4mnyZEAgibNoExFYAg1R3LjBRF+JCnBBCqjDGU1EZKBCCo7tpBDS8WKZrwMgjtB+NqTECdABCMvUQaAH2mf+/JlShqikjLsyU6uDuusoYaAVWqlowA6Ex/t92jjdZVEWWPeGosVGj9dqxWgPZhBdo2OwmAJhGthCvD9Kt/XHovcHyjOTlB1H4woWYGY2rUAqDT/urTK9r/u5imr4KIinFvaUz985QuFpgA6NP+zKML38rKdT3UB7WbJXkPbSwwAYC0h5GVoI9J+yHPG9Uy7dRiVnDOGJtSUe8DgHOOKc6R7Puj1j5a5HrQBDVe2fUbiAXHv06oaRGtM6ZLEekAiJl/802P1p6NLvKrRQ6Csa1CNBlhlzGGiVUiACh8MMQUhHJ30J4+q7NjMIK8rs4Bpn6/sMpGiAGIBRJh6jxjBCCo/M7kB2w3yyqk6XuYCO0tVfq6PZdaBG5w9vCzxGwQcwHV/zun1yL3D5vWq2VqxAOYYAFpGAHZhVATwJIkisUBFQD4B6Y9gh6/7dHyX24bujCne3brTiUKePL/t192qf6i67x888cxUoYna4wxxDlBKgComVH/C8Kgo/7SbdOVW9Behc4vSDDsUjzt1CqEQYdKm62rzAMXzBOVMVqsHlABiGWAtadX1HSs/pB65KBlE0SR5g7ujqmFiwh0m62uMw8ygJqqMFYWewfg7GE890IIgGCaGgEsRHrFT0Xb7WPaNHQAdHW4aYZgGmT4nDkMHQCYn8bv+gYp0DhytHoSBEuB5n1NlwcCwHPwEUIhrf40WxKBUhUeo/W1Z12rIsc2HWh6glg1mJgFXIoOHUOaUlQIpzv/G3QvEyAaHhKzAA48cPDhrQ5oLo0RUmMSZc3xNlaAAItRmUTLjDHcO9DWAegB0AsIcmk8TMygHD2631eNRY8P4mY2AKhpORiPRZNi1QVwowOzAHwK8tEL6MZUcAUMWPNstJBlAIBMjLGYzLp2GLOA6GaHLw3JKc9Xjk+zAE0GwHWbxRgg6iKc81g5DA2hkPFFSH8nH8hrpDfxphmL9Z0WpU6EfLmBLwBt19GZPxHNqONx00ww5gZ5RmlbgVyf02SfDmOsqq5jAiDWFiNgzTwq/plAKJyhxF7VXa4yAdCXDT4mK9C01ceMsW91VpR0MhQLhrAClLG+anRXk7Z93uD7Wu1jzSQAYAWxk2HfGcFWKJfnNIWPUfuJAOCfnHNccz2QGWi0u2JIUUQyjNOM2k8FIAABAACIiIp4UmQYpKbeF7K5IdLnCkCiSCCg2ULaUwgl/Q9plyhTAQisAE0SaoOoRygKCAbhcbZxO014KxcIUeWcx1rl8O+YGmN6PAoy+DyurP0ij76TeLOyAAmEWIEU/h2TY4AwrBSJVIfzf+X4Wxiri/BOFpBmCRDe9Rwgi9Ug2OGkWDNVchY+EwBSTEB2iO4QhMLkBQSmOlvzY33j82Bf+PzP6tG3DcBOLiAvGFyjAQjRSbL8fwAB19h/08vsGjB1HGthsGl4jwBax3k/fD7Tu0aZAZBcAiUzXpiIZQgVDFSRnffX9PqUC0DkeAHhMDWau1Gibz7HixMlqpmvx4dLQ+u/2dwG9RYETQsF1gAgoltlNuaX8RloHUd4ED6T1uV9B7YAjVvkBQTu+0FwzPUHFjzk2ysAkluEr8vBIgZ5cwxCY4J7iOsBebw+lwsAqmkHFy++D8AIX5pUMwi0GgoMoV9D+DyEzs0FMvr0SL82FAsYqYQpm38CoMjaGQZvnyxgGCgXeY//ANBZb27Ni8lSAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "exclusiveRobot",
  __ssrInlineRender: true,
  props: {
    templateType: {
      type: String,
      default: ""
    },
    forbiddenList: {
      type: Array,
      default: []
    },
    limit: {
      type: Number,
      default: -1
    },
    showTabs: {
      type: Boolean,
      default: true
    },
    robotCode: {
      type: String,
      default: ""
    }
  },
  emits: ["init", "onAdd"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    useRouter();
    const routing = getRouting();
    const loading = ref(false);
    const active = ref();
    const active2 = ref(0);
    const list = ref([]);
    const classList = ref([]);
    const modalShow = ref(false);
    const selectList = ref([]);
    const selectCodeList = ref([]);
    const selectItem = ref({});
    const showFn = (type) => {
      modalShow.value = true;
      if (!proxy.$isEmpty(type)) {
        toGetApply(type);
        return;
      }
      let data = {
        robotTemplateTypeList: ["ROLE", "STAR", "QUESTION_BANK"]
      };
      selectList.value = [];
      selectCodeList.value = [];
      active.value = data.robotTemplateTypeList[0];
      active2.value = 0;
      loading.value = true;
      proxy.$api.getRobotTemplateList(data).then((res) => {
        let arr1 = res.data;
        let arr2 = [{
          code: -1,
          name: "\u8BAD\u7EC3\u673A\u5668\u4EBA",
          type: "train"
        }];
        list.value = arr2.concat(arr1);
        chooseType({
          type: "train",
          code: -1
        });
      }).catch(() => {
        loading.value = false;
      });
    };
    const toGetApply = (type) => {
      loading.value = true;
      let data = {
        categoryType: type
      };
      selectList.value = [];
      selectCodeList.value = [];
      list.value = [];
      proxy.$api.getRobotTemplateListByCategoryType(data).then((res) => {
        if (res.data && res.data.length > 0) {
          if (type == "AI_ASSISTANT_MODULE" || type == "INTERLIGENT_QA_MODULE") {
            let arr1 = res.data;
            let arr2 = [{
              code: -1,
              name: "\u8BAD\u7EC3\u673A\u5668\u4EBA",
              type: "train"
            }];
            if (routing.clientType == "TEAM") {
              list.value = arr2.concat(arr1);
              chooseType({
                type: "train",
                code: -1
              });
            } else {
              list.value = arr1;
              chooseType({
                type: res.data[0].type,
                code: res.data[0].code
              });
            }
          } else {
            active.value = res.data[0].type;
            active2.value = 0;
            list.value = res.data;
            chooseType({
              type: res.data[0].type,
              code: res.data[0].code
            });
          }
        }
        loading.value = false;
      }).catch(() => {
        loading.value = false;
      });
    };
    const chooseType = (record) => {
      active.value = record.type;
      active2.value = 0;
      if (record.code == -1) {
        let data = {
          queryTrainTeamRobotFlag: true,
          type: "CHAT"
        };
        loading.value = true;
        proxy.$api.space_robotQuery(data).then((res) => {
          loading.value = false;
          classList.value = [];
          classList.value.push({
            cateLogo: "",
            categoryCode: "",
            categoryName: "",
            categoryType: "",
            robotInfoList: [],
            embeddedWebsiteKey: ""
          });
          res.data.forEach((item) => {
            classList.value[0].robotInfoList.push({
              collectRelationCode: "",
              favoriteFlag: false,
              remark: "",
              robotCode: item.code,
              robotLogo: item.robotLogo,
              robotName: item.name,
              styleSetup: item.styleSetup,
              embeddedWebsiteKey: item.embeddedWebsiteKey
            });
          });
        }).catch(() => {
          loading.value = false;
        });
      } else {
        getRobotList();
      }
    };
    const chooseType2 = (i) => {
      active2.value = i;
    };
    const getRobotList = () => {
      let data = {
        templateType: active.value
      };
      loading.value = true;
      proxy.$api.getRobotListByTemplateType(data).then((res) => {
        classList.value = res.data;
        loading.value = false;
        classList.value.forEach((item) => {
          item.robotInfoList.forEach((iten) => {
            iten.isSelect = selectCodeList.value.indexOf(iten.robotCode) != -1 ? true : false;
          });
        });
      }).catch(() => {
        loading.value = false;
      });
    };
    const toSelect = (record, e) => {
      if (props.templateType == "appColumn") {
        selectItem.value = {
          id: "",
          remark: record.remark,
          robotCode: record.robotCode,
          robotLogo: record.robotLogo,
          robotName: record.robotName,
          styleSetup: record.styleSetup,
          embeddedWebsiteKey: record.embeddedWebsiteKey
        };
        selectList.value = [
          {
            robotCode: record.robotCode,
            robotCategoryId: e.categoryCode,
            robotName: record.robotName,
            robotRemark: record.robotRemark ? record.robotRemark : record.remark,
            robotLogo: record.robotLogo
          }
        ];
        selectCodeList.value = [];
        selectCodeList.value = [record.robotCode];
        classList.value.forEach((item) => {
          if (item.robotInfoList && item.robotInfoList.length > 0) {
            item.robotInfoList.forEach((iten) => {
              iten.isSelect = false;
              if (iten.robotCode == record.robotCode) {
                iten.isSelect = true;
              }
            });
          }
        });
      } else {
        if (props.forbiddenList.indexOf(record.robotCode) != -1) {
          return;
        }
        let flag = true;
        let index = -1;
        record.isSelect = !record.isSelect;
        if (selectList.value.length == 0) {
          selectList.value.push({
            robotCode: record.robotCode,
            robotCategoryId: e.categoryCode,
            robotName: record.robotName,
            robotRemark: record.robotRemark ? record.robotRemark : record.remark,
            robotLogo: record.robotLogo
          });
          selectCodeList.value.push(record.robotCode);
        } else {
          selectList.value.forEach((item, i) => {
            if (item.robotCode == record.robotCode) {
              flag = false;
              index = i;
            }
            if (i == Number(selectList.value.length - 1)) {
              if (flag == true) {
                selectList.value.push({
                  robotCode: record.robotCode,
                  robotCategoryId: e.categoryCode,
                  robotName: record.robotName,
                  robotRemark: record.robotRemark ? record.robotRemark : record.remark,
                  robotLogo: record.robotLogo
                });
                selectCodeList.value.push(record.robotCode);
              } else {
                selectList.value.splice(index, 1);
                selectCodeList.value.splice(selectCodeList.value.indexOf(record.robotCode), 1);
              }
            }
          });
        }
      }
    };
    const toSubmit = () => {
      if (selectList.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      if (Number(props.limit) > 0 && selectList.value.length > Number(props.limit)) {
        proxy.$Message.error("\u6700\u591A\u53EF\u9009\u62E9" + props.limit + "\u4E2A\u673A\u5668\u4EBA");
        return;
      }
      if (!proxy.$isEmpty(props.robotCode)) {
        const isSelectedRobot = selectList.value.some((item) => item.robotCode === props.robotCode);
        if (isSelectedRobot) {
          proxy.$Message.error("\u4E0D\u80FD\u9009\u62E9\u5F53\u524D\u673A\u5668\u4EBA");
          return;
        }
      }
      if (props.templateType == "appColumn") {
        emit("onAdd", selectItem.value);
        modalShow.value = false;
      } else {
        emit("init", selectList.value);
        modalShow.value = false;
      }
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Spin = resolveComponent("Spin");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-947b0f2a>`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        size: "large",
        "footer-hide": true,
        "class-name": "modalPromptMain",
        closable: false,
        "mask-closable": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="exclusive-top" data-v-947b0f2a${_scopeId}><div class="name" data-v-947b0f2a${_scopeId}>\u6DFB\u52A0\u673A\u5668\u4EBA</div><div class="exclusive-top-tabs" data-v-947b0f2a${_scopeId}>`);
            if (props.showTabs) {
              _push2(`<div class="tabs" data-v-947b0f2a${_scopeId}><!--[-->`);
              ssrRenderList(list.value, (item, i) => {
                _push2(`<div class="${ssrRenderClass([active.value == item.type ? "active" : "", "tabs-item"])}" data-v-947b0f2a${_scopeId}><div data-v-947b0f2a${_scopeId}>${ssrInterpolate(item.name)}</div><div class="tabs-bottom" data-v-947b0f2a${_scopeId}></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "exclusive-top" }, [
                createVNode("div", { class: "name" }, "\u6DFB\u52A0\u673A\u5668\u4EBA"),
                createVNode("div", { class: "exclusive-top-tabs" }, [
                  props.showTabs ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "tabs"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, i) => {
                      return openBlock(), createBlock("div", {
                        class: ["tabs-item", active.value == item.type ? "active" : ""],
                        onClick: ($event) => chooseType(item),
                        key: i
                      }, [
                        createVNode("div", null, toDisplayString(item.name), 1),
                        createVNode("div", { class: "tabs-bottom" })
                      ], 10, ["onClick"]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-947b0f2a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: loading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u52A0\u8F7D\u4E2D...`);
                } else {
                  return [
                    createTextVNode("\u52A0\u8F7D\u4E2D...")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="content-top" data-v-947b0f2a${_scopeId}><!--[-->`);
            ssrRenderList(classList.value, (item, i) => {
              _push2(`<!--[-->`);
              if (item.categoryName) {
                _push2(`<div class="${ssrRenderClass([active2.value == i ? "active" : "", "content-top-item"])}" data-v-947b0f2a${_scopeId}>${ssrInterpolate(item.categoryName)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
            if (classList.value[active2.value]) {
              _push2(`<div class="robot-list" data-v-947b0f2a${_scopeId}><!--[-->`);
              ssrRenderList(classList.value[active2.value].robotInfoList, (item, i) => {
                _push2(`<div class="robot-list-item" data-v-947b0f2a${_scopeId}><div class="logo" data-v-947b0f2a${_scopeId}>`);
                if (item.robotLogo) {
                  _push2(`<img${ssrRenderAttr("src", item.robotLogo)} data-v-947b0f2a${_scopeId}>`);
                } else {
                  _push2(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-947b0f2a${_scopeId}>`);
                }
                _push2(`</div><div class="list-content" data-v-947b0f2a${_scopeId}><div class="content-title text-hide" data-v-947b0f2a${_scopeId}>${ssrInterpolate(item.robotName)}</div><div class="content-name text-hide" data-v-947b0f2a${_scopeId}>${ssrInterpolate(item.remark)}</div></div>`);
                if (props.forbiddenList.indexOf(item.robotCode) == -1) {
                  _push2(`<!--[-->`);
                  if (!item.isSelect) {
                    _push2(`<img class="closed"${ssrRenderAttr("src", _imports_1)} data-v-947b0f2a${_scopeId}>`);
                  } else {
                    _push2(`<img class="closed"${ssrRenderAttr("src", _imports_2)} data-v-947b0f2a${_scopeId}>`);
                  }
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="content-bottom" data-v-947b0f2a${_scopeId}><div class="name" data-v-947b0f2a${_scopeId}>\u5DF2\u9009\u62E9${ssrInterpolate(selectList.value.length)}\u4E2A</div>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "content-bottom-btn",
              type: "primary",
              loading: loading.value,
              onClick: toSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.templateType == "appColumn") {
                    _push3(`<!--[-->\u4F7F\u7528<!--]-->`);
                  } else {
                    _push3(`<!--[-->\u786E\u8BA4<!--]-->`);
                  }
                } else {
                  return [
                    props.templateType == "appColumn" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode("\u4F7F\u7528")
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode("\u786E\u8BA4")
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(_component_Spin, {
                  fix: "",
                  show: loading.value
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u52A0\u8F7D\u4E2D...")
                  ]),
                  _: 1
                }, 8, ["show"]),
                createVNode("div", { class: "content-top" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(classList.value, (item, i) => {
                    return openBlock(), createBlock(Fragment, null, [
                      item.categoryName ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["content-top-item", active2.value == i ? "active" : ""],
                        onClick: ($event) => chooseType2(i)
                      }, toDisplayString(item.categoryName), 11, ["onClick"])) : createCommentVNode("", true)
                    ], 64);
                  }), 256))
                ]),
                classList.value[active2.value] ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "robot-list"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(classList.value[active2.value].robotInfoList, (item, i) => {
                    return openBlock(), createBlock("div", {
                      class: "robot-list-item",
                      onClick: ($event) => toSelect(item, classList.value[active2.value]),
                      key: i
                    }, [
                      createVNode("div", { class: "logo" }, [
                        item.robotLogo ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: item.robotLogo
                        }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                          key: 1,
                          src: _imports_1$1
                        }))
                      ]),
                      createVNode("div", { class: "list-content" }, [
                        createVNode("div", { class: "content-title text-hide" }, toDisplayString(item.robotName), 1),
                        createVNode("div", { class: "content-name text-hide" }, toDisplayString(item.remark), 1)
                      ]),
                      props.forbiddenList.indexOf(item.robotCode) == -1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        !item.isSelect ? (openBlock(), createBlock("img", {
                          key: 0,
                          class: "closed",
                          src: _imports_1
                        })) : (openBlock(), createBlock("img", {
                          key: 1,
                          class: "closed",
                          src: _imports_2
                        }))
                      ], 64)) : createCommentVNode("", true)
                    ], 8, ["onClick"]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "content-bottom" }, [
                createVNode("div", { class: "name" }, "\u5DF2\u9009\u62E9" + toDisplayString(selectList.value.length) + "\u4E2A", 1),
                createVNode(_component_Button, {
                  class: "content-bottom-btn",
                  type: "primary",
                  loading: loading.value,
                  onClick: toSubmit
                }, {
                  default: withCtx(() => [
                    props.templateType == "appColumn" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode("\u4F7F\u7528")
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode("\u786E\u8BA4")
                    ], 64))
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(_component_Button, {
                  onClick: ($event) => modalShow.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/exclusiveRobot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-947b0f2a"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=exclusiveRobot-9d1c2819.mjs.map
