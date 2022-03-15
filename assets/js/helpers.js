(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/helpers"],{

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, toggleScrollVertical, formatDate, getParameterByName, makeImagesZoomable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDarkMode", function() { return isDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleScrollVertical", function() { return toggleScrollVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeImagesZoomable", function() { return makeImagesZoomable; });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
};
var isDarkMode = function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
};
var toggleScrollVertical = function toggleScrollVertical() {
  var $body = document.querySelector('body');
  $body.classList.toggle('no-scroll-y');
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('opened', function () {
    setTimeout(function () {
      var $mediumZoomImages = $('.medium-zoom-image--opened');

      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
};

/***/ }),

/***/ "./sass/404.scss":
/*!***********************!*\
  !*** ./sass/404.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/account.scss":
/*!***************************!*\
  !*** ./sass/account.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/app.scss":
/*!***********************!*\
  !*** ./sass/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/auth.scss":
/*!************************!*\
  !*** ./sass/auth.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/author.scss":
/*!**************************!*\
  !*** ./sass/author.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/home.scss":
/*!************************!*\
  !*** ./sass/home.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/listing.scss":
/*!***************************!*\
  !*** ./sass/listing.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/membership.scss":
/*!******************************!*\
  !*** ./sass/membership.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/newsletter.scss":
/*!******************************!*\
  !*** ./sass/newsletter.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/post.scss":
/*!************************!*\
  !*** ./sass/post.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/tags.scss":
/*!************************!*\
  !*** ./sass/tags.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./js/helpers.js ./sass/app.scss ./sass/home.scss ./sass/listing.scss ./sass/post.scss ./sass/author.scss ./sass/newsletter.scss ./sass/tags.scss ./sass/404.scss ./sass/auth.scss ./sass/membership.scss ./sass/account.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/js/helpers.js */"./js/helpers.js");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/app.scss */"./sass/app.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/home.scss */"./sass/home.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/listing.scss */"./sass/listing.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/post.scss */"./sass/post.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/author.scss */"./sass/author.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/newsletter.scss */"./sass/newsletter.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/tags.scss */"./sass/tags.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/404.scss */"./sass/404.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/auth.scss */"./sass/auth.scss");
__webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/membership.scss */"./sass/membership.scss");
module.exports = __webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/sass/account.scss */"./sass/account.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);