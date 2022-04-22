"use strict";
exports.id = 4674;
exports.ids = [4674];
exports.modules = {

/***/ 1974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lab_1_example_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
// EXTERNAL MODULE: ./src/courses/object-oriented-software-development/files/lab-1-use-case-diagram.jpeg
var lab_1_use_case_diagram = __webpack_require__(7929);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/object-oriented-software-development/lab-1-example.html.vue?vue&type=template&id=c66bfd0c





function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="lab-1-example" tabindex="-1"><a class="header-anchor" href="#lab-1-example" aria-hidden="true">#</a> Lab 1 Example</h1><p>Here&#39;s a short example of another system designed in a similar way as described in Lab 1. The system here is a simple Ping Pong game (each user is expected to have their own instance of the system) users can play either against each other (over Bluetooth) or the computer . There&#39;s also a highscore system for playing against the computer, and there should exists three different level of difficulties (easy, medium and hard) on the computer.</p><h2 id="actors" tabindex="-1"><a class="header-anchor" href="#actors" aria-hidden="true">#</a> Actors</h2><ul><li>User (Primary)</li></ul><h2 id="goals" tabindex="-1"><a class="header-anchor" href="#goals" aria-hidden="true">#</a> Goals</h2><table><thead><tr><th>Actor</th><th>Goal</th></tr></thead><tbody><tr><td>User</td><td>Play VS Computer</td></tr><tr><td>User</td><td>Submit Highscore</td></tr><tr><td>User</td><td>View Highscores</td></tr><tr><td>User</td><td>Play VS Player as Host</td></tr><tr><td>User</td><td>Play VS Player as Joiner</td></tr></tbody></table><h2 id="use-case-diagram" tabindex="-1"><a class="header-anchor" href="#use-case-diagram" aria-hidden="true">#</a> Use-Case Diagram</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows a use-case diagram of the Ping Pong Game (System under Design). `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Use-case diagram of the Ping Pong Game (System under Design)." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", lab_1_use_case_diagram)
        } alt="Use-case diagram of the Ping Pong Game (System under Design)."${
          _scopeId
        }>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: lab_1_use_case_diagram,
            alt: "Use-case diagram of the Ping Pong Game (System under Design)."
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="brief-descriptions" tabindex="-1"><a class="header-anchor" href="#brief-descriptions" aria-hidden="true">#</a> Brief Descriptions</h2><p>Below are brief descriptions of all use-cases.</p><h3 id="play-vs-computer" tabindex="-1"><a class="header-anchor" href="#play-vs-computer" aria-hidden="true">#</a> Play VS Computer</h3><p>The user selects the option to play VS the computer. The user selects the game difficulty, and then the game starts.</p><h3 id="submit-highscore" tabindex="-1"><a class="header-anchor" href="#submit-highscore" aria-hidden="true">#</a> Submit Highscore</h3><p>The user <u>Play VS Computer</u>. After the game the user tells the system she wants to add her score to the highscore list together with her name (which she enters).</p><h3 id="view-highscore" tabindex="-1"><a class="header-anchor" href="#view-highscore" aria-hidden="true">#</a> View Highscore</h3><p>The user selects the option to view the highscore. The user is then presented the top 10 highscores and names in the game.</p><h3 id="play-vs-player-as-host" tabindex="-1"><a class="header-anchor" href="#play-vs-player-as-host" aria-hidden="true">#</a> Play VS Player as Host</h3><p>The user selects the option to play VS another player as the host. The user sees a list of nearby devices that want to <u> VS Player as Joiner</u>. The user selects one of them, and then the game starts.</p><h3 id="play-vs-player-as-joiner" tabindex="-1"><a class="header-anchor" href="#play-vs-player-as-joiner" aria-hidden="true">#</a> Play VS Player as Joiner</h3><p>The user selects the option to join a <u> VS Player as Host</u> game. The system waits till another device hosting a game accepts playing against this user, then the game starts.</p><h2 id="fully-dressed" tabindex="-1"><a class="header-anchor" href="#fully-dressed" aria-hidden="true">#</a> Fully Dressed</h2><table><tr><th>Use-Case Name</th><td>Play VS Player as Host</td></tr><tr><th>Scope</th><td>The Ping Pong Game</td></tr><tr><th>Level</th><td>User-goal</td></tr><tr><th>Primary Actor</th><td>User</td></tr><tr><th>Stakeholders and Interests</th><td><ul><li><b>User</b>, wants to play the game against another user.</li></ul></td></tr><tr><th>Preconditions</th><td><ul><li>Two different devices running the system.</li><li>Both devices must support Bluetooth.</li><li>Both devices must be close to each other.</li><li>Bluetooth may not be used for anything else on the devices.</li></ul></td></tr><tr><th>Success Guarantee</th><td>The game has been played on both systems over Bluetooth.</td></tr><tr><th>Main Success Scenario</th><td><ol><li>The user selects the option to play against another player as the host.</li><li>The system tells the user to turn on Bluetooth on the device.</li><li>The user turns on Bluetooth on the device.</li><li>The system shows a list to the user of nearby Bluetooth devices that are trying to <u>Play VS Player as Joiner</u> (updated continuously).</li><li>The user selects the Bluetooth device she wants to play against.</li><li>The device connects to the selected device using Bluetooth.</li><li>The game starts.</li></ol></td></tr><tr><th>Extentions</th><td><ul style="${
    (0,server_renderer.ssrRenderStyle)({"list-style-type":"none","padding-left":"0"})
  }"><li> 2a. Bluetooth is already turned on. <ol style="${
    (0,server_renderer.ssrRenderStyle)({"margin-left":"16px"})
  }"><li>Continue to 4.</li></ol></li><li> 4a. No nearby devices found. <ol style="${
    (0,server_renderer.ssrRenderStyle)({"margin-left":"16px"})
  }"><li>Don&#39;t show an empty list, tell the user the system is searching for nearby devices, show the list when at least 1 device has been found.</li></ol></li><li> 6a. Can&#39;t connect to selected device. <ol style="${
    (0,server_renderer.ssrRenderStyle)({"margin-left":"16px"})
  }"><li>Show an error message to the user.</li><li>Take the user back to 4.</li></ol></li></ul></td></tr><tr><th>Special Requirements</th><td>The devices must support Bluetooth</td></tr><tr><th>Technology and Data Variations List</th><td><ul><li>Bluetooth</li><li>The protocol PPP (the Ping Pong Protocol) specifies which commands that are sent between the devices.</li></ul></td></tr><tr><th>Frequency of Occurrence</th><td>At most one at a time.</td></tr><tr><th>Miscellaneous</th><td><ul><li>Need to specify which Bluetooth version to support.</li><li>Strong connection to the use-case <u>Play VS Player as Joiner</u></li></ul></td></tr></table><h2 id="sequence-diagram" tabindex="-1"><a class="header-anchor" href="#sequence-diagram" aria-hidden="true">#</a> Sequence Diagram</h2><p>A sequence diagram for <u>Play VS Player as Host</u> is found in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sequence diagram for Play VS Player as Host." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant User\n\tparticipant Device\n\tUser->>Device: Play Bluetooth game as host\n\tDevice->>User: Please turn on Bluetooth\n\tUser->>Device: Turn on Bluetooth\n\tloop Until the user selects device\n\t\tDevice->>Device: Search for devices\n\t\tDevice->>User: Found devices\n\tend\n\tUser->>Device: Selected device\n\tDevice->>Device: Connect to selected device\n\tDevice->>User: Play!\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant User\n\tparticipant Device\n\tUser->>Device: Play Bluetooth game as host\n\tDevice->>User: Please turn on Bluetooth\n\tUser->>Device: Turn on Bluetooth\n\tloop Until the user selects device\n\t\tDevice->>Device: Search for devices\n\t\tDevice->>User: Found devices\n\tend\n\tUser->>Device: Selected device\n\tDevice->>Device: Connect to selected device\n\tDevice->>User: Play!\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/object-oriented-software-development/lab-1-example.html.vue?vue&type=template&id=c66bfd0c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/object-oriented-software-development/lab-1-example.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const lab_1_example_html = (__exports__);

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

/***/ 66:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7a2fef0c",
  "path": "/courses/object-oriented-software-development/lab-1-example.html",
  "title": "Lab 1 Example",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Actors",
      "slug": "actors",
      "children": []
    },
    {
      "level": 2,
      "title": "Goals",
      "slug": "goals",
      "children": []
    },
    {
      "level": 2,
      "title": "Use-Case Diagram",
      "slug": "use-case-diagram",
      "children": []
    },
    {
      "level": 2,
      "title": "Brief Descriptions",
      "slug": "brief-descriptions",
      "children": [
        {
          "level": 3,
          "title": "Play VS Computer",
          "slug": "play-vs-computer",
          "children": []
        },
        {
          "level": 3,
          "title": "Submit Highscore",
          "slug": "submit-highscore",
          "children": []
        },
        {
          "level": 3,
          "title": "View Highscore",
          "slug": "view-highscore",
          "children": []
        },
        {
          "level": 3,
          "title": "Play VS Player as Host",
          "slug": "play-vs-player-as-host",
          "children": []
        },
        {
          "level": 3,
          "title": "Play VS Player as Joiner",
          "slug": "play-vs-player-as-joiner",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Fully Dressed",
      "slug": "fully-dressed",
      "children": []
    },
    {
      "level": 2,
      "title": "Sequence Diagram",
      "slug": "sequence-diagram",
      "children": []
    }
  ],
  "filePathRelative": "courses/object-oriented-software-development/lab-1-example.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ }),

/***/ 7929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/lab-1-use-case-diagram.877ac84a.jpeg";

/***/ })

};
;
//# sourceMappingURL=4674.app.js.map