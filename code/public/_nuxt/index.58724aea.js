import{a as F,e as W,r as d,h as B,i as e,y as t,l as c,F as u,s as T,j as a,C as M,D as z,m as q,o as n,x as i,A as j,k as h,z as k,u as A,_ as G,E as U,G as H}from"./entry.b3d0478f.js";import{_ as J,a as V}from"./delete.35f42c71.js";import K from"./choosePosition.4c7c3a03.js";import Q from"./positions.6436d753.js";import X from"./uploadVitae.8a5c3d4b.js";import Y from"./vitae.cc26e106.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./electric.251d62b3.js";import"./associate.4e4a5f3e.js";import"./close.a046fc4f.js";import"./ossUploader.17912e89.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./curriculum.943a89fc.js";const Z=""+new URL("hr.92b466b8.png",import.meta.url).href,v=p=>(M("data-v-d87eed4c"),p=p(),z(),p),tt={class:"hr"},st=v(()=>t("div",{class:"hr-top"},[t("img",{src:Z})],-1)),ot={class:"hr-content"},et={key:0,class:"hr-content-title"},nt={class:"hr-content-list"},it=["onClick"],ct={class:"item-title"},at={class:"name"},lt={class:"result"},dt={key:0,class:"grayPoint"},_t={key:1,class:"greenPoint"},rt={key:2,class:"redPoint"},ut={key:3,class:"brownPoint"},ht={class:"item-content"},vt={class:"content-left"},pt={class:"degree"},mt={key:0,class:"mark"},ft={class:"content-right"},kt={class:"action-ico"},gt=["onClick"],Ct={class:"action-ico"},Et=["onClick"],yt={class:"item-bottom"},Tt={key:0,class:"bottom-item"},xt={key:1,class:"bottom-item"},It=v(()=>t("div",{class:"hr-content-title"},"我的职位",-1)),Rt={class:"hr-content-positions"},$t=["onClick"],Pt={class:"item-delete"},St={class:"action-ico"},Nt=["onClick"],Vt={class:"item-title"},Dt={class:"item-content"},Lt={class:"content-num"},bt={class:"num"},wt=v(()=>t("div",null,"已笔试",-1)),Ot={class:"content-num"},Ft={class:"num"},Wt=v(()=>t("div",null,"未笔试",-1)),Bt={class:"content-num"},Mt={class:"num"},zt=v(()=>t("div",null,"未通过",-1)),qt={class:"item-bottom"},jt=["onClick"],At={class:"bottom-right"},Gt=F({__name:"index",setup(p){const{Modal:x}=U,{proxy:_}=q(),g=W(),I=d(),R=d(),$=d(),C=d(),E=d([]),m=d([]),D=d([{name:"未通过初筛",value:"NO_FILTERED"},{name:"未笔试",value:"NOT_WRITTEN_TEST"},{name:"待查看",value:"TO_BE_VIEWED"},{name:"已查看",value:"VIEWED"}]),L=o=>{C.value.showFn(o)},f=()=>{P(),S()},P=()=>{_.$api.queryPositionList().then(o=>{m.value=o.data})},S=()=>{_.$api.queryResumePageList({pageSize:3}).then(o=>{E.value=o.data})},b=o=>{o.dataStatus=="NOT_WRITTEN_TEST"?g.push("/ai/hr/create?code="+o.code):g.push("/ai/hr/analyze?code="+o.code)},w=o=>{o&&x.confirm({okText:"确定",cancelText:"取消",content:Number(o.totalCount)>0?"该职位下有简历，删除职位也会同时删除简历，确认删除吗?":"是否删除该职位?",onOk:()=>{_.$api.deletePosition({code:o.code}).then(()=>{_.$Message.success("已删除"),f()})}})},O=o=>{o&&x.confirm({okText:"确定",cancelText:"取消",content:"是否删除该简历?",onOk:()=>{let r={code:o.code};_.$api.deleteResume(r).then(()=>{_.$Message.success("已删除"),S()})}})};return f(),(o,r)=>{const y=B("Tooltip"),N=G;return n(),e("div",tt,[st,t("div",ot,[m.value.length>0&&E.value.length>0?(n(),e("div",et,"最新简历")):c("",!0),t("div",nt,[m.value.length>0?(n(),e("div",{key:0,class:"upload",onClick:r[0]||(r[0]=s=>R.value.showFn())})):c("",!0),(n(!0),e(u,null,T(E.value,s=>(n(),e("div",{class:"content-item",onClick:l=>b(s)},[t("div",ct,[t("div",at,i(s.name),1),t("div",lt,[s.dataStatus=="NO_FILTERED"?(n(),e("div",dt)):c("",!0),s.dataStatus=="VIEWED"?(n(),e("div",_t)):c("",!0),s.dataStatus=="NOT_WRITTEN_TEST"?(n(),e("div",rt)):c("",!0),s.dataStatus=="TO_BE_VIEWED"?(n(),e("div",ut)):c("",!0),t("div",null,[(n(!0),e(u,null,T(D.value,l=>(n(),e(u,null,[l.value==s.dataStatus?(n(),e(u,{key:0},[j(i(l.name),1)],64)):c("",!0)],64))),256))])])]),t("div",ht,[t("div",vt,[t("div",pt,"匹配度 "+i(s.matchDegree)+"%",1),o.$isEmpty(s.point)?c("",!0):(n(),e("div",mt,"评分 "+i(s.point)+"分",1))]),t("div",ft,[a(N,null,{default:h(()=>[a(y,{content:"编辑"},{default:h(()=>[t("div",kt,[t("img",{class:"ico",onClick:k(l=>I.value.showFn(s),["stop"]),src:J},null,8,gt)])]),_:2},1024),a(y,{content:"删除"},{default:h(()=>[t("div",Ct,[t("img",{class:"ico",onClick:k(l=>O(s),["stop"]),src:V},null,8,Et)])]),_:2},1024)]),_:2},1024)])]),t("div",yt,[o.$isEmpty(s.gmtCreate)?c("",!0):(n(),e("div",Tt,i(s.gmtCreate)+"上传",1)),o.$isEmpty(s.gmtWrittenExam)?c("",!0):(n(),e("div",xt,i(s.gmtWrittenExam)+"笔试",1))])],8,it))),256))]),It,t("div",Rt,[t("div",{class:"positions",onClick:r[1]||(r[1]=s=>$.value.showFn(""))}),(n(!0),e(u,null,T(m.value,s=>(n(),e("div",{class:"positions-item",onClick:l=>A(g).push("/ai/hr/positionDetail?code="+s.code)},[a(N,null,{default:h(()=>[t("div",Pt,[a(y,{content:"删除"},{default:h(()=>[t("div",St,[t("img",{class:"ico",onClick:k(l=>w(s),["stop"]),src:V},null,8,Nt)])]),_:2},1024)])]),_:2},1024),t("div",Vt,i(s.name),1),t("div",Dt,[t("div",Lt,[t("div",bt,i(s.hadExamCount),1),wt]),t("div",Ot,[t("div",Ft,i(s.unExamCount),1),Wt]),t("div",Bt,[t("div",Mt,i(s.unPassCount),1),zt])]),t("div",qt,[t("div",{class:"bottom-left",onClick:k(l=>C.value.showFn(s.code),["stop"])}," + 上传简历 ",8,jt),t("div",At," 共"+i(s.totalCount)+"份简历 ",1)])],8,$t))),256))])]),a(K,{ref_key:"choosePositionRef",ref:R,onChoose:L},null,512),a(Q,{ref_key:"positionsRef",ref:$,onInit:P},null,512),a(X,{ref_key:"uploadVitaeRef",ref:C,onInit:f},null,512),a(Y,{ref_key:"vitaeRef",ref:I,onInit:f},null,512)])}}});const ls=H(Gt,[["__scopeId","data-v-d87eed4c"]]);export{ls as default};