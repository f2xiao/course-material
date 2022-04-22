"use strict";
exports.id = 4075;
exports.ids = [4075];
exports.modules = {

/***/ 6525:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/android-development/study-guide.html.vue?vue&type=template&id=ff778c74



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
    "course-name": "Android Development",
    "ladok-code": "TAGK19",
    credits: "7.5",
    "course-coordinator": "Peter Larsson-Green",
    examiner: "Peter Larsson-Green",
    "canvas-course-id": "4825"
  }, null, _parent))
  _push(`</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Smartphones and tablets have a huge potential to facilitate for us humans. Often, they can not only replace old none-digital products we have, but also provide us with an even better solution. As an example, when you play a song on an instrument you need to see which notes you should play, which traditionally have been printed on papers. How easy is it to turn to the next side as you play and hold an instrument in your hands? And consequently, the notes are usually quite small to fit as many as possible on the same paper, making them hard to read from a distance.</p><p>Imagine the notes instead are shown on a tablet, which just displays the notes you need to play at the moment, and that automatically switches to the notes after that as you play them. Furthermore, it is also possible to record what you play on the instrument, and then re-play it to hear what you need to practice a bit more on. Then you can compare a recording today with a recording you did three weeks ago to see how much you have improved. Used correctly, the potential benefits of these devices are huge!</p><p>In this course you will learn how to create applications running smartphones and tablets running Android. Focus will be on learning the fundamental application components all Android applications consists of, but you will also be given the opportunity to dig deeper into specific areas, such as:</p><ul><li>Using Bluetooth to connect to other devices.</li><li>Using Beacons to detect when the device is close to something and react accordingly.</li><li>Using the Internet (e.g. Firestore) to synchronize data between devices.</li></ul><p>At course start you are expected to possess knowledge corresponding to the pre-requisite courses shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Prerequisites for this course." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\tintroCompTech[Introduction to Computer Technology 7.5 Credits]\n\tintroProg[Introduction to Programming 7.5 Credits]\n\tdiscMath[Discrete Mathematics 7.5 Credits]\n\tdalg[Data Structures and Algorithms 7.5 Credits]\n\toop[Object-Oriented Programming 7.5 Credits]\n\toop2[Object-Oriented Software Development 6 Credits OR Object-Oriented Software Development with Design Patterns 7.5 Credits]\n\tandDev[Android Development 7.5 Credits]\n\tintroCompTech --> introProg\n\tintroProg --> dalg\n\tdiscMath --> dalg\n\tdalg --> oop\n\toop --> oop2\n\toop2 --> andDev\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n\tintroCompTech[Introduction to Computer Technology 7.5 Credits]\n\tintroProg[Introduction to Programming 7.5 Credits]\n\tdiscMath[Discrete Mathematics 7.5 Credits]\n\tdalg[Data Structures and Algorithms 7.5 Credits]\n\toop[Object-Oriented Programming 7.5 Credits]\n\toop2[Object-Oriented Software Development 6 Credits OR Object-Oriented Software Development with Design Patterns 7.5 Credits]\n\tandDev[Android Development 7.5 Credits]\n\tintroCompTech --> introProg\n\tintroProg --> dalg\n\tdiscMath --> dalg\n\tdalg --> oop\n\toop --> oop2\n\toop2 --> andDev\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="teachers" tabindex="-1"><a class="header-anchor" href="#teachers" aria-hidden="true">#</a> Teachers</h2><h3 id="peter-larsson-green" tabindex="-1"><a class="header-anchor" href="#peter-larsson-green" aria-hidden="true">#</a> Peter Larsson-Green</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Peter Larsson-Green",
    photo: "peter-larsson-green.jpeg",
    roles: ["Course coordinator", "examiner", "lecturer", "lab assistant"],
    description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
    email: "Peter.Larsson-Green@ju.se",
    phone: "036 - 10 17 35",
    website: "https://ju.se/en/personinfo.html?sign=LarPet"
  }, null, _parent))
  _push(`</p><h3 id="martin-lindh" tabindex="-1"><a class="header-anchor" href="#martin-lindh" aria-hidden="true">#</a> Martin Lindh</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Martin Lindh",
    photo: "martin-lindh.jpeg",
    roles: ["Lecturer"],
    description: "Experienced graphical designer.",
    email: "martin.lindh@ju.se",
    phone: "036 - 10 19 23",
    website: "https://ju.se/en/personinfo.html?sign=lindma",
    zoomLink: "https://ju.instructure.com/courses/3421/pages/zoom-links?module_item_id=76266"
  }, null, _parent))
  _push(`</p><h3 id="linus-rudbeck" tabindex="-1"><a class="header-anchor" href="#linus-rudbeck" aria-hidden="true">#</a> Linus Rudbeck</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Linus Rudbeck",
    photo: "linus-rudbeck.jpeg",
    roles: ["Lab assistant"],
    description: "Former JTH student that studied the program Software Engineering and Mobile Platforms. Started the company Red Capes IT together with Daniel Fransén after he graduated.",
    website: "https://redcapesit.se/",
    zoomLink: "https://ju.instructure.com/courses/3421/pages/zoom-links?module_item_id=76266"
  }, null, _parent))
  _push(`</p><h3 id="rigmor-skoglund" tabindex="-1"><a class="header-anchor" href="#rigmor-skoglund" aria-hidden="true">#</a> Rigmor Skoglund</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Teacher, {
    name: "Rigmor Skoglund",
    photo: "rigmor-skoglund.jpeg",
    roles: ["Teacher in Gruppdynamic"],
    description: "Not directly involved in this course, but course coordinator for the course Gruppdynamik. Only the Swedish students will meet her.",
    email: "rigmor.skoglund@ju.se",
    phone: "036 - 10 19 10",
    website: "https://ju.se/en/personinfo.html?sign=SKORIG"
  }, null, _parent))
  _push(`</p><h2 id="intended-learning-outcomes" tabindex="-1"><a class="header-anchor" href="#intended-learning-outcomes" aria-hidden="true">#</a> Intended Learning Outcomes</h2><p>The intended learning outcomes of the course are found in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/android-development/course-syllabus/" }, {
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
  _push((0,server_renderer.ssrRenderComponent)(_component_ILOsActivitiesMapping, { description: "\nDisplay an understanding for the consequences of the Android technical and economical ecosystems\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an understanding for human interface guidelines for mobile devices\n-Project work\n+Lecture\n+Lab Sessions\n---\nDisplay an ability to use the Android SDK and toolchain to develop high quality Android apps\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an ability to use sensor systems using Android APIs\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an ability to use common APIs for Android\n-Project work\n-Laboratory work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n---\nDisplay an ability to employ established methods to develop user interfaces for small screens with touch input\n-Project work\n+Lectures\n+Lab Sessions\n---\nDisplay an ability to evaluate the Android system architecture\n-Project work\n+Recorded Lectures\n+Tutorials\n+Lab Sessions\n" }, null, _parent))
  _push(`<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>The lectures will be pre-recorded and teach you most of what you need to learn to pass the examination tests. Some lectures will be available at course start, but most will be published as the course proceed.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>The recorded lectures will be quite theoretical and focus on specific techniques. The tutorials will be given on Campus and show you how you can combine different techniques taught in the recorded lectures to build Android apps.</p><h3 id="lectures" tabindex="-1"><a class="header-anchor" href="#lectures" aria-hidden="true">#</a> Lectures</h3><p>Martin Lindh will give you one lecture on Campus focused on designing graphical user interfaces and creating prototype applications for smartphones.</p><h3 id="lab-sessions" tabindex="-1"><a class="header-anchor" href="#lab-sessions" aria-hidden="true">#</a> Lab Sessions</h3><p>Each week you may attend a 4 hours lab session. At the lab session you may ask the teacher there for help with your laboratory work and your project work. When you have completed your laboratory work you should also present your solution to a teacher at a lab sessions.</p><p>There are 4 different lab sessions each week, but you may only come to one of them. To distribute you, join one of the <a href="https://ju.instructure.com/courses/4825/groups" target="_blank" rel="noopener noreferrer">Lab Session Groups`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas. First come, first served. Feel free to attend the other lab sessions as well, but students that have signed up for a specific lab session should of course be prioritized by the teacher.</p><div class="custom-container warning"><p class="custom-container-title">One lab group is online using Zoom!</p><p>One of the lab groups have their sessions online using Zoom. Students that don&#39;t want to come to school should join this lab session group, and other students that show Covid symptoms can use this session the weeks they can&#39;t come to school.</p></div><h2 id="examination-tests" tabindex="-1"><a class="header-anchor" href="#examination-tests" aria-hidden="true">#</a> Examination Tests</h2><p>The course contains two examination tests.</p><h3 id="_1-laboratory-work" tabindex="-1"><a class="header-anchor" href="#_1-laboratory-work" aria-hidden="true">#</a> 1. Laboratory Work</h3><p>More information about the <code>Laboratory Work</code> can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/android-development/laboratory-work/" }, {
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
  _push(`.</p><h3 id="_2-project-work" tabindex="-1"><a class="header-anchor" href="#_2-project-work" aria-hidden="true">#</a> 2. Project Work</h3><p>More information about the <code>Project Work</code> can be found on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/android-development/project-work/" }, {
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
  _push(`.</p><h3 id="re-examination" tabindex="-1"><a class="header-anchor" href="#re-examination" aria-hidden="true">#</a> Re-examination</h3><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows the study and exam periods during a year. The small yellow circle sectors shows when the (re-)examinations are offered in this course (at the re-exam periods in June and August).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_AcademicYearFigure, null, null, _parent))
  _push(`<p>If you need to know a precise date and time for the re-examination in advance, email the course coordinator at <code>peter.larsson-green@ju.se</code>. An announcement on Canvas with more information will be posted soon before the re-examination periods for this course.</p><p>The project work will only be graded 3/U (U=fail) at re-examination.</p><p>If you haven&#39;t passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.</p><h3 id="final-grade" tabindex="-1"><a class="header-anchor" href="#final-grade" aria-hidden="true">#</a> Final grade</h3><p>To receive a final grade in the course you need to pass all examination tests. The final grade will be based on the grade for the <code>Project Work</code>.</p><h2 id="course-literature-and-other-teaching-aids" tabindex="-1"><a class="header-anchor" href="#course-literature-and-other-teaching-aids" aria-hidden="true">#</a> Course Literature and Other Teaching Aids</h2><p>The following <a href="https://commonsware.com/catalog" target="_blank" rel="noopener noreferrer">CommonsWare’s Books`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>:</p><ul><li><a href="https://commonsware.com/Room" target="_blank" rel="noopener noreferrer">Elements of Android Room`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://commonsware.com/Jetpack" target="_blank" rel="noopener noreferrer">Elements of Android Jetpack`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://commonsware.com/Coroutines" target="_blank" rel="noopener noreferrer">Elements of Kotlin Coroutines`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://commonsware.com/Kotlin" target="_blank" rel="noopener noreferrer">Elements of Kotlin`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://commonsware.com/AndExplore" target="_blank" rel="noopener noreferrer">Exploring Android`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://commonsware.com/Q" target="_blank" rel="noopener noreferrer">Elements of Android Q`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h2><p>A time plan is available on the page `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/android-development/time-plan/" }, {
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
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/study-guide.html.vue?vue&type=template&id=ff778c74

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/study-guide.html.vue

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

/***/ 9775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b6503f7a",
  "path": "/courses/android-development/study-guide.html",
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
          "title": "Martin Lindh",
          "slug": "martin-lindh",
          "children": []
        },
        {
          "level": 3,
          "title": "Linus Rudbeck",
          "slug": "linus-rudbeck",
          "children": []
        },
        {
          "level": 3,
          "title": "Rigmor Skoglund",
          "slug": "rigmor-skoglund",
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
          "title": "Lectures",
          "slug": "lectures",
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
          "title": "1. Laboratory Work",
          "slug": "_1-laboratory-work",
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
  "filePathRelative": "courses/android-development/study-guide.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=4075.app.js.map