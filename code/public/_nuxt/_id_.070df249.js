import{a as B,b as U,e as H,r as s,t as G,f as O,h as $,i as c,y as i,x as D,F as h,s as L,j,m as W,p as K,C as Q,D as X,o as n,v as N,B as Z,c as T,l as S,G as ee}from"./entry.b3d0478f.js";import{_ as te}from"./robot.23bfda18.js";import{i as oe}from"./template.5cceb4cb.js";import{c as ne}from"./content.2ef9ea5b.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./ossUploader.17912e89.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./createLoading.vue.f649d7e2.js";import"./close3.bdd7467f.js";const Y=d=>(Q("data-v-c4535ae6"),d=d(),X(),d),se={class:"preview"},ae={class:"preview-top"},ce={class:"preview-content"},re={class:"logo"},le=["src"],ie={key:1,src:te},ue={key:1,src:"https://hz-oss.chatdzq.com/file/common/static-web/d638965e-dd7b-4fe9-b03b-3f39c3342d1a.png"},pe=["src"],de=Y(()=>i("h3",null,"您可以告诉我需要创作什么内容？比如下面：",-1)),ve=["onClick"],me=Y(()=>i("div",{id:"bottoms"},null,-1)),ye={class:"preview-content-bottom"},he=B({__name:"shareDialogue",props:{data:{},name:{}},setup(d){const C=d,_=U(),{proxy:r}=W(),v=H(),a=s([]),m=s({});s(null);const k=s([]);s("");const E=s(""),u=s("");s("CHAT");const I=s(!1);s(!1);const b=s(!1),x=s("");G(C);const P=()=>{let t=new Date().getTime();E.value=t.toString()},V=async()=>{var y;if(b.value){r.$Message.error("该链接已被关闭。请联系管理员。");return}if(I.value)return;if(r.$isEmpty(u.value)){r.$Message.error("请输入问题");return}var t="";t=window.location.host;const o={sk:((y=v.currentRoute.value.params)==null?void 0:y.id)??"",stream:!0,groupId:v.currentRoute.value.query.groupId?v.currentRoute.value.query.groupId:E.value,content:u.value,source:t};a.value.push({content:u.value,type:"USER",chatType:"CHAT"}),R(),u.value="",_.setIsLoad(!0);const p=await fetch(location.protocol+"//"+location.host+"/portal/ai/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});a.value.push({content:"",type:"SYSTEM",chatType:"CHAT"}),I.value=!1;const f=p.body.getReader();let e=new TextDecoder,l="";return f.read().then(function w({done:M,value:A}){if(M)return;console.log(A),l+=e.decode(A,{stream:!0});let g=l.indexOf(`
`);for(;g!==-1;){const J=l.slice(0,g);l=l.slice(g+1),q(J),g=l.indexOf(`
`)}return f.read().then(w)})},q=t=>{const o=JSON.parse(JSON.parse(t));o.extend==="END"&&_.setIsLoad(!1),a.value[a.value.length-1].chatType=(o==null?void 0:o.type)??"CHAT",a.value[a.value.length-1].content+=o.content,R()},R=async()=>{var t;await K(),(t=document.querySelector("#bottoms"))==null||t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},z=()=>{var t;r.$api.robot_checkRobotInfoByEncryCode({encryCode:((t=v.currentRoute.value.params)==null?void 0:t.id)??""}).then(o=>{b.value=!1,x.value=o.data.code,m.value=o.data;let p=o.data.welcomeContent;k.value=o.data.robotPromptText?o.data.robotPromptText.split("@"):[],r.$isEmpty(p)||(r.$isEmpty(a.value)?a.value.push({content:p,type:"SYSTEM",chatType:"CHAT"}):(a.value[0].content=p,a.value[0].type="SYSTEM",a.value[0].chatType="CHAT"))}).catch(()=>{b.value=!0})},F=t=>{t.srcElement.scrollTop<10};return O(()=>{P(),z(),r.$toMonitorA()}),(t,o)=>{const p=$("Spin"),f=$("Image");return n(),c("div",se,[i("div",ae,D(m.value.name),1),i("div",ce,[i("div",{class:"preview-content-main",onScroll:F},[(n(!0),c(h,null,L(a.value,(e,l)=>(n(),c("div",{class:N(["content",e.type=="SYSTEM"?"left":"right"])},[i("div",re,[e.type=="SYSTEM"?(n(),c(h,{key:0},[m.value.robotLogo?(n(),c("img",{key:0,src:m.value.robotLogo},null,8,le)):(n(),c("img",ie))],64)):(n(),c("img",ue))]),i("div",{class:N(["name",e.type=="SYSTEM"?"blue":""]),style:Z({"background-color":e.type=="USER"?m.value.dialogueColor:"#fff"})},[t.$isEmpty(e.content)?(n(),T(p,{key:0})):(n(),c(h,{key:1},[e.chatType=="CHAT"?(n(),T(ne,{key:0,content:e.content,isShowTagView:!1},null,8,["content"])):S("",!0),e.chatType=="DRAW"?(n(),T(f,{key:1,preview:!0,"preview-list":[e.content],class:"cImage-img",src:e.content,fit:"cover"},null,8,["preview-list","src"])):S("",!0),e.chatType=="VIDEO"?(n(),c("video",{key:2,width:"658",height:"444",controls:"",src:e.content},null,8,pe)):S("",!0)],64)),e.type=="SYSTEM"&&l==0?(n(),c(h,{key:2},[de,(n(!0),c(h,null,L(k.value,(y,w)=>(n(),c("div",{class:"tag",key:"prompt"+w,onClick:M=>u.value=y},D(y),9,ve))),128))],64)):S("",!0)],6)],2))),256)),me],32),i("div",ye,[j(oe,{content:u.value,"onUpdate:content":o[0]||(o[0]=e=>u.value=e),isAgreement:!1,isPaus:!0,robotCode:x.value,onSubmit:V,isLoginCheck:!1},null,8,["content","robotCode"])])])])}}});const _e=ee(he,[["__scopeId","data-v-c4535ae6"]]),Me=B({__name:"[id]",setup(d){H();const C=s({code:"",type:"",name:"",llmCode:"",promptText:"",hitRate:"",styleSetup:"",typeName:""});O(()=>{_()});const _=async()=>{};return(r,v)=>(n(),T(_e,{data:C.value.styleSetup},null,8,["data"]))}});export{Me as default};