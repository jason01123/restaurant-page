/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAboutContent: () => (/* binding */ addAboutContent)\n/* harmony export */ });\nfunction addAboutContent(){\n    const aboutDiv = document.createElement(\"div\");\n    // hero\n    const aboutTitle = document.createElement(\"H2\");\n    aboutTitle.style.padding = \"50px\";\n    aboutTitle.style.backgroundColor = \"#cdaa7d\";\n    aboutTitle.innerHTML = \"About the Burton Pub and Grill\";\n    aboutDiv.appendChild(aboutTitle);\n    // make a block container with margins\n    const blockContainer = document.createElement(\"div\");\n    blockContainer.style.marginLeft = \"50px\";\n    blockContainer.style.marginRight = \"50px\";\n    aboutDiv.appendChild(blockContainer);\n\n    const paraOneTitle = document.createElement(\"h3\");\n    paraOneTitle.innerHTML = \"Menu\";\n    blockContainer.appendChild(paraOneTitle);\n\n    const paraOneText = document.createElement(\"p\");\n    paraOneText.innerHTML = \"Coming soon!  For now we only have beer!\";\n\n    blockContainer.appendChild(paraOneText);\n\n    const content = document.getElementById(\"content\")\n    content.appendChild(aboutDiv);\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHomeContent: () => (/* binding */ addHomeContent)\n/* harmony export */ });\nfunction addHomeContent(){\n    const homeDiv = document.createElement(\"div\");\n    // hero\n    const homeTitle = document.createElement(\"H2\");\n    homeTitle.style.padding = \"50px\";\n    homeTitle.style.backgroundColor = \"#cdaa7d\";\n    homeTitle.innerHTML = \"Welcome to the Burton Pub and Grill\";\n    homeDiv.appendChild(homeTitle);\n    // make a block container with margins\n    const blockContainer = document.createElement(\"div\");\n    blockContainer.style.marginLeft = \"50px\";\n    blockContainer.style.marginRight = \"50px\";\n    homeDiv.appendChild(blockContainer);\n\n    const paraOneTitle = document.createElement(\"h3\");\n    paraOneTitle.innerHTML = \"Where good food, great company, and unforgettable nights come together.\";\n    blockContainer.appendChild(paraOneTitle);\n\n    const paraOneText = document.createElement(\"p\");\n    paraOneText.innerHTML = \"Nestled in the heart of Burton, our bar and grill is your go-to spot for winding down, catching up, and enjoying the best of small-town charm. Whether you're stopping in after work, meeting friends for a night out, or discovering us for the first time, you'll feel right at home.\";\n    blockContainer.appendChild(paraOneText);\n\n    const content = document.getElementById(\"content\")\n    content.appendChild(homeDiv);\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.contentLoad)();\n\ndocument.getElementById(\"menuButton\").addEventListener(\"click\", displayMenu);\n\nfunction displayMenu(){\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.addMenuContent)();\n}\n\ndocument.getElementById(\"homeButton\").addEventListener(\"click\", displayHome);\n\nfunction displayHome(){\n    clearContent();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.addHomeContent)();\n}\n\ndocument.getElementById(\"aboutButton\").addEventListener(\"click\", displayAbout);\n\nfunction displayAbout(){\n    clearContent();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.addAboutContent)();\n}\n\nfunction clearContent(){\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = \"\";\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMenuContent: () => (/* binding */ addMenuContent)\n/* harmony export */ });\nfunction addMenuContent(){\n\n    const menuDiv = document.createElement(\"div\");\n    // hero\n    const menuTitle = document.createElement(\"H2\");\n    menuTitle.style.padding = \"50px\";\n    menuTitle.style.backgroundColor = \"#cdaa7d\";\n    menuTitle.innerHTML = \"The Burton Pub and Grill Menu\";\n    menuDiv.appendChild(menuTitle);\n    // make a block container with margins\n    const blockContainer = document.createElement(\"div\");\n    blockContainer.style.marginLeft = \"50px\";\n    blockContainer.style.marginRight = \"50px\";\n    menuDiv.appendChild(blockContainer);\n\n    const paraOneTitle = document.createElement(\"h3\");\n    paraOneTitle.innerHTML = \"What we are menu\";\n    blockContainer.appendChild(paraOneTitle);\n\n    const paraOneText = document.createElement(\"p\");\n    paraOneText.innerHTML = \"Founded in 1998, The Burton Bar & Grill began as a humble neighborhood watering hole in a converted general store at the center of town. Built by longtime locals with a passion for good food and community spirit, it quickly grew into a beloved gathering place where stories were shared over cold pints and hearty meals. Over the years, the pub has seen renovations and a few fresh coats of paint, but it’s never lost its rustic charm or small-town soul. Today, The Burton Bar & Grill stands as a local landmark — a place where generations have gathered to celebrate, unwind, and feel right at home.\";\n\n    blockContainer.appendChild(paraOneText);\n\n    const content = document.getElementById(\"content\")\n    content.appendChild(menuDiv);\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentLoad: () => (/* binding */ contentLoad)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nfunction contentLoad(){\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.addHomeContent)();\n}\n\n\n\n//# sourceURL=webpack:///./src/page-load.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;