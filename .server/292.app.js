"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 9374:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/index.html.vue?vue&type=template&id=71bf1b8e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")

  _push(`<!--[--><h1 id="welcome" tabindex="-1"><a class="header-anchor" href="#welcome" aria-hidden="true">#</a> Welcome!</h1><p>Welcome to <em>Introduction to Script Programming</em>! In this course you&#39;ll learn how to create small programs in Python your computer can execute.</p><p>This website will be used to host the course material. Canvas will primarily be used to:</p><ul><li>Send information to you through announcements (be sure to have your global notification settings or your course notification settings enabled on Canvas)</li><li>Organize you into lab groups (see the People page on Canvas)</li><li>Keep track of your progress in the course (passed lab assignments) (see the Assignments page and the Grades page on Canvas)</li></ul><h2 id="two-course-codes" tabindex="-1"><a class="header-anchor" href="#two-course-codes" aria-hidden="true">#</a> Two course codes!</h2><p>This course is primarily given for two programs, and they have different codes for this course, as well as two different Canvas pages, as shown in the table below.</p><table><thead><tr><th>Program</th><th>Course Code</th><th>Canvas Page</th></tr></thead><tbody><tr><td>IT Infrastructure and Network Design</td><td>TSPG17</td><td><a href="https://ju.instructure.com/courses/4205" target="_blank" rel="noopener noreferrer">TSPG17 T1199`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></td></tr><tr><td>Sustainable Building Information Management</td><td>TSTG17</td><td><a href="https://ju.instructure.com/courses/4199" target="_blank" rel="noopener noreferrer">TSTG17 T1239`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></td></tr><tr><td>All other students</td><td>TSPG17</td><td>See the first link</td></tr></tbody></table><p>At the moment, the only difference between these two are some of the problems that should be solved in the laboratory work. Those problems have been pointed out in the laboratory work instructions.</p><h2 id="information-to-old-students" tabindex="-1"><a class="header-anchor" href="#information-to-old-students" aria-hidden="true">#</a> Information to old students</h2><p>If you&#39;re an old student that took this course a previous year but still have some examination tests left to pass you take those tests as they are described this year. The old Ping Pong event/old Canvas Course won&#39;t be used any more, so join this year&#39;s Canvas Course, so we can keep track of your progress in the course this year there. If you aren&#39;t registered for the course this year, ask the course manager to invite you to the Canvas Course by sending him an email message based on the template in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below with the topic <code>Invitation to Canvas Course</code> to <code>peter.larsson-green@ju.se</code>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Template for email message to be invited to a Canvas Course. Replace XXX with your own value, and only keep the course you want to be invited to." }, {
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

My JU email address is:
XXX@student.ju.se

The course name (remove the line that is wrong for you):
TSPG17 Introduction to Script Programming https://ju.instructure.com/courses/4205
TSTG17 Introduction to Script Programming https://ju.instructure.com/courses/4199

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
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Hi!\n\nI need to be invited to a Canvas Course.\n\nMy JU email address is:\nXXX@student.ju.se\n\nThe course name (remove the line that is wrong for you):\nTSPG17 Introduction to Script Programming https://ju.instructure.com/courses/4205\nTSTG17 Introduction to Script Programming https://ju.instructure.com/courses/4199\n\nThanks!\n")
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
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
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/index.html.vue?vue&type=template&id=71bf1b8e

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/index.html.vue

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

/***/ 3460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7f920989",
  "path": "/courses/introduction-to-script-programming/",
  "title": "Welcome!",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Two course codes!",
      "slug": "two-course-codes",
      "children": []
    },
    {
      "level": 2,
      "title": "Information to old students",
      "slug": "information-to-old-students",
      "children": []
    }
  ],
  "filePathRelative": "courses/introduction-to-script-programming/README.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=292.app.js.map