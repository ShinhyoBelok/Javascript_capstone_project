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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Jsmodules/popup-comment.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Jsmodules/popup-comment.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* popup modal window */\\n\\n.popup {\\n  width: 100%;\\n  height: 100%;\\n  box-sizing: border-box;\\n  top: 0;\\n  padding: 30px 10px;\\n  position: fixed;\\n  background-color: rgba(0, 0, 0, 0.349);\\n  backdrop-filter: blur(3px);\\n  overflow-y: auto;\\n  display: none;\\n}\\n\\n/* popup modal window scrollbar customization */\\n\\n.popup::-webkit-scrollbar {\\n  width: 7px;\\n}\\n\\n.popup::-webkit-scrollbar-track {\\n  background-color: antiquewhite;\\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\\n}\\n\\n.popup::-webkit-scrollbar-thumb {\\n  background: rgb(141, 63, 231);\\n  border-radius: 15px;\\n}\\n\\n.popup::-webkit-scrollbar-thumb:hover {\\n  background: rgb(179, 153, 211);\\n}\\n\\n.x-btn {\\n  font-size: 1.5rem;\\n  cursor: pointer;\\n}\\n\\n/* popup data */\\n\\n.popup-window {\\n  z-index: 10;\\n  max-width: 600px;\\n  margin: auto;\\n  margin-bottom: 20px;\\n  background-color: white;\\n  padding: 20px;\\n  border-radius: 5px;\\n}\\n\\n.popup-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.popup-header-text {\\n  color: rgb(141, 63, 231);\\n  text-transform: capitalize;\\n  font-size: 1.5rem;\\n}\\n\\n.popup-image {\\n  width: 115px;\\n  border-bottom: 1px solid rgb(141, 63, 231);\\n  background-color: #a39bff;\\n  border-radius: 30%;\\n  display: block;\\n  margin: auto;\\n}\\n\\n.display {\\n  display: block;\\n}\\n\\n.d-grid-2col {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  gap: 5px;\\n}\\n\\n/* pokemon details */\\n\\n.popup-image-detail {\\n  text-align: center;\\n}\\n\\n.popup-detail-item {\\n  font-size: medium;\\n}\\n\\n/*  comments list  */\\n\\n.popup-comment-record {\\n  max-height: 220px;\\n  overflow-y: scroll;\\n}\\n\\n/* comment list scrollbar customization */\\n\\n.popup-comment-record::-webkit-scrollbar {\\n  width: 5px;\\n}\\n\\n.popup-comment-record::-webkit-scrollbar-track {\\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\\n  border-radius: 10px;\\n}\\n\\n.popup-comment-record::-webkit-scrollbar-thumb {\\n  background: rgb(141, 63, 231);\\n  border-radius: 15px;\\n}\\n\\n.popup-comment-record::-webkit-scrollbar-thumb:hover {\\n  background: rgb(179, 153, 211);\\n}\\n\\n.popup-comment-header {\\n  color: rgb(141, 63, 231);\\n  margin-bottom: 5px;\\n  text-align: center;\\n}\\n\\n.popup-comment-list {\\n  list-style-type: none;\\n  padding: 0 5px;\\n}\\n\\n.popup-comment-item {\\n  background-color: rgba(196, 159, 201, 0.144);\\n  margin: 5px 0;\\n  padding: 5px;\\n  border-radius: 5px;\\n  font-size: small;\\n}\\n\\n.popup-comment-author {\\n  font-weight: 600;\\n  font-size: small;\\n}\\n\\n.popup-comment-text {\\n  margin: 5px 0;\\n  color: rgb(80, 80, 80);\\n  font-size: small;\\n}\\n\\n.popup-comment-date {\\n  margin: 5px 0;\\n  color: rgb(141, 63, 231);\\n  font-size: small;\\n}\\n\\n/* New comment */\\n\\n.popup-new-comment {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n.popup-comment-input {\\n  padding: 10px;\\n  font-size: medium;\\n  border: 0;\\n  outline: 0;\\n  border-bottom: 1px solid gainsboro;\\n}\\n\\n.popup-comment-input::placeholder {\\n  color: rgb(170, 170, 170);\\n}\\n\\n.popup-comment-input:focus {\\n  border-bottom: 1px solid rgb(141, 63, 231);\\n}\\n\\n.popup-new-comment-text {\\n  resize: none;\\n}\\n\\n.popup-comment-btn {\\n  padding: 10px 15px;\\n  background-color: rgb(141, 63, 231);\\n  color: white;\\n  cursor: pointer;\\n  border-radius: 5px;\\n  width: fit-content;\\n  align-self: flex-end;\\n}\\n\\n@media screen and (min-width: 400px) {\\n  .d-grid-2col {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .popup-image {\\n    width: 200px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/popup-comment.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Gbboot-ALpM.ttf */ \"./src/font/Gbboot-ALpM.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: gameboyFont, sans-serif;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: gameboyFont, sans-serif;\\r\\n  font-size: 1.1rem;\\r\\n}\\r\\n\\r\\n.pokemon-container {\\r\\n  padding: 24px;\\r\\n  background-color: lightblue;\\r\\n  height: calc(100vh - 103px - 115px);\\r\\n  margin-top: 103px;\\r\\n  overflow-y: scroll;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  gap: 24px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.dflex {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  padding: 24px;\\r\\n  background-color: #4d93e7;\\r\\n  position: fixed;\\r\\n  width: 100vw;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  gap: 60px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  padding: 24px;\\r\\n  background-color: #ffcb05;\\r\\n  width: 100vw;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.pokemonCard {\\r\\n  width: 200px;\\r\\n  height: 230px;\\r\\n  border-radius: 8px;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 10px;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.pokemonCard .pokemonPic {\\r\\n  background-color: #a39bff;\\r\\n  border-radius: 50%;\\r\\n  width: 115px;\\r\\n}\\r\\n\\r\\n.pokemonDetail {\\r\\n  gap: 15px;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.likes span {\\r\\n  font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n.likes img {\\r\\n  width: 25px;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  padding: 3px;\\r\\n  box-shadow: 5px 5px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/Jsmodules/popup-comment.css":
/*!*****************************************!*\
  !*** ./src/Jsmodules/popup-comment.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_comment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup-comment.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Jsmodules/popup-comment.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_popup_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_popup_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/popup-comment.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Jsmodules/baseApis.js":
/*!***********************************!*\
  !*** ./src/Jsmodules/baseApis.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lfiNWiSutZHfoDfs9JiB';\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementApi);\r\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/baseApis.js?");

/***/ }),

/***/ "./src/Jsmodules/display-comment.js":
/*!******************************************!*\
  !*** ./src/Jsmodules/display-comment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-comment.js */ \"./src/Jsmodules/popup-comment.js\");\n\n\n// Comment button\nconst buttonPressed = async (e) => {\n  const sid = e.target.id.substring(4);\n  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${sid}`;\n  await fetch(pokemonUrl)\n    .then((response) => response.json())\n    .then((json) => {\n      const pokemon = json;\n      const { name } = pokemon;\n      const image = pokemon.sprites.other.dream_world.front_default;\n      const info = `\n      <p class=\"popup-detail-item\">Height : ${pokemon.height}</p>\n      <p class=\"popup-detail-item\">Weight : ${pokemon.weight}</p>\n      <p class=\"popup-detail-item\">Base Experience : ${pokemon.base_experience}</p>\n      <p class=\"popup-detail-item\">Moves : ${pokemon.moves.length}</p> `;\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.showPopup)(name, image, info);\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(sid);\n      (0,_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.getCommentID)(sid);\n      _popup_comment_js__WEBPACK_IMPORTED_MODULE_0__.popup.classList.toggle('display');\n    });\n};\n\nconst addeventComment = () => {\n  const commentButtons = document.querySelectorAll('.comments');\n  commentButtons.forEach((button) => {\n    button.addEventListener('click', buttonPressed);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addeventComment);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/display-comment.js?");

/***/ }),

/***/ "./src/Jsmodules/displayPokemon.js":
/*!*****************************************!*\
  !*** ./src/Jsmodules/displayPokemon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-comment.js */ \"./src/Jsmodules/display-comment.js\");\n/* harmony import */ var _displaylikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaylikes.js */ \"./src/Jsmodules/displaylikes.js\");\n/* harmony import */ var _homeCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeCounter.js */ \"./src/Jsmodules/homeCounter.js\");\n\n\n\n\nconst pokemonContainer = document.querySelector('.pokemon-container');\nconst showPokemon = (pokemonList) => {\n  pokemonContainer.innerHTML = '';\n  for (let i = 0; i < pokemonList.length; i += 1) {\n    const pokemonCardTemplate = `\n      <article class=\"pokemonCard dflex\">\n        <img class=\"pokemonPic\" src=\"${pokemonList[i].image}\" alt=\"Pokemon pic\">\n        <div class=\"pokemonDetail dflex\">\n          <p class=\"name\">${pokemonList[i].name}</p>\n          <p class=\"likes dflex\">\n            <img class=\"likeIcon\" id=\"heart${pokemonList[i].id}\" src=\"https://img.icons8.com/color/512/heart-pokemon.png\" alt=\"heart\">\n            <span><span class=\"likeText\" id=\"like${pokemonList[i].id}\">0</span>&nbsp;Likes</span>\n          </p>\n        </div>\n        <button class=\"comments\" id=\"cBtn${pokemonList[i].id}\" >Comments</button>\n      </article>\n    `;\n    pokemonContainer.innerHTML += pokemonCardTemplate;\n  }\n  (0,_displaylikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n  (0,_display_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_displaylikes_js__WEBPACK_IMPORTED_MODULE_1__.addeventLikes)();\n  (0,_homeCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPokemon);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/displayPokemon.js?");

/***/ }),

/***/ "./src/Jsmodules/displaylikes.js":
/*!***************************************!*\
  !*** ./src/Jsmodules/displaylikes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addeventLikes\": () => (/* binding */ addeventLikes),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lfiNWiSutZHfoDfs9JiB/likes/';\n\nconst showLikes = (data) => {\n  const likeText = document.querySelectorAll('.likeText');\n  for (let i = 0; i < likeText.length; i += 1) {\n    const numOfLikes = data.find((like) => like.item_id === (i + 1));\n    if (numOfLikes) {\n      likeText[i].innerHTML = numOfLikes.likes;\n    }\n  }\n};\n\nconst getLikes = () => {\n  fetch(likesAPI, { method: 'GET' })\n    .then((res) => res.json())\n    .then((data) => {\n      showLikes(data);\n    });\n};\n\nconst postLikes = (id) => {\n  fetch(likesAPI, {\n    method: 'POST',\n    headers: { 'Content-type': 'application/json' },\n    body: JSON.stringify({ item_id: id }),\n  });\n  const likeTextElement = document.querySelector(`#like${id}`);\n  const numLikes = parseInt(likeTextElement.innerHTML, 10);\n  likeTextElement.innerHTML = numLikes + 1;\n};\n\nconst addeventLikes = () => {\n  const likeIcon = document.querySelectorAll('.likeIcon');\n  likeIcon.forEach((like) => {\n    like.addEventListener('click', (e) => {\n      const { id } = e.target;\n      postLikes(parseInt(id.substring(5), 10));\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/displaylikes.js?");

/***/ }),

/***/ "./src/Jsmodules/getPokemon.js":
/*!*************************************!*\
  !*** ./src/Jsmodules/getPokemon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayPokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPokemon.js */ \"./src/Jsmodules/displayPokemon.js\");\n\n\nconst getAllPokemons = (num = 25) => {\n  const promises = [];\n  for (let id = 1; id < num; id += 1) {\n    const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${id}/`;\n    promises.push(fetch(pokemonAPI).then((res) => res.json()));\n  }\n  Promise.all(promises).then((res) => {\n    const pokemons = res.map((data) => ({\n      name: data.name,\n      id: data.id,\n      image: data.sprites.front_default,\n    }));\n    (0,_displayPokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokemons);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllPokemons);\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/getPokemon.js?");

/***/ }),

/***/ "./src/Jsmodules/homeCounter.js":
/*!**************************************!*\
  !*** ./src/Jsmodules/homeCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokemonCounter = () => {\n  const pokemonCard = document.querySelectorAll('.pokemonCard');\n  const homeCounter = document.querySelector('.home-counter');\n  homeCounter.innerHTML = `&nbsp;(${pokemonCard.length})`;\n  return pokemonCard.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemonCounter);\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/homeCounter.js?");

/***/ }),

/***/ "./src/Jsmodules/popup-comment.js":
/*!****************************************!*\
  !*** ./src/Jsmodules/popup-comment.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getCommentID\": () => (/* binding */ getCommentID),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"popup\": () => (/* binding */ popup),\n/* harmony export */   \"popupCommentBtn\": () => (/* binding */ popupCommentBtn),\n/* harmony export */   \"showPopup\": () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _popup_comment_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-comment.css */ \"./src/Jsmodules/popup-comment.css\");\n/* harmony import */ var _img_pokemon3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/pokemon3.png */ \"./src/img/pokemon3.png\");\n/* harmony import */ var _ut_counter_and_check_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ut-counter-and-check.js */ \"./src/Jsmodules/ut-counter-and-check.js\");\n/* harmony import */ var _baseApis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseApis.js */ \"./src/Jsmodules/baseApis.js\");\n\r\n\r\n\r\n\r\n\r\n//  popup\r\nconst popup = document.createElement('div');\r\npopup.id = 'popup';\r\npopup.classList = 'popup';\r\ndocument.body.appendChild(popup);\r\n\r\n// popup-window\r\nconst popupWindow = document.createElement('div');\r\npopupWindow.classList = 'popup-window';\r\npopup.appendChild(popupWindow);\r\n\r\n// popup-header\r\nconst popupHeader = document.createElement('div');\r\npopupHeader.classList = 'popup-header';\r\npopupWindow.appendChild(popupHeader);\r\n\r\n// popup-header text\r\nconst popupHeaderText = document.createElement('h2');\r\npopupHeaderText.id = 'popupHeaderText';\r\npopupHeaderText.classList = 'popup-header-text';\r\npopupHeaderText.innerHTML = 'Test'; /// /// for test\r\npopupHeader.appendChild(popupHeaderText);\r\n\r\n// popup-header X-btn\r\nconst xBtn = document.createElement('p');\r\nxBtn.id = 'xBtn';\r\nxBtn.classList = 'x-btn';\r\nxBtn.innerHTML = 'X';\r\npopupHeader.appendChild(xBtn);\r\n\r\n// popup-image\r\nconst popupImage = document.createElement('img');\r\npopupImage.id = 'popupImage';\r\npopupImage.classList = 'popup-image';\r\npopupImage.src = _img_pokemon3_png__WEBPACK_IMPORTED_MODULE_1__; /// ////////// for test\r\npopupImage.alt = 'pokemon';\r\npopupWindow.appendChild(popupImage);\r\n\r\n// popup-image-details\r\nconst popupDetail = document.createElement('div');\r\npopupDetail.id = 'popupDetail';\r\npopupDetail.classList = 'popup-image-detail d-grid-2col';\r\n/// /////////////// for test\r\npopupDetail.innerHTML = `\r\n                <p class=\"popup-detail-item\">Color : Green</p>\r\n                <p class=\"popup-detail-item\">Age : 6 years</p>\r\n                <p class=\"popup-detail-item\">Power : 132</p>\r\n                <p class=\"popup-detail-item\">Speed : 42 KM/h</p>\r\n`;\r\npopupWindow.appendChild(popupDetail);\r\n\r\nxBtn.addEventListener('click', () => {\r\n  popup.classList.remove('display');\r\n});\r\n\r\nconst showPopup = (name, image, info) => {\r\n  popupHeaderText.innerHTML = name;\r\n  popupImage.src = image;\r\n  popupDetail.innerHTML = info;\r\n};\r\n\r\n// popup-comment-header\r\nconst popupCommentHeader = document.createElement('h3');\r\npopupCommentHeader.classList = 'popup-comment-header';\r\npopupCommentHeader.innerHTML = 'Comments (4)'; /// /////// for test\r\npopupWindow.appendChild(popupCommentHeader);\r\n\r\n// popup-engage section\r\nconst engage = document.createElement('div');\r\nengage.classList = 'd-grid-2col';\r\npopupWindow.appendChild(engage);\r\n\r\n// popup-comment-record\r\nconst popupCommentRecord = document.createElement('div');\r\npopupCommentRecord.classList = 'popup-comment-record';\r\nengage.appendChild(popupCommentRecord);\r\n\r\n// popup-comment-list\r\nconst popupCommentList = document.createElement('ul');\r\npopupCommentList.id = 'popupCommentList';\r\npopupCommentList.classList = 'popup-comment-list';\r\npopupCommentRecord.appendChild(popupCommentList);\r\n\r\n// popup-new-comment\r\nconst popupNewComment = document.createElement('div');\r\npopupNewComment.classList = 'popup-new-comment';\r\nengage.appendChild(popupNewComment);\r\n\r\n// popup-comment-input name\r\nconst popupCommentInputName = document.createElement('input');\r\npopupCommentInputName.id = 'popupCommentInputName';\r\npopupCommentInputName.classList = 'popup-comment-input';\r\npopupCommentInputName.type = 'text';\r\npopupCommentInputName.placeholder = 'Your name...';\r\npopupNewComment.appendChild(popupCommentInputName);\r\n\r\n// popup-comment-input comment\r\nconst popupCommentInputComment = document.createElement('textarea');\r\npopupCommentInputComment.id = 'popupCommentInputComment';\r\npopupCommentInputComment.classList = 'popup-comment-input popup-new-comment-text';\r\npopupCommentInputComment.cols = '15';\r\npopupCommentInputComment.rows = '4';\r\npopupCommentInputComment.placeholder = 'Your Comment...';\r\npopupNewComment.appendChild(popupCommentInputComment);\r\n\r\n// popup-comment-btn\r\nconst popupCommentBtn = document.createElement('a');\r\npopupCommentBtn.id = 'popupCommentBtn';\r\npopupCommentBtn.classList = 'popup-comment-btn';\r\npopupCommentBtn.innerHTML = 'Comment';\r\npopupNewComment.appendChild(popupCommentBtn);\r\n\r\n/// get comments\r\nconst getComments = async (itemId) => {\r\n  const commentsAPI = `${_baseApis_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}/comments?item_id=${itemId}`;\r\n  await fetch(commentsAPI).then((response) => response.json()).then((json) => {\r\n    if (json.length === undefined) {\r\n      popupCommentHeader.innerHTML = 'Comments (0)';\r\n      popupCommentList.innerHTML = '';\r\n    } else {\r\n      popupCommentList.innerHTML = '';\r\n      json.forEach((element) => {\r\n        const newComment = document.createElement('li');\r\n        newComment.classList = 'popup-comment-item';\r\n        newComment.innerHTML = ` \r\n            <label class=\"popup-comment-author\">${element.username}</label>\r\n            <p class=\"popup-comment-text\">${element.comment}</p>\r\n            <p class=\"popup-comment-date\">${element.creation_date}</p>`;\r\n        popupCommentList.appendChild(newComment);\r\n      });\r\n    }\r\n  }).catch((e) => e);\r\n  const qtyComments = (0,_ut_counter_and_check_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('popup-comment-item');\r\n  popupCommentHeader.innerHTML = `Comments (${qtyComments})`;\r\n};\r\n\r\n//  add new comment\r\n\r\nconst addComment = async (itemId) => {\r\n  const commentsAPI = `${_baseApis_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}/comments`;\r\n  const id = itemId;\r\n  const name = document.getElementById('popupCommentInputName').value;\r\n  const comment = document.getElementById('popupCommentInputComment').value;\r\n  if (name === '' || comment === '') return;\r\n\r\n  await fetch(commentsAPI, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  }).then((response) => {\r\n    getComments(itemId);\r\n    document.getElementById('popupCommentInputName').value = '';\r\n    document.getElementById('popupCommentInputComment').value = '';\r\n    return response.json();\r\n  }).catch((e) => e);\r\n};\r\n\r\nlet commentID = 0;\r\nfunction getCommentID(id) {\r\n  commentID = id;\r\n}\r\n\r\n// -- comment button eventlistener\r\npopupCommentBtn.addEventListener('click', () => {\r\n  addComment(commentID);\r\n});\r\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/popup-comment.js?");

/***/ }),

/***/ "./src/Jsmodules/ut-counter-and-check.js":
/*!***********************************************!*\
  !*** ./src/Jsmodules/ut-counter-and-check.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ------------------------------------------------------------------------\r\n// Modulo que cuenta la cantidad de elementos una determinada clase\r\n// ------------------------------------------------------------------------\r\n\r\nconst utCounterCheck = (pClassName) => {\r\n  const contaExist = document.getElementsByClassName(`${pClassName}`);\r\n  return contaExist.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utCounterCheck);\r\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Jsmodules/ut-counter-and-check.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _Jsmodules_getPokemon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Jsmodules/getPokemon.js */ \"./src/Jsmodules/getPokemon.js\");\n\n\n\n\ndocument.querySelector('.logo').src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;\n(0,_Jsmodules_getPokemon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://javascript_capstone_project/./src/index.js?");

/***/ }),

/***/ "./src/font/Gbboot-ALpM.ttf":
/*!**********************************!*\
  !*** ./src/font/Gbboot-ALpM.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5da9ae843d9f71eb77f1.ttf\";\n\n//# sourceURL=webpack://javascript_capstone_project/./src/font/Gbboot-ALpM.ttf?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9631a0e0100b336ef8dd.png\";\n\n//# sourceURL=webpack://javascript_capstone_project/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/pokemon3.png":
/*!******************************!*\
  !*** ./src/img/pokemon3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3349d1c0dbda5babf47e.png\";\n\n//# sourceURL=webpack://javascript_capstone_project/./src/img/pokemon3.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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