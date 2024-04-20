(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},4714:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(1838),s(7080),s(5866);var a=s(3191),r=s(8716),n=s(7922),i=s.n(n),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1838)),"D:\\Desktop\\Assignment2\\client\\src\\app\\page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,7080)),"D:\\Desktop\\Assignment2\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\Desktop\\Assignment2\\client\\src\\app\\page.js"],u="/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7727:(e,t,s)=>{Promise.resolve().then(s.bind(s,3163)),Promise.resolve().then(s.bind(s,5731))},7981:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},3500:(e,t,s)=>{Promise.resolve().then(s.bind(s,6777))},3163:(e,t,s)=>{"use strict";s.d(t,{UserProvider:()=>i,x:()=>n});var a=s(326),r=s(7577);let n=(0,r.createContext)(),i=({children:e})=>{let[t,s]=(0,r.useState)({user:{},token:""});return(0,r.useEffect)(()=>{s(window.localStorage.getItem("auth"))},[]),a.jsx(n.Provider,{value:[t,s],children:e})}},5731:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var a=s(326),r=s(434),n=s(7577),i=s(3163),o=s(5047);let l=()=>{let[e,t]=(0,n.useContext)(i.x),[s,l]=(0,n.useState)(""),d=(0,o.useRouter)();return(0,n.useEffect)(()=>{},[]),(0,n.useEffect)(()=>{let e=document.querySelectorAll(".nav-link");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("active")),t.classList.add("active")})})},[]),a.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:(0,a.jsxs)("div",{className:"container",children:[a.jsx(r.default,{className:"navbar-brand",href:"/",children:"DNS-MANAGER"}),a.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,a.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-1",children:[a.jsx("li",{className:"nav-item",children:a.jsx(r.default,{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),null!=e?(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"dropdown",children:a.jsx("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false",children:e&&e.user&&e.user.name})}),a.jsx("li",{className:"nav-item",children:a.jsx("a",{className:"nav-link",style:{cursor:"pointer"},onClick:()=>{window.localStorage.removeItem("auth"),t(null),d.push("/login")},children:"Logout"})})]}):(0,a.jsxs)(a.Fragment,{children:["   ",a.jsx("li",{className:"nav-item",children:a.jsx(r.default,{legacyBehavior:!0,href:"/Register",children:a.jsx("a",{className:"nav-link",children:"Register"})})}),a.jsx("li",{className:"nav-item",children:a.jsx(r.default,{className:"nav-link","aria-current":"page",href:"/login",children:"Login"})})]})]})})]})})}},6777:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=s(326);s(9973);var r=s(7577),n=s(4490),i=s(5047),o=s(3163),l=s(9394);s(5996);let d=()=>{let[e,t]=(0,r.useState)([]),[s,d]=(0,r.useContext)(o.x),[c,u]=(0,r.useState)(""),p=(0,i.useRouter)(),[m,h]=(0,r.useState)(""),[x,g]=(0,r.useState)(!1),v=async(e,t)=>{console.log(e,t);try{let s=await n.Z.post("http://localhost:8080/api/deleteRecord",{recordType:e,recordSetName:t,dnsZoneName:"Hllog.com",resourceGroup:"hllo_group"});l.Am.success(s.data.message),j()}catch(e){l.Am.error("Failed to Delete Record"),console.error("Failed to delete record:",e)}},j=async()=>{try{let{data:e}=await n.Z.post("http://localhost:8080/api/verifyDomain",{domainName:"90amandasgmail.onmicrosoft.com"},{headers:{Authorization:`Bearer ${s.token}`}});t(e)}catch(e){console.error("Failed to fetch data:",e)}};(0,r.useEffect)(()=>{let s=e.filter(e=>{let t=!!e.data.host&&e.data.host.toLowerCase().includes(m.toLowerCase()),s=!!e.data.email&&e.data.email.toLowerCase().includes(m.toLowerCase()),a=!!e.data.target&&e.data.target.toLowerCase().includes(m.toLowerCase());return t||s||a});m?t(s):j()},[m]);let b=e=>{u(e),"A"===c?p.push("/Pages/ARecord"):"AAAA"===c?p.push("/Pages/AAAA"):"CNAME"===c?p.push("/Pages/CNAME"):"TXT"===c?p.push("/Pages/TXT"):"MX"===c?p.push("/Pages/MX"):"NS"===c?p.push("/Pages/NS"):"PTR"===c?p.push("/Pages/PTR"):"SOA"===c?p.push("/Pages/SOA"):"SRV"===c&&p.push("/Pages/SRV"),g(!1)};return(0,a.jsxs)("div",{className:"container mt-4",children:[a.jsx(l.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),a.jsx("h2",{children:"Custom Domain Names"}),a.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>g(!0),children:"Add Record"}),a.jsx("input",{type:"text",placeholder:"Search records...",className:"form-control my-2",value:m,onChange:e=>{h(e.target.value)}}),(0,a.jsxs)("table",{className:"table mt-3",style:{tableLayout:"fixed",width:"100%"},children:[a.jsx("thead",{children:(0,a.jsxs)("tr",{children:[a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"value"}),a.jsx("th",{children:"TTL"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:e.map((e,t)=>{let s,r,n;switch(e.type){case"SOA":s=e.data.host,r=`Email: ${e.data.email}, Serial: ${e.data.serialNumber}, Expire: ${e.data.expireTime}`,n=e.data.minimumTtl;break;case"NS":s="@",r=e.data.map(e=>e.nsdname).join(", "),n="Default";break;case"A":s=e.name,r=e.data[0].ipv4Address,n=e.data.ttl;break;case"AAAA":s=e.data.host,r=e.data.ipv6,n=e.data.ttl;break;case"TXT":s=e.data.host,r=e.data.text,n=e.data.ttl;break;case"CNAME":s=e.data.alias,r=e.data.target,n=e.data.ttl;break;case"SRV":s=e.data.service+"."+e.data.protocol,r=`Priority: ${e.data.priority}, Weight: ${e.data.weight}, Port: ${e.data.port}, Target: ${e.data.target}`,n=e.data.ttl;break;default:s="Unknown",r="N/A",n="N/A"}return(0,a.jsxs)("tr",{children:[a.jsx("td",{children:e.type}),a.jsx("td",{children:s}),a.jsx("td",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:r}),a.jsx("td",{children:n}),a.jsx("td",{children:"NS"!==e.type&&"SOA"!==e.type&&a.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>v(e.type,e.name),children:"Delete"})})]},t)})})]}),x&&a.jsx("div",{className:"modal show d-block",children:a.jsx("div",{className:"modal-dialog",children:(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsxs)("div",{className:"modal-header",children:[a.jsx("h5",{className:"modal-title",children:"Select Record Type"})," ",a.jsx("button",{type:"button",className:"close btn-danger",onClick:()=>g(!1),style:{marginLeft:"10px",boxShadow:"initial",borderRadius:"2px"},children:a.jsx("span",{"aria-hidden":"true",children:"\xd7"})})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"list-group",children:["A","AAAA","CNAME","TXT","MX","NS","SOA","SRV"].map(e=>(0,a.jsxs)("button",{onClick:()=>b(e),className:"list-group-item list-group-item-action",children:[e," Record"]},e))})})]})})}),x&&a.jsx("div",{className:"modal-backdrop fade show"})]})}},7080:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var a=s(9510),r=s(4365),n=s.n(r);s(5023);var i=s(8570);let o=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js`),{__esModule:l,$$typeof:d}=o;o.default;let c=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\Pages\Components\Header.js#default`);s(1159);let u=()=>a.jsx("div",{className:"d-flex text-align-center justify-content-center text-white bg-dark p-4 ",children:"All Rights Reserved \xa9 Aman Das"}),p=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js`),{__esModule:m,$$typeof:h}=p;p.default,(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#userContext`);let x=(0,i.createProxy)(String.raw`D:\Desktop\Assignment2\client\context\useContext.js#UserProvider`);function g({children:e,title:t}){return a.jsx(a.Fragment,{children:a.jsx("html",{children:(0,a.jsxs)(x,{children:[(0,a.jsxs)(n(),{children:[a.jsx("meta",{charSet:"UTF-8",name:"viewport",content:"initial-scale=1.0 width=device-width"}),a.jsx("title",{children:t})]}),(0,a.jsxs)("body",{children:[a.jsx(c,{}),a.jsx("main",{style:{minHeight:"79.7vh"},children:e}),a.jsx(u,{})]})]})})})}g.defaultProps={title:"DNS MANAGER"}},1838:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var a=s(8570);let r=(0,a.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\page.js`),{__esModule:n,$$typeof:i}=r;r.default;let o=(0,a.createProxy)(String.raw`D:\Desktop\Assignment2\client\src\app\page.js#default`)},9973:()=>{},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[587,611],()=>s(4714));module.exports=a})();