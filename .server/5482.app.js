"use strict";
exports.id = 5482;
exports.ids = [5482];
exports.modules = {

/***/ 2094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_instructions_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/client-server-communication/project-instructions.html.vue?vue&type=template&id=0073f4d4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="project-instructions" tabindex="-1"><a class="header-anchor" href="#project-instructions" aria-hidden="true">#</a> Project Instructions</h1><p>As project you should work in pairs and create a platform (a solution consisting of both a backend application handling the data on the platform and a frontend application containing the graphical user interface through which users will use the platform). The backend should expose a REST API which the frontend can use to work with the data on the platform. The platform should be implemented with the technologies taught in the course, i.e. Node.js/Express for the backend and Vue.js for the frontend.</p><p>You should not only implement the platform, you should also write a report describing the platform and its implementation, including what it can be used for and how it has been implemented. The file <a href="files/project-report-template.docx">project-report-template.docx</a> contains a template for the report. Your report will be a living document throughout the course, meaning that you will write on it from the start and continually improve it until the end of the course.</p><h2 id="part-1-find-a-partner" tabindex="-1"><a class="header-anchor" href="#part-1-find-a-partner" aria-hidden="true">#</a> Part 1: Find a partner</h2><p>Start by finding a classmate to work with. Then <a href="https://pingpong.hj.se/courseId/21410/projectGroupsList.do#&amp;tab=allGroups" target="_blank" rel="noopener noreferrer">join a project group on Ping Pong`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to let the examiner know who you&#39;re working with. If you can&#39;t find a classmate to work with, email the course coordinator at <a href="mailto:Peter.Larsson-Green@ju.se">Peter.Larsson-Green@ju.se</a> and he will pair you with another student in the same situation.</p><h2 id="part-2-platform-idea" tabindex="-1"><a class="header-anchor" href="#part-2-platform-idea" aria-hidden="true">#</a> Part 2: Platform idea</h2><p>Come up with the platform you want to implement. The platform may be about whatever you want, but the following requirements exist:</p><ul><li>Users should be able to create accounts.</li><li>Users should be able to login to accounts.</li><li>Users should be able to create at least one other type of resource (in addition to accounts) that belongs to an account.</li></ul><p>Example of the additional resource type could be:</p><ul><li>Blogposts for a platform hosting blogs.</li><li>Diary entries for platforms hosting diaries.</li><li>Movies for a platform where users can register movies they&#39;ve watched.</li></ul><p>If you want to have a more fun platform to implement, you probably need to have accounts + 2-3 additional resource types, but it is OK to just have one additional resource type.</p><p>Try to be creative and come up with an idea that solves a real world problem. For example, <em>standing in line and wait</em> is boring, maybe you can come up with a platform that somehow makes it fun? Or maybe a platform that entirely eliminates the need to stand in line and wait? Or maybe you know someone (football coach, friend at a company, etc.) that have some problem you can help them with by creating a platform (such as keeping track of which players attended which practice sessions, or who&#39;s responsible to bring fika to work each friday, etc.).</p><p>Users should be able to apply <abbr title="Create, Read, Update, Delete">CRUD</abbr> operations on at least accounts + 1 additional resource type on the platform, but how they do that through the frontend is up to you to decide. For example, to delete an account you may have a delete button either on the <em>View account</em> &quot;page&quot; or you may have a dedicated <em>Delete account</em> &quot;page&quot; that only contains the delete button. Users should also be able to login to the account they have created using a username and a password.</p><p>Describe your platform as detailed as possible in your project report. To a large extent you should be able to finish the chapters <em>Introduction</em>, <em>Database</em> and <em>Frontend Application</em> (describe the GUI, not implementation details for now).</p><h2 id="part-3-designing-the-rest-api" tabindex="-1"><a class="header-anchor" href="#part-3-designing-the-rest-api" aria-hidden="true">#</a> Part 3: Designing the REST API</h2><p>Before you start working on this part you are expected to view the following lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/internet-basics/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Internet Basics`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Internet Basics")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/http-and-web-applications/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`HTTP and Web Applications`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("HTTP and Web Applications")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/rest-api-basics/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`REST API Basics`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("REST API Basics")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>Design the REST API you will implement on the backend and through which the frontend will communicate with it. By looking at the graphical user interface in your report you should be able to figure out which type of requests the frontend needs to be able to send to the backend to be able to function properly. For example, if the frontend have a &quot;page&quot; showing a list of all accounts, then your REST API should send back all accounts when it receives a <code>GET</code> request for <code>/accounts</code> (or similar), and if the frontend have a &quot;page&quot; showing all information about an account with a specific id, then your REST API should send back all information about an account with a <code>SPECIFIC_ID</code> when it receives a <code>GET</code> request for <code>/accounts/SPECIFIC_ID</code> (or similar).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You do not need to worry about login functionality (authentication and authorization) yet, that comes in Part 6.</p></div><p>Describe the REST API in your project report. Be as detailed as possible. Other programmers should understand how to use your REST API just by reading the specification for it in your report. This means that you must mention details such as which methods, URI:s, status codes, headers etc. that are used in your REST API for each type of request it can handle.</p><h2 id="part-4-implementing-the-rest-api-in-express" tabindex="-1"><a class="header-anchor" href="#part-4-implementing-the-rest-api-in-express" aria-hidden="true">#</a> Part 4: Implementing the REST API in Express</h2><p>Before you start working on this part you are expected to view the following lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Node.js")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/web-applications-in-node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Web Applications in Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Web Applications in Node.js")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/npm/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`npm`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("npm")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/express-basics/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Express Basics`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Express Basics")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/rest-api-in-express/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`REST API in Express`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("REST API in Express")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/sqlite/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`SQLite`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("SQLite")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/using-sqlite-in-node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Using SQLite in Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Using SQLite in Node.js")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>Implement the REST API you&#39;ve specified in your project report so far as an Express application that stores the resources in an SQLite database. Next you&#39;ll find some guiding steps to help you get started.</p><h3 id="getting-started-with-express" tabindex="-1"><a class="header-anchor" href="#getting-started-with-express" aria-hidden="true">#</a> Getting started with Express</h3><p>Start by creating a new folder to store the source code for your backend application:</p><ol><li>Open a terminal/shell/console, for example <em>Windows PowerShell</em> in Windows.</li><li>Navigate to the folder where you want to create the root folder of your source code. Use the following commands: <ul><li><code>cd /projects</code> - Go into the sub-folder named <code>projects</code></li><li><code>cd ../</code>- Go back to the parent folder (you probably will not need to use this one)</li></ul></li><li>Create the root folder for your project&#39;s source code files by running the following command: <ul><li><code>mkdir my-backend</code> - Create a new folder named <code>my-backend</code> (use a better name)</li></ul></li><li>Go into the root folder by running the following command: <ul><li><code>cd my-backend</code> - Go into the sub-folder named <code>my-backend</code></li></ul></li><li>Create the <code>package.json</code> file (which keep tracks of which npm packages the project is using) by running the following command: <ul><li><code>npm init --yes</code> - Creates the <code>package.json</code>file.</li></ul></li><li>Install the <code>express</code> package by running the following command: <ul><li><code>npm install express</code> - Installs the <code>express</code> package for this project</li></ul></li></ol><p>Then open the root folder of your project in your code editor:</p><ol start="7"><li>Use the following command to open the root folder in Visual Studio Code: <ul><li><code>code .</code> - Open the root folder in Visual Studio Code. <strong>Note</strong>: <a href="https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line" target="_blank" rel="noopener noreferrer">On Mac you need to add the code command`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li></ul></li></ol><p>Then create the file <code>app.js</code> with the content shown below. That code is a web application sending back the text <code>Hello, World</code> when you visit <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">localhost:3000/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Test if everything works by running your application and then visit <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">localhost:3000/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> a web browser or using Postman to send a GET request for the URI <code>http://localhost:3000/</code>. You can run your application either through the Debug section in Visual Studio Code or through the <code>node</code> command in your terminal/shell/console:</p><ol start="8"><li>Run your web application using the following command: <ul><li><code>node app.js</code> – Use Node.js to execute the code in the file <code>app.js</code></li></ul></li></ol><p>If everything works, you should see the text <code>Hello, World</code> in your web browser.</p><p>If you started the web application through a terminal/shell/console, you can stop it from running by holding <kbd>CTRL</kbd> and pressing <kbd>C</kbd> (possibly twice) in the terminal/shell/console that started it. You can then change the code in <code>app.js</code>, and then run the node command to start your web application again.</p><p>Play around a little bit to learn the basics:</p><ul><li>Can you change the text that is sent back to the client?</li><li>Can you add a function handling GET requests for another URI and that sends back another text to the client?</li><li>What happens when a client sends a GET request for a URI that does not exist?</li></ul><h3 id="getting-started-with-sqlite" tabindex="-1"><a class="header-anchor" href="#getting-started-with-sqlite" aria-hidden="true">#</a> Getting started with SQLite</h3><p>The resources on the platform should be stored in a database. In this course we will use the relational database SQLite as our database. SQLite is most often not the best choice for big platforms with a lot of users, but it is easy to use and to get started with, and you can later replace it with a more powerful database when needed.</p><p>SQLite stores the entire database in a single file and does not require any installation in addition to an npm package exposing an API you can use to communicate with it.</p><p>Start by installing the <code>sqlite3</code> package (feel free to use <code>sqlite</code> instead if you want to use promises (and optionally <code>async</code>/<code>await</code>) to avoid <a href="http://callbackhell.com/" target="_blank" rel="noopener noreferrer">callback hell`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, although that&#39;s not something you will learn in this course):</p><ol><li>Open a terminal/shell/console and navigate to your project folder.</li><li>Install the npm package <code>sqlite3</code> by running the following command: <ul><li><code>npm install sqlite3</code> - Installs the npm package <code>sqlite3</code></li></ul></li></ol><p>Then use <code>sqlite3</code> in your backend to create a new database to store your resources in. Here are some guiding steps helping you with the accounts resources:</p><ol start="3"><li>Add the line <code>const sqlite3 = require(&#39;sqlite3&#39;)</code>.</li><li>Add the line <code>const db = new sqlite3.Database(&quot;my-database.db&quot;)</code>.</li><li>Use <code>db.run(&quot;Your SQL query&quot;)</code>to send a query to the database creating a table that can be used to store the accounts on the platform.</li><li>Start the backend again. When you do this, the web application will send the query above to the database, which in turn will create the table to store the accounts in.</li><li>Open your database file in DB Browser for SQLite and verify that the table has been created.</li></ol><div class="custom-container warning"><p class="custom-container-title">Note</p><p>If you send a query like <code>CREATE TABLE accounts (...)</code>to the database, you will get an error the second time you start your backend, because the table <code>accounts</code> already exists in the database. Instead, you can send a query like <code>CREATE TABLE IF NOT EXISTS accounts (...)</code>, which will attempt to create the <code>accounts</code> table only if it does not already exist.</p></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>In the end the passwords should not be stored in plain text in the database, only their hash values, but to give you a gentle start we will not care about hashing them now.</p></div><p>Use DB Browser for SQLite to manually insert some accounts (remember to click on the <code>Write Changes</code> button in the GUI!). Then let&#39;s write the code letting clients fetch accounts (this might not be in line with what you&#39;ve written in your report, so you might need to modify the code below a little bit).</p><h3 id="fetching-all-accounts" tabindex="-1"><a class="header-anchor" href="#fetching-all-accounts" aria-hidden="true">#</a> Fetching all accounts</h3><p>To let clients fetch all accounts, they can send a GET request to <code>/accounts</code>. When the backend receives this request, it needs to fetch all accounts from the database and send them back in JSON format. To make that happen, you can use the code below:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/accounts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// TODO: You should probably not fetch the password...</span>
    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM accounts ORDER BY username&quot;</span>
    db<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> accounts</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// If something went wrong, send back status code 500.</span>
            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">// Otherwise, send back all accounts in JSON format.</span>
            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>accounts<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Try sending a GET request to <code>/accounts</code> in Postman to verify that it works. Remember that you need to restart your backend each time you change the JavaScript code in it.</p><h3 id="fetching-a-single-account" tabindex="-1"><a class="header-anchor" href="#fetching-a-single-account" aria-hidden="true">#</a> Fetching a single account</h3><p>To let clients fetch an account with a specific id, they can send a GET request to <code>/accounts/THE_ID</code>, e.g. <code>/accounts/5</code>. When the backend receives this request, it needs to fetch the account with this id from the database and send it back in JSON format. To make that happen, you can use the code below:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/accounts/:id&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> request<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id
    <span class="token comment">// TODO: You should probably not fetch the password...</span>
    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM accounts WHERE id = ?&quot;</span>
    <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span>
    db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> values<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> account</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// If something went wrong, send back status code 500.</span>
            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>account<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// If no account with that id existed.</span>
            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">// Otherwise, send back the account in JSON format.</span>
            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Try sending a GET request to <code>/accounts/1</code> and <code>/accounts/6876868</code> in Postman to verify that it works. Remember that you need to restart your backend each time you change the JavaScript code in it.</p><h3 id="creating-accounts" tabindex="-1"><a class="header-anchor" href="#creating-accounts" aria-hidden="true">#</a> Creating accounts</h3><p>To let clients create new accounts, they can send a POST request to <code>/accounts</code>, and in the body pass information about the account to be created in JSON format, e.g. <code>{&quot;username&quot;: &quot;Alice&quot;, &quot;password&quot;: &quot;abc123&quot;}</code>. They also need to use the <code>Content-Type</code> header with the value <code>application/json</code>. When the backend receives this request, it needs to read the information from the body of the request and then insert that information as a new account in the database, and then send back a response to the client.</p><p>To be able to read bodies written in JSON format, you need to add a middleware function from the npm package <code>body-parser</code>:</p><ol><li>Open a terminal/shell/console and navigate to your project folder.</li><li>Install the npm package <code>body-parser</code> by running the following command: <ul><li><code>npm install body-parser</code> - Installs the npm package <code>body-parser</code></li></ul></li></ol><p>Then use <code>body-parser</code> in your backend to add a middleware function parsing JSON bodies:</p><ol start="3"><li>Add the line <code>const bodyParser = require(&#39;body-parser&#39;)</code>.</li><li>Add the line <code>app.use(bodyParser.json())</code>.</li></ol><p>Then you can let clients create new accounts using the following code:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/accounts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> account <span class="token operator">=</span> request<span class="token punctuation">.</span>body
    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token string">&quot;INSERT INTO accounts (username, password) VALUES (?, ?)&quot;</span>
    <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span>account<span class="token punctuation">.</span>username<span class="token punctuation">,</span> account<span class="token punctuation">.</span>password<span class="token punctuation">]</span>
    db<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> values<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastID
            response<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/accounts/&quot;</span><span class="token operator">+</span>id<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Try adding Update and Delete operations for accounts on your own:</p><ul><li>To update a resource, clients should send a PUT request, the URI should identify which resource that should be updated, and the body should contain the updated resource. Use <code>app.put(&quot;...&quot;, function(...){ ... })</code> to listen for PUT requests.</li><li>To delete a resource, clients should send a DELETE request, and the URI should identify which resource that should be deleted. Use <code>app.delete(&quot;...&quot;, function(...){ ... })</code> to listen for DELETE requests.</li></ul><p>Then add the other operations for the other type of resources you have. Note that we yet don&#39;t bother about authentication and authorization, so all clients should for now be allowed to whatever they want.</p><p>Don&#39;t forget to describe in your project report how the backend has been implemented.</p><h2 id="part-5-implementing-the-frontend" tabindex="-1"><a class="header-anchor" href="#part-5-implementing-the-frontend" aria-hidden="true">#</a> Part 5: Implementing the Frontend</h2><p>Before you start working on this part you are expected to view the following lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/sop-and-cors/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`SOP and CORS`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("SOP and CORS")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>Implement the frontend application in Vue.js. You will not get any help with how to use Vue.js here (use what you learned from the laboratory work), but we will give you some instructions on how to communicate with the backend through its REST API.</p><div class="custom-container warning"><p class="custom-container-title">Remember</p><p>The frontend does not yet contain login functionality, so you can&#39;t implement that part of the frontend yet.</p></div><p>Don&#39;t forget to describe in your project report how the frontend has been implemented.</p><h3 id="enabling-cors-on-the-backend" tabindex="-1"><a class="header-anchor" href="#enabling-cors-on-the-backend" aria-hidden="true">#</a> Enabling CORS on the backend</h3><p>To start with, web browsers will forbid the frontend to communicate with the backend due to the <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" target="_blank" rel="noopener noreferrer">Same-Origin Policy`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. To allow it, you need to add support for <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer">CORS`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to your backend application. In Express it&#39;s as easy as this (using the <code>*</code> value in the CORS headers to allow any clients to do anything):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//...</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Enable CORS.</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	<span class="token comment">// Allow client-side JS from the following websites to send requests to us:</span>
	<span class="token comment">// (not optimal, for better security, change * to the URI of your frontend)</span>
	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
	
	<span class="token comment">// Allow client-side JS to send requests with the following methods:</span>
	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
	
	<span class="token comment">// Allow client-side JS to send requests with the following headers:</span>
	<span class="token comment">// (needed for the Authorization and Content-Type headers)</span>
	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
	
	<span class="token comment">// Allow client-side JS to read the following headers in the response:</span>
	<span class="token comment">// (in addition to Cache-Control, Content-Language, Content-Type</span>
	<span class="token comment">// Expires, Last-Modified, Pragma).</span>
	<span class="token comment">// (needed for the Location header)</span>
	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
	
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>FireFox did before support the <code>*</code> value only in the <code>Access-Control-Allow-Origin</code> header, so if you wanted to support Firefox you needed to list the values you want to allow in the other 3 headers, e.g. <code>response.setHeader(&quot;Access-Control-Allow-Headers&quot;, &quot;Authorization, Content-Type&quot;)</code> instead of using <code>*</code>, but <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1309358" target="_blank" rel="noopener noreferrer">support for the <code>*</code> value was added in FireFox 69`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. If you want to support older versions of FireFox, you need to list the supported values instead of using <code>*</code>.</p></div><h3 id="sending-http-requests-from-the-frontend" tabindex="-1"><a class="header-anchor" href="#sending-http-requests-from-the-frontend" aria-hidden="true">#</a> Sending HTTP requests from the frontend</h3><p>To send HTTP requests from your Vue.js application you can either use <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started" target="_blank" rel="noopener noreferrer">the old XMLHttpRequest object`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> or <a href="https://davidwalsh.name/fetch" target="_blank" rel="noopener noreferrer">the new <code>fetch()</code> function`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Below you find example of how to use each of them.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "XMLHttpRequest" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token keyword"${
                _scopeId
              }>const</span> request <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>new</span> <span class="token class-name"${
                _scopeId
              }>XMLHttpRequest</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }>// Specify method and URI.</span>
request<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>open</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;POST&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token string"${
                _scopeId
              }>&quot;https://localhost:3000/accounts&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }>// Add headers to the request.</span>
request<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>setRequestHeader</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;Content-Type&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token string"${
                _scopeId
              }>&quot;application/json&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
<span class="token comment"${
                _scopeId
              }>// ...</span>

<span class="token comment"${
                _scopeId
              }>// Add a callback function that will be called when</span>
<span class="token comment"${
                _scopeId
              }>// we receive back the response.</span>
request<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>addEventListener</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;load&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token keyword"${
                _scopeId
              }>const</span> statusCode <span class="token operator"${
                _scopeId
              }>=</span> request<span class="token punctuation"${
                _scopeId
              }>.</span>status
    <span class="token keyword"${
                _scopeId
              }>const</span> bodyAsString <span class="token operator"${
                _scopeId
              }>=</span> request<span class="token punctuation"${
                _scopeId
              }>.</span>responseText
    <span class="token keyword"${
                _scopeId
              }>const</span> bodyAsJsObject <span class="token operator"${
                _scopeId
              }>=</span> <span class="token constant"${
                _scopeId
              }>JSON</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>parse</span><span class="token punctuation"${
                _scopeId
              }>(</span>bodyAsString<span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token keyword"${
                _scopeId
              }>const</span> locationHeader <span class="token operator"${
                _scopeId
              }>=</span> request<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getResponseHeader</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;Location&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token comment"${
                _scopeId
              }>// ...</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }>// Add a callback function that will be called if</span>
<span class="token comment"${
                _scopeId
              }>// the communication with the server fails.</span>
request<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>addEventListener</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;error&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token comment"${
                _scopeId
              }>// Request failed :(</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }>// Specify body and send it.</span>
<span class="token keyword"${
                _scopeId
              }>const</span> accountToBeCreated <span class="token operator"${
                _scopeId
              }>=</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    username<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;Alice&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    password<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;abc123&quot;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span>
<span class="token keyword"${
                _scopeId
              }>const</span> bodyAsString <span class="token operator"${
                _scopeId
              }>=</span> <span class="token constant"${
                _scopeId
              }>JSON</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>stringify</span><span class="token punctuation"${
                _scopeId
              }>(</span>accountToBeCreated<span class="token punctuation"${
                _scopeId
              }>)</span>
request<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>send</span><span class="token punctuation"${
                _scopeId
              }>(</span>bodyAsString<span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" request "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token class-name" }, "XMLHttpRequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Specify method and URI."),
                      (0,external_vue_.createTextVNode)("\nrequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "open"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"POST\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://localhost:3000/accounts\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add headers to the request."),
                      (0,external_vue_.createTextVNode)("\nrequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "setRequestHeader"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Content-Type\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"application/json\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add a callback function that will be called when"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// we receive back the response."),
                      (0,external_vue_.createTextVNode)("\nrequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'load'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" statusCode "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" request"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("status\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" bodyAsString "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" request"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("responseText\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" bodyAsJsObject "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "parse"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("bodyAsString"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" locationHeader "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" request"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getResponseHeader"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Location\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add a callback function that will be called if"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the communication with the server fails."),
                      (0,external_vue_.createTextVNode)("\nrequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"error\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Request failed :("),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Specify body and send it."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" accountToBeCreated "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    username"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    password"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"abc123\""),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" bodyAsString "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("accountToBeCreated"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\nrequest"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "send"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("bodyAsString"),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "fetch()" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>You&#39;re not expected to learn how promises works in this course, but if you&#39;re curios you can learn the basics about promises on your own by reading the article <a href="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1" target="_blank" rel="noopener noreferrer"${
                _scopeId
              }>Understanding promises in JavaScript`)
              _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
              _push(`</a>.</p><p${
                _scopeId
              }>The benefits with using promises instead of callback function is that you can chain them. You can learn about how to chain promises by reading the article <a href="https://javascript.info/promise-chaining" target="_blank" rel="noopener noreferrer"${
                _scopeId
              }>Promises chaining`)
              _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
              _push(`</a>.</p><p${
                _scopeId
              }>And of course you also need to learn how to use the <code${
                _scopeId
              }>fetch()</code> function works. You can do that in the article <a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch" target="_blank" rel="noopener noreferrer"${
                _scopeId
              }>Introduction to fetch()`)
              _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
              _push(`</a>.</p><div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token keyword"${
                _scopeId
              }>const</span> accountToBeCreated <span class="token operator"${
                _scopeId
              }>=</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    username<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;Alice&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    password<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;abc123&quot;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span>
<span class="token keyword"${
                _scopeId
              }>const</span> bodyAsString <span class="token operator"${
                _scopeId
              }>=</span> <span class="token constant"${
                _scopeId
              }>JSON</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>stringify</span><span class="token punctuation"${
                _scopeId
              }>(</span>accountToBeCreated<span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token function"${
                _scopeId
              }>fetch</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;https://localhost:3000/accounts&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    method<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;POST&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    headers<span class="token operator"${
                _scopeId
              }>:</span> <span class="token keyword"${
                _scopeId
              }>new</span> <span class="token class-name"${
                _scopeId
              }>Headers</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
        <span class="token string"${
                _scopeId
              }>&#39;Content-Type&#39;</span><span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;application/json&#39;</span>
    <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    body<span class="token operator"${
                _scopeId
              }>:</span> bodyAsString
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>then</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>response</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token keyword"${
                _scopeId
              }>const</span> statusCode <span class="token operator"${
                _scopeId
              }>=</span> response<span class="token punctuation"${
                _scopeId
              }>.</span>status
    <span class="token keyword"${
                _scopeId
              }>const</span> locationHeader <span class="token operator"${
                _scopeId
              }>=</span> response<span class="token punctuation"${
                _scopeId
              }>.</span>headers<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;Location&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token keyword"${
                _scopeId
              }>return</span> response<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>json</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>
<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>then</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>bodyAsJsObject</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token comment"${
                _scopeId
              }>// ...</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>catch</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>error</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token comment"${
                _scopeId
              }>// Called when something goes wrong :(</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("You're not expected to learn how promises works in this course, but if you're curios you can learn the basics about promises on your own by reading the article "),
                  (0,external_vue_.createVNode)("a", {
                    href: "https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    (0,external_vue_.createTextVNode)("Understanding promises in JavaScript"),
                    (0,external_vue_.createVNode)(_component_OutboundLink)
                  ]),
                  (0,external_vue_.createTextVNode)(".")
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("The benefits with using promises instead of callback function is that you can chain them. You can learn about how to chain promises by reading the article "),
                  (0,external_vue_.createVNode)("a", {
                    href: "https://javascript.info/promise-chaining",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    (0,external_vue_.createTextVNode)("Promises chaining"),
                    (0,external_vue_.createVNode)(_component_OutboundLink)
                  ]),
                  (0,external_vue_.createTextVNode)(".")
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("And of course you also need to learn how to use the "),
                  (0,external_vue_.createVNode)("code", null, "fetch()"),
                  (0,external_vue_.createTextVNode)(" function works. You can do that in the article "),
                  (0,external_vue_.createVNode)("a", {
                    href: "https://developers.google.com/web/updates/2015/03/introduction-to-fetch",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    (0,external_vue_.createTextVNode)("Introduction to fetch()"),
                    (0,external_vue_.createVNode)(_component_OutboundLink)
                  ]),
                  (0,external_vue_.createTextVNode)(".")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" accountToBeCreated "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    username"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    password"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"abc123\""),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" bodyAsString "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("accountToBeCreated"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "fetch"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://localhost:3000/accounts\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    method"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'POST'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    headers"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Headers"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'Content-Type'"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'application/json'"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    body"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" bodyAsString\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" statusCode "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("status\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" locationHeader "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("headers"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Location\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(" response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "json"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "bodyAsJsObject"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "catch"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when something goes wrong :("),
                      (0,external_vue_.createTextVNode)("\n"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "fetch() with async and await" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>The main benefit with promises is that we can use the <code${
                _scopeId
              }>async</code> and <code${
                _scopeId
              }>await</code> keywords in JavaScript instead of chaining them. This way, we end up writing code that looks to run synchronously (and hence very easy to read ☺), but it will run asynchronously (hence not blocking ☺).</p><p${
                _scopeId
              }>To learn how to use <code${
                _scopeId
              }>async</code>/<code${
                _scopeId
              }>await</code> you can read the article <a href="https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb" target="_blank" rel="noopener noreferrer"${
                _scopeId
              }>How to use Async Await in JavaScript.`)
              _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
              _push(`</a>. Using promises with <code${
                _scopeId
              }>async</code>/<code${
                _scopeId
              }>await</code> is probably easier than learning how to chain promises, so don&#39;t be afraid of trying.</p><div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token keyword"${
                _scopeId
              }>async</span> <span class="token keyword"${
                _scopeId
              }>function</span> <span class="token function"${
                _scopeId
              }>createAccount</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>accountToBeCreated</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    
    <span class="token keyword"${
                _scopeId
              }>const</span> bodyAsString <span class="token operator"${
                _scopeId
              }>=</span> <span class="token constant"${
                _scopeId
              }>JSON</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>stringify</span><span class="token punctuation"${
                _scopeId
              }>(</span>accountToBeCreated<span class="token punctuation"${
                _scopeId
              }>)</span>
    
    <span class="token keyword"${
                _scopeId
              }>const</span> response <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>await</span> <span class="token function"${
                _scopeId
              }>fetch</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;https://localhost:3000/accounts&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
        method<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;POST&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
        headers<span class="token operator"${
                _scopeId
              }>:</span> <span class="token keyword"${
                _scopeId
              }>new</span> <span class="token class-name"${
                _scopeId
              }>Headers</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
            <span class="token string"${
                _scopeId
              }>&#39;Content-Type&#39;</span><span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;application/json&#39;</span>
        <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>,</span>
        body<span class="token operator"${
                _scopeId
              }>:</span> bodyAsString
    <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    
    <span class="token keyword"${
                _scopeId
              }>const</span> statusCode <span class="token operator"${
                _scopeId
              }>=</span> response<span class="token punctuation"${
                _scopeId
              }>.</span>status
    <span class="token keyword"${
                _scopeId
              }>const</span> locationHeader <span class="token operator"${
                _scopeId
              }>=</span> response<span class="token punctuation"${
                _scopeId
              }>.</span>headers<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;Location&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token keyword"${
                _scopeId
              }>const</span> bodyAsJsObject <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>await</span> response<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>json</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    
    <span class="token keyword"${
                _scopeId
              }>return</span> bodyAsObject
    
<span class="token punctuation"${
                _scopeId
              }>}</span>

<span class="token comment"${
                _scopeId
              }>// Use this in an async function.</span>
<span class="token comment"${
                _scopeId
              }>// (the async keyword cna only be used in async functions)</span>
<span class="token keyword"${
                _scopeId
              }>try</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token keyword"${
                _scopeId
              }>const</span> bodyAsObject <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>await</span> <span class="token function"${
                _scopeId
              }>createAccount</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
        username<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;Alice&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
        password<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;abc123&quot;</span>
    <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token comment"${
                _scopeId
              }>// ...</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token keyword"${
                _scopeId
              }>catch</span><span class="token punctuation"${
                _scopeId
              }>(</span>error<span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token comment"${
                _scopeId
              }>// Called when something goes wrong :(</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("The main benefit with promises is that we can use the "),
                  (0,external_vue_.createVNode)("code", null, "async"),
                  (0,external_vue_.createTextVNode)(" and "),
                  (0,external_vue_.createVNode)("code", null, "await"),
                  (0,external_vue_.createTextVNode)(" keywords in JavaScript instead of chaining them. This way, we end up writing code that looks to run synchronously (and hence very easy to read ☺), but it will run asynchronously (hence not blocking ☺).")
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("To learn how to use "),
                  (0,external_vue_.createVNode)("code", null, "async"),
                  (0,external_vue_.createTextVNode)("/"),
                  (0,external_vue_.createVNode)("code", null, "await"),
                  (0,external_vue_.createTextVNode)(" you can read the article "),
                  (0,external_vue_.createVNode)("a", {
                    href: "https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    (0,external_vue_.createTextVNode)("How to use Async Await in JavaScript."),
                    (0,external_vue_.createVNode)(_component_OutboundLink)
                  ]),
                  (0,external_vue_.createTextVNode)(". Using promises with "),
                  (0,external_vue_.createVNode)("code", null, "async"),
                  (0,external_vue_.createTextVNode)("/"),
                  (0,external_vue_.createVNode)("code", null, "await"),
                  (0,external_vue_.createTextVNode)(" is probably easier than learning how to chain promises, so don't be afraid of trying.")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "async"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "createAccount"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "accountToBeCreated"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" bodyAsString "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("accountToBeCreated"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" response "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "fetch"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://localhost:3000/accounts\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        method"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'POST'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n        headers"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Headers"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n            "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'Content-Type'"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'application/json'"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n        body"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" bodyAsString\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" statusCode "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("status\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" locationHeader "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("headers"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Location\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" bodyAsJsObject "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                      (0,external_vue_.createTextVNode)(" response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "json"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(" bodyAsObject\n    \n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Use this in an async function."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// (the async keyword cna only be used in async functions)"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" bodyAsObject "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "createAccount"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        username"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n        password"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"abc123\""),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when something goes wrong :("),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n\n")
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "XMLHttpRequest" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" request "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token class-name" }, "XMLHttpRequest"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Specify method and URI."),
                    (0,external_vue_.createTextVNode)("\nrequest"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "open"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"POST\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://localhost:3000/accounts\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add headers to the request."),
                    (0,external_vue_.createTextVNode)("\nrequest"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "setRequestHeader"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Content-Type\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"application/json\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add a callback function that will be called when"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// we receive back the response."),
                    (0,external_vue_.createTextVNode)("\nrequest"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'load'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" statusCode "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" request"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("status\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" bodyAsString "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" request"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("responseText\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" bodyAsJsObject "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "parse"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("bodyAsString"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" locationHeader "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" request"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getResponseHeader"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Location\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Add a callback function that will be called if"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the communication with the server fails."),
                    (0,external_vue_.createTextVNode)("\nrequest"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"error\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Request failed :("),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Specify body and send it."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" accountToBeCreated "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    username"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    password"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"abc123\""),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" bodyAsString "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("accountToBeCreated"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\nrequest"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "send"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("bodyAsString"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "fetch()" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("You're not expected to learn how promises works in this course, but if you're curios you can learn the basics about promises on your own by reading the article "),
                (0,external_vue_.createVNode)("a", {
                  href: "https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (0,external_vue_.createTextVNode)("Understanding promises in JavaScript"),
                  (0,external_vue_.createVNode)(_component_OutboundLink)
                ]),
                (0,external_vue_.createTextVNode)(".")
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("The benefits with using promises instead of callback function is that you can chain them. You can learn about how to chain promises by reading the article "),
                (0,external_vue_.createVNode)("a", {
                  href: "https://javascript.info/promise-chaining",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (0,external_vue_.createTextVNode)("Promises chaining"),
                  (0,external_vue_.createVNode)(_component_OutboundLink)
                ]),
                (0,external_vue_.createTextVNode)(".")
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("And of course you also need to learn how to use the "),
                (0,external_vue_.createVNode)("code", null, "fetch()"),
                (0,external_vue_.createTextVNode)(" function works. You can do that in the article "),
                (0,external_vue_.createVNode)("a", {
                  href: "https://developers.google.com/web/updates/2015/03/introduction-to-fetch",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (0,external_vue_.createTextVNode)("Introduction to fetch()"),
                  (0,external_vue_.createVNode)(_component_OutboundLink)
                ]),
                (0,external_vue_.createTextVNode)(".")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" accountToBeCreated "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    username"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    password"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"abc123\""),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" bodyAsString "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("accountToBeCreated"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "fetch"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://localhost:3000/accounts\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    method"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'POST'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    headers"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Headers"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'Content-Type'"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'application/json'"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    body"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" bodyAsString\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" statusCode "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("status\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" locationHeader "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("headers"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Location\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(" response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "json"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "then"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "bodyAsJsObject"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "catch"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "error"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when something goes wrong :("),
                    (0,external_vue_.createTextVNode)("\n"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "fetch() with async and await" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("The main benefit with promises is that we can use the "),
                (0,external_vue_.createVNode)("code", null, "async"),
                (0,external_vue_.createTextVNode)(" and "),
                (0,external_vue_.createVNode)("code", null, "await"),
                (0,external_vue_.createTextVNode)(" keywords in JavaScript instead of chaining them. This way, we end up writing code that looks to run synchronously (and hence very easy to read ☺), but it will run asynchronously (hence not blocking ☺).")
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("To learn how to use "),
                (0,external_vue_.createVNode)("code", null, "async"),
                (0,external_vue_.createTextVNode)("/"),
                (0,external_vue_.createVNode)("code", null, "await"),
                (0,external_vue_.createTextVNode)(" you can read the article "),
                (0,external_vue_.createVNode)("a", {
                  href: "https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (0,external_vue_.createTextVNode)("How to use Async Await in JavaScript."),
                  (0,external_vue_.createVNode)(_component_OutboundLink)
                ]),
                (0,external_vue_.createTextVNode)(". Using promises with "),
                (0,external_vue_.createVNode)("code", null, "async"),
                (0,external_vue_.createTextVNode)("/"),
                (0,external_vue_.createVNode)("code", null, "await"),
                (0,external_vue_.createTextVNode)(" is probably easier than learning how to chain promises, so don't be afraid of trying.")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "async"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "createAccount"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "accountToBeCreated"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" bodyAsString "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("accountToBeCreated"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" response "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "fetch"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://localhost:3000/accounts\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        method"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'POST'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n        headers"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Headers"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'Content-Type'"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'application/json'"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n        body"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" bodyAsString\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" statusCode "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("status\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" locationHeader "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("headers"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Location\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" bodyAsJsObject "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                    (0,external_vue_.createTextVNode)(" response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "json"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(" bodyAsObject\n    \n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Use this in an async function."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// (the async keyword cna only be used in async functions)"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "try"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" bodyAsObject "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "await"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "createAccount"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        username"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n        password"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"abc123\""),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "catch"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("error"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Called when something goes wrong :("),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n\n")
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
  _push(`<h2 id="part-6-adding-login-to-the-rest-api" tabindex="-1"><a class="header-anchor" href="#part-6-adding-login-to-the-rest-api" aria-hidden="true">#</a> Part 6: Adding Login to the REST API</h2><p>Before you start working on this part you are expected to view the following lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/rest-api-authorization/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`REST API Authorization`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("REST API Authorization")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/json-web-tokens/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`JSON Web Tokens`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("JSON Web Tokens")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/third-party-authentication/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Third-Party Authentication`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Third-Party Authentication")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><hr><p>Add authentication and authorization to the REST API in your project report as described by the <a href="https://oauth.net/2/" target="_blank" rel="noopener noreferrer">OAuth 2.0 Framework`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> and <a href="https://openid.net/connect/" target="_blank" rel="noopener noreferrer">OpenID Connect`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. You basically need to:</p><ul><li>Add one request clients can use to &quot;login&quot; to an account (to obtain an access token and an id token). <ul><li>Clients also need to know which claims the id token contains.</li></ul></li><li>Describe how clients can pass the access token to the backend in requests.</li><li>Describe which clients that are allowed to perform which operations in the API.</li></ul><p>You only need to support the <em>Authorization Grant</em> called <em>Resource Owner Password Credentials</em>. Follow the details in the specification as much as possible.</p><div class="custom-container danger"><p class="custom-container-title">Report Feedback</p><p>You may <a href="https://pingpong.hj.se/courseId/21410/content.do?id=16690466" target="_blank" rel="noopener noreferrer">submit your report on Ping Pong and get some feedback on it`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> once before you submit your project work for grading at the end of the course. When you have come this far in your project work it is probably a good idea to do that. Note that you only have until 2019-10-04 to submit your report for feedback.</p></div><h2 id="part-7-implementing-login-in-express" tabindex="-1"><a class="header-anchor" href="#part-7-implementing-login-in-express" aria-hidden="true">#</a> Part 7: Implementing Login in Express</h2><p>Implement authentication and authorization in the Express application the way you describe it in the previous part. You should also change the code to store hash values of the users passwords, instead of storing them as plain text. Here we give you some hints about how to accomplish this.</p><h3 id="adding-login-creating-tokens" tabindex="-1"><a class="header-anchor" href="#adding-login-creating-tokens" aria-hidden="true">#</a> Adding login/Creating tokens</h3><p>According to the OAuth 2.0 specification, when a user logs in with a username and password, they should send it to the server in the body of the request in the data format <code>application/x-www-form-urlencoded</code>. This is the same data format that is used in the querystring, e.g. <code>variable1=value1&amp;variable2=value2&amp;...</code>. When the backend receives such a request, it needs to parse the body written in that data format. This can be added to Express using a middleware from the npm package <code>body-parser</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;body-parser&#39;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    extended<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>When you have added this middleware, <code>request.body</code> will be populated with information from the body, e.g.:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Body: variable1=value1&amp;variable2=value2</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/tokens&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> variable1 <span class="token operator">=</span> request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>variable1 <span class="token comment">// value1</span>
    <span class="token keyword">const</span> variable2 <span class="token operator">=</span> request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>variable2 <span class="token comment">// value2</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>You need to check that the body contains a variable called <code>grant_type</code> with the value <code>password</code>. If that&#39;s not the case, then the user tries to login in one of the other ways described in OAuth 2.0 that we don&#39;t support, and we should send back an error response (see the specification for the details).</p><p>If <code>grant_type</code> has the value <code>password</code>, then the body should also contain the variables <code>username</code> and <code>password</code>. If that&#39;s not the case, then something is wrong with the request and we should send back an error response (see the specification for the details).</p><p>If <code>grant_type</code> has the value <code>password</code> and the body also contains the variables <code>username</code> and <code>password</code>, then we need to fetch the account from the database with the given <code>username</code> and see if the <code>password</code> matches. If no account with that username exists, or if the password is wrong, we should send back an error response (see the specification for the details).</p><p>Otherwise, if everything is OK and the user should be signed in, we need to create an access token the user can send to the backend in the future as a proof of being signed in to a specific account. We can implement these access tokens as <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">JSON Web Tokens`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (JWT). To create a new JWT, we can use the npm package <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noopener noreferrer"><code>jsonwebtoken</code>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. To install it, run the command <code>npm install jsonwebtoken</code> in the root folder of your backend application. Then you can use it like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> jwtSecret <span class="token operator">=</span> <span class="token string">&quot;some_random_characters&quot;</span>

<span class="token keyword">const</span> dataToPutInTheToken <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// AKA &quot;claims&quot; and &quot;payload&quot;.</span>
    country<span class="token operator">:</span> <span class="token string">&quot;Sweden&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> accessToken <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>dataToPutInTheToken<span class="token punctuation">,</span> jwtSecret<span class="token punctuation">)</span> <span class="token comment">// &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>In the access token you probably want to put something that identifies the user, such as the user&#39;s account id, and then send it back to the client (see the specification for the details).</p><p>When you&#39;re done you can use Postman to test if you can login and get back an access token. If you do, you can then use <a href="https://jwt.io/#debugger-io" target="_blank" rel="noopener noreferrer">the debugger at jwt.io`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to verify that the token contains expected data.</p><h3 id="receiving-and-extracting-tokens" tabindex="-1"><a class="header-anchor" href="#receiving-and-extracting-tokens" aria-hidden="true">#</a> Receiving and extracting tokens</h3><p>When a client in the future sends requests to the backend and need to prove that she&#39;s the owner of a specific account, she can pass the access token in the <code>Authorization</code> header, e.g. <code>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs</code>. When the backend receives that request it needs to extract the access token from this header and then extract the data from the token that you put inside of it before. You can do that like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> jwtSecret <span class="token operator">=</span> <span class="token string">&quot;some_random_characters&quot;</span> <span class="token comment">// Same secret as before.</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/some-protected-resource&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token keyword">let</span> dataInToken <span class="token operator">=</span> <span class="token keyword">null</span>
    
    <span class="token keyword">try</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> authorizationHeader <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span> <span class="token comment">// E.g. &quot;Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs&quot;</span>
        <span class="token keyword">const</span> accessToken <span class="token operator">=</span> authorizationHeader<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token string">&quot;Bearer &quot;</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// E.g. &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs&quot;</span>
        dataInToken <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">,</span> jwtSecret<span class="token punctuation">)</span> <span class="token comment">// E.g. {country: &quot;Sweden&quot;}</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// Access token not present or invalid.</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>dataInToken<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// We received a valid access token :D</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">// We didn&#39;t receive an access token or the received access token was invalid :(</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>After we have extracted the data from the token we can figure out to which account the user logged in to before, and then figure out if the user is authorized to make the request or not.</p><p>When you have added authorization checks to your code you can use Postman to send requests with the Authorization header containing the access token and see if it works as it should. You can also use <a href="https://jwt.io/#debugger-io" target="_blank" rel="noopener noreferrer">the debugger at jwt.io`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to create invalid access tokens and see if your backend properly detects them as invalid.</p><div class="custom-container tip"><p class="custom-container-title">Avoiding copy-pasting code</p><p>Extracting the access token from the <code>Authorization</code> header like that and then extract the data from the access token is something you want to do in many of the requests your backend receives, so instead of copy-pasting all of this code it is better to put it in a function and then call the function when you need to extract it (or even better: use a middleware function).</p></div><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>One should rather use <code>jwt.sign()</code> and <code>jwt.verify()</code> asynchronously by providing a callback function, but to simplify we used them synchronously instead (they send back a return value). By using them synchronously they are blocking, so concurrent incoming HTTP requests are queued instead of handled immediately (the calls to <code>jwt.sign()</code> and <code>jwt.verify()</code> takes many milliseconds to execute). The call to these functions with a callback function are not blocking (the long running operations are executed in the background/another thread), and therefor better to use.</p></div><h3 id="adding-openid-connect" tabindex="-1"><a class="header-anchor" href="#adding-openid-connect" aria-hidden="true">#</a> Adding OpenID Connect</h3><p>When a client logs in and receives back an access token, the client does probably also want to know to which account the user logged into, so the client knows the username of the account, the id of the account, etc. For that we can use <a href="https://openid.net/connect/" target="_blank" rel="noopener noreferrer">OpenID Connect`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. It specifies that when the client logs in, we do not only send back an access token, but also an id token that contains information about who the user is. Unlike access tokens, id tokens have to be implemented as JWT.</p><p>You get to decide what you want to put in your id token, but follow the specification as much as possible.</p><p>When you&#39;re done you can use Postman and see if you also get back an id token when you login. If you do you can use <a href="https://jwt.io/#debugger-io" target="_blank" rel="noopener noreferrer">the debugger at jwt.io`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to verify that the token contains expected information.</p><h3 id="hashing-passwords" tabindex="-1"><a class="header-anchor" href="#hashing-passwords" aria-hidden="true">#</a> Hashing passwords</h3><p>Storing passwords in plain text is a bad idea. Users often use the same password on different platforms, and if their passwords on our platform are leaked (by accident or by a hacker that has manage to hack our platform), anyone can login on their accounts on the other platforms they are using. Quite bad!</p><p>Instead, passwords should be hashed, and we should only store the hash value of their passwords. There exists many different hashing algorithms, but one of the best ones to use for hashing passwords is <a href="https://en.wikipedia.org/wiki/Bcrypt" target="_blank" rel="noopener noreferrer">bcrypt`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Many hashing algorithms are designed to be fast, so the hash value quickly can be computed, but that is not suitable for passwords, because then hackers can use <a href="https://en.wikipedia.org/wiki/Brute-force_attack" target="_blank" rel="noopener noreferrer">brute-force`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to figure out what the original password was. bcrypt on the other hand has intentionally been designed to be slow to prevent this, and you can control how slow it should be (so you can make it even slower in the future when computers have become faster).</p><p>To use bcrypt in Node.js you can use the npm package <a href="https://www.npmjs.com/package/bcryptjs" target="_blank" rel="noopener noreferrer">bcryptjs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>:</p><ol><li>Download the npm package to your backend application: <ul><li>In the root folder of your backend application, run the command <code>npm install bcryptjs</code>.</li></ul></li><li>When creating a new account, hash the user&#39;s password using:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> bcrypt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;bcryptjs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> hashingRounds <span class="token operator">=</span> <span class="token number">8</span> <span class="token comment">// How slow it should be (the higher number the slower).</span>

<span class="token keyword">const</span> passwordToHash <span class="token operator">=</span> <span class="token string">&quot;abc123&quot;</span>

<span class="token keyword">const</span> hashValue <span class="token operator">=</span> bcrypt<span class="token punctuation">.</span><span class="token function">hashSync</span><span class="token punctuation">(</span>passwordToHash<span class="token punctuation">,</span> hashingRounds<span class="token punctuation">)</span> <span class="token comment">// &quot;\$2y\$08\$qc1V89V0GAstCI/NAMM4HO4DcP9Jwgk/h/WX2JsgvTIZqXRw6vxAK&quot;</span>

<span class="token comment">// Store hashValue with the user&#39;s account in the database instead of passwordToHash.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li>When the user logs in, fetch the user&#39;s <code>hashValue</code> from the database and see if the provided password matches that one:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> bcrypt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;bcryptjs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> usersEnteredPassword <span class="token operator">=</span> <span class="token string">&quot;abc123&quot;</span>
<span class="token keyword">const</span> storedHashValue <span class="token operator">=</span> <span class="token string">&quot;\$2y\$08\$qc1V89V0GAstCI/NAMM4HO4DcP9Jwgk/h/WX2JsgvTIZqXRw6vxAK&quot;</span> <span class="token comment">// Fetched from database.</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>bcrypt<span class="token punctuation">.</span><span class="token function">compareSync</span><span class="token punctuation">(</span>usersEnteredPassword<span class="token punctuation">,</span> storedHashValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Correct password.</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// Wrong password.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>When you&#39;re done, use Postman to create some new accounts and then try to login to these.</p><div class="custom-container warning"><p class="custom-container-title">Remember</p><p>The old accounts in your database contains tha password in plain text, so you should not be able to login to them anymore. Feel free to delete these.</p></div><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>To simplify, many things you should think of for a real platform has been ignored in the instructions above, but here are short descriptions of these things for the curious ones:</p><p>One should rather use the npm package <code>bcrypt</code> instead of <code>bcryptjs</code>. The JavaScript you write to use them is the same, but <code>bcryptjs</code> has been implemented in JavaScript, making it 30% slower than <code>bcrypt</code>, which is implemented in C, so it is better to use <code>bcrypt</code>. But <a href="https://github.com/kelektiv/node.bcrypt.js#dependencies" target="_blank" rel="noopener noreferrer"><code>bcrypt</code> has some dependencies`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> making it a bit harder to use.</p><p>One should rather use the asynchronous functions <code>hash()</code> and <code>compare()</code> instead of the synchronous <code>hashSync()</code> and <code>compareSync()</code>. The synchronous functions are easier to use (return values instead of callback functions), but they are blocking, so concurrent incoming HTTP requests are queued instead of handled immediately. The asynchronous functions compute the hash values in the background/in another thread, so they don&#39;t have this shortage.</p><p>You should most likely not use <code>8</code> as the number of hashing rounds (too low), but <a href="https://security.stackexchange.com/a/3993/70743" target="_blank" rel="noopener noreferrer">it is a bit complicated to find out the optimal number of rounds to use`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, and to do that you also need to know which server your backend will be running on in the end, and since deploying a backend on a server is not part of this course, we don&#39;t have all the details to compute it.</p></div><h2 id="part-8-adding-login-to-the-frontend" tabindex="-1"><a class="header-anchor" href="#part-8-adding-login-to-the-frontend" aria-hidden="true">#</a> Part 8: Adding Login to the Frontend</h2><p>Now that the backend have login functionality through access tokens and id tokens, use this login functionality in the frontend application. When you&#39;re done, users should only be able to do what they should be able to. For example, a user should not be able to delete another user&#39;s account, or similar.</p><p>You are recommended to keep track of wether the user is logged in or not the same way as you did in the lab, i.e. in add a <code>user</code> object to <code>App.vue</code> and pass this as a props to your other Vue components.</p><p>When the user successfully logs in you get back an id token with information about the user (it&#39;s id, username, etc.). You need to open up this JWT and read out the information from it. You can&#39;t do that with the npm package <code>jsonwebtoken</code> (that you used in your backend), because it only works in Node.js, and not in web browsers. Instead, you can use the npm package <code>jwt-decode</code>:</p><ol><li>In the root folder of your frontend application, run the command <code>npm install jwt-decode</code>.</li><li>To read out the data from the id token, use the function this npm package consists of:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> jwtDecode <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jwt-decode&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> idToken <span class="token operator">=</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInByZWZlcnJlZF91c2VybmFtZSI6IkFsaWNlIn0.3Xp7iQkttgTE6hpuT28LFdZ7EYWHlPndqdaWoIzTr9A&quot;</span>

<span class="token keyword">const</span> dataInIdToken <span class="token operator">=</span> <span class="token function">jwtDecode</span><span class="token punctuation">(</span>idToken<span class="token punctuation">)</span> <span class="token comment">// E.g. {sub: 4, preferred_username: &quot;Alice&quot;} </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="part-9-presentation" tabindex="-1"><a class="header-anchor" href="#part-9-presentation" aria-hidden="true">#</a> Part 9: Presentation</h2><p>Present your platform to the rest of your class using a projector. The reason for the presentation is two-folded:</p><ul><li>You get some practice in presenting your work, which is a very important skill in your future professional career.</li><li>You get to see other platforms that you should be able to implement yourself.</li></ul><p>At the presentation you will simply tell the audience what users can do on your platform and why someone would like to do that, and then show how users can use the platform through the frontend application. You should not show any code nor explain any implementation details; just give a practical demonstration of how users will use the platform. The best way to do that is by having one of you speaking and telling the other one what to do (e.g. <em>Create a new account</em>), and then the other shows how to do that.</p><p>To be allowed to present your work your you must at least be done with Part 5.</p><p>You may use at most 10 minutes for your presentation. If you need more than this to show all features, then skip some of them. If your presentation takes just 3 minutes, that could be OK as well. Don&#39;t start talking about irrelevant things just to make the presentation longer.</p><p>If you can&#39;t present your work on your own laptop, email the course coordinator and he will help you.</p><p>There are 3 different sessions for the demonstration, and you need to present your platform one of them. Select which one by <a href="https://pingpong.hj.se/courseId/21410/projectGroupsList.do" target="_blank" rel="noopener noreferrer">joining the corresponding project group on Ping Pong`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (first come, first served).</p><p>Your presentation will not be graded; consider it as (mandatory) practice.</p><h2 id="part-10-grade-4-and-5" tabindex="-1"><a class="header-anchor" href="#part-10-grade-4-and-5" aria-hidden="true">#</a> Part 10: Grade 4 and 5</h2><p>Be sure to read through `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/project-grading-guidelines/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Project Grading Guidelines`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Project Grading Guidelines")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` to see that you follow the guidelines for grade you&#39;re aiming for. To be able get grade 4 and 5 you also need to implement the extra functionality described next.</p><h3 id="sdk-required-for-grade-4" tabindex="-1"><a class="header-anchor" href="#sdk-required-for-grade-4" aria-hidden="true">#</a> SDK (required for grade 4)</h3><p>Create an SDK other programmers can use to communicate with your backend from their client-side JavaScript code. Then also use it in your own frontend.</p><p>Also update the report to reflect this.</p><h3 id="supporting-multiple-data-formats-required-for-grade-4" tabindex="-1"><a class="header-anchor" href="#supporting-multiple-data-formats-required-for-grade-4" aria-hidden="true">#</a> Supporting Multiple Data Formats (required for grade 4)</h3><p>Add support for another data format in addition to JSON (+ www-form-urlencoded for logging in). This should work in both requests and responses, so when you receive a request you need to look at the <code>Content-Type</code> header to figure out which format the body in the request is written in, and you also need to look at the <code>Accept</code> header to figure out in which format you should send back the body in the response in.</p><p>Example of data formats you can support:</p><ul><li>XML</li><li>YAML</li></ul><p>Try to <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">find a suitable npm package`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> doing most of the work for you.</p><p>Also update your report to reflect this.</p><h4 id="guidelines-parsing-the-body-of-incoming-http-request" tabindex="-1"><a class="header-anchor" href="#guidelines-parsing-the-body-of-incoming-http-request" aria-hidden="true">#</a> Guidelines parsing the body of incoming HTTP request</h4><p>Each time you receive an HTTP request with a body, check the <code>Content-Type</code> of the incoming HTTP request. If the content type is <code>application/yaml</code>, then the resource in the body of the request has been written in YAML format. Then you need to read the body of the quest into a string, and then parse it as YAML code, then you have your resource as a JavaScript object. How to read the body into a strings is described in the lecture `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/web-applications-in-node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Web Applications in Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Web Applications in Node.js")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`. Find an npm package you can use to do the parsing of YAML code for you.</p><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>You need to do this for all incoming HTTP requests with a body, so the best way to implement it is as a middleware function. In your middleware function, after you have obtained the resource from the body as a JavaScript object, assign it to <code>request.body</code> so your ordinary request handler functions in <code>app.post(...)</code> and <code>app.put(...)</code> can obtain the resource through <code>request.body</code>.</p></div><h4 id="sending-back-responses-in-correct-data-format" tabindex="-1"><a class="header-anchor" href="#sending-back-responses-in-correct-data-format" aria-hidden="true">#</a> Sending back responses in correct data format</h4><p>You can&#39;t always call <code>response.json(theResource)</code> to send back the resource. You should only use <code>response.json(...)</code> if the <code>Accept</code> header in the request is <code>application/json</code>. If the <code>Accept</code> header instead is <code>application/yaml</code>, you should send it back in YAML format. To convert the resource to a string with YAML code, use a suitable npm package. To send back the string with the YAML code, use <code>response.end(&quot;THE YAML CODE&quot;)</code>.</p><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>You need to do this for all outgoing HTTP responses with a body, so the best way to implement it is as a function doing something like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token comment">/* Accept header in request is application/json */</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Send back the resource in JSON format.</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token comment">/* Accept header in request is application/yaml */</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Send back the resource in YAML format.</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// Send back the resource in your chosen default format.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><h3 id="third-party-authentication-required-for-grade-5" tabindex="-1"><a class="header-anchor" href="#third-party-authentication-required-for-grade-5" aria-hidden="true">#</a> Third-Party Authentication (required for grade 5)</h3><p>Add third-party authentication to your application so users can login on your platform with their Google account (or whichever third-party you choose to use) instead of using a username and password. You need to implement this in your backend application and then use it in your frontend application as well.</p><p>Also update your report to reflect this.</p><h2 id="part-11-final-submission" tabindex="-1"><a class="header-anchor" href="#part-11-final-submission" aria-hidden="true">#</a> Part 11: Final submission</h2><p>Submit your project work for grading by submitting <a href="https://pingpong.hj.se/courseId/21410/content.do?id=16690476" target="_blank" rel="noopener noreferrer">the Ping Pong assignment Project Work - Final Submission`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. The source code for your backend and frontend should be submitted as two separate ZIP files, and they should not contain the <code>node_modules</code> folder (you need to manually delete it). When those ZIP files have been unzipped on the examiner&#39;s own computer, it is very important that the applications can be started and are fully functional just by running the following two commands (for each of the applications):</p><ol><li><code>npm install</code></li><li><code>node app.js</code> or <code>npm run serve</code> (or whatever)</li></ol><p>If this does not work you need to submit your work again at the next examination occasion, so double check that this work yourself before you submit your work!</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/project-instructions.html.vue?vue&type=template&id=0073f4d4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/project-instructions.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const project_instructions_html = (__exports__);

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

/***/ 7919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-815f5422",
  "path": "/courses/client-server-communication/project-instructions.html",
  "title": "Project Instructions",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Part 1: Find a partner",
      "slug": "part-1-find-a-partner",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 2: Platform idea",
      "slug": "part-2-platform-idea",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 3: Designing the REST API",
      "slug": "part-3-designing-the-rest-api",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 4: Implementing the REST API in Express",
      "slug": "part-4-implementing-the-rest-api-in-express",
      "children": [
        {
          "level": 3,
          "title": "Getting started with Express",
          "slug": "getting-started-with-express",
          "children": []
        },
        {
          "level": 3,
          "title": "Getting started with SQLite",
          "slug": "getting-started-with-sqlite",
          "children": []
        },
        {
          "level": 3,
          "title": "Fetching all accounts",
          "slug": "fetching-all-accounts",
          "children": []
        },
        {
          "level": 3,
          "title": "Fetching a single account",
          "slug": "fetching-a-single-account",
          "children": []
        },
        {
          "level": 3,
          "title": "Creating accounts",
          "slug": "creating-accounts",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 5: Implementing the Frontend",
      "slug": "part-5-implementing-the-frontend",
      "children": [
        {
          "level": 3,
          "title": "Enabling CORS on the backend",
          "slug": "enabling-cors-on-the-backend",
          "children": []
        },
        {
          "level": 3,
          "title": "Sending HTTP requests from the frontend",
          "slug": "sending-http-requests-from-the-frontend",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 6: Adding Login to the REST API",
      "slug": "part-6-adding-login-to-the-rest-api",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 7: Implementing Login in Express",
      "slug": "part-7-implementing-login-in-express",
      "children": [
        {
          "level": 3,
          "title": "Adding login/Creating tokens",
          "slug": "adding-login-creating-tokens",
          "children": []
        },
        {
          "level": 3,
          "title": "Receiving and extracting tokens",
          "slug": "receiving-and-extracting-tokens",
          "children": []
        },
        {
          "level": 3,
          "title": "Adding OpenID Connect",
          "slug": "adding-openid-connect",
          "children": []
        },
        {
          "level": 3,
          "title": "Hashing passwords",
          "slug": "hashing-passwords",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 8: Adding Login to the Frontend",
      "slug": "part-8-adding-login-to-the-frontend",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 9: Presentation",
      "slug": "part-9-presentation",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 10: Grade 4 and 5",
      "slug": "part-10-grade-4-and-5",
      "children": [
        {
          "level": 3,
          "title": "SDK (required for grade 4)",
          "slug": "sdk-required-for-grade-4",
          "children": []
        },
        {
          "level": 3,
          "title": "Supporting Multiple Data Formats (required for grade 4)",
          "slug": "supporting-multiple-data-formats-required-for-grade-4",
          "children": []
        },
        {
          "level": 3,
          "title": "Third-Party Authentication (required for grade 5)",
          "slug": "third-party-authentication-required-for-grade-5",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 11: Final submission",
      "slug": "part-11-final-submission",
      "children": []
    }
  ],
  "filePathRelative": "courses/client-server-communication/project-instructions.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=5482.app.js.map