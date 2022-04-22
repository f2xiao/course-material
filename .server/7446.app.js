"use strict";
exports.id = 7446;
exports.ids = [7446];
exports.modules = {

/***/ 7318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/common-code-mistakes/index.html.vue?vue&type=template&id=365208ef



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_ReportMistake = (0,external_vue_.resolveComponent)("ReportMistake")

  _push(`<!--[--><h1 id="common-code-mistakes" tabindex="-1"><a class="header-anchor" href="#common-code-mistakes" aria-hidden="true">#</a> Common Code Mistakes</h1><p>In this lecture we take a look at common mistakes students do in the code they write. But first some introduction to why even small mistakes are very bad.</p><h2 id="why-are-small-mistakes-such-a-big-deal" tabindex="-1"><a class="header-anchor" href="#why-are-small-mistakes-such-a-big-deal" aria-hidden="true">#</a> Why are small mistakes such a big deal?</h2><p>Many students think that many of the common mistakes mentioned in this lecture are something they don&#39;t need to worry about. <em>My code compiles, it works as intended, so what&#39;s the problem?</em> Well, the problem is that these students have only thought about delivering a <em>functional</em> solution, not a <em>good</em> solution. These students often think that they are the only ones who ever will read the code they write, or maybe even that no one at all will ever read the code they write, but that is usually not the case:</p><ul><li>When the application has been fully implemented, a <em>quality assurance expert</em> might read all the code so she can guarantee customers you deliver what has been agreed on. Then it&#39;s very important the code is easy to read.</li><li>When the application has been fully implemented, a <em>security expert</em> might read all the code so she can guarantee customers the application doesn&#39;t contain any known security vulnerabilities. Then it&#39;s very important the code is easy to read.</li><li>After the application has been fully implemented, <em>customers might discover bugs</em> that needs to be fixed. A programmer other than you might be assigned the task to fix the bug (you might for example have started to work on other projects and are busy with them), and then it&#39;s very important the code is easy to read for the new programmer.</li><li>After the application has been fully implemented, <em>customers might want additional features</em> added to the application. A programmer other than you might be assigned the task to add it (you might for example have started to work on other projects and are busy with them), and then it&#39;s very important the code is easy to read for the new programmer.</li><li>Etc.</li></ul><p>When your code is executed by a computer, it is very important that the code is fully functional and, if not optimized, at least not terribly slow. But it is even more important that others easily can read your code, because humans are much more expensive to use than computers. For example, if you have written good code that is easy to read, a security expert might need one day to look through all the code in the application to verify that it doesn&#39;t contain any known security vulnerabilities. But if the code instead is hard to read, she might need a week to do that. And if she is having difficulties to read the code, so will the quality assurance guy, who also needs a week instead of a single day to look through the code. And when adding a new feature in the future, which would take 4 hours to do with good code, will take 3 days with the bad code, and most likely new bugs are introduced with this new feature because the programmer who added it didn&#39;t understand how all the existing code worked, so she made assumptions of how parts of the code worked instead of knowing, and some of these assumptions will be wrong and need to be corrected later.</p><p>So, a programmer that is lazy and considers himself to be finish when the code is functional is not a good programmer. <strong>When the code is functional, you are half way there</strong>: you have implemented the feature in such way that computers can execute your code. Half of your work remains: to improve the quality of the code by re-structuring it and making it more readable so other humans easily can understand how your code works.</p><h2 id="but-why-are-small-mistakes-such-a-big-deal" tabindex="-1"><a class="header-anchor" href="#but-why-are-small-mistakes-such-a-big-deal" aria-hidden="true">#</a> But why are <em>small</em> mistakes such a big deal?</h2><p><em>OK, I misspelled the name of a variable once, and at a few places I didn&#39;t stick to my indentation convention. Other humans can still read and understand my code although these small mistakes exist, what&#39;s the big deal?</em></p><p>Programmers are only humans, so one or two of these mistakes in 5 000 lines of code are understandable. But if more than that exists, it&#39;s simply a job poorly done by the programmer. Programming is quite abstract and can be hard to understand, so let&#39;s compare it to other professions:</p><ul><li>Do you think a painter do a good job if he paints 99.9% of the wall in one color, but there&#39;s a small line in the middle of the wall in another color?<br><em>What&#39;s the big deal, it&#39;s only a small line</em>?</li><li>Do you think a car manufacturer do a good job if the steering wheel only works 99.9% of the cases?<br><em>What&#39;s the big deal, you can still steer the car most of the time</em>?</li><li>Do you think an author do a good job if all sentences in her book always start with a lower case character?<br><em>What&#39;s the big deal, most characters are in the correct case</em>?</li></ul><p>Hopefully you agree in these other professions, even small mistakes, such as those listed above, are quite bad, so for students studying to these professions it&#39;s very important to learn that these small mistakes are not acceptable. The same is true for students studying programming, the only difference is that it&#39;s harder for beginners to realize that small programming mistakes are just as bad as the mistakes listed above.</p><p>Of course there are some nice xkcd:s about code quality:</p><ul><li><a href="https://xkcd.com/1513/" target="_blank" rel="noopener noreferrer">https://xkcd.com/1513/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://xkcd.com/1695/" target="_blank" rel="noopener noreferrer">https://xkcd.com/1695/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://xkcd.com/1833/" target="_blank" rel="noopener noreferrer">https://xkcd.com/1833/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="common-student-mistakes" tabindex="-1"><a class="header-anchor" href="#common-student-mistakes" aria-hidden="true">#</a> Common student mistakes</h2><p>So, what are some of the common mistakes students do in their code?</p><h3 id="indent-wrong" tabindex="-1"><a class="header-anchor" href="#indent-wrong" aria-hidden="true">#</a> Indent wrong</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>x<span class="token punctuation"${
          _scopeId
        }>,</span> y</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>const</span> sum <span class="token operator"${
          _scopeId
        }>=</span> x <span class="token operator"${
          _scopeId
        }>+</span> y
        <span class="token keyword"${
          _scopeId
        }>return</span> sum
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("x"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" y")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" y\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" sum\n"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>x<span class="token punctuation"${
          _scopeId
        }>,</span> y</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>const</span> sum <span class="token operator"${
          _scopeId
        }>=</span> x <span class="token operator"${
          _scopeId
        }>+</span> y
    <span class="token keyword"${
          _scopeId
        }>return</span> sum
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("x"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" y")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" y\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" sum\n"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>logSum</span><span class="token punctuation"${
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
        }>)</span>
        sum <span class="token operator"${
          _scopeId
        }>+=</span> number
        console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(" number\n        console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>logSum</span><span class="token punctuation"${
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
        }>)</span>
        sum <span class="token operator"${
          _scopeId
        }>+=</span> number
    console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(" number\n    console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The code has been indented wrong.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The code has been indented wrong.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Indentation is a tool we have to make the code more readable. Used wrong, it instead makes the code less readable, and it would be better to not indent the code at all. That way, at least the reader would not mistake an incorrect indentation for a correct indentation.</p><p${
          _scopeId
        }>Compare to text in natural languages (e.g. English and Swedish): when you come across a word starting with an uppercase character you can assume that word is a name (<em${
          _scopeId
        }>Alice</em>, <em${
          _scopeId
        }>England</em>, etc.) (unless it&#39;s the first word in a sentence). Using this wrong makes the reader misinterpret the meaning of the text, for example:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }><em${
          _scopeId
        }>alice is young</em> means that the reader won&#39;t interpret <em${
          _scopeId
        }>alice</em> as a name, and the text has another meaning than the writer intended.</li><li${
          _scopeId
        }><em${
          _scopeId
        }>the Dog is old</em> means the reader will interpret <em${
          _scopeId
        }>Dog</em> as a name, and the text has another meaning than the writer intended.</li></ul><p${
          _scopeId
        }>Even if you only have 2-3 of these mistakes, the reader can&#39;t trust that you use lowercase/uppercase characters correct anywhere in your text, and she must read all your text very carefully, and that requires bigger concentration and takes longer time.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Indentation is a tool we have to make the code more readable. Used wrong, it instead makes the code less readable, and it would be better to not indent the code at all. That way, at least the reader would not mistake an incorrect indentation for a correct indentation."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Compare to text in natural languages (e.g. English and Swedish): when you come across a word starting with an uppercase character you can assume that word is a name ("),
            (0,external_vue_.createVNode)("em", null, "Alice"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("em", null, "England"),
            (0,external_vue_.createTextVNode)(", etc.) (unless it's the first word in a sentence). Using this wrong makes the reader misinterpret the meaning of the text, for example:")
          ]),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("em", null, "alice is young"),
              (0,external_vue_.createTextVNode)(" means that the reader won't interpret "),
              (0,external_vue_.createVNode)("em", null, "alice"),
              (0,external_vue_.createTextVNode)(" as a name, and the text has another meaning than the writer intended.")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("em", null, "the Dog is old"),
              (0,external_vue_.createTextVNode)(" means the reader will interpret "),
              (0,external_vue_.createVNode)("em", null, "Dog"),
              (0,external_vue_.createTextVNode)(" as a name, and the text has another meaning than the writer intended.")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Even if you only have 2-3 of these mistakes, the reader can't trust that you use lowercase/uppercase characters correct anywhere in your text, and she must read all your text very carefully, and that requires bigger concentration and takes longer time.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Always properly indent the code.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Always properly indent the code.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="multiple-indentation-conventions" tabindex="-1"><a class="header-anchor" href="#multiple-indentation-conventions" aria-hidden="true">#</a> Multiple indentation conventions</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>logSum</span><span class="token punctuation"${
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
  console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n          sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(" number\n  "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n  console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>logSum</span><span class="token punctuation"${
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
    console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
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
                (0,external_vue_.createTextVNode)("\n    console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>logSum</span><span class="token punctuation"${
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
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span> <span class="token operator"${
          _scopeId
        }>&lt;</span> numbers<span class="token punctuation"${
          _scopeId
        }>.</span>length<span class="token punctuation"${
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
             console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum<span class="token punctuation"${
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
        }>&quot;No sum to log.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n             "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n             "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                     sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(" number\n             "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n             console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n         console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"No sum to log.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>logSum</span><span class="token punctuation"${
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
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span> <span class="token operator"${
          _scopeId
        }>&lt;</span> numbers<span class="token punctuation"${
          _scopeId
        }>.</span>length<span class="token punctuation"${
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
        console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum<span class="token punctuation"${
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
        }>&quot;No sum to log.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(" number\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"No sum to log.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The code uses multiple indentation conventions (&quot;indentation of different sizes&quot;).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The code uses multiple indentation conventions (\"indentation of different sizes\").")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>It&#39;s hard to see how nested the code is when each indentation level is of different size. As always, it&#39;s <strong${
          _scopeId
        }>better to be consistent</strong>.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("It's hard to see how nested the code is when each indentation level is of different size. As always, it's "),
            (0,external_vue_.createVNode)("strong", null, "better to be consistent"),
            (0,external_vue_.createTextVNode)(".")
          ])
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Always use the same indentation convention (e.g. <code${
          _scopeId
        }>2 spaces</code>, <code${
          _scopeId
        }>4 spaces</code>, <code${
          _scopeId
        }>8 spaces</code> or <code${
          _scopeId
        }>1 tab</code>, etc.) for all your code. Files of different types can use different indentation convention if that is suitable.</p><div class="custom-container tip"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Show white spaces!</p><p${
          _scopeId
        }>Most code editors do by default show space and tab characters as transparent boxes. This makes it hard to see if one is mixing spaces and tabs when one indents the code. But any proper code editor has a setting you can change to display spaces as <code${
          _scopeId
        }>·</code> and tabs as <code${
          _scopeId
        }>→</code>, or similar. We strongly recommend you to enable this, so you can be sure that you don&#39;t mix indentation conventions.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Always use the same indentation convention (e.g. "),
            (0,external_vue_.createVNode)("code", null, "2 spaces"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("code", null, "4 spaces"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("code", null, "8 spaces"),
            (0,external_vue_.createTextVNode)(" or "),
            (0,external_vue_.createVNode)("code", null, "1 tab"),
            (0,external_vue_.createTextVNode)(", etc.) for all your code. Files of different types can use different indentation convention if that is suitable.")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container tip" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Show white spaces!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Most code editors do by default show space and tab characters as transparent boxes. This makes it hard to see if one is mixing spaces and tabs when one indents the code. But any proper code editor has a setting you can change to display spaces as "),
              (0,external_vue_.createVNode)("code", null, "·"),
              (0,external_vue_.createTextVNode)(" and tabs as "),
              (0,external_vue_.createVNode)("code", null, "→"),
              (0,external_vue_.createTextVNode)(", or similar. We strongly recommend you to enable this, so you can be sure that you don't mix indentation conventions.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="not-using-mnemonic-names" tabindex="-1"><a class="header-anchor" href="#not-using-mnemonic-names" aria-hidden="true">#</a> Not using mnemonic names</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>username <span class="token operator"${
          _scopeId
        }>==</span> uname<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// Correct username entered!</span>
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
        }>&quot;The wrong username &#39;&quot;</span><span class="token operator"${
          _scopeId
        }>+</span>username<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;&#39; was entered.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
     <span class="token comment"${
          _scopeId
        }>// By only looking at the line above, we can&#39;t be sure we used the correct variable.</span>
     <span class="token comment"${
          _scopeId
        }>// Need to look at the definition of the variables to be certain... 😒</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("username "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" uname"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Correct username entered!"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The wrong username '\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("username"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"' was entered.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n     "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// By only looking at the line above, we can't be sure we used the correct variable."),
                (0,external_vue_.createTextVNode)("\n     "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Need to look at the definition of the variables to be certain... 😒"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>enteredUsername <span class="token operator"${
          _scopeId
        }>==</span> correctUsername<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// Correct username entered!</span>
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
        }>&quot;The wrong username &#39;&quot;</span><span class="token operator"${
          _scopeId
        }>+</span>enteredUsername<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;&#39; was entered.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token comment"${
          _scopeId
        }>// We can be sure that we used the correct variable on the line above.</span>
    <span class="token comment"${
          _scopeId
        }>// No need for us to look at the definition of the variables 😀</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("enteredUsername "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" correctUsername"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Correct username entered!"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The wrong username '\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("enteredUsername"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"' was entered.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// We can be sure that we used the correct variable on the line above."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// No need for us to look at the definition of the variables 😀"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> movies <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>4</span> <span class="token comment"${
          _scopeId
        }>// &quot;movies&quot; sounds like a collection of multiple movie objects, like:</span>
<span class="token comment"${
          _scopeId
        }>// movies = [{title: &quot;Die Another Day&quot;, title: &quot;Titanic&quot;}]</span>

<span class="token comment"${
          _scopeId
        }>// Much further down...:</span>

console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;I have &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>movies<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; movies.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token comment"${
          _scopeId
        }>// The line above seems wrong, should rather use movies.length?</span>
<span class="token comment"${
          _scopeId
        }>// Need to go to the definition of the &quot;movies&quot; variable to check... 😒</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" movies "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// \"movies\" sounds like a collection of multiple movie objects, like:"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// movies = [{title: \"Die Another Day\", title: \"Titanic\"}]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Much further down...:"),
                (0,external_vue_.createTextVNode)("\n\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"I have \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("movies"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" movies.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The line above seems wrong, should rather use movies.length?"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Need to go to the definition of the \"movies\" variable to check... 😒"),
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
          ])
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> numberOfMovies <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>4</span>

<span class="token comment"${
          _scopeId
        }>// Much further down...:</span>

console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;I have &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>numberOfMovies<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; movies.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token comment"${
          _scopeId
        }>// The line above is obviously correct 😀</span>
<span class="token comment"${
          _scopeId
        }>// No need to go to the definition of the &quot;movies&quot; variable to check.</span>
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
        }>OR</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> movies <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>{</span>title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Die Another Day&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Titanic&quot;</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token comment"${
          _scopeId
        }>// Much further down...:</span>

console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;I have &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>movies<span class="token punctuation"${
          _scopeId
        }>.</span>length<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; movies.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token comment"${
          _scopeId
        }>// The line above makes total sense, is probably correct 😀</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" numberOfMovies "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Much further down...:"),
                (0,external_vue_.createTextVNode)("\n\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"I have \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("numberOfMovies"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" movies.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The line above is obviously correct 😀"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// No need to go to the definition of the \"movies\" variable to check."),
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
          (0,external_vue_.createVNode)("p", null, "OR"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" movies "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("title"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Die Another Day\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" title"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Titanic\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Much further down...:"),
                (0,external_vue_.createTextVNode)("\n\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"I have \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("movies"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" movies.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The line above makes total sense, is probably correct 😀"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The names on variables, functions, classes, files, etc. are not descriptive (the names don&#39;t describe what they represent).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The names on variables, functions, classes, files, etc. are not descriptive (the names don't describe what they represent).")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The code becomes very hard to read, because the reader can&#39;t understand what a specific line of code using these names do, but have to go and look at the definition of these names elsewhere to understand what they represent, and then go back to the initial line of code to understand how that one works. Too much work...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The code becomes very hard to read, because the reader can't understand what a specific line of code using these names do, but have to go and look at the definition of these names elsewhere to understand what they represent, and then go back to the initial line of code to understand how that one works. Too much work...")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Always use good descriptive names on everything. Optimally one should be able to understand what each line of code do/how each line of code works only by reading that line of code.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Always use good descriptive names on everything. Optimally one should be able to understand what each line of code do/how each line of code works only by reading that line of code.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="using-hardcoded-values" tabindex="-1"><a class="header-anchor" href="#using-hardcoded-values" aria-hidden="true">#</a> Using hardcoded values</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// The condition below contains no info about why username is compared to &quot;Alice&quot;.</span>
<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>username <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;Alice&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// ...</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The condition below contains no info about why username is compared to \"Alice\"."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("username "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> <span class="token constant"${
          _scopeId
        }>ADMIN_USERNAME</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;Alice&quot;</span>

<span class="token comment"${
          _scopeId
        }>// The condition below obviously checks if the user is an admin.</span>
<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>username <span class="token operator"${
          _scopeId
        }>==</span> <span class="token constant"${
          _scopeId
        }>ADMIN_USERNAME</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// ...</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "ADMIN_USERNAME"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The condition below obviously checks if the user is an admin."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("username "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "ADMIN_USERNAME"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>


<span class="token keyword"${
          _scopeId
        }>const</span> errorCodes <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token comment"${
          _scopeId
        }>// The condition below contains no info about why we have this condition.</span>
<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>name<span class="token punctuation"${
          _scopeId
        }>.</span>length <span class="token operator"${
          _scopeId
        }>&lt;</span> <span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    errorCodes<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>push</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// No info about what 1 means. Is this really correct?</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// ...</span>

<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>errorCodeToMessage</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>errorCode</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>switch</span><span class="token punctuation"${
          _scopeId
        }>(</span>errorCode<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>case</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token comment"${
          _scopeId
        }>// No easy way to check that this translation is correct.</span>
            <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token string"${
          _scopeId
        }>&quot;Name needs to contain at least 3 characters.&quot;</span>
        <span class="token comment"${
          _scopeId
        }>// ...</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("\n\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" errorCodes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The condition below contains no info about why we have this condition."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    errorCodes"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "push"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// No info about what 1 means. Is this really correct?"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "errorCodeToMessage"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "errorCode"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "switch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("errorCode"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "case"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// No easy way to check that this translation is correct."),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Name needs to contain at least 3 characters.\""),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> <span class="token constant"${
          _scopeId
        }>MIN_NAME_LENGTH</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>3</span>
<span class="token keyword"${
          _scopeId
        }>const</span> <span class="token constant"${
          _scopeId
        }>ERROR_CODE_NAME_TOO_SHORT</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>1</span>

<span class="token keyword"${
          _scopeId
        }>const</span> errorCodes <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token comment"${
          _scopeId
        }>// The condition below obviously checks if the name is too short.</span>
<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>name<span class="token punctuation"${
          _scopeId
        }>.</span>length <span class="token operator"${
          _scopeId
        }>&lt;</span> <span class="token constant"${
          _scopeId
        }>MIN_NAME_LENGTH</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    errorCodes<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>push</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token constant"${
          _scopeId
        }>ERROR_CODE_NAME_TOO_SHORT</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// Using this error code here is obviously correct.</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// ...</span>

<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>errorCodeToMessage</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>errorCode</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>switch</span><span class="token punctuation"${
          _scopeId
        }>(</span>errorCode<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>case</span> <span class="token constant"${
          _scopeId
        }>ERROR_CODE_NAME_TOO_SHORT</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token comment"${
          _scopeId
        }>// The translation here is obviously correct.</span>
            <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token string"${
          _scopeId
        }>&quot;Name needs to contain at least &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token constant"${
          _scopeId
        }>MIN_NAME_LENGTH</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; characters.&quot;</span>
        <span class="token comment"${
          _scopeId
        }>// ...</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "MIN_NAME_LENGTH"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "ERROR_CODE_NAME_TOO_SHORT"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" errorCodes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The condition below obviously checks if the name is too short."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "MIN_NAME_LENGTH"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    errorCodes"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "push"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "ERROR_CODE_NAME_TOO_SHORT"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Using this error code here is obviously correct."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "errorCodeToMessage"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "errorCode"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "switch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("errorCode"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "case"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "ERROR_CODE_NAME_TOO_SHORT"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The translation here is obviously correct."),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Name needs to contain at least \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token constant" }, "MIN_NAME_LENGTH"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" characters.\""),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Harcoded values are used in the middle of the code.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Harcoded values are used in the middle of the code.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A hardcoded value contains no information about what that value represent; when someone reads a hardcoded value, they must guess what the value represents. This makes the code hard to understand. For example, when comparing <code${
          _scopeId
        }>username</code> to <code${
          _scopeId
        }>&quot;Alice&quot;</code>, is that because <code${
          _scopeId
        }>&quot;Alice&quot;</code> is admin or because <code${
          _scopeId
        }>&quot;Alice&quot;</code> is a banned member? The reader won&#39;t know until she has read the other lines of code close to this one (should not be needed!).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("A hardcoded value contains no information about what that value represent; when someone reads a hardcoded value, they must guess what the value represents. This makes the code hard to understand. For example, when comparing "),
            (0,external_vue_.createVNode)("code", null, "username"),
            (0,external_vue_.createTextVNode)(" to "),
            (0,external_vue_.createVNode)("code", null, "\"Alice\""),
            (0,external_vue_.createTextVNode)(", is that because "),
            (0,external_vue_.createVNode)("code", null, "\"Alice\""),
            (0,external_vue_.createTextVNode)(" is admin or because "),
            (0,external_vue_.createVNode)("code", null, "\"Alice\""),
            (0,external_vue_.createTextVNode)(" is a banned member? The reader won't know until she has read the other lines of code close to this one (should not be needed!).")
          ])
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Don&#39;t use hardcoded values in the middle of the code. Put the values in descriptive constants instead. This way, the code becomes more readable, and it&#39;s also easy to change these values in the future (if a hardcoded value is used at multiple values, you just need to change it where you create the constant, and not at each place you use the hardcoded value).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Don't use hardcoded values in the middle of the code. Put the values in descriptive constants instead. This way, the code becomes more readable, and it's also easy to change these values in the future (if a hardcoded value is used at multiple values, you just need to change it where you create the constant, and not at each place you use the hardcoded value).")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/common-code-mistakes/index.html.vue?vue&type=template&id=365208ef

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/common-code-mistakes/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

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

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-12fe5b9b",
  "path": "/lectures/common-code-mistakes/",
  "title": "Common Code Mistakes",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Common Code Mistakes"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Why are small mistakes such a big deal?",
      "slug": "why-are-small-mistakes-such-a-big-deal",
      "children": []
    },
    {
      "level": 2,
      "title": "But why are small mistakes such a big deal?",
      "slug": "but-why-are-small-mistakes-such-a-big-deal",
      "children": []
    },
    {
      "level": 2,
      "title": "Common student mistakes",
      "slug": "common-student-mistakes",
      "children": [
        {
          "level": 3,
          "title": "Indent wrong",
          "slug": "indent-wrong",
          "children": []
        },
        {
          "level": 3,
          "title": "Multiple indentation conventions",
          "slug": "multiple-indentation-conventions",
          "children": []
        },
        {
          "level": 3,
          "title": "Not using mnemonic names",
          "slug": "not-using-mnemonic-names",
          "children": []
        },
        {
          "level": 3,
          "title": "Using hardcoded values",
          "slug": "using-hardcoded-values",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/common-code-mistakes/README.md",
  "git": {
    "updatedTime": 1637582377000
  }
}


/***/ })

};
;
//# sourceMappingURL=7446.app.js.map