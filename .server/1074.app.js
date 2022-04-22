"use strict";
exports.id = 1074;
exports.ids = [1074];
exports.modules = {

/***/ 8405:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/study-guide.html.vue?vue&type=template&id=29fd23e0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_StudyGuideInfo = (0,external_vue_.resolveComponent)("StudyGuideInfo")
  const _component_Teacher = (0,external_vue_.resolveComponent)("Teacher")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_ILOsActivitiesMapping = (0,external_vue_.resolveComponent)("ILOsActivitiesMapping")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_AcademicYearFigure = (0,external_vue_.resolveComponent)("AcademicYearFigure")

  _push(`<!--[--><h1 id="study-guide" tabindex="-1"><a class="header-anchor" href="#study-guide" aria-hidden="true">#</a> Study Guide</h1><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_StudyGuideInfo, {
    "course-name": "Introduction to Script Programming",
    "ladok-code": "TSPG17 | TSTG17",
    credits: "7.5",
    "course-coordinator": "Peter Larsson-Green",
    examiner: "Peter Larsson-Green",
    "canvas-courses": [{
        id: '4205',
        name: 'Introduction to Script Programming (TSPG17)'
    }, {
        id: '4199',
        name: 'Introduction to Script Programming (TSTG17)'
    }]
  }, null, _parent))
  _push(`</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In your daily work it is not uncommon that you find yourself carrying out the same task over and over again. After all, you have been employed for the specific skills you possess, and your employer wants you to make use of them. But in the long run, repeatedly doing the same thing over and over again can be quite boring, causing you to lose concentration and start making mistakes, which in turn makes you unproductive and lowers the quality of your work.</p><p>A computer is an excellent tool to save you from this. Once programmed, it will not only carry out the tasks for you, but it will do so without complaining, much faster than you can, and with the confidence that the task has been carried out correctly, since computers do not make mistakes.</p><p>Unfortunately, computers do not operate/think the same way as we humans do, so programming them can be quite tricky. In this course, you will get familiar with how computers work and how to program them using a programming language called <em>Python</em>. We will start with the very basics, and at the end of the course, you will be able to program computers on your own.</p><h3 id="pre-requisites" tabindex="-1"><a class="header-anchor" href="#pre-requisites" aria-hidden="true">#</a> Pre-requisites</h3><p>This course does not have any special pre-requisites other than basic math and English.</p><h2 id="teachers" tabindex="-1"><a class="header-anchor" href="#teachers" aria-hidden="true">#</a> Teachers</h2><h3 id="peter-larsson-green" tabindex="-1"><a class="header-anchor" href="#peter-larsson-green" aria-hidden="true">#</a> Peter Larsson-Green</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Peter Larsson-Green",
    photo: "peter-larsson-green.jpeg",
    roles: ["Course coordinator", "examiner", "lecturer", "lab assistant"],
    description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
    email: "Peter.Larsson-Green@ju.se",
    phone: "036 - 10 17 35",
    website: "https://ju.se/en/personinfo.html?sign=LarPet"
  }, null, _parent))
  _push(`</p><h3 id="adyasha-swain" tabindex="-1"><a class="header-anchor" href="#adyasha-swain" aria-hidden="true">#</a> Adyasha Swain</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Adyasha Swain",
    photo: "adyasha-swain.jpeg",
    roles: ["Lab Assistant"],
    description: "Adyasha has received her Masters degree in Computer Science, specialization in Distributed Cloud Systems, at Luleå University of Technology in 2019. She is currently pursuing her Doctoral studies in the Department of Construction Engineering and Lighting Science with supervision under Karl Hammer, Geza Fischl and Peter Johansson on Digital Twin Solution for Lighting Evaluation in the Lighting Living Lab.",
    email: "adyasha.swain@ju.se",
    phone: "036 - 55 02 447",
    website: "https://ju.se/en/personinfo?sign=SWAADY"
  }, null, _parent))
  _push(`</p><h2 id="intended-learning-outcomes" tabindex="-1"><a class="header-anchor" href="#intended-learning-outcomes" aria-hidden="true">#</a> Intended Learning Outcomes</h2><p>The intended learning outcomes of the course are found in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/introduction-to-script-programming/course-syllabus/" }, {
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
  _push(` in force. Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ILOsActivitiesMapping, { description: "\nDisplay knowledge of how a programming language interacts with the operating system and the underlying hardware.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDisplay knowledge about integrated development environments and their usage area.\n-Laboratory work\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDisplay knowledge of common terms and concepts in script programming.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDisplay knowledge of common terms and concepts used in object-oriented programming.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDemonstrate the ability to use common data types and controls structures in a high-level programming language.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDemonstrate the ability to create interactive console programs in a high-level programming language.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDemonstrate the ability to develop and implement simple programs and algorithms in a high-level programming language.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDemonstrate the ability to use object-oriented programming in a high-level programming language.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n---\nDemonstrate the ability to use script programming to create, read and modify files of different types in a high-level programming language.\n-Laboratory work\n-Written examination\n+Recorded lectures\n+Tutorials\n+Lab sessions\n" }, null, _parent))
  _push(`<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>In the beginning of each week you will be encouraged to view some recorded lectures. These will be quite theoretical and will teach you new things you can use when programming.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>Each week you will also be encouraged to complete some optional exercises. This is for you to practice on using the theory you learned in the recorded lectures. In the beginning of each week there will be a tutorial where the teacher will show you and discuss sample answers to the exercises from the previous week.</p><h3 id="lab-sessions" tabindex="-1"><a class="header-anchor" href="#lab-sessions" aria-hidden="true">#</a> Lab Sessions</h3><p>Each week you may attend a 4 hours long lab session. At the lab session you may ask the teacher there for help with your laboratory work and the exercises. When you have completed your laboratory work you should also present your solution to a teacher at a lab session where you explain to the teacher how the code you have written works.</p><p>There are 3 different lab sessions each week, but you may only come to one. To distribute you, join one of the lab session groups on Canvas (<a href="https://ju.instructure.com/courses/4205/groups" target="_blank" rel="noopener noreferrer">TSPG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://ju.instructure.com/courses/4199/groups" target="_blank" rel="noopener noreferrer">TSTG17`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>). First come, first served. It is OK to attend the sessions for the other groups too if there is room for it, but the students for those groups should of course be prioritized by the teacher.</p><h2 id="examination-tests" tabindex="-1"><a class="header-anchor" href="#examination-tests" aria-hidden="true">#</a> Examination Tests</h2><p>The course contains the two examination tests <code>Examination</code> and <code>Laboratory work</code>. To receive a final grade on the course you need to pass both examination tests. The final grade will be based on the grade for the <code>Examination</code> test.</p><h3 id="_1-examination" tabindex="-1"><a class="header-anchor" href="#_1-examination" aria-hidden="true">#</a> 1. Examination</h3><p>More information about the <code>Examination</code> test can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/introduction-to-script-programming/written-examination/" }, {
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
  _push(`.</p><h3 id="_2-laboratory-work" tabindex="-1"><a class="header-anchor" href="#_2-laboratory-work" aria-hidden="true">#</a> 2. Laboratory work</h3><p>More information about the <code>Laboratory work</code> test can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/introduction-to-script-programming/laboratory-work/" }, {
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
  _push(`.</p><h3 id="re-examination" tabindex="-1"><a class="header-anchor" href="#re-examination" aria-hidden="true">#</a> Re-examination</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows the study and exam periods during a year. The small green circle sectors shows when the (re-)examinations are offered in this course. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_AcademicYearFigure, null, null, _parent))
  _push(`<p>Re-examination for the tests is offered at the re-exam periods in February and August. If there are some examination tests you haven&#39;t passed after that, you can re-take those tests the next time the course run.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The examination tests might have changed a little bit the next time the course run, and if you take some of them then, then you will take them according to the new description of the tests. You don&#39;t need to re-take an examination test you have already passed.</p></div><h2 id="course-literature-and-other-teaching-aids" tabindex="-1"><a class="header-anchor" href="#course-literature-and-other-teaching-aids" aria-hidden="true">#</a> Course Literature and Other Teaching Aids</h2><ul><li><a href="https://runestone.academy/runestone/books/published/thinkcspy/index.html" target="_blank" rel="noopener noreferrer">How to Think Like a Computer Scientist: Learning with Python`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Allen Downey, Jeffrey Elkner and Chris Meyers</li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The link above leads to a free online version of the book with an interactive tool you can use to execute and debug Python code. We recommend you to use this online book, but if you prefer to read a physical book it&#39;s possible to buy that, but then it won&#39;t be the <em>Interactive Edition</em>.</p></div><h2 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h2><p>A time plan is available on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/introduction-to-script-programming/time-plan/" }, {
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
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/study-guide.html.vue?vue&type=template&id=29fd23e0

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/study-guide.html.vue

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

/***/ 7581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-fdbd1d2c",
  "path": "/courses/introduction-to-script-programming/study-guide.html",
  "title": "Study Guide",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Introduction",
      "slug": "introduction",
      "children": [
        {
          "level": 3,
          "title": "Pre-requisites",
          "slug": "pre-requisites",
          "children": []
        }
      ]
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
          "title": "Adyasha Swain",
          "slug": "adyasha-swain",
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
          "title": "1. Examination",
          "slug": "_1-examination",
          "children": []
        },
        {
          "level": 3,
          "title": "2. Laboratory work",
          "slug": "_2-laboratory-work",
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
  "filePathRelative": "courses/introduction-to-script-programming/study-guide.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=1074.app.js.map