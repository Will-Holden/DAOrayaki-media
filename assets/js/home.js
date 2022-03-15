(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/home"],{

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var $featuredSliderContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-featured-slider');
  var $featuredSlides = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-featured-slide');

  if ($featuredSliderContainer.length > 0) {
    swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_1__["EffectFade"], swiper__WEBPACK_IMPORTED_MODULE_1__["Autoplay"]]);
    var autoplay = {
      delay: 5000
    };
    var pagination = false;
    var grabCursor = false;

    if (typeof disableFeaturedSliderAutoplay !== 'undefined' && disableFeaturedSliderAutoplay) {
      autoplay = false;
    }

    if ($featuredSlides.length > 1) {
      pagination = {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      };
      grabCursor = true;
    }

    var featuredSwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-featured-slider', {
      autoHeight: true,
      autoplay: autoplay,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      grabCursor: grabCursor,
      longSwipesRatio: 0.1,
      pagination: pagination,
      a11y: true,
      on: {
        init: function init() {
          var _this = this;

          $featuredSliderContainer.addClass('loaded');
          setTimeout(function () {
            _this.slideTo(0, 0);
          }, 100);
        }
      }
    });

    if (typeof disableFeaturedSliderAutoplay === 'undefined' || !disableFeaturedSliderAutoplay) {
      $featuredSliderContainer.on('mouseenter', function () {
        featuredSwiper.autoplay.stop();
      });
      $featuredSliderContainer.on('mouseleave', function () {
        featuredSwiper.autoplay.start();
      });
    }
  }
});

/***/ }),

/***/ 2:
/*!**************************!*\
  !*** multi ./js/home.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/js/home.js */"./js/home.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);