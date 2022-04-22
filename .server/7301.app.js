"use strict";
exports.id = 7301;
exports.ids = [7301];
exports.modules = {

/***/ 5438:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/using-sequelize-in-node-js/index.html.vue?vue&type=template&id=50a798c6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="using-sequelize-in-node-js" tabindex="-1"><a class="header-anchor" href="#using-sequelize-in-node-js" aria-hidden="true">#</a> Using Sequelize in Node.js</h1><p>You can write and send your own queries to your relational database, but what if you later change to another relational database using a little bit different SQL dialect? Then you need to go through all your queries and rewrite some of them 😥 Or, you can use an ORM instead, and let the ORM write the SQL queries for you. Then it&#39;s easy to switch to another relational database, and you don&#39;t even need to know SQL to use the database 😀</p><iframe width="560" height="314" src="https://www.youtube.com/embed/0lGWqp-yUTU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="custom-container warning"><p class="custom-container-title">About sequelize.sync()</p><p><code>sequelize.sync()</code> will only attempt to create the tables in the database if they don&#39;t already exists. If you try to call this method again after you have changed your model definitions, the tables in the database won&#39;t be updated to match your new model definitions. Use <code>sequelize.sync({force: true})</code> to make Sequelize first delete your tables in the database, and then re-create them per your new model definitions, or update the tables in the database manually yourself.</p></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="using-sequelize-in-node-js.pdf">using-sequelize-in-node-js.pdf</a></li><li><a href="using-sequelize-in-node-js.pptx">using-sequelize-in-node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="http://docs.sequelizejs.com/" target="_blank" rel="noopener noreferrer">The docs on Sequelize&#39;s website have a lot of explanatory examples.`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/using-sequelize-in-node-js/index.html.vue?vue&type=template&id=50a798c6

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/using-sequelize-in-node-js/index.html.vue

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

/***/ 3871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e9b2497a",
  "path": "/lectures/using-sequelize-in-node-js/",
  "title": "Using Sequelize in Node.js",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Using Sequelize in Node.js"
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
  "filePathRelative": "lectures/using-sequelize-in-node-js/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=7301.app.js.map