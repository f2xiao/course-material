"use strict";
exports.id = 8398;
exports.ids = [8398];
exports.modules = {

/***/ 8398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SampleAnswer)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/SampleAnswer.vue?vue&type=template&id=67516ab0&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "answer" }, _attrs))} data-v-67516ab0>`)
  if ($data.showAnswer) {
    _push(`<div data-v-67516ab0>`)
    ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent)
    _push(`</div>`)
  } else {
    _push(`<div data-v-67516ab0> A sample answer will be shown here ${
      (0,server_renderer.ssrInterpolate)($data.showAfterDate.getFullYear())
    }-${
      (0,server_renderer.ssrInterpolate)($data.showAfterDate.getMonth()+1)
    }-${
      (0,server_renderer.ssrInterpolate)($data.showAfterDate.getDate())
    } ${
      (0,server_renderer.ssrInterpolate)($data.showAfterDate.getHours())
    }:${
      (0,server_renderer.ssrInterpolate)($data.showAfterDate.getMinutes())
    }. </div>`)
  }
  _push(`</div>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/SampleAnswer.vue?vue&type=template&id=67516ab0&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/SampleAnswer.vue?vue&type=script&lang=js

	
	// https://stackoverflow.com/questions/3468607/why-does-settimeout-break-for-large-millisecond-delay-values
	function setTimeoutIfPossible(callback, delayInMs){
		const maxDelayInMs = 2147483647
		if(delayInMs <= maxDelayInMs){
			return setTimeout(callback, delayInMs)
		}
	}
	
	/* harmony default export */ const SampleAnswervue_type_script_lang_js = ({
		props: {
			showAfter: String
		},
		data(){
			
			const now = new Date()
			const showAfterDate = new Date(this.showAfter)
			
			return {
				showAfterDate,
				showAnswer: showAfterDate < now
			}
			
		},
		mounted(){
			
			if(!this.showAnswer){
				
				const now = new Date()
				
				const timeLeftInMs = this.showAfterDate - now
				
				this.timeoutId = setTimeoutIfPossible(() => {
					this.showAnswer = true
				}, timeLeftInMs)
				
			}
			
		},
		
		destroyed(){
			if(this.timeoutId){
				clearTimeout(this.timeoutId)
			}
		}
		
	});

;// CONCATENATED MODULE: ./src/.vuepress/components/SampleAnswer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/SampleAnswer.vue?vue&type=style&index=0&id=67516ab0&scoped=true&lang=css
var SampleAnswervue_type_style_index_0_id_67516ab0_scoped_true_lang_css = __webpack_require__(7436);
;// CONCATENATED MODULE: ./src/.vuepress/components/SampleAnswer.vue?vue&type=style&index=0&id=67516ab0&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/SampleAnswer.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SampleAnswervue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-67516ab0"]])

/* harmony default export */ const SampleAnswer = (__exports__);

/***/ }),

/***/ 7436:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".answer[data-v-67516ab0]{border:.4em solid green;padding:.4em;border-radius:.5em;background-color:silver;color:#000}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/SampleAnswer.vue"],"names":[],"mappings":"AAEC,yBACC,uBAAyB,CACzB,YAAc,CACd,kBAAoB,CACpB,uBAAwB,CACxB,UACD","sourcesContent":["\r\n\t\r\n\t.answer{\r\n\t\tborder: 0.4em solid green;\r\n\t\tpadding: 0.4em;\r\n\t\tborder-radius: 0.5em;\r\n\t\tbackground-color: silver;\r\n\t\tcolor: black;\r\n\t}\r\n\t\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=8398.app.js.map