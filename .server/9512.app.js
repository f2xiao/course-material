"use strict";
exports.id = 9512;
exports.ids = [9512];
exports.modules = {

/***/ 8979:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/web-sessions/index.html.vue?vue&type=template&id=8493230e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="web-sessions" tabindex="-1"><a class="header-anchor" href="#web-sessions" aria-hidden="true">#</a> Web Sessions</h1><p>A session is something a web application can use to remember information about a user, similiar to cookies, but unlike cookies, sessions are stored on the server.</p><h2 id="what-is-a-session" tabindex="-1"><a class="header-anchor" href="#what-is-a-session" aria-hidden="true">#</a> What is a session?</h2><p>A session is a collection of key-value pairs stored on the server that belongs to a specific client (each client has its own session on the server). A server can use a session to remember information about a client. A session is quite similar to a collection of cookies, but clients can&#39;t read or write the key-value pairs in the session; only the server can read and write the key-value pairs in the session. So if the server puts a value in a client&#39;s session, it can be sure that that value is valid (it can&#39;t be changed by anyone except the server itself).</p><h2 id="how-long-does-a-session-exist" tabindex="-1"><a class="header-anchor" href="#how-long-does-a-session-exist" aria-hidden="true">#</a> How long does a session exist?</h2><p>The session only exists &quot;as long as the user use the website&quot;. In many web frameworks, a session only exists for 20 minutes (can usually be configured), but each time the user visits a new page on the website, those 20 minutes are refreshed. That means if you start to use a website, you get a new session the server can use to remember information about you, but if you don&#39;t send a new HTTP request within 20 minutes, that session will be deleted, and the server will forget all the information about you it put in your session. With the next HTTP request you send to the server after 20 minutes, you will get a new session.</p><p>But if you have a session and send an HTTP request to the server within 20 minutes, then you extend the life of the session so it will live for 20 minutes from the time you sent that (the last) HTTP request.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>You might have noticed that if you login on a website, start reading a long page for ~30 minutes, and then go to another page on the website, that you are not logged in anymore? That&#39;s because the session has been deleted since you haven&#39;t been active on (sent HTTP request to) that website for a while.</p></div><h2 id="what-are-sessions-used-for" tabindex="-1"><a class="header-anchor" href="#what-are-sessions-used-for" aria-hidden="true">#</a> What are sessions used for?</h2><p>So, when you need to remember information about a client, you can use either cookies or sessions. When should you use which one? A rule of thumb is that you should use sessions if you need to remember temporary information about a client the client should not have access to. Otherwise, a cookie is more likely the better choice.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you need to remember which account a client has logged in to, then you should remember this in the client&#39;s session, because you don&#39;t want the client to be able to change this information.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you want to remember which words the user has searched for in the search form on your website, then you&#39;re better of storing that information in a cookie. The user only harms herself by modifying the cookie, and by using a cookie, we can remember that information for a much longer time.</p></div><h2 id="how-are-sessions-implemented" tabindex="-1"><a class="header-anchor" href="#how-are-sessions-implemented" aria-hidden="true">#</a> How are sessions implemented?</h2><p>Session might sound complicated, but they are most often very easy to use, because the framework/libraries we use have implemented a nice interface for us through which we can use sessions without having to bother about the implementation details.</p><p>How the server store the session on the server is up to the server to decide. It could store the sessions in temporary files, or it could store the sessions in a database. Web programmers usually don&#39;t need to worry about this, because the framework/libraries we use takes care of this for us.</p><p>The session for a client can either be created when the server receives an HTTP request from a client that doesn&#39;t yet have a session, or when the server for the first time needs to put a value in the session for a client that doesn&#39;t yet have a session. How you want it to works can usually be configured using the framework/library you use to work with the sessions.</p><p>After how long time an untouched session should be destroyed can usually be configured using the framework/library as well.</p><h2 id="anything-special-to-think-about-when-using-sessions" tabindex="-1"><a class="header-anchor" href="#anything-special-to-think-about-when-using-sessions" aria-hidden="true">#</a> Anything special to think about when using sessions?</h2><h3 id="sdfsdfsd" tabindex="-1"><a class="header-anchor" href="#sdfsdfsd" aria-hidden="true">#</a> sdfsdfsd</h3><p>Since sessions usually use cookies to remember which session that belongs to which client, you need to consider the cookie law and the GDPR.</p><p>...</p><h3 id="securing-the-session-id" tabindex="-1"><a class="header-anchor" href="#securing-the-session-id" aria-hidden="true">#</a> Securing the session id</h3><p>The session id is really important. Use HTTPS.</p><h3 id="clients-can-create-new-sessions" tabindex="-1"><a class="header-anchor" href="#clients-can-create-new-sessions" aria-hidden="true">#</a> Clients can create new sessions</h3><p>Clients can easilly create new sessions. By sending an HTTP request to the server that doesn&#39;t contain a session id, the server will create a new session for the client. Because of this, you often can&#39;t use the session to keep track of things you want to forbid the client to do.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you use a counter to keep track of how many times a user has failed to login to an account, and prevent the client from login in to an account when the counter reaches a specific number (e.g. 5 failed login attempts), then you can&#39;t store the counter in the session, because the user can easilly send a new HTTP request to the server without a session id, and then get a new session where the counter is 0 again.</p></div><h2 id="using-sessions-in-practise" tabindex="-1"><a class="header-anchor" href="#using-sessions-in-practise" aria-hidden="true">#</a> Using sessions in practise</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Express" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>Express does not have built-in support for sessions, but it can easily be added through a middleware function from the <a href="https://github.com/expressjs/session" target="_blank" rel="noopener noreferrer"${
                _scopeId
              }>express-session`)
              _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
              _push(`</a> package.</p><ol${
                _scopeId
              }><li${
                _scopeId
              }>Install the <code${
                _scopeId
              }>express-session</code> package by running the command <code${
                _scopeId
              }>npm install express-session</code> in your project folder.</li><li${
                _scopeId
              }>Add middleware function with session support from the <code${
                _scopeId
              }>express-session</code> package in your code, e.g.:</li></ol><div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token keyword"${
                _scopeId
              }>const</span> express <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;express&#39;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
<span class="token keyword"${
                _scopeId
              }>const</span> expressSession <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;express-session&#39;</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token keyword"${
                _scopeId
              }>const</span> app <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>express</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }>// Add the middleware function from express-session.</span>
app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>use</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token function"${
                _scopeId
              }>expressSession</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
	<span class="token comment"${
                _scopeId
              }>// Let&#39;s cover these options later...</span>
	secret<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;some characters no one can guess...&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
	resave<span class="token operator"${
                _scopeId
              }>:</span> <span class="token boolean"${
                _scopeId
              }>false</span><span class="token punctuation"${
                _scopeId
              }>,</span>
	saveUninitialized<span class="token operator"${
                _scopeId
              }>:</span> <span class="token boolean"${
                _scopeId
              }>true</span><span class="token punctuation"${
                _scopeId
              }>,</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }>// Use app as before...</span>
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
              }></div></div><p${
                _scopeId
              }>When we call <code${
                _scopeId
              }>expressSession</code> we get back a middleware function that we add to our express application object. This middleware will add the <code${
                _scopeId
              }>session</code> property to the <code${
                _scopeId
              }>request</code> objects we have. If we want to store a value in the client&#39;s session, then we simply add that value to this object, e.g. <code${
                _scopeId
              }>request.session.theKey = &quot;The value&quot;</code>. If we want to read out a value we have previosuly stored in the session, then we simply read it out from this object, e.g. <code${
                _scopeId
              }>const theValue = request.session.theKey</code>.</p><div class="custom-container tip"${
                _scopeId
              }><p class="custom-container-title"${
                _scopeId
              }>Example</p><p${
                _scopeId
              }>Below is an example of code that in the session stores number of times the user has visisted a specific page.</p><div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }>app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;/count-visits&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>request<span class="token punctuation"${
                _scopeId
              }>,</span> response</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
	
	<span class="token comment"${
                _scopeId
              }>// If we haven&#39;t put the counter in the session before,</span>
	<span class="token comment"${
                _scopeId
              }>// that means the user is visiting this page for the</span>
	<span class="token comment"${
                _scopeId
              }>// first time, and we need to create the counter.</span>
	<span class="token keyword"${
                _scopeId
              }>if</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token operator"${
                _scopeId
              }>!</span>request<span class="token punctuation"${
                _scopeId
              }>.</span>session<span class="token punctuation"${
                _scopeId
              }>.</span>counter<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
		request<span class="token punctuation"${
                _scopeId
              }>.</span>session<span class="token punctuation"${
                _scopeId
              }>.</span>counter <span class="token operator"${
                _scopeId
              }>=</span> <span class="token number"${
                _scopeId
              }>0</span>
	<span class="token punctuation"${
                _scopeId
              }>}</span>
	
	<span class="token comment"${
                _scopeId
              }>// Increment the counter by one.</span>
	request<span class="token punctuation"${
                _scopeId
              }>.</span>session<span class="token punctuation"${
                _scopeId
              }>.</span>counter <span class="token operator"${
                _scopeId
              }>+=</span> <span class="token number"${
                _scopeId
              }>1</span>
	
	response<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>send</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;You have visited this page &quot;</span><span class="token operator"${
                _scopeId
              }>+</span>request<span class="token punctuation"${
                _scopeId
              }>.</span>session<span class="token punctuation"${
                _scopeId
              }>.</span>counter<span class="token operator"${
                _scopeId
              }>+</span><span class="token string"${
                _scopeId
              }>&quot; times.&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
	
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
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
              }></div></div><p${
                _scopeId
              }>The first time a user sends a GET request to <code${
                _scopeId
              }>/count-visits</code>, she will get back the text <em${
                _scopeId
              }>You have visited this page 1 times.</em>. The second time she sends the same request, she will get back the text <em${
                _scopeId
              }>You have visited this page 2 times.</em>, and so on. Notice that each user will have their own counter (because each user will get its own session).</p></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("Express does not have built-in support for sessions, but it can easily be added through a middleware function from the "),
                  (0,external_vue_.createVNode)("a", {
                    href: "https://github.com/expressjs/session",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    (0,external_vue_.createTextVNode)("express-session"),
                    (0,external_vue_.createVNode)(_component_OutboundLink)
                  ]),
                  (0,external_vue_.createTextVNode)(" package.")
                ]),
                (0,external_vue_.createVNode)("ol", null, [
                  (0,external_vue_.createVNode)("li", null, [
                    (0,external_vue_.createTextVNode)("Install the "),
                    (0,external_vue_.createVNode)("code", null, "express-session"),
                    (0,external_vue_.createTextVNode)(" package by running the command "),
                    (0,external_vue_.createVNode)("code", null, "npm install express-session"),
                    (0,external_vue_.createTextVNode)(" in your project folder.")
                  ]),
                  (0,external_vue_.createVNode)("li", null, [
                    (0,external_vue_.createTextVNode)("Add middleware function with session support from the "),
                    (0,external_vue_.createVNode)("code", null, "express-session"),
                    (0,external_vue_.createTextVNode)(" package in your code, e.g.:")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" express "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'express'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" expressSession "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'express-session'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" app "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add the middleware function from express-session."),
                      (0,external_vue_.createTextVNode)("\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "use"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "expressSession"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Let's cover these options later..."),
                      (0,external_vue_.createTextVNode)("\n\tsecret"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'some characters no one can guess...'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n\tresave"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n\tsaveUninitialized"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Use app as before..."),
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
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("When we call "),
                  (0,external_vue_.createVNode)("code", null, "expressSession"),
                  (0,external_vue_.createTextVNode)(" we get back a middleware function that we add to our express application object. This middleware will add the "),
                  (0,external_vue_.createVNode)("code", null, "session"),
                  (0,external_vue_.createTextVNode)(" property to the "),
                  (0,external_vue_.createVNode)("code", null, "request"),
                  (0,external_vue_.createTextVNode)(" objects we have. If we want to store a value in the client's session, then we simply add that value to this object, e.g. "),
                  (0,external_vue_.createVNode)("code", null, "request.session.theKey = \"The value\""),
                  (0,external_vue_.createTextVNode)(". If we want to read out a value we have previosuly stored in the session, then we simply read it out from this object, e.g. "),
                  (0,external_vue_.createVNode)("code", null, "const theValue = request.session.theKey"),
                  (0,external_vue_.createTextVNode)(".")
                ]),
                (0,external_vue_.createVNode)("div", { class: "custom-container tip" }, [
                  (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Example"),
                  (0,external_vue_.createVNode)("p", null, "Below is an example of code that in the session stores number of times the user has visisted a specific page."),
                  (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                    (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                      (0,external_vue_.createVNode)("code", null, [
                        (0,external_vue_.createTextVNode)("app"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                        (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/count-visits\""),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                        (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                          (0,external_vue_.createTextVNode)("request"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                          (0,external_vue_.createTextVNode)(" response")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n\t\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If we haven't put the counter in the session before,"),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token comment" }, "// that means the user is visiting this page for the"),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token comment" }, "// first time, and we need to create the counter."),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "!"),
                        (0,external_vue_.createTextVNode)("request"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("session"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("counter"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n\t\trequest"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("session"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("counter "),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                        (0,external_vue_.createTextVNode)("\n\t\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Increment the counter by one."),
                        (0,external_vue_.createTextVNode)("\n\trequest"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("session"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("counter "),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                        (0,external_vue_.createTextVNode)("\n\t\n\tresponse"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createVNode)("span", { class: "token function" }, "send"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                        (0,external_vue_.createVNode)("span", { class: "token string" }, "\"You have visited this page \""),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                        (0,external_vue_.createTextVNode)("request"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("session"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createTextVNode)("counter"),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                        (0,external_vue_.createVNode)("span", { class: "token string" }, "\" times.\""),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                        (0,external_vue_.createTextVNode)("\n\t\n"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
                  ]),
                  (0,external_vue_.createVNode)("p", null, [
                    (0,external_vue_.createTextVNode)("The first time a user sends a GET request to "),
                    (0,external_vue_.createVNode)("code", null, "/count-visits"),
                    (0,external_vue_.createTextVNode)(", she will get back the text "),
                    (0,external_vue_.createVNode)("em", null, "You have visited this page 1 times."),
                    (0,external_vue_.createTextVNode)(". The second time she sends the same request, she will get back the text "),
                    (0,external_vue_.createVNode)("em", null, "You have visited this page 2 times."),
                    (0,external_vue_.createTextVNode)(", and so on. Notice that each user will have their own counter (because each user will get its own session).")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`<p${
          _scopeId
        }>When you create the session middleware function, you can configure it by passing it an object with options. There are three mandatory options.</p><p${
          _scopeId
        }>The <code${
          _scopeId
        }>secret</code> option is a value used to generate the session ids. It doesn&#39;t matter what you use here as long as no one can figure it out. If a hacker knows which secret you are using, she might be able to figure out which session ids your users will get, and can then easilly hijack (take over) their sessions (send HTTP request with the same session id, so the server think the requests are sent from the user the session belongs to), which is a major security vulnerability.</p><p${
          _scopeId
        }>The <code${
          _scopeId
        }>resave</code> option...</p><p${
          _scopeId
        }>The <code${
          _scopeId
        }>saveUninitialized</code> option...</p><p${
          _scopeId
        }>:::</p>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "PHP" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>PHP has built-in support for sessions, but to use them you first need to &quot;activate them&quot; by calling the function <code${
                _scopeId
              }>session_start()</code>. You need to call this function each time you receive an HTTP request, and it will create a new session for the client if the client doesn&#39;t have one, or re-use the existing one the client already have.</p><p${
                _scopeId
              }>When you have called <code${
                _scopeId
              }>session_start()</code> you can use the special variable <code${
                _scopeId
              }>\$_SESSION</code> to write values to the session and to retrieve values from the session. For example, to add a new value to the session you would use <code${
                _scopeId
              }>\$_SESSION[&quot;theKey&quot;] = &quot;The value&quot;;</code>, and to obtain a value from the session you would use <code${
                _scopeId
              }>\$theValue = \$_SESSSION[&quot;theKey&quot;];</code>.</p><div class="custom-container tip"${
                _scopeId
              }><p class="custom-container-title"${
                _scopeId
              }>Example</p><p${
                _scopeId
              }>Here is an example of a PHP page that counts how many times the user have fetched it.</p><div class="language-php ext-php line-numbers-mode"${
                _scopeId
              }><pre class="language-php"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token php language-php"${
                _scopeId
              }><span class="token delimiter important"${
                _scopeId
              }>&lt;?php</span>

<span class="token function"${
                _scopeId
              }>session_start</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token comment"${
                _scopeId
              }>// If no counter exists in the session, create it.</span>
<span class="token keyword"${
                _scopeId
              }>if</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token operator"${
                _scopeId
              }>!</span><span class="token keyword"${
                _scopeId
              }>isset</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token variable"${
                _scopeId
              }>\$_SESSION</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token string single-quoted-string"${
                _scopeId
              }>&#39;counter&#39;</span><span class="token punctuation"${
                _scopeId
              }>]</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
	<span class="token variable"${
                _scopeId
              }>\$_SESSION</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token string single-quoted-string"${
                _scopeId
              }>&#39;counter&#39;</span><span class="token punctuation"${
                _scopeId
              }>]</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token number"${
                _scopeId
              }>0</span><span class="token punctuation"${
                _scopeId
              }>;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span>

<span class="token comment"${
                _scopeId
              }>// Increment the counter in the session.</span>
<span class="token variable"${
                _scopeId
              }>\$_SESSION</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token string single-quoted-string"${
                _scopeId
              }>&#39;counter&#39;</span><span class="token punctuation"${
                _scopeId
              }>]</span> <span class="token operator"${
                _scopeId
              }>+=</span> <span class="token number"${
                _scopeId
              }>1</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token keyword"${
                _scopeId
              }>echo</span> <span class="token string double-quoted-string"${
                _scopeId
              }>&quot;You have visisted this page &quot;</span><span class="token operator"${
                _scopeId
              }>.</span><span class="token variable"${
                _scopeId
              }>\$_SESSION</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token string single-quoted-string"${
                _scopeId
              }>&#39;counter&#39;</span><span class="token punctuation"${
                _scopeId
              }>]</span><span class="token operator"${
                _scopeId
              }>.</span><span class="token string double-quoted-string"${
                _scopeId
              }>&quot; times.&quot;</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token delimiter important"${
                _scopeId
              }>?&gt;</span></span>
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
              }></div></div><p${
                _scopeId
              }>The first time a user visits the page, she will get back the text <em${
                _scopeId
              }>You have visited this page 1 times.</em>. The second time she sends the same request, she will get back the text <em${
                _scopeId
              }>You have visited this page 2 times.</em>, and so on. Notice that each user will have their own counter (because each user will get its own session).</p></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("PHP has built-in support for sessions, but to use them you first need to \"activate them\" by calling the function "),
                  (0,external_vue_.createVNode)("code", null, "session_start()"),
                  (0,external_vue_.createTextVNode)(". You need to call this function each time you receive an HTTP request, and it will create a new session for the client if the client doesn't have one, or re-use the existing one the client already have.")
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("When you have called "),
                  (0,external_vue_.createVNode)("code", null, "session_start()"),
                  (0,external_vue_.createTextVNode)(" you can use the special variable "),
                  (0,external_vue_.createVNode)("code", null, "$_SESSION"),
                  (0,external_vue_.createTextVNode)(" to write values to the session and to retrieve values from the session. For example, to add a new value to the session you would use "),
                  (0,external_vue_.createVNode)("code", null, "$_SESSION[\"theKey\"] = \"The value\";"),
                  (0,external_vue_.createTextVNode)(", and to obtain a value from the session you would use "),
                  (0,external_vue_.createVNode)("code", null, "$theValue = $_SESSSION[\"theKey\"];"),
                  (0,external_vue_.createTextVNode)(".")
                ]),
                (0,external_vue_.createVNode)("div", { class: "custom-container tip" }, [
                  (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Example"),
                  (0,external_vue_.createVNode)("p", null, "Here is an example of a PHP page that counts how many times the user have fetched it."),
                  (0,external_vue_.createVNode)("div", { class: "language-php ext-php line-numbers-mode" }, [
                    (0,external_vue_.createVNode)("pre", { class: "language-php" }, [
                      (0,external_vue_.createVNode)("code", null, [
                        (0,external_vue_.createVNode)("span", { class: "token php language-php" }, [
                          (0,external_vue_.createVNode)("span", { class: "token delimiter important" }, "<?php"),
                          (0,external_vue_.createTextVNode)("\n\n"),
                          (0,external_vue_.createVNode)("span", { class: "token function" }, "session_start"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createTextVNode)("\n\n"),
                          (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If no counter exists in the session, create it."),
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, "!"),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "isset"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                          (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                          (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                          (0,external_vue_.createTextVNode)("\n\t"),
                          (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                          (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                          (0,external_vue_.createTextVNode)("\n\n"),
                          (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Increment the counter in the session."),
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                          (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createTextVNode)("\n\n"),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "echo"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"You have visisted this page \""),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, "."),
                          (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                          (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, "."),
                          (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\" times.\""),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createTextVNode)("\n\n"),
                          (0,external_vue_.createVNode)("span", { class: "token delimiter important" }, "?>")
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
                      (0,external_vue_.createVNode)("br")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("p", null, [
                    (0,external_vue_.createTextVNode)("The first time a user visits the page, she will get back the text "),
                    (0,external_vue_.createVNode)("em", null, "You have visited this page 1 times."),
                    (0,external_vue_.createTextVNode)(". The second time she sends the same request, she will get back the text "),
                    (0,external_vue_.createVNode)("em", null, "You have visited this page 2 times."),
                    (0,external_vue_.createTextVNode)(", and so on. Notice that each user will have their own counter (because each user will get its own session).")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push(`<p${_scopeId}>:::</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Express" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("Express does not have built-in support for sessions, but it can easily be added through a middleware function from the "),
                (0,external_vue_.createVNode)("a", {
                  href: "https://github.com/expressjs/session",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (0,external_vue_.createTextVNode)("express-session"),
                  (0,external_vue_.createVNode)(_component_OutboundLink)
                ]),
                (0,external_vue_.createTextVNode)(" package.")
              ]),
              (0,external_vue_.createVNode)("ol", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Install the "),
                  (0,external_vue_.createVNode)("code", null, "express-session"),
                  (0,external_vue_.createTextVNode)(" package by running the command "),
                  (0,external_vue_.createVNode)("code", null, "npm install express-session"),
                  (0,external_vue_.createTextVNode)(" in your project folder.")
                ]),
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Add middleware function with session support from the "),
                  (0,external_vue_.createVNode)("code", null, "express-session"),
                  (0,external_vue_.createTextVNode)(" package in your code, e.g.:")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" express "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'express'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" expressSession "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'express-session'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" app "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add the middleware function from express-session."),
                    (0,external_vue_.createTextVNode)("\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "use"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "expressSession"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n\t"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Let's cover these options later..."),
                    (0,external_vue_.createTextVNode)("\n\tsecret"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'some characters no one can guess...'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n\tresave"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n\tsaveUninitialized"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Use app as before..."),
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
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("When we call "),
                (0,external_vue_.createVNode)("code", null, "expressSession"),
                (0,external_vue_.createTextVNode)(" we get back a middleware function that we add to our express application object. This middleware will add the "),
                (0,external_vue_.createVNode)("code", null, "session"),
                (0,external_vue_.createTextVNode)(" property to the "),
                (0,external_vue_.createVNode)("code", null, "request"),
                (0,external_vue_.createTextVNode)(" objects we have. If we want to store a value in the client's session, then we simply add that value to this object, e.g. "),
                (0,external_vue_.createVNode)("code", null, "request.session.theKey = \"The value\""),
                (0,external_vue_.createTextVNode)(". If we want to read out a value we have previosuly stored in the session, then we simply read it out from this object, e.g. "),
                (0,external_vue_.createVNode)("code", null, "const theValue = request.session.theKey"),
                (0,external_vue_.createTextVNode)(".")
              ]),
              (0,external_vue_.createVNode)("div", { class: "custom-container tip" }, [
                (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Example"),
                (0,external_vue_.createVNode)("p", null, "Below is an example of code that in the session stores number of times the user has visisted a specific page."),
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/count-visits\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createTextVNode)("request"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(" response")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If we haven't put the counter in the session before,"),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// that means the user is visiting this page for the"),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// first time, and we need to create the counter."),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "!"),
                      (0,external_vue_.createTextVNode)("request"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("session"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("counter"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n\t\trequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("session"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("counter "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                      (0,external_vue_.createTextVNode)("\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\t\n\t"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Increment the counter by one."),
                      (0,external_vue_.createTextVNode)("\n\trequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("session"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("counter "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                      (0,external_vue_.createTextVNode)("\n\t\n\tresponse"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "send"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"You have visited this page \""),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createTextVNode)("request"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("session"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("counter"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\" times.\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\t\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("The first time a user sends a GET request to "),
                  (0,external_vue_.createVNode)("code", null, "/count-visits"),
                  (0,external_vue_.createTextVNode)(", she will get back the text "),
                  (0,external_vue_.createVNode)("em", null, "You have visited this page 1 times."),
                  (0,external_vue_.createTextVNode)(". The second time she sends the same request, she will get back the text "),
                  (0,external_vue_.createVNode)("em", null, "You have visited this page 2 times."),
                  (0,external_vue_.createTextVNode)(", and so on. Notice that each user will have their own counter (because each user will get its own session).")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)("p", null, "When you create the session middleware function, you can configure it by passing it an object with options. There are three mandatory options."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "secret"),
            (0,external_vue_.createTextVNode)(" option is a value used to generate the session ids. It doesn't matter what you use here as long as no one can figure it out. If a hacker knows which secret you are using, she might be able to figure out which session ids your users will get, and can then easilly hijack (take over) their sessions (send HTTP request with the same session id, so the server think the requests are sent from the user the session belongs to), which is a major security vulnerability.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "resave"),
            (0,external_vue_.createTextVNode)(" option...")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "saveUninitialized"),
            (0,external_vue_.createTextVNode)(" option...")
          ]),
          (0,external_vue_.createVNode)("p", null, ":::"),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "PHP" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("PHP has built-in support for sessions, but to use them you first need to \"activate them\" by calling the function "),
                (0,external_vue_.createVNode)("code", null, "session_start()"),
                (0,external_vue_.createTextVNode)(". You need to call this function each time you receive an HTTP request, and it will create a new session for the client if the client doesn't have one, or re-use the existing one the client already have.")
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("When you have called "),
                (0,external_vue_.createVNode)("code", null, "session_start()"),
                (0,external_vue_.createTextVNode)(" you can use the special variable "),
                (0,external_vue_.createVNode)("code", null, "$_SESSION"),
                (0,external_vue_.createTextVNode)(" to write values to the session and to retrieve values from the session. For example, to add a new value to the session you would use "),
                (0,external_vue_.createVNode)("code", null, "$_SESSION[\"theKey\"] = \"The value\";"),
                (0,external_vue_.createTextVNode)(", and to obtain a value from the session you would use "),
                (0,external_vue_.createVNode)("code", null, "$theValue = $_SESSSION[\"theKey\"];"),
                (0,external_vue_.createTextVNode)(".")
              ]),
              (0,external_vue_.createVNode)("div", { class: "custom-container tip" }, [
                (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Example"),
                (0,external_vue_.createVNode)("p", null, "Here is an example of a PHP page that counts how many times the user have fetched it."),
                (0,external_vue_.createVNode)("div", { class: "language-php ext-php line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-php" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token php language-php" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter important" }, "<?php"),
                        (0,external_vue_.createTextVNode)("\n\n"),
                        (0,external_vue_.createVNode)("span", { class: "token function" }, "session_start"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                        (0,external_vue_.createTextVNode)("\n\n"),
                        (0,external_vue_.createVNode)("span", { class: "token comment" }, "// If no counter exists in the session, create it."),
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "!"),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "isset"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                        (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n\t"),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                        (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                        (0,external_vue_.createTextVNode)("\n\n"),
                        (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Increment the counter in the session."),
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                        (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "+="),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                        (0,external_vue_.createTextVNode)("\n\n"),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "echo"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"You have visisted this page \""),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "."),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_SESSION"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                        (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'counter'"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, "."),
                        (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\" times.\""),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                        (0,external_vue_.createTextVNode)("\n\n"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter important" }, "?>")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("The first time a user visits the page, she will get back the text "),
                  (0,external_vue_.createVNode)("em", null, "You have visited this page 1 times."),
                  (0,external_vue_.createTextVNode)(". The second time she sends the same request, she will get back the text "),
                  (0,external_vue_.createVNode)("em", null, "You have visited this page 2 times."),
                  (0,external_vue_.createTextVNode)(", and so on. Notice that each user will have their own counter (because each user will get its own session).")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)("p", null, ":::")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="a-note-on-stateless" tabindex="-1"><a class="header-anchor" href="#a-note-on-stateless" aria-hidden="true">#</a> A Note on Stateless</h2><p>Depending on where you store your sessions, your web application either become statefull or remain stateless, and this affects how hard it will be to scale your web application in the future. We will not get into the details of scaling here, but be aware of that if the sessions are stored on the same server that is running your web application (for example in files, which is the case when using the default configuration of PHP), your application becomes statefull and a bit harder to scale. If you instead store the sessions in a database running on a separate sever, your web application remain stateless and is a bit easier to scale.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-sessions/index.html.vue?vue&type=template&id=8493230e

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-sessions/index.html.vue

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

/***/ 4554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3b29a058",
  "path": "/lectures/web-sessions/",
  "title": "Web Sessions",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Web Sessions"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What is a session?",
      "slug": "what-is-a-session",
      "children": []
    },
    {
      "level": 2,
      "title": "How long does a session exist?",
      "slug": "how-long-does-a-session-exist",
      "children": []
    },
    {
      "level": 2,
      "title": "What are sessions used for?",
      "slug": "what-are-sessions-used-for",
      "children": []
    },
    {
      "level": 2,
      "title": "How are sessions implemented?",
      "slug": "how-are-sessions-implemented",
      "children": []
    },
    {
      "level": 2,
      "title": "Anything special to think about when using sessions?",
      "slug": "anything-special-to-think-about-when-using-sessions",
      "children": [
        {
          "level": 3,
          "title": "sdfsdfsd",
          "slug": "sdfsdfsd",
          "children": []
        },
        {
          "level": 3,
          "title": "Securing the session id",
          "slug": "securing-the-session-id",
          "children": []
        },
        {
          "level": 3,
          "title": "Clients can create new sessions",
          "slug": "clients-can-create-new-sessions",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Using sessions in practise",
      "slug": "using-sessions-in-practise",
      "children": []
    },
    {
      "level": 2,
      "title": "A Note on Stateless",
      "slug": "a-note-on-stateless",
      "children": []
    }
  ],
  "filePathRelative": "lectures/web-sessions/README.md",
  "git": {
    "updatedTime": 1630251960000
  }
}


/***/ })

};
;
//# sourceMappingURL=9512.app.js.map