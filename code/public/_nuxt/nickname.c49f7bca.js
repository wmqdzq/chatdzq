import{a as h,r as d,b as x,h as p,c as V,k as s,K as y,o as w,j as i,A as m,C,D as I,y as S,m as B,G as $}from"./entry.d811778a.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";const b=n=>(C("data-v-51d611a8"),n=n(),I(),n),M=b(()=>S("div",{class:"modal-title"},"编辑昵称",-1)),U=h({__name:"nickname",emits:["init"],setup(n,{expose:_,emit:v}){const o=d(!1),e=d({}),{proxy:t}=B(),l=d(!1),f=x();_({showFn:u=>{e.value=JSON.parse(JSON.stringify(u)),o.value=!0}});const k=()=>{if(t.$isEmpty(e.value.nickName)){t.$Message.error("请输入昵称");return}l.value=!0,e.value.oldPassword="",e.value.password="";let u={avatar:e.value.avatar,code:e.value.code,email:e.value.email,nickName:e.value.nickName,phone:e.value.phone};t.$api.editLoginAccount(u).then(()=>{l.value=!1,t.$Message.success("已更改"),o.value=!1,f.getUserPoints(t),v("init")}).catch(()=>{l.value=!1})};return(u,a)=>{const g=p("Input"),r=p("Button"),N=y;return w(),V(N,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=c=>o.value=c),"mask-closable":!1},{header:s(()=>[M]),footer:s(()=>[i(r,{onClick:a[1]||(a[1]=c=>o.value=!1)},{default:s(()=>[m("取消")]),_:1}),i(r,{onClick:k,type:"primary",loading:l.value},{default:s(()=>[m("确定")]),_:1},8,["loading"])]),default:s(()=>[i(g,{modelValue:e.value.nickName,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value.nickName=c),placeholder:"请输入昵称"},null,8,["modelValue"])]),_:1},8,["modelValue"])}}});const P=$(U,[["__scopeId","data-v-51d611a8"]]);export{P as default};