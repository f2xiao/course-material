"use strict";
exports.id = 5076;
exports.ids = [5076];
exports.modules = {

/***/ 8568:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/using-sqlite-in-node-js/index.html.vue?vue&type=template&id=43c070c0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="using-sqlite-in-node-js" tabindex="-1"><a class="header-anchor" href="#using-sqlite-in-node-js" aria-hidden="true">#</a> Using SQlite in Node.js</h1><p>So, how do we use SQLite in a Node.js application? Let&#39;s find out!</p><iframe width="560" height="314" src="https://www.youtube.com/embed/65f7Fl0AEi8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>When communicating with an SQLite 3 database, foreign key constraints are disabled by default! To enable them, you must send the query <code>PRAGMA foreign_keys = ON</code> to the database after you have established a connection with it.</p><p>Learn more about this in <a href="https://www.sqlite.org/foreignkeys.html#fk_enable" target="_blank" rel="noopener noreferrer">the documentation for enabling foreign key constraints in SQLite`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="using-sqlite-in-node-js.pdf">using-sqlite-in-node-js.pdf</a></li><li><a href="using-sqlite-in-node-js.pptx">using-sqlite-in-node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://github.com/mapbox/node-sqlite3/wiki" target="_blank" rel="noopener noreferrer">sqlite3 Documentation`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>: <ul><li>API Documentation <br> (read if you need to learn some details)</li></ul></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/using-sqlite-in-node-js/index.html.vue?vue&type=template&id=43c070c0

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/using-sqlite-in-node-js/index.html.vue

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

/***/ 6052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-bdc36168",
  "path": "/lectures/using-sqlite-in-node-js/",
  "title": "Using SQlite in Node.js",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Using SQLite in Node.js"
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
  "filePathRelative": "lectures/using-sqlite-in-node-js/README.md",
  "git": {
    "updatedTime": 1570355762000
  }
}


/***/ })

};
;
//# sourceMappingURL=5076.app.js.map