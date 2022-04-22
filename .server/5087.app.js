"use strict";
exports.id = 5087;
exports.ids = [5087];
exports.modules = {

/***/ 9269:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/project-work.html.vue?vue&type=template&id=8af888b0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CompactInfo = (0,external_vue_.resolveComponent)("CompactInfo")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="project-work" tabindex="-1"><a class="header-anchor" href="#project-work" aria-hidden="true">#</a> Project Work</h1><p>On this page you find information about the examination test <code>Project work</code>.</p><h2 id="general-information" tabindex="-1"><a class="header-anchor" href="#general-information" aria-hidden="true">#</a> General information</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CompactInfo, { infoPieces: {
    "Number of credits": "4",
    "Grades": ["Fail", "3", "4", "5"],
    "How to work": "In pairs",
    "Goal": "To learn how to implement a scalable platform built on Docker containers running a web application, a single-page application, a database to store sessions in and a database to store your resources in. You will also learn how to use a three-layered architecture, dependency injection and how to design and implement a REST API in your web application.",
    "Instructions": `Complete the different parts the project work consists of described on this page. You will implement a platform, write a report describing your implementation and present your platform to the "rest" of the class at the end of the course.`,
    "Grading guidelines": "Available on the Project Grading Guidelines page.",
    "Re-examination": "Special presentation sessions will be available at the re-exam periods in June and in August (contact the course coordinator for more details). Your work can also be graded at these re-exam period, but it will only be graded Fail/3.",
    "Help": "Ask the teacher for help at the lab sessions."
} }, null, _parent))
  _push(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>As project work you should work in pairs to create a platform per the instructions on this page. The platform will consist of:</p><ul><li>A relational database that stores the resources created on the platform</li><li>A none-relational database to store temporary data (e.g. sessions) on the platform</li><li>A web application that: <ul><li>Web browsers can use to fetch webpages from (i.e. function as a website)</li><li>Exposes a REST API clients (e.g. smartphones) can use to work with the resources on the platform</li></ul></li><li>A Single-Page Application through which users can work with the resources on the platform</li></ul><p>You have a lot of freedom when it comes to the design and functionality of the platform, but the following requirements exist:</p><ul><li>There should exist at least three different type of resources on the platform: <ul><li>One of the resource types must represent <em>accounts</em> users can create and login to</li><li>The other two resource types should somehow have a relation to accounts (direct or indirect), i.e. a created resource should be owned by/belong to an account</li></ul></li><li>Regarding CRUD (Create, Retrieve, Update, Delete) operations on the resources: <ul><li>All three type of resources should support Create and Retrieve operations</li><li>Implementing Update and Delete operations for the website is an extra task you can do at the end of the project work to get a higher grade</li></ul></li></ul><p>Use whichever type of resources you want in addition to accounts. Some typical (boring) examples are:</p><ul><li><em>Threads</em> logged in users can create and that other logged in users can write <em>posts</em> to</li><li><em>Blog posts</em> logged in users can create and that other logged in users can write <em>comments</em> on</li><li><em>Todo lists</em> logged in users can create and add <em>todo items</em> to</li></ul><p>Examples of more specific platforms are:</p><ul><li>For a <strong>Car Insurance Company</strong>: <em>Insurance Plans</em> (price, info about what&#39;s included in the plan, etc.) users&#39; <em>Cars</em> are connected to</li><li>For a <strong>Rescue Service</strong>: <em>Accidents</em> they have attended, and <em>Reported Work Hours</em> by the personnel</li><li>For a <strong>Football Club</strong>: <em>Teams</em> in the club, and <em>Players</em> in each team</li></ul><div class="custom-container tip"><p class="custom-container-title">Finding a good problem to solve</p><p>Most good problems obvious to programmers have already been solved by other programmers. To find a good problem to solve as project in this course, you usually need to explore domains you are unfamiliar with. Ask your friends and family if they have a need of a platform of some kind. Someone working within elderly care might have a problem you can solve with a platform implemented in this course? Or someone who likes to walk in the nature? Or someone helping homeless people? Etc.</p></div><p>Implement the platform using the technologies taught in this course. In addition to implementing the web application, you should also write a report describing how the platform works and how it has been implemented. The file <a href="files/project-report-template.docx">project-report-template.docx</a> contains a template with further instructions on this. Your report will be a living document throughout the course, meaning that you will continuously improve and add content to it.</p><p>On the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/project-grading-guidelines/" }, {
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
  _push(` page you find some guidelines for how your project work will be graded. You are recommended to read through it every now and then.</p><p>To help you, we have divided the project work into smaller parts that should be completed in order. The rest of this page contains descriptions of these smaller parts. Before you start working on the first part you are recommended to read through all the parts, which will give you a good overview of the work that lies ahead.</p><p>Good luck!</p><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing required software</h2><p><strong>If you work on the computers in E1206, E2432, E2433 or E4205</strong>, all required software should already be installed for you, so you should not need to install anything yourself.</p><p><strong>If you work on a school computer in any other room</strong>, you need to manually install the required software through the <em>Software Center</em> application (unless someone else has already done that on the specific computer you use).</p><p><strong>If you work on your own private computer</strong>, you need to download and install all required software yourself. In this course, we use only free software available for both Windows, Mac and Linux.</p><p>The required software is:</p><ul><li><a href="https://docs.docker.com/get-docker/" target="_blank" rel="noopener noreferrer">Docker`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <br> A program used for containerization, i.e. a program used for running other programs in an isolated and configurable environment.</li></ul><div class="custom-container danger"><p class="custom-container-title">Docker Toolbox for Windows</p><p>There existed an old version of Docker for Windows called <em>Docker Toolbox</em>. It shouldn&#39;t be used anymore, so Windows users, be sure to use <em>Docker Desktop for Windows</em>.</p></div><div class="custom-container warning"><p class="custom-container-title">About Docker Desktop for Windows</p><p>Docker Desktop for Windows can be used with either <em>Windows Subsystems for Linux 2</em> (WSL2) or Hyper-v. If you have Windows 10 Home (as most users), you must use it with WSL2.</p></div><ul><li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <br> Use whichever version you want, but most likely the newer the better. If you don&#39;t want to gamble, go with the latest LTS version.</li><li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <br> This one is installed along with Node.js, so you do not need to install it separately. However, you might want to <a href="https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm" target="_blank" rel="noopener noreferrer">update npm to the latest version`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li></ul><p>The following software tools are not required, but recommended:</p><ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <br> IDE with good support for writing, running and debugging Node.js and JavaScript code, but use whichever IDE you want.</li><li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> <br> Version Control System that makes it very convenient to work on the project from different computers.</li></ul><h2 id="part-1-joining-a-project-group" tabindex="-1"><a class="header-anchor" href="#part-1-joining-a-project-group" aria-hidden="true">#</a> Part 1: Joining a project group</h2><p>The project work should be carried out in pairs. Let the examiner know who you are working with by joining one of <a href="https://ju.instructure.com/courses/4775/groups" target="_blank" rel="noopener noreferrer">the Project Groups on Canvas`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>If you can&#39;t find someone to work with, send the course coordinator an email at <a href="mailto:Peter.Larsson-Green@ju.se">Peter.Larsson-Green@ju.se</a> using the template in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below (you just need to replace <code>XXX</code> with your specific values).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Template of message to be sent to the course coordinator if you can't find a partner to work with on your own." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Hi!

I need you to match me with a student for the project work.

Course: Web Development - Advanced Concepts
My name: XXX
My JU email: XXX@student.ju.se
The grade I&#39;m aiming for in this course: XXX
I got the following grades in the following pre-requisite courses:
 - Introduction to Programming: XXX
 - Data Structures and Algorithms: XXX
 - Object-Oriented Programming: XXX
 - Network Programming: XXX
 - Web Development Fundamentals: XXX

Thanks!
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Hi!\n\nI need you to match me with a student for the project work.\n\nCourse: Web Development - Advanced Concepts\nMy name: XXX\nMy JU email: XXX@student.ju.se\nThe grade I'm aiming for in this course: XXX\nI got the following grades in the following pre-requisite courses:\n - Introduction to Programming: XXX\n - Data Structures and Algorithms: XXX\n - Object-Oriented Programming: XXX\n - Network Programming: XXX\n - Web Development Fundamentals: XXX\n\nThanks!\n")
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
  }, _parent))
  _push(`<p>If you don&#39;t care about who you are matched with, you just need to enter your name and JU email in the template. The course coordinator will then try to match you with a student with similar ambitions and skills as you.</p><h2 id="part-2-project-environment" tabindex="-1"><a class="header-anchor" href="#part-2-project-environment" aria-hidden="true">#</a> Part 2: Project Environment</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/teamwork/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Teamwork`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Teamwork")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>Read the following short course on Git: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/git/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Git`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Git")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>The very first thing you should agree on is how you should work together. Especially, you need to some extent document who is doing what in the project, and write that in your report, so the examiner can verify that all group members have contributed ~equally much.</p><p>We recommend you to work together per the basis described in the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/teamwork/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Teamwork`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Teamwork")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` lecture. That way you will automatically document who has contributed with what by using Git and GitHub issues. But if you want to work together in another way, that is OK too, as long as you can show who has contributed with what in the project.</p><p>The <em>Worklog</em> chapter in <a href="files/project-report-template.docx">project-report-template.docx</a> shows an example of how you can report who has contributed with what in the project.</p><h2 id="part-3-platform-idea" tabindex="-1"><a class="header-anchor" href="#part-3-platform-idea" aria-hidden="true">#</a> Part 3: Platform idea</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
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
  _push(`</li></ul></li></ul><hr><p>Your first task is to come up with what the platform you will create should do. Try to be creative and create a platform that solves a real-world problem ordinary people are having. Feel free to ask your family and friends for problems they have that could be solved using a platform. Examples of real-world problems could be:</p><ul><li>I often forget meetings</li><li>I often make bets with my friends, they remember the bets I lose so I have to pay them, but I often forget the bets I win, so they never pay me</li><li>I like to keep track of which celebrities I&#39;ve seen, but I rarely remember that</li><li>I eat lunches alone, and that&#39;s so boring</li><li>I need to find someone I can play padel with</li></ul><p>The only important thing is that your platform can be implemented using at least 3 type of resources (accounts + at least two more connected to accounts), but the more useful it is the better. Optimally you have such a great idea that you will want to launch your platform after the course.</p><p>Your platform should be described in the project report, so in this part of the project, you will not do any programming, but only work on your report. You should be able to complete at least the <em>Introduction</em> chapter.</p><p>When you&#39;re done describing your idea in the report, discuss it with a teacher at one of the lab sessions, or some friends to get some initial feedback on your idea and can improve it. Then you are recommended to upload the current version of your report to Canvas by submitting the assignment <a href="https://ju.instructure.com/courses/4775/assignments/25247" target="_blank" rel="noopener noreferrer">Platform Idea`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to get some feedback on your idea from the examiner.</p><h2 id="part-4-setting-up-docker" tabindex="-1"><a class="header-anchor" href="#part-4-setting-up-docker" aria-hidden="true">#</a> Part 4: Setting up docker</h2><p>Before you start working on this part you must:</p><ul><li>Complete and be approved on the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/laboratory-work/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Laboratory Work`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Laboratory Work")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`.</li></ul><hr><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/docker-basics/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Docker Basics`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Docker Basics")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>The web application should be implemented in Node.js using the Express framework (feel free to use <a href="https://koajs.com/" target="_blank" rel="noopener noreferrer">Koa`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> instead of Express if you are willing to learn it (not officially part of this course, so you can&#39;t expect to get any help with it from the lab assistants)), and the resources on the platform should be stored in a MySQL database. We could create a Docker container that contains both, but when it comes to containerization it is better that a container just has a single responsibility, e.g. to just run the web application or to just run the database. Among other things, it is much easier to scale a container that has a single responsibility. Therefore, the web application should run in one container, and the database should run in another container.</p><h3 id="the-web-application-image" tabindex="-1"><a class="header-anchor" href="#the-web-application-image" aria-hidden="true">#</a> The Web Application image</h3><p>Start by creating a new folder to store all the source code for the entire platform. In this document we will refer to this folder as <code>/platform</code> (you should of course use a more unique/descriptive name than <code>platform</code>). This is the folder you want to version control, so here you also want to initialize your Git repository. Then create a sub-folder inside this one to store the source code for the web application. In this document we will refer to that sub-folder as <code>/platform/web-application</code>.</p><p>In <code>/platform/web-application</code>, run the following commands:</p><ol><li><code>npm init --yes</code> - Creates <code>packages.json</code>.</li><li><code>npm install express</code> - Registers a dependency on the npm package <code>express</code>.</li></ol><p>Then create the file <code>/platform/web-application/app.js</code> with the content shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The content of the file app.js (Hello World with Express)." }, {
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
  response<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>send</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Hello, World&quot;</span><span class="token punctuation"${
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
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
  console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Web application listening on port 8080.&quot;</span><span class="token punctuation"${
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
                (0,external_vue_.createTextVNode)("\n  response"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "send"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Hello, World\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\napp"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "listen"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "8080"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n  console"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Web application listening on port 8080.\""),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Verify that the code you have written so far works by starting the web application using the command <code>node app.js</code> in <code>/platform/web-application</code> and then visit <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in a web browser and verify that you see the text <em>Hello, World</em>. If you do, then it works as it should, and you can stop running the web application.</p><p>You just ran the web application as an ordinary program on your own computer. Let&#39;s try to run it in a container using Docker instead. To do that we need to tell Docker which environment our code needs to run, and how it should be started. To do that we need to put our code in a Docker image that contains all this information, and then ask Docker to start running that image in a new Docker container.</p><p>To specify the environment in the image one usually inherit the environment from an existing image. The <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">Docker Hub`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> contains a collection of images we can use, and in our case we need an image with Node.js pre-installed. Node.js provides <em>official images</em> that comes with Node.js pre-installed, so try searching for <code>node</code> there and find a suitable image (e.g. <code>node:13.5.0</code>). Then create a file called <code>Dockerfile</code> in <code>/platform/web-application</code> that looks something like what shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The content of the Dockerfile in the web application folder." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>FROM node:13.5.0

EXPOSE 8080

WORKDIR /web-application

COPY package*.json ./

RUN npm install

COPY app.js ./

CMD [&quot;node&quot;, &quot;app.js&quot;]
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "FROM node:13.5.0\n\nEXPOSE 8080\n\nWORKDIR /web-application\n\nCOPY package*.json ./\n\nRUN npm install\n\nCOPY app.js ./\n\nCMD [\"node\", \"app.js\"]\n")
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
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Start Docker Desktop for Windows</p><p>Before you use any docker command you must start the Docker Desktop for Windows application.</p></div><p>Docker can then use the information in <code>Dockerfile</code> to build a new image that contains your source code and Node.js to run it. To do that, run the command <code>docker build --tag=my-web-app:latest .</code> in <code>/platform/web-application</code>. This tells Docker to build the image and to add it to its own collection of images on your computer. At the same time, it will also download the <code>node:13.5.0</code> image from Docker Hub (unless it has already done that).</p><p>To run the image in a new container, run the command <code>docker run -p 3000:8080 my-web-app:latest</code>. When the container is running you should be able to send HTTP requests to your web application by opening <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in a web browser on your computer. The command used to start the container told Docker that all incoming traffic to port 3000 on your computer should be forwarded to the container&#39;s port 8080.</p><p>On Mac and Linux you can stop the container from running by pressing <code>[CTRL]</code> + <code>[C]</code>. On Windows you also need to run the command <code>docker container ls</code> to retrieve the name of the container and then run the command <code>docker container stop theContainerName</code>.</p><p>Now you know the basics about creating, running and stopping Docker containers. You probably also want to create a <code>.dockerignore</code> file as described at <a href="https://nodejs.org/en/docs/guides/nodejs-docker-webapp/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/docs/guides/nodejs-docker-webapp/`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, so you more conveniently can build an image with multiple source files. That page is good reading even if you don&#39;t want to create a <code>.dockerignore</code> file, so read it!</p><p>Your workflow will kind of be:</p><ol><li>Make changes to the source code files on your computer.</li><li>Build a new image.</li><li>Run the new image in a new container.</li><li>Test your web application in a web browser.</li><li>Stop the container from running.</li><li>Restart on #1.</li></ol><p>To manually carry out these steps each time you want to test changes you make to the source code is quite time consuming and boring. Docker has a solution to this problem: volumes. With volumes you can make a container read files stored on your computer. This can be used to always give the container access to the latest version of your files in a specific folder.</p><div class="custom-container tip"><p class="custom-container-title">Volumes on Windows</p><p>When using volumes on Windows, the recommendation is to put the volumes (in your case all your source code) directly in the filesystem on the Linux distribution you are running in Windows Subsystem for Linux, instead of in the file system for Windows. Read more about it in <a href="https://docs.docker.com/docker-for-windows/wsl/#best-practices" target="_blank" rel="noopener noreferrer">Docker&#39;s best practices`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><div class="custom-container danger"><p class="custom-container-title">Volumes on Windows</p><p>If you don&#39;t put your source code on the filesystem for your Linux instance, it&#39;s is a bit uncleared how to specify paths to folders in Windows. <a href="https://github.com/docker/for-win/issues/6628#issuecomment-635906394" target="_blank" rel="noopener noreferrer">One comment on GitHub`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> suggests several different ways to do it, but not all of them have worked for me (Peter) in Docker 3. <code>/host_mnt/c/path/to/folder</code> did work, so that&#39;s the one used in the instructions below.</p></div><p>Using a volume is quite easy. When you start a container with the <code>docker run</code> command you also specify which folders that should be synched using the <code>-v</code> option, like (on Windows) <code>docker run -v /host_mnt/c/folder/on/host/computer:/folder/in/container</code> (plus the <code>-p</code> for port forwarding as before). You don&#39;t want to use the entire <code>/platform/web-application</code> folder as your volume (the <code>node_modules</code> folder in it and some other files/folder should not be synched, only the code you&#39;ve written), so it might be a good idea to put your source code files in a new folder, for example called <code>/platform/web-application/src</code>, and use volumes to synch only this subfolder instead.</p><p>However, synching files is not enough to keep your web application in the container up to date. Each time a JavaScript file changes the web application running in the container needs to be restarted. To make that happen we can use an npm package called <a href="https://nodemon.io/" target="_blank" rel="noopener noreferrer">nodemon`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Simply:</p><ol><li>Install <code>nodemon</code> by running the command <code>npm install nodemon</code> in <code>/platform/web-application</code>.</li></ol><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Since <code>nodemon</code> is only needed during development, and not when the application runs for real on a server, you should really add this package in the <code>devDependencies</code> list in <code>package.json</code>, instead of the ordinary <code>dependencies</code> section.</p><p>Read mor about this in the docs <a href="https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file" target="_blank" rel="noopener noreferrer">Specifying dependencies and devDependencies in a package.json file`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><ol start="2"><li>Change <code>package.json</code> to contain a script called <code>start</code> that executes <code>nodemon src/app.js -L</code>.</li></ol><div class="custom-container warning"><p class="custom-container-title">Volumes on Windows</p><p>If you have put your source code on the file system for the Linux distribution in Windows Subsystem for Linux, then you can skip the <code>-L</code> flag. That flag activates a workaround causing the computer to do more work than it should need to, but the flag is required if you put your source code on the Windows file system. To learn why, read <a href="https://docs.docker.com/docker-for-windows/wsl/#best-practices" target="_blank" rel="noopener noreferrer">Docker&#39;s best practices`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> and <a href="https://github.com/remy/nodemon#application-isnt-restarting" target="_blank" rel="noopener noreferrer">nodemon&#39;s docs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>Docker has a setting called <code>Use the WSL 2 based engine</code>. For Windows 10 Home users, this option must be checked. For Windows 10 Pro users, this option can be unchecked, in which case volumes will work a little bit different, and you don&#39;t don&#39;t need to use <code>-L</code> flag if your source code is placed on Windows file system. However, you will still get overall better performance by leaving this option checked and place your source code on the file system for the Linux distribution you are running on Windows Subsystem for Linux (according to Docker).</p></div><ol start="3"><li>Change your <code>Dockerfile</code> to start the web application with the command <code>npm run start</code>.</li></ol><p>When you have built and run this new image and used volumes to synch folders the web application in the container should restart as soon as you change any JavaScript file the web application is dependent on. Your new workflow will simply be:</p><ol><li>Build and run the image using volumes.</li><li>Make changes to JavaScript code on your computer (Docker will automatically synch the files to the container, and <code>nodemon</code> in the container will restart the web application when this happens).</li><li>See the changes in your web browser.</li><li>Restart on #2.</li></ol><div class="custom-container warning"><p class="custom-container-title">Installing new npm packages</p><p>When you install a new npm package you need to restart on #1 above. The container will only read the <code>dependencies</code> list in <code>package.json</code> and download the npm packages to the <code>node_modules</code> folder when you build the image.</p></div><p>If you want to be able to debug your Node.js application from Visual Studio Code, you need to tell Visual Studio Code how to connect to the Node.js application running in the container. The tutorial <a href="https://blog.theodo.com/2018/10/setting-debugger-node-js-docker-vs-code/" target="_blank" rel="noopener noreferrer">Setting up Debugger for Node.js in Docker with VS code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> shows you how you can do that. That tutorial makes use of Docker Compose, which you will start using after you have created a database image to run your database.</p><p>You have now successfully setup a project suitable for implementing a web application in Node.js with Docker containers. Good job!</p><h3 id="the-database-image" tabindex="-1"><a class="header-anchor" href="#the-database-image" aria-hidden="true">#</a> The Database image</h3><p>Since the MySQL database should run in a separate container, let us do something similar for the database as we did for the web application.</p><p>Start by creating a new folder inside <code>/platform</code> to store information about the database image. In this document we will refer to that sub-folder as <code>/platform/database</code>. Create a new file in this sub-folder called <code>Dockerfile</code> with the content similar to the one in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. That Dockerfile describes an image inheriting from <code>mysql:5.7.24</code>, which is an image that runs a MySQL server. Read more about <a href="https://hub.docker.com/_/mysql" target="_blank" rel="noopener noreferrer">the MySQL image`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Docker Hub.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The content of Dockerfile in the database folder." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>FROM mysql:5.7.24

COPY initialize-database.sql /docker-entrypoint-initdb.d/
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "FROM mysql:5.7.24\n\nCOPY initialize-database.sql /docker-entrypoint-initdb.d/\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Then create a new file in <code>/platform/database</code> called <code>initialize-database.sql</code>. The SQL code you write in that file will be executed by the MySQL server when it starts, so in this file you can write SQL code that creates the tables in the database your platform needs.</p><p>The database image can be started and stopped in the same way as your web application image. After you have started it you should be able to connect to it from your host computer using <a href="http://localhost:3306" target="_blank" rel="noopener noreferrer">http://localhost:3306`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (or the Docker Machine&#39;s IP address). If you have a MySQL Database Management Tool (such as <a href="https://www.mysql.com/products/workbench/" target="_blank" rel="noopener noreferrer">MySQL Workbench`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> or one of the <a href="https://marketplace.visualstudio.com/search?term=mysql&amp;target=VSCode" target="_blank" rel="noopener noreferrer">MySQL extensions to Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>), try it out!</p><h3 id="using-docker-compose" tabindex="-1"><a class="header-anchor" href="#using-docker-compose" aria-hidden="true">#</a> Using Docker Compose</h3><p>Docker has a tool called <a href="https://docs.docker.com/compose/" target="_blank" rel="noopener noreferrer">Docker Compose`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> that greatly simplifies for us to start and stop multiple containers at the same time, as well as handle the connection between them (which we need, since the web application needs to communicate with the database). To use it, simply create a file in <code>/platform</code> called <code>docker-compose.yml</code> with the content shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The content of docker-compose.yml in /platform." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>version: &#39;3&#39;
services:
  &quot;web-application&quot;:
    build: &quot;./web-application&quot;
    ports:
      - &quot;3000:8080&quot;
      - &quot;9229:9229&quot;
    volumes:
      - &quot;./web-application/src:/web-application/src&quot;
    depends_on:
      - database
  database:
    build: ./database
    ports:
      - &quot;3306:3306&quot;
    environment:
      - MYSQL_ROOT_PASSWORD=theRootPassword
      - MYSQL_DATABASE=webAppDatabase
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
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "version: '3'\nservices:\n  \"web-application\":\n    build: \"./web-application\"\n    ports:\n      - \"3000:8080\"\n      - \"9229:9229\"\n    volumes:\n      - \"./web-application/src:/web-application/src\"\n    depends_on:\n      - database\n  database:\n    build: ./database\n    ports:\n      - \"3306:3306\"\n    environment:\n      - MYSQL_ROOT_PASSWORD=theRootPassword\n      - MYSQL_DATABASE=webAppDatabase\n")
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
  }, _parent))
  _push(`<p>Your images can now be built and started in containers using the <code>docker-compose up</code> command in <code>/platform</code>, and the web application can now use the domain name <code>database</code> to connect to the MySQL database that runs in another container.</p><div class="custom-container tip"><p class="custom-container-title">Rebuilding images</p><p><code>docker-compose up</code> will run the latest build of your images. If you make changes to an image, you need to rebuild it before using <code>docker-compose up</code>, or simply use the command <code>docker-compose up --build</code>.</p></div><div class="custom-container warning"><p class="custom-container-title">Handling anonymous volumes</p><p>The MySQL image uses an anonymous volume to store it&#39;s data, and by default it&#39;s only created the first time you start it using <code>docker-compose up</code>. A result of this is that your SQL code in the <code>/docker-entrypoint-initdb.d/</code> in the image will only be executed the first time you start it with <code>docker-compose up</code>. The next time you run <code>docker-compose up</code> it will resume using the tables from before and not execute your SQL code in <code>/docker-entrypoint-initdb.d/</code>. This is usually NOT what you want. You can get around this by using the command <code>docker-compose down</code> before you run <code>docker-compose up</code>, or you can add the flag <code>--renew-anon-volumes</code> (short form is <code>-V</code>) to <code>docker-compose up</code>.</p><p>For more information, see <a href="https://github.com/docker/compose/issues/2127" target="_blank" rel="noopener noreferrer">Issue #2127 in the Docker Compose repository`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h2 id="part-5-implementing-the-web-application" tabindex="-1"><a class="header-anchor" href="#part-5-implementing-the-web-application" aria-hidden="true">#</a> Part 5: Implementing the Web Application</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/layered-architecture-in-node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Layered Architecture in Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Layered Architecture in Node.js")
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
  _push(`</li></ul></li></ul><hr><p>Implement the website using a three-layered architecture:</p><ul><li><strong>The Presentation Layer</strong> should only receive HTTP requests and generate and send back HTTP responses. This is the only layer that should use HTTP, Sessions, Cookies, HTML and CSS (and client-side JavaScript, if you want), so it is only in this layer we will be using Express. It will carry out the HTTP request by telling the Business Logic Layer what to do.</li><li><strong>The Business Logic Layer</strong> should only do computations. This includes applying business logic rules such as validation as authorization. If the Business Logic Layer needs to store/retrieve/update/delete any resource, it will simply ask the Data Access Layer to do that for it.</li><li><strong>The Data Access Layer</strong> should only be responsible for persistence of the resources, in this case stored in a MySQL database. It should provide operations one can use to store/retrieve/update/delete resources in the database. This is the only layer where you should use SQL.</li></ul>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below is a visualization of a three-layered architecture. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A three-layered architecture. The Presentation Layer is the one receiving HTTP requests from clients, to carry them out is uses the Business Logic Layer, and so on." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tsubgraph Web Application\n\t\tpl(Presentation Layer)\n\t\tbll(Business Logic Layer)\n\t\tdal(Data Access Layer)\n\tend\n\tdb[Database]\n\twb --HTTP--> pl\n\tpl --> bll\n\tbll --> dal\n\tdal --SQL--> db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tsubgraph Web Application\n\t\tpl(Presentation Layer)\n\t\tbll(Business Logic Layer)\n\t\tdal(Data Access Layer)\n\tend\n\tdb[Database]\n\twb --HTTP--> pl\n\tpl --> bll\n\tbll --> dal\n\tdal --SQL--> db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>There exists different ways one can separate the code into these three layers. The simplest way is probably to just create three different folders, one for each layer, and then put all code belonging to a layer in the corresponding folder.</p><p>To help you get started you can use the skeleton code available in the ZIP file <a href="files/the-community.zip">the-community.zip</a>.</p><p>On your platform, users should at least be able to create new resources and to browse and view existing resources. You do not need to implement update and delete functionality; that is an extra task you can complete at the end of the course if you have time for it. You neither need to implement authorization/login functionality now. That is the next part of the project work.</p><h2 id="part-6-adding-authorization" tabindex="-1"><a class="header-anchor" href="#part-6-adding-authorization" aria-hidden="true">#</a> Part 6: Adding Authorization</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/handling-concurrent-http-requests/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Handling Concurrent HTTP Requests`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Handling Concurrent HTTP Requests")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/scaling-web-applications/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Scaling Web Applications`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Scaling Web Applications")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/scaling-databases/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Scaling Databases`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Scaling Databases")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>When the web application receives a successful sign in request from a client it needs to remember to which account that client signed in to, so it knows that when it receives requests from that client in the future. To do that one usually uses sessions. A session contains information about a client stored on the server-side. Where the sessions are stored on the server-side has a major impact on how the web application can be scaled.</p><p>The most common used approach to scaling web applications is by running multiple instances of them and use a load balancer to distribute the load (the HTTP requests) between them, as seen in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Each instance can for example run in its own Docker container or on its own server. When the load increases, we just launch more instances to handle it, and when the load decreases, we just remove some of the instances (so we don&#39;t need to pay for having servers up and running that don&#39;t do any work).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A common used architecture for scaling. The Load Balancer receives HTTP requests from Clients and then forwards them to (one of) the Web Application Instances." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tclients[Clients]\n\tlb[Load Balancer]\n\twai1[Web Application Instance 1]\n\twai2[Web Application Instance 2]\n\twain[Web Application Instance n]\n\tdb[Database]\n\tclients --HTTP--> lb\n\tlb --HTTP--> wai1 --SQL-->db\n\tlb --HTTP--> wai2 --SQL-->db\n\tlb --HTTP--> wain --SQL-->db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tclients[Clients]\n\tlb[Load Balancer]\n\twai1[Web Application Instance 1]\n\twai2[Web Application Instance 2]\n\twain[Web Application Instance n]\n\tdb[Database]\n\tclients --HTTP--> lb\n\tlb --HTTP--> wai1 --SQL-->db\n\tlb --HTTP--> wai2 --SQL-->db\n\tlb --HTTP--> wain --SQL-->db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>With this architecture, if the sessions are stored locally in the web application instances, then each clients&#39; HTTP request must be forwarded to the same instance all the time, because it is only that instance that have access to the client&#39;s session. This can be achieved with a technique called sticky sessions (the load balancer tells the client to create a cookie specifying which web application instance it should forward the requests from that particular client to), but a solution that is easier to implement is to simply store the sessions in the database. This works since all web application instances are connected to the same database, so they store the sessions at the same place. However, fetching the session from the database for each request will make it take a little bit longer to carry out the requests, so this solution is not necessarily the best one.</p><p>The sessions could be stored in the MySQL database we already have, but sessions are just temporary data. They don&#39;t really have anything to do with the data we store in our MySQL database, so why use the same database? According to the single responsibility principle it is much better to store it in another database, ones whose only responsibility it to store sessions. Since sessions don&#39;t consist of any relational data, it is better to use a NoSQL database instead of a relational database since NoSQL databases often are faster and easier to scale than relational databases. The type of NoSQL database that makes most sense for this use-case is a key-value database (the session id is used as the key, and the session itself as the value).</p><p>Add another container to your solution that runs a Redis database, which is a key-value database. Then connect to it from your web application and store your sessions in it. In your web application you will:</p><ul><li>Use the npm package <a href="https://github.com/expressjs/session" target="_blank" rel="noopener noreferrer">express-session`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to add session support to Express.</li><li>Use the npm package <a href="https://github.com/tj/connect-redis" target="_blank" rel="noopener noreferrer">connect-redis`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to store the sessions in a Redis database.</li></ul><p>Then add the login feature to your web application and add authorization. Remember that sessions are something we use to make HTTP stateful (hence we only use them in the presentation layer) and authorization is something we should implement in the business logic layer (which users that are authorized to do what should be independent of how they use our application).</p><h2 id="part-7-using-dependency-injection" tabindex="-1"><a class="header-anchor" href="#part-7-using-dependency-injection" aria-hidden="true">#</a> Part 7: Using Dependency Injection</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/dependency-injection-in-node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Dependency Injection in Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Dependency Injection in Node.js")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>The three layers the web application consists of have some dependencies:</p><ul><li>The <code>Presentation Layer</code> has some dependencies on the <code>Business Logic Layer</code>.</li><li>The <code>Business Logic Layer</code> has some dependencies on the <code>Data Access Layer</code>.</li></ul><p>These dependencies are hardcoded at multiple places, as shown in the tabs below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Presentation Layer" }, {
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
              }>// account-router.js</span>

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
<span class="token comment"${
                _scopeId
              }>// Here we have hardcoded a dependency on the account manager.</span>
<span class="token keyword"${
                _scopeId
              }>const</span> accountManager <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;../business-logic-layer/account-manager&#39;</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token keyword"${
                _scopeId
              }>const</span> router <span class="token operator"${
                _scopeId
              }>=</span> express<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>Router</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>

router<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;/&quot;</span><span class="token punctuation"${
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
  accountManager<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getAllAccount</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>errors<span class="token punctuation"${
                _scopeId
              }>,</span> accounts</span><span class="token punctuation"${
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
      errors<span class="token operator"${
                _scopeId
              }>:</span> errors<span class="token punctuation"${
                _scopeId
              }>,</span>
      accounts<span class="token operator"${
                _scopeId
              }>:</span> accounts
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
              }>&quot;accounts-list-all.hbs&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> model<span class="token punctuation"${
                _scopeId
              }>)</span>
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

module<span class="token punctuation"${
                _scopeId
              }>.</span>exports <span class="token operator"${
                _scopeId
              }>=</span> router
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
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-router.js"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" express "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'express'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Here we have hardcoded a dependency on the account manager."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" accountManager "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'../business-logic-layer/account-manager'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" router "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" express"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Router"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\nrouter"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/\""),
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
                      (0,external_vue_.createTextVNode)("\n  accountManager"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccount"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createTextVNode)("errors"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(" accounts")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" model "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      errors"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n      accounts"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" accounts\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "render"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accounts-list-all.hbs\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" model"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\nmodule"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("exports "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" router\n")
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
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Business Logic Layer" }, {
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
              }>// account-manager.js</span>

<span class="token comment"${
                _scopeId
              }>// Here we have hardcoded a dependency on the account repository.</span>
<span class="token keyword"${
                _scopeId
              }>const</span> accountRepository <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;../data-access-layer/account-repository&#39;</span><span class="token punctuation"${
                _scopeId
              }>)</span>

exports<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function-variable function"${
                _scopeId
              }>getAllAccounts</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  accountRepository<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getAllAccounts</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>errors<span class="token punctuation"${
                _scopeId
              }>,</span> accounts</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token function"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>(</span>errors<span class="token punctuation"${
                _scopeId
              }>,</span> accounts<span class="token punctuation"${
                _scopeId
              }>)</span>
  <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-manager.js"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Here we have hardcoded a dependency on the account repository."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" accountRepository "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'../data-access-layer/account-repository'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\nexports"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  accountRepository"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccounts"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createTextVNode)("errors"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(" accounts")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Data Access Layer" }, {
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
              }>// account-repository.js</span>

<span class="token comment"${
                _scopeId
              }>// No dependency on another layer, but shown for completeness.</span>
<span class="token keyword"${
                _scopeId
              }>const</span> mysql <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>require</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;mysql&#39;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
<span class="token keyword"${
                _scopeId
              }>const</span> connection <span class="token operator"${
                _scopeId
              }>=</span> mysql<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>connect</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token operator"${
                _scopeId
              }>...</span><span class="token punctuation"${
                _scopeId
              }>)</span>

exports<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function-variable function"${
                _scopeId
              }>getAllAccounts</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  <span class="token keyword"${
                _scopeId
              }>const</span> query <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;SELECT * FROM accounts ORDER BY username&quot;</span>
  connection<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>query</span><span class="token punctuation"${
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
              }>,</span> accounts</span><span class="token punctuation"${
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
      <span class="token function"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token string"${
                _scopeId
              }>&quot;Database error&quot;</span><span class="token punctuation"${
                _scopeId
              }>]</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token keyword"${
                _scopeId
              }>null</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token keyword"${
                _scopeId
              }>else</span><span class="token punctuation"${
                _scopeId
              }>{</span>
      <span class="token function"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token punctuation"${
                _scopeId
              }>]</span><span class="token punctuation"${
                _scopeId
              }>,</span> accounts<span class="token punctuation"${
                _scopeId
              }>)</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-repository.js"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// No dependency on another layer, but shown for completeness."),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" mysql "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'mysql'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" connection "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" mysql"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "connect"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "..."),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\nexports"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" query "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"SELECT * FROM accounts ORDER BY username\""),
                      (0,external_vue_.createTextVNode)("\n  connection"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "query"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("query"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createTextVNode)("error"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(" accounts")
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
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Database error\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Presentation Layer" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-router.js"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" express "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'express'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Here we have hardcoded a dependency on the account manager."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" accountManager "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'../business-logic-layer/account-manager'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" router "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" express"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Router"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\nrouter"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/\""),
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
                    (0,external_vue_.createTextVNode)("\n  accountManager"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccount"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createTextVNode)("errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" model "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      errors"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" errors"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n      accounts"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" accounts\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "render"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accounts-list-all.hbs\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" model"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\nmodule"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("exports "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" router\n")
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
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Business Logic Layer" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-manager.js"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Here we have hardcoded a dependency on the account repository."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" accountRepository "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'../data-access-layer/account-repository'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\nexports"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  accountRepository"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccounts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createTextVNode)("errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("errors"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" accounts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Data Access Layer" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-repository.js"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// No dependency on another layer, but shown for completeness."),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" mysql "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'mysql'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" connection "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" mysql"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "connect"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "..."),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\nexports"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" query "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"SELECT * FROM accounts ORDER BY username\""),
                    (0,external_vue_.createTextVNode)("\n  connection"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "query"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("query"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createTextVNode)("error"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts")
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
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Database error\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" accounts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
  _push(`<p>Hardcoding dependencies like this makes our web application less flexible. For example, each time we use the account manager, the account manager will always use the account repository that works with the data in the MySQL databases. You might think this is not such a big deal, because that&#39;s what we want to happen when our web application runs, right? Yes, if we want to use the code to run the web application, then yes, that is what we want to happen. But what if we write tests and just want to run the code inside the account manager to test if that works? Then we don&#39;t necessarily want the account manager to make use of the account repository that communicates with the MySQL database, because if the test fails when we run it, then the problem could just as well be in the account repository (e.g. broken connection to the database).</p><p>When we test the code in the account manager using tests we have written, we don&#39;t necessarily want it to use the account repository that makes use of the MySQL database. Instead, we can provide a mockup of the account repository, as the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Mockup of the account repository in the Data Access Layer." }, {
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
        }>const</span> allAccounts <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span> <span class="token comment"${
          _scopeId
        }>// All accounts are stored in this array.</span>

exports<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function-variable function"${
          _scopeId
        }>getAllAccounts</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
  <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span> allAccounts<span class="token punctuation"${
          _scopeId
        }>)</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" allAccounts "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// All accounts are stored in this array."),
                (0,external_vue_.createTextVNode)("\n\nexports"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n  "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" allAccounts"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>For our tests, we want the account manager to make use of the mockup version of the account repository, and when we run the web application for real we want the account manager to make use of the account repository that makes use of the MySQL database. Because of this, we can&#39;t hardcode the dependencies we have.</p><div class="custom-container tip"><p class="custom-container-title">Mockups not only for testing</p><p>Mockups are not necessarily only created for our own code when doing testing. Another example is making use of third-party services through APIs that costs money. When our web application runs in production for real, we want to make use of the real third-party API and are willing to pay for using it, but when we run it locally on our own computers for development/testing, we don&#39;t want to pay for using it, so we use a mockup version instead.</p></div><p>So, in our account manager, we can&#39;t hardcode which version of the account repository we should use. Instead, the account repository that should be used should be injected to the account manager. The account manager itself doesn&#39;t care about which account repository it uses as long as it has access to the one it should be using. We say that the account manager is dependent on the interface of the account repository, which means that all different account repositories we implement must expose the same set of functions/same interface the account manager can use.</p><p>When we start the program, we specify which account repository to use, and then when we use the account manager it will use the account repository we specified. How we make all this happen depends on which dependency injection framework/container we use. The npm package <a href="https://github.com/jeffijoe/awilix" target="_blank" rel="noopener noreferrer">awilix`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> gives us this functionality. The figures below shows one way to use it.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Data Access Layer" }, {
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
              }>// account-repository.js</span>

module<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function-variable function"${
                _scopeId
              }>exports</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>{</span><span class="token punctuation"${
                _scopeId
              }>}</span></span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  <span class="token comment"${
                _scopeId
              }>// Name all the dependencies in the curly brackets above (none in this case). </span>
  
  <span class="token keyword"${
                _scopeId
              }>const</span> allAccounts <span class="token operator"${
                _scopeId
              }>=</span> <span class="token punctuation"${
                _scopeId
              }>[</span><span class="token punctuation"${
                _scopeId
              }>]</span>
  
  <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token function-variable function"${
                _scopeId
              }>getAllAccounts</span><span class="token operator"${
                _scopeId
              }>:</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
      <span class="token function"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token punctuation"${
                _scopeId
              }>]</span><span class="token punctuation"${
                _scopeId
              }>,</span> allAccounts<span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token punctuation"${
                _scopeId
              }>}</span>
    <span class="token comment"${
                _scopeId
              }>// Continue to list all other functions in account repository here.</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-repository.js"),
                      (0,external_vue_.createTextVNode)("\n\nmodule"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "exports"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Name all the dependencies in the curly brackets above (none in this case). "),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" allAccounts "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" allAccounts"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Continue to list all other functions in account repository here."),
                      (0,external_vue_.createTextVNode)("\n  "),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Business Logic Layer" }, {
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
              }>// account-manager.js</span>

module<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function-variable function"${
                _scopeId
              }>exports</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>{</span>accountRepository<span class="token punctuation"${
                _scopeId
              }>}</span></span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  <span class="token comment"${
                _scopeId
              }>// Name all the dependencies in the curly brackets above.</span>
  
  <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    <span class="token function-variable function"${
                _scopeId
              }>getAllAccounts</span><span class="token operator"${
                _scopeId
              }>:</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
      accountRepository<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getAllAccounts</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>errors<span class="token punctuation"${
                _scopeId
              }>,</span> accounts</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
        <span class="token function"${
                _scopeId
              }>callback</span><span class="token punctuation"${
                _scopeId
              }>(</span>errors<span class="token punctuation"${
                _scopeId
              }>,</span> accounts<span class="token punctuation"${
                _scopeId
              }>)</span>
      <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    <span class="token punctuation"${
                _scopeId
              }>}</span>
    <span class="token comment"${
                _scopeId
              }>// Continue to list all other functions in account manager here.</span>
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-manager.js"),
                      (0,external_vue_.createTextVNode)("\n\nmodule"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "exports"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("accountRepository"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Name all the dependencies in the curly brackets above."),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      accountRepository"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccounts"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createTextVNode)("errors"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(" accounts")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Continue to list all other functions in account manager here."),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Presentation Layer" }, {
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
              }>// account-router.js</span>

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

module<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function-variable function"${
                _scopeId
              }>exports</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>{</span>accountManager<span class="token punctuation"${
                _scopeId
              }>}</span></span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  <span class="token comment"${
                _scopeId
              }>// Name all the dependencies in the curly brackets above.</span>
  
  <span class="token keyword"${
                _scopeId
              }>const</span> router <span class="token operator"${
                _scopeId
              }>=</span> express<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>Router</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>)</span>
  
  router<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;/&quot;</span><span class="token punctuation"${
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
    accountManager<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>getAllAccount</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token keyword"${
                _scopeId
              }>function</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>errors<span class="token punctuation"${
                _scopeId
              }>,</span> accounts</span><span class="token punctuation"${
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
        errors<span class="token operator"${
                _scopeId
              }>:</span> errors<span class="token punctuation"${
                _scopeId
              }>,</span>
        accounts<span class="token operator"${
                _scopeId
              }>:</span> accounts
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
              }>&quot;accounts-list-all.hbs&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> model<span class="token punctuation"${
                _scopeId
              }>)</span>
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
  
  <span class="token keyword"${
                _scopeId
              }>return</span> router
  
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-router.js"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" express "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'express'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\nmodule"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "exports"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("accountManager"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Name all the dependencies in the curly brackets above."),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" router "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" express"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "Router"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n  \n  router"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/\""),
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
                      (0,external_vue_.createTextVNode)("\n    accountManager"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccount"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                        (0,external_vue_.createTextVNode)("errors"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)(" accounts")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" model "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n        errors"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n        accounts"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" accounts\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n      response"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "render"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accounts-list-all.hbs\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" model"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n  \n  "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(" router\n  \n"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Data Access Layer" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-repository.js"),
                    (0,external_vue_.createTextVNode)("\n\nmodule"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "exports"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Name all the dependencies in the curly brackets above (none in this case). "),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" allAccounts "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" allAccounts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Continue to list all other functions in account repository here."),
                    (0,external_vue_.createTextVNode)("\n  "),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Business Logic Layer" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-manager.js"),
                    (0,external_vue_.createTextVNode)("\n\nmodule"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "exports"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("accountRepository"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Name all the dependencies in the curly brackets above."),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "getAllAccounts"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      accountRepository"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccounts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createTextVNode)("errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("errors"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" accounts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Continue to list all other functions in account manager here."),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Presentation Layer" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// account-router.js"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" express "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'express'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\nmodule"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "exports"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("accountManager"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Name all the dependencies in the curly brackets above."),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" router "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" express"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "Router"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n  \n  router"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/\""),
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
                    (0,external_vue_.createTextVNode)("\n    accountManager"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getAllAccount"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                      (0,external_vue_.createTextVNode)("errors"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" accounts")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" model "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n        errors"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" errors"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n        accounts"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" accounts\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n      response"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "render"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accounts-list-all.hbs\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" model"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n  \n  "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(" router\n  \n"),
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
  _push(`<p>With Awilix we can then in the main file specify which dependencies we want to use, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. If we want to change which account repository to use, we just need to change that at line 4 in that file.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Creating an using an awilix container to resolve dependencies." }, {
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
        }>const</span> awilix <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>require</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;awilix&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token comment"${
          _scopeId
        }>// Import the ones we want to use (real or mockup), real in this case.</span>
<span class="token keyword"${
          _scopeId
        }>const</span> accountRepository <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>require</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;data-access-layer/account-repository&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>const</span> accountManager <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>require</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;business-logic-layer/account-manager&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>const</span> accountRouter <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>require</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;presentation-layer/account-router&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token comment"${
          _scopeId
        }>// Create a container and add the dependencies we want to use.</span>
<span class="token keyword"${
          _scopeId
        }>const</span> container <span class="token operator"${
          _scopeId
        }>=</span> awilix<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>createContainer</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span>
container<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>register</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;accountRepository&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> awilix<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>asFunction</span><span class="token punctuation"${
          _scopeId
        }>(</span>accountRepository<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
container<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>register</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;accountManager&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> awilix<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>asFunction</span><span class="token punctuation"${
          _scopeId
        }>(</span>accountManager<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
container<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>register</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;accountRouter&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> awilix<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>asFunction</span><span class="token punctuation"${
          _scopeId
        }>(</span>accountRouter<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>

<span class="token comment"${
          _scopeId
        }>// Retrieve the router, which resolves all other dependencies.</span>
<span class="token keyword"${
          _scopeId
        }>const</span> theAccountRouter <span class="token operator"${
          _scopeId
        }>=</span> container<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>resolve</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;accountRouter&quot;</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" awilix "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'awilix'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Import the ones we want to use (real or mockup), real in this case."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" accountRepository "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'data-access-layer/account-repository'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" accountManager "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'business-logic-layer/account-manager'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" accountRouter "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "require"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'presentation-layer/account-router'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Create a container and add the dependencies we want to use."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" container "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" awilix"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "createContainer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\ncontainer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "register"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accountRepository\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" awilix"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "asFunction"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("accountRepository"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\ncontainer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "register"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accountManager\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" awilix"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "asFunction"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("accountManager"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\ncontainer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "register"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accountRouter\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" awilix"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "asFunction"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("accountRouter"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Retrieve the router, which resolves all other dependencies."),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" theAccountRouter "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" container"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "resolve"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"accountRouter\""),
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
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>So, to use dependency injection with Awilix like this you need to:</p><ol><li>Change your JavaScript files to export a single function that receives an object (the container) containing all the dependencies that should be used. <br> Note: Awilix also supports dependency injection using classes, so feel free to use the if you prefer.</li><li>In your main file, create a new Awilix container and add all these functions to it.</li><li>Retrieve the values you need from the container (most likely only the Express <code>app</code> value).</li></ol><p>If you want, feel free to use any other dependency injection method you prefer, but you can&#39;t expect to get any help from a teacher using it.</p><h2 id="part-8-multiple-data-access-layers-orm" tabindex="-1"><a class="header-anchor" href="#part-8-multiple-data-access-layers-orm" aria-hidden="true">#</a> Part 8: Multiple Data Access Layers/ORM</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/using-sequelize-in-node-js/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Using Sequelize in Node.js`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Using Sequelize in Node.js")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>Now that your web application makes use of dependency injection, let us see if it works by implementing another data access layer. The new data access layer should have the same interface as the old one (must implement the same exposed functions, must send back identical errors, etc.) but should be implemented differently. Let us implement it using an Object-Relational Mapping framework, so you get some practice on using that.</p><p>Use whichever ORM you want, but <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">Sequelize`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> is quite simple and straight forward to use. Feel free to use any database you want. Using your existing MySQL database is OK, but to practice on using Docker we recommend you add another container running another database, e.g. PostgreSQL.</p><p>When you&#39;re done your architecture could look like the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below, but when running the application only one of the Data Access Layers will be used.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Current architecture." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tsubgraph Web Application\n\t\tpl(Presentation Layer)\n\t\tbll(Business Logic Layer)\n\t\tdalMy(Data Access Layer MySQL)\n\t\tdalPost(Data Access Layer PostgreSQL)\n\tend\n\tdbMy[Database MySQL]\n\tdbPost[Database PostgreSQL]\n\twb --HTTP--> pl\n\tpl --> bll\n\tbll --> dalMy --SQL--> dbMy\n\tbll --> dalPost --SQL--> dbPost\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tsubgraph Web Application\n\t\tpl(Presentation Layer)\n\t\tbll(Business Logic Layer)\n\t\tdalMy(Data Access Layer MySQL)\n\t\tdalPost(Data Access Layer PostgreSQL)\n\tend\n\tdbMy[Database MySQL]\n\tdbPost[Database PostgreSQL]\n\twb --HTTP--> pl\n\tpl --> bll\n\tbll --> dalMy --SQL--> dbMy\n\tbll --> dalPost --SQL--> dbPost\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="part-9-adding-a-rest-api" tabindex="-1"><a class="header-anchor" href="#part-9-adding-a-rest-api" aria-hidden="true">#</a> Part 9: Adding a REST API</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
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
  _push(`</li></ul></li></ul><hr><p>Users can use the platform on their smartphones through the web browser on it, but the user experience can often be improved my implementing and let the users use a native smartphone application instead. This way, the GUI would consist of GUI components native applications use, which appear much more appealing to the user compared to the GUI components webpages consists of. Furthermore, a native application would also be able to make use of native features on the smartphone which aren&#39;t accessible through client-side JavaScript code.</p><p>However, unlike the web application, a native smartphone application can&#39;t communicate directly with our database. One need to know the username and password to the database to use it, and we can&#39;t put that in a native smartphone application, because then any hacker would be able to retrieve it from the smartphone application after they have downloaded it. Then they could login to the database and change it however they please. Instead we will add a REST API to our web application, and the native application should be able to store/retrieve/update/delete data in the database through it. The platform will be as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Overview of the platform." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tnsa[Native Smartphone Application]\n\twa[Web Application]\n\tdb[Database]\n\twb --HTTP HTML/x-www-form-urlencoded--> wa\n\tnsa --HTTP REST API JSON-->wa\n\twa --SQL-->db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tnsa[Native Smartphone Application]\n\twa[Web Application]\n\tdb[Database]\n\twb --HTTP HTML/x-www-form-urlencoded--> wa\n\tnsa --HTTP REST API JSON-->wa\n\twa --SQL-->db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The difference between the way the web browser and the native smartphone application communicates with the web application will primarily be the data format they use. Both will communicate with the web application using HTTP, but the web browser will send data (submitted forms) in the format <code>application/x-www-form-urlencoded</code> and receive back HTML code, while the native smartphone application will send and receive in the format <code>application/json</code> (JSON), which is a much simpler data format. How to remember which account the user has logged in to will also differ.</p><p>The REST API can be implemented as an additional Presentation Layer in the web application, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Since the users who use the platform through the native smartphone application should (theoretically) be able to do the same thing as users who use the platform through the web browser, we should not need to make that much changes to the code in the Business Logic Layer nor the Data Access Layer (but we might need to add code). You should be able to re-use most of the functionalities from these layers.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Current architecture (with one Data Access Layer)." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tnsa[Native Smartphone Application]\n\tsubgraph Web Application\n\t\tplw(Presentation Layer Website)\n\t\tplr(Presentation Layer REST API)\n\t\tbll(Business Logic Layer)\n\t\tdal(Data Access Layer)\n\tend\n\tdb[Database]\n\twb --HTTP HTML/x-www-form-urlencoded--> plw --> bll\n\tnsa --HTTP REST API JSON--> plr --> bll\n\tbll --> dal --SQL--> db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\twb[Web Browser]\n\tnsa[Native Smartphone Application]\n\tsubgraph Web Application\n\t\tplw(Presentation Layer Website)\n\t\tplr(Presentation Layer REST API)\n\t\tbll(Business Logic Layer)\n\t\tdal(Data Access Layer)\n\tend\n\tdb[Database]\n\twb --HTTP HTML/x-www-form-urlencoded--> plw --> bll\n\tnsa --HTTP REST API JSON--> plr --> bll\n\tbll --> dal --SQL--> db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Now the REST API can run as its own Express application in one container, and the Website runs as an Express application in its own container, and these can scale independently of each other. If you prefer, you can run both Presentation Layers in the same container. Then each Presentation Layer can export it&#39;s own Express Application object which then is used by a fourth layer (which also is an Express application). See the documentation for <a href="https://expressjs.com/en/4x/api.html#app.use" target="_blank" rel="noopener noreferrer">app.use()`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to learn how one Express Application object can make use of other Express Application objects.</p><p>The REST API needs to support the following operations:</p><ul><li>Create a new account</li><li>Login to an existing account</li><li>When logged in, apply CRUD (Create, Read, Update, Delete) operations on at least one of the other two type of resources that belongs to the account the user logged in to</li></ul><p>One usually doesn&#39;t use sessions in REST APIs to remember that a user has logged in. Sessions relies on cookies and supporting all features of cookies is hard for clients. Instead, one usually uses tokens instead, which are much simpler.</p><p>Tokens can be implemented in different ways, but the simplest way is by using JSON Web Tokens. These can easily be created and verified in Node.js using the npm package <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noopener noreferrer">jsonwebtoken`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>Implement Access Tokens as described by the <a href="https://oauth.net/2/" target="_blank" rel="noopener noreferrer">OAuth 2.0 Framework`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> and implement ID Tokens as described by the <a href="https://openid.net/connect/" target="_blank" rel="noopener noreferrer">OpenID Connect`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> specification. Use the <code>Resource Owner Password Credentials Grant</code>, and make sure to get all the details right (status code, bodies, headers, tokens, etc. should be as described in the specifications).</p><h2 id="part-10-implementing-a-single-page-application" tabindex="-1"><a class="header-anchor" href="#part-10-implementing-a-single-page-application" aria-hidden="true">#</a> Part 10: Implementing a Single-Page Application</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/content-delivery-networks/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Content Delivery Networks`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Content Delivery Networks")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/ajax/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`AJAX`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("AJAX")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/sop-and-cors/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Same-Origin Policy and Cross-Origin Resource Sharing`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Same-Origin Policy and Cross-Origin Resource Sharing")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><hr><p>Since implementing a native smartphone application is not part of this course, you will instead implement a Single-Page Application (SPA). A SPA is a website that only consists of a single webpage and a lot of client-side JavaScript code to make it appear to work as an ordinary application. When users click on links or submit forms, the web browser doesn&#39;t submit these and load a new web page. Instead, client-side JavaScript codes listens for these events and handles them itself. This way, we can add loading indicators while fetching a new &quot;page&quot;/submitting a form and add transition animations when going from one &quot;page&quot; to another, etc. to improve the user experience.</p><p>So, your next task is to implement a SPA that makes use of the REST API on the platform. In the SPA users should be able to:</p><ul><li>Create a new account.</li><li>Login to an existing account, and then: <ul><li>Apply CRUD operation for at least one of the other two type of resources.</li></ul></li></ul><p>Since the SPA only consists of static HTML, CSS and JS files (and possibly images), we don&#39;t need to implement a fancy web application to serve these files to clients requesting them. Instead, we can use a program that serves files, such as <a href="https://nginx.org/" target="_blank" rel="noopener noreferrer">nginx`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Run nginx (or whichever similar program you prefer) in a new container to serve the static files for your SPA.</p><p>Since web browsers follow the same-origin policy, your REST API needs to support cross-origin resource sharing, so if you haven&#39;t added that to it yet, do it now.</p><div class="custom-container danger"><p class="custom-container-title">Do not use frontend frameworks</p><p>Since there are no indented learning outcomes in the course about learning a frontend framework like Vue, Svelte, Angular or React, you must implement the SPA yourself from scratch. Feel free to use minor client-side JavaScript libraries you need, such as Moment.js to format dates, and CSS frameworks, such as Bootstrap.</p></div><h2 id="part-11-optional-tasks" tabindex="-1"><a class="header-anchor" href="#part-11-optional-tasks" aria-hidden="true">#</a> Part 11: Optional Tasks</h2><p>Here are some optional tasks you must complete if you want to get a grade higher than 3. Remember that completing these extra tasks does not necessarily give you a higher grade, but you have to complete them to have a chance to get a higher grade. Also, do not forget to look through the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/project-grading-guidelines/" }, {
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
  _push(`.</p><h3 id="a-fancy-website-required-for-grade-4-and-5" tabindex="-1"><a class="header-anchor" href="#a-fancy-website-required-for-grade-4-and-5" aria-hidden="true">#</a> A fancy website (required for grade 4 and 5)</h3><p>Do also implement update and delete operations for your resources on the website (this extra task is only relevant your website, and not your REST API).</p><h3 id="a-fancy-spa-required-for-grade-4-and-5" tabindex="-1"><a class="header-anchor" href="#a-fancy-spa-required-for-grade-4-and-5" aria-hidden="true">#</a> A fancy SPA (required for grade 4 and 5)</h3><p>In your single-page application, when you have sent an HTTP request to the REST API and wait for an HTTP response, show a loading indicator of some kind. When forms are submitted, users should not be able to submit the form again while you are waiting for the response.</p><p>To verify that it works as it should, you need simulate latency, so it takes a couple of seconds before you get back an HTTP response. This can be done using the <a href="https://www.w3schools.com/jsref/met_win_settimeout.asp" target="_blank" rel="noopener noreferrer">setTimeout()`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> function in your JavaScript code, or (even better) by telling the web browser to simulate it for you. The blogpost <a href="https://blog.nightly.mozilla.org/2016/11/07/simulate-slow-connections-with-the-network-throttling-tool/" target="_blank" rel="noopener noreferrer">Simulate slow connections with the network throttling tool`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> shows how to do it in Firefox.</p><h3 id="supporting-third-party-authentication-required-for-grade-5" tabindex="-1"><a class="header-anchor" href="#supporting-third-party-authentication-required-for-grade-5" aria-hidden="true">#</a> Supporting third-party authentication (required for grade 5)</h3><p>Let users create a new account on your platform by using their existing account on another platform supporting OpenID Connect instead creating yet another username and password. You can for example use Google.</p><p>This does only have to work either through the website or through the REST API. You choose which one if you don&#39;t want to implement both, and that should of course be described in your report.</p><h2 id="part-12-presentation" tabindex="-1"><a class="header-anchor" href="#part-12-presentation" aria-hidden="true">#</a> Part 12: Presentation</h2><p>Present how your platform works to the rest of your class. The reason for the presentation is two-folded:</p><ul><li>You get some practice in presenting your work, which is a very important skill in your future professional career.</li><li>You get to see a variety of different platforms implemented in a very similar same (hopefully not all platforms is about solving the same problem).</li></ul><p>Your presentation will not be graded; consider it as (mandatory) practice.</p><p>Join one of the <a href="https://ju.instructure.com/courses/4775/groups" target="_blank" rel="noopener noreferrer">Project Presentation Sessions`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas (first come, first served). Only one in each project work pair should join the Project Presentation Session you want to join. Which session you join determines when you should present your work. You will only present to the rest of the project groups in the same presentation session as you.</p><p>At the presentation, you should:</p><ul><li>Explain what the platform you have created is about, including (basically the Introduction chapter in the report): <ul><li>Why would someone use it?</li><li>What can the platform be used for?</li><li>How have you made the platform as good as possible (so users won&#39;t use any other solution)?</li><li>Explain the architecture of the platform, including (basically the Architecture chapter in the report, show figures!).</li><li>How the solution/platform is implemented. Give an overview.</li></ul></li><li>Give an overview of the implementation of each component the architecture consists of (basically an overview of the rest of the chapters in the report). Use figures!</li><li>Give a demonstration of how your solution works. A good idea is that one of you tell the other one what do to (e.g. <em>Go ahead and create a new account for me.</em>), and then the other one shows how to do that.</li></ul><p>You may use at most 15 minutes, so come prepared. You will not have time for <em>Oh, what more can I show you?</em> or <em>Wait, let me try to remember/look up how we did that</em>, so rehearse the presentation in advance. Be prepared to answer any question about your solution the audience might have.</p><p>The examiner will approve you on the Canvas assignment <a href="https://ju.instructure.com/courses/4775/assignments/25248" target="_blank" rel="noopener noreferrer">Presentation`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> after your presentation.</p><h2 id="part-13-final-submission" tabindex="-1"><a class="header-anchor" href="#part-13-final-submission" aria-hidden="true">#</a> Part 13: Final Submission</h2><p>When you&#39;re done with your work, upload it to Canvas by submitting the assignment <a href="https://ju.instructure.com/courses/4775/assignments/25249" target="_blank" rel="noopener noreferrer">Final Submission`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Be sure to follow the submission instructions described on that page.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/project-work.html.vue?vue&type=template&id=8af888b0

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/project-work.html.vue

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

/***/ 1957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e81bb480",
  "path": "/courses/web-development-advanced-concepts/project-work.html",
  "title": "Project Work",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "General information",
      "slug": "general-information",
      "children": []
    },
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
      "title": "Part 1: Joining a project group",
      "slug": "part-1-joining-a-project-group",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 2: Project Environment",
      "slug": "part-2-project-environment",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 3: Platform idea",
      "slug": "part-3-platform-idea",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 4: Setting up docker",
      "slug": "part-4-setting-up-docker",
      "children": [
        {
          "level": 3,
          "title": "The Web Application image",
          "slug": "the-web-application-image",
          "children": []
        },
        {
          "level": 3,
          "title": "The Database image",
          "slug": "the-database-image",
          "children": []
        },
        {
          "level": 3,
          "title": "Using Docker Compose",
          "slug": "using-docker-compose",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 5: Implementing the Web Application",
      "slug": "part-5-implementing-the-web-application",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 6: Adding Authorization",
      "slug": "part-6-adding-authorization",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 7: Using Dependency Injection",
      "slug": "part-7-using-dependency-injection",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 8: Multiple Data Access Layers/ORM",
      "slug": "part-8-multiple-data-access-layers-orm",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 9: Adding a REST API",
      "slug": "part-9-adding-a-rest-api",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 10: Implementing a Single-Page Application",
      "slug": "part-10-implementing-a-single-page-application",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 11: Optional Tasks",
      "slug": "part-11-optional-tasks",
      "children": [
        {
          "level": 3,
          "title": "A fancy website (required for grade 4 and 5)",
          "slug": "a-fancy-website-required-for-grade-4-and-5",
          "children": []
        },
        {
          "level": 3,
          "title": "A fancy SPA (required for grade 4 and 5)",
          "slug": "a-fancy-spa-required-for-grade-4-and-5",
          "children": []
        },
        {
          "level": 3,
          "title": "Supporting third-party authentication (required for grade 5)",
          "slug": "supporting-third-party-authentication-required-for-grade-5",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 12: Presentation",
      "slug": "part-12-presentation",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 13: Final Submission",
      "slug": "part-13-final-submission",
      "children": []
    }
  ],
  "filePathRelative": "courses/web-development-advanced-concepts/project-work.md",
  "git": {
    "updatedTime": 1645992330000
  }
}


/***/ })

};
;
//# sourceMappingURL=5087.app.js.map