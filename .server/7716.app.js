"use strict";
exports.id = 7716;
exports.ids = [7716];
exports.modules = {

/***/ 3874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_work_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-fundamentals/project-work.html.vue?vue&type=template&id=76a26d81



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_figureNumber = (0,external_vue_.resolveComponent)("figureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="project-work" tabindex="-1"><a class="header-anchor" href="#project-work" aria-hidden="true">#</a> Project Work</h1><p>This page contains instructions for the project work.</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>As project work you should (individually) create a website <strong>one</strong> user can login to and administrate. We recommend you to create a personal website you can login to and write information about yourself. Having such a website can be very beneficial for a programmer applying for a job. If you prefer you can create a website for a small company with a single login account that can be used to update what products the company have in store, or similar.</p><p>You have a lot of freedom when it comes to the design and functionality of the website, but the following three requirements exist:</p><ul><li>There should exist basic pages with trivial information, including: <ul><li>A home/start page.</li><li>An about page.</li><li>A contact page.</li></ul></li><li>There should exist at least three different type of resources on the website (stored in a relational database).</li><li>Depending on what makes most sense, <em>only you</em> or <em>anyone</em> should be able to apply <abbr title="Create/Retrieve/Update/Delete">CRUD</abbr> operations on the resources through the website.</li></ul><p>To be able to distinguish <em>only you</em> from <em>anyone</em>, you also need to have login-functionality for a single account (i.e. a hard-coded username &amp; password).</p><p>Use whichever type of resources you want. Some suggestions are:</p><ul><li>Blogposts (only you can create/update/delete entries, anyone can retrieve entries).</li><li>Software projects for a portfolio (only you can create/update/delete entries, anyone can retrieve entries).</li><li>Guestbook posts (only you can update/delete entries, anyone can retrieve/create entries).</li><li>FAQ entries (only you can update/delete entries, anyone can retrieve/create entries).</li></ul><p>Implement the website using technologies taught in this course. It is OK to use similar technologies and not the specific ones taught in the course. For example, instead of using the web framework <em>Express</em> (taught in this course), you can use the web framework <a href="https://koajs.com/" target="_blank" rel="noopener noreferrer">Koa`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. It&#39;s probably a good idea to email the course coordinator and ask if the technologies you want to use is OK or not if you don&#39;t stick to using the ones taught in the course.</p><div class="custom-container danger"><p class="custom-container-title">Don&#39;t use client-side JavaScript!</p><p>Avoid using client-side JavaScript. If you insist on using client-side JavaScript, it is OK, but:</p><ul><li>Good client-side JavaScript code will not improve your grade (this course is not about learning client-side JavaScript).</li><li>Bad client-side JavaScript code will lower your grade (this course is about implementing good websites).</li><li>Your <strong>entire</strong> website must work for users who have JavaScript disabled in their web browser (use client-side JavaScript only to enhance the browsing experience for the users who have JavaScript enabled in their web browsers).</li></ul></div><p>In addition to implementing the website, you should also write a report describing the implementation of the website. The file <a href="files/project-report-template.docx">project-report-template.docx</a> contains a template with further instructions on this. Your report will be a living document throughout the course (meaning that you will write it as the course run and continuously improve it).</p><p>The page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-grading-guidelines/" }, {
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
  _push(` contains guidelines for how your work will be graded. You are strongly recommended to read through it every now and then.</p><p>To help you with your project work, we have divided it into smaller parts that should be completed in order. The rest of this page contains descriptions of these smaller parts. Before you start working on the first part, you are strongly recommended to read through all the parts, which will give you a good overview of the work that lies ahead.</p><p>Good luck!</p><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing required software</h2><p><strong>If you work on the computers in E2404, E2432 or E2433</strong>, all required software should already be installed for you, so no need to install anything on your own.</p><p><strong>If you work on a school computer in any other room</strong>, you&#39;ll most likely need to manually install the required software through the <em>Software Center</em> application.</p><p><strong>If you work on your own private computer</strong>, you&#39;ll need to download and install all required software yourself. In this course, we only use free software available for both Windows, Mac and Linux.</p><p>The required software is:</p><ul><li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ol><li>Use the <abbr title="Long-Term Support">LTS</abbr> version.</li><li>In the installation process, make sure the following features are installed (they are checked by default, so simply don&#39;t uncheck them!): <ul><li>Node.js runtime</li><li>npm package manager</li><li>Add to PATH</li></ul></li><li>To verify that Node.js has been successfully installed, run the command <code>node -v</code> in a shell (e.g. Windows PowerShell on Windows (you might need to restart your computer first)). If it has been installed successfully, you should see the version of Node.js that was installed, something like <code>v11.6.0</code>.</li></ol></li><li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>This one is installed along with Node.js, so you don&#39;t need to install it separately. However, you might want to update it to the latest version (not required in this course): <ul><li><a href="https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm" target="_blank" rel="noopener noreferrer">Update npm instructions`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li><li>To verify that npm has been successfully installed, run the command <code>npm -v</code> in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of npm that is installed, something like <code>6.9.0</code>.</li></ul></li></ul><p>The following software tools are not required (use whichever tools you want), but recommended:</p><ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>IDE with good support for writing, running and debugging Node.js and JavaScript code.</li></ul></li><li><a href="https://sqlitebrowser.org/" target="_blank" rel="noopener noreferrer">DB Browser for SQLite`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Database management tool you can use to visualize/debug the database. An alternative is to install and use <a href="https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite" target="_blank" rel="noopener noreferrer">the SQLite extension for Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li></ul></li></ul><h2 id="part-1-specifying-functionality-graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#part-1-specifying-functionality-graphical-user-interface" aria-hidden="true">#</a> Part 1: Specifying functionality &amp; graphical user interface</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
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
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/report-writing/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Report Writing`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Report Writing")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>Take `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/git/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`the mini-course in Git`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("the mini-course in Git")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`. <ul><li>You don&#39;t have to use Git in this course, but you are strongly recommended to make it a habit to use it for all your programming related tasks (you will use it a lot as a professional programmer, and you will have very good use of it in other courses, so the sooner you learn it, the better).</li></ul></li></ul><hr><p>Your first task is to specify:</p><ul><li>The functionality of the website (which different type of resources it consists of and what you/anyone can do with them).</li><li>What the graphical user interface (GUI) should look like.</li></ul><p>Your decisions should be described in the project report, so in this part of the project work, you will not do any programming, but only work on your report. A good way to describe the functionalities is by sketching what the GUI will look like in the end. Then the reader can easily see all the functionality just by looking at pictures. An example of that is shown in <a href="files/project-report-template.docx">project-report-template.docx</a>.</p><p>Designing a website with a user-friendly GUI is no simple task. Therefore, designers have created CSS frameworks that makes it easy for people who are not good at design to create GUIs that are user-friendly. These frameworks primarily consist of components one can use to implement the GUI (such as one component representing a form, another one representing a menu, a third one representing an article, etc.). Since you have to use a CSS framework in your project work, you are recommended to now select which CSS framework you are going to use, and then design your website using the available components in that framework.</p><p>Use whichever CSS framework you want, but we recommend you to use <a href="https://picturepan2.github.io/spectre/index.html" target="_blank" rel="noopener noreferrer">Spectre.css`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. It is a small and simple framework, which makes it easy to learn and use. It comes with components such as:</p><ul><li><a href="https://picturepan2.github.io/spectre/layout/navbar.html" target="_blank" rel="noopener noreferrer">Navbar`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - A horizontal menu suitable to have at the top of the page as the main menu.</li><li><a href="https://picturepan2.github.io/spectre/components/nav.html" target="_blank" rel="noopener noreferrer">Nav`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - A vertical menu suitable to have on one of the sides of the page as the main/sub menu.</li><li><a href="https://picturepan2.github.io/spectre/components/pagination.html" target="_blank" rel="noopener noreferrer">Pagination`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - A collection of links suitable to use when listing resources spread over multiple pages.</li><li><a href="https://picturepan2.github.io/spectre/components/empty.html" target="_blank" rel="noopener noreferrer">Empty states`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - A component suitable to use on a page that should display a collection of resources but none exist yet.</li><li><a href="https://picturepan2.github.io/spectre/components/modals.html" target="_blank" rel="noopener noreferrer">Modals`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - A dialog appearing in front of the page. <ul><li><strong>Note</strong>: You can make modals appear without using client-side JavaScript. When clicking on a &quot;Show modal&quot; button (a link), send back HTML code containing and showing the modal.</li></ul></li><li><a href="https://picturepan2.github.io/spectre/components/tabs.html" target="_blank" rel="noopener noreferrer">Tabs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - A collection of views the user easily can switch between.</li></ul><p>We recommend you to use a simple layout. This is no design course, so do not waste too much time on the design. If you turn out to have time left at the end of the course, you can use that time to improve the design of the website.</p><p>Feel free to show your report to one of the teachers at the lab sessions to get some feedback on your work. Don&#39;t expect the teacher to read your report, only to look at the figures in the report, but that should be enough to give you valuable feedback.</p><h2 id="part-2-prototyping-the-graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#part-2-prototyping-the-graphical-user-interface" aria-hidden="true">#</a> Part 2: Prototyping the graphical user interface</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Complete the following optional exercises: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/exercises/#exercise-1-html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Exercise 1: HTML`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Exercise 1: HTML")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/exercises/#exercise-2-css" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Exercise 2: CSS`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Exercise 2: CSS")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/character-encodings/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Character Encodings`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Character Encodings")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/html/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`HTML`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("HTML")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/css/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`CSS`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("CSS")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/html-and-css-frameworks/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`HTML &amp; CSS Frameworks`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("HTML & CSS Frameworks")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>Instead of having <em>implement the web application</em> as the goal you immediately try to achieve, we recommend you to break it down into multiple smaller goals, and then try to achieve all these sub-goals, one at a time, and when all these sub-goals have been achieved, your main goal (<em>implement the web application</em>) has been achieved too (<a href="https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm" target="_blank" rel="noopener noreferrer">Divide and Conquer`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>!).</p><p>We recommend that your first sub-goal is to implement the graphical user interface in static HTML and CSS files, i.e. a prototype. The prototype will be a static website that will look like your final website, but submitting forms won&#39;t work; only viewing resources by clicking on links will work.</p><div class="custom-container tip"><p class="custom-container-title">Prototype means shortcuts 😃</p><p>Implementing a prototype means it&#39;s OK to take various shortcuts. For example, if you have a blog on your website and you in the end want to have one page that displays all blog posts, and clicking on one of them takes you to a new page that displays all info about the blog post that was clicked, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_figureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Fully functional website." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart LR\n\tsubgraph blogposts[Page /blogposts]\n\t\tlink1[Blogpost 1]\n\t\tlink2[Blogpost 2]\n\t\tlink3[Blogpost 3]\n\tend\n\tsubgraph blogpost1[Page /blogposts/1]\n\t\tcontent1[Vacation...]\n\tend\n\tsubgraph blogpost2[Page /blogposts/2]\n\t\tcontent2[Christmas...]\n\tend\n\tsubgraph blogpost3[Page /blogposts/3]\n\t\tcontent3[Birthday...]\n\tend\n\tlink1 -- Click --> blogpost1\n\tlink2 -- Click --> blogpost2\n\tlink3 -- Click --> blogpost3\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart LR\n\tsubgraph blogposts[Page /blogposts]\n\t\tlink1[Blogpost 1]\n\t\tlink2[Blogpost 2]\n\t\tlink3[Blogpost 3]\n\tend\n\tsubgraph blogpost1[Page /blogposts/1]\n\t\tcontent1[Vacation...]\n\tend\n\tsubgraph blogpost2[Page /blogposts/2]\n\t\tcontent2[Christmas...]\n\tend\n\tsubgraph blogpost3[Page /blogposts/3]\n\t\tcontent3[Birthday...]\n\tend\n\tlink1 -- Click --> blogpost1\n\tlink2 -- Click --> blogpost2\n\tlink3 -- Click --> blogpost3\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Then in the prototype, you can hardcode three resources, and no matter which one that is clicked, the user comes to a page showing all info about the second resource, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Prototype of website." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart LR\n\tsubgraph blogposts[Page blogposts.html]\n\t\tlink1[Blogpost 1]\n\t\tlink2[Blogpost 2]\n\t\tlink3[Blogpost 3]\n\tend\n\tsubgraph blogpost2[Page blogpost.html]\n\t\tcontent2[Christmas...]\n\tend\n\tlink1 -- Click --> blogpost2\n\tlink2 -- Click --> blogpost2\n\tlink3 -- Click --> blogpost2\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart LR\n\tsubgraph blogposts[Page blogposts.html]\n\t\tlink1[Blogpost 1]\n\t\tlink2[Blogpost 2]\n\t\tlink3[Blogpost 3]\n\tend\n\tsubgraph blogpost2[Page blogpost.html]\n\t\tcontent2[Christmas...]\n\tend\n\tlink1 -- Click --> blogpost2\n\tlink2 -- Click --> blogpost2\n\tlink3 -- Click --> blogpost2\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>And in the end you might want some links only to be shown when the user is logged in, but for the prototype it&#39;s OK to always display all links.</p></div><p>When you are done with your prototype, feel free to show it to one of the teachers at the lab sessions to get some feedback on your work.</p><h2 id="part-3-starting-to-implement-the-web-application" tabindex="-1"><a class="header-anchor" href="#part-3-starting-to-implement-the-web-application" aria-hidden="true">#</a> Part 3: Starting to implement the web application</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Complete the following optional exercises: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/exercises/#exercise-3-js" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Exercise 3: JS`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Exercise 3: JS")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/using-shells/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Using Shells`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Using Shells")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/javascript-basics/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`JavaScript Basics`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("JavaScript Basics")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/asynchronous-programming-in-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Asynchronous Programming in JavaScript`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Asynchronous Programming in JavaScript")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
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
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/handlebars/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Handlebars`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Handlebars")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/web-applications-in-express/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Web Applications in Express`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Web Applications in Express")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>The next sub-goal we recommend you to have is to implement the graphical user interface of the website in Node.js. Ideally, the website&#39;s recourses are stored in a database, but to get a gentler start, you can instead store the resources in a file (i.e. use &quot;dummy data&quot;) for now. To start, run the following commands in a shell/console/terminal (such as Windows PowerShell in Windows):</p><ol><li><code>mkdir my-website</code> - Creates a new folder named <code>my-website</code> (do not call the folder <code>my-website</code>; use a proper name).</li><li><code>cd my-website</code> - Changes the current working directory to <code>my-website</code>.</li><li><code>npm init --yes</code> - Creates the <code>package.json</code> file, which keep tracks of which npm packages you have installed.</li><li><code>npm install express</code> - Installs the npm package <code>express</code>.</li><li><code>npm install express-handlebars</code> - Installs the npm package <code>express-handlebars</code>.</li></ol><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>When you version control a project, do not store the source code for the dependencies in your own repository. For Node.js applications, the <code>node_modules</code> folder should not be committed to your repository; it&#39;s enough to commit <code>package.json</code> and <code>package-lock.json</code> to your repository. These files contain a list of all your dependencies (and the specific versions of them), and others that clones your project can run the command <code>npm install</code> to install these dependencies in their own <code>node_modules</code> folder.</p></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>The instructions in this document is for the template syntax language Handlebars. If you prefer, feel free to use another template syntax language. You find a list of template engines you can use at <a href="https://expressjs.com/en/resources/template-engines.html" target="_blank" rel="noopener noreferrer">https://github.com/expressjs/express/wiki`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><p>Then create the following files with their corresponding content:</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "dummy-data.js" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }>exports<span class="token punctuation"${
                _scopeId
              }>.</span>humans <span class="token operator"${
                _scopeId
              }>=</span> <span class="token punctuation"${
                _scopeId
              }>[</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  id<span class="token operator"${
                _scopeId
              }>:</span> <span class="token number"${
                _scopeId
              }>0</span><span class="token punctuation"${
                _scopeId
              }>,</span>
  name<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;Alice&quot;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
  id<span class="token operator"${
                _scopeId
              }>:</span> <span class="token number"${
                _scopeId
              }>1</span><span class="token punctuation"${
                _scopeId
              }>,</span>
  name<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;Bob&quot;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>]</span>

exports<span class="token punctuation"${
                _scopeId
              }>.</span>pets <span class="token operator"${
                _scopeId
              }>=</span> <span class="token punctuation"${
                _scopeId
              }>[</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  id<span class="token operator"${
                _scopeId
              }>:</span> <span class="token number"${
                _scopeId
              }>0</span><span class="token punctuation"${
                _scopeId
              }>,</span>
  humanId<span class="token operator"${
                _scopeId
              }>:</span> <span class="token number"${
                _scopeId
              }>1</span><span class="token punctuation"${
                _scopeId
              }>,</span>
  name<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&quot;Catty&quot;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>]</span>
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
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createTextVNode)("exports"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("humans "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  id"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n  name"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  id"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n  name"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Bob\""),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createTextVNode)("\n\nexports"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("pets "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  id"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n  humanId"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n  name"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Catty\""),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "app.js" }, {
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
              }>const</span> dummyData <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;./dummy-data&#39;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
<span class="token keyword"${
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
              }>const</span> expressHandlebars <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;express-handlebars&#39;</span><span class="token punctuation"${
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

app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>engine</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;hbs&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token function"${
                _scopeId
              }>expressHandlebars</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  defaultLayout<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;main.hbs&#39;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>)</span>

app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;/&#39;</span><span class="token punctuation"${
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
  <span class="token keyword"${
                _scopeId
              }>const</span> model <span class="token operator"${
                _scopeId
              }>=</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    humans<span class="token operator"${
                _scopeId
              }>:</span> dummyData<span class="token punctuation"${
                _scopeId
              }>.</span>humans
  <span class="token punctuation"${
                _scopeId
              }>}</span>
  response<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>render</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;show-all-humans.hbs&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> model<span class="token punctuation"${
                _scopeId
              }>)</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>

app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>listen</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token number"${
                _scopeId
              }>8080</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" dummyData "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'./dummy-data'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
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
                      (0,external_vue_.createTextVNode)(" expressHandlebars "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'express-handlebars'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" app "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "engine"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"hbs\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "expressHandlebars"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  defaultLayout"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'main.hbs'"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'/'"),
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
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" model "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    humans"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" dummyData"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("humans\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n  response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "render"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"show-all-humans.hbs\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" model"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "views/show-all-humans.hbs" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-handlebars ext-handlebars line-numbers-mode"${
                _scopeId
              }><pre class="language-handlebars"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>h2</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>All Humans<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>h2</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token handlebars language-handlebars"${
                _scopeId
              }><span class="token delimiter punctuation"${
                _scopeId
              }>{{</span><span class="token block keyword"${
                _scopeId
              }>#if</span> <span class="token variable"${
                _scopeId
              }>humans</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token variable"${
                _scopeId
              }>length</span><span class="token delimiter punctuation"${
                _scopeId
              }>}}</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>ul</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token handlebars language-handlebars"${
                _scopeId
              }><span class="token delimiter punctuation"${
                _scopeId
              }>{{</span><span class="token block keyword"${
                _scopeId
              }>#each</span> <span class="token variable"${
                _scopeId
              }>humans</span><span class="token delimiter punctuation"${
                _scopeId
              }>}}</span></span>
      <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>li</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span><span class="token handlebars language-handlebars"${
                _scopeId
              }><span class="token delimiter punctuation"${
                _scopeId
              }>{{</span><span class="token variable"${
                _scopeId
              }>name</span><span class="token delimiter punctuation"${
                _scopeId
              }>}}</span></span><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>li</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token handlebars language-handlebars"${
                _scopeId
              }><span class="token delimiter punctuation"${
                _scopeId
              }>{{</span><span class="token block keyword"${
                _scopeId
              }>/each</span><span class="token delimiter punctuation"${
                _scopeId
              }>}}</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>ul</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token handlebars language-handlebars"${
                _scopeId
              }><span class="token delimiter punctuation"${
                _scopeId
              }>{{</span><span class="token variable"${
                _scopeId
              }>else</span><span class="token delimiter punctuation"${
                _scopeId
              }>}}</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>p</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>No humans exist.<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>p</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token handlebars language-handlebars"${
                _scopeId
              }><span class="token delimiter punctuation"${
                _scopeId
              }>{{</span><span class="token block keyword"${
                _scopeId
              }>/if</span><span class="token delimiter punctuation"${
                _scopeId
              }>}}</span></span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-handlebars ext-handlebars line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-handlebars" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("h2")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("All Humans"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("h2")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                        (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "#if"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "humans"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "length"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("ul")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                        (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "#each"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "humans"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("li")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("li")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                        (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "/each"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("ul")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "else"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("p")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("No humans exist."),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("p")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                        (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "/if"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "views/layouts/main.hbs" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-handlebars ext-handlebars line-numbers-mode"${
                _scopeId
              }><pre class="language-handlebars"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token doctype"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;!</span><span class="token doctype-tag"${
                _scopeId
              }>DOCTYPE</span> <span class="token name"${
                _scopeId
              }>html</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>html</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>head</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>meta</span> <span class="token attr-name"${
                _scopeId
              }>charset</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>UTF-8<span class="token punctuation"${
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
              }>&lt;</span>title</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>Hello<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>title</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>head</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>body</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>h1</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>My Website<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>h1</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token handlebars language-handlebars"${
                _scopeId
              }><span class="token delimiter punctuation"${
                _scopeId
              }>{{{</span><span class="token variable"${
                _scopeId
              }>body</span><span class="token delimiter punctuation"${
                _scopeId
              }>}}}</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>body</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>html</span><span class="token punctuation"${
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
                (0,external_vue_.createVNode)("div", { class: "language-handlebars ext-handlebars line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-handlebars" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token doctype" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<!"),
                        (0,external_vue_.createVNode)("span", { class: "token doctype-tag" }, "DOCTYPE"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token name" }, "html"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("html")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("head")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("meta")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "charset"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("UTF-8"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("Hello"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("head")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("body")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("h1")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("My Website"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("h1")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{{"),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "body"),
                        (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}}")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("body")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("html")
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
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "dummy-data.js" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createTextVNode)("exports"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("humans "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  id"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n  name"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  id"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n  name"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Bob\""),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createTextVNode)("\n\nexports"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("pets "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  id"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n  humanId"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n  name"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Catty\""),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "app.js" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" dummyData "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'./dummy-data'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
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
                    (0,external_vue_.createTextVNode)(" expressHandlebars "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'express-handlebars'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" app "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "engine"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"hbs\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "expressHandlebars"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  defaultLayout"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'main.hbs'"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/'"),
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
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" model "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    humans"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" dummyData"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("humans\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n  response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "render"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"show-all-humans.hbs\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" model"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "views/show-all-humans.hbs" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-handlebars ext-handlebars line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-handlebars" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("h2")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("All Humans"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("h2")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                      (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "#if"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "humans"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "length"),
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("ul")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                      (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "#each"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "humans"),
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                    ]),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("li")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("li")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                      (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "/each"),
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("ul")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "else"),
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("p")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("No humans exist."),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("p")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{"),
                      (0,external_vue_.createVNode)("span", { class: "token block keyword" }, "/if"),
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "views/layouts/main.hbs" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-handlebars ext-handlebars line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-handlebars" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token doctype" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<!"),
                      (0,external_vue_.createVNode)("span", { class: "token doctype-tag" }, "DOCTYPE"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token name" }, "html"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("html")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("head")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("meta")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "charset"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("UTF-8"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("Hello"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("head")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("body")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("h1")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("My Website"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("h1")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token handlebars language-handlebars" }, [
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "{{{"),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "body"),
                      (0,external_vue_.createVNode)("span", { class: "token delimiter punctuation" }, "}}}")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("body")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("html")
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
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Then run the following command:</p><ol start="6"><li><code>node app.js</code> - Execute the code in the file <code>app.js</code> using Node.js.</li></ol><p>and then visit <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in a web browser, and you should see a list of humans.</p><p>Continue by changing and adding code so it instead looks like your own personal website, as you specified in your report. Here is a suggestion on in which order to implement the features:</p><ol><li>Add references to your CSS framework in the layout file. <ul><li>For many CSS frameworks, you can just add a <code>&lt;link&gt;</code> element to the CSS file containing the framework&#39;s code on a Content Delivery Network (CDN).</li><li>Many CSS frameworks are distributed as npm packages. For these, you can download the source code for the framework using the <code>npm install ***</code> command, and then add a <code>&lt;link&gt;</code> element to the CSS file in the <code>node_modules</code> folder.</li></ul></li><li>Implement most of the layout of your website by changing the code in <code>views/layouts/main.hbs</code>.</li><li>Create new views (new <code>.hbs</code> files in the <code>views</code> folder) representing your basic pages (about page, contact page, etc.). Then change your JavaScript code so web browsers can request these pages.</li></ol><div class="custom-container warning"><p class="custom-container-title">Remember!</p><p>Each time you change your JavaScript code, you need to restart the application for the changes to take effect. In most shells, you can stop the application from running by pressing <code>[CTRL]</code> + <code>[C]</code> twice, and then to start it again, simply run the command <code>node app.js</code> again. In most shells, you can press the up arrow on the keyboard to get the previously executed command.</p></div><ol start="4"><li>Change your dummy data to represent your own resources instead. Your dummy data will later be replaced with a relational database, so try to structure the resources the same way as you would structure them in a relational database (this will make the transition to a relational database easier).</li><li>Add new views representing pages with CRUD operations for your resources. Then change your JavaScript code so web browsers can request these pages.</li></ol><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You will use forms in your views (for create, update and delete operations), but handling the submission of these forms will be dealt with later. Implementing the login functionality is also something you will do later. For now, just having these forms is enough; nothing should happen when they are submitted.</p></div><p>When you are done, it should be possible for a user to visit all the pages on your website, including the ones only the logged in user should be able to access (will be fixed later). Update your report with a description of your implementation so far.</p><p>Feel free to show your work so far to a teacher at a lab session to get some feedback on it.</p><h2 id="part-4-using-a-relational-database" tabindex="-1"><a class="header-anchor" href="#part-4-using-a-relational-database" aria-hidden="true">#</a> Part 4: Using a relational database</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
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
  _push(`</li></ul></li></ul><hr><p>Storing data in variables works, but it is usually a bad solution for several reasons:</p><ul><li>When the web application stops running, the data will be lost.</li><li>Computers&#39; main memory (where variables are stored) is quite limited, so storing a big amount of data here is not appropriate.</li><li>It makes it hard to scale the web application (having it running on multiple servers at the same time), which is needed when your website becomes really popular and have a lot of visitors (will happen sooner or later, right? 😉).</li></ul><p>Most web applications instead store data in a relational database, such as MySQL. Relational databases store the data in secondary storage (i.e. the hard drive), where it will persist even after the computer is shut down. Usually, the database runs on a server separate from the server the web application runs on, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Common web application architecture." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tsubgraph Client\n\t\twebBrowser[Web Browser]\n\tend\n\tsubgraph Web Server\n\t\twebApplication[Web Application]\n\tend\n\tsubgraph Database Server\n\t\tdb[Database]\n\tend\n\twebBrowser -- HTTP --> webApplication\n\twebApplication -- SQL --> db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tsubgraph Client\n\t\twebBrowser[Web Browser]\n\tend\n\tsubgraph Web Server\n\t\twebApplication[Web Application]\n\tend\n\tsubgraph Database Server\n\t\tdb[Database]\n\tend\n\twebBrowser -- HTTP --> webApplication\n\twebApplication -- SQL --> db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Having the database running on a separate server from the web application (instead of on the same server) has a couple of advantages:</p><ul><li>Web applications and databases have different hardware needs. Databases read/write a lot from/to secondary storage, so they need to do this fast to operate efficiently. But good/fast secondary storage (i.e. SDDs) is expensive. Web applications on the other hand process a lot of data (incoming HTTP requests), and instead need fast (expensive) CPUs, and possibly much primary storage to utilize caching. By using two different servers, you can better match the software with its hardware needs.</li><li>If the web application and the database run on the same server, the maximum number of HTTP requests the web application can handle will be much lower, since the web application only have access to the hardware &quot;half of the time&quot; (the hardware is shared with the database).</li></ul><p>However, setting up a database on a separate server is not straightforward and takes time, so in this course we will instead run the database on the same server as the web application, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Web application architecture with only one server." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tsubgraph Client\n\t\twebBrowser[Web Browser]\n\tend\n\tsubgraph Server\n\t\twebApplication[Web Application]\n\t\tdb[Database]\n\tend\n\twebBrowser -- HTTP --> webApplication\n\twebApplication -- SQL --> db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tsubgraph Client\n\t\twebBrowser[Web Browser]\n\tend\n\tsubgraph Server\n\t\twebApplication[Web Application]\n\t\tdb[Database]\n\tend\n\twebBrowser -- HTTP --> webApplication\n\twebApplication -- SQL --> db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Furthermore, we will use SQLite as our database, and it will not run as a separate process, but part of the process executing our web application. This makes it very easy to use, but will be a bottleneck for scaling (but remember, <a href="https://stackify.com/premature-optimization-evil/" target="_blank" rel="noopener noreferrer">premature optimization is the root of all evil`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>).</p><p>Start by installing an npm package through which you can use SQLite (you don&#39;t need to install SQLite separately, just installing the npm package will be enough). You can use the package <code>sqlite3</code> for this. Then delete <code>dummy-data.js</code>, and create, store and retrieve your data from an SQLite database instead (putting this code in a file called <code>database.js</code> (or similar) makes sense). <strong>Make sure your tables use proper primary keys, foreign key constraints, unique constraints, etc.</strong></p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Do not send <code>CREATE TABLE xxx (...)</code> queries to the database, because the second time your web application starts, the tables will already exist, and you will get an error. Use <code>CREATE TABLE IF NOT EXISTS xxx (...)</code> instead. And if you screw up, you can always start over by deleting the database file.</p></div><p>You can use <em>DB Browser for SQLite</em> to view your database and manually insert some resources.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The database is not part of the source code for a web application and should therefor not be committed to a version control repository. When someone else clones your project and start your web application, the database should automatically be created if it does not exist.</p></div><p>When you are done, your web application should work precisely the same way as when you had completed Part 3 but the resources should now be stored in the database instead of variables. Then update your report with a description of your implementation so far, and if you want feedback on your report and your code, show them to a teacher at one of the lab sessions.</p><h2 id="part-5-handling-forms" tabindex="-1"><a class="header-anchor" href="#part-5-handling-forms" aria-hidden="true">#</a> Part 5: Handling forms</h2><p>When a user submits an HTML form (<code>&lt;form&gt;</code>), the web browser will send a new HTTP request to the server. If the GET method is used (<code>&lt;form method=&quot;get&quot;&gt;</code>), the data entered in the form will be added to the query string in the URI (the part after the <code>?</code> in the URI). In an express callback function receiving the request, that data can be accessed using the <code>query</code> property, i.e. <code>request.query</code>. This will be an object whose keys corresponds to the value given to the <code>name</code> attribute in the <code>&lt;input&gt;</code> fields in the form and the values will be the text the user entered in those <code>&lt;input&gt;</code> fields. It works similar for the other input elements you can use in forms (dropdown lists, checkboxes, radio buttons, etc.).</p><div class="custom-container tip"><p class="custom-container-title">Example</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "views/search.hbs" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-html ext-html line-numbers-mode"${
                _scopeId
              }><pre class="language-html"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>form</span> <span class="token attr-name"${
                _scopeId
              }>method</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>get<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token attr-name"${
                _scopeId
              }>action</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>/search<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  City: <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>input</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>city<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>br</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
        <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>input</span> <span class="token attr-name"${
                _scopeId
              }>type</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>submit<span class="token punctuation"${
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
              }>&lt;/</span>form</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("form")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "method"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("get"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "action"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("/search"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  City: "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("input")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("city"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("br")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("input")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("submit"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("form")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "app.js" }, {
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
              }>// GET /search?city=WHATEVER_THE_USER_ENTERED</span>
app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;/search&#39;</span><span class="token punctuation"${
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
  <span class="token keyword"${
                _scopeId
              }>const</span> city <span class="token operator"${
                _scopeId
              }>=</span> request<span class="token punctuation"${
                _scopeId
              }>.</span>query<span class="token punctuation"${
                _scopeId
              }>.</span>city <span class="token comment"${
                _scopeId
              }>// WHATEVER_THE_USER_ENTERED</span>
  <span class="token comment"${
                _scopeId
              }>// ...</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>

app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>listen</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token number"${
                _scopeId
              }>8080</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
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
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" app "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// GET /search?city=WHATEVER_THE_USER_ENTERED"),
                      (0,external_vue_.createTextVNode)("\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'/search'"),
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
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" city "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" request"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("query"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("city "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// WHATEVER_THE_USER_ENTERED"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "views/search.hbs" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("form")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "method"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("get"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "action"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("/search"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  City: "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("input")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("city"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("br")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("input")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("submit"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("form")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "app.js" }, {
            default: (0,external_vue_.withCtx)(() => [
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
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" app "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// GET /search?city=WHATEVER_THE_USER_ENTERED"),
                    (0,external_vue_.createTextVNode)("\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/search'"),
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
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" city "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" request"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("query"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("city "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// WHATEVER_THE_USER_ENTERED"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
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
  _push(`</div><p>If the POST method is used to submit the form (<code>&lt;form method=&quot;post&quot;&gt;</code>), the data in the form will be added to the body of the request, expressed in the data format <code>application/x-www-form-urlencoded</code> (the header <code>Content-Type: application/x-www-form-urlencoded</code> is added to the HTTP request). Express does not provide a convenient way to read this data, but the npm package <code>body-parser</code> can be used to do that. Once you have installed it (<code>npm install body-parser</code>) and added it as a middleware function using its <code>urlencoded()</code> function, you can access the data entered in the form using <code>request.body</code>.</p><div class="custom-container tip"><p class="custom-container-title">Example</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "views/search.hbs" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-html ext-html line-numbers-mode"${
                _scopeId
              }><pre class="language-html"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>form</span> <span class="token attr-name"${
                _scopeId
              }>method</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>post<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token attr-name"${
                _scopeId
              }>action</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>/search<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  City: <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>input</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>city<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>br</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
        <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>input</span> <span class="token attr-name"${
                _scopeId
              }>type</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>submit<span class="token punctuation"${
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
              }>&lt;/</span>form</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("form")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "method"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("post"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "action"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("/search"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  City: "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("input")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("city"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("br")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("input")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("submit"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("form")
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "app.js" }, {
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
              }>const</span> bodyParser <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;body-parser&#39;</span><span class="token punctuation"${
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
app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>use</span><span class="token punctuation"${
                _scopeId
              }>(</span>bodyParser<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>urlencoded</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  extended<span class="token operator"${
                _scopeId
              }>:</span> <span class="token boolean"${
                _scopeId
              }>false</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }>// POST /search</span>
<span class="token comment"${
                _scopeId
              }>// Body: city=WHATEVER_THE_USER_ENTERED</span>
app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>post</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;/search&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>req<span class="token punctuation"${
                _scopeId
              }>,</span> res</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  <span class="token keyword"${
                _scopeId
              }>const</span> city <span class="token operator"${
                _scopeId
              }>=</span> req<span class="token punctuation"${
                _scopeId
              }>.</span>body<span class="token punctuation"${
                _scopeId
              }>.</span>city <span class="token comment"${
                _scopeId
              }>// WHATEVER_THE_USER_ENTERED</span>
  <span class="token comment"${
                _scopeId
              }>// ...</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>

app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>listen</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token number"${
                _scopeId
              }>8080</span><span class="token punctuation"${
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
              }></div></div>`)
            } else {
              return [
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
                      (0,external_vue_.createTextVNode)(" bodyParser "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'body-parser'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" app "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "use"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("bodyParser"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "urlencoded"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  extended"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// POST /search"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Body: city=WHATEVER_THE_USER_ENTERED"),
                      (0,external_vue_.createTextVNode)("\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "post"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'/search'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createTextVNode)("req"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(" res")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" city "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" req"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("body"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("city "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// WHATEVER_THE_USER_ENTERED"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\napp"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "views/search.hbs" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("form")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "method"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("post"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "action"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("/search"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  City: "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("input")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("city"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("br")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("input")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "type"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("submit"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("form")
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "app.js" }, {
            default: (0,external_vue_.withCtx)(() => [
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
                    (0,external_vue_.createTextVNode)(" bodyParser "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'body-parser'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" app "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "use"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("bodyParser"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "urlencoded"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  extended"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// POST /search"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Body: city=WHATEVER_THE_USER_ENTERED"),
                    (0,external_vue_.createTextVNode)("\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "post"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/search'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createTextVNode)("req"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" res")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" city "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" req"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("body"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("city "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// WHATEVER_THE_USER_ENTERED"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\napp"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
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
  _push(`</div><p>Change your JavaScript code to handle submissions of forms (except the login and logout forms). When you are done, any user should be able to create/edit/delete resources through the forms. Then update your report with a description of your implementation so far.</p><div class="custom-container warning"><p class="custom-container-title">GET vs POST</p><p>When should you submit a form with the GET method, and when should you use the POST method? Remember that GET requests should only be used to retrieve resources, and they should not change anything on the server (no harm in sending the same request 10 times in a row by accident), while POST requests may change things on the server or have some other type of side effect, such as sending an email.</p></div><p>Show your work to a teacher at one of the lab sessions to get some feedback on it.</p><h2 id="part-6-handling-errors" tabindex="-1"><a class="header-anchor" href="#part-6-handling-errors" aria-hidden="true">#</a> Part 6: Handling errors</h2><p>When a user submits a form to create/edit a resource, you need to validate the data entered in the form, and only carry out the request if the entered data is valid. For example, the user might have forgot to enter data in a form field, or maybe the user has entered some invalid data (for example entered <code>-43</code> as the number of pages for a book resource). <strong>If the data is not valid, you should display the form to the user again (with the data the user entered), together with descriptive error messages explaining what was wrong.</strong></p><p>Your route parameters (such as <code>bookId</code> in <code>/books/:booksId</code>) needs to be validated too. Maybe the user visits your website and ends up at <code>/books/4</code>, bookmarks this page, and then you delete it from your database. If the user now goes to this page through her bookmark, she should not see an empty/crashed page, but a message saying that the book does not exist.</p><p>It is not only data that comes from your clients that can result in errors. External systems your web application depends on (such as the database) can fail as well. For example, if the database is full, you cannot insert a new resource into it. In these cases, there is no need to show a descriptive error message like <em>The database is full</em>, because the user cannot fix the problem anyway. Instead, it is better to show a general error message like <em>Server error, we are working on fixing it</em>, and then log the error details, so you then can debug and fix the error.</p><p>Deal with the various errors that can happen in your web application, and then update your report with a description of your implementation so far.</p><div class="custom-container danger"><p class="custom-container-title">Deadline</p><p>Just a reminder that you should not forget to <a href="https://ju.instructure.com/courses/4558/assignments/19357" target="_blank" rel="noopener noreferrer">submit your report for feedback on Canvas`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. The deadline might have already been (depending on how slow/fast you work), but if you follow the time plan, now should be a good time to submit it.</p></div><h2 id="part-7-adding-authentication-authorization" tabindex="-1"><a class="header-anchor" href="#part-7-adding-authentication-authorization" aria-hidden="true">#</a> Part 7: Adding authentication &amp; authorization</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/cookies-and-sessions/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Cookies and Sessions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Cookies and Sessions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/using-cookies-and-sessions-in-express/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Using cookies and Sessions in Express`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Using cookies and Sessions in Express")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/designing-account-systems/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Designing Account Systems`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Designing Account Systems")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>To distinguish <em>you</em> from <em>anyone</em> (which is needed for operations <em>only you</em> should be authorized to carry out), you need to be able to authenticate yourself (prove that you are you). This can be done by hard-coding a username and a password on the server only you know. When you later login, you send this username and password to the server, which compares them with the username and password that have been hard-coded, and if they match, the server can trust that the request comes from you, because you are the only one who should know the correct username and password. Simple as that!</p><p>However, HTTP is a stateless protocol. This means that the server does not need to remember HTTP requests it has previously received to carry out HTTP requests it will receive in the future. This makes it a bit complex to stay logged in, because the server does not remember that you have previously successfully logged in when you send it other requests after that.</p><p>For servers to remember information about clients, cookies were added to HTTP. A cookie is a key-value pair the server can send to the client in an HTTP response, and the client should then send this cookie back to the server in future HTTP requests it sends to the server. However, using a cookie like <code>isLoggedIn=true</code> is not a secure way to remember that a client has successfully logged in, because there is nothing preventing a hacker from manually creating an identical cookie on her own computer with the same information.</p><p>To securely remember information about clients, you can use sessions. Session are built on top of cookies, and consists of key-value pairs stored on the server. Each client gets its own session, and each session has its own unique and hard-to-guess id, known as the <em>session id</em>. The server sends the session id to the client in a cookie when the session for that client is created. The client then sends back the cookie with the session id to the server in its future HTTP requests, and the server can then lookup the information it has stored about that client in the session with the session id it receives in the cookie.</p><p>Use sessions (and cookies) to implement a secure login system for a single account. To use session in an express application, you can use the npm package <code>express-session</code>, and add it as a middleware function.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of how to use the <code>express-session</code> package in an Express application.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express-session&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// Use sessions to count how many times each client has visited this page.</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/the-page&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">.</span>session<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">{</span>
    request<span class="token punctuation">.</span>session<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  request<span class="token punctuation">.</span>session<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></div><div class="custom-container danger"><p class="custom-container-title">Store sessions properly!</p><p>The example above stores the sessions in main memory, and it never removes old sessions. If such a solution would run on a real server, it would run out of memory quite soon. Instead, <a href="https://github.com/expressjs/session#api" target="_blank" rel="noopener noreferrer">read the docs for <code>express-session</code>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to learn how to store the sessions elsewhere.</p></div><p></p><h2 id="part-8-improving-security" tabindex="-1"><a class="header-anchor" href="#part-8-improving-security" aria-hidden="true">#</a> Part 8: Improving security</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/web-security/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Web Security`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Web Security")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><h3 id="sql-injections" tabindex="-1"><a class="header-anchor" href="#sql-injections" aria-hidden="true">#</a> SQL injections</h3><p>If you have code like the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below, you are vulnerable to SQL injections.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of code vulnerable to SQL injections." }, {
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
        }>const</span> sqlite3 <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>require</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;sqlite3&#39;</span><span class="token punctuation"${
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
<span class="token keyword"${
          _scopeId
        }>const</span> db <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>new</span> <span class="token class-name"${
          _scopeId
        }>sqlite3<span class="token punctuation"${
          _scopeId
        }>.</span>Database</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;db.db&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token comment"${
          _scopeId
        }>// Send back a book with a specific id.</span>
app<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>get</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;/books/:id&#39;</span><span class="token punctuation"${
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
  <span class="token keyword"${
          _scopeId
        }>const</span> id <span class="token operator"${
          _scopeId
        }>=</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>params<span class="token punctuation"${
          _scopeId
        }>.</span>id
  <span class="token keyword"${
          _scopeId
        }>const</span> query <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;SELECT * FROM books WHERE id = &quot;</span><span class="token operator"${
          _scopeId
        }>+</span>id<span class="token operator"${
          _scopeId
        }>+</span><span class="token string"${
          _scopeId
        }>&quot; LIMIT 1&quot;</span>
  db<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>get</span><span class="token punctuation"${
          _scopeId
        }>(</span>query<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> book</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
      <span class="token comment"${
          _scopeId
        }>// Send back page showing an error message.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
      <span class="token comment"${
          _scopeId
        }>// Send back page showing the book.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>

app<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>listen</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>8080</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
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
                (0,external_vue_.createTextVNode)(" sqlite3 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'sqlite3'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" app "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "express"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" db "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token class-name" }, [
                  (0,external_vue_.createTextVNode)("sqlite3"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                  (0,external_vue_.createTextVNode)("Database")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'db.db'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send back a book with a specific id."),
                (0,external_vue_.createTextVNode)("\napp"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'/books/:id'"),
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
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" id "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("params"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" query "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"SELECT * FROM books WHERE id = \""),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\" LIMIT 1\""),
                (0,external_vue_.createTextVNode)("\n  db"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" book")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send back page showing an error message."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send back page showing the book."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\napp"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Most of your users will go to URLs like <code>/books/53</code>, and the query sent to the database will be like <code>SELECT * FROM books WHERE id = 53 LIMIT 1</code>, as expected. But a hacker might try to visit the URL <code>/books/1 OR title=&#39;hello&#39;</code>, and the query sent to the database will be <code>SELECT * FROM books WHERE id = 1 OR title=&#39;hello&#39; LIMIT 1</code>. Although no harm has been done in this case, it shows how hackers can manipulate queries sent to the database, and potentially read (or delete, update, insert, etc.) information they should not be able to.</p><p>Data received from users, no matter if it comes from the URL, the query string, cookies or the body of the request, cannot be trusted, so manually constructing SQL queries through string concatenation as done in the code above is very dangerous and must be avoided. Instead, you can use placeholders, as shown in the code in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of code not vulnerable to SQL injections." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Send back a book with a specific id.</span>
app<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>get</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;/books/:id&#39;</span><span class="token punctuation"${
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
  
  <span class="token keyword"${
          _scopeId
        }>const</span> id <span class="token operator"${
          _scopeId
        }>=</span> request<span class="token punctuation"${
          _scopeId
        }>.</span>params<span class="token punctuation"${
          _scopeId
        }>.</span>id
  
  <span class="token comment"${
          _scopeId
        }>// Use ? as placeholder for values we retrieve from the clients.</span>
  <span class="token keyword"${
          _scopeId
        }>const</span> query <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&quot;SELECT * FROM books WHERE id = ? LIMIT 1&quot;</span>
  
  <span class="token comment"${
          _scopeId
        }>// The values we retrieved from the client (will be used instead of the placeholders).</span>
  <span class="token keyword"${
          _scopeId
        }>const</span> values <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>id<span class="token punctuation"${
          _scopeId
        }>]</span>
  
  db<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>get</span><span class="token punctuation"${
          _scopeId
        }>(</span>query<span class="token punctuation"${
          _scopeId
        }>,</span> values<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> book</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
      <span class="token comment"${
          _scopeId
        }>// Send back page showing an error message.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
      <span class="token comment"${
          _scopeId
        }>// Send back page showing the book.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
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
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send back a book with a specific id."),
                (0,external_vue_.createTextVNode)("\napp"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'/books/:id'"),
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
                (0,external_vue_.createTextVNode)("\n  \n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" id "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" request"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("params"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id\n  \n  "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Use ? as placeholder for values we retrieve from the clients."),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" query "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"SELECT * FROM books WHERE id = ? LIMIT 1\""),
                (0,external_vue_.createTextVNode)("\n  \n  "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// The values we retrieved from the client (will be used instead of the placeholders)."),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" values "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("id"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n  \n  db"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" values"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" book")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send back page showing an error message."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n      "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send back page showing the book."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>This way, the query with the placeholder is sent to the database as one unit, and the value for the placeholder is sent as another unit, so the data cannot alter the query sent to the database, and you are protected against SQL injections.</p><p>Make sure all your code is protected against SQL injections.</p><h3 id="hashing-passwords" tabindex="-1"><a class="header-anchor" href="#hashing-passwords" aria-hidden="true">#</a> Hashing passwords</h3><p>Passwords should never be stored in plain text. Humans often use the same password on different websites, and if a hacker comes across a user&#39;s password on one website, she can login as that user on the other websites that user is using. Quite bad!</p><p>Instead of storing passwords in plain text, one can hash passwords and store their hash values. These hash values cannot easily nor with 100% accuracy be reversed back to the original passwords again.</p><p>There exist hashing algorithms specifically designed to hash passwords (they are intentionally slow). Use one of them to securely store your account&#39;s password. You can for example use the npm package <code>bcrypt</code> to accomplish this.</p><div class="custom-container warning"><p class="custom-container-title">bcrypt uses Python</p><p>The npm package <code>bcrypt</code> might need a Python installation on your computer to work. If you can&#39;t get it to work, you can use <code>bcryptjs</code> instead, but that one is slower since it&#39;s implemented in pure JavaScript.</p></div><p>When you are done, you should have a hard-coded hash value of your password in your source code instead of a hard-coded password in plain text.</p><h3 id="cross-site-scripting" tabindex="-1"><a class="header-anchor" href="#cross-site-scripting" aria-hidden="true">#</a> Cross-Site Scripting</h3><p>The danger with SQL injections is that data coming from one user is injected and modifies the query sent to the database. Cross-Site Scripting (XSS) is something similar, but it modifies the HTML code sent to other users. For example, a hacker might write a new guestbook message and send it to your web application, and when other users read your guestbook, they receive the hacker&#39;s guestbook message. If the guestbook message contains HTML code, it will be sent to the users&#39; web browsers and displayed as part of the website. With just HTML code, a hacker cannot do that dangerous things, but the HTML code can in turn contain client-side JavaScript code which can do much more damage when it is executed in the users&#39; web browsers.</p><p>Make sure all data you receive from your users is escaped before it is sent to your users.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Most template engines automatically escape HTML code unless you use a special syntax. If you use Handlebars as your template engine, you can read more about it under <a href="https://handlebarsjs.com/guide/#html-escaping" target="_blank" rel="noopener noreferrer">the guide at handlebarsjs.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h3 id="cross-site-request-forgery" tabindex="-1"><a class="header-anchor" href="#cross-site-request-forgery" aria-hidden="true">#</a> Cross-Site Request Forgery</h3><p>Cross-Site Request Forgery (CSRF) is a type of an attack where hackers successfully trick our users into sending HTTP request to our website which they did not intent to send. For example, if our website contains a guestbook and is vulnerable to CSRF-attacks, a hacker might trick a user to send 1000 &quot;create new guestbook message&quot; requests. Our website just sees the requests coming from the user, and not from the hacker, so we think the user is the bad guy spamming our guestbook, but she is just the tool.</p><p>A spammed guestbook is no danger and can easily be fixed, but CSRF-attacks in general can be quite dangerous. Imagine you sign in on your bank&#39;s website, then you visit another website controlled by the hacker (the hacker does not need to own this other website; it is enough for the website to contain a XSS-vulnerability the hacker can exploit to inject bad client-side JavaScript code into it) and tricks your web browser to send HTTP requests to your bank&#39;s website. One request can for example be to transfer money from your account to the hackers account. The bank&#39;s website thinks the request intentionally is sent by you and carries it out. Quite bad!</p><p>The funny thing about these CSRF-attacks is that the vulnerability is not on our website. It is when our users visit other websites they might become victim of CSRF-attacks that makes them unintentionally send HTTP requests to our website. Luckily, there is a way for us to protect us from these unintentionally sent request known as <a href="https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md#synchronizer-token-pattern" target="_blank" rel="noopener noreferrer">the Synchronizer Token Pattern`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>The synchronizer token pattern takes advantage of the fact that if a user wants to send a request to our website, it must do so by submitting a <code>&lt;form&gt;</code> with <code>method=&quot;post&quot;</code> on our website. Remember, in HTML, it is only possible to send GET request and POST requests, and only POST requests should potentially result in changes on the website, so only POST requests are dangerous in CSRF-attacks (CSRF-attacks are not used by hackers to retrieve sensitive data on the server). So, when our website receives a POST request from a user, we need to check if it comes from the submission of a form on our website, because it is only in that case the request has been intentionally sent by the user.</p><p>HTML/HTTP does not come with built-in support to check that, but the synchronizer token pattern describes a way for us to do it manually. It basically works like this:</p><ol><li>When a user sends a GET requests for the form, we generate a unique token (a long random string), remember this token (in the session, in a cookie, or whatever) and add it as a hidden input field to the form, e.g. <code>&lt;input type=&quot;hidden&quot; name=&quot;token&quot; value=&quot;the-long-random-string&quot;&gt;</code>, so we also receives it back when the form is submitted.</li><li>When we receive the submission of the form (i.e. the POST request), we check if the token in the form is the same token as we generated before. If they are, we can be sure the POST request has been intentionally sent by the user through the form on our website, and not through a CSRF-attack.</li></ol><p>Use the npm package <code>csurf</code> to protect your website from CSRF-attacks.</p><h2 id="part-9-optional-tasks" tabindex="-1"><a class="header-anchor" href="#part-9-optional-tasks" aria-hidden="true">#</a> Part 9: Optional tasks</h2><p>Here are some optional tasks you must complete if you want to get a grade higher than 3. Remember that completing these extra tasks does not necessarily give you a higher grade, but you have to complete them to be able to get a higher grade. Also, do not forget to read the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-grading-guidelines/" }, {
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
  _push(` every now and then.</p><h3 id="search-required-for-grade-4" tabindex="-1"><a class="header-anchor" href="#search-required-for-grade-4" aria-hidden="true">#</a> Search (required for grade 4)</h3><p>Add search/filter functionality for at least one of your resources.</p><p>You have a lot of freedom when it comes to this task, but too simple solutions will not be accepted. Just searching for a title is not enough, maybe the user also can specify a date range or similar?</p><h3 id="pagination-required-for-grade-4" tabindex="-1"><a class="header-anchor" href="#pagination-required-for-grade-4" aria-hidden="true">#</a> Pagination (required for grade 4)</h3><p>Add pagination to at least one of your resources, so not all of them are listed on the same page but spread out across multiple pages. You can use a query string parameter to keep track of the page number.</p><p>You have a lot of freedom when it comes to this task, but too simple solutions will not be accepted. 1 resource/page does not count as pagination.</p><h3 id="uploading-files-required-for-grade-5" tabindex="-1"><a class="header-anchor" href="#uploading-files-required-for-grade-5" aria-hidden="true">#</a> Uploading files (required for grade 5)</h3><p>Make it possible to upload a file to at least one of your resources. This could for example be a screenshot of a software application you have in your portfolio. How to do this is something you need to learn on your own (grade 5...).</p><p>Note that files should not be stored in a database (but on the file system), and does not count as one of the three type of resources you should have on your website.</p><p>You have a lot of freedom when it comes to this task, but too simple solutions will not be accepted (error handling needed).</p><h2 id="part-10-deploying" tabindex="-1"><a class="header-anchor" href="#part-10-deploying" aria-hidden="true">#</a> Part 10: Deploying</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>View the following videos: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/amazon-lightsail/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Amazon Lightsail`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Amazon Lightsail")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>Deploy your web application on a server. Use whichever you want, but it should be publicly accessible for other computers on the Internet.</p><h2 id="part-11-demonstration" tabindex="-1"><a class="header-anchor" href="#part-11-demonstration" aria-hidden="true">#</a> Part 11: Demonstration</h2><p>Demonstrate how your application works to &quot;the rest of your class&quot;. The reason for the demonstration is two-folded:</p><ul><li>You get some practice in presenting your work, which is a very important skill in your future professional career.</li><li>You get to see other ways to implement similar functionality (hopefully not all websites will look the same).</li></ul><p>At the demonstration you will simply show how users (you as the admin, and the rest of the world as visitors) can use the website. You should not show any code nor explain any implementation details; just demonstrate the website through a web browser. Show that you have CRUD operations for all of your resources, that you have validation, that you display descriptive error messages when something goes wrong, etc.</p><p>To be allowed to demonstrate your website, you need to have implemented at least:</p><ul><li>A functional login system.</li><li>All 4 CRUD operations for at least 2 type of resources with appropriate validation and authorization.</li></ul><p>You may use at most 10 minutes for your demonstration. If you need more than this to show all features, then skip some of them. If your demonstration takes just 2 minutes, that could be OK as well. Don&#39;t start talking about irrelevant things just to make the demonstration last longer.</p><p>At the demonstration we will have a laptop connected to the projector in the room you can use to show your website. For this to work, your website must have been deployed to a server on the Internet (Part 10 of the project work needs to have been completed). If you have not completed Part 10 yet, you can bring and use your own laptop and run your website locally on your own laptop.</p><p>Join one of the <a href="https://ju.instructure.com/courses/4558/groups" target="_blank" rel="noopener noreferrer">Project Work Demonstration Groups`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas to decide when you want to demonstrate. At most 6 students in each group, first come, first served.</p><p>Your demonstration will not be graded; consider it as (mandatory) practice (you must do it to pass the project work).</p><h2 id="part-12-submitting-your-work" tabindex="-1"><a class="header-anchor" href="#part-12-submitting-your-work" aria-hidden="true">#</a> Part 12: Submitting your work</h2><p>Submit your work for grading by uploading it to the assignment <a href="https://ju.instructure.com/courses/4558/assignments/19360" target="_blank" rel="noopener noreferrer">Project Work Final Submission`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas. <strong>Be sure to follow the submission instructions there to 100%!</strong></p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/project-work.html.vue?vue&type=template&id=76a26d81

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/project-work.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const project_work_html = (__exports__);

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

/***/ 6877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-18fce10e",
  "path": "/courses/web-development-fundamentals/project-work.html",
  "title": "Project Work",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Introduction",
      "slug": "introduction",
      "children": []
    },
    {
      "level": 2,
      "title": "Installing required software",
      "slug": "installing-required-software",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 1: Specifying functionality & graphical user interface",
      "slug": "part-1-specifying-functionality-graphical-user-interface",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 2: Prototyping the graphical user interface",
      "slug": "part-2-prototyping-the-graphical-user-interface",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 3: Starting to implement the web application",
      "slug": "part-3-starting-to-implement-the-web-application",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 4: Using a relational database",
      "slug": "part-4-using-a-relational-database",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 5: Handling forms",
      "slug": "part-5-handling-forms",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 6: Handling errors",
      "slug": "part-6-handling-errors",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 7: Adding authentication & authorization",
      "slug": "part-7-adding-authentication-authorization",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 8: Improving security",
      "slug": "part-8-improving-security",
      "children": [
        {
          "level": 3,
          "title": "SQL injections",
          "slug": "sql-injections",
          "children": []
        },
        {
          "level": 3,
          "title": "Hashing passwords",
          "slug": "hashing-passwords",
          "children": []
        },
        {
          "level": 3,
          "title": "Cross-Site Scripting",
          "slug": "cross-site-scripting",
          "children": []
        },
        {
          "level": 3,
          "title": "Cross-Site Request Forgery",
          "slug": "cross-site-request-forgery",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 9: Optional tasks",
      "slug": "part-9-optional-tasks",
      "children": [
        {
          "level": 3,
          "title": "Search (required for grade 4)",
          "slug": "search-required-for-grade-4",
          "children": []
        },
        {
          "level": 3,
          "title": "Pagination (required for grade 4)",
          "slug": "pagination-required-for-grade-4",
          "children": []
        },
        {
          "level": 3,
          "title": "Uploading files (required for grade 5)",
          "slug": "uploading-files-required-for-grade-5",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 10: Deploying",
      "slug": "part-10-deploying",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 11: Demonstration",
      "slug": "part-11-demonstration",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 12: Submitting your work",
      "slug": "part-12-submitting-your-work",
      "children": []
    }
  ],
  "filePathRelative": "courses/web-development-fundamentals/project-work.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=7716.app.js.map