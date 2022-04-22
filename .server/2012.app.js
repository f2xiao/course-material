"use strict";
exports.id = 2012;
exports.ids = [2012];
exports.modules = {

/***/ 2012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RenderMermaid)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/RenderMermaid.vue?vue&type=template&id=78c3786c&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
      class: "mermaid",
      ref: "mermaidDiv"
    }, _attrs))
  } data-v-78c3786c>${
    $data.graphSvgCode
  }</div>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/RenderMermaid.vue?vue&type=template&id=78c3786c&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/RenderMermaid.vue?vue&type=script&lang=js


const getMermaid = (function(){
	
	let loadMermaidPromise = null
	
	return async function loadMermaid(){
		
		if(loadMermaidPromise == null){
			
			loadMermaidPromise = __webpack_require__.e(/* import() */ 6614).then(__webpack_require__.t.bind(__webpack_require__, 6614, 23))
			
			const mermaid = await loadMermaidPromise
		
			mermaid.mermaidAPI.initialize({
				startOnLoad: false
			})
			
		}
		
		return await loadMermaidPromise
		
	}
	
})()

/* harmony default export */ const RenderMermaidvue_type_script_lang_js = ({
	props: {
		graphDefinition: String
	},
	data(){
		return {
			graphSvgCode: ""
		}
	},
	async	mounted() {
		
		const mermaid = await getMermaid()
		
		const insertSvg = (svgCode, bindFunctions) => {
			this.graphSvgCode = svgCode
		}
		
		const graph = mermaid.mermaidAPI.render(
			'graphDiv',
			this.graphDefinition.trim(),
			insertSvg
		)
		
	}
});

;// CONCATENATED MODULE: ./src/.vuepress/components/RenderMermaid.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/RenderMermaid.vue?vue&type=style&index=0&id=78c3786c&scoped=true&lang=css
var RenderMermaidvue_type_style_index_0_id_78c3786c_scoped_true_lang_css = __webpack_require__(2299);
;// CONCATENATED MODULE: ./src/.vuepress/components/RenderMermaid.vue?vue&type=style&index=0&id=78c3786c&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/RenderMermaid.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RenderMermaidvue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-78c3786c"]])

/* harmony default export */ const RenderMermaid = (__exports__);

/***/ }),

/***/ 2299:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mermaid[data-v-78c3786c]{text-align:center}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/RenderMermaid.vue"],"names":[],"mappings":"AAEA,0BACC,iBACD","sourcesContent":["\r\n\r\n.mermaid{\r\n\ttext-align: center;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=2012.app.js.map