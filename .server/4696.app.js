"use strict";
exports.id = 4696;
exports.ids = [4696];
exports.modules = {

/***/ 7248:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/content-delivery-networks/index.html.vue?vue&type=template&id=390d5e36



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="content-delivery-networks" tabindex="-1"><a class="header-anchor" href="#content-delivery-networks" aria-hidden="true">#</a> Content Delivery Networks</h1><p>It&#39;s important that static files clients request (images, videos, CSS files, client-side JS files, etc.) are delivered fast to the clients, because users don&#39;t want to wait. What&#39;s the fastest way to deliver them? Probably by using a <em>Content Delivery Network</em> (CDN), so let&#39;s go through what that is.</p><hr><p>First, let&#39;s make it clear that there exists many different companies that host content delivery networks. The website <a href="https://www.trustradius.com/content-delivery-networks-cdn" target="_blank" rel="noopener noreferrer">TrustRadius has a list of some of them`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. One of them, <em>Cloudflare</em>, has some really good pages describing what a content delivery network is. The content of this lecture will simply be the content on those pages:</p><ul><li><a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" target="_blank" rel="noopener noreferrer">What is a CDN? | How do CDNs work?`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.cloudflare.com/learning/cdn/performance/" target="_blank" rel="noopener noreferrer">CDN Performance`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.cloudflare.com/learning/cdn/cdn-load-balance-reliability/" target="_blank" rel="noopener noreferrer">CDN Reliability &amp; Redundancy`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>The rest of this lecture will contain some complimentary information related to content delivery networks.</p><h2 id="a-cdn-do-not-run-your-web-application" tabindex="-1"><a class="header-anchor" href="#a-cdn-do-not-run-your-web-application" aria-hidden="true">#</a> A CDN do not run your web application</h2><p>You can&#39;t use a CDN to run your web application, such as an Express application. CDNs do not execute any of your application&#39;s code. You can only use a CDN to distribute files, such as images, videos, CSS files, etc.</p><p>If your website only consists of static files, then you don&#39;t really need a web application at all. In these cases, a content delivery network is all you need to &quot;run&quot; your website. This is an extremely cheap way of &quot;running&quot; a single-page application, and clients will be able to retrieve your single-page application very fast. If you need to have some code that runs on a server, you can run that as a separate web application on another server your single-page application sends requests to.</p><h2 id="css-frameworks-and-client-side-javascript-libraries" tabindex="-1"><a class="header-anchor" href="#css-frameworks-and-client-side-javascript-libraries" aria-hidden="true">#</a> CSS frameworks and client-side JavaScript libraries</h2><p>Many CSS frameworks and client-side JavaScript libraries are distributed through content delivery networks. For example, the CSS framework <a href="https://picturepan2.github.io/spectre/getting-started/installation.html#install-cdn" target="_blank" rel="noopener noreferrer">Spectre is distributed through a content delivery network`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> called <a href="https://unpkg.com/" target="_blank" rel="noopener noreferrer">unpkg`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. These can be loaded very fast to your webpages by using the <code>&lt;link&gt;</code> tag and the <code>&lt;script&gt;</code> tag as usual, especially if your user has already visited another website loading the framework/library from the same content delivery network, because then the user already have the file in the web browser&#39;s cache. The drawback with this solution is that your webpages are now dependent on the content delivery network. If the content delivery network for some reason is down, your webpages will not be displayed correct.</p><p>If you want you can host the CSS files for the CSS framework and the JavaScript files for the client-side JavaScript library in your own web application instead. This way, as long as your web application is up and running, you can be sure all webpages on it will be displayed correct. The drawback is that we lose the benefits with using a content delivery network, (shorter loading times, less requests to handle for our own web application, etc.).</p><p>Can we somehow get the best of both worlds? Yes! We can try to load the files from the content delivery network, and if that fails we fallback to loading them from our own web application. This can be achieved with client-side JavaScript.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>The client-side JavaScript library <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">jQuery`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> can be loaded from the content delivery network <a href="https://cdnjs.com/" target="_blank" rel="noopener noreferrer">cdnjs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. The <code>&lt;script&gt;</code> tag on Line 1 in the code below will first tell the web browser to load the jQuery library from the content delivery network. The JavaScript code in the next <code>&lt;script&gt;</code> tag will then check if the library was loaded successfully, and if not it will add another <code>&lt;script&gt;</code> element to the document, telling the web browser to load the library from the web application instead. After these lines, we can be sure the jQuery library has been loaded.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	window<span class="token punctuation">.</span>jQuery <span class="token operator">||</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;script src=&quot;/static/libs/jquery/3.5.1/jquery.min.js&quot;&gt;&lt;\\/script&gt;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><h2 id="subresource-integrity" tabindex="-1"><a class="header-anchor" href="#subresource-integrity" aria-hidden="true">#</a> Subresource Integrity</h2><p>Fetching and executing client-side JavaScript code from other servers can be dangerous. You probably trust the code in the client-side JavaScript library you load from a content delivery network, but if you&#39;re unlucky, you might not get the code you want! Maybe a hacker has managed to hack the content delivery network, and he has programmed the network to always send back his own evil client-side JavaScript code whenever the network receives a request for a JavaScript file. That can end really dangerous for your users.</p><p>To protect websites from this vulnerability, a security feature was added to web browsers called <em>Subresource Integrity</em> (SRI). Whenever you load a file using the <code>&lt;script&gt;</code> tag or <code>&lt;link&gt;</code> tag, you can also add the <code>integrity</code> attribute to it, and it&#39;s value should be:</p><ul><li>The name of a hash algorithm, and</li><li>The hash value of the file you want to load using that algorithm</li></ul><p>When the web browser has downloaded the file, it will compute the hash value of the file using the hash algorithm and see if it matches the hash value in the attribute, and it will only use the file if they match. If they don&#39;t match it means someone has made changes to the file you intended to download.</p><p>Most content delivery network hosting JavaScript and CSS files will also provide you with a hashing algorithm and hash value you can use, so mostly you just need to copy-paste to make use of this security feature.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>The client-side JavaScript library <a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">Moment`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> can be downloaded from the content delivery network <a href="https://cdnjs.com" target="_blank" rel="noopener noreferrer">cdnjs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> with an integrity check using the code below.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/content-delivery-networks/index.html.vue?vue&type=template&id=390d5e36

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/content-delivery-networks/index.html.vue

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

/***/ 1467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0fa30a06",
  "path": "/lectures/content-delivery-networks/",
  "title": "Content Delivery Networks",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Content Delivery Networks"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "A CDN do not run your web application",
      "slug": "a-cdn-do-not-run-your-web-application",
      "children": []
    },
    {
      "level": 2,
      "title": "CSS frameworks and client-side JavaScript libraries",
      "slug": "css-frameworks-and-client-side-javascript-libraries",
      "children": []
    },
    {
      "level": 2,
      "title": "Subresource Integrity",
      "slug": "subresource-integrity",
      "children": []
    }
  ],
  "filePathRelative": "lectures/content-delivery-networks/README.md",
  "git": {
    "updatedTime": 1610277692000
  }
}


/***/ })

};
;
//# sourceMappingURL=4696.app.js.map