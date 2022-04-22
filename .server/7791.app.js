"use strict";
exports.id = 7791;
exports.ids = [7791];
exports.modules = {

/***/ 9425:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/docker-basics/index.html.vue?vue&type=template&id=f23f67dc



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="docker-basics" tabindex="-1"><a class="header-anchor" href="#docker-basics" aria-hidden="true">#</a> Docker Basics</h1><p>Dockerization is a development method that&#39;s getting more and more popular, especially for solutions consisting of multiple applications, such as a website consisting of a web application and a database (and possibly a storage service, a frontend application of some kind, an email service, etc.). To run such a solution on your own computer (e.g. for development), you need to have all applications up and running and all of their dependencies installed, which is not easy nor convenient to setup. But with Docker, each application the solution consists of will run in it&#39;s own container together will all dependencies required to run it, and Docker also provides convenient methods for these applications to communicate with each other, so getting a Dockerized solution up and running on your own computer is a piece of cake once you have downloaded and installed Docker.</p><div class="custom-container danger"><p class="custom-container-title">Use Docker Desktop for Windows!</p><p>When this lecture was recorded, there was a legacy version of Docker called <em>Docker Toolbox</em>, and a newer version of Docker called <em>Docker Desktop for Windows</em>. Using the newer version is of course better, but it couldn&#39;t be used on computers running Windows 10 Home, which most students had.</p><p>In March 2020, <a href="https://www.docker.com/blog/docker-desktop-for-windows-home-is-here/" target="_blank" rel="noopener noreferrer">Docker released a new version of Docker Desktop for Windows`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> that also works on Windows 10 Home using <em>Windows Subsystem for Linux</em>. So nowadays all Windows users can use Docker Desktop for Windows, and forget about Docker Toolbox.</p><p>When using Docker through Windows Subsystem for Linux, it&#39;s better to place your docker projects on the file system for the Linux distribution you are running (e.g. Ubuntu), and run docker through the Linux distribution, instead of using the PowerShell in Windows (for details, see <a href="https://docs.docker.com/desktop/windows/wsl/#best-practices" target="_blank" rel="noopener noreferrer">Docker Desktop WSL 2 backend Best practices`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>).</p></div><iframe width="560" height="314" src="https://www.youtube.com/embed/1JwJnqUf-kU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="docker-basics.pdf">docker-basics.pdf</a></li><li><a href="docker-basics.pptx">docker-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li>Simplest explanation possible of containers: <ul><li><a href="https://www.reddit.com/r/docker/comments/qm39p8/my_wife_explaining_containers_to_my_mother_in_law/" target="_blank" rel="noopener noreferrer">My wife explaining containers to my mother in law`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li><li><a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer">Guides --&gt; Get Started`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Part 1: Getting started</li><li>Part 2: Sample application</li><li>Part 3: Update the application</li><li>Part 5: Persist the DB</li><li>Part 6: Use bind mounts</li><li>Part 7: Multi-container apps</li><li>Part 8: Use Docker Compose</li><li>Part 9: Image-building best practices</li></ul></li><li><a href="https://www.opencontainers.org/" target="_blank" rel="noopener noreferrer">Open Container Initiative`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Not that interesting for you to read, but do be aware of its existence</li></ul></li><li>If you want to learn the details of how Docker differs from virtual machines (not needed for this course): <ul><li><a href="https://stackoverflow.com/q/16047306/2104665" target="_blank" rel="noopener noreferrer">How is Docker different from a virtual machine?`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/docker-basics/index.html.vue?vue&type=template&id=f23f67dc

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/docker-basics/index.html.vue

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

/***/ 8147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-01f0039e",
  "path": "/lectures/docker-basics/",
  "title": "Docker Basics",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Docker Basics"
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
  "filePathRelative": "lectures/docker-basics/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=7791.app.js.map