"use strict";
exports.id = 3639;
exports.ids = [3639];
exports.modules = {

/***/ 3639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ StudyGuideInfo)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/StudyGuideInfo.vue?vue&type=template&id=9dd99e30&scoped=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,server_renderer.ssrRenderAttrs)(_attrs)
  } data-v-9dd99e30><p data-v-9dd99e30>This study guide contains information about the implementation of the course. If you ever have any question about something in the course, look for the answer in this study guide or one of the other pages it refers to. If you can&#39;t find the answer to your question, email the course coordinator.</p><dl class="study-guide-information" data-v-9dd99e30><dt data-v-9dd99e30>Course name</dt><dd data-v-9dd99e30>${
    (0,server_renderer.ssrInterpolate)($props.courseName)
  }</dd><dt data-v-9dd99e30>Ladok code</dt><dd data-v-9dd99e30>${
    (0,server_renderer.ssrInterpolate)($props.ladokCode)
  }</dd><dt data-v-9dd99e30>Credits</dt><dd data-v-9dd99e30>${
    (0,server_renderer.ssrInterpolate)($props.credits)
  }</dd>`)
  if ($props.year) {
    _push(`<dt data-v-9dd99e30>Year</dt>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.year) {
    _push(`<dd data-v-9dd99e30>${(0,server_renderer.ssrInterpolate)($props.year)}</dd>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<dt data-v-9dd99e30>Course coordinator</dt><dd data-v-9dd99e30>${
    (0,server_renderer.ssrInterpolate)($props.courseCoordinator)
  }</dd><dt data-v-9dd99e30>Examiner</dt><dd data-v-9dd99e30>${
    (0,server_renderer.ssrInterpolate)($props.examiner)
  }</dd>`)
  if ($props.pingPongEvent) {
    _push(`<dt data-v-9dd99e30>Ping Pong event</dt>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.pingPongEvent) {
    _push(`<dd data-v-9dd99e30>${(0,server_renderer.ssrInterpolate)($props.pingPongEvent)}</dd>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.pingPongPassword) {
    _push(`<dt data-v-9dd99e30>Ping Pong password</dt>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.pingPongPassword) {
    _push(`<dd data-v-9dd99e30>${(0,server_renderer.ssrInterpolate)($props.pingPongPassword)}</dd>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.canvasCourseId) {
    _push(`<dt data-v-9dd99e30>Canvas Course</dt>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.canvasCourseId) {
    _push(`<dd data-v-9dd99e30><a${
      (0,server_renderer.ssrRenderAttr)("href", 'https://ju.instructure.com/courses/'+$props.canvasCourseId)
    } target="_blank" data-v-9dd99e30>${
      (0,server_renderer.ssrInterpolate)($props.courseName)
    }</a></dd>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.canvasCourses) {
    _push(`<!--[--><dt data-v-9dd99e30>Canvas Course</dt><dd data-v-9dd99e30><ul data-v-9dd99e30><!--[-->`)
    ;(0,server_renderer.ssrRenderList)($props.canvasCourses, (course) => {
      _push(`<li data-v-9dd99e30><a${
        (0,server_renderer.ssrRenderAttr)("href", 'https://ju.instructure.com/courses/'+course.id)
      } target="_blank" data-v-9dd99e30>${
        (0,server_renderer.ssrInterpolate)(course.name)
      }</a></li>`)
    })
    _push(`<!--]--></ul></dd><!--]-->`)
  } else {
    _push(`<!---->`)
  }
  _push(`</dl></div>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/StudyGuideInfo.vue?vue&type=template&id=9dd99e30&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/StudyGuideInfo.vue?vue&type=script&lang=js

	/* harmony default export */ const StudyGuideInfovue_type_script_lang_js = ({
		props: {
			courseName: String,
			ladokCode: String,
			credits: String,
			year: String,
			courseCoordinator: String,
			examiner: String,
			pingPongEvent: String,
			pingPongPassword: String,
			canvasCourseId: String,
			canvasCourses: Array
		}
	});

;// CONCATENATED MODULE: ./src/.vuepress/components/StudyGuideInfo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/StudyGuideInfo.vue?vue&type=style&index=0&id=9dd99e30&scoped=true&lang=css
var StudyGuideInfovue_type_style_index_0_id_9dd99e30_scoped_true_lang_css = __webpack_require__(2721);
;// CONCATENATED MODULE: ./src/.vuepress/components/StudyGuideInfo.vue?vue&type=style&index=0&id=9dd99e30&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/StudyGuideInfo.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(StudyGuideInfovue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-9dd99e30"]])

/* harmony default export */ const StudyGuideInfo = (__exports__);

/***/ }),

/***/ 2721:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "dl[data-v-9dd99e30]{margin:2em;word-wrap:break-word;display:grid;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr;row-gap:1em;-moz-column-gap:1em;column-gap:1em}dt[data-v-9dd99e30]{display:flex;align-items:center}dt[data-v-9dd99e30]:after{content:\":\"}dd[data-v-9dd99e30]{margin-left:0}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/StudyGuideInfo.vue"],"names":[],"mappings":"AAEC,oBACC,UAAW,CACX,oBAAqB,CACrB,YAAa,CACb,6CAAsC,CAAtC,qCAAsC,CACtC,WAAY,CACZ,mBAAe,CAAf,cACD,CAEA,oBACC,YAAa,CACb,kBACD,CAEA,0BACC,WACD,CAEA,oBACC,aACD","sourcesContent":["\r\n\t\r\n\tdl{\r\n\t\tmargin: 2em;\r\n\t\tword-wrap: break-word;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: max-content 1fr;\r\n\t\trow-gap: 1em;\r\n\t\tcolumn-gap: 1em;\r\n\t}\r\n\t\r\n\tdt{\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t}\r\n\t\r\n\tdt:after{\r\n\t\tcontent: \":\";\r\n\t}\r\n\t\r\n\tdd{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\t\r\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


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


/***/ })

};
;
//# sourceMappingURL=3639.app.js.map