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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CreateTablesOnButtonClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CreateTablesOnButtonClick */ \"./src/components/CreateTablesOnButtonClick.js\");\n/* harmony import */ var _components_DropHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DropHandlers */ \"./src/components/DropHandlers.js\");\n\n\n\nvar button = document.getElementById(\"button\").onclick = function(){\n    Object(_components_CreateTablesOnButtonClick__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nvar dragDivCreate = document.createElement(\"div\");\nvar dragDivAppend = document.body.appendChild(dragDivCreate).setAttribute(\"id\", \"drop_zone\");\n\ndocument.getElementById(\"drop_zone\").innerText = \"Drag file here to transform it\";\ndocument.getElementById(\"drop_zone\").ondragover = _components_DropHandlers__WEBPACK_IMPORTED_MODULE_1__[\"dragOverHandler\"];\ndocument.getElementById(\"drop_zone\").ondrop = _components_DropHandlers__WEBPACK_IMPORTED_MODULE_1__[\"createTableByDrop\"];\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/CreateTable.js":
/*!***************************************!*\
  !*** ./src/components/CreateTable.js ***!
  \***************************************/
/*! exports provided: CreateTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTable\", function() { return CreateTable; });\nclass CreateTable {\r\n    constructor(object, type, label){\r\n        this.object = object; //parsed file in variable (given as object with arrays)\r\n        this.type = type; //look at switch case statement\r\n        this.label = label; //VAG number here \r\n    }\r\n\r\n    static createLabelCaption(label){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var result = document.body.appendChild(div).setAttribute(\"id\", \"label\");\r\n    \r\n        var title = document.createElement(\"h1\");\r\n        var putTitle = document.getElementById(\"label\").insertAdjacentElement(\"afterbegin\", title);\r\n        putTitle.setAttribute(\"id\", \"title\");\r\n        document.getElementById(\"title\").innerText = `Label ${label}`;\r\n    }\r\n    \r\n    functionsExists(type){\r\n        switch (type){\r\n            case 'Param':{      \r\n                if((this.object.ParamNames[0]).length == 0 || \r\n                (this.object.ParamNames[1]).length == 0 || \r\n                (this.object.ParamNames[2]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            case 'CO':{\r\n                if((this.object.CONames[0]).length == 0) return false\r\n                else return true;\r\n            }\r\n            case 'BS':{\r\n                if((this.object.BSSettingsNames[0]).length == 0 ||  \r\n                    (this.object.BSSettingsNames[1]).length == 0 || \r\n                    (this.object.BSSettingsNames[2]).length == 0){\r\n                        return false\r\n                    }else return true;\r\n            }\r\n            case 'AD':{\r\n                if((this.object.AdaptNames[0]).length == 0 || \r\n                (this.object.AdaptNames[1]).length == 0 || \r\n                (this.object.AdaptNames[2]).length == 0){\r\n                    return false;\r\n                } else return true;      \r\n            }\r\n            case 'LC':{\r\n                if((this.object.LCNames[0]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            case 'SelAC':{\r\n                if((this.object.SelACNames[0]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            case 'SA':{\r\n                if ((this.object.SANames[0]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            //default: throw 'Invalid parameter!';\r\n        };\r\n    }\r\n\r\n    // createTable(){\r\n    //     var div = document.createElement(\"div\");\r\n    \r\n    //     var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n    //     var table = document.createElement(\"table\");\r\n    //     var putTable = document.getElementById(this.type);\r\n    //     putTable.setAttribute(\"id\", \"resultTable\");\r\n\r\n    //     table.style.border = \"2px solid #456789\";\r\n    //     table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n    //     var printTable = (labelsHead, array) => {\r\n    //         var row = table.insertRow();\r\n\r\n    //         for (var i = 0; i < labelsHead.length; i++) {\r\n    //             var headerCell = document.createElement(\"th\");\r\n    //             headerCell.innerHTML = labelsHead[i];\r\n    //             row.appendChild(headerCell);\r\n    //         }\r\n\r\n    //         var tableLen = array[0].length;\r\n    //         var tableHigh = array.length;\r\n    //         console.log(tableLen, tableHigh);\r\n    //         for(var i = 0; i < tableLen; i++){\r\n    //             var tr = table.insertRow();\r\n    //             // var td2 = tr.insertCell();\r\n    //             //     td2.appendChild(document.createTextNode(object[i][j]));\r\n    //             //     td2.style.border = \"1px solid #456\";    \r\n    //             // th1.appendChild(document.createTextNode('Adaptation value'));\r\n    //             // th1.style.border = \"1px solid #456\";\r\n    //             for (var j = 0; j < tableHigh; j++){\r\n    //                 var td = tr.insertCell();\r\n    //                 td.appendChild(document.createTextNode(array[j][i]));\r\n    //                 td.style.border = \"1px solid #456\";    \r\n    //             }\r\n    //         }\r\n\r\n    //         putTable.insertAdjacentElement(\"beforeend\", table);\r\n    //     }\r\n\r\n    //     switch (this.type){\r\n    //         case 'Param':{      \r\n    //             printTable([this.object.ParamGroupNames[0], this.object.ParamGroupNames[1], this.object.ParamGroupNames[2]],\r\n    //                        [this.object.ParamNames[0], this.object.ParamNames[1], this.object.ParamNames[2]]);\r\n    //         }\r\n    //         case 'CO':{\r\n    //             printTable([], [this.object.CONames[0]]);\r\n    //         }\r\n    //         case 'BS':{\r\n    //             printTable([this.object.BSGroupNames[0], this.object.BSGroupNames[1], this.object.BSGroupNames[2]],\r\n    //                        [this.object.BSSettingsNames[0], this.object.BSSettingsNames[1], this.object.BSSettingsNames[2]]);\r\n    //         }\r\n    //         case 'AD':{\r\n    //             printTable([this.object.AdaptGroupNames[0], this.object.AdaptGroupNames[1], this.object.AdaptGroupNames[2]],\r\n    //                        [this.object.AdaptNames[0], this.object.AdaptNames[1], this.object.AdaptNames[2]]);\r\n    //         }\r\n    //         case 'LC':{\r\n    //             printTable([1], [this.object.LCNames[0]]);\r\n    //         }\r\n    //         case 'SelAC':{\r\n    //             printTable([1,1], [this.object.SelACNames[0]]);\r\n    //         }\r\n    //         case 'SA':{\r\n    //             printTable([1], [this.object.SANames[0]]);\r\n    //         }\r\n    //         //default: throw 'Invalid parameter!';\r\n    //     };\r\n        \r\n\r\n    }\r\n\r\n \n\n//# sourceURL=webpack:///./src/components/CreateTable.js?");

/***/ }),

/***/ "./src/components/CreateTableAD.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableAD.js ***!
  \*****************************************/
/*! exports provided: CreateTableAD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableAD\", function() { return CreateTableAD; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableAD extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableAD(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableAD\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n        //ar printTable = (labelsHead, array) => {\r\n            var row = table.insertRow();\r\n\r\n            // for (var i = 0; i < labelsHead.length; i++) {\r\n            //     var headerCell = document.createElement(\"th\");\r\n            //     headerCell.innerHTML = labelsHead[i];\r\n            //     row.appendChild(headerCell);\r\n            // }\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                // var td2 = tr.insertCell();\r\n                //     td2.appendChild(document.createTextNode(object[i][j]));\r\n                //     td2.style.border = \"1px solid #456\";    \r\n                // th1.appendChild(document.createTextNode('Adaptation value'));\r\n                // th1.style.border = \"1px solid #456\";\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n\r\n            var cells = document.getElementById(\"resultTableAD\").getElementsByTagName(\"td\");\r\n            for (var i = 0; i < cells.length; i++) {\r\n                if (cells[i].innerHTML == \"0\" || cells[i].innerHTML == \"000\" ) {\r\n                    cells[i].style.backgroundColor = \"red\";\r\n                    cells[i-1].style.backgroundColor = \"red\";\r\n                    cells[i+1].style.backgroundColor = \"red\";\r\n                }\r\n            }\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableAD.js?");

/***/ }),

/***/ "./src/components/CreateTableBS.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableBS.js ***!
  \*****************************************/
/*! exports provided: CreateTableBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableBS\", function() { return CreateTableBS; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableBS extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableBS(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableBS\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n        //ar printTable = (labelsHead, array) => {\r\n            var row = table.insertRow();\r\n\r\n            // for (var i = 0; i < labelsHead.length; i++) {\r\n            //     var headerCell = document.createElement(\"th\");\r\n            //     headerCell.innerHTML = labelsHead[i];\r\n            //     row.appendChild(headerCell);\r\n            // }\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                // var td2 = tr.insertCell();\r\n                //     td2.appendChild(document.createTextNode(object[i][j]));\r\n                //     td2.style.border = \"1px solid #456\";    \r\n                // th1.appendChild(document.createTextNode('Adaptation value'));\r\n                // th1.style.border = \"1px solid #456\";\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n\r\n            var cells = document.getElementById(\"resultTableBS\").getElementsByTagName(\"td\");\r\n            for (var i = 0; i < cells.length; i++) {\r\n                if (cells[i].innerHTML == \"0\" || cells[i].innerHTML == \"000\" ) {\r\n                    cells[i].style.backgroundColor = \"red\";\r\n                    cells[i-1].style.backgroundColor = \"red\";\r\n                    cells[i+1].style.backgroundColor = \"red\";\r\n                }\r\n            }\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableBS.js?");

/***/ }),

/***/ "./src/components/CreateTableCO.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableCO.js ***!
  \*****************************************/
/*! exports provided: CreateTableCO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableCO\", function() { return CreateTableCO; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableCO extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableCO(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableCO\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n        //ar printTable = (labelsHead, array) => {\r\n            //var row = table.insertRow();\r\n\r\n            // for (var i = 0; i < labelsHead.length; i++) {\r\n            //     var headerCell = document.createElement(\"th\");\r\n            //     headerCell.innerHTML = labelsHead[i];\r\n            //     row.appendChild(headerCell);\r\n            // }\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                // var td2 = tr.insertCell();\r\n                //     td2.appendChild(document.createTextNode(object[i][j]));\r\n                //     td2.style.border = \"1px solid #456\";    \r\n                // th1.appendChild(document.createTextNode('Adaptation value'));\r\n                // th1.style.border = \"1px solid #456\";\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableCO.js?");

/***/ }),

/***/ "./src/components/CreateTableLC.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableLC.js ***!
  \*****************************************/
/*! exports provided: CreateTableLC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableLC\", function() { return CreateTableLC; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableLC extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableLC(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableLC\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n        //ar printTable = (labelsHead, array) => {\r\n            var row = table.insertRow();\r\n\r\n            // for (var i = 0; i < labelsHead.length; i++) {\r\n            //     var headerCell = document.createElement(\"th\");\r\n            //     headerCell.innerHTML = labelsHead[i];\r\n            //     row.appendChild(headerCell);\r\n            // }\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                // var td2 = tr.insertCell();\r\n                //     td2.appendChild(document.createTextNode(object[i][j]));\r\n                //     td2.style.border = \"1px solid #456\";    \r\n                // th1.appendChild(document.createTextNode('Adaptation value'));\r\n                // th1.style.border = \"1px solid #456\";\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableLC.js?");

/***/ }),

/***/ "./src/components/CreateTableParams.js":
/*!*********************************************!*\
  !*** ./src/components/CreateTableParams.js ***!
  \*********************************************/
/*! exports provided: CreateTableParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableParams\", function() { return CreateTableParams; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableParams extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    // boldParamNameGroup(text, regex){\r\n    //     if (match.length > 0){\r\n\r\n    //     }\r\n    // }\r\n\r\n    createTableParams(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableParams\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n        //ar printTable = (labelsHead, array) => {\r\n            var row = table.insertRow();\r\n\r\n            // for (var i = 0; i < labelsHead.length; i++) {\r\n            //     var headerCell = document.createElement(\"th\");\r\n            //     headerCell.innerHTML = labelsHead[i];\r\n            //     row.appendChild(headerCell);\r\n            // }\r\n\r\n            var tableLen = array[0].length;\r\n            var tableWidth = array.length;\r\n            console.log(tableLen, tableWidth);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                // var td2 = tr.insertCell();\r\n                //     td2.appendChild(document.createTextNode(object[i][j]));\r\n                //     td2.style.border = \"1px solid #456\";    \r\n                // th1.appendChild(document.createTextNode('Adaptation value'));\r\n                // th1.style.border = \"1px solid #456\";\r\n                for (var j = 0; j < tableWidth; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n\r\n            var cells = document.getElementById(\"resultTableParams\").getElementsByTagName(\"td\");\r\n            var rows = document.getElementById(\"resultTableParams\").getElementsByTagName(\"tr\");\r\n            console.log(cells);\r\n            console.log(rows);\r\n            var row = 1;\r\n            for (var i = 0; i < cells.length; i++) {\r\n                if (cells[i].innerHTML == \"0\" || cells[i].innerHTML == \"000\" ) {\r\n                    cells[i].style.backgroundColor = \"red\";\r\n                    cells[i-1].style.backgroundColor = \"red\";\r\n                    cells[i+1].style.backgroundColor = \"red\";\r\n                }\r\n            }\r\n\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableParams.js?");

/***/ }),

/***/ "./src/components/CreateTableSA.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableSA.js ***!
  \*****************************************/
/*! exports provided: CreateTableSA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableSA\", function() { return CreateTableSA; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableSA extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableSA(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableSA\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n        //ar printTable = (labelsHead, array) => {\r\n            //var row = table.insertRow();\r\n\r\n            // for (var i = 0; i < labelsHead.length; i++) {\r\n            //     var headerCell = document.createElement(\"th\");\r\n            //     headerCell.innerHTML = labelsHead[i];\r\n            //     row.appendChild(headerCell);\r\n            // }\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                // var td2 = tr.insertCell();\r\n                //     td2.appendChild(document.createTextNode(object[i][j]));\r\n                //     td2.style.border = \"1px solid #456\";    \r\n                // th1.appendChild(document.createTextNode('Adaptation value'));\r\n                // th1.style.border = \"1px solid #456\";\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableSA.js?");

/***/ }),

/***/ "./src/components/CreateTableSelAC.js":
/*!********************************************!*\
  !*** ./src/components/CreateTableSelAC.js ***!
  \********************************************/
/*! exports provided: CreateTableSelAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableSelAC\", function() { return CreateTableSelAC; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableSelAC extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableSelAC(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableSelAC\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n        //ar printTable = (labelsHead, array) => {\r\n            //var row = table.insertRow();\r\n\r\n            // for (var i = 0; i < labelsHead.length; i++) {\r\n            //     var headerCell = document.createElement(\"th\");\r\n            //     headerCell.innerHTML = labelsHead[i];\r\n            //     row.appendChild(headerCell);\r\n            // }\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                // var td2 = tr.insertCell();\r\n                //     td2.appendChild(document.createTextNode(object[i][j]));\r\n                //     td2.style.border = \"1px solid #456\";    \r\n                // th1.appendChild(document.createTextNode('Adaptation value'));\r\n                // th1.style.border = \"1px solid #456\";\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableSelAC.js?");

/***/ }),

/***/ "./src/components/CreateTablesOnButtonClick.js":
/*!*****************************************************!*\
  !*** ./src/components/CreateTablesOnButtonClick.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShowTables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowTables */ \"./src/components/ShowTables.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() =>{\r\n    var VAGNum = document.getElementById(\"VAGNum\").value;\r\n    console.log(VAGNum);\r\n\r\n    if (!VAGNum) console.log(\"Insert text!\");\r\n\r\n    var labelObject = CollectLabel(VAGNum);\r\n    console.log(labelObject);\r\n    Object(_ShowTables__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(VAGNum, labelObject);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/CreateTablesOnButtonClick.js?");

/***/ }),

/***/ "./src/components/DropHandlers.js":
/*!****************************************!*\
  !*** ./src/components/DropHandlers.js ***!
  \****************************************/
/*! exports provided: createTableByDrop, dragOverHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTableByDrop\", function() { return createTableByDrop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dragOverHandler\", function() { return dragOverHandler; });\n/* harmony import */ var _ShowTables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowTables */ \"./src/components/ShowTables.js\");\n/* harmony import */ var _ParseFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParseFile */ \"./src/components/ParseFile.js\");\n\r\n\r\n\r\nfunction createTableByDrop(ev) {\r\n  console.log('File(s) dropped');\r\n  ev.preventDefault();//prevent file being opened\r\n\r\n  var file = ev.dataTransfer.files[0];\r\n  console.log(file);\r\n  var reader = new FileReader();\r\n  reader.onload = function(evt) {\r\n      console.log(evt.target);\r\n      var text = evt.target.result;\r\n      document.getElementById(\"drop_zone\").innerText = text;\r\n      var labelObject = Object(_ParseFile__WEBPACK_IMPORTED_MODULE_1__[\"ParseFile\"])(text);\r\n      Object(_ShowTables__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(file.name, labelObject);\r\n  };\r\n\r\n  reader.readAsText(file);\r\n}\r\n\r\nfunction dragOverHandler(ev) {\r\n    console.log('File(s) in drop zone'); \r\n    ev.preventDefault();\r\n}\n\n//# sourceURL=webpack:///./src/components/DropHandlers.js?");

/***/ }),

/***/ "./src/components/GetMatches.js":
/*!**************************************!*\
  !*** ./src/components/GetMatches.js ***!
  \**************************************/
/*! exports provided: GetMatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetMatches\", function() { return GetMatches; });\nconst GetMatches = (string, regex, index) => {\r\n    index || (index = 1); // default to the first capturing group\r\n    var matches = [];\r\n    var match;\r\n    while (match = regex.exec(string)) {\r\n      matches.push(match[index]);\r\n    }\r\n    return matches;\r\n  };\r\n\n\n//# sourceURL=webpack:///./src/components/GetMatches.js?");

/***/ }),

/***/ "./src/components/ParseFile.js":
/*!*************************************!*\
  !*** ./src/components/ParseFile.js ***!
  \*************************************/
/*! exports provided: ParseFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParseFile\", function() { return ParseFile; });\n/* harmony import */ var _GetMatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetMatches */ \"./src/components/GetMatches.js\");\n\r\n\r\nconst ParseFile = (file) =>{\r\n    // var ParametersGroupNameRegex = /^(\\d{3}|\\d{1})\\,([0])\\,(.*)/gm; //001,0,General or 1,0,Compressor\r\n    // // var ParametersGroupNames = [\r\n    // //     GetMatches(file, ParametersGroupNameRegex, 1),\r\n    // //     GetMatches(file, ParametersGroupNameRegex, 2),\r\n    // //     GetMatches(file, ParametersGroupNameRegex, 3)\r\n    // // ];\r\n\r\n    var ParametersNamesRegex = /^(\\d{1,3})\\,([0-9]|[0-9][0-9])\\,(.*)/gm;//001,1,Voltage Supply,(Terminal 15),Specifcation: 0.0...15.0 V or 1,1,Switch OFF status,0=OK 7=Man. OFF\r\n    var ParametersNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, ParametersNamesRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, ParametersNamesRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, ParametersNamesRegex, 3)\r\n    ];\r\n\r\n    // var BasicSettingsGroupNamesRegex = /[B](\\d{3}|\\d{2})\\,([0])\\,(.*)/gm;//B001,0,Adjustment Position (Step 1)\r\n    // var BasicSettingsGroupnames = [\r\n    //     GetMatches(file, BasicSettingsGroupNamesRegex, 1),\r\n    //     GetMatches(file, BasicSettingsGroupNamesRegex, 2),\r\n    //     GetMatches(file, BasicSettingsGroupNamesRegex, 3),\r\n\r\n    // ];\r\n\r\n    var BasicSettingsNamesRegex = /[B](\\d{3}|\\d{2})\\,([0-4])\\,(.*)/gm;//B001,1,Status, ,\r\n    var BasicSettingsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, BasicSettingsNamesRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, BasicSettingsNamesRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, BasicSettingsNamesRegex, 3)\r\n    ];\r\n\r\n    // var AdaptationsGroupNamesRegex = /^\\A(\\d{3}|\\d{2})\\,([0])\\,(.*)/gm; //A01,0,Reception Optimization or A001,0,Reception Optimization\r\n    // var AdaptationsGroupNames = [\r\n    //     GetMatches(file, AdaptationsGroupNamesRegex, 1),\r\n    //     GetMatches(file, AdaptationsGroupNamesRegex, 2),\r\n    //     GetMatches(file, AdaptationsGroupNamesRegex, 3),\r\n    // ];\r\n\r\n    var AdaptationsNamesRegex = /^\\A(\\d{3}|\\d{2}|\\d{1})\\,([0-9]|[0-9][0-9])\\,(.*)/gm;\r\n    var AdaptationsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, AdaptationsNamesRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, AdaptationsNamesRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, AdaptationsNamesRegex, 3),\r\n    ];\r\n\r\n    var CodingsNamesRegex = /^C(\\d\\d|\\d)\\,(.*)/gm; //C01,??xxx: Equipment\r\n    var CodingsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, CodingsNamesRegex, 2)\r\n    ];\r\n\r\n    var LongCodingsRegex = /\\L\\C\\,(\\d{2})\\,(.{0,})\\,(.*)/gm; //LC,00,1,CD-Changer/iPod/USB Connection Monitoring active\r\n    var LongCodingsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, LongCodingsRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, LongCodingsRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, LongCodingsRegex, 3)\r\n    ];\r\n\r\n    var SelectiveActivationsNamesRegex = /^\\T(\\d*)\\,(.*)/gm; //T1543,Parking Aid Warning Chime (H15)\r\n    var SelectiveActivationsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, SelectiveActivationsNamesRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, SelectiveActivationsNamesRegex, 2)\r\n    ];\r\n\r\n    var SecurityAccessLoginsRegex = /(L|S)(\\d\\d)\\,(.*)/gm; //S01,13861 = Adaptation Enabling or L01,11463 = Cruise Control System (CCS) Activation\r\n    var SecurityNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, SecurityAccessLoginsRegex, 3)\r\n    ];\r\n\r\n    return {\r\n        //ParamGroupNames : ParametersGroupNames,\r\n        ParamNames : ParametersNames,\r\n        //BSGroupNames : BasicSettingsGroupnames,\r\n        BSSettingsNames : BasicSettingsNames,\r\n        //AdaptGroupNames : AdaptationsGroupNames,\r\n        AdaptNames: AdaptationsNames,\r\n        CONames : CodingsNames,\r\n        LCNames : LongCodingsNames,\r\n        SelACNames : SelectiveActivationsNames,\r\n        SANames : SecurityNames\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/components/ParseFile.js?");

/***/ }),

/***/ "./src/components/ShowTables.js":
/*!**************************************!*\
  !*** ./src/components/ShowTables.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n/* harmony import */ var _CreateTableParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTableParams */ \"./src/components/CreateTableParams.js\");\n/* harmony import */ var _CreateTableBS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateTableBS */ \"./src/components/CreateTableBS.js\");\n/* harmony import */ var _CreateTableAD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTableAD */ \"./src/components/CreateTableAD.js\");\n/* harmony import */ var _CreateTableCO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateTableCO */ \"./src/components/CreateTableCO.js\");\n/* harmony import */ var _CreateTableLC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateTableLC */ \"./src/components/CreateTableLC.js\");\n/* harmony import */ var _CreateTableSA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateTableSA */ \"./src/components/CreateTableSA.js\");\n/* harmony import */ var _CreateTableSelAC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateTableSelAC */ \"./src/components/CreateTableSelAC.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((VAGNum, labelObject) =>{\r\n    _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"].createLabelCaption(VAGNum);\r\n\r\n    var paramsTable = new _CreateTableParams__WEBPACK_IMPORTED_MODULE_1__[\"CreateTableParams\"](labelObject, 'Param', VAGNum);\r\n    if (paramsTable.functionsExists(\"Param\")){\r\n        paramsTable.createTableParams([labelObject.ParamNames[0], labelObject.ParamNames[1], labelObject.ParamNames[2]]);\r\n    }\r\n\r\n    var selAC = new _CreateTableSelAC__WEBPACK_IMPORTED_MODULE_7__[\"CreateTableSelAC\"](labelObject, \"SelAC\", VAGNum);\r\n    if (selAC.functionsExists(\"SelAC\")){\r\n        selAC.createTableSelAC([labelObject.SelACNames[0], labelObject.SelACNames[1]]);\r\n    }\r\n\r\n    var basicSettingsTable = new _CreateTableBS__WEBPACK_IMPORTED_MODULE_2__[\"CreateTableBS\"](labelObject, \"BS\", VAGNum);\r\n    if (basicSettingsTable.functionsExists(\"BS\")){\r\n        basicSettingsTable.createTableBS([labelObject.BSSettingsNames[0], labelObject.BSSettingsNames[1], labelObject.BSSettingsNames[2]]);\r\n    }\r\n    \r\n    var adaptationsTable = new _CreateTableAD__WEBPACK_IMPORTED_MODULE_3__[\"CreateTableAD\"](labelObject, \"AD\", VAGNum);\r\n    if(adaptationsTable.functionsExists(\"AD\")){\r\n        adaptationsTable.createTableAD([labelObject.AdaptNames[0], labelObject.AdaptNames[1], labelObject.AdaptNames[2]]);\r\n    }\r\n    \r\n    var CO_Table = new _CreateTableCO__WEBPACK_IMPORTED_MODULE_4__[\"CreateTableCO\"](labelObject, \"CO\", VAGNum);\r\n    if (CO_Table.functionsExists(\"CO\")){\r\n        CO_Table.createTableCO([labelObject.CONames[0]]);\r\n    }\r\n\r\n    var LC_Table = new _CreateTableLC__WEBPACK_IMPORTED_MODULE_5__[\"CreateTableLC\"](labelObject, \"LC\", VAGNum);\r\n    if (LC_Table.functionsExists(\"LC\")){\r\n        LC_Table.createTableLC([labelObject.LCNames[0], labelObject.LCNames[1], labelObject.LCNames[2]]);\r\n    }\r\n\r\n    var SA_Table = new _CreateTableSA__WEBPACK_IMPORTED_MODULE_6__[\"CreateTableSA\"](labelObject, \"SA\", VAGNum);\r\n    if (SA_Table.functionsExists(\"SA\")){\r\n        SA_Table.createTableSA([labelObject.SANames[0]]);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/ShowTables.js?");

/***/ })

/******/ });