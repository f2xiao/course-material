"use strict";
exports.id = 8137;
exports.ids = [8137];
exports.modules = {

/***/ 1707:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/character-encodings/index.html.vue?vue&type=template&id=f603f224



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")

  _push(`<!--[--><h1 id="character-encodings" tabindex="-1"><a class="header-anchor" href="#character-encodings" aria-hidden="true">#</a> Character Encodings</h1><p>Computers only understand bits, right? Then how can they display and work with text? Let&#39;s find out!</p><iframe width="560" height="314" src="https://www.youtube.com/embed/z0cSH2t8Hhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="character-encodings.pdf">character-encodings.pdf</a></li><li><a href="character-encodings.pptx">character-encodings.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://www.w3.org/International/questions/qa-what-is-encoding" target="_blank" rel="noopener noreferrer">Character encodings for beginners`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/" target="_blank" rel="noopener noreferrer">The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.ascii-code.com/" target="_blank" rel="noopener noreferrer">ascii-code.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Don&#39;t learn anything by heart, but look at the table at least once.</li></ul></li></ul><h2 id="character-encodings-1" tabindex="-1"><a class="header-anchor" href="#character-encodings-1" aria-hidden="true">#</a> Character Encodings</h2><p>Computer programs are pretty good at displaying text on the screen. A good example of that is this text you are currently reading 😀 But even though computers are good at displaying text on the screen, they can&#39;t actually store any text/characters in their memory, only numbers (or rather combinations of bits that represent different numbers). So how do they deal with this problem? Well, each type of character (<code>a</code>, <code>b</code>, <code>c</code> etc.) is mapped to a number (like <code>97</code>, <code>98</code>, <code>99</code> etc.), and they store the number the characters is mapped to. Then when the character needs to be printed on the screen, the computer will print the character the number represents. An example of this is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A program in C printing 'Peter' on the screen." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-c ext-c line-numbers-mode"${
          _scopeId
        }><pre class="language-c"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token macro property"${
          _scopeId
        }><span class="token directive-hash"${
          _scopeId
        }>#</span><span class="token directive keyword"${
          _scopeId
        }>include</span> <span class="token string"${
          _scopeId
        }>&lt;stdio.h&gt;</span></span>

<span class="token keyword"${
          _scopeId
        }>int</span> <span class="token function"${
          _scopeId
        }>main</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    string name <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;Peter&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span> <span class="token comment"${
          _scopeId
        }>// This will actually store the numbers 80, 101, 116, 101 and 114.</span>
    <span class="token function"${
          _scopeId
        }>printf</span><span class="token punctuation"${
          _scopeId
        }>(</span>name<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span> <span class="token comment"${
          _scopeId
        }>// Here the printf() function receives the numbers 80, 101, 116, 101 and 114, but it will print the characters they represent instead of the numbers (P, e, t, e and r).</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>;</span>
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
          (0,external_vue_.createVNode)("div", { class: "language-c ext-c line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-c" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token macro property" }, [
                  (0,external_vue_.createVNode)("span", { class: "token directive-hash" }, "#"),
                  (0,external_vue_.createVNode)("span", { class: "token directive keyword" }, "include"),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token string" }, "<stdio.h>")
                ]),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "int"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "main"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    string name "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Peter\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// This will actually store the numbers 80, 101, 116, 101 and 114."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "printf"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("name"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Here the printf() function receives the numbers 80, 101, 116, 101 and 114, but it will print the characters they represent instead of the numbers (P, e, t, e and r)."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
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
  _push(`<p>An interesting question is: <em>Which characters are mapped to which numbers?</em> Unfortunately, the answer to this question is a bit more complicated than it would need to be these days, and this is also the reason why programmers needs to be aware of character encodings at all.</p><h3 id="charset-vs-character-encoding" tabindex="-1"><a class="header-anchor" href="#charset-vs-character-encoding" aria-hidden="true">#</a> Charset VS Character Encoding</h3><p>A <em>charset</em> (also known as <em>character set</em>) is a set of characters. For example, we could define the charset <code>plocko</code> as the set of the characters <code>a</code>, <code>b</code> and <code>c</code>.</p><p>A <em>character encoding</em> is the mapping of the characters in a charset into numbers. For example, the <code>plocko</code> charset could be mapped according to the table shown in in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "One way to map the characters in the plocko charset into numbers." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<table${
          _scopeId
        }><thead${
          _scopeId
        }><tr${
          _scopeId
        }><th style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>Number</th><th style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>Character</th></tr></thead><tbody${
          _scopeId
        }><tr${
          _scopeId
        }><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>1</td><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>a</td></tr><tr${
          _scopeId
        }><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>2</td><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>b</td></tr><tr${
          _scopeId
        }><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>3</td><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>c</td></tr></tbody></table>`)
      } else {
        return [
          (0,external_vue_.createVNode)("table", null, [
            (0,external_vue_.createVNode)("thead", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("th", { style: {"text-align":"center"} }, "Number"),
                (0,external_vue_.createVNode)("th", { style: {"text-align":"center"} }, "Character")
              ])
            ]),
            (0,external_vue_.createVNode)("tbody", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "1"),
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "a")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "2"),
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "b")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "3"),
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "c")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>For one charset, there can exist multiple different character encodings. For example, the <code>plocko</code> charset could be mapped according to the table shown in in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below instead.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Another way to map the characters in the plocko charset into numbers." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<table${
          _scopeId
        }><thead${
          _scopeId
        }><tr${
          _scopeId
        }><th style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>Number</th><th style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>Character</th></tr></thead><tbody${
          _scopeId
        }><tr${
          _scopeId
        }><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>1</td><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>b</td></tr><tr${
          _scopeId
        }><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>2</td><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>a</td></tr><tr${
          _scopeId
        }><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>3</td><td style="${
          (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
        }"${
          _scopeId
        }>c</td></tr></tbody></table>`)
      } else {
        return [
          (0,external_vue_.createVNode)("table", null, [
            (0,external_vue_.createVNode)("thead", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("th", { style: {"text-align":"center"} }, "Number"),
                (0,external_vue_.createVNode)("th", { style: {"text-align":"center"} }, "Character")
              ])
            ]),
            (0,external_vue_.createVNode)("tbody", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "1"),
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "b")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "2"),
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "a")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "3"),
                (0,external_vue_.createVNode)("td", { style: {"text-align":"center"} }, "c")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>It&#39;s always important to use the correct name on things to avoid confusion. Unfortunately, many programmers treat charsets and characters encoding as one and the same things. For example, in Java, the <a href="https://docs.oracle.com/javase/8/docs/api/java/nio/charset/StandardCharsets.html" target="_blank" rel="noopener noreferrer">StandardCharsets`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> class exists, but it rather defines character encodings. It&#39;s the same with <a href="https://www.w3.org/International/articles/http-charset/index" target="_blank" rel="noopener noreferrer">the <code>charset</code> header in HTTP`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>; it specify which character encoding to use, and not the charset.</p><p>Please contribute to a better world by using the correct name on things, instead of making it harder for the rest of us.</p><div class="custom-container warning"><p class="custom-container-title">Not a big problem</p><p>In practice it&#39;s not a big deal that some confuse charsets with character encodings, and vice versa, because most often each charset only have one character encoding.</p></div><h3 id="the-problem-with-character-encodings" tabindex="-1"><a class="header-anchor" href="#the-problem-with-character-encodings" aria-hidden="true">#</a> The problem with character encodings</h3><p>Each time you write some text, it will be written using a character encoding, so the computer knows which number each character you type should be mapped to. If you store the text (the numbers your typed characters have been mapped to) in a file and later wants to open the file to read the text, it&#39;s crucial that the computer uses the same character encoding to map the numbers back into characters, otherwise the wrong characters will be displayed on the screen after opening the file. This problem also exists when you send a file or a mail to a friend.</p><p>So it&#39;s crucial that one and the same text uses the same character encoding all the time. Unfortunately, there exists many different character encodings, and often the text/file itself doesn&#39;t contain any information about which character encoding that was used to create it, so sometimes files are opened with the wrong character encoding, and it displays characters that don&#39;t make sense. A common way to discover that the wrong character encoding has been used somewhere is that the text contains the <code>�</code> symbol or simply is unreadable.</p><h3 id="ascii" tabindex="-1"><a class="header-anchor" href="#ascii" aria-hidden="true">#</a> ASCII</h3><p>As computers have evolved, so have different character encodings. The earliest de facto standard character encoding was <em>American Standard Code for Information Interchange</em> (ASCII). In this encoding, each character is mapped to a 7 bits number, so it can map 2⁷ = 128 different characters to a number (between 0 and 127). The table in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows the mapping.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The ASCII character encoding." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<table${
          _scopeId
        }><thead${
          _scopeId
        }><tr${
          _scopeId
        }><th${
          _scopeId
        }>Number</th><th${
          _scopeId
        }>Character</th></tr></thead><tbody${
          _scopeId
        }><tr${
          _scopeId
        }><td${
          _scopeId
        }>0-31</td><td${
          _scopeId
        }>Control characters (not displayed on the screen but used to control how machines works (kind of)).</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>32</td><td${
          _scopeId
        }>(space)</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>33</td><td${
          _scopeId
        }>!</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>34</td><td${
          _scopeId
        }>&quot;</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>35</td><td${
          _scopeId
        }>#</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>36</td><td${
          _scopeId
        }>\$</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>37</td><td${
          _scopeId
        }>%</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>38</td><td${
          _scopeId
        }>&amp;</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>39</td><td${
          _scopeId
        }>&#39;</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>40</td><td${
          _scopeId
        }>(</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>41</td><td${
          _scopeId
        }>)</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>42</td><td${
          _scopeId
        }>*</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>43</td><td${
          _scopeId
        }>+</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>44</td><td${
          _scopeId
        }>,</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>45</td><td${
          _scopeId
        }>-</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>46</td><td${
          _scopeId
        }>.</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>47</td><td${
          _scopeId
        }>/</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>48</td><td${
          _scopeId
        }>0</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>49</td><td${
          _scopeId
        }>1</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>50</td><td${
          _scopeId
        }>2</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>51</td><td${
          _scopeId
        }>3</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>52</td><td${
          _scopeId
        }>4</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>53</td><td${
          _scopeId
        }>5</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>54</td><td${
          _scopeId
        }>6</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>55</td><td${
          _scopeId
        }>7</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>56</td><td${
          _scopeId
        }>8</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>57</td><td${
          _scopeId
        }>9</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>58</td><td${
          _scopeId
        }>:</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>59</td><td${
          _scopeId
        }>;</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>60</td><td${
          _scopeId
        }>&lt;</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>61</td><td${
          _scopeId
        }>=</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>62</td><td${
          _scopeId
        }>&gt;</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>63</td><td${
          _scopeId
        }>?</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>64</td><td${
          _scopeId
        }>@</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>65</td><td${
          _scopeId
        }>A</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>66</td><td${
          _scopeId
        }>B</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>67</td><td${
          _scopeId
        }>C</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>68</td><td${
          _scopeId
        }>D</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>69</td><td${
          _scopeId
        }>E</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>70</td><td${
          _scopeId
        }>F</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>71</td><td${
          _scopeId
        }>G</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>72</td><td${
          _scopeId
        }>H</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>73</td><td${
          _scopeId
        }>I</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>74</td><td${
          _scopeId
        }>J</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>75</td><td${
          _scopeId
        }>K</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>76</td><td${
          _scopeId
        }>L</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>77</td><td${
          _scopeId
        }>M</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>78</td><td${
          _scopeId
        }>N</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>79</td><td${
          _scopeId
        }>O</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>80</td><td${
          _scopeId
        }>P</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>81</td><td${
          _scopeId
        }>Q</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>82</td><td${
          _scopeId
        }>R</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>83</td><td${
          _scopeId
        }>S</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>84</td><td${
          _scopeId
        }>T</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>85</td><td${
          _scopeId
        }>U</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>86</td><td${
          _scopeId
        }>V</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>87</td><td${
          _scopeId
        }>W</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>88</td><td${
          _scopeId
        }>X</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>89</td><td${
          _scopeId
        }>Y</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>90</td><td${
          _scopeId
        }>Z</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>91</td><td${
          _scopeId
        }>[</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>92</td><td${
          _scopeId
        }>\\</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>93</td><td${
          _scopeId
        }>]</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>94</td><td${
          _scopeId
        }>^</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>95</td><td${
          _scopeId
        }>_</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>96</td><td${
          _scopeId
        }>\`</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>97</td><td${
          _scopeId
        }>a</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>98</td><td${
          _scopeId
        }>b</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>99</td><td${
          _scopeId
        }>c</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>100</td><td${
          _scopeId
        }>d</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>101</td><td${
          _scopeId
        }>e</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>102</td><td${
          _scopeId
        }>f</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>103</td><td${
          _scopeId
        }>g</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>104</td><td${
          _scopeId
        }>h</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>105</td><td${
          _scopeId
        }>i</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>106</td><td${
          _scopeId
        }>j</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>107</td><td${
          _scopeId
        }>k</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>108</td><td${
          _scopeId
        }>l</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>109</td><td${
          _scopeId
        }>m</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>110</td><td${
          _scopeId
        }>n</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>111</td><td${
          _scopeId
        }>o</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>112</td><td${
          _scopeId
        }>p</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>113</td><td${
          _scopeId
        }>q</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>114</td><td${
          _scopeId
        }>r</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>115</td><td${
          _scopeId
        }>s</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>116</td><td${
          _scopeId
        }>t</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>117</td><td${
          _scopeId
        }>u</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>118</td><td${
          _scopeId
        }>v</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>119</td><td${
          _scopeId
        }>w</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>120</td><td${
          _scopeId
        }>x</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>121</td><td${
          _scopeId
        }>y</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>122</td><td${
          _scopeId
        }>z</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>123</td><td${
          _scopeId
        }>{</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>124</td><td${
          _scopeId
        }>|</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>125</td><td${
          _scopeId
        }>}</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>126</td><td${
          _scopeId
        }>~</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>127</td><td${
          _scopeId
        }>DELETE (control character)</td></tr></tbody></table>`)
      } else {
        return [
          (0,external_vue_.createVNode)("table", null, [
            (0,external_vue_.createVNode)("thead", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("th", null, "Number"),
                (0,external_vue_.createVNode)("th", null, "Character")
              ])
            ]),
            (0,external_vue_.createVNode)("tbody", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "0-31"),
                (0,external_vue_.createVNode)("td", null, "Control characters (not displayed on the screen but used to control how machines works (kind of)).")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "32"),
                (0,external_vue_.createVNode)("td", null, "(space)")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "33"),
                (0,external_vue_.createVNode)("td", null, "!")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "34"),
                (0,external_vue_.createVNode)("td", null, "\"")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "35"),
                (0,external_vue_.createVNode)("td", null, "#")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "36"),
                (0,external_vue_.createVNode)("td", null, "$")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "37"),
                (0,external_vue_.createVNode)("td", null, "%")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "38"),
                (0,external_vue_.createVNode)("td", null, "&")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "39"),
                (0,external_vue_.createVNode)("td", null, "'")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "40"),
                (0,external_vue_.createVNode)("td", null, "(")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "41"),
                (0,external_vue_.createVNode)("td", null, ")")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "42"),
                (0,external_vue_.createVNode)("td", null, "*")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "43"),
                (0,external_vue_.createVNode)("td", null, "+")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "44"),
                (0,external_vue_.createVNode)("td", null, ",")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "45"),
                (0,external_vue_.createVNode)("td", null, "-")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "46"),
                (0,external_vue_.createVNode)("td", null, ".")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "47"),
                (0,external_vue_.createVNode)("td", null, "/")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "48"),
                (0,external_vue_.createVNode)("td", null, "0")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "49"),
                (0,external_vue_.createVNode)("td", null, "1")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "50"),
                (0,external_vue_.createVNode)("td", null, "2")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "51"),
                (0,external_vue_.createVNode)("td", null, "3")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "52"),
                (0,external_vue_.createVNode)("td", null, "4")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "53"),
                (0,external_vue_.createVNode)("td", null, "5")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "54"),
                (0,external_vue_.createVNode)("td", null, "6")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "55"),
                (0,external_vue_.createVNode)("td", null, "7")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "56"),
                (0,external_vue_.createVNode)("td", null, "8")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "57"),
                (0,external_vue_.createVNode)("td", null, "9")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "58"),
                (0,external_vue_.createVNode)("td", null, ":")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "59"),
                (0,external_vue_.createVNode)("td", null, ";")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "60"),
                (0,external_vue_.createVNode)("td", null, "<")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "61"),
                (0,external_vue_.createVNode)("td", null, "=")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "62"),
                (0,external_vue_.createVNode)("td", null, ">")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "63"),
                (0,external_vue_.createVNode)("td", null, "?")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "64"),
                (0,external_vue_.createVNode)("td", null, "@")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "65"),
                (0,external_vue_.createVNode)("td", null, "A")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "66"),
                (0,external_vue_.createVNode)("td", null, "B")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "67"),
                (0,external_vue_.createVNode)("td", null, "C")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "68"),
                (0,external_vue_.createVNode)("td", null, "D")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "69"),
                (0,external_vue_.createVNode)("td", null, "E")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "70"),
                (0,external_vue_.createVNode)("td", null, "F")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "71"),
                (0,external_vue_.createVNode)("td", null, "G")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "72"),
                (0,external_vue_.createVNode)("td", null, "H")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "73"),
                (0,external_vue_.createVNode)("td", null, "I")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "74"),
                (0,external_vue_.createVNode)("td", null, "J")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "75"),
                (0,external_vue_.createVNode)("td", null, "K")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "76"),
                (0,external_vue_.createVNode)("td", null, "L")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "77"),
                (0,external_vue_.createVNode)("td", null, "M")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "78"),
                (0,external_vue_.createVNode)("td", null, "N")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "79"),
                (0,external_vue_.createVNode)("td", null, "O")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "80"),
                (0,external_vue_.createVNode)("td", null, "P")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "81"),
                (0,external_vue_.createVNode)("td", null, "Q")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "82"),
                (0,external_vue_.createVNode)("td", null, "R")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "83"),
                (0,external_vue_.createVNode)("td", null, "S")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "84"),
                (0,external_vue_.createVNode)("td", null, "T")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "85"),
                (0,external_vue_.createVNode)("td", null, "U")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "86"),
                (0,external_vue_.createVNode)("td", null, "V")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "87"),
                (0,external_vue_.createVNode)("td", null, "W")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "88"),
                (0,external_vue_.createVNode)("td", null, "X")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "89"),
                (0,external_vue_.createVNode)("td", null, "Y")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "90"),
                (0,external_vue_.createVNode)("td", null, "Z")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "91"),
                (0,external_vue_.createVNode)("td", null, "[")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "92"),
                (0,external_vue_.createVNode)("td", null, "\\")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "93"),
                (0,external_vue_.createVNode)("td", null, "]")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "94"),
                (0,external_vue_.createVNode)("td", null, "^")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "95"),
                (0,external_vue_.createVNode)("td", null, "_")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "96"),
                (0,external_vue_.createVNode)("td", null, "`")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "97"),
                (0,external_vue_.createVNode)("td", null, "a")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "98"),
                (0,external_vue_.createVNode)("td", null, "b")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "99"),
                (0,external_vue_.createVNode)("td", null, "c")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "100"),
                (0,external_vue_.createVNode)("td", null, "d")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "101"),
                (0,external_vue_.createVNode)("td", null, "e")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "102"),
                (0,external_vue_.createVNode)("td", null, "f")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "103"),
                (0,external_vue_.createVNode)("td", null, "g")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "104"),
                (0,external_vue_.createVNode)("td", null, "h")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "105"),
                (0,external_vue_.createVNode)("td", null, "i")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "106"),
                (0,external_vue_.createVNode)("td", null, "j")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "107"),
                (0,external_vue_.createVNode)("td", null, "k")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "108"),
                (0,external_vue_.createVNode)("td", null, "l")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "109"),
                (0,external_vue_.createVNode)("td", null, "m")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "110"),
                (0,external_vue_.createVNode)("td", null, "n")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "111"),
                (0,external_vue_.createVNode)("td", null, "o")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "112"),
                (0,external_vue_.createVNode)("td", null, "p")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "113"),
                (0,external_vue_.createVNode)("td", null, "q")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "114"),
                (0,external_vue_.createVNode)("td", null, "r")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "115"),
                (0,external_vue_.createVNode)("td", null, "s")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "116"),
                (0,external_vue_.createVNode)("td", null, "t")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "117"),
                (0,external_vue_.createVNode)("td", null, "u")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "118"),
                (0,external_vue_.createVNode)("td", null, "v")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "119"),
                (0,external_vue_.createVNode)("td", null, "w")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "120"),
                (0,external_vue_.createVNode)("td", null, "x")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "121"),
                (0,external_vue_.createVNode)("td", null, "y")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "122"),
                (0,external_vue_.createVNode)("td", null, "z")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "123"),
                (0,external_vue_.createVNode)("td", null, "{")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "124"),
                (0,external_vue_.createVNode)("td", null, "|")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "125"),
                (0,external_vue_.createVNode)("td", null, "}")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "126"),
                (0,external_vue_.createVNode)("td", null, "~")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "127"),
                (0,external_vue_.createVNode)("td", null, "DELETE (control character)")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Although ASCII contains most characters Americans use and can be used within America without problem, it&#39;s not optimal for the rest of the world. For example, here in Sweden we also have the characters <code>å</code>, <code>ä</code>, <code>ö</code>, <code>Å</code>, <code>Ä</code> and <code>Ö</code> in our alphabet, but we can&#39;t use these characters in this character encoding. We usually solved that by using <code>a</code>, <code>o</code>, <code>A</code> and <code>O</code> instead, and hoped the reader would understand that we actually meant the other characters, but it was not a particular good solution.</p><p>Computers usually work in units of bytes (8 bits), so characters stored in ASCII usually wastes one bit. With that extra bit, 128 additional characters could be used (mapped to numbers 128 - 255). To use that extra bit, new character encodings were created that extended ASCII, meaning that the numbers 0-127 mapped to the same characters as in ASCII, but the numbers 128-255 are mapped to entirely new characters.</p><h3 id="iso-latin-1" tabindex="-1"><a class="header-anchor" href="#iso-latin-1" aria-hidden="true">#</a> ISO Latin-1</h3><p><em>ISO Latin-1</em> is one of the character encodings that extends ASCII. It&#39;s commonly used in Europe since it contains some extra characters that are used in many European countries. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows some of these extra characters.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Parts of the ISO Latin-1 character encoding." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<table${
          _scopeId
        }><thead${
          _scopeId
        }><tr${
          _scopeId
        }><th${
          _scopeId
        }>Number</th><th${
          _scopeId
        }>Character</th></tr></thead><tbody${
          _scopeId
        }><tr${
          _scopeId
        }><td${
          _scopeId
        }>0-127</td><td${
          _scopeId
        }>Same as in ASCII.</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>163</td><td${
          _scopeId
        }>£</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>196</td><td${
          _scopeId
        }>Ä</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>197</td><td${
          _scopeId
        }>Å</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>214</td><td${
          _scopeId
        }>Ö</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>220</td><td${
          _scopeId
        }>Ü</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>223</td><td${
          _scopeId
        }>ß</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>228</td><td${
          _scopeId
        }>ä</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>229</td><td${
          _scopeId
        }>å</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>246</td><td${
          _scopeId
        }>ö</td></tr></tbody></table>`)
      } else {
        return [
          (0,external_vue_.createVNode)("table", null, [
            (0,external_vue_.createVNode)("thead", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("th", null, "Number"),
                (0,external_vue_.createVNode)("th", null, "Character")
              ])
            ]),
            (0,external_vue_.createVNode)("tbody", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "0-127"),
                (0,external_vue_.createVNode)("td", null, "Same as in ASCII.")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "163"),
                (0,external_vue_.createVNode)("td", null, "£")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "196"),
                (0,external_vue_.createVNode)("td", null, "Ä")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "197"),
                (0,external_vue_.createVNode)("td", null, "Å")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "214"),
                (0,external_vue_.createVNode)("td", null, "Ö")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "220"),
                (0,external_vue_.createVNode)("td", null, "Ü")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "223"),
                (0,external_vue_.createVNode)("td", null, "ß")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "228"),
                (0,external_vue_.createVNode)("td", null, "ä")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "229"),
                (0,external_vue_.createVNode)("td", null, "å")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "246"),
                (0,external_vue_.createVNode)("td", null, "ö")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>This character encoding has been heavily used here in Sweden, because we can use all of our special characters in it.</p><h3 id="iso-latin-2" tabindex="-1"><a class="header-anchor" href="#iso-latin-2" aria-hidden="true">#</a> ISO Latin-2</h3><p><em>ISO Latin-2</em> is an example of another character encoding extending ASCII. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows some of the extra characters it adds.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Parts of the ISO Latin-2 character encoding." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<table${
          _scopeId
        }><thead${
          _scopeId
        }><tr${
          _scopeId
        }><th${
          _scopeId
        }>Number</th><th${
          _scopeId
        }>Character</th></tr></thead><tbody${
          _scopeId
        }><tr${
          _scopeId
        }><td${
          _scopeId
        }>0-127</td><td${
          _scopeId
        }>Same as in ASCII.</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>163</td><td${
          _scopeId
        }>Ł</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>196</td><td${
          _scopeId
        }>Ä</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>197</td><td${
          _scopeId
        }>Å</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>214</td><td${
          _scopeId
        }>Ö</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>220</td><td${
          _scopeId
        }>Ü</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>223</td><td${
          _scopeId
        }>ß</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>228</td><td${
          _scopeId
        }>ä</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>229</td><td${
          _scopeId
        }>å</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }>246</td><td${
          _scopeId
        }>ö</td></tr></tbody></table>`)
      } else {
        return [
          (0,external_vue_.createVNode)("table", null, [
            (0,external_vue_.createVNode)("thead", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("th", null, "Number"),
                (0,external_vue_.createVNode)("th", null, "Character")
              ])
            ]),
            (0,external_vue_.createVNode)("tbody", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "0-127"),
                (0,external_vue_.createVNode)("td", null, "Same as in ASCII.")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "163"),
                (0,external_vue_.createVNode)("td", null, "Ł")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "196"),
                (0,external_vue_.createVNode)("td", null, "Ä")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "197"),
                (0,external_vue_.createVNode)("td", null, "Å")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "214"),
                (0,external_vue_.createVNode)("td", null, "Ö")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "220"),
                (0,external_vue_.createVNode)("td", null, "Ü")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "223"),
                (0,external_vue_.createVNode)("td", null, "ß")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "228"),
                (0,external_vue_.createVNode)("td", null, "ä")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "229"),
                (0,external_vue_.createVNode)("td", null, "å")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, "246"),
                (0,external_vue_.createVNode)("td", null, "ö")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container tip"><p class="custom-container-title">Example</p><p>As you can see, ISO Latin-2 is quite similar to ISO Latin-1. One difference is that the number 163 maps to different characters. So if one would save the text <code>Ä£Ö</code> in ISO Latin-1 and then open it in ISO Latin-2, it would display <code>ÄŁÖ</code>! This is a good example of why it&#39;s important to save the text and open it using the same character encoding.</p></div><h3 id="other-extensions-to-ascii" tabindex="-1"><a class="header-anchor" href="#other-extensions-to-ascii" aria-hidden="true">#</a> Other extensions to ASCII</h3><p>In addition to ISO Latin-1 and ISO Latin-2, there exists many other character encodings that extends ASCII. One of them is <em>Windows-1252</em>, another one is <em>Windows-1250</em>, etc.</p><h3 id="unicode" tabindex="-1"><a class="header-anchor" href="#unicode" aria-hidden="true">#</a> Unicode</h3><p>It is quite hard to work with text when you need to keep track of which character encoding to use. The <em>Unicode</em> project was started to solve this problem. It defines a charset that contains as good as all characters in the world, as well as several different character encodings that maps the characters to numbers.</p><h4 id="utf-32" tabindex="-1"><a class="header-anchor" href="#utf-32" aria-hidden="true">#</a> UTF-32</h4><p>In the character encoding <em>UTF-32</em>, each character is mapped to a 32 bit (4 bytes) number. This makes it easy to understand how it works, but each character takes 4 times more space compared to ASCII. Therefore this character encoding is rarely used.</p><h4 id="utf-8" tabindex="-1"><a class="header-anchor" href="#utf-8" aria-hidden="true">#</a> UTF-8</h4><p>In the character encoding <em>UTF-8</em>, each character is mapped to 8 bits (1 byte), 16 bits (2 bytes), 24 bits (3 bytes) or 32 bits (4 bytes). The characters used in ASCII (the most commonly used characters) are mapped to 8 bits the very same way as in ASCII, so UTF-8 is backward compatible with ASCII (you can save a text in ASCII and then open it in UTF-8 and read it correctly). The less commonly used characters are mapped to 16, 24 or 32 bits. This way the size of the text is still quite small (since the most common characters only takes 8 bits), and it&#39;s still possible to use all the less commonly used characters in the text.</p><p>The downside with UTF-8 compared to UTF-32 is that the text is a bit harder to process, since each character is implemented with either 1, 2, 3 or 4 bytes. For example, to figure out how many characters a string in UTF-32 contains, you just need to divide the number of bytes in it by 4. In UTF-8 you need to go through the string byte by byte and count each character you come across, which takes more time.</p><h3 id="which-encoding-to-use" tabindex="-1"><a class="header-anchor" href="#which-encoding-to-use" aria-hidden="true">#</a> Which encoding to use?</h3><p>These days you should most often use UTF-8. It&#39;s the default encoding used in more and more applications. Optimally, everyone would use the same character encoding, but today there still exists many old applications that use ASCII or one of the character encodings extending ASCII, so you still need to be aware of character encodings when you work with those applications.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/character-encodings/index.html.vue?vue&type=template&id=f603f224

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/character-encodings/index.html.vue

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

/***/ 5074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-91f742d8",
  "path": "/lectures/character-encodings/",
  "title": "Character Encodings",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Character Encodings"
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
      "title": "Character Encodings",
      "slug": "character-encodings-1",
      "children": [
        {
          "level": 3,
          "title": "Charset VS Character Encoding",
          "slug": "charset-vs-character-encoding",
          "children": []
        },
        {
          "level": 3,
          "title": "The problem with character encodings",
          "slug": "the-problem-with-character-encodings",
          "children": []
        },
        {
          "level": 3,
          "title": "ASCII",
          "slug": "ascii",
          "children": []
        },
        {
          "level": 3,
          "title": "ISO Latin-1",
          "slug": "iso-latin-1",
          "children": []
        },
        {
          "level": 3,
          "title": "ISO Latin-2",
          "slug": "iso-latin-2",
          "children": []
        },
        {
          "level": 3,
          "title": "Other extensions to ASCII",
          "slug": "other-extensions-to-ascii",
          "children": []
        },
        {
          "level": 3,
          "title": "Unicode",
          "slug": "unicode",
          "children": []
        },
        {
          "level": 3,
          "title": "Which encoding to use?",
          "slug": "which-encoding-to-use",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/character-encodings/README.md",
  "git": {
    "updatedTime": 1598182318000
  }
}


/***/ })

};
;
//# sourceMappingURL=8137.app.js.map