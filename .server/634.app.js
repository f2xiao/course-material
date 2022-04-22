"use strict";
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 7008:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/client-server-communication/study-guide.html.vue?vue&type=template&id=61e2b925



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_StudyGuideInfo = (0,external_vue_.resolveComponent)("StudyGuideInfo")
  const _component_Teacher = (0,external_vue_.resolveComponent)("Teacher")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_ILOsActivitiesMapping = (0,external_vue_.resolveComponent)("ILOsActivitiesMapping")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="study-guide" tabindex="-1"><a class="header-anchor" href="#study-guide" aria-hidden="true">#</a> Study Guide</h1><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_StudyGuideInfo, {
    "course-name": "Client-Server Communication",
    "ladok-code": "TSPK18",
    credits: "7.5",
    "course-coordinator": "Peter Larsson-Green",
    examiner: "Johan Kohlin",
    "ping-pong-event": "Client-Server Communication - TSPK18 - A19",
    "ping-pong-password": "TSPK18A1934"
  }, null, _parent))
  _push(`</p><h2 id="teachers" tabindex="-1"><a class="header-anchor" href="#teachers" aria-hidden="true">#</a> Teachers</h2><h3 id="peter-larsson-green" tabindex="-1"><a class="header-anchor" href="#peter-larsson-green" aria-hidden="true">#</a> Peter Larsson-Green</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Peter Larsson-Green",
    photo: "peter-larsson-green.jpeg",
    roles: ["Course coordinator", "lecturer", "lab assistant"],
    description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
    email: "Peter.Larsson-Green@ju.se",
    phone: "036 - 10 17 35",
    website: "https://ju.se/en/personinfo.html?sign=LarPet"
  }, null, _parent))
  _push(`</p><h3 id="johan-kohlin" tabindex="-1"><a class="header-anchor" href="#johan-kohlin" aria-hidden="true">#</a> Johan Kohlin</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Johan Kohlin",
    photo: "johan-kohlin.jpeg",
    roles: ["Examiner"],
    description: "Has been teaching web development and web design since 2006 for communication students at HLK and since 2016 he teaches JavaScript and misc. web technologies at JTH, primarily to New Media Design students.",
    email: "Johan.Kohlin@ju.se",
    phone: "036 - 10 15 09",
    website: "https://ju.se/en/personinfo.html?sign=KoJo"
  }, null, _parent))
  _push(`</p><h3 id="linus-rudbeck" tabindex="-1"><a class="header-anchor" href="#linus-rudbeck" aria-hidden="true">#</a> Linus Rudbeck</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Linus Rudbeck",
    photo: "linus-rudbeck.jpeg",
    roles: ["Lab assistant"],
    description: "Former JTH student that studied the program Software Engineering and Mobile Platforms. Started the company Red Capes IT together with Daniel Fransén after he graduated.",
    phone: "036 - 10 17 35",
    website: "https://redcapesit.se/author/linus/"
  }, null, _parent))
  _push(`</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In this course you will learn in more detail how the communication between clients and servers on the web works, i.e. learn the HTTP protocol. This will then be used to create a &quot;web application&quot; not only web browsers can communicate with, but any type of application connected to the Internet, using a REST API. This is convenient for smartphone applications and similar when they need to be able to store data from the users in the cloud instead of locally on the smartphone device.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below displays an overview of how it can work. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Common web application architecture." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tusers[Users]\n\tsubgraph Users' smartphone\n\t\twebBrowser[Android App]\n\tend\n\tsubgraph Web Server\n\twebApp[Web Application]\n\tend\n\tsubgraph Database Server\n\t\tdb[Database]\n\tend\n\tusers -- Use --> webBrowser\n\twebBrowser -- HTTP/REST API --> webApp\n\twebApp -- SQL --> db\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n\tusers[Users]\n\tsubgraph Users' smartphone\n\t\twebBrowser[Android App]\n\tend\n\tsubgraph Web Server\n\twebApp[Web Application]\n\tend\n\tsubgraph Database Server\n\t\tdb[Database]\n\tend\n\tusers -- Use --> webBrowser\n\twebBrowser -- HTTP/REST API --> webApp\n\twebApp -- SQL --> db\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>At course start you are expected to possess knowledge corresponding to the pre-requisite courses shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Prerequisites for this course." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\twuid[Web and User Interface Design 7.5 Credits]\n\tgdvc[Graphic Design and Visual Communication 15 Credits]\n\tcsp[Client-side Programming 15 Credits]\n\tawa[Applied Web Architecture 15 Credits]\n\tcsc[Client-Server Communication 7.5 Credits]\n\twuid --> csp\n\tgdvc --> csp\n\tcsp --> awa\n\tawa --> csc\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\twuid[Web and User Interface Design 7.5 Credits]\n\tgdvc[Graphic Design and Visual Communication 15 Credits]\n\tcsp[Client-side Programming 15 Credits]\n\tawa[Applied Web Architecture 15 Credits]\n\tcsc[Client-Server Communication 7.5 Credits]\n\twuid --> csp\n\tgdvc --> csp\n\tcsp --> awa\n\tawa --> csc\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="intended-learning-outcomes" tabindex="-1"><a class="header-anchor" href="#intended-learning-outcomes" aria-hidden="true">#</a> Intended Learning Outcomes</h2><p>The intended learning outcomes of the course are found in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/course-syllabus/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`the course syllabus`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("the course syllabus")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` in force and are described under the next heading.</p><h2 id="examination-ilos-and-learning-activities" tabindex="-1"><a class="header-anchor" href="#examination-ilos-and-learning-activities" aria-hidden="true">#</a> Examination, ILOs and Learning Activities</h2><h3 id="description-of-the-elements-that-examine-the-course-ilos-and-the-corresponding-learning-activities" tabindex="-1"><a class="header-anchor" href="#description-of-the-elements-that-examine-the-course-ilos-and-the-corresponding-learning-activities" aria-hidden="true">#</a> Description of the elements that examine the course ILOs, and the corresponding learning activities</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ILOsActivitiesMapping, { description: "\nDisplay knowledge of the HTTP protocol.\n-Laboratory work\n-Project work\n-Written examination\n+Recorded lecture: Internet\n+Recorded lecture: Web Applications & HTTP\n---\nDisplay knowledge of the REST architectural style.\n-Laboratory work\n-Project work\n-Written examination\n+Recorded lecture: REST API Basics\n---\nDemonstrate comprehension of architectures consisting of multiple systems communicating through APIs.\n-Laboratory work\n-Project work\n-Written examination\n+Recorded lecture: REST API Basics\n---\nDemonstrate the ability to design and document user-friendly APIs.\n-Project work\n-Written examination\n+Recorded lecture: REST Basics\n+Recorded lecture: REST API in Express\n---\nDemonstrate skills of implementing APIs.\n-Project work\n-Written examination\n+Recorded lecture: Node.js\n+Recorded lecture: Introduction to Express\n+Recorded lecture: REST API in Express\n+Recorded lecture: SQLite in Node.js\n+Recorded lecture: JWT\n---\nDemonstrate skills of consuming APIs.\n-Project work\n-Written examination\n+Recorded lecture: SPA Requests\n+Recorded lecture: SOP & CORS\n+Recorded lecture: JWT\n---\nDemonstrate skills of implementing SDKs for APIs.\n-Project work\n-Written examination\n+Recorded lecture: SPA Requests\n+Recorded lecture: SOP & CORS\n+Recorded lecture: JWT\n---\nDemonstrate skills of implementing SPAs using front-end frameworks.\n-Laboratory work\n-Project work\n+Recorded lecture: Vue\n" }, null, _parent))
  _push(`<h3 id="information-to-students" tabindex="-1"><a class="header-anchor" href="#information-to-students" aria-hidden="true">#</a> Information to students</h3><p>Information about the <strong>Laboratory Work</strong> can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/lab-instructions/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Lab Instructions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Lab Instructions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`. It will teach you how to build a Single-Page Application in Vue.js communicating with a backend using a Software Development Kit.</p><p>Information about the <strong>Project Work</strong> can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/project-instructions/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Project Instructions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Project Instructions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`. It&#39;s about creating a platform consisting of a frontend application and a backend application communicating using a REST API.</p><p><strong>Written Examination</strong> is a <a href="https://ju.se/student/en/digital-exam.html" target="_blank" rel="noopener noreferrer">Digital Exam`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in Inspera at the end of the course. You need to register for it in advance per the instructions at <a href="https://ju.se/student/en/studies/examination.html" target="_blank" rel="noopener noreferrer">https://ju.se/student/en/studies/examination.html`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Sample answers are only published for the ordinary exam, not the re-exams. For the re-exams, come and talk with the course coordinator if there are any answers you are unsure of.</p><ul><li><a href="files/exam-2019-10-15-sample-answers.txt">Sample answers to the exam 2019-10-15</a></li><li><a href="files/exam-2020-08-13-sample-answers.txt">Sample answers to the exam 2020-08-13</a></li></ul><h3 id="conditions-for-the-examined-elements" tabindex="-1"><a class="header-anchor" href="#conditions-for-the-examined-elements" aria-hidden="true">#</a> Conditions for the examined elements</h3><p>Conditions for the <strong>Laboratory Work</strong> can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/lab-instructions/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Lab Instructions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Lab Instructions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`.</p><p>Conditions for the <strong>Project Work</strong> can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/project-instructions/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Project Instructions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Project Instructions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`.</p><p>No aids allowed are allowed for the <strong>Written Examination</strong>. The computer you write the exam on may only be used to answer the questions on the exam, nothing else.</p><h3 id="re-examination-of-this-course" tabindex="-1"><a class="header-anchor" href="#re-examination-of-this-course" aria-hidden="true">#</a> Re-examination of this course</h3><p>Re-examination for the <strong>Laboratory Work</strong> is offered in the re-exam periods in January and August. If you need to know a precise date and time in advance, contact the course coordinator.</p><p>Re-examination for the <strong>Project Work</strong> is offered in the re-exam periods in January and August. If you need to know a precise date and time in advance, contact the course coordinator. The project work will only be graded 3/U (U=fail) at re-examination.</p><p>Re-examination for the <strong>Written Examination</strong> is offered in the re-exam periods in January and August.</p><p>If you haven&#39;t passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run.</p><h2 id="grading-criteria" tabindex="-1"><a class="header-anchor" href="#grading-criteria" aria-hidden="true">#</a> Grading criteria</h2><p>To receive a final grade on the course you need to pass all examination tests (Laboratory Work + Project Work + Written Examination). The final grade will be based on the lowest grade on the Project work and the Written Examination, but these grades will also be marked as &quot;weak&quot; or &quot;strong&quot;. If one of the grades is lower than the other and has been marked as &quot;strong&quot;, the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the Written Examination, 50% is a strong 3, and 70% is a strong 4.</p><table><thead><tr><th>Examination test</th><th>Grading criteria grade 3</th><th>Grading criteria grade 4</th><th>Grading criteria grade 5</th></tr></thead><tbody><tr><td>Written Examination</td><td>40% or max score</td><td>60% of max score</td><td>80% of max score</td></tr></tbody></table><p>The grading criteria for the project work can be found on the page `)
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
  _push(`.</p><h2 id="course-literature-and-other-teaching-aids" tabindex="-1"><a class="header-anchor" href="#course-literature-and-other-teaching-aids" aria-hidden="true">#</a> Course Literature and Other Teaching Aids</h2><ul><li><a href="http://proquestcombo.safaribooksonline.com.proxy.library.ju.se/book/programming/javascript/9781617292422" target="_blank" rel="noopener noreferrer">Express in Action: Writing, building, and testing Node.js applications`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Evan M. Hahn</li><li><a href="https://launchschool.com/books/working_with_apis" target="_blank" rel="noopener noreferrer">Working with Web APIs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Launch School</li><li><a href="https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf" target="_blank" rel="noopener noreferrer">Web API Design: Crafting Interfaces that Developers Love`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h2><p>A time plan is available on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/client-server-communication/time-plan/" }, {
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
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/study-guide.html.vue?vue&type=template&id=61e2b925

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/study-guide.html.vue

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

/***/ 1039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ec85209c",
  "path": "/courses/client-server-communication/study-guide.html",
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
          "title": "Johan Kohlin",
          "slug": "johan-kohlin",
          "children": []
        },
        {
          "level": 3,
          "title": "Linus Rudbeck",
          "slug": "linus-rudbeck",
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
      "title": "Intended Learning Outcomes",
      "slug": "intended-learning-outcomes",
      "children": []
    },
    {
      "level": 2,
      "title": "Examination, ILOs and Learning Activities",
      "slug": "examination-ilos-and-learning-activities",
      "children": [
        {
          "level": 3,
          "title": "Description of the elements that examine the course ILOs, and the corresponding learning activities",
          "slug": "description-of-the-elements-that-examine-the-course-ilos-and-the-corresponding-learning-activities",
          "children": []
        },
        {
          "level": 3,
          "title": "Information to students",
          "slug": "information-to-students",
          "children": []
        },
        {
          "level": 3,
          "title": "Conditions for the examined elements",
          "slug": "conditions-for-the-examined-elements",
          "children": []
        },
        {
          "level": 3,
          "title": "Re-examination of this course",
          "slug": "re-examination-of-this-course",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Grading criteria",
      "slug": "grading-criteria",
      "children": []
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
  "filePathRelative": "courses/client-server-communication/study-guide.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=634.app.js.map