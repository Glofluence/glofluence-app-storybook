(self.webpackChunkglofluence_app=self.webpackChunkglofluence_app||[]).push([[2723],{"./node_modules/react-player/lib/players/Mux.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Mux_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Mux_exports,{default:()=>Mux}),module.exports=(mod=Mux_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/react/index.js")),import_patterns=__webpack_require__("./node_modules/react-player/lib/patterns.js");class Mux extends import_react.Component{constructor(){super(...arguments),__publicField(this,"onReady",((...args)=>this.props.onReady(...args))),__publicField(this,"onPlay",((...args)=>this.props.onPlay(...args))),__publicField(this,"onBuffer",((...args)=>this.props.onBuffer(...args))),__publicField(this,"onBufferEnd",((...args)=>this.props.onBufferEnd(...args))),__publicField(this,"onPause",((...args)=>this.props.onPause(...args))),__publicField(this,"onEnded",((...args)=>this.props.onEnded(...args))),__publicField(this,"onError",((...args)=>this.props.onError(...args))),__publicField(this,"onPlayBackRateChange",(event=>this.props.onPlaybackRateChange(event.target.playbackRate))),__publicField(this,"onEnablePIP",((...args)=>this.props.onEnablePIP(...args))),__publicField(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),__publicField(this,"onDurationChange",(()=>{const duration=this.getDuration();this.props.onDuration(duration)})),__publicField(this,"mute",(()=>{this.player.muted=!0})),__publicField(this,"unmute",(()=>{this.player.muted=!1})),__publicField(this,"ref",(player=>{this.player=player}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const playbackId=this.getPlaybackId(this.props.url);playbackId&&(this.player.playbackId=playbackId)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(player){const{playsinline}=this.props;player.addEventListener("play",this.onPlay),player.addEventListener("waiting",this.onBuffer),player.addEventListener("playing",this.onBufferEnd),player.addEventListener("pause",this.onPause),player.addEventListener("seeked",this.onSeek),player.addEventListener("ended",this.onEnded),player.addEventListener("error",this.onError),player.addEventListener("ratechange",this.onPlayBackRateChange),player.addEventListener("enterpictureinpicture",this.onEnablePIP),player.addEventListener("leavepictureinpicture",this.onDisablePIP),player.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),player.addEventListener("canplay",this.onReady),playsinline&&player.setAttribute("playsinline","")}removeListeners(player){player.removeEventListener("canplay",this.onReady),player.removeEventListener("play",this.onPlay),player.removeEventListener("waiting",this.onBuffer),player.removeEventListener("playing",this.onBufferEnd),player.removeEventListener("pause",this.onPause),player.removeEventListener("seeked",this.onSeek),player.removeEventListener("ended",this.onEnded),player.removeEventListener("error",this.onError),player.removeEventListener("ratechange",this.onPlayBackRateChange),player.removeEventListener("enterpictureinpicture",this.onEnablePIP),player.removeEventListener("leavepictureinpicture",this.onDisablePIP),player.removeEventListener("canplay",this.onReady)}async load(url){var _a;const{onError,config}=this.props;if(!(null==(_a=globalThis.customElements)?void 0:_a.get("mux-player")))try{const sdkUrl="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs".replace("VERSION",config.version);await import(`${sdkUrl}`),this.props.onLoaded()}catch(error){onError(error)}const[,id]=url.match(import_patterns.MATCH_URL_MUX);this.player.playbackId=id}play(){const promise=this.player.play();promise&&promise.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(seconds,keepPlaying=!0){this.player.currentTime=seconds,keepPlaying||this.pause()}setVolume(fraction){this.player.volume=fraction}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(rate){try{this.player.playbackRate=rate}catch(error){this.props.onError(error)}}getDuration(){if(!this.player)return null;const{duration,seekable}=this.player;return duration===1/0&&seekable.length>0?seekable.end(seekable.length-1):duration}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered}=this.player;if(0===buffered.length)return 0;const end=buffered.end(buffered.length-1),duration=this.getDuration();return end>duration?duration:end}getPlaybackId(url){const[,id]=url.match(import_patterns.MATCH_URL_MUX);return id}render(){const{url,playing,loop,controls,muted,config,width,height}=this.props,style={width:"auto"===width?width:"100%",height:"auto"===height?height:"100%"};return!1===controls&&(style["--controls"]="none"),import_react.default.createElement("mux-player",{ref:this.ref,"playback-id":this.getPlaybackId(url),style,preload:"auto",autoPlay:playing||void 0,muted:muted?"":void 0,loop:loop?"":void 0,...config.attributes})}}__publicField(Mux,"displayName","Mux"),__publicField(Mux,"canPlay",import_patterns.canPlay.mux)}}]);