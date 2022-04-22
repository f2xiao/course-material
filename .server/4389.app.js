"use strict";
exports.id = 4389;
exports.ids = [4389];
exports.modules = {

/***/ 4972:
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
// EXTERNAL MODULE: ./src/courses/android-development/files/laboratory-work-gui.jpeg
var laboratory_work_gui = __webpack_require__(3536);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/android-development/laboratory-work.html.vue?vue&type=template&id=f155c4ae





function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CompactInfo = (0,external_vue_.resolveComponent)("CompactInfo")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")

  _push(`<!--[--><h1 id="laboratory-work" tabindex="-1"><a class="header-anchor" href="#laboratory-work" aria-hidden="true">#</a> Laboratory Work</h1><p>On this page you find information about the examination test <code>Laboratory Work</code>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CompactInfo, { infoPieces: {
    "Number of credits": "1.5",
    "Grades": ["Fail", "Pass"],
    "How to work": "Individually",
    "Goal": "To learn the basics in Android Development.",
    "Instructions": "Complete and present your solution to the lab described on this page to a teacher at a lab session.",
    "Help": "Ask the teacher for help at the lab sessions."
} }, null, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Help, don&#39;t cheat!</p><p>The laboratory work is individual work.</p><p><strong>It is OK to help each other</strong>. Examples of that:</p><ul><li>help your friend to debug his code</li><li>explain to your friend why his code doesn&#39;t work the way he thinks it works</li><li>compare and discuss different solutions to a lab problem with your friend after both of you have solved the lab to figure out which solution is the best one</li></ul><p><strong>It is NOT OK to cooperate in any way</strong>. Examples of that:</p><ul><li>sit at the same computer and write code together with your friend</li><li>sit at different computers and discuss and write the same code as your friend</li><li>give code to/receive code from your friend</li></ul><p><strong>You must write your own code! If you are unsure about what counts as <em>helping</em> and what counts as <em>cheating</em>, then simply work alone and ask only the teacher at the lab sessions for help.</strong></p></div><h2 id="what-you-need-to-know" tabindex="-1"><a class="header-anchor" href="#what-you-need-to-know" aria-hidden="true">#</a> What you need to know</h2><p>Before you start working on the lab, you are recommended to view/read at least the following lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/java/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Java`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Java")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` (even if most new Android applications are implemented din Kotlin, many old applications are still implemented in Java)</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/kotlin/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Kotlin`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Kotlin")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-design-patterns/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android Design Patterns`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android Design Patterns")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` (kind of repetition from your OOP courses)</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-introduction/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android Introduction`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android Introduction")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-fundamental-application-components/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android Fundamental Application Components`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android Fundamental Application Components")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-activities/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android Activities`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android Activities")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-views-and-layouts/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android Views and Layouts`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android Views and Layouts")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-linear-layout/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android Linear Layout`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android Linear Layout")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-constraint-layout/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android Constraint Layout`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android Constraint Layout")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/android-list-view/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Android ListView`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Android ListView")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><p>These recorded lectures, together with the first lecture and the first tutorial, should teach you most of what you need to use to complete the lab. Feel free to use more advanced views to implement a better graphical user interface.</p><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing Required Software</h2><p>In this course, we will only use Android Studio and the tools that come with it to create Android applications.</p><h3 id="on-the-school-s-computers" tabindex="-1"><a class="header-anchor" href="#on-the-school-s-computers" aria-hidden="true">#</a> On the school&#39;s computers</h3><p><strong>If you work on a computer in E1206, E2432 or E2433</strong>, all required software should already be installed for you, so no need to install anything yourself.</p><p><strong>If you work on a school computer in any other room</strong>, you need to manually install the required software through the <em>Software Center</em> application (unless someone already has done that on the specific computer you are using).</p><h3 id="on-your-own-computer" tabindex="-1"><a class="header-anchor" href="#on-your-own-computer" aria-hidden="true">#</a> On your own computer</h3><p><strong>If you work on your own private computer</strong>, you need to download and install all required software yourself. In this course all required software is available for free for both Windows, Mac and Linux.</p><p>Just follow the instructions at <a href="https://developer.android.com/studio/index.html" target="_blank" rel="noopener noreferrer">https://developer.android.com/studio/index.html`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to download and install Android Studio.</p><p>To test the android applications you create, you need to run them on an Android device. If you have your own smartphone or tablet running Android you can use that one, just connect it to your computer using a USB cable.</p><div class="custom-container tip"><p class="custom-container-title">For Windows users</p><p>On Windows you need to <a href="https://developer.android.com/studio/run/oem-usb.html" target="_blank" rel="noopener noreferrer">Install OEM USB drivers`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to be able to install Android applications on your connected Android device.</p></div><p>To more easily debug applications when they run on your own Android device, you need to <a href="https://developer.android.com/studio/debug/dev-options.html" target="_blank" rel="noopener noreferrer">Configure on-device developer options`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>If you don&#39;t have your own Android device to run your Android applications on, you can use an Android emulator that comes with Android Studio. If the emulator has not automatically been configured to take advantage of VM acceleration when Android Studio was installed, we highly recommend you to configure it to take advantage of the speed improvements (so the emulator lag less) by <a href="https://developer.android.com/studio/run/emulator-acceleration#accel-vm" target="_blank" rel="noopener noreferrer">Configuring VM acceleration`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. This is a good idea even if you have a physical Android device to test on, because you probably want to test run your Android applications on different versions of Android, different screen sizes, etc., which is easy to do on an emulator, but impossible to do on a physical device.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Getting VM acceleration to work is sometimes hard. If the emulator for some reason can&#39;t use it, it&#39;s hard to debug the reason. For example, you might get the error message <code>This computer meets requirements for HAXM, but VT-x is not turned on</code>, and the problem could be that <a href="https://stackoverflow.com/questions/21635504/error-during-installing-haxm-vt-x-not-working" target="_blank" rel="noopener noreferrer">an antivirus program doesn&#39;t allow it to be used`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Your development experience will be much better if you manage to enable VM acceleration, but it&#39;s probably not worth spending 20 hours on trying to get it to work.</p></div><p>Android Studio often reads from and writes to many files, such as when you create a new Android Studio project or when you build your application. To be efficient, it&#39;s important that reading from and writing to files is fast. There are some known cases slowing down this process, such as:</p><ul><li>Antivirus programs you have installed</li><li>Windows Defender</li><li>Windows File Indexing</li></ul><p>Nowadays Android Studio might install exceptions to these programs, improving the build performance, but if Android Studio is slow, you might want to investigate this.</p><div class="custom-container tip"><p class="custom-container-title">For Windows users</p><p>You can often find out what&#39;s slowing down Android Studio by using the <a href="https://www.howtogeek.com/108742/how-to-use-the-new-task-manager-in-windows-8/" target="_blank" rel="noopener noreferrer">Task Manager`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to find the process that allocates much of your computer resources when Android Studio is slow, and then try to configure it to ignore Android Studio&#39;s folders. For example, see <a href="https://stackoverflow.com/a/49336163/2104665" target="_blank" rel="noopener noreferrer">configure Windows Defender and Windows File Indexing to ignore Android Studio folders`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><p>A fast CPU and an SSD instead of an HDD will of course also make Android Studio run faster as well; running Android Studio on a weak laptop usually gives you a very bad development experience.</p><h2 id="the-assignment" tabindex="-1"><a class="header-anchor" href="#the-assignment" aria-hidden="true">#</a> The Assignment</h2><p>The Graphical User Interface (GUI) for an Android application is to a large extent structured the same way as for a website (which you probably are acquaintance with).</p><table><thead><tr><th>Website</th><th>Android application</th></tr></thead><tbody><tr><td>Consists of multiple webpages</td><td>Consists of multiple activities</td></tr><tr><td>One webpage is shown at a time</td><td>One activity is shown at a time</td></tr><tr><td>URIs are used to identify webpages</td><td>Intents are used to identify activities</td></tr></tbody></table><p>When designing the GUI for an Android application it is hence important to think of which activities it should consist of. Traditionally, websites have been designed to be used by desktop computers with a large screen, and it&#39;s not uncommon to see a webpage you can do multiple things on, such as a webpage with both a &quot;sign in&quot; form, a &quot;sign up&quot; form and a &quot;I forgot my password&quot; form.</p><p>Android applications on the other hand often run on devices with a small screen, and there&#39;s not enough room to display more than one functionality at a time. Hence one functionality per activity is a good guideline, which you should follow in this lab.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>With the introduction of fragments in Android API level 11 (Android 3), the guideline <em>One functionality per activity</em> is not that accurate since an entire application can consist of a single activity that changes which fragments it&#39;s displaying, and each fragment provides a functionality of some kind. Hence, <em>One feature per screen</em> might be a more accurate guideline.</p></div><p>In this lab you should implement a simple ToDo app, in which users can create, view, edit and delete ToDo items. Start by creating a new project in Android Studio. To start easy, add an <code>Empty Activity</code> initially, only support the latest version of Android and use Kotlin as your programming language (feel free to use Java if you want, but the code mentioned below on this page is Kotlin code).</p><p>A ToDo item will be represented using the <code>ToDo</code> class shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. That code can be put in a new Kotlin file named <code>Todo.kt</code>, or similar.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The ToDo class." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-kotlin ext-kt line-numbers-mode"${
          _scopeId
        }><pre class="language-kotlin"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>package</span> XXX

<span class="token keyword"${
          _scopeId
        }>data</span> <span class="token keyword"${
          _scopeId
        }>class</span> <span class="token function"${
          _scopeId
        }>ToDo</span><span class="token punctuation"${
          _scopeId
        }>(</span>
    <span class="token keyword"${
          _scopeId
        }>val</span> id<span class="token operator"${
          _scopeId
        }>:</span> Int<span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token keyword"${
          _scopeId
        }>var</span> title<span class="token operator"${
          _scopeId
        }>:</span> String<span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token keyword"${
          _scopeId
        }>var</span> content<span class="token operator"${
          _scopeId
        }>:</span> String
<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>

    <span class="token keyword"${
          _scopeId
        }>override</span> <span class="token keyword"${
          _scopeId
        }>fun</span> <span class="token function"${
          _scopeId
        }>toString</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=</span> title

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
          (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "package"),
                (0,external_vue_.createTextVNode)(" XXX\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "data"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "ToDo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                (0,external_vue_.createTextVNode)(" id"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" Int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                (0,external_vue_.createTextVNode)(" title"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" String"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                (0,external_vue_.createTextVNode)(" content"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" String\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "toString"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" title\n\n"),
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
    _: 1
  }, _parent))
  _push(`<p>The data in your application is optimally stored in the built in supported SQLite database, but to simplify this lab (which primarily is about using activities) we will instead store the ToDo items in a global variable as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The ToDo items are stored in a global variable." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-kotlin ext-kt line-numbers-mode"${
          _scopeId
        }><pre class="language-kotlin"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>package</span> XXX

<span class="token comment"${
          _scopeId
        }>// Global variable used to store all ToDos.</span>
<span class="token keyword"${
          _scopeId
        }>val</span> toDoRepository <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>ToDoRepository</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>apply</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token comment"${
          _scopeId
        }>// Let&#39;s add two initial ToDos.</span>
    <span class="token function"${
          _scopeId
        }>addToDo</span><span class="token punctuation"${
          _scopeId
        }>(</span>
        <span class="token string"${
          _scopeId
        }>&quot;Feed the pets&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token string"${
          _scopeId
        }>&quot;Give the cat a fish and the dog a cat.&quot;</span>
    <span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token function"${
          _scopeId
        }>addToDo</span><span class="token punctuation"${
          _scopeId
        }>(</span>
        <span class="token string"${
          _scopeId
        }>&quot;Exercise&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token string"${
          _scopeId
        }>&quot;Take a walk and listen to music.&quot;</span>
    <span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token keyword"${
          _scopeId
        }>class</span> ToDoRepository<span class="token punctuation"${
          _scopeId
        }>{</span>

    <span class="token keyword"${
          _scopeId
        }>private</span> <span class="token keyword"${
          _scopeId
        }>val</span> toDos <span class="token operator"${
          _scopeId
        }>=</span> mutableListOf<span class="token operator"${
          _scopeId
        }>&lt;</span>ToDo<span class="token operator"${
          _scopeId
        }>&gt;</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>

    <span class="token keyword"${
          _scopeId
        }>fun</span> <span class="token function"${
          _scopeId
        }>addToDo</span><span class="token punctuation"${
          _scopeId
        }>(</span>title<span class="token operator"${
          _scopeId
        }>:</span> String<span class="token punctuation"${
          _scopeId
        }>,</span> content<span class="token operator"${
          _scopeId
        }>:</span> String<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>:</span> Int<span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>val</span> id <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>when</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
            toDos<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>count</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span> <span class="token operator"${
          _scopeId
        }>-&gt;</span> <span class="token number"${
          _scopeId
        }>1</span>
            <span class="token keyword"${
          _scopeId
        }>else</span> <span class="token operator"${
          _scopeId
        }>-&gt;</span> toDos<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>last</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>id<span class="token operator"${
          _scopeId
        }>+</span><span class="token number"${
          _scopeId
        }>1</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span>
        toDos<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>add</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token function"${
          _scopeId
        }>ToDo</span><span class="token punctuation"${
          _scopeId
        }>(</span>
            id<span class="token punctuation"${
          _scopeId
        }>,</span>
            title<span class="token punctuation"${
          _scopeId
        }>,</span>
            content
        <span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> id
    <span class="token punctuation"${
          _scopeId
        }>}</span>

    <span class="token keyword"${
          _scopeId
        }>fun</span> <span class="token function"${
          _scopeId
        }>getAllToDos</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=</span> toDos

    <span class="token keyword"${
          _scopeId
        }>fun</span> <span class="token function"${
          _scopeId
        }>getToDoById</span><span class="token punctuation"${
          _scopeId
        }>(</span>id<span class="token operator"${
          _scopeId
        }>:</span> Int<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=</span>
        toDos<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>find</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
            it<span class="token punctuation"${
          _scopeId
        }>.</span>id <span class="token operator"${
          _scopeId
        }>==</span> id
        <span class="token punctuation"${
          _scopeId
        }>}</span>

    <span class="token keyword"${
          _scopeId
        }>fun</span> <span class="token function"${
          _scopeId
        }>deleteToDoById</span><span class="token punctuation"${
          _scopeId
        }>(</span>id<span class="token operator"${
          _scopeId
        }>:</span> Int<span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=</span>
        toDos<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>remove</span><span class="token punctuation"${
          _scopeId
        }>(</span>
            toDos<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>find</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
                it<span class="token punctuation"${
          _scopeId
        }>.</span>id <span class="token operator"${
          _scopeId
        }>==</span> id
            <span class="token punctuation"${
          _scopeId
        }>}</span>
        <span class="token punctuation"${
          _scopeId
        }>)</span>

    <span class="token keyword"${
          _scopeId
        }>fun</span> <span class="token function"${
          _scopeId
        }>updateToDoById</span><span class="token punctuation"${
          _scopeId
        }>(</span>id<span class="token operator"${
          _scopeId
        }>:</span> Int<span class="token punctuation"${
          _scopeId
        }>,</span> newTitle<span class="token operator"${
          _scopeId
        }>:</span> String<span class="token punctuation"${
          _scopeId
        }>,</span> newContent<span class="token operator"${
          _scopeId
        }>:</span> String<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>

        <span class="token function"${
          _scopeId
        }>getToDoById</span><span class="token punctuation"${
          _scopeId
        }>(</span>id<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token operator"${
          _scopeId
        }>?</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>run</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            title <span class="token operator"${
          _scopeId
        }>=</span> newTitle
            content <span class="token operator"${
          _scopeId
        }>=</span> newContent
        <span class="token punctuation"${
          _scopeId
        }>}</span>

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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "package"),
                (0,external_vue_.createTextVNode)(" XXX\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Global variable used to store all ToDos."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                (0,external_vue_.createTextVNode)(" toDoRepository "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "ToDoRepository"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "apply"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Let's add two initial ToDos."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addToDo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Feed the pets\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Give the cat a fish and the dog a cat.\""),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addToDo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Exercise\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Take a walk and listen to music.\""),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                (0,external_vue_.createTextVNode)(" ToDoRepository"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "private"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                (0,external_vue_.createTextVNode)(" toDos "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" mutableListOf"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)("ToDo"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addToDo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("title"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" String"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" content"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" String"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" Int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                (0,external_vue_.createTextVNode)(" id "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            toDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "count"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                (0,external_vue_.createTextVNode)(" toDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "last"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        toDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "add"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "ToDo"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n            id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n            title"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n            content\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" id\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllToDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" toDos\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getToDoById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" Int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)("\n        toDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "find"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            it"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" id\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "deleteToDoById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" Int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)("\n        toDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "remove"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n            toDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "find"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                it"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" id\n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "updateToDoById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" Int"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" newTitle"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" String"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" newContent"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(" String"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n\n        "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getToDoById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "run"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            title "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" newTitle\n            content "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" newContent\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Now we have the handling of the data in the application done, now we just need to build the graphical user interface on top of this to allow the user to see and modify the data. The final application should be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Overview of the GUI." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><img${
          (0,server_renderer.ssrRenderAttr)("src", laboratory_work_gui)
        } alt="Overview of the GUI."${
          _scopeId
        }></p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("img", {
              src: laboratory_work_gui,
              alt: "Overview of the GUI."
            })
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>You should support at least 2 languages (English + another one), but the data (title and content of the ToDo items) will of course only be available in one language.</p><h3 id="mainactivity" tabindex="-1"><a class="header-anchor" href="#mainactivity" aria-hidden="true">#</a> MainActivity</h3><p>The <code>MainActivity</code> should list the titles of all ToDo items and have a CREATE button. Clicking on one of the titles should start the <code>ViewToDoActivity</code> that displays more information about the ToDo that was clicked (pass the id of the clicked ToDo item in the intent), and clicking on the CREATE button should start the <code>CreateToDoActivity</code>.</p><p>The layout for the <code>MainActivity</code> can be a <a href="https://developer.android.com/reference/android/support/constraint/ConstraintLayout" target="_blank" rel="noopener noreferrer">ConstraintLayout`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> that displays a <a href="https://developer.android.com/guide/topics/ui/controls/button" target="_blank" rel="noopener noreferrer">Button`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> at the bottom of the layout and a <a href="https://developer.android.com/reference/android/widget/ListView" target="_blank" rel="noopener noreferrer">ListView`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in the rest of the space above it. The <code>ListView</code> will in turn display the title of each ToDo item. To do that, you can use code like the one shown `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below in the Activity&#39;s <code>onCreate()</code> (you need to add a <code>&lt;ListView&gt;</code> to your layout with appropriate attributes).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Adding an ArrayAdapter to a ListView." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-kotlin ext-kt line-numbers-mode"${
          _scopeId
        }><pre class="language-kotlin"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>val</span> listView <span class="token operator"${
          _scopeId
        }>=</span> theActivity<span class="token punctuation"${
          _scopeId
        }>.</span>findViewById<span class="token operator"${
          _scopeId
        }>&lt;</span>ListView<span class="token operator"${
          _scopeId
        }>&gt;</span><span class="token punctuation"${
          _scopeId
        }>(</span>R<span class="token punctuation"${
          _scopeId
        }>.</span>id<span class="token punctuation"${
          _scopeId
        }>.</span>list_view<span class="token punctuation"${
          _scopeId
        }>)</span>
listView<span class="token punctuation"${
          _scopeId
        }>.</span>adapter <span class="token operator"${
          _scopeId
        }>=</span> ArrayAdapter<span class="token operator"${
          _scopeId
        }>&lt;</span>ToDo<span class="token operator"${
          _scopeId
        }>&gt;</span><span class="token punctuation"${
          _scopeId
        }>(</span>
    aContext<span class="token punctuation"${
          _scopeId
        }>,</span>
    android<span class="token punctuation"${
          _scopeId
        }>.</span>R<span class="token punctuation"${
          _scopeId
        }>.</span>layout<span class="token punctuation"${
          _scopeId
        }>.</span>simple_list_item_1<span class="token punctuation"${
          _scopeId
        }>,</span>
    android<span class="token punctuation"${
          _scopeId
        }>.</span>R<span class="token punctuation"${
          _scopeId
        }>.</span>id<span class="token punctuation"${
          _scopeId
        }>.</span>text1<span class="token punctuation"${
          _scopeId
        }>,</span>
    toDoRepository<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getAllToDos</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                (0,external_vue_.createTextVNode)(" listView "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" theActivity"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("findViewById"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)("ListView"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("R"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("list_view"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\nlistView"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("adapter "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" ArrayAdapter"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)("ToDo"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n    aContext"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    android"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("R"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("layout"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("simple_list_item_1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    android"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("R"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("text1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    toDoRepository"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllToDos"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
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
  _push(`<p>Then you also need to register a click listener on the <code>listView</code> for listening for clicks on the ToDo items in it.</p><h3 id="createtodoactivity" tabindex="-1"><a class="header-anchor" href="#createtodoactivity" aria-hidden="true">#</a> CreateToDoActivity</h3><p>The <code>CreateToDoActivity</code> should display a form through which the user can enter the title and content of a new ToDo item. When a new ToDo item has successfully been created the user should be taken to the <code>ViewToDoActivity</code> displaying the ToDo item the user just created (pass the id of the newly created ToDo item in the intent).</p><p>You can use an <a href="https://developer.android.com/reference/android/widget/EditText" target="_blank" rel="noopener noreferrer">EditText`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to let the user enter som text. You can then use the code in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below to read out what text the user has entered in the <code>EditText</code>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Reading out the text the user has entered in an EditText." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-kotlin ext-kt line-numbers-mode"${
          _scopeId
        }><pre class="language-kotlin"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>val</span> title <span class="token operator"${
          _scopeId
        }>=</span> theActivity<span class="token punctuation"${
          _scopeId
        }>.</span>findViewById<span class="token operator"${
          _scopeId
        }>&lt;</span>EditText<span class="token operator"${
          _scopeId
        }>&gt;</span><span class="token punctuation"${
          _scopeId
        }>(</span>
    R<span class="token punctuation"${
          _scopeId
        }>.</span>id<span class="token punctuation"${
          _scopeId
        }>.</span>title_edit_text
<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>editableText<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>toString</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                (0,external_vue_.createTextVNode)(" title "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" theActivity"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("findViewById"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)("EditText"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n    R"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("title_edit_text\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("editableText"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "toString"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Add some kind of validation so the user can&#39;t add bad ToDo items, such as a ToDo item with a too short/long title/content. Display descriptive error messages to the user if something is invalid, e.g. change the text in a <a href="https://developer.android.com/reference/android/widget/TextView" target="_blank" rel="noopener noreferrer">TextView`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><div class="custom-container tip"><p class="custom-container-title">Listen for user typing</p><p>If you want to listen for when the user types something in an <code>EditText</code> you can use a <a href="https://developer.android.com/reference/android/text/TextWatcher" target="_blank" rel="noopener noreferrer">TextWatcher`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. This way you can validate the input as the user types it (i.e. give immediate feedback), and, for example, disable the SAVE button when the input is invalid, and enable it when the input is valid.</p></div><div class="custom-container tip"><p class="custom-container-title">Make it more beautiful</p><p>Instead of using an <code>EditText</code> you can use a <a href="https://developer.android.com/reference/com/google/android/material/textfield/TextInputLayout.html" target="_blank" rel="noopener noreferrer">TextInputLayout`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> together with a <code>TextInputEditText</code> to make it look a bit more beautiful.</p></div><div class="custom-container tip"><p class="custom-container-title">Improving back navigation</p><p>When the user has created a new ToDo item and ended up at the <code>ViewToDoActivity</code> and then clicks on the back button, the user probably wants to end up at the <code>MainActivity</code>, and not at the <code>CreateToDoActivity</code>. To make that happen, you can in the <code>CreateToDoActivity</code> call <code>finish()</code> after you have started the <code>ViewToDoActivity</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Updating the MainActivity</p><p>When the user navigates back to the <code>MainActivity</code> after having created a new ToDo item, you need to tell the <code>ListView</code> to re-render itself, since it&#39;s data source (the list with all ToDo items) has changed. You can do that by calling the <a href="https://developer.android.com/reference/android/widget/ArrayAdapter.html#notifyDataSetChanged()" target="_blank" rel="noopener noreferrer">notifyDataSetChanged()`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> method on your <code>ArrayAdapter</code> in the <code>MainActivity</code>&#39;s <code>onStart()</code> method.</p></div><h3 id="viewtodoactivity" tabindex="-1"><a class="header-anchor" href="#viewtodoactivity" aria-hidden="true">#</a> ViewToDoActivity</h3><p>The <code>ViewToDoActivity</code> should display all information about a ToDo item with a specific id. This activity should define the name of an extra argument that can be put in the Intent starting this activity, specifying the id of the ToDo item to display information about. This can be put in the class&#39;s companion object, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A companion object that can be put inside a class." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-kotlin ext-kt line-numbers-mode"${
          _scopeId
        }><pre class="language-kotlin"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>companion</span> <span class="token keyword"${
          _scopeId
        }>object</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>const</span> <span class="token keyword"${
          _scopeId
        }>val</span> EXTRA_TODO_ID <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;TODO_ID&quot;</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "companion"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "object"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                (0,external_vue_.createTextVNode)(" EXTRA_TODO_ID "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"TODO_ID\""),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The <code>ViewToDoActivity</code> activity should also contain an UPDATE button and a DELETE button. Clicking on the UPDATE button should start the <code>UpdateToDoActivity</code>, where the user can change the title and content of the currently displayed ToDo item. Clicking on the DELETE button should display a dialog where the user can confirm the she wants to delete the ToDo item. To display the dialog, you can use the code shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Code showing a dialog." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-kotlin ext-kt line-numbers-mode"${
          _scopeId
        }><pre class="language-kotlin"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// TODO: Don&#39;t hardcode strings in English.</span>
AlertDialog<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>Builder</span><span class="token punctuation"${
          _scopeId
        }>(</span>aContext<span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>setTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Delete ToDo&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>setMessage</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Do you really want to delete it?&quot;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>setPositiveButton</span><span class="token punctuation"${
          _scopeId
        }>(</span>
        <span class="token string"${
          _scopeId
        }>&quot;Yes&quot;</span>
    <span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token punctuation"${
          _scopeId
        }>{</span> dialog<span class="token punctuation"${
          _scopeId
        }>,</span> whichButton <span class="token operator"${
          _scopeId
        }>-&gt;</span>
        <span class="token comment"${
          _scopeId
        }>// Delete it.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>setNegativeButton</span><span class="token punctuation"${
          _scopeId
        }>(</span>
        <span class="token string"${
          _scopeId
        }>&quot;No&quot;</span>
    <span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token punctuation"${
          _scopeId
        }>{</span> dialog<span class="token punctuation"${
          _scopeId
        }>,</span> whichButton <span class="token operator"${
          _scopeId
        }>-&gt;</span>
        <span class="token comment"${
          _scopeId
        }>// Do not delete it.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>show</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// TODO: Don't hardcode strings in English."),
                (0,external_vue_.createTextVNode)("\nAlertDialog"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "Builder"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("aContext"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Delete ToDo\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setMessage"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Do you really want to delete it?\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setPositiveButton"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Yes\""),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)(" dialog"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" whichButton "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Delete it."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "setNegativeButton"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"No\""),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)(" dialog"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" whichButton "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do not delete it."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "show"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>If the user deletes the ToDo item, take the user back to the <code>MainActivity</code>.</p><div class="custom-container warning"><p class="custom-container-title">Runtime configuration changes not handled</p><p>The dialog in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above does not survive runtime configuration changes. For example, try showing the dialog and then rotate the screen. The dialog disappears since a runtime configuration change occurred, causing the activity to be destroyed and then re-created. Handled properly, the dialog should still be shown after the activity has been re-created, but handling that is not part of this lab.</p></div><div class="custom-container warning"><p class="custom-container-title">Text overflow</p><p>What happens if you have a ToDo item with a very long text (or use a device with a very small screen) so all text can&#39;t be shown on the screen at once? Can you scroll to see the rest of it? Nope, not unless you use a <a href="https://developer.android.com/reference/android/widget/ScrollView" target="_blank" rel="noopener noreferrer">ScrollView`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> or similar. Using that is always a good idea when you display text that you are not sure will fit on all screens (i.e. in most cases).</p></div><h3 id="updatetodoactivity" tabindex="-1"><a class="header-anchor" href="#updatetodoactivity" aria-hidden="true">#</a> UpdateToDoActivity</h3><p>You should be able to figure out how to implement the <code>UpdateToDoActivity</code> on your own. Good luck! 😀</p><h2 id="checklist" tabindex="-1"><a class="header-anchor" href="#checklist" aria-hidden="true">#</a> Checklist</h2><p>Before you present your work to a teacher, make sure that:</p><ul><li>At least two different languages are supported throughout the entire application</li><li>You validate the user input when creating and updating a ToDo item and display descriptive error messages if something is invalid</li><li>The back navigation always makes sense (especially after you have created, deleted or updated a ToDo item)</li><li>The data shown on the screen always is up to date (especially after you have created, deleted or updated a ToDo item)</li><li>The user always can properly use the GUI no matter how small screen the user has or how long texts the ToDo items contain</li><li>You understand how all code in your application works</li></ul><h2 id="present-your-work" tabindex="-1"><a class="header-anchor" href="#present-your-work" aria-hidden="true">#</a> Present your work</h2><p>Present your work to a teacher at one of the lab sessions. You should be able to explain how all code in your application works, and the teacher will ask you some questions about it to verify this. If the teacher is satisfied with your presentation he will approve you on the Canvas assignment <a href="https://ju.instructure.com/courses/4825/assignments/25231" target="_blank" rel="noopener noreferrer">The Lab`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <strong>after</strong> you have uploaded your Android Studio project there.</p><h2 id="optional-exercises" tabindex="-1"><a class="header-anchor" href="#optional-exercises" aria-hidden="true">#</a> Optional exercises</h2><p>These exercises are not part of the laboratory work. Feel free to complete them to practice on using various techniques/concepts used in Android applications before you apply them in your project work. If you get stuck you can always ask the teacher at a lab session for help. When you&#39;re done, feel free to discuss your solution with a teacher at a lab session to get some feedback on your work.</p><h3 id="handling-runtime-configuration-changes" tabindex="-1"><a class="header-anchor" href="#handling-runtime-configuration-changes" aria-hidden="true">#</a> Handling runtime configuration changes</h3><p>In the <code>ViewToDoActivity</code>, when the activity starts, create a new instance of <a href="https://developer.android.com/reference/android/speech/tts/TextToSpeech" target="_blank" rel="noopener noreferrer">TextToSpeech`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> and use it to speak out loud the title and the content of the ToDo item.</p><p>When the user rotates the screen, a runtime configuration change will take place, causing the activity to be destroyed and re-created. This should be transparent to the user, but if you don&#39;t write special code handling that, you will in the re-created activity create a new instance of <code>TextToSpeech</code> again and tell it to speak out loud the title and the content of the ToDo item again. That should not happen.</p><p>And if the user chooses to leave the activity before your <code>TextToSpeech</code> instance is done saying the entire title and content, you need to tell your <code>TextToSpeech</code> instance to stop talking. As a result, your <code>TextToSpeech</code> instance needs to survive configuration changes. This can be done using a model fragment (a fragment with no GUI and that has been set to retain it&#39;s instance) (old solution) or using a ViewModel (modern solution).</p><div class="custom-container danger"><p class="custom-container-title">Think twice about the context</p><p>When creating a new instance of the <code>TextToSpeech</code> class you need to pass it a context. Using the activity as the context works, but if the activity is destroyed and re-created, the destroyed activity can&#39;t be garbage collected since the <code>TextToSpeech</code> instance holds a reference to it. Therefor (as in many other cases) it is better to pass it the context <code>anActivity.applicationContext</code> instead.</p></div><p>In the <code>ViewToDoActivity</code> you can also try to handle runtime configuration changes so the delete dialog appears as it should when the activity is re-created. To make that happen you should use a <a href="https://developer.android.com/reference/android/support/v4/app/DialogFragment.html" target="_blank" rel="noopener noreferrer">DialogFragment`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to show the dialog.</p><h3 id="storing-data-in-a-database" tabindex="-1"><a class="header-anchor" href="#storing-data-in-a-database" aria-hidden="true">#</a> Storing data in a database</h3><p>Store data in the built-in supported SQLite database. Either do it the old way using <a href="https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper" target="_blank" rel="noopener noreferrer">SQLiteOpenHelper`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, or do it the more modern way using the <a href="https://developer.android.com/topic/libraries/architecture/room" target="_blank" rel="noopener noreferrer">Room Persistence Library`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><div class="custom-container danger"><p class="custom-container-title">Think twice about the context</p><p>To work with the SQLite database you need to pass it a context. If your database communication object outlives your activity (e.g. if you use the singleton pattern), using the activity as the context is bad, since the activity can&#39;t be garbage collected when the user leaves it, so rather (as usual) use <code>anActivity.applicationContext</code> as your context instead.</p></div><h3 id="storing-data-in-firestore" tabindex="-1"><a class="header-anchor" href="#storing-data-in-firestore" aria-hidden="true">#</a> Storing data in Firestore</h3><p>Store your data in <a href="https://firebase.google.com/docs/firestore/" target="_blank" rel="noopener noreferrer">Firestore`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Let the user create and login to a new account, and then store the ToDo items in Firestore. This way, it doesn&#39;t matter which device the user is using, she can access her ToDo items on all of them!</p><h3 id="using-a-recyclerview" tabindex="-1"><a class="header-anchor" href="#using-a-recyclerview" aria-hidden="true">#</a> Using a RecyclerView</h3><p>In <code>MainActivity</code>, instead of using a <code>ListView</code> to display the title of all ToDo items, use a <a href="https://developer.android.com/reference/android/support/v7/widget/RecyclerView" target="_blank" rel="noopener noreferrer">RecyclerView`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Allow the user to delete a ToDo item simply by swiping the title of the ToDo item to the side.</p><h3 id="using-notifications" tabindex="-1"><a class="header-anchor" href="#using-notifications" aria-hidden="true">#</a> Using Notifications</h3><p>Add a timestamp to each ToDo item representing a deadline for when that ToDo item should be completed. Then use the <a href="https://developer.android.com/reference/android/app/AlarmManager" target="_blank" rel="noopener noreferrer">AlarmManager`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to create an Intent that is broadcasted each day (e.g. at 09:00; can potentially be configured by the user through a <code>SettingsActivity</code>), and then create a <a href="https://developer.android.com/reference/android/content/BroadcastReceiver" target="_blank" rel="noopener noreferrer">BroadcastReceiver`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> listening for this Intent, and when your receiver receives the intent, <a href="https://developer.android.com/guide/topics/ui/notifiers/notifications" target="_blank" rel="noopener noreferrer">display a notification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to the user with information about which ToDo items that needs to be completed within 24 hours.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/laboratory-work.html.vue?vue&type=template&id=f155c4ae

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/laboratory-work.html.vue

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

/***/ 5606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-9c1bdfa0",
  "path": "/courses/android-development/laboratory-work.html",
  "title": "Laboratory Work",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What you need to know",
      "slug": "what-you-need-to-know",
      "children": []
    },
    {
      "level": 2,
      "title": "Installing Required Software",
      "slug": "installing-required-software",
      "children": [
        {
          "level": 3,
          "title": "On the school's computers",
          "slug": "on-the-school-s-computers",
          "children": []
        },
        {
          "level": 3,
          "title": "On your own computer",
          "slug": "on-your-own-computer",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "The Assignment",
      "slug": "the-assignment",
      "children": [
        {
          "level": 3,
          "title": "MainActivity",
          "slug": "mainactivity",
          "children": []
        },
        {
          "level": 3,
          "title": "CreateToDoActivity",
          "slug": "createtodoactivity",
          "children": []
        },
        {
          "level": 3,
          "title": "ViewToDoActivity",
          "slug": "viewtodoactivity",
          "children": []
        },
        {
          "level": 3,
          "title": "UpdateToDoActivity",
          "slug": "updatetodoactivity",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Checklist",
      "slug": "checklist",
      "children": []
    },
    {
      "level": 2,
      "title": "Present your work",
      "slug": "present-your-work",
      "children": []
    },
    {
      "level": 2,
      "title": "Optional exercises",
      "slug": "optional-exercises",
      "children": [
        {
          "level": 3,
          "title": "Handling runtime configuration changes",
          "slug": "handling-runtime-configuration-changes",
          "children": []
        },
        {
          "level": 3,
          "title": "Storing data in a database",
          "slug": "storing-data-in-a-database",
          "children": []
        },
        {
          "level": 3,
          "title": "Storing data in Firestore",
          "slug": "storing-data-in-firestore",
          "children": []
        },
        {
          "level": 3,
          "title": "Using a RecyclerView",
          "slug": "using-a-recyclerview",
          "children": []
        },
        {
          "level": 3,
          "title": "Using Notifications",
          "slug": "using-notifications",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/android-development/laboratory-work.md",
  "git": {
    "updatedTime": 1645992330000
  }
}


/***/ }),

/***/ 3536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/laboratory-work-gui.bf9266d6.jpeg";

/***/ })

};
;
//# sourceMappingURL=4389.app.js.map