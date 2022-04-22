"use strict";
exports.id = 5390;
exports.ids = [5390];
exports.modules = {

/***/ 2368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ study_guide_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-fundamentals/study-guide.html.vue?vue&type=template&id=613d25b4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_StudyGuideInfo = (0,external_vue_.resolveComponent)("StudyGuideInfo")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")
  const _component_Teacher = (0,external_vue_.resolveComponent)("Teacher")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_ILOsActivitiesMapping = (0,external_vue_.resolveComponent)("ILOsActivitiesMapping")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_AcademicYearFigure = (0,external_vue_.resolveComponent)("AcademicYearFigure")

  _push(`<!--[--><h1 id="study-guide" tabindex="-1"><a class="header-anchor" href="#study-guide" aria-hidden="true">#</a> Study Guide</h1><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_StudyGuideInfo, {
    "course-name": "Web Development Fundamentals",
    "ladok-code": "TGWK18",
    credits: "7.5",
    "course-coordinator": "Peter Larsson-Green",
    examiner: "Peter Larsson-Green",
    "canvas-course-id": "4558"
  }, null, _parent))
  _push(`</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In this course you will learn what the web is and how you can create web applications running on it. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below displays the architecture of a typical web application.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Common web application architecture." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tusers[Users]\n\tsubgraph Users' computers\n\t\twebBrowser[Web Browser]\n\tend\n\tsubgraph Web Server\n\t\twebApp[Web Application]\n\tend\n\tsubgraph Database Server\n\t\tdb[Database]\n\tend\n\tusers -- Use --> webBrowser\n\twebBrowser -- HTTP --> webApp\n\twebApp -- SQL --> db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tusers[Users]\n\tsubgraph Users' computers\n\t\twebBrowser[Web Browser]\n\tend\n\tsubgraph Web Server\n\t\twebApp[Web Application]\n\tend\n\tsubgraph Database Server\n\t\tdb[Database]\n\tend\n\tusers -- Use --> webBrowser\n\twebBrowser -- HTTP --> webApp\n\twebApp -- SQL --> db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>More specifically you will learn how to create a web application to which a single user can login to modify the resources on it, such as blog posts and guestbook posts. To accomplish this your web application will use an SQLite database to store the resources and the web framework Express to handle incoming HTTP requests. To avoid spending too much time on the graphical design of the web application you will also learn how to use a CSS framework with pre-styled graphical user interface components you can use. Your web application must of course also be secure, so you will also learn about common vulnerabilities in web applications and how you can prevent them.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><p>At course start you are expected to already possess knowledge corresponding to the prerequisite courses shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Prerequisites for this course." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\tintroComp[Introduction to Computing 7.5 Credits]\n\tintroProg[Introduction to Programming 9 Credits]\n\tdb[Databases 6 Credits]\n\tdiscMath[Discrete Mathematics 6 Credits]\n\tdalg[Data Structures and Algorithms 7.5 Credits]\n\toop[Object-oriented Programming 7.5 Credits]\n\twebDevFund[Web Development Fundamentals 7.5 Credits]\n\tintroComp --> introProg\n\tintroProg --> db\n\tdb --> webDevFund\n\tintroProg --> dalg\n\tdiscMath --> dalg\n\tdalg --> oop\n\toop --> webDevFund\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\tintroComp[Introduction to Computing 7.5 Credits]\n\tintroProg[Introduction to Programming 9 Credits]\n\tdb[Databases 6 Credits]\n\tdiscMath[Discrete Mathematics 6 Credits]\n\tdalg[Data Structures and Algorithms 7.5 Credits]\n\toop[Object-oriented Programming 7.5 Credits]\n\twebDevFund[Web Development Fundamentals 7.5 Credits]\n\tintroComp --> introProg\n\tintroProg --> db\n\tdb --> webDevFund\n\tintroProg --> dalg\n\tdiscMath --> dalg\n\tdalg --> oop\n\toop --> webDevFund\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="teachers" tabindex="-1"><a class="header-anchor" href="#teachers" aria-hidden="true">#</a> Teachers</h2><p>Here are short presentations of the teachers involved in the course.</p><h3 id="peter-larsson-green" tabindex="-1"><a class="header-anchor" href="#peter-larsson-green" aria-hidden="true">#</a> Peter Larsson-Green</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Peter Larsson-Green",
    photo: "peter-larsson-green.jpeg",
    roles: ["Course coordinator", "examiner", "lecturer", "lab assistant"],
    description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
    email: "Peter.Larsson-Green@ju.se",
    phone: "036 - 10 17 35",
    website: "https://ju.se/en/personinfo.html?sign=LarPet"
  }, null, _parent))
  _push(`</p><h3 id="joshua-de-matas" tabindex="-1"><a class="header-anchor" href="#joshua-de-matas" aria-hidden="true">#</a> Joshua De Matas</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Joshua De Matas",
    photo: "joshua-de-matas.jpeg",
    roles: ["Lab assistant"],
    description: "Third year student of the bachelor program Software Development and Mobile Platforms.",
    email: "dejo19kb@student.ju.se"
  }, null, _parent))
  _push(`</p><h3 id="william-sjokvist" tabindex="-1"><a class="header-anchor" href="#william-sjokvist" aria-hidden="true">#</a> William Sjökvist</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "William Sjökvist",
    photo: "william-sjokvist.jpeg",
    roles: ["Lab assistant"],
    description: "Third year student of the bachelor program Software Development and Mobile Platforms.",
    email: "sjwi19io@student.ju.se"
  }, null, _parent))
  _push(`</p><h2 id="intended-learning-outcomes" tabindex="-1"><a class="header-anchor" href="#intended-learning-outcomes" aria-hidden="true">#</a> Intended Learning Outcomes</h2><p>The intended learning outcomes of the course are found in the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/course-syllabus/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Course Syllabus`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Course Syllabus")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`. Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity help you learn which intended learning outcome.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ILOsActivitiesMapping, { description: "\nDisplay an understanding of the fundamental building blocks of the web (HTTP and HTML).\n-Project work\n-Written examination\n+Recorded lecture: Internet\n+Recorded lecture: Web Applications & HTTP\n+Recorded lecture: HTML\n+Recorded lecture: Character Encodings\n+Tutorials\n+Lab sessions\n---\nDisplay an understanding of common security concerns in web applications.\n-Project work\n-Written examination\n+Recorded lecture: Cookies and Sessions\n+Recorded lecture: Designing Account Systems\n+Recorded lecture: Web Security\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to construct web pages using HTML5, CSS, and CSS frameworks.\n-Project work\n-Written examination\n+Recorded lecture: HTML\n+Recorded lecture: CSS\n+Recorded lecture: HTML & CSS Frameworks\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to program in JavaScript.\n-Project work\n-Written examination\n+Recorded lecture: JavaScript\n+Recorded lecture: Asynchronous Programming in JavaScript\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to construct web pages using Node.js.\n-Project work\n-Written examination\n+Recorded lecture: Using Shells\n+Recorded lecture: Node.js\n+Recorded lecture: npm\n+Recorded lecture: Express Basics\n+Recorded lecture: Web Applications in Express\n+Recorded lecture: Handlebars\n+Tutorials\n+Lab sessions\n---\nDisplay an ability to construct database-backed web applications.\n-Project work\n-Written examination\n+Recorded lecture: Using SQLite\n+Recorded lecture: Using SQLite in Node.js\n+Tutorials\n+Lab sessions\n" }, null, _parent))
  _push(`<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>In the beginning of most weeks you will be encouraged to view some recorded lectures. These will be quite theoretical and will teach new you things you can use when building a website.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>Some weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the recorded lectures in practice.</p><h3 id="lab-sessions" tabindex="-1"><a class="header-anchor" href="#lab-sessions" aria-hidden="true">#</a> Lab Sessions</h3><p>Each week you may attend a 4 hours lab session. At the lab session you may ask the teacher there for help with your exercises and project work.</p><p>There are 3 different lab sessions each week, but you may only sign up for one of them. To distribute you, join one of <a href="https://ju.instructure.com/courses/4558/groups" target="_blank" rel="noopener noreferrer">the lab groups on Canvas`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. First come, first served.</p><div class="custom-container tip"><p class="custom-container-title">Attending more lab sessions</p><p>You may attend the other lab sessions if there is room for it, but the teacher there must of course prioritize helping the students that have signed up for that lab session.</p></div><h2 id="examination-tests" tabindex="-1"><a class="header-anchor" href="#examination-tests" aria-hidden="true">#</a> Examination Tests</h2><p>The course contains two examination tests.</p><h3 id="_1-written-examination" tabindex="-1"><a class="header-anchor" href="#_1-written-examination" aria-hidden="true">#</a> 1. Written Examination</h3><p>2 credits, graded U, 3, 4, and 5. More information is available on the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/written-examination/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Written Examination`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Written Examination")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` page.</p><h3 id="_2-project-work" tabindex="-1"><a class="header-anchor" href="#_2-project-work" aria-hidden="true">#</a> 2. Project Work</h3><p>5.5 credits, graded U, 3, 4 and 5. More information is available on the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-work/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Project Work`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Project Work")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` page.</p><h3 id="final-grade" tabindex="-1"><a class="header-anchor" href="#final-grade" aria-hidden="true">#</a> Final Grade</h3><p>To receive a final grade on the course you need to pass both examination tests (<code>Written Examination</code> and <code>Project Work</code>). The final grade will be based on the lowest grade of the <code>Written Examination</code> and the <code>Project Work</code>, but these grades will also be marked as <code>weak</code> or <code>strong</code>. If one of the grades is lower than the other and has been marked as <code>strong</code>, the final grade will be the lower grade + 1. Examples:</p><ul><li>A <code>strong 3</code> and a <code>weak 4</code> gives you <code>4</code> as the final grade.</li><li>A <code>weak 3</code> and a <code>strong 5</code> gives you <code>3</code> as the final grade.</li></ul><p>For the <code>Written Examination</code>, 50% of max score is a strong 3, and 70% of max score is a strong 4.</p><h3 id="re-examination" tabindex="-1"><a class="header-anchor" href="#re-examination" aria-hidden="true">#</a> Re-examination</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows the study and exam periods during a year. The small blue circle sectors shows when the (re-)examinations are offered in this course. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_AcademicYearFigure, null, null, _parent))
  _push(`<p>Re-examination for the <code>Written Examination</code> is offered at the re-exam periods in January and August.</p><p>Re-examination for the <code>Project Work</code> is offered at the re-exam periods in January and August. If you need to know a precise date and time in advance, email the course coordinator at <code>peter.larsson-green@ju.se</code>. The project work will only be graded U/3 at re-examination.</p><p>If you haven&#39;t passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.</p><h2 id="course-literature-and-other-teaching-aids" tabindex="-1"><a class="header-anchor" href="#course-literature-and-other-teaching-aids" aria-hidden="true">#</a> Course Literature and Other Teaching Aids</h2><ul><li><a href="https://launchschool.com/books/http" target="_blank" rel="noopener noreferrer">Introduction to HTTP`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Launch School</li><li><a href="https://marksheet.io/" target="_blank" rel="noopener noreferrer">MarkSheet`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Jeremy Thomas</li><li><a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer">Eloquent JavaScript 3rd edition`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Marijn Haverbeke</li></ul><h2 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h2><p>A time plan is available on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-fundamentals/time-plan/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Time Plan`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Time Plan")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/study-guide.html.vue?vue&type=template&id=613d25b4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-fundamentals/study-guide.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const study_guide_html = (__exports__);

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

/***/ 7498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-11832447",
  "path": "/courses/web-development-fundamentals/study-guide.html",
  "title": "Study Guide",
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
      "title": "Prerequisites",
      "slug": "prerequisites",
      "children": []
    },
    {
      "level": 2,
      "title": "Teachers",
      "slug": "teachers",
      "children": [
        {
          "level": 3,
          "title": "Peter Larsson-Green",
          "slug": "peter-larsson-green",
          "children": []
        },
        {
          "level": 3,
          "title": "Joshua De Matas",
          "slug": "joshua-de-matas",
          "children": []
        },
        {
          "level": 3,
          "title": "William Sjökvist",
          "slug": "william-sjokvist",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Intended Learning Outcomes",
      "slug": "intended-learning-outcomes",
      "children": []
    },
    {
      "level": 2,
      "title": "Learning Activities",
      "slug": "learning-activities",
      "children": [
        {
          "level": 3,
          "title": "Recorded Lectures",
          "slug": "recorded-lectures",
          "children": []
        },
        {
          "level": 3,
          "title": "Tutorials",
          "slug": "tutorials",
          "children": []
        },
        {
          "level": 3,
          "title": "Lab Sessions",
          "slug": "lab-sessions",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Examination Tests",
      "slug": "examination-tests",
      "children": [
        {
          "level": 3,
          "title": "1. Written Examination",
          "slug": "_1-written-examination",
          "children": []
        },
        {
          "level": 3,
          "title": "2. Project Work",
          "slug": "_2-project-work",
          "children": []
        },
        {
          "level": 3,
          "title": "Final Grade",
          "slug": "final-grade",
          "children": []
        },
        {
          "level": 3,
          "title": "Re-examination",
          "slug": "re-examination",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Course Literature and Other Teaching Aids",
      "slug": "course-literature-and-other-teaching-aids",
      "children": []
    },
    {
      "level": 2,
      "title": "Time Plan",
      "slug": "time-plan",
      "children": []
    }
  ],
  "filePathRelative": "courses/web-development-fundamentals/study-guide.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=5390.app.js.map