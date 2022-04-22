"use strict";
exports.id = 9506;
exports.ids = [9506];
exports.modules = {

/***/ 1983:
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
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-notepad.png
var getting_started_notepad = __webpack_require__(6998);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-download-python.png
var getting_started_download_python = __webpack_require__(924);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-install-python.png
var getting_started_install_python = __webpack_require__(2350);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-run-powershell.png
var getting_started_run_powershell = __webpack_require__(1319);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-download-vs-code.png
var getting_started_download_vs_code = __webpack_require__(3205);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-install-vs-code.png
var getting_started_install_vs_code = __webpack_require__(9130);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-vs-code-create-project.png
var getting_started_vs_code_create_project = __webpack_require__(5857);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-vs-code-writing-python.png
var getting_started_vs_code_writing_python = __webpack_require__(986);
// EXTERNAL MODULE: ./src/courses/introduction-to-script-programming/files/exercises/getting-started-vs-code-running-python.png
var getting_started_vs_code_running_python = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exercises.html.vue?vue&type=template&id=244f6e52













function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_SampleAnswer = (0,external_vue_.resolveComponent)("SampleAnswer")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises" aria-hidden="true">#</a> Exercises</h1><p>On this page you find information about the exercises in the course.</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The exercises are not part of any examination test and therefore not mandatory to complete. They consist of programming problems that are a bit easier to solve than the labs, so they serve as good practice problems to solve before attempting to solve the labs.</p><p>Solutions to the exercises will be shown on this page after the tutorial each week going through and discussing sample solutions.</p><h2 id="getting-started-with-python" tabindex="-1"><a class="header-anchor" href="#getting-started-with-python" aria-hidden="true">#</a> Getting started with Python</h2><p>This sub-chapter contains instructions to help you get started with writing and running Python code. All software we use in this course should already be installed on the school&#39;s computers where we have lab sessions in this course (but versions might differ). If you use a school computer in another room you can install the software yourself on that computer through the application <em>Software Center</em>. If you use your own computer, you need to install the software on your own computer yourself, as described further down in this sub-chapter.</p><p>To write Python code on your computer, you need a <em>text editor</em>. A text editor is a program through which you can:</p><ol><li>Open any type of file on your hard drive.</li><li>Display the raw content of a file.</li><li>Change the content of a file in the text editor.</li><li>Save changes made to a file in the text editor back to the hard drive.</li></ol><p>More or less all operating systems (Windows, Linux, Mac, etc.) come with a text editor pre-installed. For example, Windows comes with a text editor called <em>Notepad</em> (<em>Anteckningar</em> in Swedish), as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The Notepad program can be found in Windows by searching for \"Notepad\"." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_notepad)
        } alt="The Notepad program can be found in Windows by searching for &quot;Notepad&quot;."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_notepad,
            alt: "The Notepad program can be found in Windows by searching for \"Notepad\"."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>These text editors work fine, and you may use them in this course if you want to. Just make sure to save your code in a file with the extension <code>.py</code>. But we recommend you to use an Integrated Development Environment (IDE) instead, as described further down in this sub-chapter. IDEs usually makes it much easier to read, write and run code.</p><p>To run Python code, you need to install the <code>python</code> program. The <code>python</code> program will simply take the code you have written in a file and execute it for you. The latest version of the <code>python</code> program can be downloaded and installed from <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">python.org`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Install the version of Python beginning with 3, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below (available for Windows, Mac and Linux).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Downloading the Python program. Make sure to use the version beginning with 3." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_download_python)
        } alt="Downloading the Python program. Make sure to use the version beginning with 3."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_download_python,
            alt: "Downloading the Python program. Make sure to use the version beginning with 3."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The <code>python</code> program can be installed by running the installation program you downloaded. When you run it, make sure to check the option <code>Add Python 3.X to PATH</code>, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Checking this will make it easier to run the Python program from a shell/terminal/console. Click on <code>Install Now</code> to start the installation process.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Running the Python installation program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_install_python)
        } alt="Running the Python installation program."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_install_python,
            alt: "Running the Python installation program."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>To run the Python program, you just need to type <code>python</code> in a shell/terminal/console and then press the enter key. In Windows, you can use <em>Windows PowerShell</em> for this. Windows PowerShell can easily be started by searching for it, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Running the Python program using Windows PowerShell." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_run_powershell)
        } alt="Running the Python program using Windows PowerShell."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_run_powershell,
            alt: "Running the Python program using Windows PowerShell."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Just running the <code>python</code> command will start Python&#39;s read-eval-print-loop, where you can enter Python code and have it executed when you press the enter key, but the <code>python</code> command can also be used to execute Python code written in a file. How to do that is not explained here, but in the lecture `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-introduction/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Introduction`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Introduction")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`.</p><p>You do not need to do anything more than this to start writing and running Python code, so it is quite easy to get started. But back to that IDE we mentioned earlier.</p><p><em>Visual Studio Code</em> is an IDE you can use to write and run your Python code. Some of the benefits with this IDE compared to doing as described above are:</p><ul><li>Syntax highlighting of code, making it easier to read the code and to discover mistakes.</li><li>Automatic indentation, so you do not need to enter spaces/tabs for indentation yourself.</li><li>Run button, which makes it very easy to run your Python code.</li><li>Debug capabilities making it easy to figure out why the code does not work the way you want it to.</li></ul><p>Visual Studio Code (available for Windows, Mac and Linux) can be downloaded and installed for free from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Downloading Visual Studio Code." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_download_vs_code)
        } alt="Downloading Visual Studio Code."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_download_vs_code,
            alt: "Downloading Visual Studio Code."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Install Visual Studio Code by running the installation program you just downloaded. During the installation process, check the option <code>Add to PATH</code>, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. This will make it possible to start Visual Studio Code from a shell using the <code>code</code> command. Feel free to check the other options if you want.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Installing Visual Studio Code." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_install_vs_code)
        } alt="Installing Visual Studio Code."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_install_vs_code,
            alt: "Installing Visual Studio Code."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>When the installation process has completed, start Visual Studio Code and open a new project folder you can use to store your Python files in, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Creating a new project folder in Visual Studio Code." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_vs_code_create_project)
        } alt="Creating a new project folder in Visual Studio Code."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_vs_code_create_project,
            alt: "Creating a new project folder in Visual Studio Code."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Then create a new Python file in your project folder, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Creating a new Python file in Visual Studio Code and installing the Python extension." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_vs_code_writing_python)
        } alt="Creating a new Python file in Visual Studio Code and installing the Python extension."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_vs_code_writing_python,
            alt: "Creating a new Python file in Visual Studio Code and installing the Python extension."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The first time Visual Studio Code encounters a Python file, it will suggest you install an extension to it containing features for working with Python files. Install that extension. You should then be able to run your Python code by clicking on the ▶ button shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Running Python files in Visual Studio Code." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", getting_started_vs_code_running_python)
        } alt="Running Python files in Visual Studio Code."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: getting_started_vs_code_running_python,
            alt: "Running Python files in Visual Studio Code."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>That&#39;s it! Now you can write your Python code in files using Visual Studio Code and then click on the ▶ button to run it.</p><h2 id="exercise-0-input-output" tabindex="-1"><a class="header-anchor" href="#exercise-0-input-output" aria-hidden="true">#</a> Exercise 0: Input &amp; output</h2><p>Before you start working on these exercises, you are recommended to watch the following recorded lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/introduction-to-computers-and-programming/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Introduction to Computers and Programming`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Introduction to Computers and Programming")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
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
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-introduction/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Introduction`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Introduction")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-basics-part-1/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Basics - Part 1`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Basics - Part 1")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>In these exercises you will practice on using the following in Python:</p><ul><li>Statements</li><li>Expressions</li><li>Values</li><li>Variables</li><li>Reading input from the user running your program</li><li>Printing output to the user running your program</li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>There is no Lab 0; Exercise 0 and Exercise 1 will both prepare you for Lab 1.</p></div><h3 id="problem-0-1-producing-output" tabindex="-1"><a class="header-anchor" href="#problem-0-1-producing-output" aria-hidden="true">#</a> Problem 0.1: Producing output</h3><p>The circumference of a circle can be computed with the formula <code>2*r*𝜋</code>, where:</p><ul><li><code>r</code> is the radius of the circle.</li><li><code>𝜋</code> is <code>3.14</code>.</li></ul><p>Create a program in a file called <code>circle-circumference-computer.py</code> that computes the circumference of a circle with the radius <code>7</code> and then prints the circle&#39;s circumference.</p><p>When you are done, the output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below (if <code>𝜋</code> is <code>3.14</code>).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The output the program should produce." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the circumference of a circle.
The circumference of a circle with radius 7 is 43.96.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the circumference of a circle.\nThe circumference of a circle with radius 7 is 43.96.\n")
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
  _push(`<div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Here are some code pieces hinting about what you need to use to implement the program:</p><ul><li><code>str(123)</code> to convert the number <code>123</code> to the string <code>&quot;123&quot;</code>.</li><li><code>&quot;abc&quot; + &quot;def&quot;</code> to create the string <code>&quot;abcdef&quot;</code></li><li><code>print(&quot;Hello&quot;)</code> to print the string <code>&quot;Hello&quot;</code> followed by a line break to the console.</li></ul></div><div class="custom-container danger"><p class="custom-container-title">Don&#39;t!</p><p>A program producing the output in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above can be implemented like this:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;This program computes the circumference of a circle.&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The circumference of a circle with radius 7 is 43.96.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>But this is of course not acceptable, because then <em>you</em> have computed the circumference. Instead, it&#39;s the computer that should compute the circumference. If you implement your program in a good way, changing the <code>7</code> at <em>one place</em> in your code to <code>14</code> would produce the correct output for the radius <code>14</code> (you should not need to change the <code>7</code> to <code>14</code> at multiple places in your code).</p></div><h4 id="sample-answer" tabindex="-1"><a class="header-anchor" href="#sample-answer" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise0ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the circumference of a circle.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>7</span>
pi <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>3.14</span>
circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>pi
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the circumference of a circle.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nradius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                (0,external_vue_.createTextVNode)("\npi "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3.14"),
                (0,external_vue_.createTextVNode)("\ncircumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("pi\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h3 id="problem-0-2-reading-input" tabindex="-1"><a class="header-anchor" href="#problem-0-2-reading-input" aria-hidden="true">#</a> Problem 0.2: Reading input</h3><p>Even if the program created in Problem 0.1 works, it is not that useful because it computes and displays the same output each time you run the program. It is an example of a program that doesn&#39;t receive any input; it only produces output, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of how the program from Problem 0.1 works." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tprogram[Program]\n\toutput(Output)\n\tprogram -- Produces --> output\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tprogram[Program]\n\toutput(Output)\n\tprogram -- Produces --> output\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>This exercise is about improving the program from Problem 0.1 so it can compute circumferences for circles with other radiuses as well. When the program runs now, the first thing it should do is to ask the user to enter the radius of the circle whose circumference should be computed. After that, the program should function as before (i.e. compute the circumference and then display it to the user).</p><p>When you&#39;re done, the program will not only produce output, but also receive input, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of how the program works." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tinput(Input)\n\tprogram[Program]\n\toutput(Output)\n\tinput -- Is entered by the user to --> program\n\tprogram -- Produces --> output\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tinput(Input)\n\tprogram[Program]\n\toutput(Output)\n\tinput -- Is entered by the user to --> program\n\tprogram -- Produces --> output\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows sample input/output when running the program. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program.." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the circumference of a circle.
Enter the radius of the circle: 9
The circumference of a circle with radius 9 is 56.52.
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the circumference of a circle.\nEnter the radius of the circle: 9\nThe circumference of a circle with radius 9 is 56.52.\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>In your program you don&#39;t need to have any error handling; you can expect the user to actually enter a number when you ask the user to enter the radius of the circle. If the user enters something else (e.g. <code>hello</code>), your program will probably crash, but that is fine.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Here are some functions you might need to use to implement the program:</p><ul><li><code>input(&quot;Enter number: &quot;)</code> to print <code>Enter number: </code> and then read some input entered by the user.</li><li><code>int(&quot;123&quot;)</code> to convert the string <code>123</code> to the integer <code>123</code>.</li><li><code>float(&quot;12.3&quot;)</code> to convert the string <code>12.3</code> to the float <code>12.3</code>.</li></ul></div><h4 id="sample-answer-1" tabindex="-1"><a class="header-anchor" href="#sample-answer-1" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise0ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the circumference of a circle.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
pi <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>3.14</span>
circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>pi
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the circumference of a circle.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nradius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\npi "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3.14"),
                (0,external_vue_.createTextVNode)("\ncircumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("pi\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h3 id="problem-0-3-celsius-to-fahrenheit" tabindex="-1"><a class="header-anchor" href="#problem-0-3-celsius-to-fahrenheit" aria-hidden="true">#</a> Problem 0.3: Celsius to fahrenheit</h3><p>Fahrenheit and Celsius are both units used to measure the temperature of things (how hot they are). A temperature expressed in Celsius (<code>C</code>) can be converted to a temperature expressed in Fahrenheit (<code>F</code>) using the formula <code>F = C*9/5 + 32</code>.</p><p>Create a program in a file called <code>celsius-to-fahrenheit-converter.py</code> that asks the user to enter a temperature in Celsius and then computes and prints the temperature in Fahrenheit. Test run your program and verify that it prints <code>50</code> for the input <code>10</code>.</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program converts Celsius to Fahrenheit.
Enter the number of Celsius: 10
10 Celsius is equal to 50 Fahrenheit.
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program converts Celsius to Fahrenheit.\nEnter the number of Celsius: 10\n10 Celsius is equal to 50 Fahrenheit.\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You don&#39;t need to have any error handling; you can expect the user to actually enter a number when she&#39;s asked to enter the temperature in Celsius.</p></div><h4 id="sample-answer-2" tabindex="-1"><a class="header-anchor" href="#sample-answer-2" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise0ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program converts Celsius to Fahrenheit.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
C <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the number of Celsius: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
F <span class="token operator"${
          _scopeId
        }>=</span> C<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>9</span><span class="token operator"${
          _scopeId
        }>/</span><span class="token number"${
          _scopeId
        }>5</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>32</span>
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>C<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; Celsius is equal to &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>F<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; Fahrenheit.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program converts Celsius to Fahrenheit.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nC "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the number of Celsius: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nF "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" C"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "9"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "32"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("C"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" Celsius is equal to \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("F"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" Fahrenheit.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-0-4-fahrenheit-to-celsius" tabindex="-1"><a class="header-anchor" href="#problem-0-4-fahrenheit-to-celsius" aria-hidden="true">#</a> Problem 0.4: Fahrenheit to celsius</h3><p>A temperature expressed in Fahrenheit (<code>F</code>) can be converted to a temperature expressed in Celsius (<code>C</code>) using the formula <code>C = (F-32) * 5/9</code>.</p><p>Create a program in a file called <code>fahrenheit-to-celsius-converter.py</code> that asks the user to enter a temperature in Fahrenheit and then computes and prints the temperature in Celsius. Test run your program and verify that it prints <code>10</code> for the input <code>50</code>.</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program converts Fahrenheit to Celsius.
Enter the number of Fahrenheit: 50
50 Fahrenheit is equal to 10 Celsius.
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program converts Fahrenheit to Celsius.\nEnter the number of Fahrenheit: 50\n50 Fahrenheit is equal to 10 Celsius.\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You don&#39;t need to have any error handling; you can expect the user to actually enter a number when she&#39;s asked to enter the temperature in Fahrenheit.</p></div><h4 id="sample-answer-3" tabindex="-1"><a class="header-anchor" href="#sample-answer-3" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise0ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program converts Fahrenheit to Celsius.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
F <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the number of Fahrenheit: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
C <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>(</span>F<span class="token operator"${
          _scopeId
        }>-</span><span class="token number"${
          _scopeId
        }>32</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>*</span> <span class="token number"${
          _scopeId
        }>5</span><span class="token operator"${
          _scopeId
        }>/</span><span class="token number"${
          _scopeId
        }>9</span>
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>F<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; Fahrenheit is equal to &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>C<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; Celsius.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program converts Fahrenheit to Celsius.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nF "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the number of Fahrenheit: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nC "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("F"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "32"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "9"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("F"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" Fahrenheit is equal to \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("C"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" Celsius.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-0-5-lengths-of-events" tabindex="-1"><a class="header-anchor" href="#problem-0-5-lengths-of-events" aria-hidden="true">#</a> Problem 0.5: Lengths of events</h3><p>Events stored in a calendar program usually contains information about which day each event takes place and when the event starts and ends that day. To compute during how long time an event runs, one can &quot;simply&quot; subtract the end time from the start time. This is not straight forward since we humans express times using multiple units (hours, minutes and seconds).</p><p>Create a program in a file called <code>time-length-computer.py</code> that first asks the user to enter a number representing the start hour of the event, and then asks the user to enter another number representing the start minute of the event. The program should then ask the user to enter the end hour of the event, and then the end minute of the event. You program should then compute during how long time (how many hours and how many minutes) the event runs.</p><p>To compute the length of the event you can start by expressing the start time in a single unit (i.e. total number of minutes passed since 00:00) and expressing the end time in a single unit (the same unit as for the start time), and then you can simply do the subtraction to compute the length of the event in minutes. Then you need to convert the total number of minutes back to the minutes and hours units, so you can display the length of the event in HH:MM format.</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the length of an event.
Enter start hour of the event: 10
Enter start minute of the event: 45
Enter end hour of the event: 12
Enter end minute of the event: 15
The length of the event is: 1:30.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the length of an event.\nEnter start hour of the event: 10\nEnter start minute of the event: 45\nEnter end hour of the event: 12\nEnter end minute of the event: 15\nThe length of the event is: 1:30.\n")
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
  _push(`<h4 id="sample-answer-4" tabindex="-1"><a class="header-anchor" href="#sample-answer-4" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise0ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the length of an event.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

start_hour <span class="token operator"${
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
        }>&quot;Enter start hour of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
start_minute <span class="token operator"${
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
        }>&quot;Enter start minute of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
end_hour <span class="token operator"${
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
        }>&quot;Enter end hour of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
end_minute <span class="token operator"${
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
        }>&quot;Enter end minute of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

start_minutes <span class="token operator"${
          _scopeId
        }>=</span> start_minute <span class="token operator"${
          _scopeId
        }>+</span> start_hour<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span>
end_minutes <span class="token operator"${
          _scopeId
        }>=</span> end_minute <span class="token operator"${
          _scopeId
        }>+</span> end_hour<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span>

minutes <span class="token operator"${
          _scopeId
        }>=</span> end_minutes <span class="token operator"${
          _scopeId
        }>-</span> start_minutes

length_hour <span class="token operator"${
          _scopeId
        }>=</span> minutes <span class="token operator"${
          _scopeId
        }>//</span> <span class="token number"${
          _scopeId
        }>60</span>
length_minute <span class="token operator"${
          _scopeId
        }>=</span> minutes <span class="token operator"${
          _scopeId
        }>-</span> length_hour<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The length of the event is: &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>length_hour<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;:&quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>length_minute<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the length of an event.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nstart_hour "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter start hour of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nstart_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter start minute of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nend_hour "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter end hour of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nend_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter end minute of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nstart_minutes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" start_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" start_hour"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\nend_minutes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" end_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" end_hour"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\n\nminutes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" end_minutes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createTextVNode)(" start_minutes\n\nlength_hour "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" minutes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "//"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\nlength_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" minutes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createTextVNode)(" length_hour"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The length of the event is: \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("length_hour"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\":\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("length_minute"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-0-6-lengths-of-events-seconds" tabindex="-1"><a class="header-anchor" href="#problem-0-6-lengths-of-events-seconds" aria-hidden="true">#</a> Problem 0.6: Lengths of events (seconds)</h3><p>This problem is a continuation of Problem 0.6. This time the start time and end time in the program are not only expressed in hours and minutes, but also seconds. To solve this problem, you need to do something similar to what you did in Problem 0.6, but now you have 3 units (hours, minutes and seconds) instead of just 2.</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the length of an event.
Enter start hour of the event: 10
Enter start minute of the event: 45
Enter start second of the event: 30
Enter end hour of the event: 12
Enter end minute of the event: 15
Enter end second of the event: 15
The length of the event is: 1:29:45.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the length of an event.\nEnter start hour of the event: 10\nEnter start minute of the event: 45\nEnter start second of the event: 30\nEnter end hour of the event: 12\nEnter end minute of the event: 15\nEnter end second of the event: 15\nThe length of the event is: 1:29:45.\n")
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
  _push(`<h4 id="sample-answer-5" tabindex="-1"><a class="header-anchor" href="#sample-answer-5" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise0ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the length of an event.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

start_hour <span class="token operator"${
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
        }>&quot;Enter start hour of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
start_minute <span class="token operator"${
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
        }>&quot;Enter start minute of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
start_second <span class="token operator"${
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
        }>&quot;Enter start second of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
end_hour <span class="token operator"${
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
        }>&quot;Enter end hour of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
end_minute <span class="token operator"${
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
        }>&quot;Enter end minute of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
end_second <span class="token operator"${
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
        }>&quot;Enter end second of the event: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

start_seconds <span class="token operator"${
          _scopeId
        }>=</span> start_second <span class="token operator"${
          _scopeId
        }>+</span> start_minute<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span> <span class="token operator"${
          _scopeId
        }>+</span> start_hour<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span><span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span>
end_seconds <span class="token operator"${
          _scopeId
        }>=</span> end_second <span class="token operator"${
          _scopeId
        }>+</span> end_minute<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span> <span class="token operator"${
          _scopeId
        }>+</span> end_hour<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span><span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span>

seconds <span class="token operator"${
          _scopeId
        }>=</span> end_seconds <span class="token operator"${
          _scopeId
        }>-</span> start_seconds

length_hour <span class="token operator"${
          _scopeId
        }>=</span> seconds <span class="token operator"${
          _scopeId
        }>//</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>60</span><span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span><span class="token punctuation"${
          _scopeId
        }>)</span>

remaining_seconds <span class="token operator"${
          _scopeId
        }>=</span> seconds <span class="token operator"${
          _scopeId
        }>-</span> length_hour<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span><span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span>

length_minute <span class="token operator"${
          _scopeId
        }>=</span> remaining_seconds <span class="token operator"${
          _scopeId
        }>//</span> <span class="token number"${
          _scopeId
        }>60</span>

length_second <span class="token operator"${
          _scopeId
        }>=</span> remaining_seconds <span class="token operator"${
          _scopeId
        }>-</span> length_minute<span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>60</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The length of the event is: &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>length_hour<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;:&quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>length_minute<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;:&quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>length_second<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the length of an event.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nstart_hour "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter start hour of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nstart_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter start minute of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nstart_second "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter start second of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nend_hour "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter end hour of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nend_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter end minute of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nend_second "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter end second of the event: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nstart_seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" start_second "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" start_minute"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" start_hour"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\nend_seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" end_second "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" end_minute"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" end_hour"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\n\nseconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" end_seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createTextVNode)(" start_seconds\n\nlength_hour "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "//"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nremaining_seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createTextVNode)(" length_hour"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\n\nlength_minute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" remaining_seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "//"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\n\nlength_second "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" remaining_seconds "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createTextVNode)(" length_minute"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The length of the event is: \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("length_hour"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\":\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("length_minute"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\":\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("length_second"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="exercise-1-loops" tabindex="-1"><a class="header-anchor" href="#exercise-1-loops" aria-hidden="true">#</a> Exercise 1: Loops</h2><p>Before you start working on these exercises, you are recommended to watch the following recorded lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-basics-part-2/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Basics - Part 2`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Basics - Part 2")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>For loops</li><li>Ranges</li></ul><h3 id="problem-1-1-repeated-statements" tabindex="-1"><a class="header-anchor" href="#problem-1-1-repeated-statements" aria-hidden="true">#</a> Problem 1.1: Repeated statements</h3><p>In Problem 0.2 you created a program that asked the user to enter the radius of a circle and which then computed and printed the circumference of it. This exercise is about doing the same thing three times. Do not use any loop, but simply copy-paste the statements from your previous solution.</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the circumferences of circles.
Enter the radius of the circle: 9
The circumference of a circle with radius 9 is 56.52.
Enter the radius of the circle: 3
The circumference of a circle with radius 3 is 18.84.
Enter the radius of the circle: 5
The circumference of a circle with radius 5 is 31.4.
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
              (0,external_vue_.createVNode)("code", null, "This program computes the circumferences of circles.\nEnter the radius of the circle: 9\nThe circumference of a circle with radius 9 is 56.52.\nEnter the radius of the circle: 3\nThe circumference of a circle with radius 3 is 18.84.\nEnter the radius of the circle: 5\nThe circumference of a circle with radius 5 is 31.4.\n")
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
  _push(`<h4 id="sample-answer-6" tabindex="-1"><a class="header-anchor" href="#sample-answer-6" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the circumference of circles.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

pi <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>3.14</span>

radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>pi
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>pi
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>pi
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the circumference of circles.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\npi "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3.14"),
                (0,external_vue_.createTextVNode)("\n\nradius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\ncircumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("pi\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nradius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\ncircumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("pi\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nradius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\ncircumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("pi\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n")
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
  _push(`<h3 id="problem-1-2-repeated-execution" tabindex="-1"><a class="header-anchor" href="#problem-1-2-repeated-execution" aria-hidden="true">#</a> Problem 1.2: Repeated execution</h3><p>Looking at your code from Problem 1.1, you probably realize that you repeatedly did the same thing three times. When you repeatedly do the same thing many times, you should rather use a loop to repeatedly execute the same statements multiple times instead of copy-pasting the statements multiple times, because copy-pasting code is usually bad.</p><p>So, why is it bad to copy-paste code? Well, if you need to change the code in the future, you need to change it at multiple places. For example, now your program might produce output in English, but maybe you want it to produce output in Swedish in the future, and if you have copy-pasted your code, you have many lines of code to translate. Or maybe the code you copy-pasted contained a bug (didn&#39;t function properly). Then when the bug is discovered you need to change code at many different places to eliminate the bug.</p><p>So, instead of copy-pasting code you can use a loop to tell Python to repeatedly execute the same lines of code many times. One type of loops you can use is the <code>for</code>, which iterates over the values in a sequence of some kind. One type of sequence in Python is a list, which can be created using an expression like <code>[4, 7, 2, 5]</code> (a list containing the values <code>4</code>, <code>7</code>, <code>2</code> and <code>5</code>). A for loop iterating over the values in this list would do 4 iterations (since the list contains 4 values).</p><p>Implement the program in Problem 1.1 using a for loop. To make the for loop iterate 3 times, use a list containing 3 values (we don&#39;t really care about what those values are since we won&#39;t use them in the iterations).</p><p>When you&#39;re done, your program should function the same way as before (as described in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above).</p><h4 id="sample-answer-7" tabindex="-1"><a class="header-anchor" href="#sample-answer-7" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the circumference of circles.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

pi <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>3.14</span>

<span class="token keyword"${
          _scopeId
        }>for</span> whatever <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;three&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;random&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;values&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>pi
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the circumference of circles.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\npi "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3.14"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" whatever "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"three\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"random\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"values\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    radius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    circumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("pi\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h3 id="problem-1-3-dynamic-number-of-iterations" tabindex="-1"><a class="header-anchor" href="#problem-1-3-dynamic-number-of-iterations" aria-hidden="true">#</a> Problem 1.3: Dynamic number of iterations</h3><p>The program in Problem 1.2 works great, but it always asks the user for the radius of 3 different circles. What if the user needs just 2? Or maybe 7? Or 20? For these cases we need the user to first tell the program how many times the loop should iterate.</p><p>So, the user might tell us that we need to iterate 4 times. How do we create a sequence that contains 4 values we can iterate over? We can use the <code>range()</code> function for that. When we call <code>range()</code> we can pass it the number 4 (i.e. <code>range(4)</code>), and it will return back a sequence to us with 4 values (the values will be <code>0</code>, <code>1</code>, <code>2</code> and <code>3</code>, but we still don&#39;t really care about what they values are, we just want 4 values).</p><p>The sequence we get back from the <code>range()</code> is what we will use to iterate over in our for loop.</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the circumferences of some circles.
Enter the number of circumferences you want to compute: 4
Enter the radius of the circle: 9
The circumference of a circle with radius 9 is 56.52.
Enter the radius of the circle: 3
The circumference of a circle with radius 3 is 18.84.
Enter the radius of the circle: 5
The circumference of a circle with radius 5 is 31.4.
Enter the radius of the circle: 3
The circumference of a circle with radius 3 is 18.84.
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the circumferences of some circles.\nEnter the number of circumferences you want to compute: 4\nEnter the radius of the circle: 9\nThe circumference of a circle with radius 9 is 56.52.\nEnter the radius of the circle: 3\nThe circumference of a circle with radius 3 is 18.84.\nEnter the radius of the circle: 5\nThe circumference of a circle with radius 5 is 31.4.\nEnter the radius of the circle: 3\nThe circumference of a circle with radius 3 is 18.84.\n")
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You don&#39;t need to have any error handling; you can expect the user to actually enter an integer when she&#39;s asked to enter an integer.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Sample usage of the <code>range()</code> function:</p><ul><li><code>range(0)</code> --&gt; An empty sequence</li><li><code>range(3)</code> --&gt; A sequence with <code>0</code>, <code>1</code> and <code>2</code></li><li><code>range(5)</code> --&gt; A sequence with <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code> and <code>4</code></li></ul></div><h4 id="sample-answer-8" tabindex="-1"><a class="header-anchor" href="#sample-answer-8" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the circumference of circles.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

pi <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>3.14</span>

number_of_circumferences <span class="token operator"${
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
        }>&quot;Enter the number of circumferences you want to compute: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>for</span> whatever <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_of_circumferences<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>pi
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the circumference of circles.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\npi "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3.14"),
                (0,external_vue_.createTextVNode)("\n\nnumber_of_circumferences "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the number of circumferences you want to compute: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" whatever "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_of_circumferences"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    radius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    circumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("pi\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-1-4-computing-a-sum-the-bad-way" tabindex="-1"><a class="header-anchor" href="#problem-1-4-computing-a-sum-the-bad-way" aria-hidden="true">#</a> Problem 1.4: Computing a sum the bad way</h3><p>Create a program that computes and prints the sum of the integers between 0 and 15 without a loop. Do something like this:</p><ol><li>Create a variable starting on <code>0</code></li><li>Write a statement that increments this variable by <code>0</code></li><li>Write a statement that increments this variable by <code>1</code></li><li>Write a statement that increments this variable by <code>2</code></li><li>...</li><li>Write a statement that increments this variable by <code>15</code></li></ol><p>After that you have computed the sum of the integers between 0 and 15 and can print it on the screen.</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the sum of the integers between 0 and 15.
The sum of the integers between 0 and 15 is 120.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the sum of the integers between 0 and 15.\nThe sum of the integers between 0 and 15 is 120.\n")
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
  _push(`<h4 id="sample-answer-9" tabindex="-1"><a class="header-anchor" href="#sample-answer-9" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the sum of the integers between 0 and 15.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>2</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>3</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>4</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>5</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>6</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>7</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>8</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>9</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>10</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>11</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>12</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>13</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>14</span>
<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>15</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The sum of the integers between 0 and 15 is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the sum of the integers between 0 and 15.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "6"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "8"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "9"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "11"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "12"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "13"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "14"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "15"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The sum of the integers between 0 and 15 is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-1-5-computing-a-sum-the-good-way" tabindex="-1"><a class="header-anchor" href="#problem-1-5-computing-a-sum-the-good-way" aria-hidden="true">#</a> Problem 1.5: Computing a sum the good way</h3><p>The program in the previous exercise contains a lot of statements looking like this:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>the_variable <span class="token operator">=</span> the_variable <span class="token operator">+</span> x
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Where <code>x</code> is an integer between 0 and 15. Instead of having this statement repeated over and over again one can just use it in a loop that repeatedly executes the statement. You just need to make sure that the loop iterates over the values <code>0</code>, <code>1</code>, <code>2</code>, ... <code>14</code> and <code>15</code>(use the <code>range()</code> function to create a sequence containing these values, or simply create a new list containing them), and for each iteration add the current value we are iterating over to <code>the_variable</code>.</p><h4 id="sample-answer-10" tabindex="-1"><a class="header-anchor" href="#sample-answer-10" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the sum of the integers between 0 and 15.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

last_term <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>15</span>

<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

<span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_term <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> i

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The sum of the integers between 0 and &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the sum of the integers between 0 and 15.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nlast_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "15"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" i\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The sum of the integers between 0 and \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-1-6-computing-a-sum" tabindex="-1"><a class="header-anchor" href="#problem-1-6-computing-a-sum" aria-hidden="true">#</a> Problem 1.6: Computing a sum</h3><p>The program in Problem 1.5 works great, but it always computes the sum of the integers between 0 and 15. What if the user wants to compute the sum of the integers between 0 and 10? Or 0 and 90?</p><p>Change the program from the previous exercise to first ask the user which the highest number in the sum should be. Then make use of this number when you call the <code>range()</code> function, so the sequence of values you get back contains all integers between 0 and that number (including).</p><p>When you are done, the input/output of the program should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>This program computes the sum of the integers between 0 and another integer.
Enter the other integer: 5
The sum of the integers between 0 and 5 is 15.
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "This program computes the sum of the integers between 0 and another integer.\nEnter the other integer: 5\nThe sum of the integers between 0 and 5 is 15.\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You don&#39;t need to have any error handling; you can expect the user to actually enter an integer when she&#39;s asked to enter an integer.</p></div><h4 id="sample-answer-11" tabindex="-1"><a class="header-anchor" href="#sample-answer-11" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the sum of the integers between 0 and another integer.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

last_term <span class="token operator"${
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
        }>&quot;Enter the other integer: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

<span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_term <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> i

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The sum of the integers between &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>first_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; and &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the sum of the integers between 0 and another integer.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nlast_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the other integer: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" i\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The sum of the integers between \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" and \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-1-7-computing-a-harder-sum" tabindex="-1"><a class="header-anchor" href="#problem-1-7-computing-a-harder-sum" aria-hidden="true">#</a> Problem 1.7: Computing a harder sum</h3><p>The program in Problem 1.6 lets the user enter the upper bound for the sum, and the lower bound is always 0. What if the user wants to use something else than 0? Such as computing the sum of the integers between 10 and 20? Or 3 and 64?</p><p>Change the program from the previous exercise to first ask the user which the lowest number in the sum should be, and then asks the user which the highest number in the sum should be. Then make use of these numbers when you call the <code>range()</code> function, so the sequence of numbers you get back contains the integers between the lowest numbers and the highest number (including) the user entered (you need to pass two numbers to the range() function).</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You don&#39;t need to have any error handling; you can expect the user to actually enter an integer when she&#39;s asked to enter an integer.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Sample usage of the <code>range()</code> function:</p><ul><li><code>range(0, 3)</code> --&gt; A sequence with <code>0</code>, <code>1</code> and <code>2</code></li><li><code>range(3, 6)</code> --&gt; A sequence with <code>3</code>, <code>4</code>, and <code>5</code></li><li><code>range(1, 5)</code> --&gt; A sequence with <code>1</code>, <code>2</code>, <code>3</code>, and <code>4</code></li></ul></div><h4 id="sample-answer-12" tabindex="-1"><a class="header-anchor" href="#sample-answer-12" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the sum of the integers between two integers.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

first_term <span class="token operator"${
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
        }>&quot;Enter the first integer: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
last_term <span class="token operator"${
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
        }>&quot;Enter the last integer: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

<span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>first_term<span class="token punctuation"${
          _scopeId
        }>,</span> last_term <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> i

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The sum of the integers between &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>first_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; and &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the sum of the integers between two integers.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nfirst_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the first integer: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nlast_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the last integer: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" last_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" i\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The sum of the integers between \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" and \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h3 id="problem-1-8-computing-a-harder-sum-again" tabindex="-1"><a class="header-anchor" href="#problem-1-8-computing-a-harder-sum-again" aria-hidden="true">#</a> Problem 1.8: Computing a harder sum (again)</h3><p>This problem is about creating a program similar to the one in Problem 1.7, but you may only pass one number to the <code>range()</code> function. This means that the sequence with numbers you get back always will start on 0, so, you need to change other parts of your program to make it work as expected.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The solution you end up in for this problem is worse than the solution you got in Problem 1.7, but it serves as a good example of how programming/problem solving works: there exists many different ways to solve a problem!</p></div><h4 id="sample-answer-13" tabindex="-1"><a class="header-anchor" href="#sample-answer-13" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise1ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the sum of the integers between two integers.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

first_term <span class="token operator"${
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
        }>&quot;Enter the first integer: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
last_term <span class="token operator"${
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
        }>&quot;Enter the last integer: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

<span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_term <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> i

<span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>first_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>-</span> i

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The sum of the integers between &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>first_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; and &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_term<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the sum of the integers between two integers.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nfirst_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the first integer: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nlast_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the last integer: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_term "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" i\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createTextVNode)(" i\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The sum of the integers between \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" and \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_term"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h2 id="exercise-2-functions" tabindex="-1"><a class="header-anchor" href="#exercise-2-functions" aria-hidden="true">#</a> Exercise 2: Functions</h2><p>Before you start working on these exercises, you are recommended to watch the following recorded lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-modules/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Modules`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Modules")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-functions/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Functions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Functions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Functions</li><li>Modules</li></ul><h3 id="problem-2-1-using-a-module" tabindex="-1"><a class="header-anchor" href="#problem-2-1-using-a-module" aria-hidden="true">#</a> Problem 2.1: Using a module</h3><p>In Problem 1.3 you created a program that users could use to compute the circumferences of circles. As the value of <code>𝜋</code> you used 3.14. It might be fine to use this approximation of <code>𝜋</code> in some cases, but it is usually better to use more decimal numbers. But you don&#39;t know the rest of the decimals by heart, do you?</p><p>The <code>math</code> module in Python&#39;s standard library contains the variable <code>𝜋</code> which stores the number <code>𝜋</code> with many decimal numbers. Change your program to first import the <code>math</code> module, and then use the <code>pi</code> variable from that module as the value of <code>𝜋</code> in your computations.</p><div class="custom-container tip"><p class="custom-container-title">Learn more</p><p>The curios ones can learn more about the <code>math</code> module in the documentation at <a href="https://docs.python.org/3/library/math.html" target="_blank" rel="noopener noreferrer">https://docs.python.org/3/library/math.html`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h4 id="sample-answer-14" tabindex="-1"><a class="header-anchor" href="#sample-answer-14" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> math

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the circumference of circles.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>for</span> whatever <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;three&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;random&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;values&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    circumference <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>math<span class="token punctuation"${
          _scopeId
        }>.</span>pi
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" math\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the circumference of circles.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" whatever "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"three\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"random\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"values\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    radius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    circumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("math"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("pi\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h3 id="problem-2-2-a-random-time" tabindex="-1"><a class="header-anchor" href="#problem-2-2-a-random-time" aria-hidden="true">#</a> Problem 2.2: A random time</h3><p>The <code>random</code> module contains the <code>randint()</code> function one can call to get back a random integer in a specific interval. Your task is to create a program that displays a random time of the day in the <code>HH:MM:SS</code> format, such as <code>23:42:12</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>If a number is lower than 10 you don&#39;t need to print a zero before it, e.g. displaying the time <code>4:5:6</code> is fine.</p></div><div class="custom-container tip"><p class="custom-container-title">Learn more</p><p>The curios ones can learn more about the <code>random</code> module in the documentation at <a href="https://docs.python.org/3/library/random.html" target="_blank" rel="noopener noreferrer">https://docs.python.org/3/library/random.html`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h4 id="sample-answer-15" tabindex="-1"><a class="header-anchor" href="#sample-answer-15" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> random

hour <span class="token operator"${
          _scopeId
        }>=</span> random<span class="token punctuation"${
          _scopeId
        }>.</span>randint<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>23</span><span class="token punctuation"${
          _scopeId
        }>)</span>
minute <span class="token operator"${
          _scopeId
        }>=</span> random<span class="token punctuation"${
          _scopeId
        }>.</span>randint<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>59</span><span class="token punctuation"${
          _scopeId
        }>)</span>
second <span class="token operator"${
          _scopeId
        }>=</span> random<span class="token punctuation"${
          _scopeId
        }>.</span>randint<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>59</span><span class="token punctuation"${
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
        }>(</span>hour<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;:&quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>minute<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;:&quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>second<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" random\n\nhour "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" random"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("randint"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "23"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nminute "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" random"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("randint"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "59"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nsecond "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" random"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("randint"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "59"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("hour"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\":\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("minute"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\":\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("second"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
  _push(`<h3 id="problem-2-3-many-random-integers" tabindex="-1"><a class="header-anchor" href="#problem-2-3-many-random-integers" aria-hidden="true">#</a> Problem 2.3: Many random integers</h3><p>Create a program that first asks the user to enter a positive integer. Your program should then display that many random numbers between <code>0</code> and <code>99</code>. If the user enters the integer <code>3</code>, your program might for example display the numbers <code>55</code>, <code>27</code> and <code>81</code>.</p><h4 id="sample-answer-16" tabindex="-1"><a class="header-anchor" href="#sample-answer-16" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> random

number_of_random_numbers <span class="token operator"${
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
        }>&quot;Enter number of random numbers: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_of_random_numbers<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    random_number <span class="token operator"${
          _scopeId
        }>=</span> random<span class="token punctuation"${
          _scopeId
        }>.</span>randint<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>99</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>random_number<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" random\n\nnumber_of_random_numbers "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter number of random numbers: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_of_random_numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    random_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" random"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("randint"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "99"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("random_number"),
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
  _push(`<h3 id="problem-2-4-content-of-folder" tabindex="-1"><a class="header-anchor" href="#problem-2-4-content-of-folder" aria-hidden="true">#</a> Problem 2.4: Content of folder</h3><p>The <code>os</code> module contains the function <code>listdir()</code> which returns back a list with the names of files and folders in the folder you pass to it (the path). Your task is to create a program that asks the user to enter an absolute path to a folder (e.g. <code>C:\\Users\\alice\\projects</code>), and then your program should display the names of all the files and folders in that folder.</p><div class="custom-container tip"><p class="custom-container-title">Learn more</p><p>The curios ones can learn more about the <code>os</code> module in the documentation at <a href="https://docs.python.org/3/library/os.html" target="_blank" rel="noopener noreferrer">https://docs.python.org/3/library/os.html`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h4 id="sample-answer-17" tabindex="-1"><a class="header-anchor" href="#sample-answer-17" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> os

path_to_folder <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter path: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

entries <span class="token operator"${
          _scopeId
        }>=</span> os<span class="token punctuation"${
          _scopeId
        }>.</span>listdir<span class="token punctuation"${
          _scopeId
        }>(</span>path_to_folder<span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>for</span> entry <span class="token keyword"${
          _scopeId
        }>in</span> entries<span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>entry<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" os\n\npath_to_folder "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter path: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nentries "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" os"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("listdir"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("path_to_folder"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" entry "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" entries"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("entry"),
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
  _push(`<h3 id="problem-2-5-introducing-functions" tabindex="-1"><a class="header-anchor" href="#problem-2-5-introducing-functions" aria-hidden="true">#</a> Problem 2.5: Introducing functions</h3><p>If you have the code below to compute the average value of two numbers:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>first_average <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And then you later need to compute the average value of two other numbers:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>second_average <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then you have kind of copy-pasted your code and just changed the name of the variable and the numbers. This is usually bad practice, because if the code you copy-pasted contained an error then you copy-pasted the error, and it now appears twice in your code. Even if you discover and correct the error at one place, it still exists at the other place.</p><p>Whenever you need the use the same functionality (such as computing the average value of two numbers) multiple times it is better to create a function that contains that functionality, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample implementation and usage of the average() function." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>average</span><span class="token punctuation"${
          _scopeId
        }>(</span>x<span class="token punctuation"${
          _scopeId
        }>,</span> y<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token punctuation"${
          _scopeId
        }>(</span>x <span class="token operator"${
          _scopeId
        }>+</span> y<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>/</span> <span class="token number"${
          _scopeId
        }>2</span>

first_average <span class="token operator"${
          _scopeId
        }>=</span> average<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>6</span><span class="token punctuation"${
          _scopeId
        }>)</span>
second_average <span class="token operator"${
          _scopeId
        }>=</span> average<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>8</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "average"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("x"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" y"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("x "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" y"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createTextVNode)("\n\nfirst_average "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" average"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "6"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nsecond_average "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" average"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "8"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
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
  _push(`<p>Another benefit with using a function is that you can write tests checking if the code in the function works correctly, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Code testing if the average() function works as it should." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>average<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }># Is True printed?</span>
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>average<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>6</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }># Is True printed?</span>
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>average<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token operator"${
          _scopeId
        }>-</span><span class="token number"${
          _scopeId
        }>10</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>10</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token comment"${
          _scopeId
        }># Is True printed?</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("average"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Is True printed?"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("average"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "6"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Is True printed?"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("average"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Is True printed?"),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>With these tests we don&#39;t need to run an entire program where the user should enter some input to test if the code works; we just need to run the program containing the code in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above, and if only <code>True</code> is printed on the screen we know that the function seems to work correctly.</p><p>In Problem 2.1 you created a program users can use to compute the circumference of circles. Change the implementation of the program to use a function to compute the circumference of a circle given its radius. Your function can look something like the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Code for the get_circle_circumference() function." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>get_circle_circumference</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token comment"${
          _scopeId
        }># ...</span>
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get_circle_circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "# ..."),
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
  _push(`<h4 id="sample-answer-18" tabindex="-1"><a class="header-anchor" href="#sample-answer-18" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> math

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;This program computes the circumference of circles.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>get_circle_circumference</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token operator"${
          _scopeId
        }>*</span>radius<span class="token operator"${
          _scopeId
        }>*</span>math<span class="token punctuation"${
          _scopeId
        }>.</span>pi

<span class="token keyword"${
          _scopeId
        }>for</span> whatever <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;three&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;random&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;values&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    radius <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>float</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter the radius of the circle: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    circumference <span class="token operator"${
          _scopeId
        }>=</span> get_circle_circumference<span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The circumference of a circle with radius &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>radius<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>circumference<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" math\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"This program computes the circumference of circles.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get_circle_circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)("math"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("pi\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" whatever "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"three\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"random\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"values\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    radius "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "float"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the radius of the circle: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    circumference "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" get_circle_circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The circumference of a circle with radius \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("radius"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("circumference"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h3 id="problem-2-6-exponentiation" tabindex="-1"><a class="header-anchor" href="#problem-2-6-exponentiation" aria-hidden="true">#</a> Problem 2.6: Exponentiation</h3><p>Create a new program that contains a function named <code>four_to_the_power_of()</code> which receives a positive integer as argument and returns <code>4</code> to the power of that integer, e.g. <code>four_to_the_power_of(3)</code> = <code>4³</code> = <code>4*4*4</code> = <code>64</code>.</p><p>Sample usage:</p><ul><li><code>four_to_the_power_of(2)</code> → <code>4*4</code> → <code>16</code></li><li><code>four_to_the_power_of(5)</code> → <code>4*4*4*4*4</code> → <code>1024</code></li><li><code>four_to_the_power_of(1)</code> → <code>4</code></li></ul><p>Make use of a for loop in your implementation. You may not use the <code>**</code> operator, the <code>pow()</code> function nor any module.</p><p>Call your <code>four_to_the_power_of()</code> function in your main program and verify that it works correctly. You are strongly recommended to write tests checking if the function works instead of printing return values.</p><h4 id="sample-answer-19" tabindex="-1"><a class="header-anchor" href="#sample-answer-19" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>four_to_the_power_of</span><span class="token punctuation"${
          _scopeId
        }>(</span>exponent<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    res <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>1</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>exponent<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        res <span class="token operator"${
          _scopeId
        }>=</span> res <span class="token operator"${
          _scopeId
        }>*</span> <span class="token number"${
          _scopeId
        }>4</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> res

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>four_to_the_power_of<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>four_to_the_power_of<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>four_to_the_power_of<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>4</span><span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>four_to_the_power_of<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>4</span><span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>4</span><span class="token operator"${
          _scopeId
        }>*</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "four_to_the_power_of"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("exponent"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    res "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("exponent"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        res "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" res "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" res\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("four_to_the_power_of"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("four_to_the_power_of"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("four_to_the_power_of"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("four_to_the_power_of"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-2-7-computing-sums" tabindex="-1"><a class="header-anchor" href="#problem-2-7-computing-sums" aria-hidden="true">#</a> Problem 2.7: Computing sums</h3><p>Create a program that computes the sum of the following sums:</p><ul><li>The sum of the integers between <code>0</code> and <code>10</code> (including both <code>0</code> and <code>10</code>).</li><li>The sum of the integers between <code>5</code> and <code>20</code> (including both <code>5</code> and <code>20</code>.</li><li>The sum of the integers between <code>3</code> and <code>14</code> (including both <code>3</code> and <code>14</code>).</li><li>The sum of the integers <code>4</code>, <code>20</code>, <code>6</code>, <code>12</code>, <code>45</code> and <code>62</code>.</li></ul><p>In your code, try to avoid repeating the same code three times. This basically means that you need to create a function that computes the sum of a sequence of integers.</p><h4 id="sample-answer-20" tabindex="-1"><a class="header-anchor" href="#sample-answer-20" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span>numbers<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> number <span class="token keyword"${
          _scopeId
        }>in</span> numbers<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> number
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token builtin"${
          _scopeId
        }>sum</span>

sums <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>11</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>21</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>15</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>20</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>6</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>12</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>45</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>62</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span>sums<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" number\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)("\n\nsums "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "11"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "21"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "15"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "20"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "6"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "12"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "45"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "62"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sums"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
  _push(`<h3 id="problem-2-8-computing-other-sums" tabindex="-1"><a class="header-anchor" href="#problem-2-8-computing-other-sums" aria-hidden="true">#</a> Problem 2.8: Computing other sums</h3><p>Create a program that computes the sum of the following sums:</p><ul><li>The sum of the even integers between <code>4</code> and <code>10</code> (including both <code>4</code> and <code>10</code>).</li><li>The sum of the even integers between <code>20</code> and <code>30</code> (including both <code>20</code> and <code>30</code>).</li><li>The sum of the odd integers between <code>7</code> and <code>21</code> (including both <code>7</code> and <code>21</code>).</li><li>The sum of the odd integers between <code>31</code> and <code>59</code> (including both <code>31</code> and <code>59</code>).</li></ul><p>In your code, try to avoid repeating the same code multiple times. This basically means that you need to use a function.</p><h4 id="sample-answer-21" tabindex="-1"><a class="header-anchor" href="#sample-answer-21" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span>numbers<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> number <span class="token keyword"${
          _scopeId
        }>in</span> numbers<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> number
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token builtin"${
          _scopeId
        }>sum</span>

sums <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>11</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>20</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>31</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>7</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>22</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>31</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>60</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span>sums<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" number\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)("\n\nsums "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "11"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "20"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "31"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "22"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "31"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "60"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sums"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
  _push(`<h3 id="problem-2-9-computing-fun-sums" tabindex="-1"><a class="header-anchor" href="#problem-2-9-computing-fun-sums" aria-hidden="true">#</a> Problem 2.9: Computing fun sums</h3><p>Create a program that computes the sum of the following sums:</p><ul><li>The sum of the integers between <code>4</code> and <code>10</code> (including both <code>4</code> and <code>10</code>).</li><li>The sum of every second integer between <code>4</code> and <code>10</code> (<code>4</code>+<code>6</code>+<code>8</code>+<code>10</code>).</li><li>The sum of every third integers between <code>4</code> and <code>10</code> (<code>4</code>+<code>7</code>+<code>10</code>).</li><li>The sum of every fourth integer between <code>4</code> and <code>10</code> (<code>4</code>+<code>8</code>).</li></ul><p>In your code, try to avoid repeating the same code multiple times. This basically means that you need to use a function.</p><h4 id="sample-answer-22" tabindex="-1"><a class="header-anchor" href="#sample-answer-22" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise2ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span>numbers<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> number <span class="token keyword"${
          _scopeId
        }>in</span> numbers<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> number
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token builtin"${
          _scopeId
        }>sum</span>

total_sum <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

<span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    total_sum <span class="token operator"${
          _scopeId
        }>=</span> total_sum <span class="token operator"${
          _scopeId
        }>+</span> <span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>4</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>11</span><span class="token punctuation"${
          _scopeId
        }>,</span> i<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>total_sum<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" number\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)("\n\ntotal_sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    total_sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" total_sum "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "11"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" i"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("total_sum"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="exercise-3-conditions" tabindex="-1"><a class="header-anchor" href="#exercise-3-conditions" aria-hidden="true">#</a> Exercise 3: Conditions</h2><p>Before you start working on these exercises, you are recommended to watch the following recorded lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-conditions/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Conditions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Conditions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-loops/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Loops`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Loops")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Conditional statements</li><li>The while loop</li></ul><h3 id="problem-3-1-comparing-numbers" tabindex="-1"><a class="header-anchor" href="#problem-3-1-comparing-numbers" aria-hidden="true">#</a> Problem 3.1: Comparing numbers</h3><p>Create a program that asks the user to enter two numbers. The program should then print which of them that is greatest respective smallest. It can look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Try to create functions to carry out the computations.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Enter the first number: 9
Enter the second number: 5
5 is the smallest.
9 is the greatest.
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
              (0,external_vue_.createVNode)("code", null, "Enter the first number: 9\nEnter the second number: 5\n5 is the smallest.\n9 is the greatest.\n")
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
  _push(`<h4 id="sample-answer-23" tabindex="-1"><a class="header-anchor" href="#sample-answer-23" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>smallest</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_a<span class="token punctuation"${
          _scopeId
        }>,</span> number_b<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>if</span> number_a <span class="token operator"${
          _scopeId
        }>&lt;</span> number_b<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_a
    <span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_b

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>greatest</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_a<span class="token punctuation"${
          _scopeId
        }>,</span> number_b<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>if</span> number_a <span class="token operator"${
          _scopeId
        }>&lt;</span> number_b<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_b
    <span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_a

first_number <span class="token operator"${
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
        }>&quot;Enter the first number: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
second_number <span class="token operator"${
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
        }>&quot;Enter the second number: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
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
        }>(</span>smallest<span class="token punctuation"${
          _scopeId
        }>(</span>first_number<span class="token punctuation"${
          _scopeId
        }>,</span> second_number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is the smallest.&quot;</span><span class="token punctuation"${
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
        }>(</span>greatest<span class="token punctuation"${
          _scopeId
        }>(</span>first_number<span class="token punctuation"${
          _scopeId
        }>,</span> second_number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is the greatest.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "smallest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_a"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" number_a "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_a\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_b\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "greatest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_a"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" number_a "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_b\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_a\n\nfirst_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the first number: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nsecond_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the second number: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("smallest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" second_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is the smallest.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("greatest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" second_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is the greatest.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-3-2-comparing-more-numbers" tabindex="-1"><a class="header-anchor" href="#problem-3-2-comparing-more-numbers" aria-hidden="true">#</a> Problem 3.2: Comparing more numbers</h3><p>Create a program that asks the user to enter three numbers. The program should then print which of them that is greatest respective smallest. It can look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Try to create functions to carry out the computations.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Enter the first number: 9
Enter the second number: 5
Enter the third number: 12
5 is the smallest.
12 is the greatest.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter the first number: 9\nEnter the second number: 5\nEnter the third number: 12\n5 is the smallest.\n12 is the greatest.\n")
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
  _push(`<h4 id="sample-answer-24" tabindex="-1"><a class="header-anchor" href="#sample-answer-24" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>smallest</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_a<span class="token punctuation"${
          _scopeId
        }>,</span> number_b<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>if</span> number_a <span class="token operator"${
          _scopeId
        }>&lt;</span> number_b<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_a
    <span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_b

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>greatest</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_a<span class="token punctuation"${
          _scopeId
        }>,</span> number_b<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>if</span> number_a <span class="token operator"${
          _scopeId
        }>&lt;</span> number_b<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_b
    <span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number_a

first_number <span class="token operator"${
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
        }>&quot;Enter the first number: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
second_number <span class="token operator"${
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
        }>&quot;Enter the second number: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
third_number <span class="token operator"${
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
        }>&quot;Enter the third number: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

smallest_number <span class="token operator"${
          _scopeId
        }>=</span> smallest<span class="token punctuation"${
          _scopeId
        }>(</span>first_number<span class="token punctuation"${
          _scopeId
        }>,</span> second_number<span class="token punctuation"${
          _scopeId
        }>)</span>
smallest_number <span class="token operator"${
          _scopeId
        }>=</span> smallest<span class="token punctuation"${
          _scopeId
        }>(</span>smallest_number<span class="token punctuation"${
          _scopeId
        }>,</span> third_number<span class="token punctuation"${
          _scopeId
        }>)</span>

greatest_number <span class="token operator"${
          _scopeId
        }>=</span> greatest<span class="token punctuation"${
          _scopeId
        }>(</span>
    first_number<span class="token punctuation"${
          _scopeId
        }>,</span>
    greatest<span class="token punctuation"${
          _scopeId
        }>(</span>
        second_number<span class="token punctuation"${
          _scopeId
        }>,</span>
        third_number
    <span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
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
        }>(</span>smallest_number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is the smallest.&quot;</span><span class="token punctuation"${
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
        }>(</span>greatest_number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is the greatest.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "smallest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_a"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" number_a "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_a\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_b\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "greatest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_a"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" number_a "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" number_b"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_b\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number_a\n\nfirst_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the first number: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nsecond_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the second number: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nthird_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the third number: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nsmallest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" smallest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" second_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nsmallest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" smallest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("smallest_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" third_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\ngreatest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" greatest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n    first_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    greatest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n        second_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n        third_number\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("smallest_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is the smallest.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("greatest_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is the greatest.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-3-3-summering-integers" tabindex="-1"><a class="header-anchor" href="#problem-3-3-summering-integers" aria-hidden="true">#</a> Problem 3.3: Summering integers</h3><p>Create a program that keeps asking the user to enter an integer until the user enters <code>quit</code>. The program should then display the sum of all the integers. It can look as shown in `)
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
        }>Enter an integer or quit: 9
Enter an integer or quit: 5
Enter an integer or quit: 12
Enter an integer or quit: quit
The sum of the integers is 26.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter an integer or quit: 9\nEnter an integer or quit: 5\nEnter an integer or quit: 12\nEnter an integer or quit: quit\nThe sum of the integers is 26.\n")
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
  _push(`<h4 id="sample-answer-25" tabindex="-1"><a class="header-anchor" href="#sample-answer-25" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

entered_text <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;&quot;</span>

<span class="token keyword"${
          _scopeId
        }>while</span> entered_text <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    
    entered_text <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter an integer or quit: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>if</span> entered_text <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        
        entered_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>int</span><span class="token punctuation"${
          _scopeId
        }>(</span>entered_text<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> entered_number

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;The sum of the integers is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\nentered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"\""),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createTextVNode)(" entered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    \n    entered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter an integer or quit: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" entered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        \n        entered_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("entered_text"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" entered_number\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The sum of the integers is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
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
  _push(`<h3 id="problem-3-4-comparing-many-numbers" tabindex="-1"><a class="header-anchor" href="#problem-3-4-comparing-many-numbers" aria-hidden="true">#</a> Problem 3.4: Comparing many numbers</h3><p>Create a program that keeps asking the user to enter a positive integer until the user enters <code>quit</code>. The program should then display the greatest of the entered numbers. It can look as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Somehow you need to remember the greatest number the user has entered.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sample input to and output from the program." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Enter an integer or quit: 9
Enter an integer or quit: 5
Enter an integer or quit: 12
Enter an integer or quit: quit
12 is the greatest.
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter an integer or quit: 9\nEnter an integer or quit: 5\nEnter an integer or quit: 12\nEnter an integer or quit: quit\n12 is the greatest.\n")
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
  _push(`<h4 id="sample-answer-26" tabindex="-1"><a class="header-anchor" href="#sample-answer-26" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }>greatest_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

entered_text <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;&quot;</span>

<span class="token keyword"${
          _scopeId
        }>while</span> entered_text <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    
    entered_text <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter an integer or quit: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>if</span> entered_text <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        
        entered_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>int</span><span class="token punctuation"${
          _scopeId
        }>(</span>entered_text<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token keyword"${
          _scopeId
        }>if</span> greatest_number <span class="token operator"${
          _scopeId
        }>&lt;</span> entered_number<span class="token punctuation"${
          _scopeId
        }>:</span>
            greatest_number <span class="token operator"${
          _scopeId
        }>=</span> entered_number

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>greatest_number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; is the greatest.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("greatest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\nentered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"\""),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createTextVNode)(" entered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    \n    entered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter an integer or quit: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" entered_text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        \n        entered_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("entered_text"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" greatest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" entered_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            greatest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" entered_number\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("greatest_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" is the greatest.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-3-5-a-multiplication-training-program" tabindex="-1"><a class="header-anchor" href="#problem-3-5-a-multiplication-training-program" aria-hidden="true">#</a> Problem 3.5: A multiplication training program</h3><p>Create a small program that functions as a simple multiplication training program. When the program starts, it should ask a user to enter a multiplication table, and then ask the user for the answers to 10 different multiplications in that multiplication table. It can look as shown in `)
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
        }>Enter multiplication table: 4
Enter the product of 4*1: 4
Correct.
Enter the product of 4*2: 6
Wrong. Correct answer is 8.
...
Enter the product of 4*10: 40
Correct.
You got 8 of 10 right (80%).
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
              (0,external_vue_.createVNode)("code", null, "Enter multiplication table: 4\nEnter the product of 4*1: 4\nCorrect.\nEnter the product of 4*2: 6\nWrong. Correct answer is 8.\n...\nEnter the product of 4*10: 40\nCorrect.\nYou got 8 of 10 right (80%).\n")
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
  _push(`<p>Extra features you can implement:</p><ul><li>Write a special text to the user at the end of the program if the user answered all questions right.</li><li>Write a special text to the user at the end of the program if the user answered all questions wrong.</li><li>Randomize the order of the questions somehow, e.g. do not always start with asking what X*1 is.</li><li>Keep asking the user for answers until the user enters quit as the answer. Randomize the numbers.</li><li>If the user answers a question wrong, keep asking the user the same question until the user answers it right.</li></ul><h4 id="sample-answer-27" tabindex="-1"><a class="header-anchor" href="#sample-answer-27" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> random

multiplication_table <span class="token operator"${
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
        }>&quot;Enter multiplication table: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

first_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>1</span>
last_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>10</span>
number_of_questions <span class="token operator"${
          _scopeId
        }>=</span> last_number <span class="token operator"${
          _scopeId
        }>-</span> first_number <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span>

numbers <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>list</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span>first_number<span class="token punctuation"${
          _scopeId
        }>,</span> last_number<span class="token operator"${
          _scopeId
        }>+</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
random<span class="token punctuation"${
          _scopeId
        }>.</span>shuffle<span class="token punctuation"${
          _scopeId
        }>(</span>numbers<span class="token punctuation"${
          _scopeId
        }>)</span>

number_of_correct_answers <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

<span class="token keyword"${
          _scopeId
        }>for</span> number <span class="token keyword"${
          _scopeId
        }>in</span> numbers<span class="token punctuation"${
          _scopeId
        }>:</span>
    user_answer <span class="token operator"${
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
        }>&quot;Enter the product of &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>multiplication_table<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;*&quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    correct_answer <span class="token operator"${
          _scopeId
        }>=</span> multiplication_table <span class="token operator"${
          _scopeId
        }>*</span> number
    <span class="token keyword"${
          _scopeId
        }>if</span> user_answer <span class="token operator"${
          _scopeId
        }>==</span> correct_answer<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Correct&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        number_of_correct_answers <span class="token operator"${
          _scopeId
        }>=</span> number_of_correct_answers <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span>
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
        }>&quot;Wrong. The correct answer is &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>correct_answer<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot;.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>if</span> number_of_correct_answers <span class="token operator"${
          _scopeId
        }>==</span> number_of_questions<span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Good job, all correct!&quot;</span><span class="token punctuation"${
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
        }>&quot;You got &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_of_correct_answers<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; of &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_of_questions<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; right.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" random\n\nmultiplication_table "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter multiplication table: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nfirst_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\nlast_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createTextVNode)("\nnumber_of_questions "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" last_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createTextVNode)(" first_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n\nnumbers "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "list"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" last_number"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nrandom"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("shuffle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\nnumber_of_correct_answers "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    user_answer "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter the product of \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("multiplication_table"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"*\""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\": \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    correct_answer "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" multiplication_table "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "*"),
                (0,external_vue_.createTextVNode)(" number\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" user_answer "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" correct_answer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Correct\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        number_of_correct_answers "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" number_of_correct_answers "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Wrong. The correct answer is \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("correct_answer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" number_of_correct_answers "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" number_of_questions"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Good job, all correct!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"You got \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_of_correct_answers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" of \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_of_questions"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" right.\""),
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
  _push(`<h3 id="problem-3-6-a-guessing-game" tabindex="-1"><a class="header-anchor" href="#problem-3-6-a-guessing-game" aria-hidden="true">#</a> Problem 3.6: A guessing game</h3><p>Create a small program that functions as a number guessing game. Start by generating a random integer between 0 and 100, and then the user should guess which number it is until the user guess the right one. If the guess is wrong, let the user know if her guess was too high or too low. It can look as shown in `)
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
        }>Guess which number between 0 and 100 I&#39;m thinking about!
Enter your guess: 20
Too high!
Enter your guess: 10
Too low!
Enter your guess: 14
Correct! It took you 3 guesses to find the right number.
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
              (0,external_vue_.createVNode)("code", null, "Guess which number between 0 and 100 I'm thinking about!\nEnter your guess: 20\nToo high!\nEnter your guess: 10\nToo low!\nEnter your guess: 14\nCorrect! It took you 3 guesses to find the right number.\n")
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
  _push(`<p>Extra features you can implement:</p><ul><li>Allow the user at most 7 guesses, otherwise Game Over.</li></ul><div class="custom-container warning"><p class="custom-container-title">Theoretical challenge!</p><p>Come up with an algorithm (which numbers to guess on) to complete the game in as few guesses as possible. In worst case, 7 guesses should be enough.</p></div><h4 id="sample-answer-28" tabindex="-1"><a class="header-anchor" href="#sample-answer-28" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> random

first_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
last_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>100</span>

correct_number <span class="token operator"${
          _scopeId
        }>=</span> random<span class="token punctuation"${
          _scopeId
        }>.</span>randint<span class="token punctuation"${
          _scopeId
        }>(</span>first_number<span class="token punctuation"${
          _scopeId
        }>,</span> last_number<span class="token punctuation"${
          _scopeId
        }>)</span>
guessed_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token operator"${
          _scopeId
        }>-</span><span class="token number"${
          _scopeId
        }>1</span>
number_of_guesses <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Guess which number between &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>first_number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; and &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>last_number<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; I&#39;m thinking about!&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>while</span> guessed_number <span class="token operator"${
          _scopeId
        }>!=</span> correct_number<span class="token punctuation"${
          _scopeId
        }>:</span>
    
    guessed_number <span class="token operator"${
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
        }>&quot;Enter your guess: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    number_of_guesses <span class="token operator"${
          _scopeId
        }>=</span> number_of_guesses <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span>
    
    <span class="token keyword"${
          _scopeId
        }>if</span> guessed_number <span class="token operator"${
          _scopeId
        }>&lt;</span> correct_number<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Too low!&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>elif</span> correct_number <span class="token operator"${
          _scopeId
        }>&lt;</span> guessed_number<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Too high!&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Correct! It took you &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span>number_of_guesses<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; guesses to find the right number.&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" random\n\nfirst_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\nlast_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "100"),
                (0,external_vue_.createTextVNode)("\n\ncorrect_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" random"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("randint"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" last_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nguessed_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\nnumber_of_guesses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Guess which number between \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("first_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" and \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("last_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" I'm thinking about!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createTextVNode)(" guessed_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(" correct_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    \n    guessed_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter your guess: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    number_of_guesses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" number_of_guesses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" guessed_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" correct_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Too low!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" correct_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" guessed_number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Too high!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Correct! It took you \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number_of_guesses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" guesses to find the right number.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-3-7-looking-for-values" tabindex="-1"><a class="header-anchor" href="#problem-3-7-looking-for-values" aria-hidden="true">#</a> Problem 3.7: Looking for values</h3><p>Create the function <code>is_in_sequence()</code>, which receives a sequence with numbers (e.g. a list) and another number as arguments, and returns <code>True</code> if that other number is in the sequence, otherwise <code>False</code>.</p><p>Sample usage:</p><ul><li><code>is_in_sequence([1, 2], 3)</code> → <code>False</code></li><li><code>is_in_sequence([1, 2], 2)</code> → <code>True</code></li><li><code>is_in_sequence([4, 2, 8, 6, 1], 6)</code> → <code>True</code></li></ul><h4 id="sample-answer-29" tabindex="-1"><a class="header-anchor" href="#sample-answer-29" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>is_in_sequence</span><span class="token punctuation"${
          _scopeId
        }>(</span>sequence<span class="token punctuation"${
          _scopeId
        }>,</span> looking_for<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> value <span class="token keyword"${
          _scopeId
        }>in</span> sequence<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>if</span> value <span class="token operator"${
          _scopeId
        }>==</span> looking_for<span class="token punctuation"${
          _scopeId
        }>:</span>
            <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token boolean"${
          _scopeId
        }>True</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token boolean"${
          _scopeId
        }>False</span>
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "is_in_sequence"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("sequence"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" looking_for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" value "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" sequence"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" value "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" looking_for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token boolean" }, "True"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token boolean" }, "False"),
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
  _push(`<h3 id="problem-3-8-greatest-value" tabindex="-1"><a class="header-anchor" href="#problem-3-8-greatest-value" aria-hidden="true">#</a> Problem 3.8: Greatest value</h3><p>Create the function <code>greatest()</code>, which receives a sequence with positive numbers (e.g. a list) as argument and returns the greatest number in that sequence.</p><p>Sample usage:</p><ul><li><code>greatest([5, 2, 7, 6])</code> → <code>7</code></li><li><code>greatest([6, 4, 9, 8, 3])</code> → <code>9</code></li></ul><h4 id="sample-answer-30" tabindex="-1"><a class="header-anchor" href="#sample-answer-30" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise3ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>greatest</span><span class="token punctuation"${
          _scopeId
        }>(</span>numbers<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    greatest_number <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> number <span class="token keyword"${
          _scopeId
        }>in</span> numbers<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>if</span> greatest_number <span class="token operator"${
          _scopeId
        }>&lt;</span> number<span class="token punctuation"${
          _scopeId
        }>:</span>
            greatest_number <span class="token operator"${
          _scopeId
        }>=</span> number
    <span class="token keyword"${
          _scopeId
        }>return</span> number
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "greatest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    greatest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" greatest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            greatest_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" number\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number\n")
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
  _push(`<h2 id="exercise-4-lists-dicts" tabindex="-1"><a class="header-anchor" href="#exercise-4-lists-dicts" aria-hidden="true">#</a> Exercise 4: Lists &amp; Dicts</h2><p>Before you start working on these exercises, you are recommended to watch the following recorded lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-strings/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Strings`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Strings")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-lists/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Lists`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Lists")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-dicts/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Dicts`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Dicts")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Strings</li><li>Lists</li><li>Dicts</li></ul><h3 id="problem-4-1-merging-lists" tabindex="-1"><a class="header-anchor" href="#problem-4-1-merging-lists" aria-hidden="true">#</a> Problem 4.1: Merging lists</h3><p>Create the function <code>merge()</code>, which receives three lists as argument, and returns a new list containing all the elements from the three lists. You simply need to create a new empty list, and then add the values from the other lists (one at a time) to this new list.</p><p>Sample usage:</p><ul><li><code>merge([1, 2], [3], [4, 5])</code> → <code>[1, 2, 3, 4, 5]</code></li><li><code>merge([1], [], [2])</code> → <code>[1, 2]</code></li></ul><h4 id="sample-answer-31" tabindex="-1"><a class="header-anchor" href="#sample-answer-31" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>merge</span><span class="token punctuation"${
          _scopeId
        }>(</span>list_1<span class="token punctuation"${
          _scopeId
        }>,</span> list_2<span class="token punctuation"${
          _scopeId
        }>,</span> list_3<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    merged_list <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> value <span class="token keyword"${
          _scopeId
        }>in</span> list_1<span class="token punctuation"${
          _scopeId
        }>:</span>
        merged_list<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span>value<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> value <span class="token keyword"${
          _scopeId
        }>in</span> list_2<span class="token punctuation"${
          _scopeId
        }>:</span>
        merged_list<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span>value<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> value <span class="token keyword"${
          _scopeId
        }>in</span> list_3<span class="token punctuation"${
          _scopeId
        }>:</span>
        merged_list<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span>value<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> merged_list
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "merge"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("list_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" list_2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" list_3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    merged_list "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" value "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" list_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        merged_list"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("value"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" value "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" list_2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        merged_list"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("value"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" value "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" list_3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        merged_list"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("value"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" merged_list\n")
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-4-2-computing-sums" tabindex="-1"><a class="header-anchor" href="#problem-4-2-computing-sums" aria-hidden="true">#</a> Problem 4.2: Computing sums</h3><p>Create the function <code>compute_sums()</code>, which receives two lists as argument, both containing the same number of numbers, and returns a new list containing the pairwise sum of the numbers in the two lists.</p><p>Sample usage:</p><ul><li><code>compute_sums([1, 2], [3, 4])</code> → <code>[4, 6]</code></li><li><code>compute_sums([1, 1, 1], [4, 5, 6])</code> → <code>[5, 6, 7]</code></li></ul><h4 id="sample-answer-32" tabindex="-1"><a class="header-anchor" href="#sample-answer-32" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>compute_sums</span><span class="token punctuation"${
          _scopeId
        }>(</span>list_1<span class="token punctuation"${
          _scopeId
        }>,</span> list_2<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    sums <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    indexes <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>len</span><span class="token punctuation"${
          _scopeId
        }>(</span>list_1<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> index <span class="token keyword"${
          _scopeId
        }>in</span> indexes<span class="token punctuation"${
          _scopeId
        }>:</span>
        sums<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span>list_1<span class="token punctuation"${
          _scopeId
        }>[</span>index<span class="token punctuation"${
          _scopeId
        }>]</span> <span class="token operator"${
          _scopeId
        }>+</span> list_2<span class="token punctuation"${
          _scopeId
        }>[</span>index<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> sums
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "compute_sums"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("list_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" list_2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    sums "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    indexes "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "len"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("list_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" index "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" indexes"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        sums"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("list_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("index"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" list_2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("index"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" sums\n")
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
  _push(`<h3 id="problem-4-3-translating-digits" tabindex="-1"><a class="header-anchor" href="#problem-4-3-translating-digits" aria-hidden="true">#</a> Problem 4.3: Translating digits</h3><p>Use a dictionary to store the translation of Swedish (or your own language) words to English, in this case the name of digits, e.g.:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>words <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;noll&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;zero&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ett&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># ...</span>
    <span class="token string">&quot;nio&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;nine&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Then create the function <code>translate()</code>, which receives the name of a digit in Swedish (or your own language) as an argument, and returns the name of that digit in English. If you can&#39;t translate the word you receive, return the string <code>unknown</code>.</p><p>Sample usage:</p><ul><li><code>translate(&quot;två&quot;)</code> → <code>&quot;two&quot;</code></li><li><code>translate(&quot;nio&quot;)</code> → <code>&quot;nine&quot;</code></li><li><code>translate(&quot;bbbbbbb&quot;)</code> → <code>&quot;unknown&quot;</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Use the <code>in</code> operator in a conditional statement to check if the word you should translate exists as a key in the <code>words</code> directory.</p></div><h4 id="sample-answer-33" tabindex="-1"><a class="header-anchor" href="#sample-answer-33" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }>words <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token string"${
          _scopeId
        }>&quot;noll&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;zero&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;ett&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;one&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;två&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;two&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;tre&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;three&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;fyra&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;four&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;fem&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;five&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;sex&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;six&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;sju&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;seven&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;åtta&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;eight&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;nio&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;nine&quot;</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>translate</span><span class="token punctuation"${
          _scopeId
        }>(</span>swedish_name<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>if</span> swedish_name <span class="token keyword"${
          _scopeId
        }>in</span> words<span class="token punctuation"${
          _scopeId
        }>:</span>
        english_name <span class="token operator"${
          _scopeId
        }>=</span> words<span class="token punctuation"${
          _scopeId
        }>[</span>swedish_name<span class="token punctuation"${
          _scopeId
        }>]</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> english_name
    <span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token string"${
          _scopeId
        }>&quot;unknown&quot;</span>
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("words "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"noll\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"zero\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"ett\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"one\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"två\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"two\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"tre\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"three\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"fyra\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"four\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"fem\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"five\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"sex\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"six\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"sju\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"seven\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"åtta\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"eight\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"nio\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"nine\""),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "translate"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("swedish_name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" swedish_name "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" words"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        english_name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" words"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("swedish_name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" english_name\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"unknown\""),
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
  _push(`<h3 id="problem-4-4-the-total-sum-of-a-dict" tabindex="-1"><a class="header-anchor" href="#problem-4-4-the-total-sum-of-a-dict" aria-hidden="true">#</a> Problem 4.4: The total sum of a dict</h3><p>Create the function <code>sum()</code>, which receives a dict as argument containing numbers, and returns the sum of all the numbers in the dict (not the keys).</p><p>Sample usage:</p><ul><li><code>sum({&quot;a&quot;: 1, &quot;b&quot;: 5})</code> → <code>6</code></li><li><code>sum({&quot;123&quot;: 7, &quot;23&quot;: 8})</code> → <code>15</code></li><li><code>sum({123: 7, 23: 8, 1: 2})</code> → <code>17</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Iterate through all the keys in the dict, and for each key, retrieve its value and add it to a <code>sum</code> variable starting on <code>0</code>.</p></div><h4 id="sample-answer-34" tabindex="-1"><a class="header-anchor" href="#sample-answer-34" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>sum</span><span class="token punctuation"${
          _scopeId
        }>(</span>a_dict<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> key <span class="token keyword"${
          _scopeId
        }>in</span> a_dict<span class="token punctuation"${
          _scopeId
        }>:</span>
      <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+</span> a_dict<span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token builtin"${
          _scopeId
        }>sum</span>
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("a_dict"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" key "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" a_dict"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" a_dict"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("key"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
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
  _push(`<h3 id="problem-4-5-the-pairwise-sum-of-two-dicts" tabindex="-1"><a class="header-anchor" href="#problem-4-5-the-pairwise-sum-of-two-dicts" aria-hidden="true">#</a> Problem 4.5: The pairwise sum of two dicts</h3><p>Create the function <code>get_sum()</code>, which receives two dicts as arguments (they both contains numbers and the same keys), and returns a new dict containing the pairwise sum of the two dicts.</p><p>Sample usage:</p><ul><li><code>get_sum({&quot;a&quot;: 1, &quot;b&quot;: 5}, {&quot;a&quot;: 2, &quot;b&quot;: 6})</code> → <code>{&quot;a&quot;: 3, &quot;b&quot;: 11}</code></li><li><code>get_sum({&quot;number_of_students&quot;: 5}, {&quot;number_of_students&quot;: 2})</code> → <code>{&quot;number_of_students&quot;: 7}</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Iterate through all the keys in one of the dictionary, and then retrieve the numbers from both of the dicts using the key.</p></div><h4 id="sample-answer-35" tabindex="-1"><a class="header-anchor" href="#sample-answer-35" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>get_sum</span><span class="token punctuation"${
          _scopeId
        }>(</span>dict_1<span class="token punctuation"${
          _scopeId
        }>,</span> dict_2<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    sums <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> key <span class="token keyword"${
          _scopeId
        }>in</span> dict_1<span class="token punctuation"${
          _scopeId
        }>:</span>
      sums<span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token punctuation"${
          _scopeId
        }>]</span> <span class="token operator"${
          _scopeId
        }>=</span> dict_1<span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token punctuation"${
          _scopeId
        }>]</span> <span class="token operator"${
          _scopeId
        }>+</span> dict_2<span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> sums
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get_sum"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("dict_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" dict_2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    sums "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" key "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" dict_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n      sums"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("key"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" dict_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("key"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" dict_2"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("key"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" sums\n")
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
  _push(`<h3 id="problem-4-6-grouping-words" tabindex="-1"><a class="header-anchor" href="#problem-4-6-grouping-words" aria-hidden="true">#</a> Problem 4.6: Grouping words</h3><p>Create the function <code>group_words()</code>, which receives a list of strings, and returns a dictionary containing multiple lists of strings, where all strings in the same list has the same number of characters. Use the number of characters in these strings as the key for that list of strings.</p><p>Sample usage:</p><ul><li><code>group_words([&quot;a&quot;, &quot;b&quot;, &quot;ab&quot;])</code> → <code>{1: [&quot;a&quot;, &quot;b&quot;], 2: [&quot;ab&quot;]}</code></li><li><code>group_words([&quot;a&quot;, &quot;bc&quot;, &quot;def&quot;])</code> → <code>{1: [&quot;a&quot;], 2: [&quot;ab&quot;], 3: &quot;def&quot;}</code></li><li><code>group_words([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;])</code> → <code>{1: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code></li><li><code>group_words([])</code> → <code>???</code>(you figure it out)</li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Start by iterating through all the strings in the list you receive, and create the dictionary with all the keys and empty lists. Then iterate through the list of strings you receive again, and add each string to its corresponding list.</p></div><h4 id="sample-answer-36" tabindex="-1"><a class="header-anchor" href="#sample-answer-36" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>group_words</span><span class="token punctuation"${
          _scopeId
        }>(</span>words<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    groups <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> word <span class="token keyword"${
          _scopeId
        }>in</span> words<span class="token punctuation"${
          _scopeId
        }>:</span>
      word_length <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>len</span><span class="token punctuation"${
          _scopeId
        }>(</span>word<span class="token punctuation"${
          _scopeId
        }>)</span>
      <span class="token keyword"${
          _scopeId
        }>if</span> word_length <span class="token keyword"${
          _scopeId
        }>not</span> <span class="token keyword"${
          _scopeId
        }>in</span> groups<span class="token punctuation"${
          _scopeId
        }>:</span>
        groups<span class="token punctuation"${
          _scopeId
        }>[</span>word_length<span class="token punctuation"${
          _scopeId
        }>]</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
      groups<span class="token punctuation"${
          _scopeId
        }>[</span>word_length<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span>word<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> groups
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "group_words"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("words"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    groups "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" word "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" words"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n      word_length "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "len"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("word"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" word_length "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "not"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" groups"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        groups"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("word_length"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n      groups"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("word_length"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("word"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" groups\n")
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
  _push(`<h3 id="problem-4-7-a-friendly-program" tabindex="-1"><a class="header-anchor" href="#problem-4-7-a-friendly-program" aria-hidden="true">#</a> Problem 4.7: A friendly program</h3><p>Create a program the user can use to store the names of her friends (all information lost when the program is closed). It can look as shown in `)
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
        }>Enter operation (count/add/view/remove/quit): count
You have 0 friends.
Enter operation (count/add/view/remove/quit): add
Enter name: Alice
Enter operation (count/add/view/remove/quit): add
Enter name: Bob
Enter operation (count/add/view/remove/quit): count
You have 2 friends.
Enter operation (count/add/view/remove/quit): view
Alice
Bob
Enter operation (count/add/view/remove/quit): remove
Enter name: Alice
Enter operation (count/add/view/remove/quit): count
You have 1 friends.
Enter operation (count/add/view/remove/quit): view
Bob
Enter operation (count/add/view/remove/quit): quit
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter operation (count/add/view/remove/quit): count\nYou have 0 friends.\nEnter operation (count/add/view/remove/quit): add\nEnter name: Alice\nEnter operation (count/add/view/remove/quit): add\nEnter name: Bob\nEnter operation (count/add/view/remove/quit): count\nYou have 2 friends.\nEnter operation (count/add/view/remove/quit): view\nAlice\nBob\nEnter operation (count/add/view/remove/quit): remove\nEnter name: Alice\nEnter operation (count/add/view/remove/quit): count\nYou have 1 friends.\nEnter operation (count/add/view/remove/quit): view\nBob\nEnter operation (count/add/view/remove/quit): quit\n")
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
  _push(`<div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>You need to remember the names of all the friends the user has entered. This can be done using a list:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>friends <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>When the program starts, create an empty list to store the name of all the friends.</li><li>When the user enters a new friend, add the name of the friend to the end of the list.</li><li>When the user removes a friend, remove the name of the friend from the list.</li></ul></div><h4 id="sample-answer-37" tabindex="-1"><a class="header-anchor" href="#sample-answer-37" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }>entered_operation <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;&quot;</span>

names <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;Alice&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;Bob&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token keyword"${
          _scopeId
        }>while</span> entered_operation <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
  
  entered_operation <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter operation (count/add/view/remove/quit): &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
  
  <span class="token keyword"${
          _scopeId
        }>if</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;count&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;You have &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>len</span><span class="token punctuation"${
          _scopeId
        }>(</span>names<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; friends.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
  <span class="token keyword"${
          _scopeId
        }>elif</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;add&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    name <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter name: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    names<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span>name<span class="token punctuation"${
          _scopeId
        }>)</span>
  <span class="token keyword"${
          _scopeId
        }>elif</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;view&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> name <span class="token keyword"${
          _scopeId
        }>in</span> names<span class="token punctuation"${
          _scopeId
        }>:</span>
      <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>name<span class="token punctuation"${
          _scopeId
        }>)</span>
  <span class="token keyword"${
          _scopeId
        }>elif</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;remove&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    name <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter name: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    names<span class="token punctuation"${
          _scopeId
        }>.</span>remove<span class="token punctuation"${
          _scopeId
        }>(</span>name<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"\""),
                (0,external_vue_.createTextVNode)("\n\nnames "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Bob\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n  \n  entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter operation (count/add/view/remove/quit): \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  \n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"count\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"You have \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "len"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("names"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" friends.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"add\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter name: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    names"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"view\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" name "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" names"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"remove\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter name: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    names"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("remove"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("name"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-4-8-a-friendlier-program" tabindex="-1"><a class="header-anchor" href="#problem-4-8-a-friendlier-program" aria-hidden="true">#</a> Problem 4.8: A friendlier program</h3><p>Create a program the user can use to store the names and emails of her friends. It can look as shown in `)
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
        }>Enter operation (count/add/view/remove/quit): count
You have 0 friends.
Enter operation (count/add/view/remove/quit): add
Enter name: Alice
Enter email: alice@gmail.com
Enter operation (count/add/view/remove/quit): add
Enter name: Bob
Enter email: bob@ju.se
Enter operation (count/add/view/remove/quit): count
You have 2 friends.
Enter operation (count/add/view/remove/quit): view
Alice – alice@gmail.com
Bob – bob@ju.se
Enter operation (count/add/view/remove/quit): remove
Enter name: Alice
Enter operation (count/add/view/remove/quit): count
You have 1 friends.
Enter operation (count/add/view/remove/quit): view
Bob – bob@gmail.com
Enter operation (count/add/view/remove/quit): quit
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
              (0,external_vue_.createVNode)("code", null, "Enter operation (count/add/view/remove/quit): count\nYou have 0 friends.\nEnter operation (count/add/view/remove/quit): add\nEnter name: Alice\nEnter email: alice@gmail.com\nEnter operation (count/add/view/remove/quit): add\nEnter name: Bob\nEnter email: bob@ju.se\nEnter operation (count/add/view/remove/quit): count\nYou have 2 friends.\nEnter operation (count/add/view/remove/quit): view\nAlice – alice@gmail.com\nBob – bob@ju.se\nEnter operation (count/add/view/remove/quit): remove\nEnter name: Alice\nEnter operation (count/add/view/remove/quit): count\nYou have 1 friends.\nEnter operation (count/add/view/remove/quit): view\nBob – bob@gmail.com\nEnter operation (count/add/view/remove/quit): quit\n")
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
  _push(`<div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>This time, each friend consists of two pieces of information (name and email) instead of just one (name), so you need to represent each friend as a dict with a <code>name</code> key and an <code>email</code> key, e.g.:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>friends <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;alice@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;bob@ju.se&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><h4 id="sample-answer-38" tabindex="-1"><a class="header-anchor" href="#sample-answer-38" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise4ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }>entered_operation <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;&quot;</span>

friends <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Alice&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;al@ice.com&quot;</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Bob&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;bob@by.com&quot;</span><span class="token punctuation"${
          _scopeId
        }>}</span>
<span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token keyword"${
          _scopeId
        }>while</span> entered_operation <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token string"${
          _scopeId
        }>&quot;quit&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
  
  entered_operation <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter operation (count/add/view/remove/quit): &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
  
  <span class="token keyword"${
          _scopeId
        }>if</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;count&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;You have &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>len</span><span class="token punctuation"${
          _scopeId
        }>(</span>friends<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; friends.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
  <span class="token keyword"${
          _scopeId
        }>elif</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;add&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    name <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter name: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    email <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter email: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    friends<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>{</span>
      <span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> name<span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> email
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
  <span class="token keyword"${
          _scopeId
        }>elif</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;view&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> friend <span class="token keyword"${
          _scopeId
        }>in</span> friends<span class="token punctuation"${
          _scopeId
        }>:</span>
      <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; - &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span>
  <span class="token keyword"${
          _scopeId
        }>elif</span> entered_operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;remove&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    name <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter name: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    friend_to_remove <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> friend <span class="token keyword"${
          _scopeId
        }>in</span> friends<span class="token punctuation"${
          _scopeId
        }>:</span>
      <span class="token keyword"${
          _scopeId
        }>if</span> friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span> <span class="token operator"${
          _scopeId
        }>==</span> name<span class="token punctuation"${
          _scopeId
        }>:</span>
        friend_to_remove <span class="token operator"${
          _scopeId
        }>=</span> friend
    friends<span class="token punctuation"${
          _scopeId
        }>.</span>remove<span class="token punctuation"${
          _scopeId
        }>(</span>friend_to_remove<span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"\""),
                (0,external_vue_.createTextVNode)("\n\nfriends "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"al@ice.com\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Bob\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"bob@by.com\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"quit\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n  \n  entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter operation (count/add/view/remove/quit): \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  \n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"count\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"You have \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "len"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" friends.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"add\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter name: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    email "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter email: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" email\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"view\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" friend "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" - \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" entered_operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"remove\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter name: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    friend_to_remove "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" friend "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        friend_to_remove "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" friend\n    friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("remove"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friend_to_remove"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="exercise-5-files" tabindex="-1"><a class="header-anchor" href="#exercise-5-files" aria-hidden="true">#</a> Exercise 5: Files</h2><p>Before you start working on these exercises, you are recommended to watch the following recorded lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-modelling/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Modelling`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Modelling")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-data-storage/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Data Storage`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Data Storage")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Files</li><li>XML</li><li>CSV</li><li>JSON</li></ul><h3 id="problem-5-1-working-with-files" tabindex="-1"><a class="header-anchor" href="#problem-5-1-working-with-files" aria-hidden="true">#</a> Problem 5.1: Working with files</h3><p>The file <a href="files/exercises/numbers.txt">numbers.txt</a> doesn&#39;t follow any particular format, but it contains numbers separated by spaces and line breaks. It can look like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1 5 4 3
4 5
23 4 5 899999
3 45 3 222 4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Write a program that computes the sum of all the numbers in the file (download and save the file locally on your computer).</p><h4 id="sample-answer-39" tabindex="-1"><a class="header-anchor" href="#sample-answer-39" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise5ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
<span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;numbers.txt&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> <span class="token builtin"${
          _scopeId
        }>file</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> line <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>file</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        numbers <span class="token operator"${
          _scopeId
        }>=</span> line<span class="token punctuation"${
          _scopeId
        }>.</span>split<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot; &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token keyword"${
          _scopeId
        }>for</span> number <span class="token keyword"${
          _scopeId
        }>in</span> numbers<span class="token punctuation"${
          _scopeId
        }>:</span>
            <span class="token builtin"${
          _scopeId
        }>sum</span> <span class="token operator"${
          _scopeId
        }>+=</span> <span class="token builtin"${
          _scopeId
        }>int</span><span class="token punctuation"${
          _scopeId
        }>(</span>number<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"numbers.txt\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" line "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        numbers "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" line"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("split"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" numbers"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "sum"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("number"),
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
  _push(`<h3 id="problem-5-2-working-with-files" tabindex="-1"><a class="header-anchor" href="#problem-5-2-working-with-files" aria-hidden="true">#</a> Problem 5.2: Working with files</h3><p>Imagine your application contains the following data:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>houses <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Gryffindor&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Godric Gryffindor&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;HufflePuff&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Helga Hufflepuff&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Ravenclaw&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Rowena Ravenclaw&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Slytherin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salazar Slytherin&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Create three different functions that can be used to store this data in a file:</p><ul><li>The first function should store the data in a JSON file (in JSON format).</li><li>The second function should store the data in a CSV file (in CSV format).</li><li>The third function should store the data in an XML file (XML format).</li></ul><p>Then create three different functions that can be used to read this data from a file and restore the <code>houses</code> variable.</p><h4 id="sample-answer-40" tabindex="-1"><a class="header-anchor" href="#sample-answer-40" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise5ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> json
<span class="token keyword"${
          _scopeId
        }>import</span> xml<span class="token punctuation"${
          _scopeId
        }>.</span>etree<span class="token punctuation"${
          _scopeId
        }>.</span>ElementTree <span class="token keyword"${
          _scopeId
        }>as</span> ET
<span class="token keyword"${
          _scopeId
        }>import</span> csv

houses <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
    <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Gryffindor&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Godric Gryffindor&quot;</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;HufflePuff&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Helga Hufflepuff&quot;</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Ravenclaw&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Rowena Ravenclaw&quot;</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Slytherin&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Salazar Slytherin&quot;</span><span class="token punctuation"${
          _scopeId
        }>}</span>
<span class="token punctuation"${
          _scopeId
        }>]</span>

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>write_to_json_file</span><span class="token punctuation"${
          _scopeId
        }>(</span>houses<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    json_code <span class="token operator"${
          _scopeId
        }>=</span> json<span class="token punctuation"${
          _scopeId
        }>.</span>dumps<span class="token punctuation"${
          _scopeId
        }>(</span>houses<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;houses.json&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;w&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> json_file<span class="token punctuation"${
          _scopeId
        }>:</span>
        json_file<span class="token punctuation"${
          _scopeId
        }>.</span>write<span class="token punctuation"${
          _scopeId
        }>(</span>json_code<span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>write_to_xml_file</span><span class="token punctuation"${
          _scopeId
        }>(</span>houses<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    houses_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>Element<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;houses&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>for</span> house <span class="token keyword"${
          _scopeId
        }>in</span> houses<span class="token punctuation"${
          _scopeId
        }>:</span>
        house_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>SubElement<span class="token punctuation"${
          _scopeId
        }>(</span>houses_element<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;house&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        name_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>SubElement<span class="token punctuation"${
          _scopeId
        }>(</span>house_element<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        name_element<span class="token punctuation"${
          _scopeId
        }>.</span>text <span class="token operator"${
          _scopeId
        }>=</span> house<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span>
        founder_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>SubElement<span class="token punctuation"${
          _scopeId
        }>(</span>house_element<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        founder_element<span class="token punctuation"${
          _scopeId
        }>.</span>text <span class="token operator"${
          _scopeId
        }>=</span> house<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    xml_code <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>tostring<span class="token punctuation"${
          _scopeId
        }>(</span>houses_element<span class="token punctuation"${
          _scopeId
        }>,</span> encoding<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&quot;unicode&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;houses.xml&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;w&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> xml_file<span class="token punctuation"${
          _scopeId
        }>:</span>
        xml_file<span class="token punctuation"${
          _scopeId
        }>.</span>write<span class="token punctuation"${
          _scopeId
        }>(</span>xml_code<span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>write_to_csv_file</span><span class="token punctuation"${
          _scopeId
        }>(</span>houses<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;houses.csv&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;w&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> newline<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&quot;\\n&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> csv_file<span class="token punctuation"${
          _scopeId
        }>:</span>
        writer <span class="token operator"${
          _scopeId
        }>=</span> csv<span class="token punctuation"${
          _scopeId
        }>.</span>writer<span class="token punctuation"${
          _scopeId
        }>(</span>csv_file<span class="token punctuation"${
          _scopeId
        }>,</span> delimiter<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&quot;,&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> quotechar<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&#39;&quot;&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token keyword"${
          _scopeId
        }>for</span> house <span class="token keyword"${
          _scopeId
        }>in</span> houses<span class="token punctuation"${
          _scopeId
        }>:</span>
            writer<span class="token punctuation"${
          _scopeId
        }>.</span>writerow<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span>house<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span> house<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>read_from_json_file</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;houses.json&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&#39;r&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> json_file<span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> json<span class="token punctuation"${
          _scopeId
        }>.</span>loads<span class="token punctuation"${
          _scopeId
        }>(</span>json_file<span class="token punctuation"${
          _scopeId
        }>.</span>read<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>read_from_xml_file</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    houses <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;houses.xml&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&#39;r&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> xml_file<span class="token punctuation"${
          _scopeId
        }>:</span>
        xml_code <span class="token operator"${
          _scopeId
        }>=</span> xml_file<span class="token punctuation"${
          _scopeId
        }>.</span>read<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        houses_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>fromstring<span class="token punctuation"${
          _scopeId
        }>(</span>xml_code<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token keyword"${
          _scopeId
        }>for</span> house_element <span class="token keyword"${
          _scopeId
        }>in</span> houses_element<span class="token punctuation"${
          _scopeId
        }>:</span>
            houses<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                <span class="token string"${
          _scopeId
        }>&#39;name&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> house_element<span class="token punctuation"${
          _scopeId
        }>.</span>find<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>text<span class="token punctuation"${
          _scopeId
        }>,</span>
                <span class="token string"${
          _scopeId
        }>&#39;founder&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> house_element<span class="token punctuation"${
          _scopeId
        }>.</span>find<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;founder&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>text
            <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> houses

<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>read_from_csv_file</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
    houses <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;houses.csv&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&#39;r&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> csv_file<span class="token punctuation"${
          _scopeId
        }>:</span>
        reader <span class="token operator"${
          _scopeId
        }>=</span> csv<span class="token punctuation"${
          _scopeId
        }>.</span>reader<span class="token punctuation"${
          _scopeId
        }>(</span>csv_file<span class="token punctuation"${
          _scopeId
        }>,</span> delimiter<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&#39;,&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> quotechar<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&#39;&quot;&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token keyword"${
          _scopeId
        }>for</span> row <span class="token keyword"${
          _scopeId
        }>in</span> reader<span class="token punctuation"${
          _scopeId
        }>:</span>
            houses<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                <span class="token string"${
          _scopeId
        }>&#39;name&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> row<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
                <span class="token string"${
          _scopeId
        }>&#39;founder&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> row<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>]</span>
            <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> houses
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" json\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" xml"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("etree"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("ElementTree "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" ET\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" csv\n\nhouses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Gryffindor\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Godric Gryffindor\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"HufflePuff\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Helga Hufflepuff\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Ravenclaw\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Rowena Ravenclaw\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Slytherin\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Salazar Slytherin\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "write_to_json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    json_code "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" json"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("dumps"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"houses.json\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"w\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("write"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("json_code"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "write_to_xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    houses_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("Element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"houses\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" house "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        house_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("SubElement"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("houses_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"house\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        name_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("SubElement"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("house_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        name_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" house"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n        founder_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("SubElement"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("house_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        founder_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" house"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    xml_code "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("tostring"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("houses_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" encoding"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"unicode\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"houses.xml\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"w\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("write"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("xml_code"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "write_to_csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"houses.csv\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"w\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" newline"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"\\n\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        writer "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" csv"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("writer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" delimiter"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\",\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" quotechar"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'\"'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" house "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            writer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("writerow"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("house"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" house"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "read_from_json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'houses.json'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'r'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" json"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("loads"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("read"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "read_from_xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    houses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'houses.xml'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'r'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        xml_code "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("read"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        houses_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("fromstring"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("xml_code"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" house_element "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" houses_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'name'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" house_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("find"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'founder'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" house_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("find"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"founder\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text\n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" houses\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "read_from_csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n    houses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'houses.csv'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'r'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        reader "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" csv"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("reader"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" delimiter"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "','"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" quotechar"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'\"'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" row "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" reader"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            houses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'name'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" row"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'founder'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" row"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" houses\n")
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="problem-5-3-storing-the-friendly-friends" tabindex="-1"><a class="header-anchor" href="#problem-5-3-storing-the-friendly-friends" aria-hidden="true">#</a> Problem 5.3: Storing the friendly friends</h3><p>This exercise is a continuation on Problem 4.8.</p><p>Add two new commands: <code>save</code> and <code>load</code>. These commands should ask the user to enter the name of a file (including extension, e.g. <code>friends.json</code>) and then store/retrieve the list of friends to/from the file. The data should be stored according to the file extension (for example in JSON format for <code>friends.json</code>). You should support CSV, JSON and XML.</p><p>It can look as shown in `)
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
        }>Enter operation: add
Enter name: Alice
Enter email: alice@gmail.com
Enter operation: save
Enter filename: friends.xml
Enter operation: add
Enter name: Bob
Enter email: bob@ju.se
Enter operation: save
Enter filename: friends.json
Enter operation: load
Enter filename: friends.xml
Enter operation: count
You have 1 friends.
Enter operation: load
Enter filename: friends.json
Enter operation: count
You have 2 friends.
Enter operation: quit
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Enter operation: add\nEnter name: Alice\nEnter email: alice@gmail.com\nEnter operation: save\nEnter filename: friends.xml\nEnter operation: add\nEnter name: Bob\nEnter email: bob@ju.se\nEnter operation: save\nEnter filename: friends.json\nEnter operation: load\nEnter filename: friends.xml\nEnter operation: count\nYou have 1 friends.\nEnter operation: load\nEnter filename: friends.json\nEnter operation: count\nYou have 2 friends.\nEnter operation: quit\n")
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
  _push(`<h4 id="sample-answer-41" tabindex="-1"><a class="header-anchor" href="#sample-answer-41" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise5ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }>friends <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>

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
        }>&quot;Enter operation (count/add/view/remove/quit): &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>if</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;count&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;You have &quot;</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token builtin"${
          _scopeId
        }>str</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>len</span><span class="token punctuation"${
          _scopeId
        }>(</span>friends<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; friends.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;add&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        name <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter name: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        email <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter email: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        friends<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> name<span class="token punctuation"${
          _scopeId
        }>,</span>
            <span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span> email
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;view&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        <span class="token keyword"${
          _scopeId
        }>for</span> friend <span class="token keyword"${
          _scopeId
        }>in</span> friends<span class="token punctuation"${
          _scopeId
        }>:</span>
            <span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; - &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;remove&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        entered_name <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter name: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        index_to_remove <span class="token operator"${
          _scopeId
        }>=</span> <span class="token operator"${
          _scopeId
        }>-</span><span class="token number"${
          _scopeId
        }>1</span>
        <span class="token keyword"${
          _scopeId
        }>for</span> i <span class="token keyword"${
          _scopeId
        }>in</span> <span class="token builtin"${
          _scopeId
        }>range</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token builtin"${
          _scopeId
        }>len</span><span class="token punctuation"${
          _scopeId
        }>(</span>friends<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
            <span class="token keyword"${
          _scopeId
        }>if</span> friends<span class="token punctuation"${
          _scopeId
        }>[</span>i<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span> <span class="token operator"${
          _scopeId
        }>==</span> entered_name<span class="token punctuation"${
          _scopeId
        }>:</span>
                index_to_remove <span class="token operator"${
          _scopeId
        }>=</span> i
        friends<span class="token punctuation"${
          _scopeId
        }>.</span>pop<span class="token punctuation"${
          _scopeId
        }>(</span>index_to_remove<span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;save&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        
        filename <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter filename: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>if</span> filename<span class="token punctuation"${
          _scopeId
        }>.</span>endswith<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;.json&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
            <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span>filename<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;w&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> json_file<span class="token punctuation"${
          _scopeId
        }>:</span>
                json_file<span class="token punctuation"${
          _scopeId
        }>.</span>write<span class="token punctuation"${
          _scopeId
        }>(</span>json<span class="token punctuation"${
          _scopeId
        }>.</span>dumps<span class="token punctuation"${
          _scopeId
        }>(</span>friends<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>elif</span> filename<span class="token punctuation"${
          _scopeId
        }>.</span>endswith<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;.xml&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
            friends_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>Element<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;friends&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            <span class="token keyword"${
          _scopeId
        }>for</span> friend <span class="token keyword"${
          _scopeId
        }>in</span> friends<span class="token punctuation"${
          _scopeId
        }>:</span>
                friend_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>SubElement<span class="token punctuation"${
          _scopeId
        }>(</span>friends_element<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;friend&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                name_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>SubElement<span class="token punctuation"${
          _scopeId
        }>(</span>friend_element<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                name_element<span class="token punctuation"${
          _scopeId
        }>.</span>text <span class="token operator"${
          _scopeId
        }>=</span> friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span>
                email_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>SubElement<span class="token punctuation"${
          _scopeId
        }>(</span>friend_element<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                email_element<span class="token punctuation"${
          _scopeId
        }>.</span>text <span class="token operator"${
          _scopeId
        }>=</span> friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span>
            xml_code <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>tostring<span class="token punctuation"${
          _scopeId
        }>(</span>friends_element<span class="token punctuation"${
          _scopeId
        }>,</span> encoding<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&quot;unicode&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span>filename<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;w&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> xml_file<span class="token punctuation"${
          _scopeId
        }>:</span>
                xml_file<span class="token punctuation"${
          _scopeId
        }>.</span>write<span class="token punctuation"${
          _scopeId
        }>(</span>xml_code<span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>elif</span> filename<span class="token punctuation"${
          _scopeId
        }>.</span>endswith<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;.csv&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
            <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;friends.csv&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;w&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> newline<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&quot;\\n&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> csv_file<span class="token punctuation"${
          _scopeId
        }>:</span>
                writer <span class="token operator"${
          _scopeId
        }>=</span> csv<span class="token punctuation"${
          _scopeId
        }>.</span>writer<span class="token punctuation"${
          _scopeId
        }>(</span>csv_file<span class="token punctuation"${
          _scopeId
        }>,</span> delimiter<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&quot;,&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> quotechar<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&#39;&quot;&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token keyword"${
          _scopeId
        }>for</span> friend <span class="token keyword"${
          _scopeId
        }>in</span> friends<span class="token punctuation"${
          _scopeId
        }>:</span>
                    writer<span class="token punctuation"${
          _scopeId
        }>.</span>writerow<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span>friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span> friend<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
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
        }>&quot;File type is not supported.&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>elif</span> operation <span class="token operator"${
          _scopeId
        }>==</span> <span class="token string"${
          _scopeId
        }>&quot;load&quot;</span><span class="token punctuation"${
          _scopeId
        }>:</span>
        
        filename <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter filename: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>if</span> filename<span class="token punctuation"${
          _scopeId
        }>.</span>endswith<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;.json&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
            <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span>filename<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&#39;r&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> json_file<span class="token punctuation"${
          _scopeId
        }>:</span>
                friends <span class="token operator"${
          _scopeId
        }>=</span> json<span class="token punctuation"${
          _scopeId
        }>.</span>loads<span class="token punctuation"${
          _scopeId
        }>(</span>json_file<span class="token punctuation"${
          _scopeId
        }>.</span>read<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>elif</span> filename<span class="token punctuation"${
          _scopeId
        }>.</span>endswith<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;.xml&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
            friends <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
            <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span>filename<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&#39;r&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> xml_file<span class="token punctuation"${
          _scopeId
        }>:</span>
                xml_code <span class="token operator"${
          _scopeId
        }>=</span> xml_file<span class="token punctuation"${
          _scopeId
        }>.</span>read<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                friends_element <span class="token operator"${
          _scopeId
        }>=</span> ET<span class="token punctuation"${
          _scopeId
        }>.</span>fromstring<span class="token punctuation"${
          _scopeId
        }>(</span>xml_code<span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token keyword"${
          _scopeId
        }>for</span> friend_element <span class="token keyword"${
          _scopeId
        }>in</span> friends_element<span class="token punctuation"${
          _scopeId
        }>:</span>
                    friends<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                        <span class="token string"${
          _scopeId
        }>&#39;name&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> friend_element<span class="token punctuation"${
          _scopeId
        }>.</span>find<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;name&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>text<span class="token punctuation"${
          _scopeId
        }>,</span>
                        <span class="token string"${
          _scopeId
        }>&#39;email&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> friend_element<span class="token punctuation"${
          _scopeId
        }>.</span>find<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;email&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>text
                    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>elif</span> filename<span class="token punctuation"${
          _scopeId
        }>.</span>endswith<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;.csv&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
            friends <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
            <span class="token keyword"${
          _scopeId
        }>with</span> <span class="token builtin"${
          _scopeId
        }>open</span><span class="token punctuation"${
          _scopeId
        }>(</span>filename<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&#39;r&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>as</span> csv_file<span class="token punctuation"${
          _scopeId
        }>:</span>
                reader <span class="token operator"${
          _scopeId
        }>=</span> csv<span class="token punctuation"${
          _scopeId
        }>.</span>reader<span class="token punctuation"${
          _scopeId
        }>(</span>csv_file<span class="token punctuation"${
          _scopeId
        }>,</span> delimiter<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&#39;,&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> quotechar<span class="token operator"${
          _scopeId
        }>=</span><span class="token string"${
          _scopeId
        }>&#39;&quot;&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token keyword"${
          _scopeId
        }>for</span> row <span class="token keyword"${
          _scopeId
        }>in</span> reader<span class="token punctuation"${
          _scopeId
        }>:</span>
                    friends<span class="token punctuation"${
          _scopeId
        }>.</span>append<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                        <span class="token string"${
          _scopeId
        }>&#39;name&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> row<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
                        <span class="token string"${
          _scopeId
        }>&#39;email&#39;</span><span class="token punctuation"${
          _scopeId
        }>:</span> row<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>]</span>
                    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
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
        }>&quot;File type is not supported.&quot;</span><span class="token punctuation"${
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
        }><span class="line-number"${
          _scopeId
        }>85</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>86</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>87</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>88</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("friends "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
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
                (0,external_vue_.createTextVNode)("\n    \n    operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter operation (count/add/view/remove/quit): \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"count\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"You have \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "str"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "len"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" friends.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"add\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter name: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        email "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter email: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" email\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"view\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" friend "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" - \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"remove\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        entered_name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter name: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        index_to_remove "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" i "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "range"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "len"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("i"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" entered_name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                index_to_remove "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" i\n        friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("pop"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("index_to_remove"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"save\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        \n        filename "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter filename: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("endswith"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".json\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"w\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("write"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("json"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("dumps"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("endswith"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".xml\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            friends_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("Element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"friends\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" friend "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                friend_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("SubElement"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friends_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"friend\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                name_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("SubElement"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friend_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                name_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n                email_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("SubElement"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friend_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                email_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n            xml_code "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("tostring"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("friends_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" encoding"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"unicode\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"w\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("write"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("xml_code"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("endswith"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".csv\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"friends.csv\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"w\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" newline"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"\\n\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                writer "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" csv"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("writer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" delimiter"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\",\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" quotechar"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'\"'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" friend "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                    writer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("writerow"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" friend"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"File type is not supported.\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" operation "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"load\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n        \n        filename "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter filename: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("endswith"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".json\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'r'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                friends "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" json"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("loads"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("json_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("read"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("endswith"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".xml\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            friends "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'r'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                xml_code "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" xml_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("read"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                friends_element "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ET"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("fromstring"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("xml_code"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" friend_element "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" friends_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                    friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'name'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" friend_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("find"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"name\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n                        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'email'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" friend_element"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("find"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"email\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text\n                    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "elif"),
                (0,external_vue_.createTextVNode)(" filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("endswith"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\".csv\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            friends "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "with"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "open"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("filename"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'r'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                (0,external_vue_.createTextVNode)(" csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                reader "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" csv"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("reader"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("csv_file"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" delimiter"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "','"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" quotechar"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'\"'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createTextVNode)(" row "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "in"),
                (0,external_vue_.createTextVNode)(" reader"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n                    friends"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("append"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'name'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" row"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n                        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'email'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)(" row"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n                    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"File type is not supported.\""),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "85"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "86"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "87"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "88"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="exercise-6-object-oriented-programming" tabindex="-1"><a class="header-anchor" href="#exercise-6-object-oriented-programming" aria-hidden="true">#</a> Exercise 6: Object-oriented Programming</h2><p>Before you start working on these exercises, you are recommended to watch the following recorded lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-abstraction/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Abstraction`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Abstraction")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/python-object-oriented-programming/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Python Object-Oriented Programming`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Python Object-Oriented Programming")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Classes</li></ul><h3 id="problem-6-1-using-classes" tabindex="-1"><a class="header-anchor" href="#problem-6-1-using-classes" aria-hidden="true">#</a> Problem 6.1: Using classes</h3><p>A class represents something (a ball, a human, a house, a calculator, etc.), and it is the one who creates the class that will do the hard work with implementing the class. The ones who use the class will be able to do that quite easily.</p><p>The file <a href="files/exercises/HangmanGame.py">HangmanGame.py</a> contains the class <code>HangmanGame</code> that represents <a href="https://en.wikipedia.org/wiki/Hangman_(game)" target="_blank" rel="noopener noreferrer">a Hangman game`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. One can use that class to implement a program through which the user can play the Hangman game. In our case, the programmer who creates the program will be the one who determines which the correct word is, and the user will then repeatedly guess on the letters in the word. When the user has guessed on letters that are not part of the correct word 9 times, the user loses. The user wins when she has guessed on all the letters part of the correct word.</p><p>The <code>HangmanGame</code> class contains the methods summarized in Table 1 below.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>__init__(correct_word)</code></td><td>Creates a new <code>HangmanGame</code> instance one can use to play the Hangman game. <code>correct_word</code> (str) will be the word the user should guess on.</td></tr><tr><td><code>make_guess(letter)</code></td><td>Registers that the user makes a guess on <code>letter</code> (str) being part of the correct word.</td></tr><tr><td><code>get_underlined_word()</code></td><td>Returns the correct word with all letters replaced with <code>_</code> expect for the letters the user has guessed on.</td></tr><tr><td><code>has_player_lost()</code></td><td>Returns <code>True</code> if the user has made 9 guesses. <br> Returns <code>False</code> otherwise.</td></tr><tr><td><code>has_player_won()</code></td><td>Returns <code>True</code> if the user has guessed on all the letters part of the correct word. <br> Returns <code>False</code> otherwise.</td></tr></tbody></table><p>With these methods, you should be able to create a program that contains a loop that keeps asking the user to guess on a new letter until the user has guessed 9 times or guessed on all the letters part of the correct word. Do that. It can look like what is shown below.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>_____
Guess letter: k
_____
Guess letter: e
_e_e_
Guess letter: f
_e_e_
Guess letter: t
_ete_
Guess letter: r
_eter
Guess letter: p
peter
You won!
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="sample-answer-42" tabindex="-1"><a class="header-anchor" href="#sample-answer-42" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise6ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>from</span> HangmanGame <span class="token keyword"${
          _scopeId
        }>import</span> HangmanGame

game <span class="token operator"${
          _scopeId
        }>=</span> HangmanGame<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;bob&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>while</span> <span class="token keyword"${
          _scopeId
        }>not</span> game<span class="token punctuation"${
          _scopeId
        }>.</span>has_player_lost<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token keyword"${
          _scopeId
        }>and</span> <span class="token keyword"${
          _scopeId
        }>not</span> game<span class="token punctuation"${
          _scopeId
        }>.</span>has_player_won<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
	
	<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>game<span class="token punctuation"${
          _scopeId
        }>.</span>get_underlined_word<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	
	guess <span class="token operator"${
          _scopeId
        }>=</span> <span class="token builtin"${
          _scopeId
        }>input</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Enter guess: &quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
	
	game<span class="token punctuation"${
          _scopeId
        }>.</span>make_guess<span class="token punctuation"${
          _scopeId
        }>(</span>guess<span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span>game<span class="token punctuation"${
          _scopeId
        }>.</span>get_underlined_word<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token keyword"${
          _scopeId
        }>if</span> game<span class="token punctuation"${
          _scopeId
        }>.</span>has_player_won<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
	<span class="token keyword"${
          _scopeId
        }>print</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Good job, you won!&quot;</span><span class="token punctuation"${
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
        }>&quot;Sorry, you lost.&quot;</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                (0,external_vue_.createTextVNode)(" HangmanGame "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" HangmanGame\n\ngame "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" HangmanGame"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"bob\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "while"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "not"),
                (0,external_vue_.createTextVNode)(" game"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("has_player_lost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "and"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "not"),
                (0,external_vue_.createTextVNode)(" game"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("has_player_won"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("game"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("get_underlined_word"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\n\tguess "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token builtin" }, "input"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Enter guess: \""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\n\tgame"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("make_guess"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("guess"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("game"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("get_underlined_word"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createTextVNode)(" game"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("has_player_won"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Good job, you won!\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "print"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Sorry, you lost.\""),
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
  _push(`<h3 id="problem-6-2-creating-classes" tabindex="-1"><a class="header-anchor" href="#problem-6-2-creating-classes" aria-hidden="true">#</a> Problem 6.2: Creating classes</h3><p>Create the class <code>GuessingGame</code> that represents a guessing game (the user should guess on a number, and the game let&#39;s the user know if the guess is correct or not). The user has at most 10 guesses. The class should have methods as described in Table 2 below.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>__init__()</code></td><td>Creates a new <code>GuessingGame</code> instance one can use to play the Guessing game. The constructor generates a new random integer between <code>0</code> and <code>20</code> the user should guess on.</td></tr><tr><td><code>process_guess(guess)</code></td><td>Registers that the user has guessed on the number <code>guess</code>. <br> Returns <code>True</code> if the guess is correct. <br> Returns <code>False</code> if the guess is not correct.</td></tr><tr><td><code>has_used_all_guesses()</code></td><td>Returns <code>True</code> if the user has made 10 guesses (if <code>process_guess()</code> has been called 10 times). <br> Returns <code>False</code> otherwise.</td></tr></tbody></table><p>If you have implemented the class correctly, the program below should be able to make use of it to let the user play the game.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>game <span class="token operator">=</span> GuessingGame<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Guess which number between 0 and 20 I&#39;m thinking of.&quot;</span><span class="token punctuation">)</span>
guessed_right <span class="token operator">=</span> <span class="token boolean">False</span>
<span class="token keyword">while</span> <span class="token keyword">not</span> guessed_right <span class="token keyword">and</span> <span class="token keyword">not</span> game<span class="token punctuation">.</span>has_used_all_guesses<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    guess <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter guess: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    guessed_right <span class="token operator">=</span> game<span class="token punctuation">.</span>process_guess<span class="token punctuation">(</span>guess<span class="token punctuation">)</span>
<span class="token keyword">if</span> guessed_right<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Yes, that was the number!&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Too bad, game over.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="sample-answer-43" tabindex="-1"><a class="header-anchor" href="#sample-answer-43" aria-hidden="true">#</a> Sample answer</h4>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_SampleAnswer, {
    showAfter: _ctx.$frontmatter.exercise6ShowAfter
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-python ext-py line-numbers-mode"${
          _scopeId
        }><pre class="language-python"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>import</span> random

<span class="token keyword"${
          _scopeId
        }>class</span> <span class="token class-name"${
          _scopeId
        }>GuessingGame</span><span class="token punctuation"${
          _scopeId
        }>:</span>
	
	<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>__init__</span><span class="token punctuation"${
          _scopeId
        }>(</span>self<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
		self<span class="token punctuation"${
          _scopeId
        }>.</span>correct_number <span class="token operator"${
          _scopeId
        }>=</span> random<span class="token punctuation"${
          _scopeId
        }>.</span>randint<span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token number"${
          _scopeId
        }>20</span><span class="token punctuation"${
          _scopeId
        }>)</span>
		self<span class="token punctuation"${
          _scopeId
        }>.</span>number_of_guesses <span class="token operator"${
          _scopeId
        }>=</span> <span class="token number"${
          _scopeId
        }>0</span>
	
	<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>has_used_all_guesses</span><span class="token punctuation"${
          _scopeId
        }>(</span>self<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
		<span class="token keyword"${
          _scopeId
        }>return</span> self<span class="token punctuation"${
          _scopeId
        }>.</span>number_of_guesses <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>10</span>
	
	<span class="token keyword"${
          _scopeId
        }>def</span> <span class="token function"${
          _scopeId
        }>process_guess</span><span class="token punctuation"${
          _scopeId
        }>(</span>self<span class="token punctuation"${
          _scopeId
        }>,</span> guess<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>:</span>
		
		self<span class="token punctuation"${
          _scopeId
        }>.</span>number_of_guesses <span class="token operator"${
          _scopeId
        }>=</span> self<span class="token punctuation"${
          _scopeId
        }>.</span>number_of_guesses <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span>
		
		<span class="token keyword"${
          _scopeId
        }>return</span> guess <span class="token operator"${
          _scopeId
        }>==</span> self<span class="token punctuation"${
          _scopeId
        }>.</span>correct_number
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
          (0,external_vue_.createVNode)("div", { class: "language-python ext-py line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-python" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                (0,external_vue_.createTextVNode)(" random\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token class-name" }, "GuessingGame"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "__init__"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("self"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\tself"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("correct_number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" random"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("randint"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "20"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\t\tself"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("number_of_guesses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)("\n\t\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "has_used_all_guesses"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("self"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" self"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("number_of_guesses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createTextVNode)("\n\t\n\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "def"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "process_guess"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("self"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" guess"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t\tself"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("number_of_guesses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" self"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("number_of_guesses "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" guess "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" self"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("correct_number\n")
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
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exercises.html.vue?vue&type=template&id=244f6e52

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exercises.html.vue

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

/***/ 6359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7e7ef5e7",
  "path": "/courses/introduction-to-script-programming/exercises.html",
  "title": "Exercises",
  "lang": "en-US",
  "frontmatter": {
    "exercise0ShowAfter": "2021-10-26T11:45",
    "exercise1ShowAfter": "2021-11-01T11:45",
    "exercise2ShowAfter": "2021-11-08T11:45",
    "exercise3ShowAfter": "2021-11-15T11:45",
    "exercise4ShowAfter": "2021-11-22T11:45",
    "exercise5ShowAfter": "2021-11-29T11:45",
    "exercise6ShowAfter": "2021-12-06T11:45"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Introduction",
      "slug": "introduction",
      "children": []
    },
    {
      "level": 2,
      "title": "Getting started with Python",
      "slug": "getting-started-with-python",
      "children": []
    },
    {
      "level": 2,
      "title": "Exercise 0: Input & output",
      "slug": "exercise-0-input-output",
      "children": [
        {
          "level": 3,
          "title": "Problem 0.1: Producing output",
          "slug": "problem-0-1-producing-output",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 0.2: Reading input",
          "slug": "problem-0-2-reading-input",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 0.3: Celsius to fahrenheit",
          "slug": "problem-0-3-celsius-to-fahrenheit",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 0.4: Fahrenheit to celsius",
          "slug": "problem-0-4-fahrenheit-to-celsius",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 0.5: Lengths of events",
          "slug": "problem-0-5-lengths-of-events",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 0.6: Lengths of events (seconds)",
          "slug": "problem-0-6-lengths-of-events-seconds",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 1: Loops",
      "slug": "exercise-1-loops",
      "children": [
        {
          "level": 3,
          "title": "Problem 1.1: Repeated statements",
          "slug": "problem-1-1-repeated-statements",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.2: Repeated execution",
          "slug": "problem-1-2-repeated-execution",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.3: Dynamic number of iterations",
          "slug": "problem-1-3-dynamic-number-of-iterations",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.4: Computing a sum the bad way",
          "slug": "problem-1-4-computing-a-sum-the-bad-way",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.5: Computing a sum the good way",
          "slug": "problem-1-5-computing-a-sum-the-good-way",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.6: Computing a sum",
          "slug": "problem-1-6-computing-a-sum",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.7: Computing a harder sum",
          "slug": "problem-1-7-computing-a-harder-sum",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 1.8: Computing a harder sum (again)",
          "slug": "problem-1-8-computing-a-harder-sum-again",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 2: Functions",
      "slug": "exercise-2-functions",
      "children": [
        {
          "level": 3,
          "title": "Problem 2.1: Using a module",
          "slug": "problem-2-1-using-a-module",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.2: A random time",
          "slug": "problem-2-2-a-random-time",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.3: Many random integers",
          "slug": "problem-2-3-many-random-integers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.4: Content of folder",
          "slug": "problem-2-4-content-of-folder",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.5: Introducing functions",
          "slug": "problem-2-5-introducing-functions",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.6: Exponentiation",
          "slug": "problem-2-6-exponentiation",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.7: Computing sums",
          "slug": "problem-2-7-computing-sums",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.8: Computing other sums",
          "slug": "problem-2-8-computing-other-sums",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 2.9: Computing fun sums",
          "slug": "problem-2-9-computing-fun-sums",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 3: Conditions",
      "slug": "exercise-3-conditions",
      "children": [
        {
          "level": 3,
          "title": "Problem 3.1: Comparing numbers",
          "slug": "problem-3-1-comparing-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.2: Comparing more numbers",
          "slug": "problem-3-2-comparing-more-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.3: Summering integers",
          "slug": "problem-3-3-summering-integers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.4: Comparing many numbers",
          "slug": "problem-3-4-comparing-many-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.5: A multiplication training program",
          "slug": "problem-3-5-a-multiplication-training-program",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.6: A guessing game",
          "slug": "problem-3-6-a-guessing-game",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.7: Looking for values",
          "slug": "problem-3-7-looking-for-values",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 3.8: Greatest value",
          "slug": "problem-3-8-greatest-value",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 4: Lists & Dicts",
      "slug": "exercise-4-lists-dicts",
      "children": [
        {
          "level": 3,
          "title": "Problem 4.1: Merging lists",
          "slug": "problem-4-1-merging-lists",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.2: Computing sums",
          "slug": "problem-4-2-computing-sums",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.3: Translating digits",
          "slug": "problem-4-3-translating-digits",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.4: The total sum of a dict",
          "slug": "problem-4-4-the-total-sum-of-a-dict",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.5: The pairwise sum of two dicts",
          "slug": "problem-4-5-the-pairwise-sum-of-two-dicts",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.6: Grouping words",
          "slug": "problem-4-6-grouping-words",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.7: A friendly program",
          "slug": "problem-4-7-a-friendly-program",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 4.8: A friendlier program",
          "slug": "problem-4-8-a-friendlier-program",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 5: Files",
      "slug": "exercise-5-files",
      "children": [
        {
          "level": 3,
          "title": "Problem 5.1: Working with files",
          "slug": "problem-5-1-working-with-files",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 5.2: Working with files",
          "slug": "problem-5-2-working-with-files",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 5.3: Storing the friendly friends",
          "slug": "problem-5-3-storing-the-friendly-friends",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exercise 6: Object-oriented Programming",
      "slug": "exercise-6-object-oriented-programming",
      "children": [
        {
          "level": 3,
          "title": "Problem 6.1: Using classes",
          "slug": "problem-6-1-using-classes",
          "children": []
        },
        {
          "level": 3,
          "title": "Problem 6.2: Creating classes",
          "slug": "problem-6-2-creating-classes",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/introduction-to-script-programming/exercises.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ }),

/***/ 924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-download-python.c007b91d.png";

/***/ }),

/***/ 3205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-download-vs-code.373f248a.png";

/***/ }),

/***/ 2350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-install-python.b7dc7c02.png";

/***/ }),

/***/ 9130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-install-vs-code.0996437c.png";

/***/ }),

/***/ 6998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-notepad.11176350.png";

/***/ }),

/***/ 1319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-run-powershell.56f01460.png";

/***/ }),

/***/ 5857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-vs-code-create-project.ab33bc45.png";

/***/ }),

/***/ 6689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-vs-code-running-python.2435890f.png";

/***/ }),

/***/ 986:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/getting-started-vs-code-writing-python.00394640.png";

/***/ })

};
;
//# sourceMappingURL=9506.app.js.map