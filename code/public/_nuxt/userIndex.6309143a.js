import{a as tt,r as l,b as et,e as G,o as a,c as Q,k as R,y as t,i as n,s as f,F as g,x as s,K as Ct,C as K,D as M,ac as Nt,m as ot,G as V,j as b,a2 as st,S as Lt,f as Tt,N as Bt,h as $,l as p,u as h,U as kt,V as wt,A as E,Z as Ot,B as Et,v as Dt}from"./entry.b3d0478f.js";import{_ as xt}from"./ossUploader.17912e89.js";import{_ as zt}from"./cCreate.fa3fcebe.js";import{_ as Yt}from"./fire.a7ce86a3.js";import{s as at}from"./index.878cfd5e.js";import"./_commonjsHelpers.86de73f2.js";import"./_commonjs-dynamic-modules.302442b1.js";import"./upload.1da94f3c.js";import"./svga.4b61c129.js";import"./loding.3cd02d06.js";import"./ossUploaderNew.bc250fbe.js";import"./stringify.f484c508.js";import"./addBase.6bac7936.js";import"./robot.23bfda18.js";import"./close.79d7cbfd.js";import"./curriculum.943a89fc.js";import"./unit.b72b5b5d.js";const Pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKlSURBVHgB7ZpBTxNBFMf/b3ZREyHChYqGWD0QvZg2Ra+Kdz6AXjAc+AB4N9W7Cd8A/QSSePRAezIxNPRKD4oxoYGDrYEmpO3Oc2dxLZUFtjttdyfpL2k62+mk79c3b7bdHUIAW9X2S2GJJQYyYEwibgh1AsrE9B4SxewM7XZ3n+LrQTNjsf3RbaaRXL5zW67O37Y3/Bf+SXgCsDcT8c1fDoN5NXfTWlMHnsR2ldNS8CaSnYH/YSmdZ49mxgpCHTlC5mGWgIIsy3rtNbZrPCmbXIOZeNkQ7WN3BTIZEhlBcNIwF3KL+o6A4RDEDeMlFCOJpBBZYuVzE4sbTXz65iBuIkvcGifsNRj5L+3YZSJLzE11hsYtE1ni6ezZoXHJRJ9O1wkTVyiwb9gyWqtTbpou7B+WjJ5EKtzwQctoScynqKf3D0pGS0KtUOfVxUX0W0b7jD2n8We2XzKkrmyQEOvQQAVTPWLsqYdqN07a1cZJX1jUirfy0MLiPSv0GDCt2+gD6sPVI5cK7t/al6jUGIWfjvsMHLaCxZTwGzcz42OEhdnwk0Rb4rDJblDAzi+JoyY6mXCzUP2bmbBMuMG/uC96ElBoS7wqtlA6CB9oEH7wzx9YXrtXtCUqdURGN3gfLQk119V06pV+Be+jJaGKtRf6HbyPlkTJzUQYBhW8j57EJQU96OB9IktUaufXw7CC94kssRNQD8MO3ieyRGm/IxFX8D6RJdRUijt4n8gS756MISmMrgAmhZFEUjBegiF/C/de6i7Mhd2z1Q9hX7PL6o49DIWFKIjsFNVZ8gcYCBMKj6ep7NWEdVXkDcwGWw4tq4YnobLhoL1gkogEv/U3qnT94DFiewShxi25HLhB5TTqghossUQJ2irEEmVmLtrHYi17l7pmzB8G9EwS2HnxYQAAAABJRU5ErkJggg==",nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAAXNSR0IArs4c6QAAAaxJREFUaEPtmM1Rw0AMRj+FS4ALdEAJDBUwVJAOSAfBHUAFuzRA6CAlUAIlhBI4ENuniFnIcGBw7PWPlMXyWWvr6cm7sgkjuWgknDDQ/2bajJrRRCtgrZuouMq0zagZTbQC1rqJirPNyFrXWrdrBRyfYVIusOVzgDyy47eut2yyXr51ff4K0OUuuTUYNxKwCqAF/zIgAisP6jbPoMmtNKw8aCBUgNUBVYDVA2Um+Hwp1cZ6oMGqIKwuqCCsPqgQ7GGACsD2C+rzFUCzJiNZZMwaPL1CRu+R637C+wN1mxlosmqbSO063j4gO72vjasI6BH0Yw46WrZNpHYds0d2ktXGDQ76NQTkDkSLPcm0LWznebjtg9sWtnpdOFMfyycA8yHm4MMAHRgyFE4fVABSH1QIUhdUEFIX1BfhKBpk4/lrx9N5R4UhdYz60gF8N8QRsu/Mkzfqx/JzzBcvAK531e888TSdXOSNuuLiu3XDl8jUd/kiaQqp847GZNdjrLzRHpOPuZWBxlQrhVgzmoKlmBzNaEy1Uog1oylYisnRjMZUK4VYM5qCpZgcR2P0E1EtsjvMufyFAAAAAElFTkSuQmCC",it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAACj0lEQVRoQ+2Xz0sUYRjHP88ouqVmERUYJEEdxYw6FP0BnTv049RfEGZCIV0WRGQRxBSNivUXSgdvgdcKIg8dvHUzt4N06JCru6m7te8TK1izie67s/MKwux1vu/zfPjMd4Yd4RD+5BAyE0Ef1F2LTEem9zEQ1SOqR1SPg+pAZNrW9Fj6BLn6djS/wqPmJdtjNjk3r7zBbBueNw1yCUhh6KUrNomI2kCVy7iBHtq8AXzwLf+K0sfDWDIMcDfQzzauY+QdQp0PPAX00RkbrxbcDfSANlC7cQfxXgC1f8GV5W3wtcQk8bgpV4O9rruBLm7bCxxNUdB+MgPJoODuoIvg8e+NNDfdRXheYhy+YOhnPTERBNwtdBF8VBv5tXUPGAHqfVVZAtPPwvwUc7cLlVTFPfSO8eNNu8GLxiFBOpYkLtYdDwatKgxttYIOIN4FS0sx0Bbg2H/5JdQkWJifsDUeDHpIz6CbY4jcsgQuF3uPmm66GhbLBYvXA0L/OIfG3iDSbrOkbEb1E0gPXUfels0Ghh7Wen7nb+KZGaDRZtHeGclgzBTrm0+Jn1y3mRXM9PbDpR6n15rJ1bbaLMKr6UC1F+Tsv7xkUDNN/mcPT05lrOYENm07fSc3nO/A6CiYa76jGVQrBg7e6Uqgi8CFwkuEKyWGxUyzmn5MvGWjknHuoYfz7ZjCK+CqDywLzJBe7Q4C7BZ6MNeGV0iC+IAlAzpbDbA76NKPgB3JWZRZllc6GbmYq7QS/nzwt8d+W3d/BGQx5jWpbw+qBXZnuvQjIFRgd9Dxz3U0nb9MjdwHs8jHo+PMSUX/5Pa7kW7qUU1hLc5G0BaSQolEpkPRaDEkMm0hKZRIZDoUjRZDItMWkkKJ/AGW19kvKgZJ9AAAAABJRU5ErkJggg==",Ht=""+new URL("app_pic1.651e0d07.png",import.meta.url).href,lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAAAXNSR0IArs4c6QAAAJRJREFUSEvF1cENg1AMA1B7EzYoK3WETgAswCyMwARdychSkTgQuODfnP4pT9FPZCJQkjoAPcmlas+nXUnu+QXwAjCRnM6Mx2Ejkj4AZj8rPAL/8BHAUOEx+A6Pwld4HK5wSvICtCx77//BLUaVtG+4Od/2GP/jM9R6FK7QKHyFxuA7NAIfQqLfF6llSDgWO5JrdTUbUTBTydGqJ+IAAAAASUVORK5CYII=",Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAABECAYAAAA7iF/fAAAAAXNSR0IArs4c6QAAAtRJREFUeF7t3NFNIzEQgOEstJAq0kOqhxqOJo4SYNHpeEhWihkLOxl7P15jWfY/v2dnEw/Ly5+/66Hwdz4dl9Ln28/Md02kMb/1fDo+ReOxruvy+vb+WRi/u/kWgnYV9ED428ftEQeS8Jt4NBaU8KXHywOeQIQn/K5KJMITnvCXDiR/xLcuGbLPt7uXzNYv6TK8DC/Dy/DRL/4Ohzt/yyXD//IluOo79rgGRiKQkwDhc8bFqjoRIHwnsKbNSYDwOeNiVZ0IEL4TWNPmJED4nHGxqk4ECN8JrGlzEiB8zrhYVScChO8E1rQ5CRA+Z1ysqhMBwncCa9qcBAifMy5W1YmA25IbsMmvQ7s8VjgIkZZBwhPe9eBLB5JnvOwNG63XJ8PL8Lv6NyKEJzzhbzkQqWlbt9Bln08Nr4ZXw6vh49+JafG7YpW+5JLhZfh9Zfh4LjMSgfEJ+KV1/BjaQQUBwlfAMnR8AoQfP4Z2UEGA8BWwDB2fAOHHj6EdVBAgfAUsQ8cnQPjxY2gHFQQIXwHL0PEJEH78GNpBBQHCV8AydHwChB8/hnZwQeDflegSEJfHNnSSd3ilv43oPvxYQrVuyWs9H+EL6TvS8CLDj3UgCU94LX63HIhkvOwlSOv1yfAy/L4aQO7cota6pt3bfEoaJY2SRknzn0CkhFPSKGkeXdJ8lJL2+XR8jv7Q8C18cT4/PEVpGjcFAcJPEUabiBIgfJSUcVMQIPwUYbSJKAHCR0kZNwUBwk8RRpuIEiB8lJRxUxAg/BRhtIkoAcJHSRk3BQHCTxFGm4gSIHyUlHFTECD8FGG8vYkfezyXZa1BMPx8rgdfh1tPa/nwvL69fxYOSPrry25LbqJHeMJXlT2eGF2fGOkzaOuWvNbzyfAy/KPvw9+1RCI84Ql/6UDymlZPa+kNcl2X0V8ylTRjZeTWB1IN/8sDrqTJd4B+qmmb9ni27hnNPt8XxUkjCL8F0JQAAAAASUVORK5CYII=",Gt=""+new URL("iso.7a8d35fe.png",import.meta.url).href,Kt=""+new URL("iaf.79cfd1b2.png",import.meta.url).href,Mt=""+new URL("cnas.85972cbb.png",import.meta.url).href,Vt=""+new URL("gaoxin.df26d9d1.png",import.meta.url).href,Jt=""+new URL("chuangxin.1f1793d8.png",import.meta.url).href,qt=""+new URL("case_pic1.206309e2.png",import.meta.url).href,Ft=""+new URL("profile.72d0a5b5.png",import.meta.url).href,Wt=""+new URL("folder.b18e9d9c.png",import.meta.url).href,jt=""+new URL("setting.05e5a5fc.png",import.meta.url).href,Zt=""+new URL("security.f2e13452.png",import.meta.url).href,Xt=""+new URL("01.2d10c181.png",import.meta.url).href,$t=""+new URL("02.a25584ac.png",import.meta.url).href,te=""+new URL("03.de8ed037.png",import.meta.url).href,ee=""+new URL("04.9fa90ffd.png",import.meta.url).href,oe=""+new URL("file_pic1.b1dd4031.png",import.meta.url).href,se=""+new URL("file_pic2.b76a6a48.png",import.meta.url).href,ae=""+new URL("file_pic3.61dcac98.png",import.meta.url).href,ne=""+new URL("file_pic4.3569c299.png",import.meta.url).href,ie=""+new URL("app_banner1.90120cf0.jpg",import.meta.url).href,le=""+new URL("app_banner2.5cac629d.jpg",import.meta.url).href,ce=""+new URL("app_banner3.457ad0a3.jpg",import.meta.url).href,re=""+new URL("banner.15672400.png",import.meta.url).href,J=v=>(K("data-v-a3031cf8"),v=v(),M(),v),de={class:"modalPrompt-top"},ue=J(()=>t("img",{src:re},null,-1)),pe=J(()=>t("img",{src:Nt},null,-1)),me=[pe],he=J(()=>t("div",{class:"modalPrompt-top-title"},"热门提示词",-1)),ge={class:"modalPrompt-content"},Ae={class:"content-item-title"},_e={class:"content-item-name"},ve={class:"content-item-btn"},fe=["onClick"],ye=tt({__name:"modalPrompt",setup(v,{expose:L}){const{proxy:r}=ot(),y=l(!1),U=l([]),m=et(),T=G(),D=()=>{y.value=!0,u()},u=()=>{let B={type:"PROMPT_ROBOT_CATEGORY",name:""};r.$api.queryTagTemplateList(B).then(S=>{U.value=S.data})},A=B=>{y.value=!1,m.setPrompt(B),T.push("/robot/brain/networking")};return L({showFn:D}),(B,S)=>{const x=Ct;return a(),Q(x,{modelValue:y.value,"onUpdate:modelValue":S[1]||(S[1]=k=>y.value=k),size:"large","z-index":3003,"class-name":"modalPromptMain",closable:!1,"footer-hide":!0,"mask-closable":!1},{header:R(()=>[t("div",de,[ue,t("div",{class:"modalPrompt-top-close",onClick:S[0]||(S[0]=k=>y.value=!1)},me),he])]),default:R(()=>[t("div",ge,[(a(!0),n(g,null,f(U.value,(k,w)=>(a(),n(g,{key:w},[(a(!0),n(g,null,f(k.promptList,(I,z)=>(a(),n("div",{class:"modalPrompt-content-item",key:z},[t("div",Ae,s(I.promptName),1),t("div",_e,s(I.promptContent),1),t("div",ve,[t("div",{class:"btn",onClick:C=>A(I.promptContent)},"使用",8,fe)])]))),128))],64))),128))])]),_:1},8,["modelValue"])}}});const Ie=V(ye,[["__scopeId","data-v-a3031cf8"]]),be="data:image/png;base64,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",Re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABE5JREFUaEPtWT1TFEEQ7TkMQAww9KLDMjGTDI30H/AXiFZCfgDyIallSK0JuQnyCzRTI8hA1AJUIKI4LeTrqBtrZqdne3tnztnb5eOq2Cpqub292379Xr/umRPQ44fo8fjhBsBVM3jDQG8x8HGvAUIuAsAjABi6hODfgRST8Pjelu9Z4RJKgl+5pMBpvE2QYsQHIhzA590lkDB2CVl3PeIDjNafud4IB/BpV15R8OqxTRit3+1lAACjdWeye4WBYgAWNo8bfVIsSuU2AoagJkH3bPwD81pxSq8hxzQtASlaPWrB2/0T2D9v+1UayoAKvtauJW4jTKAUgA6aAcBrCAjPqmoCAKjbj9oS5ncO/SBCAcTfTpcAYCzJbAAAzYZI7qUAXGz8xwU2Ts7h1d5f910FAEibNQSgzjXMpvmfB8gBqAQUYABZmNz+UxUAEigHwOuBS6eL7ONHos3fFQLAQLEGbNHyGnDURJcgKgSANUDkowuSaB5fa2BGMwUdiKe7QgDUOmkNoHXyonVZa/HeXR7A91MTGQLgDHSyUcZCoIVSmOUBfDs1LuQDQJix/q9s1MjLV9CBZFwAAJNxa6N+BqKpIx1mPH87uIFdYA2QIlbZVQByBUw6rQCIppImpAG4mloAC9UwgNKwfs8KGrXNztELA+AlYwDvw8ZGz9RuJUC0VbYPfDU1QEcJ25E93dhkOwOgWwZKA1BFbB/umIVo1nF84ADmHAyEjBWKge0qGcCxGUcJFaiuBYBo9jBA0ektsZJVwFENAGTAJyMFYK4sAJz2sqiqA2CzjY3M12nNaAESohlTxLNKQqY3SPI53SyIlvR7AkCdddIERNtNN0/B47QqYusMDvexKzC2WFE2OpOwEs8OpkHkurHLilJg0Y+yADawE5PlIl0XUHehYEhdxDODXTSyBFj0swoAPEg7TvMxgrCtGDCFHU8TAHpKVUc6YtkFE3JtWVIADkpK6ItigC0RMwwYbTML1c5kCjuevmO6ttUiCYpLCMElKKJfpQGcyWRkIBrXcxAWWlq0SeFlWchdo/lkZGTu1V8vIdopKyHFgEvnaKmZ94gGHIx0BMOFYr4q2nUw0IZleFJ3bmvmPCJeP2PjNB3YPEtHHbxjRcYZwqA7dGUHgGKbuykAo02+gOeDHGcrIxmynRoySqga2LMMKC2tghTjhbbXNYBM5ujuhInO8pY2IOsyvCawWdkGRveI8904agwUWsflJbRGAXg2rSgLNkBS6FzfrpA8jETD/SUBrLcOQMqhdHOLSKmTXDKO6dmlczt85mp0vySAN2ut9xLgqbVSGzQLymWfLsvMBe0vBinl8vMH/YV+RMnRtbB23KjJvhUQIvkNzG7kFnSaQkLQJtZs19ojE8MD3t/DXAQ6H6NACHHrtZAyyUZm5ukgD/5ttHGxQZQE05QgV2VLjk88LBa8z6UDlHp9bilK9PWJnDv6tYssMKCeZ+AfP7PBQPILAnkAAAAASUVORK5CYII=",Y=v=>(K("data-v-780d6e56"),v=v(),M(),v),Ue={class:"home-action"},Se=Y(()=>t("div",{class:"homeTitle"},[t("div",{class:"area"},[t("p",null,"Start using the service"),t("h2",null,"开始使用服务")])],-1)),Ce={class:"action-area"},Ne=Y(()=>t("div",{class:"home-action-item-name"},[t("img",{src:be}),t("div",{class:"info"},[t("div",null,"售前咨询"),t("p",null,"Pre-sales advice")])],-1)),Le=Y(()=>t("div",{class:"home-action-item-content"},"专业的售前服务，提供全方位支持",-1)),Te=[Ne,Le],Be={class:"home-action-item"},ke=Y(()=>t("div",{class:"home-action-item-name"},[t("img",{src:Re}),t("div",{class:"info"},[t("div",null,"开通服务"),t("p",null,"Subscribe to a service")])],-1)),we=Y(()=>t("div",{class:"home-action-item-content"},"快速创建AI应用，畅享更多特权",-1)),Oe=tt({__name:"index",setup(v){const L=l(),r=G(),y=U=>{if(r.currentRoute._value.path==="/member"){U.preventDefault();{const m=document.querySelector(".homePage-content");m&&(m.scrollTop=0)}}};return(U,m)=>{const T=st;return a(),n("div",Ue,[Se,t("div",Ce,[t("div",{class:"home-action-item",onClick:m[0]||(m[0]=D=>{L.value.showFn()})},Te),t("div",Be,[b(T,{to:"/member",onClick:y},{default:R(()=>[ke,we]),_:1})])]),b(at,{ref_key:"serviceRef",ref:L},null,512)])}}});const Ee=V(Oe,[["__scopeId","data-v-780d6e56"]]);const d=v=>(K("data-v-bff0101b"),v=v(),M(),v),De={class:"home"},xe={key:0,class:"home-swiper"},ze={class:"banner"},Ye=["src"],Pe={class:"home-product"},He={class:"home-product-item-name"},Qe={class:"home-product-item-content"},Ge={class:"home-product-item-tag"},Ke={class:"home-chat"},Me={class:"homeMain"},Ve={class:"title",style:{color:"#1a1a1a"}},Je={key:0},qe={class:"ipt clearfix"},Fe={class:"box"},We={class:"box-content"},je=d(()=>t("div",{class:"division"},null,-1)),Ze=["placeholder"],Xe={class:"chatAction"},$e={class:"icon upload",style:{right:"40px"}},to=["href"],eo={class:"homeRobotArea"},oo={class:"homeTitle"},so={class:"area"},ao=d(()=>t("p",null,"Robot, my AI can do anything. ",-1)),no={class:"homeTitleDesc mb-25"},io=d(()=>t("img",{src:nt},null,-1)),lo={class:"homeMain"},co={class:"nav"},ro=["onClick"],uo={class:"products-list"},po={class:"more"},mo=d(()=>t("img",{src:it,alt:""},null,-1)),ho={key:0,class:"clearfix creative"},go=["onClick"],Ao=["src"],_o={key:0,class:"cover"},vo={class:"cover-top"},fo={class:"cover-top-btn"},yo={key:0,class:"keyWord text-hide-2"},Io={key:1,class:"clearfix role"},bo=["onClick"],Ro=["src"],Uo={key:0,class:"tag"},So=d(()=>t("img",{src:Yt},null,-1)),Co={class:"item-name"},No={class:"name"},Lo={class:"remark"},To={key:2,class:"clearfix creative"},Bo=["onClick"],ko={class:"item-top"},wo={class:"item-top-logo"},Oo=["src"],Eo={class:"item-top-name"},Do={class:"item-content text-hide"},xo={class:"clearfix identify"},zo=["onClick"],Yo=["src"],Po={class:"more"},Ho=d(()=>t("img",{src:it,alt:""},null,-1)),Qo={class:"clearfix tool"},Go=["onClick"],Ko=["src"],Mo={key:1,class:"homeAppArea"},Vo={class:"homeTitle"},Jo={class:"area"},qo=d(()=>t("p",null,"Lab, open source modeling tools, explore unlimited! ",-1)),Fo={class:"homeTitleDesc"},Wo={href:"/laboratory"},jo=d(()=>t("img",{src:nt},null,-1)),Zo={class:"homeMain"},Xo=d(()=>t("img",{class:"pic1",src:Ht},null,-1)),$o={class:"laboratory-content clearfix"},ts={key:0,class:"laboratory-content-item"},es={class:"item-name"},os={class:"item-sub"},ss=d(()=>t("div",{class:"item-division"},null,-1)),as={class:"item-des text-hide-3"},ns={class:"item-bottom"},is=["href"],ls={class:"btn-name"},cs=d(()=>t("img",{class:"ico",src:lt},null,-1)),rs={class:"btn-name"},ds=d(()=>t("img",{class:"ico",src:lt},null,-1)),us=d(()=>t("img",{class:"tag",src:Qt},null,-1)),ps={key:2,class:"homeVideoArea"},ms={class:"homeTitle"},hs={class:"area"},gs=d(()=>t("p",null,"Video presentation Opportunities Challenges",-1)),As={class:"homeMain"},_s={class:"videoArea"},vs=["src"],fs={key:3,class:"homeTechnicalArea"},ys={class:"homeTitle",style:{"margin-top":"15px"}},Is={class:"area"},bs=d(()=>t("p",null,"Technology R&D Create value",-1)),Rs={class:"technicaBox"},Us={class:"homeMain"},Ss={class:"technicaArea"},Cs={class:"area1"},Ns=Ot('<div class="aptitude" data-v-bff0101b><img class="aptitude-item" src="'+Gt+'" data-v-bff0101b><img class="aptitude-item" src="'+Kt+'" data-v-bff0101b><img class="aptitude-item" src="'+Mt+'" data-v-bff0101b><img class="aptitude-item" src="'+Vt+'" data-v-bff0101b><img class="aptitude-item" src="'+Jt+'" data-v-bff0101b></div>',1),Ls={key:4,class:"homeCaseArea"},Ts=d(()=>t("img",{class:"pic1",src:qt,alt:""},null,-1)),Bs={class:"homeTitle"},ks={class:"area"},ws=d(()=>t("p",null,"Solutions Customized services",-1)),Os={class:"homeCaseMain"},Es={class:"swiper"},Ds={class:"swiper-wrapper"},xs=["onClick"],zs={class:"clearfix"},Ys={class:"pic"},Ps=["src"],Hs={class:"info"},Qs={class:"text-hide-2"},Gs=d(()=>t("div",{class:"swiper-pagination"},null,-1)),Ks={key:5,class:"home-consult"},Ms={class:"homeTitle"},Vs={class:"area"},Js=d(()=>t("p",null,"Industry news The latest news",-1)),qs={class:"news"},Fs={class:"news-content"},Ws={class:"news-cover"},js=["src"],Zs={class:"news-title"},Xs={class:"news-name"},$s={key:0,class:"news-content-item",style:{visibility:"hidden"}},ta={__name:"userIndex",setup(v){const{locale:L,t:r}=Lt(),y=l([{tagCode:"1",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI智能客服",tagValue:"结合AI技术，为客服行业提供高效、智能的服务方案，降低人工成本，提升客户满意度，并为企业带来更多有价值的客户反馈和数据。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon1.png",avatarList:null,type:""},{tagCode:"2",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI跨境电商",tagValue:"运用AI技术，为跨境电商提供涉及货币、税务、物流和文化的综合解决方案，简化操作流程，提高客户体验，并助力商家掌握全球市场动态。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon2.png",avatarList:null,type:""},{tagCode:"3",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI餐饮服务",tagValue:"利用AI技术，为餐饮行业提供从顾客流预测到营销分析的全方位服务，旨在降低成本、提高服务效率，并增强客户黏性。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon3.png",avatarList:null,type:""},{tagCode:"4",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI美容美业",tagValue:"利用AI技术，为美容美业提供个性化的皮肤分析、产品推荐和效果预测，同时提供技术和产品更新通知，增强顾客信任和满意度。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon4.png",avatarList:null,type:""},{tagCode:"5",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI智能营销\r",tagValue:"利用AI技术，智能营销可以提供更加精准、高效的广告投放、客户分析和市场趋势预测，从而提高营销回报率。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon5.png",avatarList:null,type:""},{tagCode:"6",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI法律咨询\r",tagValue:"结合AI技术，为法律咨询行业提供快速案例查询、文书撰写和律师匹配等服务，旨在提高咨询效率，降低费用，并普及法律知识。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon6.png",avatarList:null,type:""},{tagCode:"7",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI教育培训",tagValue:"借助AI技术，教育培训行业能够实现个性化教学，动态调整教学内容，同时提供深度的学习分析和反馈，提高教育效果。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon7.png",avatarList:null,type:""},{tagCode:"8",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI生活服务\r",tagValue:"利用AI技术，生活服务行业能够提供更加个性化、高效和便捷的服务，从家政、维修到婚礼策划，都能得到数字化升级。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon8.png",avatarList:null,type:""},{tagCode:"9",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI金融服务\r",tagValue:"通过AI技术，金融服务能够实现更快速的风险评估、自动化投资建议和个性化的客户体验，提高金融市场的效率和安全性。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon9.png",avatarList:null,type:""},{tagCode:"10",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI游戏娱乐",tagValue:"通过AI技术，游戏娱乐行业能够提供更加个性化的游戏体验、改进游戏内容、提高游戏安全性和引入更多互动元素。这有助于提高游戏的吸引力、用户参与度和盈利能力，同时加强游戏社交互动和反作弊措施。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon10.png",avatarList:null,type:""},{tagCode:"11",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI传感器",tagValue:"通过AI技术，传感器行业能够提供更高效的数据采集、实时监测、故障检测和数据分析。这有助于解决传感器数据庞大的问题、提高传感器系统的可靠性和安全性，同时提供更准确的环境信息和预测性维护。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon11.png",avatarList:null,type:""},{tagCode:"12",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI医疗保健",tagValue:"医疗健康领域是一个需要高效和准确决策的行业，同时也需要提供患者关怀。人工智能技术在医疗健康中扮演着关键的角色，用于疾病诊断、患者管理、健康监测等方面。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon12.png",avatarList:null,type:""},{tagCode:"13",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI旅游酒店",tagValue:"结合AI技术，旅游酒店可以提供更加个性化的预订体验、智能推荐旅游路线和酒店服务，从而增强客户满意度。\r",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon13.png",avatarList:null,type:""},{tagCode:"14",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI人力资源",tagValue:"结合AI技术，人力资源行业能够更加高效地筛选和匹配人才，同时提供员工培训、评估和管理等全方位服务。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon14.png",avatarList:null,type:""},{tagCode:"15",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI公文写作",tagValue:"利用AI技术，公文写作可以实现更加规范、高效的文档撰写和校对，提高公文质量和效率。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon15.png",avatarList:null,type:""},{tagCode:"16",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI企业服务",tagValue:"借助AI技术，企业服务可以提供更加精准的市场分析、自动化客户关系管理和智能化的业务流程，提高企业效率。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon16.png",avatarList:null,type:""},{tagCode:"17",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI创意产业\r",tagValue:"结合AI技术，创意产业可以实现更加高效的内容创作、智能推荐和自动化分析，从而提高创意效果和产值。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon17.png",avatarList:null,type:""},{tagCode:"18",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI团购直播\r",tagValue:"结合AI技术，引入智能客服、数字人等AI技术，不仅能够提高效率，更能够为用户提供更加个性化、高效的购物体验。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon18.png",avatarList:null,type:""},{tagCode:"19",tagType:"INDUSTRY_SOLUTIONS",tagName:"Al运动健身",tagValue:"AI技术在运动健身领域实现了智能健身教练、个性化训练方案、身体状态监测和社交互动。这有助于提高运动效果、用户健康和锻炼动力，同时提供更好的用户体验。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon19.png",avatarList:null,type:""},{tagCode:"20",tagType:"INDUSTRY_SOLUTIONS",tagName:"AI社交媒体",tagValue:"AI技术的引入使社交媒体平台能够提供更为个性化的内容推荐，自动识别和处理不良信息，同时通过深度数据分析助力品牌和广告商更精准地进行营销。",extend:"https://chat-ai-prod-cdn.dzqnet.com/global/static/ico/icon20.png",avatarList:null,type:""}]),U=l(),{proxy:m}=ot(),T=l(),D=l(),u=et(),A=G();l([]),l([{title:r("home.创建机器人"),en:"Create a robot",content:r("home.取名字传照片"),img:Ft,numberImg:Xt,pic:oe},{title:r("home.知识库训练"),en:"Vector database training",content:r("home.上传文件"),img:Wt,numberImg:$t,pic:se},{title:r("home.对话与调试"),en:"Dialogue and Debugging",content:r("home.匹配相似度"),img:jt,numberImg:te,pic:ae},{title:r("home.发布与输出"),en:"Release and output",content:r("home.输出分享"),img:Zt,numberImg:ee,pic:ne}]),l({appbanner1:ie,appbanner2:le,appbanner3:ce});const B=l([{name:r("home.口算批改"),img:"https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-01.jpg",url:"/robot/tool/compute"},{name:r("home.皮肤检测"),img:"https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-02.jpg",url:"/robot/tool/skin"},{name:r("home.思维导图"),img:"https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-03.jpg",url:"/robot/tool/thinking"},{name:r("home.作文改写"),img:"https://hz-oss.chatdzq.com/file/chatdzq/index-img/index-04.jpg",url:"/robot/tool/rewrite"}]);l(0);const S=l(""),x=l(""),k=l(!0);l([{name:r("home.AI作画"),code:"DRAW"},{name:r("home.AI海报"),code:"POSTER"},{name:r("home.AI角色"),code:"ROLE_ROBOT_CATEGORY"},{name:r("home.AI创作"),code:"QUESTION_BANK_ROBOT_CATEGORY"},{name:r("home.AI工具"),code:"TOOL"}]);const w=l([]),I=l([]),z=l([]),C=l([]),_=l("DRAW"),q=l(""),F=l("");l([]),Tt(async()=>{S.value=new URL(""+new URL("app_banner1.90120cf0.jpg",import.meta.url).href,self.location).href,new Swiper(".swiper",{loop:!0,slidesPerView:"auto",spaceBetween:30,autoplay:{delay:2e3}}),dt(),gt(),vt(),At(),ct(),ft(_.value),rt()});const W=l([]),ct=()=>{m.$api.queryLaboratoryTagInfoList().then(e=>{W.value=e.data})},rt=()=>{let e={code:"1732233508995493889"};m.$isLogin()&&m.$api.space_robotGetRobotInfo(e).then(i=>{q.value=i.data.code,F.value=i.data.type})};let j=l([]);const dt=()=>{m.$api.py_gpt4_vision_example().then(e=>{j.value=e.data.message})},ut=e=>{C.value[e].linkUrl&&C.value[e].linkUrl.includes("http")?window.open(C.value[e].linkUrl):T.value.showFn()},pt=()=>{_.value=="DRAW"&&A.push("/robot/draw"),_.value=="POSTER"&&A.push("/robot/placard/list"),_.value=="ROLE"&&A.push("/robot/role"),_.value=="QUESTION_BANK"&&A.push("/robot/creative"),_.value=="TOOL"&&A.push("/robot/tool/identify")},Z=e=>{console.log(e),_.value=e.showStyleType,I.value=[],(e.showStyleType=="DRAW"||e.showStyleType=="POSTER")&&(I.value=e.aiRecordResVoList,e.showStyleType=="DRAW"&&e.aiRecordResVoList.forEach(i=>{i.params=i.result?JSON.parse(i.result):""})),(e.showStyleType=="ROLE"||e.showStyleType=="QUESTION_BANK")&&(I.value=e.frontRobotInfoResVoList)},X=(e,i)=>{e=="identify"?(u.setPrompt(i.name),A.push("/robot/tool/identify")):A.push(i.url)},mt=(e,i)=>{e=="DRAW"?(A.push("/robot/draw"),u.setPrompt(i.result)):A.push("/robot/placard/list?aiRecordCode="+i.aiRecordCode)},ht=e=>{let i=[];e.forEach(N=>{i.push({resourceName:N.name,resourceCode:N.code,resourceSize:N.size})});let P={resourceList:i};m.$api.resourceUploadCallback(P).then(()=>{let N={isAgent:k.value,fileList:e};u.setInternetData(N),A.push("/robot/brain/networking")})},gt=()=>{let e={advertBoardCode:"HOMEPAGE_CAROUSEL"};m.$api1.banner_list_photo(e).then(i=>{C.value=i.resultObj})},At=()=>{let e={tagType:"INDUSTRY_SOLUTIONS"};m.$api.queryTagInfoList(e).then(i=>{y.value=i.data})},_t=e=>{A.push("/solution/info/"+e.tagType+"?tagCode="+e.tagCode)},vt=()=>{let e={pageSize:3,articleUseScene:"OFFICE"};m.$api1.home_articleList(e).then(i=>{z.value=i.resultObj.datas})},ft=e=>{w.value=[],m.$api.queryFrontRobotList().then(i=>{w.value=i.data,Z(i.data[0]),w.value.push({showStyleType:"TOOL",name:r("home.AI工具")})})},yt=e=>{let i=Number(e);return i<1e4?i:Math.floor(i/1e3)/10},It=l(null);Bt(()=>{clearInterval(It.value)});const bt=()=>{u.setPrompt(x.value),A.push("/robot/brain/networking")},Rt=()=>{D.value.showFn()};return(e,i)=>{const P=$("CarouselItem"),N=$("Carousel"),H=st,Ut=xt,St=zt;return a(),n("div",De,[C.value.length>0?(a(),n("div",xe,[b(N,{dots:"none",autoplay:"",onOnClick:ut,"autoplay-speed":7e3,loop:""},{default:R(()=>[(a(!0),n(g,null,f(C.value,(o,c)=>(a(),Q(P,{key:c,class:"home-swiper-item itemBanner",style:Et("background-image: url("+o.advertBgPhoto+");")},{default:R(()=>[t("div",ze,[t("img",{src:o.advertPhoto},null,8,Ye)])]),_:2},1032,["style"]))),128))]),_:1})])):p("",!0),t("div",Pe,[h(u).configuration&&h(u).configuration.bannerList&&h(u).configuration.bannerList.length>0?(a(!0),n(g,{key:0},f(h(u).configuration.bannerList,(o,c)=>(a(),n("div",{class:"home-product-item",key:c},[b(H,{to:o.url},{default:R(()=>[t("div",He,s(o.name),1),t("p",null,s(o.nameEnglish),1),t("div",Qe,s(o.function),1),t("div",Ge,s(o.label),1)]),_:2},1032,["to"])]))),128)):p("",!0)]),t("div",Ke,[t("div",Me,[t("h3",Ve,[t("div",null,s(e.$t("home.我今天能帮你做什么")),1),h(L)=="zh"?(a(),n("div",Je,"How can I help you today?")):p("",!0)]),t("div",qe,[t("div",Fe,[t("div",We,[t("div",{class:"prompt",onClick:Rt},s(e.$t("home.提示词")),1),je,kt(t("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=o=>x.value=o),placeholder:e.$t("home.你可以这样问我")},null,8,Ze),[[wt,x.value]]),t("div",Xe,[t("div",$e,[b(Ut,{modeType:"icon",format:["txt","doc","docx","pptx","pdf","xls","xlsx"],code:q.value,type:F.value,onUploadSuccess:ht},null,8,["code","type"])]),t("div",{class:"icon sending",style:{right:"0px"}},[t("img",{onClick:bt,src:Pt})])])])])]),t("p",null,[E(s(e.$t("home.请遵守")),1),t("a",{href:h(u).configuration.userServiceLink},"《"+s(e.$t("home.用户服务协议"))+"》",9,to),E("，"+s(e.$t("home.Ai结果由各大模型输出")),1)])])]),t("div",eo,[t("div",oo,[t("div",so,[ao,t("h2",null,s(h(r)("home.我的AI无所不能")),1)])]),t("div",no,[t("p",null,s(e.$t("home.魔法咒语")),1),b(H,{to:"/robot/chat"},{default:R(()=>[E(s(e.$t("home.立即体验"))+" ",1),io]),_:1})]),t("div",lo,[t("ul",co,[(a(!0),n(g,null,f(w.value,(o,c)=>(a(),n("li",{key:c,class:Dt(_.value==o.showStyleType?"active":""),onClick:O=>Z(o)},s(o.name),11,ro))),128))]),t("div",uo,[t("div",po,[t("p",{onClick:pt},[E(s(e.$t("home.更多")),1),mo])]),_.value=="DRAW"||_.value=="POSTER"?(a(),n("ul",ho,[(a(!0),n(g,null,f(I.value,(o,c)=>(a(),n("li",{key:c,onClick:O=>mt(_.value,o)},[t("img",{src:o.content||o.cateLogo,alt:""},null,8,Ao),_.value=="DRAW"?(a(),n("div",_o,[t("div",vo,[t("div",fo,s(e.$t("home.创作相似")),1)]),o.params?(a(),n("div",yo,s(o.params.content),1)):p("",!0)])):p("",!0)],8,go))),128))])):p("",!0),_.value=="ROLE"?(a(),n("ul",Io,[(a(!0),n(g,null,f(I.value,(o,c)=>(a(),n("li",{key:c,onClick:O=>h(A).push("/robot/role/detail?code="+o.code)},[t("img",{src:o.backgroupPic||o.img,alt:""},null,8,Ro),o.usePeopleNum?(a(),n("div",Uo,[So,t("div",null,s(yt(o.usePeopleNum))+s(e.$t("home.人在使用")),1)])):p("",!0),t("div",Co,[t("div",No,s(o.name),1),t("div",Lo,s(o.robotRemark),1)])],8,bo))),128))])):p("",!0),_.value=="QUESTION_BANK"?(a(),n("ul",To,[(a(!0),n(g,null,f(I.value,(o,c)=>(a(),n("li",{class:"content-list-item",key:c,onClick:O=>U.value.showFn(o.code)},[t("div",ko,[t("div",wo,[t("img",{src:o.robotLogo},null,8,Oo)]),t("div",Eo,s(o.name),1)]),t("div",Do,s(o.robotRemark),1)],8,Bo))),128))])):p("",!0),_.value=="TOOL"?(a(),n(g,{key:3},[t("ul",xo,[(a(!0),n(g,null,f(h(j),(o,c)=>(a(),n(g,{key:c},[c<4?(a(),n("li",{key:0,onClick:O=>X("identify",{name:c})},[t("img",{src:o.img,alt:""},null,8,Yo)],8,zo)):p("",!0)],64))),128))]),t("div",Po,[t("p",{onClick:i[1]||(i[1]=o=>h(A).push("/robot/tool/thinking"))},[E(s(e.$t("home.更多")),1),Ho])]),t("ul",Qo,[(a(!0),n(g,null,f(B.value,(o,c)=>(a(),n("li",{key:c,onClick:O=>X("siwei",o)},[t("img",{src:o.img,alt:""},null,8,Ko)],8,Go))),128))])],64)):p("",!0)])])]),h(u).configuration.laboratoryModule?(a(),n("div",Mo,[t("div",Vo,[t("div",Jo,[qo,t("h2",null,s(e.$t("home.探索无限")),1)])]),t("div",Fo,[t("p",null,s(e.$t("home.创造价值")),1),t("a",Wo,[E(s(e.$t("home.立即体验"))+" ",1),jo])]),t("div",Zo,[Xo,t("div",$o,[(a(!0),n(g,null,f(W.value,(o,c)=>(a(),n(g,{key:c},[c<4?(a(),n("div",ts,[t("div",es,s(o.tagName),1),t("div",os,s(o.subTitleKey),1),ss,t("div",as,s(o.tagValue),1),t("div",ns,[t("div",null,s(o.productSourceKey),1),o.urlTypeKey=="OUTER_LINK"?(a(),n("a",{key:0,class:"item-bottom-btn",href:o.urlLinkKey,target:"_blank"},[t("div",ls,s(e.$t("home.立即体验")),1),cs],8,is)):(a(),Q(H,{key:1,class:"item-bottom-btn",to:o.urlLinkKey},{default:R(()=>[t("div",rs,s(e.$t("home.立即体验")),1),ds]),_:2},1032,["to"])),us])])):p("",!0)],64))),128))])])])):p("",!0),h(u).configuration.video&&h(u).configuration.videoModule?(a(),n("div",ps,[t("div",ms,[t("div",hs,[gs,t("h2",null,s(e.$t("home.视频演示")),1)])]),t("div",As,[t("div",_s,[t("video",{controls:"",src:h(u).configuration.video},null,8,vs)])])])):p("",!0),h(u).configuration.techDevelopmentModule?(a(),n("div",fs,[t("div",ys,[t("div",Is,[bs,t("h2",null,s(e.$t("home.技术研发")),1)])]),t("div",Rs,[t("div",Us,[t("div",Ss,[t("ul",Cs,[t("li",null,[t("h3",null,s(e.$t("home.模块化可扩展")),1),t("p",null,s(e.$t("home.支持模块化的架构")),1)]),t("li",null,[t("h3",null,s(e.$t("home.数据驱动决策")),1),t("p",null,s(e.$t("home.系统侧重于数据的收集")),1)]),t("li",null,[t("h3",null,s(e.$t("home.多行业多场景")),1),t("p",null,s(e.$t("home.系统支持多种业务场景")),1)]),t("li",null,[t("h3",null,s(e.$t("home.生态系统支持")),1),t("p",null,s(e.$t("home.丰富的开发者资源和工具")),1)])])]),Ns])])])):p("",!0),h(u).configuration.solutionModule?(a(),n("div",Ls,[Ts,t("div",Bs,[t("div",ks,[ws,t("h2",null,s(e.$t("home.定制服务")),1)])]),t("div",Os,[t("div",Es,[t("div",Ds,[(a(!0),n(g,null,f(y.value,(o,c)=>(a(),n("div",{class:"swiper-slide",key:c,onClick:O=>_t(o)},[t("ul",zs,[t("li",null,[t("div",Ys,[t("img",{src:o.extend,alt:""},null,8,Ps)]),t("div",Hs,[t("h3",null,s(o.tagName),1),t("p",Qs,s(o.tagValue),1)])])])],8,xs))),128))]),Gs])])])):p("",!0),h(u).configuration.industryInformationModule?(a(),n("div",Ks,[t("div",Ms,[t("div",Vs,[Js,t("h2",null,s(e.$t("home.最新动态")),1)])]),t("div",qs,[t("div",Fs,[(a(!0),n(g,null,f(z.value,(o,c)=>(a(),Q(H,{class:"news-content-item",key:c,to:"/news/"+o.id},{default:R(()=>[t("div",Ws,[t("img",{src:o.articleCoverUrl},null,8,js)]),t("div",Zs,s(o.articleTitle),1),t("div",Xs,s(o.articleDesp),1)]),_:2},1032,["to"]))),128)),z.value.length%3==2?(a(),n("div",$s)):p("",!0)])])])):p("",!0),b(Ee),b(Ie,{ref_key:"modalPromptRef",ref:D},null,512),b(at,{ref_key:"serviceRef",ref:T},null,512),b(St,{ref_key:"cCreateRef",ref:U},null,512)])}}},va=V(ta,[["__scopeId","data-v-bff0101b"]]);export{va as default};
