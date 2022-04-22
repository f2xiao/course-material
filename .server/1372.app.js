"use strict";
exports.id = 1372;
exports.ids = [1372];
exports.modules = {

/***/ 9280:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/android-development/time-plan.html.vue?vue&type=template&id=ea2f1ce2



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TimePlan = (0,external_vue_.resolveComponent)("TimePlan")

  _push(`<!--[--><h1 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h1><p>The <span style="${(0,server_renderer.ssrRenderStyle)({"background-color":"#00ffff75","display":"inline-block","padding":"0 8px","font-weight":"bold"})}">Work</span> column indicates what you are expected to work on each day. <code>LW</code> = <code>Laboratory Work</code>, <code>PW</code> = <code>Project Work</code>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TimePlan, {
    startDate: new Date(2022, 0, 17),
    columns: [
		{key: "l", name: "Lectures/Tutorials", color: "#ffa5009c"},
		{key: "w", name: "Work", color: "#00ffff75"},
		{key: "s", name: "Lab Sessions", color: "#ffff0070"},
		{key: "i", name: "Important", color: "#ff000094"},
	],
    rows: [
		// 3
		{w: "LW, PW: Part 1", l: "Course Introduction, Android Basics", i: "Swedish students fix a group today!"},
		{w: "LW, PW: Part 1"},
		{w: "LW, PW: Part 2", s: "L2"},
		{w: "LW, PW: Part 2", l: "Tutorial: Sample App (Activities)"},
		{w: "LW, PW: Part 2", s: "L3, L4"},
		{},
		{},
		// 4
		{w: "LW, PW: Part 3", l: "Tutorial: Git", s: "L1"},
		{w: "LW, PW: Part 3"},
		{w: "LW, PW: Part 3", s: "L2"},
		{w: "LW, PW: Part 4"},
		{w: "LW, PW: Part 4", s: "L3, L4"},
		{},
		{},
		// 5
		{w: "LW, PW: Part 4", l: "GUI Design & Prototyping by Martin", s: "L1"},
		{w: "LW, PW: Part 4"},
		{w: "PW: Part 4", s: "L2"},
		{w: "PW: Part 4", l: "Tutorial: Sample App (Fragments)"},
		{w: "PW: Part 5", s: "L3, L4"},
		{},
		{},
		// 6
		{w: "PW: Part 5", s: "L1", i: "Prototype Presentations"},
		{w: "PW: Part 5", i: "Prototype Presentations"},
		{w: "PW: Part 5", s: "L2"},
		{w: "PW: Part 5", l: "Tutorial: Sample App (Long Running Operations)"},
		{w: "PW: Part 5", s: "L3, L4"},
		{i: "Re-exam period"},
		{i: "Re-exam period"},
		// 7
		{i: "Re-exam period"},
		{i: "Re-exam period"},
		{i: "Re-exam period"},
		{i: "Re-exam period"},
		{i: "Re-exam period"},
		{i: "Re-exam period"},
		{i: "Re-exam period"},
		// 8
		{w: "PW: Part 5", l: "Tutorial: Sample App (Services, BroadRece)", s: "L1"},
		{w: "PW: Part 5"},
		{w: "PW: Part 5", s: "L2"},
		{w: "PW: Part 5"},
		{w: "PW: Part 5", s: "L3, L4"},
		{},
		{},
		// 9
		{w: "PW: Part 5", s: "L1", i: "PW: Halfway Meeting"},
		{i: "PW: Halfway Meeting", w: "PW: Part 5"},
		{i: "PW: Halfway Meeting", w: "PW: Part 5", s: "L2"},
		{i: "PW: Halfway Meeting", w: "PW: Part 5"},
		{i: "PW: Halfway Meeting", w: "PW: Part 5", s: "L3, L4"},
		{},
		{},
		// 10
		{w: "PW: Part 5", i: "PW: Halfway Meeting", s: "L1"},
		{w: "PW: Part 5", i: "PW: Halfway Meeting"},
		{w: "PW: Part 5", i: "PW: Halfway Meeting", s: "L2"},
		{w: "PW: Part 5", i: "PW: Halfway Meeting"},
		{w: "PW: Part 5", i: "PW: Halfway Meeting", s: "L3, L4"},
		{},
		{},
		// 11
		{w: "PW: Part 5", s: "L1"},
		{w: "PW: Part 5"},
		{w: "PW: Part 5", s: "L2"},
		{w: "PW: Part 5"},
		{w: "PW: Part 5", s: "L3, L4"},
		{i: "Exam period"},
		{i: "Exam period"},
		// 12
		{w: "PW: Part 6", i: "Exam period"},
		{w: "PW: Part 6", i: "Exam period"},
		{w: "PW: Part 6", i: "Exam period"},
		{w: "PW: Part 6", i: "Exam period"},
		{w: "PW: Part 6", i: "Exam period"},
		{i: "Exam period"},
		{w: "PW: Part 7", i: "Exam period, Deadline submit PW for grading."},
	]
  }, null, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/time-plan.html.vue?vue&type=template&id=ea2f1ce2

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/time-plan.html.vue

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

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4dde9732",
  "path": "/courses/android-development/time-plan.html",
  "title": "Time Plan",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "courses/android-development/time-plan.md",
  "git": {
    "updatedTime": 1643556287000
  }
}


/***/ })

};
;
//# sourceMappingURL=1372.app.js.map