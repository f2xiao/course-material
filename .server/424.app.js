"use strict";
exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Teacher)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Teacher.vue?vue&type=template&id=5cc2780a&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "teacher" }, _attrs))
  } data-v-5cc2780a><img${
    (0,server_renderer.ssrRenderAttr)("src", '/course-material/teacher-pictures/'+$props.photo)
  }${
    (0,server_renderer.ssrRenderAttr)("title", 'Photo of '+$props.name+'.')
  }${
    (0,server_renderer.ssrRenderAttr)("alt", 'Photo of '+$props.name+'.')
  } data-v-5cc2780a><p data-v-5cc2780a><b data-v-5cc2780a>${
    (0,server_renderer.ssrInterpolate)($props.roles.join(", "))
  }.</b> ${
    (0,server_renderer.ssrInterpolate)($props.description)
  }</p><ul data-v-5cc2780a>`)
  if ($props.email) {
    _push(`<li data-v-5cc2780a>Email: <a${
      (0,server_renderer.ssrRenderAttr)("href", 'mailto:'+$props.email)
    } data-v-5cc2780a>${
      (0,server_renderer.ssrInterpolate)($props.email)
    }</a></li>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.phone) {
    _push(`<li data-v-5cc2780a>Phone: ${(0,server_renderer.ssrInterpolate)($props.phone)}</li>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.website) {
    _push(`<li data-v-5cc2780a><a${(0,server_renderer.ssrRenderAttr)("href", $props.website)} target="_blank" data-v-5cc2780a>Website</a></li>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.zoomLink) {
    _push(`<li data-v-5cc2780a><a${(0,server_renderer.ssrRenderAttr)("href", $props.zoomLink)} target="_blank" data-v-5cc2780a>Zoom</a></li>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</ul><div style="${(0,server_renderer.ssrRenderStyle)({"clear":"right"})}" data-v-5cc2780a></div></div>`)
}
;// CONCATENATED MODULE: ./src/.vuepress/components/Teacher.vue?vue&type=template&id=5cc2780a&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Teacher.vue?vue&type=script&lang=js

	/* harmony default export */ const Teachervue_type_script_lang_js = ({
		props: {
			name: String,
			photo: String,
			roles: Array,
			description: String,
			email: String,
			phone: String,
			website: String,
			zoomLink: String,
		},
	});

;// CONCATENATED MODULE: ./src/.vuepress/components/Teacher.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/components/Teacher.vue?vue&type=style&index=0&id=5cc2780a&scoped=true&lang=css
var Teachervue_type_style_index_0_id_5cc2780a_scoped_true_lang_css = __webpack_require__(3048);
;// CONCATENATED MODULE: ./src/.vuepress/components/Teacher.vue?vue&type=style&index=0&id=5cc2780a&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/components/Teacher.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Teachervue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-5cc2780a"]])

/* harmony default export */ const Teacher = (__exports__);

/***/ }),

/***/ 3048:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "img[data-v-5cc2780a]{max-height:100%;float:right;max-width:150px!important;margin:16px}", "",{"version":3,"sources":["webpack://./src/.vuepress/components/Teacher.vue"],"names":[],"mappings":"AAEC,qBACC,eAAgB,CAChB,WAAY,CACZ,yBAA2B,CAC3B,WACD","sourcesContent":["\r\n\t\r\n\timg{\r\n\t\tmax-height: 100%;\r\n\t\tfloat: right;\r\n\t\tmax-width: 150px !important;\r\n\t\tmargin: 16px;\r\n\t}\r\n\t\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=424.app.js.map