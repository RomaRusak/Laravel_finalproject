/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/BurgerMenu/BurgerMenu.js":
/*!***********************************************!*\
  !*** ./resources/js/BurgerMenu/BurgerMenu.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BurgerMenu = /*#__PURE__*/function () {
  function BurgerMenu() {
    _classCallCheck(this, BurgerMenu);
  }
  _createClass(BurgerMenu, null, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.burgerMenu = document.querySelector(".burger-menu");
      this.navMenu = document.querySelector("nav");
      this.navMenuWidth = this.navMenu.offsetWidth;
      this.burgerMenu.addEventListener("click", function () {
        _this.burgerMenu.classList.toggle("active");
        _this.burgerMenu.classList.contains("active") ? _this.showNavMenu() : _this.closeNavMenu();
      });
    }
  }, {
    key: "showNavMenu",
    value: function showNavMenu() {
      this.navMenu.style.left = 0;
    }
  }, {
    key: "closeNavMenu",
    value: function closeNavMenu() {
      this.navMenu.style.left = "-".concat(this.navMenuWidth, "px");
    }
  }]);
  return BurgerMenu;
}();
_defineProperty(BurgerMenu, "burgerMenu", null);
_defineProperty(BurgerMenu, "navMenu", null);
_defineProperty(BurgerMenu, "navMenuWidth", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerMenu);

/***/ }),

/***/ "./resources/js/cartWidget/script.js":
/*!*******************************************!*\
  !*** ./resources/js/cartWidget/script.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _cartWidgetCounter = /*#__PURE__*/new WeakMap();
var _cartWidgetCounterValue = /*#__PURE__*/new WeakMap();
var _csrftoken = /*#__PURE__*/new WeakMap();
var CartWidget = /*#__PURE__*/function () {
  function CartWidget() {
    _classCallCheck(this, CartWidget);
    _classPrivateFieldInitSpec(this, _cartWidgetCounter, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _cartWidgetCounterValue, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _csrftoken, {
      writable: true,
      value: null
    });
  }
  _createClass(CartWidget, [{
    key: "getCartData",
    value: function () {
      var _getCartData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, responce, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = 'http://finalproject/get_cart_data';
              _context.prev = 1;
              _context.next = 4;
              return fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'X-CSRF-TOKEN': _classPrivateFieldGet(this, _csrftoken)
                }
              });
            case 4:
              responce = _context.sent;
              _context.next = 7;
              return responce.json();
            case 7:
              data = _context.sent;
              if (data.length) this.update(data);
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 11]]);
      }));
      function getCartData() {
        return _getCartData.apply(this, arguments);
      }
      return getCartData;
    }()
  }, {
    key: "init",
    value: function init() {
      _classPrivateFieldSet(this, _csrftoken, document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
      _classPrivateFieldSet(this, _cartWidgetCounterValue, 0);
      this.getCartData();
      var cartWidget = document.querySelector('.cart-widget-wrapper');
      _classPrivateFieldSet(this, _cartWidgetCounter, cartWidget.querySelector('.cart-widget-counter'));
      this.render();
    }
  }, {
    key: "update",
    value: function update(data) {
      _classPrivateFieldSet(this, _cartWidgetCounterValue, data.reduce(function (accum, item) {
        return accum += item.quantity;
      }, 0));
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      _classPrivateFieldGet(this, _cartWidgetCounter).innerText = _classPrivateFieldGet(this, _cartWidgetCounterValue);
      if (_classPrivateFieldGet(this, _cartWidgetCounterValue) === 0) {
        _classPrivateFieldGet(this, _cartWidgetCounter).classList.add('hidden');
      } else if (_classPrivateFieldGet(this, _cartWidgetCounterValue) && _classPrivateFieldGet(this, _cartWidgetCounter).classList.contains('hidden')) {
        _classPrivateFieldGet(this, _cartWidgetCounter).classList.remove('hidden');
      }
    }
  }]);
  return CartWidget;
}();
var cartWidget = new CartWidget();
cartWidget.init();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartWidget);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./resources/js/product/script.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartWidget_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cartWidget/script */ "./resources/js/cartWidget/script.js");
/* harmony import */ var _BurgerMenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BurgerMenu/BurgerMenu */ "./resources/js/BurgerMenu/BurgerMenu.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ProductGallery = /*#__PURE__*/function () {
  function ProductGallery() {
    _classCallCheck(this, ProductGallery);
  }
  _createClass(ProductGallery, null, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.productGalleryMainImage = document.querySelector('.product-main-image-wrapper > img');
      this.productGalleryAllImages = document.querySelectorAll('.product-all-images img');
      this.productGalleryAllImages.forEach(function (img) {
        img.addEventListener('click', function (e) {
          var src = _this.getImgName(e.target.src);
          _this.productGalleryMainImage.setAttribute('src', "/images/products/".concat(src));
        });
      });
    }
  }, {
    key: "getImgName",
    value: function getImgName(name) {
      var regExp = /http:\/\/finalproject\/images\/products\/(\w+.\w+)[?\/]?/;
      var src = name.match(regExp)[1];
      return src;
    }
  }]);
  return ProductGallery;
}();
_defineProperty(ProductGallery, "productGalleryMainImage", null);
_defineProperty(ProductGallery, "productGalleryAllImages", null);
var Slider = /*#__PURE__*/function () {
  function Slider() {
    _classCallCheck(this, Slider);
  }
  _createClass(Slider, null, [{
    key: "init",
    value: function init() {
      this.slidetItemsCount = document.querySelectorAll('.review-wrapper').length;
      if (this.slidetItemsCount) {
        this.sliderLine = document.querySelector('.reviews-line');
        this.sliderLine.style.width = this.sliderItemWidth * this.slidetItemsCount + 'px';
      }
      if (this.slidetItemsCount > 2) {
        this.createSliderNext();
        this.sliderNextAddListener();
      }
    }
  }, {
    key: "createSliderNext",
    value: function createSliderNext() {
      var sliderNext = document.createElement('div');
      sliderNext.classList.add('reviews-arrow-right');
      document.querySelector('.service-reviews-wrapper').append(sliderNext);
    }
  }, {
    key: "sliderNextAddListener",
    value: function sliderNextAddListener() {
      var _this2 = this;
      this.sliderNext = document.querySelector('.reviews-arrow-right');
      this.sliderNext.addEventListener('click', function () {
        _this2.offset += _this2.sliderItemWidth;
        if (_this2.offset > _this2.sliderItemWidth * (_this2.slidetItemsCount - 1)) {
          _this2.offset = 0;
          _this2.sliderLine.style.right = 0;
        } else {
          _this2.sliderLine.style.right = _this2.offset + 'px';
        }
      });
    }
  }]);
  return Slider;
}();
_defineProperty(Slider, "sliderItemWidth", 450);
_defineProperty(Slider, "slidetItemsCount", null);
_defineProperty(Slider, "sliderLine", null);
_defineProperty(Slider, "sliderNext", null);
_defineProperty(Slider, "offset", 0);
var ModaWindow = /*#__PURE__*/function () {
  function ModaWindow() {
    _classCallCheck(this, ModaWindow);
  }
  _createClass(ModaWindow, null, [{
    key: "init",
    value: function init() {
      var _this3 = this;
      this.createModalButton = document.querySelector('.add-review-button');
      this.csrfToken = document.querySelector('meta[name="csrf-token"]').content;
      var params = this.getParams();
      if (params) {
        var _params = _slicedToArray(params, 2);
        this.category = _params[0];
        this.productId = _params[1];
      }
      this.createModalButton.addEventListener('click', function () {
        _this3.createModal();
      });
    }
  }, {
    key: "createModal",
    value: function createModal() {
      var _this4 = this;
      this.backgroundDiv = document.createElement('div');
      this.backgroundDiv.classList.add('modal-background');
      this.modalWindowWrapper = document.createElement('div');
      this.modalWindowWrapper.classList.add('modal-window-wrapper');
      this.modalWindowWrapper.innerHTML = "\n        <div class=\"close-modal-wrapper\"></div>\n        <div class=\"modal-content\">\n            <form action=\"/catalog/".concat(this.category, "/").concat(this.productId, "\" method=\"post\" class=\"modal-content-form\">\n                <input type=\"hidden\" name=\"_token\" value=\"").concat(this.csrfToken, "\">\n                <div>\n                    <input type=\"number\" name=\"rating\" id=\"rating\">\n                </div>\n\n                <div class=\"modal-rating-wrapper\">\n            \n                </div>\n\n                <div class=\"modal-detail-wrapper\">\n                    <textarea name=\"detail\" cols=\"30\" rows=\"10\">\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432</textarea>\n                </div>\n\n                <div>\n                    <button type=\"submit\" class=\"add-review-button disabled\" disabled>\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432</button>\n                </div>\n            </form>\n        </div>\n        ");
      this.backgroundDiv.append(this.modalWindowWrapper);
      document.body.append(this.backgroundDiv);
      document.body.style.overflowY = 'hidden';
      this.backgroundDiv.addEventListener('click', function (e) {
        if (!e.target.closest('.modal-window-wrapper')) {
          _this4.backgroundDiv.remove();
          document.body.style.overflowY = 'scroll';
        }
      });
      this.ratingInput = this.modalWindowWrapper.querySelector('#rating');
      this.detailInput = this.modalWindowWrapper.querySelector('.modal-detail-wrapper textarea');
      this.submitFormButton = this.modalWindowWrapper.querySelector('.add-review-button');
      this.detailInput.addEventListener('input', function () {
        _this4.validateForm();
      });
      this.renderStarsIcons();
    }
  }, {
    key: "getParams",
    value: function getParams() {
      var currentHref = document.location.href;
      var regExp = /http:\/\/finalproject\/catalog\/(\w+)\/(\d+)+[?\/]?/;
      var _currentHref$match = currentHref.match(regExp),
        _currentHref$match2 = _slicedToArray(_currentHref$match, 3),
        allMatches = _currentHref$match2[0],
        category = _currentHref$match2[1],
        id = _currentHref$match2[2];
      if (allMatches) {
        return [category, id];
      }
    }
  }, {
    key: "renderStarsIcons",
    value: function renderStarsIcons() {
      var _this5 = this;
      var ratingWrapper = this.modalWindowWrapper.querySelector('.modal-rating-wrapper');
      for (var i = 1; i <= 5; i++) {
        var staWrapper = document.createElement('div');
        staWrapper.classList.add('star-icon-wrapper');
        for (var j = 1; j <= 2; j++) {
          var starImg = document.createElement('img');
          if (j % 2 !== 0) {
            starImg.setAttribute('src', '/images/service/starLeftInActive.png');
            starImg.setAttribute('data-rating', i * 2 - 1);
          } else {
            starImg.setAttribute('src', '/images/service/starRightInActive.png');
            starImg.setAttribute('data-rating', i * 2);
          }
          starImg.classList.add('star-icon');
          starImg.addEventListener('click', function (e) {
            _this5.addRating(e);
          });
          starImg.addEventListener('mouseenter', function (e) {
            _this5.replaceStars(+e.target.dataset.rating);
          });
          starImg.addEventListener('mouseleave', function (e) {
            _this5.replaceStars(_this5.currentRating ? _this5.currentRating : 0);
          });
          staWrapper.append(starImg);
        }
        ;
        ratingWrapper.append(staWrapper);
      }
      this.starsIcons = this.modalWindowWrapper.querySelectorAll('.star-icon');
    }
  }, {
    key: "addRating",
    value: function addRating(e) {
      this.currentRating = +e.target.dataset.rating;
      this.ratingInput.value = this.currentRating;
      this.validateForm();
      this.replaceStars(this.currentRating);
    }
  }, {
    key: "replaceStars",
    value: function replaceStars(untilValue) {
      this.starsIcons.forEach(function (star) {
        if (+star.dataset.rating <= untilValue) {
          if (+star.dataset.rating & 2 !== 0) {
            star.setAttribute('src', '/images/service/starLeftActive.png');
          } else {
            star.setAttribute('src', '/images/service/starRightActive.png');
          }
        } else {
          if (+star.dataset.rating & 2 !== 0) {
            star.setAttribute('src', '/images/service/starLeftInActive.png');
          } else {
            star.setAttribute('src', '/images/service/starRightInActive.png');
          }
        }
      });
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      if (!this.ratingInput.value || !this.detailInput.value) {
        if (!this.submitFormButton.classList.contains('disabled')) this.submitFormButton.classList.add('disabled');
        this.submitFormButton.setAttribute('disabled', '');
      } else {
        if (this.submitFormButton.classList.contains('disabled')) this.submitFormButton.classList.remove('disabled');
        this.submitFormButton.removeAttribute('disabled');
      }
    }
  }]);
  return ModaWindow;
}();
_defineProperty(ModaWindow, "createModalButton", null);
_defineProperty(ModaWindow, "backgroundDiv", null);
_defineProperty(ModaWindow, "modalWindowWrapper", null);
_defineProperty(ModaWindow, "csrfToken", null);
_defineProperty(ModaWindow, "category", null);
_defineProperty(ModaWindow, "productId", null);
_defineProperty(ModaWindow, "starsIcons", null);
_defineProperty(ModaWindow, "currentRating", null);
_defineProperty(ModaWindow, "ratingInput", null);
_defineProperty(ModaWindow, "detailInput", null);
var ProductForm = /*#__PURE__*/function () {
  function ProductForm() {
    _classCallCheck(this, ProductForm);
  }
  _createClass(ProductForm, null, [{
    key: "init",
    value: function init() {
      var _this6 = this;
      this.colorInputs = document.querySelector('.product-colors').querySelectorAll('input[type="checkbox"]');
      this.sizeInputs = document.querySelector('.product-sizes').querySelectorAll('input[type="checkbox"]');
      [this.colorInputs, this.sizeInputs].forEach(function (checkboxes) {
        return _this6.createRadioButtons(checkboxes);
      });
    }
  }, {
    key: "createRadioButtons",
    value: function createRadioButtons(checkboxes) {
      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', function (e) {
          checkboxes.forEach(function (checkbox) {
            return checkbox.checked = false;
          });
          e.target.checked = true;
        });
      });
    }
  }]);
  return ProductForm;
}();
_defineProperty(ProductForm, "colorInputs", null);
_defineProperty(ProductForm, "sizeInputs", null);
var AddToCart = /*#__PURE__*/function () {
  function AddToCart() {
    _classCallCheck(this, AddToCart);
  }
  _createClass(AddToCart, null, [{
    key: "init",
    value: function init() {
      var _this7 = this;
      this.productForm = document.querySelector('.product-description');
      this.token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      this.id = document.querySelector('.id-input').value;
      this.productForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (document.querySelector('.product-colors').querySelector('input:checked')) {
          _this7.color = document.querySelector('.product-colors').querySelector('input:checked').value;
        }
        if (_this7.size = document.querySelector('.product-sizes').querySelector('input:checked')) {
          _this7.size = document.querySelector('.product-sizes').querySelector('input:checked').value;
        }
        switch (true) {
          case _this7.size && !_this7.color:
            alert('не успеваю реализовать модальное окно, а вы не выбрали цвет!');
            break;
          case !_this7.size && !_this7.color:
            alert('не успеваю реализовать модальное окно, а вы не выбрали цвет и размер!');
            break;
          case _this7.color && !_this7.size:
            alert('не успеваю реализовать модальное окно, а вы не выбрали размер!');
            break;
          default:
            _this7.addToCart();
            break;
        }
      });
    }
  }, {
    key: "addToCart",
    value: function () {
      var _addToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, responce, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = 'http://finalproject/add_to_cart';
              _context.next = 3;
              return fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'X-CSRF-TOKEN': this.token
                },
                body: "color=".concat(this.color, "&size=").concat(this.size, "&id=").concat(this.id)
              });
            case 3:
              responce = _context.sent;
              _context.next = 6;
              return responce.json();
            case 6:
              data = _context.sent;
              _cartWidget_script__WEBPACK_IMPORTED_MODULE_0__["default"].update(data);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function addToCart() {
        return _addToCart.apply(this, arguments);
      }
      return addToCart;
    }()
  }]);
  return AddToCart;
}();
_defineProperty(AddToCart, "productForm", null);
_defineProperty(AddToCart, "color", null);
_defineProperty(AddToCart, "size", null);
_defineProperty(AddToCart, "token", null);
_defineProperty(AddToCart, "id", null);
AddToCart.init();
_BurgerMenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"].init();
ProductGallery.init();
Slider.init();
ModaWindow.init();
ProductForm.init();
})();

/******/ })()
;