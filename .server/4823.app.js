"use strict";
exports.id = 4823;
exports.ids = [4823];
exports.modules = {

/***/ 4823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReportMistake)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/ReportMistake.vue?vue&type=template&id=3ebfe3e8&scoped=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0,server_renderer.ssrRenderAttrs)(_attrs)} data-v-3ebfe3e8><fieldset class="mistake" data-v-3ebfe3e8><legend data-v-3ebfe3e8>Mistake</legend>`)
  ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "mistake", {}, null, _push, _parent)
  if (_ctx.$slots['example-1-bad']) {
    _push(`<table data-v-3ebfe3e8><thead data-v-3ebfe3e8><tr data-v-3ebfe3e8><th class="dont" data-v-3ebfe3e8>Don&#39;t</th><th class="do" data-v-3ebfe3e8>Do</th></tr></thead><tbody data-v-3ebfe3e8><tr data-v-3ebfe3e8><td data-v-3ebfe3e8>`)
    ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "example-1-bad", {}, null, _push, _parent)
    _push(`</td><td data-v-3ebfe3e8>`)
    ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "example-1-good", {}, null, _push, _parent)
    _push(`</td></tr>`)
    if (_ctx.$slots['example-2-bad']) {
      _push(`<tr data-v-3ebfe3e8><td data-v-3ebfe3e8>`)
      ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "example-2-bad", {}, null, _push, _parent)
      _push(`</td><td data-v-3ebfe3e8>`)
      ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "example-2-good", {}, null, _push, _parent)
      _push(`</td></tr>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</tbody></table>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</fieldset><fieldset class="problem" data-v-3ebfe3e8><legend data-v-3ebfe3e8>Problem</legend>`)
  ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "problem", {}, null, _push, _parent)
  _push(`</fieldset><fieldset class="solution" data-v-3ebfe3e8><legend data-v-3ebfe3e8>Solution</legend>`)
  ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "solution", {}, null, _push, _parent)
  _push(`</fieldset></div>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/ReportMistake.vue?vue&type=template&id=3ebfe3e8&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/ReportMistake.vue?vue&type=script&lang=js

	/* harmony default export */ const ReportMistakevue_type_script_lang_js = ({
	});

;// CONCATENATED MODULE: ./src/.vuepress/components/ReportMistake.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/ReportMistake.vue?vue&type=style&index=0&id=3ebfe3e8&scoped=true&lang=css
var ReportMistakevue_type_style_index_0_id_3ebfe3e8_scoped_true_lang_css = __webpack_require__(2608);
;// CONCATENATED MODULE: ./src/.vuepress/components/ReportMistake.vue?vue&type=style&index=0&id=3ebfe3e8&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/ReportMistake.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ReportMistakevue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-3ebfe3e8"]])

/* harmony default export */ const ReportMistake = (__exports__);

/***/ }),

/***/ 2608:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".do[data-v-3ebfe3e8],.dont[data-v-3ebfe3e8]{background-color:#ff0000a8;width:50%}.do[data-v-3ebfe3e8]{background-color:#00ff00a1}legend[data-v-3ebfe3e8]{font-weight:700}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/ReportMistake.vue"],"names":[],"mappings":"AAEA,4CACC,0BAA2B,CAC3B,SACD,CAEA,qBACC,0BAED,CAEA,wBACC,eACD","sourcesContent":["\r\n\r\n.dont{\r\n\tbackground-color: #ff0000a8;\r\n\twidth: 50%;\r\n}\r\n\r\n.do{\r\n\tbackground-color: #00ff00a1;\r\n\twidth: 50%;\r\n}\r\n\r\nlegend{\r\n\tfont-weight: bold;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=4823.app.js.map