"use strict";
exports.id = 7678;
exports.ids = [7678];
exports.modules = {

/***/ 9657:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/index.html.vue?vue&type=template&id=57a1be90



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")

  _push(`<!--[--><h1 id="welcome" tabindex="-1"><a class="header-anchor" href="#welcome" aria-hidden="true">#</a> Welcome!</h1><p>Welcome to the course <em>Web Development - Advanced Concepts</em>!</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This is a follow up course to `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Web Development Fundamentals`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Web Development Fundamentals")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`, so you are expected to already know how to create web applications storing resources in a database and all the other things you learned in that course. In this course you will learn how to create web applications as well, but they will be bigger and better by using technologies such as:</p><ul><li>Three-layered Architecture</li><li>Dependency Injection</li><li>Client-side JavaScript</li><li>Docker</li><li>etc.</li></ul><p>This website will be used to host the course material only. Canvas will primarily be used to:</p><ul><li>Send info to you through announcements (be sure to have your global notification settings or your course notification settings enabled)</li><li>Organize you into lab groups (see the People page)</li><li>Keep track of your progress in the course (passed lab assignments) (see the Modules page and the Grades page)</li></ul><p>Read the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/study-guide/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Study Guide`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Study Guide")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` for the details.</p><h2 id="information-to-old-students" tabindex="-1"><a class="header-anchor" href="#information-to-old-students" aria-hidden="true">#</a> Information to old students</h2><p>If you&#39;re an old student that took this course a previous year but still have some examination tests left to pass you take those tests as they are described this year. The old Canvas course won&#39;t be used any more, so join this year&#39;s Canvas course, so we can keep track of your progress in the course this year there. If you aren&#39;t registered for the course this year, ask the course coordinator to invite you to the Canvas course by sending him an email message based on the template in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below with the topic <code>Invitation to Canvas Course</code> to <code>peter.larsson-green@ju.se</code>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Template for email message to be invited to a Canvas Course. Replace XXX with your own value." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Hi!

I need to be invited to a Canvas Course.

My JU email:
XXX@student.ju.se

The course:
TFWN19 Web Development - Advanced Concepts https://ju.instructure.com/courses/4775

Thanks!
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Hi!\n\nI need to be invited to a Canvas Course.\n\nMy JU email:\nXXX@student.ju.se\n\nThe course:\nTFWN19 Web Development - Advanced Concepts https://ju.instructure.com/courses/4775\n\nThanks!\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/index.html.vue?vue&type=template&id=57a1be90

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/index.html.vue

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

/***/ 9486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-09054f74",
  "path": "/courses/web-development-advanced-concepts/",
  "title": "Welcome!",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Introduction",
      "slug": "introduction",
      "children": []
    },
    {
      "level": 2,
      "title": "Information to old students",
      "slug": "information-to-old-students",
      "children": []
    }
  ],
  "filePathRelative": "courses/web-development-advanced-concepts/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=7678.app.js.map