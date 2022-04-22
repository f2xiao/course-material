"use strict";
exports.id = 9660;
exports.ids = [9660];
exports.modules = {

/***/ 9660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Figure)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Figure.vue?vue&type=template&id=c2e176ba&scoped=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<figure${(0,server_renderer.ssrRenderAttrs)(_attrs)} data-v-c2e176ba>`)
  ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`<figcaption data-v-c2e176ba>${(0,server_renderer.ssrInterpolate)($props.caption)}</figcaption><span class="incrementFigureNumber" data-v-c2e176ba></span></figure>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/Figure.vue?vue&type=template&id=c2e176ba&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Figure.vue?vue&type=script&lang=js

	/* harmony default export */ const Figurevue_type_script_lang_js = ({
		props: {
			caption: String
		}
	});

;// CONCATENATED MODULE: ./src/.vuepress/components/Figure.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Figure.vue?vue&type=style&index=0&id=c2e176ba&lang=css
var Figurevue_type_style_index_0_id_c2e176ba_lang_css = __webpack_require__(4322);
;// CONCATENATED MODULE: ./src/.vuepress/components/Figure.vue?vue&type=style&index=0&id=c2e176ba&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Figure.vue?vue&type=style&index=1&id=c2e176ba&scoped=true&lang=css
var Figurevue_type_style_index_1_id_c2e176ba_scoped_true_lang_css = __webpack_require__(7800);
;// CONCATENATED MODULE: ./src/.vuepress/components/Figure.vue?vue&type=style&index=1&id=c2e176ba&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Figure.vue?vue&type=style&index=2&id=c2e176ba&lang=css
var Figurevue_type_style_index_2_id_c2e176ba_lang_css = __webpack_require__(1034);
;// CONCATENATED MODULE: ./src/.vuepress/components/Figure.vue?vue&type=style&index=2&id=c2e176ba&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/Figure.vue




;




const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Figurevue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-c2e176ba"]])

/* harmony default export */ const Figure = (__exports__);

/***/ }),

/***/ 4322:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{counter-reset:figureNumber;counter-increment:figureNumber}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/Figure.vue"],"names":[],"mappings":"AACC,KACC,0BAA2B,CAC3B,8BACD","sourcesContent":["\r\n\tbody{\r\n\t\tcounter-reset: figureNumber;\r\n\t\tcounter-increment: figureNumber; /* Start on 1 instead of 0. */\r\n\t}\r\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 7800:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "figcaption[data-v-c2e176ba]::before{content:\"Figure \" counter(figureNumber) \" \";font-weight:700}.incrementFigureNumber[data-v-c2e176ba]{counter-increment:figureNumber}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/Figure.vue"],"names":[],"mappings":"AAEC,oCACC,2CAA4C,CAC5C,eACD,CAEA,wCACC,8BACD","sourcesContent":["\r\n\t\r\n\tfigcaption::before{\r\n\t\tcontent: \"Figure \" counter(figureNumber) \" \";\r\n\t\tfont-weight: bold;\r\n\t}\r\n\t\r\n\t.incrementFigureNumber{\r\n\t\tcounter-increment: figureNumber;\r\n\t}\r\n\t\r\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 1034:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mermaid svg{max-width:100%}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/Figure.vue"],"names":[],"mappings":"AAEA,aACC,cACD","sourcesContent":["\r\n\r\n.mermaid svg{\r\n\tmax-width: 100%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=9660.app.js.map