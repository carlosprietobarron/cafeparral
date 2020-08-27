/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/fixed.css":
/*!***********************!*\
  !*** ./css/fixed.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./fixed.css */ \"./node_modules/css-loader/dist/cjs.js!./css/fixed.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/fixed.css?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/fixed.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/fixed.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".row, .container-fluid {\\nmargin-left: 0px!important;\\nmargin-right: 0px!important;\\n}\\n\\n.video-wrap {\\n  clip: rect(0, auto, auto, 0);\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n#video {\\n  position: fixed;\\n  display: block;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-size: cover;\\n  background-position: center center;\\n  -webkit-transform: translateZ(0);\\n          transform: translateZ(0);\\n  will-change: transform;\\n  z-index: -1000;\\n}\\n\\nvideo { \\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  min-width: 100%;\\n  min-height: 100%;\\n  width: auto;\\n  height: auto;\\n  z-index: -100;\\n  transform: translateX(-50%) translateY(-50%);\\n  background: url('') no-repeat;\\n  background-size: cover;\\n  transition: 1s opacity;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/fixed.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  overflow-x: hidden;\\n  font-family: 'Open sans','lato', sans-serif;\\n  font-size: 10px;\\n}\\n\\n#tab-content {\\n  margin-top: 55px;\\n}\\n\\n.menu-section {\\n  background-image: linear-gradient(#0b3a55d2, #e98d8d91);\\n  min-width: 100vw;\\n  min-height: 100vh;\\n  background-size: cover;\\n  background-position: center;\\n}\\n\\n#presentation {\\n  color: #f06009;\\n}\\n\\n#wellcome-section {\\n  font-family: 'Baloo Tamma 2', cursive;\\n  font-size: xx-large;\\n}\\n.dish-card {\\n  width: max-content;\\n  margin: 2rem 0;\\n  color: wheat;\\n  background-color: #00000052;\\n}\\n\\n.list-group-item {\\n  background-color: #00000052;\\n}\\n\\n.card-columns .card {\\n\\tdisplay: inline-block;\\n\\twidth: max-content ;\\n}\\n.card-img-top {\\n  width: 17rem;\\n  height: 11rem;\\n}\\n\\n.card-18rem {\\n  width: 18rem;\\n}\\n\\n.col-md-8 {\\n  margin: 2rem auto 8rem;\\n  padding-top: 2rem;\\n}\\n\\n.col-md-8 h1 {\\n    font-size: 2.4rem;\\n  }\\n\\n.btn-secondary {\\n  border-width: medium;\\n  border-radius: 0;\\n  padding: .6rem 1.2rem;\\n  font-size: 1.2rem;\\n  text-transform: uppercase;\\n  margin: 1rem;\\n  border-color: #1EBBA3;\\n  background-color: #1EBBA3;\\n  color: white;\\n}\\n\\n.btn-secondary:hover,\\n.btn-secondary:focus {\\n  border-color: #189582;\\n  background-color: #189582;\\n  color: white;\\n}\\n\\n.tab-content {\\n  margin-top: 50px;\\n}\\n\\n.navbar-dark {\\n  background-color: #0b3a55;\\n}\\n\\n\\n.icon-link {\\n  font-size: 3rem;\\n  color: rgba(34, 94, 157, 0.82);\\n}\\n\\n#contact-info {\\n  min-width: 100%;\\n  min-height: 100vh;\\n  background-color: rgb(221, 87, 21);\\n  padding-top: 3rem;\\n}\\n\\n#adress-card {\\n  justify-content: center;\\n}\\n\\n.media-block {\\n  width: 100%;\\n  min-height: 14rem;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  align-content: space-between;\\n  justify-content: space-around;\\n}\\n\\n\\n.ico-wrapper {\\n  width: 25%;\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/NavBarDOM.js":
/*!**************************!*\
  !*** ./src/NavBarDOM.js ***!
  \**************************/
/*! exports provided: navBarDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navBarDom\", function() { return navBarDom; });\n/* harmony import */ var _tabContentDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabContentDOM */ \"./src/tabContentDOM.js\");\n\r\n\r\nconst navBarDom = (function nvbar() {\n  function createNav(parent) {\r\n    const NavBar = document.createElement('nav');\r\n    NavBar.setAttribute('class', 'navbar navbar-dark fixed-top');\r\n    parent.appendChild(NavBar);\r\n\r\n    const navTabs = document.createElement('nav');\r\n    navTabs.setAttribute('class', 'nav nav-tabs nav-stacked');\r\n    NavBar.appendChild(navTabs);\r\n\r\n    const anchor1 = document.createElement('a');\r\n    anchor1.setAttribute('class', 'nav-link');\r\n    anchor1.setAttribute('href', '#home');\r\n    anchor1.textContent = 'Home';\r\n    anchor1.onclick = _tabContentDOM__WEBPACK_IMPORTED_MODULE_0__[\"tabcontent\"].createTabHome;\r\n    navTabs.appendChild(anchor1);\r\n\r\n    const anchor2 = document.createElement('a');\r\n    anchor2.setAttribute('class', 'nav-link');\r\n    anchor2.setAttribute('href', '#menu-tab');\r\n    anchor2.textContent = 'Menu';\r\n    anchor2.onclick = _tabContentDOM__WEBPACK_IMPORTED_MODULE_0__[\"tabcontent\"].createTabMenu;\r\n    navTabs.appendChild(anchor2);\r\n\r\n    const anchor3 = document.createElement('a');\r\n    anchor3.setAttribute('class', 'nav-link');\r\n    anchor3.setAttribute('href', '#contact-tab');\r\n    anchor3.textContent = 'Conctact us';\r\n    anchor3.onclick = _tabContentDOM__WEBPACK_IMPORTED_MODULE_0__[\"tabcontent\"].createTabContact;\r\n    navTabs.appendChild(anchor3);\r\n\r\n    const logoCandas = document.createElement('a');\r\n    logoCandas.setAttribute('class', 'navbar-brand');\r\n    logoCandas.setAttribute('href', '#');\r\n    NavBar.appendChild(logoCandas);\r\n\r\n    const imgLogo = document.createElement('img');\r\n    imgLogo.setAttribute('src', '../imag/logo.png');\r\n    // imgLogo.src = logoImg;\r\n    logoCandas.appendChild(imgLogo);\r\n\r\n    _tabContentDOM__WEBPACK_IMPORTED_MODULE_0__[\"tabcontent\"].createTabDisplay(parent);\r\n    _tabContentDOM__WEBPACK_IMPORTED_MODULE_0__[\"tabcontent\"].createTabHome();\r\n  }\r\n\r\n  return { createNav };\r\n}());\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/NavBarDOM.js?");

/***/ }),

/***/ "./src/contactDOM.js":
/*!***************************!*\
  !*** ./src/contactDOM.js ***!
  \***************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\nconst contact = (function contacto() {\r\n  function putForm(parent) {\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.setAttribute('class', 'container container-fluid');\r\n    contactContainer.setAttribute('id', 'contact-info');\r\n    parent.appendChild(contactContainer);\r\n\r\n    const contactRow = document.createElement('div');\r\n    contactRow.setAttribute('class', 'row');\r\n    contactContainer.appendChild(contactRow);\r\n\r\n    const contactCol1 = document.createElement('div');\r\n    contactCol1.setAttribute('class', 'col-sm-12 col-md-6');\r\n    contactCol1.setAttribute('id', 'cntc-media-col');\r\n    contactRow.appendChild(contactCol1);\r\n\r\n    const mediaRow = document.createElement('div');\r\n    mediaRow.setAttribute('class', 'row');\r\n    mediaRow.setAttribute('id', 'adress-card');\r\n    contactCol1.appendChild(mediaRow);\r\n\r\n    const adressDiv = document.createElement('div');\r\n    adressDiv.setAttribute('class', 'card card-18rem');\r\n    mediaRow.appendChild(adressDiv);\r\n\r\n    const addBody = document.createElement('div');\r\n    addBody.setAttribute('class', 'card-body');\r\n    adressDiv.appendChild(addBody);\r\n\r\n    const addTitle1 = document.createElement('h5');\r\n    addTitle1.setAttribute('class', 'card-title');\r\n    addTitle1.textContent = 'Adress';\r\n    adressDiv.appendChild(addTitle1);\r\n\r\n    const addTitle2 = document.createElement('h6');\r\n    addTitle2.setAttribute('class', 'card-subtitle mb-2 text-muted');\r\n    addTitle2.textContent = 'We will be happyto serve you at:';\r\n    adressDiv.appendChild(addTitle2);\r\n\r\n    const adressText = document.createElement('p');\r\n    adressText.setAttribute('class', 'card-text adress-text');\r\n    adressText.textContent = 'Zaragoza ave. #75, Colonia Centro. Parral, Chihuahua, MX.';\r\n    adressDiv.appendChild(adressText);\r\n\r\n    const mediaRow2 = document.createElement('div');\r\n    mediaRow2.setAttribute('class', 'row');\r\n    mediaRow2.setAttribute('id', 'icons-div');\r\n    contactCol1.appendChild(mediaRow2);\r\n\r\n    const mediaBlock = document.createElement('div');\r\n    mediaBlock.setAttribute('class', 'media-block');\r\n    mediaRow2.appendChild(mediaBlock);\r\n\r\n    const icoWrap1 = document.createElement('div');\r\n    icoWrap1.setAttribute('class', 'ico-wrapper');\r\n    mediaBlock.appendChild(icoWrap1);\r\n\r\n    const icon1 = document.createElement('a');\r\n    icon1.setAttribute('class', 'fa fa-facebook icon-link');\r\n    icon1.setAttribute('href', '#');\r\n    icoWrap1.appendChild(icon1);\r\n\r\n    const icoWrap2 = document.createElement('div');\r\n    icoWrap2.setAttribute('class', 'ico-wrapper');\r\n    mediaBlock.appendChild(icoWrap2);\r\n\r\n    const icon2 = document.createElement('a');\r\n    icon2.setAttribute('class', 'fa fa-twitter icon-link');\r\n    icon2.setAttribute('href', '#');\r\n    icoWrap2.appendChild(icon2);\r\n\r\n    const icoWrap3 = document.createElement('div');\r\n    icoWrap3.setAttribute('class', 'ico-wrapper');\r\n    mediaBlock.appendChild(icoWrap3);\r\n\r\n    const icon3 = document.createElement('a');\r\n    icon3.setAttribute('class', 'fa fa-whatsapp icon-link');\r\n    icon3.setAttribute('href', '#');\r\n    icoWrap3.appendChild(icon3);\r\n\r\n    // col 2 FORM\r\n\r\n    const contactCol2 = document.createElement('div');\r\n    contactCol2.setAttribute('class', 'col-sm-12 col-md-6');\r\n    contactCol2.setAttribute('id', 'cntc-form-col');\r\n    contactRow.appendChild(contactCol2);\r\n\r\n    const formdiv = document.createElement('form');\r\n    formdiv.setAttribute('id', 'cntc-form');\r\n    contactCol2.appendChild(formdiv);\r\n\r\n    const group1 = document.createElement('div');\r\n    group1.setAttribute('class', 'form-group');\r\n    formdiv.appendChild(group1);\r\n\r\n    const label1 = document.createElement('label');\r\n    label1.setAttribute('for', 'InputEmail1');\r\n    label1.textContent = 'Email address';\r\n    group1.appendChild(label1);\r\n\r\n    const input1 = document.createElement('input');\r\n    input1.setAttribute('type', 'email');\r\n    input1.setAttribute('class', 'form-control');\r\n    input1.setAttribute('id', 'InputEmail1');\r\n    input1.setAttribute('aria-describedby', 'emailHelp');\r\n    input1.setAttribute('placeholder', 'email');\r\n    group1.appendChild(input1);\r\n\r\n    const small1 = document.createElement('small');\r\n    small1.setAttribute('id', 'emailHelp');\r\n    small1.setAttribute('class', 'form-text text-muted');\r\n    small1.textContent = \">We'll never share your email with anyone else.\";\r\n    group1.appendChild(small1);\r\n\r\n    const group2 = document.createElement('div');\r\n    group2.setAttribute('class', 'form-group');\r\n    formdiv.appendChild(group2);\r\n\r\n    const label2 = document.createElement('label');\r\n    label2.setAttribute('for', 'InputPassword1');\r\n    label2.textContent = 'Password';\r\n    group2.appendChild(label2);\r\n\r\n    const input2 = document.createElement('input');\r\n    input2.setAttribute('type', 'password');\r\n    input2.setAttribute('class', 'form-control');\r\n    input2.setAttribute('id', 'InputPassword1');\r\n    input2.setAttribute('placeholder', 'Password');\r\n    group2.appendChild(input2);\r\n\r\n    const chkGroup = document.createElement('div');\r\n    chkGroup.setAttribute('class', 'form-check');\r\n    formdiv.appendChild(chkGroup);\r\n\r\n    const chkInput = document.createElement('input');\r\n    chkInput.setAttribute('type', 'checkbox');\r\n    chkInput.setAttribute('class', 'form-check-input');\r\n    chkInput.setAttribute('id', 'Check1');\r\n    chkGroup.appendChild(chkInput);\r\n\r\n    const labelChk = document.createElement('label');\r\n    labelChk.setAttribute('for', 'Check1');\r\n    labelChk.textContent = 'Send me information about events and promotions.';\r\n    chkGroup.appendChild(labelChk);\r\n\r\n    const group3 = document.createElement('div');\r\n    group3.setAttribute('class', 'form-group');\r\n    formdiv.appendChild(group3);\r\n\r\n    const label3 = document.createElement('label');\r\n    label3.setAttribute('for', 'FormControlTextarea1');\r\n    label3.textContent = 'We want to know your comentaries!';\r\n    group3.appendChild(label3);\r\n\r\n    const input3 = document.createElement('textarea');\r\n    input3.setAttribute('class', 'form-control');\r\n    input3.setAttribute('id', 'FormControlTextarea1');\r\n    input3.setAttribute('rows', '3');\r\n    group3.appendChild(input3);\r\n\r\n    const btnsbm = document.createElement('button');\r\n    btnsbm.setAttribute('class', 'btn btn-primary');\r\n    btnsbm.setAttribute('type', 'submit');\r\n    btnsbm.textContent = 'Submit';\r\n    formdiv.appendChild(btnsbm);\r\n  }\r\n\r\n  return { putForm };\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/contactDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_fixed_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/fixed.css */ \"./css/fixed.css\");\n/* harmony import */ var _css_fixed_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_fixed_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n_load__WEBPACK_IMPORTED_MODULE_0__[\"pageLoader\"].pageLoad();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/landingDOM.js":
/*!***************************!*\
  !*** ./src/landingDOM.js ***!
  \***************************/
/*! exports provided: landing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"landing\", function() { return landing; });\nconst landing = (function land() {\r\n  function putBackgr(parent) {\r\n    const landDiv = document.createElement('div');\r\n    landDiv.setAttribute('class', 'video-background');\r\n    parent.appendChild(landDiv);\r\n\r\n    const videoWrap = document.createElement('div');\r\n    videoWrap.setAttribute('class', 'video-wrap');\r\n    landDiv.appendChild(videoWrap);\r\n\r\n    const videoEle = document.createElement('div');\r\n    videoEle.setAttribute('class', 'video');\r\n    videoWrap.appendChild(videoEle);\r\n\r\n    const videoFile = document.createElement('video');\r\n    videoFile.setAttribute('id', 'bgvid');\r\n    videoFile.setAttribute('width', '320');\r\n    videoFile.setAttribute('heigth', '240');\r\n    videoFile.autoplay = true;\r\n    videoFile.loop = true;\r\n    videoFile.muted = true;\r\n    videoFile.src = '../imag/grill.mp4';\r\n    videoEle.appendChild(videoFile);\r\n  }\r\n\r\n  function putPresentation(parent) {\r\n    const presentDiv = document.createElement('div');\r\n    presentDiv.setAttribute('id', 'presentation');\r\n    presentDiv.setAttribute('class', 'row justify-content-center');\r\n    parent.appendChild(presentDiv);\r\n\r\n    const wellcomeSect = document.createElement('div');\r\n    wellcomeSect.setAttribute('id', 'wellcome-section');\r\n    wellcomeSect.setAttribute('class', 'col-md-8 text-center');\r\n    presentDiv.appendChild(wellcomeSect);\r\n\r\n    const h1WellCome = document.createElement('h1');\r\n    h1WellCome.innerHTML = 'Parral, Cafe & Grill';\r\n    wellcomeSect.appendChild(h1WellCome);\r\n\r\n    const leadWellcome = document.createElement('p');\r\n    leadWellcome.setAttribute('class', 'lead');\r\n    leadWellcome.textContent = 'The Best Place to Eat, Drink and learn JavaScrip + Bootstrap 4!';\r\n    wellcomeSect.appendChild(leadWellcome);\r\n\r\n    const anchorWellcome = document.createElement('a');\r\n    anchorWellcome.setAttribute('class', 'btn btn-secondary btn-sm');\r\n    anchorWellcome.setAttribute('href', '#menu-tab');\r\n    anchorWellcome.textContent = 'Wellcome';\r\n    wellcomeSect.appendChild(anchorWellcome);\r\n  }\r\n\r\n  return { putBackgr, putPresentation };\r\n}());\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/landingDOM.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/*! exports provided: pageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoader\", function() { return pageLoader; });\n/* harmony import */ var _NavBarDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBarDOM */ \"./src/NavBarDOM.js\");\n\r\n\r\nconst pageLoader = (function ld() {\r\n  function pageLoad() {\r\n    const parentAll = document.getElementById('content');\r\n\r\n    _NavBarDOM__WEBPACK_IMPORTED_MODULE_0__[\"navBarDom\"].createNav(parentAll);\r\n    // tabcontent.createTabs(parentAll);\r\n  }\r\n\r\n  return { pageLoad };\r\n}());\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: Speciality, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Speciality\", function() { return Speciality; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _menuDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuDOM */ \"./src/menuDOM.js\");\n\r\n\r\nclass Speciality {\r\n  constructor(name, price, description, imgfile) {\r\n    this.name = name;\r\n    this.price = price;\r\n    this.description = description;\r\n    this.imgFile = imgfile;\r\n  }\r\n\r\n  getName() {\r\n    return this.name;\r\n  }\r\n\r\n  getPrice() {\r\n    return this.price;\r\n  }\r\n\r\n  getDescription() {\r\n    return this.description;\r\n  }\r\n\r\n  getFile() {\r\n    return this.imgFile;\r\n  }\r\n}\r\n\r\nconst menu = (function mnu() {\r\n  let menuItems = [];\r\n\r\n  function seedMenu() {\r\n    menuItems = [];\r\n    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled meat', '../imag/cardImgHam.png'));\r\n    menuItems.push(new Speciality('Parral Atascate!', '$ 9.95', 'All a great programmer needs to grow!', '../imag/cardImgAtascate.png'));\r\n    menuItems.push(new Speciality('Santa Barbara DietHam', '$ 3.95', 'Deliciius quater pound grilled meat', '../imag/cardImgHam2.png'));\r\n    menuItems.push(new Speciality('Triplay Tacos!', '$ 4.95', 'Traditional Mining worker Tacos!', '../imag/cardImgTacos.png'));\r\n    menuItems.push(new Speciality('Parral WakeUP!', '$ 4.95', 'The best way to start a healthy day', '../imag/cardImgBreakFst.png'));\r\n    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled mea', '../imag/cardImgHam2.png'));\r\n    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled mea', '../imag/cardImgAtascate.png'));\r\n    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled mea', '../imag/cardImgHam.png'));\r\n  }\r\n\r\n  function displayMenu(parent) {\r\n    let i = 0;\r\n    for (i = 0; i < menuItems.length; i += 1) {\r\n      _menuDOM__WEBPACK_IMPORTED_MODULE_0__[\"drawMenu\"].putMenuItem(menuItems[i], parent);\r\n    }\r\n  }\r\n\r\n  return { seedMenu, displayMenu };\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/menuDOM.js":
/*!************************!*\
  !*** ./src/menuDOM.js ***!
  \************************/
/*! exports provided: drawMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawMenu\", function() { return drawMenu; });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\nconst drawMenu = (function putmnu() {\r\n  function putMenuItem(item, parent) {\r\n    const colDiv = document.createElement('div');\r\n    colDiv.setAttribute('class', 'col-lg-3 col-md-4 col-sm-5');\r\n    parent.appendChild(colDiv);\r\n    const carDiv = document.createElement('div');\r\n    carDiv.setAttribute('class', 'card dish-card');\r\n    colDiv.appendChild(carDiv);\r\n    const imgItm = document.createElement('img');\r\n    imgItm.setAttribute('class', 'card-img-top');\r\n    imgItm.setAttribute('src', item.getFile());\r\n    imgItm.setAttribute('alt', 'Card image cap');\r\n    carDiv.appendChild(imgItm);\r\n    const carBody = document.createElement('div');\r\n    carBody.setAttribute('class', 'card-body');\r\n    carDiv.appendChild(carBody);\r\n    const carItemName = document.createElement('h5');\r\n    carItemName.setAttribute('class', 'card-title');\r\n    carItemName.textContent = item.getName();\r\n    carBody.appendChild(carItemName);\r\n    const carText = document.createElement('p');\r\n    carText.setAttribute('class', 'card-text');\r\n    carText.textContent = item.getDescription();\r\n    carBody.appendChild(carText);\r\n    const carUl = document.createElement('ul');\r\n    carUl.setAttribute('class', 'list-group list-group-flush');\r\n    carDiv.appendChild(carUl);\r\n    const carli = document.createElement('li');\r\n    carli.setAttribute('class', 'list-group-item');\r\n    carli.textContent = item.getPrice();\r\n    carUl.appendChild(carli);\r\n    const carBody2 = document.createElement('div');\r\n    carBody2.setAttribute('class', 'card-body');\r\n    carDiv.appendChild(carBody2);\r\n    const anchor1 = document.createElement('a');\r\n    anchor1.setAttribute('href', '#');\r\n    anchor1.setAttribute('class', 'card-link');\r\n    anchor1.textContent = 'No Diee stuff';\r\n    carBody2.appendChild(anchor1);\r\n    const anchor2 = document.createElement('a');\r\n    anchor2.setAttribute('href', '#');\r\n    anchor2.setAttribute('class', 'card-link');\r\n    anchor2.textContent = 'No Diee stuff';\r\n    carBody2.appendChild(anchor2);\r\n  }\r\n\r\n  function addPanelMenu() {\r\n    _menu__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].seedMenu();\r\n    const parent = document.getElementById('menu-row');\r\n    _menu__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].displayMenu(parent);\r\n  }\r\n\r\n  return { addPanelMenu, putMenuItem };\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/menuDOM.js?");

/***/ }),

/***/ "./src/tabContentDOM.js":
/*!******************************!*\
  !*** ./src/tabContentDOM.js ***!
  \******************************/
/*! exports provided: tabcontent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabcontent\", function() { return tabcontent; });\n/* harmony import */ var _landingDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingDOM */ \"./src/landingDOM.js\");\n/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video */ \"./src/video.js\");\n/* harmony import */ var _menuDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuDOM */ \"./src/menuDOM.js\");\n/* harmony import */ var _contactDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactDOM */ \"./src/contactDOM.js\");\n\r\n\r\n\r\n\r\n\r\nconst tabcontent = (function tbCont() {\n  function createTabDisplay(parent) {\r\n    const tabContent = document.createElement('div');\r\n    tabContent.setAttribute('id', 'tab-content');\r\n    parent.appendChild(tabContent);\n  }\r\n\r\n  function deleteTabContent() {\r\n    const tabContent = document.getElementById('tab-content');\r\n    while (tabContent.firstChild) {\r\n      tabContent.firstChild.remove();\r\n    }\r\n    tabContent.innerHTML = '';\r\n  }\r\n\r\n  function createTabHome() {\r\n    const tabContent = document.getElementById('tab-content');\r\n    deleteTabContent();\r\n    const tabHome = document.createElement('div');\r\n    tabHome.setAttribute('id', 'home');\r\n    tabHome.setAttribute('class', 'tab-pane active');\r\n    tabHome.setAttribute('role', 'tabpanel');\r\n    tabContent.appendChild(tabHome);\r\n    // const parentLanding = document.getElementById('home');\r\n    _landingDOM__WEBPACK_IMPORTED_MODULE_0__[\"landing\"].putBackgr(tabHome);\r\n    _landingDOM__WEBPACK_IMPORTED_MODULE_0__[\"landing\"].putPresentation(tabHome);\r\n    _video__WEBPACK_IMPORTED_MODULE_1__[\"videoLooper\"].videoEndListener();\r\n  }\r\n\r\n  function createTabMenu() {\r\n    const tabContent = document.getElementById('tab-content');\r\n    deleteTabContent();\r\n    const tabMenu = document.createElement('div');\r\n    tabMenu.setAttribute('id', 'menu-tab');\r\n    tabMenu.setAttribute('class', 'tab-pane');\r\n    tabMenu.setAttribute('role', 'tabpanel');\r\n    tabContent.appendChild(tabMenu);\r\n\r\n    const menuSect = document.createElement('div');\r\n    menuSect.setAttribute('class', 'menu-section');\r\n    menuSect.setAttribute('id', 'menu-table');\r\n    tabMenu.appendChild(menuSect);\r\n\r\n    const rewMenu = document.createElement('div');\r\n    rewMenu.setAttribute('class', 'row');\r\n    rewMenu.setAttribute('id', 'menu-row');\r\n    menuSect.appendChild(rewMenu);\r\n\r\n    _menuDOM__WEBPACK_IMPORTED_MODULE_2__[\"drawMenu\"].addPanelMenu();\r\n  }\r\n\r\n  function createTabContact() {\r\n    const tabContent = document.getElementById('tab-content');\r\n    deleteTabContent();\r\n    const tabContact = document.createElement('div');\r\n    tabContact.setAttribute('id', 'contact-tab');\r\n    tabContact.setAttribute('class', 'tab-pane');\r\n    tabContact.setAttribute('role', 'tabpanel');\r\n    tabContent.appendChild(tabContact);\r\n    // const parentContact = document.getElementById('contact-tab');\r\n    _contactDOM__WEBPACK_IMPORTED_MODULE_3__[\"contact\"].putForm(tabContact);\r\n  }\r\n\r\n  return {\n    createTabHome, createTabMenu, createTabContact, createTabDisplay,\n  };\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/tabContentDOM.js?");

/***/ }),

/***/ "./src/video.js":
/*!**********************!*\
  !*** ./src/video.js ***!
  \**********************/
/*! exports provided: videoLooper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoLooper\", function() { return videoLooper; });\nconst videoLooper = (function vd() {\n  function looper(elem) {\r\n    if (elem.currentTarget.currentTime >= 4) {\r\n      elem.currentTarget.currentTime = 1;\r\n    // elem.play();\r\n    }\r\n  }\r\n\r\n  function videoEndListener() {\r\n    const elem = document.getElementById('bgvid');\r\n    elem.addEventListener('timeupdate', looper);\r\n  }\r\n\r\n  return { videoEndListener, looper };\r\n}());\r\n\n\n//# sourceURL=webpack:///./src/video.js?");

/***/ })

/******/ });