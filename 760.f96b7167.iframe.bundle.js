/*! For license information please see 760.f96b7167.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkglofluence_app=self.webpackChunkglofluence_app||[]).push([[760],{"./node_modules/@ionic/core/components/swipe-back.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{createSwipeBackGesture:()=>createSwipeBackGesture});var _helpers_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/components/helpers.js"),_dir_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/components/dir.js"),_index3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ionic/core/components/index3.js");const createSwipeBackGesture=(el,canStartHandler,onStartHandler,onMoveHandler,onEndHandler)=>{const win=el.ownerDocument.defaultView;let rtl=(0,_dir_js__WEBPACK_IMPORTED_MODULE_0__.i)(el);const getDeltaX=detail=>rtl?-detail.deltaX:detail.deltaX;return(0,_index3_js__WEBPACK_IMPORTED_MODULE_2__.G)({el,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:detail=>(rtl=(0,_dir_js__WEBPACK_IMPORTED_MODULE_0__.i)(el),(detail=>{const{startX}=detail;return rtl?startX>=win.innerWidth-50:startX<=50})(detail)&&canStartHandler()),onStart:onStartHandler,onMove:detail=>{const stepValue=getDeltaX(detail)/win.innerWidth;onMoveHandler(stepValue)},onEnd:detail=>{const delta=getDeltaX(detail),width=win.innerWidth,stepValue=delta/width,velocity=(detail=>rtl?-detail.velocityX:detail.velocityX)(detail),shouldComplete=velocity>=0&&(velocity>.2||delta>width/2),missingDistance=(shouldComplete?1-stepValue:stepValue)*width;let realDur=0;if(missingDistance>5){const dur=missingDistance/Math.abs(velocity);realDur=Math.min(dur,540)}onEndHandler(shouldComplete,stepValue<=0?.01:(0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.k)(0,stepValue,.9999),realDur)}})}}}]);