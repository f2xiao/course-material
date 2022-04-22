"use strict";
exports.id = 9312;
exports.ids = [9312];
exports.modules = {

/***/ 3974:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/android-conditional-resources/index.html.vue?vue&type=template&id=05a85cdb



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="android-conditional-resources" tabindex="-1"><a class="header-anchor" href="#android-conditional-resources" aria-hidden="true">#</a> Android Conditional Resources</h1><p>Resources (strings, layouts, etc.) are loaded dynamically in Android, and when you create a new one you can specify during which conditions it should be used. This is what makes adding i18n support so easy; we have a default string resource file, but also more specialized string resource files, e.g. one with string resources in Swedish, another one with string resources in Spanish, etc. You just specify that you want to have a string resource file, and if the user uses Swedish, Android gives you the Swedish string resource file, etc. This make it convenient to handle many different type of configurations (screen sizes, preferred language, font size, etc).</p><iframe width="560" height="314" src="https://www.youtube.com/embed/7aI4JlmMyoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-conditional-resources.pdf">android-conditional-resources.pdf</a></li><li><a href="android-conditional-resources.pptx">android-conditional-resources.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li>The following chapters from the course book <a href="https://commonsware.com/Android/" target="_blank" rel="noopener noreferrer">The Busy Coder&#39;s Guide to Android Development`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>: <ul><li>Resource Sets and Configurations</li></ul></li><li>The following pages from Android Developers Guide: <ul><li><a href="https://developer.android.com/guide/topics/resources/providing-resources#AlternativeResources" target="_blank" rel="noopener noreferrer">App resources`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-conditional-resources/index.html.vue?vue&type=template&id=05a85cdb

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-conditional-resources/index.html.vue

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

/***/ 9339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-954c9a20",
  "path": "/lectures/android-conditional-resources/",
  "title": "Android Conditional Resources",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Android Conditional Resources"
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
  "filePathRelative": "lectures/android-conditional-resources/README.md",
  "git": {
    "updatedTime": 1644225479000
  }
}


/***/ })

};
;
//# sourceMappingURL=9312.app.js.map