"use strict";
exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 7481:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-fundamentals/project-grading-guidelines.html.vue?vue&type=template&id=ea731668



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_GradingGuideline = (0,external_vue_.resolveComponent)("GradingGuideline")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="project-grading-guidelines" tabindex="-1"><a class="header-anchor" href="#project-grading-guidelines" aria-hidden="true">#</a> Project Grading Guidelines</h1><p>This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get <code>Grade 5</code>, you also need to follow the guidelines for <code>Grade 3</code> and <code>Grade 4</code>).</p><div class="custom-container warning"><p class="custom-container-title">Guidelines only</p><p>This page does only contain <em>guidelines</em> for how your work will be graded. When we grade your work we&#39;ll make an assessment of your entire work, which is not limited to these guidelines, so <strong>do not use these guidelines as a checklist for a certain grade</strong>. Instead, rather see them as <strong>minimum requirements</strong> to be able to get a certain grade.</p></div><div class="custom-container danger"><p class="custom-container-title">Not average</p><p>To get grade <code>X</code>, the student is expected to obtain at least grade <code>X</code> on all guidelines. Small exceptions to this might be made, but that is nothing the students should count on.</p></div><h2 id="indentation-convention" tabindex="-1"><a class="header-anchor" href="#indentation-convention" aria-hidden="true">#</a> Indentation Convention</h2><p>The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see <a href="https://en.wikipedia.org/wiki/Indentation_style" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article on indentation style`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No indentation convention has been used.",
    grade3: "Each file use an indentation convention, but it hasn't been used correctly at at most 3 places (in total).",
    grade4: "Each file correctly use an indentation convention.",
    grade5: "All files of the same type use the same indentation convention."
  }, null, _parent))
  _push(`</p><h2 id="coding-style" tabindex="-1"><a class="header-anchor" href="#coding-style" aria-hidden="true">#</a> Coding Style</h2><p>The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see <a href="https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article on coding style`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. <a href="https://xkcd.com/1513/" target="_blank" rel="noopener noreferrer">xkcd has a web comic about it.`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No coding style has been used.",
    grade3: "Each file use a coding style, but it hasn't been used correctly at at most 3 places (in total).",
    grade4: "Each file correctly use a coding style.",
    grade5: "All files of the same type use the same coding style."
  }, null, _parent))
  _push(`</p><h2 id="naming-convention" tabindex="-1"><a class="header-anchor" href="#naming-convention" aria-hidden="true">#</a> Naming Convention</h2><p>The convention used when naming variables, constants, functions, classes, methods, functions, files, packages, etc. For more information, see <a href="https://en.wikipedia.org/wiki/Naming_convention_(programming)" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article on naming convention`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No naming convention has been used.",
    grade3: "Each file use a naming convention, but it hasn't been used correctly at at most 3 places (in total).",
    grade4: "Each file correctly use a naming convention.",
    grade5: "All files of the same type use the same naming convention."
  }, null, _parent))
  _push(`</p><h2 id="mnemonic-names" tabindex="-1"><a class="header-anchor" href="#mnemonic-names" aria-hidden="true">#</a> Mnemonic names</h2><p>The names used (on variables, functions, classes, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see <a href="https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names" target="_blank" rel="noopener noreferrer">Chapter 2.12 in Python for Everybody (Severance)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "6 or more names are not mnemonic.",
    grade3: "At most 5 names are not mnemonic.",
    grade4: "At most 3 names are not mnemonic.",
    grade5: "At most 1 name is not mnemonic."
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
  _push(`</p><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><p>When a solution can be implemented in different ways, the most preferred implementation is used. If statements VS switches, arrays VS switches, for loops VS while loops VS do-while loops, iteration over indexes VS iteration over values, etc. Use functions instead of code duplication. Eliminate unnecessary if statements. Solutions aren&#39;t overcomplicated.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Solutions have not been implemented at all.",
    grade3: "The solutions are often not implemented the preferred way.",
    grade4: "The solutions are often implemented the preferred way.",
    grade5: "The solutions are always implemented the preferred way."
  }, null, _parent))
  _push(`</p><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h2><p>The quality of the resources on the website.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "It is not possible to apply CRUD operations on at least 3 different type of resources stored in a relational database.",
    grade3: "The resources are validated so the database does not contain resources in bad state (such as a guestbook post with an empty message).",
    grade4: "The resources are not 'minimal', but 'rich'. If a resource represents a guestbook post, it does not only consist of the message the user entered, but also other fields (which could be optional for the user to enter), such as the user's signature, the user's email, the time it was created, etc.",
    grade5: "Not applicable."
  }, null, _parent))
  _push(`</p><h2 id="database-design" tabindex="-1"><a class="header-anchor" href="#database-design" aria-hidden="true">#</a> Database Design</h2><p>The quality of the design of the database. <a href="https://xkcd.com/1883/" target="_blank" rel="noopener noreferrer">xkcd has a web comic about storing dates.`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The design is inappropriate, for example storing all resources in the same table.",
    grade3: "Primary keys are properly used.",
    grade4: "Constraints (such as unique constraints and foreign key constraints) are used correctly where suitable.",
    grade5: "Data is stored using appropriate data types (especially important for booleans and dates/unix timestamps)."
  }, null, _parent))
  _push(`</p><h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> Validation</h2><p>Validation of resources on the website entered by a user.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No validation is carried out.",
    grade3: "All fields on all resources are validated (at least checking that the expected fields exists on the resource), and the user is notified that something is wrong, and what the user had written in the form before is still there.",
    grade4: "All fields are properly validated, e.g. checking lower and upper bounds for a number, the length of strings, etc., and all validation errors are displayed to the user.",
    grade5: "Not applicable."
  }, null, _parent))
  _push(`</p><h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h2><p>Handling of various errors that can occur when the user is using your website, including such as database errors.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Errors are not handled, or error messages are not displayed, or the error messages displayed are confusing to the user (remember: users are not programmers).",
    grade3: "At most 5 errors that can occur are not handled.",
    grade4: "At most 3 errors that can occur are not handled.",
    grade5: "At most 1 error that can occur is not handled."
  }, null, _parent))
  _push(`</p><h2 id="graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#graphical-user-interface" aria-hidden="true">#</a> Graphical User Interface</h2><p>The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc. Simply put, users should understand how to use the website.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The website contains components users don't understand how to use/can't use.",
    grade3: "The placement of components is logical and users understand how to use them on a desktop computer.",
    grade4: "The website do to some extent have support for smartphones (for example having support for just the screen size or just the input method).",
    grade5: "The website have very good support for both smartphones and desktop computers."
  }, null, _parent))
  _push(`</p><h2 id="semantic-html" tabindex="-1"><a class="header-anchor" href="#semantic-html" aria-hidden="true">#</a> Semantic HTML</h2><p>Proper usage of HTML tags. Very important for applications (instead of humans) trying to understand your website, such as search engines and screen readers.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The HTML syntax is not followed.",
    grade3: "The HTML syntax is followed. XHTML is not used.",
    grade4: "HTML tags are used for semantic, not visual appearance (e.g. don't use the br tag).",
    grade5: "Extra code has been written to give the website semantically better structure (such as using the label element, the alt attribute for images, etc.)."
  }, null, _parent))
  _push(`</p><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><p>Custom CSS code (if used, not mandatory).</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The HTML style attribute is used when not needed.",
    grade3: "The HTML style element and the HTML link element are used appropriately.",
    grade4: "CSS selectors are used appropriately (for example id VS class, combining selectors, etc.).",
    grade5: "Not applicable."
  }, null, _parent))
  _push(`</p><h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><p>Vulnerabilities such as SQL injections, XSS, CSRF, not checking authorization, storing password in plain text, improper implemented authentication, etc.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "3 or more security vulnerabilities exist.",
    grade3: "At most 2 security vulnerabilities exist.",
    grade4: "At most 1 security vulnerability exists.",
    grade5: "No security vulnerability exists."
  }, null, _parent))
  _push(`</p><h2 id="report" tabindex="-1"><a class="header-anchor" href="#report" aria-hidden="true">#</a> Report</h2><p>The quality of the report.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The reader does not get a good understanding of what the project is about (the problem and the solution), nor how the solution works/will be used/has been implemented.",
    grade3: "The reader gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences. At most 5 mistakes mentioned in the lecture Report Writing exists.",
    grade4: "Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter. At most 3 mistakes mentioned in the lecture Report Writing exists.",
    grade5: "Everything with the report is great. At most 1 mistake mentioned in the lecture Report Writing exists."
  }, null, _parent))
  _push(`</p><h2 id="optional-tasks" tabindex="-1"><a class="header-anchor" href="#optional-tasks" aria-hidden="true">#</a> Optional Tasks</h2><p>Complete `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-instructions.html#part-8-optional-tasks" }, {
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
    grade4: "The extra tasks Search and Pagination has been completed.",
    grade5: "The extra task Uploading Files has been completed."
  }, null, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/project-grading-guidelines.html.vue?vue&type=template&id=ea731668

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/project-grading-guidelines.html.vue

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

/***/ 8344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2036633a",
  "path": "/courses/web-development-fundamentals/project-grading-guidelines.html",
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
      "title": "Implementation",
      "slug": "implementation",
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
      "title": "Validation",
      "slug": "validation",
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
      "title": "Semantic HTML",
      "slug": "semantic-html",
      "children": []
    },
    {
      "level": 2,
      "title": "CSS",
      "slug": "css",
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
  "filePathRelative": "courses/web-development-fundamentals/project-grading-guidelines.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=407.app.js.map