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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // import {RichText,InnerBlocks} from '@wordpress/block-editor';
// const {useBlockProps} = wp.blockEditor;

var TEMPLATE = [['core/image', {
  'url': 'http://localhost/wordpress/wp-content/uploads/2021/02/masterball-2.jpg'
}]];
var SERVICES_TEMPLATE = [['core/columns', {}, [['core/column', {}, [['core/heading', {
  level: '4'
}], ['core/paragraph']]], ['core/column', {}, [['core/heading', {
  level: '4'
}], ['core/paragraph']]], ['core/column', {}, [['core/heading', {
  level: '4'
}], ['core/paragraph']]]]]];

function makeID(str) {
  return str.replace(/\s/g, "-");
} // {/* <InnerBlocks
//     template={[['core/image']]}
//     templateLock="all"
// /> */}


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__["registerBlockType"])('testplug/hero', {
  title: "bibadoula hero",
  category: "banner",
  attributes: {
    theImage: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, attributes.theImage ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
      src: attributes.theImage
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaPlaceholder"], {
      multiple: false,
      allowedTypes: ['image'],
      onSelect: function onSelect(el) {
        setAttributes({
          theImage: el.url
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
      placeholder: "Hero Title",
      tagName: "h2",
      value: attributes.title,
      onChange: function onChange(title) {
        setAttributes({
          title: title
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
      placeholder: "Description",
      tagName: "p",
      value: attributes.description,
      onChange: function onChange(description) {
        setAttributes({
          description: description
        });
      }
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
      class: "object-contain w-full md:float-left md:pr-10 md:w-7/12 lg:pr-12 ",
      style: "max-width: 450px;shape-outside: circle(50%);",
      src: attributes.theImage
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"].Content, {
      tagName: "h2",
      value: attributes.title,
      id: makeID(attributes.title)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"].Content, {
      tagName: "p",
      value: attributes.description
    })));
  }
});

function textToHtml(html) {
  var arr = html.split(/<br\s*\/?>/i);
  return arr.reduce(function (el, a) {
    return el.concat(a, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("br", null));
  }, []);
}

function Service(name, description, index) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: "flex-1 flex pb-4",
    style: "min-width: 250px;"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
    className: "h-8 w-8 flex justify-center items-center font-bold text-white rounded-full bg-burple"
  }, index)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: "ml-4"
  }, name ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h3", {
    className: "font-semibold md:text-lg"
  }, name) : "", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
    dangerouslySetInnerHTML: {
      __html: description
    }
  })));
}

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__["registerBlockType"])('testplug/simple-services', {
  title: 'simple services',
  category: 'layouts',
  attributes: {
    serviceTitle: {
      type: 'string',
      default: 'Services'
    },
    serviceContent: {
      type: 'string'
    },
    services: {
      type: 'array',
      default: [{
        title: '',
        content: ''
      }, {
        title: '',
        content: ''
      }, {
        title: '',
        content: ''
      }]
    }
  },
  edit: function edit(_ref3) {
    var attributes = _ref3.attributes,
        setAttributes = _ref3.setAttributes,
        setAttribute = _ref3.setAttribute;
    var services = attributes.services; //duplicted array, with new modications

    var updateServices = function updateServices(content, serviceT, idx) {
      var newServices = services.map(function (v, i) {
        var _ref4;

        var serviceT_rev = serviceT == "title" ? "content" : "title";
        return idx == i ? (_ref4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref4, serviceT, content), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_ref4, serviceT_rev, v[serviceT_rev]), _ref4) : v;
      });
      return newServices;
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
      onChange: function onChange(serviceTitle) {
        setAttributes({
          serviceTitle: serviceTitle
        });
      },
      value: attributes.serviceTitle,
      placeholder: "Service Title",
      tagName: "h3"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
      align: "flex-start",
      style: {
        flexWrap: 'wrap'
      }
    }, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(Array(3)).map(function (v, i) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        style: {
          width: '48%'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
        style: {
          marginBottom: '0px'
        },
        value: services[i].title,
        onChange: function onChange(content) {
          return setAttributes({
            services: updateServices(content, "title", i)
          });
        },
        tagName: "h4",
        placeholder: "Service Name"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
        value: services[i].content,
        onChange: function onChange(content) {
          return setAttributes({
            services: updateServices(content, "content", i)
          });
        },
        tagName: "p",
        placeholder: "Description about your service"
      }));
    })));
  },
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      className: "mt-4 md:mt-14 md:px-4 clear-both"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"].Content, {
      tagName: "h2",
      className: "md:text-center",
      value: attributes.serviceTitle,
      id: makeID(attributes.serviceTitle)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      className: "md:flex  md:flex-wrap"
    }, attributes.services.map(function (v, i) {
      if (v.content) return Service(v.title, v.content, ++i);
    })));
  }
});

function GlideBullets() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: "glide__bullets lg:hidden",
    "data-glide-el": "controls[nav]"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("button", {
    className: "glide__bullet border-dark",
    "data-glide-dir": "=0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("button", {
    className: "glide__bullet border-dark",
    "data-glide-dir": "=1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("button", {
    className: "glide__bullet border-dark",
    "data-glide-dir": "=2"
  }));
}

var Reviews = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Reviews, _React$Component);

  var _super = _createSuper(Reviews);

  function Reviews(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Reviews);

    _this = _super.call(this, props);
    _this.reviews = props.data;
    console.log("heres the reviews", _this.reviews);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Reviews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var getPerView = function getPerView(screenW) {
        if (screenW > 1024) {
          return 3;
        } else if (screenW > 768) {
          return 2;
        } else {
          return 1;
        }
      };

      var glide = new Glide('.glide', {
        perView: getPerView(window.innerWidth)
      }).mount();
      window.addEventListener('resize', function () {
        glide.update({
          perView: getPerView(this.innerWidth)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "glide gray"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "glide__track pb-3",
        "data-glide-el": "track"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("ul", {
        className: "glide__slides",
        style: {
          listStyle: 'none'
        }
      }, this.reviews.map(function (v) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("li", {
          className: "glide__slide"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          class: "mx-auto",
          style: {
            maxWidth: "350px",
            padding: "2rem"
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
          class: "block rounded-2xl mb-3 mx-auto shadow-md w-full h-44 md:h-36",
          src: v.user.image_url,
          alt: "",
          style: {
            objectFit: "cover"
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          class: "burple-dark mb-2",
          style: {
            opacity: 0.45
          }
        }, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(Array(v.rating)).map(function () {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("i", {
            class: "fas fa-star"
          });
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          class: "mb-2"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
          class: " mb-0 italic"
        }, "\"", v.text, "\""), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("a", {
          href: v.url,
          class: " font-semibold text-blue-500"
        }, "readmore")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
          class: "text-xl font-bold text-gray-800"
        }, v.user.name)));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(GlideBullets, null));
    }
  }]);

  return Reviews;
}(React.Component);

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__["registerBlockType"])('testplug/yelp-reviews', {
  title: 'yelp reviews',
  category: 'widgets',
  attributes: {
    reviewsTitle: {
      default: 'Yelp Reviews'
    },
    reviewsID: {
      default: 'Yelp-Reviews'
    },
    content: {
      type: 'string'
    },
    reviewsObj: {
      type: 'array'
    }
  },
  edit: function edit(_ref6) {
    var attributes = _ref6.attributes,
        setAttributes = _ref6.setAttributes;

    var createReviews = function createReviews(e) {
      var f = e.target.files[0];
      var reader = new FileReader();
      reader.readAsText(f);

      reader.onload = function () {
        var p = JSON.parse(reader.result)['reviews'];
        console.log(p);
        setAttributes({
          reviewsObj: p
        });
      }; //    console.log(reader.readAsText(f));

    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, attributes.reviewsObj ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h3", null, "Reviews"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Flex"], null, attributes.reviewsObj.map(function (v) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FlexItem"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
        width: "150px",
        height: "150px",
        style: {
          objectFit: 'cover'
        },
        src: v.user.image_url
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", null, v.text));
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Placeholder"], {
      label: "Upload Reviews",
      instructions: "user reviews json from yelp api"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
      type: "file",
      accept: "application/JSON",
      onChange: createReviews
    })));
  },
  save: function save(_ref7) {
    var attributes = _ref7.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      className: "mt-2 mb-6"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", {
      className: " text-center",
      id: makeID(attributes.reviewsTitle)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("i", {
      className: "fab fa-yelp pr-2",
      style: "font-size:1.8rem"
    }), attributes.reviewsTitle), attributes.reviewsObj ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Reviews, {
      data: attributes.reviewsObj
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, "Please upload a users json"));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__["registerBlockType"])('testplug/image-text', {
  title: 'image and text layout',
  category: 'layouts',
  attributes: {
    theImage: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    }
  },
  edit: function edit(_ref8) {
    var attributes = _ref8.attributes,
        setAttributes = _ref8.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, attributes.theImage ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      style: {
        height: "400px",
        overflow: "hidden"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
      src: attributes.theImage
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaPlaceholder"], {
      multiple: false,
      allowedTypes: ['image'],
      onSelect: function onSelect(el) {
        setAttributes({
          theImage: el.url
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
      placeholder: "Title",
      tagName: "h2",
      value: attributes.title,
      onChange: function onChange(title) {
        setAttributes({
          title: title
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
      placeholder: "Description",
      tagName: "p",
      value: attributes.description,
      onChange: function onChange(description) {
        setAttributes({
          description: description
        });
      }
    })));
  },
  save: function save(_ref9) {
    var attributes = _ref9.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      class: "pb-10"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      class: "md:flex"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      id: "about-img-container",
      class: "w-full relative",
      style: "flex:55%; overflow:hidden;"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
      id: "about-img",
      class: "w-full absolute",
      src: attributes.theImage,
      alt: "",
      style: "object-fit:cover;"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      class: "md:px-10",
      style: "flex:45%;"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", {
      class: "md:pt-0 md:pb-2",
      id: makeID(attributes.title)
    }, attributes.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", null, attributes.description), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("a", {
      href: "#",
      class: " font-semibold text-blue-500"
    }, "readmore")))));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map