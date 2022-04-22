"use strict";
exports.id = 5842;
exports.ids = [5842];
exports.modules = {

/***/ 5187:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/project-grading-guidelines.html.vue?vue&type=template&id=46bd0d45



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_GradingGuideline = (0,external_vue_.resolveComponent)("GradingGuideline")

  _push(`<!--[--><h1 id="project-grading-guidelines" tabindex="-1"><a class="header-anchor" href="#project-grading-guidelines" aria-hidden="true">#</a> Project Grading Guidelines</h1><p>This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get <code>Grade 5</code>, you also need to follow the guidelines for <code>Grade 3</code> and <code>Grade 4</code>).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This page does only contain <em>guidelines</em> for how your work will be graded. When we grade your work we&#39;ll make an assessment of your entire work, which is not limited to these guidelines, so <strong>do not use these guidelines as a checklist for a certain grade</strong>. Instead, rather see them as minimum requirements for each grade.</p></div><h2 id="indentation-convention" tabindex="-1"><a class="header-anchor" href="#indentation-convention" aria-hidden="true">#</a> Indentation Convention</h2><p>The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see Wikipedia&#39;s article on <a href="https://en.wikipedia.org/wiki/Indentation_style" target="_blank" rel="noopener noreferrer">Indentation style`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Indentation conventions have been used, or they are not always followed.",
    grade3: "The same indentation convention is consistently used across all files of the same type.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="coding-style" tabindex="-1"><a class="header-anchor" href="#coding-style" aria-hidden="true">#</a> Coding Style</h2><p>The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see Wikipedia&#39;s article on <a href="https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style" target="_blank" rel="noopener noreferrer">Coding style`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. <a href="https://xkcd.com/1513/" target="_blank" rel="noopener noreferrer">xkcd has a web comic about it.`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No coding styles have been used, or they are not always followed.",
    grade3: "The same coding style is consistently used across all files of the same type.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="naming-convention" tabindex="-1"><a class="header-anchor" href="#naming-convention" aria-hidden="true">#</a> Naming Convention</h2><p>The convention used when naming variables, constants, functions, classes, methods, functions, files, packages, etc. For more information, see Wikipedia&#39;s article on <a href="https://en.wikipedia.org/wiki/Naming_convention_(programming)" target="_blank" rel="noopener noreferrer">naming convention`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "No naming conventions have been used, or they are not always followed.",
    grade3: "The same coding style is consistently used across all files of the same type.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="mnemonic-names" tabindex="-1"><a class="header-anchor" href="#mnemonic-names" aria-hidden="true">#</a> Mnemonic names</h2><p>The names used (on variables, functions, classes, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see <a href="https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names" target="_blank" rel="noopener noreferrer">Chapter 2.12 in Python for Everybody (Severance)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "There exists names that are not mnemonic.",
    grade3: "All names are mnemonic.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="magic-numbers" tabindex="-1"><a class="header-anchor" href="#magic-numbers" aria-hidden="true">#</a> Magic Numbers</h2><p>Avoid using <a href="https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants" target="_blank" rel="noopener noreferrer">magic numbers`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in the code. Does not only apply to numbers, but all values that are better put in descriptive constants.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Some magic numbers exists.",
    grade3: "No magic number exist.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="database-design" tabindex="-1"><a class="header-anchor" href="#database-design" aria-hidden="true">#</a> Database Design</h2><p>The quality of the design of the database. <a href="https://xkcd.com/1883/" target="_blank" rel="noopener noreferrer">xkcd has a web comic about storing dates.`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The design is inappropriate, for example storing all resources in the same table.",
    grade3: "Constraints are used properly.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> Validation</h2><p>Validation of resources on the website entered by a user.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Not all resources are validated.",
    grade3: "All resources are validated when created/updated, forms are pre-filled with latest input if errors occur.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h2><p>Handling of various errors that can occur when the user is using your website, including database errors (connection errors, unique constraint violations, foreign key constraint violations, etc.) and validation errors.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Not all errors are handled.",
    grade3: "Errors are handled, and descriptive error messages are shown to the user.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#graphical-user-interface" aria-hidden="true">#</a> Graphical User Interface</h2><p>The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc. Simply put, users should understand how to use the website.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The website contains components users don't understand how to use/can't use.",
    grade3: "The placement of components is logical and users understand how to use them on a desktop computer.",
    grade4: "The website do to some extent have support for smartphones (for example having support for just the screen size or just the input method).",
    grade5: "The website have very good support for both smartphones and desktop computers."
  }, null, _parent))
  _push(`</p><h2 id="html-css" tabindex="-1"><a class="header-anchor" href="#html-css" aria-hidden="true">#</a> HTML &amp; CSS</h2><p>Proper usage of HTML and CSS (semantic, etc.).</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "HTML and CSS are not used properly.",
    grade3: "HTML and CSS are used properly.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><p>Vulnerabilities such as SQL injections, XSS, CSRF, not checking authorization, storing password in plain text, improper implemented authentication, etc.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "3 or more security vulnerabilities exist.",
    grade3: "At most 2 security vulnerabilities exist.",
    grade4: "At most 1 security vulnerability exists.",
    grade5: "No security vulnerability exists."
  }, null, _parent))
  _push(`</p><h2 id="three-layered-architecture" tabindex="-1"><a class="header-anchor" href="#three-layered-architecture" aria-hidden="true">#</a> Three-layered architecture</h2><p>Implement the web application using a three-layered architecture properly (doing the right thing in each layer, don&#39;t expose implementation details, etc.).</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "3 or more incorrect usages of a three-layered architecture exists.",
    grade3: "2 incorrect usages of a three-layered architecture exists.",
    grade4: "1 incorrect usage of a three-layered architecture exists.",
    grade5: "No incorrect usages of a three-layered architecture exists."
  }, null, _parent))
  _push(`</p><h2 id="oauth-2-0-openid-connect" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-openid-connect" aria-hidden="true">#</a> OAuth 2.0 &amp; OpenID Connect</h2><p>The web application properly implements <a href="https://tools.ietf.org/html/rfc6749" target="_blank" rel="noopener noreferrer">OAuth 2.0`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (Resource Owner Password Credentials Grant) &amp; <a href="https://openid.net/specs/openid-connect-core-1_0.html" target="_blank" rel="noopener noreferrer">OpenID Connect`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (follow the specifications).</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "3 or more implementation details differ from the specifications.",
    grade3: "2 implementation details differ from the specifications.",
    grade4: "1 implementation detail differs from the specifications.",
    grade5: "The specifications are followed."
  }, null, _parent))
  _push(`</p><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><p>Docker is used properly.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Docker has not been used or one container is used to run multiple applications.",
    grade3: "All applications/components can be started just by running the command 'docker-compose up'.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="optional-tasks" tabindex="-1"><a class="header-anchor" href="#optional-tasks" aria-hidden="true">#</a> Optional tasks</h2><p>Complete the optional tasks required for <code>Grade 4</code> and <code>Grade 5</code>.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Not applicable.",
    grade3: "-",
    grade4: "Complete the extra task 'A fancy website' and 'A fancy SPA'.",
    grade5: "Complete the extra task 'Supporting third-party authentication'."
  }, null, _parent))
  _push(`</p><h2 id="report" tabindex="-1"><a class="header-anchor" href="#report" aria-hidden="true">#</a> Report</h2><p>The quality of the report.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The reader does not get a good understanding of what the project is about (the problem and the solution), nor how the solution works/will be used/has been implemented.",
    grade3: "The reader gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences. At most 5 mistakes mentioned in the lecture Report Writing exists.",
    grade4: "Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter. At most 3 mistakes mentioned in the lecture Report Writing exists.",
    grade5: "Everything with the report is great. At most 1 mistake mentioned in the lecture Report Writing exists."
  }, null, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/project-grading-guidelines.html.vue?vue&type=template&id=46bd0d45

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/project-grading-guidelines.html.vue

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

/***/ 7704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-54e2f395",
  "path": "/courses/web-development-advanced-concepts/project-grading-guidelines.html",
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
      "title": "HTML & CSS",
      "slug": "html-css",
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
      "title": "Three-layered architecture",
      "slug": "three-layered-architecture",
      "children": []
    },
    {
      "level": 2,
      "title": "OAuth 2.0 & OpenID Connect",
      "slug": "oauth-2-0-openid-connect",
      "children": []
    },
    {
      "level": 2,
      "title": "Docker",
      "slug": "docker",
      "children": []
    },
    {
      "level": 2,
      "title": "Optional tasks",
      "slug": "optional-tasks",
      "children": []
    },
    {
      "level": 2,
      "title": "Report",
      "slug": "report",
      "children": []
    }
  ],
  "filePathRelative": "courses/web-development-advanced-concepts/project-grading-guidelines.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=5842.app.js.map