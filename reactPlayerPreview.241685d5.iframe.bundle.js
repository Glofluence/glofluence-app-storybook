(self.webpackChunkglofluence_app=self.webpackChunkglofluence_app||[]).push([[6353],{"./node_modules/react-player/lib/Preview.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Preview_exports,{default:()=>Preview}),module.exports=(mod=Preview_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/react/index.js"));const cache={};class Preview extends import_react.Component{constructor(){super(...arguments),__publicField(this,"mounted",!1),__publicField(this,"state",{image:null}),__publicField(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(prevProps){const{url,light}=this.props;prevProps.url===url&&prevProps.light===light||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url,light,oEmbedUrl}){if(!import_react.default.isValidElement(light))if("string"!=typeof light){if(!cache[url])return this.setState({image:null}),window.fetch(oEmbedUrl.replace("{url}",url)).then((response=>response.json())).then((data=>{if(data.thumbnail_url&&this.mounted){const image=data.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image}),cache[url]=image}}));this.setState({image:cache[url]})}else this.setState({image:light})}render(){const{light,onClick,playIcon,previewTabIndex,previewAriaLabel}=this.props,{image}=this.state,isElement=import_react.default.isValidElement(light),flexCenter={display:"flex",alignItems:"center",justifyContent:"center"},styles={preview:{width:"100%",height:"100%",backgroundImage:image&&!isElement?`url(${image})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...flexCenter},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:"64px",width:"64px",height:"64px",position:isElement?"absolute":void 0,...flexCenter},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},defaultPlayIcon=import_react.default.createElement("div",{style:styles.shadow,className:"react-player__shadow"},import_react.default.createElement("div",{style:styles.playIcon,className:"react-player__play-icon"}));return import_react.default.createElement("div",{style:styles.preview,className:"react-player__preview",onClick,tabIndex:previewTabIndex,onKeyPress:this.handleKeyPress,...previewAriaLabel?{"aria-label":previewAriaLabel}:{}},isElement?light:null,playIcon||defaultPlayIcon)}}}}]);