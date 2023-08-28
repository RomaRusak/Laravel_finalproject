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
      // this.welcomeBlock = document.querySelector('.welcome-block');
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
  !*** ./resources/js/catalog/script.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartWidget_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cartWidget/script */ "./resources/js/cartWidget/script.js");
/* harmony import */ var _BurgerMenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BurgerMenu/BurgerMenu */ "./resources/js/BurgerMenu/BurgerMenu.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


_BurgerMenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"].init();
var SortForm = /*#__PURE__*/function () {
  function SortForm() {
    _classCallCheck(this, SortForm);
  }
  _createClass(SortForm, null, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.sortForm = document.getElementById('catalog-sort-form');
      this.sortFormLinks = this.sortForm.querySelectorAll('.catalog-sort-value');
      this.sormFormInput = this.sortForm.querySelector('.catalog-input-value');
      this.sortFormLinks.forEach(function (item) {
        item.addEventListener('click', function (e) {
          _this.sormFormInput.value = item.dataset.value;
          _this.sortFormLinks.forEach(function (item) {
            if (item.classList.contains('active-sort-link')) item.classList.remove('active-sort-link');
          });
          e.target.classList.add('active-sort-link');
          productsUI.sortProducts(_this.sormFormInput.value);
        });
      });
      this.sortForm.querySelector('.catalog-sort-value[data-value="addition"]').classList.add('active-sort-link'); //менять тут стартовую сортировку
    }
  }]);
  return SortForm;
}();
_defineProperty(SortForm, "sortForm", null);
_defineProperty(SortForm, "sortFormLinks", null);
_defineProperty(SortForm, "sormFormInput", null);
var FiltersForm = /*#__PURE__*/function () {
  function FiltersForm() {
    _classCallCheck(this, FiltersForm);
  }
  _createClass(FiltersForm, null, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.filtersHead = document.querySelectorAll('.catalog-filters-head');
      this.sizesFiltersInputs = document.querySelector('.catalog-sizes-filters').querySelectorAll('input[type="checkbox"]');
      this.colorsFiltersInputs = document.querySelector('.catalog-sizes-colors').querySelectorAll('input[type="checkbox"]');
      this.filtersHead.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.target.closest('.catalog-filters-head').classList.toggle('catalog-head-active');
        });
      });
      this.sizesFiltersInputs.forEach(function (item) {
        item.addEventListener('click', function () {
          var checkedCheckboxes = document.querySelector('.catalog-sizes-filters').querySelectorAll('input[type="checkbox"]:checked');
          _this2.sizesFiltersChecked = [];
          checkedCheckboxes.forEach(function (item) {
            _this2.sizesFiltersChecked.push(item.name);
          });
          productsUI.filterProducts({
            sizes: _this2.sizesFiltersChecked,
            colors: _this2.colorsFiltersCheced
          });
        });
      });
      this.colorsFiltersInputs.forEach(function (item) {
        item.addEventListener('click', function () {
          var checkedCheckboxes = document.querySelector('.catalog-sizes-colors').querySelectorAll('input[type="checkbox"]:checked');
          _this2.colorsFiltersCheced = [];
          checkedCheckboxes.forEach(function (item) {
            _this2.colorsFiltersCheced.push(item.name);
          });
          productsUI.filterProducts({
            sizes: _this2.sizesFiltersChecked,
            colors: _this2.colorsFiltersCheced
          });
        });
      });
    }
  }]);
  return FiltersForm;
}();
_defineProperty(FiltersForm, "filtersHead", null);
_defineProperty(FiltersForm, "sizesFiltersInputs", null);
_defineProperty(FiltersForm, "sizesFiltersChecked", []);
_defineProperty(FiltersForm, "colorsFiltersInputs", null);
_defineProperty(FiltersForm, "colorsFiltersCheced", []);
var _fetchData = /*#__PURE__*/new WeakSet();
var _showPreloader = /*#__PURE__*/new WeakSet();
var _removePreloader = /*#__PURE__*/new WeakSet();
var _getCategory = /*#__PURE__*/new WeakSet();
var Products = /*#__PURE__*/function () {
  function Products() {
    _classCallCheck(this, Products);
    _classPrivateMethodInitSpec(this, _getCategory);
    _classPrivateMethodInitSpec(this, _removePreloader);
    _classPrivateMethodInitSpec(this, _showPreloader);
    _classPrivateMethodInitSpec(this, _fetchData);
    _defineProperty(this, "currentUrl", null);
    _defineProperty(this, "category", null);
    _defineProperty(this, "token", null);
    _defineProperty(this, "products", null);
    _defineProperty(this, "filteredProducts", null);
  }
  _createClass(Products, [{
    key: "init",
    value: function init() {
      this.currentUrl = window.location.href;
      this.category = _classPrivateMethodGet(this, _getCategory, _getCategory2).call(this);
      this.token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      _classPrivateMethodGet(this, _fetchData, _fetchData2).call(this);
    }
  }]);
  return Products;
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
          url = "http://finalproject/getproducts?category=".concat(this.category);
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
          this.products = respone.products;
          this.filteredProducts = respone.products;
          _context.next = 16;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
        case 16:
          _context.prev = 16;
          if (this.products.length) {
            productsUI.sortProducts('addition'); //менять тут стартовую сортировку
            this.createPagination();
            // this.render();
          }
          return _context.finish(16);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[1, 14, 16, 19]]);
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
function _getCategory2() {
  var rexExp = /http:\/\/finalproject\/catalog\/(\w+)[?\/]?/;
  var category = this.currentUrl.match(rexExp)[1];
  return category;
}
var ProductsUI = /*#__PURE__*/function (_Products) {
  _inherits(ProductsUI, _Products);
  var _super = _createSuper(ProductsUI);
  function ProductsUI() {
    var _this3;
    _classCallCheck(this, ProductsUI);
    _this3 = _super.call(this);
    _defineProperty(_assertThisInitialized(_this3), "paginationCounter", null);
    _defineProperty(_assertThisInitialized(_this3), "paginationCurrentStep", null);
    _defineProperty(_assertThisInitialized(_this3), "shownProducts", null);
    return _this3;
  }
  _createClass(ProductsUI, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(ProductsUI.prototype), "init", this).call(this);
      this.paginationCounter = 6;
      this.paginationCurrentStep = 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var productsWrapper = document.querySelector('.products-wrapper');
      productsWrapper.innerHTML = '';
      if (this.shownProducts) this.shownProducts.forEach(function (item) {
        var productItem = document.createElement('div');
        productItem.classList.add('product-item');
        var productItemImgWrapper = document.createElement('div');
        productItemImgWrapper.classList.add('product-item-img-wrapper');
        var productItemImg = document.createElement('img');
        productItemImg.setAttribute('src', item.images.img_1 ? "/images/products/".concat(item.images.img_1) : '/images/service/imageNotFound.jpg');
        var priceWrapper = document.createElement('div');
        priceWrapper.classList.add('price-wrapper');
        var price = document.createElement('p');
        price.classList.add('product-item-price');
        price.innerText = "".concat(item.prices.total_price, " \u0440.");
        var showDiscount = item.prices.discount > 0;
        var discount = document.createElement('p');
        discount.classList.add('product-item-discount');
        discount.innerText = showDiscount ? "\u0441\u043A\u0438\u0434\u043A\u0430: ".concat(item.prices.total_discount, " \u0440.") : '';
        var productNameWrapper = document.createElement('div');
        productNameWrapper.classList.add('product-name-wrapper');
        var productName = document.createElement('p');
        productName.classList.add('product-item-name');
        productName.innerText = item.name;
        var productLinkWrapper = document.createElement('div');
        productLinkWrapper.classList.add('product-link-wrapper');
        var productItemLink = document.createElement('a');
        productItemLink.classList.add('product-item-link');
        productItemLink.setAttribute('href', "/catalog/".concat(_this4.category, "/").concat(item.id));
        var productItemLinkContent = document.createElement('span');
        productItemLinkContent.classList.add('product-item-link-content');
        productItemLinkContent.innerText = 'Подробнее';
        var productItemLinkImg = document.createElement('img');
        productItemLinkImg.classList.add('product-item-link-img');
        productItemLinkImg.setAttribute('src', '/images/service/product_arrow_right.svg');
        productItemLink.append(productItemLinkContent, productItemLinkImg);
        productLinkWrapper.append(productItemLink);
        productNameWrapper.append(productName);
        priceWrapper.append(price, discount);
        productItemImgWrapper.append(productItemImg);
        productItem.append(productItemImgWrapper, priceWrapper, productNameWrapper, productLinkWrapper);
        productsWrapper.append(productItem);
      });
    }
  }, {
    key: "sortProducts",
    value: function sortProducts(sortBy) {
      switch (sortBy) {
        case 'price':
          this.filteredProducts.sort(function (productA, productB) {
            return +productA.prices.total_price - +productB.prices.total_price;
          });
          break;
        case 'discount':
          this.filteredProducts.sort(function (productA, productB) {
            return +productB.prices.total_discount - +productA.prices.total_discount;
          });
          break;
        case 'addition':
          this.filteredProducts.sort(function (productA, productB) {
            return productB.created_at.localeCompare(productA.created_at);
          });
          break;
      }
      this.createPagination();
    }
  }, {
    key: "filterProducts",
    value: function filterProducts(_ref) {
      var sizes = _ref.sizes,
        colors = _ref.colors;
      if (sizes.length && colors.length) {
        this.filteredProducts = this.products.filter(function (item) {
          var colorFlag = false;
          var sizeFlag = false;
          colors.forEach(function (color) {
            if (item.colors[color]) colorFlag = true;
          });
          sizes.forEach(function (size) {
            if (item.sizes[size]) sizeFlag = true;
          });
          return colorFlag && sizeFlag ? true : false;
        });
      } else if (sizes.length && !colors.length) {
        this.filteredProducts = this.products.filter(function (item) {
          var flag = false;
          sizes.forEach(function (size) {
            if (item.sizes[size]) flag = true;
          });
          return flag;
        });
      } else if (!sizes.length && colors.length) {
        this.filteredProducts = this.products.filter(function (item) {
          var flag = false;
          colors.forEach(function (color) {
            if (item.colors[color]) flag = true;
          });
          return flag;
        });
      } else {
        this.filteredProducts = this.products;
      }
      this.createPagination();
    }
  }, {
    key: "createPagination",
    value: function createPagination() {
      var _this5 = this;
      document.querySelector('.pagination-wrapper').innerHTML = '';
      var paginateMax = Math.ceil(this.filteredProducts.length / this.paginationCounter);
      for (var i = 1; i <= paginateMax; i++) {
        var paginateItem = document.createElement('div');
        paginateItem.classList.add('pagination-item');
        paginateItem.innerText = i;
        paginateItem.addEventListener('click', function (e) {
          _this5.paginationCurrentStep = e.target.innerText;
          var maxIndex = _this5.paginationCounter * _this5.paginationCurrentStep;
          var minIndex = maxIndex - _this5.paginationCounter;
          _this5.shownProducts = _this5.filteredProducts.slice(minIndex, maxIndex);
          _this5.render();
        });
        if (paginateMax > 1) {
          document.querySelector('.pagination-wrapper').append(paginateItem);
        }
      }
      this.shownProducts = this.filteredProducts.slice(0, this.paginationCounter);
      this.render();
    }
  }]);
  return ProductsUI;
}(Products);
SortForm.init();
FiltersForm.init();
var productsUI = new ProductsUI();
productsUI.init();
})();

/******/ })()
;