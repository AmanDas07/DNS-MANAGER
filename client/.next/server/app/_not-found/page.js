(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2337:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),n(7352),n(5866),n(7080);var r=n(3191),s=n(8716),a=n(7922),o=n.n(a),i=n(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);n.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,7080)),"D:\\Desktop\\Assignment2\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found/page",p={require:n,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7727:(e,t,n)=>{Promise.resolve().then(n.bind(n,3163)),Promise.resolve().then(n.bind(n,5731))},7981:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},3163:(e,t,n)=>{"use strict";n.d(t,{UserProvider:()=>o,x:()=>a});var r=n(326),s=n(7577);let a=(0,s.createContext)(),o=({children:e})=>{let[t,n]=(0,s.useState)({user:{},token:""});return(0,s.useEffect)(()=>{n(window.localStorage.getItem("auth"))},[]),r.jsx(a.Provider,{value:[t,n],children:e})}},5731:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(326),s=n(434),a=n(7577),o=n(3163),i=n(5047);let l=()=>{let[e,t]=(0,a.useContext)(o.x),[n,l]=(0,a.useState)(""),d=(0,i.useRouter)();return(0,a.useEffect)(()=>{},[]),(0,a.useEffect)(()=>{let e=document.querySelectorAll(".nav-link");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("active")),t.classList.add("active")})})},[]),r.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx(s.default,{className:"navbar-brand",href:"/",children:"DNS-MANAGER"}),r.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:r.jsx("span",{className:"navbar-toggler-icon"})}),r.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-1",children:[r.jsx("li",{className:"nav-item",children:r.jsx(s.default,{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),null!=e?(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"dropdown",children:r.jsx("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false",children:e&&e.user&&e.user.name})}),r.jsx("li",{className:"nav-item",children:r.jsx("a",{className:"nav-link",style:{cursor:"pointer"},onClick:()=>{window.localStorage.removeItem("auth"),t(null),d.push("/login")},children:"Logout"})})]}):(0,r.jsxs)(r.Fragment,{children:["   ",r.jsx("li",{className:"nav-item",children:r.jsx(s.default,{legacyBehavior:!0,href:"/Register",children:r.jsx("a",{className:"nav-link",children:"Register"})})}),r.jsx("li",{className:"nav-item",children:r.jsx(s.default,{className:"nav-link","aria-current":"page",href:"/login",children:"Login"})})]})]})})]})})}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{isNotFoundError:function(){return s},notFound:function(){return r}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return s},default:function(){return a}});let r=n(6399),s="next/dist/client/components/parallel-route-default.js";function a(){(0,r.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7080:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(9510),s=n(4365),a=n.n(s);n(5023);var o=n(8570);let i=(0,o.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js`),{__esModule:l,$$typeof:d}=i;i.default;let c=(0,o.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js#default`);n(1159);let u=()=>r.jsx("div",{className:"d-flex text-align-center justify-content-center text-white bg-dark p-4 ",children:"All Rights Reserved \xa9 Aman Das"}),p=(0,o.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js`),{__esModule:x,$$typeof:m}=p;p.default,(0,o.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#userContext`);let f=(0,o.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#UserProvider`);function g({children:e,title:t}){return r.jsx(r.Fragment,{children:r.jsx("html",{children:(0,r.jsxs)(f,{children:[(0,r.jsxs)(a(),{children:[r.jsx("meta",{charSet:"UTF-8",name:"viewport",content:"initial-scale=1.0 width=device-width"}),r.jsx("title",{children:t})]}),(0,r.jsxs)("body",{children:[r.jsx(c,{}),r.jsx("main",{style:{minHeight:"79.7vh"},children:e}),r.jsx(u,{})]})]})})})}g.defaultProps={title:"DNS MANAGER"}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[587],()=>n(2337));module.exports=r})();