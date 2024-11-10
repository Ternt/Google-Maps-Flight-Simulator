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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webgl_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webgl-util */ \"./src/modules/webgl-util.js\");\n\r\n\r\nfunction createShader(gl, type, source) {\r\n    let shader = gl.createShader(type);\r\n    gl.shaderSource(shader, source);\r\n    gl.compileShader(shader);\r\n    return shader;\r\n}\r\n\r\nfunction init() {\r\n    const canvas = document.getElementById(\"webgl-canvas\");\r\n    const gl = (0,_modules_webgl_util__WEBPACK_IMPORTED_MODULE_0__.createContext)(canvas);\r\n    if (!gl) {\r\n        canvas.innerHTML = \"<h1>webgl not supported</h1>\";\r\n    }\r\n\r\n\r\n    const program =\r\n        (0,_modules_webgl_util__WEBPACK_IMPORTED_MODULE_0__.createProgramFromSources)(gl, ['./shaders/basic_vert.glsl','./shaders/basic_frag.glsl']);\r\n\r\n    // Clear the canvas.\r\n    gl.clearColor(0.0, 0.0, 0.0, 1.0);\r\n    gl.clear(gl.COLOR_BUFFER_BIT)\r\n}\r\n\r\ninit();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtFQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnNtX2Zyb250ZW5kLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2VzIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWJnbC11dGlsXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoZ2wsIHR5cGUsIHNvdXJjZSkge1xyXG4gICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICByZXR1cm4gc2hhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJnbC1jYW52YXNcIik7XHJcbiAgICBjb25zdCBnbCA9IGNyZWF0ZUNvbnRleHQoY2FudmFzKTtcclxuICAgIGlmICghZ2wpIHtcclxuICAgICAgICBjYW52YXMuaW5uZXJIVE1MID0gXCI8aDE+d2ViZ2wgbm90IHN1cHBvcnRlZDwvaDE+XCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHByb2dyYW0gPVxyXG4gICAgICAgIGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyhnbCwgWycuL3NoYWRlcnMvYmFzaWNfdmVydC5nbHNsJywnLi9zaGFkZXJzL2Jhc2ljX2ZyYWcuZ2xzbCddKTtcclxuXHJcbiAgICAvLyBDbGVhciB0aGUgY2FudmFzLlxyXG4gICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVClcclxufVxyXG5cclxuaW5pdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/webgl-util.js":
/*!***********************************!*\
  !*** ./src/modules/webgl-util.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ createContext),\n/* harmony export */   createProgramFromSources: () => (/* binding */ createProgramFromSources)\n/* harmony export */ });\nfunction createContext(canvas, opt_attribs) {\r\n    let types = ['webgl', 'experimental-webgl'];\r\n    let webgl = null;\r\n    for (let i = 0; i < 2; i++) {\r\n        try {\r\n            const contextType = types[i];\r\n            webgl = canvas.getContext(contextType);\r\n        } catch (e) {}\r\n        if (webgl) {\r\n            break;\r\n        }\r\n    }\r\n    return webgl;\r\n}\r\n\r\nfunction loadShader(gl, shaderSource, shaderType) {\r\n    const shader = gl.createShader(shaderType);\r\n    gl.shaderSource(shader, shaderSource);\r\n    gl.compileShader(shader);\r\n\r\n    const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\r\n    if (!compiled) {\r\n        const lastError = gl.getShaderInfoLog(shader);\r\n        console.error('*** Error compiling shader \\'' + shader + '\\':' + lastError + `\\n` + shaderSource.split('\\n').map((l,i) => `${i + 1}: ${l}`).join('\\n'));\r\n        gl.deleteShader(shader);\r\n        return null;\r\n    }\r\n\r\n    return shader;\r\n}\r\n\r\nfunction createProgram(gl, shaders) {\r\n    const program = gl.createProgram();\r\n    for (let i = 0; i < shaders.length; i++) {\r\n        const shader = shaders[i];\r\n        gl.attachShader(program, shader);\r\n    }\r\n    gl.linkProgram(program);\r\n\r\n    const linked = gl.getProgramParameter(program, gl.LINK_STATUS);\r\n    if (!linked) {\r\n        const lastError = gl.getProgramInfoLog(program);\r\n        console.error('Error in program linking:' + lastError);\r\n\r\n        gl.deleteProgram(program);\r\n        return null;\r\n    }\r\n    return program;\r\n}\r\n\r\nfunction createProgramFromSources(gl, shaderSources) {\r\n    const shaders = [];\r\n    const shaderTypes = [\"VERTEX_SHADER\", \"FRAGMENT_SHADER\"]\r\n    for (let i = 0; i < shaderSources.length; i++) {\r\n        shaders.push(loadShader(gl, shaderSources[i], gl[shaderTypes[i]]));\r\n    }\r\n\r\n    return createProgram(gl, shaders);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy93ZWJnbC11dGlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFJQUFxSSxNQUFNLElBQUksRUFBRTtBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnNtX2Zyb250ZW5kLy4vc3JjL21vZHVsZXMvd2ViZ2wtdXRpbC5qcz84YjA0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpIHtcclxuICAgIGxldCB0eXBlcyA9IFsnd2ViZ2wnLCAnZXhwZXJpbWVudGFsLXdlYmdsJ107XHJcbiAgICBsZXQgd2ViZ2wgPSBudWxsO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0VHlwZSA9IHR5cGVzW2ldO1xyXG4gICAgICAgICAgICB3ZWJnbCA9IGNhbnZhcy5nZXRDb250ZXh0KGNvbnRleHRUeXBlKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIGlmICh3ZWJnbCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2ViZ2w7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTaGFkZXIoZ2wsIHNoYWRlclNvdXJjZSwgc2hhZGVyVHlwZSkge1xyXG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpO1xyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcclxuICAgIGlmICghY29tcGlsZWQpIHtcclxuICAgICAgICBjb25zdCBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignKioqIEVycm9yIGNvbXBpbGluZyBzaGFkZXIgXFwnJyArIHNoYWRlciArICdcXCc6JyArIGxhc3RFcnJvciArIGBcXG5gICsgc2hhZGVyU291cmNlLnNwbGl0KCdcXG4nKS5tYXAoKGwsaSkgPT4gYCR7aSArIDF9OiAke2x9YCkuam9pbignXFxuJykpO1xyXG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oZ2wsIHNoYWRlcnMpIHtcclxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoYWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzaGFkZXIgPSBzaGFkZXJzW2ldO1xyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBzaGFkZXIpO1xyXG4gICAgfVxyXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgY29uc3QgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XHJcbiAgICBpZiAoIWxpbmtlZCkge1xyXG4gICAgICAgIGNvbnN0IGxhc3RFcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHByb2dyYW0gbGlua2luZzonICsgbGFzdEVycm9yKTtcclxuXHJcbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9ncmFtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2VzKGdsLCBzaGFkZXJTb3VyY2VzKSB7XHJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XHJcbiAgICBjb25zdCBzaGFkZXJUeXBlcyA9IFtcIlZFUlRFWF9TSEFERVJcIiwgXCJGUkFHTUVOVF9TSEFERVJcIl1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhZGVyU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNoYWRlcnMucHVzaChsb2FkU2hhZGVyKGdsLCBzaGFkZXJTb3VyY2VzW2ldLCBnbFtzaGFkZXJUeXBlc1tpXV0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3JlYXRlUHJvZ3JhbShnbCwgc2hhZGVycyk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/webgl-util.js\n");

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