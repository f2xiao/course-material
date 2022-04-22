"use strict";
exports.id = 3722;
exports.ids = [3722];
exports.modules = {

/***/ 8420:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/ajax/index.html.vue?vue&type=template&id=2a05c7ce



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> AJAX</h1><p>Traditionally, the only way to load new information on a webpage was by clicking on a link or submitting a form to tell the web browser to send a GET or a POST request to fetch and display a new webpage. But with <em>Asynchronous JavaScript And XML</em> we can use client-side JavaScript to tell the web browser to send an HTTP request to a server, and we can also use client-side JavaScript to receive and handle the HTTP response the web browser receives back. This way it&#39;s easier to create more interactive websites with better user experience.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/tVZitsQRB_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="custom-container danger"><p class="custom-container-title">Use AJAX properly!</p><p>AJAX can be used to improve the user experience, but most websites trying to use it actually end up providing a worse user experience. If you try to use it on a website, be sure to:</p><ul><li>Show loading indicators <ul><li>(otherwise users won&#39;t know if their clicks are registered, if something crashed, or if the page is still loading, etc.)</li></ul></li><li>Handle errors <ul><li>(must show error messages to the users when something goes wrong, otherwise they will just sit and wait)</li></ul></li><li>Change the URI when showing new content <ul><li>(otherwise users can&#39;t bookmark the page with the newly loaded content, the refresh button won&#39;t work as expected, search engines can&#39;t take users directly to the new content, etc.)</li></ul></li><li>Listen for changes in the web browser&#39;s history, and act accordingly <ul><li>(otherwise the the back and forward buttons in the web browser won&#39;t work as expected, etc.)</li></ul></li></ul><p>Just sending an extra HTTP request and display the new content is not enough, all of these things needs to be handled to improve the experience! If you are not prepared to put down all of this extra work, then AJAX is probably not for you.</p></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="ajax.pdf">ajax.pdf</a></li><li><a href="ajax.pptx">ajax.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://davidwalsh.name/fetch" target="_blank" rel="noopener noreferrer">David Walsh&#39;s blogpost on <code>fetch</code>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://fetch.spec.whatwg.org/" target="_blank" rel="noopener noreferrer"><code>fetch</code> specification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank" rel="noopener noreferrer">Manipulating the browser history`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/ajax/index.html.vue?vue&type=template&id=2a05c7ce

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/ajax/index.html.vue

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

/***/ 9051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-63b3ad24",
  "path": "/lectures/ajax/",
  "title": "AJAX",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "AJAX"
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
  "filePathRelative": "lectures/ajax/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=3722.app.js.map