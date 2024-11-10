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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webgl_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webgl-util */ \"./src/modules/webgl-util.js\");\n\nfunction init() {\n  var canvas = document.getElementById(\"webgl-canvas\");\n  var gl = (0,_modules_webgl_util__WEBPACK_IMPORTED_MODULE_0__.createContext)(canvas);\n  if (!gl) {\n    canvas.innerHTML = \"<h1>webgl not supported</h1>\";\n  }\n\n  // Clear the canvas.\n  gl.clearColor(0.0, 0.0, 0.0, 1.0);\n  gl.clear(gl.COLOR_BUFFER_BIT);\n}\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUQ7QUFFckQsU0FBU0MsSUFBSUEsQ0FBQSxFQUFHO0VBQ1osSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDdEQsSUFBTUMsRUFBRSxHQUFHTCxrRUFBYSxDQUFDRSxNQUFNLENBQUM7RUFDaEMsSUFBSSxDQUFDRyxFQUFFLEVBQUU7SUFDTEgsTUFBTSxDQUFDSSxTQUFTLEdBQUcsOEJBQThCO0VBQ3JEOztFQUVBO0VBQ0FELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUNqQ0YsRUFBRSxDQUFDRyxLQUFLLENBQUNILEVBQUUsQ0FBQ0ksZ0JBQWdCLENBQUM7QUFDakM7QUFFQVIsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc21fZnJvbnRlbmQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcIi4vbW9kdWxlcy93ZWJnbC11dGlsXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJnbC1jYW52YXNcIik7XHJcbiAgICBjb25zdCBnbCA9IGNyZWF0ZUNvbnRleHQoY2FudmFzKTtcclxuICAgIGlmICghZ2wpIHtcclxuICAgICAgICBjYW52YXMuaW5uZXJIVE1MID0gXCI8aDE+d2ViZ2wgbm90IHN1cHBvcnRlZDwvaDE+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIGNhbnZhcy5cclxuICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG59XHJcblxyXG5pbml0KCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiaW5pdCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbCIsImlubmVySFRNTCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/webgl-util.js":
/*!***********************************!*\
  !*** ./src/modules/webgl-util.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ createContext)\n/* harmony export */ });\nfunction createContext(canvas, opt_attribs) {\n  var types = ['webgl', 'experimental-webgl'];\n  var webgl = null;\n  for (var i = 0; i < 2; i++) {\n    try {\n      var contextType = types[i];\n      webgl = canvas.getContext(contextType);\n    } catch (e) {}\n    if (webgl) {\n      break;\n    }\n  }\n  return webgl;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy93ZWJnbC11dGlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxTQUFTQSxhQUFhQSxDQUFDQyxNQUFNLEVBQUVDLFdBQVcsRUFBRTtFQUMvQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUM7RUFDM0MsSUFBSUMsS0FBSyxHQUFHLElBQUk7RUFDaEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtJQUN4QixJQUFJO01BQ0EsSUFBTUMsV0FBVyxHQUFHSCxLQUFLLENBQUNFLENBQUMsQ0FBQztNQUM1QkQsS0FBSyxHQUFHSCxNQUFNLENBQUNNLFVBQVUsQ0FBQ0QsV0FBVyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxPQUFPRSxDQUFDLEVBQUUsQ0FBQztJQUNiLElBQUlKLEtBQUssRUFBRTtNQUNQO0lBQ0o7RUFDSjtFQUNBLE9BQU9BLEtBQUs7QUFDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc21fZnJvbnRlbmQvLi9zcmMvbW9kdWxlcy93ZWJnbC11dGlsLmpzPzhiMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKSB7XHJcbiAgICBsZXQgdHlwZXMgPSBbJ3dlYmdsJywgJ2V4cGVyaW1lbnRhbC13ZWJnbCddO1xyXG4gICAgbGV0IHdlYmdsID0gbnVsbDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dFR5cGUgPSB0eXBlc1tpXTtcclxuICAgICAgICAgICAgd2ViZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChjb250ZXh0VHlwZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICBpZiAod2ViZ2wpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlYmdsO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJjYW52YXMiLCJvcHRfYXR0cmlicyIsInR5cGVzIiwid2ViZ2wiLCJpIiwiY29udGV4dFR5cGUiLCJnZXRDb250ZXh0IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/webgl-util.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;