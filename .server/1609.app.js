"use strict";
exports.id = 1609;
exports.ids = [1609];
exports.modules = {

/***/ 1493:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/study-guide.html.vue?vue&type=template&id=0b545778



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_StudyGuideInfo = (0,external_vue_.resolveComponent)("StudyGuideInfo")
  const _component_Teacher = (0,external_vue_.resolveComponent)("Teacher")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_ILOsActivitiesMapping = (0,external_vue_.resolveComponent)("ILOsActivitiesMapping")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_AcademicYearFigure = (0,external_vue_.resolveComponent)("AcademicYearFigure")

  _push(`<!--[--><h1 id="study-guide" tabindex="-1"><a class="header-anchor" href="#study-guide" aria-hidden="true">#</a> Study Guide</h1><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_StudyGuideInfo, {
    "course-name": "Web Development - Advanced Concepts",
    "ladok-code": "TFWN19",
    credits: "7.5",
    year: "2022",
    "course-coordinator": "Peter Larsson-Green",
    examiner: "Peter Larsson-Green",
    "canvas-course-id": "4775"
  }, null, _parent))
  _push(`</p><h2 id="teachers" tabindex="-1"><a class="header-anchor" href="#teachers" aria-hidden="true">#</a> Teachers</h2><h3 id="peter-larsson-green" tabindex="-1"><a class="header-anchor" href="#peter-larsson-green" aria-hidden="true">#</a> Peter Larsson-Green</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Peter Larsson-Green",
    photo: "peter-larsson-green.jpeg",
    roles: ["Course coordinator", "examiner", "lecturer", "lab assistant"],
    description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
    email: "Peter.Larsson-Green@ju.se",
    phone: "036 - 10 17 35",
    website: "https://ju.se/en/personinfo.html?sign=LarPet"
  }, null, _parent))
  _push(`</p><h3 id="fredrik-sjolander" tabindex="-1"><a class="header-anchor" href="#fredrik-sjolander" aria-hidden="true">#</a> Fredrik Sjölander</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Fredrik Sjölander",
    photo: "fredrik-sjolander.jpeg",
    roles: ["Lab assistant"],
    description: "Third year student in the bachelor program Software Engineering and Mobile Platforms."
  }, null, _parent))
  _push(`</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Building a good web application is not as easy as it used to be. When we first got the web, all the webpages on a website were simply static HTML files. Everything the web application needed to do was to wait for an HTTP request from a web browser and then send back the requested HTML file in an HTTP response.</p><p>Then websites got more dynamic. Users could create accounts on the websites and create their own resources (blog posts, messages, articles, etc.) other users then could fetch and display in their web browsers. We needed to start worrying about sessions, authentication, authorization and security in general, and the code we wrote got bigger, more complex and harder to maintain. Implementing a web application was no longer straight forward.</p><p>Then some websites got so popular that running them on a single computer was not enough; web browsers sent more HTTP requests to the web application than the web application had time to handle. We needed to start worrying about the performance of our web application; how good it could scale, how fast it could send back an HTTP response, etc. Web applications now needed to be built with an architecture in mind.</p><p>Then we got Android and iOS devices, and users wanted to be able to use smartphone apps to access the content on our websites instead of using web browsers. But apps don&#39;t render HTML code, only web browsers do that. The apps needed a way to just fetch the data from our web applications, so we added Application Programming Interfaces (API) to our web applications.</p><p>Today, good web applications are no longer straight forward to implement, but in this course you will learn and get hands-on experience of implementing your own scalable and good web application.</p><h2 id="pre-requisites" tabindex="-1"><a class="header-anchor" href="#pre-requisites" aria-hidden="true">#</a> Pre-requisites</h2><p>At course start you are expected to already possess knowledge corresponding to the pre-requisite courses shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Prerequisites for this course." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\tintroComp[Introduction to Computing 7.5 Credits]\n\tintroProg[Introduction to Programming 9 Credits]\n\tdb[Databases 6 Credits]\n\tdiscMath[Discrete Mathematics 6 Credits]\n\tdalg[Data Structures and Algorithms 7.5 Credits]\n\toop[Object-oriented Programming 7.5 Credits]\n\twebDevFund[Web Development Fundamentals 7.5 Credits]\n\tnetProg[Network Programming 7.5 Credits]\n\twdac[Web Development Advanced Concepts 7.5 Credits]\n\tintroComp --> introProg\n\tintroProg --> db\n\tdb --> webDevFund\n\tintroProg --> dalg\n\tdiscMath --> dalg\n\tdalg --> oop\n\toop --> webDevFund\n\toop --> netProg\n\twebDevFund --> wdac\n\tnetProg --> wdac\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\tintroComp[Introduction to Computing 7.5 Credits]\n\tintroProg[Introduction to Programming 9 Credits]\n\tdb[Databases 6 Credits]\n\tdiscMath[Discrete Mathematics 6 Credits]\n\tdalg[Data Structures and Algorithms 7.5 Credits]\n\toop[Object-oriented Programming 7.5 Credits]\n\twebDevFund[Web Development Fundamentals 7.5 Credits]\n\tnetProg[Network Programming 7.5 Credits]\n\twdac[Web Development Advanced Concepts 7.5 Credits]\n\tintroComp --> introProg\n\tintroProg --> db\n\tdb --> webDevFund\n\tintroProg --> dalg\n\tdiscMath --> dalg\n\tdalg --> oop\n\toop --> webDevFund\n\toop --> netProg\n\twebDevFund --> wdac\n\tnetProg --> wdac\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="intended-learning-outcomes" tabindex="-1"><a class="header-anchor" href="#intended-learning-outcomes" aria-hidden="true">#</a> Intended Learning Outcomes</h2><p>The intended learning outcomes of the course are found in the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/course-syllabus/" }, {
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
  _push(`. Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ILOsActivitiesMapping, { description: "\nDisplay knowledge of the need for, and the use of, Content Delivery Networks\n-Written Examination\n+Lecture: Content Delivery Networks\n---\nDisplay knowledge of the challenges inherent in and technologies used for the construction of scalable web applications (NOSQL databases, horizontal scaling with session management, data partitioning and sharding, etc.)\n-Project Work\n-Written Examination\n+Lecture: Scaling Web Applications\n+Lecture: Scaling Databases\n+Tutorial\n---\nDisplay the ability to use JavaScript to manipulate a web page's Document Object Model\n-Laboratory Work\n-Project Work\n-Written Examination\n+Lecture: Client-side JavaScript\n+Lecture: Document Object Model\n+Tutorial\n---\nDisplay the ability to program against commonly used JavaScript libraries\n-Project Work\n+Various npm packages introduced in the course\n---\nDisplay the ability to construct web pages that interact with other web systems using REST/JSON, OAuth, etc.\n-Project Work\n-Written Examination\n+Lecture: REST API Basics\n+Lecture: REST API in Express\n+Lecture: REST API Authorization\n+Lecture: JSON Web Tokens\n+Lecture: Third-Party Authentication\n+Lecture: AJAX\n+Lecture: Same-Origin Policy & Cross-Origin Resource Sharing\n+Tutorial\n---\nDisplay the ability to use advanced web client APIs such as web storage, web workers, web components, WebAssembly, etc.\n-Project Work\n+Lecture: AJAX\n+Tutorial\n---\nDisplay the ability to configure and use containers for development, testing, and deployment environments\n-Project Work\n-Written Examination\n+Lecture: Docker Basics\n+Tutorial\n---\nDemonstrate the ability to evaluate the security of web applications\n-Project Work\n-Written Examination\n+Lecture: REST API Authorization\n+Lecture: JSON Web Tokens\n+Lecture: Same-origin Policy & Cross-origin Resource Sharing\n" }, null, _parent))
  _push(`<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>In the beginning of some weeks you will be encouraged to view some pre-recorded lectures (or read some text). These will be quite theoretical and will teach you new things you can use when building a website.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>Some weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the pre-recorded lectures in practice.</p><h3 id="lab-sessions" tabindex="-1"><a class="header-anchor" href="#lab-sessions" aria-hidden="true">#</a> Lab Sessions</h3><p>Each week you may attend a four hours long lab session. Some of the lab sessions have been scheduled in ordinary classrooms, and for those sessions you have to bring your own laptop to work on. If you can&#39;t do that, make sure to come to a lab session scheduled in a computer room.</p><p>Select which lab session you want to attend by joining the corresponding <a href="https://ju.instructure.com/courses/4775/groups" target="_blank" rel="noopener noreferrer">Lab Session Group`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Feel free to show up at and attend other lab sessions too <strong>if there&#39;s room for it</strong>, but you may only join one Lab Session Group on Canvas.</p><h2 id="examination-tests" tabindex="-1"><a class="header-anchor" href="#examination-tests" aria-hidden="true">#</a> Examination Tests</h2><p>The course contains three examination tests.</p><h3 id="_1-written-examination" tabindex="-1"><a class="header-anchor" href="#_1-written-examination" aria-hidden="true">#</a> 1. Written Examination</h3><p>2.5 credits, graded <code>Fail</code>, <code>3</code>, <code>4</code>, and <code>5</code>. More information is available on the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/written-examination/" }, {
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
  _push(` page.</p><h3 id="_2-laboratory-work" tabindex="-1"><a class="header-anchor" href="#_2-laboratory-work" aria-hidden="true">#</a> 2. Laboratory Work</h3><p>1 credit, graded <code>Fail</code> and <code>Pass</code>. More information is available on the `)
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
  _push(` page.</p><h3 id="_3-project-work" tabindex="-1"><a class="header-anchor" href="#_3-project-work" aria-hidden="true">#</a> 3. Project Work</h3><p>4 credits, graded <code>Fail</code>, <code>3</code>, <code>4</code> and <code>5</code>. More information is available on the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/project-work/" }, {
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
  _push(` page.</p><h3 id="re-examination" tabindex="-1"><a class="header-anchor" href="#re-examination" aria-hidden="true">#</a> Re-examination</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows the study and exam periods during a year. The small yellow circle sectors shows when the (re-)examinations are offered in this course (at the re-exam periods in June and August).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_AcademicYearFigure, null, null, _parent))
  _push(`<p>If you need to know a precise date and time for the re-examination in advance, email the course coordinator at <code>peter.larsson-green@ju.se</code>. An announcement on Canvas with more information will be posted soon before the re-examination periods for this course.</p><p>The project work will only be graded 3/U (U=fail) at re-examination.</p><p>If you haven&#39;t passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.</p><h3 id="final-grade" tabindex="-1"><a class="header-anchor" href="#final-grade" aria-hidden="true">#</a> Final grade</h3><p>To receive a final grade in the course you need to pass all examination tests. The final grade will be based on the lowest grade of the <code>Project Work</code> and the <code>Written Examination</code>, but these grades will also be marked as <em>weak</em> or <em>strong</em>. If one of the grades is lower than the other and has been marked as <em>strong</em>, the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the <code>Written Examination</code>, 50% of max score is a strong 3, and 70% of max score is a strong 4.</p><h2 id="course-literature-and-other-teaching-aids" tabindex="-1"><a class="header-anchor" href="#course-literature-and-other-teaching-aids" aria-hidden="true">#</a> Course Literature and Other Teaching Aids</h2><ul><li><a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer">Eloquent JavaScript 3rd edition`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Marijn Haverbeke</li><li><a href="https://12factor.net/" target="_blank" rel="noopener noreferrer">The Twelve-Factor App`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h2><p>A time plan is available on the `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/time-plan/" }, {
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
  _push(` page.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/study-guide.html.vue?vue&type=template&id=0b545778

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/study-guide.html.vue

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

/***/ 294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-cd4cfd56",
  "path": "/courses/web-development-advanced-concepts/study-guide.html",
  "title": "Study Guide",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
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
          "title": "Fredrik Sjölander",
          "slug": "fredrik-sjolander",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Introduction",
      "slug": "introduction",
      "children": []
    },
    {
      "level": 2,
      "title": "Pre-requisites",
      "slug": "pre-requisites",
      "children": []
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
          "title": "2. Laboratory Work",
          "slug": "_2-laboratory-work",
          "children": []
        },
        {
          "level": 3,
          "title": "3. Project Work",
          "slug": "_3-project-work",
          "children": []
        },
        {
          "level": 3,
          "title": "Re-examination",
          "slug": "re-examination",
          "children": []
        },
        {
          "level": 3,
          "title": "Final grade",
          "slug": "final-grade",
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
  "filePathRelative": "courses/web-development-advanced-concepts/study-guide.md",
  "git": {
    "updatedTime": 1642416143000
  }
}


/***/ })

};
;
//# sourceMappingURL=1609.app.js.map