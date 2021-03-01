/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("theme-ui"), require("@component-controls/components"), require("@component-controls/blocks"), require("@primer/octicons-react"), require("@component-controls/store"), require("@component-controls/core"), require("axe-core"), require("react-google-charts"), require("@mdx-js/react"), require("fuse.js"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "theme-ui", "@component-controls/components", "@component-controls/blocks", "@primer/octicons-react", "@component-controls/store", "@component-controls/core", "axe-core", "react-google-charts", "@mdx-js/react", "fuse.js"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("theme-ui"), require("@component-controls/components"), require("@component-controls/blocks"), require("@primer/octicons-react"), require("@component-controls/store"), require("@component-controls/core"), require("axe-core"), require("react-google-charts"), require("@mdx-js/react"), require("fuse.js")) : factory(root["React"], root["theme-ui"], root["@component-controls/components"], root["@component-controls/blocks"], root["@primer/octicons-react"], root["@component-controls/store"], root["@component-controls/core"], root["axe-core"], root["react-google-charts"], root["@mdx-js/react"], root["fuse.js"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__41__, __WEBPACK_EXTERNAL_MODULE__42__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(54)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __spreadArray */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var definePropertyModule = __webpack_require__(17);
var createPropertyDescriptor = __webpack_require__(25);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* binding */ Button_Button; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// CONCATENATED MODULE: ./src/components/Button.tsx



/**
 * Button with react Typescript properties
 */
var Button_Button = function Button(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      onClick = _ref.onClick,
      style = _ref.style,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      type = _ref.type,
      padding = _ref.padding;
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      backgroundColor: backgroundColor,
      color: color,
      padding: padding
    })
  }, children);
};
Button_Button.defaultProps = {
  disabled: false,
  children: 'default',
  onClick: function onClick() {},
  style: {},
  backgroundColor: '#fefefe',
  color: 'black',
  type: 'button',
  padding: 5
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(26);
var requireObjectCoercible = __webpack_require__(27);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(29);
var anObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(28);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var createNonEnumerableProperty = __webpack_require__(14);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var setGlobal = __webpack_require__(18);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(9);
var objectDefinePropertyModile = __webpack_require__(17);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var getOwnPropertyDescriptor = __webpack_require__(23).f;
var createNonEnumerableProperty = __webpack_require__(14);
var redefine = __webpack_require__(57);
var setGlobal = __webpack_require__(18);
var copyConstructorProperties = __webpack_require__(64);
var isForced = __webpack_require__(72);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var propertyIsEnumerableModule = __webpack_require__(24);
var createPropertyDescriptor = __webpack_require__(25);
var toIndexedObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(28);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(29);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);
var classof = __webpack_require__(55);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(11);
var createElement = __webpack_require__(56);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(19);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIndexedObject = __webpack_require__(16);
var indexOf = __webpack_require__(69).indexOf;
var hiddenKeys = __webpack_require__(32);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(22);
var assign = __webpack_require__(73);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 39 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(76);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__42__;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {



const path = __webpack_require__(44);
const { loadPageTab } = __webpack_require__(7)


const configJSON = __webpack_require__(46);

const search = __webpack_require__(47);
const story_0 = __webpack_require__(48);
const story_1 = __webpack_require__(50);
const contexts = [];
contexts.push({
        folder: "/Users/atanasster/webpack-5-controls-starter/src/docs", 
        req: __webpack_require__(52)
    });

const store = {"stores":[{"filePath":"/Users/atanasster/webpack-5-controls-starter/src/docs/first-page.mdx","stories":{},"doc":{"title":"First Page","componentsLookup":{},"package":"58714a769d186b9c1da9dea00c0caad3","dateModified":"2021-02-28T11:59:16.987Z","date":"2021-02-28T11:59:16.987Z","fileName":"/Users/atanasster/webpack-5-controls-starter/src/docs/first-page.mdx"}},{"filePath":"/Users/atanasster/webpack-5-controls-starter/src/docs/first-story.mdx","stories":{"simple":{"name":"simple","component":"Button","id":"simple","loc":{"start":{"column":11,"line":23},"end":{"column":11,"line":25}},"arguments":[{"value":[{"value":"backgroundColor","name":"backgroundColor","loc":{"start":{"line":0,"column":3},"end":{"line":0,"column":18}},"usage":[{"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":40}}}]}],"loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":20}}}],"source":"({ backgroundColor }) => (\n<Button backgroundColor={backgroundColor}>click me</Button>\n)"}},"doc":{"title":"First Story","componentsLookup":{"Button":"8cf4a7ff8d19f3ee766a954fcac2bea3"},"package":"b8009a08a25c1333f0cd00b9d9440e19","dateModified":"2021-02-28T11:59:16.989Z","date":"2021-02-28T11:59:16.988Z","fileName":"/Users/atanasster/webpack-5-controls-starter/src/docs/first-story.mdx"}},{"filePath":"/Users/atanasster/webpack-5-controls-starter/src/docs/first-story.stories.tsx","stories":{"overview":{"loc":{"start":{"column":24,"line":9},"end":{"column":1,"line":11}},"name":"overview","id":"overview","arguments":[{"value":"props","name":"props","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":19}},"usage":[{"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":19}}}]}],"source":"(props: ButtonProps) => (\n  <Button {...props}>click me</Button>\n)"}},"doc":{"title":"ES Story","component":"Button","components":{},"componentsLookup":{"Button":"8cf4a7ff8d19f3ee766a954fcac2bea3"},"package":"5208cba6ba9c835f65e6225ca1a97f74","dateModified":"2021-02-28T11:59:16.990Z","date":"2021-02-28T11:59:16.989Z","fileName":"/Users/atanasster/webpack-5-controls-starter/src/docs/first-story.stories.tsx"}}],"components":{"8cf4a7ff8d19f3ee766a954fcac2bea3":{"name":"Button","from":"../components/Button","externalDependencies":{"react":[{"name":"React","importedName":"default"},{"name":"FC","importedName":"FC"}]},"localDependencies":{},"importedName":"Button","jsx":[{"children":[],"name":"button","attributes":["type","disabled","onClick","style"]}],"request":"/Users/atanasster/webpack-5-controls-starter/src/components/Button.tsx","fileName":"Button.tsx","source":"import React, { FC } from 'react';\n\nexport interface ButtonProps {\n  /**\n   *  Boolean indicating whether the button should render as disabled\n   */\n  disabled?: boolean;\n  \n  /**\n   * button label\n   */\n  children?: string;\n\n  /**\n   * onClick handler\n   */\n  onClick?: () => void;\n  \n  /**\n   * Custom styles\n   */\n  style?: object;\n\n  /**\n   * Background color\n   */\n  backgroundColor?: string;\n\n  /**\n   * Text color, default black\n   */\n  color?: string;\n\n  /**\n   * Button type\n   */\n  type?: 'button' | 'reset' | 'submit';\n\n  /**\n   * Numeric  field type\n   */\n  padding?: number;\n}\n\n/**\n * Button with react Typescript properties\n */\nexport const Button: FC<ButtonProps> = ({\n  disabled,\n  children,\n  onClick,\n  style,\n  backgroundColor,\n  color,\n  type,\n  padding,\n}) => (\n  <button\n    type={type}\n    disabled={disabled}\n    onClick={onClick}\n    style={{\n      ...style,\n      backgroundColor,\n      color,\n      padding,\n    }}\n  >\n    {children}\n  </button>\n);\n\nButton.defaultProps = {\n  disabled: false,\n  children: 'default',\n  onClick: () => {},\n  style: {},\n  backgroundColor: '#fefefe',\n  color: 'black',\n  type: 'button',\n  padding: 5,\n};\n","loc":{"start":{"line":48,"column":39},"end":{"line":71,"column":1}},"fileInfo":{"dateCreated":"2021-02-28T19:22:27.895Z","dateModified":"2021-02-28T19:22:27.899Z","sloc":{"total":82,"source":45,"comment":27,"single":0,"block":27,"mixed":0,"empty":10,"todo":0,"blockEmpty":0}},"package":"8cf4a7ff8d19f3ee766a954fcac2bea3","info":{"tags":{},"description":"Button with react Typescript properties","displayName":"Button","methods":[],"props":{"disabled":{"description":"Boolean indicating whether the button should render as disabled","parentName":"ButtonProps","defaultValue":false,"type":{"name":"boolean","raw":"boolean"}},"children":{"description":"button label","parentName":"ButtonProps","defaultValue":"default","type":{"name":"function","raw":"(string & (boolean | ReactChild | ReactFragment | ReactPortal | null))"}},"onClick":{"description":"onClick handler","parentName":"ButtonProps","defaultValue":"() => {}","type":{"name":"function","raw":"(() => void)"}},"style":{"description":"Custom styles","parentName":"ButtonProps","defaultValue":"{}","type":{"name":"object","raw":"object"}},"backgroundColor":{"description":"Background color","parentName":"ButtonProps","defaultValue":"#fefefe","type":{"name":"string","raw":"string"}},"color":{"description":"Text color, default black","parentName":"ButtonProps","defaultValue":"black","type":{"name":"string","raw":"string"}},"type":{"description":"Button type","parentName":"ButtonProps","defaultValue":"button","type":{"name":"union","value":[{"name":"button"},{"name":"reset"},{"name":"submit"}],"raw":"\"button\" | \"reset\" | \"submit\""}},"padding":{"description":"Numeric  field type","parentName":"ButtonProps","defaultValue":5,"type":{"name":"number","raw":"number"}}}}}},"packages":{"58714a769d186b9c1da9dea00c0caad3":{"fileHash":"58714a769d186b9c1da9dea00c0caad3","name":"webpack-5-controls-starter","version":"1.0.0","repository":{"browse":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master/src/docs/first-page.mdx","docs":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master#readme","issues":"https://github.com/ccontrols/webpack-5-controls-starter/issues"},"dependencies":{"@component-controls/react-router-integration":"^2.11.3","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@babel/core":"^7.12.10","@babel/plugin-transform-runtime":"^7.12.10","@babel/preset-env":"^7.12.11","@babel/preset-react":"^7.12.10","@babel/preset-typescript":"^7.12.7","@babel/runtime":"^7.12.5","@types/node":"^14.14.31","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@types/react-router-dom":"^5.1.7","@types/webpack":"^4.41.25","@types/webpack-dev-server":"^3.11.1","babel-loader":"^8.2.2","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^7.0.0","cross-env":"^5.2.0","html-webpack-plugin":"^5.2.0","ts-node":"^9.1.1","typescript":"^4.1.3","webpack":"^5.11.1","webpack-cli":"^4.3.1","webpack-dev-server":"^3.11.1"}},"8cf4a7ff8d19f3ee766a954fcac2bea3":{"fileHash":"8cf4a7ff8d19f3ee766a954fcac2bea3","name":"webpack-5-controls-starter","version":"1.0.0","repository":{"browse":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master/src/components/Button.tsx","docs":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master#readme","issues":"https://github.com/ccontrols/webpack-5-controls-starter/issues"},"dependencies":{"@component-controls/react-router-integration":"^2.11.3","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@babel/core":"^7.12.10","@babel/plugin-transform-runtime":"^7.12.10","@babel/preset-env":"^7.12.11","@babel/preset-react":"^7.12.10","@babel/preset-typescript":"^7.12.7","@babel/runtime":"^7.12.5","@types/node":"^14.14.31","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@types/react-router-dom":"^5.1.7","@types/webpack":"^4.41.25","@types/webpack-dev-server":"^3.11.1","babel-loader":"^8.2.2","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^7.0.0","cross-env":"^5.2.0","html-webpack-plugin":"^5.2.0","ts-node":"^9.1.1","typescript":"^4.1.3","webpack":"^5.11.1","webpack-cli":"^4.3.1","webpack-dev-server":"^3.11.1"}},"b8009a08a25c1333f0cd00b9d9440e19":{"fileHash":"b8009a08a25c1333f0cd00b9d9440e19","name":"webpack-5-controls-starter","version":"1.0.0","repository":{"browse":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master/src/docs/first-story.mdx","docs":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master#readme","issues":"https://github.com/ccontrols/webpack-5-controls-starter/issues"},"dependencies":{"@component-controls/react-router-integration":"^2.11.3","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@babel/core":"^7.12.10","@babel/plugin-transform-runtime":"^7.12.10","@babel/preset-env":"^7.12.11","@babel/preset-react":"^7.12.10","@babel/preset-typescript":"^7.12.7","@babel/runtime":"^7.12.5","@types/node":"^14.14.31","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@types/react-router-dom":"^5.1.7","@types/webpack":"^4.41.25","@types/webpack-dev-server":"^3.11.1","babel-loader":"^8.2.2","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^7.0.0","cross-env":"^5.2.0","html-webpack-plugin":"^5.2.0","ts-node":"^9.1.1","typescript":"^4.1.3","webpack":"^5.11.1","webpack-cli":"^4.3.1","webpack-dev-server":"^3.11.1"}},"5208cba6ba9c835f65e6225ca1a97f74":{"fileHash":"5208cba6ba9c835f65e6225ca1a97f74","name":"webpack-5-controls-starter","version":"1.0.0","repository":{"browse":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master/src/docs/first-story.stories.tsx","docs":"https://github.com/ccontrols/webpack-5-controls-starter/tree/master#readme","issues":"https://github.com/ccontrols/webpack-5-controls-starter/issues"},"dependencies":{"@component-controls/react-router-integration":"^2.11.3","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@babel/core":"^7.12.10","@babel/plugin-transform-runtime":"^7.12.10","@babel/preset-env":"^7.12.11","@babel/preset-react":"^7.12.10","@babel/preset-typescript":"^7.12.7","@babel/runtime":"^7.12.5","@types/node":"^14.14.31","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@types/react-router-dom":"^5.1.7","@types/webpack":"^4.41.25","@types/webpack-dev-server":"^3.11.1","babel-loader":"^8.2.2","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^7.0.0","cross-env":"^5.2.0","html-webpack-plugin":"^5.2.0","ts-node":"^9.1.1","typescript":"^4.1.3","webpack":"^5.11.1","webpack-cli":"^4.3.1","webpack-dev-server":"^3.11.1"}}},"config":{},"buildConfig":{"siteRoot":"/","siteMap":{"pages":{"home":{"priority":1},"index":{"priority":0.8},"doc":{"priority":0.5}}},"categories":["author","tags"],"ignore":["readme.md","changelog.md","code_of_conduct.md","contributing.md","license.md"],"pages":{"story":{"basePath":"docs/","sideNav":{"storyPaths":true,"collapseSingle":true},"tabs":{"page":"/Users/atanasster/webpack-5-controls-starter/node_modules/@component-controls/pages/ClassicPage.js","test":"@component-controls/pages/TestingPage"}},"blog":{"basePath":"blogs/"},"author":{"basePath":"authors/"},"page":{"basePath":"pages/"},"tags":{"basePath":"tags/"}},"search":{"searchingModule":"@component-controls/search-fusejs"},"stories":["../src/docs/*.@(mdx|tsx)"],"siteUrl":"https://gatsby-controls-starter.netlify.app"}};

store.search = search.default || search;
store.config = configJSON.default || configJSON;
store.buildConfig = {"siteRoot":"/","siteMap":{"pages":{"home":{"priority":1},"index":{"priority":0.8},"doc":{"priority":0.5}}},"categories":["author","tags"],"ignore":["readme.md","changelog.md","code_of_conduct.md","contributing.md","license.md"],"pages":{"story":{"basePath":"docs/","sideNav":{"storyPaths":true,"collapseSingle":true},"tabs":{"page":"/Users/atanasster/webpack-5-controls-starter/node_modules/@component-controls/pages/ClassicPage.js","test":"@component-controls/pages/TestingPage"}},"blog":{"basePath":"blogs/"},"author":{"basePath":"authors/"},"page":{"basePath":"pages/"},"tags":{"basePath":"tags/"}},"search":{"searchingModule":"@component-controls/search-fusejs"},"stories":["../src/docs/*.@(mdx|tsx)"],"siteUrl":"https://gatsby-controls-starter.netlify.app"};
store.buildConfig.pages.story.tabs["page"] = 
  loadPageTab(store.buildConfig.pages.story.tabs["page"], story_0);
store.buildConfig.pages.story.tabs["test"] = 
  loadPageTab(store.buildConfig.pages.story.tabs["test"], story_1);

  const assignProps = (obj, { storyName, story, ...props}) => {
    //preserve component and subcomponents as strings
    const componentName = obj.component;
    const subcomponentsName = obj.subcomponents;
    Object.assign(obj, props);
    if (componentName !== undefined) {
      obj.component = componentName;
    }  
    if (subcomponentsName !== undefined) {
      obj.subcomponents = subcomponentsName;
    }
    if (storyName) {
      obj.name = storyName;
    }
  }
  for (let i = 0; i < store.stores.length; i+= 1) {
    const s =  store.stores[i];
    const doc = s.doc;
    if (doc) {
      let exports = null;
      for (const context of contexts) {
        const key = context.req.keys().find(k => {
          const fullPath = path.join(context.folder, k);
          const normalizedPath = context.folder.indexOf('\\') >= 0 ? fullPath.split('/').join('\\') : fullPath;
          return doc.fileName === normalizedPath;
        });
        if (key) {
          exports = context.req(key);
          break;
        }
      }
      if (exports) {
        try {
          if (exports.default) {
            const { storySource, ...rest } = exports.default;
            assignProps(doc, rest);
          }
          Object.keys(exports).filter(key => key !== 'default').forEach(key => {
            const exported = exports[key];
            const story = s.stories[key];
            if (story) {
              story.renderFn = typeof exported === 'function' ? exported : (doc.template || exported);
              assignProps(story, exported);
              if (exported.story) {
                assignProps(story, exported.story);
              }
            }
          });
        } catch (e) {
          console.error(`unable to load module ${doc.moduleId}`, e);
        }
      } else {
        //file could not be found
        store.stores.splice(i, 1);
        i -= 1; 
      }
    }  
  }

module.exports = store;



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  title: "awLib",
  description: "Some description meta.",
  author: 'my name'
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_controls_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _component_controls_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_controls_core__WEBPACK_IMPORTED_MODULE_2__);




const FusejsLogo = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 90.000000 90.000000", preserveAspectRatio: "xMidYMid meet" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { transform: "translate(0.000000,90.000000) scale(0.100000,-0.100000)", fill: "#a684c6", stroke: "none" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M385 796 c-17 -12 -18 -19 -7 -109 20 -164 25 -158 -75 -77 -50 39\n-97 70 -110 70 -26 0 -73 -72 -73 -112 0 -23 10 -30 103 -68 56 -24 106 -46\n110 -50 4 -4 -32 -22 -80 -40 -146 -54 -155 -66 -108 -147 19 -31 32 -43 49\n-43 13 0 61 29 109 65 99 75 94 80 75 -72 -11 -90 -10 -97 7 -109 24 -18 106\n-18 130 0 17 12 18 19 7 109 -19 152 -24 147 75 72 47 -36 96 -65 109 -65 16\n0 30 13 48 44 47 81 39 92 -107 147 -48 18 -84 36 -80 39 5 4 54 26 111 50 92\n38 102 45 102 68 0 41 -47 112 -74 112 -13 0 -59 -29 -109 -70 -100 -81 -95\n-86 -75 77 11 90 10 97 -7 109 -10 8 -40 14 -65 14 -25 0 -55 -6 -65 -14z" }))));
const useSearch = (store) => {
    const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    const { options, hitsPerPage = 20, fields } = store.config.search || {};
    const fusejs = options;
    const searchIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const docs = store.docs;
        return new fuse_js__WEBPACK_IMPORTED_MODULE_1___default.a(Object.keys(docs).map(key => {
            const doc = docs[key];
            return Object(_component_controls_core__WEBPACK_IMPORTED_MODULE_2__["docToSearchObject"])(doc, fields);
        }), Object.assign({ includeScore: true, useExtendedSearch: true, keys: [
                { name: 'title', weight: 0.2 },
                { name: 'description', weight: 0.2 },
                { name: 'source', weight: 0.1 },
                { name: 'author', weight: 0.04 },
                { name: 'stories', weight: 0.04 },
                { name: 'tags', weight: 0.3 },
                { name: 'components', weight: 0.1 },
            ] }, fusejs));
    }, [fusejs, store.docs, fields]);
    const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((search) => {
        if (search) {
            const searchResults = searchIndex.search(search);
            const newItems = searchResults
                .sort((a, b) => (a.score || 0) - (b.score || 0))
                .slice(0, hitsPerPage)
                .filter(result => store.docs[result.item.objectID])
                .map(result => Object(_component_controls_core__WEBPACK_IMPORTED_MODULE_2__["docToSearchItem"])(store, result.item.objectID, search));
            setItems(newItems);
        }
        else {
            setItems(Object(_component_controls_core__WEBPACK_IMPORTED_MODULE_2__["emptySearchDocuments"])(store));
        }
    }, [store, searchIndex, hitsPerPage]);
    return {
        items,
        searchFn: onSearch,
        provider: {
            url: 'https://fusejs.io',
            name: 'Fuse.js',
            logo: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FusejsLogo, null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { fontWeight: 'bold' } }, "Fuse.js"))),
        },
    };
};

/* harmony default export */ __webpack_exports__["default"] = (useSearch);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var themeUi = __webpack_require__(1);
var React = __webpack_require__(0);
var blocks = __webpack_require__(3);
var core = __webpack_require__(7);
var store = __webpack_require__(6);

/** @jsx jsx */
const ClassicPage = ({ controlsThreshold = 10 }) => {
    const story = store.useCurrentStory();
    const controlsCount = core.getControlsCount(story === null || story === void 0 ? void 0 : story.controls);
    const propsCount = store.useCurrentPropsCount();
    const splitControls = controlsCount > 0 &&
        controlsCount <= controlsThreshold &&
        (propsCount === 0 ||
            (controlsCount < propsCount && propsCount >= controlsThreshold));
    const mixedControls = !splitControls && controlsCount >= propsCount;
    return (themeUi.jsx(React.Fragment, null,
        themeUi.jsx(blocks.PackageVersion, null),
        themeUi.jsx(blocks.Description, null),
        themeUi.jsx(blocks.ComponentSource, { id: ".", title: "Component" }),
        themeUi.jsx(blocks.Playground, { title: "." },
            themeUi.jsx(blocks.Story, { id: "." })),
        splitControls && (themeUi.jsx(blocks.PropsTable, { flat: controlsCount === propsCount, of: ".", title: "Controls", visibility: "controls" })),
        (propsCount > 0 || (!splitControls && controlsCount > 0)) && (themeUi.jsx(blocks.PropsTable, { of: ".", title: mixedControls ? 'Controls' : 'Properties', flat: propsCount <= controlsThreshold && !mixedControls, visibility: splitControls ? 'info' : 'all' })),
        themeUi.jsx(blocks.ExternalDependencies, { id: ".", title: "External dependencies" }),
        themeUi.jsx(blocks.LocalDependencies, { id: ".", title: "Internal dependencies" }),
        themeUi.jsx(blocks.ComponentJSX, { id: ".", title: "Component JSX" }),
        themeUi.jsx(blocks.Stories, { dark: true })));
};
var ClassicPage$1 = {
    title: 'Documentation',
    component: ClassicPage,
    controlsThreshold: 10,
};

module.exports = ClassicPage$1;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var blocks = __webpack_require__(3);
var core = __webpack_require__(7);
var store = __webpack_require__(6);
var axePlugin = __webpack_require__(79);
var viewportPlugin = __webpack_require__(80);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TestingPage = () => {
    const story = store.useCurrentStory();
    const controlsCount = core.getControlsCount(story === null || story === void 0 ? void 0 : story.controls);
    return (React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement(blocks.Description, null),
        controlsCount > 0 && (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(blocks.Playground, { title: "." },
                React__default['default'].createElement(blocks.Story, { id: "." })),
            React__default['default'].createElement(blocks.PropsTable, { of: ".", title: "Controls", visibility: "controls" }))),
        React__default['default'].createElement(axePlugin.AllyBlock, { title: "A11y tests" }),
        React__default['default'].createElement(viewportPlugin.ViewportBlock, { title: "Viewport" })));
};
var TestingPage$1 = {
    title: 'Testing',
    component: TestingPage,
};

module.exports = TestingPage$1;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./first-page.mdx": 53,
	"./first-story.mdx": 77,
	"./first-story.stories.tsx": 78
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 52;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

var _interopRequireDefault = __webpack_require__(37);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(38);

var _extends2 = _interopRequireDefault(__webpack_require__(39));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var _react = _interopRequireDefault(__webpack_require__(0));

var _react2 = __webpack_require__(41);

/* @jsxRuntime classic */

/* @jsx mdx */
var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["components"]);
  return (0, _react2.mdx)(MDXLayout, (0, _extends2["default"])({}, layoutProps, props, {
    components: components
  }), (0, _react2.mdx)("blockquote", null, (0, _react2.mdx)("p", {
    parentName: "blockquote"
  }, "example markdown page ", (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "https://markdown-it.github.io"
  }, "markdown-it"))), (0, _react2.mdx)("p", null, (0, _react2.mdx)("strong", {
    parentName: "p"
  }, "Advertisement \uD83D\uDE09")), (0, _react2.mdx)("ul", null, (0, _react2.mdx)("li", {
    parentName: "ul"
  }, (0, _react2.mdx)("strong", {
    parentName: "li"
  }, (0, _react2.mdx)("a", {
    parentName: "strong",
    "href": "https://nodeca.github.io/pica/demo/"
  }, "pica")), " - high quality and fast image\nresize in browser."), (0, _react2.mdx)("li", {
    parentName: "ul"
  }, (0, _react2.mdx)("strong", {
    parentName: "li"
  }, (0, _react2.mdx)("a", {
    parentName: "strong",
    "href": "https://github.com/nodeca/babelfish/"
  }, "babelfish")), " - developer friendly\ni18n with plurals support and easy syntax.")), (0, _react2.mdx)("p", null, "You will like those projects!"), (0, _react2.mdx)("hr", null), (0, _react2.mdx)("h1", null, "h1 Heading \uD83D\uDE04"), (0, _react2.mdx)("h2", null, "h2 Heading"), (0, _react2.mdx)("h3", null, "h3 Heading"), (0, _react2.mdx)("h4", null, "h4 Heading"), (0, _react2.mdx)("h5", null, "h5 Heading"), (0, _react2.mdx)("h6", null, "h6 Heading"), (0, _react2.mdx)("h2", null, "Horizontal Rules"), (0, _react2.mdx)("hr", null), (0, _react2.mdx)("hr", null), (0, _react2.mdx)("hr", null), (0, _react2.mdx)("h2", null, "Typographic replacements"), (0, _react2.mdx)("p", null, "Enable typographer option to see result."), (0, _react2.mdx)("p", null, "(c) (C) (r) (R) (tm) (TM) (p) (P) +-"), (0, _react2.mdx)("p", null, "test.. test... test..... test?..... test!...."), (0, _react2.mdx)("p", null, "!!!!!! ???? ,,  -- ---"), (0, _react2.mdx)("p", null, "\"Smartypants, double quotes\" and 'single quotes'"), (0, _react2.mdx)("h2", null, "Emphasis"), (0, _react2.mdx)("p", null, (0, _react2.mdx)("strong", {
    parentName: "p"
  }, "This is bold text")), (0, _react2.mdx)("p", null, (0, _react2.mdx)("strong", {
    parentName: "p"
  }, "This is bold text")), (0, _react2.mdx)("p", null, (0, _react2.mdx)("em", {
    parentName: "p"
  }, "This is italic text")), (0, _react2.mdx)("p", null, (0, _react2.mdx)("em", {
    parentName: "p"
  }, "This is italic text")), (0, _react2.mdx)("p", null, (0, _react2.mdx)("del", {
    parentName: "p"
  }, "Strikethrough")), (0, _react2.mdx)("h2", null, "Blockquotes"), (0, _react2.mdx)("blockquote", null, (0, _react2.mdx)("p", {
    parentName: "blockquote"
  }, "Blockquotes can also be nested..."), (0, _react2.mdx)("blockquote", {
    parentName: "blockquote"
  }, (0, _react2.mdx)("p", {
    parentName: "blockquote"
  }, "...by using additional greater-than signs right next to each other..."), (0, _react2.mdx)("blockquote", {
    parentName: "blockquote"
  }, (0, _react2.mdx)("p", {
    parentName: "blockquote"
  }, "...or with spaces between arrows.")))), (0, _react2.mdx)("h2", null, "Lists"), (0, _react2.mdx)("p", null, "Unordered"), (0, _react2.mdx)("ul", null, (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "Create a list by starting a line with ", (0, _react2.mdx)("inlineCode", {
    parentName: "li"
  }, "+"), ", ", (0, _react2.mdx)("inlineCode", {
    parentName: "li"
  }, "-"), ", or ", (0, _react2.mdx)("inlineCode", {
    parentName: "li"
  }, "*")), (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "Sub-lists are made by indenting 2 spaces:", (0, _react2.mdx)("ul", {
    parentName: "li"
  }, (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "Marker character change forces new list start:", (0, _react2.mdx)("ul", {
    parentName: "li"
  }, (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "Ac tristique libero volutpat at")), (0, _react2.mdx)("ul", {
    parentName: "li"
  }, (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "Facilisis in pretium nisl aliquet")), (0, _react2.mdx)("ul", {
    parentName: "li"
  }, (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "Nulla volutpat aliquam velit"))))), (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "Very easy!")), (0, _react2.mdx)("p", null, "Ordered"), (0, _react2.mdx)("ol", null, (0, _react2.mdx)("li", {
    parentName: "ol"
  }, "Lorem ipsum dolor sit amet"), (0, _react2.mdx)("li", {
    parentName: "ol"
  }, "Consectetur adipiscing elit"), (0, _react2.mdx)("li", {
    parentName: "ol"
  }, "Integer molestie lorem at massa")), (0, _react2.mdx)("ol", null, (0, _react2.mdx)("li", {
    parentName: "ol"
  }, "You can use sequential numbers..."), (0, _react2.mdx)("li", {
    parentName: "ol"
  }, "...or keep all the numbers as ", (0, _react2.mdx)("inlineCode", {
    parentName: "li"
  }, "1."))), (0, _react2.mdx)("p", null, "Start numbering with offset:"), (0, _react2.mdx)("ol", {
    "start": 57
  }, (0, _react2.mdx)("li", {
    parentName: "ol"
  }, "foo"), (0, _react2.mdx)("li", {
    parentName: "ol"
  }, "bar")), (0, _react2.mdx)("h2", null, "Code"), (0, _react2.mdx)("p", null, "Inline ", (0, _react2.mdx)("inlineCode", {
    parentName: "p"
  }, "code")), (0, _react2.mdx)("p", null, "Indented code"), (0, _react2.mdx)("pre", null, (0, _react2.mdx)("code", {
    parentName: "pre"
  }, "// Some comments\nline 1 of code\nline 2 of code\nline 3 of code\n")), (0, _react2.mdx)("p", null, "Block code \"fences\""), (0, _react2.mdx)("pre", null, (0, _react2.mdx)("code", {
    parentName: "pre"
  }, "Sample text here...\n")), (0, _react2.mdx)("p", null, "Syntax highlighting"), (0, _react2.mdx)("pre", null, (0, _react2.mdx)("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n")), (0, _react2.mdx)("h2", null, "Tables"), (0, _react2.mdx)("table", null, (0, _react2.mdx)("thead", {
    parentName: "table"
  }, (0, _react2.mdx)("tr", {
    parentName: "thead"
  }, (0, _react2.mdx)("th", {
    parentName: "tr",
    "align": null
  }, "Option"), (0, _react2.mdx)("th", {
    parentName: "tr",
    "align": null
  }, "Description"))), (0, _react2.mdx)("tbody", {
    parentName: "table"
  }, (0, _react2.mdx)("tr", {
    parentName: "tbody"
  }, (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "data"), (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "path to data files to supply the data that will be passed into templates.")), (0, _react2.mdx)("tr", {
    parentName: "tbody"
  }, (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "engine"), (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "engine to be used for processing templates. Handlebars is the default.")), (0, _react2.mdx)("tr", {
    parentName: "tbody"
  }, (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "ext"), (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "extension to be used for dest files.")))), (0, _react2.mdx)("p", null, "Right aligned columns"), (0, _react2.mdx)("table", null, (0, _react2.mdx)("thead", {
    parentName: "table"
  }, (0, _react2.mdx)("tr", {
    parentName: "thead"
  }, (0, _react2.mdx)("th", {
    parentName: "tr",
    "align": "right"
  }, "Option"), (0, _react2.mdx)("th", {
    parentName: "tr",
    "align": "right"
  }, "Description"))), (0, _react2.mdx)("tbody", {
    parentName: "table"
  }, (0, _react2.mdx)("tr", {
    parentName: "tbody"
  }, (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": "right"
  }, "data"), (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": "right"
  }, "path to data files to supply the data that will be passed into templates.")), (0, _react2.mdx)("tr", {
    parentName: "tbody"
  }, (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": "right"
  }, "engine"), (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": "right"
  }, "engine to be used for processing templates. Handlebars is the default.")), (0, _react2.mdx)("tr", {
    parentName: "tbody"
  }, (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": "right"
  }, "ext"), (0, _react2.mdx)("td", {
    parentName: "tr",
    "align": "right"
  }, "extension to be used for dest files.")))), (0, _react2.mdx)("h2", null, "Links"), (0, _react2.mdx)("p", null, (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "http://dev.nodeca.com"
  }, "link text")), (0, _react2.mdx)("p", null, (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "http://nodeca.github.io/pica/demo/",
    "title": "title text!"
  }, "link with title")), (0, _react2.mdx)("p", null, "Autoconverted link ", (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "https://github.com/nodeca/pica"
  }, "https://github.com/nodeca/pica"), " (enable linkify to see)"), (0, _react2.mdx)("h2", null, "Images"), (0, _react2.mdx)("p", null, (0, _react2.mdx)("img", {
    parentName: "p",
    "src": "https://octodex.github.com/images/minion.png",
    "alt": "Minion"
  }), "\n", (0, _react2.mdx)("img", {
    parentName: "p",
    "src": "https://octodex.github.com/images/stormtroopocat.jpg",
    "alt": "Stormtroopocat",
    "title": "The Stormtroopocat"
  })), (0, _react2.mdx)("p", null, "Like links, Images also have a footnote style syntax"), (0, _react2.mdx)("p", null, (0, _react2.mdx)("img", {
    parentName: "p",
    "src": "https://octodex.github.com/images/dojocat.jpg",
    "alt": "Alt text",
    "title": "The Dojocat"
  })), (0, _react2.mdx)("p", null, "With a reference later in the document defining the URL location:"), (0, _react2.mdx)("h2", null, "Plugins"), (0, _react2.mdx)("p", null, "The killer feature of ", (0, _react2.mdx)("inlineCode", {
    parentName: "p"
  }, "markdown-it"), " is very effective support of\n", (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "https://www.npmjs.org/browse/keyword/markdown-it-plugin"
  }, "syntax plugins"), "."), (0, _react2.mdx)("h3", null, (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-emoji"
  }, "Emojies")), (0, _react2.mdx)("blockquote", null, (0, _react2.mdx)("p", {
    parentName: "blockquote"
  }, "Classic markup: \uD83D\uDE09 :crush: \uD83D\uDE22 :tear: \uD83D\uDE06 \uD83D\uDE0B"), (0, _react2.mdx)("p", {
    parentName: "blockquote"
  }, "Shortcuts (emoticons): :-) :-( 8-) ;)")), (0, _react2.mdx)("p", null, "see ", (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "https://github.com/markdown-it/markdown-it-emoji#change-output"
  }, "how to change output"), " with twemoji."), (0, _react2.mdx)("h3", null, (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-sub"
  }, "Subscript"), " / ", (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-sup"
  }, "Superscript")), (0, _react2.mdx)("ul", null, (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "19^th^"), (0, _react2.mdx)("li", {
    parentName: "ul"
  }, "H~2~O")), (0, _react2.mdx)("h3", null, (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-ins"
  }, "Inserted")), (0, _react2.mdx)("p", null, "++Inserted text++"), (0, _react2.mdx)("h3", null, (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-mark"
  }, "Marked")), (0, _react2.mdx)("p", null, "==Marked text=="), (0, _react2.mdx)("h3", null, (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-footnote"
  }, "Footnotes")), (0, _react2.mdx)("p", null, "Footnote 1 link", (0, _react2.mdx)("sup", {
    parentName: "p",
    "id": "fnref-first"
  }, (0, _react2.mdx)("a", {
    parentName: "sup",
    "href": "#fn-first",
    "className": "footnote-ref"
  }, "first")), "."), (0, _react2.mdx)("p", null, "Footnote 2 link", (0, _react2.mdx)("sup", {
    parentName: "p",
    "id": "fnref-second"
  }, (0, _react2.mdx)("a", {
    parentName: "sup",
    "href": "#fn-second",
    "className": "footnote-ref"
  }, "second")), "."), (0, _react2.mdx)("p", null, "Inline footnote^", "[Text of inline footnote]", " definition."), (0, _react2.mdx)("p", null, "Duplicated footnote reference", (0, _react2.mdx)("sup", {
    parentName: "p",
    "id": "fnref-second"
  }, (0, _react2.mdx)("a", {
    parentName: "sup",
    "href": "#fn-second",
    "className": "footnote-ref"
  }, "second")), "."), (0, _react2.mdx)("h3", null, (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-deflist"
  }, "Definition lists")), (0, _react2.mdx)("p", null, "Term 1"), (0, _react2.mdx)("p", null, ":   Definition 1\nwith lazy continuation."), (0, _react2.mdx)("p", null, "Term 2 with ", (0, _react2.mdx)("em", {
    parentName: "p"
  }, "inline markup")), (0, _react2.mdx)("p", null, ":   Definition 2"), (0, _react2.mdx)("pre", null, (0, _react2.mdx)("code", {
    parentName: "pre"
  }, "        { some code, part of Definition 2 }\n")), (0, _react2.mdx)("pre", null, (0, _react2.mdx)("code", {
    parentName: "pre"
  }, "Third paragraph of definition 2.\n")), (0, _react2.mdx)("p", null, (0, _react2.mdx)("em", {
    parentName: "p"
  }, "Compact style:")), (0, _react2.mdx)("p", null, "Term 1\n~ Definition 1"), (0, _react2.mdx)("p", null, "Term 2\n~ Definition 2a\n~ Definition 2b"), (0, _react2.mdx)("h3", null, (0, _react2.mdx)("a", {
    parentName: "h3",
    "href": "https://github.com/markdown-it/markdown-it-abbr"
  }, "Abbreviations")), (0, _react2.mdx)("p", null, "This is HTML abbreviation example."), (0, _react2.mdx)("p", null, "It converts \"HTML\", but keep intact partial entries like \"xxxHTMLyyy\" and so on."), (0, _react2.mdx)("p", null, "*", "[HTML]", ": Hyper Text Markup Language"), (0, _react2.mdx)("div", {
    "className": "footnotes"
  }, (0, _react2.mdx)("hr", {
    parentName: "div"
  }), (0, _react2.mdx)("ol", {
    parentName: "div"
  }, (0, _react2.mdx)("li", {
    parentName: "ol",
    "id": "fn-first"
  }, (0, _react2.mdx)("p", {
    parentName: "li"
  }, "Footnote ", (0, _react2.mdx)("strong", {
    parentName: "p"
  }, "can have markup")), (0, _react2.mdx)("p", {
    parentName: "li"
  }, "and multiple paragraphs.", (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "#fnref-first",
    "className": "footnote-backref"
  }, "\u21A9"))), (0, _react2.mdx)("li", {
    parentName: "ol",
    "id": "fn-second"
  }, (0, _react2.mdx)("p", {
    parentName: "li"
  }, "Footnote text.", (0, _react2.mdx)("a", {
    parentName: "p",
    "href": "#fnref-second",
    "className": "footnote-backref"
  }, "\u21A9"))))));
}

;
MDXContent.isMDXComponent = true;
var mdxDefaultExport = MDXContent;
Object.assign(mdxDefaultExport, {
  "MDXPage": MDXContent,
  "title": "First Page",
  "componentsLookup": {},
  "package": "58714a769d186b9c1da9dea00c0caad3",
  "dateModified": "2021-02-28T11:59:16.987Z",
  "date": "2021-02-28T11:59:16.987Z"
});
var _default = mdxDefaultExport;
exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var isObject = __webpack_require__(13);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var createNonEnumerableProperty = __webpack_require__(14);
var has = __webpack_require__(12);
var setGlobal = __webpack_require__(18);
var inspectSource = __webpack_require__(31);
var InternalStateModule = __webpack_require__(58);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(59);
var global = __webpack_require__(5);
var isObject = __webpack_require__(13);
var createNonEnumerableProperty = __webpack_require__(14);
var objectHas = __webpack_require__(12);
var shared = __webpack_require__(19);
var sharedKey = __webpack_require__(60);
var hiddenKeys = __webpack_require__(32);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var inspectSource = __webpack_require__(31);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(61);
var uid = __webpack_require__(63);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(62);
var store = __webpack_require__(19);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var ownKeys = __webpack_require__(65);
var getOwnPropertyDescriptorModule = __webpack_require__(23);
var definePropertyModule = __webpack_require__(17);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(66);
var getOwnPropertyNamesModule = __webpack_require__(68);
var getOwnPropertySymbolsModule = __webpack_require__(36);
var anObject = __webpack_require__(30);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(67);
var global = __webpack_require__(5);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);

module.exports = global;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(35);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(16);
var toLength = __webpack_require__(70);
var toAbsoluteIndex = __webpack_require__(71);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(11);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(11);
var objectKeys = __webpack_require__(74);
var getOwnPropertySymbolsModule = __webpack_require__(36);
var propertyIsEnumerableModule = __webpack_require__(24);
var toObject = __webpack_require__(75);
var IndexedObject = __webpack_require__(26);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  /* global Symbol -- required for testing */
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(35);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(27);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

var _interopRequireDefault = __webpack_require__(37);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simple = exports["default"] = void 0;

__webpack_require__(38);

var _extends2 = _interopRequireDefault(__webpack_require__(39));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var _react = _interopRequireDefault(__webpack_require__(0));

var _react2 = __webpack_require__(41);

var _Button = __webpack_require__(15);

var _blocks = __webpack_require__(3);

/* @jsxRuntime classic */

/* @jsx mdx */
var layoutProps = {};
var MDXLayout = "wrapper";

function MDXContent(_ref) {
  var components = _ref.components,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["components"]);
  return (0, _react2.mdx)(MDXLayout, (0, _extends2["default"])({}, layoutProps, props, {
    components: components
  }), (0, _react2.mdx)("h1", null, "My first doc story"), (0, _react2.mdx)("h2", null, "Component source"), (0, _react2.mdx)(_blocks.ComponentSource, {
    of: ".",
    title: "Component source"
  }), (0, _react2.mdx)("h2", null, "Playground"), (0, _react2.mdx)(_blocks.Playground, {
    description: "Button story"
  }, (0, _react2.mdx)(_blocks.Story, {
    name: "simple",
    component: _Button.Button
  }, function (_ref2) {
    var backgroundColor = _ref2.backgroundColor;
    return (0, _react2.mdx)(_Button.Button, {
      backgroundColor: backgroundColor
    }, "click me");
  })), (0, _react2.mdx)("h2", null, "Component Props"), (0, _react2.mdx)(_blocks.PropsTable, {
    of: ".",
    visibility: "controls"
  }));
}

;
MDXContent.isMDXComponent = true;
var mdxDefaultExport = MDXContent;
Object.assign(mdxDefaultExport, {
  "MDXPage": MDXContent,
  "title": "First Story",
  "componentsLookup": {
    "Button": "8cf4a7ff8d19f3ee766a954fcac2bea3"
  },
  "package": "b8009a08a25c1333f0cd00b9d9440e19",
  "dateModified": "2021-02-28T11:59:16.989Z",
  "date": "2021-02-28T11:59:16.988Z"
});
var _default = mdxDefaultExport;
exports["default"] = _default;

var simple = function simple(_ref3) {
  var backgroundColor = _ref3.backgroundColor;
  return (0, _react2.mdx)(_Button.Button, {
    backgroundColor: backgroundColor
  }, "click me");
};

exports.simple = simple;
simple.story = {
  "name": "simple",
  "component": _Button.Button
};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overview", function() { return overview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'ES Story',
  component: _components_Button__WEBPACK_IMPORTED_MODULE_1__["Button"]
});
var overview = function overview(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], props, "click me");
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AllyBlock", function() { return /* reexport */ AllyBlock; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(8);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external "axe-core"
var external_axe_core_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@component-controls/store"
var store_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@component-controls/components"
var components_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@component-controls/blocks"
var blocks_ = __webpack_require__(3);

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@primer/octicons-react"
var octicons_react_ = __webpack_require__(4);

// EXTERNAL MODULE: external "react-google-charts"
var external_react_google_charts_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/@component-controls/axe-plugin/dist/AllyBlock.esm.js










/* eslint-disable @typescript-eslint/no-empty-function */
const AxeContext = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["createContext"])({
    results: {
        violations: [],
        passes: [],
        incomplete: [],
    },
});
const AxeSetContext = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["createContext"])({
    setResults: () => { },
});
const AxeContextProvider = ({ children }) => {
    const [state, setState] = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useState"])({
        violations: [],
        passes: [],
        incomplete: [],
    });
    return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(AxeContext.Provider, { value: {
            results: state,
        } },
        external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(AxeSetContext.Provider, { value: {
                setResults: results => {
                    setState(results);
                },
            } }, children)));
};
const trimNode = (tag) => {
    const trimmedList = tag.split('>');
    const storyNode = trimmedList.findIndex(s => s.includes('[data-testid="story"]'));
    trimmedList.splice(0, storyNode + 1);
    trimmedList.pop();
    return trimmedList.join('>');
};
const trimNodeList = (tagList) => {
    return tagList.map(el => trimNode(el));
};
const useTaggedList = () => {
    const { results: { violations }, } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(AxeContext);
    return violations.reduce((acc, result) => {
        result.tags.forEach(tag => {
            if (acc[tag] === undefined) {
                acc[tag] = [];
            }
            result.nodes.forEach(node => {
                node.target.forEach(target => {
                    if (!acc[tag].includes(target)) {
                        acc[tag].push(target);
                    }
                });
            });
        });
        return acc;
    }, {});
};
const SelectionContext = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["createContext"])({
    selection: [],
    setSelection: () => { },
    isSelected: () => false,
});
const SelectionContextProvider = ({ children }) => {
    const [selection, setSelection] = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useState"])([]);
    const value = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useMemo"])(() => ({
        selection,
        setSelection: (newSelection) => {
            setSelection(newSelection);
        },
        isSelected: (targets) => tagSelectedList(selection, targets, true).length > 0,
    }), [selection]);
    return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(SelectionContext.Provider, { value: value }, children));
};
const useIsTagSelected = (tag = '') => {
    const tagged = useTaggedList();
    const { selection } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(SelectionContext);
    return tagged[tag]
        ? tagSelectedList(selection, tagged[tag], true).length > 0
        : false;
};
const tagSelectedList = (selection, tags, selected) => {
    const tagsTrimmed = trimNodeList(tags);
    return selection.filter((e) => {
        return tagsTrimmed.includes(trimNode(e)) === selected;
    });
};

/* eslint-disable react/display-name */
const SelectionCheckbox = ({ target }) => {
    const { isSelected, selection, setSelection } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(SelectionContext);
    const checked = isSelected(target);
    const toggleSelection = (selector) => {
        const included = tagSelectedList(selection, selector, true);
        if (included.length) {
            setSelection(tagSelectedList(selection, selector, false));
        }
        else {
            setSelection([...selection, ...selector]);
        }
    };
    return (Object(external_theme_ui_["jsx"])(external_theme_ui_["Label"], null,
        Object(external_theme_ui_["jsx"])(external_theme_ui_["Checkbox"], { onChange: () => toggleSelection(target), checked: checked })));
};
const NodesTable = ({ nodes, hideErrorColumns, }) => {
    const columns = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useMemo"])(() => [
        {
            Header: '',
            accessor: 'target',
            width: 80,
            Cell: ({ row: { original: { target }, }, }) => Object(external_theme_ui_["jsx"])(SelectionCheckbox, { target: target }),
        },
        {
            Header: 'summary',
            accessor: 'failureSummary',
        },
        {
            Header: 'html',
            accessor: 'html',
            Cell: ({ value }) => {
                return (Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], { sx: {
                        '& .token-line': {
                            whiteSpace: 'break-spaces',
                        },
                    } },
                    Object(external_theme_ui_["jsx"])(components_["SyntaxHighlighter"], { language: "markup" }, value)));
            },
        },
        {
            Header: 'target',
            accessor: 'target',
            Cell: ({ value }) => {
                return (Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], { css: {
                        flexWrap: 'wrap',
                    } }, value &&
                    value.map(target => (Object(external_theme_ui_["jsx"])(components_["Tag"], { key: `${target}`, color: "lightgrey", variant: "tag.rightmargin" }, trimNode(target))))));
            },
        },
    ], []);
    return (Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], { sx: {
            backgroundColor: 'shadow',
        } },
        Object(external_theme_ui_["jsx"])(components_["Table"], { data: nodes, columns: columns, hiddenColumns: hideErrorColumns ? ['failureSummary', 'targets'] : ['targets'] })));
};

/* eslint-disable react/display-name */
const impactColors = {
    minor: {
        color: '#2196f3',
        icon: octicons_react_["InfoIcon"],
    },
    moderate: {
        color: '#f57c00',
        icon: octicons_react_["IssueOpenedIcon"],
    },
    serious: {
        color: '#e57373',
        icon: octicons_react_["AlertIcon"],
    },
    critical: {
        color: '#dc004e',
        icon: octicons_react_["StopIcon"],
    },
};
const ResultsTable = ({ results, hideErrorColumns }) => {
    const renderRowSubComponent = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useCallback"])(({ row }) => (Object(external_theme_ui_["jsx"])(NodesTable, { nodes: row.original.nodes, hideErrorColumns: hideErrorColumns })), [hideErrorColumns]);
    const table = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useMemo"])(() => {
        const columns = [
            {
                // Build our expander column
                id: 'expander',
                Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (Object(external_theme_ui_["jsx"])("span", Object.assign({}, getToggleAllRowsExpandedProps()), isAllRowsExpanded ? Object(external_theme_ui_["jsx"])(octicons_react_["TriangleDownIcon"], null) : Object(external_theme_ui_["jsx"])(octicons_react_["TriangleRightIcon"], null))),
                width: 50,
                Cell: ({ row }) => (Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], Object.assign({}, row.getToggleRowExpandedProps(), { sx: {
                        pl: 2,
                    } }), row.isExpanded ? Object(external_theme_ui_["jsx"])(octicons_react_["ChevronDownIcon"], null) : Object(external_theme_ui_["jsx"])(octicons_react_["ChevronRightIcon"], null))),
            },
            {
                Header: 'id',
                accessor: 'id',
                Cell: ({ row: { original: { helpUrl, id }, }, }) => {
                    const el = Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], { css: { whiteSpace: 'nowrap' } }, id);
                    if (!helpUrl) {
                        return el;
                    }
                    return Object(external_theme_ui_["jsx"])(components_["ExternalLink"], { href: helpUrl }, el);
                },
            },
            {
                Header: 'impact',
                accessor: 'impact',
                Cell: ({ value }) => {
                    const impact = value ? impactColors[value] : undefined;
                    return (Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], { sx: {
                            alignItems: 'center',
                            flexDirection: 'row',
                            color: impact ? impact.color : undefined,
                        } },
                        impact && Object(external_theme_ui_["jsx"])(impact.icon, null),
                        Object(external_theme_ui_["jsx"])(external_theme_ui_["Text"], { sx: {
                                pl: impact ? 2 : 0,
                            } }, value)));
                },
            },
            {
                Header: 'description',
                accessor: 'description',
            },
            {
                Header: 'tags',
                accessor: 'tags',
                Cell: ({ value }) => (Object(external_theme_ui_["jsx"])(external_theme_ui_["Flex"], { css: {
                        flexWrap: 'wrap',
                    } }, value &&
                    value.map(tag => (Object(external_theme_ui_["jsx"])(components_["Tag"], { key: `${tag}`, color: "lightgrey", variant: "tag.rightmargin" }, tag))))),
            },
        ];
        return (Object(external_theme_ui_["jsx"])(components_["Table"], { data: results || [], columns: columns, hiddenColumns: hideErrorColumns ? ['impact'] : undefined, renderRowSubComponent: renderRowSubComponent }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results === null || results === void 0 ? void 0 : results.length, hideErrorColumns, renderRowSubComponent]);
    return table;
};
const ViolationsTable = () => {
    const { results: { violations }, } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(AxeContext);
    return Object(external_theme_ui_["jsx"])(ResultsTable, { results: violations });
};
const PassesTable = () => {
    const { results: { passes }, } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(AxeContext);
    return Object(external_theme_ui_["jsx"])(ResultsTable, { results: passes, hideErrorColumns: true });
};
const IncompleteTable = () => {
    const { results: { incomplete }, } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(AxeContext);
    return Object(external_theme_ui_["jsx"])(ResultsTable, { results: incomplete });
};

const HighlightNode = (_a) => {
    var { selection } = _a, rest = Object(tslib_es6["a" /* __rest */])(_a, ["selection"]);
    const styles = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useMemo"])(() => {
        const selectors = selection.map(c => {
            const style = c.split('.story-render-container');
            let selector;
            if (style.length >= 2) {
                selector = `.story-render-container${style[style.length - 1] ? style[style.length - 1] : ':first-child'}`;
            }
            else if (c === ':root') {
                selector = '.story-render-container > * ';
            }
            else {
                selector = c;
            }
            return `${selector}`;
        });
        return selectors.length
            ? {
                [`${selectors.join(', ')}`]: {
                    outline: '3px dotted red',
                    outlineOffset: '3px',
                },
            }
            : undefined;
    }, [selection]);
    return Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], Object.assign({ sx: styles }, rest));
};
const HighlightSelector = ({ children }) => {
    const { selection } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(SelectionContext);
    return Object(external_theme_ui_["jsx"])(HighlightNode, { selection: selection }, children);
};

const TagSelectionCheckbox = ({ tag }) => {
    const isSelected = useIsTagSelected(tag);
    const { selection, setSelection } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(SelectionContext);
    const tagged = useTaggedList();
    const toggleTagSelected = () => {
        if (tagged[tag]) {
            const newSelection = tagSelectedList(selection, tagged[tag], false);
            if (!isSelected) {
                Array.prototype.push.apply(newSelection, tagged[tag]);
            }
            setSelection(newSelection);
        }
    };
    return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_theme_ui_["Flex"], { css: {
            flexDirection: 'column',
            alignItems: 'center',
        } },
        external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_theme_ui_["Label"], null,
            external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_theme_ui_["Checkbox"], { onChange: () => toggleTagSelected(), checked: isSelected }),
            isSelected ? 'hide outlines' : 'show errors')));
};
const collectStats = (results, status, initial) => {
    const success = results[status].reduce((acc, row) => {
        const cats = row.tags.filter(tag => tag.split('.')[0] === 'cat');
        return cats.reduce((a, cat) => {
            const c = cat.split('.')[1];
            if (a[c] === undefined) {
                a[c] = {
                    passes: 0,
                    violations: 0,
                };
            }
            return Object.assign(Object.assign({}, a), { [c]: Object.assign(Object.assign({}, a[c]), { [status]: a[c][status] + 1 }) });
        }, acc);
    }, initial);
    return success;
};
const AllyDashboard = () => {
    const { results } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(AxeContext);
    const stats = collectStats(results, 'violations', collectStats(results, 'passes', {}));
    return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_theme_ui_["Grid"], { gap: 2, columns: [3, '1fr 1fr 1fr'] }, Object.keys(stats)
        .sort()
        .map(key => {
        const value = stats[key];
        const rate = Math.trunc((100 * (value.passes - value.violations)) /
            (value.passes + value.violations));
        return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_theme_ui_["Flex"], { key: key, css: {
                height: 260,
                alignItems: 'center',
                flexDirection: 'column',
            } },
            external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_theme_ui_["Heading"], { as: "h4" }, key),
            external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_react_google_charts_["Chart"], { chartType: "Gauge", options: {
                    redFrom: -100,
                    redTo: -50,
                    yellowFrom: -50,
                    yellowTo: 50,
                    greenFrom: 50,
                    greenTo: 100,
                    majorTicks: [],
                    minorTicks: 0,
                    min: -100,
                }, data: [
                    ['Label', 'Value'],
                    [
                        `${value.violations
                            ? `-${value.violations}${value.passes ? `/+${value.passes}` : ''}`
                            : `+${value.passes}`} rules`,
                        rate,
                    ],
                ] }),
            value.violations ? (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(TagSelectionCheckbox, { tag: `cat.${key}` })) : null));
    })));
};

/* eslint-disable react/display-name */
/**
 * Displays the [axe](https://github.com/dequelabs/axe-core) ally test results
 */
const BaseAllyBlock = ({ children }) => {
    const { results: { violations, passes, incomplete }, } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(AxeContext);
    const actions = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useMemo"])(() => {
        const actions = [
            {
                node: `dashboard`,
                id: 'dashboard',
                'aria-label': 'display the accessibility overview dashboard',
                panel: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(AllyDashboard, null),
            },
        ];
        if (violations.length) {
            actions.push({
                node: `errors (${violations.length})`,
                id: 'errors',
                group: 'results',
                'aria-label': 'display the accessibility violations',
                panel: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ViolationsTable, null),
            });
        }
        if (passes.length) {
            actions.push({
                node: `passed (${passes.length})`,
                id: 'passed',
                group: 'results',
                'aria-label': 'display the accessibility successfully passed tests',
                panel: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(PassesTable, null),
            });
        }
        if (incomplete.length) {
            actions.push({
                node: `incomplete (${incomplete.length})`,
                id: 'incomplete',
                group: 'results',
                'aria-label': 'display the incomplete accessibility tests',
                panel: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(IncompleteTable, null),
            });
        }
        return actions;
    }, [incomplete.length, passes.length, violations.length]);
    return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(components_["PanelContainer"], { actions: actions, openTab: "dashboard", visibleTabs: true },
        external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(HighlightSelector, null, children)));
};

const RenderStory = ({ axeOptions, storyId, }) => {
    const storyRef = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useRef"])(null);
    const { setResults } = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useContext"])(AxeSetContext);
    const [mounted, setMounted] = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useState"])(true);
    const isRunning = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useRef"])(false);
    Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useEffect"])(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    const collectResults = () => {
        var _a;
        const canvas = (_a = storyRef.current) === null || _a === void 0 ? void 0 : _a.firstChild;
        if (canvas && isRunning.current === false) {
            isRunning.current = true;
            Object(external_axe_core_["reset"])();
            Object(external_axe_core_["configure"])(axeOptions || {});
            Object(components_["resetTabCounter"])();
            Object(external_axe_core_["run"])(canvas)
                .then(results => {
                if (mounted) {
                    const { passes, violations, incomplete } = results;
                    setResults({ passes, violations, incomplete });
                    setTimeout(() => (isRunning.current = false), 1000);
                }
            })
                .catch(e => {
                console.error('error running axe-core', e);
                isRunning.current = false;
            });
        }
    };
    const onRender = () => {
        try {
            collectResults();
        }
        catch (e) { }
    };
    return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(blocks_["Story"], { key: storyId, id: storyId, ref: storyRef, onRender: onRender }));
};
/**
 * Story block container that displays displays the [axe](https://github.com/dequelabs/axe-core) ally test results
 */
const AllyBlock = (_a) => {
    var { axeOptions, id, name } = _a, props = Object(tslib_es6["a" /* __rest */])(_a, ["axeOptions", "id", "name"]);
    const story = Object(store_["useStory"])({ id, name });
    Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useEffect"])(() => {
        return () => {
            Object(external_axe_core_["cleanup"])();
        };
    }, []);
    return story ? (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(blocks_["StoryBlockContainer"], Object.assign({ story: story }, props),
        external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(AxeContextProvider, null,
            external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(SelectionContextProvider, null,
                external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseAllyBlock, { options: axeOptions },
                    external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(RenderStory, { storyId: story.id, axeOptions: axeOptions })))))) : null;
};



// CONCATENATED MODULE: ./node_modules/@component-controls/axe-plugin/dist/index.esm.js












/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ViewportBlock", function() { return /* reexport */ ViewportBlock; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(8);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@component-controls/blocks"
var blocks_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@component-controls/store"
var store_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@component-controls/components"
var components_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@component-controls/viewport-plugin/dist/ViewportBlock.esm.js







const ViewportBox = ({ storyId, size, sizeLabel, }) => {
    return (external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(components_["HoverBox"], { label: sizeLabel, sx: { width: size, pb: 2 } },
        external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(blocks_["Story"], { id: storyId, sx: { mb: 0, width: size } })));
};

const ViewportBlock = (_a) => {
    var { id, name, sizes = {
        '320px': 320,
        '375px': 375,
        '768px': 768,
        '1024px': 1024,
    }, sxContainer } = _a, props = Object(tslib_es6["a" /* __rest */])(_a, ["id", "name", "sizes", "sxContainer"]);
    const story = Object(store_["useStory"])({ id, name });
    const [visible, setVisible] = Object(external_commonjs_react_commonjs2_react_amd_React_root_React_["useState"])(Object.assign({}, sizes));
    return (story === null || story === void 0 ? void 0 : story.id) ? (Object(external_theme_ui_["jsx"])(blocks_["StoryBlockContainer"], Object.assign({ story: story }, props),
        Object(external_theme_ui_["jsx"])(components_["ActionContainer"], { actions: [
                {
                    node: (Object(external_theme_ui_["jsx"])(components_["Multiselect"], { items: Object.keys(visible).map(name => ({
                            label: name,
                            selected: visible[name] !== 0,
                        })), onChange: (item) => {
                            setVisible(Object.assign(Object.assign({}, visible), { [item.label]: visible[item.label] ? 0 : sizes[item.label] }));
                        } },
                        Object(external_theme_ui_["jsx"])(external_theme_ui_["Button"], null, "widths"))),
                },
            ] },
            Object(external_theme_ui_["jsx"])(external_theme_ui_["Box"], { sx: Object.assign({ display: 'flex', flexDirection: 'row', height: '100%', width: '100%', overflow: 'auto', pt: 3, pb: 4, pl: 1 }, sxContainer) }, Object.keys(visible)
                .filter(name => visible[name])
                .map(name => (Object(external_theme_ui_["jsx"])(ViewportBox, { key: name, storyId: story.id, size: visible[name], sizeLabel: name }))))))) : null;
};



// CONCATENATED MODULE: ./node_modules/@component-controls/viewport-plugin/dist/index.esm.js









/***/ })
/******/ ]);
});