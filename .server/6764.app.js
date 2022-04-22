"use strict";
exports.id = 6764;
exports.ids = [6764];
exports.modules = {

/***/ 6151:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/android-development/project-work.html.vue?vue&type=template&id=d09f6182



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CompactInfo = (0,external_vue_.resolveComponent)("CompactInfo")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")

  _push(`<!--[--><h1 id="project-work" tabindex="-1"><a class="header-anchor" href="#project-work" aria-hidden="true">#</a> Project Work</h1><p>On this page you find information about the examination test <code>Project Work</code>.</p><h2 id="general-information" tabindex="-1"><a class="header-anchor" href="#general-information" aria-hidden="true">#</a> General information</h2>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CompactInfo, { infoPieces: {
    "Number of credits": "6",
    "Grades": ["Fail", "3", "4", "5"],
    "How to work": "In groups of three.",
    "Goal": "To learn how to implement an advanced Android application.",
    "Instructions": "Complete the different parts the project work consists of described on this page. You will implement an Android application, write a report describing your implementation and present your application to the rest of the class at the end of the course.",
    "Grading guidelines": "Available on the Project Grading Guidelines page.",
    "Re-examination": "Special presentation sessions will be available at the re-exam periods in June and in August. Contact the course coordinator for more details. Your work can also be graded at these re-exam period, but it will only be graded Fail/3.",
    "Help": "Ask the teacher for help at the lab sessions."
} }, null, _parent))
  _push(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>As project work, you should create a non-elementary Android application for smartphones &amp; tablets by completing the instructions in this document. The instructions have been divided into different parts that should be completed in order. We recommend you read through all the parts before you start working on the project.</p><p>The `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/courses/android-development/project-grading-guidelines/" }, {
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
  _push(` page contains some guidelines for how your work will be graded. We recommend you read through it every now and then to double check that you fulfill the requirements for the grade you are aiming for.</p><p>In your work you should also write a report explaining how your application is implemented. The report will be a living document throughout the course, meaning that you will continuously improve and add content to it as the course proceeds. The Word file <a href="files/project-report-template.docx">project-report-template.docx</a> contains more information about what the report should cover.</p><h2 id="part-1-joining-a-project-group" tabindex="-1"><a class="header-anchor" href="#part-1-joining-a-project-group" aria-hidden="true">#</a> Part 1: Joining a project group</h2><p>The project work should be carried out in groups of 3 students each. Let the examiner know who you are working with by joining one of the <a href="https://ju.instructure.com/courses/4825/groups" target="_blank" rel="noopener noreferrer">Project Groups`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas.</p><p>If you can&#39;t find someone to work with, send the course coordinator an email at <a href="mailto:Peter.Larsson-Green@ju.se">Peter.Larsson-Green@ju.se</a> using the template shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below (you just need to replace <code>XXX</code> with your specific values).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Template of message to be sent to the course coordinator if you can't find a partner to work with on your own. " }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Hi!

I need you to match me with a student for the project work in the course Android Development.

My name: XXX
My JU email: XXX@student.ju.se
I&#39;m an international student: XXX
The grade I&#39;m aiming for in this course: XXX
I got the following grades in the following pre-requisite courses (or similar):
 - Introduction to Programming: XXX
 - Data Structures and Algorithms: XXX
 - Object-Oriented Programming: XXX
 - Object-Oriented Software Development (with Design Patterns): XXX

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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Hi!\n\nI need you to match me with a student for the project work in the course Android Development.\n\nMy name: XXX\nMy JU email: XXX@student.ju.se\nI'm an international student: XXX\nThe grade I'm aiming for in this course: XXX\nI got the following grades in the following pre-requisite courses (or similar):\n - Introduction to Programming: XXX\n - Data Structures and Algorithms: XXX\n - Object-Oriented Programming: XXX\n - Object-Oriented Software Development (with Design Patterns): XXX\n\nThanks!\n")
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
  _push(`<p>If you don&#39;t care about who you are matched with, you just need to enter your name and JU email in the template. The course coordinator will then try to match you with a student with similar ambitions and skills as you.</p><div class="custom-container danger"><p class="custom-container-title">To the Swedish students</p><p>After you have joined a Project Group you should each day you work with the project write an entry in your diary. Do not only write about what you have done, but also write about what discussions you had, which disagreement you had, how the work was divided, how you felt about your project partners, what you think is fair/not fair etc.</p></div><h2 id="part-2-project-environment" tabindex="-1"><a class="header-anchor" href="#part-2-project-environment" aria-hidden="true">#</a> Part 2: Project Environment</h2><p>Before you start working on this part, you are recommended to:</p><ul><li>Read/View the following lectures: <ul><li>`)
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
  _push(` lecture. That way you will automatically document who has contributed with what by using Git and GitHub issues. But if you want to work together in another way, that is OK too, as long as you can show who has contributed with what in the project.</p><p>The <em>Worklog</em> chapter in <a href="files/project-report-template.docx">project-report-template.docx</a> shows an example of how you can report who has contributed with what in the project.</p><h2 id="part-3-specifying-the-application-idea" tabindex="-1"><a class="header-anchor" href="#part-3-specifying-the-application-idea" aria-hidden="true">#</a> Part 3: Specifying the application idea</h2><p>The next thing you should do is to decide what the application you want to create should do. Try to be creative and come up with an application someone wants to use, i.e. an application that solves a real-world problem of some kind. You could for example create an application for an organization you are member of (e.g. a football organization that needs to keep track of members, leaders, teams, training sessions, etc.), or simply an application you would like to use yourself. You can also try asking your family and friends if they need an Android application with some functionality that doesn&#39;t exist today.</p><p>Another way to come up with an application is to think of something you find boring/dangerous/time consuming, and then try to make it fun/safe/avoid it completely by using an Android application. For example, most people find it boring to wait in line. Maybe you can create an application that makes it fun to wait in line? Or an application that entirely eliminates the need to wait in line?</p><h3 id="suggestions" tabindex="-1"><a class="header-anchor" href="#suggestions" aria-hidden="true">#</a> Suggestions</h3><p>At the bottom of this page you find the chapter <em>Project idea: Flee Market Manager</em> that describes a real-world problem you can try to solve by creating an Android application. It can also be used as a guideline for how &quot;complicated&quot;/&quot;complex&quot; the application you create needs to be.</p><p>Another idea is to create an application that can control an embedded system of some kind (dish washer, microwave, robot vacuum cleaner, etc.), for example using Bluetooth. Feel free to create your own embedded system. It can for example be a simple prototype used as a proof of concept. For example, your application might be about controlling a smart lock on a door (a lock that can be locked/unlocked with a smartphone using Bluetooth), but you don&#39;t have any smart lock, so then you create your own embedded system that simulates one, e.g. one that consists of a Bluetooth module and a LED lamp that is turned on/off to indicate if the door is locked or not. The embedded system can also be simulated as another Android application running on another Android device, e.g. an application showing a red/green circle indicating if the smart lock is locked or not.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You will not get any credits for doing things not related to the intended learning outcomes in this course. To build an embedded system is out of scope for this course, so only do that if you are willing to spend your own spare time on it.</p></div><div class="custom-container tip"><p class="custom-container-title">Robots</p><p>The course coordinator has 6 <a href="http://osoyoo.com/2017/08/06/osoyoo-robot-car-diy-introduction/" target="_blank" rel="noopener noreferrer">Robot Car Starter Kit`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>s he can borrow to the Project Groups who want to build an Android application they can use to control a robot with. Note that just controlling the robot using Bluetooth is not enough, but some additional functionality is required, such as recording how the robot has been driving, re-play how the robot has been driving, manage logs, etc.</p></div><p>If you need some special equipment (such as Beacons, modules for an embedded system, some smart devices, etc.), the school might be able to provide you with it (must be returned to the school at the end of the course). Email your needs to the course coordinator at <a href="Peter.Larsson-Green@ju.se">Peter.Larsson-Green@ju.se</a> and he will look into it and get back to you.</p><h3 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h3><p>The application you create must make use of at least one other device in addition to the Android device your application is running on. This could be:</p><ul><li>Any other device you can communicate with using Bluetooth</li><li>Bluetooth beacons</li><li>Another Android device running the same application, e.g. using Bluetooth to sync data</li><li>A server on the Internet, such as: <ul><li>A <a href="https://firebase.google.com/docs/firestore/" target="_blank" rel="noopener noreferrer">Cloud Firestore`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> database (or any Backend-as-a-Service you want)</li></ul></li></ul><p>The application may also not be too simple. For example, creating the simplest possible all-to-all chat application synchronizing chat messages using Firestore will not be accepted. But often ideas like this one can quite easily be made more complex by adding functionalities to it. For example, in this case one could also add support for one-to-one chats, group chats, friends chat, etc.</p><p>Describe your application by starting to write on <a href="files/project-report-template.docx">the project report</a>. Especially, visualize which components your solution consists of (android device running your application + at least one other device) and how they make use of each other. You should especially write as much as possible for now in the Introduction chapter and the Overview chapter.</p><p>Note that your report is a living document throughout the course. What you write now will most likely be changed later when you come up with ideas for improvements, so do not spend too much time on details now. Just write it detailed enough so the reader gets a rough understanding of everything, e.g. start out simple. But write it properly (sentences, upper/lower case characters, etc.), of course!</p><div class="custom-container danger"><p class="custom-container-title">To the Swedish students</p><p>Do not forget to write an entry in your diary each day you have done some work on your project. Do not only write about what you have done, but also write about what discussions you had, which disagreement you had, how the work was divided, how you felt about your project partners, what you think is fair/not fair etc.</p></div><h2 id="part-4-creating-mockups" tabindex="-1"><a class="header-anchor" href="#part-4-creating-mockups" aria-hidden="true">#</a> Part 4: Creating Mockups</h2><p>Start with this part of the Project Work when Martin Lindh has had his lecture with you about graphical user interface design and prototyping.</p><p>Create mockups of the graphical user interface. Then present these to &quot;the rest of the class&quot; (in smaller groups) at one of the following sessions:</p><ul><li>7 February Monday 15:00-15:45</li><li>7 February Monday 16:00-16:45</li><li>8 February Tuesday 10:00-10:45</li><li>8 February Tuesday 11:00-11:45</li></ul><p>To distribute you, one from each project group should join the corresponding <a href="https://ju.instructure.com/courses/4825/groups" target="_blank" rel="noopener noreferrer">Mockup Presentation Session`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> group on Canvas. At the presentation, you will receive feedback on your mockups from Martin and the audience.</p><p>After having viewed your presentation, the audience should have a very good understanding of:</p><ol><li>The problem you try to solve</li><li>How you intend to solve the problem</li><li>How users will use the app to solve the problem (i.e. show your mockups)</li></ol><p>Your presentation (including feedback from the audience and Martin) may take at most 9 minutes. Using 3-4 minutes for the presentation and 5-6 minutes for feedback and discussions is probably a good balance.</p><div class="custom-container tip"><p class="custom-container-title">Not examination!</p><p>The mockup presentation sessions are not part of any examination test, they are just learning activities to help you get better at designing graphical user interfaces, so attendance is not mandatory, but we strongly recommend all groups to attend one session so you can get some feedback on your graphical user interface from Martin.</p></div><p>After the presentation session, go to <a href="https://doodle.com/mm/peterlarssongreen719/android-project-meeting" target="_blank" rel="noopener noreferrer">the examiner&#39;s Bookable Doodle Calendar`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> and choose a meeting slot you can meet him. At the meeting, present what you have written in the report so far, and what your mockups look like. You only have 15 minutes to do this, so be sure to come prepared and present it in an efficient way. Before the meeting, submit the assignment <a href="https://ju.instructure.com/courses/4825/assignments/25232" target="_blank" rel="noopener noreferrer">Application Idea`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas with the current version of your report and your mockups.</p><p>The examiner will either approve or disapprove your application idea. If he approves it, he will approve you on the assignment <a href="https://ju.instructure.com/courses/4825/assignments/25232" target="_blank" rel="noopener noreferrer">Application Idea`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas. If he disapproves it, you need to come back another time (use the examiner&#39;s Bookable Doodle Calendar again) after you have changed it according to the examiner&#39;s feedback. If you haven&#39;t been approved on it after the second meeting, you can still pass the Project Work, but the examiner won&#39;t have any more time trying to estimate if the application you create will be advanced enough for this course until you submit the final version of it at the end of the course.</p><div class="custom-container tip"><p class="custom-container-title">Note!</p><p>It may take some time before you manage to get a meeting with the examiner. If you want, you can start implementing the application (continue on next part of the Project Work) before the examiner has approved your application idea. If he disapproves it, it is most likely because your application is a bit too simple to implement, so the changes you need to do will most likely be to just add functionality.</p></div><h2 id="part-5-implementing-the-application" tabindex="-1"><a class="header-anchor" href="#part-5-implementing-the-application" aria-hidden="true">#</a> Part 5: Implementing the Application</h2><div class="custom-container danger"><p class="custom-container-title">Note!</p><p><strong>Before you start implementing the application you must complete and present the `)
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
  _push(` to a teacher!</strong></p><p>If a student hasn&#39;t passed the <code>Laboratory Work</code> when you submit your project work for grading at the end of the course, that student will be taken out of the group and forced to do her own project from scratch.</p><p>If a student presents her laboratory work at the end of the course, she will not get any credits for her contribution to the project work up until that point in time, which most likely means she won&#39;t pass the project work.</p><p>PLEASE, make this easy for all of us: complete and present your <code>Laboratory Work</code> before continuing past this point. <strong>The examiner has no problem failing students that can&#39;t follow this simple instruction.</strong></p></div><p>Start implementing your application using Android Studio. The first Android lectures will primarily focus on how to implement the graphical user interface in Android applications, so you are recommended to start by implementing that part of your application. Learning how to properly implement the graphical user interface (properly handling runtime configuration changes) is also the most difficult part of learning Android development.</p><p>Initially, see it as you are creating a prototype of your application, where you only bother to implement the GUI. This is quite common to do for bigger applications, where the GUI/user experience needs to be evaluated before the actual application is implemented.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If a user should be able to login to your application (which could be the case if you use Cloud Firestore), you need to have text boxes where the user can enter her credentials (i.e. her username and password) and a Login-button, but for the prototype you do not have to actually login the user when she presses the Login-button (you don&#39;t need to use Firebase at all). Instead, hardcode the correct credentials for a specific user in the prototype, and verify the entered credentials directly in your application.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you need to fetch data from a REST API, hardcode the data directly in the Android application.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you need to communicate with an embedded system using Bluetooth, emulate the communication with the embedded system without using Bluetooth at all.</p></div><p>As more Android features are covered at the lectures in the course, start to use them in your Android application, so your prototype application slowly turns into the final version of your application. For example, the first version of your prototype might note care about runtime configuration changes at all, but when those have been covered in the course, improve your activities by starting to handle them. Or maybe some of you code should run in a service instead of an activity? Then you can initially put that code in an activity, and then refactor it to a service when those have been covered in the course.</p><div class="custom-container warning"><p class="custom-container-title">Lectures won&#39;t cover everything</p><p>The lectures in the course about Android will not necessarily cover everything you need to know to implement your specific Android application; you might need to learn some things on your own. Skipping the Android lectures in the course and learn everything on your own (e.g. form the course book or from the Google&#39;s Android developers guides/documentation) is OK too. The Android lectures aim at teaching you the most common parts of Android most applications have use of.</p></div><div class="custom-container tip"><p class="custom-container-title">Divide and Conquer!</p><p>You are three students in the group. To be efficient you somehow need to distribute the work among you. You all need to learn the basics of Android development, and you should all have an excellent understanding of how your entire application works at the end of the course (including the parts of the application the other two have done), but you are recommended to specialize in different parts of Android, and then combine your skills to create an excellent application. For example, one of you might choose to become an expert in how to handle runtime configuration changes, another one might choose to become an expert in how to handle Bluetooth communication, and the third one might choose to become an expert in how to store your data in a database, or how to properly use fragments, etc..</p><p>Sitting three students at one computer and only one writing the code is not efficient and will most likely prevent you from finishing your work on time.</p></div><p>We recommend you to not start too advanced. To pass the course, it is more important that the functionality you implement works properly than that the graphical user interface looks beautiful. Therefore, it is probably better to start with a simple graphical user interface and then improve it at the end of the course if you have time for it.</p><p>If you want to get grade 4 or 5, you must come and see the examiner for another meeting to discuss your progress. Your work will not be graded, but this is an extra chance for you to get some feedback on your work before the final submission at the end of the course. If you are aiming for grade 3 you are welcome to book one of these meetings as well, but it is only mandatory for grade 4 and 5. The meeting should take place year week 9, 10 or beginning of 11. Use <a href="https://doodle.com/mm/peterlarssongreen719/android-project-meeting" target="_blank" rel="noopener noreferrer">the examiner&#39;s Bookable Doodle Calendar`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> again the same way as before. After the meeting, the examiner will approve you on the assignment <a href="https://ju.instructure.com/courses/4825/assignments/25233" target="_blank" rel="noopener noreferrer">Halfway Meeting`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas.</p><div class="custom-container danger"><p class="custom-container-title">Remember!</p><p>Just implementing your application idea is not good enough to pass the project work. As you can read on the <a href="./project-grading-guidelines">Project Grading Guidelines</a> page, you must also gather some points by implementing &quot;extra functionalities&quot; to pass.</p></div><h2 id="part-6-presentation" tabindex="-1"><a class="header-anchor" href="#part-6-presentation" aria-hidden="true">#</a> Part 6: Presentation</h2><p>Your work should be presented to &quot;the rest&quot; of the class (in smaller groups) at the end of course. All members in the group need to be present at the presentation. At the presentation, you should:</p><ul><li>Explain the problem you have tried to solve with your application.</li><li>Explain how users can use your application to solve the problem.</li><li>Show how users will use the application (a demonstration of its features).</li></ul><p>You may structure your presentation however you want, as long as you present it in a good way. Showing the figures you have in your report is an excellent idea.</p><p>The presentation is preferably carried out by having one person interacting with the application (shown on a big screen), and another one explaining what the first person is doing/telling the first person what to do.</p><p>The presentation should take at most 15 minutes. There should be a short time for questions from the audience at the end (included in the 15 minutes). Plan and rehearse your presentation in advance, so no time is wasted on <em>Oh, what can I show you next? Hmm...</em> or <em>Oh, that should not have happened. It has never happened before. Hmm...</em>.</p><p>The reasons you should present your application to the rest of the class are two-folded:</p><ul><li>To learn what type of Android applications you can create (you have all taken the same course, so you should all be able to create the applications the other students have created).</li><li>To practice your presentation technique. This is not limited to improving your speaking skills, but also includes improving your skills to explain how something works to others, and to prepare and carry out presentations (your future customers will appreciate such skills).</li></ul><p>Join one of the <a href="https://ju.instructure.com/courses/4825/groups#" target="_blank" rel="noopener noreferrer">Project Presentation Sessions`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas to let the examiner know which project presentation session you want to attend to. Only one in your Project Group should do this.</p><p>After you have presented your work the teacher will mark you as approved on the assignment <a href="https://ju.instructure.com/courses/4825/assignments/25234" target="_blank" rel="noopener noreferrer">Presentation`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on Canvas.</p><h2 id="part-7-final-submission" tabindex="-1"><a class="header-anchor" href="#part-7-final-submission" aria-hidden="true">#</a> Part 7: Final Submission</h2><p>When you are done with your project work, upload it to Canvas for grading by submitting the assignment <a href="https://ju.instructure.com/courses/4825/assignments/25235" target="_blank" rel="noopener noreferrer">Final Submission`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Submit your work per the instructions on that page (read them in advance!).</p><h2 id="project-idea-flee-market-manager" tabindex="-1"><a class="header-anchor" href="#project-idea-flee-market-manager" aria-hidden="true">#</a> Project idea: Flee Market Manager</h2><p>A Flee Market is a marketplace where people can sell things. These exists in different variations, but things that usually are sold at a flea market includes:</p><ul><li>Used things</li><li>Cheap things</li><li>Home made things</li></ul><p>The people who sell things at the flea market usually need to pay the flea market organizer some money for selling their things at the market. There exist different pricing models for this, such as:</p><ul><li>A fixed amount of money (e.g. 5 SEK/sold item or 5 SEK/month).</li><li>A percentage of what they sell for (e.g. 5% of the price of each sold item).</li></ul><p>An example of a flea market in Sweden is a Klädbytardag (&quot;exchanging of clothes day&quot;). Those work like this:</p><ol><li>A parent that wishes to sell her children&#39;s outgrown clothes at the Klädbytardagen register itself at the flea market organizer.</li><li>The flea market organizer gives the parent a unique parent number (such as 1, 2, 3, and so on).</li><li>The parent puts notes on the children&#39;s clothes that should be sold at the flea market containing the unique parent number and the price the clothes should be sold for (whole SEK such as 5, 10, 22, and similar).</li><li>The parent hands over the children&#39;s clothes to the flea market organizer.</li><li>At the flea market day, customers (other parents) can come to organizer&#39;s facility to browse and buy clothes other parents have handed over.</li><li>At the checkout, the flea market organizer looks at the notes on the clothes the customer wants to buy to compute what the customer needs to pay and to remember how much each parent has sold their clothes for.</li><li>At the end of the day, each parent can come to the flea market and collect their clothes that weren&#39;t sold and the money they have earned for their clothes that was sold. The flea market organizer keeps 20% of the money, so the parent only gets back 80% of what her clothes was sold for.</li></ol><p>At the checkout, an Android app could be used to keep track of which clothes (and for how much) a parent has sold clothes for, and how much each customer should pay. At the end of the day, an Android app could also be used to compute how much each parent should get back for the sold clothes. To do this in a good way, the Android app could also be responsible for keeping track of which parents that are selling things, and which their unique parent numbers are.</p><h3 id="challenges-opportunities" tabindex="-1"><a class="header-anchor" href="#challenges-opportunities" aria-hidden="true">#</a> Challenges / &quot;Opportunities&quot;</h3><h4 id="synchronizing-data" tabindex="-1"><a class="header-anchor" href="#synchronizing-data" aria-hidden="true">#</a> Synchronizing data</h4><p>Their usually exists multiple checkouts at the market place, and each checkout will have one device running the Android application. At the end of the day, when computing how much each parent has sold, all data about the selling needs to be accessible from a single device. This means that the data either:</p><ul><li>Needs to be stored at a centralized place, such as a Firestore database. As you understand, it is important that the Android application still can function and register which clothes that has been sold without an Internet connection.</li><li>Needs to be synchronized across multiple devices running the application at the end of the day (Bluetooth?).</li></ul><h4 id="using-the-camera" tabindex="-1"><a class="header-anchor" href="#using-the-camera" aria-hidden="true">#</a> Using the camera</h4><p>One possibility is to not only store the name of the parent in the application/Firebase, but also a picture of the parent taken with the camera on the device. This could be useful for the organizers to identify parents.</p><p>Another possibility might be to replace the unique parent numbers with QR codes. This could speed up the checkout process (scanning the QR code with a camera instead of entering the seller number manually). Maybe the price for the clothes could be read by the camera as well somehow?</p><h4 id="using-tags" tabindex="-1"><a class="header-anchor" href="#using-tags" aria-hidden="true">#</a> Using Tags</h4><p>Instead of using QR codes, maybe RFID/Bluetooth tags can be used to speed up the checkout process?</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/project-work.html.vue?vue&type=template&id=d09f6182

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/android-development/project-work.html.vue

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

/***/ 6666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1f80b6dc",
  "path": "/courses/android-development/project-work.html",
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
      "title": "Part 3: Specifying the application idea",
      "slug": "part-3-specifying-the-application-idea",
      "children": [
        {
          "level": 3,
          "title": "Suggestions",
          "slug": "suggestions",
          "children": []
        },
        {
          "level": 3,
          "title": "Requirements",
          "slug": "requirements",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 4: Creating Mockups",
      "slug": "part-4-creating-mockups",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 5: Implementing the Application",
      "slug": "part-5-implementing-the-application",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 6: Presentation",
      "slug": "part-6-presentation",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 7: Final Submission",
      "slug": "part-7-final-submission",
      "children": []
    },
    {
      "level": 2,
      "title": "Project idea: Flee Market Manager",
      "slug": "project-idea-flee-market-manager",
      "children": [
        {
          "level": 3,
          "title": "Challenges / \"Opportunities\"",
          "slug": "challenges-opportunities",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/android-development/project-work.md",
  "git": {
    "updatedTime": 1646647089000
  }
}


/***/ })

};
;
//# sourceMappingURL=6764.app.js.map