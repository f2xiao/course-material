"use strict";
exports.id = 5393;
exports.ids = [5393];
exports.modules = {

/***/ 7488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exam_2022_03_26_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2022-03-26.html.vue?vue&type=template&id=7c43ae24



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExamQuestion = (0,external_vue_.resolveComponent)("ExamQuestion")

  _push(`<!--[--><h1 id="exam-2022-03-26" tabindex="-1"><a class="header-anchor" href="#exam-2022-03-26" aria-hidden="true">#</a> Exam 2022-03-26</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2022-03-26.</p><hr><p>Start by reading through all questions.</p><p>Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use anything but:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Each answer that contains multiple obvious errors, such as:</p><ul><li>A sentence starting with a lower case character</li><li>A sentence not ending with a period, question mark, or any other suitable character</li><li>A sentence that is incomplete</li><li>A sentence that is incomprehensible</li></ul><p>Will automatically lose 0.25 points. The ability to express yourself in text clearly is very important for an engineer, and therefor part of the examination.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="client-side" tabindex="-1"><a class="header-anchor" href="#client-side" aria-hidden="true">#</a> Client-side</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The code below will result in a runtime error when it&#39;s executed. Which is the runtime error, and what changes do you need to do to fix the error?</p><div class="language-html ext-html line-numbers-mode"${
          _scopeId
        }><pre class="language-html"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token doctype"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;!</span><span class="token doctype-tag"${
          _scopeId
        }>DOCTYPE</span> <span class="token name"${
          _scopeId
        }>html</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>html</span> <span class="token attr-name"${
          _scopeId
        }>lang</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>en<span class="token punctuation"${
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
        }>&lt;</span>head</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>meta</span> <span class="token attr-name"${
          _scopeId
        }>charset</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>UTF-8<span class="token punctuation"${
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
        }>&lt;</span>title</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Clock<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>title</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token script"${
          _scopeId
        }><span class="token language-javascript"${
          _scopeId
        }>
        
        <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>startClock</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token keyword"${
          _scopeId
        }>const</span> clockSpan <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;clock&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
            <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>updateClock</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                
                <span class="token keyword"${
          _scopeId
        }>const</span> now <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>new</span> <span class="token class-name"${
          _scopeId
        }>Date</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                
                clockSpan<span class="token punctuation"${
          _scopeId
        }>.</span>innerText <span class="token operator"${
          _scopeId
        }>=</span> now<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>toString</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                
            <span class="token punctuation"${
          _scopeId
        }>}</span>
            
            <span class="token comment"${
          _scopeId
        }>// Call updateClock each second in the future.</span>
            <span class="token function"${
          _scopeId
        }>setInterval</span><span class="token punctuation"${
          _scopeId
        }>(</span>updateClock<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>1000</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
            <span class="token comment"${
          _scopeId
        }>// setInterval doesn&#39;t call updateClock immediately,</span>
            <span class="token comment"${
          _scopeId
        }>// so we call it immediately ourselves. </span>
            <span class="token function"${
          _scopeId
        }>updateClock</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span>
        
        <span class="token function"${
          _scopeId
        }>startClock</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
    </span></span><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>head</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>body</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>span</span> <span class="token attr-name"${
          _scopeId
        }>id</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>clock<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>span</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>body</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>html</span><span class="token punctuation"${
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
        }><span class="line-number"${
          _scopeId
        }>22</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The code below will result in a runtime error when it's executed. Which is the runtime error, and what changes do you need to do to fix the error?"),
          (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token doctype" }, [
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<!"),
                  (0,external_vue_.createVNode)("span", { class: "token doctype-tag" }, "DOCTYPE"),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token name" }, "html"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("html")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("en"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("head")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("meta")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "charset"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("UTF-8"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("title")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Clock"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("title")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token script" }, [
                  (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "startClock"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" clockSpan "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" document"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'clock'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "updateClock"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n                \n                "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" now "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Date"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n                \n                clockSpan"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("innerText "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" now"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "toString"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n                \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Call updateClock each second in the future."),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setInterval"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("updateClock"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "1000"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// setInterval doesn't call updateClock immediately,"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// so we call it immediately ourselves. "),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "updateClock"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n            \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "startClock"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n    ")
                  ])
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("head")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("body")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("span")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("clock"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("span")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("body")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("html")
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The runtime error you get is that <code${
          _scopeId
        }>clockSpan</code> will be <code${
          _scopeId
        }>null</code>, and you can&#39;t access the property <code${
          _scopeId
        }>innerText</code> of it. You get that because <code${
          _scopeId
        }>document.getElementById(&#39;clock&#39;)</code> will be executed before the web browser has read all HTML code, so it won&#39;t find the element we&#39;re looking for, and instead return back <code${
          _scopeId
        }>null</code>.</p><p${
          _scopeId
        }>To fix the problem, you need to make sure <code${
          _scopeId
        }>startClock()</code> is called after the web browser has read all HTML code. To make that happen, replace the following line of code:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>startClock</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
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
        }>With:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;DOMContentLoaded&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> startClock<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The runtime error you get is that "),
            (0,external_vue_.createVNode)("code", null, "clockSpan"),
            (0,external_vue_.createTextVNode)(" will be "),
            (0,external_vue_.createVNode)("code", null, "null"),
            (0,external_vue_.createTextVNode)(", and you can't access the property "),
            (0,external_vue_.createVNode)("code", null, "innerText"),
            (0,external_vue_.createTextVNode)(" of it. You get that because "),
            (0,external_vue_.createVNode)("code", null, "document.getElementById('clock')"),
            (0,external_vue_.createTextVNode)(" will be executed before the web browser has read all HTML code, so it won't find the element we're looking for, and instead return back "),
            (0,external_vue_.createVNode)("code", null, "null"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("To fix the problem, you need to make sure "),
            (0,external_vue_.createVNode)("code", null, "startClock()"),
            (0,external_vue_.createTextVNode)(" is called after the web browser has read all HTML code. To make that happen, replace the following line of code:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "startClock"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "With:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'DOMContentLoaded'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" startClock"),
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
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for identifying the runtime error <ul${
          _scopeId
        }><li${
          _scopeId
        }>Saying that it&#39;s an error that <code${
          _scopeId
        }>startClock()</code> is called before the web browser has read all HTML code is correct, but that is not the <em${
          _scopeId
        }>runtime error</em> that occurs</li><li${
          _scopeId
        }>Although the runtime error occurs when trying to read from <code${
          _scopeId
        }>clockSpan</code>, I have rewarded answers that indicate that <code${
          _scopeId
        }>document.getElementById(&#39;clock&#39;)</code> is the problem with 0.25 points (the runtime error would occur here if <code${
          _scopeId
        }>document.getElementById()</code> would throw an exception instead of returning <code${
          _scopeId
        }>null</code>)</li></ul></li><li${
          _scopeId
        }>0.5 points for functional solution</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for identifying the runtime error "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Saying that it's an error that "),
                  (0,external_vue_.createVNode)("code", null, "startClock()"),
                  (0,external_vue_.createTextVNode)(" is called before the web browser has read all HTML code is correct, but that is not the "),
                  (0,external_vue_.createVNode)("em", null, "runtime error"),
                  (0,external_vue_.createTextVNode)(" that occurs")
                ]),
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Although the runtime error occurs when trying to read from "),
                  (0,external_vue_.createVNode)("code", null, "clockSpan"),
                  (0,external_vue_.createTextVNode)(", I have rewarded answers that indicate that "),
                  (0,external_vue_.createVNode)("code", null, "document.getElementById('clock')"),
                  (0,external_vue_.createTextVNode)(" is the problem with 0.25 points (the runtime error would occur here if "),
                  (0,external_vue_.createVNode)("code", null, "document.getElementById()"),
                  (0,external_vue_.createTextVNode)(" would throw an exception instead of returning "),
                  (0,external_vue_.createVNode)("code", null, "null"),
                  (0,external_vue_.createTextVNode)(")")
                ])
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "0.5 points for functional solution")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-2-1p" tabindex="-1"><a class="header-anchor" href="#question-2-1p" aria-hidden="true">#</a> Question 2 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>On a webpage with three different <code${
          _scopeId
        }>&lt;form&gt;</code> elements, Bob needs to add one and the same submit listener to all of them. To do that, he creates the helper function <code${
          _scopeId
        }>addSubmitListenerToForm(formId)</code>, which is implemented like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>onSubmit</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>event</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// Some code that handles the form submission</span>
    <span class="token comment"${
          _scopeId
        }>// (which code is not important for the question).</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>addSubmitListenerToForm</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>formId</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> form <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span>formId<span class="token punctuation"${
          _scopeId
        }>)</span>
    
    form<span class="token punctuation"${
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
        }>onSubmit</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
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
        }></div></div><p${
          _scopeId
        }>Then, somewhere in the rest of his code, he calls <code${
          _scopeId
        }>addSubmitListenerToForm()</code> three times, and pass it the id of respective <code${
          _scopeId
        }>&lt;form&gt;</code> each time.</p><p${
          _scopeId
        }>The code above contains an obvious error. Which is that error, and what changes do you need to do to fix it?</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("On a webpage with three different "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" elements, Bob needs to add one and the same submit listener to all of them. To do that, he creates the helper function "),
            (0,external_vue_.createVNode)("code", null, "addSubmitListenerToForm(formId)"),
            (0,external_vue_.createTextVNode)(", which is implemented like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onSubmit"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "event"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Some code that handles the form submission"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// (which code is not important for the question)."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addSubmitListenerToForm"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "formId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" form "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("formId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    form"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'submit'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onSubmit"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Then, somewhere in the rest of his code, he calls "),
            (0,external_vue_.createVNode)("code", null, "addSubmitListenerToForm()"),
            (0,external_vue_.createTextVNode)(" three times, and pass it the id of respective "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" each time.")
          ]),
          (0,external_vue_.createVNode)("p", null, "The code above contains an obvious error. Which is that error, and what changes do you need to do to fix it?")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The error is on this line of code:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>form<span class="token punctuation"${
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
        }>onSubmit</span><span class="token punctuation"${
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
        }></div></div><p${
          _scopeId
        }>Here, the <code${
          _scopeId
        }>onSubmit()</code> function is currently called, and its return value is passed passed to <code${
          _scopeId
        }>addEventListener()</code>. That&#39;s not how it should work, because the <code${
          _scopeId
        }>onSubmit()</code> function itself should be passed to <code${
          _scopeId
        }>addEventListener()</code>. So, the correct code is:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>form<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;submit&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> onSubmit<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("p", null, "The error is on this line of code:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("form"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'submit'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onSubmit"),
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
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Here, the "),
            (0,external_vue_.createVNode)("code", null, "onSubmit()"),
            (0,external_vue_.createTextVNode)(" function is currently called, and its return value is passed passed to "),
            (0,external_vue_.createVNode)("code", null, "addEventListener()"),
            (0,external_vue_.createTextVNode)(". That's not how it should work, because the "),
            (0,external_vue_.createVNode)("code", null, "onSubmit()"),
            (0,external_vue_.createTextVNode)(" function itself should be passed to "),
            (0,external_vue_.createVNode)("code", null, "addEventListener()"),
            (0,external_vue_.createTextVNode)(". So, the correct code is:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("form"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'submit'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" onSubmit"),
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
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for explaining the error</li><li${
          _scopeId
        }>0.5 points for suggesting a correct fix</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for explaining the error"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for suggesting a correct fix")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-3-1p" tabindex="-1"><a class="header-anchor" href="#question-3-1p" aria-hidden="true">#</a> Question 3 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In a Single-Page Application (SPA), the following HTML code is created and inserted into the DOM using client-side JavaScript (<code${
          _scopeId
        }>document.createElement()</code>, etc.) and shown to the user when the user navigates to the login page in the SPA:</p><div class="language-html ext-html line-numbers-mode"${
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
        }>&gt;</span></span>Login<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>h1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>form</span> <span class="token attr-name"${
          _scopeId
        }>id</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>login<span class="token punctuation"${
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
        }>&lt;</span>div</span><span class="token punctuation"${
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
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>id</span><span class="token attr-value"${
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
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>div</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>div</span><span class="token punctuation"${
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
        }>id</span><span class="token attr-value"${
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
        }>&lt;/</span>div</span><span class="token punctuation"${
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
        }>&quot;</span>Login<span class="token punctuation"${
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
        }>Immediately after that, the following client-side JavaScript function is called to handle the form with client-side JavaScript:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>setupLoginPage</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> username <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;username&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>value
    <span class="token keyword"${
          _scopeId
        }>const</span> password <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;password&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>value
    
    <span class="token keyword"${
          _scopeId
        }>const</span> loginForm <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;login&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    loginForm<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;submit&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>event</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        
        <span class="token comment"${
          _scopeId
        }>// Let&#39;s assume the sendLoginRequest() function exists,</span>
        <span class="token comment"${
          _scopeId
        }>// and that it properly handle the login request</span>
        <span class="token comment"${
          _scopeId
        }>// (displays errors if something goes wrong, shows</span>
        <span class="token comment"${
          _scopeId
        }>// another page if the login succeeds, etc.).</span>
        <span class="token function"${
          _scopeId
        }>sendLoginRequest</span><span class="token punctuation"${
          _scopeId
        }>(</span>username<span class="token punctuation"${
          _scopeId
        }>,</span> password<span class="token punctuation"${
          _scopeId
        }>)</span>
        
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
        }></div></div><p${
          _scopeId
        }>The code above does not work as it should because it contains two different type of errors. Which are the two type of errors, and what changes do you need to do to the code to fix the errors?</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("In a Single-Page Application (SPA), the following HTML code is created and inserted into the DOM using client-side JavaScript ("),
            (0,external_vue_.createVNode)("code", null, "document.createElement()"),
            (0,external_vue_.createTextVNode)(", etc.) and shown to the user when the user navigates to the login page in the SPA:")
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
                (0,external_vue_.createTextVNode)("Login"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("h1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("login"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("div")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n        Username: "),
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
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("username"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("div")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("div")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n        Password: "),
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
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("password"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("div")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
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
                    (0,external_vue_.createTextVNode)("Login"),
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
          (0,external_vue_.createVNode)("p", null, "Immediately after that, the following client-side JavaScript function is called to handle the form with client-side JavaScript:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setupLoginPage"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" username "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'username'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("value\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" password "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'password'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("value\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" loginForm "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'login'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    loginForm"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'submit'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "event"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Let's assume the sendLoginRequest() function exists,"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// and that it properly handle the login request"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// (displays errors if something goes wrong, shows"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// another page if the login succeeds, etc.)."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "sendLoginRequest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("username"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" password"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n    "),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "The code above does not work as it should because it contains two different type of errors. Which are the two type of errors, and what changes do you need to do to the code to fix the errors?")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><strong${
          _scopeId
        }>First type of error</strong> <br${
          _scopeId
        }> The text in the <code${
          _scopeId
        }>&lt;input&gt;</code> elements are read immediately when <code${
          _scopeId
        }>setupLoginPage()</code> is called. At this point in time, they will always be empty, so when the <code${
          _scopeId
        }>&lt;form&gt;</code> is submitted, the user will always try to login with an empty username and an empty password, even if the user has entered something in the <code${
          _scopeId
        }>&lt;input&gt;</code> elements.</p><p${
          _scopeId
        }>To fix this type of error, move the following two lines of code:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> username <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;username&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>value
<span class="token keyword"${
          _scopeId
        }>const</span> password <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;password&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>value
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
        }></div></div><p${
          _scopeId
        }>To inside the submit listener, so they are executed when the <code${
          _scopeId
        }>&lt;form&gt;</code> is submitted.</p><p${
          _scopeId
        }>(optimally, <code${
          _scopeId
        }>document.getElementById(&#39;username|password&#39;)</code> can be in <code${
          _scopeId
        }>setupLoginPage()</code>, but reading their <code${
          _scopeId
        }>value</code> property should happen in the event listener)</p><p${
          _scopeId
        }><strong${
          _scopeId
        }>Second type of error</strong> <br${
          _scopeId
        }> Currently, when the <code${
          _scopeId
        }>&lt;form&gt;</code> is submitted, the web browser will send its own standard HTTP request to the server, and then load the new page it gets back. Since this is an SPA, we don&#39;t want that to happen, but we should handle the form ourselves.</p><p${
          _scopeId
        }>To prevent the web browser from sending its own standard HTTP request when the <code${
          _scopeId
        }>&lt;form&gt;</code> is submitted, we should call <code${
          _scopeId
        }>event.preventDefault()</code> in the submit listener.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "First type of error"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" The text in the "),
            (0,external_vue_.createVNode)("code", null, "<input>"),
            (0,external_vue_.createTextVNode)(" elements are read immediately when "),
            (0,external_vue_.createVNode)("code", null, "setupLoginPage()"),
            (0,external_vue_.createTextVNode)(" is called. At this point in time, they will always be empty, so when the "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" is submitted, the user will always try to login with an empty username and an empty password, even if the user has entered something in the "),
            (0,external_vue_.createVNode)("code", null, "<input>"),
            (0,external_vue_.createTextVNode)(" elements.")
          ]),
          (0,external_vue_.createVNode)("p", null, "To fix this type of error, move the following two lines of code:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" username "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'username'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("value\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" password "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'password'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("value\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("To inside the submit listener, so they are executed when the "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" is submitted.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("(optimally, "),
            (0,external_vue_.createVNode)("code", null, "document.getElementById('username|password')"),
            (0,external_vue_.createTextVNode)(" can be in "),
            (0,external_vue_.createVNode)("code", null, "setupLoginPage()"),
            (0,external_vue_.createTextVNode)(", but reading their "),
            (0,external_vue_.createVNode)("code", null, "value"),
            (0,external_vue_.createTextVNode)(" property should happen in the event listener)")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Second type of error"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Currently, when the "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" is submitted, the web browser will send its own standard HTTP request to the server, and then load the new page it gets back. Since this is an SPA, we don't want that to happen, but we should handle the form ourselves.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("To prevent the web browser from sending its own standard HTTP request when the "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" is submitted, we should call "),
            (0,external_vue_.createVNode)("code", null, "event.preventDefault()"),
            (0,external_vue_.createTextVNode)(" in the submit listener.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.25 points for text in <code${
          _scopeId
        }>&lt;input&gt;</code> read too early</li><li${
          _scopeId
        }>0.25 points for moving the read of <code${
          _scopeId
        }>&lt;input&gt;</code> to the event listener</li><li${
          _scopeId
        }>0.25 points for web browser loading new page when submitting the <code${
          _scopeId
        }>&lt;form&gt;</code></li><li${
          _scopeId
        }>0.25 points for calling <code${
          _scopeId
        }>event.preventDefault()</code></li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.25 points for text in "),
              (0,external_vue_.createVNode)("code", null, "<input>"),
              (0,external_vue_.createTextVNode)(" read too early")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.25 points for moving the read of "),
              (0,external_vue_.createVNode)("code", null, "<input>"),
              (0,external_vue_.createTextVNode)(" to the event listener")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.25 points for web browser loading new page when submitting the "),
              (0,external_vue_.createVNode)("code", null, "<form>")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.25 points for calling "),
              (0,external_vue_.createVNode)("code", null, "event.preventDefault()")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-4-1p" tabindex="-1"><a class="header-anchor" href="#question-4-1p" aria-hidden="true">#</a> Question 4 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Alice has a webpage with HTML code that contains a frequently asked questions list, part of the code shown below (<code${
          _scopeId
        }>&lt;dl&gt;</code> = <em${
          _scopeId
        }>definition list</em>, <code${
          _scopeId
        }>&lt;dt&gt;</code> = <em${
          _scopeId
        }>definition term</em>, <code${
          _scopeId
        }>&lt;dd&gt;</code> = <em${
          _scopeId
        }>definition description</em>).</p><div class="language-html ext-html line-numbers-mode"${
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
        }>&gt;</span></span>Frequently Asked Questions<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>h1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dl</span> <span class="token attr-name"${
          _scopeId
        }>id</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>faq<span class="token punctuation"${
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
        }>&lt;</span>dt</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>What&#39;s your name?<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dt</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dd</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Alice<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>dd</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dt</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>How old are you?<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dt</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dd</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>20<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>dd</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dt</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Where do you live?<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dt</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>dd</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Home<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>dd</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>dl</span><span class="token punctuation"${
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
        }>Alice don&#39;t want the answers to the questions to be shown until the user clicks on the corresponding question. To make that work, she first adds the following two CSS rules:</p><div class="language-css ext-css line-numbers-mode"${
          _scopeId
        }><pre class="language-css"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>/* Hide all answers by default. */</span>
<span class="token selector"${
          _scopeId
        }>#faq dd</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    display none<span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>/* Show answers with the class &quot;show&quot;. */</span>
<span class="token selector"${
          _scopeId
        }>#faq dd.show</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token property"${
          _scopeId
        }>display</span><span class="token punctuation"${
          _scopeId
        }>:</span> initial<span class="token punctuation"${
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
        }></div></div><p${
          _scopeId
        }>And then creates the following client-side JavaScript function (which will be called later):</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>initializeFaqList</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> dtElements <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>querySelectorAll</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;#faq dt&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> dt <span class="token keyword"${
          _scopeId
        }>of</span> dtElements<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        dt<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;click&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>event</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            dt<span class="token punctuation"${
          _scopeId
        }>.</span>nextElementSibling<span class="token punctuation"${
          _scopeId
        }>.</span>classList<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>toggle</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;show&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
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
        }></div></div><p${
          _scopeId
        }>Has she implemented the functionality in a bad or good way? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Alice has a webpage with HTML code that contains a frequently asked questions list, part of the code shown below ("),
            (0,external_vue_.createVNode)("code", null, "<dl>"),
            (0,external_vue_.createTextVNode)(" = "),
            (0,external_vue_.createVNode)("em", null, "definition list"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("code", null, "<dt>"),
            (0,external_vue_.createTextVNode)(" = "),
            (0,external_vue_.createVNode)("em", null, "definition term"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("code", null, "<dd>"),
            (0,external_vue_.createTextVNode)(" = "),
            (0,external_vue_.createVNode)("em", null, "definition description"),
            (0,external_vue_.createTextVNode)(").")
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
                (0,external_vue_.createTextVNode)("Frequently Asked Questions"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("h1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dl")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("faq"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dt")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("What's your name?"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dt")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dd")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Alice"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("dd")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dt")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("How old are you?"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dt")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dd")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("20"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("dd")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dt")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Where do you live?"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dt")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("dd")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Home"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("dd")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    \n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("dl")
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
          (0,external_vue_.createVNode)("p", null, "Alice don't want the answers to the questions to be shown until the user clicks on the corresponding question. To make that work, she first adds the following two CSS rules:"),
          (0,external_vue_.createVNode)("div", { class: "language-css ext-css line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-css" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "/* Hide all answers by default. */"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token selector" }, "#faq dd"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    display none"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "/* Show answers with the class \"show\". */"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token selector" }, "#faq dd.show"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token property" }, "display"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" initial"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "And then creates the following client-side JavaScript function (which will be called later):"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "initializeFaqList"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" dtElements "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "querySelectorAll"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'#faq dt'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" dt "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" dtElements"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        dt"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'click'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "event"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            dt"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("nextElementSibling"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("classList"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "toggle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'show'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Has she implemented the functionality in a bad or good way? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>She has implemented the functionality in a bad way, because users with client-side JavaScript disabled in their web browsers won&#39;t see any answers, not even when they click on the questions. Client-side JavaScript should only be used to improve the user experience for users that have client-side JavaScript enabled, not to break functionality for users that have client-side JavaScript disabled.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "She has implemented the functionality in a bad way, because users with client-side JavaScript disabled in their web browsers won't see any answers, not even when they click on the questions. Client-side JavaScript should only be used to improve the user experience for users that have client-side JavaScript enabled, not to break functionality for users that have client-side JavaScript disabled.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification</li><li${
          _scopeId
        }>-0.25 points for each weird claim</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for correct answer and valid justification"),
            (0,external_vue_.createVNode)("li", null, "-0.25 points for each weird claim")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-5-1p" tabindex="-1"><a class="header-anchor" href="#question-5-1p" aria-hidden="true">#</a> Question 5 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>When writing client-side JavaScript, do we need to worry about security vulnerabilities? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "When writing client-side JavaScript, do we need to worry about security vulnerabilities? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Yes. For example, if the client-side JavaScript fetches a data string from the server that has been entered by another user (for example a username), and we want to display it to the user, we can&#39;t use this code:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> fetchedUsername <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;Alice&quot;</span> <span class="token comment"${
          _scopeId
        }>// We have fetched this from the server somehow.</span>

document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;aSpan&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>innerHTML <span class="token operator"${
          _scopeId
        }>=</span> fetchedUsername
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
        }>Because then we have introduced a XSS vulnerability when we used <code${
          _scopeId
        }>innerHTML</code> (the fetched username can contain <code${
          _scopeId
        }>&lt;script&gt;SOME JS CODE&lt;/script&gt;</code> a hacker entered when creating an account with that username, which the web browser would interpret as code and execute on other users&#39; computers, and that code can tell the user&#39;s web browser to send bad HTTP requests to other websites).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Yes. For example, if the client-side JavaScript fetches a data string from the server that has been entered by another user (for example a username), and we want to display it to the user, we can't use this code:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" fetchedUsername "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// We have fetched this from the server somehow."),
                (0,external_vue_.createTextVNode)("\n\ndocument"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'aSpan'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("innerHTML "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" fetchedUsername\n")
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
            (0,external_vue_.createTextVNode)("Because then we have introduced a XSS vulnerability when we used "),
            (0,external_vue_.createVNode)("code", null, "innerHTML"),
            (0,external_vue_.createTextVNode)(" (the fetched username can contain "),
            (0,external_vue_.createVNode)("code", null, "<script>SOME JS CODE</script>"),
            (0,external_vue_.createTextVNode)(" a hacker entered when creating an account with that username, which the web browser would interpret as code and execute on other users' computers, and that code can tell the user's web browser to send bad HTTP requests to other websites).")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification <ul${
          _scopeId
        }><li${
          _scopeId
        }>Just saying something like <em${
          _scopeId
        }>Yes, bad client-side JavaScript can be dangerous</em> or <em${
          _scopeId
        }>Yes, security is something you should always worry about</em> is not enough (justify with an example showing where you have to think about it, or similar)</li></ul></li><li${
          _scopeId
        }>0.25 points for giving a vague description of how a user can hack herself with bad client-side JavaScript, OR:</li><li${
          _scopeId
        }>0.5 points for an example that clearly explains (with details) how using <code${
          _scopeId
        }>innerHTML</code> can be a security vulnerability, but fails to explain how it can be used by a hacker to inject bad client-side JS in <strong${
          _scopeId
        }>another</strong> user&#39;s web browser</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("1 point for correct answer and valid justification "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Just saying something like "),
                  (0,external_vue_.createVNode)("em", null, "Yes, bad client-side JavaScript can be dangerous"),
                  (0,external_vue_.createTextVNode)(" or "),
                  (0,external_vue_.createVNode)("em", null, "Yes, security is something you should always worry about"),
                  (0,external_vue_.createTextVNode)(" is not enough (justify with an example showing where you have to think about it, or similar)")
                ])
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "0.25 points for giving a vague description of how a user can hack herself with bad client-side JavaScript, OR:"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for an example that clearly explains (with details) how using "),
              (0,external_vue_.createVNode)("code", null, "innerHTML"),
              (0,external_vue_.createTextVNode)(" can be a security vulnerability, but fails to explain how it can be used by a hacker to inject bad client-side JS in "),
              (0,external_vue_.createVNode)("strong", null, "another"),
              (0,external_vue_.createTextVNode)(" user's web browser")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h2><h3 id="question-6-1p" tabindex="-1"><a class="header-anchor" href="#question-6-1p" aria-hidden="true">#</a> Question 6 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In Docker, explain the difference between the commands <code${
          _scopeId
        }>RUN</code> and <code${
          _scopeId
        }>CMD</code>.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("In Docker, explain the difference between the commands "),
            (0,external_vue_.createVNode)("code", null, "RUN"),
            (0,external_vue_.createTextVNode)(" and "),
            (0,external_vue_.createVNode)("code", null, "CMD"),
            (0,external_vue_.createTextVNode)(".")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The <code${
          _scopeId
        }>RUN</code> command is used to specify a command that will be executed when building a new Docker image.</p><p${
          _scopeId
        }>The <code${
          _scopeId
        }>CMD</code> command is used to specify the command that should be executed to start the application in the Docker image, and it will be executed when the image starts running in a container.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "RUN"),
            (0,external_vue_.createTextVNode)(" command is used to specify a command that will be executed when building a new Docker image.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "CMD"),
            (0,external_vue_.createTextVNode)(" command is used to specify the command that should be executed to start the application in the Docker image, and it will be executed when the image starts running in a container.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.25 points for each correct description</li><li${
          _scopeId
        }>0.25 points for each description belonging to the right command</li><li${
          _scopeId
        }>-0.1 points for saying something specific which is not necessarily true, like mentioning &quot;web application&quot; (Docker is not only for web applications)</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Som students answer that the <code${
          _scopeId
        }>RUN</code> command is used to start running an image in a new container. That&#39;s what the <code${
          _scopeId
        }>docker run</code> command is used for.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.25 points for each correct description"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for each description belonging to the right command"),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for saying something specific which is not necessarily true, like mentioning \"web application\" (Docker is not only for web applications)")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Som students answer that the "),
              (0,external_vue_.createVNode)("code", null, "RUN"),
              (0,external_vue_.createTextVNode)(" command is used to start running an image in a new container. That's what the "),
              (0,external_vue_.createVNode)("code", null, "docker run"),
              (0,external_vue_.createTextVNode)(" command is used for.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="scaling" tabindex="-1"><a class="header-anchor" href="#scaling" aria-hidden="true">#</a> Scaling</h2><h3 id="question-7-2p" tabindex="-1"><a class="header-anchor" href="#question-7-2p" aria-hidden="true">#</a> Question 7 (2p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In horizontal scaling, describe one benefit and one drawback with using sticky sessions compared to storing sessions in an external Redis database.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In horizontal scaling, describe one benefit and one drawback with using sticky sessions compared to storing sessions in an external Redis database.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>When using sticky sessions, the first time (of a session) a client sends an HTTP request to the server, the server (i.e. the load balancer) will remember which application server that handled the request, and all future request from that client (within the same session) will be forwarded to that same application server.</p><p${
          _scopeId
        }>A benefit here, compared to storing the sessions in an external Redis database, is that the web application can store the sessions locally (on the application server itself), and therefor it will be much faster at carrying out the HTTP requests (it&#39;s faster to retrieve and store the sessions).</p><p${
          _scopeId
        }>A drawback with sticky sessions, compared to storing the sessions in an external Redis database, is that it&#39;s a bit harder to scale down. As long as an application server has an active user session, we can&#39;t take down that application server, because that particular user is dependent on her requests is being forwarded to this specific application server, because that&#39;s where her session is stored. When storing the sessions in an external Redis database, all application servers are stateless, and it doesn&#39;t matter which application server that receives which client requests, making it easier to take down application servers when the load gets lower.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "When using sticky sessions, the first time (of a session) a client sends an HTTP request to the server, the server (i.e. the load balancer) will remember which application server that handled the request, and all future request from that client (within the same session) will be forwarded to that same application server."),
          (0,external_vue_.createVNode)("p", null, "A benefit here, compared to storing the sessions in an external Redis database, is that the web application can store the sessions locally (on the application server itself), and therefor it will be much faster at carrying out the HTTP requests (it's faster to retrieve and store the sessions)."),
          (0,external_vue_.createVNode)("p", null, "A drawback with sticky sessions, compared to storing the sessions in an external Redis database, is that it's a bit harder to scale down. As long as an application server has an active user session, we can't take down that application server, because that particular user is dependent on her requests is being forwarded to this specific application server, because that's where her session is stored. When storing the sessions in an external Redis database, all application servers are stateless, and it doesn't matter which application server that receives which client requests, making it easier to take down application servers when the load gets lower.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for a benefit with using sticky sessions (faster to obtain and store sessions)</li><li${
          _scopeId
        }>1 point for a drawback with using sticky sessions (harder to scale down, or harder to distribute load evenly (one application server can suddenly become very slow))</li><li${
          _scopeId
        }>0.25 or 0.5 points for describing a small benefit/drawback, or mentioning something relevant to the big benefit/drawback, but not going all the way</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Some students write a problem with sticky sessions is that a client&#39;s requests might be sent to different servers. That&#39;s not the case; <em${
          _scopeId
        }>sticky sessions</em> means that all requests from one and the same client are forwarded to one and the same application server, so each application server can store the sessions locally.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for a benefit with using sticky sessions (faster to obtain and store sessions)"),
            (0,external_vue_.createVNode)("li", null, "1 point for a drawback with using sticky sessions (harder to scale down, or harder to distribute load evenly (one application server can suddenly become very slow))"),
            (0,external_vue_.createVNode)("li", null, "0.25 or 0.5 points for describing a small benefit/drawback, or mentioning something relevant to the big benefit/drawback, but not going all the way")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Some students write a problem with sticky sessions is that a client's requests might be sent to different servers. That's not the case; "),
              (0,external_vue_.createVNode)("em", null, "sticky sessions"),
              (0,external_vue_.createTextVNode)(" means that all requests from one and the same client are forwarded to one and the same application server, so each application server can store the sessions locally.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="server-side" tabindex="-1"><a class="header-anchor" href="#server-side" aria-hidden="true">#</a> Server-side</h2><h3 id="question-8-2p" tabindex="-1"><a class="header-anchor" href="#question-8-2p" aria-hidden="true">#</a> Question 8 (2p)</h3>`)
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
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>MVC (Model View Controller) is a design pattern describing a way to design/structure the code for the graphical user interface (GUI) part of an application.</p><p${
          _scopeId
        }>The MVC design pattern consists of three different parts: models, views and controllers.</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>A Model contains the data that should be visualized in the GUI</li><li${
          _scopeId
        }>A View contains the code that visualizes the data in a Model</li><li${
          _scopeId
        }>A Controller picks which Model and View that should be used, and also listen for user interaction in the View and do what the user wants when the interactions happens, such as changing the data in the Model or using another View</li></ul><p${
          _scopeId
        }>When a web application makes use of MVC, the Controllers listen for incoming HTTP requests, and when they receive one, they create a Model with the data that should be sent back, and then passes that Model to a View, which embeds the data in HTML code, and then the Controller sends back the HTML code from the View in an HTTP response.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "MVC (Model View Controller) is a design pattern describing a way to design/structure the code for the graphical user interface (GUI) part of an application."),
          (0,external_vue_.createVNode)("p", null, "The MVC design pattern consists of three different parts: models, views and controllers."),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "A Model contains the data that should be visualized in the GUI"),
            (0,external_vue_.createVNode)("li", null, "A View contains the code that visualizes the data in a Model"),
            (0,external_vue_.createVNode)("li", null, "A Controller picks which Model and View that should be used, and also listen for user interaction in the View and do what the user wants when the interactions happens, such as changing the data in the Model or using another View")
          ]),
          (0,external_vue_.createVNode)("p", null, "When a web application makes use of MVC, the Controllers listen for incoming HTTP requests, and when they receive one, they create a Model with the data that should be sent back, and then passes that Model to a View, which embeds the data in HTML code, and then the Controller sends back the HTML code from the View in an HTTP response.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for what MVC is: <ul${
          _scopeId
        }><li${
          _scopeId
        }>0.25 points for design pattern</li><li${
          _scopeId
        }>0.25 points for implementing GUI</li></ul></li><li${
          _scopeId
        }>0.33 points for each part name and description of each part</li><li${
          _scopeId
        }>0.5 points for how web applications use of MVC <ul${
          _scopeId
        }><li${
          _scopeId
        }>0.25 points for controllers receive requests and send back responses</li><li${
          _scopeId
        }>0.25 points for Views produce HTML</li></ul></li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Answering <em${
          _scopeId
        }>Explain what MVC is</em> by just writing the acronym <em${
          _scopeId
        }>Model View Controller</em> is not enough.</p><p${
          _scopeId
        }>This question has nothing to do with a three-layered architecture, so no need (rather confusing) to involve that in your answer in this question.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for what MVC is: "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "0.25 points for design pattern"),
                (0,external_vue_.createVNode)("li", null, "0.25 points for implementing GUI")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "0.33 points for each part name and description of each part"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for how web applications use of MVC "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "0.25 points for controllers receive requests and send back responses"),
                (0,external_vue_.createVNode)("li", null, "0.25 points for Views produce HTML")
              ])
            ])
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Answering "),
              (0,external_vue_.createVNode)("em", null, "Explain what MVC is"),
              (0,external_vue_.createTextVNode)(" by just writing the acronym "),
              (0,external_vue_.createVNode)("em", null, "Model View Controller"),
              (0,external_vue_.createTextVNode)(" is not enough.")
            ]),
            (0,external_vue_.createVNode)("p", null, "This question has nothing to do with a three-layered architecture, so no need (rather confusing) to involve that in your answer in this question.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-9-3p" tabindex="-1"><a class="header-anchor" href="#question-9-3p" aria-hidden="true">#</a> Question 9 (3p)</h3>`)
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
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A three-layered architecture is a way organize the code of an application in three different layers, each with their own responsibilities:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>The <em${
          _scopeId
        }>Data Access Layer</em> contains the code for storing and retrieving the application&#39;s data. It usually provides CRUD (Create, Read, Update and Delete) operations for this</li><li${
          _scopeId
        }>The <em${
          _scopeId
        }>Business Logic Layer</em> contains the code for carrying out the tasks the user wants to do (the application&#39;s functionality), such as computing how much the user should pay for the products put in a shopping bag, verify payments, etc. It typically contains authorization (for example, only allowing the user to use the application if the user has a paid membership or if the test period is not over yet) and validation (for example, checking if data the user sends to the application is in correct format). Is uses the Data Access Layer to get access to the data</li><li${
          _scopeId
        }>The <em${
          _scopeId
        }>Presentation Layer</em> is responsible for implementing an interface through which the application can be used, for example a graphical user interface that humans can use. When the user interacts with the application through the interface (for example clicks on a button), the Presentation Layer asks the Business Logic Layer to execute the task the button is associated with</li></ul><p${
          _scopeId
        }>In web applications, the Presentation Layer is responsible for receiving HTTP requests, and then ask the Business Logic Layer to carry out the requests. The Data Access Layer often store the data in a database. The Presentation Layer is also responsible for generating the HTTP response to send back, containing the HTML and CSS code the web browser use to display the webpage in the response.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "A three-layered architecture is a way organize the code of an application in three different layers, each with their own responsibilities:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("em", null, "Data Access Layer"),
              (0,external_vue_.createTextVNode)(" contains the code for storing and retrieving the application's data. It usually provides CRUD (Create, Read, Update and Delete) operations for this")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("em", null, "Business Logic Layer"),
              (0,external_vue_.createTextVNode)(" contains the code for carrying out the tasks the user wants to do (the application's functionality), such as computing how much the user should pay for the products put in a shopping bag, verify payments, etc. It typically contains authorization (for example, only allowing the user to use the application if the user has a paid membership or if the test period is not over yet) and validation (for example, checking if data the user sends to the application is in correct format). Is uses the Data Access Layer to get access to the data")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("em", null, "Presentation Layer"),
              (0,external_vue_.createTextVNode)(" is responsible for implementing an interface through which the application can be used, for example a graphical user interface that humans can use. When the user interacts with the application through the interface (for example clicks on a button), the Presentation Layer asks the Business Logic Layer to execute the task the button is associated with")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "In web applications, the Presentation Layer is responsible for receiving HTTP requests, and then ask the Business Logic Layer to carry out the requests. The Data Access Layer often store the data in a database. The Presentation Layer is also responsible for generating the HTTP response to send back, containing the HTML and CSS code the web browser use to display the webpage in the response.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for what it is</li><li${
          _scopeId
        }>0.25 points for what each part&#39;s name is</li><li${
          _scopeId
        }>0.25 points for what each part is used for</li><li${
          _scopeId
        }>0.5 points for how web app use it (HTTP, HTML, CSS in Presentation Layer, and description of the other layers)</li><li${
          _scopeId
        }>0.5 points for good quality answers (many details, not using different names to describe the same thing, use the correct name on things, write proper and easy to read sentences, clearly explain which layer making use of which other layer, use singular and plural correctly, etc.)</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Answering <em${
          _scopeId
        }>Explain what a three-layered architecture is</em> with something like <em${
          _scopeId
        }>It&#39;s an architecture</em>, or <em${
          _scopeId
        }>It&#39;s an architecture consisting of three layers</em> is of course not a good way to do it. Anyone gets that understanding by just reading the name. You have to explain what it&#39;s an architecture of, and what that means (what is a layer? what does a layer consist of? Etc.).</p><p${
          _scopeId
        }>The Presentation Layer doesn&#39;t have to make use of HTML and HTTP. This architecture can not only be used in web applications, but other type of applications too.</p><p${
          _scopeId
        }>The Data Access Layer does not have to store data in a database. It&#39;s not called <em${
          _scopeId
        }>Database Access Layer</em>.</p><p${
          _scopeId
        }>Some students write the layers are independent of each other/know nothing about each others. That is not true. If it would be true, then would, for example, the Presentation Layer have no way of using the Business Logic Layer.</p><p${
          _scopeId
        }>Many students write that the Presentation Layer receives HTTP requests, and then sends the requests to the Business Logic Layer. It really sounds like you&#39;re saying <em${
          _scopeId
        }>the Business Logic Layer obtains the HTTP request</em>, and that is wrong; the Business Logic Layer shouldn&#39;t know the Presentation Layer makes use of HTTP at all, and therefor it can&#39;t receive HTTP requests from it. Saying that the Business Logic Layers <em${
          _scopeId
        }>carries out</em> the request, or similar, is OK, because that does not imply the Business Logic Layers receives the HTTP request.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for what it is"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for what each part's name is"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for what each part is used for"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for how web app use it (HTTP, HTML, CSS in Presentation Layer, and description of the other layers)"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for good quality answers (many details, not using different names to describe the same thing, use the correct name on things, write proper and easy to read sentences, clearly explain which layer making use of which other layer, use singular and plural correctly, etc.)")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Answering "),
              (0,external_vue_.createVNode)("em", null, "Explain what a three-layered architecture is"),
              (0,external_vue_.createTextVNode)(" with something like "),
              (0,external_vue_.createVNode)("em", null, "It's an architecture"),
              (0,external_vue_.createTextVNode)(", or "),
              (0,external_vue_.createVNode)("em", null, "It's an architecture consisting of three layers"),
              (0,external_vue_.createTextVNode)(" is of course not a good way to do it. Anyone gets that understanding by just reading the name. You have to explain what it's an architecture of, and what that means (what is a layer? what does a layer consist of? Etc.).")
            ]),
            (0,external_vue_.createVNode)("p", null, "The Presentation Layer doesn't have to make use of HTML and HTTP. This architecture can not only be used in web applications, but other type of applications too."),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("The Data Access Layer does not have to store data in a database. It's not called "),
              (0,external_vue_.createVNode)("em", null, "Database Access Layer"),
              (0,external_vue_.createTextVNode)(".")
            ]),
            (0,external_vue_.createVNode)("p", null, "Some students write the layers are independent of each other/know nothing about each others. That is not true. If it would be true, then would, for example, the Presentation Layer have no way of using the Business Logic Layer."),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Many students write that the Presentation Layer receives HTTP requests, and then sends the requests to the Business Logic Layer. It really sounds like you're saying "),
              (0,external_vue_.createVNode)("em", null, "the Business Logic Layer obtains the HTTP request"),
              (0,external_vue_.createTextVNode)(", and that is wrong; the Business Logic Layer shouldn't know the Presentation Layer makes use of HTTP at all, and therefor it can't receive HTTP requests from it. Saying that the Business Logic Layers "),
              (0,external_vue_.createVNode)("em", null, "carries out"),
              (0,external_vue_.createTextVNode)(" the request, or similar, is OK, because that does not imply the Business Logic Layers receives the HTTP request.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-10-1p" tabindex="-1"><a class="header-anchor" href="#question-10-1p" aria-hidden="true">#</a> Question 10 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In a three-layered architecture, do we need to worry about SQL injections in the PL? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In a three-layered architecture, do we need to worry about SQL injections in the PL? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>No, the Presentation Layer is not aware of how the Data Access Layer stores the data, so it&#39;s not aware of the data is stored in a relational database at all (if that&#39;s the case), and therefor should not have any code concerning SQL (such as protection against SQL injections).</p><p${
          _scopeId
        }>If the Presentation Layer would contain code protecting the application against SQL injections attack, then if we changed from a relational database to a NoSQL database in the future, we would not only need to make changes to the code in the Data Access Layer (which should be the case), but also change the code in the Presentation Layer (removing the SQL protection code), which should not be the case.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "No, the Presentation Layer is not aware of how the Data Access Layer stores the data, so it's not aware of the data is stored in a relational database at all (if that's the case), and therefor should not have any code concerning SQL (such as protection against SQL injections)."),
          (0,external_vue_.createVNode)("p", null, "If the Presentation Layer would contain code protecting the application against SQL injections attack, then if we changed from a relational database to a NoSQL database in the future, we would not only need to make changes to the code in the Data Access Layer (which should be the case), but also change the code in the Presentation Layer (removing the SQL protection code), which should not be the case.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification</li><li${
          _scopeId
        }>0.5 points for wrong answer but valid justification for the correct answer (?! 😕)</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for correct answer and valid justification"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for wrong answer but valid justification for the correct answer (?! 😕)")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-11-1p" tabindex="-1"><a class="header-anchor" href="#question-11-1p" aria-hidden="true">#</a> Question 11 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In a three layered architecture, one layer exposes a function called <code${
          _scopeId
        }>selectAllFromTheAccountsTable()</code>. Is that a good or bad name on the function? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("In a three layered architecture, one layer exposes a function called "),
            (0,external_vue_.createVNode)("code", null, "selectAllFromTheAccountsTable()"),
            (0,external_vue_.createTextVNode)(". Is that a good or bad name on the function? Justify your answer.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>That&#39;s a bad name, because it exposes implementation details. The name suggest we can use the function to fetch data from a relational database. This might be true now, but if we in the future change the Data Access Layer to store the data in another way (in a JS array, or in a JSON file, or in a NoSQL database, etc.), the name would simply no longer make any sense, and we would need to rename the function to something like <code${
          _scopeId
        }>getAllAccounts()</code>, and we would need to change the code in the Business Logic Layer making use of this function. We should not need to change the code in the Business Logic Layer like that, so it should have the more general name <code${
          _scopeId
        }>getAllAccounts()</code> from the beginning.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("That's a bad name, because it exposes implementation details. The name suggest we can use the function to fetch data from a relational database. This might be true now, but if we in the future change the Data Access Layer to store the data in another way (in a JS array, or in a JSON file, or in a NoSQL database, etc.), the name would simply no longer make any sense, and we would need to rename the function to something like "),
            (0,external_vue_.createVNode)("code", null, "getAllAccounts()"),
            (0,external_vue_.createTextVNode)(", and we would need to change the code in the Business Logic Layer making use of this function. We should not need to change the code in the Business Logic Layer like that, so it should have the more general name "),
            (0,external_vue_.createVNode)("code", null, "getAllAccounts()"),
            (0,external_vue_.createTextVNode)(" from the beginning.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification <ul${
          _scopeId
        }><li${
          _scopeId
        }>-0.25 points for having an almost valid justification, but missing some important detail</li></ul></li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Some students claim the name of the function is good because it describes precisely what the function do. And yes, we want to have good descriptive names that reflects what data variables stores and what functions do, but usually (and crucially in interfaces), we don&#39;t want to expose implementation details. Since this function is used in another layer, its name should not expose implementation details.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("1 point for correct answer and valid justification "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "-0.25 points for having an almost valid justification, but missing some important detail")
              ])
            ])
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, "Some students claim the name of the function is good because it describes precisely what the function do. And yes, we want to have good descriptive names that reflects what data variables stores and what functions do, but usually (and crucially in interfaces), we don't want to expose implementation details. Since this function is used in another layer, its name should not expose implementation details.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-12-2p" tabindex="-1"><a class="header-anchor" href="#question-12-2p" aria-hidden="true">#</a> Question 12 (2p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what a foreign key constraint is, and show an example of how things can go wrong if they aren&#39;t used properly.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a foreign key constraint is, and show an example of how things can go wrong if they aren't used properly.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A foreign key constraint is a constraint in a relational database that enforces a relation between a foreign key field in posts in one table to the primary key field in posts in another table. By enforcing the constraint, the database won&#39;t allow posts to be inserted in the first table unless it has a relation to an existing post in the other table. They are really important when we need to enforce such relations, which is the case for most applications using relational databases.</p><p${
          _scopeId
        }><strong${
          _scopeId
        }>Example</strong> <br${
          _scopeId
        }> Imagine we have the two tables <code${
          _scopeId
        }>Humans</code> and <code${
          _scopeId
        }>Pets</code>. In our application, a pet must always belong to a human, because we don&#39;t want to have any homeless pets. So the field <code${
          _scopeId
        }>humanId</code> in the <code${
          _scopeId
        }>Pets</code> table has a foreign key constraint to the field <code${
          _scopeId
        }>id</code> in the <code${
          _scopeId
        }>Humans</code> table.</p><p${
          _scopeId
        }>Thanks to this constraint, we can simply have a query like this to insert a new pet:</p><div class="language-sql ext-sql line-numbers-mode"${
          _scopeId
        }><pre class="language-sql"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>INSERT</span> <span class="token keyword"${
          _scopeId
        }>INTO</span> Pets <span class="token punctuation"${
          _scopeId
        }>(</span>humanId<span class="token punctuation"${
          _scopeId
        }>,</span> name<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>VALUES</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>23</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;Fishy&quot;</span><span class="token punctuation"${
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
        }>If no human with the id <code${
          _scopeId
        }>23</code> exists, the foreign key constraint would be violated, and the database would complain and not create the pet.</p><p${
          _scopeId
        }>If we wouldn&#39;t have a foreign key constraint, we would first need to send a query like this one to see if we have a human with the given id:</p><div class="language-sql ext-sql line-numbers-mode"${
          _scopeId
        }><pre class="language-sql"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>SELECT</span> <span class="token operator"${
          _scopeId
        }>*</span> <span class="token keyword"${
          _scopeId
        }>FROM</span> Humans <span class="token keyword"${
          _scopeId
        }>WHERE</span> id <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>23</span> <span class="token keyword"${
          _scopeId
        }>LIMIT</span> <span class="token number"${
          _scopeId
        }>1</span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>And if we do get back a human, we can go ahead with creating the pet using the first query. However, before the database receives our &quot;create pet&quot; query, it might be that someone has deleted the human with id <code${
          _scopeId
        }>23</code>, so we can&#39;t be 100% protected from having homeless pets this way, which is why foreign key constraints are better to use.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "A foreign key constraint is a constraint in a relational database that enforces a relation between a foreign key field in posts in one table to the primary key field in posts in another table. By enforcing the constraint, the database won't allow posts to be inserted in the first table unless it has a relation to an existing post in the other table. They are really important when we need to enforce such relations, which is the case for most applications using relational databases."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Example"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Imagine we have the two tables "),
            (0,external_vue_.createVNode)("code", null, "Humans"),
            (0,external_vue_.createTextVNode)(" and "),
            (0,external_vue_.createVNode)("code", null, "Pets"),
            (0,external_vue_.createTextVNode)(". In our application, a pet must always belong to a human, because we don't want to have any homeless pets. So the field "),
            (0,external_vue_.createVNode)("code", null, "humanId"),
            (0,external_vue_.createTextVNode)(" in the "),
            (0,external_vue_.createVNode)("code", null, "Pets"),
            (0,external_vue_.createTextVNode)(" table has a foreign key constraint to the field "),
            (0,external_vue_.createVNode)("code", null, "id"),
            (0,external_vue_.createTextVNode)(" in the "),
            (0,external_vue_.createVNode)("code", null, "Humans"),
            (0,external_vue_.createTextVNode)(" table.")
          ]),
          (0,external_vue_.createVNode)("p", null, "Thanks to this constraint, we can simply have a query like this to insert a new pet:"),
          (0,external_vue_.createVNode)("div", { class: "language-sql ext-sql line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-sql" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "INSERT"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "INTO"),
                (0,external_vue_.createTextVNode)(" Pets "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("humanId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "VALUES"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "23"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Fishy\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("If no human with the id "),
            (0,external_vue_.createVNode)("code", null, "23"),
            (0,external_vue_.createTextVNode)(" exists, the foreign key constraint would be violated, and the database would complain and not create the pet.")
          ]),
          (0,external_vue_.createVNode)("p", null, "If we wouldn't have a foreign key constraint, we would first need to send a query like this one to see if we have a human with the given id:"),
          (0,external_vue_.createVNode)("div", { class: "language-sql ext-sql line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-sql" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "SELECT"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "FROM"),
                (0,external_vue_.createTextVNode)(" Humans "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "WHERE"),
                (0,external_vue_.createTextVNode)(" id "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "23"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "LIMIT"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("And if we do get back a human, we can go ahead with creating the pet using the first query. However, before the database receives our \"create pet\" query, it might be that someone has deleted the human with id "),
            (0,external_vue_.createVNode)("code", null, "23"),
            (0,external_vue_.createTextVNode)(", so we can't be 100% protected from having homeless pets this way, which is why foreign key constraints are better to use.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for general explanation <ul${
          _scopeId
        }><li${
          _scopeId
        }>-0.5 points for not knowing the difference between foreign key and foreign key constraint</li></ul></li><li${
          _scopeId
        }>1 point for example of problem when a foreign key is not used</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Many students don&#39;t know the difference between a <em${
          _scopeId
        }>foreign key</em> and a <em${
          _scopeId
        }>foreign key constraint</em>. A foreign key is a field in one table, whose value will refer to a value in the primary key field in another table (all together known as a <em${
          _scopeId
        }>relationship</em>). You can have this relationship without having a foreign key constraint. A foreign key constraint can be added to enforce and configure the relationship.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("1 point for general explanation "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "-0.5 points for not knowing the difference between foreign key and foreign key constraint")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "1 point for example of problem when a foreign key is not used")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Many students don't know the difference between a "),
              (0,external_vue_.createVNode)("em", null, "foreign key"),
              (0,external_vue_.createTextVNode)(" and a "),
              (0,external_vue_.createVNode)("em", null, "foreign key constraint"),
              (0,external_vue_.createTextVNode)(". A foreign key is a field in one table, whose value will refer to a value in the primary key field in another table (all together known as a "),
              (0,external_vue_.createVNode)("em", null, "relationship"),
              (0,external_vue_.createTextVNode)("). You can have this relationship without having a foreign key constraint. A foreign key constraint can be added to enforce and configure the relationship.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api" aria-hidden="true">#</a> REST API</h2><h3 id="question-13-1p" tabindex="-1"><a class="header-anchor" href="#question-13-1p" aria-hidden="true">#</a> Question 13 (1p)</h3>`)
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
        }>404</code></p><p${
          _scopeId
        }>Reason Phrases: <code${
          _scopeId
        }>Not Found</code> <code${
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
            (0,external_vue_.createVNode)("code", null, "404")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Reason Phrases: "),
            (0,external_vue_.createVNode)("code", null, "Not Found"),
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
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }><code${
          _scopeId
        }>200</code>: <code${
          _scopeId
        }>OK</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>201</code>: <code${
          _scopeId
        }>Created</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>400</code>: <code${
          _scopeId
        }>Bad Request</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>401</code>: <code${
          _scopeId
        }>Unauthorized</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>404</code>: <code${
          _scopeId
        }>Not Found</code></li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "200"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "OK")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "201"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "Created")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "400"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "Bad Request")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "401"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "Unauthorized")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "404"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "Not Found")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>2 points for</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "2 points for")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-14-1p" tabindex="-1"><a class="header-anchor" href="#question-14-1p" aria-hidden="true">#</a> Question 14 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In an HTTP response with the status code 201, explain what the value of the <code${
          _scopeId
        }>Location</code> header represents. Also, give an example of a value it can contain, and explain how that value should be interpreted.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("In an HTTP response with the status code 201, explain what the value of the "),
            (0,external_vue_.createVNode)("code", null, "Location"),
            (0,external_vue_.createTextVNode)(" header represents. Also, give an example of a value it can contain, and explain how that value should be interpreted.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The <code${
          _scopeId
        }>Location</code> header&#39;s value represents the URI of the newly created resource (sending a GET request for it would give you back the newly created resource). The value could for example be <code${
          _scopeId
        }>/movies/123</code>, meaning that a new movie resource was created, and that the new movie resource got <code${
          _scopeId
        }>123</code> as a unique identifier among all movie resources.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "Location"),
            (0,external_vue_.createTextVNode)(" header's value represents the URI of the newly created resource (sending a GET request for it would give you back the newly created resource). The value could for example be "),
            (0,external_vue_.createVNode)("code", null, "/movies/123"),
            (0,external_vue_.createTextVNode)(", meaning that a new movie resource was created, and that the new movie resource got "),
            (0,external_vue_.createVNode)("code", null, "123"),
            (0,external_vue_.createTextVNode)(" as a unique identifier among all movie resources.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for general explanation of the value of the <code${
          _scopeId
        }>Location</code> header (saying it redirects the user there is wrong, because the status code is 201)</li><li${
          _scopeId
        }>0.25 points for example of value</li><li${
          _scopeId
        }>0.25 points for explanation of that example value</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for general explanation of the value of the "),
              (0,external_vue_.createVNode)("code", null, "Location"),
              (0,external_vue_.createTextVNode)(" header (saying it redirects the user there is wrong, because the status code is 201)")
            ]),
            (0,external_vue_.createVNode)("li", null, "0.25 points for example of value"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for explanation of that example value")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-15-1p" tabindex="-1"><a class="header-anchor" href="#question-15-1p" aria-hidden="true">#</a> Question 15 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Does it makes sense to put a user&#39;s password in an ID Token? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Does it makes sense to put a user's password in an ID Token? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>No. The whole idea with ID Tokens is that they contain information about the logged in user without exposing the user&#39;s credentials (such as password). And passwords should never be stored in plain text anyway, so putting it in an ID Token would simply be a security vulnerability.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "No. The whole idea with ID Tokens is that they contain information about the logged in user without exposing the user's credentials (such as password). And passwords should never be stored in plain text anyway, so putting it in an ID Token would simply be a security vulnerability.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification</li><li${
          _scopeId
        }>-0.25 points for answers writing strange things</li><li${
          _scopeId
        }>0 points for answers with multiple justifications, and at least one of them is wrong</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for correct answer and valid justification"),
            (0,external_vue_.createVNode)("li", null, "-0.25 points for answers writing strange things"),
            (0,external_vue_.createVNode)("li", null, "0 points for answers with multiple justifications, and at least one of them is wrong")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-16-1p" tabindex="-1"><a class="header-anchor" href="#question-16-1p" aria-hidden="true">#</a> Question 16 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Does it makes sense to put a user&#39;s password in an Access Token? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Does it makes sense to put a user's password in an Access Token? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>No. A password is <em${
          _scopeId
        }>authentication information</em>, and that can be used to prove who the user is. Access Tokens should only contain <em${
          _scopeId
        }>authorization information</em>, and that should describe what a holder of the token is allowed to do.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("No. A password is "),
            (0,external_vue_.createVNode)("em", null, "authentication information"),
            (0,external_vue_.createTextVNode)(", and that can be used to prove who the user is. Access Tokens should only contain "),
            (0,external_vue_.createVNode)("em", null, "authorization information"),
            (0,external_vue_.createTextVNode)(", and that should describe what a holder of the token is allowed to do.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification</li><li${
          _scopeId
        }>-0.25 points for answers writing strange things</li><li${
          _scopeId
        }>0 points for answers with multiple justifications, and at least one of them is wrong</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Many students claim that it&#39;s bad to put sensitive information (such as passwords) in an Access Token since it&#39;s stored on the client and can end up in the hands of a hacker, which then would be able to read the user&#39;s password after decoding the token.</p><p${
          _scopeId
        }>This is true WHEN the Access Token is self-contained, such as JWT tokens. Access Tokens don&#39;t have to be self-contained, so you really have to indicate in these type of answer that you are thinking of self-contained Access Tokens. I haven&#39;t punished that with point reduction this exam.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for correct answer and valid justification"),
            (0,external_vue_.createVNode)("li", null, "-0.25 points for answers writing strange things"),
            (0,external_vue_.createVNode)("li", null, "0 points for answers with multiple justifications, and at least one of them is wrong")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, "Many students claim that it's bad to put sensitive information (such as passwords) in an Access Token since it's stored on the client and can end up in the hands of a hacker, which then would be able to read the user's password after decoding the token."),
            (0,external_vue_.createVNode)("p", null, "This is true WHEN the Access Token is self-contained, such as JWT tokens. Access Tokens don't have to be self-contained, so you really have to indicate in these type of answer that you are thinking of self-contained Access Tokens. I haven't punished that with point reduction this exam.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><h3 id="question-17-1p" tabindex="-1"><a class="header-anchor" href="#question-17-1p" aria-hidden="true">#</a> Question 17 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Give an example of a client-side HTTP request the web browser will not send due to the Same-Origin Policy.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Give an example of a client-side HTTP request the web browser will not send due to the Same-Origin Policy.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>An HTTP <code${
          _scopeId
        }>DELETE</code> request sent to a domain other than the one the client-side code making the request (such as JavaScript) comes from.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("An HTTP "),
            (0,external_vue_.createVNode)("code", null, "DELETE"),
            (0,external_vue_.createTextVNode)(" request sent to a domain other than the one the client-side code making the request (such as JavaScript) comes from.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for a valid example</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>The Same-Origin Policy do allow some GET and POST requests to be sent (mainly those that can be sent through the submission of a <code${
          _scopeId
        }>&lt;form&gt;</code>), but they won&#39;t allow client-side JavaScript to read the responses unless CORS headers have been added to the response, telling the web browser it&#39;s OK for the client-side JavaScript code to read it.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for a valid example")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("The Same-Origin Policy do allow some GET and POST requests to be sent (mainly those that can be sent through the submission of a "),
              (0,external_vue_.createVNode)("code", null, "<form>"),
              (0,external_vue_.createTextVNode)("), but they won't allow client-side JavaScript to read the responses unless CORS headers have been added to the response, telling the web browser it's OK for the client-side JavaScript code to read it.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-18-2p" tabindex="-1"><a class="header-anchor" href="#question-18-2p" aria-hidden="true">#</a> Question 18 (2p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Web browsers started to support CORS around 2010. Today some companies still force their employees to run older versions of web browsers (from before 2010) that don&#39;t support CORS.</p><p${
          _scopeId
        }>Given that all users don&#39;t have a web browser that supports CORS, can it be a security vulnerability to enable CORS on your web application? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Web browsers started to support CORS around 2010. Today some companies still force their employees to run older versions of web browsers (from before 2010) that don't support CORS."),
          (0,external_vue_.createVNode)("p", null, "Given that all users don't have a web browser that supports CORS, can it be a security vulnerability to enable CORS on your web application? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>No, it can&#39;t, not based on that not all web browsers support CORS. CORS rather makes web browsers less secure by relaxing the Same-Origin Policy, and if a web browser doesn&#39;t support CORS, the Same-Origin Policy will simply not be relaxed, and remain as strict and secure as it already was.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "No, it can't, not based on that not all web browsers support CORS. CORS rather makes web browsers less secure by relaxing the Same-Origin Policy, and if a web browser doesn't support CORS, the Same-Origin Policy will simply not be relaxed, and remain as strict and secure as it already was.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>2 points for correct answer and valid justification</li><li${
          _scopeId
        }>-0.5 points for saying something irrelevant</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "2 points for correct answer and valid justification"),
            (0,external_vue_.createVNode)("li", null, "-0.5 points for saying something irrelevant")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="code-writing" tabindex="-1"><a class="header-anchor" href="#code-writing" aria-hidden="true">#</a> Code Writing</h2><h3 id="question-19-1p" tabindex="-1"><a class="header-anchor" href="#question-19-1p" aria-hidden="true">#</a> Question 19 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Implement the JavaScript function <code${
          _scopeId
        }>isSumGreaterThan100(numbers)</code>, which receives an array with numbers, and returns:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }><code${
          _scopeId
        }>true</code> if the sum of the numbers is greater than 100</li><li${
          _scopeId
        }><code${
          _scopeId
        }>false</code> otherwise</li></ul><p${
          _scopeId
        }>Sample usage:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }><code${
          _scopeId
        }>isSumGreaterThan100([50, 25, 10]) → false</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>isSumGreaterThan100([50, 100]) → true</code></li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Implement the JavaScript function "),
            (0,external_vue_.createVNode)("code", null, "isSumGreaterThan100(numbers)"),
            (0,external_vue_.createTextVNode)(", which receives an array with numbers, and returns:")
          ]),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "true"),
              (0,external_vue_.createTextVNode)(" if the sum of the numbers is greater than 100")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "false"),
              (0,external_vue_.createTextVNode)(" otherwise")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Sample usage:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan100([50, 25, 10]) → false")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan100([50, 100]) → true")
            ])
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>isSumGreaterThan100</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>numbers</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>let</span> sum <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
    
    <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> number <span class="token keyword"${
          _scopeId
        }>of</span> numbers<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        sum <span class="token operator"${
          _scopeId
        }>+=</span> number
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token number"${
          _scopeId
        }>100</span> <span class="token operator"${
          _scopeId
        }>&lt;</span> sum
    
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "isSumGreaterThan100"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(" number\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "100"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" sum\n    \n"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for a solution that largely works</li><li${
          _scopeId
        }>-0.1 points for each bad name</li><li${
          _scopeId
        }>-0.1 points for calling parameter <code${
          _scopeId
        }>numbers</code>, but iteration variable <code${
          _scopeId
        }>value</code> (use singular of parameter name!)</li><li${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>let</code> when could use <code${
          _scopeId
        }>const</code></li><li${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>var</code> when could use <code${
          _scopeId
        }>let</code></li><li${
          _scopeId
        }>-0.1 points for storing the function in global variable without <code${
          _scopeId
        }>const</code></li><li${
          _scopeId
        }>-0.1 for using <code${
          _scopeId
        }>anArray.length()</code> instead of <code${
          _scopeId
        }>anArray.length</code></li><li${
          _scopeId
        }>-0.1 points for not having semicolon after all statements (if that&#39;s the convention you use)</li><li${
          _scopeId
        }>-0.1 points for having same code in <code${
          _scopeId
        }>if</code> and <code${
          _scopeId
        }>else</code> (factor it out)</li><li${
          _scopeId
        }>-0.1 points for each line not properly indented</li><li${
          _scopeId
        }>-0.1 points for naming <code${
          _scopeId
        }>isSumGreaterThan100</code> wrong</li><li${
          _scopeId
        }>-0.2 points for each global variable created/assigned in the function</li><li${
          _scopeId
        }>-0.25 for implementing <code${
          _scopeId
        }>!isSumGreaterThan100()</code></li><li${
          _scopeId
        }>-0.25 for implementing <code${
          _scopeId
        }>isSumGreaterThan_OR_EQUAL_TO_100()</code></li><li${
          _scopeId
        }>-0.25 for iterating over indexes instead of values</li><li${
          _scopeId
        }>-0.25 for using variable that doesn&#39;t exist/hasn&#39;t been initialized</li><li${
          _scopeId
        }>-0.25 points for each syntax error</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Some students think it&#39;s a good idea to put <code${
          _scopeId
        }>100</code> in a constant named <code${
          _scopeId
        }>oneHundred</code>. That is meaningless; reading <code${
          _scopeId
        }>100</code> in the code gives the very same understanding as reading <code${
          _scopeId
        }>oneHundred</code>, so stick to using <code${
          _scopeId
        }>100</code> instead. When you have a better name on the value than just the amount it represents, then create a descriptive constant, like <code${
          _scopeId
        }>const MAXIMUM_STUDENTS_IN_SCHOOL = 1500</code> instead of <code${
          _scopeId
        }>const FIFTEEN_HUNDRED = 1500</code>.</p><p${
          _scopeId
        }>The name of the function is <em${
          _scopeId
        }>is<strong${
          _scopeId
        }>Sum</strong>GreaterThan100</em>. As the name suggests, you obviously have to compute the <em${
          _scopeId
        }><strong${
          _scopeId
        }>sum</strong></em> of the numbers. What&#39;s a good name on the variable that stores the sum? <code${
          _scopeId
        }>sum</code>! Many students instead call this variable something else, like <code${
          _scopeId
        }>total</code>, <code${
          _scopeId
        }>totalSum</code>, <code${
          _scopeId
        }>summary</code>, <code${
          _scopeId
        }>result</code>, etc., but this makes the code harder to read. Don&#39;t invent new names, stick to using existing names instead, and your code gets more consistent and easier to read.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for a solution that largely works"),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for each bad name"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for calling parameter "),
              (0,external_vue_.createVNode)("code", null, "numbers"),
              (0,external_vue_.createTextVNode)(", but iteration variable "),
              (0,external_vue_.createVNode)("code", null, "value"),
              (0,external_vue_.createTextVNode)(" (use singular of parameter name!)")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using "),
              (0,external_vue_.createVNode)("code", null, "let"),
              (0,external_vue_.createTextVNode)(" when could use "),
              (0,external_vue_.createVNode)("code", null, "const")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using "),
              (0,external_vue_.createVNode)("code", null, "var"),
              (0,external_vue_.createTextVNode)(" when could use "),
              (0,external_vue_.createVNode)("code", null, "let")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for storing the function in global variable without "),
              (0,external_vue_.createVNode)("code", null, "const")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 for using "),
              (0,external_vue_.createVNode)("code", null, "anArray.length()"),
              (0,external_vue_.createTextVNode)(" instead of "),
              (0,external_vue_.createVNode)("code", null, "anArray.length")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for not having semicolon after all statements (if that's the convention you use)"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for having same code in "),
              (0,external_vue_.createVNode)("code", null, "if"),
              (0,external_vue_.createTextVNode)(" and "),
              (0,external_vue_.createVNode)("code", null, "else"),
              (0,external_vue_.createTextVNode)(" (factor it out)")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for each line not properly indented"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for naming "),
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan100"),
              (0,external_vue_.createTextVNode)(" wrong")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.2 points for each global variable created/assigned in the function"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.25 for implementing "),
              (0,external_vue_.createVNode)("code", null, "!isSumGreaterThan100()")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.25 for implementing "),
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan_OR_EQUAL_TO_100()")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.25 for iterating over indexes instead of values"),
            (0,external_vue_.createVNode)("li", null, "-0.25 for using variable that doesn't exist/hasn't been initialized"),
            (0,external_vue_.createVNode)("li", null, "-0.25 points for each syntax error")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Some students think it's a good idea to put "),
              (0,external_vue_.createVNode)("code", null, "100"),
              (0,external_vue_.createTextVNode)(" in a constant named "),
              (0,external_vue_.createVNode)("code", null, "oneHundred"),
              (0,external_vue_.createTextVNode)(". That is meaningless; reading "),
              (0,external_vue_.createVNode)("code", null, "100"),
              (0,external_vue_.createTextVNode)(" in the code gives the very same understanding as reading "),
              (0,external_vue_.createVNode)("code", null, "oneHundred"),
              (0,external_vue_.createTextVNode)(", so stick to using "),
              (0,external_vue_.createVNode)("code", null, "100"),
              (0,external_vue_.createTextVNode)(" instead. When you have a better name on the value than just the amount it represents, then create a descriptive constant, like "),
              (0,external_vue_.createVNode)("code", null, "const MAXIMUM_STUDENTS_IN_SCHOOL = 1500"),
              (0,external_vue_.createTextVNode)(" instead of "),
              (0,external_vue_.createVNode)("code", null, "const FIFTEEN_HUNDRED = 1500"),
              (0,external_vue_.createTextVNode)(".")
            ]),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("The name of the function is "),
              (0,external_vue_.createVNode)("em", null, [
                (0,external_vue_.createTextVNode)("is"),
                (0,external_vue_.createVNode)("strong", null, "Sum"),
                (0,external_vue_.createTextVNode)("GreaterThan100")
              ]),
              (0,external_vue_.createTextVNode)(". As the name suggests, you obviously have to compute the "),
              (0,external_vue_.createVNode)("em", null, [
                (0,external_vue_.createVNode)("strong", null, "sum")
              ]),
              (0,external_vue_.createTextVNode)(" of the numbers. What's a good name on the variable that stores the sum? "),
              (0,external_vue_.createVNode)("code", null, "sum"),
              (0,external_vue_.createTextVNode)("! Many students instead call this variable something else, like "),
              (0,external_vue_.createVNode)("code", null, "total"),
              (0,external_vue_.createTextVNode)(", "),
              (0,external_vue_.createVNode)("code", null, "totalSum"),
              (0,external_vue_.createTextVNode)(", "),
              (0,external_vue_.createVNode)("code", null, "summary"),
              (0,external_vue_.createTextVNode)(", "),
              (0,external_vue_.createVNode)("code", null, "result"),
              (0,external_vue_.createTextVNode)(", etc., but this makes the code harder to read. Don't invent new names, stick to using existing names instead, and your code gets more consistent and easier to read.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-20-1p" tabindex="-1"><a class="header-anchor" href="#question-20-1p" aria-hidden="true">#</a> Question 20 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Implement the client-side JavaScript function <code${
          _scopeId
        }>makeCounter(button, startNumber)</code>, which receives an HTML Button object as the first argument, and makes that button function as a counter button (that is, <code${
          _scopeId
        }>startNumber</code> should be used as the initial text in the button, and that text (number) should be incremented by 1 each time the button is clicked).</p><p${
          _scopeId
        }>Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> aButton <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;counter-button&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token function"${
          _scopeId
        }>makeCounter</span><span class="token punctuation"${
          _scopeId
        }>(</span>aButton<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>10</span><span class="token punctuation"${
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
        }></div></div><p${
          _scopeId
        }>After the code above has been executed, the <code${
          _scopeId
        }>&lt;button&gt;</code> with id <code${
          _scopeId
        }>counter-button</code> should contain the text <code${
          _scopeId
        }>10</code>, and clicking on it should change the text to <code${
          _scopeId
        }>11</code>, and so one.</p><p${
          _scopeId
        }>It should be possible to call the function multiple times with different buttons, and each counter button should function independently of the others.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Implement the client-side JavaScript function "),
            (0,external_vue_.createVNode)("code", null, "makeCounter(button, startNumber)"),
            (0,external_vue_.createTextVNode)(", which receives an HTML Button object as the first argument, and makes that button function as a counter button (that is, "),
            (0,external_vue_.createVNode)("code", null, "startNumber"),
            (0,external_vue_.createTextVNode)(" should be used as the initial text in the button, and that text (number) should be incremented by 1 each time the button is clicked).")
          ]),
          (0,external_vue_.createVNode)("p", null, "Sample usage:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" aButton "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'counter-button'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "makeCounter"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("aButton"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("After the code above has been executed, the "),
            (0,external_vue_.createVNode)("code", null, "<button>"),
            (0,external_vue_.createTextVNode)(" with id "),
            (0,external_vue_.createVNode)("code", null, "counter-button"),
            (0,external_vue_.createTextVNode)(" should contain the text "),
            (0,external_vue_.createVNode)("code", null, "10"),
            (0,external_vue_.createTextVNode)(", and clicking on it should change the text to "),
            (0,external_vue_.createVNode)("code", null, "11"),
            (0,external_vue_.createTextVNode)(", and so one.")
          ]),
          (0,external_vue_.createVNode)("p", null, "It should be possible to call the function multiple times with different buttons, and each counter button should function independently of the others.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>makeCounter</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>button<span class="token punctuation"${
          _scopeId
        }>,</span> startNumber</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>let</span> number <span class="token operator"${
          _scopeId
        }>=</span> startNumber
    button<span class="token punctuation"${
          _scopeId
        }>.</span>innerText <span class="token operator"${
          _scopeId
        }>=</span> number
    
    button<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;click&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        number <span class="token operator"${
          _scopeId
        }>+=</span><span class="token number"${
          _scopeId
        }>1</span>
        button<span class="token punctuation"${
          _scopeId
        }>.</span>innerText <span class="token operator"${
          _scopeId
        }>=</span> number
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "makeCounter"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("button"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" startNumber")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" startNumber\n    button"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("innerText "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" number\n    \n    button"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'click'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n        button"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("innerText "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" number\n    "),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for a solution that largely works</li><li${
          _scopeId
        }>-0.1 points for each bad name</li><li${
          _scopeId
        }>-0.1 points for each misspelled name</li><li${
          _scopeId
        }>-0.1 points for each parameter named wrong (names were given in the question)</li><li${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>var</code> when could use <code${
          _scopeId
        }>let</code></li><li${
          _scopeId
        }>-0.1 points for not naming <code${
          _scopeId
        }>click</code> event correct</li><li${
          _scopeId
        }>-0.1 points for each line not properly indented</li><li${
          _scopeId
        }>-0.1 points for not naming <code${
          _scopeId
        }>innerText</code>/<code${
          _scopeId
        }>innerHTML</code> correct</li><li${
          _scopeId
        }>-0.1 points for storing the function in global variable without <code${
          _scopeId
        }>const</code></li><li${
          _scopeId
        }>-0.1 points for doing string concatenation with <code${
          _scopeId
        }>1</code> on each click</li><li${
          _scopeId
        }>-0.2 points for each global variable created/assigned in the function</li><li${
          _scopeId
        }>-0.25 points for not showing the <code${
          _scopeId
        }>startNumber</code> in the button immediately</li><li${
          _scopeId
        }>-0.25 points for not showing the incremented number in the button when the user clicks on the button</li></ul><p${
          _scopeId
        }>lkj</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>let</code> when could use <code${
          _scopeId
        }>const</code></li><li${
          _scopeId
        }>-0.1 for using <code${
          _scopeId
        }>anArray.length()</code> instead of <code${
          _scopeId
        }>anArray.length</code></li><li${
          _scopeId
        }>-0.1 points for not having semicolon after all statements (if that&#39;s the convention you use)</li><li${
          _scopeId
        }>-0.1 points for having same code in <code${
          _scopeId
        }>if</code> and <code${
          _scopeId
        }>else</code> (factor it out)</li><li${
          _scopeId
        }>-0.1 points for naming <code${
          _scopeId
        }>isSumGreaterThan100</code> wrong</li><li${
          _scopeId
        }>-0.25 for implementing <code${
          _scopeId
        }>!isSumGreaterThan100()</code></li><li${
          _scopeId
        }>-0.25 for implementing <code${
          _scopeId
        }>isSumGreaterThan_OR_EQUAL_TO_100()</code></li><li${
          _scopeId
        }>-0.25 for iterating over indexes instead of values</li><li${
          _scopeId
        }>-0.25 for using variable that doesn&#39;t exist/hasn&#39;t been initialized</li><li${
          _scopeId
        }>-0.25 points for each syntax error</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Some students increment the parameter <code${
          _scopeId
        }>startNumber</code> when the user clicks on the button. That&#39;s bad, because then the parameter is poorly named (it doesn&#39;t store the start value all the time, but should rather be name <code${
          _scopeId
        }>currentValue</code>, or similar).</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for a solution that largely works"),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for each bad name"),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for each misspelled name"),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for each parameter named wrong (names were given in the question)"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using "),
              (0,external_vue_.createVNode)("code", null, "var"),
              (0,external_vue_.createTextVNode)(" when could use "),
              (0,external_vue_.createVNode)("code", null, "let")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for not naming "),
              (0,external_vue_.createVNode)("code", null, "click"),
              (0,external_vue_.createTextVNode)(" event correct")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for each line not properly indented"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for not naming "),
              (0,external_vue_.createVNode)("code", null, "innerText"),
              (0,external_vue_.createTextVNode)("/"),
              (0,external_vue_.createVNode)("code", null, "innerHTML"),
              (0,external_vue_.createTextVNode)(" correct")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for storing the function in global variable without "),
              (0,external_vue_.createVNode)("code", null, "const")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for doing string concatenation with "),
              (0,external_vue_.createVNode)("code", null, "1"),
              (0,external_vue_.createTextVNode)(" on each click")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.2 points for each global variable created/assigned in the function"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.25 points for not showing the "),
              (0,external_vue_.createVNode)("code", null, "startNumber"),
              (0,external_vue_.createTextVNode)(" in the button immediately")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.25 points for not showing the incremented number in the button when the user clicks on the button")
          ]),
          (0,external_vue_.createVNode)("p", null, "lkj"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using "),
              (0,external_vue_.createVNode)("code", null, "let"),
              (0,external_vue_.createTextVNode)(" when could use "),
              (0,external_vue_.createVNode)("code", null, "const")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 for using "),
              (0,external_vue_.createVNode)("code", null, "anArray.length()"),
              (0,external_vue_.createTextVNode)(" instead of "),
              (0,external_vue_.createVNode)("code", null, "anArray.length")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for not having semicolon after all statements (if that's the convention you use)"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for having same code in "),
              (0,external_vue_.createVNode)("code", null, "if"),
              (0,external_vue_.createTextVNode)(" and "),
              (0,external_vue_.createVNode)("code", null, "else"),
              (0,external_vue_.createTextVNode)(" (factor it out)")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for naming "),
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan100"),
              (0,external_vue_.createTextVNode)(" wrong")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.25 for implementing "),
              (0,external_vue_.createVNode)("code", null, "!isSumGreaterThan100()")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.25 for implementing "),
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan_OR_EQUAL_TO_100()")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.25 for iterating over indexes instead of values"),
            (0,external_vue_.createVNode)("li", null, "-0.25 for using variable that doesn't exist/hasn't been initialized"),
            (0,external_vue_.createVNode)("li", null, "-0.25 points for each syntax error")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Some students increment the parameter "),
              (0,external_vue_.createVNode)("code", null, "startNumber"),
              (0,external_vue_.createTextVNode)(" when the user clicks on the button. That's bad, because then the parameter is poorly named (it doesn't store the start value all the time, but should rather be name "),
              (0,external_vue_.createVNode)("code", null, "currentValue"),
              (0,external_vue_.createTextVNode)(", or similar).")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-21-4p" tabindex="-1"><a class="header-anchor" href="#question-21-4p" aria-hidden="true">#</a> Question 21 (4p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The function <code${
          _scopeId
        }>getMovieByTitle()</code> can be used to fetch a movie with a specific title asynchronously from the server like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getMovieByTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Shrek&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> movie</span><span class="token punctuation"${
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
        }>// movie = {id: 3, title: &quot;Shrek&quot;}</span>
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
        }>getReviewsByMovieId()</code> can be used to fetch all reviews a movie with a specific id has asynchronously from the server like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getReviewsByMovieId</span><span class="token punctuation"${
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
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> reviews</span><span class="token punctuation"${
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
        }>// Couldn&#39;t fetch the reviews.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Do something with the reviews.</span>
        <span class="token comment"${
          _scopeId
        }>// reviews = [</span>
        <span class="token comment"${
          _scopeId
        }>//   {id: 2, movieId: 5, rating: 8},</span>
        <span class="token comment"${
          _scopeId
        }>//   {id: 5, movieId: 5, rating: 3},</span>
        <span class="token comment"${
          _scopeId
        }>//   {id: 9, movieId: 5, rating: 9},</span>
        <span class="token comment"${
          _scopeId
        }>//   ...</span>
        <span class="token comment"${
          _scopeId
        }>// ]</span>
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
        }>Implement the function <code${
          _scopeId
        }>getBestMovie(title1, title2, callback)</code>, which receives the title of two movies as arguments, and should send back the movie object with the highest average rating through the callback function.</p><p${
          _scopeId
        }>Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getBestMovie</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Shrek&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;Die another day&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> bestMovie</span><span class="token punctuation"${
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
        console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Problem fetching required info.&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> error<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The best movie is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>bestMovie<span class="token punctuation"${
          _scopeId
        }>.</span>title<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }>Important details:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>The callback function should be called only once</li><li${
          _scopeId
        }>As soon as any function gives an error, the callback function should be called with that error (the other argument should be <code${
          _scopeId
        }>null</code>)</li><li${
          _scopeId
        }>The data should be fetched as fast as possible (loading times should be minimized)</li><li${
          _scopeId
        }>When suitable, create helper functions (avoid repeating code)</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The function "),
            (0,external_vue_.createVNode)("code", null, "getMovieByTitle()"),
            (0,external_vue_.createTextVNode)(" can be used to fetch a movie with a specific title asynchronously from the server like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Shrek\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movie")
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
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// movie = {id: 3, title: \"Shrek\"}"),
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
            (0,external_vue_.createVNode)("code", null, "getReviewsByMovieId()"),
            (0,external_vue_.createTextVNode)(" can be used to fetch all reviews a movie with a specific id has asynchronously from the server like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getReviewsByMovieId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" reviews")
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
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Couldn't fetch the reviews."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do something with the reviews."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// reviews = ["),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "//   {id: 2, movieId: 5, rating: 8},"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "//   {id: 5, movieId: 5, rating: 3},"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "//   {id: 9, movieId: 5, rating: 9},"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "//   ..."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ]"),
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
            (0,external_vue_.createTextVNode)("Implement the function "),
            (0,external_vue_.createVNode)("code", null, "getBestMovie(title1, title2, callback)"),
            (0,external_vue_.createTextVNode)(", which receives the title of two movies as arguments, and should send back the movie object with the highest average rating through the callback function.")
          ]),
          (0,external_vue_.createVNode)("p", null, "Sample usage:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getBestMovie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Shrek\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Die another day\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" bestMovie")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Problem fetching required info.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The best movie is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("bestMovie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("title"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
          (0,external_vue_.createVNode)("p", null, "Important details:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "The callback function should be called only once"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("As soon as any function gives an error, the callback function should be called with that error (the other argument should be "),
              (0,external_vue_.createVNode)("code", null, "null"),
              (0,external_vue_.createTextVNode)(")")
            ]),
            (0,external_vue_.createVNode)("li", null, "The data should be fetched as fast as possible (loading times should be minimized)"),
            (0,external_vue_.createVNode)("li", null, "When suitable, create helper functions (avoid repeating code)")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getBestMovie</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>title1<span class="token punctuation"${
          _scopeId
        }>,</span> title2<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token comment"${
          _scopeId
        }>// This is the structure of the data we need to compute.</span>
    <span class="token keyword"${
          _scopeId
        }>const</span> movieAndAverageRatings <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
        <span class="token comment"${
          _scopeId
        }>// {movie: theMovieObject, averageRating: 0}</span>
        <span class="token comment"${
          _scopeId
        }>// {movie: theMovieObject, averageRating: 0}</span>
    <span class="token punctuation"${
          _scopeId
        }>]</span>
    
    <span class="token keyword"${
          _scopeId
        }>let</span> hasSentBackError <span class="token operator"${
          _scopeId
        }>=</span> <span class="token boolean"${
          _scopeId
        }>false</span>
    
    <span class="token comment"${
          _scopeId
        }>// Fetch the two movies in parallel.</span>
    <span class="token function"${
          _scopeId
        }>getMovieByTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span>title1<span class="token punctuation"${
          _scopeId
        }>,</span> onMovieFetched<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token function"${
          _scopeId
        }>getMovieByTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span>title2<span class="token punctuation"${
          _scopeId
        }>,</span> onMovieFetched<span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>onMovieFetched</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> movie</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        
        <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>hasSentBackError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token comment"${
          _scopeId
        }>// Something has already gone wrong, we don&#39;t need to continue.</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span> <span class="token keyword"${
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
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            hasSentBackError <span class="token operator"${
          _scopeId
        }>=</span> <span class="token boolean"${
          _scopeId
        }>true</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token comment"${
          _scopeId
        }>// Fetch the reviews for the movie.</span>
            <span class="token function"${
          _scopeId
        }>getReviewsByMovieId</span><span class="token punctuation"${
          _scopeId
        }>(</span>movie<span class="token punctuation"${
          _scopeId
        }>.</span>id<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> reviews</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                <span class="token function"${
          _scopeId
        }>onReviewsFetched</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>,</span> reviews<span class="token punctuation"${
          _scopeId
        }>,</span> movie<span class="token punctuation"${
          _scopeId
        }>)</span>
            <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span>
        
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
    <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>onReviewsFetched</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> reviews<span class="token punctuation"${
          _scopeId
        }>,</span> movie</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        
        <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>hasSentBackError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token comment"${
          _scopeId
        }>// Something has already gone wrong, we don&#39;t need to continue.</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span> <span class="token keyword"${
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
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            hasSentBackError <span class="token operator"${
          _scopeId
        }>=</span> <span class="token boolean"${
          _scopeId
        }>true</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token comment"${
          _scopeId
        }>// Compute average and remember it.</span>
            movieAndAverageRatings<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>push</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                movie<span class="token punctuation"${
          _scopeId
        }>,</span>
                averageRating<span class="token operator"${
          _scopeId
        }>:</span> <span class="token function"${
          _scopeId
        }>getAverageRating</span><span class="token punctuation"${
          _scopeId
        }>(</span>reviews<span class="token punctuation"${
          _scopeId
        }>)</span>
            <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
            <span class="token comment"${
          _scopeId
        }>// Check if we have computed average rating for both movies.</span>
            <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>movieAndAverageRatings<span class="token punctuation"${
          _scopeId
        }>.</span>length <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                
                <span class="token comment"${
          _scopeId
        }>// Check which movie has best rating.</span>
                <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>movieAndAverageRatings<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>.</span>averageRating <span class="token operator"${
          _scopeId
        }>&lt;</span> movieAndAverageRatings<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>.</span>averageRating<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
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
        }>,</span> movieAndAverageRatings<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>.</span>movie<span class="token punctuation"${
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
        }>,</span> movieAndAverageRatings<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>.</span>movie<span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token punctuation"${
          _scopeId
        }>}</span>
                
            <span class="token punctuation"${
          _scopeId
        }>}</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span>
        
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
    <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getAverageRating</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>reviews</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        
        <span class="token keyword"${
          _scopeId
        }>let</span> ratingsSum <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
        
        <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> review <span class="token keyword"${
          _scopeId
        }>of</span> reviews<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            ratingSum <span class="token operator"${
          _scopeId
        }>+=</span> review<span class="token punctuation"${
          _scopeId
        }>.</span>rating
        <span class="token punctuation"${
          _scopeId
        }>}</span>
        
        <span class="token keyword"${
          _scopeId
        }>return</span> ratingSum <span class="token operator"${
          _scopeId
        }>/</span> reviews<span class="token punctuation"${
          _scopeId
        }>.</span>length
        
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
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
        }><span class="line-number"${
          _scopeId
        }>22</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>37</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>38</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>39</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>40</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>41</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>42</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>43</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>44</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>45</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>46</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>47</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>48</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>49</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>50</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>51</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>52</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>53</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>54</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>55</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>56</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>57</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>58</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>59</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>60</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>61</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>62</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>63</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>64</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>65</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>66</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>67</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>68</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>69</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>70</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>71</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>72</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>73</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>74</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>75</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>76</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>77</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>78</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>79</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>80</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>81</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>82</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>83</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>84</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getBestMovie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("title1"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" title2"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This is the structure of the data we need to compute."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" movieAndAverageRatings "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// {movie: theMovieObject, averageRating: 0}"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// {movie: theMovieObject, averageRating: 0}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" hasSentBackError "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Fetch the two movies in parallel."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("title1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" onMovieFetched"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("title2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" onMovieFetched"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onMovieFetched"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movie")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("hasSentBackError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Something has already gone wrong, we don't need to continue."),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            hasSentBackError "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Fetch the reviews for the movie."),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getReviewsByMovieId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("movie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" reviews")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onReviewsFetched"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" reviews"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" movie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        \n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onReviewsFetched"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" reviews"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movie")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("hasSentBackError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Something has already gone wrong, we don't need to continue."),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            hasSentBackError "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Compute average and remember it."),
                (0,external_vue_.createTextVNode)("\n            movieAndAverageRatings"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "push"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                movie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n                averageRating"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAverageRating"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("reviews"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Check if we have computed average rating for both movies."),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("movieAndAverageRatings"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                \n                "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Check which movie has best rating."),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("movieAndAverageRatings"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("averageRating "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" movieAndAverageRatings"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("averageRating"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" movieAndAverageRatings"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("movie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" movieAndAverageRatings"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("movie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n                \n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        \n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAverageRating"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "reviews"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" ratingsSum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" review "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" reviews"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            ratingSum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(" review"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("rating\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" ratingSum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(" reviews"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length\n        \n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "59"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "60"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "61"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "62"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "63"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "64"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "65"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "66"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "67"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "68"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "69"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "70"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "71"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "72"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "73"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "74"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "75"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "76"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "77"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "78"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "79"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "80"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "81"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "82"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "83"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "84"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>4 points for a solution that largely works <ul${
          _scopeId
        }><li${
          _scopeId
        }>-1 point for not sending back movie object (but title, or average rating, or something else)</li><li${
          _scopeId
        }>-1 point for possibly calling callback multiple times</li><li${
          _scopeId
        }>-1 point for not sending requests in parallel</li><li${
          _scopeId
        }>-1 point for kind of having the same code for both movies, instead of a generalized function</li><li${
          _scopeId
        }>-0.2 points for each other error (indentation error, poor name, wrong name, const/var/let wrong, etc.)</li></ul></li><li${
          _scopeId
        }>0 points for a solution that assumes callback function runs synchronously (called immediately), such as:</li></ul><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>let</span> fetchedMovie <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>null</span>
<span class="token function"${
          _scopeId
        }>getMovieByTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Shrek&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> movie</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    fetchedMovie <span class="token operator"${
          _scopeId
        }>=</span> movie
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>fetchedMovie<span class="token punctuation"${
          _scopeId
        }>.</span>id<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// This won&#39;t work, this line is executed before the asynchronous callback function is called, so fetchedMovie is null.</span>
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
        }></div></div><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>There are some cases I&#39;ve ignored to handle, such as:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>If a movie has no reviews, computing it&#39;s average will be wrong (<code${
          _scopeId
        }>0/0</code> in my solution)</li><li${
          _scopeId
        }>If the two movies have the same average rating, it&#39;s unclear which to send back</li></ul><p${
          _scopeId
        }>Extra star in the corner to the students that thought of these cases!</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("4 points for a solution that largely works "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "-1 point for not sending back movie object (but title, or average rating, or something else)"),
                (0,external_vue_.createVNode)("li", null, "-1 point for possibly calling callback multiple times"),
                (0,external_vue_.createVNode)("li", null, "-1 point for not sending requests in parallel"),
                (0,external_vue_.createVNode)("li", null, "-1 point for kind of having the same code for both movies, instead of a generalized function"),
                (0,external_vue_.createVNode)("li", null, "-0.2 points for each other error (indentation error, poor name, wrong name, const/var/let wrong, etc.)")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "0 points for a solution that assumes callback function runs synchronously (called immediately), such as:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" fetchedMovie "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Shrek\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movie")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    fetchedMovie "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" movie\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("fetchedMovie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This won't work, this line is executed before the asynchronous callback function is called, so fetchedMovie is null."),
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
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, "There are some cases I've ignored to handle, such as:"),
            (0,external_vue_.createVNode)("ul", null, [
              (0,external_vue_.createVNode)("li", null, [
                (0,external_vue_.createTextVNode)("If a movie has no reviews, computing it's average will be wrong ("),
                (0,external_vue_.createVNode)("code", null, "0/0"),
                (0,external_vue_.createTextVNode)(" in my solution)")
              ]),
              (0,external_vue_.createVNode)("li", null, "If the two movies have the same average rating, it's unclear which to send back")
            ]),
            (0,external_vue_.createVNode)("p", null, "Extra star in the corner to the students that thought of these cases!")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2022-03-26.html.vue?vue&type=template&id=7c43ae24

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2022-03-26.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exam_2022_03_26_html = (__exports__);

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

/***/ 6796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-58a1373b",
  "path": "/courses/web-development-advanced-concepts/exams/exam-2022-03-26.html",
  "title": "Exam 2022-03-26",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Client-side",
      "slug": "client-side",
      "children": [
        {
          "level": 3,
          "title": "Question 1 (1p)",
          "slug": "question-1-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 2 (1p)",
          "slug": "question-2-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 3 (1p)",
          "slug": "question-3-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 4 (1p)",
          "slug": "question-4-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 5 (1p)",
          "slug": "question-5-1p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Containers",
      "slug": "containers",
      "children": [
        {
          "level": 3,
          "title": "Question 6 (1p)",
          "slug": "question-6-1p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Scaling",
      "slug": "scaling",
      "children": [
        {
          "level": 3,
          "title": "Question 7 (2p)",
          "slug": "question-7-2p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Server-side",
      "slug": "server-side",
      "children": [
        {
          "level": 3,
          "title": "Question 8 (2p)",
          "slug": "question-8-2p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 9 (3p)",
          "slug": "question-9-3p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 10 (1p)",
          "slug": "question-10-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 11 (1p)",
          "slug": "question-11-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 12 (2p)",
          "slug": "question-12-2p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "REST API",
      "slug": "rest-api",
      "children": [
        {
          "level": 3,
          "title": "Question 13 (1p)",
          "slug": "question-13-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 14 (1p)",
          "slug": "question-14-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 15 (1p)",
          "slug": "question-15-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 16 (1p)",
          "slug": "question-16-1p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Security",
      "slug": "security",
      "children": [
        {
          "level": 3,
          "title": "Question 17 (1p)",
          "slug": "question-17-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 18 (2p)",
          "slug": "question-18-2p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Code Writing",
      "slug": "code-writing",
      "children": [
        {
          "level": 3,
          "title": "Question 19 (1p)",
          "slug": "question-19-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 20 (1p)",
          "slug": "question-20-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 21 (4p)",
          "slug": "question-21-4p",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/web-development-advanced-concepts/exams/exam-2022-03-26.md",
  "git": {
    "updatedTime": 1649418104000
  }
}


/***/ })

};
;
//# sourceMappingURL=5393.app.js.map