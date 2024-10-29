import g from 'mermaid';
import A from 'murmurhash-js';

var l=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var f=(e,n)=>{var i={};for(var r in e)I.call(e,r)&&n.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&l)for(var r of l(e))n.indexOf(r)<0&&$.call(e,r)&&(i[r]=e[r]);return i};const k=e=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),M=e=>{try{const n="mermaid-render"+A(e,42).toString();return g.mermaidAPI.render(n,e,i=>{e=i;}),`<pre class="mermaid">${e}</pre>`}catch(n){return `<pre>${k(n.message)}</pre>`}},d=(e,n)=>{Object.assign(d.default,n);const u=d.default.dictionary,{token:i="mermaid"}=u,r=f(u,["token"]);g.initialize(d.default);const p=e.renderer.rules.fence.bind(e.renderer.rules);function y(c,t,a,s){var o,m;return t=(o=r[t])!=null?o:t,a=(m=r[a])!=null?m:a,a===""?`${t}
`:`${t} ${a}${s}`}e.renderer.rules.fence=(c,t,a,s,o)=>{const m=c[t],P=m.content.trim();return m.info.trim()===i?M(P.replace(/(.*?)[ \n](.*?)([ \n])/,y)):p(c,t,a,s,o)};};d.default={dictionary:{token:"mermaid"}};

export { d as default };
//# sourceMappingURL=index.mjs.map
