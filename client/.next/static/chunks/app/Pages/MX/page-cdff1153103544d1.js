(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{7701:function(e,r,a){Promise.resolve().then(a.bind(a,928))},928:function(e,r,a){"use strict";a.r(r);var s=a(7437),n=a(2265),t=a(2126),c=a(6463),o=a(3580);a(4193),r.default=()=>{let e=(0,c.useRouter)(),[r,a]=(0,n.useState)({domainName:"",recordSetName:"",mailExchange:"",preference:""}),l=e=>{let{name:r,value:s}=e.target;a(e=>({...e,[r]:s}))},m=async a=>{a.preventDefault();try{let{data:a}=await t.Z.post("".concat("http://localhost:8080/api","/updateMXRecord"),{...r});a.success?(o.Am.success(a.message),e.push("/")):o.Am.error(a.message)}catch(e){o.Am.error("Failed to update MX Record"),console.error("Error updating MX Record:",e)}};return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(o.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,s.jsx)("h1",{className:"text-center mt-3 mb-3",children:"Update MX Record"}),(0,s.jsx)("div",{className:"card p-4",children:(0,s.jsxs)("form",{onSubmit:m,children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"domainName",children:"Domain Name"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"domainName",name:"domainName",value:r.domainName,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"recordSetName",children:"Record Set Name"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"recordSetName",name:"recordSetName",value:r.recordSetName,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"mailExchange",children:"Mail Exchange"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"mailExchange",name:"mailExchange",value:r.mailExchange,onChange:l,required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"preference",children:"Preference"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"preference",name:"preference",value:r.preference,onChange:l,required:!0})]}),(0,s.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Update MX Record"})]})})]})}}},function(e){e.O(0,[143,489,971,23,744],function(){return e(e.s=7701)}),_N_E=e.O()}]);