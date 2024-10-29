import{_ as lt}from"./cTopContent.26d5040d.js";import{_ as st,c as nt}from"./index.7f959db3.js";import{a as it,r as s,b as ut,e as rt,w as ct,h as A,i as R,j as i,k as b,y as c,u as N,l as x,m as pt,o as L,x as dt,c as H,G as vt}from"./entry.b3d0478f.js";import{r as mt}from"./recordNew.9940343d.js";import{i as ft}from"./templateNew.43c0672b.js";import{_ as gt}from"./robot.23bfda18.js";import"./workbenchNav.3ded0db1.js";import"./sPrompt.b2dad4d0.js";import"./close.79d7cbfd.js";import"./cCreate.fa3fcebe.js";import"./ossUploaderNew.bc250fbe.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./stringify.f484c508.js";import"./addBase.6bac7936.js";import"./curriculum.943a89fc.js";import"./unit.b72b5b5d.js";import"./avatar.476f89d8.js";import"./index.878cfd5e.js";import"./accountModel.dd81b68e.js";import"./phone.a2bf3e1d.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./pwd.e8e85914.js";import"./nickname.29f4a130.js";import"./employee.710f3e09.js";import"./icon1.1be57e26.js";import"./settings.2f50ce3a.js";import"./icon10.dda11adf.js";import"./hot.d804d2cf.js";import"./edit1.66aaae0f.js";import"./del1.900d6e9b.js";import"./icon14.d8f5d4e2.js";import"./delete.93bc223f.js";import"./previewImg.5ba94f0e.js";import"./copy.ac3b57f3.js";import"./switch.ceeadd7d.js";import"./content.2ef9ea5b.js";import"./barrage.8a0f0b41.js";import"./close3.bdd7467f.js";const Lt={class:"talk"},Ct={class:"talk-title",style:{"margin-right":"10px"}},_t={class:"talk-star"},yt={class:"talk-content"},ht={class:"content-tag"},bt={class:"content-dialog"},kt={class:"dialog-content"},St={class:"content"},Et={class:"input"},Rt={key:0,class:"input-area"},$t={key:0,class:"chatGroupList"},Pt=it({__name:"talk",setup(Gt){const $=s(null),F=s([]),C=s(1),P=ut(),G=s(!1),{proxy:a}=pt(),q=rt(),o=s({}),v=s([]),m=s([]),_=s(""),p=s(""),I=s(!1),B=s(!1),f=s(!1),y=s([]),w=s(null),k=s(""),r=s({}),S=s(""),g=s({loadMore:!0,pageNo:1,pageSize:20}),z=()=>{a.$api.space_robotGetRobotInfo({code:q.currentRoute.value.query.robotCode}).then(e=>{o.value=e.data,F.value=e.data.robotPromptText?e.data.robotPromptText.split("@"):[],a.$isEmpty(e.data.welcomeContent)||v.value.push({content:e.data.welcomeContent,type:"SYSTEM",chatType:"CHAT",robotPromptList:F.value})})},D=a.$debounce(()=>{let e=o.value.favoriteFlag?"deleteCategoryRobot":"collectRobot",t={relationCode:o.value.collectRelationCode,robotCode:o.value.code};a.$api[e](t).then(l=>{o.value.favoriteFlag?(o.value.favoriteFlag=!1,o.value.collectRelationCode="",a.$Message.success("取消收藏")):(o.value.favoriteFlag=!0,o.value.collectRelationCode=l.data,a.$Message.success("成功收藏"))})},300),O=()=>{},V=()=>{G.value=!1},J=e=>{p.value=e},j=({item:e,data:t,request:l})=>{e.intentionalAnalysisType=="ROBOT"?(S.value=t.code,m.value=[]):(S.value="",userList.value=[t],m.value=[t.userCode]),p.value=l,E()},W=e=>{console.log(e)},Y=(e,t)=>{a.$api.deleteBatchAiRecordGroup({codeList:[t]}).then(()=>{a.$Message.success("已删除"),f.value=!1})},E=e=>{P.abortReadingStream();let t={content:p.value,groupId:_.value,robotCode:o.value.code,attachmentFileCodeList:[],type:o.value.type,lastAiRecordCode:k.value,userCodeList:m.value,appointRobotCode:S.value};a.$isEmpty(k.value)&&v.value.push({content:p.value,type:"USER",chatType:"CHAT",imgList:a.$isEmpty(r.value.imgList)?[]:r.value.imgList,fileList:a.$isEmpty(r.value.fileList)?[]:r.value.fileList}),a.$isEmpty(r.value.imgList)||r.value.imgList.forEach(l=>{t.attachmentFileCodeList.push(l.code)}),a.$isEmpty(r.value.fileList)||r.value.fileList.forEach(l=>{t.attachmentFileCodeList.push(l.code)}),r.value={imgList:[],fileList:[]},p.value="",k.value="",a.$setAiChat(a,t,"",l=>{l&&l.content&&a.$processChatData(v.value,l,o.value.type=="MULTIPLE_MODELS_CHAT")})},K=e=>{console.log(e),k.value=e.recordCode,p.value=e.request,E()},Q=()=>{B.value=!0,$.value.showFn()},X=()=>{C.value=C.value+1,M()},Z=(e,t)=>{P.abortReadingStream(),f.value=!1,g.value.pageNo=1,_.value=e,w.value=t,v.value=[],g.value.loadMore=!0,tt()},tt=()=>{let e={robotCode:o.value.code,groupId:_.value,pageNo:g.value.pageNo,pageSize:g.value.pageSize};g.value.loadMore&&a.$api.queryNewAiRecordPageList(e).then(t=>{if(t.data&&t.data.length==0){g.value.loadMore=!1;return}let l=[];t.data.forEach(d=>{if(!a.$isEmpty(d.attachmentList)){d.imgList=d.imgList||[],d.fileList=d.fileList||[];const h=["JPG","JPEG","PNG","GIF","BMP","WEBP"];d.attachmentList.forEach(u=>{const U={url:u.sourceUrl,code:u.code};console.log(h.includes(u.format)),h.includes(u.format)?d.imgList.push(U):d.fileList.push({name:u.fileName,url:u.sourceUrl,size:u.fileSize??1})})}}),l.unshift(...t.data.reverse()),g.value.pageNo>1?(v.value=l.concat(v.value),recordComRef.value.toMediate()):v.value=l})},T=()=>{a.$isLogin()&&(P.abortReadingStream(),v.value=[],C.value=1,y.value=[],p.value="",z(),et(),M())},et=()=>{let e={type:o.value.type,robotCode:o.value.code};a.$api.ai_bulidChatGroupId(e).then(t=>{_.value=t.data,w.value=null})},ot=()=>{f.value=!0,M()},M=()=>{if(a.$isLogin()){let e={robotCode:o.value.code,type:o.value.type,pageNo:C.value,pageSize:20};g.value.loadMore&&!a.$isEmpty(o.value.code)&&a.$api.queryAiRecordGroupPageList(e).then(t=>{let l=t.data;if(C.value>1?y.value=y.value.concat(l):y.value=l,t.data&&t.data.length==0){loadMore.value=!1;return}})}},at=e=>{p.value=e.promptContent,E()};return z(),ct(()=>m.value,e=>{S.value=""},{deep:!0}),(e,t)=>{const l=A("Icon"),d=lt,h=A("Button"),u=A("Tooltip"),U=st;return L(),R("div",Lt,[i(d,{type:"personal",title:"智能体"},{left:b(()=>[c("div",Ct,[c("div",null,dt(o.value.name),1),c("div",_t,[o.value.favoriteFlag?(L(),H(l,{key:1,type:"md-star",onClick:N(D),size:"22",color:"#f8ac3a",class:"pointer"},null,8,["onClick"])):(L(),H(l,{key:0,type:"ios-star-outline",onClick:N(D),size:"22",class:"pointer"},null,8,["onClick"]))])])]),_:1}),c("div",yt,[c("div",ht,[i(u,{content:"新建对话",placement:"right"},{default:b(()=>[i(h,{shape:"circle",class:"talkBtn",size:"large",icon:"md-add-circle",onClick:T})]),_:1}),i(u,{content:"历史记录",placement:"right"},{default:b(()=>[i(h,{shape:"circle",class:"talkBtn",size:"large",icon:"md-time",onClick:ot})]),_:1})]),c("div",bt,[c("div",kt,[c("div",St,[i(mt,{ref:"recordComRef",isLoading:G.value,"onUpdate:isLoading":t[0]||(t[0]=n=>G.value=n),robotLogo:o.value.robotLogo||N(gt),chatList:v.value,onScrollTop:O,onScrollBottom:V,userCodeList:m.value,"onUpdate:userCodeList":t[1]||(t[1]=n=>m.value=n),onEmployee:j,functionHideList:["answer","edit"],onGetContent:J,groupId:_.value,shareState:I.value,"onUpdate:shareState":t[2]||(t[2]=n=>I.value=n),onAnswer:K,onSubmit:W},null,8,["isLoading","robotLogo","chatList","userCodeList","groupId","shareState"])]),c("div",Et,[I.value?x("",!0):(L(),R("div",Rt,[i(u,{content:"创建新对话",class:"input-icon input-addChat iconCom",placement:"top"},{default:b(()=>[c("div",{class:"icon",onClick:T},[i(l,{type:"md-add",color:"#0090F7"})])]),_:1}),i(ft,{content:p.value,"onUpdate:content":t[3]||(t[3]=n=>p.value=n),format:e.format,uploadLists:r.value,"onUpdate:uploadLists":t[4]||(t[4]=n=>r.value=n),robotCode:o.value.code,consumeEnergy:o.value.consumeEnergy,onSubmit:E,isUoload:!0,isAppoint:!0,robotInfo:o.value,userList:e.userList,"onUpdate:userList":t[5]||(t[5]=n=>e.userList=n),userCodeList:m.value,"onUpdate:userCodeList":t[6]||(t[6]=n=>m.value=n)},null,8,["content","format","uploadLists","robotCode","consumeEnergy","robotInfo","userList","userCodeList"]),i(u,{content:"找找灵感",class:"input-icon iconCom input-prompt",placement:"top"},{default:b(()=>[c("div",{class:"icon",onClick:Q},[i(l,{type:"ios-bulb-outline"})])]),_:1})]))])])]),i(nt,{ref_key:"cPromptRef",ref:$,onPrompt:at},null,512)]),f.value?(L(),R("div",$t,[i(U,{state:f.value,"onUpdate:state":t[7]||(t[7]=n=>f.value=n),list:y.value,onAdd:T,onSwitchGroup:Z,onScrollBottom:X,onDel:Y},null,8,["state","list"])])):x("",!0),f.value||B.value?(L(),R("div",{key:1,class:"mask",onClick:t[8]||(t[8]=n=>{f.value=!1,B.value=!1,$.value.onClose()})})):x("",!0)])}}});const Le=vt(Pt,[["__scopeId","data-v-a421d503"]]);export{Le as default};
