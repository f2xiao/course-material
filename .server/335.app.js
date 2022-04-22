"use strict";
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 4528:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/android-coordinator-layout/index.html.vue?vue&type=template&id=2a50e6fd



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")
  const _component_Smartphone = (0,external_vue_.resolveComponent)("Smartphone")

  _push(`<!--[--><h1 id="android-coordinatorlayout" tabindex="-1"><a class="header-anchor" href="#android-coordinatorlayout" aria-hidden="true">#</a> Android CoordinatorLayout</h1><p>Let&#39;s take a look at one of the new layouts we got with material design: <code>CoordinatorLayout</code>.</p><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><p>Android documentation:</p><ul><li><a href="https://developer.android.com/reference/androidx/coordinatorlayout/widget/CoordinatorLayout" target="_blank" rel="noopener noreferrer">CoordinatorLayout`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="the-coordinatorlayout" tabindex="-1"><a class="header-anchor" href="#the-coordinatorlayout" aria-hidden="true">#</a> The CoordinatorLayout</h2><p>When we got Material Design components in Android, some views needed to be coordinated to appear and behave correct. By placing views in a <code>CoordinatorLayout</code>, each view can have a <em>behavior</em> attached to it that can tell the <code>CoordinatorLayout</code> which other views in the layout that view is dependent on. The <code>CoordinatorLayout</code> will then inform the behavior when any of the dependent views change in size or position, at which point the behavior should update its own view to behave correctly, such as to move it.</p><div class="custom-container tip"><p class="custom-container-title">Coordinating, not positioning</p><p>The <code>CoordinatorLayout</code> is primarily for coordinating views through behaviors added to them; it does not have much functionality for positioning the views in it. Therefor, we usually put another <code>Layout</code> in the <code>CoordinatorLayout</code> (such as a <code>ConstraintLayout</code>) to position the views. But we have some tools to position the views in a <code>CoordinatorLayout</code>, such as the tools we have to position views in a <code>FrameLayout</code>, such as <code>layout_gravity</code> and margins.</p></div><h3 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior" aria-hidden="true">#</a> Behavior</h3><p>The example below contains code that moves a <code>TextView</code> to the right when a <code>Button</code> is clicked the &quot;traditional&quot; way.</p><div class="custom-container tip"><p class="custom-container-title">Example</p>`)
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
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>androidx.coordinatorlayout.widget.CoordinatorLayout</span>
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
              }>&quot;</span>@+id/first_text_view<span class="token punctuation"${
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
              }>&quot;</span>Some text.<span class="token punctuation"${
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
              }>&quot;</span>@+id/second_text_view<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_marginTop</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>30dp<span class="token punctuation"${
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
              }>&quot;</span>Some other text.<span class="token punctuation"${
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
              }>android:</span>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@+id/move_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_marginTop</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>60dp<span class="token punctuation"${
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
              }>&quot;</span>Move first text<span class="token punctuation"${
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
              }>&lt;/</span>androidx.coordinatorlayout.widget.CoordinatorLayout</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/first_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Some text."),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/second_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_marginTop")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("30dp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Some other text."),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/move_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_marginTop")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("60dp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Move first text"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
    
    <span class="token keyword"${
                _scopeId
              }>val</span> firstTextView <span class="token operator"${
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
              }>.</span>first_text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token keyword"${
                _scopeId
              }>val</span> moveButton <span class="token operator"${
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
              }>.</span>move_button<span class="token punctuation"${
                _scopeId
              }>)</span>
    
    <span class="token comment"${
                _scopeId
              }>// Move the first TextView when the button is clicked.</span>
    moveButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
      <span class="token keyword"${
                _scopeId
              }>val</span> layoutParams <span class="token operator"${
                _scopeId
              }>=</span> firstTextView<span class="token punctuation"${
                _scopeId
              }>.</span>layoutParams <span class="token keyword"${
                _scopeId
              }>as</span> ViewGroup<span class="token punctuation"${
                _scopeId
              }>.</span>MarginLayoutParams
      layoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin <span class="token operator"${
                _scopeId
              }>=</span> layoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin <span class="token operator"${
                _scopeId
              }>+</span> <span class="token number"${
                _scopeId
              }>5</span>
      firstTextView<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>requestLayout</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token comment"${
                _scopeId
              }>// Tell the framework to repaint this view.</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MainActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" firstTextView "),
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
                      (0,external_vue_.createTextVNode)("first_text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" moveButton "),
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
                      (0,external_vue_.createTextVNode)("move_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Move the first TextView when the button is clicked."),
                      (0,external_vue_.createTextVNode)("\n    moveButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" firstTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                      (0,external_vue_.createTextVNode)(" ViewGroup"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("MarginLayoutParams\n      layoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" layoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                      (0,external_vue_.createTextVNode)("\n      firstTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Tell the framework to repaint this view."),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n  \n"),
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
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/first_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Some text."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/second_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_marginTop")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("30dp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Some other text."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/move_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_marginTop")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("60dp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Move first text"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MainActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
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
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" firstTextView "),
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
                    (0,external_vue_.createTextVNode)("first_text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" moveButton "),
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
                    (0,external_vue_.createTextVNode)("move_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Move the first TextView when the button is clicked."),
                    (0,external_vue_.createTextVNode)("\n    moveButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" firstTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                    (0,external_vue_.createTextVNode)(" ViewGroup"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("MarginLayoutParams\n      layoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" layoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                    (0,external_vue_.createTextVNode)("\n      firstTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Tell the framework to repaint this view."),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n  \n"),
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
        _push(`<div${
          _scopeId
        }>Some text</div><div${
          _scopeId
        }>Some other text</div><button onclick="this.previousElementSibling.previousElementSibling.innerHTML = &#39; &#39;+this.previousElementSibling.previousElementSibling.innerHTML"${
          _scopeId
        }>Move first text</button>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", null, "Some text"),
          (0,external_vue_.createVNode)("div", null, "Some other text"),
          (0,external_vue_.createVNode)("button", { onclick: "this.previousElementSibling.previousElementSibling.innerHTML = ' '+this.previousElementSibling.previousElementSibling.innerHTML" }, "Move first text")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><p>If we want the second <code>TextView</code> to be moved the same way as the first <code>TextView</code>, we can add a <code>Behavior</code> to it that tells the <code>CoordinatorLayout</code> that it depends on the first <code>TextView</code>. Then the <code>CoordinatorLayout</code> will notify the <code>Behavior</code> each time the first <code>TextView</code> is moved, and the <code>Behavior</code> can in turn change the position of the second <code>TextView</code> it has been added to, as in the example below.</p><div class="custom-container tip"><p class="custom-container-title">Example</p>`)
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
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>androidx.coordinatorlayout.widget.CoordinatorLayout</span>
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
              }>&quot;</span>@+id/first_text_view<span class="token punctuation"${
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
              }>&quot;</span>Some text.<span class="token punctuation"${
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
              }>&quot;</span>@+id/second_text_view<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_marginTop</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>30dp<span class="token punctuation"${
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
              }>&quot;</span>Some other text.<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>app:</span>layout_behavior</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>.MyBehavior<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span> <span class="token comment"${
                _scopeId
              }>&lt;!-- Only change from before. --&gt;</span>

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
              }>&quot;</span>@+id/move_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_marginTop</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>60dp<span class="token punctuation"${
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
              }>&quot;</span>Move first text<span class="token punctuation"${
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
              }>&lt;/</span>androidx.coordinatorlayout.widget.CoordinatorLayout</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/first_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Some text."),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/second_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_marginTop")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("30dp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Some other text."),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                          (0,external_vue_.createTextVNode)("layout_behavior")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)(".MyBehavior"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Only change from before. -->"),
                      (0,external_vue_.createTextVNode)("\n\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/move_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_marginTop")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("60dp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Move first text"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
              }><span class="token comment"${
                _scopeId
              }>// Same as before.</span>
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
    
    <span class="token keyword"${
                _scopeId
              }>val</span> firstTextView <span class="token operator"${
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
              }>.</span>first_text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token keyword"${
                _scopeId
              }>val</span> moveButton <span class="token operator"${
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
              }>.</span>move_button<span class="token punctuation"${
                _scopeId
              }>)</span>
    
    moveButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
      <span class="token keyword"${
                _scopeId
              }>val</span> layoutParams <span class="token operator"${
                _scopeId
              }>=</span> firstTextView<span class="token punctuation"${
                _scopeId
              }>.</span>layoutParams <span class="token keyword"${
                _scopeId
              }>as</span> ViewGroup<span class="token punctuation"${
                _scopeId
              }>.</span>MarginLayoutParams
      layoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin <span class="token operator"${
                _scopeId
              }>=</span> layoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin <span class="token operator"${
                _scopeId
              }>+</span> <span class="token number"${
                _scopeId
              }>5</span>
      firstTextView<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>requestLayout</span><span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Same as before."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MainActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" firstTextView "),
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
                      (0,external_vue_.createTextVNode)("first_text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" moveButton "),
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
                      (0,external_vue_.createTextVNode)("move_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    moveButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" firstTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                      (0,external_vue_.createTextVNode)(" ViewGroup"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("MarginLayoutParams\n      layoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" layoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                      (0,external_vue_.createTextVNode)("\n      firstTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n  \n"),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "MyBehavior.kt" }, {
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
              }>// The type of view we specify in the super class should match the type of view the behavior can be added to.</span>
<span class="token comment"${
                _scopeId
              }>// Currently it&#39;s &lt;TextView&gt;, but it could just as well be &lt;View&gt; in this case, since this behavior is</span>
<span class="token comment"${
                _scopeId
              }>// not dependent on any TextView specific functionality (for example, it would work equally well on an ImageView).</span>
<span class="token keyword"${
                _scopeId
              }>class</span> <span class="token function"${
                _scopeId
              }>MyBehavior</span><span class="token punctuation"${
                _scopeId
              }>(</span>context<span class="token operator"${
                _scopeId
              }>:</span> Context<span class="token punctuation"${
                _scopeId
              }>,</span> attrs<span class="token operator"${
                _scopeId
              }>:</span> AttributeSet<span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token operator"${
                _scopeId
              }>:</span>
    CoordinatorLayout<span class="token punctuation"${
                _scopeId
              }>.</span>Behavior<span class="token operator"${
                _scopeId
              }>&lt;</span>TextView<span class="token operator"${
                _scopeId
              }>&gt;</span><span class="token punctuation"${
                _scopeId
              }>(</span>context<span class="token punctuation"${
                _scopeId
              }>,</span> attrs<span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
  
  <span class="token comment"${
                _scopeId
              }>// This function will be called by the CoordinatorLayout.</span>
  <span class="token comment"${
                _scopeId
              }>// The parameter &quot;child&quot; is the view this behavior has been added to.</span>
  <span class="token comment"${
                _scopeId
              }>// We should return back true if we are dependent on the parameter &quot;dependency&quot;, otherwise false.</span>
  <span class="token comment"${
                _scopeId
              }>// This function will be called once for all views in the CoordinatorLayout except the one the behavior has been added to.</span>
  <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>layoutDependsOn</span><span class="token punctuation"${
                _scopeId
              }>(</span>
    parent<span class="token operator"${
                _scopeId
              }>:</span> CoordinatorLayout<span class="token punctuation"${
                _scopeId
              }>,</span>
    child<span class="token operator"${
                _scopeId
              }>:</span> TextView<span class="token punctuation"${
                _scopeId
              }>,</span>
    dependency<span class="token operator"${
                _scopeId
              }>:</span> View
  <span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token operator"${
                _scopeId
              }>=</span> dependency<span class="token punctuation"${
                _scopeId
              }>.</span>id <span class="token operator"${
                _scopeId
              }>==</span> R<span class="token punctuation"${
                _scopeId
              }>.</span>id<span class="token punctuation"${
                _scopeId
              }>.</span>first_text_view
  
  <span class="token comment"${
                _scopeId
              }>// This function will be called whenever a view we depend on (according to layoutDependsOn())</span>
  <span class="token comment"${
                _scopeId
              }>// changes size or position. </span>
  <span class="token comment"${
                _scopeId
              }>// The parameter &quot;child&quot; is the view this behavior has been added to.</span>
  <span class="token comment"${
                _scopeId
              }>// The parameter &quot;dependency&quot; is the view that has changed size or position.</span>
  <span class="token keyword"${
                _scopeId
              }>override</span> <span class="token keyword"${
                _scopeId
              }>fun</span> <span class="token function"${
                _scopeId
              }>onDependentViewChanged</span><span class="token punctuation"${
                _scopeId
              }>(</span>
    parent<span class="token operator"${
                _scopeId
              }>:</span> CoordinatorLayout<span class="token punctuation"${
                _scopeId
              }>,</span>
    child<span class="token operator"${
                _scopeId
              }>:</span> TextView<span class="token punctuation"${
                _scopeId
              }>,</span>
    dependency<span class="token operator"${
                _scopeId
              }>:</span> View
  <span class="token punctuation"${
                _scopeId
              }>)</span><span class="token operator"${
                _scopeId
              }>:</span> Boolean <span class="token punctuation"${
                _scopeId
              }>{</span>
    
    <span class="token comment"${
                _scopeId
              }>// Set our view&#39;s left margin to the same margin as the view we depend on (the first TextView).</span>
    <span class="token keyword"${
                _scopeId
              }>val</span> childLayoutParams <span class="token operator"${
                _scopeId
              }>=</span> child<span class="token punctuation"${
                _scopeId
              }>.</span>layoutParams <span class="token keyword"${
                _scopeId
              }>as</span> ViewGroup<span class="token punctuation"${
                _scopeId
              }>.</span>MarginLayoutParams
    <span class="token keyword"${
                _scopeId
              }>val</span> dependencyLayoutParams <span class="token operator"${
                _scopeId
              }>=</span> dependency<span class="token punctuation"${
                _scopeId
              }>.</span>layoutParams <span class="token keyword"${
                _scopeId
              }>as</span> ViewGroup<span class="token punctuation"${
                _scopeId
              }>.</span>MarginLayoutParams
    childLayoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin <span class="token operator"${
                _scopeId
              }>=</span> dependencyLayoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin
    
    <span class="token comment"${
                _scopeId
              }>// Tell the framework to repaint the view.</span>
    child<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>requestLayout</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    
    <span class="token comment"${
                _scopeId
              }>// Return true to tell the CoordinatorLayout that we have changed this view.</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The type of view we specify in the super class should match the type of view the behavior can be added to."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Currently it's <TextView>, but it could just as well be <View> in this case, since this behavior is"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// not dependent on any TextView specific functionality (for example, it would work equally well on an ImageView)."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "MyBehavior"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("context"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Context"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" attrs"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" AttributeSet"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)("\n    CoordinatorLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("Behavior"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                      (0,external_vue_.createTextVNode)("TextView"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("context"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" attrs"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This function will be called by the CoordinatorLayout."),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The parameter \"child\" is the view this behavior has been added to."),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// We should return back true if we are dependent on the parameter \"dependency\", otherwise false."),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This function will be called once for all views in the CoordinatorLayout except the one the behavior has been added to."),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "layoutDependsOn"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("\n    parent"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" CoordinatorLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    child"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" TextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    dependency"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" View\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" dependency"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                      (0,external_vue_.createTextVNode)(" R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("id"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("first_text_view\n  \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This function will be called whenever a view we depend on (according to layoutDependsOn())"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// changes size or position. "),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The parameter \"child\" is the view this behavior has been added to."),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The parameter \"dependency\" is the view that has changed size or position."),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onDependentViewChanged"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("\n    parent"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" CoordinatorLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    child"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" TextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    dependency"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" View\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Boolean "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Set our view's left margin to the same margin as the view we depend on (the first TextView)."),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" childLayoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" child"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                      (0,external_vue_.createTextVNode)(" ViewGroup"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("MarginLayoutParams\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" dependencyLayoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" dependency"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                      (0,external_vue_.createTextVNode)(" ViewGroup"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("MarginLayoutParams\n    childLayoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" dependencyLayoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Tell the framework to repaint the view."),
                      (0,external_vue_.createTextVNode)("\n    child"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Return true to tell the CoordinatorLayout that we have changed this view."),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createTextVNode)("\n    \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n  \n"),
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
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/first_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Some text."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/second_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_marginTop")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("30dp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Some other text."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                        (0,external_vue_.createTextVNode)("layout_behavior")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)(".MyBehavior"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Only change from before. -->"),
                    (0,external_vue_.createTextVNode)("\n\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/move_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_marginTop")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("60dp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Move first text"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Same as before."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MainActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
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
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" firstTextView "),
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
                    (0,external_vue_.createTextVNode)("first_text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" moveButton "),
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
                    (0,external_vue_.createTextVNode)("move_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    moveButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" firstTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                    (0,external_vue_.createTextVNode)(" ViewGroup"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("MarginLayoutParams\n      layoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" layoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                    (0,external_vue_.createTextVNode)("\n      firstTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n  \n"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "MyBehavior.kt" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The type of view we specify in the super class should match the type of view the behavior can be added to."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Currently it's <TextView>, but it could just as well be <View> in this case, since this behavior is"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// not dependent on any TextView specific functionality (for example, it would work equally well on an ImageView)."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "MyBehavior"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("context"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Context"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" attrs"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" AttributeSet"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)("\n    CoordinatorLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("Behavior"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                    (0,external_vue_.createTextVNode)("TextView"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ">"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("context"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" attrs"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This function will be called by the CoordinatorLayout."),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The parameter \"child\" is the view this behavior has been added to."),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// We should return back true if we are dependent on the parameter \"dependency\", otherwise false."),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This function will be called once for all views in the CoordinatorLayout except the one the behavior has been added to."),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "layoutDependsOn"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("\n    parent"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" CoordinatorLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    child"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" TextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    dependency"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" View\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" dependency"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                    (0,external_vue_.createTextVNode)(" R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("id"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("first_text_view\n  \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This function will be called whenever a view we depend on (according to layoutDependsOn())"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// changes size or position. "),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The parameter \"child\" is the view this behavior has been added to."),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The parameter \"dependency\" is the view that has changed size or position."),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "override"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "fun"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onDependentViewChanged"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("\n    parent"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" CoordinatorLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    child"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" TextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    dependency"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" View\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Boolean "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Set our view's left margin to the same margin as the view we depend on (the first TextView)."),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" childLayoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" child"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                    (0,external_vue_.createTextVNode)(" ViewGroup"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("MarginLayoutParams\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" dependencyLayoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" dependency"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                    (0,external_vue_.createTextVNode)(" ViewGroup"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("MarginLayoutParams\n    childLayoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" dependencyLayoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Tell the framework to repaint the view."),
                    (0,external_vue_.createTextVNode)("\n    child"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Return true to tell the CoordinatorLayout that we have changed this view."),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)("\n    \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n  \n"),
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
        _push(`<div${
          _scopeId
        }>Some text</div><div${
          _scopeId
        }>Some other text</div><button onclick="this.previousElementSibling.previousElementSibling.innerHTML = &#39; &#39;+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = &#39; &#39;+this.previousElementSibling.innerHTML"${
          _scopeId
        }>Move first text</button>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", null, "Some text"),
          (0,external_vue_.createVNode)("div", null, "Some other text"),
          (0,external_vue_.createVNode)("button", { onclick: "this.previousElementSibling.previousElementSibling.innerHTML = ' '+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = ' '+this.previousElementSibling.innerHTML" }, "Move first text")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><p>Often we don&#39;t create our own behaviors (the code for behaviors usually get quite complicated), but instead use some behaviors others have created for us. The Android support library has some for different type of behaviors we can use.</p><h3 id="anchors" tabindex="-1"><a class="header-anchor" href="#anchors" aria-hidden="true">#</a> Anchors</h3><p>The <code>CoordinatorLayout</code> has one new way to position its views: using anchors. You can &quot;anchor&quot; a view to another view, and then that view will stick to that other view, even when that other view is moved.</p><p>Before we created our own <code>Behavior</code> to make one <code>TextView</code> follow another <code>TextView</code> as it moved. This is more or less what anchors are used for (implemented as a <code>Behavior</code>), so we could achieve similar functionality using the <code>layout_anchor*</code> attributes, as shown in the example below.</p><p>::::: Example</p>`)
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
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>androidx.coordinatorlayout.widget.CoordinatorLayout</span>
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
              }>&quot;</span>@+id/first_text_view<span class="token punctuation"${
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
              }>&quot;</span>Some text.<span class="token punctuation"${
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
              }>&quot;</span>@+id/second_text_view<span class="token punctuation"${
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
              }>&quot;</span>Some other text.<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>app:</span>layout_anchor</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>@id/first_text_view<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> 
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>app:</span>layout_anchorGravity</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>end|bottom<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span> 
      <span class="token comment"${
                _scopeId
              }>&lt;!-- Changes from before:
           1. layout_marginTop has been removed.
           1. Our own behavior has been removed.
           2. Anchor this view to the end (right in LTR) and below the first TextView (the horizontal center of this view will match the end of the first TextView) --&gt;</span>

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
              }>&quot;</span>@+id/move_button<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span>
      <span class="token attr-name"${
                _scopeId
              }><span class="token namespace"${
                _scopeId
              }>android:</span>layout_marginTop</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>60dp<span class="token punctuation"${
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
              }>&quot;</span>Move first text<span class="token punctuation"${
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
              }>&lt;/</span>androidx.coordinatorlayout.widget.CoordinatorLayout</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
                        ]),
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createTextVNode)("\n  "),
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
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/first_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Some text."),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("TextView")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/second_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Some other text."),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                          (0,external_vue_.createTextVNode)("layout_anchor")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@id/first_text_view"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(" \n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                          (0,external_vue_.createTextVNode)("layout_anchorGravity")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("end|bottom"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)(" \n      "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Changes from before:\n           1. layout_marginTop has been removed.\n           1. Our own behavior has been removed.\n           2. Anchor this view to the end (right in LTR) and below the first TextView (the horizontal center of this view will match the end of the first TextView) -->"),
                      (0,external_vue_.createTextVNode)("\n\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("Button")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
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
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("id")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("@+id/move_button"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("layout_marginTop")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("60dp"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)("\n      "),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                          (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                          (0,external_vue_.createTextVNode)("text")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Move first text"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
              }><span class="token comment"${
                _scopeId
              }>// Same as before.</span>
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
    
    <span class="token keyword"${
                _scopeId
              }>val</span> firstTextView <span class="token operator"${
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
              }>.</span>first_text_view<span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token keyword"${
                _scopeId
              }>val</span> moveButton <span class="token operator"${
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
              }>.</span>move_button<span class="token punctuation"${
                _scopeId
              }>)</span>
    
    moveButton<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setOnClickListener</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
      <span class="token keyword"${
                _scopeId
              }>val</span> layoutParams <span class="token operator"${
                _scopeId
              }>=</span> firstTextView<span class="token punctuation"${
                _scopeId
              }>.</span>layoutParams <span class="token keyword"${
                _scopeId
              }>as</span> ViewGroup<span class="token punctuation"${
                _scopeId
              }>.</span>MarginLayoutParams
      layoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin <span class="token operator"${
                _scopeId
              }>=</span> layoutParams<span class="token punctuation"${
                _scopeId
              }>.</span>leftMargin <span class="token operator"${
                _scopeId
              }>+</span> <span class="token number"${
                _scopeId
              }>5</span>
      firstTextView<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>requestLayout</span><span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-kotlin ext-kt line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-kotlin" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Same as before."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                      (0,external_vue_.createTextVNode)(" MainActivity "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
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
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("savedInstanceState"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("R"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("activity_main"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" firstTextView "),
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
                      (0,external_vue_.createTextVNode)("first_text_view"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" moveButton "),
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
                      (0,external_vue_.createTextVNode)("move_button"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    moveButton"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                      (0,external_vue_.createTextVNode)(" layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" firstTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("layoutParams "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                      (0,external_vue_.createTextVNode)(" ViewGroup"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("MarginLayoutParams\n      layoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" layoutParams"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("leftMargin "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                      (0,external_vue_.createTextVNode)("\n      firstTextView"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n  \n"),
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
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-xml ext-xml line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-xml" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createTextVNode)("\n  "),
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
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/first_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Some text."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("TextView")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/second_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Some other text."),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                        (0,external_vue_.createTextVNode)("layout_anchor")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@id/first_text_view"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(" \n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "app:"),
                        (0,external_vue_.createTextVNode)("layout_anchorGravity")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("end|bottom"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)(" \n      "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Changes from before:\n           1. layout_marginTop has been removed.\n           1. Our own behavior has been removed.\n           2. Anchor this view to the end (right in LTR) and below the first TextView (the horizontal center of this view will match the end of the first TextView) -->"),
                    (0,external_vue_.createTextVNode)("\n\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("Button")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
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
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("id")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("@+id/move_button"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("layout_marginTop")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("60dp"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                        (0,external_vue_.createVNode)("span", { class: "token namespace" }, "android:"),
                        (0,external_vue_.createTextVNode)("text")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Move first text"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("androidx.coordinatorlayout.widget.CoordinatorLayout")
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
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Same as before."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "class"),
                    (0,external_vue_.createTextVNode)(" MainActivity "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "AppCompatActivity"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
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
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "super"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "onCreate"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("savedInstanceState"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setContentView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("R"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("activity_main"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" firstTextView "),
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
                    (0,external_vue_.createTextVNode)("first_text_view"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" moveButton "),
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
                    (0,external_vue_.createTextVNode)("move_button"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    moveButton"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setOnClickListener"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "val"),
                    (0,external_vue_.createTextVNode)(" layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" firstTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("layoutParams "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "as"),
                    (0,external_vue_.createTextVNode)(" ViewGroup"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("MarginLayoutParams\n      layoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" layoutParams"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("leftMargin "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                    (0,external_vue_.createTextVNode)("\n      firstTextView"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "requestLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n  \n"),
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
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_Smartphone, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${
          _scopeId
        }>Some text</div><div${
          _scopeId
        }>    Some other text</div><button onclick="this.previousElementSibling.previousElementSibling.innerHTML = &#39; &#39;+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = &#39; &#39;+this.previousElementSibling.innerHTML"${
          _scopeId
        }>Move first text</button>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", null, "Some text"),
          (0,external_vue_.createVNode)("div", null, "    Some other text"),
          (0,external_vue_.createVNode)("button", { onclick: "this.previousElementSibling.previousElementSibling.innerHTML = ' '+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = ' '+this.previousElementSibling.innerHTML" }, "Move first text")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>:::::</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-coordinator-layout/index.html.vue?vue&type=template&id=2a50e6fd

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/android-coordinator-layout/index.html.vue

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

/***/ 7118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3012332e",
  "path": "/lectures/android-coordinator-layout/",
  "title": "Android CoordinatorLayout",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Android CoordinatorLayout"
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
      "title": "The CoordinatorLayout",
      "slug": "the-coordinatorlayout",
      "children": [
        {
          "level": 3,
          "title": "Behavior",
          "slug": "behavior",
          "children": []
        },
        {
          "level": 3,
          "title": "Anchors",
          "slug": "anchors",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/android-coordinator-layout/README.md",
  "git": {
    "updatedTime": 1644225479000
  }
}


/***/ })

};
;
//# sourceMappingURL=335.app.js.map