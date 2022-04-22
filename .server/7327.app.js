"use strict";
exports.id = 7327;
exports.ids = [7327];
exports.modules = {

/***/ 6663:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/android-app-bar/index.html.vue?vue&type=template&id=4dd539c1



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")
  const _component_smartphone = (0,external_vue_.resolveComponent)("smartphone")

  _push(`<!--[--><h1 id="android-app-bar" tabindex="-1"><a class="header-anchor" href="#android-app-bar" aria-hidden="true">#</a> Android App Bar</h1><p>In Android 3 the <em>Title Bar</em> was changed to the <em>Action Bar</em> and got a bit more powerful. Then Material Design started to call it for <em>App bar</em>. Let&#39;s take a look at some of the things we can use it for.</p><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li>Android Developers Guide&#39;s page <a href="https://developer.android.com/training/appbar/" target="_blank" rel="noopener noreferrer">Add the app bar`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li><li>In the course book Elements of Android Jetpack: <ul><li><a href="https://commonsware.com/Jetpack/pages/chap-appbar-001.html" target="_blank" rel="noopener noreferrer">Configuring the App Bar`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li></ul><h2 id="the-title-bar" tabindex="-1"><a class="header-anchor" href="#the-title-bar" aria-hidden="true">#</a> The Title Bar</h2><p>When we first got Android, activities had a bar at the top called the <em>Title Bar</em>. As the name suggests, it was used to display the title of the activity (the value for the <code>label</code> attribute the <code>&lt;activity&gt;</code> has in the <code>AndroidManifest.xml</code> file, or (if that attribute is missing in the <code>&lt;activity&gt;</code>) the value for the <code>label</code> attribute the <code>&lt;application&gt;</code> element has).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing what the Title Bar looked like on the first versions of Android.</p>`)
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
              }>&lt;</span>manifest</span> <span class="token attr-name"${
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
              }>&quot;</span>.TestActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>label</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>This is the Title Bar<span class="token punctuation"${
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
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                          (0,external_vue_.createTextVNode)(".TestActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("label")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("This is the Title Bar"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
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
              }>&quot;</span>Hello!<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
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
                          (0,external_vue_.createTextVNode)("Hello!"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)(" \n\t\n"),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
              }>class</span> TestActivity <span class="token operator"${
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
              }>.</span>activity_test<span class="token punctuation"${
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
              }><span class="line-number"${
                _scopeId
              }>12</span><br${
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
                      (0,external_vue_.createTextVNode)(" TestActivity "),
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
                      (0,external_vue_.createTextVNode)("activity_test"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                        (0,external_vue_.createTextVNode)(".TestActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("label")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("This is the Title Bar"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
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
                        (0,external_vue_.createTextVNode)("Hello!"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)(" \n\t\n"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
                    (0,external_vue_.createTextVNode)(" TestActivity "),
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
                    (0,external_vue_.createTextVNode)("activity_test"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\t\t\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div style="${
          (0,server_renderer.ssrRenderStyle)({"background-color":"gray","color":"white","font-size":"75%","font-weight":"bold","padding":"1% 4%"})
        }"${
          _scopeId
        }> This is the Title Bar </div><div${
          _scopeId
        }> Hello </div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { style: {"background-color":"gray","color":"white","font-size":"75%","font-weight":"bold","padding":"1% 4%"} }, " This is the Title Bar "),
          (0,external_vue_.createVNode)("div", null, " Hello ")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><h2 id="the-options-menu" tabindex="-1"><a class="header-anchor" href="#the-options-menu" aria-hidden="true">#</a> The Options Menu</h2><p>An activity can contain a &quot;main&quot; menu, which is called the <em>Options Menu</em>. In the first versions of Android, an Android device was expected to contain a dedicated Menu hardware button (similar to the dedicated Back and Home hardware buttons), and when that button was clicked, the Options Menu is showed in front of the activity.</p><p>When the Options Menu should be shown (e.g. when the user clicks on the Menu hardware button), the method <code>Activity.onCreateOptionsMenu()</code> is called, and a <code>Menu</code> object is passed as an argument to it. That <code>Menu</code> object represents the Options Menu, and in this method you should populate the <code>Menu</code> object with the <code>MenuItem</code>s you want it to show. Then the GUI will visualize those <code>MenuItem</code>s on the screen.</p><div class="custom-container tip"><p class="custom-container-title">Populating the Menu</p><p>To populate a <code>Menu</code> with <code>MenuItems</code>, you can call various methods on the <code>Menu</code> object (e.g. <code>Menu.add()</code>), but most often you define the <code>MenuItem</code>s in an XML menu resource file in <code>res/menu/</code>, and then use a <code>MenuInflater</code> to populate the <code>Menu</code> based on the content in the menu resource file. See the example below for some of the details.</p></div><p>When the user clicks on one of the <code>MenuItem</code>s on the screen, the method <code>Activity.onOptionsItemSelected()</code> is called, and you receive the <code>MenuItem</code> the user clicked on as an argument, and you can react to the user&#39;s choice.</p><div class="custom-container tip"><p class="custom-container-title">More configurable!</p><p>Menus are more configurable than explained here. For example, each <code>MenuItem</code> can also have an icon that is shown instead of or in addition to the title of the <code>MenuItem</code>, etc.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing how the Options Menu worked on the first versions of Android.</p>`)
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
              }>&lt;</span>manifest</span> <span class="token attr-name"${
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
              }>&quot;</span>.TestActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>label</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>This is the Title Bar<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                          (0,external_vue_.createTextVNode)(".TestActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("label")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("This is the Title Bar"),
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
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
              }>&quot;</span>@+id/the_text_view<span class="token punctuation"${
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
              }>&quot;</span>Hello!<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
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
                          (0,external_vue_.createTextVNode)("@+id/the_text_view"),
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
                          (0,external_vue_.createTextVNode)("Hello!"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)(" \n\t\n"),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
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
              }>&lt;</span>menu</span>
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
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    
    <span class="token comment"${
                _scopeId
              }>&lt;!-- Should use string resources for the title attribute! --&gt;</span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>item</span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>title</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>The first choice<span class="token punctuation"${
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
              }>&quot;</span>@+id/first_menu_item<span class="token punctuation"${
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
              }>&lt;</span>item</span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>title</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>The second choice<span class="token punctuation"${
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
              }>&quot;</span>@+id/second_menu_item<span class="token punctuation"${
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
              }>&lt;/</span>menu</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("menu")
                        ]),
                        (0,external_vue_.createTextVNode)("\n    "),
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
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Should use string resources for the title attribute! -->"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("item")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("The first choice"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/first_menu_item"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("item")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("The second choice"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/second_menu_item"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("menu")
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
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>TextView

<span class="token keyword"${
                _scopeId
              }>class</span> TestActivity <span class="token operator"${
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
              }>var</span> theTextView <span class="token operator"${
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
              }>.</span>activity_test<span class="token punctuation"${
                _scopeId
              }>)</span>
        
        theTextView <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>findViewById</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>the_text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
        
	<span class="token punctuation"${
                _scopeId
              }>}</span>
    
    <span class="token comment"${
                _scopeId
              }>// Called when the menu needs to be created.</span>
    <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onCreateOptionsMenu</span><span class="token punctuation"${
                _scopeId
              }>(</span>menu<span class="token operator"${
                _scopeId
              }>:</span> Menu<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token operator"${
                _scopeId
              }>:</span> Boolean <span class="token punctuation"${
                _scopeId
              }>{</span>
        
        <span class="token comment"${
                _scopeId
              }>// Add menu items from the menu XML file.</span>
        menuInflater<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>inflate</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>menu<span class="token punctuation"${
                _scopeId
              }>.</span>activity_test<span class="token punctuation"${
                _scopeId
              }>,</span> menu<span class="token punctuation"${
                _scopeId
              }>)</span>
        
        <span class="token comment"${
                _scopeId
              }>// Add a menu item programmatically (should use string resources).</span>
        <span class="token keyword"${
                _scopeId
              }>val</span> menuItem <span class="token operator"${
                _scopeId
              }>=</span> menu<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>add</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;The third choice&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
        menuItem<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnMenuItemClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
            theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The third one&quot;</span>
            <span class="token boolean"${
                _scopeId
              }>true</span> <span class="token comment"${
                _scopeId
              }>// Return true to indicate we handled the click.</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span>
        
        <span class="token comment"${
                _scopeId
              }>// Let the class we inherit from add menu items if it wants.</span>
        <span class="token comment"${
                _scopeId
              }>// Returning true means the menu was successfully created.</span>
        <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreateOptionsMenu</span><span class="token punctuation"${
                _scopeId
              }>(</span>menu<span class="token punctuation"${
                _scopeId
              }>)</span>
        
    <span class="token punctuation"${
                _scopeId
              }>}</span>
    
    <span class="token comment"${
                _scopeId
              }>// Called when the user has clicked on an Options Menu item.</span>
    <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onOptionsItemSelected</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token operator"${
                _scopeId
              }>:</span> MenuItem<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token operator"${
                _scopeId
              }>:</span> Boolean <span class="token punctuation"${
                _scopeId
              }>{</span>
        
        <span class="token comment"${
                _scopeId
              }>// Check the id of the Menu Item to figure out which</span>
        <span class="token comment"${
                _scopeId
              }>// it was.</span>
        <span class="token keyword"${
                _scopeId
              }>when</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token punctuation"${
                _scopeId
              }>.</span>itemId<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
            R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>first_menu_item <span class="token operator"${
                _scopeId
              }>-&gt;</span> theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The first one&quot;</span>
            R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>second_menu_item <span class="token operator"${
                _scopeId
              }>-&gt;</span> theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The second one&quot;</span>
            <span class="token comment"${
                _scopeId
              }>// If we can&#39;t handle the clicked menu item, let</span>
            <span class="token comment"${
                _scopeId
              }>// the activity we inherit from try and handle it.</span>
            <span class="token keyword"${
                _scopeId
              }>else</span> <span class="token operator"${
                _scopeId
              }>-&gt;</span> <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onOptionsItemSelected</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token punctuation"${
                _scopeId
              }>)</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span>
        
        <span class="token comment"${
                _scopeId
              }>// Return true to indicate that we handled the click.</span>
        <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token boolean"${
                _scopeId
              }>true</span>

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
              }> </div><br${
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
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("TextView\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" TestActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                      (0,external_vue_.createTextVNode)(" theTextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" TextView\n    \n\t"),
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
                      (0,external_vue_.createTextVNode)("activity_test"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        theTextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("the_text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when the menu needs to be created."),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Menu"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Boolean "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add menu items from the menu XML file."),
                      (0,external_vue_.createTextVNode)("\n        menuInflater"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "inflate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_test"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add a menu item programmatically (should use string resources)."),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" menuItem "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "add"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third choice\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        menuItem"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnMenuItemClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third one\""),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Return true to indicate we handled the click."),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Let the class we inherit from add menu items if it wants."),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Returning true means the menu was successfully created."),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when the user has clicked on an Options Menu item."),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" MenuItem"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Boolean "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Check the id of the Menu Item to figure out which"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// it was."),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("itemId"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("first_menu_item "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first one\""),
                      (0,external_vue_.createTextVNode)("\n            R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("second_menu_item "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second one\""),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If we can't handle the clicked menu item, let"),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the activity we inherit from try and handle it."),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Return true to indicate that we handled the click."),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createTextVNode)("\n\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n\t\n"),
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
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                        (0,external_vue_.createTextVNode)(".TestActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("label")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("This is the Title Bar"),
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
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
                        (0,external_vue_.createTextVNode)("@+id/the_text_view"),
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
                        (0,external_vue_.createTextVNode)("Hello!"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)(" \n\t\n"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("menu")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
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
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Should use string resources for the title attribute! -->"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("item")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("The first choice"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/first_menu_item"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("item")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("The second choice"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/second_menu_item"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("menu")
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
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("TextView\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" TestActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                    (0,external_vue_.createTextVNode)(" theTextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" TextView\n    \n\t"),
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
                    (0,external_vue_.createTextVNode)("activity_test"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        theTextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("the_text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when the menu needs to be created."),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Menu"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Boolean "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add menu items from the menu XML file."),
                    (0,external_vue_.createTextVNode)("\n        menuInflater"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "inflate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_test"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add a menu item programmatically (should use string resources)."),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" menuItem "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "add"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third choice\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        menuItem"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnMenuItemClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third one\""),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Return true to indicate we handled the click."),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Let the class we inherit from add menu items if it wants."),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Returning true means the menu was successfully created."),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when the user has clicked on an Options Menu item."),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" MenuItem"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Boolean "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Check the id of the Menu Item to figure out which"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// it was."),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("itemId"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("first_menu_item "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first one\""),
                    (0,external_vue_.createTextVNode)("\n            R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("second_menu_item "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second one\""),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If we can't handle the clicked menu item, let"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the activity we inherit from try and handle it."),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Return true to indicate that we handled the click."),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)("\n\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n\t\n"),
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
  _push((0,server_renderer.ssrRenderComponent)(_component_smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","position":"relative"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"background-color":"grey","color":"white","font-size":"75%","font-weight":"bold","padding":"1% 4%"})
        }"${
          _scopeId
        }> This is the Title Bar </div><div id="text-6646456"${
          _scopeId
        }> Hello </div><div id="menu-45345" style="${
          (0,server_renderer.ssrRenderStyle)({"position":"absolute","text-align":"center","bottom":"0","background-color":"black","color":"silver","display":"grid","grid-template-rows":"1fr","grid-template-columns":"1fr 1fr 1fr","border":"1px solid white","visibility":"hidden","cursor":"pointer"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"border-right":"1px solid white"})
        }" onclick="(document.getElementById(&#39;text-6646456&#39;).innerText = &#39;The first one&#39;) &amp;&amp; (document.querySelector(&#39;#menu-45345&#39;).style.visibility = &#39;hidden&#39;)"${
          _scopeId
        }> The first choice </div><div style="${
          (0,server_renderer.ssrRenderStyle)({"border-right":"1px solid white"})
        }" onclick="(document.getElementById(&#39;text-6646456&#39;).innerText = &#39;The second one&#39;) &amp;&amp; (document.querySelector(&#39;#menu-45345&#39;).style.visibility = &#39;hidden&#39;)"${
          _scopeId
        }> The second choice</div><div style="${
          (0,server_renderer.ssrRenderStyle)({"border-right":"1px solid white"})
        }" onclick="(document.getElementById(&#39;text-6646456&#39;).innerText = &#39;The third one&#39;) &amp;&amp; (document.querySelector(&#39;#menu-45345&#39;).style.visibility = &#39;hidden&#39;)"${
          _scopeId
        }> The third choice </div></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { style: {"height":"100%","width":"100%","position":"relative"} }, [
            (0,external_vue_.createVNode)("div", { style: {"background-color":"grey","color":"white","font-size":"75%","font-weight":"bold","padding":"1% 4%"} }, " This is the Title Bar "),
            (0,external_vue_.createVNode)("div", { id: "text-6646456" }, " Hello "),
            (0,external_vue_.createVNode)("div", {
              id: "menu-45345",
              style: {"position":"absolute","text-align":"center","bottom":"0","background-color":"black","color":"silver","display":"grid","grid-template-rows":"1fr","grid-template-columns":"1fr 1fr 1fr","border":"1px solid white","visibility":"hidden","cursor":"pointer"}
            }, [
              (0,external_vue_.createVNode)("div", {
                style: {"border-right":"1px solid white"},
                onclick: "(document.getElementById('text-6646456').innerText = 'The first one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
              }, " The first choice "),
              (0,external_vue_.createVNode)("div", {
                style: {"border-right":"1px solid white"},
                onclick: "(document.getElementById('text-6646456').innerText = 'The second one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
              }, " The second choice"),
              (0,external_vue_.createVNode)("div", {
                style: {"border-right":"1px solid white"},
                onclick: "(document.getElementById('text-6646456').innerText = 'The third one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
              }, " The third choice ")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The dedicated Menu hardware button: <button onclick="document.querySelector(&#39;#menu-45345&#39;).style.visibility = (document.querySelector(&#39;#menu-45345&#39;).style.visibility == &#39;visible&#39; ? &#39;hidden&#39; : &#39;visible&#39;)">Menu</button></p></div><h2 id="the-action-bar" tabindex="-1"><a class="header-anchor" href="#the-action-bar" aria-hidden="true">#</a> The Action Bar</h2><p>In Android 3.0, when Android officially started to support tablets, the Title Bar was replaced with the <a href="https://developer.android.com/about/versions/android-3.0.html#action-bar" target="_blank" rel="noopener noreferrer">Action Bar`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. The Action Bar can be seen as a more powerful version of the Title Bar, because it can not only display the title of the activity, but also contains additional features. To get a reference to the Action Bar, use <code>Activity.getActionBar()</code>.</p><p>To display the logo of the application in the Action Bar, use <code>theActionBar.setDisplayUseLogoEnabled(true)</code> (discouraged from Android 5 and on).</p><p>By default, the Action Bar contains the Options Menu items as a dropdown list. That menu is now called the <em>Overflow Menu</em>, but in the code we still refer to it as the Options Menu (you don&#39;t need to do anything special to get the Overflow M; <code>Activity.onCreateOptionsMenu()</code> and <code>Activity.onOptionsItemSelected()</code> will be called when needed, just as before).</p><p>Each <code>MenuItem</code> can contain additional information about how it should be shown in the Action Bar/Overflow Menu. For example, by setting <code>showAsAction</code> to <code>ifRoom</code> on a <code>MenuItem</code>, that <code>MenuItem</code> will be shown directly in the Action Bar next to the dropdown list if the user&#39;s screen is wide enough.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing how the Options Menu is shown on Android devices after Android 3.</p>`)
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
              }><span class="token comment"${
                _scopeId
              }>&lt;!-- Same as before, but changed label. --&gt;</span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>manifest</span> <span class="token attr-name"${
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
              }>&quot;</span>.TestActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>label</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>The Action Bar<span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before, but changed label. -->"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                          (0,external_vue_.createTextVNode)(".TestActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("label")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("The Action Bar"),
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
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-xml ext-xml line-numbers-mode"${
                _scopeId
              }><pre class="language-xml"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }>&lt;!-- Same as before. --&gt;</span>
<span class="token tag"${
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
              }>&quot;</span>@+id/the_text_view<span class="token punctuation"${
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
              }>&quot;</span>Hello!<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before. -->"),
                      (0,external_vue_.createTextVNode)("\n"),
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
                          (0,external_vue_.createTextVNode)("@+id/the_text_view"),
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
                          (0,external_vue_.createTextVNode)("Hello!"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)(" \n\t\n"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-xml ext-xml line-numbers-mode"${
                _scopeId
              }><pre class="language-xml"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }>&lt;!-- Added the app namespace and the showAsAction attribute, and changed the title attribute. --&gt;</span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>menu</span>
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
              }>xmlns:</span>app</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res-auto<span class="token punctuation"${
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
              }>&lt;</span>item</span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>title</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>The first choice<span class="token punctuation"${
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
              }>&quot;</span>@+id/first_menu_item<span class="token punctuation"${
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
              }>&lt;</span>item</span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>title</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Second<span class="token punctuation"${
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
              }>&quot;</span>@+id/second_menu_item<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>app:</span>showAsAction</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>ifRoom<span class="token punctuation"${
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
              }>&lt;/</span>menu</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
                _scopeId
              }><div class="highlight-line"${
                _scopeId
              }> </div><br${
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
              }> </div><br${
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
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Added the app namespace and the showAsAction attribute, and changed the title attribute. -->"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("menu")
                        ]),
                        (0,external_vue_.createTextVNode)("\n    "),
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
                        (0,external_vue_.createTextVNode)("\n    "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("app")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res-auto"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("item")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("The first choice"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/first_menu_item"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("item")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Second"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/second_menu_item"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                          (0,external_vue_.createTextVNode)("showAsAction")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("ifRoom"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("menu")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
              }>// Same as before.</span>
<span class="token keyword"${
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
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>TextView

<span class="token keyword"${
                _scopeId
              }>class</span> TestActivity <span class="token operator"${
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
              }>var</span> theTextView <span class="token operator"${
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
              }>.</span>activity_test<span class="token punctuation"${
                _scopeId
              }>)</span>
        
        theTextView <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>findViewById</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>the_text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
        
	<span class="token punctuation"${
                _scopeId
              }>}</span>
    
    <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onCreateOptionsMenu</span><span class="token punctuation"${
                _scopeId
              }>(</span>menu<span class="token operator"${
                _scopeId
              }>:</span> Menu<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token operator"${
                _scopeId
              }>:</span> Boolean <span class="token punctuation"${
                _scopeId
              }>{</span>
        
        menuInflater<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>inflate</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>menu<span class="token punctuation"${
                _scopeId
              }>.</span>activity_test<span class="token punctuation"${
                _scopeId
              }>,</span> menu<span class="token punctuation"${
                _scopeId
              }>)</span>
        
        <span class="token keyword"${
                _scopeId
              }>val</span> menuItem <span class="token operator"${
                _scopeId
              }>=</span> menu<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>add</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;The third choice&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
        menuItem<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnMenuItemClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
            theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The third one&quot;</span>
            <span class="token boolean"${
                _scopeId
              }>true</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span>
        
        <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreateOptionsMenu</span><span class="token punctuation"${
                _scopeId
              }>(</span>menu<span class="token punctuation"${
                _scopeId
              }>)</span>
        
    <span class="token punctuation"${
                _scopeId
              }>}</span>
    
    <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onOptionsItemSelected</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token operator"${
                _scopeId
              }>:</span> MenuItem<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token operator"${
                _scopeId
              }>:</span> Boolean <span class="token punctuation"${
                _scopeId
              }>{</span>
        
        <span class="token keyword"${
                _scopeId
              }>when</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token punctuation"${
                _scopeId
              }>.</span>itemId<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
            R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>first_menu_item <span class="token operator"${
                _scopeId
              }>-&gt;</span> theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The first one&quot;</span>
            R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>second_menu_item <span class="token operator"${
                _scopeId
              }>-&gt;</span> theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The second one&quot;</span>
            <span class="token keyword"${
                _scopeId
              }>else</span> <span class="token operator"${
                _scopeId
              }>-&gt;</span> <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onOptionsItemSelected</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token punctuation"${
                _scopeId
              }>)</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span>
        
        <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token boolean"${
                _scopeId
              }>true</span>
        
    <span class="token punctuation"${
                _scopeId
              }>}</span>
    
	
<span class="token punctuation"${
                _scopeId
              }>}</span>
</code></pre><div class="highlight-lines"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Same as before."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Activity\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" android"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("TextView\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" TestActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                      (0,external_vue_.createTextVNode)(" theTextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" TextView\n    \n\t"),
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
                      (0,external_vue_.createTextVNode)("activity_test"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        theTextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("the_text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Menu"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Boolean "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        \n        menuInflater"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "inflate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_test"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" menuItem "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "add"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third choice\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        menuItem"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnMenuItemClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third one\""),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" MenuItem"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Boolean "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("itemId"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("first_menu_item "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first one\""),
                      (0,external_vue_.createTextVNode)("\n            R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("second_menu_item "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second one\""),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createTextVNode)("\n        \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
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
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before, but changed label. -->"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                        (0,external_vue_.createTextVNode)(".TestActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("label")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("The Action Bar"),
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
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before. -->"),
                    (0,external_vue_.createTextVNode)("\n"),
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
                        (0,external_vue_.createTextVNode)("@+id/the_text_view"),
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
                        (0,external_vue_.createTextVNode)("Hello!"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)(" \n\t\n"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Added the app namespace and the showAsAction attribute, and changed the title attribute. -->"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("menu")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("app")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res-auto"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("item")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("The first choice"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/first_menu_item"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("item")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Second"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/second_menu_item"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                        (0,external_vue_.createTextVNode)("showAsAction")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("ifRoom"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("menu")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Same as before."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Activity\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" android"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("TextView\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" TestActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Activity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                    (0,external_vue_.createTextVNode)(" theTextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" TextView\n    \n\t"),
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
                    (0,external_vue_.createTextVNode)("activity_test"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        theTextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("the_text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Menu"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Boolean "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        \n        menuInflater"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "inflate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_test"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" menuItem "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "add"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third choice\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        menuItem"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnMenuItemClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third one\""),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" MenuItem"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Boolean "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("itemId"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("first_menu_item "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first one\""),
                    (0,external_vue_.createTextVNode)("\n            R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("second_menu_item "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second one\""),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)("\n        \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
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
  _push((0,server_renderer.ssrRenderComponent)(_component_smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","position":"relative","box-sizing":"border-box"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"background-color":"blue","color":"white","font-size":"100%","padding":"5% 1%","display":"grid","grid-template-columns":"auto 1fr auto auto"})
        }"${
          _scopeId
        }><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","font-weight":"bold"})
        }"${
          _scopeId
        }> The Action Bar </span><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"2"})
        }"${
          _scopeId
        }></span><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"3","cursor":"pointer"})
        }" onclick="document.getElementById(&#39;text-5432&#39;).innerText = &#39;The second one&#39;"${
          _scopeId
        }> Second </span><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"4","padding":"0 0.5em","cursor":"pointer"})
        }" onclick="document.getElementById(&#39;menu-789&#39;).style.visibility = &#39;visible&#39;"${
          _scopeId
        }> ⋮ </span></div><div id="text-5432"${
          _scopeId
        }> Hello </div><div id="menu-789" style="${
          (0,server_renderer.ssrRenderStyle)({"position":"absolute","top":"1.5em","right":"0.5em","cursor":"pointer","visibility":"hidden","background-color":"white","border":"1px solid black","font-size":"90%"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"border-right":"1px solid white","border-bottom":"1px solid black"})
        }" onclick="(document.getElementById(&#39;text-5432&#39;).innerText = &#39;The first one&#39;) &amp;&amp; (document.querySelector(&#39;#menu-789&#39;).style.visibility = &#39;hidden&#39;)"${
          _scopeId
        }> The first choice </div><div style="${
          (0,server_renderer.ssrRenderStyle)({"border-right":"1px solid white"})
        }" onclick="(document.getElementById(&#39;text-5432&#39;).innerText = &#39;The third one&#39;) &amp;&amp; (document.querySelector(&#39;#menu-789&#39;).style.visibility = &#39;hidden&#39;)"${
          _scopeId
        }> The third choice </div></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { style: {"height":"100%","width":"100%","position":"relative","box-sizing":"border-box"} }, [
            (0,external_vue_.createVNode)("div", { style: {"background-color":"blue","color":"white","font-size":"100%","padding":"5% 1%","display":"grid","grid-template-columns":"auto 1fr auto auto"} }, [
              (0,external_vue_.createVNode)("span", { style: {"grid-column":"1","font-weight":"bold"} }, " The Action Bar "),
              (0,external_vue_.createVNode)("span", { style: {"grid-column":"2"} }),
              (0,external_vue_.createVNode)("span", {
                style: {"grid-column":"3","cursor":"pointer"},
                onclick: "document.getElementById('text-5432').innerText = 'The second one'"
              }, " Second "),
              (0,external_vue_.createVNode)("span", {
                style: {"grid-column":"4","padding":"0 0.5em","cursor":"pointer"},
                onclick: "document.getElementById('menu-789').style.visibility = 'visible'"
              }, " ⋮ ")
            ]),
            (0,external_vue_.createVNode)("div", { id: "text-5432" }, " Hello "),
            (0,external_vue_.createVNode)("div", {
              id: "menu-789",
              style: {"position":"absolute","top":"1.5em","right":"0.5em","cursor":"pointer","visibility":"hidden","background-color":"white","border":"1px solid black","font-size":"90%"}
            }, [
              (0,external_vue_.createVNode)("div", {
                style: {"border-right":"1px solid white","border-bottom":"1px solid black"},
                onclick: "(document.getElementById('text-5432').innerText = 'The first one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
              }, " The first choice "),
              (0,external_vue_.createVNode)("div", {
                style: {"border-right":"1px solid white"},
                onclick: "(document.getElementById('text-5432').innerText = 'The third one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
              }, " The third choice ")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><p>When clicking on a <code>MenuItem</code>, it&#39;s also possible to replace the main content in the Action Bar with another temporary widget. The typical example is the <code>SearchView</code>, which kind of is an <code>EditText</code> the user can type text into to search for something (you need to handle the search yourself). For an example of this, see the Android Developer training <a href="https://developer.android.com/training/search/setup" target="_blank" rel="noopener noreferrer">Setting Up the Search Interface`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>The Action Bar can also contain the tab titles, and clicking on them can change which fragment to show below the Action Bar. There are more things the Action Bar can be used for, read the documentation if you&#39;re curious.</p><p>Because the Action Bar was added in Android 3, applications running on older versions of Android won&#39;t have it. New features have also been added to it after Android 3, so even if your application runs on a version that contains the Action Bar, you can&#39;t use the latest features it contains, because they will only work on devices running the latest version of Android. Sight.</p><h3 id="the-app-bar" tabindex="-1"><a class="header-anchor" href="#the-app-bar" aria-hidden="true">#</a> The App Bar</h3><p>Material Design was released in Android 5, and they had a component named <em>App Bar</em>, which more or less served the same purpose as the Action Bar in Android. So from that time and on, the Action Bar is also often referred to as the App Bar, since that&#39;s the name it has in Material Design.</p><h3 id="the-toolbar" tabindex="-1"><a class="header-anchor" href="#the-toolbar" aria-hidden="true">#</a> The Toolbar</h3><p>In Android 5, they made it possible to use a view in the activity&#39;s GUI to function as the activity&#39;s Action Bar, and they created a dedicated view for this very purpose: the <code>Toolbar</code>. This way, it&#39;s possible to implement different type of bars to use as your Action Bar, and they are just as flexible as ordinary views in your GUI, so you can for example use them in animations (move them around, change their sizes, etc.).</p><p>If you want to use a <code>Toolbar</code> as you Action Bar in an activity, you:</p><ol><li>Tell the activity to not use its own default Action Bar. You do that in your Application/Activity theme by adding <code>&lt;item name=&quot;android:windowActionBar&quot;&gt;false&lt;/item&gt;</code> to the theme (or by inheriting from a theme ending with the name <code>.NoActionBar</code>, which already contains this item)</li><li>Add a <code>Toolbar</code> to your activity&#39;s GUI (i.e. in the XML layout file used by the activity)</li><li>Tell your activity that the <code>Toolbar</code> you have in the GUI should be used as the activity&#39;s Action Bar. You do that by calling the activity&#39;s method <code>setActionBar()</code> and pass it a reference to your <code>Toolbar</code></li></ol><p>However, to stay backward compatible, you use Android Jetpack implementations:</p><ol><li>Inherit from <code>AppCompatActivity</code> instead of <code>Activity</code></li><li>Use the <code>Toolbar</code> implementation from Android JetPack instead of the <code>Toolbar</code> implementation from Android</li><li>On the activity, call <code>setSupportActionBar()</code> instead of <code>setActionBar()</code></li></ol><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example showing an app working the same way as before, but now in a backward compatible way.</p>`)
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
              }><span class="token comment"${
                _scopeId
              }>&lt;!-- Same as before, but changed to a NoActionBar theme. --&gt;</span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>manifest</span> <span class="token attr-name"${
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
              }>&quot;</span>.TestActivity<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
			<span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>label</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>The Action Bar<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
            <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>theme</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Theme.MaterialComponents.DayNight.NoActionBar<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before, but changed to a NoActionBar theme. -->"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("manifest")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                          (0,external_vue_.createTextVNode)(".TestActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n\t\t\t"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("label")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("The Action Bar"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n            "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("theme")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Theme.MaterialComponents.DayNight.NoActionBar"),
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
                    (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-xml ext-xml line-numbers-mode"${
                _scopeId
              }><pre class="language-xml"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }>&lt;!-- Same as before, but added a Toolbar. --&gt;</span>
<span class="token tag"${
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
              }>&lt;</span>androidx.appcompat.widget.Toolbar</span>
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
              }>&quot;</span>@+id/toolbar<span class="token punctuation"${
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
              }>&quot;</span>?attr/actionBarSize<span class="token punctuation"${
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
              }>&quot;</span>@+id/the_text_view<span class="token punctuation"${
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
              }>&quot;</span>Hello!<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
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
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before, but added a Toolbar. -->"),
                      (0,external_vue_.createTextVNode)("\n"),
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
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("androidx.appcompat.widget.Toolbar")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/toolbar"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
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
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_height")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("?attr/actionBarSize"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
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
                          (0,external_vue_.createTextVNode)("@+id/the_text_view"),
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
                          (0,external_vue_.createTextVNode)("Hello!"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)(" \n\t\n"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-xml ext-xml line-numbers-mode"${
                _scopeId
              }><pre class="language-xml"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }>&lt;!-- Same as before. --&gt;</span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>menu</span>
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
              }>xmlns:</span>app</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res-auto<span class="token punctuation"${
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
              }>&lt;</span>item</span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>title</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>The first choice<span class="token punctuation"${
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
              }>&quot;</span>@+id/first_menu_item<span class="token punctuation"${
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
              }>&lt;</span>item</span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>title</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Second<span class="token punctuation"${
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
              }>&quot;</span>@+id/second_menu_item<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
        <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>app:</span>showAsAction</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>ifRoom<span class="token punctuation"${
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
              }>&lt;/</span>menu</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="highlight-lines"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before. -->"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("menu")
                        ]),
                        (0,external_vue_.createTextVNode)("\n    "),
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
                        (0,external_vue_.createTextVNode)("\n    "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("app")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res-auto"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("item")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("The first choice"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/first_menu_item"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("item")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Second"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/second_menu_item"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                          (0,external_vue_.createTextVNode)("showAsAction")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("ifRoom"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("menu")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
              }>.</span>widget<span class="token punctuation"${
                _scopeId
              }>.</span>TextView

<span class="token keyword"${
                _scopeId
              }>class</span> TestActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>AppCompatActivity</span><span class="token punctuation"${
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
              }>var</span> theTextView <span class="token operator"${
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
              }>.</span>activity_test<span class="token punctuation"${
                _scopeId
              }>)</span>
        
        <span class="token function"${
                _scopeId
              }>setSupportActionBar</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token function"${
                _scopeId
              }>findViewById</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>toolbar<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>)</span>
        
        theTextView <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>findViewById</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>the_text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
        
	<span class="token punctuation"${
                _scopeId
              }>}</span>
    
    <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onCreateOptionsMenu</span><span class="token punctuation"${
                _scopeId
              }>(</span>menu<span class="token operator"${
                _scopeId
              }>:</span> Menu<span class="token operator"${
                _scopeId
              }>?</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token operator"${
                _scopeId
              }>:</span> Boolean <span class="token punctuation"${
                _scopeId
              }>{</span>
        
        menuInflater<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>inflate</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>menu<span class="token punctuation"${
                _scopeId
              }>.</span>activity_test<span class="token punctuation"${
                _scopeId
              }>,</span> menu<span class="token punctuation"${
                _scopeId
              }>)</span>
        
        <span class="token keyword"${
                _scopeId
              }>val</span> menuItem <span class="token operator"${
                _scopeId
              }>=</span> menu<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>add</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;The third choice&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
        menuItem<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnMenuItemClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
            theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The third one&quot;</span>
            <span class="token boolean"${
                _scopeId
              }>true</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span>
        
        <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onCreateOptionsMenu</span><span class="token punctuation"${
                _scopeId
              }>(</span>menu<span class="token punctuation"${
                _scopeId
              }>)</span>
        
    <span class="token punctuation"${
                _scopeId
              }>}</span>
    
    <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onOptionsItemSelected</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token operator"${
                _scopeId
              }>:</span> MenuItem<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token operator"${
                _scopeId
              }>:</span> Boolean <span class="token punctuation"${
                _scopeId
              }>{</span>
        
        <span class="token keyword"${
                _scopeId
              }>when</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token punctuation"${
                _scopeId
              }>.</span>itemId<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
            R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>first_menu_item <span class="token operator"${
                _scopeId
              }>-&gt;</span> theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The first one&quot;</span>
            R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>second_menu_item <span class="token operator"${
                _scopeId
              }>-&gt;</span> theTextView<span class="token punctuation"${
                _scopeId
              }>.</span>text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;The second one&quot;</span>
            <span class="token keyword"${
                _scopeId
              }>else</span> <span class="token operator"${
                _scopeId
              }>-&gt;</span> <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token keyword"${
                _scopeId
              }>super</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>onOptionsItemSelected</span><span class="token punctuation"${
                _scopeId
              }>(</span>item<span class="token punctuation"${
                _scopeId
              }>)</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span>
        
        <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token boolean"${
                _scopeId
              }>true</span>
        
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
                      (0,external_vue_.createTextVNode)("widget"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("TextView\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" TestActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                      (0,external_vue_.createTextVNode)(" theTextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" TextView\n    \n\t"),
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
                      (0,external_vue_.createTextVNode)("activity_test"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setSupportActionBar"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("toolbar"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        theTextView "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("the_text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Menu"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Boolean "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        \n        menuInflater"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "inflate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_test"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" menuItem "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "add"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third choice\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        menuItem"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnMenuItemClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third one\""),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("menu"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" MenuItem"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Boolean "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("itemId"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("first_menu_item "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first one\""),
                      (0,external_vue_.createTextVNode)("\n            R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("second_menu_item "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(" theTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second one\""),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("item"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createTextVNode)("\n        \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
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
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before, but changed to a NoActionBar theme. -->"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("manifest")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "..."),
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
                        (0,external_vue_.createTextVNode)(".TestActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\t\t\t"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("label")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("The Action Bar"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("theme")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Theme.MaterialComponents.DayNight.NoActionBar"),
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
                  (0,external_vue_.createVNode)("div", { class: "highlight-line" }, " "),
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
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_test.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before, but added a Toolbar. -->"),
                    (0,external_vue_.createTextVNode)("\n"),
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
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("androidx.appcompat.widget.Toolbar")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/toolbar"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
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
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_height")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("?attr/actionBarSize"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
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
                        (0,external_vue_.createTextVNode)("@+id/the_text_view"),
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
                        (0,external_vue_.createTextVNode)("Hello!"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)(" \n\t\n"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/menu/activity_test.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Same as before. -->"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("menu")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("app")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/apk/res-auto"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("item")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("The first choice"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/first_menu_item"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("item")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Second"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/second_menu_item"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                        (0,external_vue_.createTextVNode)("showAsAction")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("ifRoom"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("menu")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "TestActivity.kt" }, {
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
                    (0,external_vue_.createTextVNode)("widget"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("TextView\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" TestActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "lateinit"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                    (0,external_vue_.createTextVNode)(" theTextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" TextView\n    \n\t"),
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
                    (0,external_vue_.createTextVNode)("activity_test"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setSupportActionBar"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("toolbar"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        theTextView "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("the_text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Menu"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "?"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Boolean "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        \n        menuInflater"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "inflate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_test"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" menuItem "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "add"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third choice\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        menuItem"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnMenuItemClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The third one\""),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreateOptionsMenu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("menu"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" MenuItem"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Boolean "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("itemId"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("first_menu_item "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first one\""),
                    (0,external_vue_.createTextVNode)("\n            R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("second_menu_item "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(" theTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second one\""),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onOptionsItemSelected"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("item"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)("\n        \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n\t\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "highlight-lines" }, [
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
  _push((0,server_renderer.ssrRenderComponent)(_component_smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div style="${
          (0,server_renderer.ssrRenderStyle)({"height":"100%","width":"100%","position":"relative","box-sizing":"border-box"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"background-color":"blue","color":"white","font-size":"100%","padding":"5% 1%","display":"grid","grid-template-columns":"auto 1fr auto auto"})
        }"${
          _scopeId
        }><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"1","font-weight":"bold"})
        }"${
          _scopeId
        }> The Action Bar </span><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"2"})
        }"${
          _scopeId
        }></span><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"3","cursor":"pointer"})
        }" onclick="document.getElementById(&#39;text-5432&#39;).innerText = &#39;The second one&#39;"${
          _scopeId
        }> Second </span><span style="${
          (0,server_renderer.ssrRenderStyle)({"grid-column":"4","padding":"0 0.5em","cursor":"pointer"})
        }" onclick="document.getElementById(&#39;menu-789&#39;).style.visibility = &#39;visible&#39;"${
          _scopeId
        }> ⋮ </span></div><div id="text-5432"${
          _scopeId
        }> Hello </div><div id="menu-789" style="${
          (0,server_renderer.ssrRenderStyle)({"position":"absolute","top":"1.5em","right":"0.5em","cursor":"pointer","visibility":"hidden","background-color":"white","border":"1px solid black","font-size":"90%"})
        }"${
          _scopeId
        }><div style="${
          (0,server_renderer.ssrRenderStyle)({"border-right":"1px solid white","border-bottom":"1px solid black"})
        }" onclick="(document.getElementById(&#39;text-5432&#39;).innerText = &#39;The first one&#39;) &amp;&amp; (document.querySelector(&#39;#menu-789&#39;).style.visibility = &#39;hidden&#39;)"${
          _scopeId
        }> The first choice </div><div style="${
          (0,server_renderer.ssrRenderStyle)({"border-right":"1px solid white"})
        }" onclick="(document.getElementById(&#39;text-5432&#39;).innerText = &#39;The third one&#39;) &amp;&amp; (document.querySelector(&#39;#menu-789&#39;).style.visibility = &#39;hidden&#39;)"${
          _scopeId
        }> The third choice </div></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { style: {"height":"100%","width":"100%","position":"relative","box-sizing":"border-box"} }, [
            (0,external_vue_.createVNode)("div", { style: {"background-color":"blue","color":"white","font-size":"100%","padding":"5% 1%","display":"grid","grid-template-columns":"auto 1fr auto auto"} }, [
              (0,external_vue_.createVNode)("span", { style: {"grid-column":"1","font-weight":"bold"} }, " The Action Bar "),
              (0,external_vue_.createVNode)("span", { style: {"grid-column":"2"} }),
              (0,external_vue_.createVNode)("span", {
                style: {"grid-column":"3","cursor":"pointer"},
                onclick: "document.getElementById('text-5432').innerText = 'The second one'"
              }, " Second "),
              (0,external_vue_.createVNode)("span", {
                style: {"grid-column":"4","padding":"0 0.5em","cursor":"pointer"},
                onclick: "document.getElementById('menu-789').style.visibility = 'visible'"
              }, " ⋮ ")
            ]),
            (0,external_vue_.createVNode)("div", { id: "text-5432" }, " Hello "),
            (0,external_vue_.createVNode)("div", {
              id: "menu-789",
              style: {"position":"absolute","top":"1.5em","right":"0.5em","cursor":"pointer","visibility":"hidden","background-color":"white","border":"1px solid black","font-size":"90%"}
            }, [
              (0,external_vue_.createVNode)("div", {
                style: {"border-right":"1px solid white","border-bottom":"1px solid black"},
                onclick: "(document.getElementById('text-5432').innerText = 'The first one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
              }, " The first choice "),
              (0,external_vue_.createVNode)("div", {
                style: {"border-right":"1px solid white"},
                onclick: "(document.getElementById('text-5432').innerText = 'The third one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
              }, " The third choice ")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-app-bar/index.html.vue?vue&type=template&id=4dd539c1

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-app-bar/index.html.vue

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

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-18bd48f2",
  "path": "/lectures/android-app-bar/",
  "title": "Android App Bar",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Android App Bar"
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
      "title": "The Title Bar",
      "slug": "the-title-bar",
      "children": []
    },
    {
      "level": 2,
      "title": "The Options Menu",
      "slug": "the-options-menu",
      "children": []
    },
    {
      "level": 2,
      "title": "The Action Bar",
      "slug": "the-action-bar",
      "children": [
        {
          "level": 3,
          "title": "The App Bar",
          "slug": "the-app-bar",
          "children": []
        },
        {
          "level": 3,
          "title": "The Toolbar",
          "slug": "the-toolbar",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/android-app-bar/README.md",
  "git": {
    "updatedTime": 1645429704000
  }
}


/***/ })

};
;
//# sourceMappingURL=7327.app.js.map