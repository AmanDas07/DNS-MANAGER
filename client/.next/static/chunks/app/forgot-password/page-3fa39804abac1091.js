(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{8835:function(e,s,a){Promise.resolve().then(a.bind(a,8713))},8713:function(e,s,a){"use strict";a.r(s);var t=a(7437),l=a(2265);a(594);var n=a(2126),r=a(3580);a(4193);var o=a(6463);s.default=()=>{let[e,s]=(0,l.useState)(""),[a,i]=(0,l.useState)(!1),c=(0,o.useRouter)(),[d,m]=(0,l.useState)(""),u=async s=>{s.preventDefault();try{i(!0);let{data:s}=await n.Z.post("".concat("http://localhost:8080/api","/forgotPassword"),{email:e,newPassword:d});r.Am.success("Password Reset Successfully"),i(!1),c.push("/login")}catch(e){console.log(e),r.Am.error(e.response.data),i(!1)}};return(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row d-flex justify-content-center align-items-center ",children:[(0,t.jsx)("div",{className:"col-md-8"}),(0,t.jsx)("h1",{className:"d-flex align-items-center justify-content-center mt-3 mb-3",children:"Reset Password"}),(0,t.jsxs)("form",{className:"shadow-lg p-3 mb-5 bg-white rounded",children:[(0,t.jsx)(r.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),(0,t.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:e,onChange:e=>{s(e.target.value)}})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"New-Password"}),(0,t.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword2",value:d,onChange:e=>{m(e.target.value)}})]}),(0,t.jsx)("div",{className:"d-flex ",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-primary ",onClick:u,disabled:!d||!e,children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"Loading \xa0"}),(0,t.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","area-hidden":"true"})]}):"Submit"})})]})]})})}},594:function(){}},function(e){e.O(0,[610,143,489,971,23,744],function(){return e(e.s=8835)}),_N_E=e.O()}]);