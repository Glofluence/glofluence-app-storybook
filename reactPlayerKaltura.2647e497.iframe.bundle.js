(self.webpackChunkglofluence_app=self.webpackChunkglofluence_app||[]).push([[6463],{"./node_modules/react-player/lib/players/Kaltura.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Kaltura_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Kaltura_exports,{default:()=>Kaltura}),module.exports=(mod=Kaltura_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/react/index.js")),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js"),import_patterns=__webpack_require__("./node_modules/react-player/lib/patterns.js");class Kaltura extends import_react.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",import_utils.callPlayer),__publicField(this,"duration",null),__publicField(this,"currentTime",null),__publicField(this,"secondsLoaded",null),__publicField(this,"mute",(()=>{this.callPlayer("mute")})),__publicField(this,"unmute",(()=>{this.callPlayer("unmute")})),__publicField(this,"ref",(iframe=>{this.iframe=iframe}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(url){(0,import_utils.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((playerjs=>{this.iframe&&(this.player=new playerjs.Player(this.iframe),this.player.on("ready",(()=>{setTimeout((()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()}),500)})))}),this.props.onError)}addListeners(player,props){player.on("play",props.onPlay),player.on("pause",props.onPause),player.on("ended",props.onEnded),player.on("error",props.onError),player.on("timeupdate",(({duration,seconds})=>{this.duration=duration,this.currentTime=seconds}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(seconds,keepPlaying=!0){this.callPlayer("setCurrentTime",seconds),keepPlaying||this.pause()}setVolume(fraction){this.callPlayer("setVolume",fraction)}setLoop(loop){this.callPlayer("setLoop",loop)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return import_react.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}__publicField(Kaltura,"displayName","Kaltura"),__publicField(Kaltura,"canPlay",import_patterns.canPlay.kaltura)}}]);