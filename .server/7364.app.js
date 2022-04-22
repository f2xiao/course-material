"use strict";
exports.id = 7364;
exports.ids = [7364];
exports.modules = {

/***/ 9948:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/android-development/project-grading-guidelines.html.vue?vue&type=template&id=388096d6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_GradingGuideline = (0,external_vue_.resolveComponent)("GradingGuideline")

  _push(`<!--[--><h1 id="project-grading-guidelines" tabindex="-1"><a class="header-anchor" href="#project-grading-guidelines" aria-hidden="true">#</a> Project Grading Guidelines</h1><p>This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades. For example, to be able to get <code>Grade 5</code>, you also need to follow the guidelines for <code>Grade 3</code> and <code>Grade 4</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This page does only contain <em>guidelines</em> for how your work will be graded. When we grade your work we&#39;ll make an assessment of your entire work, which is not limited to these guidelines, so <strong>do not use these guidelines as a checklist for a certain grade</strong>. Instead, rather see them as minimum requirements to be able to get a certain grade.</p></div><h2 id="indentation-convention" tabindex="-1"><a class="header-anchor" href="#indentation-convention" aria-hidden="true">#</a> Indentation Convention</h2><p>The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see <a href="https://en.wikipedia.org/wiki/Indentation_style" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article on indentation style`)
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
  _push(`</a>. <a href="https://xkcd.com/1513/" target="_blank" rel="noopener noreferrer">xkcd has a web comic about it.`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>`)
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
  _push(`</p><h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h2><p>Handling of various errors that can occur when the user is using the application, such as validation errors, no network connection, the device doesn&#39;t have a camera, the user doesn&#39;t grant you a permission, etc.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Errors are not handled, or the error messages shown are confusing to the user.",
    grade3: "Handles and display error messages for at least 90% of the errors that can occur.",
    grade4: "Handles and display error messages for at least 95% of the errors that can occur.",
    grade5: "Handles and display error messages for all errors that can occur."
  }, null, _parent))
  _push(`</p><h2 id="graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#graphical-user-interface" aria-hidden="true">#</a> Graphical User Interface</h2><p>The logical placement and usage of components (buttons, input fields, etc.), the support for different screen sizes, how intuitive it is to use the application, etc.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "-",
    grade3: "The user understands how to use the application without external instructions.",
    grade4: "-",
    grade5: "-"
  }, null, _parent))
  _push(`</p><h2 id="fundamental-application-components" tabindex="-1"><a class="header-anchor" href="#fundamental-application-components" aria-hidden="true">#</a> Fundamental application components</h2><p>The usage of fundamental application components.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "-",
    grade3: "Fundamental application components are used.",
    grade4: "Fundamental application components are mostly used properly, such as code belonging in a service is written in a service.",
    grade5: "Fundamental application components are used properly, including the communication between them (for example no global variables)."
  }, null, _parent))
  _push(`</p><h2 id="report" tabindex="-1"><a class="header-anchor" href="#report" aria-hidden="true">#</a> Report</h2><p>The quality of the report.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "The reader does not get a good understanding of what the project is about (the problem and the solution) nor how the solution works/will be used/has been implemented.",
    grade3: "The readers gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences.",
    grade4: "Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter.",
    grade5: "Everything with the report is great."
  }, null, _parent))
  _push(`</p><h2 id="extra-functionalities" tabindex="-1"><a class="header-anchor" href="#extra-functionalities" aria-hidden="true">#</a> Extra Functionalities</h2><p>Implement extra functionalities listed in the table below.</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_GradingGuideline, {
    gradeU: "Not applicable.",
    grade3: "Implement extra functionalities worth at least 3 points in total.",
    grade4: "Implement extra functionalities worth at least 7 points in total.",
    grade5: "Implement extra functionalities worth at least 11 points in total."
  }, null, _parent))
  _push(`</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You may not get all the points for the functionality you implement. You need to implement the functionality in a good way to get all the points for that functionality.</p></div><table><thead><tr><th>Points</th><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Multiple languages</td><td> Full support for at least two languages everywhere (English + one more): <ul><li>No strings shown to the user hardcoded in your Kotlin/Java code (use string resources).</li><li>No strings shown to the user hardcoded in your XML code (use string resources).</li><li>Text entered by the users will of course only be in one language.</li></ul></td></tr><tr><td>1</td><td>Runtime permissions</td><td>On newer versions of Android, ask for the permissions you need at runtime (when you need them). If you don&#39;t get them, deal with it in a good way.</td></tr><tr><td>4</td><td>Runtime configuration changes</td><td> Handle runtime configuration changes in a good way throughout the entire application, such as: <ul><li>HTTP requests are not re-sent.</li><li>Bluetooth connections are maintained.</li><li>Results of long running operations are cached.</li></ul> Use model fragments, ViewModels, or whatever you prefer. </td></tr><tr><td>1</td><td>Widget</td><td>Create a widget the user can use from the launcher. Too simple widgets (such as only &quot;click on the widget to start an activity&quot;) are not accepted.</td></tr><tr><td>2</td><td>Foreground service</td><td>Make use of a foreground service in a suitable way (important background computations, geofences, Bluetooth connections, etc.).</td></tr><tr><td>3</td><td>Re-using fragments</td><td>Re-use none-elementary fragments you have created, such as one fragment showing a list of items, another one showing a single item, and then show one fragment at a time on a small screen and show both side-by-side on a large screen.</td></tr><tr><td>1</td><td>Third-party authentication</td><td>Let users login with their account from another company, such as Google or Facebook. This is of course in addition to ordinary login with username and password, or similar.</td></tr><tr><td>1</td><td>Loading indicators</td><td>When the application starts a long running operation/waits for something, show a loading indicator of some kind reflecting this. Remove the loading indicator afterwards.</td></tr><tr><td>2</td><td>Alarm Scheduling</td><td>Schedule alarms/jobs that notifies the user at certain times, for example 15 minutes before a meeting starts. If the meeting is cancelled or the time for the meeting is changed, the scheduled alarms of course need to be deleted or updated too. Structure your solution well, so there&#39;s no need to copy-paste similar code if you for example want to create new meetings at multiple different places in your application.</td></tr><tr><td>1</td><td>Push Notifications</td><td>Automatically send a push notification to a user&#39;s device (for example using <a href="https://firebase.google.com/docs/cloud-messaging" target="_blank">Firebase Cloud Messaging</a>) when there is something the user needs to be notified about ASAP, such as new event created nearby, new message sent to the user, an event the user has signed up for is cancelled, etc.).<br><br><b>Note:</b> Push Notifications are not the same thing as ordinary <a href="https://developer.android.com/guide/topics/ui/notifiers/notifications">Notifications</a> in Android; Push Notifications are &quot;pushed&quot; to the device from a server.</td></tr><tr><td>1</td><td>Different type of accounts</td><td>Support different type of accounts, such as guest accounts, ordinary accounts, admin accounts, etc. Users should be able to do different things in the app depending on what type of account they are signed in to. For example, an ordinary user might only be able to create data belonging to her own account, while an admin can create data belonging to another account (acting as if she is signed in to another account).<br><br><b>Note:</b> Simply hiding/showing a few GUI components depending on the account type (such as admin accounts have a link to an admin activity ordinary users can&#39;t access) is not enough.</td></tr><tr><td>0.5</td><td>Creating QR Codes</td><td>The app can create different QR codes that can be used by the app itself or another app.</td></tr><tr><td>0.5</td><td>Reading QR Codes</td><td>The app uses the camera on the Android device (either directly or indirectly) to read and react to QR codes.</td></tr><tr><td>?</td><td>Own suggestions</td><td>Come up with your own suggestions of extra functionality. Describe the functionality and email the examiner for approval at <a href="mailto:Peter.Larsson-Green@ju.se">Peter.Larsson-Green@ju.se</a>).</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/project-grading-guidelines.html.vue?vue&type=template&id=388096d6

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/project-grading-guidelines.html.vue

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

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-62b91ae7",
  "path": "/courses/android-development/project-grading-guidelines.html",
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
      "title": "Fundamental application components",
      "slug": "fundamental-application-components",
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
      "title": "Extra Functionalities",
      "slug": "extra-functionalities",
      "children": []
    }
  ],
  "filePathRelative": "courses/android-development/project-grading-guidelines.md",
  "git": {
    "updatedTime": 1647852430000
  }
}


/***/ })

};
;
//# sourceMappingURL=7364.app.js.map