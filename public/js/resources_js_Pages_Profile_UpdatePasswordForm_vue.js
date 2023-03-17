"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_UpdatePasswordForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ActionMessage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ActionMessage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ActionMessage",
  props: ['on']
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileFormLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileFormLayout */ "./resources/js/Pages/Profile/ProfileFormLayout.vue");
/* harmony import */ var _ActionMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionMessage */ "./resources/js/Pages/Profile/ActionMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UpdatePasswordForm",
  components: {
    ActionMessage: _ActionMessage__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileFormLayout: _ProfileFormLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        current_password: null,
        password: null,
        password_confirmation: null
      }),
      showCurrentPassword: false,
      showNewPassword: false
    };
  },
  watch: {},
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return _this.form.reset();
        },
        onError: function onError() {
          if (_this.form.errors.password) {
            _this.form.reset('password', 'password_confirmation');

            _this.$refs.password.focus();
          }

          if (_this.form.errors.current_password) {
            _this.form.reset('current_password');

            _this.$refs.current_password.focus();
          }
        }
      });
    }
  },
  computed: {
    passwordStrengthColor: function passwordStrengthColor() {
      return ['error', 'warning', 'success'][Math.floor(this.passwordStrength / 50)];
    },
    passwordStrengthAttributed: function passwordStrengthAttributed() {
      var attributes = {
        contains_uppercase: false,
        contains_numbers: false,
        contains_special_characters: false,
        contains_lowercase: false,
        password_length_at_least_8_characters_long: false
      }; // check this.form.password and set attributes values

      if (this.form.password) {
        attributes.contains_uppercase = /[A-Z]/.test(this.form.password);
        attributes.contains_numbers = /[0-9]/.test(this.form.password);
        attributes.contains_special_characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.form.password);
        attributes.contains_lowercase = /[a-z]/.test(this.form.password);
        attributes.password_length_at_least_8_characters_long = this.form.password.length >= 8;
      } //    convert attributes to array


      return Object.keys(attributes).map(function (key) {
        return {
          key: key,
          value: attributes[key]
        };
      });
    },
    passwordStrength: function passwordStrength() {
      var password = this.form.password;
      var score = 0;

      if (!password) {
        return score;
      }

      if (password.length >= 8) {
        score++;
      }

      if (password.match(/[a-z]/)) {
        score++;
      }

      if (password.match(/[A-Z]/)) {
        score++;
      }

      if (password.match(/[0-9]/)) {
        score++;
      }

      if (password.match(/[^a-zA-Z\d]/)) {
        score++;
      } // get password strength percentage


      return Math.min(100, Math.round(score * 20));
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Profile/ActionMessage.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Profile/ActionMessage.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionMessage_vue_vue_type_template_id_57340792_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionMessage.vue?vue&type=template&id=57340792&scoped=true& */ "./resources/js/Pages/Profile/ActionMessage.vue?vue&type=template&id=57340792&scoped=true&");
/* harmony import */ var _ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionMessage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/ActionMessage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionMessage_vue_vue_type_template_id_57340792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActionMessage_vue_vue_type_template_id_57340792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "57340792",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/ActionMessage.vue"
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

/***/ "./resources/js/Pages/Profile/UpdatePasswordForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdatePasswordForm.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdatePasswordForm_vue_vue_type_template_id_56f235d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true& */ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true&");
/* harmony import */ var _UpdatePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatePasswordForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdatePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdatePasswordForm_vue_vue_type_template_id_56f235d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdatePasswordForm_vue_vue_type_template_id_56f235d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56f235d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/UpdatePasswordForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/ActionMessage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/ActionMessage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ActionMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdatePasswordForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/ActionMessage.vue?vue&type=template&id=57340792&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/ActionMessage.vue?vue&type=template&id=57340792&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_template_id_57340792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_template_id_57340792_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_template_id_57340792_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionMessage.vue?vue&type=template&id=57340792&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ActionMessage.vue?vue&type=template&id=57340792&scoped=true&");


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

/***/ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordForm_vue_vue_type_template_id_56f235d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordForm_vue_vue_type_template_id_56f235d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePasswordForm_vue_vue_type_template_id_56f235d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ActionMessage.vue?vue&type=template&id=57340792&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/ActionMessage.vue?vue&type=template&id=57340792&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("v-scroll-y-transition", [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.on,
                expression: "on",
              },
            ],
            staticClass: "ed--text-color-secondary",
          },
          [_vm._t("default")],
          2
        ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
          return [_vm._v("\n        Update Password\n    ")]
        },
        proxy: true,
      },
      {
        key: "description",
        fn: function () {
          return [
            _vm._v(
              "\n        Ensure your account is using a long, random password to stay secure.\n    "
            ),
          ]
        },
        proxy: true,
      },
      {
        key: "content",
        fn: function () {
          return [
            _c("label", { attrs: { for: "current_password" } }, [
              _vm._v("Current Password"),
            ]),
            _vm._v(" "),
            _c("v-text-field", {
              ref: "current_password",
              attrs: {
                dense: "",
                outlined: "",
                autocomplete: "off",
                id: "current_password",
                "error-messages": _vm.form.errors["current_password"],
                "append-icon": _vm.showCurrentPassword
                  ? "mdi-eye"
                  : "mdi-eye-off",
                "append-icon-cb": _vm.showCurrentPassword,
                type: _vm.showCurrentPassword ? "text" : "password",
              },
              on: {
                "click:append": function ($event) {
                  _vm.showCurrentPassword = !_vm.showCurrentPassword
                },
              },
              model: {
                value: _vm.form.current_password,
                callback: function ($$v) {
                  _vm.$set(_vm.form, "current_password", $$v)
                },
                expression: "form.current_password",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "new_password" } }, [
              _vm._v("New Password"),
            ]),
            _vm._v(" "),
            _c("v-text-field", {
              ref: "password",
              attrs: {
                dense: "",
                outlined: "",
                autocomplete: "off",
                id: "new_password",
                "error-messages": _vm.form.errors["password"],
                "append-icon": _vm.showNewPassword ? "mdi-eye" : "mdi-eye-off",
                "append-icon-cb": _vm.showNewPassword,
                loading: "",
                type: _vm.showNewPassword ? "text" : "password",
              },
              on: {
                "click:append": function ($event) {
                  _vm.showNewPassword = !_vm.showNewPassword
                },
              },
              scopedSlots: _vm._u([
                {
                  key: "progress",
                  fn: function () {
                    return [
                      _c("v-progress-linear", {
                        attrs: {
                          value: _vm.passwordStrength,
                          color: _vm.passwordStrengthColor,
                          absolute: "",
                          height: "7",
                        },
                      }),
                    ]
                  },
                  proxy: true,
                },
              ]),
              model: {
                value: _vm.form.password,
                callback: function ($$v) {
                  _vm.$set(_vm.form, "password", $$v)
                },
                expression: "form.password",
              },
            }),
            _vm._v(" "),
            _vm.form.password && _vm.form.password.length > 0
              ? [
                  _c("v-expand-transition", [
                    _c(
                      "ul",
                      _vm._l(
                        _vm.passwordStrengthAttributed,
                        function (password_attribute, index) {
                          return _c(
                            "li",
                            {
                              key: index,
                              class: [
                                password_attribute.value
                                  ? "ed--text-color-success"
                                  : "ed--text-color-error",
                              ],
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm._f("snakeToSentence")(
                                      password_attribute.key
                                    )
                                  ) +
                                  "\n                        "
                              ),
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    small: "",
                                    color: password_attribute.value
                                      ? "success"
                                      : "error",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        password_attribute.value
                                          ? "check_circle"
                                          : "cancel"
                                      ) +
                                      "\n                        "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        }
                      ),
                      0
                    ),
                  ]),
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("label", { attrs: { for: "new_password_confirmation" } }, [
              _vm._v("Confirm New Password"),
            ]),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                dense: "",
                outlined: "",
                autocomplete: "off",
                id: "new_password_confirmation",
                "error-messages": _vm.form.errors["password_confirmation"],
                "append-icon": _vm.showNewPassword ? "mdi-eye" : "mdi-eye-off",
                type: _vm.showNewPassword ? "text" : "password",
              },
              on: {
                "click:append": function ($event) {
                  _vm.showNewPassword = !_vm.showNewPassword
                },
              },
              model: {
                value: _vm.form.password_confirmation,
                callback: function ($$v) {
                  _vm.$set(_vm.form, "password_confirmation", $$v)
                },
                expression: "form.password_confirmation",
              },
            }),
            _vm._v(" "),
            _c(
              "action-message",
              { attrs: { on: _vm.form.recentlySuccessful } },
              [_vm._v("\n            Done.\n        ")]
            ),
          ]
        },
        proxy: true,
      },
      {
        key: "actions",
        fn: function () {
          return [
            _c("v-spacer"),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                staticClass: "text-capitalize",
                attrs: {
                  color: "accent",
                  loading: _vm.form.processing,
                  disabled: !_vm.form.isDirty || _vm.form.processing,
                },
                on: { click: _vm.submit },
              },
              [_vm._v("save\n        ")]
            ),
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