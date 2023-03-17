"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_TwoFactorAuthenticationForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
  name: 'KConfirmPassword',
  props: {
    title: {
      "default": 'Confirm Password'
    },
    content: {
      "default": 'For your security, please confirm your password to continue.'
    },
    button: {
      "default": 'Confirm'
    }
  },
  components: {},
  data: function data() {
    return {
      confirmingPassword: false,
      form: {
        password: '',
        error: '',
        processing: false
      },
      showPassword: false
    };
  },
  methods: {
    startConfirmingPassword: function startConfirmingPassword() {
      var _this = this;

      axios.get(route('password.confirmation')).then(function (response) {
        if (response.data.confirmed) {
          _this.$emit('confirmed');
        } else {
          _this.confirmingPassword = true;
          setTimeout(function () {
            return _this.$refs.password.focus();
          }, 250);
        }
      });
    },
    confirmPassword: function confirmPassword() {
      var _this2 = this;

      this.form.processing = true;
      axios.post(route('password.confirm'), {
        password: this.form.password
      }).then(function () {
        _this2.form.processing = false;

        _this2.closeModal();

        _this2.$nextTick(function () {
          return _this2.$emit('confirmed');
        });
      })["catch"](function (error) {
        _this2.form.processing = false;
        _this2.form.error = error.response.data.errors.password[0];

        _this2.$refs.password.focus();
      });
    },
    closeModal: function closeModal() {
      this.confirmingPassword = false;
      this.form.password = '';
      this.form.error = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KCopyToClipboard",
  props: {
    copyData: {
      type: String,
      "default": '',
      required: false
    }
  },
  methods: {
    clipboardSuccessHandler: function clipboardSuccessHandler() {
      var _this = this;

      this.copy_to_clipboard_text = 'Copied'; //    set timeout to reset text

      setTimeout(function () {
        _this.copy_to_clipboard_text = 'Copy to clipboard';
      }, 2000);
    },
    clipboardErrorHandler: function clipboardErrorHandler() {
      var _this2 = this;

      this.copy_to_clipboard_text = 'Error Occurred'; //    set timeout to reset text

      setTimeout(function () {
        _this2.copy_to_clipboard_text = 'Copy to clipboard';
      }, 2000);
    }
  },
  data: function data() {
    return {
      copy_to_clipboard_text: 'Copy to clipboard'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProfileFormLayout"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileFormLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileFormLayout */ "./resources/js/Pages/Profile/ProfileFormLayout.vue");
/* harmony import */ var _Karajkom_KCopyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Karajkom/KCopyToClipboard */ "./resources/js/Karajkom/KCopyToClipboard.vue");
/* harmony import */ var _Karajkom_KConfirmPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Karajkom/KConfirmPassword */ "./resources/js/Karajkom/KConfirmPassword.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "TwoFactorAuthenticationForm",
  components: {
    KConfirmPassword: _Karajkom_KConfirmPassword__WEBPACK_IMPORTED_MODULE_2__["default"],
    KCopyToClipboard: _Karajkom_KCopyToClipboard__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileFormLayout: _ProfileFormLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    twoFactorEnabled: function twoFactorEnabled() {
      return !this.enabling && this.$page.props.user.two_factor_enabled;
    },
    recoveryCodesForCopy: function recoveryCodesForCopy() {
      //    get recovery codes
      return this.recoveryCodes.join("\n");
    }
  },
  data: function data() {
    return {
      enabling: false,
      disabling: false,
      qrCode: null,
      recoveryCodes: [],
      isRegenerating: false,
      isLoadingRecoveryCodes: false,
      copy_to_clipboard_text: 'Copy to clipboard'
    };
  },
  methods: {
    regenerateRecoveryCodes: function regenerateRecoveryCodes() {
      var _this = this;

      this.isRegenerating = true;
      axios.post('/user/two-factor-recovery-codes').then(function (response) {
        _this.showRecoveryCodes();
      })["finally"](function () {
        _this.isRegenerating = false;
      });
    },
    showQrCode: function showQrCode() {
      var _this2 = this;

      return axios.get('/user/two-factor-qr-code').then(function (response) {
        _this2.qrCode = response.data.svg;
      });
    },
    showRecoveryCodes: function showRecoveryCodes() {
      var _this3 = this;

      this.isLoadingRecoveryCodes = true;
      return axios.get('/user/two-factor-recovery-codes').then(function (response) {
        _this3.recoveryCodes = response.data;
      })["finally"](function () {
        _this3.isLoadingRecoveryCodes = false;
      });
    },
    disableTwoFactorAuthentication: function disableTwoFactorAuthentication() {
      var _this4 = this;

      this.disabling = true;
      this.$inertia["delete"]('/user/two-factor-authentication', {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return _this4.disabling = false;
        }
      });
    },
    enableTwoFactorAuthentication: function enableTwoFactorAuthentication() {
      var _this5 = this;

      this.enabling = true;
      this.$inertia.post('/user/two-factor-authentication', {}, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return Promise.all([_this5.showQrCode(), _this5.showRecoveryCodes()]);
        },
        onFinish: function onFinish() {
          return _this5.enabling = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmPassword.vue":
/*!****************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmPassword.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KConfirmPassword_vue_vue_type_template_id_20e8c066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KConfirmPassword.vue?vue&type=template&id=20e8c066& */ "./resources/js/Karajkom/KConfirmPassword.vue?vue&type=template&id=20e8c066&");
/* harmony import */ var _KConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KConfirmPassword.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KConfirmPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KConfirmPassword_vue_vue_type_template_id_20e8c066___WEBPACK_IMPORTED_MODULE_0__.render,
  _KConfirmPassword_vue_vue_type_template_id_20e8c066___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KConfirmPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KCopyToClipboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/Karajkom/KCopyToClipboard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KCopyToClipboard_vue_vue_type_template_id_63b3f910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true& */ "./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true&");
/* harmony import */ var _KCopyToClipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KCopyToClipboard.vue?vue&type=script&lang=js& */ "./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KCopyToClipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KCopyToClipboard_vue_vue_type_template_id_63b3f910_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _KCopyToClipboard_vue_vue_type_template_id_63b3f910_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "63b3f910",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Karajkom/KCopyToClipboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/ProfileFormLayout.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Profile/ProfileFormLayout.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileFormLayout_vue_vue_type_template_id_dabb0290_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true& */ "./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true&");
/* harmony import */ var _ProfileFormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileFormLayout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileFormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileFormLayout_vue_vue_type_template_id_dabb0290_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileFormLayout_vue_vue_type_template_id_dabb0290_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dabb0290",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/ProfileFormLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true& */ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true&");
/* harmony import */ var _TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6b3f2958",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KCopyToClipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KCopyToClipboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KCopyToClipboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileFormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileFormLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileFormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TwoFactorAuthenticationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Karajkom/KConfirmPassword.vue?vue&type=template&id=20e8c066&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Karajkom/KConfirmPassword.vue?vue&type=template&id=20e8c066& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmPassword_vue_vue_type_template_id_20e8c066___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmPassword_vue_vue_type_template_id_20e8c066___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KConfirmPassword_vue_vue_type_template_id_20e8c066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KConfirmPassword.vue?vue&type=template&id=20e8c066& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmPassword.vue?vue&type=template&id=20e8c066&");


/***/ }),

/***/ "./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KCopyToClipboard_vue_vue_type_template_id_63b3f910_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KCopyToClipboard_vue_vue_type_template_id_63b3f910_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KCopyToClipboard_vue_vue_type_template_id_63b3f910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileFormLayout_vue_vue_type_template_id_dabb0290_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileFormLayout_vue_vue_type_template_id_dabb0290_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileFormLayout_vue_vue_type_template_id_dabb0290_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoFactorAuthenticationForm_vue_vue_type_template_id_6b3f2958_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmPassword.vue?vue&type=template&id=20e8c066&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KConfirmPassword.vue?vue&type=template&id=20e8c066& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: _vm.$vuetify.breakpoint.mdAndUp ? "50%" : "100%" },
      scopedSlots: _vm._u(
        [
          {
            key: "activator",
            fn: function (ref) {
              var on = ref.on
              var attrs = ref.attrs
              return [
                _c(
                  "span",
                  { on: { click: _vm.startConfirmingPassword } },
                  [_vm._t("default")],
                  2
                ),
              ]
            },
          },
        ],
        null,
        true
      ),
      model: {
        value: _vm.confirmingPassword,
        callback: function ($$v) {
          _vm.confirmingPassword = $$v
        },
        expression: "confirmingPassword",
      },
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _vm._v("\n            " + _vm._s(_vm.title) + "\n        "),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _vm._v("\n            " + _vm._s(_vm.content) + "\n            "),
              _c("v-text-field", {
                ref: "password",
                staticClass: "mt-1 block w-3/4",
                attrs: {
                  placeholder: "Password",
                  autofocus: "",
                  outlined: "",
                  type: _vm.showPassword ? "text" : "password",
                  "error-messages": _vm.form.error,
                  autocomplete: "off",
                  "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
                },
                on: {
                  "click:append": function ($event) {
                    _vm.showPassword = !_vm.showPassword
                  },
                },
                nativeOn: {
                  keyup: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.confirmPassword.apply(null, arguments)
                  },
                },
                model: {
                  value: _vm.form.password,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password",
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
              _c(
                "v-btn",
                {
                  staticClass: "ml-2",
                  attrs: { color: "accent", disabled: _vm.form.processing },
                  nativeOn: {
                    click: function ($event) {
                      return _vm.confirmPassword.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                " + _vm._s(_vm.button) + "\n            "
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Karajkom/KCopyToClipboard.vue?vue&type=template&id=63b3f910&scoped=true& ***!
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
    {
      directives: [
        {
          name: "clipboard",
          rawName: "v-clipboard",
          value: function () {
            return _vm.copyData
          },
          expression: "() => copyData",
        },
        {
          name: "clipboard",
          rawName: "v-clipboard:success",
          value: _vm.clipboardSuccessHandler,
          expression: "clipboardSuccessHandler",
          arg: "success",
        },
        {
          name: "clipboard",
          rawName: "v-clipboard:error",
          value: _vm.clipboardErrorHandler,
          expression: "clipboardErrorHandler",
          arg: "error",
        },
      ],
    },
    [
      _c("v-btn", { attrs: { color: "primary", ripple: false, plain: "" } }, [
        _vm._v("\n\n        " + _vm._s(_vm.copy_to_clipboard_text) + "\n    "),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ProfileFormLayout.vue?vue&type=template&id=dabb0290&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pa-6", attrs: { "no-gutters": "" } },
    [
      _c(
        "v-col",
        { attrs: { cols: "12", md: "4" } },
        [_c("h3", [_vm._t("title")], 2), _vm._v(" "), _vm._t("description")],
        2
      ),
      _vm._v(" "),
      _c(
        "v-col",
        [
          _c(
            "v-card",
            { attrs: { flat: "" } },
            [
              _c("v-card-text", [_vm._t("content")], 2),
              _vm._v(" "),
              _c("v-card-actions", [_vm._t("actions")], 2),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue?vue&type=template&id=6b3f2958&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("profile-form-layout", {
    scopedSlots: _vm._u([
      {
        key: "title",
        fn: function () {
          return [_vm._v(" Two Factor Authentication")]
        },
        proxy: true,
      },
      {
        key: "description",
        fn: function () {
          return [
            _vm._v(
              "Add additional security to your account using two factor authentication."
            ),
          ]
        },
        proxy: true,
      },
      {
        key: "content",
        fn: function () {
          return [
            _vm.twoFactorEnabled
              ? _c("h3", { staticClass: "text-lg font-medium text-gray-900" }, [
                  _vm._v(
                    "\n            You have enabled two factor authentication.\n        "
                  ),
                ])
              : _c("h3", [
                  _vm._v(
                    "\n            You have not enabled two factor authentication.\n        "
                  ),
                ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-3" }, [
              _c("p", [
                _vm._v(
                  "\n                When two factor authentication is enabled, you will be prompted for a secure, random token during\n                authentication. You may retrieve this token from your phone's Google Authenticator application.\n            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm.twoFactorEnabled
              ? _c("div", [
                  _vm.qrCode
                    ? _c("div", [
                        _c("div", { staticClass: "mt-4 " }, [
                          _c("p", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                        Two factor authentication is now enabled. Scan the following QR code using your phone's\n                        authenticator application.\n                    "
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "mt-4",
                          domProps: { innerHTML: _vm._s(_vm.qrCode) },
                        }),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.recoveryCodes.length > 0
                    ? _c(
                        "div",
                        [
                          _c("div", { staticClass: "mt-4 " }, [
                            _c("p", { staticClass: "font-weight-bold" }, [
                              _vm._v(
                                "\n                        Store these recovery codes in a secure password manager. They can be used to recover access\n                        to your account if your two factor authentication device is lost.\n                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            _vm._l(_vm.recoveryCodes, function (code) {
                              return _c("div", { key: code }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(code) +
                                    "\n                    "
                                ),
                              ])
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("k-copy-to-clipboard", {
                            attrs: { "copy-data": _vm.recoveryCodesForCopy },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "mt-5" }, [
              !_vm.twoFactorEnabled
                ? _c(
                    "div",
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "k-confirm-password",
                            {
                              on: {
                                confirmed: _vm.enableTwoFactorAuthentication,
                              },
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    type: "button",
                                    loading: _vm.enabling,
                                    disabled: _vm.enabling,
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                           Enable\n                       "
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
                  )
                : _c(
                    "div",
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "k-confirm-password",
                            { on: { confirmed: _vm.regenerateRecoveryCodes } },
                            [
                              _vm.recoveryCodes.length > 0
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "mr-3",
                                      attrs: {
                                        color: "secondary",
                                        disabled: _vm.isRegenerating,
                                        loading: _vm.isRegenerating,
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                           Regenerate Recovery Codes\n                       "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "k-confirm-password",
                            { on: { confirmed: _vm.showRecoveryCodes } },
                            [
                              _vm.recoveryCodes.length === 0
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "mr-3",
                                      attrs: {
                                        loading: _vm.isLoadingRecoveryCodes,
                                        disabled: _vm.isLoadingRecoveryCodes,
                                        color: "secondary",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                           Show Recovery Codes\n                       "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "k-confirm-password",
                            {
                              on: {
                                confirmed: _vm.disableTwoFactorAuthentication,
                              },
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "error",
                                    loading: _vm.disabling,
                                    disabled: _vm.disabling,
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                           Disable\n                       "
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
            ]),
          ]
        },
        proxy: true,
      },
    ]),
  })
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