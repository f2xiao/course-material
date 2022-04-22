"use strict";
exports.id = 6321;
exports.ids = [6321];
exports.modules = {

/***/ 1353:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/android-fundamental-application-components/index.html.vue?vue&type=template&id=86bdbee8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="android-fundamental-application-components" tabindex="-1"><a class="header-anchor" href="#android-fundamental-application-components" aria-hidden="true">#</a> Android Fundamental Application Components</h1><p>So, what does an Android application consists of? Answer: Fundamental application components! Let&#39;s take a closer look at how we can use these.</p><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><p>The reading below on this page is intended to just be an introduction to the fundamental application components in Android. For additional reading, checkout the webpage <a href="https://developer.android.com/guide/components/fundamentals" target="_blank" rel="noopener noreferrer">Application Fundamentals`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><h2 id="fundamental-application-components" tabindex="-1"><a class="header-anchor" href="#fundamental-application-components" aria-hidden="true">#</a> Fundamental Application Components</h2><p>When you create your own application from scratch, you have your own main entry point into the program. In many programming languages, the computer will start your program by calling the <code>main()</code> function in it, so that function acts as the main entry point.</p><p>An application built in a framework works differently. When using a framework, it&#39;s rather the framework that contains the main entry point and a skeleton for an entire application, and you just provide the framework with the missing pieces, which will make the application work the way you want it to work. In the Android framework, these missing pieces are called <em>fundamental application components</em>. There exists four different type of these:</p><ul><li><em>Activities</em> are used to display a graphical user interface (GUI) to the user and handle user interaction</li><li><em>Services</em> are used to run logic in the background (no GUI)</li><li><em>Broadcast Receivers</em> are used to listen for events from the operating system (e.g. listen for when Wi-Fi is turned off and on) or from other applications on the device (e.g. when Spotify starts playing a new song)</li><li><em>Content Providers</em> are used to let other applications access the data in your application</li></ul><p>So, when creating an Android application, you just tell the Android framework which your fundamental applications components are. Then the framework will use them when they are needed.</p><p>Sometimes other applications tells the framework to start one of your fundamental application components. This is typically the case when the user starts your application by clicking on your application&#39;s icon in the launcher application (the launcher application is the application that displays it&#39;s GUI when the device is starting (kind of the &quot;desktop&quot; app)). When that happens, the launcher application will ask Android to start one of the activities in your application, and then your application will start, and the Android framework will show the started activity&#39;s GUI on the screen.</p><p>Most often, your fundamental application components will be started by the code in your own application. For example, when the user clicks on a button in the GUI used by one of your activities you might want to start another activity in your application, or start a service in your application to run a long operation in the background. Then you tell the Android framework to start that activity/service for you.</p><h3 id="intents" tabindex="-1"><a class="header-anchor" href="#intents" aria-hidden="true">#</a> Intents</h3><p>To identify the fundamental application component that should be started, we use the <code>Intent</code> class. In addition to identifying which application to start, an <code>Intent</code> can also contain additional information passed to the fundamental application component that should be started. For example, an activity used to display an image on the screen can in the <code>Intent</code> receive information about which image to display (e.g. an identifier for the image).</p><p>Most often, an <code>Intent</code> identifies a fundamental application component in a specific application that should be started. These are called <em>explicit intents</em>, and are most often used when you want to identify a fundamental application in your own application.</p><p>Sometimes, instead of specifying which specific application component to start, you can specify what you need the fundamental application component to be able to do for you. For example, when the user clicks on a button in your application, you might want to open and display a PDF file to the user. Instead of you implementing that functionality in your own application, you can ask Android to start an activity that is able to display PDF files. If such an activity exists on the user&#39;s device (no matter which application), that activity will be started, and in the <code>Intent</code> you can pass along with information about which PDF file the activity should display.</p><h3 id="creating-a-fundamental-application-component" tabindex="-1"><a class="header-anchor" href="#creating-a-fundamental-application-component" aria-hidden="true">#</a> Creating a fundamental application component</h3><p>Each type of fundamental application component is represented by a class from the Android framework:</p><ul><li>The class <code>Activity</code> represents a general activity</li><li>The class <code>Service</code> represents a general service</li><li>The class <code>BroadcastReceiver</code> represents a general broadcast receiver</li><li>The class <code>ContentProvider</code> represents a general content provider</li></ul><p>When you want to create your own fundamental application component you should create your own class that inherits from the general fundamental application component class you want to use. For example, if you want to create an activity that displays a login form to the user, you create a class named <code>LoginActivity</code> that inherits from the <code>Activity</code> class from the Android framework. Then, in your own class, you override some methods to give your own fundamental application component the specific behavior you want it to have.</p><p>Just creating your own class like that is not enough. You must also register your fundamental application component in the <code>AndroidManifest.xml</code> file using the corresponding XML element to provide additional meta-information about the fundamental application component.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing an application with an activity as the only fundamental application component.</p>`)
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
		
		<span class="token comment"${
                _scopeId
              }>&lt;!-- Use the activity element to register a class as an activity component. --&gt;</span>
		<span class="token comment"${
                _scopeId
              }>&lt;!-- Read more about this in the lecture on activities. --&gt;</span>
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
              }>&quot;</span>.LoginActivity<span class="token punctuation"${
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
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Use the activity element to register a class as an activity component. -->"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Read more about this in the lecture on activities. -->"),
                      (0,external_vue_.createTextVNode)("\n\t\t"),
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
                          (0,external_vue_.createTextVNode)(".LoginActivity"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "LoginActivity.kt" }, {
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
              }>class</span> LoginActivity <span class="token operator"${
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
                      (0,external_vue_.createTextVNode)(" LoginActivity "),
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
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Use the activity element to register a class as an activity component. -->"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Read more about this in the lecture on activities. -->"),
                    (0,external_vue_.createTextVNode)("\n\t\t"),
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
                        (0,external_vue_.createTextVNode)(".LoginActivity"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "LoginActivity.kt" }, {
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
                    (0,external_vue_.createTextVNode)(" LoginActivity "),
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
  _push(`</div><p>To learn more about the different fundamental application components, see each lecture about them.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-fundamental-application-components/index.html.vue?vue&type=template&id=86bdbee8

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-fundamental-application-components/index.html.vue

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

/***/ 8651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2e9a2415",
  "path": "/lectures/android-fundamental-application-components/",
  "title": "Android Fundamental Application Components",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Android Fundamental Application Components"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Recommended reading",
      "slug": "recommended-reading",
      "children": []
    },
    {
      "level": 2,
      "title": "Fundamental Application Components",
      "slug": "fundamental-application-components",
      "children": [
        {
          "level": 3,
          "title": "Intents",
          "slug": "intents",
          "children": []
        },
        {
          "level": 3,
          "title": "Creating a fundamental application component",
          "slug": "creating-a-fundamental-application-component",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/android-fundamental-application-components/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=6321.app.js.map