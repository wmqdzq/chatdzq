import{_ as s}from"./svga.1e6ae788.js";import{l as c}from"./loding.bf55ea5c.js";import{a as r,o as t,i as n,c as l,v as m,u as d,l as i,B as h}from"./entry.d811778a.js";const g={class:"aiLoadingComm"},v=r({__name:"createLoading",props:{type:{type:String,default:"create"},position:{type:String,default:""},width:{type:Number,default:35},height:{type:Number,default:35}},setup(e){const a=e;return(u,p)=>{const o=s;return t(),n("div",g,[e.type=="create"?(t(),l(o,{key:0,class:m(e.position=="center"?"center":""),svgaImg:d(c),width:a.width,height:a.height},null,8,["class","svgaImg","width","height"])):i("",!0),e.type=="loading"?(t(),n("div",{key:1,class:"spinnerCom",style:h("width:"+e.width+"px","height:"+e.width+"px")},null,4)):i("",!0)])}}});export{v as _};