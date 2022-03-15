(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/post"],{

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

/***/ "./js/post.js":
/*!********************!*\
  !*** ./js/post.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stickybits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stickybits */ "./node_modules/stickybits/dist/stickybits.es.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");







var $article = null;
var $header = null;
var $progressBar = null;
var $scrollToTop = null;
var lastScrollingY = window.pageYOffset;
var lastWindowHeight = 0;
var lastArticleHeight = 0;
var isTicking = false;

var onScrolling = function onScrolling() {
  lastScrollingY = window.pageYOffset;
  requestTicking();

  if ($scrollToTop) {
    if (lastScrollingY > $scrollToTop.height()) {
      $scrollToTop.addClass('visible');
    } else {
      $scrollToTop.removeClass('visible');
    }
  }
};

var onResizing = function onResizing() {
  setHeights();
  setTimeout(function () {
    requestTicking();
  }, 200);
};

var requestTicking = function requestTicking() {
  if (!isTicking) {
    requestAnimationFrame(updatingProgress);
  }

  isTicking = true;
};

var updatingProgress = function updatingProgress() {
  var progressMax = lastArticleHeight - lastWindowHeight;
  var percent = Math.ceil(lastScrollingY / progressMax * 100);

  if (percent <= 100) {
    setProgress(percent);
  } else {
    setProgress(100);
  }

  isTicking = false;
};

var setHeights = function setHeights() {
  lastWindowHeight = window.innerHeight;
  lastArticleHeight = $article.height() + $header.height();
};

var setProgress = function setProgress(percent) {
  if (percent <= 100) {
    if ($progressBar) {
      $progressBar.css('width', "".concat(percent, "%"));
    }
  }
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var $copyLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-copy-link');
  var $inputLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-link');
  var $relatedSliderContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-related-slider');
  fitvids__WEBPACK_IMPORTED_MODULE_2___default()('.js-post-content');

  var adjustShare = function adjustShare() {
    var $stickyShare = null;

    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["isMobile"])()) {
      $stickyShare = Object(stickybits__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-sticky', {
        stickyBitStickyOffset: 150
      });
    } else {
      if ($stickyShare) {
        $stickyShare.cleanup();
      }
    }
  };

  var adjustImageGallery = function adjustImageGallery() {
    var images = document.querySelectorAll('.kg-gallery-image img');

    for (var i = 0, len = images.length; i < len; i++) {
      var container = images[i].closest('.kg-gallery-image');
      var width = images[i].attributes.width.value;
      var height = images[i].attributes.height.value;
      var ratio = width / height;
      container.style.flex = "".concat(ratio, " 1 0%");
    }
  };

  adjustShare();
  adjustImageGallery();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-post-content').find('img').each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('figure').hasClass('kg-bookmark-card') && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('figure').hasClass('kg-nft-card') && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('kg-product-card-image') && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('kg-audio-thumbnail') && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().is('a')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('js-zoomable');
    }

    var $figcaption = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('figcaption');

    if ($figcaption) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('alt', $figcaption.text());
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('alt', '');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-post-content').find('.kg-button-card .kg-btn, .kg-header-card-button').each(function () {
    var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).empty().html("<span>".concat(text, "</span>"));
  });
  Object(tippy_js__WEBPACK_IMPORTED_MODULE_4__["default"])('.js-copy-tooltip', {
    trigger: 'click',
    arrow: true
  });
  $copyLink.on('click', function () {
    $inputLink[0].select();
    $inputLink[0].setSelectionRange(0, 99999);
    document.execCommand('copy');
    $inputLink.trigger('blur');
  });

  if ($relatedSliderContainer.length > 0) {
    var featuredSwiper = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('.js-related-slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      freeMode: true,
      a11y: true,
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          allowTouchMove: true
        },
        1280: {
          spaceBetween: 40,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          allowTouchMove: false
        },
        1440: {
          slidesPerView: 4,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          spaceBetween: 40,
          allowTouchMove: false
        }
      }
    });
  }

  Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["makeImagesZoomable"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]);
  window.addEventListener('scroll', onScrolling, {
    passive: true
  });
  window.addEventListener('resize', onResizing, {
    passive: true
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header');
  $article = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-article');
  $progressBar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-progress-bar');
  $scrollToTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-scroll-top');
  lastScrollingY = window.pageYOffset;
  $scrollToTop.on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
      scrollTop: 0
    }, 500);
  });
  setHeights();
  updatingProgress();
});

/***/ }),

/***/ 3:
/*!**************************!*\
  !*** multi ./js/post.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/js/post.js */"./js/post.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);