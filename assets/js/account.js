(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/account"],{

/***/ "./js/account.js":
/*!***********************!*\
  !*** ./js/account.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var $planNickname = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-plan-nickname');
  var $planStatus = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-plan-status');
  var $planPrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-plan-price');
  var $planInterval = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-plan-interval');

  if ($planNickname.length > 0) {
    $planNickname.each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(labels[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-nickname')]);
    });
  }

  if ($planStatus.length > 0) {
    $planStatus.each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-visibility', labels[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-status')]);
    });
  }

  if ($planPrice.length > 0) {
    $planPrice.each(function () {
      var planAmount = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-plan-price')) / 100;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(planAmount);
    });
  }

  if ($planInterval.length > 0) {
    $planInterval.each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(labels[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-interval')]);
    });
  }
});

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./js/account.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/js/account.js */"./js/account.js");


/***/ })

},[[4,"/js/manifest","/js/vendor"]]]);