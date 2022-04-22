"use strict";
exports.id = 9503;
exports.ids = [9503];
exports.modules = {

/***/ 1733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exam_2021_08_16_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-fundamentals/exams/exam-2021-08-16.html.vue?vue&type=template&id=e583ccfe



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExamQuestion = (0,external_vue_.resolveComponent)("ExamQuestion")

  _push(`<!--[--><h1 id="exam-2021-08-16" tabindex="-1"><a class="header-anchor" href="#exam-2021-08-16" aria-hidden="true">#</a> Exam 2021-08-16</h1><p>Here is the exam from 2021-08-16.</p><hr><p>Start by reading through all questions.</p><p>Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required.</li><li>For grade 4, 60% of max score (18 points) is required.</li><li>For grade 5, 80% of max score (24 points) is required.</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam.</li><li>A dictionary to translate to/from English from/to your native language.</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>On one server, the HTTP request one should send when one wants to delete the account with id 123 is:</p><div class="language-http ext-http line-numbers-mode"${
          _scopeId
        }><pre class="language-http"${
          _scopeId
        }><code${
          _scopeId
        }>GET /accounts/delete/123
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>Is this a good or bad way to do it? If good, justify why. If bad, explain why and suggest a better way to do it.</p><p${
          _scopeId
        }><strong${
          _scopeId
        }>Note</strong>: This question is about HTTP, and not about websites, and you don&#39;t need to worry about security.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "On one server, the HTTP request one should send when one wants to delete the account with id 123 is:"),
          (0,external_vue_.createVNode)("div", { class: "language-http ext-http line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-http" }, [
              (0,external_vue_.createVNode)("code", null, "GET /accounts/delete/123\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Is this a good or bad way to do it? If good, justify why. If bad, explain why and suggest a better way to do it."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Note"),
            (0,external_vue_.createTextVNode)(": This question is about HTTP, and not about websites, and you don't need to worry about security.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-2-1p" tabindex="-1"><a class="header-anchor" href="#question-2-1p" aria-hidden="true">#</a> Question 2 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>To update a resource on a server, one should according to the HTTP specification send a PUT request. However, websites usually use another method. Why do websites not use the PUT method to update a resource, which method do they use instead, and why do they use that one?</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "To update a resource on a server, one should according to the HTTP specification send a PUT request. However, websites usually use another method. Why do websites not use the PUT method to update a resource, which method do they use instead, and why do they use that one?")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-3-1p" tabindex="-1"><a class="header-anchor" href="#question-3-1p" aria-hidden="true">#</a> Question 3 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Write the HTTP status code for the following reason phrases:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>Bad Request</li><li${
          _scopeId
        }>OK</li><li${
          _scopeId
        }>Internal Server Error</li></ul><p${
          _scopeId
        }>You&#39;ll get:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>0.33 points for each correct answer.</li><li${
          _scopeId
        }>-0.33 points for each incorrect answer.</li><li${
          _scopeId
        }>0 points for each blank answer.</li><li${
          _scopeId
        }>1 point for all correct answers.</li><li${
          _scopeId
        }>Minimum is 0 points on the question.</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Write the HTTP status code for the following reason phrases:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "Bad Request"),
            (0,external_vue_.createVNode)("li", null, "OK"),
            (0,external_vue_.createVNode)("li", null, "Internal Server Error")
          ]),
          (0,external_vue_.createVNode)("p", null, "You'll get:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.33 points for each correct answer."),
            (0,external_vue_.createVNode)("li", null, "-0.33 points for each incorrect answer."),
            (0,external_vue_.createVNode)("li", null, "0 points for each blank answer."),
            (0,external_vue_.createVNode)("li", null, "1 point for all correct answers."),
            (0,external_vue_.createVNode)("li", null, "Minimum is 0 points on the question.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-4-1p" tabindex="-1"><a class="header-anchor" href="#question-4-1p" aria-hidden="true">#</a> Question 4 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>What is the name of the HTTP header used to indicate which format the body of the request is written in?</p><p${
          _scopeId
        }>What is the name of the HTTP header used to indicate which format the body of the response should preferably be written in?</p><p${
          _scopeId
        }>You&#39;ll get:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for each correct answer.</li><li${
          _scopeId
        }>-0.5 points for each incorrect answer.</li><li${
          _scopeId
        }>0 points for each blank answer.</li><li${
          _scopeId
        }>1 point for all correct answers.</li><li${
          _scopeId
        }>Minimum is 0 points on the question.</li></ul><p${
          _scopeId
        }>(<strong${
          _scopeId
        }>small</strong> spelling mistakes are acceptable but might give point reduction)</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "What is the name of the HTTP header used to indicate which format the body of the request is written in?"),
          (0,external_vue_.createVNode)("p", null, "What is the name of the HTTP header used to indicate which format the body of the response should preferably be written in?"),
          (0,external_vue_.createVNode)("p", null, "You'll get:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for each correct answer."),
            (0,external_vue_.createVNode)("li", null, "-0.5 points for each incorrect answer."),
            (0,external_vue_.createVNode)("li", null, "0 points for each blank answer."),
            (0,external_vue_.createVNode)("li", null, "1 point for all correct answers."),
            (0,external_vue_.createVNode)("li", null, "Minimum is 0 points on the question.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("("),
            (0,external_vue_.createVNode)("strong", null, "small"),
            (0,external_vue_.createTextVNode)(" spelling mistakes are acceptable but might give point reduction)")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-5-1p" tabindex="-1"><a class="header-anchor" href="#question-5-1p" aria-hidden="true">#</a> Question 5 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Place the lines of code below in such order that they form a valid HTML5 document (only place one line of code in each box).</p><ul${
          _scopeId
        }><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;head&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;h1&gt;Welcome!&lt;/h1&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;/body&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;title&gt;Welcome!&lt;/title&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;!DOCTYPE html&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;/html&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;/head&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;html&gt;</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>&lt;body&gt;</code></li></ul><p${
          _scopeId
        }><strong${
          _scopeId
        }>Note</strong>: All must be correct to get points on this question.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Place the lines of code below in such order that they form a valid HTML5 document (only place one line of code in each box)."),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "<head>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "<h1>Welcome!</h1>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "</body>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "<title>Welcome!</title>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "<!DOCTYPE html>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "</html>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "</head>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "<html>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "<body>")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Note"),
            (0,external_vue_.createTextVNode)(": All must be correct to get points on this question.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-6-2p" tabindex="-1"><a class="header-anchor" href="#question-6-2p" aria-hidden="true">#</a> Question 6 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Which of the following tags <strong${
          _scopeId
        }>do not exist</strong> in HTML?</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>h1</li><li${
          _scopeId
        }>table</li><li${
          _scopeId
        }>language</li><li${
          _scopeId
        }>tr</li><li${
          _scopeId
        }>column</li><li${
          _scopeId
        }>h6</li></ul><p${
          _scopeId
        }>You&#39;ll get:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for each correct checked answer.</li><li${
          _scopeId
        }>-1 point for each incorrect checked answer.</li><li${
          _scopeId
        }>0 points for each unchecked answer.</li><li${
          _scopeId
        }>Minimum is 0 points on the question.</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Which of the following tags "),
            (0,external_vue_.createVNode)("strong", null, "do not exist"),
            (0,external_vue_.createTextVNode)(" in HTML?")
          ]),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "h1"),
            (0,external_vue_.createVNode)("li", null, "table"),
            (0,external_vue_.createVNode)("li", null, "language"),
            (0,external_vue_.createVNode)("li", null, "tr"),
            (0,external_vue_.createVNode)("li", null, "column"),
            (0,external_vue_.createVNode)("li", null, "h6")
          ]),
          (0,external_vue_.createVNode)("p", null, "You'll get:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for each correct checked answer."),
            (0,external_vue_.createVNode)("li", null, "-1 point for each incorrect checked answer."),
            (0,external_vue_.createVNode)("li", null, "0 points for each unchecked answer."),
            (0,external_vue_.createVNode)("li", null, "Minimum is 0 points on the question.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-7-2p" tabindex="-1"><a class="header-anchor" href="#question-7-2p" aria-hidden="true">#</a> Question 7 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Which of the following statements about HTML attributes <strong${
          _scopeId
        }>are false</strong>?</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>The <code${
          _scopeId
        }>id</code> attribute can be used on any element.</li><li${
          _scopeId
        }>The <code${
          _scopeId
        }>button</code> element has an attribute called <code${
          _scopeId
        }>value</code>.</li><li${
          _scopeId
        }>The <code${
          _scopeId
        }>class</code> attribute can be used on any element.</li><li${
          _scopeId
        }>The <code${
          _scopeId
        }>lang</code> attribute can be used on any element.</li><li${
          _scopeId
        }>An element can have the <code${
          _scopeId
        }>id</code> attribute and the <code${
          _scopeId
        }>class</code> attribute set at the same time.</li><li${
          _scopeId
        }>Different elements can have the same value in their <code${
          _scopeId
        }>id</code> attributes.</li></ul><p${
          _scopeId
        }>You&#39;ll get:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for each correct checked answer.</li><li${
          _scopeId
        }>-1 point for each incorrect checked answer.</li><li${
          _scopeId
        }>0 points for each unchecked answer.</li><li${
          _scopeId
        }>Minimum is 0 points on the question.</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Which of the following statements about HTML attributes "),
            (0,external_vue_.createVNode)("strong", null, "are false"),
            (0,external_vue_.createTextVNode)("?")
          ]),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("code", null, "id"),
              (0,external_vue_.createTextVNode)(" attribute can be used on any element.")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("code", null, "button"),
              (0,external_vue_.createTextVNode)(" element has an attribute called "),
              (0,external_vue_.createVNode)("code", null, "value"),
              (0,external_vue_.createTextVNode)(".")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("code", null, "class"),
              (0,external_vue_.createTextVNode)(" attribute can be used on any element.")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("code", null, "lang"),
              (0,external_vue_.createTextVNode)(" attribute can be used on any element.")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("An element can have the "),
              (0,external_vue_.createVNode)("code", null, "id"),
              (0,external_vue_.createTextVNode)(" attribute and the "),
              (0,external_vue_.createVNode)("code", null, "class"),
              (0,external_vue_.createTextVNode)(" attribute set at the same time.")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("Different elements can have the same value in their "),
              (0,external_vue_.createVNode)("code", null, "id"),
              (0,external_vue_.createTextVNode)(" attributes.")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "You'll get:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for each correct checked answer."),
            (0,external_vue_.createVNode)("li", null, "-1 point for each incorrect checked answer."),
            (0,external_vue_.createVNode)("li", null, "0 points for each unchecked answer."),
            (0,external_vue_.createVNode)("li", null, "Minimum is 0 points on the question.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-8-1p" tabindex="-1"><a class="header-anchor" href="#question-8-1p" aria-hidden="true">#</a> Question 8 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The form below can be used on a website that, when receiving the request, searches other websites for products matching the search string, and lists the price for those products, so the user easily can find the cheapest one on the searched websites.</p><div class="language-html ext-html line-numbers-mode"${
          _scopeId
        }><pre class="language-html"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>form</span> <span class="token attr-name"${
          _scopeId
        }>action</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>method</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>XXX<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
   Search: <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>input</span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>text<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>name</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>query<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
   <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>input</span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>submit<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>value</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>Search!<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>form</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>Which method should be used when submitting the HTML form above (i.e. what should <code${
          _scopeId
        }>XXX</code> in the HTML code above be)? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The form below can be used on a website that, when receiving the request, searches other websites for products matching the search string, and lists the price for those products, so the user easily can find the cheapest one on the searched websites."),
          (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "action"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "method"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("XXX"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n   Search: "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("input")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("text"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("query"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n   "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("input")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("submit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "value"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("Search!"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("form")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Which method should be used when submitting the HTML form above (i.e. what should "),
            (0,external_vue_.createVNode)("code", null, "XXX"),
            (0,external_vue_.createTextVNode)(" in the HTML code above be)? Justify your answer.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-9-1p" tabindex="-1"><a class="header-anchor" href="#question-9-1p" aria-hidden="true">#</a> Question 9 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Explain what a <em${
          _scopeId
        }>declaration</em> is in CSS, give an example of one and explain how that one works.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Explain what a "),
            (0,external_vue_.createVNode)("em", null, "declaration"),
            (0,external_vue_.createTextVNode)(" is in CSS, give an example of one and explain how that one works.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-10-1p" tabindex="-1"><a class="header-anchor" href="#question-10-1p" aria-hidden="true">#</a> Question 10 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Explain what a <em${
          _scopeId
        }>media query</em> can be used for in CSS.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Explain what a "),
            (0,external_vue_.createVNode)("em", null, "media query"),
            (0,external_vue_.createTextVNode)(" can be used for in CSS.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-11-1p" tabindex="-1"><a class="header-anchor" href="#question-11-1p" aria-hidden="true">#</a> Question 11 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Here is some CSS code:</p><div class="language-css ext-css line-numbers-mode"${
          _scopeId
        }><pre class="language-css"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token selector"${
          _scopeId
        }>p.span b#i</span><span class="token punctuation"${
          _scopeId
        }>{</span>
  <span class="token property"${
          _scopeId
        }>background-color</span><span class="token punctuation"${
          _scopeId
        }>:</span> black<span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>Write HTML code that contains a match for the CSS selector in the code above.</p><p${
          _scopeId
        }><strong${
          _scopeId
        }>Note</strong>: You only need to write the HTML code found in the <code${
          _scopeId
        }>&lt;body&gt;</code> element (including the <code${
          _scopeId
        }>&lt;body&gt;</code> element), you do not need to write the HTML code for an entire HTML document.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Here is some CSS code:"),
          (0,external_vue_.createVNode)("div", { class: "language-css ext-css line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-css" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token selector" }, "p.span b#i"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token property" }, "background-color"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" black"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Write HTML code that contains a match for the CSS selector in the code above."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Note"),
            (0,external_vue_.createTextVNode)(": You only need to write the HTML code found in the "),
            (0,external_vue_.createVNode)("code", null, "<body>"),
            (0,external_vue_.createTextVNode)(" element (including the "),
            (0,external_vue_.createVNode)("code", null, "<body>"),
            (0,external_vue_.createTextVNode)(" element), you do not need to write the HTML code for an entire HTML document.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-12-1p" tabindex="-1"><a class="header-anchor" href="#question-12-1p" aria-hidden="true">#</a> Question 12 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>On a website with user accounts, before any user has started to use it, the developer adds some code that, if a user&#39;s password is longer than 20 characters, only makes use of the first 20 characters in the password, and ignores the rest. The programmer is reasoning that passwords consisting of 20 characters are long enough to be considered secure anyway, and the database will now use less space.</p><p${
          _scopeId
        }>Does the developer&#39;s reasoning make sense? Does it seem to be a good implemented website? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "On a website with user accounts, before any user has started to use it, the developer adds some code that, if a user's password is longer than 20 characters, only makes use of the first 20 characters in the password, and ignores the rest. The programmer is reasoning that passwords consisting of 20 characters are long enough to be considered secure anyway, and the database will now use less space."),
          (0,external_vue_.createVNode)("p", null, "Does the developer's reasoning make sense? Does it seem to be a good implemented website? Justify your answer.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-13-2p" tabindex="-1"><a class="header-anchor" href="#question-13-2p" aria-hidden="true">#</a> Question 13 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Are there any benefits using HTTPS on a website that only contains static HTML files, so users can only fetch content, and never send any content to the website?</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Are there any benefits using HTTPS on a website that only contains static HTML files, so users can only fetch content, and never send any content to the website?")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-14-2p" tabindex="-1"><a class="header-anchor" href="#question-14-2p" aria-hidden="true">#</a> Question 14 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Here is an HTML form on a website one can use to login on that website:</p><div class="language-html ext-html line-numbers-mode"${
          _scopeId
        }><pre class="language-html"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>form</span> <span class="token attr-name"${
          _scopeId
        }>method</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>post<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>action</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>/login<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    Username: <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>input</span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>text<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>     <span class="token attr-name"${
          _scopeId
        }>name</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>username<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    Password: <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>input</span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>password<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>name</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>password<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
              <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>input</span> <span class="token attr-name"${
          _scopeId
        }>type</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>submit<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span>   <span class="token attr-name"${
          _scopeId
        }>value</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>Sign in!<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>form</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>Here is the code on the server handling the HTTP request sent when the form is submitted:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>app<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>post</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;/login&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>request<span class="token punctuation"${
          _scopeId
        }>,</span> response</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
  <span class="token keyword"${
          _scopeId
        }>const</span> username <span class="token operator"${
          _scopeId
        }>=</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>body<span class="token punctuation"${
          _scopeId
        }>.</span>username
  <span class="token keyword"${
          _scopeId
        }>const</span> password <span class="token operator"${
          _scopeId
        }>=</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>body<span class="token punctuation"${
          _scopeId
        }>.</span>password
  <span class="token comment"${
          _scopeId
        }>// Query to be sent to the database to check if password and username are correct.</span>
  <span class="token keyword"${
          _scopeId
        }>const</span> query <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&#39;SELECT id FROM members WHERE username = &quot;&#39;</span><span class="token operator"${
          _scopeId
        }>+</span>username<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&#39;&quot; AND password = &quot;&#39;</span><span class="token operator"${
          _scopeId
        }>+</span>password<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&#39;&quot;&#39;</span>
  <span class="token comment"${
          _scopeId
        }>// Query sent to database, the id of the user is retrieved, etc.</span>
  <span class="token comment"${
          _scopeId
        }>// ...</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>As your answer, write a username and a password you can use to login as the member having the password <code${
          _scopeId
        }>abc123</code>, no matter which username that member has (this can be used to see if a member/which member that has that password).</p><p${
          _scopeId
        }>Be explicit about what you enter as username and what you enter as password.</p><p${
          _scopeId
        }><strong${
          _scopeId
        }>Note</strong>: As you can see in the code, passwords are stored as plain text in the database.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Here is an HTML form on a website one can use to login on that website:"),
          (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "method"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("post"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "action"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("/login"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    Username: "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("input")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("text"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)("     "),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("username"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    Password: "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("input")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("password"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("password"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n              "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("input")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("submit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)("   "),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "value"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("Sign in!"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("form")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Here is the code on the server handling the HTTP request sent when the form is submitted:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("app"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "post"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'/login'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("request"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" response")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" username "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("body"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("username\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" password "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("body"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("password\n  "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Query to be sent to the database to check if password and username are correct."),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" query "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'SELECT id FROM members WHERE username = \"'"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("username"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'\" AND password = \"'"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("password"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'\"'"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Query sent to database, the id of the user is retrieved, etc."),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("As your answer, write a username and a password you can use to login as the member having the password "),
            (0,external_vue_.createVNode)("code", null, "abc123"),
            (0,external_vue_.createTextVNode)(", no matter which username that member has (this can be used to see if a member/which member that has that password).")
          ]),
          (0,external_vue_.createVNode)("p", null, "Be explicit about what you enter as username and what you enter as password."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Note"),
            (0,external_vue_.createTextVNode)(": As you can see in the code, passwords are stored as plain text in the database.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-15-2p" tabindex="-1"><a class="header-anchor" href="#question-15-2p" aria-hidden="true">#</a> Question 15 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what a session is, give two examples of what they can be used for and explain how they work/can be implemented.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a session is, give two examples of what they can be used for and explain how they work/can be implemented.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-16-2p" tabindex="-1"><a class="header-anchor" href="#question-16-2p" aria-hidden="true">#</a> Question 16 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><code${
          _scopeId
        }>Website A</code> contains a cross site request forgery vulnerability. Explain what they need to do to fix the vulnerability. Don&#39;t mention any library/framework; give a general description of how they can fix the vulnerability (mention details).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("code", null, "Website A"),
            (0,external_vue_.createTextVNode)(" contains a cross site request forgery vulnerability. Explain what they need to do to fix the vulnerability. Don't mention any library/framework; give a general description of how they can fix the vulnerability (mention details).")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-17-2p" tabindex="-1"><a class="header-anchor" href="#question-17-2p" aria-hidden="true">#</a> Question 17 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what a foreign key constraints is, give an example of a web application that would use a foreign key constraint, and give an example of what could go wrong if the web application wouldn&#39;t have used a foreign key constraint.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a foreign key constraints is, give an example of a web application that would use a foreign key constraint, and give an example of what could go wrong if the web application wouldn't have used a foreign key constraint.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-18-1p" tabindex="-1"><a class="header-anchor" href="#question-18-1p" aria-hidden="true">#</a> Question 18 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>This is a question about GDPR. The scenario is that you are the owner of a website, and you want to collect the IP addresses of your visitors, so you can see how many unique visitors you have. Which of the statements below are true for you to comply with GDPR?</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>It&#39;s OK for me to collect the IP addresses of my visitors without informing them about it.</li><li${
          _scopeId
        }>It&#39;s OK for me to collect the IP addresses of my visitors as long as I inform them about it in advance.</li><li${
          _scopeId
        }>I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If they later regret their decision and say no I have to delete their IP addresses.</li><li${
          _scopeId
        }>I can start collecting the IP addresses of my visitors and then ask my visitors if I may collect their IP addresses, but I have to delete the IP addresses from the visitors that say no.</li><li${
          _scopeId
        }>I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If some visitors later regret their decision and say no I don&#39;t have to delete their IP addresses, because I had their permission to collect them when I collected them.</li></ul><p${
          _scopeId
        }>You&#39;ll get:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for each correct checked answer.</li><li${
          _scopeId
        }>-1 point for each incorrect checked answer.</li><li${
          _scopeId
        }>0 points for each unchecked answer.</li><li${
          _scopeId
        }>Minimum is 0 points on the question.</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "This is a question about GDPR. The scenario is that you are the owner of a website, and you want to collect the IP addresses of your visitors, so you can see how many unique visitors you have. Which of the statements below are true for you to comply with GDPR?"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "It's OK for me to collect the IP addresses of my visitors without informing them about it."),
            (0,external_vue_.createVNode)("li", null, "It's OK for me to collect the IP addresses of my visitors as long as I inform them about it in advance."),
            (0,external_vue_.createVNode)("li", null, "I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If they later regret their decision and say no I have to delete their IP addresses."),
            (0,external_vue_.createVNode)("li", null, "I can start collecting the IP addresses of my visitors and then ask my visitors if I may collect their IP addresses, but I have to delete the IP addresses from the visitors that say no."),
            (0,external_vue_.createVNode)("li", null, "I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If some visitors later regret their decision and say no I don't have to delete their IP addresses, because I had their permission to collect them when I collected them.")
          ]),
          (0,external_vue_.createVNode)("p", null, "You'll get:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for each correct checked answer."),
            (0,external_vue_.createVNode)("li", null, "-1 point for each incorrect checked answer."),
            (0,external_vue_.createVNode)("li", null, "0 points for each unchecked answer."),
            (0,external_vue_.createVNode)("li", null, "Minimum is 0 points on the question.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-19-1p" tabindex="-1"><a class="header-anchor" href="#question-19-1p" aria-hidden="true">#</a> Question 19 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Implement the JavaScript function <code${
          _scopeId
        }>getSums(numbers_1, numbers_2)</code>, that receives two arrays with numbers (both arrays contains the same number of numbers) as argument and returns a new array that contains the pairwise sum of the numbers in the array.</p><p${
          _scopeId
        }>Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getSums</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// --&gt; [4, 6]</span>
<span class="token function"${
          _scopeId
        }>getSums</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>7</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// --&gt; [12, 7, 8]</span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Implement the JavaScript function "),
            (0,external_vue_.createVNode)("code", null, "getSums(numbers_1, numbers_2)"),
            (0,external_vue_.createTextVNode)(", that receives two arrays with numbers (both arrays contains the same number of numbers) as argument and returns a new array that contains the pairwise sum of the numbers in the array.")
          ]),
          (0,external_vue_.createVNode)("p", null, "Sample usage:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSums"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// --> [4, 6]"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSums"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// --> [12, 7, 8]"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-20-2p" tabindex="-1"><a class="header-anchor" href="#question-20-2p" aria-hidden="true">#</a> Question 20 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In JavaScript, a human with name and an age (in years) can be represented as an object like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> human <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>name<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Alice&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> age<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>10</span><span class="token punctuation"${
          _scopeId
        }>}</span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>Implement the function <code${
          _scopeId
        }>containsAdult(humans)</code>, which receives an array with human objects and returns <code${
          _scopeId
        }>true</code> if any human in the array is 18 years or older, otherwise <code${
          _scopeId
        }>false</code>.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In JavaScript, a human with name and an age (in years) can be represented as an object like this:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" human "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" age"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Implement the function "),
            (0,external_vue_.createVNode)("code", null, "containsAdult(humans)"),
            (0,external_vue_.createTextVNode)(", which receives an array with human objects and returns "),
            (0,external_vue_.createVNode)("code", null, "true"),
            (0,external_vue_.createTextVNode)(" if any human in the array is 18 years or older, otherwise "),
            (0,external_vue_.createVNode)("code", null, "false"),
            (0,external_vue_.createTextVNode)(".")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-21-2p" tabindex="-1"><a class="header-anchor" href="#question-21-2p" aria-hidden="true">#</a> Question 21 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In JavaScript, implement the synchronous function <code${
          _scopeId
        }>duplicateString(string)</code>, which receives a string as argument and returns a string containing that string twice, e.g. <code${
          _scopeId
        }>duplicateString(&#39;ab&#39;)</code> ➔ <code${
          _scopeId
        }>abab</code>.</p><p${
          _scopeId
        }>Then implement the synchronous function <code${
          _scopeId
        }>duplicateStringTwice(string)</code>, which receives a string as argument and returns a string containing that string four times, e.g. <code${
          _scopeId
        }>duplicateStringTwice(&#39;ab&#39;)</code> ➔ <code${
          _scopeId
        }>abababab</code>. The only allowed operation to use in the implementation of <code${
          _scopeId
        }>duplicateStringTwice(string)</code> is function calls to <code${
          _scopeId
        }>duplicateString(string)</code>.</p><p${
          _scopeId
        }>Then implement asynchronous versions of these two functions using callback functions instead of return values. The asynchronous version of <code${
          _scopeId
        }>duplicateStringTwice</code> may only be implemented using the asynchronous version of <code${
          _scopeId
        }>duplicateString</code>, no other operations are allowed.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("In JavaScript, implement the synchronous function "),
            (0,external_vue_.createVNode)("code", null, "duplicateString(string)"),
            (0,external_vue_.createTextVNode)(", which receives a string as argument and returns a string containing that string twice, e.g. "),
            (0,external_vue_.createVNode)("code", null, "duplicateString('ab')"),
            (0,external_vue_.createTextVNode)(" ➔ "),
            (0,external_vue_.createVNode)("code", null, "abab"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Then implement the synchronous function "),
            (0,external_vue_.createVNode)("code", null, "duplicateStringTwice(string)"),
            (0,external_vue_.createTextVNode)(", which receives a string as argument and returns a string containing that string four times, e.g. "),
            (0,external_vue_.createVNode)("code", null, "duplicateStringTwice('ab')"),
            (0,external_vue_.createTextVNode)(" ➔ "),
            (0,external_vue_.createVNode)("code", null, "abababab"),
            (0,external_vue_.createTextVNode)(". The only allowed operation to use in the implementation of "),
            (0,external_vue_.createVNode)("code", null, "duplicateStringTwice(string)"),
            (0,external_vue_.createTextVNode)(" is function calls to "),
            (0,external_vue_.createVNode)("code", null, "duplicateString(string)"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Then implement asynchronous versions of these two functions using callback functions instead of return values. The asynchronous version of "),
            (0,external_vue_.createVNode)("code", null, "duplicateStringTwice"),
            (0,external_vue_.createTextVNode)(" may only be implemented using the asynchronous version of "),
            (0,external_vue_.createVNode)("code", null, "duplicateString"),
            (0,external_vue_.createTextVNode)(", no other operations are allowed.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/exams/exam-2021-08-16.html.vue?vue&type=template&id=e583ccfe

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/exams/exam-2021-08-16.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exam_2021_08_16_html = (__exports__);

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

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d8d0c3dc",
  "path": "/courses/web-development-fundamentals/exams/exam-2021-08-16.html",
  "title": "Exam 2021-08-16",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Question 1 (1p)",
      "slug": "question-1-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 2 (1p)",
      "slug": "question-2-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 3 (1p)",
      "slug": "question-3-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 4 (1p)",
      "slug": "question-4-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 5 (1p)",
      "slug": "question-5-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 6 (2p)",
      "slug": "question-6-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 7 (2p)",
      "slug": "question-7-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 8 (1p)",
      "slug": "question-8-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 9 (1p)",
      "slug": "question-9-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 10 (1p)",
      "slug": "question-10-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 11 (1p)",
      "slug": "question-11-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 12 (1p)",
      "slug": "question-12-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 13 (2p)",
      "slug": "question-13-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 14 (2p)",
      "slug": "question-14-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 15 (2p)",
      "slug": "question-15-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 16 (2p)",
      "slug": "question-16-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 17 (2p)",
      "slug": "question-17-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 18 (1p)",
      "slug": "question-18-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 19 (1p)",
      "slug": "question-19-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 20 (2p)",
      "slug": "question-20-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 21 (2p)",
      "slug": "question-21-2p",
      "children": []
    }
  ],
  "filePathRelative": "courses/web-development-fundamentals/exams/exam-2021-08-16.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=9503.app.js.map