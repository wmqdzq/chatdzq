import{_ as T}from"./sPrompt.b2dad4d0.js";import{_ as Y}from"./addMember2.34cceba5.js";import{a as F,S as q,r as a,e as x,h as L,i as u,y as v,x as p,j as f,k as g,m as U,o as d,F as S,s as C,l as $,G as j}from"./entry.b3d0478f.js";import"./close.79d7cbfd.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";const z={class:"workbench"},H={style:{display:"flex","align-items":"center"}},K={key:0,class:"tag2"},Q={key:1,class:"tag3"},W={class:"tag1"},X=["onClick"],Z=F({__name:"app",setup(ee){const{locale:te,t:h}=q(),k=a();x();const E=a(),R=a(!1),t=a(!1),{proxy:n}=U(),w=a([{title:h("aiEnterprise.workbench.应用名称"),key:"cateName",slot:"cateName"},{title:h("aiEnterprise.workbench.可见范围"),key:"visibleRangeList",slot:"visibleRangeList"},{title:h("aiEnterprise.workbench.是否显示"),key:"dataStatus",slot:"dataStatus"},{title:h("public.操作"),slot:"action"}]),N=a(""),O=a([]),I=a(""),o=a([]),A=a([]),m=()=>{t.value=!0,n.$api.queryAiApplyList({type:"AI_APPLY_CATEGORY"}).then(e=>{o.value=JSON.parse(JSON.stringify(e.data)),A.value=JSON.parse(JSON.stringify(e.data)),t.value=!1}).catch(()=>{t.value=!1})},D=()=>{t.value=!0,n.$api.deleteSecondView({viewCode:o.value[I.value].code}).then(()=>{t.value=!1,n.$Message.success("已删除"),m()}).catch(()=>{t.value=!1})},P=(e,l)=>{O.value=A.value[l].permissionList,N.value=e.code,k.value.showFn(JSON.parse(JSON.stringify(e.permissionList)),JSON.parse(JSON.stringify(O.value)))},J=e=>{n.$api.editAiApply({code:o.value[e].code,dataStatus:o.value[e].dataStatus}).then(()=>{n.$Message.success("已更改"),m()})},M=e=>{t.value=!0,n.$api.operateEquityPermission({code:N.value,permissionList:e}).then(()=>{n.$Message.success("已更改"),t.value=!1,m()}).catch(()=>{t.value=!1})},V=(e,l)=>{let i=B(o.value,e,l),_={type:"AI_APPLY_CATEGORY",codeList:[]};t.value=!0,i.forEach((y,b)=>{_.codeList.push(y.code),b==Number(i.length-1)&&n.$api.sortAiApplyList(_).then(()=>{t.value=!1,n.$Message.success("已更改"),m()}).catch(()=>{t.value=!1})})},B=(e,l,i)=>{if(l>=0&&l<e.length&&i>=0&&i<e.length){let _=e[l];e[l]=e[i],e[i]=_}else console.error("Invalid indices");return e};return m(),(e,l)=>{const i=L("Icon"),_=L("Switch"),y=L("Table"),b=T,G=Y;return d(),u("div",z,[v("div",null,p(e.$t("aiEnterprise.workbench.可进行拖动修改排序")),1),f(y,{draggable:"",onOnDragDrop:V,columns:w.value,data:o.value,loading:t.value,"max-height":"500",border:o.value.length>0},{cateName:g(({row:c,index:r})=>[v("div",H,[f(i,{type:"md-menu",class:"pointer"}),v("div",null,p(c.cateName),1)])]),visibleRangeList:g(({row:c,index:r})=>[c.permissionList&&c.permissionList.length>0?(d(!0),u(S,{key:0},C(c.permissionList,s=>(d(),u(S,null,[s.type=="user"?(d(),u("div",K,p(s.name),1)):$("",!0),s.type=="dept"?(d(),u("div",Q,p(s.name),1)):$("",!0)],64))),256)):(d(!0),u(S,{key:1},C(c.visibleRangeList,s=>(d(),u("div",W,p(s),1))),256))]),dataStatus:g(({row:c,index:r})=>[f(_,{modelValue:o.value[r].dataStatus,"onUpdate:modelValue":s=>o.value[r].dataStatus=s,onOnChange:s=>J(r),"true-value":"NORMAL","false-value":"DISABLE"},null,8,["modelValue","onUpdate:modelValue","onOnChange"])]),action:g(({row:c,index:r})=>[v("span",{onClick:s=>P(c,r)},p(e.$t("public.配置")),9,X)]),_:1},8,["columns","data","loading","border"]),f(b,{ref_key:"sPromptRef",ref:E,title:"删除",loading:R.value,onOk:D},{content:g(()=>[v("div",null,p(e.$t("aiEnterprise.workbench.是否确认删除"))+"?",1)]),_:1},8,["loading"]),f(G,{ref_key:"addMemberRef",ref:k,userOpen:!0,onGetDifferences:M},null,512)])}}});const ce=j(Z,[["__scopeId","data-v-dbc2c81c"]]);export{ce as default};
