import{a as _,r as u,e as l,b as d,f,w as h,i as y,j as r,y as g,B as v,o as R,ad as x,m as B,G as N}from"./entry.d811778a.js";import{H as b}from"./index.e3b09397.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./firmModal.1fcb4ae8.js";import"./avatar.476f89d8.js";import"./accountModel.d9e2d254.js";import"./ossUploaderNew.392fe014.js";import"./upload.51048db5.js";import"./svga.1e6ae788.js";import"./loding.bf55ea5c.js";import"./stringify.f484c508.js";import"./phone.9cb2e3b3.js";import"./pwd.2a67e63c.js";import"./nickname.c49f7bca.js";const C={class:"noleft"},H=_({__name:"noleft",setup(I){const a=u(68),n=l(),{proxy:s}=B(),c=d(),i=()=>{n.currentRoute.value.path.split("/")[2]=="creative"&&p("QUESTION_BANK_ROBOT_CATEGORY")},p=async t=>{try{const e={keyword:"",type:t},o=await s.$api.queryCategoryRobotList(e);c.setRobotList(o.data)}catch(e){console.error("请求失败：",e)}};f(()=>{});const m=()=>{var t;a.value=Number((t=document.getElementById("main-header"))==null?void 0:t.offsetHeight)};return h(()=>n.currentRoute.value.path,()=>{i()},{immediate:!0}),(t,e)=>{const o=x;return R(),y("div",C,[r(b,{id:"main-header",onInit:m}),g("div",{class:"noleft-content",style:v({height:"calc(100vh - "+a.value+"px )"})},[r(o)],4)])}}});const M=N(H,[["__scopeId","data-v-607c4f50"]]);export{M as default};