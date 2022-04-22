"use strict";
exports.id = 8400;
exports.ids = [8400];
exports.modules = {

/***/ 8880:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/time-plan.html.vue?vue&type=template&id=2a6c14ae



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TimePlan = (0,external_vue_.resolveComponent)("TimePlan")

  _push(`<!--[--><h1 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h1><p>The <span style="${(0,server_renderer.ssrRenderStyle)({"background-color":"#00ffff75","display":"inline-block","padding":"0 8px","font-weight":"bold"})}">Work</span> column indicates what you are expected to work on each day. <code>LW</code> = <code>Laboratory Work</code>, <code>PW</code> = <code>Project Work</code>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TimePlan, {
    startDate: new Date(2022, 0, 17),
    columns: [
		{key: "l", name: "Lectures", color: "#ffa5009c"},
		{key: "w", name: "Work", color: "#00ffff75"},
		{key: "s", name: "Lab Sessions", color: "#ffff0070"},
		{key: "i", name: "Important", color: "#ff000094"},
	],
    rows: [
		// 1
		{w: "LW, PW Part 1", l: "Introduction"},
		{w: "LW, PW Part 1", l: "Tutorial: Client-side JS"},
		{w: "LW, PW Part 2", s: "L1"},
		{w: "LW, PW Part 2", s: "L2"},
		{w: "LW, PW Part 3"},
		{},
		{},
		// 2
		{w: "LW, PW Part 3", l: "Tutorial: Git"},
		{w: "PW Part 4", l: "Tutorial: Layered Web App in Docker"},
		{w: "PW Part 4", s: "L1"},
		{w: "PW Part 4", s: "L2"},
		{w: "PW Part 5"},
		{},
		{},
		// 3
		{w: "PW Part 5"},
		{w: "PW Part 5"},
		{w: "PW Part 5", s: "L1"},
		{w: "PW Part 5", s: "L2"},
		{w: "PW Part 5"},
		{},
		{},
		// 4
		{w: "PW Part 5"},
		{w: "PW Part 6", l: "Tutorial: Dependency Injection and ORM"},
		{w: "PW Part 6", s: "L1"},
		{w: "PW Part 6", s: "L2"},
		{w: "PW Part 7"},
		{i: "Re-exam period."},
		{i: "Re-exam period."},
		// 5 Re-exam period!
		{i: "Re-exam period."},
		{i: "Re-exam period."},
		{i: "Re-exam period."},
		{i: "Re-exam period."},
		{i: "Re-exam period."},
		{i: "Re-exam period."},
		{i: "Re-exam period."},
		// 6
		{w: "PW Part 7"},
		{w: "PW Part 7", l: "Guest Lecture: GDPR, E-directive, etc."},
		{w: "PW Part 7", s: "L1"},
		{w: "PW Part 8", s: "L2"},
		{w: "PW Part 8"},
		{i: "Registration for written exam opens"},
		{},
		// 7
		{w: "PW Part 8"},
		{w: "PW Part 8", l: "Tutorial: REST API and SPA"},
		{w: "PW Part 8", s: "L1"},
		{w: "PW Part 9", s: "L2"},
		{w: "PW Part 9"},
		{},
		{},
		// 8
		{w: "PW Part 9"},
		{w: "PW Part 9", l: "Tutorial: REST API and SPA"},
		{w: "PW Part 9", s: "L1"},
		{w: "PW Part 9", s: "L2"},
		{w: "PW Part 10"},
		{},
		{},
		// 9
		{w: "PW Part 10"},
		{w: "PW Part 10", l: "Repetition/Sample exam"},
		{w: "PW Part 10", s: "L1", i: "Registration for written exam closes around now"},
		{w: "PW Part 10", s: "L2"},
		{w: "PW Part 10"},
		{},
		{},
		// 10 Exam period!
		{w: "PW Part 11&12"},
		{w: "PW Part 11&12"},
		{w: "PW Part 11&12"},
		{w: "PW Part 11&12"},
		{w: "PW Part 11&12"},
		{i: "Written Examination"},
		{w: "PW Part 13", i: "Deadline Project Work"},
	]
  }, null, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/time-plan.html.vue?vue&type=template&id=2a6c14ae

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/time-plan.html.vue

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

/***/ 2321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-661954c4",
  "path": "/courses/web-development-advanced-concepts/time-plan.html",
  "title": "Time Plan",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "courses/web-development-advanced-concepts/time-plan.md",
  "git": {
    "updatedTime": 1644178951000
  }
}


/***/ })

};
;
//# sourceMappingURL=8400.app.js.map