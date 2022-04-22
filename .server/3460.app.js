"use strict";
exports.id = 3460;
exports.ids = [3460];
exports.modules = {

/***/ 9401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ time_plan_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/client-server-communication/time-plan.html.vue?vue&type=template&id=4a1fe674



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TimePlan = (0,external_vue_.resolveComponent)("TimePlan")

  _push(`<!--[--><h1 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h1><p>The <span style="${
    (0,server_renderer.ssrRenderStyle)({"background-color":"lime","display":"inline-block","padding":"0 8px","font-weight":"bold"})
  }">Laboratory Work</span> and <span style="${
    (0,server_renderer.ssrRenderStyle)({"background-color":"aqua","display":"inline-block","padding":"0 8px","font-weight":"bold"})
  }">Project Work</span> column indicates what you are expected to work on each day.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TimePlan, {
    startDate: new Date(2019, 7, 26),
    columns: [
		{key: "l", name: "Lectures", color: "orange"},
		{key: "s", name: "Lab sessions", color: "yellow"},
		{key: "lw", name: "Laboratory Work", color: "lime"},
		{key: "p", name: "Project Work", color: "aqua"},
		{key: "i", name: "Important", color: "red"},
	],
    rows: [
		// 35
		{},
		{s: "Group 1", l: "Introduction", lw: "Part 1"},
		{l: "Tutorial 1: Vue", lw: "Part 1"},
		{s: "Group 2", lw: "Part 1"},
		{lw: "Part 1"},
		{},
		{},
		// 36
		{lw: "Part 1"},
		{l: "Tutorial 2: Vue + Async", s: "Group 1", lw: "Part 2"},
		{lw: "Part 2"},
		{s: "Group 2", lw: "Part 2"},
		{lw: "Part 2"},
		{},
		{},
		// 37
		{lw: "Part 2"},
		{l: "Tutorial 3: REST in Express", s: "Group 1", p: "Part 1, 2"},
		{p: "Part 2"},
		{s: "Group 2", p: "Part 3", i: "Inspera Exam Registration Opens"},
		{p: "Part 3"},
		{},
		{},
		// 38
		{p: "Part 3"},
		{l: "Tutorial 4: SPA Requests", s: "Group 1", p: "Part 4"},
		{p: "Part 4"},
		{s: "Group 2", p: "Part 4"},
		{p: "Part 4"},
		{},
		{},
		// 39
		{p: "Part 5"},
		{l: "Tutorial 5: Security", s: "Group 1", p: "Part 5"},
		{p: "Part 5"},
		{s: "Group 2", p: "Part 5"},
		{p: "Part 6"},
		{},
		{},
		// 40
		{p: "Part 6"},
		{l: "Tutorial 6: Repetition", s: "Group 1", p: "Part 6"},
		{p: "Part 7"},
		{s: "Group 2", p: "Part 7"},
		{p: "Part 7", i: "Deadline Submit Report for Feedback"},
		{i: "Inspera Exam Registration Closes"},
		{},
		// 41
		{p: "Part 8"},
		{l: "Guest Lecture", s: "Group 1", p: "Part 8"},
		{l: "Sample Exam/Extra Help", p: "Part 8"},
		{s: "Group 2", p: "Part 8"},
		{p: "Part 8"},
		{},
		{},
		// 42
		{p: "Part 9, 10", i: "Present Project Work"},
		{p: "Part 10", i: "Inspera Exam"},
		{p: "Part 10"},
		{p: "Part 9, 10", i: "Present Project Work"},
		{p: "Part 9, 10", i: "Present Project Work"},
		{},
		{p: "Part 11", i: "Deadline Submit Project Work"},
	]
  }, null, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/time-plan.html.vue?vue&type=template&id=4a1fe674

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/time-plan.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const time_plan_html = (__exports__);

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

/***/ 9542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d721933e",
  "path": "/courses/client-server-communication/time-plan.html",
  "title": "Time Plan",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "courses/client-server-communication/time-plan.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=3460.app.js.map