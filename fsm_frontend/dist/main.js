/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webgl_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webgl-util */ \"./modules/webgl-util.js\");\n\nfunction init() {\n  var canvas = document.getElementById(\"webgl-canvas\");\n  var gl = (0,_modules_webgl_util__WEBPACK_IMPORTED_MODULE_0__.createContext)(canvas);\n  if (!gl) {\n    canvas.innerHTML = \"<h1>webgl not supported</h1>\";\n  }\n\n  // Clear the canvas.\n  gl.clearColor(0.0, 0.0, 0.0, 1.0);\n  gl.clear(gl.COLOR_BUFFER_BIT);\n}\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCxTQUFTQyxJQUFJQSxDQUFBLEVBQUc7RUFDWixJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUN0RCxJQUFNQyxFQUFFLEdBQUdMLGtFQUFhLENBQUNFLE1BQU0sQ0FBQztFQUNoQyxJQUFJLENBQUNHLEVBQUUsRUFBRTtJQUNMSCxNQUFNLENBQUNJLFNBQVMsR0FBRyw4QkFBOEI7RUFDckQ7O0VBRUE7RUFDQUQsRUFBRSxDQUFDRSxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ2pDRixFQUFFLENBQUNHLEtBQUssQ0FBQ0gsRUFBRSxDQUFDSSxnQkFBZ0IsQ0FBQztBQUNqQztBQUVBUixJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZzbV9mcm9udGVuZC8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCIuL21vZHVsZXMvd2ViZ2wtdXRpbFwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2ViZ2wtY2FudmFzXCIpO1xyXG4gICAgY29uc3QgZ2wgPSBjcmVhdGVDb250ZXh0KGNhbnZhcyk7XHJcbiAgICBpZiAoIWdsKSB7XHJcbiAgICAgICAgY2FudmFzLmlubmVySFRNTCA9IFwiPGgxPndlYmdsIG5vdCBzdXBwb3J0ZWQ8L2gxPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFyIHRoZSBjYW52YXMuXHJcbiAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XHJcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxufVxyXG5cclxuaW5pdCgpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsImluaXQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2wiLCJpbm5lckhUTUwiLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./modules/webgl-util.js":
/*!*******************************!*\
  !*** ./modules/webgl-util.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ createContext)\n/* harmony export */ });\nfunction createContext(canvas, opt_attribs) {\n  var types = ['webgl', 'experimental-webgl'];\n  var webgl = null;\n  for (var i = 0; i < 2; i++) {\n    try {\n      var contextType = types[i];\n      webgl = canvas.getContext(contextType);\n    } catch (e) {}\n    if (webgl) {\n      break;\n    }\n  }\n  return webgl;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3dlYmdsLXV0aWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLFNBQVNBLGFBQWFBLENBQUNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0VBQy9DLElBQUlDLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQztFQUMzQyxJQUFJQyxLQUFLLEdBQUcsSUFBSTtFQUNoQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO0lBQ3hCLElBQUk7TUFDQSxJQUFNQyxXQUFXLEdBQUdILEtBQUssQ0FBQ0UsQ0FBQyxDQUFDO01BQzVCRCxLQUFLLEdBQUdILE1BQU0sQ0FBQ00sVUFBVSxDQUFDRCxXQUFXLENBQUM7SUFDMUMsQ0FBQyxDQUFDLE9BQU9FLENBQUMsRUFBRSxDQUFDO0lBQ2IsSUFBSUosS0FBSyxFQUFFO01BQ1A7SUFDSjtFQUNKO0VBQ0EsT0FBT0EsS0FBSztBQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZzbV9mcm9udGVuZC8uL21vZHVsZXMvd2ViZ2wtdXRpbC5qcz83YTgwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicykge1xyXG4gICAgbGV0IHR5cGVzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnXTtcclxuICAgIGxldCB3ZWJnbCA9IG51bGw7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHRUeXBlID0gdHlwZXNbaV07XHJcbiAgICAgICAgICAgIHdlYmdsID0gY2FudmFzLmdldENvbnRleHQoY29udGV4dFR5cGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgaWYgKHdlYmdsKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB3ZWJnbDtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiY2FudmFzIiwib3B0X2F0dHJpYnMiLCJ0eXBlcyIsIndlYmdsIiwiaSIsImNvbnRleHRUeXBlIiwiZ2V0Q29udGV4dCIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/webgl-util.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;