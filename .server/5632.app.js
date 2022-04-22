"use strict";
exports.id = 5632;
exports.ids = [5632];
exports.modules = {

/***/ 9614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AcademicYearFigure)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/AcademicYearFigure.vue?vue&type=template&id=3f8f8a81&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")

  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, (0,external_vue_.mergeProps)({ caption: "Study periods and re-exam periods in an academic year. Big circular sectors are study periods, small circular sectors are (re-)exam periods. Blue circle sectors are part of period 1. Green circle sectors are part of period 2. Yellow circle sectors are part of period 3. Red circle sectors are part of period 4." }, _attrs), {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<canvas width="350" height="350" data-v-3f8f8a81${_scopeId}></canvas>`)
      } else {
        return [
          (0,external_vue_.createVNode)("canvas", {
            ref: "canvas",
            width: "350",
            height: "350"
          }, null, 512)
        ]
      }
    }),
    _: 1
  }, _parent))
}
;// CONCATENATED MODULE: ./src/.vuepress/components/AcademicYearFigure.vue?vue&type=template&id=3f8f8a81&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/AcademicYearFigure.vue?vue&type=script&lang=js


const circleSectors = [{
	numberOfWeeks: 7,
	title: "Study Period 1",
	color: "blue"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 1",
	color: "blue"
}, {
	numberOfWeeks: 8,
	title: "Study Period 2",
	color: "green"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 2",
	color: "green"
}, {
	numberOfWeeks: 2,
	title: "Winter Holidays",
	color: "purple"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 1",
	color: "blue"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 4",
	color: "red"
}, {
	numberOfWeeks: 4,
	title: "Study Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 1,
	title: "Re-exam Period 2",
	color: "green"
}, {
	numberOfWeeks: 4,
	title: "Study Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 9,
	title: "Study Period 4",
	color: "red"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 4",
	color: "red"
}, {
	numberOfWeeks: 1,
	title: "Re-exam Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 9,
	title: "Summer Holidays",
	color: "purple"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 1",
	color: "blue"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 2",
	color: "green"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 4",
	color: "red"
}]

const numberOfWeeks = 52
const startWeek = 34

/* harmony default export */ const AcademicYearFigurevue_type_script_lang_js = ({
	mounted() {
		
		const canvas = this.$refs.canvas
		const context = canvas.getContext("2d")
		
		const width = canvas.clientWidth
		const height = canvas.clientHeight
		
		const centerX = width/2
		const centerY = height/2
		const radius = width/2 - 4
		
		context.strokeStyle = "black"
		context.lineWidth = 5	
		let angleOffset = Math.PI*2 * (startWeek/numberOfWeeks - 0.25)
		
		for(const circleSector of circleSectors){
			
			const angleSize = 2*Math.PI * (circleSector.numberOfWeeks / numberOfWeeks)
			
			
			if(circleSector.color != "purple"){
				
				context.fillStyle = circleSector.color
				
				context.beginPath()
				context.moveTo(centerX, centerY)
				context.arc(
					centerX,
					centerY,
					radius,
					angleOffset,
					angleOffset + angleSize
				)
				context.lineTo(centerX, centerY)
				context.stroke()
				context.fill()
				
			}
			
			angleOffset += angleSize
			
		}
	}
});

;// CONCATENATED MODULE: ./src/.vuepress/components/AcademicYearFigure.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/AcademicYearFigure.vue?vue&type=style&index=0&id=3f8f8a81&scoped=true&lang=css
var AcademicYearFigurevue_type_style_index_0_id_3f8f8a81_scoped_true_lang_css = __webpack_require__(5078);
;// CONCATENATED MODULE: ./src/.vuepress/components/AcademicYearFigure.vue?vue&type=style&index=0&id=3f8f8a81&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/AcademicYearFigure.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AcademicYearFigurevue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-3f8f8a81"]])

/* harmony default export */ const AcademicYearFigure = (__exports__);

/***/ }),

/***/ 5078:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "canvas[data-v-3f8f8a81]{max-width:100%}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/AcademicYearFigure.vue"],"names":[],"mappings":"AAEA,wBACC,cACD","sourcesContent":["\r\n\r\ncanvas{\r\n\tmax-width: 100%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=5632.app.js.map