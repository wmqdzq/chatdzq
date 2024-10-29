import{_ as $}from"./ossUploaderNew.bc250fbe.js";import{_ as ee}from"./cEdit.38c1a167.js";import{a as te,b as oe,r as a,f as ne,h as N,i as p,j as s,y as e,v as J,B as ae,x as U,F as B,A,k as l,l as G,s as W,C as se,D as ie,m as le,o as h,G as ce}from"./entry.b3d0478f.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./stringify.f484c508.js";import"./_commonjsHelpers.86de73f2.js";import"./copy.ac3b57f3.js";import"./content.2ef9ea5b.js";import"./_commonjs-dynamic-modules.302442b1.js";const re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA7tJREFUWEfNmN1rHGUUh58zO7vZZJPY3WytaRSxgqDFL6KCFmmuFCxeeCMIIgUFrwSR/gEF/wDB61IoCELuCopeacVCREQqaMSv+tFkay1xN8luPnfnyJlx0+xmdme2yWzywt7s+3Ge+Z1z3nNmhA5DVaXTXBL/i4iGndsCYVCXLpF66gEeBiYR7k0CZseZyp/q8XXuV2aZorEddgtQpzW1+iyTqrwLPNcXsDYjIsyo8tbQZa7Iy9KwaR9welpTL57kFa/BeSC9H3BbNpUVx+XN7Bd8aJA+4GJJn3fh030FazcuvJAbl0+k/LseygxwBfoUb3FVEEobaxyX6py+LQ7vxd3Xz3XqcUZWruvnqkz103APti5LtaQLAoUeNnVfqqAeaAP0/5tNBCQF4jTTMp41hWWplZrHxNvUbZW3CZtVWF+AtQWoLwMOpAYhdxQyBciM9GZnbwAV6quwdBVq18IBTL2BAhx+ch8AN2uw8G2gXmi5MrgxKD4euLqXsWsFza03v4GNSme4bBHGHguBsxiNqPi7Blz+Ayo/9q5cfQ3s4aJicleAXgP+/hIaqyGAAtnDUAxRzuAWf4LNZThyAizLO41dAZpbb8yEH+1k4OjUTrf6cD/Dynywb3wK3MGEAKvXoPx9+OGpLBSfaHWhZfriL7fgbGdxEgbvTAiwW/yZyfQIFB4NIMPgbE3hEchNJARY/QvKP3S/NNKjkH8IanPBr30kquB6Gf75qpdbrW2tA+Mnwc0mpKC3AfOfAaFvE9Hg6Tvgrme6r7vtLPbqsHK9c5JE4Vnpy1v8jScAqHWolaA8e/vqDR6BMSt9e11JmnCV2VvtVJRa2+dNuUw+KH2pTPTOnlzsu7UE3eDsgrYS1h6XBuYOQ3oYDj0YD87wYwP6cPNB3e3UQfp9391BCbOGdQtSIDUAQxMwkI92a4vicRpWg6vNB/XTNxwy3CEYORYA2rBQsM7aV8EBcXsDa5qIVDAOnCk3en8AFxX00VHXuqIroKlVnYtWbvg+GL5n7+EiY3BjKagUcdy618rFcvH6Ivz7HdRrOx2zPeaSgotU0LLVrpWl31oh+wUXCehnYxtkP+GagHatut2yyyCttK3fDN7OksjWDvY9y+KSdd5R6W+Q1r1YpUgy5to4bhjgR8CpKMB9mr9o32ZeFbgQfKQ4UKOuwutSqWg+s8rHqjx9oPCUGXV5ye/GanN6Cof3gWMHBPJqQ3lndEIu+oBnz6pz5g1ec1KcVuVEVFYn+BCewIzncS43wQciUv8PC2iubeKLpoYAAAAASUVORK5CYII=",de="data:image/png;base64,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",i=w=>(se("data-v-7985c0bd"),w=w(),ie(),w),ue={class:"account"},me={class:"account-top"},ve=i(()=>e("div",{class:"item-title"},[e("img",{src:re}),e("div",null,"网站配置")],-1)),ge=[ve],pe=i(()=>e("div",{class:"item-title"},[e("img",{src:de}),e("div",null,"应用配置")],-1)),he={class:"item-bar"},_e={class:"item-bottom"},Ae=i(()=>e("div",{class:"account-division"},null,-1)),fe={class:"account-form"},we={class:"account-form-item"},be=i(()=>e("div",{class:"form-item-name"},"网站名称",-1)),ye={class:"account-form-item"},Ne={class:"form-item-name"},Ue=i(()=>e("span",{class:"blue"},"用在哪里",-1)),Be=["src"],Se=i(()=>e("p",null,"支持PNG格式，建议尺寸：72×72",-1)),Ie={class:"account-form-item"},Ce={class:"form-item-name"},Ge=i(()=>e("span",{class:"blue"},"用在哪里",-1)),xe=["src"],Ve=i(()=>e("p",null,"支持PNG格式，建议尺寸：235×60",-1)),Pe={class:"account-form-item"},Re={class:"form-item-name"},Ee=i(()=>e("span",{class:"blue"},"用在哪里",-1)),Qe=["src"],Oe=i(()=>e("p",null,"支持PNG格式，建议比例：2:3",-1)),Le={class:"account-form-item"},Te={class:"form-item-name"},De=i(()=>e("span",{class:"blue"},"用在哪里",-1)),Ke=["src"],qe=i(()=>e("p",null,"支持PNG格式，建议比例1:1",-1)),Me={class:"account-form-item"},ze=i(()=>e("div",{class:"form-item-name"},"公司联系方式",-1)),Xe={class:"account-form-item",style:{"max-width":"100%"}},Je={class:"form-item-name"},We=i(()=>e("span",{class:"blue"},"用在哪里",-1)),Fe=["src"],Ye={class:"form-item-content"},je=i(()=>e("div",{class:"content-name"},"标题",-1)),He={class:"form-item-content",style:{"align-items":"flex-start"}},ke=i(()=>e("div",{class:"content-name"},"内容",-1)),Ze={class:"content-area"},$e={class:"account-form-item"},et={class:"account-form-item edit"},tt={class:"form-item-name"},ot={key:0},nt=i(()=>e("span",{class:"blue"},"用在哪里",-1)),at=["src"],st={class:"img-list"},it={class:"list-upload"},lt={class:"account-form-item"},ct=te({__name:"index",setup(w){const{proxy:u}=le(),F=oe(),v=a(!1);a(!1),a(""),a([]),a();const f=a(1),x=a(""),V=a(""),P=a(""),R=a(""),E=a(""),Q=a(""),O=a(""),L=a(""),T=a(""),D=a(""),K=a(""),o=a({name:"",logo:"",navbarLogo:"",customerServiceQrPic:"",wechatQrPic:"",companyContactInformation:"",websiteNoticeTitle:"",websiteNoticeContent:""}),S=a({web:0,edit:0}),g=a([{title:"AI抠图",name:"背景参考图",type:"AI_CUTOUT_IMG",max:8,list:[{type:"AI_CUTOUT_IMG",code:"",channelUrl:""}],img:E,desc:"支持PNG格式，建议尺寸：1024*1024"},{title:"AI换背景",name:"商品参考图",type:"AI_BACKGROUND_GOODS",max:8,list:[{type:"AI_BACKGROUND_GOODS",code:"",channelUrl:""}],img:Q,desc:"支持PNG格式，建议尺寸：1024*1024"},{title:"",name:"背景参考图",type:"AI_BACKGROUND_IMG",max:8,list:[{type:"AI_BACKGROUND_IMG",code:"",channelUrl:""}],img:O,desc:"支持PNG格式，建议尺寸：1024*1024"},{title:"AI模特",name:"服装参考图",type:"AI_PERSON_CLOTHES",max:8,list:[{type:"AI_PERSON_CLOTHES",code:"",channelUrl:""}],img:L,desc:"支持PNG格式，建议尺寸：1024*1024"},{title:"",name:"模特参考图",type:"AI_PERSON_MODEL",max:8,list:[{type:"AI_PERSON_MODEL",code:"",channelUrl:""}],img:T,desc:"支持PNG格式，建议尺寸：1024*1024"},{title:"",name:"背景参考图",type:"AI_PERSON_BACKGROUND",max:8,list:[{type:"AI_PERSON_BACKGROUND",code:"",channelUrl:""}],img:D,desc:"支持PNG格式，建议尺寸：1024*1024"}]),Y=()=>{let c={bizType:"OFFICE_WEB_SITE",viewType:"SITE"};u.$api.querySiteSetup(c).then(t=>{o.value.name=t.data.name,o.value.logo=t.data.logo,o.value.navbarLogo=t.data.navbarLogo,o.value.customerServiceQrPic=t.data.customerServiceQrPic,o.value.wechatQrPic=t.data.wechatQrPic,o.value.companyContactInformation=t.data.companyContactInformation,o.value.websiteNoticeTitle=t.data.websiteNoticeTitle,o.value.websiteNoticeContent=t.data.websiteNoticeContent}),u.$api.getReferenceImagCompletionDegreee().then(t=>{S.value.edit=t.data})},j=c=>{f.value=c,H()},q=a(null),H=()=>{u.$api.queryReferenceImageTagInfo().then(c=>{q.value=u.$filterTypeGrouped(c.data),g.value.forEach(t=>{t.list=q.value[t.type]||[{type:t.type,code:"",channelUrl:""}],t.list&&t.list.length<8&&t.list[0].channelUrl&&t.list.push({type:t.list[0].type,code:"",channelUrl:""})})})},M=c=>{if(c=="web"){if(u.$isEmpty(o.value.name)){u.$Message.error("请输入网站名称");return}v.value=!0,u.$api.saveSiteSetup(o.value).then(()=>{v.value=!1,u.$Message.success("保存成功"),F.setTopNavList(u)}).catch(()=>{v.value=!1})}if(c=="edit"){v.value=!0;let t=[];g.value.forEach((r,d)=>{r.list&&r.list.length>0&&r.list.forEach((m,_)=>{if(m.code&&t.push({type:m.type,code:m.code}),d==Number(g.value.length-1)&&_==Number(r.list.length-1)){let I={addTagInfoTeamReqVOList:t};u.$api.saveReferenceImage(I).then(()=>{v.value=!1,u.$Message.success("保存成功")}).catch(()=>{v.value=!1})}})})}},k=(c,t,r)=>{g.value.forEach(d=>{d.type==r&&(d.list[t].code=c[0].code,d.list[t].channelUrl=c[0].url,d.list.length<d.max&&d.list.push({type:r,code:"",channelUrl:""}))})},Z=(c,t)=>{g.value.forEach(r=>{r.type==t&&r.list.length>1})};return ne(()=>{Y(),x.value=window.location.origin+"/image/home/bg1.png",V.value=window.location.origin+"/image/home/bg2.png",P.value=window.location.origin+"/image/home/bg3.png",R.value=window.location.origin+"/image/home/bg4.png",E.value=window.location.origin+"/image/home/bg5.png",Q.value=window.location.origin+"/image/home/bg6.png",O.value=window.location.origin+"/image/home/bg7.png",L.value=window.location.origin+"/image/home/bg8.png",T.value=window.location.origin+"/image/home/bg9.png",D.value=window.location.origin+"/image/home/bg10.png",K.value=window.location.origin+"/image/home/bg11.png"}),(c,t)=>{const r=N("Spin"),d=N("Input"),m=N("Poptip"),_=$,I=ee,z=N("Button");return h(),p("div",ue,[s(r,{fix:"",show:v.value},null,8,["show"]),e("div",me,[e("div",{class:J(["account-top-item",f.value==1?"active":""]),onClick:t[0]||(t[0]=n=>f.value=1)},ge,2),e("div",{class:J(["account-top-item",f.value==2?"active":""]),onClick:t[1]||(t[1]=n=>j(2))},[pe,e("div",he,[e("div",{class:"bar-interior",style:ae({width:S.value.edit+"%"})},null,4)]),e("div",_e,"配置完成度"+U(S.value.edit)+"%",1)],2)]),Ae,e("div",fe,[f.value==1?(h(),p(B,{key:0},[e("div",we,[be,s(d,{modelValue:o.value.name,"onUpdate:modelValue":t[2]||(t[2]=n=>o.value.name=n),placeholder:"请输入企业名称"},null,8,["modelValue"])]),e("div",ye,[e("div",Ne,[A(" 网站logo "),s(m,{trigger:"hover",placement:"right-start"},{content:l(()=>[e("img",{width:"350",src:x.value,alt:""},null,8,Be)]),default:l(()=>[Ue]),_:1})]),s(_,{url:o.value.logo,"onUpdate:url":t[3]||(t[3]=n=>o.value.logo=n)},null,8,["url"]),Se]),e("div",Ie,[e("div",Ce,[A(" 网站logo-导航 "),s(m,{trigger:"hover",placement:"right-start"},{content:l(()=>[e("img",{width:"350",src:V.value,alt:""},null,8,xe)]),default:l(()=>[Ge]),_:1})]),s(_,{url:o.value.navbarLogo,"onUpdate:url":t[4]||(t[4]=n=>o.value.navbarLogo=n)},null,8,["url"]),Ve]),e("div",Pe,[e("div",Re,[A(" 客服二维码 "),s(m,{trigger:"hover",placement:"right-start"},{content:l(()=>[e("img",{width:"350",src:P.value,alt:""},null,8,Qe)]),default:l(()=>[Ee]),_:1})]),s(_,{url:o.value.customerServiceQrPic,"onUpdate:url":t[5]||(t[5]=n=>o.value.customerServiceQrPic=n)},null,8,["url"]),Oe]),e("div",Le,[e("div",Te,[A(" 公众号二维码 "),s(m,{trigger:"hover",placement:"right-start"},{content:l(()=>[e("img",{width:"350",src:R.value,alt:""},null,8,Ke)]),default:l(()=>[De]),_:1})]),s(_,{url:o.value.wechatQrPic,"onUpdate:url":t[6]||(t[6]=n=>o.value.wechatQrPic=n)},null,8,["url"]),qe]),e("div",Me,[ze,s(d,{modelValue:o.value.companyContactInformation,"onUpdate:modelValue":t[7]||(t[7]=n=>o.value.companyContactInformation=n),type:"textarea",rows:3,placeholder:"请输入企业名称"},null,8,["modelValue"])]),e("div",Xe,[e("div",Je,[A(" 网站公告 "),s(m,{trigger:"hover",placement:"right-start"},{content:l(()=>[e("img",{width:"350",src:K.value,alt:""},null,8,Fe)]),default:l(()=>[We]),_:1})]),e("div",Ye,[je,s(d,{style:{"max-width":"400px"},modelValue:o.value.websiteNoticeTitle,"onUpdate:modelValue":t[8]||(t[8]=n=>o.value.websiteNoticeTitle=n),placeholder:"请输入标题"},null,8,["modelValue"])]),e("div",He,[ke,e("div",Ze,[s(I,{content:o.value.websiteNoticeContent,"onUpdate:content":t[9]||(t[9]=n=>o.value.websiteNoticeContent=n)},null,8,["content"])])])]),e("div",$e,[s(z,{type:"primary",onClick:t[10]||(t[10]=n=>M("web")),loading:v.value},{default:l(()=>[A("确认")]),_:1},8,["loading"])])],64)):G("",!0),f.value==2?(h(),p(B,{key:1},[(h(!0),p(B,null,W(g.value,(n,C)=>(h(),p("div",et,[e("div",tt,[e("div",null,[n.title?(h(),p("div",ot,U(n.title),1)):G("",!0),e("div",null,U(n.name),1)]),s(m,{trigger:"hover",placement:"right-start"},{content:l(()=>[e("img",{width:"350",src:n.img,alt:""},null,8,at)]),default:l(()=>[nt]),_:2},1024)]),e("div",st,[(h(!0),p(B,null,W(g.value[C].list,(X,b)=>(h(),p("div",it,[s(_,{url:g.value[C].list[b].channelUrl,"onUpdate:url":y=>g.value[C].list[b].channelUrl=y,onToRemove:y=>Z(b,X.type),onUploadSuccess:y=>k(y,b,X.type)},null,8,["url","onUpdate:url","onToRemove","onUploadSuccess"])]))),256))]),e("p",null,U(n.desc),1)]))),256)),e("div",lt,[s(z,{type:"primary",onClick:t[11]||(t[11]=n=>M("edit")),loading:v.value},{default:l(()=>[A("确认")]),_:1},8,["loading"])])],64)):G("",!0)])])}}});const wt=ce(ct,[["__scopeId","data-v-7985c0bd"]]);export{wt as default};
