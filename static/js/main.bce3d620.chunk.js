(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),l=c(1);c(9);var s=c(2),i=c.n(s),r=c(0);const o=e=>{let{total:a,perPage:c,currentPage:t,onPageChange:n}=e;const l=Math.ceil(a/c),s=1===t,o=t===l,j=Array.from({length:l},((e,a)=>a+1));return Object(r.jsxs)("ul",{className:"pagination",children:[Object(r.jsx)("li",{className:i()("page-item",{disabled:s}),children:Object(r.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":s,onClick:()=>{s||n(t-1)},children:"\xab"})}),j.map((e=>Object(r.jsx)("li",{className:i()("page-item",{active:e===t}),children:Object(r.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:()=>n(e),children:e})},e))),Object(r.jsx)("li",{className:i()("page-item",{disabled:o}),children:Object(r.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":o,onClick:()=>{o||n(t+1)},children:"\xbb"})})]})};const j=function(e,a){const c=[];for(let t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((e=>"Item ".concat(e))),d=()=>{const[e,a]=Object(l.useState)(5),[c,t]=Object(l.useState)(1),n=j.length,s=e*c,i=s-e+1,d=j.slice(i-1,s);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Items with Pagination"}),Object(r.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(i," - ").concat(s>n?n:s," of ").concat(n,")")}),Object(r.jsxs)("div",{className:"form-group row",children:[Object(r.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(r.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:e=>{const c=Number(e.target.value);a(c),t(1)},value:e,children:[Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"10",children:"10"}),Object(r.jsx)("option",{value:"20",children:"20"})]})}),Object(r.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(r.jsx)(o,{total:n,perPage:e,currentPage:c,onPageChange:e=>{t(e)}}),Object(r.jsx)("ul",{children:d.map((e=>Object(r.jsx)("li",{"data-cy":"item",children:e},e)))})]})};n.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.bce3d620.chunk.js.map