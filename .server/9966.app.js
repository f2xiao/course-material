"use strict";
exports.id = 9966;
exports.ids = [9966];
exports.modules = {

/***/ 9966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SleepButton)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/SleepButton.vue?vue&type=template&id=584879c8


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${(0,server_renderer.ssrRenderAttrs)(_attrs)}>`)
  ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</button>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/SleepButton.vue?vue&type=template&id=584879c8

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/SleepButton.vue?vue&type=script&lang=js

/* harmony default export */ const SleepButtonvue_type_script_lang_js = ({
	
	props: {
		sleepMs: Number
	},
	
	methods: {
		sleep(){
			const timeToWakeUp = Date.now() + this.sleepMs
			let i = 0;
			while(Date.now() < timeToWakeUp){
				// Do nothing
				i++;
			}
			// Need to log this, otherwise will the compiler optimize and remove the loop.
			console.log(`SleepButton.sleep() did ${i} iterations.`)
		}
	}
	
});

;// CONCATENATED MODULE: ./src/.vuepress/components/SleepButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/SleepButton.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SleepButtonvue_type_script_lang_js, [['ssrRender',ssrRender]])

/* harmony default export */ const SleepButton = (__exports__);

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
//# sourceMappingURL=9966.app.js.map