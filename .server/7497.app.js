"use strict";
exports.id = 7497;
exports.ids = [7497];
exports.modules = {

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exam_2021_08_22_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2021-08-22.html.vue?vue&type=template&id=b03c08ee



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExamQuestion = (0,external_vue_.resolveComponent)("ExamQuestion")

  _push(`<!--[--><h1 id="exam-2021-08-22" tabindex="-1"><a class="header-anchor" href="#exam-2021-08-22" aria-hidden="true">#</a> Exam 2021-08-22</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2021-08-22.</p><div class="custom-container danger"><p class="custom-container-title">Point reduction for improper usage of upper-/lowercase characters</p><p>As explained in the exam instructions, answers not properly using upper-/lowercase characters will receive point reduction. This time it has only been set to <code>0.1</code> points for each answer that do not properly use upper-/lowercase characters, such as answers written with only lowercase characters. Next time this will likely increase.</p></div><hr><p>Start by reading through all questions.</p><p>Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required.</li><li>For grade 4, 60% of max score (18 points) is required.</li><li>For grade 5, 80% of max score (24 points) is required.</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam.</li><li>A dictionary to translate to/from English from/to your native language.</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In client-side JavaScript, explain when you should use <code${
          _scopeId
        }>anElement.innerText</code> and when you should use <code${
          _scopeId
        }>anElement.innerHTML</code>.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("In client-side JavaScript, explain when you should use "),
            (0,external_vue_.createVNode)("code", null, "anElement.innerText"),
            (0,external_vue_.createTextVNode)(" and when you should use "),
            (0,external_vue_.createVNode)("code", null, "anElement.innerHTML"),
            (0,external_vue_.createTextVNode)(".")
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
        _push(`<p${
          _scopeId
        }>Explain the difference between:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>querySelector</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;form&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;submit&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> handleSubmission<span class="token punctuation"${
          _scopeId
        }>)</span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>And:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>querySelector</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;form&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;submit&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token function"${
          _scopeId
        }>handleSubmission</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain the difference between:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "querySelector"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'form'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'submit'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" handleSubmission"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "And:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "querySelector"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'form'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'submit'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "handleSubmission"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
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
        }>Does the code below contain a XSS vulnerability hackers can exploit? Justify your answer.</p><p${
          _scopeId
        }><strong${
          _scopeId
        }>app.js</strong></p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// ...</span>
app<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>get</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;/sum&#39;</span><span class="token punctuation"${
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
        }>const</span> model <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    x<span class="token operator"${
          _scopeId
        }>:</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>query<span class="token punctuation"${
          _scopeId
        }>.</span>x<span class="token punctuation"${
          _scopeId
        }>,</span>
    y<span class="token operator"${
          _scopeId
        }>:</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>query<span class="token punctuation"${
          _scopeId
        }>.</span>y<span class="token punctuation"${
          _scopeId
        }>,</span>
    sum<span class="token operator"${
          _scopeId
        }>:</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>query<span class="token punctuation"${
          _scopeId
        }>.</span>x <span class="token operator"${
          _scopeId
        }>+</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>query<span class="token punctuation"${
          _scopeId
        }>.</span>y
  <span class="token punctuation"${
          _scopeId
        }>}</span>
  
  response<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>render</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;sum.hbs&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> model<span class="token punctuation"${
          _scopeId
        }>)</span>
  
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token comment"${
          _scopeId
        }>// ...</span>
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
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }><strong${
          _scopeId
        }>views/sum.hbs</strong></p><div class="language-html ext-html line-numbers-mode"${
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
        }>&lt;</span>h1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Sum<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>h1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
{{{x}}} + {{{y}}} = {{{sum}}}
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
          (0,external_vue_.createVNode)("p", null, "Does the code below contain a XSS vulnerability hackers can exploit? Justify your answer."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "app.js")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\napp"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'/sum'"),
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
                (0,external_vue_.createTextVNode)("\n  \n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" model "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    x"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("x"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    y"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("y"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    sum"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("y\n  "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n  \n  response"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "render"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"sum.hbs\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" model"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  \n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "views/sum.hbs")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("h1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Sum"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("h1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n{{{x}}} + {{{y}}} = {{{sum}}}\n")
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
  _push(`<h2 id="question-4-1p" tabindex="-1"><a class="header-anchor" href="#question-4-1p" aria-hidden="true">#</a> Question 4 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Match each HTTP status code with its reason phrase.</p><p${
          _scopeId
        }>Status codes: <code${
          _scopeId
        }>200</code> <code${
          _scopeId
        }>201</code> <code${
          _scopeId
        }>400</code> <code${
          _scopeId
        }>401</code> <code${
          _scopeId
        }>405</code></p><p${
          _scopeId
        }>Reason Phrases: <code${
          _scopeId
        }>Method Not Allowed</code> <code${
          _scopeId
        }>OK</code> <code${
          _scopeId
        }>Created</code> <code${
          _scopeId
        }>Bad Request</code> <code${
          _scopeId
        }>Unauthorized</code></p><p${
          _scopeId
        }>All needs to be matched correct to get any points.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Match each HTTP status code with its reason phrase."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Status codes: "),
            (0,external_vue_.createVNode)("code", null, "200"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "201"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "400"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "401"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "405")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Reason Phrases: "),
            (0,external_vue_.createVNode)("code", null, "Method Not Allowed"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "OK"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "Created"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "Bad Request"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "Unauthorized")
          ]),
          (0,external_vue_.createVNode)("p", null, "All needs to be matched correct to get any points.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-5-1p" tabindex="-1"><a class="header-anchor" href="#question-5-1p" aria-hidden="true">#</a> Question 5 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Name three different events that can fire on a webpage, and explain when they fire.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Name three different events that can fire on a webpage, and explain when they fire.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-6-1p" tabindex="-1"><a class="header-anchor" href="#question-6-1p" aria-hidden="true">#</a> Question 6 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Carl is assigned the task to design a REST API. To delete movies in a specific genre a specific year, he decides clients should send an HTTP <code${
          _scopeId
        }>DELETE</code> request to <code${
          _scopeId
        }>/movies</code>, add the header <code${
          _scopeId
        }>Content-Type: application/json</code> and in the body of the request add <code${
          _scopeId
        }>{&quot;year&quot;: 2000, &quot;genre&quot;: &quot;drama&quot;}</code> (change <code${
          _scopeId
        }>2000</code> and <code${
          _scopeId
        }>&quot;drama&quot;</code> to desired values).</p><p${
          _scopeId
        }>Is this a good or bad REST API design? Justify your answer.</p><p${
          _scopeId
        }><strong${
          _scopeId
        }>Note</strong>: You don&#39;t need to worry about authorization in this question.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Carl is assigned the task to design a REST API. To delete movies in a specific genre a specific year, he decides clients should send an HTTP "),
            (0,external_vue_.createVNode)("code", null, "DELETE"),
            (0,external_vue_.createTextVNode)(" request to "),
            (0,external_vue_.createVNode)("code", null, "/movies"),
            (0,external_vue_.createTextVNode)(", add the header "),
            (0,external_vue_.createVNode)("code", null, "Content-Type: application/json"),
            (0,external_vue_.createTextVNode)(" and in the body of the request add "),
            (0,external_vue_.createVNode)("code", null, "{\"year\": 2000, \"genre\": \"drama\"}"),
            (0,external_vue_.createTextVNode)(" (change "),
            (0,external_vue_.createVNode)("code", null, "2000"),
            (0,external_vue_.createTextVNode)(" and "),
            (0,external_vue_.createVNode)("code", null, "\"drama\""),
            (0,external_vue_.createTextVNode)(" to desired values).")
          ]),
          (0,external_vue_.createVNode)("p", null, "Is this a good or bad REST API design? Justify your answer."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Note"),
            (0,external_vue_.createTextVNode)(": You don't need to worry about authorization in this question.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-7-1p" tabindex="-1"><a class="header-anchor" href="#question-7-1p" aria-hidden="true">#</a> Question 7 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what a docker container and a docker image is.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a docker container and a docker image is.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-8-2p" tabindex="-1"><a class="header-anchor" href="#question-8-2p" aria-hidden="true">#</a> Question 8 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain to a web developer that knows nothing about scaling web applications how horizontal scaling works, and how you would solve the problems that comes with it. Be detailed.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain to a web developer that knows nothing about scaling web applications how horizontal scaling works, and how you would solve the problems that comes with it. Be detailed.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-9-2p" tabindex="-1"><a class="header-anchor" href="#question-9-2p" aria-hidden="true">#</a> Question 9 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Alice is assigned the task to design a REST API clients can use to login and then create new blogposts belonging to that account. She decides that when a user logs in, the client obtains an access token (<code${
          _scopeId
        }>THE.ACCESS.TOKEN</code>) containing the user&#39;s account id, which can be used to act on the behalf of that user. Then when the user wants to create a new blogpost belonging to her own account, the client sends an HTTP <code${
          _scopeId
        }>POST</code> request to <code${
          _scopeId
        }>/blogposts</code> with the headers <code${
          _scopeId
        }>Authorization: Bearer THE.ACCESS.TOKEN</code> and <code${
          _scopeId
        }>Content-Type: application/json</code>, and in the body pass <code${
          _scopeId
        }>{&quot;title&quot;: &quot;The actual title&quot;, &quot;content&quot;: &quot;The blogpost text.&quot;}</code>.</p><p${
          _scopeId
        }>Is this a good or bad design? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Alice is assigned the task to design a REST API clients can use to login and then create new blogposts belonging to that account. She decides that when a user logs in, the client obtains an access token ("),
            (0,external_vue_.createVNode)("code", null, "THE.ACCESS.TOKEN"),
            (0,external_vue_.createTextVNode)(") containing the user's account id, which can be used to act on the behalf of that user. Then when the user wants to create a new blogpost belonging to her own account, the client sends an HTTP "),
            (0,external_vue_.createVNode)("code", null, "POST"),
            (0,external_vue_.createTextVNode)(" request to "),
            (0,external_vue_.createVNode)("code", null, "/blogposts"),
            (0,external_vue_.createTextVNode)(" with the headers "),
            (0,external_vue_.createVNode)("code", null, "Authorization: Bearer THE.ACCESS.TOKEN"),
            (0,external_vue_.createTextVNode)(" and "),
            (0,external_vue_.createVNode)("code", null, "Content-Type: application/json"),
            (0,external_vue_.createTextVNode)(", and in the body pass "),
            (0,external_vue_.createVNode)("code", null, "{\"title\": \"The actual title\", \"content\": \"The blogpost text.\"}"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, "Is this a good or bad design? Justify your answer.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-10-2p" tabindex="-1"><a class="header-anchor" href="#question-10-2p" aria-hidden="true">#</a> Question 10 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Explain what MVC is, which parts it consists of and what each part is used for. Then also explain how web applications use MVC.</p><p${
          _scopeId
        }>Don&#39;t write any code.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what MVC is, which parts it consists of and what each part is used for. Then also explain how web applications use MVC."),
          (0,external_vue_.createVNode)("p", null, "Don't write any code.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-11-3p" tabindex="-1"><a class="header-anchor" href="#question-11-3p" aria-hidden="true">#</a> Question 11 (3p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Explain what a three-layered architecture is, which parts it consists of and what each part is used for. Then also explain how web applications use a three-layered architecture.</p><p${
          _scopeId
        }>Don&#39;t write any code.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a three-layered architecture is, which parts it consists of and what each part is used for. Then also explain how web applications use a three-layered architecture."),
          (0,external_vue_.createVNode)("p", null, "Don't write any code.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-12-1p" tabindex="-1"><a class="header-anchor" href="#question-12-1p" aria-hidden="true">#</a> Question 12 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In a three-layered architecture for a web application, is it only in the Presentation Layer we need to think about security vulnerabilities hackers can take advantage of? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In a three-layered architecture for a web application, is it only in the Presentation Layer we need to think about security vulnerabilities hackers can take advantage of? Justify your answer.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-13-2p" tabindex="-1"><a class="header-anchor" href="#question-13-2p" aria-hidden="true">#</a> Question 13 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what a JWT is, which parts it consists of and what each part is used for. Make sure to mention all details so the reader understand why they are secure to use.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a JWT is, which parts it consists of and what each part is used for. Make sure to mention all details so the reader understand why they are secure to use.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-14-1p" tabindex="-1"><a class="header-anchor" href="#question-14-1p" aria-hidden="true">#</a> Question 14 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In a three layered architecture, give an example of an implementation detail that should not be exposed to the next layer. Choose whichever layer you want. Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In a three layered architecture, give an example of an implementation detail that should not be exposed to the next layer. Choose whichever layer you want. Justify your answer.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-15-2p" tabindex="-1"><a class="header-anchor" href="#question-15-2p" aria-hidden="true">#</a> Question 15 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The function <code${
          _scopeId
        }>addBlogpost()</code> is in a blogpost repository in the Data Access Layer of a three layered application that stores its resources in a relational database. On the website, users can create their own accounts and then create blogposts belonging to their own account.</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>addBlogpost</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>blogpost<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> query <span class="token operator"${
          _scopeId
        }>=</span> <span class="token template-string"${
          _scopeId
        }><span class="token template-punctuation string"${
          _scopeId
        }>\`</span><span class="token string"${
          _scopeId
        }>
        INSERT INTO blogposts (accountId, title, content) VALUES(?, ?, ?)
    </span><span class="token template-punctuation string"${
          _scopeId
        }>\`</span></span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> values <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
        blogpost<span class="token punctuation"${
          _scopeId
        }>.</span>accountId<span class="token punctuation"${
          _scopeId
        }>,</span>
        blogpost<span class="token punctuation"${
          _scopeId
        }>.</span>title<span class="token punctuation"${
          _scopeId
        }>,</span>
        blogpost<span class="token punctuation"${
          _scopeId
        }>.</span>content
    <span class="token punctuation"${
          _scopeId
        }>]</span>
    
    db<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>query</span><span class="token punctuation"${
          _scopeId
        }>(</span>query<span class="token punctuation"${
          _scopeId
        }>,</span> values<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> results</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;DB Communication error.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>,</span> results<span class="token punctuation"${
          _scopeId
        }>.</span>insertId<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
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
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>15</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>16</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>17</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>18</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>19</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>20</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>21</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>What&#39;s wrong with the current implementation of the function? Explain how you would solve that problem (in words, don&#39;t write any code).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The function "),
            (0,external_vue_.createVNode)("code", null, "addBlogpost()"),
            (0,external_vue_.createTextVNode)(" is in a blogpost repository in the Data Access Layer of a three layered application that stores its resources in a relational database. On the website, users can create their own accounts and then create blogposts belonging to their own account.")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addBlogpost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("blogpost"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" query "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token template-string" }, [
                  (0,external_vue_.createVNode)("span", { class: "token template-punctuation string" }, "`"),
                  (0,external_vue_.createVNode)("span", { class: "token string" }, "\n        INSERT INTO blogposts (accountId, title, content) VALUES(?, ?, ?)\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token template-punctuation string" }, "`")
                ]),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" values "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("\n        blogpost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("accountId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n        blogpost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("title"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n        blogpost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("content\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    \n    db"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" values"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" results")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"DB Communication error.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" results"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("insertId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n"),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "What's wrong with the current implementation of the function? Explain how you would solve that problem (in words, don't write any code).")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-16-2p" tabindex="-1"><a class="header-anchor" href="#question-16-2p" aria-hidden="true">#</a> Question 16 (2p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Describe a case where you need to add CORS support to your web application. Then also describe how you would add support for it (in general, and not in a specific framework).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Describe a case where you need to add CORS support to your web application. Then also describe how you would add support for it (in general, and not in a specific framework).")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-17-1p" tabindex="-1"><a class="header-anchor" href="#question-17-1p" aria-hidden="true">#</a> Question 17 (1p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what a CORS preflight request is, and give example of when one is needed.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a CORS preflight request is, and give example of when one is needed.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="question-18-4p" tabindex="-1"><a class="header-anchor" href="#question-18-4p" aria-hidden="true">#</a> Question 18 (4p)</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The function <code${
          _scopeId
        }>getMovieById()</code> can be used to fetch a movie with a specific id asynchronously from the server like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getMovieById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>movie<span class="token punctuation"${
          _scopeId
        }>,</span> error</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Couldn&#39;t fetch the movie.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Do something with the movie.</span>
        <span class="token comment"${
          _scopeId
        }>// movie = {id: 3, title: &quot;Hello!&quot;, producerId: 123, categoryId: 45}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }>The function <code${
          _scopeId
        }>getProducerById()</code> can be used to fetch a producer with a specific id asynchronously from the server like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getProducerById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>producer<span class="token punctuation"${
          _scopeId
        }>,</span> error</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Couldn&#39;t fetch the producer.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Do something with the producer.</span>
        <span class="token comment"${
          _scopeId
        }>// producer = {id: 5, name: &quot;Robin&quot;}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }>The function <code${
          _scopeId
        }>getCategoryById()</code> can be used to fetch a category with a specific id asynchronously from the server like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getCategoryById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>7</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>category<span class="token punctuation"${
          _scopeId
        }>,</span> error</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Couldn&#39;t fetch the category.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Do something with the category.</span>
        <span class="token comment"${
          _scopeId
        }>// category = {id: 7, name: &quot;Comedy&quot;}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }>Create the function <code${
          _scopeId
        }>getMovieByIdWithProducerAndCategory()</code>, that fetches a movie with a specific id, and then fetches the producer and the category the movie belongs too, so it can be used like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getMovieByIdWithProducerAndCategory</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>movie<span class="token punctuation"${
          _scopeId
        }>,</span> producer<span class="token punctuation"${
          _scopeId
        }>,</span> category<span class="token punctuation"${
          _scopeId
        }>,</span> error</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Couldn&#39;t fetch all three resources.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Could fetch all three resources.</span>
        <span class="token comment"${
          _scopeId
        }>// movie = {id: 4, title: &quot;Hello!&quot;, producerId: 32, categoryId: 45}</span>
        <span class="token comment"${
          _scopeId
        }>// producer = {id: 32, name: &quot;Jessie&quot;}</span>
        <span class="token comment"${
          _scopeId
        }>// category = {id: 45, name: &quot;Horror&quot;}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>Important details:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>The callback function should be called only one time.</li><li${
          _scopeId
        }>As soon as any function gives an error, the callback function should be called with that error (the other arguments should be <code${
          _scopeId
        }>null</code>).</li><li${
          _scopeId
        }>The data should be fetched as fast as possible (loading times should be minimized).</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The function "),
            (0,external_vue_.createVNode)("code", null, "getMovieById()"),
            (0,external_vue_.createTextVNode)(" can be used to fetch a movie with a specific id asynchronously from the server like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("movie"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" error")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Couldn't fetch the movie."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do something with the movie."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// movie = {id: 3, title: \"Hello!\", producerId: 123, categoryId: 45}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
            (0,external_vue_.createTextVNode)("The function "),
            (0,external_vue_.createVNode)("code", null, "getProducerById()"),
            (0,external_vue_.createTextVNode)(" can be used to fetch a producer with a specific id asynchronously from the server like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getProducerById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("producer"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" error")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Couldn't fetch the producer."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do something with the producer."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// producer = {id: 5, name: \"Robin\"}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
            (0,external_vue_.createTextVNode)("The function "),
            (0,external_vue_.createVNode)("code", null, "getCategoryById()"),
            (0,external_vue_.createTextVNode)(" can be used to fetch a category with a specific id asynchronously from the server like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getCategoryById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("category"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" error")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Couldn't fetch the category."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do something with the category."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// category = {id: 7, name: \"Comedy\"}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
            (0,external_vue_.createTextVNode)("Create the function "),
            (0,external_vue_.createVNode)("code", null, "getMovieByIdWithProducerAndCategory()"),
            (0,external_vue_.createTextVNode)(", that fetches a movie with a specific id, and then fetches the producer and the category the movie belongs too, so it can be used like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByIdWithProducerAndCategory"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("movie"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" producer"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" category"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" error")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Couldn't fetch all three resources."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Could fetch all three resources."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// movie = {id: 4, title: \"Hello!\", producerId: 32, categoryId: 45}"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// producer = {id: 32, name: \"Jessie\"}"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// category = {id: 45, name: \"Horror\"}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Important details:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "The callback function should be called only one time."),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("As soon as any function gives an error, the callback function should be called with that error (the other arguments should be "),
              (0,external_vue_.createVNode)("code", null, "null"),
              (0,external_vue_.createTextVNode)(").")
            ]),
            (0,external_vue_.createVNode)("li", null, "The data should be fetched as fast as possible (loading times should be minimized).")
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
        }>The JavaScript function <code${
          _scopeId
        }>setTimeout()</code> can be used to schedule a call to a function in the future. Example:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>setTimeout</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// The code here in the function runs 1000 ms later.</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>1000</span><span class="token punctuation"${
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
        }></div></div><p${
          _scopeId
        }>The function <code${
          _scopeId
        }>getInfo()</code> can be used to fetch some info from a server. Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getInfo</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>info</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// This code runs when we have got the info.</span>
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
        }></div></div><p${
          _scopeId
        }>As you can see, <code${
          _scopeId
        }>getInfo()</code> is asynchronous, and it might take a few seconds before it has fetched the info from the server and passed it to the callback function.</p><p${
          _scopeId
        }>Your task is to implement the function <code${
          _scopeId
        }>getInfoOrFail()</code> that works according to the sample usage below.</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getInfoOrFail</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>didGetInfo<span class="token punctuation"${
          _scopeId
        }>,</span> info</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token comment"${
          _scopeId
        }>// didGetInfo is a boolean.</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token operator"${
          _scopeId
        }>!</span>didGetInfo<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// The server did not send back info within 3 seconds.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// We got info within 3 seconds.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }></div></div><p${
          _scopeId
        }>The callback function passed to <code${
          _scopeId
        }>getInfoOrFail()</code> should only be called once.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The JavaScript function "),
            (0,external_vue_.createVNode)("code", null, "setTimeout()"),
            (0,external_vue_.createTextVNode)(" can be used to schedule a call to a function in the future. Example:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setTimeout"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The code here in the function runs 1000 ms later."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1000"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The function "),
            (0,external_vue_.createVNode)("code", null, "getInfo()"),
            (0,external_vue_.createTextVNode)(" can be used to fetch some info from a server. Sample usage:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getInfo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "info"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This code runs when we have got the info."),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("As you can see, "),
            (0,external_vue_.createVNode)("code", null, "getInfo()"),
            (0,external_vue_.createTextVNode)(" is asynchronous, and it might take a few seconds before it has fetched the info from the server and passed it to the callback function.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Your task is to implement the function "),
            (0,external_vue_.createVNode)("code", null, "getInfoOrFail()"),
            (0,external_vue_.createTextVNode)(" that works according to the sample usage below.")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getInfoOrFail"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("didGetInfo"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" info")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// didGetInfo is a boolean."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!"),
                (0,external_vue_.createTextVNode)("didGetInfo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The server did not send back info within 3 seconds."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// We got info within 3 seconds."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The callback function passed to "),
            (0,external_vue_.createVNode)("code", null, "getInfoOrFail()"),
            (0,external_vue_.createTextVNode)(" should only be called once.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2021-08-22.html.vue?vue&type=template&id=b03c08ee

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2021-08-22.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exam_2021_08_22_html = (__exports__);

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

/***/ 2526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2f725a65",
  "path": "/courses/web-development-advanced-concepts/exams/exam-2021-08-22.html",
  "title": "Exam 2021-08-22",
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
      "title": "Question 6 (1p)",
      "slug": "question-6-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 7 (1p)",
      "slug": "question-7-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 8 (2p)",
      "slug": "question-8-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 9 (2p)",
      "slug": "question-9-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 10 (2p)",
      "slug": "question-10-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 11 (3p)",
      "slug": "question-11-3p",
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
      "title": "Question 14 (1p)",
      "slug": "question-14-1p",
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
      "title": "Question 17 (1p)",
      "slug": "question-17-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 18 (4p)",
      "slug": "question-18-4p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 19 (1p)",
      "slug": "question-19-1p",
      "children": []
    }
  ],
  "filePathRelative": "courses/web-development-advanced-concepts/exams/exam-2021-08-22.md",
  "git": {
    "updatedTime": 1642360861000
  }
}


/***/ })

};
;
//# sourceMappingURL=7497.app.js.map