"use strict";
exports.id = 8384;
exports.ids = [8384];
exports.modules = {

/***/ 183:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/node-js/index.html.vue?vue&type=template&id=8c1cef98



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><p>You want to execute your JavaScript code? That you can do in Node.js, a JavaScript runtime environment.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/ybIg85flNeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="custom-container warning"><p class="custom-container-title">Node.js support ECMAScript modules</p><p>In the lecture slides it says Node.js doesn&#39;t support ECMAScript modules. That is no longer the case, see:</p><p><a href="https://nodejs.org/api/esm.html" target="_blank" rel="noopener noreferrer">https://nodejs.org/api/esm.html`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>However, Require JS and ECMAScript modules aren&#39;t 100% interchangeable, so it&#39;s probably best to be consistent and use only one of them, and I suspect many npm packages out there don&#39;t support ECMAScript modules to 100%, so the safest is probably to stick to using Require JS for now.</p></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="node-js.pdf">node-js.pdf</a></li><li><a href="node-js.pptx">node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="http://wiki.commonjs.org/wiki/CommonJS" target="_blank" rel="noopener noreferrer">CommonJS Spec Wiki`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Introduction</li><li>FAQ</li></ul></li><li><a href="https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8" target="_blank" rel="noopener noreferrer">Requiring modules in Node.js: Everything you need to know`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Read this if you want to learn more about how modules work in Node.js (not required for this course).</li></ul></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/node-js/index.html.vue?vue&type=template&id=8c1cef98

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/node-js/index.html.vue

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

/***/ 8658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1df125fc",
  "path": "/lectures/node-js/",
  "title": "Node.js",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Node.js"
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
  "filePathRelative": "lectures/node-js/README.md",
  "git": {
    "updatedTime": 1631114563000
  }
}


/***/ })

};
;
//# sourceMappingURL=8384.app.js.map