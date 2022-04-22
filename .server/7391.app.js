"use strict";
exports.id = 7391;
exports.ids = [7391];
exports.modules = {

/***/ 6131:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/time-plan.html.vue?vue&type=template&id=fd727d14



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TimePlan = (0,external_vue_.resolveComponent)("TimePlan")

  _push(`<!--[--><h1 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h1><p>The <span style="${
    (0,server_renderer.ssrRenderStyle)({"background-color":"#00ffff75","display":"inline-block","padding":"0 8px","font-weight":"bold"})
  }">Exercise</span> and <span style="${
    (0,server_renderer.ssrRenderStyle)({"background-color":"#ffff0070","display":"inline-block","padding":"0 8px","font-weight":"bold"})
  }">Lab</span> columns indicate what you are expected to work on each day.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TimePlan, {
    startDate: new Date(2021, 9, 25),
    columns: [
		{key: "t", name: "Lecture", color: "#ffa5009c"},
		{key: "e", name: "Exercise", color: "#00ffff75"},
		{key: "l", name: "Lab", color: "#ffff0070"},
		{key: "g", name: "Lab session", color: "#80008082"},
		{key: "i", name: "Important", color: "#ff000094"},
	],
    rows: [
		// 1
		{e: "Exercise 0", t: "Introduction"},
		{e: "Exercise 0", t: "Tutorial 0", g: "Group 1"},
		{e: "Exercise 1"},
		{e: "Exercise 1", g: "Group 2, 3"},
		{e: "Exercise 1"},
		{},
		{},
		// 2
		{l: "Lab 1", t: "Tutorial 1"},
		{l: "Lab 1", t: "Repetition", g: "Group 1"},
		{l: "Lab 1"},
		{e: "Exercise 2", g: "Group 2, 3"},
		{e: "Exercise 2"},
		{},
		{},
		// 3
		{l: "Lab 2", t: "Tutorial 2"},
		{l: "Lab 2", t: "Repetition", g: "Group 1"},
		{l: "Lab 2"},
		{e: "Exercise 3", g: "Group 2, 3"},
		{e: "Exercise 3"},
		{},
		{},
		// 4
		{l: "Lab 3", t: "Tutorial 3", i: "Exam Registration Opens"},
		{l: "Lab 3", t: "Repetition", g: "Group 1"},
		{l: "Lab 3", g: "Group 2"},
		{e: "Exercise 4", g: "Group 3"},
		{e: "Exercise 4"},
		{},
		{},
		// 5
		{l: "Lab 4", t: "Tutorial 4"},
		{l: "Lab 4", t: "Repetition", g: "Group 1, 2"},
		{l: "Lab 4"},
		{e: "Exercise 5", g: "Group 3"},
		{e: "Exercise 5"},
		{},
		{},
		// 6
		{l: "Lab 5", t: "Tutorial 5"},
		{l: "Lab 5", t: "Repetition", g: "Group 1"},
		{l: "Lab 5"},
		{e: "Exercise 6", g: "Group 2, 3"},
		{e: "Exercise 6"},
		{},
		{i: "Exam Registration Closes around now"},
		// 7
		{l: "Lab 6", t: "Tutorial 6"},
		{l: "Lab 6", t: "Sample exam", g: "Group 1"},
		{l: "Lab 6"},
		{l: "Lab 6", g: "Group 2, 3"},
		{l: "Lab 6"},
		{},
		{},
		// 8
		{},
		{},
		{i: "Written Exam"},
		{},
		{},
		{},
		{},
	]
  }, null, _parent))
  _push(`</p><p>There will also be an extra lab session in the first half of January where you can come and present your labs to a teacher (more details will be announced later).</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/time-plan.html.vue?vue&type=template&id=fd727d14

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/time-plan.html.vue

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

/***/ 3746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-41d84619",
  "path": "/courses/introduction-to-script-programming/time-plan.html",
  "title": "Time Plan",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "courses/introduction-to-script-programming/time-plan.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=7391.app.js.map