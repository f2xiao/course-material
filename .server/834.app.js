"use strict";
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 6455:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/asynchronous-programming-in-js/index.html.vue?vue&type=template&id=3dbdd174



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_SleepButton = (0,external_vue_.resolveComponent)("SleepButton")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="asynchronous-programming-in-javascript" tabindex="-1"><a class="header-anchor" href="#asynchronous-programming-in-javascript" aria-hidden="true">#</a> Asynchronous Programming in JavaScript</h1><p>In this lecture we&#39;ll take a look at how synchronous programming differs from asynchronous programming, when you should use which one, and how we can use asynchronous programming in JavaScript through <em>callback functions</em>, <em>promises</em> and <em>promises with <code>async</code> and <code>wait</code></em>.</p><h2 id="what-is-synchronous-programming" tabindex="-1"><a class="header-anchor" href="#what-is-synchronous-programming" aria-hidden="true">#</a> What is Synchronous Programming?</h2><p>When you first learned programming, <em>synchronous programming</em> is most likely what you learned. In synchronous programming, one thing is carried out at a time, and you don&#39;t start doing the next thing until the first thing is done. You can think of that <em>thing</em> as a function, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of synchronous programming in JavaScript." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Example of a synchronous function.</span>
<span class="token keyword"${
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

<span class="token comment"${
          _scopeId
        }>// Example of calls to a synchronous function.</span>
<span class="token keyword"${
          _scopeId
        }>const</span> sum1 <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>const</span> sum2 <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>)</span>

console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum1 <span class="token operator"${
          _scopeId
        }>+</span> sum2<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Example of a synchronous function."),
                (0,external_vue_.createTextVNode)("\n"),
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
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" y\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" sum\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Example of calls to a synchronous function."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" sum1 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" sum2 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum1 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" sum2"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>In `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above, <code>getSum()</code> is a synchronous function. What that means is that when <code>getSum(1, 2)</code> is called, <code>getSum()</code> will do all it&#39;s work, and then return back the result and store it in <code>sum1</code>. Then we continue with the call <code>getSum(3, 4)</code> on next line, and <code>getSum()</code> will again do it&#39;s entire work, and then return back the result, which we then store in <code>sum2</code>.</p><p>This sounds obvious, right? Well, that&#39;s because it works the way you&#39;re used to.</p><h2 id="what-s-the-problem-with-synchronous-programming" tabindex="-1"><a class="header-anchor" href="#what-s-the-problem-with-synchronous-programming" aria-hidden="true">#</a> What&#39;s the Problem with Synchronous Programming?</h2><p>The problem with synchronous programming occurs when we have <em>long running operations</em> and want to be able to do multiple things at the same time. What counts as a long running operation depends on what type of application you create, but usually operations taking than a few milliseconds to complete count as long running. The problem with synchronous programming is that we can only run one long running operation at a time, and that is problematic from some type of applications. A few examples of these are given next.</p><h3 id="example-1-graphical-user-interfaces" tabindex="-1"><a class="header-anchor" href="#example-1-graphical-user-interfaces" aria-hidden="true">#</a> Example 1: Graphical User Interfaces</h3><p>One problem with synchronous programming occurs when we implement a graphical user interface (GUI). Imagine the user clicks on a button, and we start to compute something that takes 3 seconds to compute. If we use synchronous programming, nothing else in our code during those 3 seconds would run, so the graphical user interface would freeze, so the user can&#39;t click on an abort button, nor do anything else. Want an example of this? Just click `)
  _push((0,server_renderer.ssrRenderComponent)(_component_SleepButton, { sleepMs: 3000 }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`this button`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("this button")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` and then try to select text on this page, click on a link, or something, within 3 seconds (requires JavaScript to be enabled in your web browser).</p><p>The code in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below explains the problem in detail.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of problem with synchronous programming." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// This is the function that is called when the button is clicked.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>handleClickOnButton</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token comment"${
          _scopeId
        }>// Imagine the sleep() function would exist, and calling it with</span>
	<span class="token comment"${
          _scopeId
        }>// 3000 would make the function wait 3000ms before it returned.</span>
	<span class="token function"${
          _scopeId
        }>sleep</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3000</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token comment"${
          _scopeId
        }>// Then non of our code would execute during those 3000ms,</span>
	<span class="token comment"${
          _scopeId
        }>// and the GUI would freeze.</span>
	<span class="token comment"${
          _scopeId
        }>// (JS doesn&#39;t have a such stupid function, so it doesn&#39;t exist). </span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// The sleep function in this example is implemented like this</span>
<span class="token comment"${
          _scopeId
        }>// (we use a loop with very many iterations to simulate a long running operation):</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>sleep</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>sleepMs</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> timeToWakeUp <span class="token operator"${
          _scopeId
        }>=</span> Date<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>now</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>+</span> sleepMs
	<span class="token keyword"${
          _scopeId
        }>while</span><span class="token punctuation"${
          _scopeId
        }>(</span>Date<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>now</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>&lt;</span> timeToWakeUp<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token comment"${
          _scopeId
        }>// Do nothing</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This is the function that is called when the button is clicked."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "handleClickOnButton"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Imagine the sleep() function would exist, and calling it with"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// 3000 would make the function wait 3000ms before it returned."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "sleep"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3000"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Then non of our code would execute during those 3000ms,"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// and the GUI would freeze."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// (JS doesn't have a such stupid function, so it doesn't exist). "),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The sleep function in this example is implemented like this"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// (we use a loop with very many iterations to simulate a long running operation):"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "sleep"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "sleepMs"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" timeToWakeUp "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" Date"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "now"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" sleepMs\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("Date"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "now"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" timeToWakeUp"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do nothing"),
                (0,external_vue_.createTextVNode)("\n\t"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>In this example, the long running operation was just a loop doing nothing for many iterations, but you can substitute it with any operation that takes long time to complete, for example to check if there&#39;s a human in the world named <code>Chipsope</code> (would in worst case require you to compare <code>Chipsope</code> with ~7 billion names, which would take a while).</p><h3 id="example-2-data-loading" tabindex="-1"><a class="header-anchor" href="#example-2-data-loading" aria-hidden="true">#</a> Example 2: Data Loading</h3><p>One problem with synchronous programming occurs when we want to carry out multiple tasks in parallel, and each task involves a lot of waiting, such as:</p><ul><li>Waiting for the result of a query sent to the database</li><li>Waiting for the response for an HTTP request we have sent</li><li>Waiting for GPS coordinates from a GPS receiver</li><li>Waiting for the computer to load the content of a file on the file system</li><li>Etc.</li></ul><p>If we use synchronous programming, then we start carrying out the first task, which involves some waiting for the result (for example from the database). When we get back the result, we finish carrying out the first task, and then we start carrying out the second task, which shortly makes us wait again for another result (perhaps loading the content from a file), and then when we finally get back the result for that, we finish the second task, and so on. This is visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sequence diagram where the app waits for three things at three different times (3 seconds in total)." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant App\n\tparticipant DB\n\tparticipant Server\n\tparticipant FileSystem\n\tApp->>DB: getData()\n\tactivate App\n\tactivate DB\n\tApp->>App: Waiting 1 second\n\tDB-->>App: Data\n\tdeactivate DB\n\tApp->>Server: sendRequest()\n\tactivate Server\n\tApp->>App: Waiting 1 second\n\tServer-->>App: Response\n\tdeactivate Server\n\tApp->>FileSystem: openFile()\n\tactivate FileSystem\n\tApp->>App: Waiting 1 second\n\tFileSystem-->>App: File\n\tdeactivate FileSystem\n\tdeactivate App\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant App\n\tparticipant DB\n\tparticipant Server\n\tparticipant FileSystem\n\tApp->>DB: getData()\n\tactivate App\n\tactivate DB\n\tApp->>App: Waiting 1 second\n\tDB-->>App: Data\n\tdeactivate DB\n\tApp->>Server: sendRequest()\n\tactivate Server\n\tApp->>App: Waiting 1 second\n\tServer-->>App: Response\n\tdeactivate Server\n\tApp->>FileSystem: openFile()\n\tactivate FileSystem\n\tApp->>App: Waiting 1 second\n\tFileSystem-->>App: File\n\tdeactivate FileSystem\n\tdeactivate App\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The problem here is that we spend most of our time on waiting, instead of doing useful work. While we wait for the database result from task 1, we want to start carrying out task 2, and wait for the result for task 2 at the same time as we wait for the result from task 1, but we can&#39;t do that with synchronous programming, since we can only do one thing at a time in synchronous programming.</p><p>An example of this is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Another example of problem with synchronous programming. " }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>getAllHumans</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token comment"${
          _scopeId
        }>// Imagine db.getAllRows() would be a synchronous function, and it would</span>
	<span class="token comment"${
          _scopeId
        }>// take 1 second before it has received the humans from the database.</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> allHumans <span class="token operator"${
          _scopeId
        }>=</span> db<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getAllRows</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;humans&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>return</span> allHumans
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getAllPets</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token comment"${
          _scopeId
        }>// Imagine fileSystem.loadFile() would be a synchronous function, and</span>
	<span class="token comment"${
          _scopeId
        }>// it would take 1 second before it has loaded the pets from the file.</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> allPets <span class="token operator"${
          _scopeId
        }>=</span> fileSystem<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>loadFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;pets.json&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>return</span> allPets
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>const</span> humans <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getAllHumans</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// This line would take 1.001 seconds to complete (1 second spent on waiting).</span>
<span class="token keyword"${
          _scopeId
        }>const</span> pets <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getAllPets</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// This line would take 1.001 seconds to complete (1 second spent on waiting).</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllHumans"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Imagine db.getAllRows() would be a synchronous function, and it would"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// take 1 second before it has received the humans from the database."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" allHumans "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" db"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllRows"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"humans\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" allHumans\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllPets"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Imagine fileSystem.loadFile() would be a synchronous function, and"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// it would take 1 second before it has loaded the pets from the file."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" allPets "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" fileSystem"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"pets.json\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" allPets\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" humans "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllHumans"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This line would take 1.001 seconds to complete (1 second spent on waiting)."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" pets "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllPets"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This line would take 1.001 seconds to complete (1 second spent on waiting)."),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>In `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above it takes ~2 seconds to load all data, but if humans and pets could be loaded in parallel, it would only take ~1 second. You don&#39;t like applications that takes a long time to load all the data at startup, right? So you probably don&#39;t want to use synchronous programming to load data at startup.</p><h2 id="what-is-asynchronous-programming" tabindex="-1"><a class="header-anchor" href="#what-is-asynchronous-programming" aria-hidden="true">#</a> What is Asynchronous Programming?</h2><p>So, asynchronous programming is when we start a long running operation, and it will run <em>in the background</em>. The rest of our code will continue to run as usual until it has completed. Then, sometime in the future, the long running operation in the background will complete, and notify our ordinary code what the result of the long running operation was, and our ordinary code can handle the result of the long running operation. A visualization of this is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sequence diagram where the app waits for three things at the same time (1 second in total)." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant App\n\tparticipant DB\n\tparticipant Server\n\tparticipant FileSystem\n\tApp->>DB: getData()\n\tactivate App\n\tactivate DB\n\tApp->>Server: sendRequest()\n\tactivate Server\n\tApp->>FileSystem: openFile()\n\tactivate FileSystem\n\tApp->>App: Waiting 1 second\n\tDB-->>App: Data\n\tdeactivate DB\n\tServer-->>App: Response\n\tdeactivate Server\n\tFileSystem-->>App: File\n\tdeactivate FileSystem\n\tdeactivate App\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant App\n\tparticipant DB\n\tparticipant Server\n\tparticipant FileSystem\n\tApp->>DB: getData()\n\tactivate App\n\tactivate DB\n\tApp->>Server: sendRequest()\n\tactivate Server\n\tApp->>FileSystem: openFile()\n\tactivate FileSystem\n\tApp->>App: Waiting 1 second\n\tDB-->>App: Data\n\tdeactivate DB\n\tServer-->>App: Response\n\tdeactivate Server\n\tFileSystem-->>App: File\n\tdeactivate FileSystem\n\tdeactivate App\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container tip"><p class="custom-container-title">Long running operations that aren&#39;t waiting</p><p>Here we say that long running operations usually involve a lot of waiting. Long running operations can instead/also do useful work, e.g. compute something really complex that takes a very long time to compute. These operations can still run in the background at the same time as our ordinary synchronous code thanks to threads and multiple cores (or in worst case time slicing of the CPU). These are details we don&#39;t worry about in this lecture, but just remember that asynchronous programming is not only useful when waiting is involved, but for all types of long running operations.</p></div><p>The question is how a long running operation can tell our ordinary code when it&#39;s done with it works in the background, and what the result is. That can be done in different ways, such as by using callback functions or promises.</p><h2 id="asynchronous-programming-with-callback-functions" tabindex="-1"><a class="header-anchor" href="#asynchronous-programming-with-callback-functions" aria-hidden="true">#</a> Asynchronous Programming with Callback Functions</h2><p>In asynchronous programming, one way to indicate what should happen after a long running operation has completed is to pass a <code>callback</code> function to the asynchronous function, and when the asynchronous function has completed its long running operation, it will call the <code>callback</code> function, and pass the result of the long running operation as an argument to the <code>callback</code> function. In the <code>callback</code> function we write the code that should run when the long running operation has completed.</p><p>For example, if we have the synchronous function in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of a synchronous function." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Synchronous function that returns back the result.</span>
<span class="token keyword"${
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
        }>const</span> theSum <span class="token operator"${
          _scopeId
        }>=</span> x <span class="token operator"${
          _scopeId
        }>+</span> y
	<span class="token keyword"${
          _scopeId
        }>return</span> theSum
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>const</span> sum <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span>
console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>sum<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Synchronous function that returns back the result."),
                (0,external_vue_.createTextVNode)("\n"),
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
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" theSum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" y\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" theSum\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>And would like to use this in an asynchronous way with a <code>callback</code> function, it would look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of an asynchronous function that will run synchronously." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Asynchronous function that calls the callback function with the result.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>x<span class="token punctuation"${
          _scopeId
        }>,</span> y<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>

	<span class="token comment"${
          _scopeId
        }>// This is the &quot;work&quot; the &quot;long running operation&quot; should do.</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> theSum <span class="token operator"${
          _scopeId
        }>=</span> x <span class="token operator"${
          _scopeId
        }>+</span> y

	<span class="token comment"${
          _scopeId
        }>// When the result of the work has been computed, pass it to the callback function.</span>
	<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>theSum<span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// Call the asynchronous function, and pass along our callback function.</span>
<span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>

	<span class="token comment"${
          _scopeId
        }>// When this function is called, the long running operation has completed.</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Asynchronous function that calls the callback function with the result."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("x"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" y"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This is the \"work\" the \"long running operation\" should do."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" theSum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" y\n\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When the result of the work has been computed, pass it to the callback function."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("theSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Call the asynchronous function, and pass along our callback function."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When this function is called, the long running operation has completed."),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Even though <code>getSum()</code> above has a <code>callback</code> function as a parameter, everything will run synchronously, as you&#39;re used to. That&#39;s because we don&#39;t do any work that runs <em>in the background</em>. To make <code>getSum()</code> asynchronous, we need to tell it to do it&#39;s work in the background somehow. In JavaScript, you can do that by calling an asynchronous built-in function, like:</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank" rel="noopener noreferrer">fetch`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (to send an HTTP request)</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout" target="_blank" rel="noopener noreferrer">setTimeout`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (to schedule a function to be called later)</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval" target="_blank" rel="noopener noreferrer">setInterval`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (to schedule a function to be called repeatedly with a given interval)</li><li>Etc.</li></ul><p>To really make <code>getSum()</code> asynchronous, we can call <code>setTimeout()</code> in it, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of an asynchronous function that will run asynchronously." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Asynchronous function that calls the callback function with the result.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>x<span class="token punctuation"${
          _scopeId
        }>,</span> y<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>

	<span class="token comment"${
          _scopeId
        }>// Here we call an asynchronous function, making our own function asynchronous.</span>
	<span class="token comment"${
          _scopeId
        }>// In this case we schedule the function below to be called 1 second later.</span>
	<span class="token function"${
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
		
		<span class="token keyword"${
          _scopeId
        }>const</span> theSum <span class="token operator"${
          _scopeId
        }>=</span> x <span class="token operator"${
          _scopeId
        }>+</span> y
		<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>theSum<span class="token punctuation"${
          _scopeId
        }>)</span>

	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>1000</span><span class="token punctuation"${
          _scopeId
        }>)</span>

	<span class="token comment"${
          _scopeId
        }>// Here we return back immediately, before we have computed the sum.</span>

<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// This will call our own asynchronous function,</span>
<span class="token comment"${
          _scopeId
        }>// which will call setTimeout(), and then return here immediately.</span>
<span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>sum</span><span class="token punctuation"${
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
        }>(</span>sum<span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token comment"${
          _scopeId
        }>// This will call our own asynchronous function,</span>
<span class="token comment"${
          _scopeId
        }>// which will call setTimeout(), and then return here immediately.</span>
<span class="token function"${
          _scopeId
        }>getSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>sum</span><span class="token punctuation"${
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
        }>(</span>sum<span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token comment"${
          _scopeId
        }>// This is the first value that will be logged.</span>
console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Hello!&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token comment"${
          _scopeId
        }>// 1 second later, the two callback functions we have passed to setTimeout()</span>
<span class="token comment"${
          _scopeId
        }>// will be called (one at a time), which in turn will compute their sums</span>
<span class="token comment"${
          _scopeId
        }>// and call the callback functions we passed to getSum(), in which we log</span>
<span class="token comment"${
          _scopeId
        }>// the computed sums (first 3, then 7).</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Asynchronous function that calls the callback function with the result."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("x"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" y"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Here we call an asynchronous function, making our own function asynchronous."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// In this case we schedule the function below to be called 1 second later."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setTimeout"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" theSum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" y\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("theSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1000"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Here we return back immediately, before we have computed the sum."),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This will call our own asynchronous function,"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// which will call setTimeout(), and then return here immediately."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This will call our own asynchronous function,"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// which will call setTimeout(), and then return here immediately."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This is the first value that will be logged."),
                (0,external_vue_.createTextVNode)("\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Hello!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// 1 second later, the two callback functions we have passed to setTimeout()"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// will be called (one at a time), which in turn will compute their sums"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// and call the callback functions we passed to getSum(), in which we log"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the computed sums (first 3, then 7)."),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>So, to summarize:</p><ol><li>To make a function asynchronous, it must somehow do work in the background, for example by calling an existing asynchronous function.</li><li>To listen for when an asynchronous function is done running in the background, we can pass a <code>callback</code> function to it, which the asynchronous function will call when it&#39;s done running in the background.</li></ol><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h3><p>In synchronous programming, when you discover something is wrong, you usually throw an exception, which you later can catch, which you can see in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of error handling in synchronous programming using exceptions." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// A synchronous function that might throw an exception.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>dividend<span class="token punctuation"${
          _scopeId
        }>,</span> divisor</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>divisor <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>throw</span> <span class="token string"${
          _scopeId
        }>&quot;Can&#39;t divide by 0.&quot;</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>return</span> dividend <span class="token operator"${
          _scopeId
        }>/</span> divisor
	<span class="token punctuation"${
          _scopeId
        }>}</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// The main code that contains the error handling.</span>
<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> quotient <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// A synchronous function that might throw an exception."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("dividend"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" divisor")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("divisor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "throw"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Can't divide by 0.\""),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" dividend "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(" divisor\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The main code that contains the error handling."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" quotient "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>If you try to do something similar in asynchronous programming with <code>callback</code> functions, it could look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Trying to catch exceptions when calling an asynchronous function." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// An asynchronous function that might throw an exception.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>dividend<span class="token punctuation"${
          _scopeId
        }>,</span> divisor<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token function"${
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
		<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>divisor <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
			<span class="token keyword"${
          _scopeId
        }>throw</span> <span class="token string"${
          _scopeId
        }>&quot;Can&#39;t divide by 0.&quot;</span>
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
        }>(</span>dividend <span class="token operator"${
          _scopeId
        }>/</span> divisor<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token punctuation"${
          _scopeId
        }>}</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>1000</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// The main code that needs to handle errors.</span>
<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>quotient</span><span class="token punctuation"${
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
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// An asynchronous function that might throw an exception."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("dividend"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" divisor"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setTimeout"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("divisor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "throw"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Can't divide by 0.\""),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("dividend "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(" divisor"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1000"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The main code that needs to handle errors."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "quotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
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
    _: 1
  }, _parent))
  _push(`<p>This does unfortunately not work. The reason is simple: when you call <code>getQuotient()</code>, you are inside the try block, but <code>getQuotient()</code> returns back almost immediately, and you will leave the try/catch block. Then 1 second later, the callback you passed to <code>setTimeout()</code> will be called, and if you now throw the exception from inside that callback, you will throw it to the one who called the callback function, which will be the JavaScript runtime environment, so that&#39;s where the exception will be thrown to, and there of course no one is trying to catch the specific exceptions your code throws.</p><p>The workaround to this problem is usually to pass two values to the <code>callback</code> function. The first value is the exception (aka &quot;the error&quot;). If everything go well and you don&#39;t have an error, you simply use <code>null</code> as the error. The second value is the result of the long running operation. In your <code>callback</code> function you simply check if the first argument is <code>null</code> or not with an if statement to figure out if you got an error, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of error handling in asynchronous programming with callback functions." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>dividend<span class="token punctuation"${
          _scopeId
        }>,</span> divisor<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token function"${
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
		<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>divisor <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
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
        }>&quot;Can&#39;t divide by 0&quot;</span><span class="token punctuation"${
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
        }>,</span> dividend <span class="token operator"${
          _scopeId
        }>/</span> divisor<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token punctuation"${
          _scopeId
        }>}</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>1000</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> quotient</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("dividend"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" divisor"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setTimeout"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("divisor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Can't divide by 0\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" dividend "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(" divisor"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1000"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" quotient")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="the-drawback-with-asynchronous-programming-with-callback-functions" tabindex="-1"><a class="header-anchor" href="#the-drawback-with-asynchronous-programming-with-callback-functions" aria-hidden="true">#</a> The Drawback with Asynchronous Programming with Callback Functions</h2><p>The drawback with asynchronous programming with <code>callback</code> functions is that it makes the code harder to read compared to synchronous programming, especially when you have many asynchronous functions you need to call in order, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of sequential calls to asynchronous functions with callbacks." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Imagine getUserById(), getPetsByOwnerName() and</span>
<span class="token comment"${
          _scopeId
        }>// storeInJsonFile() are all asynchronous functions.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>userId<span class="token punctuation"${
          _scopeId
        }>,</span> filename<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token function"${
          _scopeId
        }>getUserById</span><span class="token punctuation"${
          _scopeId
        }>(</span>userId<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>userError<span class="token punctuation"${
          _scopeId
        }>,</span> user</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>userError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
			<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>userError<span class="token punctuation"${
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
        }>getPetsByOwnerName</span><span class="token punctuation"${
          _scopeId
        }>(</span>user<span class="token punctuation"${
          _scopeId
        }>.</span>name<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>petsError<span class="token punctuation"${
          _scopeId
        }>,</span> pets</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
				<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>petsError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
					<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>petsError<span class="token punctuation"${
          _scopeId
        }>)</span>
				<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
					<span class="token keyword"${
          _scopeId
        }>const</span> data <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
						pets
					<span class="token punctuation"${
          _scopeId
        }>}</span>
					<span class="token function"${
          _scopeId
        }>storeInJsonFile</span><span class="token punctuation"${
          _scopeId
        }>(</span>data<span class="token punctuation"${
          _scopeId
        }>,</span> filename<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>storeError<span class="token punctuation"${
          _scopeId
        }>,</span> fileSize</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
						<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>storeError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
							<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>storeError<span class="token punctuation"${
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
        }>,</span> fileSize<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Imagine getUserById(), getPetsByOwnerName() and"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// storeInJsonFile() are all asynchronous functions."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("userId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" filename"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getUserById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("userError"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" user")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getPetsByOwnerName"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("user"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("petsError"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" pets")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("petsError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("petsError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" data "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\tpets\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "storeInJsonFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("data"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("storeError"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" fileSize")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("storeError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("storeError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" fileSize"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>This is just a simple example, but you can already now see that the code has become quite hard to read due to all the indentation of the code, especially at the end of the code, with all closing brackets. Imagine we would need to call more asynchronous functions, or use more loops or conditional statements, etc. This messy type of code is known as <a href="http://callbackhell.com/" target="_blank" rel="noopener noreferrer">Callback Hell`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>If we compare the code above with synchronous code with the same functionality, it would look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of sequential calls to synchronous functions." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>userId<span class="token punctuation"${
          _scopeId
        }>,</span> filename</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>const</span> user <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getUserById</span><span class="token punctuation"${
          _scopeId
        }>(</span>userId<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token keyword"${
          _scopeId
        }>const</span> pets <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getPetsByOwnerName</span><span class="token punctuation"${
          _scopeId
        }>(</span>user<span class="token punctuation"${
          _scopeId
        }>.</span>name<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token keyword"${
          _scopeId
        }>const</span> data <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
			pets
		<span class="token punctuation"${
          _scopeId
        }>}</span>
		<span class="token keyword"${
          _scopeId
        }>const</span> fileSize <span class="token operator"${
          _scopeId
        }>=</span> fileSystem<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>storeInJsonFile</span><span class="token punctuation"${
          _scopeId
        }>(</span>data<span class="token punctuation"${
          _scopeId
        }>,</span> filename<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token keyword"${
          _scopeId
        }>return</span> fileSize
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>throw</span> error <span class="token comment"${
          _scopeId
        }>// Could even skip try and catch since we throw the error again, but whatever.</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("userId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" filename")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" user "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getUserById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" pets "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getPetsByOwnerName"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("user"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" data "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\tpets\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" fileSize "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" fileSystem"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "storeInJsonFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("data"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" fileSize\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "throw"),
                (0,external_vue_.createTextVNode)(" error "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Could even skip try and catch since we throw the error again, but whatever."),
                (0,external_vue_.createTextVNode)("\n\t"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Clearly, the synchronous code is much easier to read. So this is the trade off: synchronous code is easier to read, but asynchronous code can run more efficient, since we don&#39;t waste time on waiting, and we can do multiple things at the same time with asynchronous code. Wouldn&#39;t it be great if there was a way to get the best of both worlds? Introducing promises.</p><h2 id="what-are-promises" tabindex="-1"><a class="header-anchor" href="#what-are-promises" aria-hidden="true">#</a> What are Promises?</h2><p><em>Promises</em> is an attempt to make asynchronous code more readable and to avoid callback hell (making the code look more like synchronous code), but that still runs asynchronously. Instead of passing a <code>callback</code> to an asynchronous function, the asynchronous function returns back a promise. The promise is an object that represent a long running operation that will be completed some time in the future.</p><p>Initially, the promise will be in the <code>Pending</code> state, meaning that the long running operation is still running. When the long running operation complete (when the promise has been <em>resolved</em>), the promise will be in the <code>Fulfilled</code> state, and we can get the value the long running operations resulted in through the promise object. If something instead goes wrong with the long running operation (when the promise has been <em>rejected</em>), the promise will go into the <code>Rejected</code> state, and we can get the error through the promise object. This is visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "State diagram over promises." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nstateDiagram-v2\n\tstate Pending\n\tstate Fulfilled\n\tstate Rejected\n\t[*] --> Pending : Promise created, long running operation runs in background\n\tPending --> Fulfilled : Long running operation completed successfully\n\tPending --> Rejected : Error occurred in the long running operation\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nstateDiagram-v2\n\tstate Pending\n\tstate Fulfilled\n\tstate Rejected\n\t[*] --> Pending : Promise created, long running operation runs in background\n\tPending --> Fulfilled : Long running operation completed successfully\n\tPending --> Rejected : Error occurred in the long running operation\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>When you have called an asynchronous function and received back a promise from it, you usually want to listen for when the promise leaves the <code>Pending</code> state, and goes to either the <code>Pending</code> state or the <code>Fulfilled</code> state. You do that by calling <code>.then()</code> on the promise and <code>.catch()</code> on the promise respectively and pass them each a <code>callback</code> function.</p><p>For example, if <code>getQuotient()</code> would be an asynchronous function with a <code>callback</code> function, you would use it as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of an asynchronous function with a callback." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> quotient</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" quotient")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>If <code>getQuotient()</code> instead of having a <code>callback</code> function would return back a promise, you would use it as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of an asynchronous function returning a promise." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> promise <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token comment"${
          _scopeId
        }>// When the line above has been executed, the promise will be in the Pending state.</span>

promise<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>quotient</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token comment"${
          _scopeId
        }>// When the promise has been resolved (enters the Fulfilled state),</span>
	<span class="token comment"${
          _scopeId
        }>// this function will be called.</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>

promise<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>catch</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token comment"${
          _scopeId
        }>// When the promise has been rejected (enters the Rejected state),</span>
	<span class="token comment"${
          _scopeId
        }>// this function will be called.</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span>
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
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" promise "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When the line above has been executed, the promise will be in the Pending state."),
                (0,external_vue_.createTextVNode)("\n\npromise"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "quotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When the promise has been resolved (enters the Fulfilled state),"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// this function will be called."),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\npromise"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When the promise has been rejected (enters the Rejected state),"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// this function will be called."),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Since we still provide callback functions to <code>.then()</code> and <code>.catch()</code>, you might think this code will result in callback hell as well when we start calling multiple asynchronous functions returning back promises, but that is not the case, because promises are <em>chainable</em>. This is the hard part to understand with promises, but this is what makes them so nice, so let&#39;s go through how chaining works in detail.</p><p>The callback function you pass to <code>.then()</code> can:</p><ol><li>Return back a new promise.</li><li>Return back another value that automatically will be wrapped in a promise that will be immediately resolved.</li><li>Not return back any value at all (i.e. <code>undefined</code>), in which case we can <strong>see it as</strong> the promise you called <code>.then()</code> on will be returned back.</li></ol><p>Note that you can <strong>see it as</strong> that the callback function you pass to <code>.then()</code> will always return back a promise. Promises are also implemented in a very clever way, so you can <strong>see it as</strong> the promise you return back from the callback function passed to <code>.then()</code> will also be returned from the call to <code>.then()</code>. All this and list item 3 above means that we can simplify the code we had earlier to the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of an asynchronous function returning a promise." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> promise <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>

promise<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>quotient</span><span class="token punctuation"${
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
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token comment"${
          _scopeId
        }>// This function does not return a value, so we can see it</span>
	<span class="token comment"${
          _scopeId
        }>// as the promise itself will be returned.</span>

<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>catch</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token comment"${
          _scopeId
        }>// So here we immediately call .catch() on the same promise.</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" promise "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\npromise"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "quotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This function does not return a value, so we can see it"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// as the promise itself will be returned."),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// So here we immediately call .catch() on the same promise."),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>As you probably realise, we can even get rid of the <code>promise</code> variable and call <code>.then()</code> and <code>.catch()</code> on the promise directly, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of an asynchronous function returning back a promise." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>quotient</span><span class="token punctuation"${
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
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>catch</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "quotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>This code will run asynchronously, and is looks really similar to what a synchronous version of the code would look like, which is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(`, which is really promising.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of a synchronous function." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> quotient <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" quotient "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
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
    _: 1
  }, _parent))
  _push(`<p>The question is, how readable will the code be when we start using multiple promises? Will we get into a callback hell similar situation, as the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below where we use asynchronous functions with callbacks?</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of callback hell." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Asynchronous version with callback functions.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>userId<span class="token punctuation"${
          _scopeId
        }>,</span> filename<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token function"${
          _scopeId
        }>getUserById</span><span class="token punctuation"${
          _scopeId
        }>(</span>userId<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>userError<span class="token punctuation"${
          _scopeId
        }>,</span> user</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>userError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
			<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>userError<span class="token punctuation"${
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
        }>getPetsByOwnerName</span><span class="token punctuation"${
          _scopeId
        }>(</span>user<span class="token punctuation"${
          _scopeId
        }>.</span>name<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>petsError<span class="token punctuation"${
          _scopeId
        }>,</span> pets</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
				<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>petsError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
					<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>petsError<span class="token punctuation"${
          _scopeId
        }>)</span>
				<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
					<span class="token keyword"${
          _scopeId
        }>const</span> data <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
						pets
					<span class="token punctuation"${
          _scopeId
        }>}</span>
					fileSystem<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>storeInJsonFile</span><span class="token punctuation"${
          _scopeId
        }>(</span>data<span class="token punctuation"${
          _scopeId
        }>,</span> filename<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>storeError<span class="token punctuation"${
          _scopeId
        }>,</span> fileSize</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
						<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>storeError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
							<span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>storeError<span class="token punctuation"${
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
        }>,</span> fileSize<span class="token punctuation"${
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
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// Sample usage of the function.</span>
<span class="token function"${
          _scopeId
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;data.json&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
        }>&quot;Data stored in file &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>fileSize<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; bytes big!&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Asynchronous version with callback functions."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("userId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" filename"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getUserById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("userError"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" user")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getPetsByOwnerName"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("user"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("petsError"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" pets")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("petsError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("petsError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" data "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\tpets\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\tfileSystem"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "storeInJsonFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("data"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("storeError"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" fileSize")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("storeError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("storeError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" fileSize"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Sample usage of the function."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"data.json\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Data stored in file \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("fileSize"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" bytes big!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>No, list item 1 above (<em>our callback function passed to <code>.then()</code> can return back a new promise</em>) makes sure that we don&#39;t get into a callback hell situation. If the asynchronous functions in the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above would return back promises instead of using callback functions, the code would look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of sequential calls to asynchronous functions returning back promises." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Asynchronous version with promises.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>userId<span class="token punctuation"${
          _scopeId
        }>,</span> filename</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>return</span> <span class="token function"${
          _scopeId
        }>getUserById</span><span class="token punctuation"${
          _scopeId
        }>(</span>userId<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>user</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>return</span> <span class="token function"${
          _scopeId
        }>getPetsByOwnerName</span><span class="token punctuation"${
          _scopeId
        }>(</span>user<span class="token punctuation"${
          _scopeId
        }>.</span>name<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// We return back a new promise here...</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>pets</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token comment"${
          _scopeId
        }>// ...so here we call &quot;then&quot; on that new getPetsByOwnerName promise!</span>
		<span class="token keyword"${
          _scopeId
        }>const</span> data <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
			pets
		<span class="token punctuation"${
          _scopeId
        }>}</span>
		<span class="token keyword"${
          _scopeId
        }>return</span> fileSystem<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>storeInJsonFile</span><span class="token punctuation"${
          _scopeId
        }>(</span>data<span class="token punctuation"${
          _scopeId
        }>,</span> filename<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// We return back a new promise here...</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>fileSize</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token comment"${
          _scopeId
        }>// ...so here we call &quot;then&quot; on that new fileSystem promise!</span>
		
		<span class="token comment"${
          _scopeId
        }>// The value we return here is not a promise, so it will</span>
		<span class="token comment"${
          _scopeId
        }>// automatically be wrapped in a resolve promise.</span>
		<span class="token keyword"${
          _scopeId
        }>return</span> fileSize
		<span class="token comment"${
          _scopeId
        }>// This last promise can be seen as the final promise we</span>
		<span class="token comment"${
          _scopeId
        }>// return back from loadUserWithPetsAndStoreInFile().</span>
		
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// Sample usage of the function.</span>
<span class="token function"${
          _scopeId
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;data.json&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>fileSize</span><span class="token punctuation"${
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
        }>&quot;Data stored in file &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>fileSize<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; bytes big!&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>catch</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Asynchronous version with promises."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("userId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" filename")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getUserById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "user"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getPetsByOwnerName"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("user"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// We return back a new promise here..."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "pets"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ...so here we call \"then\" on that new getPetsByOwnerName promise!"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" data "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\tpets\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" fileSystem"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "storeInJsonFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("data"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// We return back a new promise here..."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "fileSize"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ...so here we call \"then\" on that new fileSystem promise!"),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The value we return here is not a promise, so it will"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// automatically be wrapped in a resolve promise."),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" fileSize\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This last promise can be seen as the final promise we"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// return back from loadUserWithPetsAndStoreInFile()."),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Sample usage of the function."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"data.json\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "fileSize"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Data stored in file \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("fileSize"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" bytes big!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>An importing thing to know when using chained promises like we do here is that if one of the promises in the chain is rejected, the next promises in the chain will never be resolved, and the error will be passed to the callback functions passed to <code>.catch()</code> no matter which promise that was rejected. So in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above, even if it looks like we only call <code>.catch()</code> on the last promise in the chain, the callback function we pass to it will be called when any promise in the chain is rejected.</p><p>This way of writing asynchronous code (with promises) is really similar to synchronous code, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of sequential calls to synchronous functions." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Synchronous version.</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>userId<span class="token punctuation"${
          _scopeId
        }>,</span> filename</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> user <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getUserById</span><span class="token punctuation"${
          _scopeId
        }>(</span>userId<span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> pets <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>getPetsByOwnerName</span><span class="token punctuation"${
          _scopeId
        }>(</span>user<span class="token punctuation"${
          _scopeId
        }>.</span>name<span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> data <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
		pets
	<span class="token punctuation"${
          _scopeId
        }>}</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> fileSize <span class="token operator"${
          _scopeId
        }>=</span> fileSystem<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>storeInJsonFile</span><span class="token punctuation"${
          _scopeId
        }>(</span>data<span class="token punctuation"${
          _scopeId
        }>,</span> filename<span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>return</span> fileSize
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// Sample usage of the function.</span>
<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> fileSize <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>loadUserWithPetsAndStoreInFile</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;data.json&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Data stored in file &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>fileSize<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; bytes big!&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>&quot;error&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Synchronous version."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("userId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" filename")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" user "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getUserById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("userId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" pets "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getPetsByOwnerName"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("user"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" data "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tpets\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" fileSize "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" fileSystem"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "storeInJsonFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("data"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" fileSize\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Sample usage of the function."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" fileSize "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "loadUserWithPetsAndStoreInFile"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"data.json\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Data stored in file \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("fileSize"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" bytes big!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"error\""),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The only downside with promises is that we need to pass callback functions to <code>.then()</code> and <code>.catch()</code>, which makes our code a little bit more indented and a little bit harder to read than the synchronous code, but that we can solve with <code>async</code> and <code>await</code>.</p><h2 id="async-and-await" tabindex="-1"><a class="header-anchor" href="#async-and-await" aria-hidden="true">#</a> Async and Await</h2><p>The keywords <code>async</code> and <code>await</code> can make our asynchronous code with promises even more readable. The <code>await</code> operator is the real hero of these two. Instead of calling <code>.then()</code> or <code>.catch()</code> on a promise, we can wait for the promise to be resolved or rejected with the <code>await</code> operator. When the promise resolve, the <code>await</code> operator will yield the value the promise resolved to, and when the promise is rejected the <code>await</code> operator will throw the error as an exception.</p><p>So, without <code>async</code> and <code>await</code>, we can call an asynchronous function returning a promise as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of an asynchronous function returning back a promise." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Asynchronous version with promises.</span>
<span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>then</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>quotient</span><span class="token punctuation"${
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
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>catch</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Asynchronous version with promises."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "quotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>If we would use the <code>await</code> operator, it would instead look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of an awaiting an promise returned back from a function." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Asynchronous version with promises and await.</span>
<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> quotient <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>await</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Asynchronous version with promises and await."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" quotient "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
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
    _: 1
  }, _parent))
  _push(`<p>This code is just as readable as synchronous code, the only different is that whenever we call a function that returns a promise, we must remember to use the <code>await</code> operator to wait for the promise to be resolved or rejected.</p><p>Whenever you use the <code>await</code> operator in a function, you must mark that function with the <code>async</code> keyword. A function marked with the <code>async</code> keyword always returns back a promise that resolves to the value you <code>return</code> back from the function. An example of that is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of async functions." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Asynchronous version with promises and async/await.</span>
<span class="token keyword"${
          _scopeId
        }>async</span> <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getTheSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> quotient1 <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>await</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> quotient2 <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>await</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>return</span> quotient1 <span class="token operator"${
          _scopeId
        }>+</span> quotient12
	<span class="token comment"${
          _scopeId
        }>// The sum will be wrapped in a promise,</span>
	<span class="token comment"${
          _scopeId
        }>// since the \`async\` keyword is used on this function.</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>async</span> <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>logTheSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>const</span> theSum <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>await</span> <span class="token function"${
          _scopeId
        }>getTheSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>&quot;Couldn&#39;t log the sum because division by 0.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span>
	<span class="token comment"${
          _scopeId
        }>// Even though this function does not explicitly return a value,</span>
	<span class="token comment"${
          _scopeId
        }>// a promise will be returned implicitly.</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token function"${
          _scopeId
        }>logTheSum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }>// Use the await operator here if you don&#39;t want the code</span>
<span class="token comment"${
          _scopeId
        }>// execution to continue until the promise has been fulfilled or rejects.</span>
<span class="token comment"${
          _scopeId
        }>// As it is now (without the await operator), Hello! will be logged first.</span>

console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Hello!&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Asynchronous version with promises and async/await."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "async"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getTheSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" quotient1 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" quotient2 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" quotient1 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" quotient12\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The sum will be wrapped in a promise,"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// since the `async` keyword is used on this function."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "async"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logTheSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" theSum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getTheSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Couldn't log the sum because division by 0.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Even though this function does not explicitly return a value,"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// a promise will be returned implicitly."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "logTheSum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Use the await operator here if you don't want the code"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// execution to continue until the promise has been fulfilled or rejects."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// As it is now (without the await operator), Hello! will be logged first."),
                (0,external_vue_.createTextVNode)("\n\nconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Hello!\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="how-to-create-promises" tabindex="-1"><a class="header-anchor" href="#how-to-create-promises" aria-hidden="true">#</a> How to Create Promises</h2><p>Often, promises are created automatically for you when you call one of the built-in functions in the JavaScript runtime environment that run asynchronously and returns a promise, such as:</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank" rel="noopener noreferrer">fetch()`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>It&#39;s also possible to create your own promises using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">the Promise constructor`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Template for creating your own promise." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> myPromise <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>new</span> <span class="token class-name"${
          _scopeId
        }>Promise</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>resolve<span class="token punctuation"${
          _scopeId
        }>,</span> reject</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token comment"${
          _scopeId
        }>// The work the promise should do should be written here.</span>
	<span class="token comment"${
          _scopeId
        }>// If all goes well, call resolve(), and pass it the computed value.</span>
	<span class="token comment"${
          _scopeId
        }>// If something goes wrong, call reject(), and pass it the error.</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" myPromise "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Promise"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("resolve"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" reject")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The work the promise should do should be written here."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If all goes well, call resolve(), and pass it the computed value."),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If something goes wrong, call reject(), and pass it the error."),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>You need to pass a callback function to the Promise constructor. That callback function will be invoked immediately by the constructor, and in that function you should write the code for the long running operation. The constructor will also pass you two callback functions, one called <code>resolve()</code>, and one called <code>reject()</code>.</p><p>When your long running operation has completed, you should call <code>resolve()</code> and pass it the value the long running operation resulted in. If something goes wrong you should instead call <code>reject()</code>, and pass it the error.</p><p>To implement <code>getQuotient()</code> as an asynchronous function using promises, it would look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A function returning a custom promise." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>dividend<span class="token punctuation"${
          _scopeId
        }>,</span> divisor</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>return</span> <span class="token keyword"${
          _scopeId
        }>new</span> <span class="token class-name"${
          _scopeId
        }>Promise</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>resolve<span class="token punctuation"${
          _scopeId
        }>,</span> reject</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>divisor <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
			<span class="token function"${
          _scopeId
        }>reject</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Can&#39;t divide by 0&quot;</span><span class="token punctuation"${
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
        }>resolve</span><span class="token punctuation"${
          _scopeId
        }>(</span>dividend <span class="token operator"${
          _scopeId
        }>/</span> divisor<span class="token punctuation"${
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
<span class="token comment"${
          _scopeId
        }>// Or create the promise implicitly by using the async keyword:</span>
<span class="token keyword"${
          _scopeId
        }>async</span> <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>dividend<span class="token punctuation"${
          _scopeId
        }>,</span> divisor</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>divisor <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>throw</span> <span class="token string"${
          _scopeId
        }>&quot;Can&#39;t divide by 0&quot;</span>
	<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token keyword"${
          _scopeId
        }>return</span> dividend <span class="token operator"${
          _scopeId
        }>/</span> divisor
	<span class="token punctuation"${
          _scopeId
        }>}</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> quotient <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>await</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("dividend"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" divisor")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Promise"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("resolve"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" reject")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("divisor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "reject"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Can't divide by 0\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "resolve"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("dividend "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(" divisor"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Or create the promise implicitly by using the async keyword:"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "async"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("dividend"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" divisor")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("divisor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "throw"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Can't divide by 0\""),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" dividend "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(" divisor\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" quotient "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>You can use the promise above in the same way as any other promise, but since it doesn&#39;t contain any call to an asynchronous function (that runs in the background), it will run synchronous. To make it asynchronous, we could for example use <code>setTimeout()</code> to delay the computations, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A function returning a custom promise that runs (waits) in the background." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
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
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>dividend<span class="token punctuation"${
          _scopeId
        }>,</span> divisor</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>return</span> <span class="token keyword"${
          _scopeId
        }>new</span> <span class="token class-name"${
          _scopeId
        }>Promise</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>resolve<span class="token punctuation"${
          _scopeId
        }>,</span> reject</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
		<span class="token function"${
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
			<span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>divisor <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
				<span class="token function"${
          _scopeId
        }>reject</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Can&#39;t divide by 0&quot;</span><span class="token punctuation"${
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
        }>resolve</span><span class="token punctuation"${
          _scopeId
        }>(</span>dividend <span class="token operator"${
          _scopeId
        }>/</span> divisor<span class="token punctuation"${
          _scopeId
        }>)</span>
			<span class="token punctuation"${
          _scopeId
        }>}</span>
		<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>1000</span><span class="token punctuation"${
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

<span class="token keyword"${
          _scopeId
        }>try</span><span class="token punctuation"${
          _scopeId
        }>{</span>
	<span class="token keyword"${
          _scopeId
        }>const</span> quotient <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>await</span> <span class="token function"${
          _scopeId
        }>getQuotient</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The quotient is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>quotient<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>catch</span><span class="token punctuation"${
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
        }>(</span>error<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("dividend"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" divisor")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Promise"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("resolve"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" reject")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setTimeout"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("divisor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "reject"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Can't divide by 0\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "resolve"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("dividend "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(" divisor"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1000"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" quotient "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getQuotient"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The quotient is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("quotient"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\tconsole"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Note that when you implement functions that makes use of promises from scratch, the implementation can have a few symptoms of callback hell, as <code>getQuotient()</code> above. The real benefit with promises is that the code is really easy to read when you call functions returning promises, as in the try/catch block above.</p><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended Reading</h2><ul><li>The following chapters from the book <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer">Eloquent JavaScript`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>: <ul><li><ol start="11"><li>Asynchronous Programming</li></ol></li></ul></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/asynchronous-programming-in-js/index.html.vue?vue&type=template&id=3dbdd174

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/asynchronous-programming-in-js/index.html.vue

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

/***/ 5095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5ca189d4",
  "path": "/lectures/asynchronous-programming-in-js/",
  "title": "Asynchronous Programming in JavaScript",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Asynchronous Programming in JavaScript"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What is Synchronous Programming?",
      "slug": "what-is-synchronous-programming",
      "children": []
    },
    {
      "level": 2,
      "title": "What's the Problem with Synchronous Programming?",
      "slug": "what-s-the-problem-with-synchronous-programming",
      "children": [
        {
          "level": 3,
          "title": "Example 1: Graphical User Interfaces",
          "slug": "example-1-graphical-user-interfaces",
          "children": []
        },
        {
          "level": 3,
          "title": "Example 2: Data Loading",
          "slug": "example-2-data-loading",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "What is Asynchronous Programming?",
      "slug": "what-is-asynchronous-programming",
      "children": []
    },
    {
      "level": 2,
      "title": "Asynchronous Programming with Callback Functions",
      "slug": "asynchronous-programming-with-callback-functions",
      "children": [
        {
          "level": 3,
          "title": "Error Handling",
          "slug": "error-handling",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "The Drawback with Asynchronous Programming with Callback Functions",
      "slug": "the-drawback-with-asynchronous-programming-with-callback-functions",
      "children": []
    },
    {
      "level": 2,
      "title": "What are Promises?",
      "slug": "what-are-promises",
      "children": []
    },
    {
      "level": 2,
      "title": "Async and Await",
      "slug": "async-and-await",
      "children": []
    },
    {
      "level": 2,
      "title": "How to Create Promises",
      "slug": "how-to-create-promises",
      "children": []
    },
    {
      "level": 2,
      "title": "Recommended Reading",
      "slug": "recommended-reading",
      "children": []
    }
  ],
  "filePathRelative": "lectures/asynchronous-programming-in-js/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=834.app.js.map