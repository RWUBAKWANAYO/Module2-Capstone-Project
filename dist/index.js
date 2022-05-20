"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmodule2_capstone_project"] = self["webpackChunkmodule2_capstone_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\r\\n  background-color: #fff;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  width: 80px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 10%;\\r\\n  width: 100%;\\r\\n  background-color: #f5f5f5;\\r\\n  box-shadow: 0 2px 4px #e5e5e5;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  gap: 0 10px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: relative;\\r\\n  bottom: 0;\\r\\n  border-top: 2px solid #000;\\r\\n  width: 100%;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  width: 78%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n/* Home Page */\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.content-body {\\r\\n  width: 90%;\\r\\n  min-height: 100vh;\\r\\n  padding-right: 6%;\\r\\n  margin: 4rem auto;\\r\\n}\\r\\n\\r\\n.content-card {\\r\\n  width: 25.5%;\\r\\n  display: inline-block;\\r\\n  margin: 0 0 5% 7.5%;\\r\\n}\\r\\n\\r\\n.card-img-wrapper {\\r\\n  width: 100%;\\r\\n  padding: 20px;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.card-img-wrapper img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card-description {\\r\\n  width: 100%;\\r\\n  min-height: 60px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 10px 0 0 0;\\r\\n}\\r\\n\\r\\n.card-description h4 {\\r\\n  max-width: 80%;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.card-likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  cursor: pointer;\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  outline: none;\\r\\n  border: 1px #000 solid;\\r\\n  background-color: transparent;\\r\\n  font-size: 14px;\\r\\n  font-weight: 700;\\r\\n  padding: 10px 20px;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 2px 2px 2px #000;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* Pop up Window start */\\r\\n\\r\\n.pop-up-window {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  background-color: #fff;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n\\r\\n  /* justify-content: center; */\\r\\n  z-index: 9;\\r\\n  padding: 20px 0;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  width: 90%;\\r\\n  border: 2px solid #000;\\r\\n  padding: 0 16%;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.pop-up-img {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.pop-up-img > img {\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: flex;\\r\\n  gap: 0 10px;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  font-weight: 900;\\r\\n  font-size: 4em;\\r\\n  position: relative;\\r\\n  top: 10px;\\r\\n  left: 100%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card-name,\\r\\n.comment-counter,\\r\\n.generate-comments,\\r\\n.add-comment,\\r\\ninput {\\r\\n  margin: 10px 0;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n#txt-area {\\r\\n  width: 60%;\\r\\n  border: 2px solid #000;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  border: 2px solid #000;\\r\\n  padding: 10px;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.detail-cont {\\r\\n  padding-left: 10%;\\r\\n}\\r\\n\\r\\n.sendComment {\\r\\n  width: fit-content;\\r\\n  margin: 10px 0;\\r\\n  border: 1px #000 solid;\\r\\n  background-color: transparent;\\r\\n  font-size: 14px;\\r\\n  font-weight: 700;\\r\\n  padding: 10px 20px;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 2px 2px 2px #000;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.sendComment:hover {\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.generate-comments {\\r\\n  overflow-y: scroll;\\r\\n  width: 100%;\\r\\n  height: 20%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  word-wrap: break-word;\\r\\n  gap: 10px 0;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n.generate-comments::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* pop-up window end */\\r\\n\\r\\n@media (max-width: 1000px) {\\r\\n  .content-card {\\r\\n    width: 38%;\\r\\n  }\\r\\n\\r\\n  .content-body {\\r\\n    padding-right: 0%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n  .content-body {\\r\\n    width: 75%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .content-card {\\r\\n    width: 100%;\\r\\n    margin: 0;\\r\\n    margin-bottom: 4rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (min-width: 600px) {\\r\\n  .pop-up-img > img {\\r\\n    width: 30%;\\r\\n  }\\r\\n\\r\\n  .detail-cont {\\r\\n    padding-left: 30%;\\r\\n  }\\r\\n\\r\\n  .generate-comments {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module2-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module2-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module2-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_leagues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/leagues.js */ \"./src/modules/leagues.js\");\n/* harmony import */ var _modules_LeagueLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/LeagueLikes.js */ \"./src/modules/LeagueLikes.js\");\n/* harmony import */ var _modules_CountLeagues_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/CountLeagues.js */ \"./src/modules/CountLeagues.js\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _modules_pop_up_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pop-up-details.js */ \"./src/modules/pop-up-details.js\");\n/* harmony import */ var _modules_commentsAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/commentsAPI.js */ \"./src/modules/commentsAPI.js\");\n // eslint-disable-line\n\n\n\n\n\n\n\nconst logoImg = document.querySelector('#logo');\nlogoImg.src = `${_assets_logo_png__WEBPACK_IMPORTED_MODULE_4__}`;\n\n// create pop-up window:\nconst comments = new _modules_commentsAPI_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\ndocument.onclick = (e) => {\n  if (e.target.className === 'comment-button') {\n    const btnId = e.target.id;\n    fetch('https://api-football-standings.azharimm.site/leagues').then((res) => res.json())\n      .then((data) => {\n        data.data.forEach((item) => {\n          if (item.id === btnId) {\n            (0,_modules_pop_up_details_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(item);\n            comments.getComments(btnId);\n          }\n        });\n      });\n  }\n};\n// .\nconst newLeagues = new _modules_leagues_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst newLeagueLikes = new _modules_LeagueLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst contentBody = document.querySelector('.content-body');\ncontentBody.addEventListener('click', (event) => {\n  let card = event.target.parentElement.parentElement;\n  if (event.target.tagName === 'I') {\n    card = event.target.parentElement.parentElement.parentElement;\n    newLeagueLikes.postLike(card.id);\n    event.target.style.color = 'red';\n  }\n});\n\nwindow.addEventListener('load', () => {\n  newLeagues.fetchLeague();\n  (0,_modules_CountLeagues_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n//# sourceURL=webpack://module2-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/CountLeagues.js":
/*!*************************************!*\
  !*** ./src/modules/CountLeagues.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _FetchCountLeagues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchCountLeagues.js */ \"./src/modules/FetchCountLeagues.js\");\n\n\nconst CountLeagues = () => (0,_FetchCountLeagues_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n  const soccerCount = document.querySelector('.soccer-count');\n  soccerCount.innerHTML = data.length;\n  return data.length;\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountLeagues);\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/CountLeagues.js?");

/***/ }),

/***/ "./src/modules/FetchCountLeagues.js":
/*!******************************************!*\
  !*** ./src/modules/FetchCountLeagues.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _credentials_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credentials.js */ \"./src/modules/credentials.js\");\n\n\nconst fetchCountLeagues = () => fetch(_credentials_js__WEBPACK_IMPORTED_MODULE_0__.BaseUrl).then((res) => res.json())\n  .then((data) => data.data.slice(0, 6));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCountLeagues);\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/FetchCountLeagues.js?");

/***/ }),

/***/ "./src/modules/LeagueLikes.js":
/*!************************************!*\
  !*** ./src/modules/LeagueLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _credentials_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credentials.js */ \"./src/modules/credentials.js\");\n\n\nclass LeagueLikes {\n  constructor(likeId, likes) {\n    this.likeId = likeId;\n    this.likes = likes;\n  }\n\n    postLike = (likeId) => {\n      const appId = _credentials_js__WEBPACK_IMPORTED_MODULE_0__.applicationId.replace(/['\"]+/g, '');\n      const url = _credentials_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementBaseUrl.replace(/['\"]+/g, '');\n      const config = {\n        method: 'POST',\n        headers: {\n          Accept: 'application/json',\n          'Content-Type': 'application/json; charset=\"utf-8\"',\n        },\n        body: JSON.stringify({ item_id: likeId }),\n      };\n      fetch(`${url}/apps/${appId}/likes/`, config).then(() => this.fetchLikes());\n    };\n\n      fetchLikes = () => {\n        const appId = _credentials_js__WEBPACK_IMPORTED_MODULE_0__.applicationId.replace(/['\"]+/g, '');\n        const url = _credentials_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementBaseUrl.replace(/['\"]+/g, '');\n        fetch(`${url}/apps/${appId}/likes/`).then((res) => res.json()).then((likes) => this.upDateUILikes(likes));\n      };\n\n      upDateUILikes = (likes) => likes.forEach((el) => {\n        const card = document.getElementById(el.item_id);\n        const likeElement = card.querySelector('.likes-number');\n        likeElement.innerHTML = `${el.likes} likes`;\n      });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeagueLikes);\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/LeagueLikes.js?");

/***/ }),

/***/ "./src/modules/commentsAPI.js":
/*!************************************!*\
  !*** ./src/modules/commentsAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComments.js */ \"./src/modules/countComments.js\");\n/* harmony import */ var _credentials_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credentials.js */ \"./src/modules/credentials.js\");\n\n\n\nclass FetchComments {\ngetComments = (id) => {\n  const commentList = document.querySelector('.generate-comments');\n  const appId = _credentials_js__WEBPACK_IMPORTED_MODULE_1__.applicationId.replace(/['\"]+/g, '');\n  const url = _credentials_js__WEBPACK_IMPORTED_MODULE_1__.InvolvementBaseUrl.replace(/['\"]+/g, '');\n  fetch(`${url}/apps/${appId}/comments?item_id=${id}`)\n    .then((res) => res.json())\n    .then((data) => {\n      if (data.length > 0) {\n        data.forEach((el) => {\n          commentList.innerHTML += `<div>${el.creation_date} ${el.username}: ${el.comment}</div>\n                `;\n        });\n        (0,_countComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n      }\n    });\n}\n\nfetchComments = (id) => {\n  const appId = _credentials_js__WEBPACK_IMPORTED_MODULE_1__.applicationId.replace(/['\"]+/g, '');\n  const url = _credentials_js__WEBPACK_IMPORTED_MODULE_1__.InvolvementBaseUrl.replace(/['\"]+/g, '');\n  fetch(`${url}/apps/${appId}/comments?item_id=${id}`)\n    .then((res) => res.json()).then((data) => {\n      (0,_countComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n      const commentList = document.querySelector('.generate-comments');\n      commentList.innerHTML = '';\n      data.forEach((el) => {\n        commentList.innerHTML += `<div>${el.creation_date.replace('-', '/')} ${el.username}: ${el.comment}</div>\n                `;\n      });\n    });\n};\n\npostComments = ({ id, name, comment }) => {\n  const appId = _credentials_js__WEBPACK_IMPORTED_MODULE_1__.applicationId.replace(/['\"]+/g, '');\n  const url = _credentials_js__WEBPACK_IMPORTED_MODULE_1__.InvolvementBaseUrl.replace(/['\"]+/g, '');\n  const config = {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username: name,\n      comment,\n    }),\n  };\n  fetch(`${url}/apps/${appId}/comments/`, config)\n    .then(() => this.fetchComments(id));\n}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchComments);\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/commentsAPI.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayCom = (data) => {\n  const dispCount = document.querySelector('.comment-counter');\n  dispCount.innerHTML = `Comments(${data.length})`;\n  return data.length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCom);\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/credentials.js":
/*!************************************!*\
  !*** ./src/modules/credentials.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseUrl\": () => (/* binding */ BaseUrl),\n/* harmony export */   \"InvolvementBaseUrl\": () => (/* binding */ InvolvementBaseUrl),\n/* harmony export */   \"applicationId\": () => (/* binding */ applicationId)\n/* harmony export */ });\nconst BaseUrl = 'https://api-football-standings.azharimm.site/leagues';\nconst applicationId = 'keC27CD01xF8MORwh58d';\nconst InvolvementBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/credentials.js?");

/***/ }),

/***/ "./src/modules/leagues.js":
/*!********************************!*\
  !*** ./src/modules/leagues.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _LeagueLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeagueLikes.js */ \"./src/modules/LeagueLikes.js\");\n/* harmony import */ var _credentials_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credentials.js */ \"./src/modules/credentials.js\");\n\n\n\nconst newLeagueLikes = new _LeagueLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nclass Leagues {\n  constructor(comment, like) {\n    this.comment = comment;\n    this.like = like;\n  }\n\ngetLeagues=(data) => {\n  const contentBody = document.querySelector('.content-body');\n  contentBody.innerHTML = data.map((el) => `<div class=\"content-card\" id=${el.id}>\n    <div class=\"card-img-wrapper\"><img src=${el.logos.light} alt=\"logo\"/></div>\n    <div class=\"card-description\"><h4>${el.name}</h4><span class=\"card-likes\"><i class=\"fa-regular fa-heart\"></i><small class=\"likes-number\" id=${el.id}>0 likes</small></span></div>\n    <button class=\"comment-button\" id=\"${el.id}\">Comments</button>\n    </div>\n`).join('');\n  return newLeagueLikes.fetchLikes();\n}\n\nfetchLeague = () => {\n  fetch(_credentials_js__WEBPACK_IMPORTED_MODULE_1__.BaseUrl).then((res) => res.json())\n    .then((data) => this.getLeagues(data.data.slice(0, 6)));\n}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leagues);\n\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/leagues.js?");

/***/ }),

/***/ "./src/modules/pop-up-details.js":
/*!***************************************!*\
  !*** ./src/modules/pop-up-details.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsAPI.js */ \"./src/modules/commentsAPI.js\");\n\n\nconst getDetail = (item) => {\n  const popUp = document.querySelector('.pop-up-window');\n  const body = document.querySelector('body');\n  body.style.overflow = 'hidden';\n  popUp.style.display = 'flex';\n  popUp.innerHTML = `<div class=\"pop-up\" id=${item.id}>\n    <div id=\"close\">&times</div>\n    <div class=\"pop-up-img\"><img src=${item.logos.light} alt=\"logo\"/></div>\n      <div class=\"detail-cont\">\n        <div class=\"card-name\"><h1>${item.name}</h1></div>\n        <div class=\"details\"><p><b>slug: </b>${item.slug}</p><p><b>abbr: </b>${item.abbr}</p></div>\n        <div class=\"comment-counter\">Comments</div>\n        <div class=\"generate-comments\"></div>\n        <div class=\"add-comment\">Add a comment</div>\n        <input type=\"text\" id=\"name\" placeholder=\"Your name\">\n        <textarea id=\"txt-area\" placeholder=\"Your insights\"></textarea>\n        <button class=\"sendComment\">Comment</button>\n      </div>\n    </div>\n`;\n  const closeBtn = document.querySelector('#close');\n  const sendComment = document.querySelector('.sendComment');\n\n  closeBtn.onclick = () => {\n    popUp.style.display = 'none';\n    body.style.overflow = 'scroll';\n  };\n\n  sendComment.onclick = (e) => {\n    e.preventDefault();\n    const { id } = item;\n    const comments = new _commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const name = document.querySelector('#name').value;\n    const comment = document.querySelector('#txt-area').value;\n    if (name.length > 0 && comment.length > 0) {\n      comments.postComments({ id, name, comment });\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDetail);\n\n//# sourceURL=webpack://module2-capstone-project/./src/modules/pop-up-details.js?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54c6efa0dae9be66b1bd.png\";\n\n//# sourceURL=webpack://module2-capstone-project/./src/assets/logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);