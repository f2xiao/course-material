"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TimePlan)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/TimePlan.vue?vue&type=template&id=0106542e&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0,server_renderer.ssrRenderAttrs)(_attrs)} data-v-0106542e><table data-v-0106542e><!--[-->`)
  ;(0,server_renderer.ssrRenderList)($data.weeks, (week) => {
    _push(`<!--[--><tr data-v-0106542e><td${
      (0,server_renderer.ssrRenderAttr)("title", `Course Week ${week.relativeWeekNumber}`)
    } data-v-0106542e>Week ${
      (0,server_renderer.ssrInterpolate)(week.relativeWeekNumber)
    }</td><td${
      (0,server_renderer.ssrRenderAttr)("title", `Year Week ${week.realWeekNumber}`)
    } data-v-0106542e>Week ${
      (0,server_renderer.ssrInterpolate)(week.realWeekNumber)
    }</td><!--[-->`)
    ;(0,server_renderer.ssrRenderList)($data.headers, (header) => {
      _push(`<td data-v-0106542e>${(0,server_renderer.ssrInterpolate)(header)}</td>`)
    })
    _push(`<!--]--></tr><!--[-->`)
    ;(0,server_renderer.ssrRenderList)(week.days, (day) => {
      _push(`<tr class="${
        (0,server_renderer.ssrRenderClass)({hasPassed: day.hasPassed})
      }" data-v-0106542e><td data-v-0106542e>${
        (0,server_renderer.ssrInterpolate)(day.weekday)
      }</td><td data-v-0106542e>${
        (0,server_renderer.ssrInterpolate)(day.date)
      }</td><!--[-->`)
      ;(0,server_renderer.ssrRenderList)(day.tasks, (task) => {
        _push(`<td data-v-0106542e>${(0,server_renderer.ssrInterpolate)(task)}</td>`)
      })
      _push(`<!--]--></tr>`)
    })
    _push(`<!--]--><!--]-->`)
  })
  _push(`<!--]--></table><!--[-->`)
  ;(0,server_renderer.ssrRenderList)($props.columns, (column, index) => {
    ;(0,server_renderer.ssrRenderVNode)(_push, (0,external_vue_.createVNode)((0,external_vue_.resolveDynamicComponent)('style'), {
      scoped: "",
      key: column.key
    }, {
      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(` td:nth-child(${
            (0,server_renderer.ssrInterpolate)(3+index)
          }):not(:empty){ background-color: ${
            (0,server_renderer.ssrInterpolate)(column.color)
          }; } `)
        } else {
          return [
            (0,external_vue_.createTextVNode)(" td:nth-child(" + (0,external_vue_.toDisplayString)(3+index) + "):not(:empty){ background-color: " + (0,external_vue_.toDisplayString)(column.color) + "; } ", 1)
          ]
        }
      }),
      _: 2
    }), _parent)
  })
  _push(`<!--]--></div>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/TimePlan.vue?vue&type=template&id=0106542e&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/TimePlan.vue?vue&type=script&lang=js


// https://stackoverflow.com/a/6117889/2104665 (return value modified here)
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return week number
    return weekNo;
}

function dateToString(date){
	
	const year = date.getFullYear()
	
	const m = date.getMonth() + 1
	const month = m < 10 ? "0"+m : m
	
	const d = date.getDate()
	const day = d < 10 ? "0"+d : d
	
	return year+"-"+month+"-"+day
	
}

/* harmony default export */ const TimePlanvue_type_script_lang_js = ({
	props: {
		startDate: Date,
		columns: Array,
		rows: Array
	},
	data(){
		
		const yesterDay = new Date()
		yesterDay.setDate(yesterDay.getDate()-1)
		
		const headers = this.columns.map(c => c.name)
		const weekDays = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
		
		const startWeek = getWeekNumber(this.startDate)
		const numberOfWeeks = this.rows.length/7
		const weeks = []
		
		for(let relativeWeekNumber=1; relativeWeekNumber<=numberOfWeeks; relativeWeekNumber++){
			
			const days = []
			
			const beginR = (relativeWeekNumber-1)*7
			const endR = relativeWeekNumber*7
			
			for(let r=beginR; r<endR; r++){
				
				const date = new Date(this.startDate)
				date.setDate(date.getDate() + r)
				
				days.push({
					weekday: weekDays[date.getDay()],
					hasPassed: date < yesterDay,
					date: dateToString(date),
					tasks: this.columns.map(
						c => this.rows[r][c.key] || ""
					)
				})
				
			} 
			weeks.push({
				relativeWeekNumber,
				realWeekNumber: getWeekNumber(this.startDate) + relativeWeekNumber - 1,
				days
			})
			
		}
		
		return {
			weeks,
			headers
		}
		
	}
});

;// CONCATENATED MODULE: ./src/.vuepress/components/TimePlan.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/TimePlan.vue?vue&type=style&index=0&id=0106542e&scoped=true&lang=css
var TimePlanvue_type_style_index_0_id_0106542e_scoped_true_lang_css = __webpack_require__(9414);
;// CONCATENATED MODULE: ./src/.vuepress/components/TimePlan.vue?vue&type=style&index=0&id=0106542e&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/TimePlan.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TimePlanvue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-0106542e"]])

/* harmony default export */ const TimePlan = (__exports__);

/***/ }),

/***/ 9414:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "table[data-v-0106542e]{white-space:nowrap;font-size:90%;margin-bottom:0;margin-top:0;max-width:100%}tr[data-v-0106542e]:nth-child(8n+1){font-weight:700;font-size:100%}tr:nth-child(8n+1) td[data-v-0106542e]:nth-child(1),tr:nth-child(8n+1) td[data-v-0106542e]:nth-child(2){background-color:var(--c-tip)}.hasPassed[data-v-0106542e]{text-decoration:line-through;background-color:gray}@media print{table[data-v-0106542e]{font-size:60%}}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/TimePlan.vue"],"names":[],"mappings":"AAEC,uBACC,kBAAmB,CACnB,aAAc,CACd,eAAgB,CAChB,YAAa,CACb,cACD,CAEA,oCACC,eAAiB,CACjB,cACD,CAEA,wGACC,6BACD,CAEA,4BACC,4BAA6B,CAC7B,qBACD,CAEA,aACC,uBACC,aACD,CACD","sourcesContent":["\r\n\t\r\n\ttable{\r\n\t\twhite-space: nowrap;\r\n\t\tfont-size: 90%;\r\n\t\tmargin-bottom: 0;\r\n\t\tmargin-top: 0;\r\n\t\tmax-width: 100%;\r\n\t}\r\n\t\r\n\ttr:nth-child(8n+1){\r\n\t\tfont-weight: bold;\r\n\t\tfont-size: 100%;\r\n\t}\r\n\t\r\n\ttr:nth-child(8n+1) td:nth-child(1), tr:nth-child(8n+1) td:nth-child(2){\r\n\t\tbackground-color: var(--c-tip);\r\n\t}\r\n\t\r\n\t.hasPassed{\r\n\t\ttext-decoration: line-through;\r\n\t\tbackground-color: gray;\r\n\t}\r\n\t\r\n\t@media print{\r\n\t\ttable{\r\n\t\t\tfont-size: 60%;\r\n\t\t}\r\n\t}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=558.app.js.map