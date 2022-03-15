(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuse.js/dist/fuse.basic.esm.min.js */ "./node_modules/fuse.js/dist/fuse.basic.esm.min.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");











__webpack_require__(/*! viewport-units-buggyfill */ "./node_modules/viewport-units-buggyfill/viewport-units-buggyfill.js").init();

Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__["default"])({});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isRTL"])()) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('dir', 'rtl').addClass('rtl');
  }

  var $header = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-header');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-menu');
  var $mobileTopbar = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-mobile-topbar');
  var $mobileMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-mobile-menu');
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submenu');
  var $toggleSubmenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-toggle-submenu');
  var $closeSubmenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-close-submenu');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-input-search');
  var $searchInitState = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-init-state');
  var $searchResultsContainer = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-results-container');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-no-results');
  var $searchLoading = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-loading');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-toggle-darkmode');
  var $openSecondaryMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-tooltip-secondary-menu');
  var $desktopTopbarContent = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-desktop-topbar-content');
  var $desktopTopbarNav = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-desktop-topbar-nav');
  var currentSavedTheme = localStorage.getItem('theme');
  var observer = null;
  var fuse = null;
  var searchTimer = null;
  var submenuIsOpen = false;
  var secondaryMenuTippy = null;

  var trySearchFeature = function trySearchFeature() {
    if (typeof ghostSearchApiKey !== 'undefined') {
      getAllPosts(ghostHost, ghostSearchApiKey);
    } else {
      $openSearch.remove();
      $closeSearch.remove();
      $search.remove();
    }
  };

  var getAllPosts = function getAllPosts(host, key) {
    var api = new GhostContentAPI({
      url: host,
      key: key,
      version: 'v4'
    });
    var allPosts = [];
    var fuseOptions = {
      shouldSort: true,
      ignoreLocation: true,
      findAllMatches: true,
      includeScore: true,
      minMatchCharLength: 2,
      keys: ['title', 'custom_excerpt']
    };
    api.posts.browse({
      limit: 'all',
      fields: 'id, title, url, published_at, custom_excerpt, feature_image, visibility'
    }).then(function (posts) {
      for (var i = 0, len = posts.length; i < len; i++) {
        allPosts.push(posts[i]);
      }

      fuse = new fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](allPosts, fuseOptions);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var performSearch = function performSearch() {
    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isMobile"])()) {
      $searchInitState.hide();
    }

    var results = fuse.search($inputSearch.val());
    var bestResults = results.filter(function (result) {
      if (result.score <= 0.5) {
        return result;
      }
    });
    var visibilityTypes = {
      members: membersLabel,
      paid: paidLabel
    };
    var htmlString = '';

    if (bestResults.length > 0) {
      for (var i = 0, len = bestResults.length; i < len; i++) {
        var result = bestResults[i].item;
        var lastClass = i === len - 1 ? 'last' : '';

        if (result.feature_image && result.feature_image.indexOf('/content/images/') > -1) {
          result.feature_image = result.feature_image.replace('/content/images/', '/content/images/size/w600/');
        }

        var resultImage = result.feature_image ? "<a href=\"".concat(result.url, "\" class=\"m-result__image\" aria-hidden=\"true\" tabindex=\"-1\">              <div class=\"lozad\" data-background-image=\"").concat(result.feature_image, "\"></div>            </a>") : '';
        htmlString += "\n          <article class=\"m-result ".concat(lastClass, "\">            ").concat(resultImage, "            <h3 class=\"m-result__title\">              <a href=\"").concat(result.url, "\">").concat(result.title, "</a>            </h3>            <div class=\"m-result__metas\">              <span class=\"m-access-tag in-search-result ").concat(result.visibility, "\" data-visibility=\"").concat(visibilityTypes[result.visibility], "\"></span>              <span class=\"m-result__date\">").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(result.published_at), "</span>            </div>          </article>");
      }

      $searchNoResults.hide();
      $searchResults.html(htmlString);
      $searchResultsContainer.show();
      observer.observe();
    } else {
      $searchResults.html('');
      $searchResultsContainer.hide();
      $searchNoResults.show();
    }
  };

  var openSubmenu = function openSubmenu() {
    $toggleSubmenu.addClass('active');
    $submenu.addClass('opened');
  };

  var closeSubmenu = function closeSubmenu() {
    submenuIsOpen = false;
    $toggleSubmenu.removeClass('active');
    $submenu.removeClass('opened');
  };

  var toggleDesktopTopbarOverflow = function toggleDesktopTopbarOverflow(disableOverflow) {
    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isMobile"])()) {
      if (disableOverflow) {
        $desktopTopbarContent.addClass('toggle-overflow');
        $desktopTopbarNav.addClass('toggle-overflow');
      } else {
        $desktopTopbarContent.removeClass('toggle-overflow');
        $desktopTopbarNav.removeClass('toggle-overflow');
      }
    }
  };

  $openMenu.on('click', function () {
    $header.toggleClass('opened');
    $openMenu.toggleClass('opened');
    $mobileTopbar.toggleClass('opened');
    $mobileMenu.toggleClass('opened');
    $submenu.removeClass('opened');

    if ($header.hasClass('opened')) {
      Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
        targets: '.js-mobile-menu .js-anime',
        translateY: [-25, 0],
        duration: 1000,
        delay: function delay(target, index) {
          return index * 25;
        },
        elasticity: 25
      });
    } else {
      closeSubmenu();
    }

    Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["toggleScrollVertical"])();
  });
  $toggleSubmenu.on('click', function () {
    submenuIsOpen = !submenuIsOpen;

    if (submenuIsOpen) {
      openSubmenu();
    } else {
      closeSubmenu();
    }
  });
  $closeSubmenu.on('click', function () {
    closeSubmenu();
  });
  $openSearch.on('click', function () {
    $search.addClass('opened');
    setTimeout(function () {
      if ($inputSearch.val().length === 0) {
        $inputSearch.trigger('focus');
      }
    }, 400);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["toggleScrollVertical"])();
  });
  $closeSearch.on('click', function () {
    $inputSearch.trigger('blur');
    $search.removeClass('opened');
    Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["toggleScrollVertical"])();
  });
  $inputSearch.on('keyup', function () {
    if (searchTimer) {
      clearTimeout(searchTimer);
    }

    if ($inputSearch.val().length > 0 && fuse) {
      $searchLoading.show();
      searchTimer = setTimeout(function () {
        performSearch();
        $searchLoading.hide();
      }, 1000);
    } else {
      $searchLoading.hide();
      $searchResults.html('');
      $searchResultsContainer.hide();
      $searchNoResults.hide();

      if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isMobile"])()) {
        $searchInitState.show();
      }
    }
  });
  $toggleDarkMode.on('change', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
  $toggleDarkMode.on('mouseenter', function () {
    toggleDesktopTopbarOverflow(true);
  });
  $toggleDarkMode.on('mouseleave', function () {
    toggleDesktopTopbarOverflow(false);
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).hasClass('js-toggle-submenu') || jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).parent().hasClass('js-toggle-submenu')) {
      return;
    }

    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isMobile"])() && submenuIsOpen && !$submenu[0].contains(e.target)) {
      closeSubmenu();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('keyup', function (e) {
    if (e.key === 'Escape' && $search.hasClass('opened')) {
      $closeSearch.trigger('click');
    }
  });

  if (currentSavedTheme) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', currentSavedTheme);

    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('checked', true);
      });
    }
  } else {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isDarkMode"])()) {
      $toggleDarkMode.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('checked', true);
      });
    }
  }

  if ($header.length > 0) {
    var headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_3___default.a($header[0], {
      tolerance: {
        up: 10,
        down: 0
      },
      onUnpin: function onUnpin() {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isMobile"])() && secondaryMenuTippy) {
          var desktopSecondaryMenuTippy = secondaryMenuTippy[1];

          if (desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible) {
            desktopSecondaryMenuTippy.hide();
          }
        }
      }
    });
    headroom.init();
  }

  observer = lozad__WEBPACK_IMPORTED_MODULE_2___default()('.lozad', {
    loaded: function loaded(el) {
      el.classList.add('loaded');
    }
  });
  observer.observe();

  if ($openSecondaryMenu.length > 0) {
    var template = document.getElementById('secondary-navigation-template');
    secondaryMenuTippy = Object(tippy_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-tooltip-secondary-menu', {
      content: template.innerHTML,
      allowHTML: true,
      arrow: true,
      trigger: 'click',
      interactive: true,
      onShow: function onShow() {
        toggleDesktopTopbarOverflow(true);
      },
      onHidden: function onHidden() {
        toggleDesktopTopbarOverflow(false);
      }
    });
  }

  Object(tippy_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-tooltip', {
    arrow: true
  });

  if (typeof disableFadeAnimation === 'undefined' || !disableFadeAnimation) {
    aos__WEBPACK_IMPORTED_MODULE_4___default.a.init({
      once: true,
      startEvent: 'DOMContentLoaded'
    });
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-aos]').addClass('no-aos-animation');
  }

  trySearchFeature();
});

/***/ }),

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

/***/ 1:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/lib/ghost/content/themes/weiss-pro/src/js/app.js */"./js/app.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);