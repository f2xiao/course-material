"use strict";
exports.id = 4837;
exports.ids = [4837];
exports.modules = {

/***/ 3595:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/handling-concurrent-http-requests/index.html.vue?vue&type=template&id=1565f71c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="handling-concurrent-http-requests" tabindex="-1"><a class="header-anchor" href="#handling-concurrent-http-requests" aria-hidden="true">#</a> Handling Concurrent HTTP Requests</h1><p>So, our web application receives 1000 requests/second. How does it handle that as efficient as possible? Turns out there are some different ways to handle it, and Node.js started to use a new approach that turned out to be more scalable than the traditional approaches used. At least to some extent, but let&#39;s take a closer look at it!</p><iframe width="560" height="314" src="https://www.youtube.com/embed/mZxtkMhL5VA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="handling-concurrent-http-requests.pdf">handling-concurrent-http-requests.pdf</a></li><li><a href="handling-concurrent-http-requests.pptx">handling-concurrent-http-requests.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop" target="_blank" rel="noopener noreferrer">Node JS Architecture – Single Threaded Event Loop`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/handling-concurrent-http-requests/index.html.vue?vue&type=template&id=1565f71c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/handling-concurrent-http-requests/index.html.vue

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

/***/ 4362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6d1ceed5",
  "path": "/lectures/handling-concurrent-http-requests/",
  "title": "Handling Concurrent HTTP Requests",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Handling Concurrent HTTP Requests"
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
  "filePathRelative": "lectures/handling-concurrent-http-requests/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=4837.app.js.map