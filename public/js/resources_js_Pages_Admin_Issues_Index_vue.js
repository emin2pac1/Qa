"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Issues_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmDialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => (/* binding */ Types),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Types = {
  Error: "error",
  Warning: "warning",
  Success: "success"
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KConfirmDialog",
  data: function data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      dialogType: Types.Success,
      title: null,
      options: {
        width: 400,
        zIndex: 200,
        persistent: false
      },
      icon: null,
      color: null
    };
  },
  methods: {
    open: function open(title, message) {
      var _this = this;

      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Types.Success;
      var options = arguments.length > 3 ? arguments[3] : undefined;
      this.dialog = true;
      this.title = title;
      this.message = message;
      this.dialogType = type;
      this.setDialogType();
      this.options = Object.assign(this.options, options);
      return new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
    },
    agree: function agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel: function cancel() {
      this.resolve(false);
      this.dialog = false;
    },
    setDialogType: function setDialogType() {
      switch (this.dialogType) {
        case Types.Success:
          this.icon = 'check_circle';
          this.color = 'success';
          break;

        case Types.Warning:
          this.icon = 'warning';
          this.color = 'warning';
          break;

        case Types.Error:
          this.icon = 'delete';
          this.color = 'error';
          break;

        default:
          this.icon = 'check_circle';
          this.color = 'success';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KConfirmDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KConfirmDialog */ "./resources/js/Karajkom/KConfirmDialog.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KConfirmedAction",
  components: {
    KConfirmDialog: _KConfirmDialog__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    executor: {
      type: Function,
      "default": function _default() {},
      required: false
    }
  },
  methods: {
    startConfirming: function startConfirming() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.confirm.open('Confirm action', 'Are you sure you want to perform this action?', _KConfirmDialog__WEBPACK_IMPORTED_MODULE_0__.Types.Error);

              case 2:
                if (!_context.sent) {
                  _context.next = 4;
                  break;
                }

                _this.executor();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KDataTableFooter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KDataTableFooter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KDataTableFooter",
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  methods: {
    onItemsPerPageChange: function onItemsPerPageChange() {
      this.$emit('onItemsPerPageChange', this.itemsPerPageMutable);
    },
    gotoFirstPage: function gotoFirstPage() {
      var _this = this;

      var params = {};
      Object.keys(this.route().params).forEach(function (key) {
        if (key !== 'page') {
          params[key] = _this.route().params[key];
        }
      });
      this.$inertia.get(route(this.route().current(), _objectSpread({}, params)));
    },
    gotoLastPage: function gotoLastPage() {
      this.$inertia.get(route(this.route().current(), _objectSpread(_objectSpread({}, this.route().params), {}, {
        page: this.pageMeta.last_page
      })));
    },
    gotoPrevious: function gotoPrevious() {
      var _this2 = this;

      var params = {};
      Object.keys(this.route().params).forEach(function (key) {
        if (!(key === 'page' && _this2.route().params.page - 1 === 1)) {
          if (key === 'page') {
            params[key] = --_this2.route().params[key];
          } else {
            params[key] = _this2.route().params[key];
          }
        }
      });
      this.$inertia.get(route(this.route().current(), _objectSpread({}, params)));
    },
    gotoNext: function gotoNext() {
      this.$inertia.get(route(this.route().current(), _objectSpread(_objectSpread({}, this.route().params), {}, {
        page: this.route().params.page ? ++this.route().params.page : 2
      })));
    }
  },
  data: function data() {
    return {
      itemsPerPageMutable: this.itemsPerPage
    };
  },
  props: {
    pageMeta: {
      type: Object,
      "default": null,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    isSimplePaginate: function isSimplePaginate() {
      return !this.pageMeta.total;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KNavLink.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KNavLink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KNavLink",
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    url: {
      type: String,
      "default": null,
      required: true
    },
    active: {
      type: Boolean,
      "default": false,
      required: false
    },
    label: {
      type: String,
      "default": 'Link',
      required: false
    },
    routeName: {
      type: String,
      "default": 'Link',
      required: false
    },
    routeParent: {
      type: String,
      "default": 'Link',
      required: false
    },
    method: {
      type: String,
      "default": 'get',
      required: false
    }
  },
  computed: {
    classes: function classes() {
      return route().current(this.routeName) || route().current(this.routeParent) ? 'nav-link-exact-active' : 'nav-link-exact-inactive';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KPageHeader",
  data: function data() {
    return {
      items: []
    };
  },
  props: {
    title: {
      type: String,
      "default": null,
      required: false
    },
    breadcrumb_items: {
      type: Array,
      "default": function _default() {
        return [];
      },
      required: false
    },
    showQueryParams: {
      type: Boolean,
      "default": false,
      required: false
    },
    getDepartmentName: Function
  },
  computed: {
    routeParamsComputed: function routeParamsComputed() {
      var _this = this;

      //    get keys list of this.route().params to array
      var keys = Object.keys(this.route().params);
      var routeParams = [];
      keys.forEach(function (key) {
        // skip is key is itemsPerPage or page
        if (key === 'itemsPerPage' || key === 'page') {
          return;
        }

        if (key === 'sortBy') {
          routeParams.push({
            key: key,
            value: 'sortBy : ' + _this.route().params[key],
            color: 'success'
          });
        } else if (key === 'sortDesc') {
          if (!!+_this.route().params[key]) {
            routeParams.push({
              key: key,
              value: key,
              color: 'warning'
            });
          }
        } //deleted
        else if (key === 'deleted') {
          routeParams.push({
            key: key,
            value: key,
            color: 'error'
          });
        } else if (key === 'term') {
          routeParams.push({
            key: key,
            value: 'Search : ' + _this.route().params[key],
            color: 'success'
          });
        } else if (key === 'department') {
          routeParams.push({
            key: key,
            value: 'Department - ' + _this.getDepartmentName(_this.route().params[key]),
            color: 'accent'
          });
        } else if (key === 'status') {
          routeParams.push({
            key: key,
            value: 'Status - ' + _this.route().params[key],
            color: 'accent'
          });
        } else if (key === 'priority') {
          routeParams.push({
            key: key,
            value: 'Priority - ' + _this.route().params[key],
            color: 'accent'
          });
        } else if (key === 'reportedBy') {
          routeParams.push({
            key: key,
            value: 'reportedBy - ' + _this.route().params[key],
            color: 'success'
          });
        } else {
          routeParams.push({
            key: key,
            value: key,
            color: 'accent'
          });
        }
      });
      return routeParams;
    }
  },
  methods: {
    removeParam: function removeParam(param) {
      var _this2 = this;

      //remove key from this.route().params object
      var params = {};
      Object.keys(this.route().params).forEach(function (key) {
        if (key !== param) {
          if (param === 'sortBy' && key === 'sortDesc') {
            return;
          }

          params[key] = _this2.route().params[key];
        }
      });
      this.$inertia.get(route(this.route().current(), _objectSpread({}, params)));
    },
    removeAllParams: function removeAllParams() {
      this.$inertia.get(route(this.route().current(), {}));
    },
    reload: function reload() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KSnackBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KSnackBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KSnackBar",
  methods: {
    open: function open(text, color) {
      var action_text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'close';
      var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var timeout = arguments.length > 4 ? arguments[4] : undefined;
      this.text = text;
      this.color = color;
      this.action = action;
      this.timeout = timeout;
      this.snackbar = true;

      if (action_text) {
        this.action_text = action_text;
      }
    },
    onClickAction: function onClickAction() {
      this.snackbar = false; //check action is not null and is a function

      if (this.action && typeof this.action === 'function') {
        this.action();
      }
    }
  },
  data: function data() {
    return {
      text: null,
      action: null,
      snackbar: false,
      color: 'success',
      action_text: 'close',
      timeout: 3000
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_LayoutWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/LayoutWrapper */ "./resources/js/Layouts/LayoutWrapper.vue");
/* harmony import */ var _Navigation_AppSideNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/AppSideNav */ "./resources/js/Navigation/AppSideNav.vue");
/* harmony import */ var _Navigation_AppTopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation/AppTopBar */ "./resources/js/Navigation/AppTopBar.vue");
/* harmony import */ var _Navigation_AppFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/AppFooter */ "./resources/js/Navigation/AppFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AppLayout",
  components: {
    AppFooter: _Navigation_AppFooter__WEBPACK_IMPORTED_MODULE_3__["default"],
    AppTopBar: _Navigation_AppTopBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppSideNav: _Navigation_AppSideNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    LayoutWrapper: _Layouts_LayoutWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    isSideNav: {
      type: Boolean,
      "default": true,
      required: false
    }
  },
  computed: {
    currentRoute: function currentRoute() {
      return location.pathname.substr(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/LayoutWrapper.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/LayoutWrapper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Karajkom_KSnackBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Karajkom/KSnackBar */ "./resources/js/Karajkom/KSnackBar.vue");
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LayoutWrapper",
  components: {
    KSnackBar: _Karajkom_KSnackBar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    window.addEventListener('online', this.checkNetwork);
    window.addEventListener('offline', this.checkNetwork);
  },
  watch: {},
  computed: {},
  methods: {
    checkNetwork: function checkNetwork() {
      if (window.navigator.onLine) {
        this.$refs.snackbar.open('You are online now', 'success');
      } else {
        this.$refs.snackbar.open('seems like you are offline, Please check your connection', 'error', null, null, -1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AppFooter"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppSideNav.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppSideNav.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Karajkom_KNavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Karajkom/KNavLink */ "./resources/js/Karajkom/KNavLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AppSideNav",
  components: {
    KNavLink: _Karajkom_KNavLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      drawer: null,
      mini: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('toggleNav', function (data) {
      if (data) {
        _this.drawer = data;
      } else {
        _this.drawer = !_this.drawer;
      }
    });
    this.$root.$on('toggleNavMini', function (data) {
      if (data) {
        _this.mini = data;
      } else {
        _this.mini = !_this.mini;
      }
    });
  },
  methods: {
    hasChildren: function hasChildren(item) {
      return item.children && item.children instanceof Array;
    },
    childIsParent: function childIsParent(item) {
      return route().current(item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Karajkom_KNavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Karajkom/KNavLink */ "./resources/js/Karajkom/KNavLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AppTopBar",
  components: {
    KNavLink: _Karajkom_KNavLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    signOut: function signOut() {
      this.$inertia.post(route('logout'));
    },
    toggleNavBar: function toggleNavBar() {
      this.$root.$emit('toggleNav');
    }
  },
  props: {
    isSideNav: {
      type: Boolean,
      "default": true,
      required: false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Issues/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Issues/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Layouts/AppLayout */ "./resources/js/Layouts/AppLayout.vue");
/* harmony import */ var _Karajkom_KPageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Karajkom/KPageHeader */ "./resources/js/Karajkom/KPageHeader.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Karajkom_KDataTableFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Karajkom/KDataTableFooter */ "./resources/js/Karajkom/KDataTableFooter.vue");
/* harmony import */ var _Karajkom_KConfirmedAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Karajkom/KConfirmedAction */ "./resources/js/Karajkom/KConfirmedAction.vue");
/* harmony import */ var _Karajkom_KSnackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Karajkom/KSnackBar */ "./resources/js/Karajkom/KSnackBar.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  metaInfo: function metaInfo() {
    return {
      title: 'Issues'
    };
  },
  components: {
    KSnackBar: _Karajkom_KSnackBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    KConfirmedAction: _Karajkom_KConfirmedAction__WEBPACK_IMPORTED_MODULE_4__["default"],
    KDataTableFooter: _Karajkom_KDataTableFooter__WEBPACK_IMPORTED_MODULE_3__["default"],
    KPageHeader: _Karajkom_KPageHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppLayout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      breadcrumbs: [{
        disabled: false,
        text: 'dashboard',
        href: route('admin:dashboard')
      }, {
        text: 'Issues',
        disabled: true,
        href: route('admin:issues')
      }],
      options: {
        sortBy: [this.route().params.sortBy ? this.route().params.sortBy : null],
        sortDesc: [this.route().params.sortDesc ? !!+this.route().params.sortDesc : null]
      },
      firstPaint: true,
      search: this.route().params.term ? this.route().params.term : '',
      filter_drawer: false,
      filters: {
        status: this.route().params.status ? this.route().params.status : null,
        priority: this.route().params.priority ? this.route().params.priority : null,
        reportedBy: this.route().params.reportedBy ? this.route().params.reportedBy : null,
        department: this.route().params.department ? this.route().params.department : null,
        show_completed: this.route().params.show_completed ? !!parseInt(this.route().params.show_completed) : null,
        only_overdue: this.route().params.only_overdue ? !!parseInt(this.route().params.only_overdue) : null
      },
      reportedBy: ['ME', 'OTHERS'],
      headers: [// {
      //     text: 'ID',
      //     align: 'start',
      //     value: 'id',
      // },
      {
        text: 'Title',
        align: 'start',
        value: 'title'
      }, {
        text: 'Priority',
        align: 'start',
        value: 'priority',
        formatter: function formatter(x) {
          return x ? _this.$options.filters.snakeToTitle(x) : null;
        }
      }, {
        text: 'Status',
        align: 'start',
        value: 'status'
      }, {
        text: 'Department',
        align: 'start',
        value: 'department'
      }, {
        text: 'Milestone',
        align: 'start',
        value: 'milestone'
      }, {
        text: 'Time Left',
        align: 'start',
        value: 'time_left'
      }, {
        text: 'Updated At',
        align: 'start',
        value: 'updated_at',
        formatter: function formatter(x) {
          return x ? _this.$options.filters.date_time(x) : null;
        }
      }, {
        text: 'Created At',
        align: 'start',
        value: 'created_at',
        formatter: function formatter(x) {
          return x ? _this.$options.filters.date_time(x) : null;
        }
      }, {
        text: '',
        value: 'actions',
        sortable: false
      }],
      itemsPerPage: parseInt(this.route().params.itemsPerPage) ? parseInt(this.route().params.itemsPerPage) : 10,
      duplicateToDepartmentDialog: false,
      duplicateToDepartmentForm: this.$inertia.form({
        id: null,
        department: [],
        current_department: null
      })
    };
  },
  props: {
    issues: Object,
    priority_icons: Object,
    statuses: Array,
    priorities: Array,
    departments: Object
  },
  watch: {
    options: {
      handler: function handler() {
        // if (this.options.sortBy.length > 0) {
        if (!this.firstPaint) {
          this.reloadPage();
        }

        this.firstPaint = false; // }
      },
      deep: true
    }
  },
  methods: {
    searchData: lodash__WEBPACK_IMPORTED_MODULE_2___default().throttle(function () {
      this.$inertia.get(route(this.route().current(), _objectSpread(_objectSpread({}, this.queryParams()), {}, {
        page: 1
      }, this.getSortParameters())));
    }, 200),
    queryParams: function queryParams() {
      var _this2 = this;

      var params = {};
      if (this.search && this.search.length > 0) params.term = this.search;
      if (this.itemsPerPage !== 10) params.itemsPerPage = this.itemsPerPage;
      if (this.route().params.page && this.route().params.page !== 1 && this.issues.meta.current_page !== 1) params.page = this.issues.meta.current_page;
      Object.keys(this.filters).forEach(function (key) {
        if (_this2.filters[key] !== null) {
          if ((key === 'show_completed' || key === 'only_overdue') && _this2.filters[key] !== true) return;
          params[key] = _this2.filters[key];
        }
      });
      return params;
    },
    getSortParameters: function getSortParameters() {
      var params = {};
      if (this.options.sortBy && this.options.sortBy.length > 0) params.sortBy = this.options.sortBy[0];
      if (this.options.sortDesc && this.options.sortDesc.length > 0) params.sortDesc = this.options.sortDesc[0];
      return params;
    },
    changeItemsPerPage: function changeItemsPerPage(perPage) {
      this.itemsPerPage = perPage;
      this.reloadPage();
    },
    searchDataClear: function searchDataClear() {
      this.search = '';
      this.reloadPage();
    },
    reloadPage: function reloadPage() {
      this.$inertia.get(route(this.route().current(), _objectSpread(_objectSpread({}, this.queryParams()), this.getSortParameters())));
    },
    clearFilters: function clearFilters() {
      var _this3 = this;

      this.filter_drawer = false; //    set all values to null

      this.search = null;
      Object.keys(this.filters).forEach(function (key) {
        _this3.filters[key] = null;
      });
      this.reloadPage();
    },
    getDepartmentName: function getDepartmentName(id) {
      return this.departments.data.find(function (x) {
        return x.id === id;
      }).name;
    },
    onChangeStatus: function onChangeStatus() {
      if (this.filters.status) {
        this.filters.show_completed = null;
      }
    },
    deleteItem: function deleteItem(id) {
      this.$inertia["delete"](route('admin:issues.destroy', id));
    },
    openDuplicateToDepartmentDialog: function openDuplicateToDepartmentDialog(item) {
      this.clearDepartmentForm();
      this.duplicateToDepartmentForm.id = item.id;
      this.duplicateToDepartmentForm.current_department = item.department.id;
      this.duplicateToDepartmentDialog = true;
    },
    closeDuplicateToDepartmentDialog: function closeDuplicateToDepartmentDialog() {
      this.duplicateToDepartmentDialog = false;
      this.clearDepartmentForm();
    },
    clearDepartmentForm: function clearDepartmentForm() {
      this.duplicateToDepartmentForm.reset();
      this.duplicateToDepartmentForm.clearErrors();
    },
    duplicateToDepartment: function duplicateToDepartment() {
      var _this4 = this;

      this.duplicateToDepartmentForm.post(route('admin:issues.duplicate', this.duplicateToDepartmentForm.id), {
        onSuccess: function onSuccess() {
          _this4.closeDuplicateToDepartmentDialog();

          _this4.$refs.snackbar.open('Issue duplicated successfully', 'success');
        }
      });
    }
  },
  computed: {
    duplicatableDepartments: function duplicatableDepartments() {
      var _this5 = this;

      return this.departments.data.filter(function (x) {
        return x.id !== _this5.duplicateToDepartmentForm.current_department;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.wrapper[data-v-48da9072] {\n    display: inline;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n[data-v-0ace651a] .v-breadcrumbs__item {\n    color: var(--v-primary-base) !important;\n}\n[data-v-0ace651a] .v-breadcrumbs__item--disabled {\n    color: rgba(0, 0, 0, .38) !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.navbar-brand[data-v-03cff942] {\n    color: white !important;\n    padding-top: .3125rem;\n    padding-bottom: .3125rem;\n    margin-right: 1rem;\n    font-size: 1.5rem;\n    text-decoration: none;\n    white-space: nowrap;\n}\n[data-v-03cff942] .v-toolbar__content{\n    padding-right: 0!important;\n    padding-left: 0!important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_style_index_0_id_48da9072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_style_index_0_id_48da9072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_style_index_0_id_48da9072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_style_index_0_id_0ace651a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_style_index_0_id_0ace651a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_style_index_0_id_0ace651a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_style_index_0_id_03cff942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_style_index_0_id_03cff942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_style_index_0_id_03cff942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmDialog.vue":
/*!**************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmDialog.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => (/* reexport safe */ _KConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.Types),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KConfirmDialog_vue_vue_type_template_id_41b7fb0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KConfirmDialog.vue?vue&type=template&id=41b7fb0c& */ "./resources/js/Karajkom/KConfirmDialog.vue?vue&type=template&id=41b7fb0c&");
/* harmony import */ var _KConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KConfirmDialog.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KConfirmDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KConfirmDialog_vue_vue_type_template_id_41b7fb0c___WEBPACK_IMPORTED_MODULE_0__.render,
  _KConfirmDialog_vue_vue_type_template_id_41b7fb0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KConfirmDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmedAction.vue":
/*!****************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmedAction.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KConfirmedAction_vue_vue_type_template_id_48da9072_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true& */ "./resources/js/Karajkom/KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true&");
/* harmony import */ var _KConfirmedAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KConfirmedAction.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KConfirmedAction.vue?vue&type=script&lang=js&");
/* harmony import */ var _KConfirmedAction_vue_vue_type_style_index_0_id_48da9072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css& */ "./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KConfirmedAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KConfirmedAction_vue_vue_type_template_id_48da9072_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _KConfirmedAction_vue_vue_type_template_id_48da9072_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "48da9072",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KConfirmedAction.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KDataTableFooter.vue":
/*!****************************************************!*\
  !*** ./resources/js/Karajkom/KDataTableFooter.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KDataTableFooter_vue_vue_type_template_id_78146d51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true& */ "./resources/js/Karajkom/KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true&");
/* harmony import */ var _KDataTableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KDataTableFooter.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KDataTableFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KDataTableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KDataTableFooter_vue_vue_type_template_id_78146d51_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _KDataTableFooter_vue_vue_type_template_id_78146d51_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "78146d51",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KDataTableFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KNavLink.vue":
/*!********************************************!*\
  !*** ./resources/js/Karajkom/KNavLink.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KNavLink_vue_vue_type_template_id_600e71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KNavLink.vue?vue&type=template&id=600e71e2&scoped=true& */ "./resources/js/Karajkom/KNavLink.vue?vue&type=template&id=600e71e2&scoped=true&");
/* harmony import */ var _KNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KNavLink.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KNavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KNavLink_vue_vue_type_template_id_600e71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _KNavLink_vue_vue_type_template_id_600e71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "600e71e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KNavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KPageHeader.vue":
/*!***********************************************!*\
  !*** ./resources/js/Karajkom/KPageHeader.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KPageHeader_vue_vue_type_template_id_0ace651a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true& */ "./resources/js/Karajkom/KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true&");
/* harmony import */ var _KPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KPageHeader.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KPageHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _KPageHeader_vue_vue_type_style_index_0_id_0ace651a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css& */ "./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KPageHeader_vue_vue_type_template_id_0ace651a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _KPageHeader_vue_vue_type_template_id_0ace651a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ace651a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KPageHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KSnackBar.vue":
/*!*********************************************!*\
  !*** ./resources/js/Karajkom/KSnackBar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KSnackBar_vue_vue_type_template_id_4fdb4dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true& */ "./resources/js/Karajkom/KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true&");
/* harmony import */ var _KSnackBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KSnackBar.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KSnackBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KSnackBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KSnackBar_vue_vue_type_template_id_4fdb4dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _KSnackBar_vue_vue_type_template_id_4fdb4dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4fdb4dfa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KSnackBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLayout_vue_vue_type_template_id_5663af57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=5663af57&scoped=true& */ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&scoped=true&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_5663af57_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppLayout_vue_vue_type_template_id_5663af57_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5663af57",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/AppLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/LayoutWrapper.vue":
/*!************************************************!*\
  !*** ./resources/js/Layouts/LayoutWrapper.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayoutWrapper_vue_vue_type_template_id_76137fb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true& */ "./resources/js/Layouts/LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true&");
/* harmony import */ var _LayoutWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutWrapper.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/LayoutWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutWrapper_vue_vue_type_template_id_76137fb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LayoutWrapper_vue_vue_type_template_id_76137fb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76137fb5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/LayoutWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Navigation/AppFooter.vue":
/*!***********************************************!*\
  !*** ./resources/js/Navigation/AppFooter.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppFooter_vue_vue_type_template_id_c894dc42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=c894dc42&scoped=true& */ "./resources/js/Navigation/AppFooter.vue?vue&type=template&id=c894dc42&scoped=true&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/Navigation/AppFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_c894dc42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppFooter_vue_vue_type_template_id_c894dc42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c894dc42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Navigation/AppFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Navigation/AppSideNav.vue":
/*!************************************************!*\
  !*** ./resources/js/Navigation/AppSideNav.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppSideNav_vue_vue_type_template_id_61e2e338_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true& */ "./resources/js/Navigation/AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true&");
/* harmony import */ var _AppSideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSideNav.vue?vue&type=script&lang=js& */ "./resources/js/Navigation/AppSideNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppSideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSideNav_vue_vue_type_template_id_61e2e338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppSideNav_vue_vue_type_template_id_61e2e338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61e2e338",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Navigation/AppSideNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Navigation/AppTopBar.vue":
/*!***********************************************!*\
  !*** ./resources/js/Navigation/AppTopBar.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppTopBar_vue_vue_type_template_id_03cff942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppTopBar.vue?vue&type=template&id=03cff942&scoped=true& */ "./resources/js/Navigation/AppTopBar.vue?vue&type=template&id=03cff942&scoped=true&");
/* harmony import */ var _AppTopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppTopBar.vue?vue&type=script&lang=js& */ "./resources/js/Navigation/AppTopBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppTopBar_vue_vue_type_style_index_0_id_03cff942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css& */ "./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppTopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppTopBar_vue_vue_type_template_id_03cff942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppTopBar_vue_vue_type_template_id_03cff942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "03cff942",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Navigation/AppTopBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Issues/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Admin/Issues/Index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_d3c21234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=d3c21234&scoped=true& */ "./resources/js/Pages/Admin/Issues/Index.vue?vue&type=template&id=d3c21234&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Issues/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_d3c21234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_d3c21234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d3c21234",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Issues/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmDialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmDialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.Types),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmedAction.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmedAction.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmedAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KDataTableFooter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Karajkom/KDataTableFooter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KDataTableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KDataTableFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KDataTableFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KDataTableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KNavLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Karajkom/KNavLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KNavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KNavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KPageHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Karajkom/KPageHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KPageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KSnackBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Karajkom/KSnackBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KSnackBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KSnackBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KSnackBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KSnackBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/LayoutWrapper.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Layouts/LayoutWrapper.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/LayoutWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Navigation/AppFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Navigation/AppFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Navigation/AppSideNav.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Navigation/AppSideNav.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSideNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppSideNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Navigation/AppTopBar.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Navigation/AppTopBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Issues/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Issues/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Issues/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_style_index_0_id_48da9072_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=style&index=0&id=48da9072&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_style_index_0_id_0ace651a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=style&index=0&id=0ace651a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_style_index_0_id_03cff942_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=style&index=0&id=03cff942&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Karajkom/KConfirmDialog.vue?vue&type=template&id=41b7fb0c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmDialog.vue?vue&type=template&id=41b7fb0c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmDialog_vue_vue_type_template_id_41b7fb0c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmDialog_vue_vue_type_template_id_41b7fb0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmDialog_vue_vue_type_template_id_41b7fb0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmDialog.vue?vue&type=template&id=41b7fb0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmDialog.vue?vue&type=template&id=41b7fb0c&");


/***/ }),

/***/ "./resources/js/Karajkom/KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_template_id_48da9072_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_template_id_48da9072_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmedAction_vue_vue_type_template_id_48da9072_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true&");


/***/ }),

/***/ "./resources/js/Karajkom/KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Karajkom/KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KDataTableFooter_vue_vue_type_template_id_78146d51_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KDataTableFooter_vue_vue_type_template_id_78146d51_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KDataTableFooter_vue_vue_type_template_id_78146d51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true&");


/***/ }),

/***/ "./resources/js/Karajkom/KNavLink.vue?vue&type=template&id=600e71e2&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Karajkom/KNavLink.vue?vue&type=template&id=600e71e2&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KNavLink_vue_vue_type_template_id_600e71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KNavLink_vue_vue_type_template_id_600e71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KNavLink_vue_vue_type_template_id_600e71e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KNavLink.vue?vue&type=template&id=600e71e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KNavLink.vue?vue&type=template&id=600e71e2&scoped=true&");


/***/ }),

/***/ "./resources/js/Karajkom/KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Karajkom/KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_template_id_0ace651a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_template_id_0ace651a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KPageHeader_vue_vue_type_template_id_0ace651a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true&");


/***/ }),

/***/ "./resources/js/Karajkom/KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Karajkom/KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KSnackBar_vue_vue_type_template_id_4fdb4dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KSnackBar_vue_vue_type_template_id_4fdb4dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KSnackBar_vue_vue_type_template_id_4fdb4dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true&");


/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=template&id=5663af57&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&scoped=true&");


/***/ }),

/***/ "./resources/js/Layouts/LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Layouts/LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWrapper_vue_vue_type_template_id_76137fb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWrapper_vue_vue_type_template_id_76137fb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWrapper_vue_vue_type_template_id_76137fb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true&");


/***/ }),

/***/ "./resources/js/Navigation/AppFooter.vue?vue&type=template&id=c894dc42&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Navigation/AppFooter.vue?vue&type=template&id=c894dc42&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_c894dc42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_c894dc42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_c894dc42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppFooter.vue?vue&type=template&id=c894dc42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppFooter.vue?vue&type=template&id=c894dc42&scoped=true&");


/***/ }),

/***/ "./resources/js/Navigation/AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Navigation/AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSideNav_vue_vue_type_template_id_61e2e338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSideNav_vue_vue_type_template_id_61e2e338_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSideNav_vue_vue_type_template_id_61e2e338_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true&");


/***/ }),

/***/ "./resources/js/Navigation/AppTopBar.vue?vue&type=template&id=03cff942&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Navigation/AppTopBar.vue?vue&type=template&id=03cff942&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_template_id_03cff942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_template_id_03cff942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTopBar_vue_vue_type_template_id_03cff942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppTopBar.vue?vue&type=template&id=03cff942&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=template&id=03cff942&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Admin/Issues/Index.vue?vue&type=template&id=d3c21234&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Issues/Index.vue?vue&type=template&id=d3c21234&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d3c21234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d3c21234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d3c21234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=d3c21234&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Issues/Index.vue?vue&type=template&id=d3c21234&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmDialog.vue?vue&type=template&id=41b7fb0c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmDialog.vue?vue&type=template&id=41b7fb0c& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      style: { zIndex: _vm.options.zIndex },
      attrs: {
        "max-width": _vm.options.width,
        persistent: _vm.options.persistent,
      },
      on: {
        keydown: [
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
            ) {
              return null
            }
            return _vm.cancel.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.agree.apply(null, arguments)
          },
        ],
      },
      model: {
        value: _vm.dialog,
        callback: function ($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog",
      },
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: _vm.color, dense: "", flat: "" } },
            [
              _c(
                "v-toolbar-title",
                { staticClass: "text-body-2 font-weight-bold" },
                [
                  _c("v-icon", [_vm._v(_vm._s(_vm.icon))]),
                  _vm._v(
                    "\n                " + _vm._s(_vm.title) + "\n            "
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !!_vm.message,
                expression: "!!message",
              },
            ],
            staticClass: "pa-4 black--text",
            domProps: { innerHTML: _vm._s(_vm.message) },
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "pt-3" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "grey", text: "" },
                  nativeOn: {
                    click: function ($event) {
                      return _vm.cancel.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("\n               cancel\n\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: _vm.color, outlined: "" },
                  nativeOn: {
                    click: function ($event) {
                      return _vm.agree.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("\n               ok\n            ")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmedAction.vue?vue&type=template&id=48da9072&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c("k-confirm-dialog", { ref: "confirm" }),
      _vm._v(" "),
      _vm._t("default", null, { confirm: _vm.startConfirming }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KDataTableFooter.vue?vue&type=template&id=78146d51&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { staticClass: "mx-3 align-center", attrs: { "no-gutters": "" } },
    [
      _c("v-spacer"),
      _vm._v(" "),
      _c("small", [_vm._v(" items per page ")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mx-3", staticStyle: { width: "50px" } },
        [
          _c("v-combobox", {
            attrs: { dense: "", "hide-details": "", items: [5, 10, 15, 25] },
            on: { change: _vm.onItemsPerPageChange },
            scopedSlots: _vm._u([
              {
                key: "label",
                fn: function (ref) {
                  var item = ref.item
                  return [_c("small", [_vm._v(_vm._s(item))])]
                },
              },
              {
                key: "selection",
                fn: function (ref) {
                  var item = ref.item
                  return [_c("small", [_vm._v(_vm._s(item))])]
                },
              },
            ]),
            model: {
              value: _vm.itemsPerPageMutable,
              callback: function ($$v) {
                _vm.itemsPerPageMutable = $$v
              },
              expression: "itemsPerPageMutable",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("small", [
        _vm._v(
          _vm._s(_vm.pageMeta.from) +
            " - " +
            _vm._s(_vm.pageMeta.to) +
            " " +
            _vm._s(_vm.isSimplePaginate ? "" : "of") +
            "\n        " +
            _vm._s(_vm.isSimplePaginate ? "" : _vm.pageMeta.total)
        ),
      ]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "text-capitalize",
          attrs: {
            icon: "",
            large: "",
            disabled: _vm.pageMeta.current_page === 1,
          },
          on: { click: _vm.gotoFirstPage },
        },
        [_c("v-icon", [_vm._v("\n\n            first_page\n        ")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "text-capitalize",
          attrs: {
            icon: "",
            large: "",
            disabled: _vm.pageMeta.current_page === 1,
          },
          on: { click: _vm.gotoPrevious },
        },
        [_c("v-icon", [_vm._v("\n            chevron_left\n        ")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "text-capitalize",
          attrs: {
            icon: "",
            large: "",
            disabled: _vm.pageMeta.current_page === _vm.pageMeta.last_page,
          },
          on: { click: _vm.gotoNext },
        },
        [_c("v-icon", [_vm._v("\n            chevron_right\n        ")])],
        1
      ),
      _vm._v(" "),
      !_vm.isSimplePaginate
        ? _c(
            "v-btn",
            {
              staticClass: "text-capitalize",
              attrs: {
                icon: "",
                large: "",
                disabled: _vm.pageMeta.current_page === _vm.pageMeta.last_page,
              },
              on: { click: _vm.gotoLastPage },
            },
            [_c("v-icon", [_vm._v("\n\n            last_page\n        ")])],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KNavLink.vue?vue&type=template&id=600e71e2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KNavLink.vue?vue&type=template&id=600e71e2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Link",
    {
      staticClass: "text-decoration-none ",
      class: _vm.classes,
      staticStyle: { cursor: "pointer" },
      attrs: { href: _vm.url, method: _vm.method, tag: "span" },
    },
    [
      _vm._t("default", function () {
        return [_c("h4", [_vm._v(_vm._s(_vm.label))])]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KPageHeader.vue?vue&type=template&id=0ace651a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-toolbar",
    { staticClass: "mb-3 mt-2", attrs: { flat: "", color: "#eee" } },
    [
      _c("v-toolbar-title", [
        _c("h5", { staticClass: "font-weight-black text-capitalize" }, [
          _vm._v(_vm._s(_vm.title)),
        ]),
      ]),
      _vm._v(" "),
      _vm.showQueryParams ? _c("v-spacer") : _vm._e(),
      _vm._v(" "),
      _vm.showQueryParams
        ? _c(
            "v-layout",
            { attrs: { wrap: "", "justify-center": "" } },
            [
              _vm._l(_vm.routeParamsComputed, function (param, index) {
                return _c(
                  "v-chip",
                  {
                    key: index,
                    staticClass: "text-capitalize ml-1",
                    attrs: { close: "", color: param.color, small: "" },
                    on: {
                      "click:close": function ($event) {
                        return _vm.removeParam(param.key)
                      },
                    },
                  },
                  [
                    _vm._v(
                      _vm._s(_vm._f("snakeToTitle")(param.value)) + "\n        "
                    ),
                  ]
                )
              }),
              _vm._v(" "),
              _vm.routeParamsComputed.length > 0
                ? _c(
                    "v-chip",
                    {
                      staticClass: "text-capitalize ml-1",
                      attrs: { color: "secondary", close: "", small: "" },
                      on: {
                        click: _vm.removeAllParams,
                        "click:close": _vm.removeAllParams,
                      },
                    },
                    [_vm._v("\n            Remove All\n        ")]
                  )
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.smAndUp ? _c("v-spacer") : _vm._e(),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.smAndUp
        ? _c("v-breadcrumbs", {
            attrs: { items: _vm.breadcrumb_items },
            scopedSlots: _vm._u(
              [
                {
                  key: "item",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-breadcrumbs-item",
                        {
                          staticClass:
                            "font-weight-bold ed-font-color--accent text-capitalize",
                          class: { "k-cursor--pointer": !item.disabled },
                          attrs: { link: "", disabled: item.disabled },
                          on: {
                            click: function ($event) {
                              return _vm.$inertia.visit(item.href)
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(item.text) +
                              "\n            "
                          ),
                        ]
                      ),
                    ]
                  },
                },
              ],
              null,
              false,
              719443373
            ),
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { icon: "" }, on: { click: _vm.reload } },
        [_c("v-icon", [_vm._v("\n            refresh\n        ")])],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KSnackBar.vue?vue&type=template&id=4fdb4dfa&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-snackbar",
    {
      attrs: { timeout: _vm.timeout, color: _vm.color },
      scopedSlots: _vm._u([
        {
          key: "action",
          fn: function (ref) {
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._b(
                  {
                    staticClass: "text-capitalize",
                    attrs: { text: "" },
                    on: { click: _vm.onClickAction },
                  },
                  "v-btn",
                  attrs,
                  false
                ),
                [
                  _vm._v(
                    "\n            " + _vm._s(_vm.action_text) + "\n        "
                  ),
                ]
              ),
            ]
          },
        },
      ]),
      model: {
        value: _vm.snackbar,
        callback: function ($$v) {
          _vm.snackbar = $$v
        },
        expression: "snackbar",
      },
    },
    [_vm._v("\n    " + _vm._s(_vm.text) + "\n\n    ")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "LayoutWrapper",
    [
      _vm._t("navigation", function () {
        return [
          _vm.$vuetify.breakpoint.smAndDown
            ? _c("app-side-nav", { key: _vm.currentRoute + "nav" })
            : _vm._e(),
          _vm._v(" "),
          _c("app-top-bar", {
            key: _vm.currentRoute,
            attrs: { isSideNav: _vm.isSideNav },
          }),
        ]
      }),
      _vm._v(" "),
      _c(
        "v-main",
        { staticClass: "pb-16" },
        [_c("v-container", [_vm._t("default")], 2)],
        1
      ),
      _vm._v(" "),
      _vm._t("footer", function () {
        return [_c("app-footer")]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/LayoutWrapper.vue?vue&type=template&id=76137fb5&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [_vm._t("default"), _vm._v(" "), _c("k-snack-bar", { ref: "snackbar" })],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppFooter.vue?vue&type=template&id=c894dc42&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppFooter.vue?vue&type=template&id=c894dc42&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-footer",
    { staticClass: "pt-16", attrs: { padless: "", color: "primary" } },
    [
      _c(
        "v-container",
        [
          _c("v-row", { attrs: { justify: "center", "no-gutters": "" } }, [
            _c("span", { staticClass: "subtitle-2 k--text-color-white" }, [
              _vm._v("Copyright © " + _vm._s(new Date().getFullYear())),
            ]),
          ]),
          _vm._v(" "),
          _c("v-row", { attrs: { justify: "center", "no-gutters": "" } }, [
            _c("span", { staticClass: "subtitle-2 k--text-color-white" }, [
              _vm._v("Works of Milad Khader"),
            ]),
          ]),
          _vm._v(" "),
          _c("v-row", { attrs: { justify: "center", "no-gutters": "" } }, [
            _c("span", { staticClass: "subtitle-2 m-0 k--text-color-white" }, [
              _vm._v("Made with "),
              _c(
                "svg",
                {
                  staticClass: "bi bi-heart",
                  staticStyle: { display: "inline" },
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                  },
                },
                [
                  _c("path", {
                    attrs: {
                      d: "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z",
                    },
                  }),
                ]
              ),
              _vm._v(" in Amman, Jordan for Karajkom LLC"),
            ]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppSideNav.vue?vue&type=template&id=61e2e338&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-navigation-drawer",
    {
      attrs: { app: "", dark: "", color: "primary" },
      model: {
        value: _vm.drawer,
        callback: function ($$v) {
          _vm.drawer = $$v
        },
        expression: "drawer",
      },
    },
    [
      _c(
        "v-list-item",
        { staticClass: "px-2" },
        [
          _c(
            "v-list-item-title",
            [
              _c("KNavLink", { attrs: { url: _vm.route("welcome") } }, [
                _c("h3", { staticClass: "text-center white--text" }, [
                  _vm._v(" Karajkom QA"),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { dense: "", nav: "" } },
        [
          _c(
            "v-list-item-group",
            { attrs: { color: "primary" } },
            [
              _vm._l(_vm.$page.props.dashboard_menu, function (item, index) {
                return [
                  item.type && item.type === "SEPARATOR"
                    ? [
                        item.title
                          ? _c(
                              "v-list-item",
                              { attrs: { dense: "" } },
                              [
                                _vm.mini ? _c("v-divider") : _vm._e(),
                                _vm._v(" "),
                                !_vm.mini
                                  ? _c(
                                      "v-list-item-subtitle",
                                      { staticClass: "text-capitalize " },
                                      [
                                        _vm._v(
                                          _vm._s(item.title) +
                                            "\n                        "
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ],
                              1
                            )
                          : _vm._e(),
                      ]
                    : [
                        !_vm.hasChildren(item)
                          ? [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { right: "", color: "secondary" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function (ref) {
                                          var on = ref.on
                                          var attrs = ref.attrs
                                          return [
                                            _c(
                                              "v-list-item",
                                              _vm._g(
                                                {
                                                  class: {
                                                    "v-item--active v-list-item--active white--text":
                                                      _vm
                                                        .route()
                                                        .current(item.href) ||
                                                      _vm
                                                        .route()
                                                        .current(item.parent),
                                                  },
                                                  attrs: {
                                                    dense: "",
                                                    link: "",
                                                    value: _vm.route(item.href),
                                                    color: "accent",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.$inertia.visit(
                                                        _vm.route(item.href)
                                                      )
                                                    },
                                                  },
                                                },
                                                _vm.mini ? on : null
                                              ),
                                              [
                                                _c(
                                                  "v-list-item-icon",
                                                  { staticClass: "mr-2" },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(_vm._s(item.icon)),
                                                    ]),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c(
                                                      "v-list-item-title",
                                                      {
                                                        staticClass:
                                                          "text-capitalize",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(item.title) +
                                                            "\n                                        "
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(item.title))]),
                                ]
                              ),
                            ]
                          : [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { right: "", color: "secondary" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function (ref) {
                                          var on = ref.on
                                          var attrs = ref.attrs
                                          return [
                                            _c(
                                              "v-list-group",
                                              _vm._g(
                                                {
                                                  attrs: {
                                                    "no-action": "",
                                                    value: _vm
                                                      .route()
                                                      .current(item.parent),
                                                    color: "primary",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "activator",
                                                        fn: function () {
                                                          return [
                                                            _c(
                                                              "v-list-item-icon",
                                                              {
                                                                staticClass:
                                                                  "mr-2",
                                                              },
                                                              [
                                                                _c("v-icon", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.icon
                                                                    )
                                                                  ),
                                                                ]),
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    staticClass:
                                                                      "text-capitalize",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.title
                                                                      ) +
                                                                        "\n                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        },
                                                        proxy: true,
                                                      },
                                                    ],
                                                    null,
                                                    true
                                                  ),
                                                },
                                                _vm.mini ? on : null
                                              ),
                                              [
                                                _vm._v(" "),
                                                _vm._l(
                                                  item.children,
                                                  function (child) {
                                                    return [
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          staticClass: "pl-6",
                                                          class: {
                                                            "v-item--active v-list-item--active":
                                                              _vm
                                                                .route()
                                                                .current(
                                                                  child.href
                                                                ) ||
                                                              _vm.childIsParent(
                                                                child.parent
                                                              ),
                                                          },
                                                          attrs: {
                                                            dense: "",
                                                            link: "",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              _vm.$inertia.visit(
                                                                _vm.route(
                                                                  child.href
                                                                )
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-icon",
                                                            {
                                                              staticClass:
                                                                "mr-2",
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    child.icon
                                                                  )
                                                                ),
                                                              ]),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-content",
                                                            [
                                                              _c(
                                                                "v-list-item-title",
                                                                {
                                                                  staticClass:
                                                                    "text-capitalize",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      child.title
                                                                    ) +
                                                                      "\n                                                "
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  }
                                                ),
                                              ],
                                              2
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(item.title))]),
                                ]
                              ),
                            ],
                      ],
                ]
              }),
            ],
            2
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=template&id=03cff942&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Navigation/AppTopBar.vue?vue&type=template&id=03cff942&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app-bar",
    { attrs: { app: "", flat: "", color: "primary", height: "80" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: _vm.$vuetify.breakpoint.smAndDown } },
        [
          _c(
            "div",
            { staticClass: "d-flex align-center" },
            [
              _vm.$vuetify.breakpoint.smAndDown
                ? [
                    _c("v-app-bar-nav-icon", {
                      attrs: { color: "white" },
                      on: { click: _vm.toggleNavBar },
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "k-nav-link",
                {
                  staticClass: "mx-2 k--text-color-white",
                  attrs: { url: _vm.route("welcome"), label: "KarajkomQA" },
                },
                [
                  _c("span", { staticClass: "navbar-brand" }, [
                    _vm._v("KarajkomQA"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.$page.props.dashboard_menu, function (item, index) {
                return _vm.$vuetify.breakpoint.mdAndUp
                  ? [
                      _c("k-nav-link", {
                        staticClass: "mx-2",
                        attrs: {
                          "route-name": "item.href",
                          "route-parent": item.parent,
                          url: _vm.route(item.href),
                          label: item.title,
                        },
                      }),
                    ]
                  : _vm._e()
              }),
              _vm._v(" "),
              _vm.$page.props.user && _vm.$vuetify.breakpoint.mdAndUp
                ? _c(
                    "a",
                    {
                      staticClass:
                        "nav-link-exact-inactive text-decoration-none font-weight-bold",
                      attrs: { href: _vm.route("help") },
                    },
                    [_vm._v("Help")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$page.props.user
                ? _c(
                    "v-menu",
                    {
                      attrs: {
                        bottom: "",
                        dark: "",
                        left: "",
                        "offset-y": "",
                        origin: "top right",
                        transition: "scale-transition",
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function (ref) {
                              var attrs = ref.attrs
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        attrs: {
                                          "min-width": "0",
                                          plain: "",
                                          ripple: false,
                                        },
                                      },
                                      "v-btn",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-avatar",
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src: _vm.$page.props.user
                                              .profile_photo_url,
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ],
                        null,
                        false,
                        1791302697
                      ),
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-list",
                            { attrs: { dense: "" } },
                            [
                              _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: _vm.$page.props.user
                                            .profile_photo_url,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v(
                                          _vm._s(_vm.$page.props.user.email) +
                                            "\n                                "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.$page.props.user.role) +
                                            "\n                                "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm.$page.props.user.department
                                        ? _c("v-list-item-subtitle", [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.$page.props.user
                                                    .department
                                                ) +
                                                " Department\n                                "
                                            ),
                                          ])
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { attrs: { dense: "" } },
                            [
                              _c(
                                "k-nav-link",
                                {
                                  attrs: {
                                    url: _vm.route("user:profile.show"),
                                  },
                                },
                                [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-icon",
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "secondary" } },
                                            [
                                              _vm._v(
                                                "account_circle\n                                    "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-list-item-title", [
                                        _vm._v("Profile"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "k-nav-link",
                                { attrs: { url: _vm.route("dashboard") } },
                                [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-icon",
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "secondary" } },
                                            [
                                              _vm._v(
                                                "dashboard\n                                    "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-list-item-title", [
                                        _vm._v("Dashboard"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                { on: { click: _vm.signOut } },
                                [
                                  _c(
                                    "v-list-item-icon",
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "secondary" } },
                                        [
                                          _vm._v(
                                            "power_settings_new\n                                "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-item-title", [_vm._v("Logout")]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            2
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Issues/Index.vue?vue&type=template&id=d3c21234&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Issues/Index.vue?vue&type=template&id=d3c21234&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("k-page-header", {
        attrs: {
          "show-query-params": "",
          "get-department-name": _vm.getDepartmentName,
          title: "Issues",
          breadcrumb_items: _vm.breadcrumbs,
        },
      }),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          items: _vm.issues.data,
          headers: _vm.headers,
          options: _vm.options,
          "items-per-page": _vm.itemsPerPage,
          "hide-default-footer": "",
        },
        on: {
          "update:options": function ($event) {
            _vm.options = $event
          },
        },
        scopedSlots: _vm._u(
          [
            {
              key: "top",
              fn: function () {
                return [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "" } },
                    [
                      _c("v-text-field", {
                        staticClass: "mr-3",
                        attrs: {
                          "prepend-inner-icon": "search",
                          clearable: "",
                          "hide-details": "",
                          placeholder: "Type and hit enter to search",
                          solo: "",
                          dense: "",
                          "append-icon": "filter_list",
                          autofocus: "",
                        },
                        on: {
                          focus: function ($event) {
                            return $event.target.select()
                          },
                          keyup: function ($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.searchData.apply(null, arguments)
                          },
                          "click:clear": _vm.searchDataClear,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function () {
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "" },
                                    on: {
                                      click: function ($event) {
                                        _vm.filter_drawer = true
                                      },
                                    },
                                  },
                                  [_c("v-icon", [_vm._v("filter_list")])],
                                  1
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                        model: {
                          value: _vm.search,
                          callback: function ($$v) {
                            _vm.search = $$v
                          },
                          expression: "search",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "text-capitalize",
                          attrs: { color: "accent" },
                          on: {
                            click: function ($event) {
                              _vm.$inertia.visit(
                                _vm.route("admin:issues.create")
                              )
                            },
                          },
                        },
                        [
                          _c("v-icon", [_vm._v("add")]),
                          _vm._v(" "),
                          _vm.$vuetify.breakpoint.smAndUp
                            ? [
                                _vm._v(
                                  "\n                        Create\n                    "
                                ),
                              ]
                            : _vm._e(),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              },
              proxy: true,
            },
            _vm._l(
              _vm.headers.filter(function (header) {
                return header.hasOwnProperty("formatter")
              }),
              function (header) {
                return {
                  key: "item." + header.value,
                  fn: function (ref) {
                    var header = ref.header
                    var value = ref.value
                    return [
                      _vm._v(
                        "\n            " +
                          _vm._s(header.formatter(value)) +
                          "\n        "
                      ),
                    ]
                  },
                }
              }
            ),
            {
              key: "footer",
              fn: function () {
                return [
                  _c("k-data-table-footer", {
                    attrs: {
                      "items-per-page": _vm.itemsPerPage,
                      "page-meta": _vm.issues.meta,
                    },
                    on: { onItemsPerPageChange: _vm.changeItemsPerPage },
                  }),
                ]
              },
              proxy: true,
            },
            {
              key: "item.department",
              fn: function (ref) {
                var item = ref.item
                return [
                  _vm._v(
                    "\n            " +
                      _vm._s(item.department.name) +
                      "\n\n        "
                  ),
                ]
              },
            },
            {
              key: "item.status",
              fn: function (ref) {
                var item = ref.item
                return [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm._f("snakeToSentence")(item.status)) +
                      "\n\n        "
                  ),
                ]
              },
            },
            {
              key: "item.title",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c(
                    "span",
                    {
                      staticClass: "k-cursor--pointer",
                      on: {
                        click: function ($event) {
                          _vm.$inertia.visit(
                            _vm.route("admin:issues.edit", item.id)
                          )
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(item.title) +
                          "\n            "
                      ),
                    ]
                  ),
                ]
              },
            },
            {
              key: "item.priority",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c(
                    "v-icon",
                    {
                      staticClass: "mr-2",
                      attrs: { color: _vm.priority_icons[item.priority].color },
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.priority_icons[item.priority].icon) +
                          "\n            "
                      ),
                    ]
                  ),
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm._f("snakeToTitle")(item.priority)) +
                      "\n\n        "
                  ),
                ]
              },
            },
            {
              key: "item.actions",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", color: "primary" },
                      on: {
                        click: function ($event) {
                          _vm.$inertia.visit(
                            _vm.route("admin:issues.edit", item.id)
                          )
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("edit")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", color: "error" },
                      on: {
                        click: function ($event) {
                          return _vm.openDuplicateToDepartmentDialog(item)
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("sync")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("k-confirmed-action", {
                    attrs: { executor: _vm.deleteItem.bind(null, item.id) },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function (scope) {
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", color: "error" },
                                  nativeOn: {
                                    click: function ($event) {
                                      return scope.confirm.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [_c("v-icon", [_vm._v("delete")])],
                                1
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  }),
                ]
              },
            },
          ],
          null,
          true
        ),
      }),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          attrs: { right: "", app: "", temporary: "" },
          model: {
            value: _vm.filter_drawer,
            callback: function ($$v) {
              _vm.filter_drawer = $$v
            },
            expression: "filter_drawer",
          },
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item",
                [_c("v-list-item-title", [_vm._v("Filter Data")])],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v("Status"),
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              id: "status",
                              dense: "",
                              outlined: "",
                              items: _vm.statuses,
                              "item-value": "id",
                              placeholder: "Select Status",
                              clearable: "",
                              "hide-details": "",
                              "item-text": "name",
                            },
                            on: { change: _vm.onChangeStatus },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function (data) {
                                  return [
                                    _vm._v(
                                      "\n\n                                " +
                                        _vm._s(
                                          _vm._f("snakeToSentence")(data.item)
                                        ) +
                                        "\n                            "
                                    ),
                                  ]
                                },
                              },
                              {
                                key: "item",
                                fn: function (data) {
                                  return [
                                    typeof data.item !== "object"
                                      ? [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm._f("snakeToSentence")(
                                                  data.item
                                                )
                                              ) +
                                              "\n                                "
                                          ),
                                        ]
                                      : _vm._e(),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.filters.status,
                              callback: function ($$v) {
                                _vm.$set(_vm.filters, "status", $$v)
                              },
                              expression: "filters.status",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c("label", { attrs: { for: "priority" } }, [
                            _vm._v("Priority"),
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              id: "priority",
                              dense: "",
                              outlined: "",
                              items: _vm.priorities,
                              "item-value": "id",
                              placeholder: "Select Priority",
                              clearable: "",
                              "hide-details": "",
                              "item-text": "name",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function (data) {
                                  return [
                                    _vm._v(
                                      "\n\n                                " +
                                        _vm._s(
                                          _vm._f("snakeToSentence")(data.item)
                                        ) +
                                        "\n                            "
                                    ),
                                  ]
                                },
                              },
                              {
                                key: "item",
                                fn: function (data) {
                                  return [
                                    typeof data.item !== "object"
                                      ? [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm._f("snakeToSentence")(
                                                  data.item
                                                )
                                              ) +
                                              "\n                                "
                                          ),
                                        ]
                                      : _vm._e(),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.filters.priority,
                              callback: function ($$v) {
                                _vm.$set(_vm.filters, "priority", $$v)
                              },
                              expression: "filters.priority",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v("Department"),
                          ]),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              id: "department",
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              items: _vm.departments.data,
                              clearable: "",
                              "item-text": "name",
                              "item-value": "id",
                            },
                            model: {
                              value: _vm.filters.department,
                              callback: function ($$v) {
                                _vm.$set(_vm.filters, "department", $$v)
                              },
                              expression: "filters.department",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c("label", { attrs: { for: "reportedby" } }, [
                            _vm._v("Reported By"),
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              id: "reportedby",
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              clearable: "",
                              items: _vm.reportedBy,
                            },
                            model: {
                              value: _vm.filters.reportedBy,
                              callback: function ($$v) {
                                _vm.$set(_vm.filters, "reportedBy", $$v)
                              },
                              expression: "filters.reportedBy",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              !_vm.filters.status
                ? _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            [
                              _c("v-switch", {
                                attrs: {
                                  dense: "",
                                  "hide-details": "",
                                  label: "Show Completed",
                                },
                                model: {
                                  value: _vm.filters.show_completed,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.filters, "show_completed", $$v)
                                  },
                                  expression: "filters.show_completed",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c("v-switch", {
                            attrs: {
                              dense: "",
                              "hide-details": "",
                              label: "Only Overdue",
                            },
                            model: {
                              value: _vm.filters.only_overdue,
                              callback: function ($$v) {
                                _vm.$set(_vm.filters, "only_overdue", $$v)
                              },
                              expression: "filters.only_overdue",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "text-capitalize",
                          attrs: { color: "primary" },
                          on: { click: _vm.reloadPage },
                        },
                        [
                          _vm._v(
                            "\n                        Filter\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "text-capitalize",
                          attrs: { color: "secondary", outlined: "" },
                          on: { click: _vm.clearFilters },
                        },
                        [
                          _vm._v(
                            "\n                        Clear\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            persistent: "",
            width: _vm.$vuetify.breakpoint.smAndDown ? "100%" : "50%",
          },
          model: {
            value: _vm.duplicateToDepartmentDialog,
            callback: function ($$v) {
              _vm.duplicateToDepartmentDialog = $$v
            },
            expression: "duplicateToDepartmentDialog",
          },
        },
        [
          _c(
            "v-card",
            { attrs: { disabled: _vm.duplicateToDepartmentForm.processing } },
            [
              _c(
                "v-card-title",
                [
                  _c("span", { staticClass: "headline" }, [
                    _vm._v("Duplicate To Department"),
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", color: "error" },
                      nativeOn: {
                        click: function ($event) {
                          return _vm.closeDuplicateToDepartmentDialog.apply(
                            null,
                            arguments
                          )
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("close")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("label", { attrs: { for: "department" } }, [
                    _vm._v("Department"),
                  ]),
                  _vm._v(" "),
                  _c("v-autocomplete", {
                    attrs: {
                      id: "department",
                      outlined: "",
                      multiple: "",
                      dense: "",
                      "error-messages":
                        _vm.duplicateToDepartmentForm.errors.department,
                      items: _vm.duplicatableDepartments,
                      "item-text": "name",
                      "item-value": "id",
                    },
                    model: {
                      value: _vm.duplicateToDepartmentForm.department,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.duplicateToDepartmentForm,
                          "department",
                          $$v
                        )
                      },
                      expression: "duplicateToDepartmentForm.department",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("k-confirmed-action", {
                    attrs: { executor: _vm.duplicateToDepartment },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (scope) {
                          return [
                            _c(
                              "v-btn",
                              {
                                staticClass: "text-capitalize",
                                attrs: {
                                  color: "primary",
                                  loading:
                                    _vm.duplicateToDepartmentForm.processing,
                                },
                                nativeOn: {
                                  click: function ($event) {
                                    return scope.confirm.apply(null, arguments)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                        Duplicate\n                    "
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("k-snack-bar", { ref: "snackbar" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);