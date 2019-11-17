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

/***/ "./node_modules/domain-browser/source/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/domain-browser/source/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// This file should be ES5 compatible\n/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */\n\n\nmodule.exports = (function () {\n\t// Import Events\n\tvar events = __webpack_require__(/*! events */ \"./node_modules/events/events.js\")\n\n\t// Export Domain\n\tvar domain = {}\n\tdomain.createDomain = domain.create = function () {\n\t\tvar d = new events.EventEmitter()\n\n\t\tfunction emitError (e) {\n\t\t\td.emit('error', e)\n\t\t}\n\n\t\td.add = function (emitter) {\n\t\t\temitter.on('error', emitError)\n\t\t}\n\t\td.remove = function (emitter) {\n\t\t\temitter.removeListener('error', emitError)\n\t\t}\n\t\td.bind = function (fn) {\n\t\t\treturn function () {\n\t\t\t\tvar args = Array.prototype.slice.call(arguments)\n\t\t\t\ttry {\n\t\t\t\t\tfn.apply(null, args)\n\t\t\t\t}\n\t\t\t\tcatch (err) {\n\t\t\t\t\temitError(err)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\td.intercept = function (fn) {\n\t\t\treturn function (err) {\n\t\t\t\tif ( err ) {\n\t\t\t\t\temitError(err)\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tvar args = Array.prototype.slice.call(arguments, 1)\n\t\t\t\t\ttry {\n\t\t\t\t\t\tfn.apply(null, args)\n\t\t\t\t\t}\n\t\t\t\t\tcatch (err) {\n\t\t\t\t\t\temitError(err)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\td.run = function (fn) {\n\t\t\ttry {\n\t\t\t\tfn()\n\t\t\t}\n\t\t\tcatch (err) {\n\t\t\t\temitError(err)\n\t\t\t}\n\t\t\treturn this\n\t\t}\n\t\td.dispose = function () {\n\t\t\tthis.removeAllListeners()\n\t\t\treturn this\n\t\t}\n\t\td.enter = d.exit = function () {\n\t\t\treturn this\n\t\t}\n\t\treturn d\n\t}\n\treturn domain\n}).call(this)\n\n\n//# sourceURL=webpack:///./node_modules/domain-browser/source/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = $getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  var args = [];\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTable\", function() { return CreateTable; });\nclass CreateTable {\r\n    constructor(object, type, label){\r\n        this.object = object; //parsed file in variable (given as object with arrays)\r\n        this.type = type; //look at switch case statement\r\n        this.label = label; //VAG number here \r\n    }\r\n\r\n    static createLabelCaption(label){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var result = document.body.appendChild(div).setAttribute(\"id\", \"label\");\r\n    \r\n        var title = document.createElement(\"h1\");\r\n        var putTitle = document.getElementById(\"label\").insertAdjacentElement(\"afterbegin\", title);\r\n        putTitle.setAttribute(\"id\", \"title\");\r\n        document.getElementById(\"title\").innerText = `Label ${label}`;\r\n        document.title = `VAG Looker - ${label}`;\r\n    }\r\n    \r\n    functionsExists(type){\r\n        switch (type){\r\n            case 'Param':{      \r\n                if((this.object.ParamNames[0]).length == 0 || \r\n                (this.object.ParamNames[1]).length == 0 || \r\n                (this.object.ParamNames[2]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            case 'CO':{\r\n                if((this.object.CONames[0]).length == 0) return false\r\n                else return true;\r\n            }\r\n            case 'BS':{\r\n                if((this.object.BSSettingsNames[0]).length == 0 ||  \r\n                    (this.object.BSSettingsNames[1]).length == 0 || \r\n                    (this.object.BSSettingsNames[2]).length == 0){\r\n                        return false\r\n                    }else return true;\r\n            }\r\n            case 'AD':{\r\n                if((this.object.AdaptNames[0]).length == 0 || \r\n                (this.object.AdaptNames[1]).length == 0 || \r\n                (this.object.AdaptNames[2]).length == 0){\r\n                    return false;\r\n                } else return true;      \r\n            }\r\n            case 'LC':{\r\n                if((this.object.LCNames[0]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            case 'SelAC':{\r\n                if((this.object.SelACNames[0]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            case 'SA':{\r\n                if ((this.object.SANames[0]).length == 0){\r\n                    return false;\r\n                }else return true;\r\n            }\r\n            //default: throw 'Invalid parameter!';\r\n        };\r\n    }\r\n}\r\n\r\n \n\n//# sourceURL=webpack:///./src/components/CreateTable.js?");

/***/ }),

/***/ "./src/components/CreateTableAD.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableAD.js ***!
  \*****************************************/
/*! exports provided: CreateTableAD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableAD\", function() { return CreateTableAD; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableAD extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableAD(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableAD\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";\r\n                    // td.style.display = \"inline\";\r\n                    td.style.width = \"225px\";\r\n                    td.style.textAlign = \"center\";   \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n\r\n            var cells = document.getElementById(\"resultTableAD\").getElementsByTagName(\"td\");\r\n            for (var i = 0; i < cells.length; i++) {\r\n                if (cells[i].innerHTML == \"0\") {\r\n                    cells[i].style.backgroundColor = \"#FF55\";\r\n                    cells[i-1].style.backgroundColor = \"#FF55\";\r\n                    cells[i+1].style.backgroundColor = \"#FF55\";\r\n                }\r\n            }\r\n        }\r\n    }\n\n//# sourceURL=webpack:///./src/components/CreateTableAD.js?");

/***/ }),

/***/ "./src/components/CreateTableBS.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableBS.js ***!
  \*****************************************/
/*! exports provided: CreateTableBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableBS\", function() { return CreateTableBS; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableBS extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableBS(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableBS\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n\r\n            var cells = document.getElementById(\"resultTableBS\").getElementsByTagName(\"td\");\r\n            for (var i = 0; i < cells.length; i++) {\r\n                if (cells[i].innerHTML == \"0\") {\r\n                    cells[i].style.backgroundColor = \"#FF55\";\r\n                    cells[i-1].style.backgroundColor = \"#FF55\";\r\n                    cells[i+1].style.backgroundColor = \"#FF55\";\r\n                }\r\n            }\r\n        }\r\n    }\n\n//# sourceURL=webpack:///./src/components/CreateTableBS.js?");

/***/ }),

/***/ "./src/components/CreateTableCO.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableCO.js ***!
  \*****************************************/
/*! exports provided: CreateTableCO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableCO\", function() { return CreateTableCO; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableCO extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableCO(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableCO\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\n\n//# sourceURL=webpack:///./src/components/CreateTableCO.js?");

/***/ }),

/***/ "./src/components/CreateTableLC.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableLC.js ***!
  \*****************************************/
/*! exports provided: CreateTableLC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableLC\", function() { return CreateTableLC; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableLC extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableLC(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableLC\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n            var row = table.insertRow();\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\n\n//# sourceURL=webpack:///./src/components/CreateTableLC.js?");

/***/ }),

/***/ "./src/components/CreateTableParams.js":
/*!*********************************************!*\
  !*** ./src/components/CreateTableParams.js ***!
  \*********************************************/
/*! exports provided: CreateTableParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableParams\", function() { return CreateTableParams; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domain */ \"./node_modules/domain-browser/source/index.js\");\n/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domain__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass CreateTableParams extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n\r\n    createTableParams(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableParams\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n            var tableLen = array[0].length;\r\n            var tableWidth = array.length;\r\n          \r\n            //console.log(tableLen, tableWidth);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                tr.setAttribute(\"id\", `param${i}`);\r\n                //tr.style.width = \"700px\";\r\n                for (var j = 0; j < tableWidth; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";\r\n                    // td.style.display = \"inline\";\r\n                    td.style.width = \"225px\";\r\n                    td.style.textAlign = \"center\";\r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n\r\n        //create buttons and set attributes\r\n        for (var i=0; i < tableLen ; i++){\r\n            var button = document.createElement(\"button\");\r\n            button.setAttribute(\"id\", `hideParam${i}`);\r\n            button.innerText = \"+/-\";\r\n            button.style.position = \"absolute\";\r\n            button.style.left = `790px`;\r\n            var heightFromTop = document.getElementById(`param${i}`).getBoundingClientRect().height;\r\n            var offsetTop = document.getElementById(`param${i}`).offsetTop;\r\n            button.style.top = `${offsetTop + heightFromTop/2 +335}px`;\r\n            div.appendChild(button);\r\n        }\r\n\r\n        \r\n        var clicked = false;\r\n        var buttons = document.getElementsByTagName(\"button\");\r\n\r\n        //set onclick event\r\n        for (let i = 0; i < buttons.length; i++) {\r\n            buttons[i].onclick = function(e){\r\n                if (!clicked){\r\n                    clicked = true;\r\n                    document.getElementById(`param${i}`).style.display = 'none';\r\n                }else {\r\n                    clicked = false;\r\n                    document.getElementById(`param${i}`).style.display = '';\r\n                }\r\n            };\r\n        }\r\n        \r\n        //set color on group names\r\n            var cells = document.getElementById(\"resultTableParams\").getElementsByTagName(\"td\");\r\n            for (var i = 0; i < cells.length; i++) {\r\n                if (cells[i].innerHTML == \"0\" || cells[i].innerHTML == \"000\" ) {\r\n                    cells[i].style.backgroundColor = \"#FF55\";\r\n                    cells[i-1].style.backgroundColor = \"#FF55\";\r\n                    cells[i+1].style.backgroundColor = \"#FF55\";\r\n                }\r\n            }\r\n        }\r\n    }\r\n\n\n//# sourceURL=webpack:///./src/components/CreateTableParams.js?");

/***/ }),

/***/ "./src/components/CreateTableSA.js":
/*!*****************************************!*\
  !*** ./src/components/CreateTableSA.js ***!
  \*****************************************/
/*! exports provided: CreateTableSA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableSA\", function() { return CreateTableSA; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableSA extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableSA(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableSA\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\r\n//}\n\n//# sourceURL=webpack:///./src/components/CreateTableSA.js?");

/***/ }),

/***/ "./src/components/CreateTableSelAC.js":
/*!********************************************!*\
  !*** ./src/components/CreateTableSelAC.js ***!
  \********************************************/
/*! exports provided: CreateTableSelAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTableSelAC\", function() { return CreateTableSelAC; });\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n\r\n\r\nclass CreateTableSelAC extends _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"]{\r\n    constructor(object, type, label){\r\n        super(object, type, label);\r\n    }\r\n    \r\n    createTableSelAC(array){\r\n        var div = document.createElement(\"div\");\r\n    \r\n        var res = document.body.appendChild(div).setAttribute(\"id\", this.type);\r\n\r\n        var table = document.createElement(\"table\");\r\n        var putTable = document.getElementById(this.type);\r\n        putTable.setAttribute(\"id\", \"resultTableSelAC\");\r\n\r\n        table.style.border = \"2px solid #456789\";\r\n        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;\r\n\r\n            var tableLen = array[0].length;\r\n            var tableHigh = array.length;\r\n            console.log(tableLen, tableHigh);\r\n            for(var i = 0; i < tableLen; i++){\r\n                var tr = table.insertRow();\r\n                for (var j = 0; j < tableHigh; j++){\r\n                    var td = tr.insertCell();\r\n                    td.appendChild(document.createTextNode(array[j][i]));\r\n                    td.style.border = \"1px solid #456\";    \r\n                }\r\n            }\r\n\r\n            putTable.insertAdjacentElement(\"beforeend\", table);\r\n        }\r\n    }\n\n//# sourceURL=webpack:///./src/components/CreateTableSelAC.js?");

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

/***/ "./src/components/DecToHex.js":
/*!************************************!*\
  !*** ./src/components/DecToHex.js ***!
  \************************************/
/*! exports provided: DecToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DecToHex\", function() { return DecToHex; });\nfunction DecToHex(arrayAC){\r\n  \r\n  var arrayACLen = arrayAC.length;\r\n  var hexArray = [];\r\n\r\n  for (var i =0; i < arrayACLen; i++){\r\n    var hex = \"0000\";\r\n    if      (parseInt(arrayAC[i]) >= 0    && parseInt(arrayAC[i]) <= 15)    { hex = \"000\" + parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex);  }\r\n    else if (parseInt(arrayAC[i]) >= 16   && parseInt(arrayAC[i]) <= 255)   { hex = \"00\"  + parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex); }\r\n    else if (parseInt(arrayAC[i]) >= 256  && parseInt(arrayAC[i]) <= 4095)  { hex = \"0\"   + parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex); }\r\n    else if (parseInt(arrayAC[i]) >= 4096 && parseInt(arrayAC[i]) <= 65535) { hex =         parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex); }\r\n  }\r\n \r\n  return hexArray;\r\n}\n\n//# sourceURL=webpack:///./src/components/DecToHex.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParseFile\", function() { return ParseFile; });\n/* harmony import */ var _GetMatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetMatches */ \"./src/components/GetMatches.js\");\n\r\n\r\n\r\nconst ParseFile = (file) =>{\r\n    // var ParametersGroupNameRegex = /^(\\d{3}|\\d{1})\\,([0])\\,(.*)/gm; //001,0,General or 1,0,Compressor\r\n    // // var ParametersGroupNames = [\r\n    // //     GetMatches(file, ParametersGroupNameRegex, 1),\r\n    // //     GetMatches(file, ParametersGroupNameRegex, 2),\r\n    // //     GetMatches(file, ParametersGroupNameRegex, 3)\r\n    // // ];\r\n\r\n    var ParametersNamesRegex = /^(\\d{1,3})\\,([0-9]|[0-9][0-9])\\,(.*)/gm;//001,1,Voltage Supply,(Terminal 15),Specifcation: 0.0...15.0 V or 1,1,Switch OFF status,0=OK 7=Man. OFF\r\n    var ParametersNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, ParametersNamesRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, ParametersNamesRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, ParametersNamesRegex, 3)\r\n    ];\r\n\r\n    // var BasicSettingsGroupNamesRegex = /[B](\\d{3}|\\d{2})\\,([0])\\,(.*)/gm;//B001,0,Adjustment Position (Step 1)\r\n    // var BasicSettingsGroupnames = [\r\n    //     GetMatches(file, BasicSettingsGroupNamesRegex, 1),\r\n    //     GetMatches(file, BasicSettingsGroupNamesRegex, 2),\r\n    //     GetMatches(file, BasicSettingsGroupNamesRegex, 3),\r\n\r\n    // ];\r\n\r\n    var BasicSettingsNamesRegex = /[B](\\d{3}|\\d{2})\\,([0-4])\\,(.*)/gm;//B001,1,Status, ,\r\n    var BasicSettingsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, BasicSettingsNamesRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, BasicSettingsNamesRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, BasicSettingsNamesRegex, 3)\r\n    ];\r\n\r\n    // var AdaptationsGroupNamesRegex = /^\\A(\\d{3}|\\d{2})\\,([0])\\,(.*)/gm; //A01,0,Reception Optimization or A001,0,Reception Optimization\r\n    // var AdaptationsGroupNames = [\r\n    //     GetMatches(file, AdaptationsGroupNamesRegex, 1),\r\n    //     GetMatches(file, AdaptationsGroupNamesRegex, 2),\r\n    //     GetMatches(file, AdaptationsGroupNamesRegex, 3),\r\n    // ];\r\n\r\n    var AdaptationsNamesRegex = /^\\A(\\d{3}|\\d{2}|\\d{1})\\,([0-9]|[0-9][0-9])\\,(.*)/gm;\r\n    var AdaptationsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, AdaptationsNamesRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, AdaptationsNamesRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, AdaptationsNamesRegex, 3),\r\n    ];\r\n\r\n    var CodingsNamesRegex = /^C(\\d\\d|\\d)\\,(.*)/gm; //C01,??xxx: Equipment\r\n    var CodingsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, CodingsNamesRegex, 2)\r\n    ];\r\n\r\n    var LongCodingsRegex = /\\L\\C\\,(\\d{2})\\,(.{0,})\\,(.*)/gm; //LC,00,1,CD-Changer/iPod/USB Connection Monitoring active\r\n    var LongCodingsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, LongCodingsRegex, 1),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, LongCodingsRegex, 2),\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, LongCodingsRegex, 3)\r\n    ];\r\n\r\n    var SelectiveActivationsNamesRegex = /^\\T(\\d*)\\,(.*)/gm; //T1543,Parking Aid Warning Chime (H15)\r\n    var SelectiveActivationsNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, SelectiveActivationsNamesRegex, 1),\r\n        [],\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, SelectiveActivationsNamesRegex, 2)\r\n    ];\r\n\r\n\r\n    var SecurityAccessLoginsRegex = /(L|S)(\\d\\d)\\,(.*)/gm; //S01,13861 = Adaptation Enabling or L01,11463 = Cruise Control System (CCS) Activation\r\n    var SecurityNames = [\r\n        Object(_GetMatches__WEBPACK_IMPORTED_MODULE_0__[\"GetMatches\"])(file, SecurityAccessLoginsRegex, 3)\r\n    ];\r\n\r\n    return {\r\n        //ParamGroupNames : ParametersGroupNames,\r\n        ParamNames : ParametersNames,\r\n        //BSGroupNames : BasicSettingsGroupnames,\r\n        BSSettingsNames : BasicSettingsNames,\r\n        //AdaptGroupNames : AdaptationsGroupNames,\r\n        AdaptNames: AdaptationsNames,\r\n        CONames : CodingsNames,\r\n        LCNames : LongCodingsNames,\r\n        SelACNames : SelectiveActivationsNames,\r\n        SANames : SecurityNames\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/components/ParseFile.js?");

/***/ }),

/***/ "./src/components/ShowTables.js":
/*!**************************************!*\
  !*** ./src/components/ShowTables.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTable */ \"./src/components/CreateTable.js\");\n/* harmony import */ var _CreateTableParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTableParams */ \"./src/components/CreateTableParams.js\");\n/* harmony import */ var _CreateTableBS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateTableBS */ \"./src/components/CreateTableBS.js\");\n/* harmony import */ var _CreateTableAD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTableAD */ \"./src/components/CreateTableAD.js\");\n/* harmony import */ var _CreateTableCO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateTableCO */ \"./src/components/CreateTableCO.js\");\n/* harmony import */ var _CreateTableLC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateTableLC */ \"./src/components/CreateTableLC.js\");\n/* harmony import */ var _CreateTableSA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateTableSA */ \"./src/components/CreateTableSA.js\");\n/* harmony import */ var _CreateTableSelAC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateTableSelAC */ \"./src/components/CreateTableSelAC.js\");\n/* harmony import */ var _DecToHex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DecToHex */ \"./src/components/DecToHex.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((VAGNum, labelObject) =>{\r\n    _CreateTable__WEBPACK_IMPORTED_MODULE_0__[\"CreateTable\"].createLabelCaption(VAGNum);\r\n\r\n    var paramsTable = new _CreateTableParams__WEBPACK_IMPORTED_MODULE_1__[\"CreateTableParams\"](labelObject, 'Param', VAGNum);\r\n    if (paramsTable.functionsExists(\"Param\")){\r\n        paramsTable.createTableParams([labelObject.ParamNames[0], labelObject.ParamNames[1], labelObject.ParamNames[2]]);\r\n    }\r\n\r\n    var selAC = new _CreateTableSelAC__WEBPACK_IMPORTED_MODULE_7__[\"CreateTableSelAC\"](labelObject, \"SelAC\", VAGNum);\r\n    if (selAC.functionsExists(\"SelAC\")){\r\n        selAC.createTableSelAC([labelObject.SelACNames[0], Object(_DecToHex__WEBPACK_IMPORTED_MODULE_8__[\"DecToHex\"])(labelObject.SelACNames[0]), labelObject.SelACNames[2]]);\r\n    }\r\n\r\n    var basicSettingsTable = new _CreateTableBS__WEBPACK_IMPORTED_MODULE_2__[\"CreateTableBS\"](labelObject, \"BS\", VAGNum);\r\n    if (basicSettingsTable.functionsExists(\"BS\")){\r\n        basicSettingsTable.createTableBS([labelObject.BSSettingsNames[0], labelObject.BSSettingsNames[1], labelObject.BSSettingsNames[2]]);\r\n    }\r\n    \r\n    var adaptationsTable = new _CreateTableAD__WEBPACK_IMPORTED_MODULE_3__[\"CreateTableAD\"](labelObject, \"AD\", VAGNum);\r\n    if(adaptationsTable.functionsExists(\"AD\")){\r\n        adaptationsTable.createTableAD([labelObject.AdaptNames[0], labelObject.AdaptNames[1], labelObject.AdaptNames[2]]);\r\n    }\r\n    \r\n    var CO_Table = new _CreateTableCO__WEBPACK_IMPORTED_MODULE_4__[\"CreateTableCO\"](labelObject, \"CO\", VAGNum);\r\n    if (CO_Table.functionsExists(\"CO\")){\r\n        CO_Table.createTableCO([labelObject.CONames[0]]);\r\n    }\r\n\r\n    var LC_Table = new _CreateTableLC__WEBPACK_IMPORTED_MODULE_5__[\"CreateTableLC\"](labelObject, \"LC\", VAGNum);\r\n    if (LC_Table.functionsExists(\"LC\")){\r\n        LC_Table.createTableLC([labelObject.LCNames[0], labelObject.LCNames[1], labelObject.LCNames[2]]);\r\n    }\r\n\r\n    var SA_Table = new _CreateTableSA__WEBPACK_IMPORTED_MODULE_6__[\"CreateTableSA\"](labelObject, \"SA\", VAGNum);\r\n    if (SA_Table.functionsExists(\"SA\")){\r\n        SA_Table.createTableSA([labelObject.SANames[0]]);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/ShowTables.js?");

/***/ })

/******/ });