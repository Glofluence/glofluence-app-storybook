(self.webpackChunkglofluence_app=self.webpackChunkglofluence_app||[]).push([[39],{"./src/components/inputs/textfield/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Label:()=>Label,MaxCount:()=>MaxCount,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TextField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/inputs/textfield/TextField.tsx"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),ionicons_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/TextField",component:_TextField__WEBPACK_IMPORTED_MODULE_0__.A,decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex items-center justify-center w-full pt-10",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"w-[500px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})})]},Default={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.Ihr,color:"secondary",size:"large"}),value:"",setValue:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},MaxCount={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.Ihr,color:"secondary",size:"large"}),showMaxCount:!0,maxCount:30,value:"",setValue:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},Validation={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.Ihr,color:"secondary",size:"large"}),showMaxCount:!0,maxCount:30,value:"",setValue:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)(),error:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"text-sm text-red-500 font-thin",children:"Name is required!"})}},Label={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.Ihr,color:"secondary",size:"large"}),showMaxCount:!0,maxCount:30,value:"",setValue:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)(),label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"text-sm text-boston-blue-400 font-thin",children:"Enter your name"})}},__namedExportsOrder=["Default","MaxCount","Validation","Label"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: <IonIcon icon={personCircle} color="secondary" size=\'large\'></IonIcon>,\n    value: "",\n    setValue: fn()\n  }\n}',...Default.parameters?.docs?.source}}},MaxCount.parameters={...MaxCount.parameters,docs:{...MaxCount.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: <IonIcon icon={personCircle} color="secondary" size=\'large\'></IonIcon>,\n    showMaxCount: true,\n    maxCount: 30,\n    value: "",\n    setValue: fn()\n  }\n}',...MaxCount.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IonIcon icon={personCircle} color=\"secondary\" size='large'></IonIcon>,\n    showMaxCount: true,\n    maxCount: 30,\n    value: \"\",\n    setValue: fn(),\n    error: <span className='text-sm text-red-500 font-thin'>Name is required!</span>\n  }\n}",...Validation.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IonIcon icon={personCircle} color=\"secondary\" size='large'></IonIcon>,\n    showMaxCount: true,\n    maxCount: 30,\n    value: \"\",\n    setValue: fn(),\n    label: <span className='text-sm text-boston-blue-400 font-thin'>Enter your name</span>\n  }\n}",...Label.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/inputs/textfield/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ionic_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/react/dist/index.js"),ionicons_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ionicons/icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=props=>{var _props$dataTestId;const[count,setcount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[value,setvalue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"grid grid-flow-row grid-cols-10 bg-white border border-boston-blue-100 w-full  rounded-md items-center relative min-h-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-1 flex items-center justify-center p-2",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-span-9 flex justify-between items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{autoComplete:"off","data-testid":null!==(_props$dataTestId=props.dataTestId)&&void 0!==_props$dataTestId?_props$dataTestId:"text-field",type:"text",className:"w-full h-full bg-white",value,onChange:e=>{const val=e.target.value;count===props.maxCount?(setvalue(value.slice(0,props.maxCount)),setcount(0)):(setvalue(val),setcount(value.length)),props.setValue(value)}})}),value.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"absolute bottom-3 right-1 flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ionic_react__WEBPACK_IMPORTED_MODULE_1__.iq,{icon:ionicons_icons__WEBPACK_IMPORTED_MODULE_3__.VNx,onClick:()=>{setvalue(""),props.setValue(""),setcount(0)}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex items-center justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:props.error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:props.error})}),props.showMaxCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"font-thin text-sm text-black",children:[count,"/",props.maxCount]})})]})]})},__WEBPACK_DEFAULT_EXPORT__=TextField;TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},showMaxCount:{required:!1,tsType:{name:"boolean"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""}}}}}]);