(()=>{var e={};e.id=710,e.ids=[710],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9769:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c}),t(9229),t(7080),t(5866);var s=t(3191),a=t(8716),n=t(7922),i=t.n(n),l=t(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(r,o);let c=["",{children:["Pages",{children:["SOA",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9229)),"D:\\Desktop\\Assignment2\\client\\src\\app\\Pages\\SOA\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,7080)),"D:\\Desktop\\Assignment2\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\Desktop\\Assignment2\\client\\src\\app\\Pages\\SOA\\page.js"],m="/Pages/SOA/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/Pages/SOA/page",pathname:"/Pages/SOA",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7727:(e,r,t)=>{Promise.resolve().then(t.bind(t,3163)),Promise.resolve().then(t.bind(t,5731))},7981:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},1405:(e,r,t)=>{Promise.resolve().then(t.bind(t,5141))},3163:(e,r,t)=>{"use strict";t.d(r,{UserProvider:()=>i,x:()=>n});var s=t(326),a=t(7577);let n=(0,a.createContext)(),i=({children:e})=>{let[r,t]=(0,a.useState)({user:{},token:""});return(0,a.useEffect)(()=>{t(window.localStorage.getItem("auth"))},[]),s.jsx(n.Provider,{value:[r,t],children:e})}},5731:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var s=t(326),a=t(434),n=t(7577),i=t(3163),l=t(5047);let o=()=>{let[e,r]=(0,n.useContext)(i.x),[t,o]=(0,n.useState)(""),c=(0,l.useRouter)();return(0,n.useEffect)(()=>{},[]),(0,n.useEffect)(()=>{let e=document.querySelectorAll(".nav-link");e.forEach(r=>{r.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("active")),r.classList.add("active")})})},[]),s.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:(0,s.jsxs)("div",{className:"container",children:[s.jsx(a.default,{className:"navbar-brand",href:"/",children:"DNS-MANAGER"}),s.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:s.jsx("span",{className:"navbar-toggler-icon"})}),s.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,s.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-1",children:[s.jsx("li",{className:"nav-item",children:s.jsx(a.default,{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),null!=e?(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"dropdown",children:s.jsx("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false",children:e&&e.user&&e.user.name})}),s.jsx("li",{className:"nav-item",children:s.jsx("a",{className:"nav-link",style:{cursor:"pointer"},onClick:()=>{window.localStorage.removeItem("auth"),r(null),c.push("/login")},children:"Logout"})})]}):(0,s.jsxs)(s.Fragment,{children:["   ",s.jsx("li",{className:"nav-item",children:s.jsx(a.default,{legacyBehavior:!0,href:"/Register",children:s.jsx("a",{className:"nav-link",children:"Register"})})}),s.jsx("li",{className:"nav-item",children:s.jsx(a.default,{className:"nav-link","aria-current":"page",href:"/login",children:"Login"})})]})]})})]})})}},5141:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(326),a=t(7577),n=t(4490),i=t(5047),l=t(9394);t(5996);let o=()=>{let e=(0,i.useRouter)(),[r,t]=(0,a.useState)({domainName:"",email:"",refreshTime:"",retryTime:"",expireTime:"",minimumTTL:""}),o=e=>{let{name:r,value:s}=e.target;t(e=>({...e,[r]:s}))},c=async t=>{t.preventDefault();try{let{data:t}=await n.Z.post("http://localhost:8080/api/updateSOARecord",{...r});t.success?(l.Am.success(t.message),e.push("/")):l.Am.error(t.message)}catch(e){l.Am.error("Failed to update SOA Record"),console.error("Error updating SOA Record:",e)}};return(0,s.jsxs)("div",{className:"container",children:[s.jsx(l.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),s.jsx("h1",{className:"text-center mt-3 mb-3",children:"Update SOA Record"}),s.jsx("div",{className:"card p-4",children:(0,s.jsxs)("form",{onSubmit:c,children:[(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"domainName",children:"Domain Name"}),s.jsx("input",{type:"text",className:"form-control",id:"domainName",name:"domainName",value:r.domainName,onChange:o,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"email",children:"Responsible Person Email"}),s.jsx("input",{type:"email",className:"form-control",id:"email",name:"email",value:r.email,onChange:o,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"refreshTime",children:"Refresh Time"}),s.jsx("input",{type:"number",className:"form-control",id:"refreshTime",name:"refreshTime",value:r.refreshTime,onChange:o,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"retryTime",children:"Retry Time"}),s.jsx("input",{type:"number",className:"form-control",id:"retryTime",name:"retryTime",value:r.retryTime,onChange:o,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"expireTime",children:"Expire Time"}),s.jsx("input",{type:"number",className:"form-control",id:"expireTime",name:"expireTime",value:r.expireTime,onChange:o,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"minimumTTL",children:"Minimum TTL"}),s.jsx("input",{type:"number",className:"form-control",id:"minimumTTL",name:"minimumTTL",value:r.minimumTTL,onChange:o,required:!0})]}),s.jsx("button",{type:"submit",className:"btn btn-primary mt-3",children:"Update SOA Record"})]})})]})}},9229:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var s=t(8570);let a=(0,s.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\SOA\page.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,s.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\SOA\page.js#default`)},7080:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g});var s=t(9510),a=t(4365),n=t.n(a);t(5023);var i=t(8570);let l=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js`),{__esModule:o,$$typeof:c}=l;l.default;let d=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js#default`);t(1159);let m=()=>s.jsx("div",{className:"d-flex text-align-center justify-content-center text-white bg-dark p-4 ",children:"All Rights Reserved \xa9 Aman Das"}),u=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js`),{__esModule:p,$$typeof:x}=u;u.default,(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#userContext`);let h=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#UserProvider`);function g({children:e,title:r}){return s.jsx(s.Fragment,{children:s.jsx("html",{children:(0,s.jsxs)(h,{children:[(0,s.jsxs)(n(),{children:[s.jsx("meta",{charSet:"UTF-8",name:"viewport",content:"initial-scale=1.0 width=device-width"}),s.jsx("title",{children:r})]}),(0,s.jsxs)("body",{children:[s.jsx(d,{}),s.jsx("main",{style:{minHeight:"79.7vh"},children:e}),s.jsx(m,{})]})]})})})}g.defaultProps={title:"DNS MANAGER"}},5023:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[587,611],()=>t(9769));module.exports=s})();