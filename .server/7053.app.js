"use strict";
exports.id = 7053;
exports.ids = [7053];
exports.modules = {

/***/ 3998:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/web-cookies/index.html.vue?vue&type=template&id=75e51aa6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="web-cookies" tabindex="-1"><a class="header-anchor" href="#web-cookies" aria-hidden="true">#</a> Web Cookies</h1><p>A cookie is something a web application can use to remember information about a user. The specification <a href="https://tools.ietf.org/html/rfc6265" target="_blank" rel="noopener noreferrer">HTTP State Management Mechanism`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> explains how it works in detail, but let me give you a quick introduction to cookies before you read the specification.</p><h2 id="http-is-stateless" tabindex="-1"><a class="header-anchor" href="#http-is-stateless" aria-hidden="true">#</a> HTTP is stateless</h2><p>So, why do we have cookies? We have cookies because HTTP is a stateless protocol. What that means in practice is that when the server receives an HTTP request from a client, that HTTP request should contain all information the server needs to carry out the request. The server should not need to have any memory of previous HTTP requests it has received and carried out. If it would need to remember that, then HTTP wouldn&#39;t be a stateless protocol. So when a server has carried out an HTTP request, it can simply forget everything about that request and the client the request came from.</p><p>So, why is HTTP a stateless protocol? There are some benefits with being stateless. For one, it is much easier to implement the server, because each incoming HTTP request contains all information it needs to carry out the request; no need to look at previous requests or to remember this request in the future. Another benefit is that it is also easier to scale the server if clients communicate with it using a stateless protocol, but let&#39;s not get into the details about that here.</p><p>So, why did we have cookies again? Imagine users can create accounts and login on our website. When a user sends a login request (username and password) to the server, then the server needs to check if these credentials are correct, and if they are, the user should be logged in to that account. When the user in the future sends a new request to the server, the server needs to remember which account that user is logged in to. Since HTTP is a stateless protocol, the server can&#39;t remember such information using HTTP. For this, and many other use-cases, we use cookies.</p><h2 id="what-is-a-cookie" tabindex="-1"><a class="header-anchor" href="#what-is-a-cookie" aria-hidden="true">#</a> What is a cookie?</h2><p>A cookie is simply a key-value pair, where the key (a string) is a short description of the value (which also is a string). The key is sometimes also called the name of the cookie.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server needs to remember that the user is 17 years old, then it could create a cookie with the key <code>age</code> and the value <code>17</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server needs to remember that a user lives in Jönköping, then it could create a cookie with the key <code>city</code> and the value <code>Jönköping</code>.</p></div><p>In addition to this, a cookie can also have some other attributes, but let us get back to those later.</p><h2 id="how-do-cookies-work" tabindex="-1"><a class="header-anchor" href="#how-do-cookies-work" aria-hidden="true">#</a> How do cookies work?</h2><p>So, using cookies, a server can remember information about a client. It works something like this:</p><ol><li>A client sends an HTTP request to the server.</li><li>When the server carries out the request, it realizes that it needs to remember some information about this client.</li><li>In the HTTP response the server sends back to the client, it tells the client to create a new cookie containing a specific key and a specific value.</li><li>When the client receives the HTTP response, it should create a cookie with the key and value the server instructed it to do in the response.</li><li>When the client sends HTTP requests to the server in the future, it should pass along the cookie (the key-value pair) to the server.</li></ol><p>This is visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sequence Diagram visualizing how cookies work." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant Client\n\tparticipant Server\n\tClient->>+Server: HTTP Request\n\tNote right of Server: Need to remember\n\tServer->>-Client: HTTP Response (create cookie)\n\tNote left of Client: Creates and stores cookie\n\tClient->>+Server: HTTP Request (with cookie)\n\tNote right of Server: Reads info from cookie\n\tServer->>-Client: HTTP Response\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant Client\n\tparticipant Server\n\tClient->>+Server: HTTP Request\n\tNote right of Server: Need to remember\n\tServer->>-Client: HTTP Response (create cookie)\n\tNote left of Client: Creates and stores cookie\n\tClient->>+Server: HTTP Request (with cookie)\n\tNote right of Server: Reads info from cookie\n\tServer->>-Client: HTTP Response\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>So simply put: the server can tell the client to create cookies, the cookies are stored on the client (how is up to the client to decide, but most web browsers simply store them in files), and the client sends the cookies to the server in the HTTP requests it sends to it.</p><h3 id="creating-a-cookie" tabindex="-1"><a class="header-anchor" href="#creating-a-cookie" aria-hidden="true">#</a> Creating a cookie</h3><p>The server can tell a client to create a new cookie by adding the <code>Set-Cookie</code> header in the HTTP response. The value for this header is <code>key=value</code>. If the server wants the client to create multiple cookies, this header will be present multiple times in the HTTP response (one time for each cookie).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server wants a client to create a cookie with the key <code>age</code> and the value <code>17</code> and a cookie with the key <code>city</code> and the value <code>Jönköping</code>, it should send back an HTTP response like the one below (the status code does of course not have to be 200).</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header-name keyword">TODO:</span> CHECK THIS
<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header-name keyword">Set-Cookie:</span> age=17
<span class="token header-name keyword">Set-Cookie:</span> city=Jönköping
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h3 id="sending-a-cookie" tabindex="-1"><a class="header-anchor" href="#sending-a-cookie" aria-hidden="true">#</a> Sending a cookie</h3><p>The client can send a cookie in an HTTP request by adding the <code>Cookie</code> header to the HTTP request. The value for this header is <code>key=value</code>. If the client wants to send multiple cookies, this header will be present multiple times in the HTTP request (one time for each cookie).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header-name keyword">TODO:</span> FIX THIS
<span class="token header-name keyword">Set-Cookie:</span> age=17
<span class="token header-name keyword">Set-Cookie:</span> city=Jönköping
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="configuring-cookies" tabindex="-1"><a class="header-anchor" href="#configuring-cookies" aria-hidden="true">#</a> Configuring cookies</h2><p>When a server tells a client to create a new cookie, it can tell the client more infromation about the cookie than just the key and the value of the cookie. It can for example tell the client for how long time the cookie should be stored by the client.</p><p>...</p><h2 id="what-can-we-use-cookies-for" tabindex="-1"><a class="header-anchor" href="#what-can-we-use-cookies-for" aria-hidden="true">#</a> What can we use cookies for?</h2><p>To remember infromation about the client/user. What that information is up to you to decide, but heere are some examples.</p><p>...</p><h2 id="anything-special-to-think-about-when-using-cookies" tabindex="-1"><a class="header-anchor" href="#anything-special-to-think-about-when-using-cookies" aria-hidden="true">#</a> Anything special to think about when using cookies?</h2><h3 id="the-server-can-t-trust-cookies" tabindex="-1"><a class="header-anchor" href="#the-server-can-t-trust-cookies" aria-hidden="true">#</a> The server can&#39;t trust cookies</h3><p>Since the cookies are stored on the client, the client can easilly modify them, and therefor the server can&#39;t trust the cookies it receives. For example:</p><ul><li>If a server tells a client to create a cookie, it can&#39;t count on to receive this cookie in future requests from the client (the client can ignore creating the cookie, or the user might simply manually delete it).</li><li>When a server receives a cookie with a name it has previously told the client to create, it can&#39;t trust that the value in the cookie is the same value as it told the client to put in the cookie since the client easilly can change that value.</li><li>Nothing prevents a client from creating its own cookies, without the server telling it, so the server might reveice cookies from a client before it has told the client to create any.</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When the server receives a sucessfull login request, it can&#39;t remember that the client has logged by using a cookie like <code>isLoggedIn=true</code>, because any client (imagine hackers) can create a cookie like this one on their own without sending a successfull login request to the server. In this case, we should rather have used sessions instead.</p></div><h3 id="the-cookie-law" tabindex="-1"><a class="header-anchor" href="#the-cookie-law" aria-hidden="true">#</a> The cookie law</h3><p>Many websites make use of client-side JavaScript libraries, and these can be used by the library creator to track which website a specific user is visiting using cookies (client-side JavaScript can tell the web browser to create cookies too). European Union thought that this could risk users&#39; privacy online, and therefor introduced a EU directive which become known as the cookie law.</p><p>The directive simply states that ...</p><h3 id="gdpr" tabindex="-1"><a class="header-anchor" href="#gdpr" aria-hidden="true">#</a> GDPR</h3><p>...</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-cookies/index.html.vue?vue&type=template&id=75e51aa6

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-cookies/index.html.vue

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

/***/ 4403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3fb714cc",
  "path": "/lectures/web-cookies/",
  "title": "Web Cookies",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Web Cookies"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "HTTP is stateless",
      "slug": "http-is-stateless",
      "children": []
    },
    {
      "level": 2,
      "title": "What is a cookie?",
      "slug": "what-is-a-cookie",
      "children": []
    },
    {
      "level": 2,
      "title": "How do cookies work?",
      "slug": "how-do-cookies-work",
      "children": [
        {
          "level": 3,
          "title": "Creating a cookie",
          "slug": "creating-a-cookie",
          "children": []
        },
        {
          "level": 3,
          "title": "Sending a cookie",
          "slug": "sending-a-cookie",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Configuring cookies",
      "slug": "configuring-cookies",
      "children": []
    },
    {
      "level": 2,
      "title": "What can we use cookies for?",
      "slug": "what-can-we-use-cookies-for",
      "children": []
    },
    {
      "level": 2,
      "title": "Anything special to think about when using cookies?",
      "slug": "anything-special-to-think-about-when-using-cookies",
      "children": [
        {
          "level": 3,
          "title": "The server can't trust cookies",
          "slug": "the-server-can-t-trust-cookies",
          "children": []
        },
        {
          "level": 3,
          "title": "The cookie law",
          "slug": "the-cookie-law",
          "children": []
        },
        {
          "level": 3,
          "title": "GDPR",
          "slug": "gdpr",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/web-cookies/README.md",
  "git": {
    "updatedTime": 1637582377000
  }
}


/***/ })

};
;
//# sourceMappingURL=7053.app.js.map