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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_LoadFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/LoadFile */ \"./src/components/LoadFile.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\r\n \r\n\r\n\r\n//console.log(VAGNum);\r\n\r\nvar button = document.getElementById(\"button\").onclick = function(){\r\n    var VAGNum = document.getElementById(\"VAGNum\").value;\r\n    if (!VAGNum) console.log(\"Insert text!\");\r\n\r\n    var firstTwoLettersVAG = VAGNum.substring(0,2);\r\n    console.log(firstTwoLettersVAG);\r\n\r\n    var driverList = document.getElementById(\"driverType\");\r\n    var selectedDriver = driverList.options[driverList.selectedIndex].value;\r\n\r\n    var publicGeneralPath = `${_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].source}/${firstTwoLettersVAG}-${selectedDriver}.lbl`;\r\n    var file = Object(_components_LoadFile__WEBPACK_IMPORTED_MODULE_0__[\"LoadFile\"])(publicGeneralPath);\r\n    if (!file){\r\n        throw \"No general file!\";\r\n    }\r\n\r\n    console.log(selectedDriver);\r\n    console.log(VAGNum);\r\n\r\n    console.log(file);\r\n    //console.log(VAGNum, driverType);\r\n\r\n    //var VAGNum = \"441-907-557-D\";\r\n    var matches2 = file.match(new RegExp(VAGNum, \"is\"));\r\n    if (!matches2){\r\n        throw \"No such VAG num in label file!\";\r\n    }\r\n\r\n    console.log(matches2[0]);\r\n\r\n\r\n    var regExp1 = /(.{3}-.{3}-.{3})(.{0,5})\\.(lbl|clb|LBL|CLB)/gi;//first part of redirect - name of label file in redirect file xx-yy\r\n    var matches1 = file.match(regExp1);\r\n    var matches0Len = matches1[0].length;\r\n    var match2 = matches1[0].substring(0, matches0Len - 3) + matches1[0].substring(matches0Len - 3).toLowerCase();\r\n    console.log(match2);\r\n\r\n    if (match2 && matches2){\r\n        var label = Object(_components_LoadFile__WEBPACK_IMPORTED_MODULE_0__[\"LoadFile\"])(`${_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].source}/${match2}`);\r\n        if (!label){\r\n            throw \"File not found!\";\r\n        }\r\n        console.log(label);\r\n        //parsing the label file - TBC\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n// var directFileNameToLoad = settings.source + `/${match[0]}`;\r\n// var fileToLoad = LoadFile(directFileNameToLoad);\r\n\r\n//console.log(fileToLoad);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/LoadFile.js":
/*!************************************!*\
  !*** ./src/components/LoadFile.js ***!
  \************************************/
/*! exports provided: LoadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadFile\", function() { return LoadFile; });\nconst LoadFile = (source) =>{\r\n    var labelFile = new XMLHttpRequest();\r\n        labelFile.open(\"GET\", source, false); //request is synchronous, otherwise I couldn't saved answer content to variable so simple\r\n        labelFile.send(null);\r\n    \r\n   \r\n        if (labelFile.readyState== 4 && labelFile.status == 200) {\r\n            var content = labelFile.responseText;\r\n            return content;\r\n        } else throw 'No such file!';\r\n}\n\n//# sourceURL=webpack:///./src/components/LoadFile.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\nconst settings = {\r\n    \"source\" : \"http://klosik007.cba.pl/Labels\"\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ })

/******/ });