"use strict";
exports.id = 3889;
exports.ids = [3889];
exports.modules = {

/***/ 1689:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/rest-api-authorization/index.html.vue?vue&type=template&id=e4503afe



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="rest-api-authorization" tabindex="-1"><a class="header-anchor" href="#rest-api-authorization" aria-hidden="true">#</a> REST API Authorization</h1><p>Let&#39;s take a look at how users can login to accounts in our REST API.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/0Ech5jpP1Dc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="rest-api-authorization.pdf">rest-api-authorization.pdf</a></li><li><a href="rest-api-authorization.pptx">rest-api-authorization.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://en.wikipedia.org/wiki/List_of_OAuth_providers" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s List of OAuth providers`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Notice that you find many of the big guys (Google, Microsoft, etc.) in the list.</li></ul></li><li><a href="https://tools.ietf.org/html/rfc6749" target="_blank" rel="noopener noreferrer">OAuth 2.0 Framework - RFC 6749`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>You need to read this specification to learn the details of the framework, which you have to know when adding support for OAuth 2.0 in your own app, or when using another app supporting OAuth 2.0.</li></ul></li><li><a href="https://oauth.net/2/" target="_blank" rel="noopener noreferrer">https://oauth.net/2/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>If you think the specification is too hard to read to get the big picture, the resources on this website might be easier to understand.</li></ul></li></ul><h1 id="oauth-2-0" tabindex="-1"><a class="header-anchor" href="#oauth-2-0" aria-hidden="true">#</a> OAuth 2.0</h1><p>OAuth 2.0 is an authorization framework describing how you can give other applications access to your own users&#39; data (resources) stored in your application. Usually, big companies like Google are the ones who implement the framework, and we others instead create our own third-party applications in which we can access our users&#39; Google resources through the framework. When your own solution consists of your own client application and your own server application (such as an Android application and a web application exposing a REST API), you can use this framework in your server application for authorization too.</p><p>The main idea is that the client application obtains an Access Token from the server application, which gives the client application permission to access a user&#39;s resources that is stored on the server application (typically through a REST API). OAuth 2.0 specifies different ways this can be done.</p><h2 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h2><p>To describe how it works, OAuth 2.0 first defines 4 different roles. You can think of these as 4 different actors, but they are called roles, probably because one and the same actor can have multiple roles at the same time.</p><h3 id="resource-owner" tabindex="-1"><a class="header-anchor" href="#resource-owner" aria-hidden="true">#</a> Resource Owner</h3><p>This is simply the user that is using the Client application and that have an account with associated resources on the server application.</p><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h3><p>This is the application the user is using (for example an Android application), and this is the application that wants to access the user&#39;s resources on the server.</p><h3 id="resource-server" tabindex="-1"><a class="header-anchor" href="#resource-server" aria-hidden="true">#</a> Resource Server</h3><p>This is the server that stores and guards access to all the resources on the server. When a Client wants to access the user&#39;s resources, the Client will send HTTP requests to this server and pass along an Access Token as a proof of that the user has granted the Client access to her resources.</p><h3 id="authorization-server" tabindex="-1"><a class="header-anchor" href="#authorization-server" aria-hidden="true">#</a> Authorization Server</h3><p>This is the server the Resource Owner use to give a Client permission to access her resources on the Resource Server. This server typically generates Access Tokens the Client can use to access the user&#39;s resources on the Resource Server.</p><div class="custom-container tip"><p class="custom-container-title">Two servers?!</p><p>The roles Resource Server and Authorization Server can be hold by one and the same server application, typically a web application.</p></div><h2 id="protocol-flow" tabindex="-1"><a class="header-anchor" href="#protocol-flow" aria-hidden="true">#</a> Protocol flow</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below gives an overview of how the Client can obtain and use an Access Token. All communication with the Authorization Server and the Resource Server are done using HTTP (HTTPS). When the Resource Owner needs to communicate with the Authorization Server, she will (most often, but not necessarily) do so using her web browser. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Overview of the protocol used in OAuth 2.0." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Grant.\n    deactivate as\n    ro ->> c: Here is the Authorization Grant.\n    activate c\n    deactivate ro\n    c ->> as: Here is the Authorization Grant.\n    activate as\n    as ->> c: Here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Grant.\n    deactivate as\n    ro ->> c: Here is the Authorization Grant.\n    activate c\n    deactivate ro\n    c ->> as: Here is the Authorization Grant.\n    activate as\n    as ->> c: Here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>An Authorization Grant is simply something a Client can show to the Authorization Server to prove that the Resource Owner has granted the Client permission to access the Resource Owner&#39;s resources.</p><p>In some cases, the Authorization Server sends back the Access Token directly to the user (which the user then directly gives to the Client), instead of using the detour with an Authorization Grant.</p><h2 id="client-registration" tabindex="-1"><a class="header-anchor" href="#client-registration" aria-hidden="true">#</a> Client Registration</h2><p>In most cases, the Client needs to pre-register itself and be approved as a Client at the Authorization Server before it can request Access Tokens from it. This way, arbitrary (potentially evil) applications can&#39;t request Access Tokens from it.</p><p>When the Client registers itself it will receive a <code>client_id</code> and <code>client_secret</code> it can use to authenticate itself to the Authorization Server. <code>client_secret</code> should of course be kept secret. Additional information about the Client can also be provided in the registration process, such as which URIs that can be used to identify the Client application.</p><h2 id="obtaining-access-token" tabindex="-1"><a class="header-anchor" href="#obtaining-access-token" aria-hidden="true">#</a> Obtaining Access Token</h2><p>OAuth 2.0 describes 4 different flows clients can use to obtain an Access Token. With time, some of these flows have been found to contain security vulnerabilities and have been deprecated, and new and more secure flows have been created. <a href="https://oauth.net/2.1/" target="_blank" rel="noopener noreferrer">OAuth 2.1`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> will contain the most up-to-date information about which flows that are best to use, but at the moment that&#39;s just a draft, and should not be seen as a reliable source of truth.</p><h3 id="resource-owner-password-credentials-grant" tabindex="-1"><a class="header-anchor" href="#resource-owner-password-credentials-grant" aria-hidden="true">#</a> Resource Owner Password Credentials Grant</h3><p>This flow is the most straight forward and easiest flow to understand. It can be used when you are the owner of the both the server that implements OAuth 2.0 and the Client, i.e. when the Client is a first-party application, and not a third-party application. For example, the YouTube app for smartphones can use this to flow to let users login with their Google accounts, since Google owns and develop the YouTube app.</p><p>This flow does not require the Client to first register itself at the Authorization Server, so this flow does not make use of <code>client_id</code> and <code>client_secret</code>. Also, no Authorization Grant is used, so the user directly obtains an Access Token from the Authorization Server.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The flow of the Resource Owner Password Credentials Grant." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> c: Here is my username and password.\n    deactivate ro\n    activate c\n    c ->> as: Here is a user's username and password.\n    activate as\n    as ->> c: Here is an Access Token for that user's resources.\n    deactivate as\n    c ->> rs: Here is the Access Token, now give me the resources.\n    activate rs\n    rs ->> c: Access Token is valid, here are the resources.\n    deactivate rs\n    deactivate c\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> c: Here is my username and password.\n    deactivate ro\n    activate c\n    c ->> as: Here is a user's username and password.\n    activate as\n    as ->> c: Here is an Access Token for that user's resources.\n    deactivate as\n    c ->> rs: Here is the Access Token, now give me the resources.\n    activate rs\n    rs ->> c: Access Token is valid, here are the resources.\n    deactivate rs\n    deactivate c\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The obvious drawback with this flow is that the user reveals her credentials (username and password) to the Client, which the whole point of this framework is to avoid, so this is really not a good flow to use. But as long as the Client comes from the same company that developed the server application, there&#39;s should be no danger in doing that, since the Client company already know the users&#39; credentials.</p><div class="custom-container warning"><p class="custom-container-title">This flow has been deprecated</p><p>This flow has been deprecated. The reason is that this flow reveals the user&#39;s username and password to the Client, which the whole idea with this authorization framework is to prevent, and you can avoid that using other flows. Rather see this flow as a &quot;shortcut flow&quot; that existed in the beginning, and not a &quot;proper flow&quot;.</p><p>If you from scratch build your own client and server application that you want to secure with OAuth 2.0, using this flow can be an acceptable option, since it&#39;s so easy to implement support for. But Google and other big OAuth 2.0 providers should definitely not use it. The risk is that an evil Client app (and not only Google&#39;s own apps) asks for the user&#39;s Google username and Google password, and if the user enters them, the evil Client app has come over the user&#39;s credentials, which is bad. It&#39;s better if the user always enters her credentials directly to the Authorization Server, and never exposes them to the Client.</p></div><h3 id="authorization-code-grant" tabindex="-1"><a class="header-anchor" href="#authorization-code-grant" aria-hidden="true">#</a> Authorization Code Grant</h3><p>This flow is the de-facto standard flow to use in OAuth 2.0. It is particularly used when the Client is a web application. The Authorization Grant used is in this flow is an <em>Authorization Code</em>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The flow of the Authorization Code Grant." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client with client_id=X wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Code.\n    deactivate as\n    ro ->> c: Here is the Authorization Code.\n    activate c\n    deactivate ro\n    c ->> as: Here is my client_id, client_secret and an Authorization Code.\n    activate as\n    as ->> c: Everything is fine, here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client with client_id=X wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Code.\n    deactivate as\n    ro ->> c: Here is the Authorization Code.\n    activate c\n    deactivate ro\n    c ->> as: Here is my client_id, client_secret and an Authorization Code.\n    activate as\n    as ->> c: Everything is fine, here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container tip"><p class="custom-container-title">Why so complicated?!</p><p>Why does the Authorization Server first send back an Authorization Code, which the Client then needs to trade for an Access Token, instead of sending back the Access Token directly?</p><p>This is done to expose the Access Token as little as possible (i.e. only to the Client). Since the user is (most often) using her web browser to communicate with the Authorization Server, if the Authorization Server would send back the Access Token directly, and the user would have installed a bad browser extension, that browser extension would maybe be able to read the Access Token (depending on which permissions the extension has been granted). That browser extension would then be able to access the user&#39;s resources using the Access Token, and this is bad.</p><p>Since the Authorization Server now instead only sends back an Authorization Code, that bad extension won&#39;t be able to do anything bad, since exchanging it for an Access Token also requires the <code>client_secret</code>, which only the Client knows.</p></div><p>This flow can also be used for Clients where the user has access to the source code (single-page applications, smartphone applications, desktop applications, etc.), but in these cases, the Client to Authorization Server communication will not include the <code>client_secret</code> (since users would be able to read it in the code), so the Client won&#39;t authenticate itself to the Authorization Server, which makes this flow a little bit less secure. But these applications can use this flow with the Proof Key for Code Exchange extension to make it a bit more secure. Read more about this extension further down.</p><h3 id="implicit-grant" tabindex="-1"><a class="header-anchor" href="#implicit-grant" aria-hidden="true">#</a> Implicit Grant</h3><p>The flow Authorization Code Grant (with the Proof Key for Code Exchange extension) can these days be used in most cases. There exists an old flow called Implicit Grant, which simplified the Authorization Code Grant flow by sending back an Access Token directly, instead of taking the detour with the Authorization Code. The Implicit Grant flow was intended to be used by single-page applications. Since they run in the web browser, taking the detour with the Authorization Code makes no sense, since the Access Token will be exposed to the web browser in the end any way. Single-page applications could also have difficulties with exchanging the Authorization Code for an Access Token because of web browsers&#39; Same-Origin Policy, making this flow their only option, but that&#39;s usually not a problem these days.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The flow of the Implicit Grant." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client with client_id=X wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Access Token for your resources.\n    deactivate as\n    ro ->> c: Here is the Access Token.\n    activate c\n    deactivate ro\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client with client_id=X wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Access Token for your resources.\n    deactivate as\n    ro ->> c: Here is the Access Token.\n    activate c\n    deactivate ro\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">This flow has been deprecated</p><p>This flow has been deprecated. The reasons are the security vulnerabilities explained in <a href="https://tools.ietf.org/html/draft-ietf-oauth-security-topics-09" target="_blank" rel="noopener noreferrer">OAuth 2.0 Security Best Current Practice`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> for this flow.</p><p>For one, the Access Token is passed to the Client through the URL in the web browser, and any (evil) library used in the single-page application will be able to read the Access Token that way. By using the detour with the Authorization Code in the Authorization Code Grant flow instead, an evil library in the single-page application will just be able to read the Authorization Code, which is less useful than the Access Token.</p></div><h3 id="the-proof-key-for-code-exchange-extension" tabindex="-1"><a class="header-anchor" href="#the-proof-key-for-code-exchange-extension" aria-hidden="true">#</a> The Proof Key for Code Exchange extension</h3><p>When a smartphone app use the Authorization Code Grant flow, the user needs to be taken back to the smartphone app (the Client) after the Authorization Server has sent back an Authorization Code to the user. For this to work, the smartphone app can on the user&#39;s device register URLs that should open the Client when used, and the Authorization Server will send back an HTTP redirect response to that URL, which then will cause the device to open the Client application.</p><p>However, any smartphone app can register these URLs. An evil smartphone app can therefor register that it should be opened when a URL with an Authorization Code is used that is really intended for another Client, and that way come over the Authorization Code.</p><p>To prevent this, and to make Authorization Codes less valuable on their own, the Proof Key for Code Exchange extension was introduced to the Authorization Code Grant flow.</p><p>With this extension, when the Client wants the Resource Owner to ask the Authorization Server to generate an Authorization Code for it, the Client first:</p><ol><li>Generates a random string called the <code>code_verifier</code></li><li>Computes the <code>code_challenge</code> by hashing the <code>code_verifier</code> using <a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" rel="noopener noreferrer">SHA256`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ol><p>Then in the Resource Owner&#39;s request to the Authorization Server to generate an Authorization Code, it also passes along the <code>code_challenge</code> to the Authorization Server, which the Authorization Server then remembers.</p><p>Then, when the Client has obtained the Authorization Code and want&#39;s to exchange it for an Access Token, it also needs to pass along the <code>code_verifier</code> in the request. The Authorization Server will hash the <code>code_verifier</code> using SHA256, and if the hash value doesn&#39;t match the <code>code_challenge</code> it received before, it won&#39;t accept the exchange. This way, only the true Client can exchange the Authorization Code for an Access Token, because no one else knows which valid <code>code_verifier</code> to send to the Authorization Server in the exchange request.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specifications. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The flow of the Authorization Code Grant." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> c: I generate code_verifier V and code_challenge C.\n    c ->> ro: I want access to your resources, code_challenge=C.\n    deactivate c\n    ro ->> as: The Client with client_id=X, code_challenge=C wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Code, I remember code_challenge=C.\n    deactivate as\n    ro ->> c: Here is the Authorization Code.\n    activate c\n    deactivate ro\n    c ->> as: Here is my client_id, client_secret, an Authorization Code and code_verifier=V.\n    activate as\n    as ->> c: Everything is fine, here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> c: I generate code_verifier V and code_challenge C.\n    c ->> ro: I want access to your resources, code_challenge=C.\n    deactivate c\n    ro ->> as: The Client with client_id=X, code_challenge=C wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Code, I remember code_challenge=C.\n    deactivate as\n    ro ->> c: Here is the Authorization Code.\n    activate c\n    deactivate ro\n    c ->> as: Here is my client_id, client_secret, an Authorization Code and code_verifier=V.\n    activate as\n    as ->> c: Everything is fine, here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="client-credentials-grant" tabindex="-1"><a class="header-anchor" href="#client-credentials-grant" aria-hidden="true">#</a> Client Credentials Grant</h3><p>This flow can be used when the Client wants to obtain an Access Token it can use to access its own resources on the Resource Server (if you ever have a use-case for that). Since it uses <code>client_id</code> and <code>client_secret</code> you should only use this when the Client runs on a server, so your users won&#39;t have access to the source code and can read the <code>client_secret</code>.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The flow of the Client Credentials Grant." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    c ->> as: Here is my client_id and client_secret.\n    activate c\n    activate as\n    as ->> c: Here is your Access Token.\n    deactivate as\n    c ->> rs: Here is my Access Token, give me my own resources.\n    activate rs\n    rs ->> c: Access Token token is valid, here are your resources.\n    deactivate c\n    deactivate rs\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    c ->> as: Here is my client_id and client_secret.\n    activate c\n    activate as\n    as ->> c: Here is your Access Token.\n    deactivate as\n    c ->> rs: Here is my Access Token, give me my own resources.\n    activate rs\n    rs ->> c: Access Token token is valid, here are your resources.\n    deactivate c\n    deactivate rs\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/rest-api-authorization/index.html.vue?vue&type=template&id=e4503afe

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/rest-api-authorization/index.html.vue

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

/***/ 2546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f63179be",
  "path": "/lectures/rest-api-authorization/",
  "title": "REST API Authorization",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "REST API Authorization"
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
      "title": "Roles",
      "slug": "roles",
      "children": [
        {
          "level": 3,
          "title": "Resource Owner",
          "slug": "resource-owner",
          "children": []
        },
        {
          "level": 3,
          "title": "Client",
          "slug": "client",
          "children": []
        },
        {
          "level": 3,
          "title": "Resource Server",
          "slug": "resource-server",
          "children": []
        },
        {
          "level": 3,
          "title": "Authorization Server",
          "slug": "authorization-server",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Protocol flow",
      "slug": "protocol-flow",
      "children": []
    },
    {
      "level": 2,
      "title": "Client Registration",
      "slug": "client-registration",
      "children": []
    },
    {
      "level": 2,
      "title": "Obtaining Access Token",
      "slug": "obtaining-access-token",
      "children": [
        {
          "level": 3,
          "title": "Resource Owner Password Credentials Grant",
          "slug": "resource-owner-password-credentials-grant",
          "children": []
        },
        {
          "level": 3,
          "title": "Authorization Code Grant",
          "slug": "authorization-code-grant",
          "children": []
        },
        {
          "level": 3,
          "title": "Implicit Grant",
          "slug": "implicit-grant",
          "children": []
        },
        {
          "level": 3,
          "title": "The Proof Key for Code Exchange extension",
          "slug": "the-proof-key-for-code-exchange-extension",
          "children": []
        },
        {
          "level": 3,
          "title": "Client Credentials Grant",
          "slug": "client-credentials-grant",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/rest-api-authorization/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=3889.app.js.map