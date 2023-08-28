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
/*!*************************************!*\
  !*** ./resources/js/cart/script.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BurgerMenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BurgerMenu/BurgerMenu */ "./resources/js/BurgerMenu/BurgerMenu.js");
/* harmony import */ var _cartWidget_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cartWidget/script */ "./resources/js/cartWidget/script.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


_BurgerMenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_0__["default"].init();
var NodeConstructor = /*#__PURE__*/function () {
  function NodeConstructor() {
    _classCallCheck(this, NodeConstructor);
  }
  _createClass(NodeConstructor, null, [{
    key: "createNode",
    value: function createNode(tagName, attributes, text) {
      var elem = document.createElement("".concat(tagName));
      var addAtributes = function addAtributes(elem, attributes) {
        attributes.forEach(function (attr) {
          elem.setAttribute(attr[0], attr[1]);
        });
        return elem;
      };
      var addInnerText = function addInnerText(elem, text) {
        elem.innerHTML = "".concat(text);
        return elem;
      };
      switch (arguments.length) {
        case 1:
          return elem;
        case 2:
          return Array.isArray(arguments[1]) ? addAtributes(elem, attributes) : addInnerText(elem, attributes);
        case 3:
          elem = addAtributes(elem, attributes);
          return addInnerText(elem, text);
      }
    }
  }]);
  return NodeConstructor;
}();
var _token = /*#__PURE__*/new WeakMap();
var _fetchData = /*#__PURE__*/new WeakSet();
var _showPreloader = /*#__PURE__*/new WeakSet();
var _removePreloader = /*#__PURE__*/new WeakSet();
var ProductsInCart = /*#__PURE__*/function () {
  function ProductsInCart() {
    _classCallCheck(this, ProductsInCart);
    _classPrivateMethodInitSpec(this, _removePreloader);
    _classPrivateMethodInitSpec(this, _showPreloader);
    _classPrivateMethodInitSpec(this, _fetchData);
    _defineProperty(this, "products", null);
    _classPrivateFieldInitSpec(this, _token, {
      writable: true,
      value: null
    });
  }
  _createClass(ProductsInCart, [{
    key: "init",
    value: function init() {
      this.token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      _classPrivateMethodGet(this, _fetchData, _fetchData2).call(this);
    }
  }]);
  return ProductsInCart;
}();
function _fetchData2() {
  return _fetchData3.apply(this, arguments);
}
function _fetchData3() {
  _fetchData3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, data, respone;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "http://finalproject/get_products_in_cart";
          _context.prev = 1;
          _context.next = 4;
          return fetch(url);
        case 4:
          data = _context.sent;
          _classPrivateMethodGet(this, _showPreloader, _showPreloader2).call(this);
          _context.next = 8;
          return data.json();
        case 8:
          respone = _context.sent;
          _classPrivateMethodGet(this, _removePreloader, _removePreloader2).call(this);
          this.products = respone;
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
        case 16:
          _context.prev = 16;
          this.render();
          return _context.finish(16);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[1, 13, 16, 19]]);
  }));
  return _fetchData3.apply(this, arguments);
}
function _showPreloader2() {
  var preloader = document.createElement('div');
  preloader.classList.add('loader');
  preloader.innerHTML = "\n            <div class=\"loader-inner\">\n            <div class=\"loader-line-wrap\">\n                <div class=\"loader-line\"></div>\n            </div>\n            <div class=\"loader-line-wrap\">\n                <div class=\"loader-line\"></div>\n            </div>\n            <div class=\"loader-line-wrap\">\n                <div class=\"loader-line\"></div>\n            </div>\n            <div class=\"loader-line-wrap\">\n                <div class=\"loader-line\"></div>\n            </div>\n            <div class=\"loader-line-wrap\">\n                <div class=\"loader-line\"></div>\n            </div>\n        </div>\n        ";
  document.body.append(preloader);
}
function _removePreloader2() {
  setTimeout(function () {
    document.querySelector('.loader').remove();
  }, 1200);
}
var _cartProductsWrapper = /*#__PURE__*/new WeakMap();
var _addEventListener = /*#__PURE__*/new WeakSet();
var _productInc = /*#__PURE__*/new WeakSet();
var _productDec = /*#__PURE__*/new WeakSet();
var _productDel = /*#__PURE__*/new WeakSet();
var ProductsInCartUI = /*#__PURE__*/function (_ProductsInCart) {
  _inherits(ProductsInCartUI, _ProductsInCart);
  var _super = _createSuper(ProductsInCartUI);
  function ProductsInCartUI() {
    var _this;
    _classCallCheck(this, ProductsInCartUI);
    _this = _super.call(this);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _productDel);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _productDec);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _productInc);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _addEventListener);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _cartProductsWrapper, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(_assertThisInitialized(_this), _cartProductsWrapper, document.querySelector('.cart-products-wrapper'));
    return _this;
  }
  _createClass(ProductsInCartUI, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      _classPrivateFieldGet(this, _cartProductsWrapper).innerHTML = '';
      if (this.products.length) {
        this.products.forEach(function (product) {
          var productWrapper = NodeConstructor.createNode('div', [['class', 'product-wrapper'], ['data-id', product.id]]);
          var producttImgWrapper = NodeConstructor.createNode('div', [['class', 'product-img-wrapper']]);
          var productImg = NodeConstructor.createNode('img', [['src', "/images/products/".concat(product.product.images.img_1)]]);
          var productDescription = NodeConstructor.createNode('div', [['class', 'product-description']]);
          var productTitleWrapper = NodeConstructor.createNode('div', [['class', 'product-title-wrapper']]);
          var productTitle = NodeConstructor.createNode('h3', [['class', 'product-title']], product.product.name);
          var productInfoWrapper = NodeConstructor.createNode('div', [['class', 'product-info-wrapper']]);
          var productColorWrapper = NodeConstructor.createNode('div', [['class', 'product-color-wrapper']]);
          var productSizeWrapper = NodeConstructor.createNode('div', [['class', 'product-size-wrapper']]);
          var productColorText = NodeConstructor.createNode('p', [['class', 'product-color']], "\u0426\u0432\u0435\u0442 ".concat(_this2.getColor(product.color)));
          var productSizeText = NodeConstructor.createNode('p', [['class', 'product-size']], "\u0420\u0430\u0437\u043C\u0435\u0440 ".concat(product.size));
          var productButtonsWrapper = NodeConstructor.createNode('div', [['class', 'product-buttons-wrapper']]);
          var productButtonDec = NodeConstructor.createNode('button', [['class', 'button-dec product-button']]);
          var productButtonInc = NodeConstructor.createNode('button', [['class', 'button-inc product-button']]);
          var productCounter = NodeConstructor.createNode('p', [['class', 'product-counter']], product.quantity);
          var productDeleteWrapper = NodeConstructor.createNode('div', [['class', 'product-delete-wrapper']]);
          var productDeleteItem = NodeConstructor.createNode('div', [['class', 'product-delete-item']]);
          var productDeleteImg = NodeConstructor.createNode('img', [['src', '/images/service/product_delete_icon.svg']]);
          var productDeleteText = NodeConstructor.createNode('span', 'Удалить');
          var productPriceWrapper = NodeConstructor.createNode('div', [['class', 'product-price-wrapper']]);
          var productPriceTitle = NodeConstructor.createNode('h3', [['class', 'product-price-title']], 'Стоимость');
          var productPriceCounter = NodeConstructor.createNode('p', [['class', 'product-price-counter']], (product.quantity * +product.product.prices.total_price).toFixed(2));
          productDeleteItem.append(productDeleteImg, productDeleteText);
          productDeleteWrapper.append(productDeleteItem);
          productPriceWrapper.append(productPriceTitle, productPriceCounter);
          productButtonsWrapper.append(productButtonDec, productCounter, productButtonInc);
          productSizeWrapper.append(productSizeText);
          productColorWrapper.append(productColorText);
          productInfoWrapper.append(productColorWrapper, productSizeWrapper);
          productTitleWrapper.append(productTitle);
          productDescription.append(productTitleWrapper, productInfoWrapper, productButtonsWrapper, productDeleteWrapper);
          producttImgWrapper.append(productImg);
          productWrapper.append(producttImgWrapper, productDescription, productPriceWrapper);
          _classPrivateFieldGet(_this2, _cartProductsWrapper).append(productWrapper);
        });
        var totalProductCounters = NodeConstructor.createNode('div', [['class', 'product-counters-wrapper']]);
        var totalSumCounterWrapper = NodeConstructor.createNode('div', [['class', 'total-sum-counter-wrapper']]);
        var totalCounterWrapper = NodeConstructor.createNode('div', [['class', 'total-counter-wrapper']]);
        var totalSumCounter = NodeConstructor.createNode('p', [['class', 'total-sum']], "\u0418\u0442\u043E\u0433\u043E: <span class=\"total-sum-counter\"> ".concat(this.products.reduce(function (accum, item) {
          return accum += +(item.quantity * +item.product.prices.total_price).toFixed(2);
        }, 0).toFixed(2), " </span> \u0440\u0443\u0431."));
        var totalCounter = NodeConstructor.createNode('p', [['class', 'total-counter']], "\u0422\u043E\u0432\u0430\u0440\u044B, ".concat(this.products.reduce(function (accum, item) {
          return accum += item.quantity;
        }, 0), " \u0448\u0442."));
        var orderLinkWrapper = NodeConstructor.createNode('div', [['class', 'order-link-wrapper']]);
        var orderLink = NodeConstructor.createNode('a', [['class', 'order-link'], ['href', 'http://finalproject/cart/order']], 'Заказать');
        orderLinkWrapper.append(orderLink);
        totalCounterWrapper.append(totalCounter);
        totalSumCounterWrapper.append(totalSumCounter);
        totalProductCounters.append(totalSumCounterWrapper, totalCounterWrapper);
        _classPrivateFieldGet(this, _cartProductsWrapper).append(totalProductCounters, orderLinkWrapper);
      } else {
        var cartIsEmptyTitle = NodeConstructor.createNode('h3', [['class', 'cart-empty-title']], 'Ваша корзина пуста');
        var emptyCartImgWrapper = NodeConstructor.createNode('div', [['class', 'empty-cart-img-wrapper']]);
        var emptyCartImg = NodeConstructor.createNode('img', [['src', '/images/service/empty_cart.jpg']]);
        emptyCartImgWrapper.append(emptyCartImg);
        _classPrivateFieldGet(this, _cartProductsWrapper).append(cartIsEmptyTitle, emptyCartImgWrapper);
      }
      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this);
    }
  }, {
    key: "getColor",
    value: function getColor(color) {
      switch (color) {
        case 'white':
          return 'белый';
        case 'black':
          return 'черный';
        case 'green':
          return 'зеленый';
        case 'pink':
          return 'розовый';
        case 'yellow':
          return 'желтый';
        default:
          return 'неизвестно';
      }
    }
  }]);
  return ProductsInCartUI;
}(ProductsInCart);
function _addEventListener2() {
  var _this3 = this;
  var incButtons = document.querySelectorAll('.button-inc');
  incButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var id = e.target.closest('.product-wrapper').dataset.id;
      _classPrivateMethodGet(_this3, _productInc, _productInc2).call(_this3, id);
    });
  });
  var decButtons = document.querySelectorAll('.button-dec');
  decButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var id = e.target.closest('.product-wrapper').dataset.id;
      _classPrivateMethodGet(_this3, _productDec, _productDec2).call(_this3, id);
    });
  });
  var deleteButtons = document.querySelectorAll('.product-delete-item');
  deleteButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var id = e.target.closest('.product-wrapper').dataset.id;
      _classPrivateMethodGet(_this3, _productDel, _productDel2).call(_this3, id);
    });
  });
}
function _productInc2(_x) {
  return _productInc3.apply(this, arguments);
}
function _productInc3() {
  _productInc3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
    var url, responce;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          url = 'http://finalproject/product_cart_inc';
          _context2.prev = 1;
          _context2.next = 4;
          return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-CSRF-TOKEN': this.token
            },
            body: "id=".concat(id)
          });
        case 4:
          responce = _context2.sent;
          _context2.next = 7;
          return responce.json();
        case 7:
          this.products = _context2.sent;
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);
        case 13:
          _context2.prev = 13;
          this.render();
          _cartWidget_script__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.products);
          return _context2.finish(13);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this, [[1, 10, 13, 17]]);
  }));
  return _productInc3.apply(this, arguments);
}
function _productDec2(_x2) {
  return _productDec3.apply(this, arguments);
}
function _productDec3() {
  _productDec3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
    var url, responce;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          url = 'http://finalproject/product_cart_dec';
          _context3.prev = 1;
          _context3.next = 4;
          return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-CSRF-TOKEN': this.token
            },
            body: "id=".concat(id)
          });
        case 4:
          responce = _context3.sent;
          _context3.next = 7;
          return responce.json();
        case 7:
          this.products = _context3.sent;
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);
        case 13:
          _context3.prev = 13;
          this.render();
          _cartWidget_script__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.products);
          return _context3.finish(13);
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, this, [[1, 10, 13, 17]]);
  }));
  return _productDec3.apply(this, arguments);
}
function _productDel2(_x3) {
  return _productDel3.apply(this, arguments);
}
function _productDel3() {
  _productDel3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
    var url, responce;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          url = 'http://finalproject/product_cart_del';
          _context4.prev = 1;
          _context4.next = 4;
          return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-CSRF-TOKEN': this.token
            },
            body: "id=".concat(id)
          });
        case 4:
          responce = _context4.sent;
          _context4.next = 7;
          return responce.json();
        case 7:
          this.products = _context4.sent;
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          console.error(_context4.t0);
        case 13:
          _context4.prev = 13;
          this.render();
          _cartWidget_script__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.products);
          return _context4.finish(13);
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this, [[1, 10, 13, 17]]);
  }));
  return _productDel3.apply(this, arguments);
}
var productsInCart = new ProductsInCartUI();
productsInCart.init();
})();

/******/ })()
;