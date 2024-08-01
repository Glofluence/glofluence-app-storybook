(self.webpackChunkglofluence_app=self.webpackChunkglofluence_app||[]).push([[9373],{"./src/screens/session/resetPassword/ResetPassword.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Flow:()=>Flow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ResetPassword_stories});var dist=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),PasswordField=__webpack_require__("./src/components/inputs/password/PasswordField.tsx"),TextField=__webpack_require__("./src/components/inputs/textfield/TextField.tsx"),feedbackAlertContext=__webpack_require__("./src/context/feedbackAlertContext.tsx"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),icons=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ResetPassword=()=>{const[currentStep,setCurrentStep]=(0,react.useState)(0),[showVerifyCode,setShowVerifyCode]=(0,react.useState)(!1),[isProcessing,setIsProcessing]=(0,react.useState)(!1),{alert}=(0,feedbackAlertContext.u)(),validation=(0,index_esm.Ik)({password:(0,index_esm.Yj)().trim().required("Password is required").min(8,"Password is too short - should be 8 chars minimum."),confirmPassword:(0,index_esm.Yj)().trim().required("Country required").oneOf([(0,index_esm.KR)("password")],"Password doesn’t match, try again.")});return(0,jsx_runtime.jsxs)(dist.AO,{children:[(0,jsx_runtime.jsx)(dist.eU,{children:(0,jsx_runtime.jsx)(dist.BC,{size:"large",children:"Reset Password"})}),(0,jsx_runtime.jsx)(dist.W9,{color:"light",className:"ion-padding",children:(0,jsx_runtime.jsx)(formik_esm.l1,{initialValues:{email:"",code:"",password:"",confirmPassword:""},onSubmit:(_,_ref)=>{let{setSubmitting}=_ref;setSubmitting(!1),setTimeout((()=>{alert({severity:"success",caption:"You will be redirected to the log in screen to sign in",title:"Reset Password Succesfully"})}),2e3)},validationSchema:validation,children:_ref2=>{let{values,setFieldValue,submitForm,isSubmitting}=_ref2;return(0,jsx_runtime.jsxs)(formik_esm.lV,{children:[0===currentStep&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Email"}),value:values.email,setValue:value=>{setFieldValue("email",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.kiB,color:"primary"}),maxCount:60,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"email",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"emailTextField"}),showVerifyCode&&(0,jsx_runtime.jsx)(TextField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Verification code"}),value:values.code,setValue:value=>{setFieldValue("code",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.Ebd,color:"primary"}),maxCount:10,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"code",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"codeTextField"}),(0,jsx_runtime.jsx)(dist.Jm,{disabled:isProcessing,className:"mt-5","data-testid":"submitBtn",onClick:()=>{showVerifyCode||(setIsProcessing(!0),setTimeout((()=>{setShowVerifyCode(!0),setIsProcessing(!1)}),1e3)),showVerifyCode&&(setIsProcessing(!0),setTimeout((()=>{setCurrentStep(1),setIsProcessing(!1)}),1e3))},children:isProcessing?(0,jsx_runtime.jsx)(dist.w2,{}):showVerifyCode?"Verify code":"Verify email"})]}),1===currentStep&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PasswordField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Password"}),value:values.password,setValue:value=>{setFieldValue("password",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.AaQ,color:"primary"}),maxCount:15,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"password",render:msg=>(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-1",children:msg.split(",").map((elem=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin block",children:elem},(0,utils.rk)())))})}),dataTestId:"passwordTextField"}),(0,jsx_runtime.jsx)(PasswordField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Confirm Password"}),value:values.confirmPassword,setValue:value=>{setFieldValue("confirmPassword",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.AaQ,color:"primary"}),maxCount:15,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"confirmPassword",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"confirmPasswordTextField"}),(0,jsx_runtime.jsx)(dist.Jm,{disabled:isSubmitting,onClick:submitForm,"data-testid":"resetPasswordBtn",children:isSubmitting?(0,jsx_runtime.jsx)(dist.w2,{}):"Reset password"})]})]})}})})]})},resetPassword_ResetPassword=ResetPassword;ResetPassword.__docgenInfo={description:"",methods:[],displayName:"ResetPassword"};var FeedbackAlert=__webpack_require__("./src/components/feedback/feedbackAlert/FeedbackAlert.tsx"),test_dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const ResetPassword_stories={title:"Pages/Session/ResetPassword",component:resetPassword_ResetPassword,decorators:[Story=>(0,jsx_runtime.jsx)(dist.U1,{children:(0,jsx_runtime.jsxs)(feedbackAlertContext.w,{children:[(0,jsx_runtime.jsx)(FeedbackAlert.A,{}),(0,jsx_runtime.jsx)(Story,{})]})})]},Default={},Flow={play:async _ref=>{let{canvasElement}=_ref;const canvas=(0,test_dist.ux)(canvasElement);await test_dist.Q4.type(canvas.getByTestId("emailTextField"),"glofluence.user@gmail.com",{delay:100}),await test_dist.Q4.click(canvas.getByTestId("submitBtn"),{delay:1e3}),await test_dist.Q4.type(canvas.getByTestId("codeTextField"),"d34gd9@x",{delay:100}),await test_dist.Q4.click(canvas.getByTestId("submitBtn"),{delay:1e3}),await test_dist.Q4.type(canvas.getByTestId("passwordTextField"),"MattKay2024",{delay:100}),await test_dist.Q4.type(canvas.getByTestId("confirmPasswordTextField"),"MattKay2024",{delay:100}),await test_dist.Q4.click(canvas.getByTestId("resetPasswordBtn"),{delay:1e3})}},__namedExportsOrder=["Default","Flow"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Flow.parameters={...Flow.parameters,docs:{...Flow.parameters?.docs,source:{originalSource:'{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.type(canvas.getByTestId("emailTextField"), "glofluence.user@gmail.com", {\n      delay: 100\n    });\n    await userEvent.click(canvas.getByTestId("submitBtn"), {\n      delay: 1000\n    });\n    await userEvent.type(canvas.getByTestId("codeTextField"), \'d34gd9@x\', {\n      delay: 100\n    });\n    await userEvent.click(canvas.getByTestId("submitBtn"), {\n      delay: 1000\n    });\n    await userEvent.type(canvas.getByTestId("passwordTextField"), "MattKay2024", {\n      delay: 100\n    });\n    await userEvent.type(canvas.getByTestId("confirmPasswordTextField"), "MattKay2024", {\n      delay: 100\n    });\n    await userEvent.click(canvas.getByTestId("resetPasswordBtn"), {\n      delay: 1000\n    });\n  }\n}',...Flow.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/autosuggest-highlight/match/index.js":function(module){var e,t;module.exports=(e={772:(e,t,o)=>{const r=o(826).remove,i=/[.*+?^${}()|[\]\\]/g,n=/[a-z0-9_]/i,u=/\s+/;e.exports=function(e,t,o){var s,a;a={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},s=(s=o)||{},Object.keys(s).forEach((e=>{a[e]=!!s[e]})),o=a;const c=Array.from(e).map((e=>r(e)));let l=c.join("");return(t=r(t)).trim().split(u).filter((e=>e.length>0)).reduce(((e,t)=>{const r=t.length,u=!o.insideWords&&n.test(t[0])?"\\b":"",s=new RegExp(u+t.replace(i,"\\$&"),"i");let a,A;if(a=s.exec(l),o.requireMatchAll&&null===a)return l="",[];for(;a;){A=a.index;const t=r-c.slice(A,A+r).join("").length,i=A-c.slice(0,A).join("").length,n=[A+i,A+r+i+t];if(n[0]!==n[1]&&e.push(n),l=l.slice(0,A)+new Array(r+1).join(" ")+l.slice(A+r),!o.findAllOccurrences)break;a=s.exec(l)}return e}),[]).sort(((e,t)=>e[0]-t[0]))}},826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},o=Object.keys(t).join("|"),r=new RegExp(o,"g"),i=new RegExp(o,""),n=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(i)},e.exports.remove=n}},t={},function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}(772))},"./node_modules/autosuggest-highlight/parse/index.js":function(module){var t,e;module.exports=(t={705:t=>{t.exports=function(t,e){const h=[];return 0===e.length?h.push({text:t,highlight:!1}):e[0][0]>0&&h.push({text:t.slice(0,e[0][0]),highlight:!1}),e.forEach(((i,o)=>{const s=i[0],r=i[1];h.push({text:t.slice(s,r),highlight:!0}),o===e.length-1?r<t.length&&h.push({text:t.slice(r,t.length),highlight:!1}):r<e[o+1][0]&&h.push({text:t.slice(r,e[o+1][0]),highlight:!1})})),h}}},e={},function h(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,h),s.exports}(705))},"./src/components/feedback/feedbackAlert/FeedbackAlert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),react_confetti_explosion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-confetti-explosion/lib/index.esm.js"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),context_feedbackAlertContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/context/feedbackAlertContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FeedbackAlert=()=>{const{open,config,close}=(0,context_feedbackAlertContext__WEBPACK_IMPORTED_MODULE_2__.u)(),getCircleBgColor=()=>{switch(config.severity){case"error":default:return"bg-red-600";case"success":return"bg-green-600";case"info":return"bg-cyan-600";case"warn":return"bg-orange-600"}},getIcon=()=>{switch(config.severity){case"error":case"warn":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-[40px] h-[40px] stroke-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})});case"success":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-[40px] h-[40px] stroke-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})});case"info":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-[40px] h-[40px] stroke-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}},RenderIcon=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.div,{initial:{scale:.3,opacity:0},animate:{scale:1,opacity:1},className:" w-[90px] h-[90px] rounded-full flex justify-center items-center ".concat(getCircleBgColor()),transition:{delay:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},className:" w-[70px] h-[70px] rounded-full flex justify-center items-center ".concat(getCircleBgColor()),transition:{delay:.5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.div,{initial:{scale:.7,opacity:0},animate:{scale:1,opacity:1},className:" w-[50px] h-[50px] rounded-full flex justify-center items-center ".concat(getCircleBgColor()),children:getIcon()})})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.Sb,{isOpen:open||!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.W9,{className:"ion-padding",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"bg-white flex flex-col gap-4 items-center justify-center p-2 h-full",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"grow"}),"success"!==config.severity?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"grow"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{}),"success"===config.severity?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_confetti_explosion__WEBPACK_IMPORTED_MODULE_0__.A,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{}),(config.severity,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RenderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3",{className:"text-xl font-bold",children:config.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"text-sm font-light text-center mt-3",children:config.caption}),void 0!==config.childNode?config.childNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"grow"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.M0,{className:"p-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{"data-testid":"selectFieldDoneBtn",onClick:close,className:"w-full bg-boston-blue-600 text-white font-light py-2",children:"Done"})})]})},__WEBPACK_DEFAULT_EXPORT__=FeedbackAlert;FeedbackAlert.__docgenInfo={description:"",methods:[],displayName:"FeedbackAlert"}},"./src/components/inputs/password/PasswordField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),ionicons_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PasswordField=props=>{var _props$dataTestId;const[count,setcount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[value,setvalue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value),[hide,sethide]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"grid grid-flow-row grid-cols-10 bg-white border border-boston-blue-100 w-full  rounded-md items-center relative min-h-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-1 flex items-center justify-center p-2",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-9 flex justify-between items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{autoComplete:"off","data-testid":null!==(_props$dataTestId=props.dataTestId)&&void 0!==_props$dataTestId?_props$dataTestId:"text-field",type:hide?"password":"text",className:"w-full h-full bg-white",value,onChange:e=>{const val=e.target.value;count===props.maxCount?(setvalue(value.slice(0,props.maxCount)),setcount(0)):(setvalue(val),setcount(value.length)),props.setValue(value)}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-3 right-1 flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:hide?ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.zsm:ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.y5U,onClick:()=>{sethide(!hide)}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:props.error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.error})}),props.showMaxCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"font-thin text-sm text-black",children:[count,"/",props.maxCount]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex flex-col w-full"})]})},__WEBPACK_DEFAULT_EXPORT__=PasswordField;PasswordField.__docgenInfo={description:"",methods:[],displayName:"PasswordField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},showMaxCount:{required:!1,tsType:{name:"boolean"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/inputs/textfield/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),ionicons_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=props=>{var _props$dataTestId;const[count,setcount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[value,setvalue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"grid grid-flow-row grid-cols-10 ".concat(props.disabled?"bg-slate-100":"bg-white"," border border-boston-blue-100 w-full  rounded-md items-center relative min-h-10"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-1 flex items-center justify-center p-2",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-9 flex justify-between items-center ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{autoComplete:"off","data-testid":null!==(_props$dataTestId=props.dataTestId)&&void 0!==_props$dataTestId?_props$dataTestId:"text-field",type:"text",className:"w-full h-full ".concat(props.disabled?"bg-slate-100":"bg-white"),value,onChange:e=>{const val=e.target.value;count===props.maxCount?(setvalue(value.slice(0,props.maxCount)),setcount(0)):(setvalue(val),setcount(value.length)),props.setValue(value)},disabled:props.disabled||!1})}),value.length>0&&!props.disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-3 right-1 flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.VNx,onClick:()=>{setvalue(""),props.setValue(""),setcount(0)}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:props.error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.error})}),props.showMaxCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"font-thin text-sm text-black",children:[count,"/",props.maxCount]})})]})]})},__WEBPACK_DEFAULT_EXPORT__=TextField;TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},showMaxCount:{required:!1,tsType:{name:"boolean"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},setValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""}}}},"./src/context/feedbackAlertContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>useFeedbackAlertContext,w:()=>FeedbackAlertContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FeedbackAlertContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useFeedbackAlertContext=()=>{const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FeedbackAlertContext);if(!context)throw new Error("useFeedbackAlertContext must be used within a FeedbackAlertContextProvider");return context},FeedbackAlertContextProvider=props=>{const[open,setopen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({caption:"",severity:"success",title:""});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FeedbackAlertContext.Provider,{value:{open,close:()=>{setopen(!1)},config,alert:config=>{setConfig(config),setopen(!0)}},children:props.children})};FeedbackAlertContextProvider.__docgenInfo={description:"",methods:[],displayName:"FeedbackAlertContextProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sp:()=>formatUKPhoneNum,q5:()=>parseOptionWithMatch,qT:()=>formatUSPhoneNum,rk:()=>generateUUIDV4,vn:()=>formatNGPhoneNum});__webpack_require__("./node_modules/referral-codes/index.js");var uuid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/autosuggest-highlight/parse/index.js"),autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1__),autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/autosuggest-highlight/match/index.js"),autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2__);const parseOptionWithMatch=(option,inputValue)=>{if(option){const _match=autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2___default()(option,inputValue,{insideWords:!0});return autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1___default()(option,_match)}return[]},generateUUIDV4=()=>(0,uuid__WEBPACK_IMPORTED_MODULE_3__.A)();function formatUSPhoneNum(input){let output="(";return input.replace(/^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/,((_match,g1,g2,g3)=>(g1.length&&(output+=g1,3===g1.length&&(output+=")",g2.length&&(output+=" "+g2,3===g2.length&&(output+=" - ",g3.length&&(output+=g3))))),output))),output}function formatUKPhoneNum(input){let output="";return input.replace(/^\D*(\d{0,4})\D*(\d{0,6})/,((_match,g1,g2)=>(g1.length&&(output+=g1,4===g1.length&&(output+=" ",g2.length&&(output+=" "+g2))),output))),output}function formatNGPhoneNum(input){let output="";return input.replace(/^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/,((_match,g1,g2,g3)=>(g1.length&&(output+=g1,3===g1.length&&(output+=" ",g2.length&&(output+=" "+g2,3===g2.length&&(output+=" ",g3.length&&(output+=g3))))),output))),output}},"./node_modules/referral-codes/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var Charset;!function(Charset){Charset.NUMBERS="numbers",Charset.ALPHABETIC="alphabetic",Charset.ALPHANUMERIC="alphanumeric"}(Charset=Charset||(Charset={}));Charset.NUMBERS,Charset.ALPHABETIC,Charset.ALPHANUMERIC},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)}}}]);