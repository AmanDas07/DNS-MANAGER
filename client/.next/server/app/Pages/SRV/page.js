(()=>{var e={};e.id=100,e.ids=[100],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6438:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(8074),r(7080),r(5866);var s=r(3191),a=r(8716),n=r(7922),i=r.n(n),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["Pages",{children:["SRV",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8074)),"D:\\Desktop\\Assignment2\\client\\src\\app\\Pages\\SRV\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,7080)),"D:\\Desktop\\Assignment2\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\Desktop\\Assignment2\\client\\src\\app\\Pages\\SRV\\page.js"],u="/Pages/SRV/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/Pages/SRV/page",pathname:"/Pages/SRV",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7727:(e,t,r)=>{Promise.resolve().then(r.bind(r,3163)),Promise.resolve().then(r.bind(r,5731))},7981:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8907:(e,t,r)=>{Promise.resolve().then(r.bind(r,825))},3163:(e,t,r)=>{"use strict";r.d(t,{UserProvider:()=>i,x:()=>n});var s=r(326),a=r(7577);let n=(0,a.createContext)(),i=({children:e})=>{let[t,r]=(0,a.useState)({user:{},token:""});return(0,a.useEffect)(()=>{r(window.localStorage.getItem("auth"))},[]),s.jsx(n.Provider,{value:[t,r],children:e})}},5731:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(326),a=r(434),n=r(7577),i=r(3163),o=r(5047);let l=()=>{let[e,t]=(0,n.useContext)(i.x),[r,l]=(0,n.useState)(""),c=(0,o.useRouter)();return(0,n.useEffect)(()=>{},[]),(0,n.useEffect)(()=>{let e=document.querySelectorAll(".nav-link");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("active")),t.classList.add("active")})})},[]),s.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:(0,s.jsxs)("div",{className:"container",children:[s.jsx(a.default,{className:"navbar-brand",href:"/",children:"DNS-MANAGER"}),s.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:s.jsx("span",{className:"navbar-toggler-icon"})}),s.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,s.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-1",children:[s.jsx("li",{className:"nav-item",children:s.jsx(a.default,{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),null!=e?(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"dropdown",children:s.jsx("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false",children:e&&e.user&&e.user.name})}),s.jsx("li",{className:"nav-item",children:s.jsx("a",{className:"nav-link",style:{cursor:"pointer"},onClick:()=>{window.localStorage.removeItem("auth"),t(null),c.push("/login")},children:"Logout"})})]}):(0,s.jsxs)(s.Fragment,{children:["   ",s.jsx("li",{className:"nav-item",children:s.jsx(a.default,{legacyBehavior:!0,href:"/Register",children:s.jsx("a",{className:"nav-link",children:"Register"})})}),s.jsx("li",{className:"nav-item",children:s.jsx(a.default,{className:"nav-link","aria-current":"page",href:"/login",children:"Login"})})]})]})})]})})}},825:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(326),a=r(7577),n=r(4490),i=r(5047),o=r(9394);r(5996);let l=()=>{let e=(0,i.useRouter)(),[t,r]=(0,a.useState)({domainName:"",recordSetName:"",service:"",protocol:"",priority:"",weight:"",port:"",target:""}),l=e=>{let{name:t,value:s}=e.target;r(e=>({...e,[t]:s}))},c=async r=>{r.preventDefault();try{let{data:r}=await n.Z.post("http://localhost:8080/api/updateSRVRecord",{...t});r.success?(o.Am.success(r.message),e.push("/")):o.Am.error(r.message)}catch(e){o.Am.error("Failed to update SRV Record"),console.error("Error updating SRV Record:",e)}};return(0,s.jsxs)("div",{className:"container",children:[s.jsx(o.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),s.jsx("h1",{className:"text-center mt-3 mb-3",children:"Update SRV Record"}),s.jsx("div",{className:"card p-4",children:(0,s.jsxs)("form",{onSubmit:c,children:[(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"domainName",children:"Domain Name"}),s.jsx("input",{type:"text",className:"form-control",id:"domainName",name:"domainName",value:t.domainName,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"recordSetName",children:"Record Set Name"}),s.jsx("input",{type:"text",className:"form-control",id:"recordSetName",name:"recordSetName",value:t.recordSetName,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"service",children:"Service"}),s.jsx("input",{type:"text",className:"form-control",id:"service",name:"service",value:t.service,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"protocol",children:"Protocol"}),s.jsx("input",{type:"text",className:"form-control",id:"protocol",name:"protocol",value:t.protocol,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"priority",children:"Priority"}),s.jsx("input",{type:"number",className:"form-control",id:"priority",name:"priority",value:t.priority,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"weight",children:"Weight"}),s.jsx("input",{type:"number",className:"form-control",id:"weight",name:"weight",value:t.weight,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"port",children:"Port"}),s.jsx("input",{type:"number",className:"form-control",id:"port",name:"port",value:t.port,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"target",children:"Target"}),s.jsx("input",{type:"text",className:"form-control",id:"target",name:"target",value:t.target,onChange:l,required:!0})]}),s.jsx("button",{type:"submit",className:"btn btn-primary mt-3",children:"Update SRV Record"})]})})]})}},8074:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=r(8570);let a=(0,s.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\SRV\page.js`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\SRV\page.js#default`)},7080:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(9510),a=r(4365),n=r.n(a);r(5023);var i=r(8570);let o=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js`),{__esModule:l,$$typeof:c}=o;o.default;let d=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js#default`);r(1159);let u=()=>s.jsx("div",{className:"d-flex text-align-center justify-content-center text-white bg-dark p-4 ",children:"All Rights Reserved \xa9 Aman Das"}),m=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js`),{__esModule:p,$$typeof:x}=m;m.default,(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#userContext`);let g=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#UserProvider`);function h({children:e,title:t}){return s.jsx(s.Fragment,{children:s.jsx("html",{children:(0,s.jsxs)(g,{children:[(0,s.jsxs)(n(),{children:[s.jsx("meta",{charSet:"UTF-8",name:"viewport",content:"initial-scale=1.0 width=device-width"}),s.jsx("title",{children:t})]}),(0,s.jsxs)("body",{children:[s.jsx(d,{}),s.jsx("main",{style:{minHeight:"79.7vh"},children:e}),s.jsx(u,{})]})]})})})}h.defaultProps={title:"DNS MANAGER"}},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[587,611],()=>r(6438));module.exports=s})();