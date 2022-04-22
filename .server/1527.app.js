"use strict";
exports.id = 1527;
exports.ids = [1527];
exports.modules = {

/***/ 1527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FigureNumber)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/FigureNumber.vue?vue&type=template&id=6169d342&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "whole" }, _attrs))} data-v-6169d342>`)
  if ($props.previous) {
    _push(`<span class="decrementFigureNumber" data-v-6169d342></span>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<span class="figureNumber" data-v-6169d342></span>`)
  if ($props.previous) {
    _push(`<span class="incrementFigureNumber" data-v-6169d342></span>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</span>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/FigureNumber.vue?vue&type=template&id=6169d342&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/FigureNumber.vue?vue&type=script&lang=js

/* harmony default export */ const FigureNumbervue_type_script_lang_js = ({
	props: {
		previous: {
			type: Boolean,
			default: false
		}
	}
});

;// CONCATENATED MODULE: ./src/.vuepress/components/FigureNumber.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/FigureNumber.vue?vue&type=style&index=0&id=6169d342&scoped=true&lang=css
var FigureNumbervue_type_style_index_0_id_6169d342_scoped_true_lang_css = __webpack_require__(9674);
;// CONCATENATED MODULE: ./src/.vuepress/components/FigureNumber.vue?vue&type=style&index=0&id=6169d342&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/FigureNumber.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(FigureNumbervue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-6169d342"]])

/* harmony default export */ const FigureNumber = (__exports__);

/***/ }),

/***/ 9674:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".figureNumber[data-v-6169d342]::before{content:\"Figure \" counter(figureNumber)}.incrementFigureNumber[data-v-6169d342]{counter-increment:figureNumber}.decrementFigureNumber[data-v-6169d342]{counter-increment:figureNumber -1}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/FigureNumber.vue"],"names":[],"mappings":"AAEC,uCACC,uCACD,CAEA,wCACC,8BACD,CAEA,wCACC,iCACD","sourcesContent":["\r\n\t\r\n\t.figureNumber::before{\r\n\t\tcontent: \"Figure \" counter(figureNumber);\r\n\t}\r\n\t\r\n\t.incrementFigureNumber{\r\n\t\tcounter-increment: figureNumber;\r\n\t}\r\n\t\r\n\t.decrementFigureNumber{\r\n\t\tcounter-increment: figureNumber -1;\r\n\t}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=1527.app.js.map