"use strict";
exports.id = 6518;
exports.ids = [6518];
exports.modules = {

/***/ 4570:
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
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-1-lcc-formula.png
var lab_1_lcc_formula = __webpack_require__(8909);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-1-present-value-factor.png
var lab_1_present_value_factor = __webpack_require__(8394);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-1-ids.png
var lab_1_ids = __webpack_require__(2953);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-4-naming-model.png
var lab_4_naming_model = __webpack_require__(4845);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-4-delivery-content.png
var lab_4_delivery_content = __webpack_require__(2807);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-5-csv-in-excell.png
var lab_5_csv_in_excell = __webpack_require__(959);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-6-connect-four-empty.png
var lab_6_connect_four_empty = __webpack_require__(2826);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-6-connect-four-with-moves.png
var lab_6_connect_four_with_moves = __webpack_require__(259);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/labs/lab-6-construction-entity.png
var lab_6_construction_entity = __webpack_require__(3563);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/laboratory-work.html.vue?vue&type=template&id=313364d2













function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="laboratory-work" tabindex="-1"><a class="header-anchor" href="#laboratory-work" aria-hidden="true">#</a> Laboratory Work</h1><p>On this page you find information about the examination test <code>Laboratory work</code>.</p><h2 id="number-of-credits" tabindex="-1"><a class="header-anchor" href="#number-of-credits" aria-hidden="true">#</a> Number of credits</h2><p>The <code>Laboratory work</code> is worth 4.5 credits, but you probably need to spend more time than this on completing the labs, because working on the labs will also teach you the things you need to know for the written examination. After you have successfully completed all labs you should not need to study much for the written examination.</p><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The <code>Laboratory work</code> should be carried out individually. It consists of 6 different parts called &quot;labs&quot; (Lab 1, Lab 2, ..., Lab 6). You will pass the laboratory work (get grade <code>G</code>) when you have completed all 6 labs.</p><p>Each lab contains a set of programming problems you need to solve. Each solution should be implemented in Python 3, and before you&#39;re approved on each lab you also need to orally present your solution and implementation to a teacher at a lab session. You are expected to be able to explain how your solutions (algorithms) work, and how each line of Python code you have written works. The teacher can&#39;t approve you on the lab if you can&#39;t do that.</p><p>You are expected to complete one lab each week. No deadlines exist (e.g. presenting Lab 1 four weeks after the course has started is OK), but since you need to present your work at a lab session, the last lab session in the course will in practice function as a deadline.</p><h2 id="re-examination" tabindex="-1"><a class="header-anchor" href="#re-examination" aria-hidden="true">#</a> Re-examination</h2><p>Re-examination of the <code>Laboratory work</code> will be offered at the re-examination periods in February and in August (the same re-examination periods as for the written examination). A special lab session will be booked for these re-examination periods. If you need to know when the lab session will take place in advance, email the course coordinator.</p><h2 id="individual-work" tabindex="-1"><a class="header-anchor" href="#individual-work" aria-hidden="true">#</a> Individual work</h2><p>The laboratory work is individual work.</p><p><strong>It is OK to help each other.</strong> Examples of that:</p><ul><li>Help your friend to debug his code</li><li>Explain to your friend why his code doesn&#39;t work the way he thinks it works</li><li>To some degree help your friend to solve the problem, such as with pen and paper show an algorithm that solves the problem</li><li>Compare and discuss different solutions to the lab problems with your friend to figure out which solution is the best one after both of you have completed a lab</li></ul><p><strong>It is NOT OK to cooperate in any way.</strong> Examples of that:</p><ul><li>Sit at the same computer and write code together with your friend</li><li>Sit at different computers and discuss and write the same code as your friend</li><li>Give code to/receive code from your friend</li></ul><p>You must write your own code! If you are unsure about what counts as <em>helping</em> and what counts as <em>cheating</em>, then simply work alone and ask only the teacher at the lab sessions for help.</p><div class="custom-container tip"><p class="custom-container-title">Too hard?</p><p>If you think the Laboratory Work problems are too hard to solve, sit together with a friend and try to solve the Exercise problems together. The Exercises is a <em>learning activity</em>, so feel free to co-operate as much as you want on those to learn. The Laboratory Work is an <em>examination test</em>, so most of the work must be done by each individual so we can be sure that each individual have learned the intended learning outcomes.</p></div><h2 id="lab-1-input-output-loops" tabindex="-1"><a class="header-anchor" href="#lab-1-input-output-loops" aria-hidden="true">#</a> Lab 1 - Input, output &amp; loops</h2><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Before you attempt solving the programming problems in Lab 1 you are strongly recommended to solve the programming problems in Exercise 0 and Exercise 1 and watch the recorded lectures mentioned there.</p></div><h3 id="problem-1-1-computing-the-sum-of-3-numbers" tabindex="-1"><a class="header-anchor" href="#problem-1-1-computing-the-sum-of-3-numbers" aria-hidden="true">#</a> Problem 1.1: Computing the sum of 3 numbers</h3><p>Create a program that asks the user to enter a number three times and which then computes and prints the sum of those numbers. Do not use any loop.</p><h3 id="problem-1-2-computing-the-sum-of-5-numbers" tabindex="-1"><a class="header-anchor" href="#problem-1-2-computing-the-sum-of-5-numbers" aria-hidden="true">#</a> Problem 1.2: Computing the sum of 5 numbers</h3><p>Create a program that asks the user to enter a number 5 times and which then computes and prints the sum of those numbers. Make use of a loop instead of having multiple copies of the same statements.</p><h3 id="problem-1-3-computing-the-average-of-multiple-numbers" tabindex="-1"><a class="header-anchor" href="#problem-1-3-computing-the-average-of-multiple-numbers" aria-hidden="true">#</a> Problem 1.3: Computing the average of multiple numbers</h3><p>Create a program that first asks the user how many numbers she would like to enter. The program should then ask the user to enter a number that many times, and then should the program print the average value of those numbers. The average value is simply the sum of the numbers divided by the number of numbers.</p><h3 id="problem-1-4-displaying-a-multiplication-table" tabindex="-1"><a class="header-anchor" href="#problem-1-4-displaying-a-multiplication-table" aria-hidden="true">#</a> Problem 1.4: Displaying a multiplication table</h3><p>Create a program that asks the user to enter a number for which the multiplication table (between 0 and 9) should be printed. The program should then print that multiplication table. It can look like as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input/output of the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program displays a multiplication table.
Enter the number for which the multiplication table should be shown: 5
0 * 5 = 0
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program displays a multiplication table.\nEnter the number for which the multiplication table should be shown: 5\n0 * 5 = 0\n1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n")
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-1-5-displaying-a-more-complex-multiplication-table" tabindex="-1"><a class="header-anchor" href="#problem-1-5-displaying-a-more-complex-multiplication-table" aria-hidden="true">#</a> Problem 1.5: Displaying a more complex multiplication table</h3><p>Create a program that first asks the user to enter a number for which the multiplication table should be printed, and then asks the user to enter integers representing the lower bound and the upper bound of the multiplication table. It can look like as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input/output of the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program displays a multiplication table.
Enter the number for which the multiplication table should be shown: 5
Enter lower bound: 3
Enter upper bound: 7
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program displays a multiplication table.\nEnter the number for which the multiplication table should be shown: 5\nEnter lower bound: 3\nEnter upper bound: 7\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n")
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-1-6-computing-products" tabindex="-1"><a class="header-anchor" href="#problem-1-6-computing-products" aria-hidden="true">#</a> Problem 1.6: Computing products</h3><p>Create a program that asks the user to enter two integers. The program should then compute and print the product of the integers between (and including) these two integers. For example, the product of the integers between <code>3</code> and <code>5</code> is <code>3*4*5</code> = <code>60</code>. Assume the user enters the lower integer first. It can look like as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input/output of the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the product of the integers in a range.
Enter the lower number of the range: 3
Enter the upper number of the range: 5
The product of the integers between 3 and 5 is 60.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the product of the integers in a range.\nEnter the lower number of the range: 3\nEnter the upper number of the range: 5\nThe product of the integers between 3 and 5 is 60.\n")
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
    _: 1
  }, _parent))
  _push(`<h3 id="problem-1-7-computing-things" tabindex="-1"><a class="header-anchor" href="#problem-1-7-computing-things" aria-hidden="true">#</a> Problem 1.7: Computing things</h3><p>For this problem, students taking the programs <em>IT Infrastructure and Network Design</em> and <em>Sustainable Building Information Management</em> have a different problem to solve. If you don&#39;t take any of these program (e.g. being an exchange student), solve the problem for the program IT Infrastructure and Network Design.</p><h4 id="it-infrastructure-and-network-design" tabindex="-1"><a class="header-anchor" href="#it-infrastructure-and-network-design" aria-hidden="true">#</a> IT Infrastructure and Network Design</h4><p>A company is planning on buying 5 different servers. The costs to buy the servers are 3200, 5000, 1790, 8900 and 2300 SEK respectively, and they each cost 100 SEK to run each month (power consumption, floor space, etc.). The servers will run for a number of months and then be given away for charity.</p><p>Write a program that first asks the user to enter a number of months, and then computes and prints:</p><ul><li>The total costs for buying and running the servers that number of months.</li><li>The average costs (including both the initial cost and the monthly cost) each month for each server.</li></ul><p>It can look something like what is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Enter the number of months the servers will run: 2
The server costing 3200 costs on average 1700 each month.
The server costing 5000 costs on average 2600 each month.
The server costing 1790 costs on average 995 each month.
The server costing 8900 costs on average 4550 each month.
The server costing 2300 costs on average 1250 each month.
Total cost: 22190
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter the number of months the servers will run: 2\nThe server costing 3200 costs on average 1700 each month.\nThe server costing 5000 costs on average 2600 each month.\nThe server costing 1790 costs on average 995 each month.\nThe server costing 8900 costs on average 4550 each month.\nThe server costing 2300 costs on average 1250 each month.\nTotal cost: 22190\n")
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
  _push(`<h4 id="sustainable-building-information-management" tabindex="-1"><a class="header-anchor" href="#sustainable-building-information-management" aria-hidden="true">#</a> Sustainable Building Information Management</h4><p>Create a program that can calculate LCC for a building using the information in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below:</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Slides with the LCC formula and the Present Value Factor" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><img${
          (0,server_renderer.ssrRenderAttr)("src", lab_1_lcc_formula)
        } alt="The LCC formula"${
          _scopeId
        }></p><p${
          _scopeId
        }><img${
          (0,server_renderer.ssrRenderAttr)("src", lab_1_present_value_factor)
        } alt="The Present Value Factor."${
          _scopeId
        }></p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("img", {
              src: lab_1_lcc_formula,
              alt: "The LCC formula"
            })
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("img", {
              src: lab_1_present_value_factor,
              alt: "The Present Value Factor."
            })
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The input to the calculations should be the properties defined in the IDS below:</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "IDS" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><img${
          (0,server_renderer.ssrRenderAttr)("src", lab_1_ids)
        } alt="IDS"${
          _scopeId
        }></p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("img", {
              src: lab_1_ids,
              alt: "IDS"
            })
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>On top of this:</p><ul><li>The data needed for the present value factor should be user input.</li><li>The installation and commissioning cost are included in the initial cost.</li><li>The environmental cost should be calculated with the compensation factor 0.72SKR/CO2eq according <a href="https://co2kompensera.se/" target="_blank" rel="noopener noreferrer">https://co2kompensera.se/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li><li>The energy cost should be calculated using the energy price 1SKR/kWh.</li><li>Operation cost should be calculated using the default value of 250 SKR/m2(NTA)/year.</li><li>Costs for maintenance and repairs should be calculated using the default value of 100 SKR/m2(NTA) /year.</li><li>The cost for the decommissioning should be calculated as 10% of the cost assessment.</li><li>If some information is missing this information should be provided by the user as input.</li></ul><h3 id="present-your-work" tabindex="-1"><a class="header-anchor" href="#present-your-work" aria-hidden="true">#</a> Present your work</h3><p>Present your work to a teacher at a lab session. Be prepared to explain how your solutions and implementations work, and be prepared to answer any question the teacher might have about your code. It is good to practice this in advance (alone or with a friend).</p><p>When the teacher is satisfied with your presentation, upload your Python files to the assignment Lab 1 on Canvas (<a href="https://ju.instructure.com/courses/4205/assignments/22877" target="_blank" rel="noopener noreferrer">TSPG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://ju.instructure.com/courses/4199/assignments/22971" target="_blank" rel="noopener noreferrer">TSTG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>). The teacher will then approve you on that assignment.</p><h2 id="lab-2-functions-and-modules" tabindex="-1"><a class="header-anchor" href="#lab-2-functions-and-modules" aria-hidden="true">#</a> Lab 2 - Functions and Modules</h2><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Before you attempt solving the programming problems in Lab 2 you are strongly recommended to solve the programming problems in Exercise 2 and watch the recorded lectures mentioned there.</p></div><h3 id="problem-2-1-writing-lyrics" tabindex="-1"><a class="header-anchor" href="#problem-2-1-writing-lyrics" aria-hidden="true">#</a> Problem 2.1: Writing lyrics</h3><p>Create a program that prints the lyrics for the song <em>We wish you a merry Christmas</em>. It can look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The lyrics for the song We wish you a merry Christmas." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas and a Happy New Year

Good tidings we bring to you and your kin
We wish you a Merry Christmas and a Happy New Year

Now bring us some figgy pudding
Now bring us some figgy pudding
Now bring us some figgy pudding, now bring some out here

Good tidings we bring to you and your kin
We wish you a Merry Christmas and a Happy new Year

We won&#39;t go until we get some
We won&#39;t go until we get some
We won&#39;t go until we get some, so bring some out here

Good tidings we bring to you and your kin
We wish you a Merry Christmas and a Happy New Year

We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas and a Happy New Year
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "We wish you a Merry Christmas\nWe wish you a Merry Christmas\nWe wish you a Merry Christmas and a Happy New Year\n\nGood tidings we bring to you and your kin\nWe wish you a Merry Christmas and a Happy New Year\n\nNow bring us some figgy pudding\nNow bring us some figgy pudding\nNow bring us some figgy pudding, now bring some out here\n\nGood tidings we bring to you and your kin\nWe wish you a Merry Christmas and a Happy new Year\n\nWe won't go until we get some\nWe won't go until we get some\nWe won't go until we get some, so bring some out here\n\nGood tidings we bring to you and your kin\nWe wish you a Merry Christmas and a Happy New Year\n\nWe wish you a Merry Christmas\nWe wish you a Merry Christmas\nWe wish you a Merry Christmas and a Happy New Year\n")
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
  _push(`<p>Use loops and functions as much as possible to avoid writing the same statement multiple times. Use at least:</p><ul><li>One function to print the part <code>We wish you...</code>.</li><li>One function to print the part <code>Good tiding...</code>.</li><li>One function to print the part <code>Now bring...</code> and the part <code>We won&#39;t...</code> (use parameters and arguments).</li></ul><div class="custom-container tip"><p class="custom-container-title">Note!</p><p>You should create at least three different functions, but you should call them many more times.</p></div><h3 id="problem-2-2-computing-averages" tabindex="-1"><a class="header-anchor" href="#problem-2-2-computing-averages" aria-hidden="true">#</a> Problem 2.2: Computing averages</h3><p>Create a program that contains a function named <code>average()</code> which receives a sequence with numbers (a list or a range) as argument and returns the average number in the range. The average number is the sum of the numbers divided by the number of numbers.</p><p>Sample usage:</p><ul><li><code>average([1, 4, 4])</code> → <code>3</code></li><li><code>average([4, 4, 4, 4])</code> → <code>4</code></li><li><code>average([-2, 2])</code> → <code>0</code></li></ul><h3 id="problem-2-3-computing-sums" tabindex="-1"><a class="header-anchor" href="#problem-2-3-computing-sums" aria-hidden="true">#</a> Problem 2.3: Computing sums</h3><p>Create a program that contains a function named <code>sum_of_ints()</code> which receives two sequences of integers as two different arguments and computes and returns the sum of all the integers.</p><p>Sample usage:</p><ul><li><code>sum_of_ints([1, 4, 2], [2, -1])</code> → <code>8</code></li><li><code>sum_of_ints([4, 4, 4, 4], [])</code> → <code>16</code></li><li><code>sum_of_ints([4, 4], [4, 4])</code> → <code>16</code></li></ul><h3 id="problem-2-4-practising-multiplication" tabindex="-1"><a class="header-anchor" href="#problem-2-4-practising-multiplication" aria-hidden="true">#</a> Problem 2.4: Practising multiplication</h3><p>Create a program that asks the user to enter a number for which the user would like to practice the multiplication table, and then ask the user how many questions it would like to have. Your program should then generate that many random questions and ask the user to enter the correct number as answer to the question, and then print the correct answer. It can look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Enter multiplication table: 5
Enter number of questions: 3
What is 5 * 6?
Enter answer: 20
Correct answer is 30.
What is 5 * 2?
Enter answer: 10
Correct answer is 10.
What is 5 * 8?
Enter answer: 45
Correct answer is 40.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter multiplication table: 5\nEnter number of questions: 3\nWhat is 5 * 6?\nEnter answer: 20\nCorrect answer is 30.\nWhat is 5 * 2?\nEnter answer: 10\nCorrect answer is 10.\nWhat is 5 * 8?\nEnter answer: 45\nCorrect answer is 40.\n")
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
  _push(`<h3 id="problem-2-5-string-with-numbers" tabindex="-1"><a class="header-anchor" href="#problem-2-5-string-with-numbers" aria-hidden="true">#</a> Problem 2.5: String with numbers</h3><p>Based on the sample input/output below, create the function <code>string_with_numbers()</code>.</p><p>Sample usage:</p><ul><li><code>string_with_numbers(3)</code> → <code>&#39;1_2_3&#39;</code></li><li><code>string_with_numbers(5)</code> → <code>&#39;1_2_3_4_5&#39;</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Start with a string containing only <code>1</code>, and then use a loop to add the rest.</p></div><h3 id="problem-2-6-a-different-sum" tabindex="-1"><a class="header-anchor" href="#problem-2-6-a-different-sum" aria-hidden="true">#</a> Problem 2.6: A different sum</h3><p>Based on the sample usage below, create the function <code>xxx()</code>. You can assume the argument is a positive integer.</p><p>Sample usage:</p><ul><li><code>xxx(1)</code> → <code>1</code></li><li><code>xxx(2)</code> → <code>1 + 2+2</code> → <code>5</code></li><li><code>xxx(3)</code> → <code>1 + 2+2 + 3+3+3</code> → <code>14</code></li><li><code>xxx(4)</code> → <code>1 + 2+2 + 3+3+3 + 4+4+4+4</code> → <code>30</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Two for loops (one inside the other) can be used to implement this function. If you&#39;re clever you might be able to implement it using only one for loop.</p></div><h3 id="present-your-work-1" tabindex="-1"><a class="header-anchor" href="#present-your-work-1" aria-hidden="true">#</a> Present your work</h3><p>Present your work to a teacher at a lab session. Be prepared to explain how your solutions and implementations work, and be prepared to answer any question the teacher might have about your code. It is good to practice this in advance (alone or with a friend).</p><p>When the teacher is satisfied with your presentation, upload your Python files to the assignment Lab 2 on Canvas (<a href="https://ju.instructure.com/courses/4205/assignments/22878" target="_blank" rel="noopener noreferrer">TSPG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://ju.instructure.com/courses/4199/assignments/22972" target="_blank" rel="noopener noreferrer">TSTG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>). The teacher will then approve you on that assignment.</p><h2 id="lab-3-conditions" tabindex="-1"><a class="header-anchor" href="#lab-3-conditions" aria-hidden="true">#</a> Lab 3 - Conditions</h2><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Before you attempt solving the programming problems in Lab 3 you are strongly recommended to solve the programming problems in Exercise 3 and watch the recorded lectures mentioned there.</p></div><h3 id="problem-3-1-absolute-value" tabindex="-1"><a class="header-anchor" href="#problem-3-1-absolute-value" aria-hidden="true">#</a> Problem 3.1: Absolute value</h3><p>Create the function <code>abs()</code>, which receives a number as argument and returns the absolute value for that number (the absolute value is the number in its positive form).</p><p>Sample usage:</p><ul><li><code>abs(5)</code> → <code>5</code></li><li><code>abs(-5)</code> → <code>5</code></li><li><code>abs(0)</code> → <code>0</code></li></ul><h3 id="problem-3-2-closest-to-zero" tabindex="-1"><a class="header-anchor" href="#problem-3-2-closest-to-zero" aria-hidden="true">#</a> Problem 3.2: Closest to zero</h3><p>Create the function <code>closest_to_zero()</code>, which receives two numbers as arguments and returns the number that is closest to 0.</p><p>Sample usage:</p><ul><li><code>closest_to_zero(5, 9)</code> → <code>5</code></li><li><code>closest_to_zero(3, -2)</code> → <code>-2</code></li><li><code>closest_to_zero(2, 2)</code> → <code>2</code></li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Sometimes it is hard to know what the return value should be. For example, should <code>closest_to_zero(-2, 2)</code> return <code>-2</code> or <code>2</code>? They are both equally far from 0! In this case we don&#39;t care about which of them we return.</p></div><h3 id="problem-3-3-closest-to-zero-again" tabindex="-1"><a class="header-anchor" href="#problem-3-3-closest-to-zero-again" aria-hidden="true">#</a> Problem 3.3: Closest to zero (again)</h3><p>Create the function <code>closest_to_zero_4()</code>, which receives four numbers as arguments and returns the number that is closest to 0.</p><p>Sample usage:</p><ul><li><code>closest_to_zero_4(5, 9, 2, 11)</code> → <code>2</code></li><li><code>closest_to_zero_4(0, 3, -2, 4)</code> → <code>0</code></li><li><code>closest_to_zero_4(2, 2, -2, 1)</code> → <code>1</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Try avoid using too many if statements. Instead, can you not use <code>closest_to_zero()</code> in your solution?</p></div><h3 id="problem-3-4-finding-the-highest-value" tabindex="-1"><a class="header-anchor" href="#problem-3-4-finding-the-highest-value" aria-hidden="true">#</a> Problem 3.4: Finding the highest value</h3><p>Create the function <code>highest()</code>, which receives a list with numbers as argument and returns the highest number in that list.</p><p>Sample usage:</p><ul><li><code>highest([5, 3])</code> → <code>5</code></li><li><code>highest([2, 8, 4, 3])</code> → <code>8</code></li><li><code>highest([-2, -5])</code> → <code>-2</code></li><li><code>highest([42])</code> → <code>42</code></li></ul><div class="custom-container danger"><p class="custom-container-title">Note!</p><p>It is not allowed to use the built-in function <code>max()</code> in the solution to this problem.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>When implementing this function, you somehow need to iterate through all the elements in the list and keep track of which element is the highest you have come across so far. you can store that in a variable.</p></div><h3 id="problem-3-5-counting-occurrences" tabindex="-1"><a class="header-anchor" href="#problem-3-5-counting-occurrences" aria-hidden="true">#</a> Problem 3.5: Counting occurrences</h3><p>Create the function <code>count()</code>, which receives a list with strings and another string as argument and returns the number of times that other string occurs in the list.</p><p>Sample usage:</p><ul><li><code>count([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;], &quot;b&quot;)</code> → <code>1</code></li><li><code>count([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;], &quot;e&quot;)</code> → <code>0</code></li><li><code>count([&quot;a&quot;, &quot;a&quot;, &quot;a&quot;], &quot;a&quot;)</code> → <code>3</code></li></ul><div class="custom-container danger"><p class="custom-container-title">Note!</p><p>It is not allowed to use the method <code>List.count()</code> in the solution to this problem.</p></div><h3 id="problem-3-6-summarizing-even-integers" tabindex="-1"><a class="header-anchor" href="#problem-3-6-summarizing-even-integers" aria-hidden="true">#</a> Problem 3.6: Summarizing even integers</h3><p>Create a program that asks the user to enter two integers. The first one should be lower than the second one. The program should then compute and display the sum of the even integers between (and including) those two integers. To check if <code>an_integer</code> is even you can use the expression <code>an_integer % 2 == 0</code>.</p><h3 id="problem-3-7-a-simple-calculator" tabindex="-1"><a class="header-anchor" href="#problem-3-7-a-simple-calculator" aria-hidden="true">#</a> Problem 3.7: A simple calculator</h3><p>Create a small program that functions as a simple calculator with a number stored in memory which you can add, subtract, multiply and divide other integers to/from.</p><p>When you&#39;re done it can look like as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Enter initial memory value: 0
Enter operation (add/sub/mul/div/quit): add
Enter operand: 20
20 is stored in memory.
Enter operation (add/sub/mul/div/quit): mul
Enter operand: 3
60 is stored in memory.
Enter operation (add/sub/mul/div/quit): quit
The program finished with 60 stored in memory.
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter initial memory value: 0\nEnter operation (add/sub/mul/div/quit): add\nEnter operand: 20\n20 is stored in memory.\nEnter operation (add/sub/mul/div/quit): mul\nEnter operand: 3\n60 is stored in memory.\nEnter operation (add/sub/mul/div/quit): quit\nThe program finished with 60 stored in memory.\n")
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="present-your-work-2" tabindex="-1"><a class="header-anchor" href="#present-your-work-2" aria-hidden="true">#</a> Present your work</h3><p>Present your work to a teacher at a lab session. Be prepared to explain how your solutions and implementations work, and be prepared to answer any question the teacher might have about your code. It is good to practice this in advance (alone or with a friend).</p><p>When the teacher is satisfied with your presentation, upload your Python files to the assignment Lab 3 on Canvas (<a href="https://ju.instructure.com/courses/4205/assignments/22879" target="_blank" rel="noopener noreferrer">TSPG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://ju.instructure.com/courses/4199/assignments/22973" target="_blank" rel="noopener noreferrer">TSTG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>). The teacher will then approve you on that assignment.</p><h2 id="lab-4-lists-dicts" tabindex="-1"><a class="header-anchor" href="#lab-4-lists-dicts" aria-hidden="true">#</a> Lab 4 - Lists &amp; Dicts</h2><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Before you attempt solving the programming problems in Lab 4 you are strongly recommended to solve the programming problems in Exercise 4 and watch the recorded lectures mentioned there.</p></div><h3 id="problem-4-1-comparing-two-lists" tabindex="-1"><a class="header-anchor" href="#problem-4-1-comparing-two-lists" aria-hidden="true">#</a> Problem 4.1: Comparing two lists</h3><p>Create the function <code>are_equal()</code>, which receives two lists with numbers as arguments and returns <code>True</code> if the number at each index in the two lists are equal, otherwise <code>False</code>.</p><p>Sample usage:</p><ul><li><code>are_equal([1, 2, 3], [1, 2, 3])</code> → <code>True</code></li><li><code>are_equal([1, 2, 3], [1, 2, 2])</code> → <code>False</code></li><li><code>are_equal([1, 2, 3], [1, 2])</code> → <code>False</code></li><li><code>are_equal([1, 2], [1, 2, 3])</code> → <code>False</code></li></ul><div class="custom-container danger"><p class="custom-container-title">Don&#39;t!</p><p>It is not allowed to use built-in functionality to compare lists, such as:</p><ul><li><code>a_list == another_list</code></li><li><code>a_list != another_list</code></li><li><code>a_list &lt; another_list</code></li><li><code>a_list &gt; another_list</code></li></ul><p>But feel free to use the operators to compare numbers, such as <code>a_number == another_number</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>When implementing this function, you somehow need to compare the elements pairwise. The simplest way to do that is by iterating over the indexes in the lists, but that can get you into trouble if the two lists do not contain the same number of elements.</p></div><h3 id="problem-4-2-changing-a-list" tabindex="-1"><a class="header-anchor" href="#problem-4-2-changing-a-list" aria-hidden="true">#</a> Problem 4.2: Changing a list</h3><p>Create the function <code>change_to_highest()</code>, which receives a list as argument. The received list will contain lists with numbers, and the function should change the received list so it contains the highest number from each nested list.</p><p>A sample usage is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample usage of the function." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }>the_list <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
    <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
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
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>7</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>6</span><span class="token punctuation"${
          _scopeId
        }>]</span>
<span class="token punctuation"${
          _scopeId
        }>]</span>
change_to_highest<span class="token punctuation"${
          _scopeId
        }>(</span>the_list<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }># → None (no return value!).</span>
<span class="token comment"${
          _scopeId
        }># the_list should now be [3, 5, 7].</span>
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("the_list "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "6"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\nchange_to_highest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("the_list"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "# → None (no return value!)."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "# the_list should now be [3, 5, 7]."),
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
  _push(`<div class="custom-container danger"><p class="custom-container-title">Don&#39;t!</p><p>The function should not return anything (<code>None</code> is returned implicitly), and you should not create a new list in the function, but make changes to the list you receive.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>When implementing this function, you need to iterate through all the inner lists in the outer list and replace them by the highest number in each of them. Creating a separate function to compute which the highest number is might be helpful.</p></div><h3 id="problem-4-3-computing-sums" tabindex="-1"><a class="header-anchor" href="#problem-4-3-computing-sums" aria-hidden="true">#</a> Problem 4.3: Computing sums</h3><p>Create the function <code>sums()</code>, which receives a list of integers as argument and returns a dictionary where the key <code>&quot;odd&quot;</code> contains the sum of all the odd integers in the list, the key <code>&quot;even&quot;</code> contains the sum of all the even integers in the list, and the key <code>&quot;all&quot;</code> contains the sum of all the integers in the list.</p><p>The expression <code>the_number % 2 == 0</code> can be used to check if <code>the_number</code> is an even number.</p><p>Sample usage:</p><ul><li><code>sums([1, 2, 3, 4, 5])</code> → <code>{&quot;odd&quot;: 9, &quot;even&quot;: 6, &quot;all&quot;: 15}</code></li><li><code>sums([2, 4, 6])</code> → <code>{&quot;odd&quot;: 0, &quot;even&quot;: 12, &quot;all&quot;: 12}</code></li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>In dictionaries, the order of the keys does not matter, e.g. the dictionary <code>{&quot;a&quot;: 1, &quot;b&quot;: 2}</code> is the same as <code>{&quot;b&quot;: 2, &quot;a&quot;: 1}</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Start by initializing the directory you should return, then iterate through all the numbers in the list and add them to the appropriate keys in the dictionary.</p></div><h3 id="problem-4-4-a-less-simple-calculator" tabindex="-1"><a class="header-anchor" href="#problem-4-4-a-less-simple-calculator" aria-hidden="true">#</a> Problem 4.4: A less simple calculator</h3><p>This problem is a continuation on Problem 37. Feel free to continue on your solution to that problem to solve this problem.</p><p>Add the operation <em>undo</em> to your calculator. It should (if possible) undo the user&#39;s previous operation by restoring the value in memory to what it was before the previous operation. Repeated usage of the undo operation should be supported.</p><p>When you&#39;re done it can look like as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Enter initial memory value: 0
Enter operation (add/sub/mul/div/undo/quit): undo
There is nothing to undo.
Enter operation (add/sub/mul/div/undo/quit): add
Enter operand: 1
1 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): add
Enter operand: 2
3 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): undo
1 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): undo
0 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): undo
There is nothing to undo.
Enter operation (add/sub/mul/div/undo/quit): quit
The program finished with 0 in memory.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter initial memory value: 0\nEnter operation (add/sub/mul/div/undo/quit): undo\nThere is nothing to undo.\nEnter operation (add/sub/mul/div/undo/quit): add\nEnter operand: 1\n1 is stored in memory.\nEnter operation (add/sub/mul/div/undo/quit): add\nEnter operand: 2\n3 is stored in memory.\nEnter operation (add/sub/mul/div/undo/quit): undo\n1 is stored in memory.\nEnter operation (add/sub/mul/div/undo/quit): undo\n0 is stored in memory.\nEnter operation (add/sub/mul/div/undo/quit): undo\nThere is nothing to undo.\nEnter operation (add/sub/mul/div/undo/quit): quit\nThe program finished with 0 in memory.\n")
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
  _push(`<div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Have an empty list in the beginning that is used to store all memory values, and when applying the next mathematical operation entered by the user, push the new memory value to the end of this list. When the user wants to undo an operation, simply remove the last value from this list.</p></div><h3 id="problem-4-5-verifying-strings" tabindex="-1"><a class="header-anchor" href="#problem-4-5-verifying-strings" aria-hidden="true">#</a> Problem 4.5: Verifying strings</h3><p>For this problem, students taking the programs <em>IT Infrastructure and Network Design</em> and <em>Sustainable Building Information Management</em> have a different problem to solve. If you don&#39;t take any of these program (e.g. being an exchange student), solve the problem for the program IT Infrastructure and Network Design.</p><h4 id="it-infrastructure-and-network-design-1" tabindex="-1"><a class="header-anchor" href="#it-infrastructure-and-network-design-1" aria-hidden="true">#</a> IT Infrastructure and Network Design</h4><p>Create a program that asks the user to enter a path to a directory on the file system. Your program should then check if that directory only contains files with the following names:</p><ul><li><code>config.xml</code></li><li><code>backup-config-YYYY-MM-DD.xml</code></li></ul><p>There may exists several files with the name <code>backup-config-YYYY-MM-DD.xml</code>, and <code>YYYY-MM-DD</code> should of course be a date for when the backup of the <code>config.xml</code> was created (e.g. <code>2018-11-12</code>). Your program should print text telling the user if all the files were named in one of these two formats, or if there exist files that doesn&#39;t follow these formats (in which case you should print the name of these files that don&#39;t follow the formats).</p><h4 id="sustainable-building-information-management-1" tabindex="-1"><a class="header-anchor" href="#sustainable-building-information-management-1" aria-hidden="true">#</a> Sustainable Building Information Management</h4><p>Develop a program that checks if the files in a directory have been named according to the description below. The path to the directory should be given as input.</p><p><strong>Naming for model files and drawings</strong><br> In `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below you can see the naming principles of files that are related to CAD.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", lab_4_naming_model)
        }${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", { src: lab_4_naming_model })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The file name consists of six different parts. Symbols that can be used are characters (a-z/A-Z), numbers (0-9), dots (.), and dashes (-).</p><p><strong>Project Name</strong><br> Name of the project should be <code>BIM3HUS4</code>.</p><p><strong>Responsible Party</strong><br> Consists of one letter and one number. The letter is used to classify the discipline while the number is used to distinguish between different actors within the same discipline.</p><ul><li>A: Architect</li><li>E: Electrical</li><li>V: HVAC</li><li>W: Plumbing</li><li>K: Structural</li><li>P: Projects Common</li></ul><p><strong>Content</strong><br> Numerical identification of the building component according to BSAB 96.</p><p><strong>Presentation</strong><br> One letter or number used for explaining how the information is presented according to SS 32271 or BH90:8.</p><p><strong>Models and Base Files</strong><br></p><ul><li>V: 3D models</li><li>P: Plans</li><li>S: Sections</li><li>F: Facades</li><li>U: Interior elevations</li><li>D: Details</li><li>X: Non-Graphical Models</li><li>C: Schedules</li></ul><p><strong>Drawings and Drawing Definitions</strong><br></p><ul><li>0: Composite Drawings</li><li>1: Plan Drawings</li><li>2: Sectional Drawings</li><li>3: Façade Drawings</li><li>4: Layout Drawings</li><li>5: List Drawings</li><li>6: Detail Drawings</li><li>7: Collaboration Drawings</li><li>8: Schematic Drawings</li><li>9: Text</li></ul><p><strong>Building Number</strong><br> Two numbers for identifying the building. For example: building number one is called <code>01</code> and building ten is called building <code>10</code>. For multiple buildings, <code>00</code> are to be used.</p><p><strong>Level</strong><br> The level of the building. Level <code>01</code> is the first usable level. For multiple floors, <code>00</code> are to be used.</p><p><strong>Consecutive Numbers</strong><br> Should follow a systematic principle according to BSAB 96.</p><p><strong>File Type</strong><br> The extension for the file used. For example, a Revit file is called <code>.rvt</code> and the.</p><p>The different allowed formats should be defined in the different IDS in the project. A part of an IDS is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", lab_4_delivery_content)
        }${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", { src: lab_4_delivery_content })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="present-your-work-3" tabindex="-1"><a class="header-anchor" href="#present-your-work-3" aria-hidden="true">#</a> Present your work</h3><p>Present your work to a teacher at a lab session. Be prepared to explain how your solutions and implementations work, and be prepared to answer any question the teacher might have about your code. It is good to practice this in advance (alone or with a friend).</p><p>When the teacher is satisfied with your presentation, upload your Python files to the assignment Lab 4 on Canvas (<a href="https://ju.instructure.com/courses/4205/assignments/22880" target="_blank" rel="noopener noreferrer">TSPG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://ju.instructure.com/courses/4199/assignments/22974" target="_blank" rel="noopener noreferrer">TSTG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>). The teacher will then approve you on that assignment.</p><h2 id="lab-5-working-with-files" tabindex="-1"><a class="header-anchor" href="#lab-5-working-with-files" aria-hidden="true">#</a> Lab 5 - Working with files</h2><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Before you attempt solving the programming problems in Lab 5 you are strongly recommended to solve the programming problems in Exercise 5 and watch the recorded lectures mentioned there.</p></div><h3 id="problem-5-1-counting-things" tabindex="-1"><a class="header-anchor" href="#problem-5-1-counting-things" aria-hidden="true">#</a> Problem 5.1: Counting things</h3><p>Create a file named <code>text.txt</code> with the content shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Then write a program that computes and prints:</p><ul><li>The number of words in the file.</li><li>The number of sentences in the file.</li><li>The number of paragraphs in the file.</li><li>Which of the letters (a-z) that appears most times (count upper case letters as lower case letters) and how many times that is.</li></ul>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Accumsan in nisl nisi scelerisque eu ultrices. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Ultrices eros in cursus turpis massa tincidunt dui. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Viverra nibh cras pulvinar mattis nunc sed. Ultricies mi quis hendrerit dolor magna eget. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Dui sapien eget mi proin sed libero enim sed faucibus. Sit amet est placerat in egestas.

Libero enim sed faucibus turpis in. In est ante in nibh mauris cursus mattis molestie a. Ac tortor dignissim convallis aenean. Consectetur adipiscing elit pellentesque habitant. Habitant morbi tristique senectus et. Erat nam at lectus urna duis convallis convallis tellus. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Euismod nisi porta lorem mollis aliquam. Rutrum quisque non tellus orci ac. Elit pellentesque habitant morbi tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper a. Tincidunt augue interdum velit euismod in pellentesque. Tortor pretium viverra suspendisse potenti nullam ac. Dui sapien eget mi proin. Sed faucibus turpis in eu mi bibendum. Auctor elit sed vulputate mi. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed cras ornare arcu dui vivamus arcu felis.

Venenatis tellus in metus vulputate eu scelerisque. Elementum sagittis vitae et leo. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Elementum eu facilisis sed odio. Tellus mauris a diam maecenas sed enim ut sem. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Vitae et leo duis ut diam quam nulla porttitor. Auctor eu augue ut lectus arcu bibendum at varius vel. Libero justo laoreet sit amet cursus sit amet dictum sit. Lorem sed risus ultricies tristique. Viverra accumsan in nisl nisi. Nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat nibh sed pulvinar proin gravida hendrerit. Blandit libero volutpat sed cras ornare. Tristique senectus et netus et malesuada fames ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. At urna condimentum mattis pellentesque id nibh tortor id. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Ultrices sagittis orci a scelerisque purus semper eget duis at.

Nisl rhoncus mattis rhoncus urna neque viverra. Cursus eget nunc scelerisque viverra mauris in. Pretium quam vulputate dignissim suspendisse. Et ultrices neque ornare aenean. Volutpat est velit egestas dui id ornare arcu odio ut. Morbi tristique senectus et netus et malesuada fames ac. Purus sit amet luctus venenatis. Urna molestie at elementum eu facilisis sed odio morbi quis. Integer enim neque volutpat ac tincidunt vitae semper. Turpis egestas pretium aenean pharetra magna ac. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Vulputate enim nulla aliquet porttitor lacus luctus. Mattis enim ut tellus elementum sagittis. Lacinia quis vel eros donec. In est ante in nibh mauris cursus.

Facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus euismod. Enim tortor at auctor urna. Nibh sed pulvinar proin gravida hendrerit. Posuere sollicitudin aliquam ultrices sagittis orci a. Malesuada bibendum arcu vitae elementum curabitur vitae. Maecenas sed enim ut sem viverra. In iaculis nunc sed augue. Facilisis sed odio morbi quis commodo odio aenean. Diam phasellus vestibulum lorem sed risus. Habitant morbi tristique senectus et netus et malesuada fames ac. Ornare lectus sit amet est. Eget aliquet nibh praesent tristique magna. Sed cras ornare arcu dui vivamus arcu felis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi. Non enim praesent elementum facilisis. Tortor at auctor urna nunc id cursus. Vel fringilla est ullamcorper eget nulla facilisi etiam.
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Accumsan in nisl nisi scelerisque eu ultrices. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Ultrices eros in cursus turpis massa tincidunt dui. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Viverra nibh cras pulvinar mattis nunc sed. Ultricies mi quis hendrerit dolor magna eget. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Dui sapien eget mi proin sed libero enim sed faucibus. Sit amet est placerat in egestas.\n\nLibero enim sed faucibus turpis in. In est ante in nibh mauris cursus mattis molestie a. Ac tortor dignissim convallis aenean. Consectetur adipiscing elit pellentesque habitant. Habitant morbi tristique senectus et. Erat nam at lectus urna duis convallis convallis tellus. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Euismod nisi porta lorem mollis aliquam. Rutrum quisque non tellus orci ac. Elit pellentesque habitant morbi tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper a. Tincidunt augue interdum velit euismod in pellentesque. Tortor pretium viverra suspendisse potenti nullam ac. Dui sapien eget mi proin. Sed faucibus turpis in eu mi bibendum. Auctor elit sed vulputate mi. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed cras ornare arcu dui vivamus arcu felis.\n\nVenenatis tellus in metus vulputate eu scelerisque. Elementum sagittis vitae et leo. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Elementum eu facilisis sed odio. Tellus mauris a diam maecenas sed enim ut sem. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Vitae et leo duis ut diam quam nulla porttitor. Auctor eu augue ut lectus arcu bibendum at varius vel. Libero justo laoreet sit amet cursus sit amet dictum sit. Lorem sed risus ultricies tristique. Viverra accumsan in nisl nisi. Nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat nibh sed pulvinar proin gravida hendrerit. Blandit libero volutpat sed cras ornare. Tristique senectus et netus et malesuada fames ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. At urna condimentum mattis pellentesque id nibh tortor id. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Ultrices sagittis orci a scelerisque purus semper eget duis at.\n\nNisl rhoncus mattis rhoncus urna neque viverra. Cursus eget nunc scelerisque viverra mauris in. Pretium quam vulputate dignissim suspendisse. Et ultrices neque ornare aenean. Volutpat est velit egestas dui id ornare arcu odio ut. Morbi tristique senectus et netus et malesuada fames ac. Purus sit amet luctus venenatis. Urna molestie at elementum eu facilisis sed odio morbi quis. Integer enim neque volutpat ac tincidunt vitae semper. Turpis egestas pretium aenean pharetra magna ac. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Vulputate enim nulla aliquet porttitor lacus luctus. Mattis enim ut tellus elementum sagittis. Lacinia quis vel eros donec. In est ante in nibh mauris cursus.\n\nFacilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus euismod. Enim tortor at auctor urna. Nibh sed pulvinar proin gravida hendrerit. Posuere sollicitudin aliquam ultrices sagittis orci a. Malesuada bibendum arcu vitae elementum curabitur vitae. Maecenas sed enim ut sem viverra. In iaculis nunc sed augue. Facilisis sed odio morbi quis commodo odio aenean. Diam phasellus vestibulum lorem sed risus. Habitant morbi tristique senectus et netus et malesuada fames ac. Ornare lectus sit amet est. Eget aliquet nibh praesent tristique magna. Sed cras ornare arcu dui vivamus arcu felis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi. Non enim praesent elementum facilisis. Tortor at auctor urna nunc id cursus. Vel fringilla est ullamcorper eget nulla facilisi etiam.\n")
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>You can presume the text only contains the following characters:</p><ul><li>a-z</li><li>A-Z</li><li>spaces (<code>&quot; &quot;</code>),</li><li>line breaks (<code>&quot;\\n&quot;</code>)</li><li>dots (<code>.</code>)</li></ul><p>Feel free to use whichever functions/methods you want in your solution. You probably especially want to take a look at string methods you can use (run <code>help(&quot;&quot;)</code> in a Python REP-loop).</p><h3 id="problem-5-2-improving-the-calculator" tabindex="-1"><a class="header-anchor" href="#problem-5-2-improving-the-calculator" aria-hidden="true">#</a> Problem 5.2: Improving the calculator</h3><p>This problem is a continuation of Problem 4.4 (the calculator).</p><p>Add the operation <code>store</code>, which saves the entire state of the calculator program (i.e. the list of memory values) in XML format in an XML file of your choice.</p><p>Add the operation <code>load</code>, which sets the state of the calculator program to a previous state that has been stored in a file through the store operation.</p><p>It should not be possible to undo the store or load operation, i.e.:</p><ul><li>Running <code>undo</code> after running <code>store</code> should not delete the file, but instead undo the previous add/subtract/multiply/divide operation.</li><li>Running <code>undo</code> after running <code>load</code> should not restore the list with memory values used before the load operation, but instead undo the previous add/subtract/multiply/divide operation on the list loaded from the file (i.e. just delete the last value from the list).</li></ul><h3 id="problem-5-3-doing-things" tabindex="-1"><a class="header-anchor" href="#problem-5-3-doing-things" aria-hidden="true">#</a> Problem 5.3: Doing things</h3><p>For this problem, students taking the programs <em>IT Infrastructure and Network Design</em> and <em>Sustainable Building Information Management</em> have a different problem to solve. If you don&#39;t take any of these program (e.g. being an exchange student), solve the problem for the program IT Infrastructure and Network Design.</p><h4 id="sustainable-building-information-management-2" tabindex="-1"><a class="header-anchor" href="#sustainable-building-information-management-2" aria-hidden="true">#</a> Sustainable Building Information Management</h4><p>Create a file named <code>house.xml</code> with the XML code shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. The XML code contains information about a house with a set of rectangular rooms.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The XML code in house.xml." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-xml ext-xml line-numbers-mode"${
          _scopeId
        }><pre class="language-xml"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>house</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>room</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>name</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Living Room<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>name</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>side-length-1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>5<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>side-length-1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>side-length-2</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>5<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>side-length-2</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>room</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>room</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>name</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Kitchen<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>name</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>side-length-1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>3<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>side-length-1</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>side-length-2</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>6<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>side-length-2</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>room</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>house</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("house")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("room")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("name")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Living Room"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("name")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("side-length-1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("5"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("side-length-1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("side-length-2")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("5"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("side-length-2")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("room")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("room")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("name")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Kitchen"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("name")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("side-length-1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("3"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("side-length-1")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("side-length-2")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("6"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("side-length-2")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("room")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("house")
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Then write a program that computes and prints the total area of the house (the sum of the area of the rooms) in the XML file. Your program should still work if one add/remove rooms to the XML file.</p><h4 id="it-infrastructure-and-network-design-2" tabindex="-1"><a class="header-anchor" href="#it-infrastructure-and-network-design-2" aria-hidden="true">#</a> IT Infrastructure and Network Design</h4><p>Write a default configuration for a Cisco router in a file called <code>configuration-template.config</code>. In this file, you should be able to use placeholders that later will be replaced with the actual values that should be used. The file can look like the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. In this case, placeholders are all words surrounded with curly brackets, <code>{like_this}</code>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample of the configuration template file. The parts with curly brackets are placeholders." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>!
! BASIC CONFIGURATION FOR CISCO ROUTERS
!
hostname {HOSTNAME}
enable password {ENABLEPASSWORD}
!
no ip domain lookup
ipv6 unicast-routing
!
interface {INT0}
 description {DESCINT0}
 ip address {IPINT0} {NETMASKINT0}
 ipv6 address {LINKLOCALINT0} link-local
 ipv6 address {IPV6INT0ANDPREFIX}
 {SHUTDOWNEMPTYORNOINT0} shutdown
!
interface {INT1}
 description {DESCINT1}
 ip address {IPINT1} {NETMASKINT1}
 ipv6 address {LINKLOCALINT1} link-local
 ipv6 address {IPV6INT1ANDPREFIX}
 {SHUTDOWNEMPTYORNOINT1} shutdown
!
banner motd ^C {BANNERMOTD} ^C
!
line con 0
 password {CONSOLEPASSWORD}
 logging synchronous
 login
line vty 0 4
 password {VTYPASSWORD}
 login
 transport input {TRANSPORTINPUTVTY}
!
end
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "!\n! BASIC CONFIGURATION FOR CISCO ROUTERS\n!\nhostname {HOSTNAME}\nenable password {ENABLEPASSWORD}\n!\nno ip domain lookup\nipv6 unicast-routing\n!\ninterface {INT0}\n description {DESCINT0}\n ip address {IPINT0} {NETMASKINT0}\n ipv6 address {LINKLOCALINT0} link-local\n ipv6 address {IPV6INT0ANDPREFIX}\n {SHUTDOWNEMPTYORNOINT0} shutdown\n!\ninterface {INT1}\n description {DESCINT1}\n ip address {IPINT1} {NETMASKINT1}\n ipv6 address {LINKLOCALINT1} link-local\n ipv6 address {IPV6INT1ANDPREFIX}\n {SHUTDOWNEMPTYORNOINT1} shutdown\n!\nbanner motd ^C {BANNERMOTD} ^C\n!\nline con 0\n password {CONSOLEPASSWORD}\n logging synchronous\n login\nline vty 0 4\n password {VTYPASSWORD}\n login\n transport input {TRANSPORTINPUTVTY}\n!\nend\n")
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
  _push(`<p>Then create another file called <code>configuration-values.csv</code>, that contains the value for each placeholder in the configuration template. Furthermore, it does not only contain one value for each placeholder, but a list of them. It can look like the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below, in this case 5 values for each placeholder (the name of the placeholder is the first value on each line).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample of the configuration template file. The parts with curly brackets are placeholders." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>HOSTNAME,R1,R2,R3,R4,R5
ENABLEPASSWORD,cisco,cisco,cisco,cisco,cisco
INT0,gi0/0,gi0/0,gi0/0,s0/0/0,s0/0/1
DESCINT0,Link to Client Network,Link to HR  Network,Link-net to R1,Link to Telia-WAN,Link to SUNET-WAN
IPINT0,192.168.10.1,10.0.25.1,10.0.1.1,86.42.125.1,192.55.65.1
NETMASKINT0,255.255.255.0,255.255.255.0,255.255.255.252,255.255.255.252,255.255.255.252
LINKLOCALINT0,fe80::1,fe80::2,fe80::3,fe80::4,fe80::5
IPV6INT0ANDPREFIX,2001:db8:acad:1::1/64,2001:db8:acad:2::1/64,2001:db8:acad:3::1/64,2001:db8:acad:4::1/64,2001:db8:acad:5::1/64
SHUTDOWNEMPTYORNOINT0,no,no,no,no,no
INT1,gi0/1,gi0/1,gi0/1,gi0/1,gi0/1
DESCINT1,Link-net to R3,Link-net to R4,Link to IP Only-WAN,Link-net to R2,Link to Economy Network
IPINT1,10.1.1.2,10.10.25.1,65.42.52.65,10.10.25.2,172.16.0.1
NETMASKINT1,255.255.255.252,255.255.255.252,255.255.255.252,255.255.255.252,255.255.255.0
LINKLOCALINT1,fe80::1,fe80::2,fe80::3,fe80::4,fe80::5
IPV6INT1ANDPREFIX,2001:db8:acad:3::2/64,2001:db8:acad:10::1/64,2001:abcd:beef::2/64,2001:db8:acad:10::2/64,2001:db8:acad:abcd::2/64
SHUTDOWNEMPTYORNOINT1,no,no,no,no,no
BANNERMOTD,You shall not pass!,You shall not pass!,You shall not pass!,You shall not pass!,You shall not pass!
CONSOLEPASSWORD,cisco1,cisco2,cisco3,cisco4,cisco5
VTYPASSWORD,cisco1,cisco2,cisco3,cisco4,cisco5
TRANSPORTINPUTVTY,telnet,telnet,telnet,ssh,ssh
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "HOSTNAME,R1,R2,R3,R4,R5\nENABLEPASSWORD,cisco,cisco,cisco,cisco,cisco\nINT0,gi0/0,gi0/0,gi0/0,s0/0/0,s0/0/1\nDESCINT0,Link to Client Network,Link to HR  Network,Link-net to R1,Link to Telia-WAN,Link to SUNET-WAN\nIPINT0,192.168.10.1,10.0.25.1,10.0.1.1,86.42.125.1,192.55.65.1\nNETMASKINT0,255.255.255.0,255.255.255.0,255.255.255.252,255.255.255.252,255.255.255.252\nLINKLOCALINT0,fe80::1,fe80::2,fe80::3,fe80::4,fe80::5\nIPV6INT0ANDPREFIX,2001:db8:acad:1::1/64,2001:db8:acad:2::1/64,2001:db8:acad:3::1/64,2001:db8:acad:4::1/64,2001:db8:acad:5::1/64\nSHUTDOWNEMPTYORNOINT0,no,no,no,no,no\nINT1,gi0/1,gi0/1,gi0/1,gi0/1,gi0/1\nDESCINT1,Link-net to R3,Link-net to R4,Link to IP Only-WAN,Link-net to R2,Link to Economy Network\nIPINT1,10.1.1.2,10.10.25.1,65.42.52.65,10.10.25.2,172.16.0.1\nNETMASKINT1,255.255.255.252,255.255.255.252,255.255.255.252,255.255.255.252,255.255.255.0\nLINKLOCALINT1,fe80::1,fe80::2,fe80::3,fe80::4,fe80::5\nIPV6INT1ANDPREFIX,2001:db8:acad:3::2/64,2001:db8:acad:10::1/64,2001:abcd:beef::2/64,2001:db8:acad:10::2/64,2001:db8:acad:abcd::2/64\nSHUTDOWNEMPTYORNOINT1,no,no,no,no,no\nBANNERMOTD,You shall not pass!,You shall not pass!,You shall not pass!,You shall not pass!,You shall not pass!\nCONSOLEPASSWORD,cisco1,cisco2,cisco3,cisco4,cisco5\nVTYPASSWORD,cisco1,cisco2,cisco3,cisco4,cisco5\nTRANSPORTINPUTVTY,telnet,telnet,telnet,ssh,ssh\n")
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Instead of manually creating the CSV file yourself, you can easily create and maintain it using Microsoft Excel, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. When saving the file, just save it as <em>CSV (Comma Delimited)</em> instead of <em>Excel Workbook</em>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Saving an Excell document as a CSV file." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", lab_5_csv_in_excell)
        } alt="Saving an Excell document as a CSV file."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: lab_5_csv_in_excell,
            alt: "Saving an Excell document as a CSV file."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Your task is to create a program that reads the placeholder values from <code>configuration-values.csv</code> and then generates new configuration files based on the template in <code>configuration-template.config</code>, but where the placeholders have been replaced with the values.</p><p>With the two files given above, your program should generate 5 new configuration files, the first one looking like the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample of what the first generated configuration file can look like." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>!
! BASIC CONFIGURATION FOR CISCO ROUTERS
!
hostname R1
!
enable password cisco
!
no ip domain lookup
ipv6 unicast-routing
!
interface gi0/0
 description Link to Client Network
 ip address 192.168.10.1 255.255.255.0
 ipv6 address fe80::1 link-local
 ipv6 address 2001:db8:acad:1::1/64
 no shutdown
!
interface gi0/1
 description Link-net to R3
 ip address 10.1.1.2 255.255.255.252
 ipv6 address fe80::1 link-local
 ipv6 address 2001:db8:acad:3::2/64
 no shutdown
!
banner motd ^C You shall not pass! ^C
!
line con 0
 password cisco1
 logging synchronous
 login
line vty 0 4
 password cisco1
 login
 transport input telnet
!
end
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "!\n! BASIC CONFIGURATION FOR CISCO ROUTERS\n!\nhostname R1\n!\nenable password cisco\n!\nno ip domain lookup\nipv6 unicast-routing\n!\ninterface gi0/0\n description Link to Client Network\n ip address 192.168.10.1 255.255.255.0\n ipv6 address fe80::1 link-local\n ipv6 address 2001:db8:acad:1::1/64\n no shutdown\n!\ninterface gi0/1\n description Link-net to R3\n ip address 10.1.1.2 255.255.255.252\n ipv6 address fe80::1 link-local\n ipv6 address 2001:db8:acad:3::2/64\n no shutdown\n!\nbanner motd ^C You shall not pass! ^C\n!\nline con 0\n password cisco1\n logging synchronous\n login\nline vty 0 4\n password cisco1\n login\n transport input telnet\n!\nend\n")
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
    _: 1
  }, _parent))
  _push(`<div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>You can start by reading the values from <code>configuration-values.csv</code> and store them in a dictionary like the following:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>placeholders <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;HOSTNAME&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;R1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;R2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;R3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;R4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;R5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;ENABLEPASSWORD&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;cisco&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cisco&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cisco&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cisco&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cisco&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment"># ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Then you loop 5 times (since each placeholder has five different values), and each time you:</p><ol><li>Read the content from <code>configuration-template.config</code> into a string called <code>template</code>.</li><li>Use a new loop to iterate through all the placeholders, and for each placeholder you find it in <code>template</code> and replace it with its value. To replace a placeholder with a value, you can use the string method called <code>replace(&quot;old substring&quot;, &quot;new substring&quot;)</code>: <code>&quot;hostname {HOSTNAME}&quot;.replace(&quot;{HOSTNAME}&quot;, &quot;R1&quot;)</code> → <code>&quot;hostname R1&quot;</code>.</li><li>Store <code>template</code> in a new file.</li></ol></div><h3 id="present-your-work-4" tabindex="-1"><a class="header-anchor" href="#present-your-work-4" aria-hidden="true">#</a> Present your work</h3><p>Present your work to a teacher at a lab session. Be prepared to explain how your solutions and implementations work, and be prepared to answer any question the teacher might have about your code. It is good to practice this in advance (alone or with a friend).</p><p>When the teacher is satisfied with your presentation, upload your Python files to the assignment Lab 5 on Canvas (<a href="https://ju.instructure.com/courses/4205/assignments/22881" target="_blank" rel="noopener noreferrer">TSPG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://ju.instructure.com/courses/4199/assignments/22975" target="_blank" rel="noopener noreferrer">TSTG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>). The teacher will then approve you on that assignment.</p><h2 id="lab-6-object-oriented-programming" tabindex="-1"><a class="header-anchor" href="#lab-6-object-oriented-programming" aria-hidden="true">#</a> Lab 6 - Object-oriented programming</h2><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Before you attempt solving the programming problems in Lab 6 you are strongly recommended to solve the programming problems in Exercise 6 and watch the recorded lectures mentioned there.</p></div><h3 id="problem-6-1-using-the-connectfour-class" tabindex="-1"><a class="header-anchor" href="#problem-6-1-using-the-connectfour-class" aria-hidden="true">#</a> Problem 6.1: Using the <code>ConnectFour</code> class</h3><p>In this problem, you should practice on using a class we have created for you. The class is called <code>ConnectFour</code>, and it can be used to play the game <a href="https://en.wikipedia.org/wiki/Connect_Four" target="_blank" rel="noopener noreferrer">Connect Four`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Instead of red and yellow bricks, we will use <code>X</code> and <code>O</code> to represent the different players.</p><p>The file <a href="files/labs/ConnectFour.py">ConnectFour.py</a> contains the <code>ConnectFour</code> class you should use. Add the code in that file to your own Python file. Then create a new instance of the class (the object that stores the state of the game) by calling the constructor of the class, e.g.:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>game <span class="token operator">=</span> ConnectFour<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>When you call the constructor, you pass it the number of rows the game should have (in this case <code>7</code>). The game will always have 10 columns.</p><p>To use the game object, you can call different methods on it. The different methods will tell the object to do different things. To tell the object to print itself to the console, call the <code>print_game()</code> method:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>game<span class="token punctuation">.</span>print_game<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This method prints the game as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "What the game looks like printed to the console/terminal/shell. The numbers at the bottom identify the different columns (the first column is 0)." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", lab_6_connect_four_empty)
        }${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", { src: lab_6_connect_four_empty })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>As you can see, the columns are identified through the digits 0-9.</p><p>To tell the object that a player would like to make a move in the game, call the method <code>make_move(column)</code>, and pass it the column into which the <code>X</code> or <code>O</code> (whoever the next player is) should be dropped:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>game<span class="token punctuation">.</span>make_move<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
game<span class="token punctuation">.</span>make_move<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
game<span class="token punctuation">.</span>make_move<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
game<span class="token punctuation">.</span>make_move<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
game<span class="token punctuation">.</span>make_move<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
game<span class="token punctuation">.</span>print_game<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>What the game looks like after the code above has been executed is shown in Figure 2 below. As you can see, <code>X</code> starts.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "What the game looks like after some moves have been made." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", lab_6_connect_four_with_moves)
        }${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", { src: lab_6_connect_four_with_moves })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p><code>print_game()</code> and <code>make_move(column)</code> are not the only methods in the class. The table below lists the methods you can use on the game object, and what they do.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>print_game()</code></td><td>Prints the game to the console/shell/terminal.</td></tr><tr><td><code>make_move(column)</code></td><td>Drops an <code>X</code> or <code>O</code> (the next player) in the specified <code>column</code>. The first (left most) column is <code>0</code>.</td></tr><tr><td><code>get_winner()</code></td><td>Returns <code>&quot;X&quot;</code> if 4 crosses in a row is found in the game. <br> Returns <code>&quot;O&quot;</code> if 4 circles in a row is found in the game. <br> Returns <code>&quot; &quot;</code> (a string with a space) otherwise.</td></tr><tr><td><code>is_column_full(column)</code></td><td>Returns <code>True</code> if the given <code>column</code> is full. <br> Returns <code>False</code> otherwise.</td></tr><tr><td><code>does_column_exist(column)</code></td><td>Returns <code>True</code> if the game contains the given <code>column</code>. <br> Returns <code>False</code> otherwise.</td></tr></tbody></table><p>Given the <code>ConnectFour</code> class, your task is to implement the main application loop for the game. This loop should simply keep asking the user to enter which column to drop the next <code>X</code> or <code>O</code> in until there is a winner (the user will enter the digit of the column).</p><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>To pass, you don&#39;t have to use the methods <code>is_column_full(column)</code> nor <code>does_column_exist(column)</code>, but it is good if you do. These can be used to verify that the user doesn&#39;t try to make a move in a column that is full or a column that doesn&#39;t exists (such as column <code>12</code>).</p></div><h3 id="problem-6-2-implementing-a-class" tabindex="-1"><a class="header-anchor" href="#problem-6-2-implementing-a-class" aria-hidden="true">#</a> Problem 6.2: Implementing a class</h3><p>For this problem, students taking the programs <em>IT Infrastructure and Network Design</em> and <em>Sustainable Building Information Management</em> have a different problem to solve. If you don&#39;t take any of these program (e.g. being an exchange student), solve the problem for the program IT Infrastructure and Network Design.</p><h4 id="sustainable-building-information-management-3" tabindex="-1"><a class="header-anchor" href="#sustainable-building-information-management-3" aria-hidden="true">#</a> Sustainable Building Information Management</h4><p>Develop a software that includes the class <code>Construction_Entity</code>, see the UML schema below.</p><p>As can be seen the data fields of the class are the same as the ones described in the IDS in lab problem 1.7.</p><img style="${
    (0,server_renderer.ssrRenderStyle)({"max-width":"300px"})
  }"${
    (0,server_renderer.ssrRenderAttr)("src", lab_6_construction_entity)
  }><p>The software should be able to instantiate an unknown number of objects using the class by reading all XML-files from a folder, with the structure described by the example below.</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Construction_Entity</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIM3HUS13<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CoClassCode</span><span class="token punctuation">&gt;</span></span>CBH<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CoClassCode</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PropertyName</span><span class="token punctuation">&gt;</span></span>Skrea 13:8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PropertyName</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SpaceArea</span><span class="token punctuation">&gt;</span></span>400<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SpaceArea</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CostAssessment</span><span class="token punctuation">&gt;</span></span>1589457<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CostAssessment</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EnergyConsumption</span><span class="token punctuation">&gt;</span></span>32.74<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EnergyConsumption</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CarbonDioxideEquivalency</span><span class="token punctuation">&gt;</span></span>28626<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CarbonDioxideEquivalency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Construction_Entity</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>You can use the following XML files to test your software:</p><ul><li><a href="files/labs/BIM3HUS12.xml">BIM3HUS12.xml</a></li><li><a href="files/labs/BIM3HUS13.xml">BIM3HUS13.xml</a></li><li><a href="files/labs/BIM3HUS14.xml">BIM3HUS14.xml</a></li><li><a href="files/labs/BIM3HUS24.xml">BIM3HUS24.xml</a></li><li><a href="files/labs/BIMHUS21.xml">BIMHUS21.xml</a></li></ul><p>The software should print the average <code>LCC</code>/<code>SpaceArea</code> for all objects that have the <code>CoClassCode</code> given as input. To implement this, the class <code>Construction_Entity</code>&#39;s constructor should receive the name of an XML file it should read it values from, and the class should also have the method <code>getLCC()</code>, which should compute and return the LCC value for the construction entity (this should then be used by the main program).</p><div class="custom-container tip"><p class="custom-container-title">Getting the value for an attribute</p><p>When you have an instance of an <code>Element</code> or a <code>SubElement</code> that have attributes, you can get the values for the attributes using the <code>attrib</code> property, which is a dict containing the name of all the element&#39;s attributes as keys, and the attribute values as the values in the dict. For example, if the element is <code>&lt;my-element a=&quot;1&quot; b=&quot;2&quot;&gt;</code>, then the element&#39;s <code>attrib</code> property in Python would be <code>{&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: &quot;2&quot;}</code>.</p></div><h4 id="it-infrastructure-and-network-design-3" tabindex="-1"><a class="header-anchor" href="#it-infrastructure-and-network-design-3" aria-hidden="true">#</a> IT Infrastructure and Network Design</h4><p>This problem is about implementing a calculator program as described in problem 4.4, but this time using a class to represent the calculator. Write all your code in a file named <code>lab_06_calculator.py</code>. When you are done, running the code in <code>lab_06_calculator.py</code> should have the very same effect as running the code you wrote for problem 4.4 (the output/input should be the same).</p><p>We recommend you to implement the class piece by piece by following the steps below. If you want to do it in another way, feel free to do so, but the class you create should have the same functionality (name/constructor/methods) as described in the steps below.</p><h5 id="_6-2-1-adding-a-constructor" tabindex="-1"><a class="header-anchor" href="#_6-2-1-adding-a-constructor" aria-hidden="true">#</a> 6.2.1 Adding a constructor</h5><p>Create a class named <code>Calculator</code> with a constructor that is called with no arguments. Inside the constructor you can, for now, simply write <code>pass</code> (a statement in Python doing nothing).</p><p>Although your <code>Calculator</code> class is quite useless at the moment, you should still be able to create new instances of it using the code below:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_calculator <span class="token operator">=</span> Calculator<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="_6-2-2-keeping-track-of-memory-values" tabindex="-1"><a class="header-anchor" href="#_6-2-2-keeping-track-of-memory-values" aria-hidden="true">#</a> 6.2.2 Keeping track of memory values</h5><p>In the constructor, add a parameter (in addition to the <code>self</code> parameter) which contains the calculator&#39;s initial memory value. The constructor should store this initial memory value in a list in the <code>self</code> object.</p><p>In the class, add a method called <code>get_memory_value()</code>, which should return the calculator&#39;s current memory value (i.e. the last value in the list stored in the <code>self</code> object).</p><p>When you are done, your Calculator class should work with the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_calculator <span class="token operator">=</span> Calculator<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
twelve <span class="token operator">=</span> my_calculator<span class="token punctuation">.</span>get_memory_value<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_6-2-3-adding-mathematical-operations" tabindex="-1"><a class="header-anchor" href="#_6-2-3-adding-mathematical-operations" aria-hidden="true">#</a> 6.2.3 Adding mathematical operations</h5><p>In the class, add the method <code>add()</code>, which should be called with a single number as argument. When it is called, the calculator should store a new memory value which should be the sum of the previously stored memory value and the number in the parameter. You can simply store the new memory value at the end of the list in the <code>self</code> object.</p><p>Then add the methods <code>subtract()</code>, <code>multiply()</code> and <code>divide()</code>, which should work in a similar way as the <code>add()</code> method, but instead carry out subtraction, multiplication and division respectively.</p><p>When you are done, your <code>Calculator</code> class should work with the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_calculator <span class="token operator">=</span> Calculator<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># Create a new calculator with 0 in memory.</span>
my_calculator<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># Add 2 to the calculator&#39;s memory.</span>
my_calculator<span class="token punctuation">.</span>multiply<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment"># Multiply the calculator&#39;s memeory by 6.</span>
my_calculator<span class="token punctuation">.</span>subtract<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># Subtract 2 from the calculator&#39;s memory.</span>
my_calculator<span class="token punctuation">.</span>divide<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># Divide the calculator&#39;s memory by 2.</span>
five <span class="token operator">=</span> my_calculator<span class="token punctuation">.</span>get_memory_value<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># Give us the calculator&#39;s memmory.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="_6-2-4-adding-the-undo-operation" tabindex="-1"><a class="header-anchor" href="#_6-2-4-adding-the-undo-operation" aria-hidden="true">#</a> 6.2.4 Adding the undo operation</h5><p>In the class, add the method <code>undo()</code>, which should restore the calculator&#39;s memory value to the memory value it had before the previous <code>add()</code>, <code>subtract()</code>, <code>multiply()</code> or <code>divide()</code> operation, i.e. remove the last value from the list in the <code>self</code> object.</p><p>When you are done, your <code>Calculator</code> class should work with the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_calculator <span class="token operator">=</span> Calculator<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>undo<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>undo<span class="token punctuation">(</span><span class="token punctuation">)</span>
one <span class="token operator">=</span> my_calculator<span class="token punctuation">.</span>get_memory_value<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h5 id="_6-2-5-checking-if-the-undo-operation-can-be-used" tabindex="-1"><a class="header-anchor" href="#_6-2-5-checking-if-the-undo-operation-can-be-used" aria-hidden="true">#</a> 6.2.5 Checking if the <code>undo</code> operation can be used</h5><p>In the class, add the method <code>can_undo()</code>, which should return <code>True</code> if the calculator can go back to a previous memory value, otherwise <code>False</code>, if there is nothing to undo. I.e., check whether the list in the <code>self</code> object only contains the initial memory value or not.</p><p>When you are done, the class should work with the following code.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_calculator <span class="token operator">=</span> Calculator<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
i_should_be_false <span class="token operator">=</span> my_calculator<span class="token punctuation">.</span>can_undo<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>multiply<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
my_calculator<span class="token punctuation">.</span>subtract<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> my_calculator<span class="token punctuation">.</span>can_undo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   my_calculator<span class="token punctuation">.</span>undo<span class="token punctuation">(</span><span class="token punctuation">)</span>
one <span class="token operator">=</span> my_calculator<span class="token punctuation">.</span>get_memory_value<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="_6-2-6-using-the-calculator-class" tabindex="-1"><a class="header-anchor" href="#_6-2-6-using-the-calculator-class" aria-hidden="true">#</a> 6.2.6 Using the <code>Calculator</code> class</h5><p>If you have implemented your <code>Calculator</code> class correctly, it should work well with the code found in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below, which contains the main application loop for the calculator program.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The main application loop for the calculator program implemented with the Calculator class." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }>initial_memory_value <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>int</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter initial memory value: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
calculator <span class="token operator"${
          _scopeId
        }>=</span> Calculator<span class="token punctuation"${
          _scopeId
        }>(</span>initial_memory_value<span class="token punctuation"${
          _scopeId
        }>)</span>

operation <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;&quot;</span>

<span class="token keyword"${
          _scopeId
        }>while</span> operation <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
	
	operation <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter operation (add/sub/mul/div/undo/quit): &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	
	<span class="token keyword"${
          _scopeId
        }>if</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;undo&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
		<span class="token keyword"${
          _scopeId
        }>if</span> calculator<span class="token punctuation"${
          _scopeId
        }>.</span>can_undo<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
			calculator<span class="token punctuation"${
          _scopeId
        }>.</span>undo<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
			<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>calculator<span class="token punctuation"${
          _scopeId
        }>.</span>get_memory_value<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is stored in memory.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>:</span>
			<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;There is nothing to undo.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	<span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
		
		operand <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>int</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter operand: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
		
		<span class="token keyword"${
          _scopeId
        }>if</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;add&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
			calculator<span class="token punctuation"${
          _scopeId
        }>.</span>add<span class="token punctuation"${
          _scopeId
        }>(</span>operand<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;sub&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
			calculator<span class="token punctuation"${
          _scopeId
        }>.</span>subtract<span class="token punctuation"${
          _scopeId
        }>(</span>operand<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;mul&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
			calculator<span class="token punctuation"${
          _scopeId
        }>.</span>multiply<span class="token punctuation"${
          _scopeId
        }>(</span>operand<span class="token punctuation"${
          _scopeId
        }>)</span>
		<span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;div&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
			calculator<span class="token punctuation"${
          _scopeId
        }>.</span>divide<span class="token punctuation"${
          _scopeId
        }>(</span>operand<span class="token punctuation"${
          _scopeId
        }>)</span>
		
		<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>calculator<span class="token punctuation"${
          _scopeId
        }>.</span>get_memory_value<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is stored in memory.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The program finished with &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>calculator<span class="token punctuation"${
          _scopeId
        }>.</span>get_memory_value<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; in memory.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("initial_memory_value "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter initial memory value: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\ncalculator "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" Calculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("initial_memory_value"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\noperation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"\""),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\n\toperation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter operation (add/sub/mul/div/undo/quit): \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"undo\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" calculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("can_undo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\tcalculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("undo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("calculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("get_memory_value"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is stored in memory.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"There is nothing to undo.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t\toperand "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter operand: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"add\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\tcalculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("add"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("operand"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"sub\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\tcalculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("subtract"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("operand"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"mul\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\tcalculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("multiply"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("operand"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"div\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\tcalculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("divide"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("operand"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("calculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("get_memory_value"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is stored in memory.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The program finished with \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("calculator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("get_memory_value"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" in memory.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="present-your-work-5" tabindex="-1"><a class="header-anchor" href="#present-your-work-5" aria-hidden="true">#</a> Present your work</h3><p>Present your work to a teacher at a lab session. Be prepared to explain how your solutions and implementations work, and be prepared to answer any question the teacher might have about your code. It is good to practice this in advance (alone or with a friend).</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The difficulties in this lab is not to write much code (most of the code you&#39;ve written has been given to you), but to understand what code to write, and how that code works. Your oral presentation should reflect that you really understand how the code you&#39;ve written works.</p></div><p>When the teacher is satisfied with your presentation, upload your Python files to the assignment Lab 6 on Canvas (<a href="https://ju.instructure.com/courses/4205/assignments/22882" target="_blank" rel="noopener noreferrer">TSPG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://ju.instructure.com/courses/4199/assignments/22976" target="_blank" rel="noopener noreferrer">TSTG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>). The teacher will then approve you on that assignment.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/laboratory-work.html.vue?vue&type=template&id=313364d2

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/laboratory-work.html.vue

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

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3f30b5d7",
  "path": "/courses/introduction-to-script-programming/laboratory-work.html",
  "title": "Laboratory Work",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Number of credits",
      "slug": "number-of-credits",
      "children": []
    },
    {
      "level": 2,
      "title": "Description",
      "slug": "description",
      "children": []
    },
    {
      "level": 2,
      "title": "Re-examination",
      "slug": "re-examination",
      "children": []
    },
    {
      "level": 2,
      "title": "Individual work",
      "slug": "individual-work",
      "children": []
    },
    {
      "level": 2,
      "title": "Lab 1 - Input, output & loops",
      "slug": "lab-1-input-output-loops",
      "children": [
        {
          "level": 3,
          "title": "Problem 1.1: Computing the sum of 3 numbers",
          "slug": "problem-1-1-computing-the-sum-of-3-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.2: Computing the sum of 5 numbers",
          "slug": "problem-1-2-computing-the-sum-of-5-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.3: Computing the average of multiple numbers",
          "slug": "problem-1-3-computing-the-average-of-multiple-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.4: Displaying a multiplication table",
          "slug": "problem-1-4-displaying-a-multiplication-table",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.5: Displaying a more complex multiplication table",
          "slug": "problem-1-5-displaying-a-more-complex-multiplication-table",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.6: Computing products",
          "slug": "problem-1-6-computing-products",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.7: Computing things",
          "slug": "problem-1-7-computing-things",
          "children": []
        },
        {
          "level": 3,
          "title": "Present your work",
          "slug": "present-your-work",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 2 - Functions and Modules",
      "slug": "lab-2-functions-and-modules",
      "children": [
        {
          "level": 3,
          "title": "Problem 2.1: Writing lyrics",
          "slug": "problem-2-1-writing-lyrics",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.2: Computing averages",
          "slug": "problem-2-2-computing-averages",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.3: Computing sums",
          "slug": "problem-2-3-computing-sums",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.4: Practising multiplication",
          "slug": "problem-2-4-practising-multiplication",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.5: String with numbers",
          "slug": "problem-2-5-string-with-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.6: A different sum",
          "slug": "problem-2-6-a-different-sum",
          "children": []
        },
        {
          "level": 3,
          "title": "Present your work",
          "slug": "present-your-work-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 3 - Conditions",
      "slug": "lab-3-conditions",
      "children": [
        {
          "level": 3,
          "title": "Problem 3.1: Absolute value",
          "slug": "problem-3-1-absolute-value",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.2: Closest to zero",
          "slug": "problem-3-2-closest-to-zero",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.3: Closest to zero (again)",
          "slug": "problem-3-3-closest-to-zero-again",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.4: Finding the highest value",
          "slug": "problem-3-4-finding-the-highest-value",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.5: Counting occurrences",
          "slug": "problem-3-5-counting-occurrences",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.6: Summarizing even integers",
          "slug": "problem-3-6-summarizing-even-integers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.7: A simple calculator",
          "slug": "problem-3-7-a-simple-calculator",
          "children": []
        },
        {
          "level": 3,
          "title": "Present your work",
          "slug": "present-your-work-2",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 4 - Lists & Dicts",
      "slug": "lab-4-lists-dicts",
      "children": [
        {
          "level": 3,
          "title": "Problem 4.1: Comparing two lists",
          "slug": "problem-4-1-comparing-two-lists",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.2: Changing a list",
          "slug": "problem-4-2-changing-a-list",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.3: Computing sums",
          "slug": "problem-4-3-computing-sums",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.4: A less simple calculator",
          "slug": "problem-4-4-a-less-simple-calculator",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.5: Verifying strings",
          "slug": "problem-4-5-verifying-strings",
          "children": []
        },
        {
          "level": 3,
          "title": "Present your work",
          "slug": "present-your-work-3",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 5 - Working with files",
      "slug": "lab-5-working-with-files",
      "children": [
        {
          "level": 3,
          "title": "Problem 5.1: Counting things",
          "slug": "problem-5-1-counting-things",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 5.2: Improving the calculator",
          "slug": "problem-5-2-improving-the-calculator",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 5.3: Doing things",
          "slug": "problem-5-3-doing-things",
          "children": []
        },
        {
          "level": 3,
          "title": "Present your work",
          "slug": "present-your-work-4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lab 6 - Object-oriented programming",
      "slug": "lab-6-object-oriented-programming",
      "children": [
        {
          "level": 3,
          "title": "Problem 6.1: Using the ConnectFour class",
          "slug": "problem-6-1-using-the-connectfour-class",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 6.2: Implementing a class",
          "slug": "problem-6-2-implementing-a-class",
          "children": []
        },
        {
          "level": 3,
          "title": "Present your work",
          "slug": "present-your-work-5",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/introduction-to-script-programming/laboratory-work.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ }),

/***/ 2953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-1-ids.37de759b.png";

/***/ }),

/***/ 8909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-1-lcc-formula.c3626955.png";

/***/ }),

/***/ 8394:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-1-present-value-factor.5cab978f.png";

/***/ }),

/***/ 2807:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-4-delivery-content.aadfa00f.png";

/***/ }),

/***/ 4845:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-4-naming-model.e79bbcc9.png";

/***/ }),

/***/ 959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-5-csv-in-excell.e6daad7e.png";

/***/ }),

/***/ 2826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-6-connect-four-empty.d853bd49.png";

/***/ }),

/***/ 259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-6-connect-four-with-moves.4159ffd0.png";

/***/ }),

/***/ 3563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-6-construction-entity.47638128.png";

/***/ })

};
;
//# sourceMappingURL=6518.app.js.map