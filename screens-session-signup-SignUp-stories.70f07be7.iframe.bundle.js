(self.webpackChunkglofluence_app=self.webpackChunkglofluence_app||[]).push([[6871],{"./src/screens/session/signup/SignUp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SuccessFlow:()=>SuccessFlow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SignUp_stories});var dist=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),icons=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),TextField=__webpack_require__("./src/components/inputs/textfield/TextField.tsx"),react=__webpack_require__("./node_modules/react/index.js"),SelectField=__webpack_require__("./src/components/inputs/select/SelectField.tsx"),Countries=__webpack_require__("./src/constants/Countries.ts"),PhonenumberField=__webpack_require__("./src/components/inputs/phonenumber/PhonenumberField.tsx"),utils=__webpack_require__("./src/utils/index.ts"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),PasswordField=__webpack_require__("./src/components/inputs/password/PasswordField.tsx"),feedbackAlertContext=__webpack_require__("./src/context/feedbackAlertContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SignUp=()=>{const[currentStep,setCurrentStep]=(0,react.useState)(0),validations=[(0,index_esm.Ik)({firstName:(0,index_esm.Yj)().trim().required("First name is required").min(2,"Too short").max(30,"Too long"),lastName:(0,index_esm.Yj)().trim().required("Last name is required").min(2,"Too short").max(30,"Too long"),country:(0,index_esm.Yj)().trim().required("Country required"),phonenumber:(0,index_esm.Yj)().trim().required("Phone number required")}),(0,index_esm.Ik)({email:(0,index_esm.Yj)().trim().email().required("Email is required").min(2,"Too short").max(40,"Too long"),password:(0,index_esm.Yj)().trim().required("Password is required").min(8,"Password is too short - should be 8 chars minimum."),confirmPassword:(0,index_esm.Yj)().trim().required("Country required").oneOf([(0,index_esm.KR)("password")],"Password doesn’t match, try again.")})],formRef=(0,react.useRef)(null),[isProcessing,setIsProcessing]=(0,react.useState)(!1),{alert}=(0,feedbackAlertContext.u)();return(0,jsx_runtime.jsxs)(dist.AO,{children:[(0,jsx_runtime.jsx)(dist.eU,{children:(0,jsx_runtime.jsx)(dist.ai,{children:(0,jsx_runtime.jsx)(dist.BC,{size:"large",children:"Create Account"})})}),(0,jsx_runtime.jsxs)(dist.W9,{className:"ion-padding",children:[(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center gap-1 mb-6",children:Array(2).fill(0).map(((_,i)=>(0,jsx_runtime.jsx)("div",{className:"grow h-1 rounded ".concat(currentStep===i?"bg-blue-500":"bg-slate-300")},(0,utils.rk)())))}),(0,jsx_runtime.jsx)(formik_esm.l1,{innerRef:formRef,initialValues:{firstName:"",lastName:"",country:"",phonenumber:"",email:"",password:"",confirmPassword:""},onSubmit:(values,formikHelpers)=>{var _formRef$current;0===currentStep&&null!==(_formRef$current=formRef.current)&&void 0!==_formRef$current&&_formRef$current.isValid&&(2!==currentStep&&setCurrentStep((prev=>prev+1)),formikHelpers.setSubmitting(!1)),1===currentStep&&(setIsProcessing(!0),setTimeout((()=>{alert({severity:"success",caption:"You will be redirected to the log in screen to sign in",title:"Hurray! Account Created"})}),2e3))},validationSchema:validations[currentStep],children:_ref=>{let{values,setFieldValue,setFieldError}=_ref;return(0,jsx_runtime.jsxs)(formik_esm.lV,{children:[0===currentStep&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"First name"}),value:values.firstName,setValue:value=>{setFieldValue("firstName",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.MVM,color:"primary"}),maxCount:30,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"firstName",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"firstNameTextField"}),(0,jsx_runtime.jsx)(TextField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Last name"}),value:values.lastName,setValue:value=>{setFieldValue("lastName",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.MVM,color:"primary"}),maxCount:30,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"lastName",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"lastNameTextField"}),(0,jsx_runtime.jsx)(SelectField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Country"}),icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.$OA,color:"primary"}),value:values.country,setValue:value=>{setFieldValue("country",value,!0)},options:Countries.D.map((item=>({title:item.label,value:item.code}))).sort((function(a,b){var textA=a.title.toUpperCase(),textB=b.title.toUpperCase();return textA<textB?-1:textA>textB?1:0})),error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"country",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"countrySelectField"}),(0,jsx_runtime.jsx)(PhonenumberField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Phone number"}),country:Countries.D.find((item=>item.code===values.country)),showPrefix:!0,startIcon:0===values.country.length?(0,jsx_runtime.jsx)(dist.iq,{icon:icons.T1z,color:"primary"}):(0,jsx_runtime.jsx)("img",{src:"https://flagcdn.com/48x36/".concat(values.country.toLowerCase(),".png"),alt:"Country Flag",className:"w-7 h-4 my-3"}),value:values.phonenumber,setValue:value=>{"NG"===values.country?value[0]&&"0"===value[0]?setFieldError("phonenumber","Do not start with 0"):(setFieldError("phonenumber",void 0),setFieldValue("phonenumber",value,!0)):setFieldValue("phonenumber",value,!0)},disabled:0===values.country.length,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"phonenumber",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"phonenumberField"})]}),1===currentStep&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Email"}),value:values.email,setValue:value=>{setFieldValue("email",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.kiB,color:"primary"}),maxCount:60,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"email",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"emailTextField"}),(0,jsx_runtime.jsx)(PasswordField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Password"}),value:values.password,setValue:value=>{setFieldValue("password",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.AaQ,color:"primary"}),maxCount:15,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"password",render:msg=>(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-1",children:msg.split(",").map((elem=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin block",children:elem},(0,utils.rk)())))})}),dataTestId:"passwordTextField"}),(0,jsx_runtime.jsx)(PasswordField.A,{label:(0,jsx_runtime.jsx)("span",{className:"text-sm text-boston-blue-950 font-thin",children:"Confirm Password"}),value:values.confirmPassword,setValue:value=>{setFieldValue("confirmPassword",value,!0)},icon:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.AaQ,color:"primary"}),maxCount:15,error:(0,jsx_runtime.jsx)(formik_esm.Kw,{name:"confirmPassword",render:msg=>(0,jsx_runtime.jsx)("span",{className:"text-sm text-red-600 font-thin",children:msg})}),dataTestId:"confirmPasswordTextField"})]})]})}})]}),(0,jsx_runtime.jsx)(dist.M0,{className:"p-2",children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2 w-full mt-2",children:[0!==currentStep&&(0,jsx_runtime.jsx)("button",{className:"px-3 py-2  text-xs flex-none ",onClick:()=>{0!==currentStep&&setCurrentStep((prev=>prev-1))},"data-testid":"prev-btn",children:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.$$C})}),(0,jsx_runtime.jsx)("button",{className:"px-3 py-2 rounded bg-boston-blue-500 text-xs grow text-white ","data-testid":"nextBtn",onClick:async()=>{var _formRef$current2;await(null===(_formRef$current2=formRef.current)||void 0===_formRef$current2?void 0:_formRef$current2.submitForm())},children:isProcessing&&1===currentStep?(0,jsx_runtime.jsx)(dist.w2,{}):"Next"})]})})]})},signup_SignUp=SignUp;SignUp.__docgenInfo={description:"",methods:[],displayName:"SignUp"};var test_dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),FeedbackAlert=__webpack_require__("./src/components/feedback/feedbackAlert/FeedbackAlert.tsx");const SignUp_stories={title:"Pages/Session/SignUp",component:signup_SignUp,decorators:[Story=>(0,jsx_runtime.jsx)(dist.U1,{children:(0,jsx_runtime.jsxs)(feedbackAlertContext.w,{children:[(0,jsx_runtime.jsx)(FeedbackAlert.A,{}),(0,jsx_runtime.jsx)(Story,{})]})})]},Default={},SuccessFlow={play:async _ref=>{let{canvasElement,step}=_ref;const canvas=(0,test_dist.ux)(canvasElement);await step("Step 1 Form",(async()=>{await test_dist.Q4.type(canvas.getByTestId("firstNameTextField"),"kayode",{delay:100}),await test_dist.Q4.type(canvas.getByTestId("lastNameTextField"),"matthew",{delay:100}),await test_dist.Q4.click(canvas.getByTestId("countrySelectField"),{delay:500}),await test_dist.Q4.click(canvas.getByTestId("selectedCountryItem"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("selectFieldDoneBtn"),{delay:100})})),await step("Phonenumber input",(async()=>{await test_dist.Q4.click(canvas.getByTestId("phonenumberField"),{delay:500}),await test_dist.Q4.click(canvas.getByTestId("keyPad8"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad1"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad2"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad4"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad6"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad6"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad5"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad8"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad1"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("keyPad2"),{delay:100}),await test_dist.Q4.click(canvas.getByTestId("phonenumberFieldDoneBtn"),{delay:100})})),await test_dist.Q4.click(canvas.getByTestId("nextBtn"),{delay:1e3}),await step("Step 2 Form",(async()=>{await test_dist.Q4.type(canvas.getByTestId("emailTextField"),"kayodematthew56@gmail.com",{delay:100}),await test_dist.Q4.type(canvas.getByTestId("passwordTextField"),"MattKay2024",{delay:100}),await test_dist.Q4.type(canvas.getByTestId("confirmPasswordTextField"),"MattKay2024",{delay:100})})),await test_dist.Q4.click(canvas.getByTestId("nextBtn"),{delay:500})}},__namedExportsOrder=["Default","SuccessFlow"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},SuccessFlow.parameters={...SuccessFlow.parameters,docs:{...SuccessFlow.parameters?.docs,source:{originalSource:'{\n  play: async ({\n    canvasElement,\n    step\n  }) => {\n    const canvas = within(canvasElement);\n    await step(\'Step 1 Form\', async () => {\n      await userEvent.type(canvas.getByTestId("firstNameTextField"), "kayode", {\n        delay: 100\n      });\n      await userEvent.type(canvas.getByTestId("lastNameTextField"), "matthew", {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("countrySelectField"), {\n        delay: 500\n      });\n      await userEvent.click(canvas.getByTestId("selectedCountryItem"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("selectFieldDoneBtn"), {\n        delay: 100\n      });\n    });\n    await step("Phonenumber input", async () => {\n      await userEvent.click(canvas.getByTestId("phonenumberField"), {\n        delay: 500\n      });\n      await userEvent.click(canvas.getByTestId("keyPad8"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad1"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad2"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad4"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad6"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad6"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad5"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad8"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad1"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("keyPad2"), {\n        delay: 100\n      });\n      await userEvent.click(canvas.getByTestId("phonenumberFieldDoneBtn"), {\n        delay: 100\n      });\n    });\n    await userEvent.click(canvas.getByTestId("nextBtn"), {\n      delay: 1000\n    });\n    await step("Step 2 Form", async () => {\n      await userEvent.type(canvas.getByTestId("emailTextField"), "kayodematthew56@gmail.com", {\n        delay: 100\n      });\n      await userEvent.type(canvas.getByTestId("passwordTextField"), "MattKay2024", {\n        delay: 100\n      });\n      await userEvent.type(canvas.getByTestId("confirmPasswordTextField"), "MattKay2024", {\n        delay: 100\n      });\n    });\n    await userEvent.click(canvas.getByTestId("nextBtn"), {\n      delay: 500\n    });\n  }\n}',...SuccessFlow.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/feedback/feedbackAlert/FeedbackAlert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),react_confetti_explosion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-confetti-explosion/lib/index.esm.js"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),context_feedbackAlertContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/context/feedbackAlertContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FeedbackAlert=()=>{const{open,config,close}=(0,context_feedbackAlertContext__WEBPACK_IMPORTED_MODULE_2__.u)(),getCircleBgColor=()=>{switch(config.severity){case"error":default:return"bg-red-600";case"success":return"bg-green-600";case"info":return"bg-cyan-600";case"warn":return"bg-orange-600"}},getIcon=()=>{switch(config.severity){case"error":case"warn":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-[40px] h-[40px] stroke-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})});case"success":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-[40px] h-[40px] stroke-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})});case"info":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-[40px] h-[40px] stroke-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}},RenderIcon=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.div,{initial:{scale:.3,opacity:0},animate:{scale:1,opacity:1},className:" w-[90px] h-[90px] rounded-full flex justify-center items-center ".concat(getCircleBgColor()),transition:{delay:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},className:" w-[70px] h-[70px] rounded-full flex justify-center items-center ".concat(getCircleBgColor()),transition:{delay:.5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.div,{initial:{scale:.7,opacity:0},animate:{scale:1,opacity:1},className:" w-[50px] h-[50px] rounded-full flex justify-center items-center ".concat(getCircleBgColor()),children:getIcon()})})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.Sb,{isOpen:open||!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.W9,{className:"ion-padding",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"bg-white flex flex-col gap-4 items-center justify-center p-2 h-full",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"grow"}),"success"!==config.severity?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"grow"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{}),"success"===config.severity?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_confetti_explosion__WEBPACK_IMPORTED_MODULE_0__.A,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{}),(config.severity,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RenderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3",{className:"text-xl font-bold",children:config.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"text-sm font-light text-center mt-3",children:config.caption}),void 0!==config.childNode?config.childNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"grow"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.M0,{className:"p-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{"data-testid":"selectFieldDoneBtn",onClick:close,className:"w-full bg-boston-blue-600 text-white font-light py-2",children:"Done"})})]})},__WEBPACK_DEFAULT_EXPORT__=FeedbackAlert;FeedbackAlert.__docgenInfo={description:"",methods:[],displayName:"FeedbackAlert"}},"./src/components/inputs/password/PasswordField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),ionicons_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PasswordField=props=>{var _props$dataTestId;const[count,setcount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[value,setvalue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value),[hide,sethide]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"grid grid-flow-row grid-cols-10 bg-white border border-boston-blue-100 w-full  rounded-md items-center relative min-h-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-1 flex items-center justify-center p-2",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-9 flex justify-between items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{autoComplete:"off","data-testid":null!==(_props$dataTestId=props.dataTestId)&&void 0!==_props$dataTestId?_props$dataTestId:"text-field",type:hide?"password":"text",className:"w-full h-full bg-white",value,onChange:e=>{const val=e.target.value;count===props.maxCount?(setvalue(value.slice(0,props.maxCount)),setcount(0)):(setvalue(val),setcount(value.length)),props.setValue(value)}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-3 right-1 flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:hide?ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.zsm:ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.y5U,onClick:()=>{sethide(!hide)}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:props.error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.error})}),props.showMaxCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"font-thin text-sm text-black",children:[count,"/",props.maxCount]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex flex-col w-full"})]})},__WEBPACK_DEFAULT_EXPORT__=PasswordField;PasswordField.__docgenInfo={description:"",methods:[],displayName:"PasswordField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},showMaxCount:{required:!1,tsType:{name:"boolean"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/inputs/select/SelectField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>select_SelectField});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),icons=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),utils=__webpack_require__("./src/utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectFieldOption=props=>{var _props$dataTestId;const parts=(0,utils.q5)("".concat(props.option.title),props.query);return(0,jsx_runtime.jsxs)(dist.uz,{button:!0,onClick:props.setSelected,"data-testid":null!==(_props$dataTestId=props.dataTestId)&&void 0!==_props$dataTestId?_props$dataTestId:"select-item-field",children:[(0,jsx_runtime.jsx)("div",{className:"p-2",children:props.option.icon&&props.option.icon}),(0,jsx_runtime.jsx)(dist.he,{children:(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-start w-[85%]",children:null==parts?void 0:parts.map(((part,index)=>(0,jsx_runtime.jsx)("span",{style:{color:part.highlight?"#2596be":"#000"},className:"font-light text-xs",children:part.text},index)))})}),(0,jsx_runtime.jsx)(dist.JI,{children:(0,jsx_runtime.jsx)("div",{className:"h-[50px] flex flex-col items-center justify-center",children:props.isSelected&&(0,jsx_runtime.jsx)(dist.iq,{icon:icons.AIp,color:"secondary",size:"large"})})})]})},select_SelectFieldOption=SelectFieldOption;SelectFieldOption.__docgenInfo={description:"",methods:[],displayName:"SelectFieldOption",props:{query:{required:!0,tsType:{name:"string"},description:""},option:{required:!0,tsType:{name:"SelectionOption"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},setSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""}}};const SelectField=props=>{var _props$dataTestId,_props$dataTestId2,_props$options$find;const[modalVisibility,setModalVisibility]=(0,react.useState)(!1),toggleModalVisibility=()=>{setModalVisibility(!modalVisibility)},[optionList,setOptionList]=(0,react.useState)(props.options),[searchText,setSearchText]=(0,react.useState)(""),optionSearchInput=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(dist.Sb,{isOpen:modalVisibility,children:[(0,jsx_runtime.jsx)(dist.eU,{className:"ion-no-border",children:(0,jsx_runtime.jsx)(dist.ai,{children:(0,jsx_runtime.jsx)(dist.S1,{onLoad:async()=>{var _optionSearchInput$cu;const inputElem=await(null===(_optionSearchInput$cu=optionSearchInput.current)||void 0===_optionSearchInput$cu?void 0:_optionSearchInput$cu.getInputElement());null==inputElem||inputElem.setAttribute("data-testid","options-search")},ref:optionSearchInput,autocapitalize:"off",placeholder:"Search",value:searchText,onIonInput:event=>{const val=event.target.value;val?(setSearchText(val),setOptionList((()=>props.options.filter((opt=>opt.title.toLowerCase().includes(val.toLowerCase())))))):setSearchText("")},onIonClear:()=>{setSearchText(""),setOptionList(props.options)},onIonCancel:()=>{setSearchText(""),setOptionList(props.options)}})})}),(0,jsx_runtime.jsx)(dist.W9,{children:(0,jsx_runtime.jsx)(dist.nf,{children:optionList.map(((option,i)=>(0,jsx_runtime.jsx)(select_SelectFieldOption,{option,query:searchText,isSelected:props.value===option.value,setSelected:()=>{props.setValue(option.value)},dataTestId:3===i?"selectedCountryItem":""},(0,utils.rk)())))})}),(0,jsx_runtime.jsx)(dist.M0,{className:"p-1",children:(0,jsx_runtime.jsx)("button",{"data-testid":"selectFieldDoneBtn",onClick:()=>{toggleModalVisibility(),null!=props&&props.onClose&&props.onClose()},className:"w-full bg-boston-blue-600 text-white font-light py-2",children:"Done"})})]}),props.compactMode?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{onClick:()=>{null!=props&&props.disabled||toggleModalVisibility()},"data-testid":null!==(_props$dataTestId=props.dataTestId)&&void 0!==_props$dataTestId?_props$dataTestId:"selectField",children:props.compactNode&&props.compactNode})}):(0,jsx_runtime.jsxs)("div",{onClick:()=>{null!=props&&props.disabled||toggleModalVisibility()},"data-testid":null!==(_props$dataTestId2=props.dataTestId)&&void 0!==_props$dataTestId2?_props$dataTestId2:"selectField",children:[props.label&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.label}),(0,jsx_runtime.jsxs)("div",{className:"grid grid-flow-row grid-cols-10  ".concat(props.disabled?"bg-slate-100":"bg-white"," border border-boston-blue-100 w-full  rounded-md items-center relative min-h-10"),children:[(0,jsx_runtime.jsx)("div",{className:"col-span-1 flex items-center justify-center p-2",children:props.icon}),(0,jsx_runtime.jsx)("div",{className:"col-span-9 flex justify-between items-center",children:props.value.length>0&&(0,jsx_runtime.jsx)("span",{className:"font-thin text-sm",children:(null===(_props$options$find=props.options.find((option=>option.value===props.value)))||void 0===_props$options$find?void 0:_props$options$find.title)||""})}),(0,jsx_runtime.jsx)("div",{className:"absolute bottom-3 right-1 flex items-center justify-center",children:(0,jsx_runtime.jsx)(dist.iq,{icon:icons.iiS})})]}),(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-start",children:(0,jsx_runtime.jsx)("div",{children:props.error&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.error})})})]})]})},select_SelectField=SelectField;SelectField.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},compactMode:{required:!1,tsType:{name:"boolean"},description:""},compactNode:{required:!1,tsType:{name:"ReactNode"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectionOption"}],raw:"SelectionOption[]"},description:""}}}},"./src/components/inputs/textfield/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),ionicons_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=props=>{var _props$dataTestId;const[count,setcount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[value,setvalue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"grid grid-flow-row grid-cols-10 ".concat(props.disabled?"bg-slate-100":"bg-white"," border border-boston-blue-100 w-full  rounded-md items-center relative min-h-10"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-1 flex items-center justify-center p-2",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-9 flex justify-between items-center ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{autoComplete:"off","data-testid":null!==(_props$dataTestId=props.dataTestId)&&void 0!==_props$dataTestId?_props$dataTestId:"text-field",type:"text",className:"w-full h-full ".concat(props.disabled?"bg-slate-100":"bg-white"),value,onChange:e=>{const val=e.target.value;count===props.maxCount?(setvalue(value.slice(0,props.maxCount)),setcount(0)):(setvalue(val),setcount(value.length)),props.setValue(value)},disabled:props.disabled||!1})}),value.length>0&&!props.disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-3 right-1 flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.VNx,onClick:()=>{setvalue(""),props.setValue(""),setcount(0)}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:props.error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.error})}),props.showMaxCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"font-thin text-sm text-black",children:[count,"/",props.maxCount]})})]})]})},__WEBPACK_DEFAULT_EXPORT__=TextField;TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},showMaxCount:{required:!1,tsType:{name:"boolean"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},setValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""}}}},"./src/context/feedbackAlertContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>useFeedbackAlertContext,w:()=>FeedbackAlertContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FeedbackAlertContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useFeedbackAlertContext=()=>{const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FeedbackAlertContext);if(!context)throw new Error("useFeedbackAlertContext must be used within a FeedbackAlertContextProvider");return context},FeedbackAlertContextProvider=props=>{const[open,setopen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[config,setConfig]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({caption:"",severity:"success",title:""});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FeedbackAlertContext.Provider,{value:{open,close:()=>{setopen(!1)},config,alert:config=>{setConfig(config),setopen(!0)}},children:props.children})};FeedbackAlertContextProvider.__docgenInfo={description:"",methods:[],displayName:"FeedbackAlertContextProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}}}]);