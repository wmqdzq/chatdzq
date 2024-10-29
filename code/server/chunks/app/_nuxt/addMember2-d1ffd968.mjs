import { b as buildAssetsURL } from '../../paths.mjs';
import { a as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, watch, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "" + buildAssetsURL("departUser.290cde78.png");
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADs1JREFUeF7tXXuMHlUV/53ZLfSlkUZEGyQhmEpSUwSrLTv3TlnUFA0FQYtbKVUDRikKwaIoPiiiSBEIYgBDaNRSbWmRVxvShuB2v3tn22JtQ0ONNIEmFhRpeETpw3Z3jrn9vrVL2e7c+ebO49ud+WfTzrnn+fvuzJx77rmE6hrVHqBRbX1lPCoAjHIQVACoADDKPTDKza9mgAoAo9wDo9z8agaoADAyPaCUOgHAGYA3jYinMWMKQBMAnjDwl8j8G2DmvQDtBY78JcJOZtoORNsBPCulfGMkempEzABbtmwZv3///rMAbwYRS2acBeCDjgO2mwhbmUkB0eZx48ZtnT59+j7HMnJn17IAUEqdA3jnA2yC7QM4LmfvHQQQArQViNZKKTfkLN+JuJYCQK1WO5GobS7AcwGc48QD7phsAGg1c//qIAj2uGObLaeWAEAYhmdHUTQfIBP4E7N1SWruewBe7Xnect/3N6bmljGDUgNAa31BFGEBET6fsR8yYc+MP3oelgkhnshEgAOmpQSA1vpyZroM4FkObCwBC+oh4geFEEtLoMzbVCgVALTWncx0PcCzy+YoN/rQeiJeIoTodsMvPZdSACAMw/dFUXQ9QN9Ob1IrcOA7Pc9b4vv+q0VrWzgAarVwPhH/CDCJmlF1mUTTzUHgLy/S6kIBoJS6FTBT/mi+eImU8ntFeaAQACilpgDeHQCfX5Th5ZJLa4FokZRyZ9565Q4ApXovAqI7AJyat7Ell7cL8BZJ2fFonnrmCoBaLbySiO/N08BWk8VMC4PAvy8vvXMDgFLhjQAvzsuw1pZDi6X0b8rDhlwAUAW/mVDmA4LMAVAFv5ngD4zJHgSZAkCp0KRzl6VxQTWWFkjpP5iVHzIDgFJqLkCrslJ8dPHlS6SUq7OwORMAVMHPIlTZgMA5ABrf+Y9k4YKKp3ex6zyBUwDUM3y0rkryZAbVXQCf5zJj6BgA4ZoqvZtZ8BuMaa2U/hxXUpwBoFrYcRUSGz7uFpCcAKCxpJvZp4qNS0YbjamYcrGUnBoA9WIOVqNwPb9ozO30PJJpi0pSA0ApdcfoqeQpOuZHy+c7pZSL0miVCgD1Gj78KY0C1dh0HiDCuWlqDFMBQKlw3cgt4EwXmPxG03op/fOaldc0AOql23igWcHVOHceIMIVzZacNw0ApcINI6du310wiuFEPVL6TW2VawoAZscOMx4vxthK6lAeIMKFzexAagoAtZp+OOftWi8T4er29vbQGN/X1zeDGd9t7AouAyL2AXQbc9vhFTuifrOBNdfqJ7MNLQjEF5I6IzEA6hs1uTepoBT0L0gpPjTUeKXCVY2dwinYpx76XBR5C2bN6th2NCel9MsAJqeWYMnA86gj6YbUxABQSt0D0EJLnRyQeXOk7Fh7LEYFg+DZtjavq6Oj429D6ae1vpQZOW784HullFclcXoiANT353s78tyizTx2chBM/+dwRhUBAiJsY+au4VbmGqujzycJSEraPczR1CT9CRIBQKlwIcD3pFQy0fAxY9rfP3PmzH/FDcoTBETYQkRdvu+/MJxe3d3dE9vbx/wnTne39+kqKX3r0vuEANBmV2tTnxvNG2lfCZMPCPiZKIq6Zs2atSvOpp6e3g7Piw6/uOZ4bZBSdNrKswZAvScPFbKtWUqRQM/sXgyJaCNzZKb9v9s4uFZTK8xMYUPrloY7bXsWJXBsoYs+fVKKMbZOymgmCPv6DnV1dna+ZKNHraZvIsKPbWjd09gvEiUAgDZLvsK9snYcTS+/IJAT7agBlyAgoloUHd8V9zI6oJtS4c0A/9BW1wzotJRC2vC1AsD69esnjB8/wTRKtP4V2ghPSsOM14JAvNd2nCMQbBgzpr3L5kXU6FWr6VuI8H1bHTOiO7Rv394TZs+evTeOvxUAwjA8N4r46ThmedwnwstCiJNtZaUDAT3N3D/P9rNKqfBWgEvR78Dz6JO+78cu1VsBoFbTNxDhZ7ZOz4HuRSnFabZymgTBU40kz+s2cmo1/QsiXGdDmwcNM34QBOKWOFlWANBaP86MC+KY5Xz/r1KKqbYyE4JgXV/foXmdnZ1v2vBXKjTNLkrV34gITwghLozT3woASmnz2eO6926cbrH3mbEtCIRpFWt12YCAGU96HrqEEFYJHKXCuwC+xkqBfIl2SylOiRMZC4B6122ymgbjhGVxnxkbg0B02PKOAcGaffv2zrN5eTLytNZ3M+NbtrLzp+NJcV3ObQBQWAIogcO6pRTn2tIPBQIiPH7o0OHv/AM2fPJfFLPR6mia+ISQBQDCqwH+ZTPi8x3D66SUn7GV+XYQ8KOTJk3qmjp1qukAHntpre9jxjdiCQsnoGuk9O8eTo1YAGitH2DG5YXbYqUAPSalf5EVKQaSRaC+voPmha/PZpxS6n6AvmZDWzQNEZYKIa5IBQCldA2AVVapaIPr8mm1lP4ltrowMxER29C31o/hsEVKShGkBED4l8ahDDY+KglNMhDYKF2r6d8Q4Ss2tOWhoa1S+h9LCQBtql0+XB6jbDVxBwKl9O8ALLCVXCK656UUp6cEQLgbYOvUa4mMT/w4GEr3Wk0vJ8Kl5bLLVht6SUp/2PxN7EugUtrkAMwJXC16NT8TKBX+AeB5LWq4UfsNKcWkVDOA1uF/mTnvA5kc+zw5CJTSDwGwfpl0rLATdkR0UAj/+AoAwCopxReTeFXr8GFmbsmjagbsdAKAEfAIWCGl/6UkwR+gLekiWBJT0j8ClGrdl0Bm/D4IxPwkHjuaVmv9JDOsM4xpZLkf6+YlsEU/A7FMSvFlF05VSj8F4FMueOXMw8lnYMslgpjx2yAQX3Xp7NbcDe0mEdRiqWAslXL4/PcAMJKkgc0YpcIQYOulZ5cAbJJX+lRwa+W/6X4p/a/bOKu7u7u9vf24Febw8CRrB1qHzzDzx21kFE3jaDGoNZaDmfHrIBBX2jh9x44dx73++hsrATRWDpPlCbTW25jxURtZxdI4WA4uckdQAufdI6X4pg39qlW94yZPjlYw46h6uWQgUEo/B8C6JtFGN/c0TgpCyl0SRoRfCSGutnFefX/D+JUAHeO0ssQgMDt/S3zeoYOSsPrLTzmLQolwlxDiWpvga63fBWAlMz47PH1iELxY0ubYbopCjbO01o+9c8q0cXuWNPb737q7u9/T3t5ufvmWZxInBUH5kmWmxlEI8bm4CMSuBjY+fxYBfHscs7zuM0e3B0HwHRt5vb29k/r7I/PC92kb+iM0yUCgdfgKM5+UTEaW1HSdlL45n3HYyxIASgBkNoeW4KIlUvpWR62ajiaAt9J002xO8cQgeI2Zh11+bU6PZkaxlFLquJFWANiyZcv4/fsPmM2hhS4LM+PnQSBuiDPK3N+0adNJhw71mV9+yoYWyUCglP43APO+UeR1cNy4sSdMnz59X5wSVgCoPwa02Who3XkiTnDy+/RTKX1zynjspbWezAwTfEfFrIlBsB/A2FhFsyOw3ieRAADh7QCn6kzdrL3M+EkQiBttxnd3bzq5vf3wL9+3obenSQwCU2beZs/fJSXdIaVvtVE1AQCKaRHDzCuDQFqVZSmlTgHIVPLMdOnOI7wSg8Cq3Ny9rvEJoAGZ1gBoPAZybxLF3CaC4OzYRks9PT2nep751ONPuHfoYI72ICiopW42TaLqAMi/TRwR3h23UzcMw9OiiM0vf9gaeHfAsANBrbblA0QH/uFOrg2nDNvEFdEo0vPoQ8P14zPNGInIZPjOtHGPO5p4EDS+RF5xJzOWU7aNIuuzQL6tYplxbRCIu4Yyvbe39/S+vv6HiGharGsyIRgeBFrri00T50xED8k041axRmYBzaLflFK8Y19CT0/vmZ4XmYOpP5Kfg4eSdGwQ5J0dzKVZtHFBAe3izS6fxQDtrIeApwBs2sWPLzb4/5ceEuG2KBr7Z/M/nnfgTGbcludycW7t4o2BBb3dliTW5VQj1wMjGl8E1ZExpcFCzkfGNGaB6tCokgCgkEOjGrNAdWxc4SAo6Ni4xixQHRxZMAAKPTiykReojo4tDAT2VVHHUjHRWsBQTKrDowuLfjkOj67nBcL5RFwdH58jFkpzfPyAzUqpWwEqRafsHONQkCheIqW0KouLUzD1I2CwAKXCNQAfo+Y+TpXqvp0HaK2U/hw72ngqxwBQUwBaV9I6+XhvlJ9iF8DnDXdUXVITnAKg/lXQexEQPZJUkYrexgPexVJ2PGpDaUvjHACNl8Iridj67DpbZUczHTMtDAL/Ptc+yAQA9ZkgvDHvA5RdO6c8/GixlP5NWeiTGQAqELgKV3bBNxpmCoAKBGlBkG3wcwFAAwSXAWyqd6rL2gO0QEo/8+Ra5jPAgL1KqbkArbK2f1QT2p+XnNZNuQGgPhNUIIgPWH7Bz+0RMNjoRp7AbFs+Nd4Zo4piF+Atcv2dH+fBXGeAQY+DKYBnztqr0saHnUJrgWiRywxfXOAH7hcCgEFAqBaQ4G5hxzbog+kKBYBRpLGUbLZ9l7jZUjOujR2zk5luDgJ/eSxlhgSFA8DYVi8qia4HqFTHr2bnd77T87wlvu+/mp0MO86lAMCAqlrrTmZTU8CWzZzsjCwPFa0n4iVCCLPLuhRXqQAwCAiXm4oXgGeVwkuplaAeUzElhFiampVjBqUEwCAgXBBFWECEljy5w2zX8jwsE0I84ThuztiVGgADVtY3pEbzAZoL4ERn1mfDaA/Aqz3PW+77/sZsRLjj2hIAGDC33p+gbS7ABggpu3+5c2KD0wZzailz/+ogCPY4554Rw5YCwGAf1JtYYw5ApiXMDABjMvLRsdgeArAZ4GcArJFSbshZvhNxLQuAwdabJtATJ06c0d/PMz0PMxrdQoY9MLEJ7+0mwrYowua2Ntr01ltvbZ49e/beJviUasiIAMBQHlXKdDnHGYA3jYinMZtEE00AeMLAXyLzb4CZ9wK0FzjylwgmUbMdiLYDeFZKaRpljrhrxAJgxEUqI4MqAGTk2FZhWwGgVSKVkZ4VADJybKuwrQDQKpHKSM8KABk5tlXYVgBolUhlpGcFgIwc2yps/wfQSa/MBkGizgAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "addMember2",
  __ssrInlineRender: true,
  props: {
    userOpen: {
      //用户打开
      type: Boolean,
      default: false
    },
    bizType: {
      //范围类型
      type: String,
      default: ""
    }
    // openCreate:{
    // 	type: Boolean,
    // 	default: false,
    // }
  },
  emits: ["init", "getDifferences", "getWhole"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const modalShow = ref(false);
    const loading = ref(false);
    const single = ref(false);
    const isShowWhole = ref(false);
    const list = ref([]);
    const indeterminate = ref(false);
    const listLoading = ref(true);
    const selectList = ref([]);
    const transferList = ref([]);
    const routeList = ref([]);
    const currentList = ref([]);
    const name = ref("");
    const code = ref("");
    const isWhole = ref(false);
    const originalList = ref([]);
    const showFn = (record, original) => {
      proxy.$api.getUserAccountInfo().then((res) => {
        if (res.data.partnerFlag) {
          isShowWhole.value = true;
        } else {
          isShowWhole.value = false;
        }
      });
      if (props.bizType == "WORKBENCH") {
        isWhole.value = false;
      }
      if (props.bizType == "WORKBENCH_ALL_SITE_VIEW") {
        isWhole.value = true;
      }
      routeList.value = [];
      single.value = false;
      indeterminate.value = false;
      currentList.value = [];
      selectList.value = [];
      transferList.value = [];
      originalList.value = [];
      if (record && record.length > 0) {
        selectList.value = JSON.parse(JSON.stringify(record));
        transferList.value = JSON.parse(JSON.stringify(record));
      }
      if (original && original.length > 0) {
        originalList.value = original;
      }
      modalShow.value = true;
      loading.value = true;
      listLoading.value = false;
      let url = props.userOpen ? "teamGetBizUserList" : "teamGetBizList";
      proxy.$api[url]().then((res) => {
        let data = {
          code: res.data[0].code,
          name: ""
        };
        routeList.value.push({
          code: res.data[0].code,
          name: res.data[0].name
        });
        code.value = res.data[0].code;
        proxy.$api[url](data).then((json) => {
          list.value = JSON.parse(JSON.stringify(json.data));
          loading.value = false;
          listLoading.value = true;
          selectList.value.forEach((iten) => {
            list.value.forEach((it) => {
              if (it.code == iten.code) {
                currentList.value.push(iten.code);
              }
            });
          });
          list.value.forEach((item, i) => {
            if (item.type == "user" && !props.userOpen) {
              list.value.splice(i, 1);
            }
          });
          listLoading.value = true;
        });
      });
    };
    const chooseAll = () => {
      currentList.value = [];
      indeterminate.value = false;
      if (single.value) {
        list.value.forEach((item) => {
          currentList.value.push(item.code);
        });
      }
    };
    const compare = (beforeArr, afterArr) => {
      let resObj = {
        add: [],
        del: []
      };
      let cenObj = {};
      for (let i = 0; i < beforeArr.length; i++) {
        cenObj[beforeArr[i]] = beforeArr[i];
      }
      for (let j = 0; j < afterArr.length; j++) {
        if (!cenObj[afterArr[j]]) {
          resObj.add.push(afterArr[j]);
        } else {
          delete cenObj[afterArr[j]];
        }
      }
      for (let k in cenObj) {
        resObj.del.push(k);
      }
      return resObj;
    };
    const handleDate = (record) => {
      if (listLoading.value == true) {
        list.value.forEach((item) => {
          if (record.add.indexOf(item.code) != -1) {
            selectList.value.push(item);
          }
          if (record.del.indexOf(item.code) != -1) {
            selectList.value.forEach((iten, j) => {
              if (iten.code == item.code) {
                selectList.value.splice(j, 1);
              }
            });
          }
        });
      }
    };
    const toDelete = (i, code2) => {
      selectList.value.splice(i, 1);
      if (currentList.value.indexOf(code2) != -1) {
        currentList.value.splice(currentList.value.indexOf(code2), 1);
      }
    };
    const checkLimit = (record) => {
      if (currentList.value.indexOf(record.code) != -1) {
        return true;
      } else {
        return false;
      }
    };
    const toRoute = (record, i) => {
      listLoading.value = false;
      routeList.value.splice(i + 1, routeList.value.length);
      let data = {
        code: record.code,
        name: name.value
      };
      code.value = record.code;
      loading.value = true;
      toGetList(data);
    };
    const toNext = (record) => {
      listLoading.value = false;
      routeList.value.push({
        code: record.code,
        name: record.name
      });
      let data = {
        code: record.code,
        name: name.value
      };
      loading.value = true;
      code.value = record.code;
      toGetList(data);
    };
    const toSearch = () => {
      let data = {
        code: code.value,
        name: name.value
      };
      toGetList(data);
    };
    const toGetList = (data) => {
      single.value = false;
      currentList.value = [];
      let url = props.userOpen ? "teamGetBizUserList" : "teamGetBizList";
      proxy.$api[url](data).then((json) => {
        list.value = JSON.parse(JSON.stringify(json.data));
        loading.value = false;
        listLoading.value = true;
        list.value.forEach((item, i) => {
          selectList.value.forEach((iten) => {
            if (item.code == iten.code) {
              currentList.value.push(item.code);
            }
          });
          if (item.type == "user" && !props.userOpen) {
            list.value.splice(i, 1);
          }
        });
      });
    };
    const toSubmit = () => {
      if (isWhole.value) {
        modalShow.value = false;
        emits("getWhole", "WORKBENCH_ALL_SITE_VIEW");
      } else {
        if (selectList.value.length == 0) {
          proxy.$Message.error("\u8BF7\u9009\u62E9");
          return;
        }
        emits("getWhole", "WORKBENCH");
        let arr1 = [];
        let arr2 = [];
        selectList.value.forEach((item, i) => {
          arr1.push(item.code);
          if (i == Number(selectList.value.length - 1)) {
            if (transferList.value.length == 0) {
              let object1 = compare(arr2, arr1);
              lastSubmit(object1);
            } else {
              transferList.value.forEach((iten, j) => {
                arr2.push(iten.code);
                if (j == Number(transferList.value.length - 1)) {
                  let object2 = compare(arr2, arr1);
                  lastSubmit(object2);
                }
              });
            }
          }
        });
      }
    };
    const onCancel = () => {
      modalShow.value = false;
      routeList.value = [];
      single.value = false;
      indeterminate.value = false;
      currentList.value = [];
      selectList.value = [];
      transferList.value = [];
      originalList.value = [];
    };
    const lastSubmit = (record) => {
      let addList = [];
      let delList = [];
      if (record.add.length == 0 && record.del.length == 0) {
        transfers(selectList.value, addList, delList);
      } else {
        if (record.add.length > 0 && record.del.length == 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                transfers(selectList.value, addList, delList);
              }
            });
          });
        }
        if (record.add.length == 0 && record.del.length > 0) {
          record.del.forEach((item, i) => {
            transferList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = false;
                delList.push(iten);
              }
              if (i == Number(record.del.length - 1) && j == Number(transferList.value.length - 1)) {
                transfers(selectList.value, addList, delList);
              }
            });
          });
        }
        if (record.add.length > 0 && record.del.length > 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                record.del.forEach((itx, m) => {
                  transferList.value.forEach((it, n) => {
                    if (itx == it.code) {
                      it.operate = false;
                      delList.push(it);
                    }
                    if (m == Number(record.del.length - 1) && n == Number(transferList.value.length - 1)) {
                      transfers(selectList.value, addList, delList);
                    }
                  });
                });
              }
            });
          });
        }
      }
    };
    const transfers = (arr1, arr2, arr3) => {
      if (arr2.length == 0 && arr3.length == 0) {
        emits("init", arr1, []);
        modalShow.value = false;
      } else {
        emits("init", arr1, arr2.concat(arr3));
        modalShow.value = false;
      }
      let list1 = [];
      let list2 = [];
      selectList.value.forEach((item, i) => {
        list2.push(item.code);
        if (i == Number(selectList.value.length - 1)) {
          if (originalList.value.length > 0) {
            originalList.value.forEach((iten, j) => {
              list1.push(iten.code);
              if (j == Number(originalList.value.length - 1)) {
                let object = compare(list1, list2);
                differences(object);
              }
            });
          } else {
            let object = compare(list1, list2);
            differences(object);
          }
        }
      });
    };
    const differences = (record) => {
      if (record.add.length == 0 && record.del.length == 0) {
        if (selectList.value == 0) {
          emits("getDifferences", []);
        } else {
          selectList.value.forEach((item, i) => {
            item.operate = true;
            if (i == Number(selectList.value.length - 1)) {
              emits("getDifferences", selectList.value);
            }
          });
        }
      } else {
        let addList = [];
        let delList = [];
        if (record.add.length > 0 && record.del.length == 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                toDifferences(addList, delList);
              }
            });
          });
        }
        if (record.add.length == 0 && record.del.length > 0) {
          record.del.forEach((item, i) => {
            originalList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = false;
                delList.push(iten);
              }
              if (i == Number(record.del.length - 1) && j == Number(originalList.value.length - 1)) {
                toDifferences(addList, delList);
              }
            });
          });
        }
        if (record.add.length > 0 && record.del.length > 0) {
          record.add.forEach((item, i) => {
            selectList.value.forEach((iten, j) => {
              if (item == iten.code) {
                iten.operate = true;
                addList.push(iten);
              }
              if (i == Number(record.add.length - 1) && j == Number(selectList.value.length - 1)) {
                record.del.forEach((itx, m) => {
                  originalList.value.forEach((it, n) => {
                    if (itx == it.code) {
                      it.operate = false;
                      delList.push(it);
                    }
                    if (m == Number(record.del.length - 1) && n == Number(originalList.value.length - 1)) {
                      toDifferences(addList, delList);
                    }
                  });
                });
              }
            });
          });
        }
      }
    };
    const toDifferences = (addList, delList) => {
      if (selectList.value.length == 0) {
        emits("getDifferences", delList.concat(addList));
      } else {
        selectList.value.forEach((item, i) => {
          item.operate = true;
          if (i == Number(selectList.value.length - 1)) {
            emits("getDifferences", delList.concat(addList));
          }
        });
      }
    };
    const chooseWholeStation = () => {
      if (isWhole.value) {
        currentList.value = [];
        selectList.value = [];
      }
    };
    watch(() => currentList.value, (newList, oldList) => {
      if (list.value.length > 0) {
        if (currentList.value.length == list.value.length) {
          indeterminate.value = false;
          single.value = true;
        } else {
          if (currentList.value.length == 0) {
            indeterminate.value = false;
          } else {
            indeterminate.value = true;
          }
        }
      } else {
        indeterminate.value = false;
      }
      if (currentList.value.length == 0) {
        single.value = false;
      }
      if (listLoading.value) {
        let object = compare(oldList, newList);
        handleDate(object);
      }
    }, { deep: true });
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Spin = resolveComponent("Spin");
      const _component_Input = resolveComponent("Input");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_CheckboxGroup = resolveComponent("CheckboxGroup");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modalWidth: 788,
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        onOnCancel: onCancel,
        "mask-closable": false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalTitle" data-v-398ef798${_scopeId}>${ssrInterpolate(_ctx.$t("public.\u9009\u62E9"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "modalTitle" }, toDisplayString(_ctx.$t("public.\u9009\u62E9")), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              loading: loading.value,
              onClick: toSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("public.\u786E\u5B9A"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("public.\u786E\u5B9A")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, { onClick: onCancel }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("public.\u53D6\u6D88"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("public.\u53D6\u6D88")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "primary",
                loading: loading.value,
                onClick: toSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("public.\u786E\u5B9A")), 1)
                ]),
                _: 1
              }, 8, ["loading"]),
              createVNode(_component_Button, { onClick: onCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("public.\u53D6\u6D88")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-398ef798${_scopeId}><div class="content-left" data-v-398ef798${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: loading.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: name.value,
              "onUpdate:modelValue": ($event) => name.value = $event,
              onOnSearch: toSearch,
              search: true,
              placeholder: _ctx.$t("public.\u641C\u7D22")
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "margin": "10px 0" })}" data-v-398ef798${_scopeId}>`);
            if (isShowWhole.value) {
              _push2(ssrRenderComponent(_component_Checkbox, {
                modelValue: isWhole.value,
                "onUpdate:modelValue": ($event) => isWhole.value = $event,
                onOnChange: chooseWholeStation
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u5168\u7AD9"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("aiEnterprise.workbench.\u5168\u7AD9")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="choose" data-v-398ef798${_scopeId}><div class="choose-top" data-v-398ef798${_scopeId}><!--[-->`);
            ssrRenderList(routeList.value, (item, i) => {
              _push2(`<div class="${ssrRenderClass([i == routeList.value.length - 1 ? "active" : "", "choose-top-item"])}" data-v-398ef798${_scopeId}>${ssrInterpolate(item.name)}`);
              if (i != routeList.value.length - 1) {
                _push2(`<span class="division" data-v-398ef798${_scopeId}>&gt;</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
            if (list.value.length > 0) {
              _push2(ssrRenderComponent(_component_Checkbox, {
                modelValue: single.value,
                "onUpdate:modelValue": ($event) => single.value = $event,
                indeterminate: indeterminate.value,
                onOnChange: chooseAll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="chooseAll" data-v-398ef798${_scopeId2}>${ssrInterpolate(_ctx.$t("public.\u5168\u9009"))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "chooseAll" }, toDisplayString(_ctx.$t("public.\u5168\u9009")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="choose-list" data-v-398ef798${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CheckboxGroup, {
              modelValue: currentList.value,
              "onUpdate:modelValue": ($event) => currentList.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(list.value, (item, i) => {
                    _push3(`<div class="choose-list-item" data-v-398ef798${_scopeId2}><div class="list-item-left" data-v-398ef798${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Checkbox, {
                      label: list.value[i].code
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="item-left-content" data-v-398ef798${_scopeId3}>`);
                          if (item.type == "dept") {
                            _push4(`<img${ssrRenderAttr("src", _imports_0)} data-v-398ef798${_scopeId3}>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (item.type == "user") {
                            _push4(`<img${ssrRenderAttr("src", _imports_1)} data-v-398ef798${_scopeId3}>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="list-item-name text-hide" data-v-398ef798${_scopeId3}>${ssrInterpolate(item.name)}</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "item-left-content" }, [
                              item.type == "dept" ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_0
                              })) : createCommentVNode("", true),
                              item.type == "user" ? (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_1
                              })) : createCommentVNode("", true),
                              createVNode("div", { class: "list-item-name text-hide" }, toDisplayString(item.name), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (item.type == "dept") {
                      _push3(`<div class="list-item-right" data-v-398ef798${_scopeId2}>`);
                      if (item.haveSubDeptFlag) {
                        _push3(`<!--[-->`);
                        if (checkLimit(item)) {
                          _push3(`<a class="disable-a" data-v-398ef798${_scopeId2}>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7"))}</a>`);
                        } else {
                          _push3(`<a data-v-398ef798${_scopeId2}>${ssrInterpolate(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7"))}</a>`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, i) => {
                      return openBlock(), createBlock("div", { class: "choose-list-item" }, [
                        createVNode("div", { class: "list-item-left" }, [
                          createVNode(_component_Checkbox, {
                            label: list.value[i].code
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "item-left-content" }, [
                                item.type == "dept" ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: _imports_0
                                })) : createCommentVNode("", true),
                                item.type == "user" ? (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_1
                                })) : createCommentVNode("", true),
                                createVNode("div", { class: "list-item-name text-hide" }, toDisplayString(item.name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["label"])
                        ]),
                        item.type == "dept" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "list-item-right"
                        }, [
                          item.haveSubDeptFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            checkLimit(item) ? (openBlock(), createBlock("a", {
                              key: 0,
                              class: "disable-a"
                            }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 1)) : (openBlock(), createBlock("a", {
                              key: 1,
                              onClick: ($event) => toNext(item)
                            }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 9, ["onClick"]))
                          ], 64)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="content-right" data-v-398ef798${_scopeId}><div class="content-right-name" data-v-398ef798${_scopeId}>${ssrInterpolate(_ctx.$t("publicMsg.\u5DF2\u9009\u62E9"))} (${ssrInterpolate(selectList.value.length)}<span data-v-398ef798${_scopeId}>/9999</span>) </div><div class="content-right-list" data-v-398ef798${_scopeId}><!--[-->`);
            ssrRenderList(selectList.value, (item, i) => {
              _push2(`<div class="right-list-item" data-v-398ef798${_scopeId}>`);
              if (item.type == "dept") {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-398ef798${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.type == "user") {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-398ef798${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-hide" data-v-398ef798${_scopeId}>${ssrInterpolate(item.name)}</div><img class="list-item-close"${ssrRenderAttr("src", _imports_2)} data-v-398ef798${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "content-left" }, [
                  createVNode(_component_Spin, {
                    fix: "",
                    show: loading.value
                  }, null, 8, ["show"]),
                  createVNode(_component_Input, {
                    modelValue: name.value,
                    "onUpdate:modelValue": ($event) => name.value = $event,
                    onOnSearch: toSearch,
                    search: true,
                    placeholder: _ctx.$t("public.\u641C\u7D22")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                  createVNode("div", { style: { "margin": "10px 0" } }, [
                    isShowWhole.value ? (openBlock(), createBlock(_component_Checkbox, {
                      key: 0,
                      modelValue: isWhole.value,
                      "onUpdate:modelValue": ($event) => isWhole.value = $event,
                      onOnChange: chooseWholeStation
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("aiEnterprise.workbench.\u5168\u7AD9")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "choose" }, [
                    createVNode("div", { class: "choose-top" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(routeList.value, (item, i) => {
                        return openBlock(), createBlock("div", {
                          class: ["choose-top-item", i == routeList.value.length - 1 ? "active" : ""],
                          onClick: ($event) => toRoute(item, i),
                          key: i
                        }, [
                          createTextVNode(toDisplayString(item.name), 1),
                          i != routeList.value.length - 1 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "division"
                          }, ">")) : createCommentVNode("", true)
                        ], 10, ["onClick"]);
                      }), 128))
                    ]),
                    list.value.length > 0 ? (openBlock(), createBlock(_component_Checkbox, {
                      key: 0,
                      modelValue: single.value,
                      "onUpdate:modelValue": ($event) => single.value = $event,
                      indeterminate: indeterminate.value,
                      onOnChange: chooseAll
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "chooseAll" }, toDisplayString(_ctx.$t("public.\u5168\u9009")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "indeterminate"])) : createCommentVNode("", true),
                    createVNode("div", { class: "choose-list" }, [
                      createVNode(_component_CheckboxGroup, {
                        modelValue: currentList.value,
                        "onUpdate:modelValue": ($event) => currentList.value = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item, i) => {
                            return openBlock(), createBlock("div", { class: "choose-list-item" }, [
                              createVNode("div", { class: "list-item-left" }, [
                                createVNode(_component_Checkbox, {
                                  label: list.value[i].code
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "item-left-content" }, [
                                      item.type == "dept" ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: _imports_0
                                      })) : createCommentVNode("", true),
                                      item.type == "user" ? (openBlock(), createBlock("img", {
                                        key: 1,
                                        src: _imports_1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", { class: "list-item-name text-hide" }, toDisplayString(item.name), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["label"])
                              ]),
                              item.type == "dept" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "list-item-right"
                              }, [
                                item.haveSubDeptFlag ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  checkLimit(item) ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    class: "disable-a"
                                  }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 1)) : (openBlock(), createBlock("a", {
                                    key: 1,
                                    onClick: ($event) => toNext(item)
                                  }, toDisplayString(_ctx.$t("aiEnterprise.workbench.\u4E0B\u7EA7")), 9, ["onClick"]))
                                ], 64)) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true)
                            ]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "content-right" }, [
                  createVNode("div", { class: "content-right-name" }, [
                    createTextVNode(toDisplayString(_ctx.$t("publicMsg.\u5DF2\u9009\u62E9")) + " (" + toDisplayString(selectList.value.length), 1),
                    createVNode("span", null, "/9999"),
                    createTextVNode(") ")
                  ]),
                  createVNode("div", { class: "content-right-list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(selectList.value, (item, i) => {
                      return openBlock(), createBlock("div", {
                        class: "right-list-item",
                        key: i
                      }, [
                        item.type == "dept" ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: _imports_0
                        })) : createCommentVNode("", true),
                        item.type == "user" ? (openBlock(), createBlock("img", {
                          key: 1,
                          src: _imports_1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "text-hide" }, toDisplayString(item.name), 1),
                        createVNode("img", {
                          onClick: ($event) => toDelete(i, item.code),
                          class: "list-item-close",
                          src: _imports_2
                        }, null, 8, ["onClick"])
                      ]);
                    }), 128))
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/addMember2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-398ef798"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=addMember2-d1ffd968.mjs.map
