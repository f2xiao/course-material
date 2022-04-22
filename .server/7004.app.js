"use strict";
exports.id = 7004;
exports.ids = [7004];
exports.modules = {

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExamQuestion)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/ExamQuestion.vue?vue&type=template&id=0ca22fef&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "exam-question" }, _attrs))} data-v-0ca22fef><div class="question" data-v-0ca22fef><h2 data-v-0ca22fef>Question</h2>`)
  ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "question", {}, null, _push, _parent)
  _push(`</div>`)
  if (_ctx.$slots['sample-answer']) {
    _push(`<div class="sample-answer" data-v-0ca22fef><h2 data-v-0ca22fef>Sample answer</h2>`)
    ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "sample-answer", {}, null, _push, _parent)
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  if (_ctx.$slots['marking-guidelines']) {
    _push(`<div class="marking-guidelines" data-v-0ca22fef><h2 data-v-0ca22fef>Marking guidelines</h2>`)
    ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "marking-guidelines", {}, null, _push, _parent)
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/ExamQuestion.vue?vue&type=template&id=0ca22fef&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/ExamQuestion.vue?vue&type=script&lang=js

	/* harmony default export */ const ExamQuestionvue_type_script_lang_js = ({
		props: {
			caption: String
		}
	});

;// CONCATENATED MODULE: ./src/.vuepress/components/ExamQuestion.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/ExamQuestion.vue?vue&type=style&index=0&id=0ca22fef&scoped=true&lang=css
var ExamQuestionvue_type_style_index_0_id_0ca22fef_scoped_true_lang_css = __webpack_require__(4014);
;// CONCATENATED MODULE: ./src/.vuepress/components/ExamQuestion.vue?vue&type=style&index=0&id=0ca22fef&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/ExamQuestion.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ExamQuestionvue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-0ca22fef"]])

/* harmony default export */ const ExamQuestion = (__exports__);

/***/ }),

/***/ 4014:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".exam-question[data-v-0ca22fef]{border:3px solid #000}.marking-guidelines[data-v-0ca22fef],.question[data-v-0ca22fef],.sample-answer[data-v-0ca22fef]{border:3px solid #000;padding:.5em}.question[data-v-0ca22fef]{background-color:rgba(255,255,0,.08)}.sample-answer[data-v-0ca22fef]{background-color:rgba(0,255,0,.08)}.marking-guidelines[data-v-0ca22fef]{background-color:rgba(255,0,0,.08)}h2[data-v-0ca22fef]{margin:0;font-size:1.1em}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/ExamQuestion.vue"],"names":[],"mappings":"AAEC,gCACC,qBACD,CAEA,gGACC,qBAAuB,CACvB,YACD,CAEA,2BACC,oCACD,CAEA,gCACC,kCACD,CAEA,qCACC,kCACD,CAEA,oBACC,QAAS,CACT,eACD","sourcesContent":["\r\n\t\r\n\t.exam-question{\r\n\t\tborder: 3px solid black;\r\n\t}\r\n\t\r\n\t.question, .sample-answer, .marking-guidelines{\r\n\t\tborder: 3px solid black;\r\n\t\tpadding: 0.5em;\r\n\t}\r\n\t\r\n\t.question{\r\n\t\tbackground-color: rgba(255, 255, 0, 0.08)\r\n\t}\r\n\t\r\n\t.sample-answer{\r\n\t\tbackground-color: rgba(0, 255, 0, 0.08)\r\n\t}\r\n\t\r\n\t.marking-guidelines{\r\n\t\tbackground-color: rgba(255, 0, 0, 0.08)\r\n\t}\r\n\t\r\n\th2{\r\n\t\tmargin: 0;\r\n\t\tfont-size: 1.1em;\r\n\t}\r\n\t\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=7004.app.js.map