"use strict";
exports.id = 4764;
exports.ids = [4764];
exports.modules = {

/***/ 4700:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-fundamentals/time-plan.html.vue?vue&type=template&id=5c117c1c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TimePlan = (0,external_vue_.resolveComponent)("TimePlan")

  _push(`<!--[--><h1 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h1><p>The <span style="${
    (0,server_renderer.ssrRenderStyle)({"background-color":"#80008082","display":"inline-block","padding":"0 8px","font-weight":"bold"})
  }">Exercise</span> and <span style="${
    (0,server_renderer.ssrRenderStyle)({"background-color":"#00ffff54","display":"inline-block","padding":"0 8px","font-weight":"bold"})
  }">Project Work</span> column indicates what you are expected to work on each day.</p><div class="custom-container tip"><p class="custom-container-title">Weekly Announcements</p><p>In the beginning of each week a new announcement message will be posted on the course&#39;s Canvas page to let you know what you are expected to work on that week.</p></div><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TimePlan, {
    startDate: new Date(2021, 7, 30),
    columns: [
		{key: "l", name: "Lectures", color: "#ffa5009c"},
		{key: "s", name: "Lab Sessions", color: "#ffff0070"},
		{key: "e", name: "Exercise", color: "#80008082"},
		{key: "p", name: "Project Work", color: "#00ffff75"},
		{key: "i", name: "Important", color: "#ff000094"},
	],
    rows: [
		// 35
		{l: "Introduction", e: "1"},
		{l: "Tutorial 1: HTTP & HTML", e: "1"},
		{s: "Group 1, 3", e: "1", p: "Part 1: Spec."},
		{s: "Group 2", e: "1", p: "Part 1: Spec."},
		{p: "Part 1: Spec."},
		{},
		{},
		// 36
		{p: "Part 2: GUI", e: "2"},
		{p: "Part 2: GUI", l: "Tutorial 2: CSS", e: "2"},
		{s: "Group 1, 3", e: "2", p: "Part 2: GUI"},
		{s: "Group 2", e: "2", p: "Part 2: GUI"},
		{p: "Part 2: GUI"},
		{},
		{},
		// 37
		{p: "Part 3: App", l: "Tutorial 3: Express", e: "3"},
		{p: "Part 3: App", e: "3"},
		{s: "Group 1, 3", p: "Part 3: App", e: "3"},
		{s: "Group 2", p: "Part 3: App", e: "3", i: "Exam registration open!"},
		{p: "Part 3: App"},
		{},
		{},
		// 38
		{p: "Part 4: SQLite"},
		{p: "Part 4: SQLite", l: "Tutorial 4: SQLite"},
		{s: "Group 1, 3", p: "Part 4: SQLite"},
		{s: "Group 2", p: "Part 5: Forms"},
		{p: "Part 5: Forms"},
		{},
		{},
		// 39
		{p: "Part 5: Forms"},
		{p: "Part 6: Errors", l: "Tutorial 5: Cookies & Sessions"},
		{s: "Group 1, 3", p: "Part 6: Errors"},
		{s: "Group 2", p: "Part 6: Errors"},
		{p: "Part 7: Auth"},
		{},
		{i: "Deadline Submit Project Report for Feedback"},
		// 40
		{p: "Part 7: Auth"},
		{p: "Part 7: Auth", l: "Tutorial 6: Security"},
		{s: "Group 1", p: "Part 8: Security"},
		{s: "Group 2, 3", p: "Part 8: Security", i: "Exam registration closes around now."},
		{p: "Part 8: Security"},
		{},
		{},
		// 41
		{p: "Part 9: Optional"},
		{l: "Sample Exam/Repetition", p: "Part 9: Optional"},
		{s: "Group 1, 3", p: "Part 9: Optional"},
		{s: "Group 2", p: "Part 10: Deploy"},
		{p: "Part 10: Deploy"},
		{},
		{},
		// 42
		{p: "Part 11: Demonstration", i: "Project Work Demonstration, Exam"},
		{p: "Part 11: Demonstration", i: "Project Work Demonstration"},
		{p: "Part 11: Demonstration", i: "Project Work Demonstration"},
		{p: "Part 11: Demonstration", i: "Project Work Demonstration"},
		{p: "Part 11: Demonstration", i: "Project Work Demonstration"},
		{},
		{p: "Part 12: Submitting", i: "Deadline Submit Project Work on Canvas"},
	]
  }, null, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/time-plan.html.vue?vue&type=template&id=5c117c1c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/time-plan.html.vue

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

/***/ 4028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3459e794",
  "path": "/courses/web-development-fundamentals/time-plan.html",
  "title": "Time Plan",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "courses/web-development-fundamentals/time-plan.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=4764.app.js.map