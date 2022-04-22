"use strict";
exports.id = 4033;
exports.ids = [4033];
exports.modules = {

/***/ 604:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/android-activities/index.html.vue?vue&type=template&id=02b0c23c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")
  const _component_Smartphone = (0,external_vue_.resolveComponent)("Smartphone")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="android-activities" tabindex="-1"><a class="header-anchor" href="#android-activities" aria-hidden="true">#</a> Android Activities</h1><p>Activities are one of the four different fundamental application components all Android applications consists of. We use them to specify what the graphical user interface (GUI) should look like. Let&#39;s take a look at how they work!</p><iframe width="560" height="314" src="https://www.youtube.com/embed/2clnFgc69nA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-activities.pdf">android-activities.pdf</a></li><li><a href="android-activities.pptx">android-activities.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li>The following chapters from the course book <a href="https://commonsware.com/AndExplore/" target="_blank" rel="noopener noreferrer">Exploring Android`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>: <ul><li>What We Are Building</li><li>Installing the Tools</li><li>Creating a Starter Project</li><li>Modifying the Manifest</li><li>Changing Our Icon</li><li>Adding a Library</li><li>Constructing a Layout</li><li>Setting up the App Bar</li><li>Setting up an Activity</li></ul></li></ul><p>The <a href="https://developer.android.com/guide" target="_blank" rel="noopener noreferrer">Android Developers Guide`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> is a free alternative.</p><h2 id="activities" tabindex="-1"><a class="header-anchor" href="#activities" aria-hidden="true">#</a> Activities</h2><p>An <em>activity</em> is a fundamental application component you can use to show a graphical user interface to the user, and which the user can interact with to give input to your application. Your application usually consist of multiple activities, each with its own purpose, such as:</p><ul><li>One activity to display and handle interaction with a login form</li><li>One activity to display and handle interaction with a registration form</li><li>One activity to display and handle interaction with all accounts in the application</li><li>Etc.</li></ul><p>Only one activity at a time is shown on the user&#39;s screen.</p><h3 id="creating-a-new-activity" tabindex="-1"><a class="header-anchor" href="#creating-a-new-activity" aria-hidden="true">#</a> Creating a new activity</h3><p>A general activity is represented by the Android framework class <code>Activity</code>. When you want to create your own activity, you should create your own class that inherits from the <code>Activity</code> class, and in which you override some methods to give your own activity the specific behavior you want it to have.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, there&#39;s a convention to let all your own activity classes end with the name <code>Activity</code>, such as <code>LoginActivity</code>. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.</p></div><p>Just creating a new class that inherits from the <code>Activity</code> class is not enough for the Android framework to recognize your class as an activity. You must also register this class as an activity in the <code>AndroidManifest.xml</code> file using the <code>&lt;activity&gt;</code> element in the <code>&lt;application&gt;</code> element (further down is an example of all this). When using the <code>&lt;activity&gt;</code> element, you must add the following attributes to it:</p><ul><li><code>android:name</code>, which should be: <ul><li>The full identifier for the class (i.e package name followed by the class name, e.g. <code>se.ju.larpet.myapp.LoginActivity</code>), or:</li><li>An identifier for the class relative the your application&#39;s package name (e.g. if you have <code>&lt;manifest android:package=&quot;se.ju.larpet.myapp&quot;</code>), then you can just write <code>.LoginActivity</code></li></ul></li><li><code>android:exported</code>, which should be: <ul><li><code>true</code>, if you want the OS/other applications to be able to start the activity (typically used for the activity that should be started when the user starts your application)</li><li><code>false</code>, if you only want your own code to be able to start the activity (typically the case for most of your activities)</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Creating a new activity in Android Studio</p><p>When you ask Android Studio to create a new activity for you, it will create a new Java/Kotlin file containing your own class inheriting from the <code>Activity</code> class AND register this class as an activity in <code>AndroidManifest.xml</code> for you, so you don&#39;t need to remember all this by heart.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing a project with a single activity only your own app can start.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
              }>&lt;</span>manifest</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }>package</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>se.ju.larpet.myapp<span class="token punctuation"${
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
              }>&lt;</span>application</span> <span class="token attr-name"${
                _scopeId
              }>...</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MyActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>false<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
		
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>application</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>manifest</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MyActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("false"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity

<span class="token keyword"${
                _scopeId
              }>class</span> MyActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
	
	<span class="token comment"${
                _scopeId
              }>// Override methods here to give your own activity</span>
	<span class="token comment"${
                _scopeId
              }>// the specific behavior you want it to have.</span>
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MyActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Override methods here to give your own activity"),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the specific behavior you want it to have."),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " ")
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
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MyActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("false"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MyActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Override methods here to give your own activity"),
                    (0,external_vue_.createTextVNode)("\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the specific behavior you want it to have."),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " ")
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
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><p>The <code>&lt;activity&gt;</code> element has more attributes you can use to add more information about the activity, such as:</p><ul><li><code>android:label</code>: A string with the name of the activity (used for example when the user is asked to select an activity to complete an action)</li><li><code>android:theme</code>: A theme to use in the activity (when you want another one than the one specified in <code>&lt;application android:theme=&quot;XXX&quot;&gt;</code>)</li><li>Etc.</li></ul><p>Most often you don&#39;t need to provide these extra attributes, but do be aware of the possibility.</p><h3 id="adding-an-activity-to-the-launcher" tabindex="-1"><a class="header-anchor" href="#adding-an-activity-to-the-launcher" aria-hidden="true">#</a> Adding an activity to the launcher</h3><p>The launcher app in Android is the &quot;desktop&quot; app that runs directly when the device starts, and that app typically shows all installed apps the user can start by clicking on them. It actually doesn&#39;t show apps that can be started, but activities in them that can be started, so one and the same app can actually display multiple activities in the launcher, and not just one, but just one is of course most common.</p><p>So, if you want the launcher to show one of your activities here, the activity must have <code>android:exported=&quot;true&quot;</code> (so the other apps are allowed to start the activity). Then you must also add an <code>&lt;intent-filter&gt;</code> to your activity to tell other apps information about the activity, such as:</p><ul><li>The <code>android:name</code> attribute in the <code>&lt;category&gt;</code> element to indicate which a category the activity belongs to (for launcher activities, use the value <code>android.intent.category.LAUNCHER</code>)</li><li>The <code>android:name</code> attribute in the <code>&lt;action&gt;</code> element to indicate which <em>actions</em> the activity can handle (the launcher app will start the activity with the action <code>android.intent.action.MAIN</code> (meaning no additional info is passed to the activity), so your activity must explicitly say it can handle that type of action)</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing a project with one launcher activity.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
              }>&lt;</span>manifest</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }>package</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>se.ju.larpet.myapp<span class="token punctuation"${
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
              }>&lt;</span>application</span> <span class="token attr-name"${
                _scopeId
              }>...</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MyActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>true<span class="token punctuation"${
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
              }>&lt;</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>category</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>action</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.action.MAIN<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
			<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
			
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>activity</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>application</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>manifest</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MyActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("true"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("category")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("action")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity

<span class="token keyword"${
                _scopeId
              }>class</span> MyActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
	
	<span class="token comment"${
                _scopeId
              }>// Override methods here to give your own activity</span>
	<span class="token comment"${
                _scopeId
              }>// the specific behavior you want it to have.</span>
	
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MyActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Override methods here to give your own activity"),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the specific behavior you want it to have."),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MyActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("true"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("category")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("action")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MyActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Override methods here to give your own activity"),
                    (0,external_vue_.createTextVNode)("\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the specific behavior you want it to have."),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The <code>MyActivity</code> will now be shown in the user&#39;s launcher, and when the user clicks on it, the <code>MyActivity</code> will be started.</p></div><h3 id="specifying-the-gui" tabindex="-1"><a class="header-anchor" href="#specifying-the-gui" aria-hidden="true">#</a> Specifying the GUI</h3><p>By default, the activity has no GUI, and a blank screen is shown when the activity is started. If you want to add a GUI to your activity, override the method <code>onCreate()</code>, and specify what the GUI should be by calling the method <code>setContentView()</code>. Most often the GUI is specified in XML files you put in the <code>res/layout/</code> folder, and to <code>setContentView()</code> you pass an identifier to the XML file to use for the GUI.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, there&#39;s a convention to name layouts that are used by activities as <code>activity_XXX.xml</code>, such as <code>activity_login.xml</code>. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.</p></div><p><code>onCreate()</code> will be called with a <code>Bundle</code> as argument called <code>savedInstanceState</code>. That argument is very important to handle <em>runtime configuration changes</em> properly, which we will cover in another lecture. For now, it&#39;s enough for you to know that you must pass this <code>Bundle</code> to the <code>onCreate()</code> method you override.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing how to create an activity with a GUI.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
              }>&lt;</span>manifest</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }>package</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>se.ju.larpet.myapp<span class="token punctuation"${
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
              }>&lt;</span>application</span> <span class="token attr-name"${
                _scopeId
              }>...</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MyActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>true<span class="token punctuation"${
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
              }>&lt;</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>category</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>action</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.action.MAIN<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
			<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
			
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>activity</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>application</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>manifest</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MyActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("true"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("category")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("action")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("manifest")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
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
              }>&lt;</span>LinearLayout</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>orientation</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>vertical<span class="token punctuation"${
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
              }>&lt;</span>TextView</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Hello, world!<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>LinearLayout</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div></div><div class="line-numbers"${
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
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("orientation")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("vertical"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Hello, world!"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " ")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>os<span class="token punctuation"${
                _scopeId
              }>.</span>Bundle

<span class="token keyword"${
                _scopeId
              }>class</span> MyActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
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
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
		<span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token function"${
                _scopeId
              }>setContentView</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>layout<span class="token punctuation"${
                _scopeId
              }>.</span>activity_main<span class="token punctuation"${
                _scopeId
              }>)</span>
		
	<span class="token punctuation"${
                _scopeId
              }>}</span>
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("os"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Bundle\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MyActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MyActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("true"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("category")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("action")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("manifest")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("orientation")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("vertical"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Hello, world!"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " ")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("os"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Bundle\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MyActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_Smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto","grid-template-rows":"auto"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }"${
          _scopeId
        }> Hello, world! </div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { style: {"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto","grid-template-rows":"auto"} }, [
            (0,external_vue_.createVNode)("div", { style: {"grid-column":"1","grid-row":"1"} }, " Hello, world! ")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><p>To learn more about how to create graphical user interfaces in Android, checkout the lecture `)
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
  _push(`.</p><h3 id="starting-another-activity" tabindex="-1"><a class="header-anchor" href="#starting-another-activity" aria-hidden="true">#</a> Starting another activity</h3><p>To navigate the user to another activity, call the method <code>startActivity()</code> on a <code>Context</code>. <code>Activity</code> inherits from <code>Context</code>, so you can call <code>startActivity()</code> on the <code>Activity</code> itself. When you call this method, you pass it an <code>Intent</code> indicating which other activity in your app to start. To the <code>Intent</code> constructor you pass a <code>Context</code> (e.g. the <code>Activity</code> itself) and the runtime class of the <code>Activity</code> that should be started, like <code>LoginActivity::class.java</code> to start the <code>LoginActivity</code>.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing how to create an activity with a GUI.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
              }>&lt;</span>manifest</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }>package</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>se.ju.larpet.myapp<span class="token punctuation"${
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
              }>&lt;</span>application</span> <span class="token attr-name"${
                _scopeId
              }>...</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MainActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>true<span class="token punctuation"${
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
              }>&lt;</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>category</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>action</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.action.MAIN<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
			<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
			
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>activity</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.SecondActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>false<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
		
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>application</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>manifest</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MainActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("true"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("category")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("action")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".SecondActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("false"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
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
              }>&lt;</span>LinearLayout</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>orientation</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>vertical<span class="token punctuation"${
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
              }>&lt;</span>Button</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Go to SecondActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>LinearLayout</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("orientation")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("vertical"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Go to SecondActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>os<span class="token punctuation"${
                _scopeId
              }>.</span>Bundle
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>Button
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>content<span class="token punctuation"${
                _scopeId
              }>.</span>Intent

<span class="token keyword"${
                _scopeId
              }>class</span> MainActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
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
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
		<span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token function"${
                _scopeId
              }>setContentView</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>layout<span class="token punctuation"${
                _scopeId
              }>.</span>activity_main<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Find the button from the layout file.</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> button <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>Button<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>button<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Call setOnClickListener on the button and pass it a function</span>
		<span class="token comment"${
                _scopeId
              }>// that will be called when the user clicks on the button.</span>
		button<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
			
			<span class="token comment"${
                _scopeId
              }>// When the user clicks on the button, this function (between</span>
			<span class="token comment"${
                _scopeId
              }>// { and }) will be called.</span>
			
			<span class="token comment"${
                _scopeId
              }>// Start and take the user to SecondActivity.</span>
			<span class="token function"${
                _scopeId
              }>startActivity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token function"${
                _scopeId
              }>Intent</span><span class="token punctuation"${
                _scopeId
              }>(</span>
				<span class="token keyword"${
                _scopeId
              }>this</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token comment"${
                _scopeId
              }>// Pass this activity as the Context.</span>
				SecondActivity<span class="token operator"${
                _scopeId
              }>::</span><span class="token keyword"${
                _scopeId
              }>class</span><span class="token punctuation"${
                _scopeId
              }>.</span>java
			<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
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
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("os"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Bundle\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Button\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("content"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Intent\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MainActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the button from the layout file."),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" button "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("Button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Call setOnClickListener on the button and pass it a function"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// that will be called when the user clicks on the button."),
                      (0,external_vue_.createTextVNode)("\n\t\tbutton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When the user clicks on the button, this function (between"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// { and }) will be called."),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Start and take the user to SecondActivity."),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Pass this activity as the Context."),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\tSecondActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("java\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_second.xml" }, {
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
              }>&lt;</span>LinearLayout</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>orientation</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>vertical<span class="token punctuation"${
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
              }>&lt;</span>TextView</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>I<span class="token punctuation"${
                _scopeId
              }>&#39;</span>m SecondActivity!<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>LinearLayout</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("orientation")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("vertical"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("I"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "'"),
                          (0,external_vue_.createTextVNode)("m SecondActivity!"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "SecondActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>os<span class="token punctuation"${
                _scopeId
              }>.</span>Bundle

<span class="token keyword"${
                _scopeId
              }>class</span> SecondActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
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
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
		<span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token function"${
                _scopeId
              }>setContentView</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>layout<span class="token punctuation"${
                _scopeId
              }>.</span>activity_second<span class="token punctuation"${
                _scopeId
              }>)</span>
		
	<span class="token punctuation"${
                _scopeId
              }>}</span>
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("os"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Bundle\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" SecondActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_second"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MainActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("true"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("category")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("action")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".SecondActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("false"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("orientation")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("vertical"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Go to SecondActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("os"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Bundle\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Button\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("content"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Intent\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MainActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the button from the layout file."),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" button "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("Button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Call setOnClickListener on the button and pass it a function"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// that will be called when the user clicks on the button."),
                    (0,external_vue_.createTextVNode)("\n\t\tbutton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When the user clicks on the button, this function (between"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// { and }) will be called."),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Start and take the user to SecondActivity."),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Pass this activity as the Context."),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\tSecondActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("java\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_second.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("orientation")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("vertical"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("I"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "'"),
                        (0,external_vue_.createTextVNode)("m SecondActivity!"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "SecondActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("os"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Bundle\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" SecondActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_second"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_Smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div id="screen897987" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"})
        }"${
          _scopeId
        }><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }" onclick="document.querySelector(&#39;#screen897987&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen85426&#39;).style.display = &#39;grid&#39;;"${
          _scopeId
        }> Go to SecondActivity </button></div><div id="screen85426" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }"${
          _scopeId
        }> I&#39;m SecondActivity! </div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            id: "screen897987",
            style: {"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"1"},
              onclick: "document.querySelector('#screen897987').style.display = 'none'; document.querySelector('#screen85426').style.display = 'grid';"
            }, " Go to SecondActivity ")
          ]),
          (0,external_vue_.createVNode)("div", {
            id: "screen85426",
            style: {"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("div", { style: {"grid-column":"1","grid-row":"1"} }, " I'm SecondActivity! ")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>If the user would press the back button on the Android device when she has come to the second activity, she would be taken back to the first activity.</p></div><h3 id="passing-information-to-another-activity" tabindex="-1"><a class="header-anchor" href="#passing-information-to-another-activity" aria-hidden="true">#</a> Passing information to another activity</h3><p>Often when you start another activity you need to pass additional information to the activity you start. For example, maybe you have:</p><ul><li><code>ListNewsArticlesActivity</code>, which list news articles, and when you click on one of them the user should come to:</li><li><code>ViewNewsArticleActivity</code>, which shows all information about a specific news article</li></ul><p><code>ViewNewsArticleActivity</code> needs to know which article to show information about, so when you start this activity, you need to pass along an identifier to the article to show. That type of information can be passed in a <code>Bundle</code> in the <code>Intent</code> you use to start the activity. <code>Intent</code> has a method called <code>putExtra()</code>, that you can call to add such information to the <code>Bundle</code> in the <code>Intent</code>. When you call <code>putExtra()</code> you pass it two arguments:</p><ul><li>The first argument is a string used as a key for the value you want to pass along</li><li>The second argument is the actual value you want to pass along</li></ul><p>The receiving activity can then through the <code>Intent</code> starting it (stored in the class&#39; <code>intent</code> property) obtain the value passed along using the same key by calling a <code>get*Extra()</code> method (like <code>getIntExtra()</code>, or <code>getStringExtra()</code>, etc., depending on the datatype of the value). When calling the <code>get*Extra()</code> you also need to pass a value that should be returned if the one starting the activity forgot to pass along the extra information.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, the convention is to put the keys in constants named <code>EXTRA_XXX</code> in the receiving activity file, and always refer to these constants whenever you call <code>putExtra()</code> or <code>get*Extra()</code>. This way, you don&#39;t risking misspelling the name of the key, so you don&#39;t risk compiling an app that will crash when it runs. If you now misspell the constant instead, you will get a compiler error you are immediately aware of.</p><p>The constants also serve as documentation; by looking at the <code>EXTRA_XXX</code> constants you can easily see what extra information you need to pass along to the activity when you start it.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing how to create an activity with a GUI.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
              }>&lt;</span>manifest</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }>package</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>se.ju.larpet.myapp<span class="token punctuation"${
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
              }>&lt;</span>application</span> <span class="token attr-name"${
                _scopeId
              }>...</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MainActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>true<span class="token punctuation"${
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
              }>&lt;</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>category</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>action</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.action.MAIN<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
			<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
			
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>activity</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.ShowSumActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>false<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
		
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>application</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>manifest</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MainActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("true"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("category")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("action")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".ShowSumActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("false"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
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
              }>&lt;</span>LinearLayout</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>orientation</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>vertical<span class="token punctuation"${
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
              }>&lt;</span>Button</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Show 4 + 8<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/first_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>Button</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Show 7 + 2<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/second_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>LinearLayout</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("orientation")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("vertical"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Show 4 + 8"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/first_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Show 7 + 2"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/second_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>os<span class="token punctuation"${
                _scopeId
              }>.</span>Bundle
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>Button
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>content<span class="token punctuation"${
                _scopeId
              }>.</span>Intent

<span class="token keyword"${
                _scopeId
              }>class</span> MainActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
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
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
		<span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token function"${
                _scopeId
              }>setContentView</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>layout<span class="token punctuation"${
                _scopeId
              }>.</span>activity_main<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Find the buttons from the layout file.</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> firstButton <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>Button<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>first_button<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> secondButton <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>Button<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>second_button<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Add click listeners to the buttons starting ShowSumActivity.</span>
		firstButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
			
			<span class="token keyword"${
                _scopeId
              }>val</span> intent <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>Intent</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>this</span><span class="token punctuation"${
                _scopeId
              }>,</span> ShowSumActivity<span class="token operator"${
                _scopeId
              }>::</span><span class="token keyword"${
                _scopeId
              }>class</span><span class="token punctuation"${
                _scopeId
              }>.</span>java<span class="token punctuation"${
                _scopeId
              }>)</span>
			intent<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>putExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>EXTRA_FIRST_TERM<span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token number"${
                _scopeId
              }>4</span><span class="token punctuation"${
                _scopeId
              }>)</span>
			intent<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>putExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>EXTRA_SECOND_TERM<span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token number"${
                _scopeId
              }>8</span><span class="token punctuation"${
                _scopeId
              }>)</span>
			
			<span class="token function"${
                _scopeId
              }>startActivity</span><span class="token punctuation"${
                _scopeId
              }>(</span>intent<span class="token punctuation"${
                _scopeId
              }>)</span>
			
		<span class="token punctuation"${
                _scopeId
              }>}</span>
		
		secondButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
			
			<span class="token function"${
                _scopeId
              }>startActivity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token function"${
                _scopeId
              }>Intent</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>this</span><span class="token punctuation"${
                _scopeId
              }>,</span> ShowSumActivity<span class="token operator"${
                _scopeId
              }>::</span><span class="token keyword"${
                _scopeId
              }>class</span><span class="token punctuation"${
                _scopeId
              }>.</span>java<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>apply</span><span class="token punctuation"${
                _scopeId
              }>{</span>
				<span class="token function"${
                _scopeId
              }>putExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>EXTRA_FIRST_TERM<span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token number"${
                _scopeId
              }>7</span><span class="token punctuation"${
                _scopeId
              }>)</span>
				<span class="token function"${
                _scopeId
              }>putExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>EXTRA_SECOND_TERM<span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token number"${
                _scopeId
              }>2</span><span class="token punctuation"${
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
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("os"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Bundle\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Button\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("content"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Intent\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MainActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the buttons from the layout file."),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" firstButton "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("Button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("first_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" secondButton "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("Button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("second_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add click listeners to the buttons starting ShowSumActivity."),
                      (0,external_vue_.createTextVNode)("\n\t\tfirstButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" intent "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" ShowSumActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("java"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\tintent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("EXTRA_FIRST_TERM"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\tintent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("EXTRA_SECOND_TERM"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "8"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\tsecondButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" ShowSumActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("java"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "apply"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("EXTRA_FIRST_TERM"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("EXTRA_SECOND_TERM"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_show_sum.xml" }, {
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
              }>&lt;</span>LinearLayout</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>orientation</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>vertical<span class="token punctuation"${
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
              }>&lt;</span>TextView</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/sum_text_view<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>LinearLayout</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("orientation")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("vertical"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/sum_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "ShowSumActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>os<span class="token punctuation"${
                _scopeId
              }>.</span>Bundle
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>TextView

<span class="token keyword"${
                _scopeId
              }>const</span> <span class="token keyword"${
                _scopeId
              }>val</span> EXTRA_FIRST_TERM <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;EXTRA_FIRST_TERM&quot;</span>
<span class="token keyword"${
                _scopeId
              }>const</span> <span class="token keyword"${
                _scopeId
              }>val</span> EXTRA_SECOND_TERM <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;EXTRA_SECOND_TERM&quot;</span>

<span class="token keyword"${
                _scopeId
              }>class</span> ShowSumActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
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
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
		<span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token keyword"${
                _scopeId
              }>val</span> firstTerm <span class="token operator"${
                _scopeId
              }>=</span> intent<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getIntExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>EXTRA_FIRST_TERM<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> secondTerm <span class="token operator"${
                _scopeId
              }>=</span> intent<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getIntExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>EXTRA_SECOND_TERM<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> sum <span class="token operator"${
                _scopeId
              }>=</span> firstTerm <span class="token operator"${
                _scopeId
              }>+</span> secondTerm
		
		<span class="token function"${
                _scopeId
              }>setContentView</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>layout<span class="token punctuation"${
                _scopeId
              }>.</span>activity_show_sum<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token keyword"${
                _scopeId
              }>val</span> sumTextView <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>TextView<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>sum_text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
		sumTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;<span class="token interpolation variable"${
                _scopeId
              }>\$firstTerm</span> + <span class="token interpolation variable"${
                _scopeId
              }>\$secondTerm</span> = <span class="token interpolation variable"${
                _scopeId
              }>\$sum</span>&quot;</span>
		
	<span class="token punctuation"${
                _scopeId
              }>}</span>
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("os"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Bundle\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("TextView\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" EXTRA_FIRST_TERM "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"EXTRA_FIRST_TERM\""),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" EXTRA_SECOND_TERM "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"EXTRA_SECOND_TERM\""),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" ShowSumActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" firstTerm "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getIntExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("EXTRA_FIRST_TERM"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" secondTerm "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getIntExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("EXTRA_SECOND_TERM"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" sum "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" firstTerm "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createTextVNode)(" secondTerm\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_show_sum"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" sumTextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("TextView"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("sum_text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\tsumTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, [
                        (0,external_vue_.createTextVNode)("\""),
                        (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$firstTerm"),
                        (0,external_vue_.createTextVNode)(" + "),
                        (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$secondTerm"),
                        (0,external_vue_.createTextVNode)(" = "),
                        (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$sum"),
                        (0,external_vue_.createTextVNode)("\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MainActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("true"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("category")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("action")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".ShowSumActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("false"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("orientation")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("vertical"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Show 4 + 8"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/first_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Show 7 + 2"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/second_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("os"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Bundle\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Button\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("content"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Intent\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MainActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the buttons from the layout file."),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" firstButton "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("Button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("first_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" secondButton "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("Button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("second_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add click listeners to the buttons starting ShowSumActivity."),
                    (0,external_vue_.createTextVNode)("\n\t\tfirstButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" intent "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" ShowSumActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("java"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\tintent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("EXTRA_FIRST_TERM"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "4"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\tintent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("EXTRA_SECOND_TERM"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "8"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\tsecondButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" ShowSumActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("java"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "apply"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("EXTRA_FIRST_TERM"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "7"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("EXTRA_SECOND_TERM"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_show_sum.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("orientation")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("vertical"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/sum_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "ShowSumActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("os"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Bundle\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("TextView\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" EXTRA_FIRST_TERM "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"EXTRA_FIRST_TERM\""),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" EXTRA_SECOND_TERM "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"EXTRA_SECOND_TERM\""),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" ShowSumActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" firstTerm "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getIntExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("EXTRA_FIRST_TERM"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" secondTerm "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getIntExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("EXTRA_SECOND_TERM"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" sum "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" firstTerm "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createTextVNode)(" secondTerm\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_show_sum"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" sumTextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("TextView"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("sum_text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\tsumTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, [
                      (0,external_vue_.createTextVNode)("\""),
                      (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$firstTerm"),
                      (0,external_vue_.createTextVNode)(" + "),
                      (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$secondTerm"),
                      (0,external_vue_.createTextVNode)(" = "),
                      (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$sum"),
                      (0,external_vue_.createTextVNode)("\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_Smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div id="screen7294037" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto 1fr"})
        }"${
          _scopeId
        }><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }" onclick="document.querySelector(&#39;#screen7294037&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen1038362&#39;).style.display = &#39;grid&#39;;"${
          _scopeId
        }> Show 4 + 8 </button><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"2"})
        }" onclick="document.querySelector(&#39;#screen7294037&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen7749372&#39;).style.display = &#39;grid&#39;;"${
          _scopeId
        }> Show 7 + 2 </button></div><div id="screen1038362" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }"${
          _scopeId
        }> 4 + 8 = 12 </div></div><div id="screen7749372" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }"${
          _scopeId
        }> 7 + 2 = 9 </div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            id: "screen7294037",
            style: {"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"1"},
              onclick: "document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen1038362').style.display = 'grid';"
            }, " Show 4 + 8 "),
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"2"},
              onclick: "document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen7749372').style.display = 'grid';"
            }, " Show 7 + 2 ")
          ]),
          (0,external_vue_.createVNode)("div", {
            id: "screen1038362",
            style: {"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("div", { style: {"grid-column":"1","grid-row":"1"} }, " 4 + 8 = 12 ")
          ]),
          (0,external_vue_.createVNode)("div", {
            id: "screen7749372",
            style: {"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("div", { style: {"grid-column":"1","grid-row":"1"} }, " 7 + 2 = 9 ")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><h3 id="passing-information-back" tabindex="-1"><a class="header-anchor" href="#passing-information-back" aria-hidden="true">#</a> Passing information back</h3><p>When an activity starts another activity, that other activity can pass information back to the first activity. This is useful when you need to re-use the same functionality at multiple places. For example, maybe the user should be able to select a color for multiple different parts of your application (one background color, one text color, one favorite color, etc.). Then you can put the &quot;Select color&quot; functionality in its own activity, and then other activities can start this activity whenever they need the user to select a color. When the user has selected her color, the activity sends back that color to the first activity.</p><p>To start an activity that should send back a value, call <code>startActivityForResult()</code> instead of <code>startActivity()</code>. In addition to the <code>Intent</code> identifying the activity to start, you should also pass along a <em>request code</em> (an integer) that you later will get back when the user has made her choice in the other activity. This is useful if the first activity makes multiple different calls to <code>startActivityForResult()</code> (the request code can be used to distinguish the calls).</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, the convention is to put request codes in constants named <code>REQUEST_CODE_XXX</code> in the activity file calling <code>startActivityForResult()</code>. By using constants, you&#39;ll get a compiler error if you make a typing mistake, and it&#39;s easy to see which request code numbers the activity is using, so you don&#39;t risk re-using one and the same by mistake.</p></div><p>In the activity where the user should make her decision, call the method <code>setResult()</code> to indicate that the user has made her decision. Here you need to pass two values:</p><ul><li>A <em>result code</em> (integer) indicating if the selection succeeded or not (one typically use the constants <code>Activity.RESULT_OK</code> if the user made the choice, and <code>Activity.RESULT_CANCELED</code> if the user didn&#39;t/couldn&#39;t make a choice)</li><li>An <code>Intent</code> with more information about the choice the user made</li></ul><p>After the user has made her choice, you typically call <code>finish()</code> on the activity to close it, at which point the user will get back to the previous activity.</p><p>In the activity that called <code>startActivityForResult()</code>, override the method <code>onActivityResult()</code>, which will be called when the user gets back to the activity. Here you receive the following as arguments:</p><ul><li>The request code you used to start the activity</li><li>The result code</li><li>The <code>Intent</code> with more information about the user&#39;s choice</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing how to create an activity with a GUI.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
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
              }>&lt;</span>manifest</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }>package</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>se.ju.larpet.myapp<span class="token punctuation"${
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
              }>&lt;</span>application</span> <span class="token attr-name"${
                _scopeId
              }>...</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MainActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>true<span class="token punctuation"${
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
              }>&lt;</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>category</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
				<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>action</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>android.intent.action.MAIN<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
			<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>intent-filter</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
			
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>activity</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
		
		<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>activity</span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.SelectColorActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>exported</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>false<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
		
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>application</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>manifest</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MainActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("true"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("category")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("action")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("intent-filter")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("activity")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("name")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".SelectColorActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("exported")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("false"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("application")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
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
              }>&lt;</span>LinearLayout</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>orientation</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>vertical<span class="token punctuation"${
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
              }>&lt;</span>TextView</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>This view can be styled!<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/text_view<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>Button</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Select background color<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/select_background_color_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>Button</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Select text color<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/select_text_color_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>LinearLayout</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("orientation")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("vertical"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("This view can be styled!"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Select background color"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/select_background_color_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Select text color"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/select_text_color_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>os<span class="token punctuation"${
                _scopeId
              }>.</span>Bundle
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>Button
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>TextView
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>content<span class="token punctuation"${
                _scopeId
              }>.</span>Intent
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>graphics<span class="token punctuation"${
                _scopeId
              }>.</span>Color

<span class="token keyword"${
                _scopeId
              }>val</span> REQUEST_CODE_SELECT_BACKGROUND_COLOR <span class="token operator"${
                _scopeId
              }>=</span> <span class="token number"${
                _scopeId
              }>1234</span> <span class="token comment"${
                _scopeId
              }>// Actual numbers here doesn&#39;t</span>
<span class="token keyword"${
                _scopeId
              }>val</span> REQUEST_CODE_SELECT_TEXT_COLOR <span class="token operator"${
                _scopeId
              }>=</span> <span class="token number"${
                _scopeId
              }>4321</span> <span class="token comment"${
                _scopeId
              }>// matter as long as they are uniq.</span>

<span class="token keyword"${
                _scopeId
              }>class</span> MainActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
	
	<span class="token keyword"${
                _scopeId
              }>lateinit</span> <span class="token keyword"${
                _scopeId
              }>var</span> textView<span class="token operator"${
                _scopeId
              }>:</span> TextView
	
	<span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
		<span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token function"${
                _scopeId
              }>setContentView</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>layout<span class="token punctuation"${
                _scopeId
              }>.</span>activity_main<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Find the views.</span>
		textView <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>TextView<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>r<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> selectBackgroundColorButton <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>Button<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>select_background_color_button<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> selectTextColorButton <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>Button<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>select_text_color_button<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Add click listeners to the buttons starting SelectColorActivity.</span>
		selectBackgroundColorButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
			
			<span class="token function"${
                _scopeId
              }>startActivityForResult</span><span class="token punctuation"${
                _scopeId
              }>(</span>
				<span class="token function"${
                _scopeId
              }>Intent</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>this</span><span class="token punctuation"${
                _scopeId
              }>,</span> SelectColorActivity<span class="token operator"${
                _scopeId
              }>::</span><span class="token keyword"${
                _scopeId
              }>class</span><span class="token punctuation"${
                _scopeId
              }>.</span>java<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>,</span>
				REQUEST_CODE_SELECT_BACKGROUND_COLOR
			<span class="token punctuation"${
                _scopeId
              }>)</span>
			
		<span class="token punctuation"${
                _scopeId
              }>}</span>
		
		selectTextColorButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
			
			<span class="token function"${
                _scopeId
              }>startActivityForResult</span><span class="token punctuation"${
                _scopeId
              }>(</span>
				<span class="token function"${
                _scopeId
              }>Intent</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>this</span><span class="token punctuation"${
                _scopeId
              }>,</span> SelectColorActivity<span class="token operator"${
                _scopeId
              }>::</span><span class="token keyword"${
                _scopeId
              }>class</span><span class="token punctuation"${
                _scopeId
              }>.</span>java<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>,</span>
				REQUEST_CODE_SELECT_TEXT_COLOR
			<span class="token punctuation"${
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
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onActivityResult</span><span class="token punctuation"${
                _scopeId
              }>(</span>requestCode<span class="token operator"${
                _scopeId
              }>:</span> Int<span class="token punctuation"${
                _scopeId
              }>,</span> resultCode<span class="token operator"${
                _scopeId
              }>:</span> Int<span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token keyword"${
                _scopeId
              }>data</span><span class="token operator"${
                _scopeId
              }>:</span> Intent<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
		
		<span class="token comment"${
                _scopeId
              }>// In this example, resultCode will always be Activity.RESULT_OK, so let&#39;s ignore that parameter.</span>
		
		<span class="token keyword"${
                _scopeId
              }>val</span> color <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>data</span><span class="token operator"${
                _scopeId
              }>!!</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getStringExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>RESULT_EXTRA_COLOR<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token keyword"${
                _scopeId
              }>when</span><span class="token punctuation"${
                _scopeId
              }>(</span>requestCode<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
			REQUEST_CODE_SELECT_BACKGROUND_COLOR <span class="token operator"${
                _scopeId
              }>-&gt;</span> textView<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setBackground</span><span class="token punctuation"${
                _scopeId
              }>(</span>color<span class="token punctuation"${
                _scopeId
              }>)</span>
			REQUEST_CODE_SELECT_TEXT_COLOR <span class="token operator"${
                _scopeId
              }>-&gt;</span> textView<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setTextColor</span><span class="token punctuation"${
                _scopeId
              }>(</span>color<span class="token punctuation"${
                _scopeId
              }>)</span>
			<span class="token keyword"${
                _scopeId
              }>else</span> <span class="token operator"${
                _scopeId
              }>-&gt;</span> <span class="token keyword"${
                _scopeId
              }>throw</span> <span class="token function"${
                _scopeId
              }>IllegalStateException</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;Unknown request code <span class="token interpolation variable"${
                _scopeId
              }>\$requestCode</span>&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token comment"${
                _scopeId
              }>// Should never happen.</span>
		<span class="token punctuation"${
                _scopeId
              }>}</span>
		
	<span class="token punctuation"${
                _scopeId
              }>}</span>
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("os"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Bundle\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Button\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("TextView\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("content"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Intent\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("graphics"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Color\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" REQUEST_CODE_SELECT_BACKGROUND_COLOR "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "1234"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Actual numbers here doesn't"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" REQUEST_CODE_SELECT_TEXT_COLOR "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "4321"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// matter as long as they are uniq."),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MainActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                      (0,external_vue_.createTextVNode)(" textView"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" TextView\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the views."),
                      (0,external_vue_.createTextVNode)("\n\t\ttextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("TextView"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("r"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" selectBackgroundColorButton "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("Button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("select_background_color_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" selectTextColorButton "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("Button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("select_text_color_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add click listeners to the buttons starting SelectColorActivity."),
                      (0,external_vue_.createTextVNode)("\n\t\tselectBackgroundColorButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivityForResult"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" SelectColorActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("java"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\tREQUEST_CODE_SELECT_BACKGROUND_COLOR\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\tselectTextColorButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivityForResult"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" SelectColorActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("java"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\tREQUEST_CODE_SELECT_TEXT_COLOR\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onActivityResult"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("requestCode"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Int"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" resultCode"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Int"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "data"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Intent"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// In this example, resultCode will always be Activity.RESULT_OK, so let's ignore that parameter."),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" color "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "data"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "!!"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getStringExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("RESULT_EXTRA_COLOR"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("requestCode"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\tREQUEST_CODE_SELECT_BACKGROUND_COLOR "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" textView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setBackground"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("color"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\tREQUEST_CODE_SELECT_TEXT_COLOR "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" textView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setTextColor"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("color"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "throw"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "IllegalStateException"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, [
                        (0,external_vue_.createTextVNode)("\"Unknown request code "),
                        (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$requestCode"),
                        (0,external_vue_.createTextVNode)("\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Should never happen."),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_select_color.xml" }, {
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
              }>&lt;</span>LinearLayout</span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>android</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>match_parent<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
	<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>orientation</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>vertical<span class="token punctuation"${
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
              }>&lt;</span>Button</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Red<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/select_red_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
	<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>Button</span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_width</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_height</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>wrap_content<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>text</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Blue<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
		<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/select_blue_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
	
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>LinearLayout</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("android")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("match_parent"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("orientation")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("vertical"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Red"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/select_red_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_width")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("wrap_content"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Blue"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/select_blue_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "SelectColorActivity.kt" }, {
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
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>app<span class="token punctuation"${
                _scopeId
              }>.</span>Activity
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>os<span class="token punctuation"${
                _scopeId
              }>.</span>Bundle
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>TextView
<span class="token keyword"${
                _scopeId
              }>import</span> android<span class="token punctuation"${
                _scopeId
              }>.</span>graphics<span class="token punctuation"${
                _scopeId
              }>.</span>Color

<span class="token keyword"${
                _scopeId
              }>const</span> <span class="token keyword"${
                _scopeId
              }>val</span> RESULT_EXTRA_COLOR <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;RESULT_EXTRA_COLOR&quot;</span>

<span class="token keyword"${
                _scopeId
              }>class</span> SelectColorActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>Activity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
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
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
		<span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreate</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token function"${
                _scopeId
              }>setContentView</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>layout<span class="token punctuation"${
                _scopeId
              }>.</span>activity_select_color<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Find the buttons from the layout file.</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> selectRedButton <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>Button<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>select_red_button<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token keyword"${
                _scopeId
              }>val</span> selectBlueButton <span class="token operator"${
                _scopeId
              }>=</span> findViewById<span class="token operator"${
                _scopeId
              }>&lt;</span>Button<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>select_blue_button<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token comment"${
                _scopeId
              }>// Add click listeners to the buttons.</span>
		selectBackgroundColorButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span><span class="token punctuation"${
                _scopeId
              }>{</span>
				<span class="token function"${
                _scopeId
              }>sendBackColor</span><span class="token punctuation"${
                _scopeId
              }>(</span>Color<span class="token punctuation"${
                _scopeId
              }>.</span>RED<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token punctuation"${
                _scopeId
              }>}</span>
		
		selectTextColorButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span><span class="token punctuation"${
                _scopeId
              }>{</span>
			<span class="token function"${
                _scopeId
              }>sendBackColor</span><span class="token punctuation"${
                _scopeId
              }>(</span>Color<span class="token punctuation"${
                _scopeId
              }>.</span>BLUE<span class="token punctuation"${
                _scopeId
              }>)</span>
		<span class="token punctuation"${
                _scopeId
              }>}</span>
		
	<span class="token punctuation"${
                _scopeId
              }>}</span>
	
	<span class="token comment"${
                _scopeId
              }>// Method to send back a color.</span>
	<span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>sendBackColor</span><span class="token punctuation"${
                _scopeId
              }>(</span>color<span class="token operator"${
                _scopeId
              }>:</span> Int<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
		
		<span class="token function"${
                _scopeId
              }>setResult</span><span class="token punctuation"${
                _scopeId
              }>(</span>
			Activity<span class="token punctuation"${
                _scopeId
              }>.</span>RESULT_OK<span class="token punctuation"${
                _scopeId
              }>,</span>
			<span class="token function"${
                _scopeId
              }>Intent</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>apply</span><span class="token punctuation"${
                _scopeId
              }>{</span>
				<span class="token function"${
                _scopeId
              }>putExtra</span><span class="token punctuation"${
                _scopeId
              }>(</span>RESULT_EXTRA_COLOR<span class="token punctuation"${
                _scopeId
              }>,</span> color<span class="token punctuation"${
                _scopeId
              }>)</span>
			<span class="token punctuation"${
                _scopeId
              }>}</span>
		<span class="token punctuation"${
                _scopeId
              }>)</span>
		
		<span class="token function"${
                _scopeId
              }>finish</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>
		
	<span class="token punctuation"${
                _scopeId
              }>}</span>
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }><br${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><div class="highlight-line"${
                _scopeId
              }> </div><br${
                _scopeId
              }><br${
                _scopeId
              }></div><div class="line-numbers"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("os"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Bundle\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("TextView\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("graphics"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Color\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" RESULT_EXTRA_COLOR "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"RESULT_EXTRA_COLOR\""),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" SelectColorActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_select_color"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the buttons from the layout file."),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" selectRedButton "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("Button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("select_red_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" selectBlueButton "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("Button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("select_blue_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add click listeners to the buttons."),
                      (0,external_vue_.createTextVNode)("\n\t\tselectBackgroundColorButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "sendBackColor"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("Color"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("RED"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\tselectTextColorButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "sendBackColor"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("Color"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("BLUE"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Method to send back a color."),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "sendBackColor"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("color"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Int"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setResult"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("\n\t\t\tActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("RESULT_OK"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "apply"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("RESULT_EXTRA_COLOR"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" color"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "finish"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("br")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "package"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("se.ju.larpet.myapp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MainActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("true"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("category")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.category.LAUNCHER"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("action")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("android.intent.action.MAIN"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("intent-filter")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("activity")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("name")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".SelectColorActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("exported")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("false"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("application")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("orientation")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("vertical"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("This view can be styled!"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Select background color"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/select_background_color_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Select text color"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/select_text_color_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("os"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Bundle\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Button\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("TextView\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("content"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Intent\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("graphics"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Color\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" REQUEST_CODE_SELECT_BACKGROUND_COLOR "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "1234"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Actual numbers here doesn't"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" REQUEST_CODE_SELECT_TEXT_COLOR "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "4321"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// matter as long as they are uniq."),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MainActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                    (0,external_vue_.createTextVNode)(" textView"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" TextView\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the views."),
                    (0,external_vue_.createTextVNode)("\n\t\ttextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("TextView"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("r"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" selectBackgroundColorButton "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("Button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("select_background_color_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" selectTextColorButton "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("Button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("select_text_color_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add click listeners to the buttons starting SelectColorActivity."),
                    (0,external_vue_.createTextVNode)("\n\t\tselectBackgroundColorButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivityForResult"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" SelectColorActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("java"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\tREQUEST_CODE_SELECT_BACKGROUND_COLOR\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\tselectTextColorButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "startActivityForResult"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "this"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" SelectColorActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "::"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("java"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\tREQUEST_CODE_SELECT_TEXT_COLOR\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onActivityResult"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("requestCode"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Int"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" resultCode"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Int"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "data"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Intent"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// In this example, resultCode will always be Activity.RESULT_OK, so let's ignore that parameter."),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" color "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "data"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "!!"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getStringExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("RESULT_EXTRA_COLOR"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("requestCode"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\tREQUEST_CODE_SELECT_BACKGROUND_COLOR "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" textView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setBackground"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("color"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\tREQUEST_CODE_SELECT_TEXT_COLOR "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" textView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setTextColor"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("color"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "throw"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "IllegalStateException"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, [
                      (0,external_vue_.createTextVNode)("\"Unknown request code "),
                      (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$requestCode"),
                      (0,external_vue_.createTextVNode)("\"")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Should never happen."),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_select_color.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("android")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res/android"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("match_parent"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("orientation")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("vertical"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Red"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/select_red_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_width")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("wrap_content"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Blue"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/select_blue_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "SelectColorActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("os"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Bundle\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("TextView\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("graphics"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Color\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" RESULT_EXTRA_COLOR "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"RESULT_EXTRA_COLOR\""),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" SelectColorActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_select_color"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Find the buttons from the layout file."),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" selectRedButton "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("Button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("select_red_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" selectBlueButton "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("Button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("select_blue_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add click listeners to the buttons."),
                    (0,external_vue_.createTextVNode)("\n\t\tselectBackgroundColorButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "sendBackColor"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("Color"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("RED"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\tselectTextColorButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "sendBackColor"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("Color"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("BLUE"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Method to send back a color."),
                    (0,external_vue_.createTextVNode)("\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "sendBackColor"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("color"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Int"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setResult"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("\n\t\t\tActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("RESULT_OK"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Intent"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "apply"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "putExtra"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("RESULT_EXTRA_COLOR"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" color"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "finish"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("br")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_Smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div id="screen573957" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto  auto 1fr"})
        }"${
          _scopeId
        }><div class="text" style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }"${
          _scopeId
        }> This view can be styled! </div><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"2"})
        }" onclick="document.querySelector(&#39;#screen573957&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen74832726&#39;).style.display = &#39;grid&#39;;"${
          _scopeId
        }> Select background color </button><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"3"})
        }" onclick="document.querySelector(&#39;#screen573957&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen7887865&#39;).style.display = &#39;grid&#39;;"${
          _scopeId
        }> Select text color </button></div><div id="screen74832726" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto 1fr"})
        }"${
          _scopeId
        }><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }" onclick="document.querySelector(&#39;#screen74832726&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen573957&#39;).style.display = &#39;grid&#39;; document.querySelector(&#39;#screen573957 .text&#39;).style.backgroundColor = &#39;red&#39;;"${
          _scopeId
        }> Red </button><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"2"})
        }" onclick="document.querySelector(&#39;#screen74832726&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen573957&#39;).style.display = &#39;grid&#39;; document.querySelector(&#39;#screen573957 .text&#39;).style.backgroundColor = &#39;blue&#39;;"${
          _scopeId
        }> Blue </button></div><div id="screen7887865" style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto 1fr"})
        }"${
          _scopeId
        }><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"1"})
        }" onclick="document.querySelector(&#39;#screen7887865&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen573957&#39;).style.display = &#39;grid&#39;; document.querySelector(&#39;#screen573957 .text&#39;).style.color = &#39;red&#39;;"${
          _scopeId
        }> Red </button><button style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","grid-row":"2"})
        }" onclick="document.querySelector(&#39;#screen7887865&#39;).style.display = &#39;none&#39;; document.querySelector(&#39;#screen573957&#39;).style.display = &#39;grid&#39;; document.querySelector(&#39;#screen573957 .text&#39;).style.color = &#39;blue&#39;;"${
          _scopeId
        }> Blue </button></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", {
            id: "screen573957",
            style: {"height":"100%","width":"100%","display":"grid","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto  auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("div", {
              class: "text",
              style: {"grid-column":"1","grid-row":"1"}
            }, " This view can be styled! "),
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"2"},
              onclick: "document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen74832726').style.display = 'grid';"
            }, " Select background color "),
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"3"},
              onclick: "document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen7887865').style.display = 'grid';"
            }, " Select text color ")
          ]),
          (0,external_vue_.createVNode)("div", {
            id: "screen74832726",
            style: {"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"1"},
              onclick: "document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'red';"
            }, " Red "),
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"2"},
              onclick: "document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'blue';"
            }, " Blue ")
          ]),
          (0,external_vue_.createVNode)("div", {
            id: "screen7887865",
            style: {"height":"100%","width":"100%","display":"none","grid-template-columns":"auto 1fr","grid-template-rows":"auto auto 1fr"}
          }, [
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"1"},
              onclick: "document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'red';"
            }, " Red "),
            (0,external_vue_.createVNode)("button", {
              style: {"grid-column":"1","grid-row":"2"},
              onclick: "document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'blue';"
            }, " Blue ")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-activities/index.html.vue?vue&type=template&id=02b0c23c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-activities/index.html.vue

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

/***/ 4956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0f59beba",
  "path": "/lectures/android-activities/",
  "title": "Android Activities",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Android Activities"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Lecture material",
      "slug": "lecture-material",
      "children": []
    },
    {
      "level": 2,
      "title": "Recommended reading",
      "slug": "recommended-reading",
      "children": []
    },
    {
      "level": 2,
      "title": "Activities",
      "slug": "activities",
      "children": [
        {
          "level": 3,
          "title": "Creating a new activity",
          "slug": "creating-a-new-activity",
          "children": []
        },
        {
          "level": 3,
          "title": "Adding an activity to the launcher",
          "slug": "adding-an-activity-to-the-launcher",
          "children": []
        },
        {
          "level": 3,
          "title": "Specifying the GUI",
          "slug": "specifying-the-gui",
          "children": []
        },
        {
          "level": 3,
          "title": "Starting another activity",
          "slug": "starting-another-activity",
          "children": []
        },
        {
          "level": 3,
          "title": "Passing information to another activity",
          "slug": "passing-information-to-another-activity",
          "children": []
        },
        {
          "level": 3,
          "title": "Passing information back",
          "slug": "passing-information-back",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/android-activities/README.md",
  "git": {
    "updatedTime": 1643012169000
  }
}


/***/ })

};
;
//# sourceMappingURL=4033.app.js.map