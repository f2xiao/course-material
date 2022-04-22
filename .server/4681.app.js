"use strict";
exports.id = 4681;
exports.ids = [4681];
exports.modules = {

/***/ 6834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exercises_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-fundamentals/exercises.html.vue?vue&type=template&id=49b76881



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises" aria-hidden="true">#</a> Exercises</h1><p>There is no laboratory work in this course, but here are some optional exercises you can try to complete before you start implementing the website in your project work. Completing the exercises will give you a gentler start compared to starting to work on the project directly, so you are strongly recommended to complete them .</p><h2 id="exercise-1-html" tabindex="-1"><a class="header-anchor" href="#exercise-1-html" aria-hidden="true">#</a> Exercise 1: HTML</h2><p>The goal with this exercise is to teach you the basics in HTML. Before you start working on it, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/internet-basics/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Internet Basics`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Internet Basics")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/http-and-web-applications/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`HTTP and Web Applications`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("HTTP and Web Applications")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/character-encodings/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Character Encodings`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Character Encodings")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/html/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`HTML`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("HTML")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><h3 id="introduction-to-html" tabindex="-1"><a class="header-anchor" href="#introduction-to-html" aria-hidden="true">#</a> Introduction to HTML</h3><p>HTML is a markup language. It is used to mark what type of data different text represents. For example, to mark that some text is a paragraph, one would write <code>&lt;p&gt;some text&lt;/p&gt;</code>, and to mark that it instead is a header, one would write <code>&lt;h1&gt;some text&lt;/h1&gt;</code> (for subchapters, one would use <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code> or <code>&lt;h6&gt;</code> instead of <code>&lt;h1&gt;</code>, depending on the chapter level).</p><p>Being a markup language, HTML does not specify how web browsers should visualize webpages consisting of HTML code. Some programs do not even visualize webpages at all. This includes programs such as:</p><ul><li>Web spiders indexing webpages (used by search engines such as Google and DuckDuckGo).</li><li>Screen readers and web browser for visually impaired people which read out loud the content on webpages.</li></ul><p>For these programs, it is very important that HTML is used properly. For example, if a website contains a list of items, and you mark it using the <code>&lt;ul&gt;</code> tag and <code>&lt;li&gt;</code> tag, these programs can contain special functionality to process the list. If the website on the other hand marks the list using multiple <code>&lt;p&gt;</code> tags instead, which visually would look similar to a list for humans, that extra functionality cannot be applied by these programs, since they do not recognize the list as a list.</p><p>HTML code should be written in HTML files. That is, files with the file extension <code>.html</code>. Most programs associate files with the file extension <code>.htm</code> as HTML files as well, but that was primarily used a long time ago when <a href="https://en.wikipedia.org/wiki/8.3_filename" target="_blank" rel="noopener noreferrer">some systems only supported file extensions consisting of at most 3 characters`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>Any general text editor can be used to create an HTML file. Here is a short list with some of them:</p><ul><li><a href="https://atom.io/" target="_blank" rel="noopener noreferrer">Atom`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">Sublime`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://visualstudio.microsoft.com/vs/community/" target="_blank" rel="noopener noreferrer">Visual Studio Community`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>Most Operating Systems open HTML files with the default chosen web browser on that system. If you want to open an HTML file in a text editor instead, you might have to:</p><ol><li>Right click on the HTML file with your mouse.</li><li>In the appearing menu, choose <em>Open with</em>.</li><li>Select your desired text editor.</li></ol><p>When a web browser displays an HTML file, it will style the text in the file according to the tags surrounding it. How the text inside the tags are styled is up to the web browser, but most web browsers styles the different tags the same way these days.</p><p>According to <a href="https://gs.statcounter.com/" target="_blank" rel="noopener noreferrer">gs.statcounter.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, Google Chrome is currently the most used web browser. The worldwide market share of web browsers, according to their measurements, is displayed in the table below.</p><table><thead><tr><th>Web Browser</th><th>Worldwide Market Share</th></tr></thead><tbody><tr><td>Chrome</td><td>63.34%</td></tr><tr><td>Safari</td><td>15.06%</td></tr><tr><td>Firefox</td><td>4.48%</td></tr><tr><td>Samsung Internet</td><td>3.77%</td></tr><tr><td>Others</td><td>Remaining %</td></tr></tbody></table><p><a href="https://html.spec.whatwg.org/#toc-semantics" target="_blank" rel="noopener noreferrer">Chapter 4 in the HTML specification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> defines the tags HTML consists of. There you can learn which different tags you can use, and what they are used for. If you find specifications hard to read, you can use one of the many websites teaching HTML, e.g. <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><h3 id="the-task" tabindex="-1"><a class="header-anchor" href="#the-task" aria-hidden="true">#</a> The Task</h3><p>An HTML file can be thought of as a word document, but instead of having a fancy <abbr title="What You See Is What You Get">WYSIWYG</abbr> interface to edit it, you only see the document as raw text (HTML code) in your text editor. If you want to see what it looks like rendered on the screen, you need to open it in a web browser.</p><p>Your task is to create an HTML file containing a copy of the content in this chapter (Exercise 1). The visual appearance of your HTML code will most likely differ a bit to what it look like on this page, but the important part is to markup the text semantically correct. Links should be marked as links, headers should be marked as headers, tables should be marked as tables, etc.</p><p>Good luck! 😊</p><h2 id="exercise-2-css" tabindex="-1"><a class="header-anchor" href="#exercise-2-css" aria-hidden="true">#</a> Exercise 2: CSS</h2><p>The goal with this exercises is to teach you the basics in CSS. Before you start working on it, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/css/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`CSS`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("CSS")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><h3 id="introduction-to-css" tabindex="-1"><a class="header-anchor" href="#introduction-to-css" aria-hidden="true">#</a> Introduction to CSS</h3><p>A web browser&#39;s primary purpose is to render the webpages we visit (&quot;to render&quot; does in this context mean to visualize on the screen). These days, almost all modern web browsers render the different HTML tags the same way, but back in the old days (in the beginning of <a href="https://en.wikipedia.org/wiki/Browser_wars" target="_blank" rel="noopener noreferrer">the browser wars`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>), a common problem for web developers was that their websites looked good in one web browser, but completely wrong in another one.</p><p>If you don&#39;t like the way web browsers render your webpage, you can tell them how to render it by using a style sheet language called CSS. Through it, you can for example specify:</p><ul><li style="${
    (0,server_renderer.ssrRenderStyle)({"color":"red"})
  }">The color of the text.</li><li style="${
    (0,server_renderer.ssrRenderStyle)({"background-color":"yellow"})
  }">The background color of an element.</li><li style="${
    (0,server_renderer.ssrRenderStyle)({"font-size":"200%"})
  }">The size of the text.</li><li style="${
    (0,server_renderer.ssrRenderStyle)({"width":"100px"})
  }">The width of an element.</li></ul><p>CSS code can be applied to HTML elements on a webpage in three different ways:</p><ul style="${
    (0,server_renderer.ssrRenderStyle)({"list-style-type":"square"})
  }"><li>Using the <code>style</code> attribute.</li><li>Using the <code>&lt;style&gt;</code> tag.</li><li>Using the <code>&lt;link&gt;</code> tag and an external CSS file.</li></ul><p>The simplest way to apply CSS is by using the <code>style</code> attribute, and write the CSS code as the value of this attribute. This way, the CSS code will consist of a set of declarations (property-value pairs describing how the element should be styled), and the declarations will only be applied to that element, and the elements it contains.</p><p>The second simplest way to apply CSS code to HTML elements is by using the <code>&lt;style&gt;</code> tag, and write the CSS code inside that one. When using CSS this way, the CSS code consists of a set of rules, where each rule consists of a selector (describing which HTML elements the rule should be applied to) and a set of declarations (describing how the selected HTML elements should be styled). The primary benefit with this approach over the previous approach is that you can use CSS rules to apply the same CSS declarations to multiple different HTML elements at the same time (e.g. change the font size of all paragraphs using a single rule).</p><div style="${
    (0,server_renderer.ssrRenderStyle)({"margin":"0 auto","width":"50%"})
  }"><p>The best way of using CSS is by writing it in an external CSS file (a file with the extension .css), and then link to that document from the HTML document using the <code>&lt;link&gt;</code> tag. This way, your CSS code can be re-used across multiple HTML documents, and it can also be cached by the web browser. When using CSS, it is important to remember that web browsers use the box model. In this model, each HTML element is represented as box (rectangle) consisting of 4 layers. These are, from inside out, content, padding, border and margin.</p></div><h3 id="the-task-1" tabindex="-1"><a class="header-anchor" href="#the-task-1" aria-hidden="true">#</a> The Task</h3><p>Your task is to create an HTML file containing a copy of the content in this chapter (Exercise 2). Try to make the visual appearance of your HTML code as similar to the text on this page as possible. Write your CSS code either in the HTML file or in a separate CSS file.</p><p><span style="${
    (0,server_renderer.ssrRenderStyle)({"font-weight":"bold","font-size":"75%","color":"blue","font-style":"italic","text-decoration":"line-through","background-color":"lime"})
  }">Good luck!</span> 😊</p><h2 id="exercise-3-js" tabindex="-1"><a class="header-anchor" href="#exercise-3-js" aria-hidden="true">#</a> Exercise 3: JS</h2><p>The goal with this exercise is to teach you the basics in JavaScript. Before you start working on it, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/using-shells/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Using Shells`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Using Shells")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/javascript-basics/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`JavaScript Basics`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("JavaScript Basics")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/asynchronous-programming-in-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Asynchronous Programming in JavaScript`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Asynchronous Programming in JavaScript")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Node.js")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><h3 id="getting-started-with-javascript" tabindex="-1"><a class="header-anchor" href="#getting-started-with-javascript" aria-hidden="true">#</a> Getting started with JavaScript</h3><p>To run JavaScript code, you need to have a JavaScript engine that can execute the code for you. The runtime environment Node.js comes with a JavaScript engine you can use to do that. Node.js also contains an environment (modules) you can use to access OS protected resources (network functionality, filesystem, etc..</p><p>Start by downloading and installing Node.js from <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">nodejs.org`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Use the <em>Current</em> version if you want to be able to test the latest features. Use the LTS (Long Term Support) version if you plan to later publish real web applications (many web hosting companies only support the LTS version).</p><p>After you have installed Node.js, you should be able to start a &quot;Read Eval Print&quot;-Loop (REPL) by running the command <code>node</code> in a shell (in Windows you can use the application <em>Windows PowerShell</em> as your shell). This command will simply start a loop that:</p><ol><li>Asks you to enter some JavaScript code.</li><li>Executes the JavaScript code you entered.</li><li>Prints the result of the last statement/expression in your entered code.</li></ol><p>This is a great way to quickly test how JavaScript works, but for real applications, one writes JavaScript code in a <code>.js</code> file, and then asks Node.js to execute the code in this file by running the command <code>node the-path/to-the/file.js</code>.</p><p>To get acquainted with JavaScript, try solving the problems below.</p><h3 id="problem-1-sum" tabindex="-1"><a class="header-anchor" href="#problem-1-sum" aria-hidden="true">#</a> Problem 1: <code>sum()</code></h3><p>Implement the function <code>sum()</code>, which should receive an integer as argument, and returns the sum of the integers between 0 and the argument it receives, e.g. <code>sum(3)</code> → <code>0+1+2+3</code> → <code>6</code>.</p><div class="custom-container tip"><p class="custom-container-title">Showing output</p><p>To print values to the shell, you can use <code>console.log(&quot;This will be printed to the console.&quot;)</code>.</p></div><div class="custom-container danger"><p class="custom-container-title">Return, don&#39;t print!</p><p>As always, functions computing something should <strong>return</strong> the value they compute, and don&#39;t print it directly. Let the caller print the return value instead.</p></div><h3 id="problem-2-sumofnumbers" tabindex="-1"><a class="header-anchor" href="#problem-2-sumofnumbers" aria-hidden="true">#</a> Problem 2: <code>sumOfNumbers()</code></h3><p>Implement the function <code>sumOfNumbers()</code>, which should receive an array with numbers as argument, and returns the sum of the numbers in that array, e.g. <code>sumOfNumbers([5, 2, 8])</code> → <code>5+2+8</code> → <code>15</code>.</p><h3 id="problem-3-getevennumbers" tabindex="-1"><a class="header-anchor" href="#problem-3-getevennumbers" aria-hidden="true">#</a> Problem 3: <code>getEvenNumbers()</code></h3><p>Implement the function <code>getEvenNumbers()</code> which receives an array with numbers and return a new array with only the even numbers, <code>getEvenNumbers([4, 7, 3, 6])</code> → <code>[4, 6]</code>.</p><h3 id="problem-4-count" tabindex="-1"><a class="header-anchor" href="#problem-4-count" aria-hidden="true">#</a> Problem 4: <code>count()</code></h3><p>Create the function <code>count()</code> which returns the number of times it has been called (the first time you call the function it should return 1, the second time you call it it returns 2, etc.). Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> one <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> two <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> three <span class="token operator">=</span>  <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="problem-5-makegetthree" tabindex="-1"><a class="header-anchor" href="#problem-5-makegetthree" aria-hidden="true">#</a> Problem 5: <code>makeGetThree()</code></h3><p>Create the function <code>makeGetThree()</code> which returns a new function that returns the number <code>3</code> when it&#39;s called. Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> getThree <span class="token operator">=</span> <span class="token function">makeGetThree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> three <span class="token operator">=</span> <span class="token function">getThree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="problem-6-makecount" tabindex="-1"><a class="header-anchor" href="#problem-6-makecount" aria-hidden="true">#</a> Problem 6: <code>makeCount()</code></h3><p>Create the function <code>makeCount()</code> which returns a new <code>count()</code> function as specified in Problem 4. Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> firstCount <span class="token operator">=</span> <span class="token function">makeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">firstCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> → <span class="token number">1</span>
<span class="token function">firstCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> → <span class="token number">2</span>
<span class="token keyword">const</span> secondCount <span class="token operator">=</span> <span class="token function">makeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">secondCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> → <span class="token number">1</span>
<span class="token function">secondCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> → <span class="token number">2</span>
<span class="token function">firstCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> → <span class="token number">3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/exercises.html.vue?vue&type=template&id=49b76881

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/exercises.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exercises_html = (__exports__);

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

/***/ 6857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2279bc04",
  "path": "/courses/web-development-fundamentals/exercises.html",
  "title": "Exercises",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Exercise 1: HTML",
      "slug": "exercise-1-html",
      "children": [
        {
          "level": 3,
          "title": "Introduction to HTML",
          "slug": "introduction-to-html",
          "children": []
        },
        {
          "level": 3,
          "title": "The Task",
          "slug": "the-task",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 2: CSS",
      "slug": "exercise-2-css",
      "children": [
        {
          "level": 3,
          "title": "Introduction to CSS",
          "slug": "introduction-to-css",
          "children": []
        },
        {
          "level": 3,
          "title": "The Task",
          "slug": "the-task-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 3: JS",
      "slug": "exercise-3-js",
      "children": [
        {
          "level": 3,
          "title": "Getting started with JavaScript",
          "slug": "getting-started-with-javascript",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1: sum()",
          "slug": "problem-1-sum",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2: sumOfNumbers()",
          "slug": "problem-2-sumofnumbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3: getEvenNumbers()",
          "slug": "problem-3-getevennumbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4: count()",
          "slug": "problem-4-count",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 5: makeGetThree()",
          "slug": "problem-5-makegetthree",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 6: makeCount()",
          "slug": "problem-6-makecount",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/web-development-fundamentals/exercises.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=4681.app.js.map