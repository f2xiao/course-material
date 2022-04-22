"use strict";
exports.id = 8654;
exports.ids = [8654];
exports.modules = {

/***/ 9469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/android-permissions/index.html.vue?vue&type=template&id=4c02018a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="android-permissions" tabindex="-1"><a class="header-anchor" href="#android-permissions" aria-hidden="true">#</a> Android Permissions</h1><p>Android has many features we can use (camera, file storage, Bluetooth communication, Internet communication, etc.), but these features should not be exploited by app developers. Therefore Android has a permissions system; before an application use a feature that might be harmful to the user the application must first obtain permission from the user to use the feature. Let&#39;s take a look at the details!</p><iframe width="560" height="314" src="https://www.youtube.com/embed/Kz_1DafK4XE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-permissions.pdf">android-permissions.pdf</a></li><li><a href="android-permissions.pptx">android-permissions.pptx</a></li></ul><div class="custom-container tip"><p class="custom-container-title">Jetpack...</p><p>The Android Jetpack libraries have a helper method called in activities and fragments called <code>registerForActivityResult()</code>, which is an alternative and easier way to ask for permission.</p></div><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li>The following Android Developers Guide pages: <ul><li><a href="https://developer.android.com/guide/topics/permissions/overview" target="_blank" rel="noopener noreferrer">App Permissions`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li><li>The following Android Developers Training pages: <ul><li><a href="https://developer.android.com/training/permissions/requesting" target="_blank" rel="noopener noreferrer">Request app permissions`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-permissions/index.html.vue?vue&type=template&id=4c02018a

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-permissions/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 8722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3ebed4ec",
  "path": "/lectures/android-permissions/",
  "title": "Android Permissions",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Android Permissions"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Lecture material",
      "slug": "lecture-material",
      "children": []
    },
    {
      "level": 2,
      "title": "Recommended reading",
      "slug": "recommended-reading",
      "children": []
    }
  ],
  "filePathRelative": "lectures/android-permissions/README.md",
  "git": {
    "updatedTime": 1644225479000
  }
}


/***/ })

};
;
//# sourceMappingURL=8654.app.js.map