"use strict";
exports.id = 2718;
exports.ids = [2718];
exports.modules = {

/***/ 6719:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/android-runtime-configuration-changes/index.html.vue?vue&type=template&id=2c20f18e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="android-runtime-configuration-changes" tabindex="-1"><a class="header-anchor" href="#android-runtime-configuration-changes" aria-hidden="true">#</a> Android Runtime Configuration Changes</h1><p>So, how can Android so easily support i18n? The secret is through how it handles runtime configuration changes. When the user changes language, all the GUI is destroyed and then re-created. The hard part is to make sure that it&#39;s re-created exactly the way the user left it!</p><iframe width="560" height="314" src="https://www.youtube.com/embed/P107Qcnnyys" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-runtime-configuration-changes.pdf">android-runtime-configuration-changes.pdf</a></li><li><a href="android-runtime-configuration-changes.pptx">android-runtime-configuration-changes.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li>Android Developers Guide&#39;s page <a href="https://developer.android.com/guide/topics/resources/runtime-changes" target="_blank" rel="noopener noreferrer">Handle configuration changes`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li><li>In the course book Elements of Android Jetpack: <ul><li><a href="https://commonsware.com/Jetpack/pages/chap-config-001.html" target="_blank" rel="noopener noreferrer">Coping with Configurations`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p><code>MainActivity</code> with a button functioning as a counter starting on 0. It retains its state using the <code>savedInstanceState</code> parameter.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-xml ext-xml line-numbers-mode"${
                _scopeId
              }><pre class="language-xml"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token prolog"${
                _scopeId
              }>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
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
              }>xmlns:</span>app</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/apk/res-auto<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
    <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>xmlns:</span>tools</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>http://schemas.android.com/tools<span class="token punctuation"${
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
              }>&quot;</span></span>
    <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>gravity</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>center<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
    <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>tools:</span>context</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MainActivity<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token prolog" }, "<?xml version=\"1.0\" encoding=\"utf-8\"?>"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("LinearLayout")
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
                        (0,external_vue_.createTextVNode)("\n    "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                          (0,external_vue_.createTextVNode)("tools")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("http://schemas.android.com/tools"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n    "),
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
                        (0,external_vue_.createTextVNode)("\n    "),
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
                        (0,external_vue_.createTextVNode)("\n    "),
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
                        (0,external_vue_.createTextVNode)("\n    "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("gravity")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("center"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n    "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "tools:"),
                          (0,external_vue_.createTextVNode)("context")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MainActivity"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n        "),
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
                        (0,external_vue_.createTextVNode)("\n        "),
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
                        (0,external_vue_.createTextVNode)("\n        "),
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
                      (0,external_vue_.createTextVNode)("\n    \n"),
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
              }>const</span> <span class="token keyword"${
                _scopeId
              }>val</span> KEY_COUNTER <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;COUNTER&quot;</span>

<span class="token keyword"${
                _scopeId
              }>class</span> MainActivity <span class="token operator"${
                _scopeId
              }>:</span> <span class="token function"${
                _scopeId
              }>AppCompatActivity</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    
    <span class="token keyword"${
                _scopeId
              }>var</span> counter <span class="token operator"${
                _scopeId
              }>=</span> <span class="token number"${
                _scopeId
              }>0</span>
    
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
        
        counter <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>when</span><span class="token punctuation"${
                _scopeId
              }>(</span>savedInstanceState<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
            <span class="token keyword"${
                _scopeId
              }>null</span> <span class="token operator"${
                _scopeId
              }>-&gt;</span>
                <span class="token number"${
                _scopeId
              }>0</span>
            <span class="token keyword"${
                _scopeId
              }>else</span> <span class="token operator"${
                _scopeId
              }>-&gt;</span>
                savedInstanceState<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getInt</span><span class="token punctuation"${
                _scopeId
              }>(</span>KEY_COUNTER<span class="token punctuation"${
                _scopeId
              }>)</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span>
        
        <span class="token keyword"${
                _scopeId
              }>val</span> button<span class="token operator"${
                _scopeId
              }>:</span> Button <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>findViewById</span><span class="token punctuation"${
                _scopeId
              }>(</span>R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>button<span class="token punctuation"${
                _scopeId
              }>)</span>
        <span class="token function"${
                _scopeId
              }>with</span><span class="token punctuation"${
                _scopeId
              }>(</span>button<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
            text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;<span class="token interpolation variable"${
                _scopeId
              }>\$counter</span>&quot;</span>
            setOnClickListener <span class="token punctuation"${
                _scopeId
              }>{</span>
                counter <span class="token operator"${
                _scopeId
              }>+=</span> <span class="token number"${
                _scopeId
              }>1</span>
                text <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;<span class="token interpolation variable"${
                _scopeId
              }>\$counter</span>&quot;</span>
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
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onSaveInstanceState</span><span class="token punctuation"${
                _scopeId
              }>(</span>outState<span class="token operator"${
                _scopeId
              }>:</span> Bundle<span class="token punctuation"${
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
              }>onSaveInstanceState</span><span class="token punctuation"${
                _scopeId
              }>(</span>outState<span class="token punctuation"${
                _scopeId
              }>)</span>
        outState<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>putInt</span><span class="token punctuation"${
                _scopeId
              }>(</span>KEY_COUNTER<span class="token punctuation"${
                _scopeId
              }>,</span> counter<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" KEY_COUNTER "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"COUNTER\""),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MainActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                      (0,external_vue_.createTextVNode)(" counter "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
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
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        \n        counter "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)("\n                "),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                      (0,external_vue_.createTextVNode)("\n                savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getInt"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("KEY_COUNTER"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        \n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" button"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Button "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "with"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, [
                        (0,external_vue_.createTextVNode)("\""),
                        (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$counter"),
                        (0,external_vue_.createTextVNode)("\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n            setOnClickListener "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n                counter "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                      (0,external_vue_.createTextVNode)("\n                text "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, [
                        (0,external_vue_.createTextVNode)("\""),
                        (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$counter"),
                        (0,external_vue_.createTextVNode)("\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onSaveInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("outState"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Bundle"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onSaveInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("outState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n        outState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "putInt"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("KEY_COUNTER"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" counter"),
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
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token prolog" }, "<?xml version=\"1.0\" encoding=\"utf-8\"?>"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("LinearLayout")
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
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "xmlns:"),
                        (0,external_vue_.createTextVNode)("tools")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("http://schemas.android.com/tools"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("gravity")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("center"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "tools:"),
                        (0,external_vue_.createTextVNode)("context")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MainActivity"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
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
                      (0,external_vue_.createTextVNode)("\n        "),
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
                      (0,external_vue_.createTextVNode)("\n        "),
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
                    (0,external_vue_.createTextVNode)("\n    \n"),
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" KEY_COUNTER "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"COUNTER\""),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MainActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "var"),
                    (0,external_vue_.createTextVNode)(" counter "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
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
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        counter "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "when"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)("\n                "),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "->"),
                    (0,external_vue_.createTextVNode)("\n                savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getInt"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("KEY_COUNTER"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" button"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Button "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "findViewById"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "with"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, [
                      (0,external_vue_.createTextVNode)("\""),
                      (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$counter"),
                      (0,external_vue_.createTextVNode)("\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n            setOnClickListener "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n                counter "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                    (0,external_vue_.createTextVNode)("\n                text "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, [
                      (0,external_vue_.createTextVNode)("\""),
                      (0,external_vue_.createVNode)("span", { class: "token interpolation variable" }, "$counter"),
                      (0,external_vue_.createTextVNode)("\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onSaveInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("outState"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Bundle"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onSaveInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("outState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        outState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "putInt"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("KEY_COUNTER"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" counter"),
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
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-runtime-configuration-changes/index.html.vue?vue&type=template&id=2c20f18e

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-runtime-configuration-changes/index.html.vue

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

/***/ 3090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-748b05f7",
  "path": "/lectures/android-runtime-configuration-changes/",
  "title": "Android Runtime Configuration Changes",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Android Runtime Configuration Changes"
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
      "title": "Example",
      "slug": "example",
      "children": []
    }
  ],
  "filePathRelative": "lectures/android-runtime-configuration-changes/README.md",
  "git": {
    "updatedTime": 1643553137000
  }
}


/***/ })

};
;
//# sourceMappingURL=2718.app.js.map