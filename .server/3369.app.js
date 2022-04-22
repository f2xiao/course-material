"use strict";
exports.id = 3369;
exports.ids = [3369];
exports.modules = {

/***/ 324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ laboratory_work_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/laboratory-work.html.vue?vue&type=template&id=6db5b452



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CompactInfo = (0,external_vue_.resolveComponent)("CompactInfo")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="laboratory-work" tabindex="-1"><a class="header-anchor" href="#laboratory-work" aria-hidden="true">#</a> Laboratory Work</h1><p>On this page you find information about the examination test <code>Laboratory Work</code>.</p><h2 id="general-information" tabindex="-1"><a class="header-anchor" href="#general-information" aria-hidden="true">#</a> General information</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CompactInfo, { infoPieces: {
    "Number of credits": "1",
    "Grades": ["Fail", "Pass"],
    "How to work": "Individually",
    "Goal": "To learn how to use client-side JavaScript.",
    "Instructions": "Complete and present your solutions to the labs on this page to a teacher at a lab session. Each lab is about improving the user experience on a webpage by using client-side JavaScript.",
    "Re-examination": "Special lab session at the re-exam period in June and in August. Contact the course coordinator for more specific details.",
    "Help": "Ask the teacher for help at the lab sessions."
} }, null, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Help, don&#39;t cheat!</p><p>The laboratory work is individual work.</p><p><strong>It is OK</strong> to help each other. Examples of that:</p><ul><li>help your friend to debug his code.</li><li>explain to your friend why his code doesn&#39;t work the way he thinks it works.</li><li>compare and discuss different solutions to a lab problem with your friend after both of you have solved the lab to figure out which solution is the best one.</li></ul><p><strong>It is NOT OK</strong> to cooperate in any way. Examples of that:</p><ul><li>sit at the same computer and write code together with your friend.</li><li>sit at different computers and discuss and write the same code as your friend.</li><li>give code to/receive code from your friend.</li></ul><p><strong>You must write your own code! If you are unsure about what counts as <em>helping</em> and what counts as <em>cheating</em>, then simply work alone and ask only the teacher at the lab sessions for help.</strong></p></div><div class="custom-container danger"><p class="custom-container-title">Note!</p><p>In each lab you are given an HTML file. You may not change the HTML code written in that file, but feel free to write as much CSS and client-side JavaScript code you want and need to complete the lab.</p></div><p>Feel free to use whichever tools you want to complete the labs described below, but we recommend you to use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>Before you start working on the labs you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/client-side-javascript-and-bom/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Client-side JavaScript &amp; BOM`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Client-side JavaScript & BOM")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/document-object-model/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Document Object Model`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Document Object Model")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Debugging</p><p>When the web browser executes the JavaScript statement <code>debugger</code> (you might need to have the console open in the web browser) it enters a debug mode in which you can inspect the values variables have, use step-by-step execution, etc.. Use that to debug your code when it doesn&#39;t work the way you want.</p></div><h2 id="lab-1-generating-a-table-of-contents" tabindex="-1"><a class="header-anchor" href="#lab-1-generating-a-table-of-contents" aria-hidden="true">#</a> Lab 1: Generating a table of contents</h2><p>The file <a${(0,server_renderer.ssrRenderAttr)("href", _ctx.$withBase('courses/web-development-advanced-concepts/files/lab-01-table-of-contents.html'))} target="_blank">lab-01-table-of-contents.html</a> contains some of the information on <a href="https://en.wikipedia.org/wiki/J%C3%B6nk%C3%B6ping_University" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s Jönköping University article`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Your task is to write JavaScript code that generates a table of content for the document (i.e. a list with the title of all the headers). Download the HTML file and write your own JavaScript code directly in it.</p><p>Some DOM functionalities you might find helpful:</p><ul><li><code>document.addEventListener(&quot;DOMContentLoaded&quot;, aCallbackFunction)</code> to tell the web browser to call <code>aCallbackFunction</code> when it is done parsing the HTML code.</li><li>Calling <code>querySelector(&quot;aCSSSelector&quot;)</code> on <code>document</code> or <code>anHTMLElement</code> to find the HTML element matching <code>aCSSSelector</code>.</li><li>Calling <code>querySelectorAll(&quot;aCSSSelector&quot;)</code> on <code>document</code> or <code>anHTMLElement</code> to find the HTML elements matching <code>aCSSSelector</code>.</li><li><code>anHTMLElement.innerText</code> to read out/change what is written between the start and end tag of <code>anHTMLElement</code>.</li><li><code>document.createElement(&quot;tagName&quot;)</code> to create a new HTML element of type <code>tagName</code> (e.g. <code>ul</code>).</li><li><code>anHTMLElement.appendChild(aChildElement)</code> to add <code>aChildElement</code> to <code>anHTMLElement</code>.</li></ul><h3 id="presenting" tabindex="-1"><a class="header-anchor" href="#presenting" aria-hidden="true">#</a> Presenting</h3><p>Present your work to a teacher at one of the lab sessions. Be prepared to explain how your code works and to answer any question the teacher might have about it. When the teacher is satisfied with your presentation, upload your HTML file to the assignment <a href="https://ju.instructure.com/courses/4775/assignments/25242" target="_blank" rel="noopener noreferrer">Lab 1`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas, after which the teacher will approve you on the assignment.</p><h2 id="lab-2-a-calculator" tabindex="-1"><a class="header-anchor" href="#lab-2-a-calculator" aria-hidden="true">#</a> Lab 2: A calculator</h2><p>The file <a${(0,server_renderer.ssrRenderAttr)("href", _ctx.$withBase('courses/web-development-advanced-concepts/files/lab-02-calculator.html'))} target="_blank">lab-02-calculator.html</a> contains a form through which users should be able to enter two operands and one operation. Your task is to write JavaScript code that displays the result of the selected operation applied on the two entered operands.</p><p>Some DOM functionalities you might find helpful:</p><ul><li><code>anHTMLElement.addEventListener(&quot;eventName&quot;, aCallbackFunction)</code> to tell the web browser to call <code>aCallbackFunction</code> when the event <code>eventName</code> happens on <code>anHTMLElement</code>. You are probably especially interested in the <code>input</code> event (for <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, ...) and the <code>submit</code> event (for <code>&lt;form&gt;</code>). For the <code>submit</code> event, also remember to use <code>event.preventDefault()</code>.</li><li><code>anInputElement.value</code> to read out/change the entered value in <code>anInputElement</code>.</li><li><code>aSelectElement.value</code> to read out/change the value of the selected <code>&lt;option&gt;</code> in <code>aSelectElement</code>.</li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>If the user has client-side JavaScript disabled the form should be submitted to the server (if you opened the file with the <code>file</code> protocol, the web browser will just display the same page again).</p><p>If the address bar in the web browser changes (a query string is added to the end of it) when you click on the submit button, then you have failed to properly call the <code>event.preventDefault()</code> method.</p></div><h3 id="presenting-1" tabindex="-1"><a class="header-anchor" href="#presenting-1" aria-hidden="true">#</a> Presenting</h3><p>Present your work to a teacher at one of the lab sessions. Be prepared to explain how your code works and to answer any question the teacher might have about it. When the teacher is satisfied with your presentation, upload your HTML file to the assignment <a href="https://ju.instructure.com/courses/4775/assignments/25243" target="_blank" rel="noopener noreferrer">Lab 2`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas, after which the teacher will approve you on the assignment.</p><h2 id="lab-3-validating-input-to-forms" tabindex="-1"><a class="header-anchor" href="#lab-3-validating-input-to-forms" aria-hidden="true">#</a> Lab 3: Validating input to forms</h2><p>The file <a${(0,server_renderer.ssrRenderAttr)("href", _ctx.$withBase('courses/web-development-advanced-concepts/files/lab-03-form-validation.html'))} target="_blank">lab-03-form-validation.html</a> contains a form users can use to enter information about a new account to be created. Your task is to write JavaScript code validating the data entered in the form when the user submits it according to the following validation rules:</p><ul><li>The email field must contain the <code>@</code> symbol.</li><li>The first password field must contain at least 8 characters.</li><li>The second password field must be equal to the first password field.</li></ul><p>If something is wrong, display the error messages on the screen (in the HTML code using JavaScript; it is not OK to use the <code>alert()</code> function). Otherwise (if everything is valid), just let the form be submitted (so the server receives it, although in this case, no server exists).</p><p>Some DOM functionalities you might find helpful:</p><ul><li><code>aString.length</code> to get the number of characters in <code>aString</code>.</li><li><code>aString.includes(aSubString)</code> to check if <code>aString</code> contains <code>aSubString</code>.</li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The form should be submitted if there are no validation errors. If you open the webpage using the <code>file</code> protocol, the web browser will simply reload the webpage when the form is submitted.</p></div><h3 id="presenting-2" tabindex="-1"><a class="header-anchor" href="#presenting-2" aria-hidden="true">#</a> Presenting</h3><p>Present your work to a teacher at one of the lab sessions. Be prepared to explain how your code works and to answer any question the teacher might have about it. When the teacher is satisfied with your presentation, upload your HTML file to the assignment <a href="https://ju.instructure.com/courses/4775/assignments/25244" target="_blank" rel="noopener noreferrer">Lab 3`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas, after which the teacher will approve you on the assignment.</p><h2 id="lab-4-tabs" tabindex="-1"><a class="header-anchor" href="#lab-4-tabs" aria-hidden="true">#</a> Lab 4: Tabs</h2><p>The file <a${(0,server_renderer.ssrRenderAttr)("href", _ctx.$withBase('courses/web-development-advanced-concepts/files/lab-04-tabs.html'))} target="_blank">lab-04-tabs.html</a> contains three forms:</p><ul><li>One form to create a new account.</li><li>One form to sign in to an existing account.</li><li>One form to subscribe to updates.</li></ul><p>Although all three forms are useful, displaying all of them at the same time makes no sense since the user is only interested in using one of them at a time. Your task is to write JavaScript code that displays only one form at a time, and by clicking on links the user should be able to switch which form that is shown.</p><p>Some DOM functionalities you might find helpful:</p><ul><li><code>anHTMLElement.classList</code> to add/remove/toggle classes <code>anHTMLElement</code> has.</li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>If the user has disabled client-side JavaScript in the web browser, all three forms should of course be displayed.</p></div><h3 id="presenting-3" tabindex="-1"><a class="header-anchor" href="#presenting-3" aria-hidden="true">#</a> Presenting</h3><p>Present your work to a teacher at one of the lab sessions. Be prepared to explain how your code works and to answer any question the teacher might have about it. When the teacher is satisfied with your presentation, upload your HTML file to the assignment <a href="https://ju.instructure.com/courses/4775/assignments/25245" target="_blank" rel="noopener noreferrer">Lab 4 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas, after which the teacher will approve you on the assignment.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/laboratory-work.html.vue?vue&type=template&id=6db5b452

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/laboratory-work.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const laboratory_work_html = (__exports__);

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

/***/ 161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5bb8d842",
  "path": "/courses/web-development-advanced-concepts/laboratory-work.html",
  "title": "Laboratory Work",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "General information",
      "slug": "general-information",
      "children": []
    },
    {
      "level": 2,
      "title": "Lab 1: Generating a table of contents",
      "slug": "lab-1-generating-a-table-of-contents",
      "children": [
        {
          "level": 3,
          "title": "Presenting",
          "slug": "presenting",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 2: A calculator",
      "slug": "lab-2-a-calculator",
      "children": [
        {
          "level": 3,
          "title": "Presenting",
          "slug": "presenting-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 3: Validating input to forms",
      "slug": "lab-3-validating-input-to-forms",
      "children": [
        {
          "level": 3,
          "title": "Presenting",
          "slug": "presenting-2",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 4: Tabs",
      "slug": "lab-4-tabs",
      "children": [
        {
          "level": 3,
          "title": "Presenting",
          "slug": "presenting-3",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/web-development-advanced-concepts/laboratory-work.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=3369.app.js.map