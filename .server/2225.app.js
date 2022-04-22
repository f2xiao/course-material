"use strict";
exports.id = 2225;
exports.ids = [2225];
exports.modules = {

/***/ 5335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_grading_guidelines_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/client-server-communication/project-grading-guidelines.html.vue?vue&type=template&id=28d3f221



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_GradingGuideline = (0,external_vue_.resolveComponent)("GradingGuideline")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="project-grading-guidelines" tabindex="-1"><a class="header-anchor" href="#project-grading-guidelines" aria-hidden="true">#</a> Project Grading Guidelines</h1><p>This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get <code>Grade 5</code>, you also need to follow the guidelines for <code>Grade 3</code> and <code>Grade 4</code>).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This page does only contain <em>guidelines</em> for how your work will be graded. When we grade your work we&#39;ll make an assessment of your entire work, which is not limited to these guidelines, so <strong>do not use these guidelines as a checklist for a certain grade</strong>. Instead, rather see them as minimum requirements to be able to get a certain grade.</p></div><h2 id="indentation-convention" tabindex="-1"><a class="header-anchor" href="#indentation-convention" aria-hidden="true">#</a> Indentation Convention</h2><p>The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see <a href="https://en.wikipedia.org/wiki/Indentation_style" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article on indentation style`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No indentation convention has been used or there exists too many places where the convention has not been followed.",
    grade3: "The same indentation convention is mostly used, but at a few places the convention has not been followed.",
    grade4: "Each file correctly use an indentation convention, but different conventions are used in different files, and there's no consistency in when to use which one.",
    grade5: "The same indentation convention is consistently used across all files of the same type."
  }, null, _parent))
  _push(`</p><h2 id="coding-style" tabindex="-1"><a class="header-anchor" href="#coding-style" aria-hidden="true">#</a> Coding Style</h2><p>The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see <a href="https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article on coding style`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No coding style has been used or there exists too many places where the style has not been followed.",
    grade3: "The same coding style is mostly used, but at a few places the style has not been followed.",
    grade4: "The same coding style is consistently used in each file, although individual files (even of the same type) use different coding styles.",
    grade5: "The same coding style is consistently used across all files of the same type."
  }, null, _parent))
  _push(`</p><h2 id="naming-convention" tabindex="-1"><a class="header-anchor" href="#naming-convention" aria-hidden="true">#</a> Naming Convention</h2><p>The convention used when naming variables, constants, functions, methods, files, etc. For more information, see <a href="https://en.wikipedia.org/wiki/Naming_convention_(programming)" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article on naming convention`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No naming convention has been used or there exists too many places where the convention has not been followed.",
    grade3: "The same naming convention is mostly used, but at a few places the convention has not been followed.",
    grade4: "The same naming convention is consistently used in each file, although individual files (even of the same type) use different naming conventions.",
    grade5: "The same naming convention is consistently used across all files of the same type."
  }, null, _parent))
  _push(`</p><h2 id="mnemonic-names" tabindex="-1"><a class="header-anchor" href="#mnemonic-names" aria-hidden="true">#</a> Mnemonic names</h2><p>The names used (on variables, functions, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see <a href="https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names" target="_blank" rel="noopener noreferrer">Chapter 2.12 in Python for Everybody (Severance)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Many names are not mnemonic.",
    grade3: "Many names (at least 90%) are mnemonic.",
    grade4: "Almost all names (at least 95%) are mnemonic.",
    grade5: "All names (100%) are mnemonic."
  }, null, _parent))
  _push(`</p><h2 id="magic-numbers" tabindex="-1"><a class="header-anchor" href="#magic-numbers" aria-hidden="true">#</a> Magic Numbers</h2><p>Avoid using <a href="https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants" target="_blank" rel="noopener noreferrer">magic numbers`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in the code. Does not only apply to numbers, but all values that are better put in descriptive constants.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "3 or more magic numbers exist.",
    grade3: "At most 2 magic numbers exist.",
    grade4: "At most 1 magic number exists.",
    grade5: "No magic numbers exist."
  }, null, _parent))
  _push(`</p><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h2><p>The quality of the resources on the platform.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "It is not possible to apply CRUD operations on at least accounts + 1 other type of resource stored in a relational database.",
    grade3: "The resources are validated so the database does not contain resources in bad state (such as an account with an empty username).",
    grade4: "The resources are not 'minimal', but 'rich'. For example, if a resource represents an account, it does not only consist of a username and a password, but also of more relevant information that make sense (email, city, date of birth, date signing up, whatever...).",
    grade5: "Not applicable."
  }, null, _parent))
  _push(`</p><h2 id="database-design" tabindex="-1"><a class="header-anchor" href="#database-design" aria-hidden="true">#</a> Database Design</h2><p>The quality of the design of the database.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The design is inappropriate, for example storing all resources in the same table.",
    grade3: "Primary keys are properly used.",
    grade4: "Constraints (such as unique constraints and foreign key constraints) are used correctly where suitable.",
    grade5: "Data is stored using appropriate data types (especially important for booleans and dates/unix timestamps)."
  }, null, _parent))
  _push(`</p><h2 id="rest-api-design" tabindex="-1"><a class="header-anchor" href="#rest-api-design" aria-hidden="true">#</a> REST API Design</h2><p>The quality of the design of the database.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Not possible to apply CRUD operations on at least accounts + 1 other type of resource.",
    grade3: "Possible to apply CRUD operations on at least accounts + 1 other type of resource.",
    grade4: "Methods and URIs are properly used.",
    grade5: "The report fully describes the design of the REST API, including which methods, URIs, headers, body, etc. that can be used, and what the possible responses (status code, headers, body, etc.) are."
  }, null, _parent))
  _push(`</p><h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h2><p>Handling of various errors that can occur when the user is using your platform, including validation errors and database errors (both on the fronend and the backend).</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Errors are not handled or the error messages are confusing to the user (remember: users are not programmers).",
    grade3: "Handles and display error messages for at least 90% of the errors that can occur.",
    grade4: "Handles and display error messages for at least 95% of the errors that can occur.",
    grade5: "Handles and display error messages for all errors that can occur."
  }, null, _parent))
  _push(`</p><h2 id="graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#graphical-user-interface" aria-hidden="true">#</a> Graphical User Interface</h2><p>The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The frontend contains components users don't understand how to use/can't use.",
    grade3: "The placement of components is logical and users understand how to use them on a desktop computer.",
    grade4: "The frontend do to some extent have support for smartphones (for example having support for just the screen size or just the input method).",
    grade5: "The frontend have very good support for both smartphones and desktop computers."
  }, null, _parent))
  _push(`</p><h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><p>Vulnerabilities such as SQL injections, not checking authorization, storing password in plain text, improper implemented authentication, etc.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "3 or more security vulnerabilities exist.",
    grade3: "At most 2 security vulnerabilities exist.",
    grade4: "At most 1 security vulnerability exists.",
    grade5: "No security vulnerability exists."
  }, null, _parent))
  _push(`</p><h2 id="report" tabindex="-1"><a class="header-anchor" href="#report" aria-hidden="true">#</a> Report</h2><p>The quality of the report.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The reader does not get a good understanding of what the project is about (the problem and the solution) nor how the solution works/will be used/has been implemented.",
    grade3: "The readers gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences.",
    grade4: "Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter.",
    grade5: "Everything with the report is great."
  }, null, _parent))
  _push(`</p><h2 id="optional-tasks" tabindex="-1"><a class="header-anchor" href="#optional-tasks" aria-hidden="true">#</a> Optional Tasks</h2><p>Complete `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/project-instructions.html#part-10-grade-4-and-5" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`the optional tasks described in the Project Instructions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("the optional tasks described in the Project Instructions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Not applicable.",
    grade3: "No extra tasks need to be completed.",
    grade4: "The extra tasks SDK and Supporting Multiple Data Formats needs to be completed.",
    grade5: "The extra task Third-Party Authentication needs to be completed."
  }, null, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/project-grading-guidelines.html.vue?vue&type=template&id=28d3f221

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/project-grading-guidelines.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const project_grading_guidelines_html = (__exports__);

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


/***/ }),

/***/ 1953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7f3a40d0",
  "path": "/courses/client-server-communication/project-grading-guidelines.html",
  "title": "Project Grading Guidelines",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Indentation Convention",
      "slug": "indentation-convention",
      "children": []
    },
    {
      "level": 2,
      "title": "Coding Style",
      "slug": "coding-style",
      "children": []
    },
    {
      "level": 2,
      "title": "Naming Convention",
      "slug": "naming-convention",
      "children": []
    },
    {
      "level": 2,
      "title": "Mnemonic names",
      "slug": "mnemonic-names",
      "children": []
    },
    {
      "level": 2,
      "title": "Magic Numbers",
      "slug": "magic-numbers",
      "children": []
    },
    {
      "level": 2,
      "title": "Resources",
      "slug": "resources",
      "children": []
    },
    {
      "level": 2,
      "title": "Database Design",
      "slug": "database-design",
      "children": []
    },
    {
      "level": 2,
      "title": "REST API Design",
      "slug": "rest-api-design",
      "children": []
    },
    {
      "level": 2,
      "title": "Error Handling",
      "slug": "error-handling",
      "children": []
    },
    {
      "level": 2,
      "title": "Graphical User Interface",
      "slug": "graphical-user-interface",
      "children": []
    },
    {
      "level": 2,
      "title": "Security",
      "slug": "security",
      "children": []
    },
    {
      "level": 2,
      "title": "Report",
      "slug": "report",
      "children": []
    },
    {
      "level": 2,
      "title": "Optional Tasks",
      "slug": "optional-tasks",
      "children": []
    }
  ],
  "filePathRelative": "courses/client-server-communication/project-grading-guidelines.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=2225.app.js.map